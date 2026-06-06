#!/usr/bin/env node

/**
 * validate.js
 * Checks all .md files for schema compliance.
 * Run: node scripts/validate.js
 */

const fs = require('fs');
const path = require('path');

// Reuse frontmatter parser from build-graph
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { frontmatter: null };
  // Minimal parse — just extract key: value pairs at top level
  const raw = match[1];
  const result = {};
  raw.split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim();
    if (key && !key.startsWith(' ')) result[key] = val;
  });
  return { frontmatter: result };
}

function walkDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    const skip = ['node_modules', '.git', 'public', 'scripts', '.github'];
    if (stat.isDirectory() && !skip.includes(file)) {
      walkDir(filePath, fileList);
    } else if (file.endsWith('.md') && file !== 'README.md') {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const VALID_LAYERS = ['mycelium', 'roots', 'knowledge', 'code', 'map', 'flowers-fruits', 'meta'];
const VALID_TYPES = ['layer', 'branch', 'philosophy', 'leaf', 'inference', 'feedback-entry', 'principle'];
const VALID_INSTRUMENTS = ['philosophy', 'science', 'lived-experience', 'myth-form', 'religion', 'multi'];

function validate() {
  const repoRoot = path.join(__dirname, '..');
  const files = walkDir(repoRoot);
  const issues = [];
  const ids = new Set();

  files.forEach(filePath => {
    const rel = path.relative(repoRoot, filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const { frontmatter } = parseFrontmatter(content);

	if (!frontmatter) {
      return; // Skip files without frontmatter — not all .md files are nodes
    }

    // Required fields
    if (!frontmatter.id) issues.push({ file: rel, issue: 'Missing required field: id' });
    if (!frontmatter.layer) issues.push({ file: rel, issue: 'Missing required field: layer' });
    if (!frontmatter.type) issues.push({ file: rel, issue: 'Missing required field: type' });
    if (!frontmatter.title) issues.push({ file: rel, issue: 'Missing required field: title' });

    // Valid values
    if (frontmatter.layer && !VALID_LAYERS.includes(frontmatter.layer)) {
      issues.push({ file: rel, issue: `Invalid layer: "${frontmatter.layer}"` });
    }
    if (frontmatter.type && !VALID_TYPES.includes(frontmatter.type)) {
      issues.push({ file: rel, issue: `Invalid type: "${frontmatter.type}"` });
    }
    if (frontmatter.instrument && !VALID_INSTRUMENTS.includes(frontmatter.instrument)) {
      issues.push({ file: rel, issue: `Invalid instrument: "${frontmatter.instrument}"` });
    }

    // Duplicate IDs
    if (frontmatter.id) {
      if (ids.has(frontmatter.id)) {
        issues.push({ file: rel, issue: `Duplicate ID: "${frontmatter.id}"` });
      }
      ids.add(frontmatter.id);
    }

    // Date format
    const dateFields = ['last-updated', 'added-on', 'date', 'harvested-on'];
    dateFields.forEach(field => {
      if (frontmatter[field] && !/^\d{4}-\d{2}-\d{2}$/.test(frontmatter[field])) {
        issues.push({ file: rel, issue: `Invalid date format for ${field}: "${frontmatter[field]}" (expected YYYY-MM-DD)` });
      }
    });
  });

  if (issues.length === 0) {
    console.log(`✓ All ${files.length} files valid`);
    return;
  }

  console.error(`✗ ${issues.length} issue(s) found:\n`);
  issues.forEach(({ file, issue }) => {
    console.error(`  ${file}\n    → ${issue}`);
  });
  process.exit(1);
}

validate();

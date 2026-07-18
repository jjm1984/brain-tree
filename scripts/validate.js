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
  // \r?\n tolerates both LF and CRLF line endings -- the working tree can end up
  // with either depending on git's core.autocrlf and what last touched a file
  // (checkout/rebase can silently convert LF to CRLF), and this parser previously
  // required a literal \n, which meant CRLF files failed to match at all and were
  // silently skipped as "not a node" rather than validated.
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
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

const VALID_LAYERS = ['mycelium', 'roots', 'knowledge', 'code', 'map', 'flowers-fruits', 'meta', 'skills-meta'];
const VALID_TYPES = ['layer', 'branch', 'philosophy', 'leaf', 'inference', 'feedback-entry', 'principle', 'skill-reference', 'meta-skill'];
const VALID_INSTRUMENTS = ['philosophy', 'science', 'lived-experience', 'myth-form', 'religion', 'multi'];

// SKILL.md files (skills/SKILL-CREATION.md) are a deliberately different artifact,
// not a tree node -- short, in-the-moment instruments with their own frontmatter
// contract (skill/title/for/written-for/grounded-in/full-reference/status), not
// id/layer/type. Validated against that contract instead of the universal schema.
const SKILL_REQUIRED_FIELDS = ['skill', 'title', 'for', 'written-for', 'grounded-in', 'full-reference', 'status'];
// description is required by SKILL-CREATION.md but reported separately (not blocking)
// since it postdates the first two skills built before the spec existed.
const SKILL_RECOMMENDED_FIELDS = ['description'];

function validate() {
  const repoRoot = path.join(__dirname, '..');
  const files = walkDir(repoRoot);
  const issues = [];
  const warnings = [];
  const ids = new Set();
  const skillIds = new Set();

  files.forEach(filePath => {
    const rel = path.relative(repoRoot, filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const { frontmatter } = parseFrontmatter(content);

	if (!frontmatter) {
      return; // Skip files without frontmatter — not all .md files are nodes
    }

    if (path.basename(filePath) === 'SKILL.md') {
      // frontmatter[field] === undefined means the key never appeared at all.
      // An empty string means the key appeared with a block-style YAML value
      // (e.g. `grounded-in:` followed by indented `- item` lines) -- present,
      // just not inline-parseable by this minimal parser. Only true absence
      // should fail the required-field check.
      SKILL_REQUIRED_FIELDS.forEach(field => {
        if (frontmatter[field] === undefined) issues.push({ file: rel, issue: `Missing required field: ${field}` });
      });
      SKILL_RECOMMENDED_FIELDS.forEach(field => {
        if (frontmatter[field] === undefined) warnings.push({ file: rel, issue: `Missing recommended field: ${field} (per skills/SKILL-CREATION.md)` });
      });
      if (frontmatter.skill) {
        if (skillIds.has(frontmatter.skill)) {
          issues.push({ file: rel, issue: `Duplicate skill ID: "${frontmatter.skill}"` });
        }
        skillIds.add(frontmatter.skill);
      }
      if (frontmatter['written-for'] && !['human', 'agent', 'multi'].includes(frontmatter['written-for'])) {
        issues.push({ file: rel, issue: `Invalid written-for: "${frontmatter['written-for']}" (expected human, agent, or multi)` });
      }
      const dateFields = ['last-updated', 'added-on'];
      dateFields.forEach(field => {
        if (frontmatter[field] && !/^\d{4}-\d{2}-\d{2}$/.test(frontmatter[field])) {
          issues.push({ file: rel, issue: `Invalid date format for ${field}: "${frontmatter[field]}" (expected YYYY-MM-DD)` });
        }
      });
      return; // SKILL.md doesn't carry id/layer/type/instrument -- skip the universal checks below
    }

    // Required fields (=== undefined, not falsy -- see the SKILL.md block above for why)
    if (frontmatter.id === undefined) issues.push({ file: rel, issue: 'Missing required field: id' });
    if (frontmatter.layer === undefined) issues.push({ file: rel, issue: 'Missing required field: layer' });
    if (frontmatter.type === undefined) issues.push({ file: rel, issue: 'Missing required field: type' });
    if (frontmatter.title === undefined) issues.push({ file: rel, issue: 'Missing required field: title' });

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

  if (warnings.length > 0) {
    console.warn(`⚠ ${warnings.length} warning(s) (non-blocking):\n`);
    warnings.forEach(({ file, issue }) => {
      console.warn(`  ${file}\n    → ${issue}`);
    });
    console.warn('');
  }

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

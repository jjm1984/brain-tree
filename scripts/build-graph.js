#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple frontmatter extractor — gets top-level key: value pairs only
// Nested YAML is left as raw strings and not traversed (avoiding infinite loops)
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const raw = match[1];
  const result = {};
  const lines = raw.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim() || line.startsWith(' ') || line.startsWith('\t')) continue;
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim();
    if (!key) continue;
    
    if (val === '' || val === '|' || val === '>') {
      // Collect indented block as array or skip
      const items = [];
      while (i + 1 < lines.length && (lines[i+1].startsWith('  ') || lines[i+1].startsWith('\t'))) {
        i++;
        const item = lines[i].trim();
        if (item.startsWith('- ')) items.push(item.slice(2).trim());
      }
      if (items.length > 0) result[key] = items;
    } else if (val.startsWith('[') && val.endsWith(']')) {
      result[key] = val.slice(1, -1).split(',').map(s => s.trim()).filter(Boolean);
    } else if (val === 'true') result[key] = true;
    else if (val === 'false') result[key] = false;
    else result[key] = val.replace(/^['"]|['"]$/g, '');
  }
  return result;
}

function walkDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const skip = new Set(['node_modules', '.git', 'public', 'scripts', '.github']);
  for (const file of fs.readdirSync(dir)) {
    if (skip.has(file)) continue;
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkDir(full, fileList);
    else if (file.endsWith('.md') && file !== 'README.md') fileList.push(full);
  }
  return fileList;
}

function main() {
  const root = path.join(__dirname, '..');
  const files = walkDir(root);
  const nodes = [];
  const errors = [];

  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fm = parseFrontmatter(content);
      if (!fm.id) continue;
      nodes.push({
        id: fm.id,
        layer: fm.layer || 'unknown',
        type: fm.type || 'unknown',
        title: fm.title || fm.id,
        state: fm.state || null,
        instrument: fm.instrument || null,
        lastUpdated: fm['last-updated'] || null,
        addedOn: fm['added-on'] || null,
        filePath: path.relative(root, filePath),
        connections: fm.connections || null
      });
    } catch (e) {
      errors.push({ file: path.relative(root, filePath), error: e.message });
    }
  }

  // Build edges from top-level connection fields
  const nodeIds = new Set(nodes.map(n => n.id));
  const edges = [];

  for (const node of nodes) {
    const fm = node.connections;
    const addEdge = (src, tgt, type) => {
      if (tgt && nodeIds.has(tgt)) edges.push({ source: src, target: tgt, type });
    };
    if (!fm) continue;
    const supports = Array.isArray(fm.supports) ? fm.supports : (fm.supports ? [fm.supports] : []);
    const challenges = Array.isArray(fm.challenges) ? fm.challenges : (fm.challenges ? [fm.challenges] : []);
    supports.forEach(t => addEdge(node.id, t, 'supports'));
    challenges.forEach(t => addEdge(node.id, t, 'challenges'));
  }

  // Strip connections from output nodes (redundant with edges)
  nodes.forEach(n => delete n.connections);

  // Check duplicates
  const seen = {};
  nodes.forEach(n => { seen[n.id] = (seen[n.id] || 0) + 1; });
  const dupes = Object.entries(seen).filter(([,c]) => c > 1).map(([id]) => id);
  if (dupes.length) console.warn('⚠️  Duplicate IDs:', dupes.join(', '));

  const graph = {
    nodes,
    edges,
    meta: { nodeCount: nodes.length, edgeCount: edges.length, lastBuilt: new Date().toISOString() }
  };

  const out = path.join(root, 'public', 'graph.json');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(graph, null, 2));
  console.log(`✓ graph.json: ${nodes.length} nodes, ${edges.length} edges`);
  if (errors.length) errors.forEach(e => console.warn(`  ⚠️ ${e.file}: ${e.error}`));
  if (dupes.length) process.exit(1);
}

main();

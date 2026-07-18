---
id: staging-protocol
layer: meta
type: principle
title: Staging and Multi-File Dependency Protocol
last-updated: 2026-07-18
added-on: 2026-07-18
---

# Staging and Multi-File Dependency Protocol

Drive is staging, not canonical (see CLAUDE.md / project instructions).
This file governs how content moves from a chat session through Drive
to a GitHub commit by Claude Code, specifically for sessions that
produce more than one file.

## Why this exists

Prior to 2026-07-18, multi-file sessions relied on the chat
hand-writing a "process these files in this order" prompt at the end
of a session, reconstructed from memory. This is fragile — it depends
on the chat instance remembering the full dependency graph correctly,
and gives Claude Code no machine-readable way to verify order or
detect a missing prerequisite.

## The manifest

Any session that stages more than one file MUST include a manifest
file, named `ai-brain-manifest-YYYY-MM-DD-[topic-slug].json`, uploaded
alongside the content files it describes.

### Manifest schema

```json
{
  "manifest_id": "manifest-YYYY-MM-DD-[topic-slug]",
  "date": "YYYY-MM-DD",
  "topic": "short description",
  "files_in_order": [
    {
      "file": "exact-filename.json",
      "depends_on": [],
      "creates_nodes": ["node-id-1", "node-id-2"],
      "status": "pending"
    },
    {
      "file": "exact-filename-2.json",
      "depends_on": ["exact-filename.json"],
      "creates_nodes": ["node-id-3"],
      "references_nodes": ["node-id-1"],
      "status": "pending"
    }
  ],
  "superseded_files": [
    {
      "file": "old-incomplete-filename.json",
      "file_id": "drive-file-id-if-known",
      "superseded_by": "exact-filename.json",
      "reason": "short reason",
      "safe_to_delete": true
    }
  ],
  "claude_code_instructions": [
    "Process files_in_order sequentially. Do not begin a file whose depends_on list is not fully processed.",
    "Update the status field in THIS manifest (pending -> processed -> failed) as you go, and commit the updated manifest alongside the content commits so the record persists.",
    "If a file fails or is skipped, stop and report rather than proceeding past a broken dependency.",
    "superseded_files are for tracking only -- do not attempt to delete Drive files; that requires manual action and is listed separately for J."
  ]
}
```

### Rules

- **One manifest per session**, even if the session produces many
  content files. If a later session adds to an earlier one, it gets
  its own manifest and may list the earlier session's files as
  external dependencies (`depends_on` can reference files from a
  different manifest by filename).
- **`creates_nodes` and `references_nodes` are required**, not
  optional — this is what lets Claude Code (or a future automated
  process) verify a dependency actually exists before processing a
  file that needs it.
- **Superseded files are tracked in the manifest, not just mentioned
  in prose.** Chat cannot delete Drive files. The manifest's
  `superseded_files` list is the durable record — batch these for
  manual cleanup rather than flagging them ad hoc mid-conversation.
- **Status updates are round-tripped.** Claude Code should commit the
  updated manifest (with statuses flipped to `processed`) back into
  the repo's session-history record, not just silently consume it.
  This makes "what's already been committed" answerable by reading the
  repo, not by asking the chat to remember.

## Read-before-extending rule

Before generating content that extends, amends, or supersedes an
existing node, the chat instance must retrieve that node's actual
current content (via `project_knowledge_search` or a repo read) rather
than working from a prior summary, memory, or assumption about what it
contains. This rule exists because of a live error in this project:
new content was drafted against an assumed reading of an existing leaf
before the leaf was actually checked, and had to be corrected mid-session.

## Content rejection record

When a candidate claim is investigated and found not to hold up
(failed replication, contested beyond its evidence, definitively
ruled out), record the rejection explicitly in the relevant node or a
provenance note — do not simply omit it. The goal is that a future
session doesn't re-spend research effort re-discovering the same dead
end. See the power-posing/Cuddy example (2026-07-18) for the pattern:
a short note naming what was checked, what was found, and why it
wasn't included.

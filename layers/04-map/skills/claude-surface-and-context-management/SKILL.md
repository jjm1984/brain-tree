---
id: skill-claude-surface-and-context-management
name: ai-surface-and-context-management
title: Picking the Right Claude Surface and Managing Context Within It
description: Rules for choosing which Claude surface (Chat, Cowork, Claude Code, Projects) fits a given piece of work, and for managing context/token hygiene correctly once on that surface. Use when starting new AI-assisted work and unsure which surface to use, or when a long-running session's context/token usage needs cleaning up.
for: a testable criterion — use whenever choosing a Claude surface for new work, or when a session's token/context usage needs auditing. Applies regardless of task domain; the criterion is which surface matches the deliverable shape, not what the task is about.
written-for: human
keywords: [claude, ai tools, chat, cowork, claude code, projects, context management, token hygiene, session hygiene, CLAUDE.md]
status: forming — provisional, fact-checked against official docs 2026-07-19
skill_status: gap — freshly fact-checked 2026-07-19, no documented track record yet of these rules actually being lived consistently; revisit once tested
source-backlog: backlog/ai-tools.md ("21 Claude Habits" cluster, token-management/session-hygiene items)
supersedes: skill-ai-session-hygiene (draft inside ai-brain-session-2026-07-18-skills-layer-resolution-and-placement.json — this file replaces that draft; do not build both)
parent_map: null
parent_map_status: orphan-pending
anticipated_future_parent: no Map node currently exists for "how I use AI tools" — flagged as a possible future Map node in its own right given backlog volume on this topic
fact-check-performed: 2026-07-19, via code.claude.com, support.claude.com, claude.com official docs and blog
grounded-in: []
full-reference: reference.md
---

# Picking the Right Claude Surface and Managing Context Within It

TASK: Pick the right Claude surface for a given piece of work, and manage context/tokens correctly on whichever surface is used.

## Surface selection

- **R1.** Use Chat for a question, explanation, brainstorm, or gut-check — no file/deliverable needed. ✓ (Anthropic's own stated distinction)
- **R2.** Use Cowork for a deliverable — a file someone will open, a deck someone will present, work spanning multiple tools/files, or a multi-step task. ✓
- **R3.** Use Claude Code for building/testing actual code from a terminal-based agentic workflow. ✓
- **R4.** Projects wrap either Chat or Cowork with persistent instructions + files, importable across both. ✓

## Context & token hygiene

- **R5.** Upload reference material once via Projects — never re-paste the same file into a conversation. ✓
- **R6.** Turn off web search, Research, and MCP connectors when a task doesn't need them — they consume tokens on every turn even when idle. ✓
- **R7.** Convert long or complex (multi-column, table-heavy) PDFs to markdown before uploading. ✓~ (consistent independent technical consensus, not an official Anthropic doc; doesn't apply to scanned/image PDFs, which need OCR regardless of format)
- **R8.** Route tasks by complexity across the current model tier lineup — default tier for most work, escalate to the top tier only for hard multi-step reasoning, drop to the fastest/cheapest tier for high-volume simple tasks. ✓~ (the tiering principle is solid; don't hardcode specific model version names here since they change — check the current lineup at time of use)
- **R9.** Spread heavy work across the rolling ~5-hour usage window rather than batching it into one sitting. ✓
- **R10.** Don't manually restart long conversations on a message-count schedule — paid plans with code execution enabled auto-compact long conversations server-side now. ✓ (this directly contradicts older "restart every 20 messages" folklore, which is now outdated)

## Cowork-specific

- **R11.** Scope folder and connector access narrowly per task — don't grant access to an entire home directory. Create a dedicated working folder per task instead. ✓
- **R12.** Revoke access when a task is done rather than leaving standing permissions open. ✓

## Claude Code-specific

- **R13.** Keep CLAUDE.md to what Claude needs every session — build commands, conventions, "always do X" rules. Only the first 200 lines / 25KB load at session start; anything beyond that is dropped. ✓
- **R14.** Put ad-hoc or occasional-use content in a docs/ folder, referenced with `@docs/filename.md`, rather than pasting it into CLAUDE.md. ✓
- **R15.** Keep project memory (`./CLAUDE.md`, shared via source control) and personal memory (`~/.claude/CLAUDE.md`, personal-only across all projects) separate — don't mix personal preferences into the shared project file. ✓

## What this skill is not

Not a claim that these rules are permanent — several supersede or contradict earlier backlog material that turned out to be outdated (see `reference.md` for what was dropped and why). Re-verify against current docs before treating a stale copy of this file as current.

Full reasoning, fact-check sourcing, dropped items, and open questions: `reference.md`

---
id: skill-reference-claude-surface-and-context-management
layer: map
type: skill-reference
title: "Reference — Picking the Right Claude Surface and Managing Context Within It"
parent-skill: SKILL.md
last-updated: 2026-07-19
added-on: 2026-07-19
instrument: science
draws-on:
  - backlog/ai-tools.md (source_id 2026-06-02-d)
---

# Reference: Claude Surface and Context Management

## Provenance

Sourced from `skill-claude-surface-and-context-management.md`, staged
directly in the Drive staging folder on 2026-07-18, fact-checked
2026-07-19. This file explicitly supersedes the `skill-ai-session-
hygiene` draft that appears inside `ai-brain-session-2026-07-18-
skills-layer-resolution-and-placement.json`'s `content_to_place` list
— per that staged file's own header, the fact-checked standalone file
replaces the earlier in-session draft rather than both being filed.
The superseded draft is not built as a separate node; its content is
fully absorbed (and corrected) here.

## Why this superseded the earlier draft

The earlier `skill-ai-session-hygiene` draft (inside the JSON session
file) was written without a fact-check pass and contained at least one
claim this file's own fact-check later contradicted — "restart every
20 messages." The standalone file was produced with an explicit
fact-check step (2026-07-19, against code.claude.com,
support.claude.com, and claude.com official docs/blog) and corrects
that claim along with others. Building both would have re-introduced
an already-identified inaccuracy alongside its correction — the
staged instruction to treat this file as the replacement, not an
addition, was followed as given.

## Fact-check findings (as staged)

**Confirmed accurate:** usage limits reset on a rolling ~5-hour
window (supports R9, "spread your sessions"). New-topic-new-chat and
tight-scope prompting remain reasonable hygiene independent of any
product change.

**Contradicted by current docs:** "restart every 20 messages" —
Claude.ai on paid plans with code execution enabled now auto-manages
long conversations via server-side compaction; conversations continue
indefinitely without this counting toward usage limits, so manual
restart-by-message-count is outdated advice, not current best
practice (see R10).

**Unverified/dropped:** several claims tied to a specific unverified
third-party course's terminology (e.g. exact "Cowork" workflow steps)
were not carried forward — kept only what cross-checked against
Anthropic's own documentation.

## Dropped from the original backlog draft (did not hold up)

- "Restart every 20 messages" — contradicted, see R10.
- "A 30-word prompt beats a 500-word brief" — contradicted; Anthropic's
  own prompt-engineering guidance favors clarity and specificity over
  blind brevity.
- Several items with no findable source either way ("new topic = new
  chat" as a strict rule beyond retrieval-quality reasoning, "batch
  multiple asks," "trim about-me file under 2,000 words" specifically)
  — omitted rather than included as unverified filler.

## Open questions

- R8's model-tier routing is deliberately unspecific about which
  models are "default," "top," or "fastest" tier at any given time —
  this project's own model lineup changes, and hardcoding names here
  would go stale exactly the way the dropped "restart every 20
  messages" advice did. Check the current lineup at time of use rather
  than trusting a cached version of this rule.
- No cadence specified for re-running the fact-check pass itself —
  this file inherits the same staleness risk it was built to correct
  for. A future revisit date is not set.

## Parent Map status

`parent_map_status: orphan-pending`. No Map node currently exists for
"how I use AI tools" generally — flagged, same as the earlier draft
flagged it, as a possible future Map node given how much backlog
content across sessions concerns AI-tool usage specifically. Not built
here; left as an open flag per the "deferred truth" avoidance rule
(`meta/principles.md`) rather than blocked or forced.

## Naming note

The `name:` field is `ai-surface-and-context-management`, not
`claude-surface-and-context-management` — the real Agent Skills format
this repo's `name` field deliberately mirrors (`skills/SKILL-CREATION.
md`) disallows the word "claude" in `name` itself, even for a skill
*about* Claude. `id` and `title` keep the more specific "claude"
wording since that constraint only binds the field the real mechanism
actually reads.

## Schema-fit note

Fifth skill built against `skills/SKILL-CREATION.md`'s two-file
pattern, and the first sourced from a file that was itself already
fact-checked and near-final rather than a raw backlog draft. The
schema absorbed it cleanly with one addition worth naming explicitly:
a `supersedes:` field (skill id of the draft this replaces), used here
for the first time, parallel in spirit to the existing `relationship:
operationalizes | supersedes | extends` field for `source-leaf`
relationships but applied skill-to-skill rather than skill-to-leaf.
Not proposed as a spec amendment to `SKILL-CREATION.md` itself yet —
flagged here for review since this is the first time it was needed,
per the "iterate and report, don't silently patch" rule.

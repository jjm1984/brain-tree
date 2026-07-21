---
id: skill-reference-declutter-adhd-family-functioning
layer: map
type: skill-reference
title: "Reference — Reducing Clutter-Related Decision Fatigue in an ADHD Household"
parent-skill: SKILL.md
last-updated: 2026-07-19
added-on: 2026-07-19
instrument: lived-experience
draws-on:
  - forge/home-organization.md (source_id 2024-09-30-a)
---

# Reference: Declutter, ADHD, Family Functioning

## Provenance

Sourced from `forge/home-organization.md` (source_id `2024-09-30-a`),
staged via Drive session `ai-brain-session-2026-07-18-skills-layer-
resolution-and-placement.json`. That file proposed this content under
an ad-hoc flat schema (id/source_forge/parent_map/draft_content/
tags) that predated — and didn't match — the two-file SKILL.md +
reference.md pattern already established and tested twice this session
(`relationship-conflict-regulation`, `things-to-teach-kids`). Rebuilt
here into the established schema rather than forking a second,
competing skill format. See `meta/principles.md` § "Skills Are a
Map-Layer Sub-Type, Not a 7th Layer" for the architecture decision this
placement follows.

## Why decision volume, not clutter volume

The staged draft's own framing already identified the real constraint:
in an ADHD household, the bottleneck on decluttering isn't physical
effort, it's the number of individual keep/discard *decisions*
required — each one taxes executive function whether the item is
big or small. A pile of 200 small unambiguous items can be more
draining to process than 20 large obviously-keep items, because the
cost scales with decision count, not with volume or size. This is why
the skill is a decision-triage *procedure* rather than a sorting
checklist — the four rules exist specifically to remove entire
categories of items from requiring individual judgment at all.

## Why "zero-decision discard" is rule 1, not rule 4

Ordering matters here in a way it might not in a generic declutter
guide. Putting the highest-volume, lowest-ambiguity category first
means the largest share of physical clutter is cleared before any
scarce decision-making capacity gets spent — the household sees fast
visible progress on the categories that cost the least, which matters
for follow-through in a way a "hardest first" or purely spatial
(room-by-room) order doesn't.

## Open questions

- No family-specific tailoring yet (kids' items, shared-custody
  logistics, whose "one deferred box" review date it is) — the source
  backlog entry didn't specify, and this skill doesn't invent detail
  the source didn't provide.
- Whether this composes with a future `co-regulation-in-practice`-style
  skill for the case where the decision fatigue itself becomes a
  flashpoint between household members mid-declutter — not built, not
  claimed as `composes-with` speculatively (see SKILL-CREATION.md's
  guidance against speculative composition).

## Parent Map status

`parent_map_status: orphan-pending`. No `map-*` node currently exists
for family/neurodivergence household-scaffolding practice — this skill
is placed now rather than deferred indefinitely (the "deferred truth"
failure mode named in `meta/principles.md`), with
`anticipated_future_parent: family-neurodivergence-scaffolding` noted
as a placeholder for when that Map node is eventually built. This
should be revisited when that Map node exists, not left orphaned
forever by default.

## Schema-fit note

This is the third skill built against `skills/SKILL-CREATION.md`'s
two-file pattern (after `relationship-conflict-regulation` and
`things-to-teach-kids`), and the first with a genuinely unresolved
`parent_map`. The schema held up cleanly — the `orphan-pending`
mechanism (added to the spec alongside this skill) is exactly what was
needed to avoid either forcing a fake parent or blocking the skill
indefinitely. No further amendment proposed.

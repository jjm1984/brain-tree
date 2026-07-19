# Skills Library (for humans)

Short, actionable `SKILL.md` files backed by a full `reference.md`, mirroring the format already used for AI/coding skills elsewhere. First artifact: `relationship-conflict-regulation/`, drafted 2026-07-18.

## Placement — resolved

**Resolved 2026-07-18 (J):** Skills are a Map-layer sub-type, not a 7th layer. Full chain — Leaf (knowledge) → Fruit + Code injection (embodied values/character, autonomic or conscious) → Map (strategy) → Skill (tactical action decomposed from a Map strategy node). See `meta/principles.md` § "Skills Are a Map-Layer Sub-Type, Not a 7th Layer" for the full decision, the `skill-*` id prefix, the `parent_map`/`parent_map_status` schema fields, and the `orphan-pending` provisional-placement rule for skills whose natural parent Map node doesn't exist yet. `layers/04-map/skills/` is this decision's physical placement, not a conservative default awaiting resolution.

## Pattern for future skills in this library

Each skill directory pairs `SKILL.md` (short, read in the moment, assumes a `written-for` audience) with `reference.md` (full reasoning, exposed roots, counters, crossroads, open threads — read in calm time, when building or revising the skill). `written-for` is an authorial-lens tag distinct from the existing `for:` use-case field — it doesn't try to predict agent capability, which would age badly. Reuse this pattern; don't assume it's final. Skill #2 (`things-to-teach-kids/`, once built) was explicitly used as a live test of whether this schema holds for a second, differently-shaped skill — see that skill's own schema-fit note for what held and what didn't.

## Skills

- `relationship-conflict-regulation/` — forming, 2026-07-18
- `things-to-teach-kids/` — forming, 2026-07-18. Built explicitly as a schema test of the first skill's format — see its `reference.md` schema-fit note for what held and what didn't (short version: the single-ordered-sequence structure doesn't fit every skill; this one uses parallel "pillars" instead).
- `declutter-adhd-family-functioning/` — forming, 2026-07-18. `parent_map_status: orphan-pending` — no Map node exists yet for family/neurodivergence household scaffolding.
- `third-party-life-audit-pass/` — forming, 2026-07-19. Tactical execution of `map-life-domain-audit` (`layers/04-map/index.md`) — first skill in the library placed with a resolved `parent_map` from creation.
- `claude-surface-and-context-management/` — forming, fact-checked 2026-07-19. Supersedes an earlier unverified draft (`skill-ai-session-hygiene`) with a fact-checked version against official Anthropic docs. `parent_map_status: orphan-pending` — no Map node exists yet for AI-tool usage generally. First use of a `supersedes:` field, flagged (not yet proposed as a spec amendment) in its `reference.md` schema-fit note.

---
id: skill-creation-spec
layer: skills-meta
type: meta-skill
title: How to Build a Brain Tree Skill
last-updated: 2026-07-18
added-on: 2026-07-18
status: forming — validated once (relationship-conflict-regulation), being stress-tested a second time (kids skill) before being treated as settled
---

# How to Build a Brain Tree Skill

This is a skill for making skills. Read this before drafting a new
one. It is deliberately provisional — see "The schema is not settled"
below before treating any of this as fixed.

## What a skill is, and isn't

A skill is a short, actionable instrument built from tree content,
meant to be reached for **in the moment**, not read for understanding.
It is not a leaf — a leaf holds belief, nuance, counters, and open
questions for their own sake. A skill *uses* a leaf's content but is
optimized for a different job: being findable and usable under real
conditions (mid-conflict, mid-meltdown, mid-decision), by a human or
an agent.

If content doesn't have an "in the moment" use case, it probably
doesn't need a skill wrapper — it can stay a leaf.

## The two-file pattern

Every skill is two files in its own directory:

- **`SKILL.md`** — short, in-the-moment. No philosophical throat-
  clearing. A person or agent under load should be able to use it
  without reading the reasoning behind it first.
- **`reference.md`** — the full backing: why the sequence is what it
  is, exposed roots, counters, crossroads, open threads, dear reader.
  Read in calm time, when building or revising the skill, not during
  use.

## Required frontmatter fields

`name` and `description` are not just this project's convention — they
are the exact two fields Claude's real Agent Skills mechanism reads
for discovery (see "Matching the real Agent Skills format" below).
Field names and constraints must match precisely, even though nothing
in this repo auto-triggers today.

```yaml
name: kebab-case-id
title: Human-readable title
description: ONE line, written for an agent deciding whether to load this skill. What triggers it, what it's for. This is the equivalent of a real Agent Skill's trigger description — write it the same way you'd write one for a coding tool: specific enough to match, not so broad it fires on everything adjacent.
  # Write this as a SINGLE LINE, not a YAML folded scalar (`>`). This
  # repo's frontmatter parser (scripts/validate.js, scripts/build-
  # graph.js) is a minimal flat key:value reader, not a real YAML
  # parser -- a multi-line `>` block gets misread and can silently
  # corrupt other fields (this happened once already, in a reference.md
  # provenance field). Keep every frontmatter value on one line.
for: A testable CRITERION, not a category list. E.g. "cost-gated care — for anyone the regulation cost is worth bearing for" rather than "for partners and family." A criterion generalizes; a category list has to be manually extended every time a new relationship type comes up. See cost-gated-care as the reusable pattern for any skill that costs the executor something.
written-for: human | agent | multi
  # See "written-for, precisely" below. This is NOT the same field as
  # `for` — do not collapse them.
keywords: [concrete search terms a person would actually type]
  # Required whenever `for` states an abstract criterion rather than
  # concrete categories — keywords carry the discoverability job that
  # a category-list `for` field used to carry implicitly.
source-leaf: leaf-id-if-operationalizing-existing-content
relationship: operationalizes | supersedes | extends
  # Only present if source-leaf is present. Prevents a skill from
  # silently duplicating a leaf that already exists — formalize the
  # relationship instead of building a near-copy.
composes-with:
  - step: N
    candidate-skill: some-future-skill-id
    status: not yet built | built
  # Only for GENUINE delegation — the step doesn't fully specify how
  # to do the thing, and a narrower skill would. Do not add this
  # speculatively; see "Depth delegation vs. condensed mode" below.
grounded-in: [tree-node-ids this skill draws from]
full-reference: reference.md
status: forming | tested-once | stable
```

## Matching the real Agent Skills format

These are not skills the current Claude Code instance can load or
auto-trigger — confirmed 2026-07-18, and by design (see Placement
below). But the frontmatter is deliberately kept format-compatible
with Claude's actual Agent Skills mechanism, on the explicit basis
that agent capability will grow and this shouldn't need a rewrite
later. Per Anthropic's published spec (docs.claude.com,
agents-and-tools/agent-skills/overview, confirmed 2026-07-18):

- **Only `name` and `description` are read by the real mechanism.**
  Every other field here (`for`, `written-for`, `keywords`,
  `source-leaf`, `relationship`, `composes-with`, `grounded-in`,
  `full-reference`, `status`, `title`) is this project's own
  extension — harmless to a real Skill loader (extra frontmatter keys
  are simply ignored), but not load-bearing for real discovery.
- **`name` constraints:** max 64 characters. Lowercase letters,
  numbers, and hyphens only. No XML tags. Cannot contain the words
  "anthropic" or "claude".
- **`description` constraints:** non-empty, max 1024 characters, no
  XML tags. Must state both *what the skill does* and *when to use
  it* — matching this spec's own `description` field guidance above,
  which was already written this way independently.
- **Discovery location:** Claude Code only auto-discovers skills from
  `.claude/skills/` (project) or `~/.claude/skills/` (personal).
  Nothing under `skills/` or `layers/04-map/skills/` is scanned —
  this is why nothing here can trigger today, independent of
  frontmatter correctness.

## `written-for`, precisely

Two things this is NOT:

- It is not the same as `for`. `for` is the use-case/scope criterion.
  `written-for` is the authorial lens — whose embodiment and
  interiority the language assumes.
- It is not a claim about who can *execute* the skill. Do not build
  per-step `executable-by` tags predicting agent capability — that
  ages badly as capability changes. `written-for: human` just means:
  an agent reading this will need to translate embodied language
  ("notice your body") into whatever it can actually perceive and do.
  That translation is left to whoever's reading it, with whatever
  capability they have *then* — not predicted or gate-kept here.

When a skill is `written-for: human`, `reference.md` should include a
short note flagging which steps are closest to audience-neutral
pattern logic (least translation needed) and which assume embodiment
most directly (most translation needed). Don't attempt the
translation yourself unless asked — just mark where it's needed.

## Depth delegation vs. condensed mode — don't confuse these

Two different reasons a second skill might relate to a first one.
Getting this wrong produces either a redundant skill or a
`composes-with` field that points at nothing real.

- **Depth delegation (`composes-with`, genuine):** a step in the
  broad skill doesn't fully specify *how* — it hands off to a narrower
  skill that does. Real only if the broad skill's step text is
  actually shortened to hand off, not just annotated.
- **Condensed mode (not `composes-with`):** same scope, same content,
  just a bare checklist version for someone already mid-use who
  doesn't need the "why" restated. This is a different artifact
  shape, not a sub-skill.
- **Neither (`source-leaf`, not a new skill at all):** the "new" skill
  just reorganizes and relabels content that already exists elsewhere
  in the tree. Formalize the relationship; don't build it as if it
  were new.

## Cost-gated care — a reusable scoping pattern

Any skill that costs its executor something (regulation, attention,
emotional labor) should scope its `for` field the same way: **the
cost itself is the criterion**, not a list of relationship categories.
"Worth the cost for this specific person" generalizes; "partners,
children, close friends" has to be manually re-extended every time a
new case comes up and silently excludes cases that should qualify.

## The schema is not settled — iterate and report, don't silently patch

This spec was written after building exactly one skill, then stress-
tested by deliberately building a second, differently-shaped one and
watching for friction. **This is the required process for any new
skill category going forward, not a one-time bootstrapping step:**

1. Use this schema as a starting point.
2. Do not force the fit if it doesn't work for the new content.
3. Write a short schema-fit note alongside the new skill: what held up
   cleanly, what felt forced, any proposed amendment.
4. **Do not silently patch this spec.** Proposed amendments come back
   as a proposal for review, the same as any other tree amendment —
   never applied unilaterally just because a new case needed it.

## Placement

Skills currently live in `skills/[skill-id]/`. Whether this becomes
its own top-level layer or stays a Map-layer sub-type is an open
architectural question — see `layers/04-map/index.md` and
`meta/principles.md`. Do not resolve this unilaterally when building a
new skill; if it comes up, flag it, don't decide it.

**Deliberately not placed in `.claude/skills/`.** Confirmed with J,
2026-07-18: these skills are not meant to auto-trigger for this Claude
Code instance. They're written for a human (J) to call up and
translate into his own workflow, or for a future agent whose
capabilities have grown beyond what's available today — not for this
session to load automatically. Do not move any skill into
`.claude/skills/` or `~/.claude/skills/` without an explicit decision
to actually enable auto-triggering; format-compatibility and
discoverability are intentionally kept separate.

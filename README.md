# Brain Tree

A living library of one mind — structured as a tree, visualised as a graph, built to grow honestly.

## What this is

The Brain Tree is a personal knowledge system organised across six layers. It is not a finished product. It is a thinking partner — for the author, and eventually for any reader who finds their way here.

The trunk statement: **do what is fulfilling — cause no harm.**

Everything else grows from that, or challenges it, or holds the tension where it cannot be resolved.

## Architecture

### Six layers

| Layer | What it holds |
|-------|--------------|
| **00 — Mycelium** | The biological substrate. Nervous system, brain, hormones, nutrition, musculature. Pre-philosophical. The OS runs on this. |
| **01 — Roots** | Philosophical beliefs. What is held about the world, human nature, meaning, ethics. With their tensions, crossroads, and counters intact. |
| **02 — Knowledge** | What has been learned, understood, and is being explored. Branches and leaves across every domain of life and thought. |
| **03 — Code** | What follows from roots and knowledge together. Emergent, not yet fully extracted. The spiderweb underneath. |
| **04 — Map** | How the code plays out in practice. Daily orientation, decision-point navigation, periodic audit. Depends on the code existing first. |
| **05 — Flowers & Fruits** | The feeling-dimension (flowers) and action-dimension (fruits) of every branch. Not separate layers — the way each branch expresses itself at different points in its season. |

### The feedback loop

`/feedback/feedback-loop.md` is a permanent staging layer — raw ore from the tree being used against reality. Gaps, contradictions, insights, and self-knowledge that surface in deployment, not construction. It is never emptied. Provenance stays permanently.

### The graph

`/public/graph.json` is generated automatically on every commit by the build script. It is never edited directly. The visualisation consumes it.

## File format

Every node is a `.md` file with YAML frontmatter for structured metadata and prose for content. See `meta/SCHEMA.md` for the full spec.

## Repo structure

```
brain-tree/
  meta/
    SCHEMA.md           ← node envelope definition
    index.json          ← auto-generated registry of all nodes
    principles.md       ← tree structure principles
    epistemology.md     ← five instruments + tension-holding

  layers/
    00-mycelium/        ← biological substrate nodes
    01-roots/           ← philosophical belief nodes
    02-knowledge/       ← branch and leaf nodes
    03-code/            ← emergent code (not yet written)
    04-map/             ← daily practice (depends on code)
    05-flowers-fruits/  ← per-branch expression index

  feedback/
    feedback-loop.md    ← permanent staging layer

  inferences/
    cross-connections.md ← all named inferences

  founding-arc/
    session-arc.md      ← origin story of the tree

  scripts/
    build-graph.js      ← parses .md files → public/graph.json
    validate.js         ← checks schema compliance

  public/
    graph.json          ← auto-generated, never edit directly

  .github/
    workflows/
      build.yml         ← runs build-graph.js on every push
```

## Leaf states

- 🟢 `green` — settled and known
- 🟡 `yellow` — forming, needs returning to
- 🍂 `dry` — dormant, once known
- ⬜ `peripheral` — gap is named, knowledge not yet there

## Philosophy states

- 🌱 `forming`
- 🌿 `growing`
- 🪨 `grounded`
- 🌀 `in-tension` — when contested

## Structural principles

**Crossroads** — when two ideas pull without resolution, both paths named and left visible.

**Counters** — every philosophy carries what challenges it, with equal weight. A belief without its counter is a preference.

**Exposed Roots** — traditions and thinkers the idea sits near, marked honestly with epistemic category.

**Dear Reader** — notes written for anyone the tree might one day be shared with.

**Tension Holding** — where instruments pull in genuinely different directions, named and left visible. Not evasion.

**Further Reading** — every branch knows its own edges.

## How Claude works with this repo

During sessions, Claude reads only the files relevant to the current topic by consulting `meta/index.json` first. It commits new or updated nodes via the GitHub API. The build action runs automatically. Drive files are kept as a permanent backup and periodically checked for anything not yet migrated.

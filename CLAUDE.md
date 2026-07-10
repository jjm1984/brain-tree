# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Brain Tree is a personal knowledge system — a "living library of one mind" — stored as plain `.md` files with YAML frontmatter, organised into six layers (mycelium → roots → knowledge → code → map → flowers-fruits). It is not a software product; the "codebase" is the content plus a small pair of Node scripts that parse it into a graph for visualisation. Most work in this repo is *writing and editing tree nodes*, not writing application code.

The trunk statement the whole tree grows from: **do what is fulfilling — cause no harm.**

## Commands

```
npm run build        # node scripts/build-graph.js — parses all .md nodes into public/graph.json
npm run validate      # node scripts/validate.js — checks frontmatter schema compliance
npm run build:check   # validate then build (what CI runs on every push to main)
```

There is no test suite or linter. `public/graph.json` is regenerated automatically by `.github/workflows/build.yml` on every push to `main` (validate → build → auto-commit `chore: rebuild graph.json [skip ci]`). **Never hand-edit `public/graph.json`.**

`index.html` at the repo root is a self-contained (D3-via-CDN) graph viewer — open it through a local static server (`fetch()` of `public/graph.json` fails over `file://`) or via GitHub Pages. It fetches raw `.md` source per-node from `raw.githubusercontent.com`, so node content only resolves once a node's file is pushed to the `main` branch on GitHub.

## Architecture

### Six layers (`layers/`)

| Layer | Holds |
|---|---|
| `00-mycelium` | Biological substrate — nervous system, hormones, nutrition. Pre-philosophical. |
| `01-roots` | Philosophical beliefs, with their tensions, crossroads, and counters intact. |
| `02-knowledge` | Branches and leaves across domains of life/thought (aliveness, work-vocation, relationships-family, self-worth-identity, physical-wellbeing, learning-intellectual, daily-architecture). |
| `03-code` | What follows from roots + knowledge together. Emergent — deliberately not written prematurely (see "Everything goes in" below). |
| `04-map` | Daily practice; depends on `03-code` existing first. |
| `05-flowers-fruits` | Feeling-dimension (flowers) and action-dimension (fruits) per branch — not a separate ontology, just another facet of each node. |

Other top-level dirs: `feedback/feedback-loop.md` (permanent staging layer — raw gaps/contradictions/insights surfaced against reality, never emptied, provenance kept forever), `inferences/cross-connections.md` (named inferences between nodes), `founding-arc/session-arc.md` (origin story), `meta/` (schema + operating principles, read these before writing nodes).

### Node file format

Every node is a single `.md` file: YAML frontmatter (structured metadata) + free prose body. Full spec is `meta/SCHEMA.md` — read it before creating or editing a node. Key points:

- Required frontmatter: `id` (kebab-case, unique, prefixed by type — e.g. `philo-`, `branch-`, `leaf-`, `inf-`, `crossroads-`, `entry-NNN`), `layer`, `type`, `title`, `state`, `last-updated`, `added-on`.
- `connections:` block (`supports`, `challenges`, `crossroads`, `exposed-roots`, `flowers`, `fruits`) is what `build-graph.js` reads to derive graph edges — only `supports`/`challenges` currently produce edges. `build-graph.js`'s frontmatter parser handles top-level keys plus exactly *one* level of nesting (so `state:\n  leaf: green` and `connections:\n  supports: [a, b]` both parse correctly) — anything nested two levels deep (e.g. `exposed-roots:` list-of-objects) is intentionally not traversed and won't appear in `graph.json`.
- `instrument:` tags which of the five epistemic instruments (`philosophy`, `science`, `lived-experience`, `myth-form`, `religion`, or `multi`) is speaking — see `meta/epistemology.md`.
- Prose body conventions differ by node type (philosophy vs. leaf vs. mycelium vs. feedback-entry) — `meta/SCHEMA.md` §"Prose body conventions" spells out how each should open.
- `scripts/validate.js` only checks top-level frontmatter keys (`id`, `layer`, `type`, `title`, valid enum values, date formats `YYYY-MM-DD`) — it does not validate nested YAML or prose conventions, so schema conformance there is a manual discipline, not enforced.
- The trunk (`philo-how-to-live`) has a second facet living as its own file, `philo-belief-release.md` (id `trunk-belief-release-when-no-longer-serves`) — "hold belief firmly, release it when it no longer serves you." Both are `layer: roots` since there's no separate "trunk" layer in the schema.

### Structural principles (`meta/principles.md`) — the non-negotiables

These are operating constraints for how content is written, not suggestions:

- **Crossroads**: when two ideas pull without resolution, name both paths and leave the choice visible — don't force a resolution.
- **Counters**: every philosophy must carry what challenges it, with equal weight. A belief without a counter is just an untested preference.
- **Exposed Roots**: name traditions/thinkers a node resonates with, honestly labelled (`resonant`/`foundational`/`peripheral`/`speculative`) — never claimed as sources unless explicitly adopted.
- **Tension Holding**: where the five instruments (philosophy, science, lived experience, myth, religion) genuinely conflict, name the tension and leave it open rather than synthesising it away.
- **Everything goes in**: settled or not, coherent or not — honest state labelling beats false coherence. Corollary: don't build out `03-code` prematurely; a partial code layer looks complete but hides blind spots.
- **The feedback loop is structural**, not supplementary — gaps and contradictions surface in deployment (real use) not construction, and `feedback/feedback-loop.md` is where that gets captured, permanently, with provenance.
- Peripheral/dormant leaf states are as valuable as settled ones — they mark where the roots haven't reached yet, not a failure to finish.

### State vocabularies

- Leaf state: 🟢 `green` (settled) · 🟡 `yellow` (forming) · 🍂 `dry` (dormant) · ⬜ `peripheral` (named gap)
- Philosophy state: 🌱 `forming` · 🌿 `growing` · 🪨 `grounded` · 🌀 `in-tension`

## Working conventions

- Before touching a topic, consult `meta/index.json` (auto-generated node registry) to see what already exists rather than re-deriving or duplicating a node.
- Drive files are kept as a permanent backup outside this repo and periodically checked for content not yet migrated in — if the user mentions "drive" content, that's the reference.
- Commit new/updated nodes normally; don't touch `public/graph.json` by hand — it's regenerated by CI.

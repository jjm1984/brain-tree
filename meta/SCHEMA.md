# Brain Tree — Node Schema

Every file in the tree is a `.md` file with YAML frontmatter and prose body. This document defines the full envelope.

---

## Universal frontmatter fields (all nodes)

```yaml
---
id: kebab-case-unique-id          # required — used for all cross-references
layer: mycelium | roots | knowledge | code | map | flowers-fruits
type: layer | branch | philosophy | leaf | inference | feedback-entry | principle
title: Human readable title
state:
  leaf: green | yellow | dry | peripheral        # for knowledge nodes
  philosophy: forming | growing | grounded | in-tension  # for root nodes
  mycelium: yellow | green                       # for mycelium nodes
last-updated: YYYY-MM-DD
added-on: YYYY-MM-DD
---
```

---

## Connection fields (all nodes that link to others)

```yaml
connections:
  supports: [id, id]          # ideas this node supports or is supported by
  challenges: [id, id]        # ideas this node pushes against
  crossroads: [crossroads-id] # crossroads this node participates in
  exposed-roots: 
    - tradition: Name
      connection: How it connects
      state: yellow resonant | green foundational | peripheral | speculative
  flowers: prose string       # feeling-dimension of this node (knowledge/root nodes)
  fruits: prose string        # action-dimension of this node (knowledge/root nodes)
instrument: philosophy | science | lived-experience | myth-form | religion | multi
```

---

## Type-specific additional fields

### philosophy (01-roots)

```yaml
connected-to: [id, id]
counters:
  - counter text
open-threads:
  - thread text
dear-reader: prose string
further-reading:
  - what: description
    why: relevance
```

### branch (02-knowledge)

```yaml
parent-philosophies: [phil-id, phil-id]
leaves: [leaf-id, leaf-id]        # populated automatically by build script
missing-leaves:
  - gap description
dear-reader: prose string
```

### leaf (02-knowledge)

```yaml
parent-branch: branch-id
harvested-from: feedback-entry-id | session-filename | direct
counters:
  - counter text
open-threads:
  - thread text
dear-reader: prose string
```

### mycelium node (00-mycelium)

```yaml
systems: [system-id, system-id]   # for the layer node
parent-system: system-id          # for individual system nodes
connected-to: [id, id]
open-questions:
  - question text
```

### map (04-map)

No dedicated `type:` value exists for Map-layer content nodes — `layer: map` combined with `type: leaf` is the current convention (established 2026-07-19 with `map-life-domain-audit` and `map-life-direction-cycle`), reusing the generic leaf envelope rather than inventing a new `type: map` enum value.

**Schema gap, not yet resolved:** this repo has no formal parent/child node relationship for Map-layer content (analogous to a branch's `leaves:` list). `map-life-domain-audit`'s eight domain children (financial, career, relationships ×3, life-stage, wellbeing, aliveness) are currently written as prose subsections within the single parent file rather than as separate node files, specifically because this schema gap exists — see that file's own note. Revisit if/when Map-layer content grows enough that inline subsections stop being adequate; do not force a fit prematurely.

**Skill nodes (`skill-*`) and their `SKILL.md`/`reference.md` two-file pattern are a distinct, deliberately separate schema** from the universal envelope above — see `skills/SKILL-CREATION.md`, not this file, for the full field list (`name`, `description`, `for`, `written-for`, `parent_map`, `parent_map_stage`, `parent_map_status`, `skill_status`, etc.). `skill_status: integrated | outsourced-delegated | gap` (added 2026-07-19) tracks how integrated the underlying capability is in lived practice, distinct from `status` which tracks the node's own maturity in the tree. See `layers/04-map/map-life-domain-audit.md`'s "learning-growth resource check" for why this field exists.

### inference (inferences/)

```yaml
from: id → id
status: grounded | yellow | peripheral | speculative
```

### feedback-entry (feedback/)

```yaml
date: YYYY-MM-DD
state: open | in-progress | harvested
harvested-on: YYYY-MM-DD          # only when state = harvested
type: philosophical-insight | self-knowledge | gap | contradiction | explore-further | architectural-insight
provenance:
  project: project name
  context: what was happening
  trigger: what surfaced it
suggested-branch: branch-id
suggested-leaf-state: green | yellow | peripheral
question-to-verify: prose string
cross-connections: [id, id]
```

---

## Prose body conventions

The body after the frontmatter is free prose. No JSON strings. Write as you would write in a notebook.

For **philosophy nodes**: open with the core statement, then develop it — how it was built, what it contains, the honest tensions. Counters and crossroads can be named inline or pulled into frontmatter lists — use whichever is cleaner for the specific node.

For **leaf nodes**: open with the idea, then its current state and what remains open.

For **mycelium nodes**: open with the core statement about this system, then how it connects upward to the OS and downward to the other systems.

For **feedback entries**: open with the raw content as it surfaced. Don't sanitise. Honest state labelling over false coherence.

---

## Crossroads format

Crossroads live as named objects inside the node they belong to, or as their own files in the relevant branch folder when they span multiple nodes.

```yaml
crossroads:
  - id: crossroads-unique-id
    title: The question the crossroads holds
    path-a:
      direction: prose
      implies: prose
    path-b:
      direction: prose
      implies: prose
    dear-reader: prose
    status: open | leaning-a | leaning-b | resolved
```

---

## ID conventions

- Philosophies: `philo-[name]` e.g. `philo-courage`
- Branches: `branch-[name]` e.g. `branch-aliveness`
- Leaves: `leaf-[name]` e.g. `leaf-inner-witness`
- Mycelium nodes: `mycelium-[name]` e.g. `mycelium-hormones`
- Inferences: `inf-[from]-[to]` e.g. `inf-philo-courage-leaf-consistency-gap`
- Crossroads: `crossroads-[name]` e.g. `crossroads-aliveness-and-worth`
- Feedback entries: `entry-[NNN]` e.g. `entry-001`

---

## What the build script does with this

`scripts/build-graph.js` reads every `.md` file, extracts all frontmatter, and builds `public/graph.json` as:

```json
{
  "nodes": [
    {
      "id": "...",
      "layer": "...",
      "type": "...",
      "title": "...",
      "state": {...},
      "instrument": "...",
      "filePath": "..."
    }
  ],
  "edges": [
    {
      "source": "id",
      "target": "id",
      "type": "supports | challenges | exposes-root | crossroads | inference"
    }
  ],
  "meta": {
    "nodeCount": 0,
    "edgeCount": 0,
    "lastBuilt": "ISO datetime"
  }
}
```

The prose body is never included in `graph.json` — it stays in the `.md` file. The reading view fetches the raw `.md` directly from GitHub.

# VIZ_SPEC v0.1 — The Brain Tree, Rendered
*Design direction for the living-library visualization. Target: HTML/Canvas/WebGL, single-file, mobile-first. Written 2026-07-16. Supersedes nothing — first spec. Instructions for Claude Code: commit to repo root as VIZ_SPEC.md (fulfils the open "VIZ_SPEC.md not yet started" horizon item).*

---

## 1. The brief in one sentence

Render the tree as it appears in `3D_tree.img`: a constellation of knowledge wearing a tree's silhouette — luminous nodes above a dark field, a mirrored root-network below the soil line, and a faint web beneath everything — where **every visual property is data, not decoration**.

## 2. Governing principle

**Nothing glows that isn't true.** Node color = leaf state. Node size = connectivity. Filament = a real crossConnection. The spiderweb renders only where Code-layer principles actually exist. If the tree looks sparse in places, it *is* sparse there — the render must be honest about gaps the same way the tree is (⬜ peripheral nodes render as dim hollow rings, not omitted).

This is the visual analogue of "a belief without its counter is a preference": a visualization without its gaps is an advertisement.

## 3. Scene architecture (maps 1:1 to the six layers)

| Layer | Visual element | Position | Palette |
|---|---|---|---|
| Mycelium | Diffuse low-alpha web, 5 bright anchor nodes (brain, nervous system, hormones, nutrition, musculature) | Deepest stratum, below roots | Violet `#8B6FD9`, alpha 0.15–0.4 |
| Roots | Strands descending from trunk base, terminating in philosophy nodes; counters render as paired dimmer nodes | Below soil line | Cyan `#4FA8C9` |
| Trunk | The only solid element. Warm vertical core with inner gradient; carries the trunk statement as the sole always-visible text | Center, soil line to first fork | Amber core `#FFD98A` → edge `#F0A840` |
| Knowledge | Node canopy on recursive branch curves; branch thickness = subtree size | Above soil line | Gold `#E8C15A` / green `#7FBF5A` by state |
| Code | Fine silver filaments — chords connecting nodes *across* branches and hemispheres. The spiderweb. | Spanning everything, faint | Silver `#C9D4E8`, alpha ≤ 0.25 |
| Map | Not a stratum — a mode. Toggling "Map view" dims all but actionable nodes (tripwires, audits, decision points) | Overlay state | Inherits, others drop to 20% |

**Flowers/fruits are not nodes.** They are the glow-halo treatment on any node whose state is alive: a soft breathing bloom (2–4s sine cycle, ±15% radius). Aliveness is rendered as light behavior, not geometry — you cannot tell doing from feeling, per the branch itself.

## 4. Node state encoding (the leaf states)

| State | Fill | Halo | Behavior |
|---|---|---|---|
| 🟢 green (settled) | `#7FBF5A` | steady soft bloom | static |
| 🟡 yellow (forming) | `#E8C15A` | breathing bloom | slow pulse — it wants returning to |
| 🍂 dry (dormant) | `#A9713F` | none | matte, slightly desaturated |
| ⬜ peripheral (named gap) | transparent | none | 1px hollow ring `#3A4560` — present, empty, honest |
| 🌀 in tension | split green/gold | flicker at 0.5Hz, subtle | the only node allowed to be visually restless |

## 5. Field, light, atmosphere

- **Field:** `#050810` (deep indigo-black), radial vignette darkening 12% at edges. Never pure black — the field is night sky, not void.
- **Glow:** additive compositing (`globalCompositeOperation: 'lighter'` / `THREE.AdditiveBlending`) with pre-rendered radial-gradient sprites. Do NOT use post-processing bloom passes — expensive on mobile, unavailable on cdnjs for r128, and additive sprites are visually equivalent at this node density.
- **Soil line:** a faint horizontal luminance seam at y=0, amber above fading to cyan below. The one horizon.
- **Particles:** 60–120 drift motes, 0.5–1.5px, alpha 0.1–0.3, rising above soil / sinking below. Ambient only — they carry no data and must never be mistaken for nodes (keep them sub-node-size).
- **Depth:** size + alpha falloff by z-distance. Far nodes shrink and dim; no true DOF blur (cost > payoff).

## 6. Typography

- **Display (title, trunk statement):** Cormorant Garamond, fallback Georgia/serif. Botanical-manuscript register. Used exactly twice on screen — restraint is the choice.
- **Utility (labels, tags, legend):** JetBrains Mono, fallback ui-monospace. Epistemic tags (`philosophy`, `science`, `lived-experience`, `myth-form`, `religion`) always render in the mono face, lowercase, as they appear in the schema — the tag IS the schema made visible.
- Labels appear on hover/tap only, except the trunk statement, which is permanent: *"do what is fulfilling — cause no harm."*

## 7. Motion

One orchestrated moment, then quiet:

1. **Load sequence (~3s):** trunk draws upward from soil line → branches unfurl outward → nodes ignite in layer order (mycelium first, canopy last — the stack boots in dependency order, which is true of the architecture).
2. **Ambient:** slow auto-rotation (3D variants, ~0.05 rad/s), breathing halos on alive nodes, particle drift. Nothing else moves.
3. **Interaction:** drag/touch to orbit; tap node → focus (camera ease, others dim to 35%, detail panel slides in).
4. `prefers-reduced-motion`: skip load sequence, freeze rotation, halos static.

## 8. Interaction contract (tool variants)

- Tap node → panel: name, layer, state, epistemic tag, one-line note, crossConnections as tappable chips.
- Legend doubles as filter: tap a layer to isolate it.
- "Gaps" toggle: lights only ⬜ and 🟡 nodes — the feedback-loop view. This is the feature that keeps the render an instrument rather than a portrait.

## 9. Data contract

Renderer consumes a single JSON shape (compatible with `public/graph.json`):

```json
{
  "nodes": [{ "id": "", "label": "", "layer": "mycelium|roots|trunk|knowledge|code|map",
              "state": "green|yellow|dry|peripheral|tension",
              "tag": "philosophy|science|lived-experience|myth-form|religion",
              "note": "" }],
  "edges": [{ "source": "", "target": "", "kind": "structural|cross" }]
}
```

`structural` edges are branch geometry; `cross` edges are spiderweb filaments. The renderer never invents edges.

## 10. Performance budget

- ≤ 400 nodes at 60fps on a mid-range phone; degrade by dropping particle count, then halo animation, never nodes.
- Single self-contained HTML file per variant. Only permitted external dependency: three.js core from cdnjs (variant A). Variants B/C: zero dependencies.
- devicePixelRatio-aware canvas; resize-safe; touch and mouse parity.

## 11. Calibration note (anti-default check)

Dark field + luminous accent is a known AI-design default — but here it is pinned by the brief (the source image is a dark-field luminous render). The differentiating choices are therefore made elsewhere: the six-layer stratigraphy as literal vertical composition, gaps rendered as hollow rings, the spiderweb-only-where-Code-exists rule, and the manuscript-serif/mono type pairing. The signature element is the **soil line** — the single horizon dividing warm from cool, philosophy from biology, the visible library from its substrate.

## 12. Open scope questions (for J)

1. Portrait or instrument first? (A/B are portraits; C is an instrument. Both can coexist: C in daily use, A as the Dear Reader landing.)
2. Where does it live — `public/index.html` beside `graph.json` in the repo?
3. Should Map-mode (§3) ship in v1 or wait for Code-layer extraction?

---

## v0.2 note (2026-07-19/20) — do not rewrite the spec above yet

The renderer shipped this session (`index.html`, repo root — resolves open question #2 above: it lives at the repo root, not `public/`, matching the prior Navigator's location, not the path this spec originally floated) replaces the force-directed "Living Cloud" approach with a **hand-authored recursive fractal skeleton**, built to match a reference bioluminescent-tree image J supplied directly in chat. This is a structural change from what §3–§9 above describe (which assume physics-simulated node placement) — those sections are now stale in several places, most notably §5 (glow/bloom was tuned for a point-cloud, not a skeleton) and §7 (motion assumed simulation settling, not a deterministic-seeded static structure). Not rewritten here — flagged for a dedicated v0.2 pass once this version has been lived with and confirmed as the direction to keep.

**What's data-driven vs. generative aesthetic — the distinction that matters if this file gets edited later:**

- **Data-driven** (changing `graph.json` changes the render): branch count, branch order (sorted by aliveness — degree × state × type weight — most load-bearing lowest/closest to the trunk), branch thickness (by aliveness), which leaf sits on which branch's twig (via `supports` edges), node color/state, peripheral (named-gap) leaves getting a tendril to a "further reading" node, cross-layer `supports` edges curving through the trunk axis.
- **Generative aesthetic** (fixed regardless of data, deterministic-seeded): limb curvature, twig density, root spread angles, the trunk's S-curve. These come from `organicPath` / `growLimb` / `growRoot` in `index.html`, not from the graph.

**Reference implementation:** commit `9007d39` on `main`.

**Known open issue, not resolved by this commit:** the repo is currently private, which means the renderer's live-fetch fallback chain (`./graph.json` → GitHub raw URL → embedded 18-node sample) silently serves the embedded sample to any visitor without repo access — the GitHub raw URL 404s on a private repo for unauthenticated requests. J has chosen to leave the repo private for now and defer this; a proxy (Vercel or otherwise) that can serve `graph.json` with server-side auth is the eventual fix, tracked as a separate horizon item, not part of this visualization work.

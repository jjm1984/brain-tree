---
id: skill-reference-things-to-teach-kids
layer: map
type: skill-reference
title: "Reference — Raising Kids Who Can Spot What's Healthy and Have Room to Become Who They Are"
parent-skill: SKILL.md
last-updated: 2026-07-18
added-on: 2026-07-18
instrument: multi
draws-on:
  - leaf-things-to-teach-kids
  - leaf-withdrawal-repair-pattern (attachment-theory exposed root reused here)
  - philo-what-people-are-for
provenance: "Follow-up to relationship-conflict-regulation-skill-v2, drafted 2026-07-18 as an explicit directive: do not assume the SKILL.md/reference.md schema is correct after a single use. Built from the existing stub leaf-things-to-teach-kids (state: yellow), which carries two source threads — relationship red-flag literacy, and the 2023-11-30 \"Ideals\" material on identity, land, and independence — plus a named, unfilled gap (\"Advice to Boys\"/\"Advice to Girls\" headers with no content) that this build had to resolve one way or the other."
---

# Reference: Things to Teach Kids

This is the full backing for `SKILL.md`. Read this in calm time, when
building or revising the skill itself — same relationship to `SKILL.md`
as skill #1's reference file.

## Exposed roots

- **Attachment theory (Bowlby / Ainsworth)** — the same root already
  used in skill #1, reused here from the opposite direction: teaching
  a child what secure attachment actually looks like from the outside,
  not just naming avoidant withdrawal from the inside. *Yellow,
  resonant.*
- **Erikson — identity vs. role confusion** — candidate account for
  why Pillar 2's "room to explore who they are" matters developmentally,
  not just as a values preference. Not yet tested against this specific
  content beyond the name-match. *Speculative, yellow.*
- **J's own lived pattern** — land-connection, working with hands, and
  structured independence (bonfires, camping, horses, bikes) as a
  standing alternative to peer-pressure numbing — same standing as the
  lived-practice root in skill #1's reference, tagged lived-experience,
  not science.

## Counters

- **On "don't teach them to stay if not happy":** this is not
  permission to leave at the first sign of friction. Every real
  relationship has some. Without a counter, this line risks teaching
  avoidance dressed up as self-respect — the same shape of risk
  already named for withdrawal in `leaf-withdrawal-repair-pattern`.
  The distinction this skill actually needs to teach is between
  ordinary friction (stay, work through it) and the specific patterns
  named in Pillar 1 (love bombing, gaslighting, control) — not
  "unhappy in the moment" as the bar for leaving.
- **On red-flag literacy generally:** naming patterns to watch for
  risks teaching suspicion as a default stance rather than discernment.
  Pillar 1 is written to lead with what *healthy* looks like first,
  precisely to avoid this — a kid who only learns the red flags learns
  to distrust, not to recognise good.

## Open threads carried forward from skill #1 (per instruction, left unresolved)

- Should this skills library live as its own new layer alongside Map,
  or as a Map-layer sub-type? Not resolved by this build either —
  still first raised 2026-07-18, still open.
- Does kids content genuinely need the `written-for` split the same
  way conflict-regulation did? **This build is a real data point, not
  a resolution:** Pillar 1 (red-flag recognition) is close to
  audience-neutral pattern logic, similar to skill #1's steps 1 and 5
  — an agent could plausibly discuss it with a child directly with
  little translation. Pillar 2 (land, hands, independence) is much
  more clearly embodied and human-specific — an agent has no
  equivalent of "take them camping." So the split isn't uniform even
  *within* one skill, which suggests `written-for` may need to operate
  at a finer grain than whole-skill in some future skill — flagged,
  not decided, here.

## New open threads from this build

- The gender-split question (see Dear Reader below) was decided one
  way for this draft. Revisit if it doesn't hold up lived-with.
- Pillar 2 content assumes rural/land access (horses, bikes, camping)
  that won't generalise to every household — not yet addressed whether
  this skill should name that assumption explicitly or stay written
  from this specific lived context, the same way skill #1 was written
  from J's specific practice rather than a generic version.

## Dear reader — on the "Advice to Boys"/"Advice to Girls" gap

The source leaf named a gap: the original material had "Advice to
Boys" and "Advice to Girls" as headers with nothing under either. This
build did not fill them. The relationship-literacy and
identity/independence content in this skill reads as equally
applicable regardless of the kid's gender — the red flags to recognise
and the room to become who you are don't obviously split along that
line, and inventing a split to fill an empty header risked manufacturing
a distinction that isn't actually there. This is a judgment call, not
a settled conclusion — if lived experience surfaces a real difference
worth naming separately, split it out then, from evidence, rather than
from the shape of the original empty headers.

---

## Schema-fit note (required output for this build)

**Where the SKILL.md/reference.md schema held up cleanly:** the basic
split itself — short, in-the-moment file plus full-reasoning backing
file — worked without strain. `grounded-in` / `draws-on` pointers to
existing tree nodes worked identically. `written-for: human` was
still the right call for this content, for the reasons noted above.
Counters and exposed roots slotted in with no forcing.

**Where it felt forced:** skill #1's core structural device — a single
numbered "sequence, in order" — does not fit this content. Skill #1 is
a real-time crisis-response protocol: one trigger, one ordered
response. This skill is closer to an ongoing curriculum lived out over
years, with two teaching threads that don't share one timeline. Forcing
them into five sequential steps would have manufactured a false
before/after relationship between "teach red flags" and "give them
land and independence" that doesn't actually exist — a parent doesn't
do one, then the other. I used two parallel "pillars" instead of one
sequence. This is a real deviation from skill #1's shape, not a
cosmetic one.

A second, smaller strain: skill #1's "When to use this" lists concrete
trigger moments (someone goes quiet, a comment lands too hard). This
skill's "When this comes up" had to be reframed as recurring,
lower-stakes contexts rather than a single acute trigger — the
schema's bullet-list format still worked, but the *kind* of thing being
listed changed from "moments requiring a response right now" to
"moments where the underlying groundwork gets used."

**Proposed amendment (reported, not applied):** the SKILL.md schema
could explicitly support two skill *shapes* rather than assuming one:
a `structure: sequence` skill (like #1, one ordered response to one
trigger) and a `structure: pillars` skill (like #2, parallel threads
lived out over time, no forced ordering). This would make the shape an
explicit, declared property of the skill rather than something a
future builder has to infer from reading the content — which is
exactly the ambiguity this build had to resolve by judgment call. Not
applying this change here — flagging it for J to decide whether it's
worth the added schema complexity, per the standing instruction not to
silently patch the schema.

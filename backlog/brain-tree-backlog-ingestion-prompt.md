# Brain Tree: Backlog Ingestion (Screenshots)

## Before starting
1. Read `CLAUDE.md` in this repo for schema, voice, and prior decisions.
2. Inventory the current Brain Tree taxonomy — list existing category/topic node names. This determines what counts as "existing" vs "proposed" in Step 4.
3. Check for `backlog/_processing_log.md`. If absent, create it (schema below). This is the source of truth for what's already processed — never reprocess a logged item.

## Processing log schema
Design this generically now so it extends to non-screenshot sources later without rework:

| field | notes |
|---|---|
| `source_id` | unique id for the item (cluster id for multi-image items) |
| `source_type` | `screenshot` for now; will later include `url`, `youtube`, `twitter` |
| `source_files` | filename(s) belonging to this item |
| `status` | `pending` / `clustered` / `processed` / `skipped` |
| `category` | assigned category |
| `date_processed` | |

Update the log incrementally as you go (not just at the end) so an interrupted run doesn't lose progress or cause reprocessing.

## Step 1 — Cluster multi-image items
Before full extraction, scan filenames/timestamps in `backlog/screenshots/` for likely sequences (shared prefix, consecutive numbering, adjacent creation times). Confirm with a lightweight check which images are continuations of the same quote/post vs standalone. Record clusters in the log *before* extraction, so extraction runs once per idea, not once per image.

## Step 2 — Extract
Per cluster/standalone image, extract:
- Full text/quote
- Any visible attribution (author/handle/publication)
- One-line visual context (e.g. "IG quote card," "book page photo," "YouTube still + caption")
- `content_type: promotional` tag if it's overtly an ad/product/service pitch — don't discard, just tag it

## Step 3 — Verify source (thorough, bounded)
- If attribution is visible in-image, use it as given (no re-verification needed unless clearly wrong).
- If absent, search up to ~4 targeted attempts: exact phrase → partial phrase → paraphrase/topic → author-guess if one circulates unconfirmed. Then stop.
- Record what you find, or `verification_status: unverified` plus any unconfirmed attribution seen in circulation, clearly labeled as unconfirmed. Never fabricate a source.

## Step 4 — Categorize
- Match against the Step-0 taxonomy inventory where it fits.
- Where nothing fits, propose a new category and mark `category_status: proposed` — this is a flag for later review, not a Tree edit.

## Step 5 — Write to backlog
Append to `backlog/<category>.md` (one file per category as the default; split further if a file gets unwieldy — this doesn't need to be strict yet). Entry template:

```markdown
### [Short title/topic]
- source_id / source_files:
- source_type: screenshot
- date_processed:
- content_type: organic | promotional
- category: | category_status: existing | proposed
- quote/content:
- attribution: | verification_status: confirmed | unverified
- verification_notes:
- tags:
- personal_note: (blank — for later reflection)
```

## Boundaries
- Staging only. Do not edit live Brain Tree node files — output goes to `backlog/` only.
- Don't collapse near-duplicate ideas across sources; log both, note the similarity in `tags` or `verification_notes` instead.

## Efficiency note
Extraction (Step 1–2) is mechanical/vision work; categorization + verification (Step 3–4) is reasoning + search-heavy. If running as sub-agents, it's worth splitting these into separate passes rather than one blended pass per image — cheaper for the mechanical half, and keeps deeper reasoning reserved for triage/verification.

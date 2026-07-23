# Model Selection — Which Tool For Which Job (v1)

*Status: forming — template shape settled, findings need periodic
refresh. Last checked: 2026-07-22.*

*A Tool, not a Skill: lives outside `layers/`, revised on contact with
what actually works, no counters/crossroads/tempering required. See
`WORKING-WITH-J-v1.md` for the companion Tool (how any model should
behave once selected) — this file answers a different question
(which model to reach for), on a different revision trigger (model
capability shifts, not session-behaviour drift).*

## Why this file is shaped like this

Model rankings vacillate — sometimes monthly, sometimes overnight on
a single release. A filled-in leaderboard goes stale fast and stays
wrong quietly. This file is deliberately built as a template: stable
categories that rarely change, with the actual "who's best right now"
answer kept as a separate, explicitly-dated refresh rather than baked
into the structure. Update the findings often; don't restructure the
categories unless the categories themselves stop making sense.

## Use ___ model for ___ work

*(Fill in the current best fit per category -- this is the shape, not
the answer. Modeled on how Anthropic itself frames Sonnet/Opus/Fable:
by role and workload character, not by task checklist.)*

- **Use Claude Sonnet 5 for balanced daily work** -- general writing,
  instruction-following, moderate reasoning, the default you reach for
  first. (Anthropic's own framing as of 2026-06-30 launch.)
- **Use Claude Opus 4.8 for deep, correctness-critical work** -- long
  autonomous tasks, complex debugging; also the default model behind
  Claude Code. Anthropic's own guidance: start at high effort for
  coding/agentic use before reaching for a higher tier.
- **Use Claude Fable 5 for the hardest escalations only** -- top public
  tier, meaningfully more expensive; current guidance across sources
  repeatedly warns against defaulting to it "just to be safe."
- **Use Gemini (3.1 Pro / 3.x family) for abstract/scientific
  reasoning** -- this is the most consistent pattern found, holding
  across several release generations (GPQA Diamond, ARC-AGI-2,
  Humanity's Last Exam) -- Gemini leads specifically on abstract/
  symbolic reasoning, not on applied domains like coding.
- **Use Gemini for very long context or price-sensitive volume work**
  -- near/at 1M-token context, strongest price-performance found.
- **Use Grok (4.5) for real-time/current-events grounding** -- best
  positioned for real-time web/X context per current sources; not
  otherwise a natural fit for tree work.

## Task list -- check current fit per task before relying on memory

- [x] Excel / complex spreadsheet formulas & audits -- **Claude**
      leads independent tests on complex-formula accuracy and
      workbook audits (76/90 in one 30-task study); Copilot in Excel
      now runs Claude models by default (since May 2026).
- [x] Google Sheets (native) -- **Gemini**, free and native to
      Workspace; weaker for native XLSX workflows.
- [x] Coding / agentic software engineering -- **Claude** (Opus 4.8),
      SWE-bench Pro leader; GPT competitive on autonomous agent/
      computer-use benchmarks specifically (Terminal-Bench, OSWorld).
- [ ] Image generation
- [ ] PDF extraction
- [ ] Voice-to-text
- [ ] Video analysis
- [ ] Image analysis
- [ ] Long-document / long-context analysis
- [x] Factual research & citation accuracy -- **contested, not
      settled** -- see dated findings below. Claude tends to say "I
      don't know" rather than guess more often than GPT or Gemini,
      which matters more practically than any single headline
      hallucination percentage.
- [x] Real-time web / current events -- **Grok**, per current sources;
      Gemini also benefits materially from Search grounding when
      enabled.
- [ ] Math / competition-style reasoning

*Note on the list above, named explicitly rather than left implicit:
none of the frontier general-purpose models (Claude, GPT, Gemini)
are clinically validated or purpose-built for therapy-like emotional
support -- this isn't a ranking gap, it's a category mismatch. If that
need ever comes up, the right answer is a dedicated, clinically-tested
tool, not "which frontier model is least bad at it."*

## Before trusting this file

**You should check what models are currently best suited for** each
item above before a consequential decision -- this file's categories
are durable, its answers are not.

**Would you like me to seek out and update this file with the latest
findings?**

## Latest findings (dated, append-only -- don't overwrite prior entries)

```
[2026-07-22] -- Seeded via web search this session. Key findings:

- Excel: Claude leads independent complex-formula/audit testing
  (76/90, one 30-task study); ChatGPT broadest generalist for file
  cleanup and cross-platform work; Gemini free/native to Sheets;
  Copilot in Excel runs Claude by default since May 2026.

- Reasoning (abstract/scientific): Gemini family leads consistently
  across several release generations on GPQA Diamond, ARC-AGI-2, and
  Humanity's Last Exam -- the most stable cross-time pattern found in
  this search pass. Claude and GPT lead applied domains instead
  (coding for Claude; agentic/computer-use for GPT) rather than
  abstract reasoning specifically.

- Factuality/hallucination: genuinely contested across benchmarks --
  do not trust a single headline number. Different benchmarks
  (summarization-faithfulness vs. open-domain recall vs. long-form
  factuality) rank the three families differently, sometimes
  reversing the ranking entirely. One consistent secondary finding:
  reasoning/extended-thinking modes measurably increase hallucination
  rate versus non-reasoning modes on the same model family -- a
  real tradeoff, not just noise. Claude consistently described as
  more willing to say "I don't know" rather than guess.

- Therapy-like/emotional support: no frontier general-purpose model
  (Claude, GPT, Gemini) is clinically validated or purpose-built for
  this. Explicitly a category mismatch, not a ranking question --
  dedicated tools with actual RCT evidence (Woebot, Wysa) exist
  separately and are the honest answer if this need arises.

- GPT-5.6 "Sol" tier: flagged by evaluator METR for elevated
  "scheming" behaviour in its own system card as of seed date --
  noted as a caution for routing anything sensitive there, not a
  disqualifier.

Source quality note: most sources were SEO-style comparison blogs,
not primary benchmark publishers -- treat directional patterns
(e.g. "Gemini repeatedly leads abstract reasoning across generations")
as more trustworthy than any single precise percentage.
```

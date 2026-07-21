# Forge Processing Log

Source of truth for what has already been processed from `forge/`. Never reprocess a logged item (matched by `source_files`). Renamed from `backlog/` 2026-07-21 — the "Forge" framing (see `forge/FS-2026-07-21-001_Forge_Session.md` and related files) settled as the working name for this staging/refinement folder. Historical rows below predate the rename and may still say "backlog" in prose; not rewritten, since they're provenance of what was true when logged.

Schema (generic — extends to non-screenshot sources later without rework):

| field | notes |
|---|---|
| `source_id` | unique id for the item (cluster id for multi-image items) |
| `source_type` | `screenshot` for now; will later include `url`, `youtube`, `twitter` |
| `source_files` | filename(s) belonging to this item |
| `status` | `pending` / `clustered` / `processed` / `skipped` |
| `category` | assigned category |
| `date_processed` | |

---

## Log

| source_id | source_type | source_files | status | category | date_processed |
|---|---|---|---|---|---|
| 2024-08-25-a | screenshot | IMG_031677.PNG | processed | wealth-freedom | 2026-07-17 |
| 2024-09-17-a | screenshot | IMG_031767.PNG | processed | relationships-family | 2026-07-17 |
| 2024-09-17-b | screenshot | IMG_031769.PNG, IMG_031770.PNG, IMG_031771.PNG | processed | work-vocation | 2026-07-17 |
| 2024-09-28-a | screenshot | IMG_031851.PNG | archived-non-tree | home-design (proposed, archived to Drive 2026-07-19) | 2026-07-17 |
| 2024-09-28-b | screenshot | IMG_031852.PNG | archived-non-tree | home-design (proposed, archived to Drive 2026-07-19) | 2026-07-17 |
| 2024-09-28-c | screenshot | IMG_031853.PNG | archived-non-tree | home-design (proposed, archived to Drive 2026-07-19) | 2026-07-17 |
| 2024-09-28-d | screenshot | IMG_031854.PNG | archived-non-tree | home-design (proposed, archived to Drive 2026-07-19) | 2026-07-17 |
| 2024-09-28-e | screenshot | IMG_031855.PNG | archived-non-tree | home-design (proposed, archived to Drive 2026-07-19) | 2026-07-17 |
| 2024-09-28-f | screenshot | IMG_031856.PNG | archived-non-tree | home-design (proposed, archived to Drive 2026-07-19) | 2026-07-17 |
| 2024-09-28-g | screenshot | IMG_031857.PNG | archived-non-tree | home-design (proposed, archived to Drive 2026-07-19) | 2026-07-17 |
| 2024-09-28-h | screenshot | IMG_031858.PNG | archived-non-tree | home-design (proposed, archived to Drive 2026-07-19) | 2026-07-17 |
| 2024-09-30-a | screenshot | IMG_031952.PNG, IMG_031953.PNG, IMG_031954.PNG, IMG_031955.PNG, IMG_031956.PNG | placed | home-organization (proposed, placed as skill-declutter-adhd-family-functioning 2026-07-19) | 2026-07-17 |
| 2024-10-01-a | screenshot | IMG_031957.PNG | processed | wealth-freedom | 2026-07-17 |
| 2024-10-01-b | screenshot | IMG_031962.PNG | processed | wealth-freedom | 2026-07-17 |
| 2024-10-02-a | screenshot | IMG_031976.PNG | processed | wealth-freedom | 2026-07-17 |
| 2025-10-22-video | video | IMG_5366.MOV | skipped | n/a — not a screenshot, no ingestion pipeline for video yet | 2026-07-17 |

| 2024-10-04-a | screenshot | IMG_031990.PNG | processed | learning-intellectual | 2026-07-18 |
| 2024-10-09-a | screenshot | IMG_032117.PNG | processed | physical-wellbeing | 2026-07-18 |
| 2024-10-15-a | screenshot | IMG_032213.JPG | processed | truth-seeking | 2026-07-18 |
| 2024-10-18-a | screenshot | IMG_032249.PNG, IMG_032250.PNG | processed | work-vocation | 2026-07-18 |
| 2024-10-18-b | screenshot | IMG_032253.PNG | archived-non-tree | home-logistics (proposed, archived to Drive 2026-07-19) | 2026-07-18 |
| 2024-10-18-c | screenshot | IMG_032254.PNG | processed | relationships-family | 2026-07-18 |
| 2024-10-22-a | screenshot | IMG_032274.PNG, IMG_032275.PNG, IMG_032276.PNG, IMG_032277.PNG | processed | wealth-freedom | 2026-07-18 |
| 2024-10-30-a | screenshot | IMG_032351.PNG | processed | wealth-freedom | 2026-07-18 |
| 2024-11-08-a | screenshot | IMG_032428.PNG | processed | work-vocation | 2026-07-18 |
| 2024-11-18-a | screenshot | IMG_032487.PNG, IMG_032488.PNG | processed | work-vocation | 2026-07-18 |
| 2024-11-20-a | screenshot | IMG_032498.PNG | processed | 1pct-compounding | 2026-07-18 |
| 2024-11-28-a | screenshot | IMG_032561.PNG | archived-non-tree | home-design (proposed, archived to Drive 2026-07-19) | 2026-07-18 |
| 2025-01-01-a | screenshot | IMG_032727.PNG | processed | art-and-meaning | 2026-07-18 |
| 2025-01-03-a | screenshot | IMG_032728.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-01-05-a | screenshot | IMG_032736.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-01-06-a | screenshot | IMG_032737.PNG | processed | physical-wellbeing | 2026-07-18 |
| 2025-01-07-a | screenshot | IMG_032738.PNG | processed | relationships-family | 2026-07-18 |
| 2025-01-16-a | screenshot | IMG_032769.PNG | processed | aliveness | 2026-07-18 |
| 2025-01-22-a | screenshot | IMG_032780.PNG, IMG_032781.PNG | processed | how-to-live | 2026-07-18 |
| 2025-01-31-a | screenshot | IMG_032810.JPG | processed | work-vocation | 2026-07-18 |
| 2025-01-31-b | screenshot | IMG_032812.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-01-31-c | screenshot | IMG_032813.PNG | processed | work-vocation | 2026-07-18 |
| 2025-02-02-a | screenshot | IMG_032814.PNG, IMG_032815.PNG, IMG_032816.PNG, IMG_032817.PNG, IMG_032818.PNG, IMG_032819.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-02-05-a | screenshot | IMG_032833.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-02-05-b | screenshot | IMG_032834.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-02-18-a | screenshot | IMG_3932.JPG | processed | daily-architecture | 2026-07-18 |
| 2025-02-24-a | screenshot | IMG_3961.PNG | processed | relationships-family | 2026-07-18 |
| 2025-02-25-a | screenshot | IMG_3966.PNG, IMG_3967.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-02-27-a | screenshot | IMG_3970.PNG | processed | work-vocation | 2026-07-18 |
| 2025-03-04-a | screenshot | IMG_3989.PNG, IMG_3990.PNG, IMG_3991.PNG, IMG_3992.PNG, IMG_3993.PNG, IMG_3994.PNG | processed | learning-intellectual | 2026-07-18 |
| 2025-03-09-a | screenshot | IMG_4001.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-03-09-b | screenshot | IMG_E4001.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-03-10-a | screenshot | IMG_4004.JPG | processed | how-to-live | 2026-07-18 |
| 2025-03-12-a | screenshot | IMG_4017.JPG | processed | learning-intellectual | 2026-07-18 |
| 2025-03-14-a | screenshot | IMG_4021.PNG | processed | how-to-live | 2026-07-18 |
| 2025-03-14-b | screenshot | IMG_4022.PNG | processed | work-vocation | 2026-07-18 |
| 2025-03-14-c | screenshot | IMG_4023.JPG | processed | daily-architecture | 2026-07-18 |
| 2025-03-14-d | screenshot | IMG_4024.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-03-14-e | screenshot | IMG_4025.PNG | processed | work-vocation | 2026-07-18 |
| 2025-03-16-a | screenshot | IMG_4028.PNG | processed | relationships-family | 2026-07-18 |
| 2025-03-17-a | screenshot | IMG_4043.PNG | processed | self-worth-identity | 2026-07-18 |
| 2025-03-18-a | screenshot | IMG_4044.PNG | processed | relationships-family | 2026-07-18 |
| 2025-03-18-b | screenshot | IMG_4045.PNG | processed | philosophy-and-action | 2026-07-18 |
| 2025-03-18-c | screenshot | IMG_4046.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-03-18-d | screenshot | IMG_4049.PNG | processed | relationships-family | 2026-07-18 |
| 2025-03-19-a | screenshot | IMG_4050.PNG | processed | relationships-family | 2026-07-18 |
| 2025-03-19-b | screenshot | IMG_4051.PNG | processed | self-worth-identity | 2026-07-18 |
| 2025-03-19-c | screenshot | IMG_4055.JPG | processed | courage | 2026-07-18 |
| 2025-03-19-d | screenshot | IMG_4057.PNG | processed | relationships-family | 2026-07-18 |
| 2025-03-19-e | screenshot | IMG_4058.PNG | processed | behaviour-as-signal | 2026-07-18 |
| 2025-03-22-a | screenshot | IMG_4074.PNG | processed | behaviour-as-signal | 2026-07-18 |
| 2025-03-22-b | screenshot | IMG_4075.PNG | processed | relationships-family | 2026-07-18 |
| test-a | screenshot | IMG_4077.PNG | processed | learning-intellectual | 2026-07-18 |
| 2025-04-24-a | screenshot | IMG_4338.PNG | processed | learning-intellectual | 2026-07-18 |
| 2025-04-25-a | screenshot | IMG_4356.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-04-30-a | screenshot | IMG_4469.JPG | processed | work-vocation | 2026-07-18 |
| 2025-04-30-b | screenshot | IMG_4473.PNG | processed | stoicism | 2026-07-18 |
| 2025-04-30-c | screenshot | IMG_4474.PNG | placed | life-planning (proposed, mechanism unified with map-life-domain-audit as map-life-direction-cycle 2026-07-19, raw 6-step artifact discarded as unattributed) | 2026-07-18 |
| 2025-05-02-a | screenshot | IMG_4479.JPG | processed | work-vocation | 2026-07-18 |
| 2025-05-04-a | screenshot | IMG_4487.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-05-04-b | screenshot | IMG_4488.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-05-05-a | screenshot | IMG_4489.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-05-05-b | screenshot | IMG_4490.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-05-05-c | screenshot | IMG_4497.JPG | processed | daily-architecture | 2026-07-18 |
| 2025-05-05-d | screenshot | IMG_4498.JPG | processed | work-vocation | 2026-07-18 |
| 2025-05-07-a | screenshot | IMG_4500.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-05-10-a | screenshot | IMG_4556.PNG, IMG_4557.PNG, IMG_4558.PNG, IMG_4559.PNG, IMG_4560.PNG, IMG_4561.PNG, IMG_4562.PNG | processed | relationships-family | 2026-07-18 |
| 2025-05-16-a | screenshot | IMG_4590.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-05-16-b | screenshot | IMG_E4590.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-05-18-a | screenshot | IMG_4592.PNG | processed | work-vocation | 2026-07-18 |
| 2025-05-21-a | screenshot | IMG_4613.JPG | processed | relationships-family | 2026-07-18 |
| 2025-05-21-b | screenshot | IMG_4614.JPG | processed | relationships-family | 2026-07-18 |
| 2025-05-21-c | screenshot | IMG_4615.JPG | processed | relationships-family | 2026-07-18 |
| 2025-05-21-d | screenshot | IMG_4616.JPG | processed | relationships-family | 2026-07-18 |
| 2025-05-22-a | screenshot | IMG_4618.JPG | processed | courage | 2026-07-18 |
| 2025-05-24-a | screenshot | IMG_4632.PNG, IMG_4633.PNG, IMG_4634.PNG, IMG_4635.PNG, IMG_4636.PNG, IMG_4637.PNG | archived-non-tree | home-buying (proposed, archived to Drive 2026-07-19) | 2026-07-18 |
| 2025-05-30-a | screenshot | IMG_4668.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-06-03-a | screenshot | IMG_4718.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-06-03-b | screenshot | IMG_4719.JPG | placed | life-audit (proposed, mechanism placed as map-life-domain-audit + skill-third-party-life-audit-pass 2026-07-19, original 8-area list discarded as unattributed) | 2026-07-18 |
| 2025-06-03-c | screenshot | IMG_4720.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-06-07-a | screenshot | IMG_4731.PNG | processed | relationships-family | 2026-07-18 |
| 2025-06-11-a | screenshot | IMG_4741.PNG | processed | work-vocation | 2026-07-18 |
| 2025-06-11-b | screenshot | IMG_4742.PNG, IMG_4743.PNG | processed | work-vocation | 2026-07-18 |
| 2025-06-29-a | screenshot | IMG_4862.PNG, IMG_4863.PNG | processed | sub-conscious-sacrifice | 2026-07-18 |
| 2025-07-03-a | screenshot | IMG_4902.PNG, IMG_4903.PNG | processed | 1pct-compounding | 2026-07-18 |
| 2025-07-10-a | screenshot | IMG_4921.PNG | processed | work-vocation | 2026-07-18 |
| 2025-07-12-a | screenshot | IMG_4937.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-07-12-b | screenshot | IMG_4938.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-07-19-a | screenshot | IMG_4960.PNG | processed | relationships-family | 2026-07-18 |
| 2025-07-22-a | screenshot | IMG_4964.JPG | processed | relationships-family | 2026-07-18 |
| 2025-07-31-a | screenshot | IMG_4975.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-07-31-b | screenshot | IMG_4976.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-08-01-a | screenshot | IMG_4996.PNG | processed | relationships-family | 2026-07-18 |
| 2025-08-07-a | screenshot | IMG_5016.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-08-07-b | screenshot | IMG_5021.JPG | processed | learning-intellectual | 2026-07-18 |
| 2025-08-09-a | screenshot | IMG_5026.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-08-10-a | screenshot | IMG_5027.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-08-11-a | screenshot | IMG_5045.PNG | processed | work-vocation | 2026-07-18 |
| 2025-08-11-b | screenshot | IMG_5046.PNG | processed | work-vocation | 2026-07-18 |
| 2025-08-13-a | screenshot | IMG_5053.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-08-15-a | screenshot | IMG_5063.PNG, IMG_5064.PNG | processed | relationships-family | 2026-07-18 |
| 2025-08-18-a | screenshot | IMG_5076.PNG | processed | agri-automation-tech (proposed) | 2026-07-18 |
| 2025-08-30-a | screenshot | IMG_5122.JPG | processed | work-vocation | 2026-07-18 |
| 2025-09-08-a | screenshot | IMG_5151.PNG, IMG_5152.PNG, IMG_5153.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-09-09-a | screenshot | IMG_5155.PNG | processed | work-vocation | 2026-07-18 |
| 2025-09-09-b | screenshot | IMG_5156.PNG | processed | relationships-family | 2026-07-18 |
| 2025-09-17-a | screenshot | IMG_5205.JPG | processed | 1pct-compounding | 2026-07-18 |
| 2025-09-17-b | screenshot | IMG_5206.JPG | processed | relationships-family | 2026-07-18 |
| 2025-09-17-c | screenshot | IMG_5207.PNG | processed | physical-wellbeing | 2026-07-18 |
| 2025-09-21-a | screenshot | IMG_5216.JPG, IMG_5217.JPG, IMG_5218.JPG, IMG_5219.JPG, IMG_5220.JPG, IMG_5221.JPG, IMG_5222.JPG, IMG_5223.JPG | processed | relationships-family | 2026-07-18 |
| 2025-09-21-b | screenshot | IMG_5226.JPG, IMG_5227.JPG, IMG_5228.JPG, IMG_5229.JPG, IMG_5230.JPG, IMG_5231.JPG, IMG_5232.JPG, IMG_5233.JPG | processed | courage | 2026-07-18 |
| 2025-09-27-a | screenshot | IMG_5257.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-09-28-a | screenshot | IMG_5258.PNG | processed | work-vocation | 2026-07-18 |
| 2025-09-29-a | screenshot | IMG_5267.PNG | processed | learning-intellectual | 2026-07-18 |
| 2025-09-30-a | screenshot | IMG_5268.PNG | processed | work-vocation | 2026-07-18 |
| 2025-09-30-b | screenshot | IMG_5269.PNG | processed | people-before-process | 2026-07-18 |
| 2025-10-03-a | screenshot | IMG_5285.PNG | processed | relationships-family | 2026-07-18 |
| 2025-10-04-a | screenshot | IMG_5289.PNG | processed | how-to-live | 2026-07-18 |
| 2025-10-04-b | screenshot | IMG_5290.PNG | processed | daily-architecture | 2026-07-18 |
| 2025-10-04-c | screenshot | IMG_5291.JPG | processed | stoicism | 2026-07-18 |
| 2025-10-05-a | screenshot | IMG_5292.PNG | processed | self-worth-identity | 2026-07-18 |
| 2025-10-05-b | screenshot | IMG_5293.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-10-05-c | screenshot | IMG_5294.PNG | processed | daily-architecture | 2026-07-18 |
| 2025-10-05-d | screenshot | IMG_5295.PNG | processed | behaviour-as-signal | 2026-07-18 |
| 2025-10-07-a | screenshot | IMG_5301.PNG, IMG_5302.PNG | processed | brain | 2026-07-18 |
| 2025-10-20-a | screenshot | IMG_5359.PNG | processed | work-vocation | 2026-07-18 |
| 2025-10-22-a | screenshot | IMG_5366.JPG | processed | work-vocation | 2026-07-18 |
| 2025-11-01-a | screenshot | IMG_5420.PNG | processed | learning-intellectual | 2026-07-18 |
| 2025-11-01-b | screenshot | IMG_5421.PNG, IMG_5422.PNG | processed | work-vocation | 2026-07-18 |
| 2025-11-01-c | screenshot | IMG_5423.JPG | processed | work-vocation | 2026-07-18 |
| 2025-11-10-a | screenshot | IMG_5462.PNG | processed | relationships-family | 2026-07-18 |
| 2025-11-11-a | screenshot | IMG_5472.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-11-12-a | screenshot | IMG_5492.JPG | processed | self-worth-identity | 2026-07-18 |
| 2025-11-13-a | screenshot | IMG_5494.JPG | processed | relationships-family | 2026-07-18 |
| 2025-11-16-a | screenshot | IMG_E5518.JPG | processed | work-vocation | 2026-07-18 |
| 2025-11-19-a | screenshot | IMG_E5529.JPG | processed | personal-security (proposed) | 2026-07-18 |
| 2025-11-22-a | screenshot | IMG_5549.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-11-22-b | screenshot | IMG_5550.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-11-25-a | screenshot | IMG_5565.JPG, IMG_5566.JPG, IMG_5567.JPG, IMG_5568.JPG, IMG_5569.JPG, IMG_5570.JPG, IMG_5571.JPG | processed | behaviour-as-signal | 2026-07-18 |
| 2025-11-30-a | screenshot | IMG_5590.JPG | processed | wealth-freedom | 2026-07-18 |
| 2025-12-07-a | screenshot | IMG_5606.JPG | processed | stoicism | 2026-07-18 |
| 2025-12-08-a | screenshot | IMG_5607.PNG | archived-non-tree | home-design (proposed, archived to Drive 2026-07-19) | 2026-07-18 |
| 2025-12-08-b | screenshot | IMG_5608.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-12-09-a | screenshot | IMG_5610.JPG | processed | work-vocation | 2026-07-18 |
| 2025-12-11-a | screenshot | IMG_5625.JPG | processed | work-vocation | 2026-07-18 |
| 2025-12-13-a | screenshot | IMG_5654.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-12-14-a | screenshot | IMG_5655.PNG, IMG_5656.PNG, IMG_5657.PNG, IMG_5658.PNG | processed | truth-seeking | 2026-07-18 |
| 2025-12-14-ax | screenshot | IMG_5659.JPG | processed | work-vocation | 2026-07-18 |
| 2025-12-15-a | screenshot | IMG_5663.PNG | processed | work-vocation | 2026-07-18 |
| 2025-12-20-a | screenshot | IMG_5683.PNG | discarded | local-events (proposed, discarded 2026-07-19) | 2026-07-18 |
| 2025-12-24-a | screenshot | IMG_5688.PNG | processed | truth-seeking | 2026-07-18 |
| 2025-12-24-b | screenshot | IMG_5689.PNG | processed | daily-architecture | 2026-07-18 |
| 2025-12-24-c | screenshot | IMG_5690.PNG | processed | self-worth-identity | 2026-07-18 |
| 2025-12-31-a | screenshot | IMG_5714.PNG | processed | work-vocation | 2026-07-18 |
| 2025-12-31-b | screenshot | IMG_5715.JPG | processed | work-vocation | 2026-07-18 |
| 2025-12-31-c | screenshot | IMG_5716.JPG | processed | work-vocation | 2026-07-18 |
| 2026-01-05-a | screenshot | IMG_5722.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-01-05-b | screenshot | IMG_5723.PNG | processed | how-to-live | 2026-07-18 |
| 2026-01-06-a | screenshot | IMG_5724.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-01-06-b | screenshot | IMG_5725.PNG | processed | work-vocation | 2026-07-18 |
| 2026-01-08-a | screenshot | IMG_5737.PNG | processed | work-vocation | 2026-07-18 |
| 2026-01-08-b | screenshot | IMG_5738.PNG | processed | work-vocation | 2026-07-18 |
| 2026-01-08-c | screenshot | IMG_5739.PNG | processed | self-worth-identity | 2026-07-18 |
| 2026-01-10-a | screenshot | IMG_5743.PNG | processed | nutrition | 2026-07-18 |
| 2026-01-11-a | screenshot | IMG_5748.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-01-11-b | screenshot | IMG_5749.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-01-11-c | screenshot | IMG_5750.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-01-11-d | screenshot | IMG_5751.PNG | processed | daily-architecture | 2026-07-18 |
| 2026-01-13-a | screenshot | IMG_5757.PNG | processed | work-vocation | 2026-07-18 |
| 2026-01-13-b | screenshot | IMG_5761.PNG | processed | relationships-family | 2026-07-18 |
| 2026-01-14-a | screenshot | IMG_5762.PNG | processed | work-vocation | 2026-07-18 |
| 2026-01-15-a | screenshot | IMG_5763.PNG | processed | learning-intellectual | 2026-07-18 |
| 2026-01-15-b | screenshot | IMG_5777.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-01-15-c | screenshot | IMG_5778.PNG | processed | work-vocation | 2026-07-18 |
| 2026-01-16-a | screenshot | IMG_5782.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-01-17-a | screenshot | IMG_5783.PNG | processed | work-vocation | 2026-07-18 |
| 2026-01-17-b | screenshot | IMG_5784.PNG | processed | daily-architecture | 2026-07-18 |
| 2026-01-17-c | screenshot | IMG_5785.PNG | processed | meaning | 2026-07-18 |
| 2026-01-18-a | screenshot | IMG_5786.PNG | processed | learning-intellectual | 2026-07-18 |
| 2026-01-18-b | screenshot | IMG_5787.PNG | processed | learning-intellectual | 2026-07-18 |
| 2026-01-18-c | screenshot | IMG_5788.PNG | processed | self-affirmation-mechanism | 2026-07-18 |
| 2026-01-26-a | screenshot | IMG_5802.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-01-26-b | screenshot | IMG_5803.PNG | processed | work-vocation | 2026-07-18 |
| 2026-01-29-a | screenshot | IMG_5804.PNG | processed | nervous-system | 2026-07-18 |
| 2026-01-29-b | screenshot | IMG_5805.PNG | processed | nervous-system | 2026-07-18 |
| 2026-01-30-a | screenshot | IMG_5808.PNG, IMG_5809.PNG | processed | intentional-living (proposed) | 2026-07-18 |
| 2026-01-30-b | screenshot | IMG_5810.PNG | processed | daily-architecture | 2026-07-18 |
| 2026-01-31-a | screenshot | IMG_5811.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-02-01-a | screenshot | IMG_5819.PNG | archived-non-tree | homestead-land-selection (proposed, archived to Drive 2026-07-19) | 2026-07-18 |
| 2026-02-06-a | screenshot | IMG_5898.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-02-07-a | screenshot | IMG_5903.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-02-07-b | screenshot | IMG_5904.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-02-08-a | screenshot | IMG_5905.PNG | processed | work-vocation | 2026-07-18 |
| 2026-02-08-b | screenshot | IMG_5906.PNG, IMG_5907.PNG, IMG_5908.PNG, IMG_5909.PNG, IMG_5910.PNG, IMG_5911.PNG, IMG_5912.PNG | processed | 1pct-compounding | 2026-07-18 |
| 2026-02-15-a | screenshot | IMG_5945.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-02-16-a | screenshot | IMG_5947.PNG, IMG_5948.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-02-16-b | screenshot | IMG_5950.PNG, IMG_5951.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-02-18-a | screenshot | IMG_5967.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-02-18-b | screenshot | IMG_5968.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-02-18-c | screenshot | IMG_5969.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-02-18-d | screenshot | IMG_5973.PNG | processed | physical-wellbeing | 2026-07-18 |
| 2026-02-19-a | screenshot | IMG_6012.PNG | processed | relationships-family | 2026-07-18 |
| 2026-02-23-a | screenshot | IMG_6051.PNG | processed | stoicism | 2026-07-18 |
| 2026-02-25-a | screenshot | IMG_6060.PNG | archived-non-tree | enterprise-tech (proposed, archived to Drive 2026-07-19) | 2026-07-18 |
| 2026-02-27-a | screenshot | IMG_6074.PNG | processed | how-to-live | 2026-07-18 |
| 2026-03-01-a | screenshot | IMG_6075.PNG | processed | work-vocation | 2026-07-18 |
| 2026-03-09-a | screenshot | IMG_6109.JPG | processed | relationships-family | 2026-07-18 |
| 2026-03-09-b | screenshot | IMG_6111.PNG | processed | work-vocation | 2026-07-18 |
| 2026-03-15-a | screenshot | IMG_6127.PNG | processed | relationships-family | 2026-07-18 |
| 2026-03-16-a | screenshot | IMG_6144.PNG | processed | learning-intellectual | 2026-07-18 |
| 2026-03-16-b | screenshot | IMG_6146.PNG, IMG_6147.PNG, IMG_6148.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-03-17-a | screenshot | IMG_6152.JPG | processed | relationships-family | 2026-07-18 |
| 2026-03-19-a | screenshot | IMG_6166.PNG, IMG_6167.PNG, IMG_6168.PNG, IMG_6169.PNG | processed | work-vocation | 2026-07-18 |
| 2026-03-20-a | screenshot | IMG_6172.PNG | processed | relationships-family | 2026-07-18 |
| 2026-03-22-a | screenshot | IMG_6174.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-03-25-a | screenshot | IMG_6183.PNG, IMG_6184.PNG, IMG_6185.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-03-28-a | screenshot | IMG_6230.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-03-30-a | screenshot | IMG_6331.PNG | processed | work-vocation | 2026-07-18 |
| 2026-04-01-a | screenshot | IMG_6332.PNG | discarded | health-policy (proposed, discarded 2026-07-19) | 2026-07-18 |
| 2026-04-01-b | screenshot | IMG_6333.PNG, IMG_6334.PNG | processed | work-vocation | 2026-07-18 |
| 2026-04-03-a | screenshot | IMG_6343.PNG | processed | daily-architecture | 2026-07-18 |
| 2026-04-03-b | screenshot | IMG_6344.PNG | archived-non-tree | homesteading (proposed, archived to Drive 2026-07-19) | 2026-07-18 |
| 2026-04-04-a | screenshot | IMG_6346.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-04-05-a | screenshot | IMG_6347.PNG | processed | work-vocation | 2026-07-18 |
| 2026-04-10-a | screenshot | IMG_6407.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-04-10-b | screenshot | IMG_6408.PNG | processed | work-vocation | 2026-07-18 |
| 2026-04-12-a | screenshot | IMG_6438.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-04-13-a | screenshot | IMG_6439.PNG, IMG_6440.PNG, IMG_6441.PNG | processed | people-before-process | 2026-07-18 |
| 2026-04-13-b | screenshot | IMG_6443.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-04-14-a | screenshot | IMG_6445.PNG | processed | life-admin (proposed) | 2026-07-18 |
| 2026-04-19-a | screenshot | IMG_6502.PNG, IMG_6503.PNG | processed | people-before-process | 2026-07-18 |
| 2026-04-25-a | screenshot | IMG_6557.PNG | processed | relationships-family | 2026-07-18 |
| 2026-04-27-a | screenshot | IMG_6565.PNG | processed | work-vocation | 2026-07-18 |
| 2026-04-27-b | screenshot | IMG_6566.PNG | processed | work-vocation | 2026-07-18 |
| 2026-04-29-a | screenshot | IMG_6573.PNG, IMG_6574.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-05-01-a | screenshot | IMG_6580.PNG | processed | relationships-family | 2026-07-18 |
| 2026-05-01-b | screenshot | IMG_E6580.JPG | processed | relationships-family | 2026-07-18 |
| 2026-05-01-c | screenshot | IMG_6581.PNG | processed | behaviour-as-signal | 2026-07-18 |
| 2026-05-04-a | screenshot | IMG_6584.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-05-11-a | screenshot | IMG_6600.PNG | archived-non-tree | travel (proposed, archived to Drive 2026-07-19) | 2026-07-18 |
| 2026-05-17-a | screenshot | IMG_6617.PNG | processed | work-vocation | 2026-07-18 |
| 2026-05-17-b | screenshot | IMG_6618.PNG | processed | behaviour-as-signal | 2026-07-18 |
| 2026-05-17-c | screenshot | IMG_6619.PNG, IMG_6620.PNG, IMG_6621.PNG | processed | learning-intellectual | 2026-07-18 |
| 2026-05-20-a | screenshot | IMG_6629.PNG | processed | work-vocation | 2026-07-18 |
| 2026-05-20-b | screenshot | IMG_6630.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-05-20-c | screenshot | IMG_6631.JPG | processed | work-vocation | 2026-07-18 |
| 2026-05-21-a | screenshot | IMG_6633.PNG | processed | learning-intellectual | 2026-07-18 |
| 2026-05-21-b | screenshot | IMG_6636.JPG, IMG_6637.JPG, IMG_6638.JPG, IMG_6639.JPG, IMG_6640.JPG, IMG_6641.JPG, IMG_6642.JPG, IMG_6643.JPG, IMG_6644.JPG, IMG_6645.JPG | processed | 1pct-compounding | 2026-07-18 |
| 2026-05-21-ax | screenshot | IMG_6648.PNG | processed | relationships-family | 2026-07-18 |
| 2026-05-22-a | screenshot | IMG_6649.PNG | processed | work-vocation | 2026-07-18 |
| 2026-05-26-a | screenshot | IMG_6658.JPG | processed | nervous-system | 2026-07-18 |
| 2026-05-28-a | screenshot | IMG_6661.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-05-28-b | screenshot | IMG_6662.PNG | processed | behaviour-as-signal | 2026-07-18 |
| 2026-06-01-a | screenshot | IMG_6668.PNG | processed | work-vocation | 2026-07-18 |
| 2026-06-02-a | screenshot | IMG_6669.PNG | processed | ai-tools (proposed) | 2026-07-18 |
| 2026-06-02-b | screenshot | IMG_6670.PNG | processed | work-vocation | 2026-07-18 |
| 2026-06-02-c | screenshot | IMG_6671.PNG | processed | learning-intellectual | 2026-07-18 |
| 2026-06-02-d | screenshot | IMG_6673.PNG | placed | ai-tools (proposed, token-management/session-hygiene cluster placed as skill-claude-surface-and-context-management 2026-07-19, superseding an unverified skill-ai-session-hygiene draft; other ai-tools.md items remain unplaced) | 2026-07-18 |
| 2026-06-02-e | screenshot | IMG_6674.PNG | processed | work-vocation | 2026-07-18 |
| 2026-06-02-f | screenshot | IMG_6675.PNG | processed | work-vocation | 2026-07-18 |
| 2026-06-02-g | screenshot | IMG_6679.PNG | processed | ai-tools (proposed) | 2026-07-18 |
| 2026-06-03-a | screenshot | IMG_6682.PNG | processed | work-vocation | 2026-07-18 |
| 2026-06-04-a | screenshot | IMG_6685.PNG | processed | ai-tools (proposed) | 2026-07-18 |
| 2026-06-06-a | screenshot | IMG_6688.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-06-10-a | screenshot | IMG_6707.PNG | processed | aliveness | 2026-07-18 |
| 2026-06-10-b | screenshot | IMG_6709.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-06-10-c | screenshot | IMG_6710.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-06-10-d | screenshot | IMG_6711.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-06-12-a | screenshot | IMG_6714.PNG | processed | work-vocation | 2026-07-18 |
| 2026-06-12-ax | screenshot | IMG_6715.PNG | processed | physical-wellbeing | 2026-07-18 |
| 2026-06-13-a | screenshot | IMG_6735.PNG | processed | work-vocation | 2026-07-18 |
| 2026-06-14-a | screenshot | IMG_6743.JPG | processed | work-vocation | 2026-07-18 |
| 2026-06-17-a | screenshot | IMG_6749.PNG | processed | relationships-family | 2026-07-18 |
| 2026-06-18-a | screenshot | IMG_6752.PNG | processed | relationships-family | 2026-07-18 |
| 2026-06-26-a | screenshot | IMG_6872.PNG, IMG_6873.PNG | processed | self-worth-identity | 2026-07-18 |
| 2026-06-28-a | screenshot | IMG_6888.PNG, IMG_6889.PNG, IMG_6890.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-06-28-b | screenshot | IMG_6892.PNG | processed | learning-intellectual | 2026-07-18 |
| 2026-06-28-c | screenshot | IMG_E6892.JPG | processed | art-and-meaning | 2026-07-18 |
| 2026-06-28-d | screenshot | IMG_6893.PNG | processed | learning-intellectual | 2026-07-18 |
| 2026-06-28-e | screenshot | IMG_E6893.JPG | processed | art-and-meaning | 2026-07-18 |
| 2026-07-13-a | screenshot | IMG_7005.PNG | archived-non-tree | dev-tools-reference (proposed, archived to Drive 2026-07-19) | 2026-07-18 |
| 2026-07-14-a | screenshot | IMG_7013.PNG | processed | work-vocation | 2026-07-18 |
| 2026-07-15-a | screenshot | IMG_7017.PNG | processed | relationships-family | 2026-07-18 |
| 2026-07-15-b | screenshot | IMG_7018.PNG | processed | relationships-family | 2026-07-18 |
| 2026-07-16-a | screenshot | IMG_7020.PNG | processed | behaviour-as-signal | 2026-07-18 |
| 2026-07-17-a | screenshot | IMG_7024.PNG | processed | learning-intellectual | 2026-07-18 |
| 2026-07-17-b | screenshot | IMG_7025.PNG, IMG_7026.PNG | processed | relationships-family | 2026-07-18 |
| 2025-03-30-a | screenshot | IMG_4098.PNG, IMG_4099.PNG | processed | relationships-family | 2026-07-18 |
| 2025-03-30-b | screenshot | IMG_4100.PNG | processed | relationships-family | 2026-07-18 |
| 2025-03-30-c | screenshot | IMG_4101.JPG | processed | relationships-family | 2026-07-18 |
| 2025-03-31-a | screenshot | IMG_4102.JPG | processed | relationships-family | 2026-07-18 |
| 2025-04-17-a | screenshot | IMG_4299.PNG, IMG_4300.PNG | processed | nervous-system | 2026-07-18 |
| 2025-04-17-b | screenshot | IMG_4301.PNG | processed | physical-wellbeing | 2026-07-18 |
| 2025-04-20-a | screenshot | IMG_4308.PNG | processed | daily-architecture | 2026-07-18 |
| 2025-04-21-a | screenshot | IMG_4314.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-04-21-b | screenshot | IMG_4315.PNG | processed | relationships-family | 2026-07-18 |
| 2025-04-21-c | screenshot | IMG_4316.PNG | processed | wealth-freedom | 2026-07-18 |
| 2025-04-22-a | screenshot | IMG_4317.JPG | processed | daily-architecture | 2026-07-18 |
| 2025-04-22-b | screenshot | IMG_4318.PNG | processed | self-worth-identity | 2026-07-18 |
| 2025-04-23-a | screenshot | IMG_4319.JPG | processed | work-vocation | 2026-07-18 |
| 2025-04-23-b | screenshot | IMG_4321.PNG | processed | self-and-relation | 2026-07-18 |
| 2025-04-23-c | screenshot | IMG_4322.PNG, IMG_4323.PNG, IMG_4324.PNG | processed | learning-intellectual | 2026-07-18 |
| 2025-04-23-d | screenshot | IMG_4325.PNG, IMG_4326.PNG, IMG_4327.PNG, IMG_4328.PNG, IMG_4329.PNG, IMG_4330.PNG | processed | wealth-freedom | 2026-07-18 |
| 2026-01-13-fix | screenshot | IMG_5760.PNG | processed | relationships-family | 2026-07-18 |
| 2026-06-05-fix | screenshot | IMG_6687.PNG | processed | work-vocation | 2026-07-18 |

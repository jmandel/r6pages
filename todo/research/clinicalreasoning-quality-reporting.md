# clinicalreasoning-quality-reporting research appendix

## Scope and coverage

- Page path: `source/clinicalreasoning-quality-reporting.html`
- Old version/source: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/source: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: present in both trees. Old file has 301 lines; new file has 711 lines.
- New page read end-to-end: yes, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-quality-reporting.html:1-711`.
- Direct diff: 487 insertions and 77 deletions. Most changes are substantive guidance additions, not boilerplate.
- Source history: 25 commits touched the page between the two commits.
- Explicit Jira keys from commit metadata/patches: `FHIR-18448`, `FHIR-29951`, `FHIR-34351`, `FHIR-40256`, `FHIR-40268`, `FHIR-41272`, `FHIR-49273`, `FHIR-50012`, `FHIR-50256`, `FHIR-50284`, `FHIR-50484`, `FHIR-50487`, `FHIR-50500`, `FHIR-50526`, `FHIR-53139`, plus legacy `J#21220`, `J#25718`, `J#26695`, `J#37559`, `J#39605` interpreted as `FHIR-21220`, `FHIR-25718`, `FHIR-26695`, `FHIR-37559`, `FHIR-39605`.
- Additional relevant Jira keys followed from snapshots/searches: `FHIR-45727`, `FHIR-49824`, `FHIR-50486`, `FHIR-51856`, `FHIR-53278`, `FHIR-53433`.
- Jira searches performed: snapshots for all explicit keys above; phrase searches for `$evaluate-measure`, `Basic/CMS146`, `subject=124`, `value-based stratifiers`, `basisRequirement`, `Helth IT certifiaction`, `Cooking With CQL CAUTI`, and `Ad-Hoc Organizations`.
- Zulip searches performed: explicit Jira key FTS searches and changed-phrase searches. Initial unquoted key searches failed because FTS parsed hyphenated keys as operators; rerun with quoted keys found no relevant hits. Phrase searches found no relevant hits.
- Confluence searches performed: `refs jira` for the main explicit/relevant Jira keys and phrase searches for `Quality Reporting final_edits`, `value-based stratifiers`, `basisRequirement`, `Ad-Hoc Organizations`, and `clinicalreasoning-quality-reporting`. Only `FHIR-53433` had Confluence references.
- Caveats: Jira issue `FHIR-50012` relies on an attached Word document and a Confluence attachment link; the local snapshot records the attachment/link but not the document contents. Some later evidence (`FHIR-53433`, 2026 Confluence) post-dates the R6 ballot4 source tree and is treated as later reassessment, not as provenance for the R4 -> R6 ballot4 diff.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New page, full R6 ballot4 source | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-quality-reporting.html:1-711` | Current reviewed page |
| Source | Subject/basis and `basisRequirement` guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-quality-reporting.html:67-103` | New semantic guidance, including `basisRequirement` SHALL/SHALL NOT language |
| Source | Scoring-method guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-quality-reporting.html:112-256` | New population/scoring instructions |
| Source | Stratification guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-quality-reporting.html:258-444` | New stratifier examples and several rendering/editorial issues |
| Source | Invoking measures | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-quality-reporting.html:498-541` | Stale `$evaluate-measure` guidance and examples |
| Source | Data exchange/ad-hoc organizations | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-quality-reporting.html:543-623` | New SHOULD/SHALL guidance from DEQM alignment, with parameter-name mismatch |
| Source | MeasureReport section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-quality-reporting.html:625-669` | Now says MeasureReport is returned by `$evaluate`, conflicting with earlier `$evaluate-measure` section |
| Source | Current `$evaluate` OperationDefinition | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/measure/operationdefinition-Measure-evaluate.xml:41-68` | Defines current `evaluate` operation, type-level only (`instance=false`) |
| Source | Retired `$evaluate-measure` OperationDefinition | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/measure/operationdefinition-Measure-evaluate-measure.xml:11-13`, `:61-86` | Marks old operation deprecated/retired |
| Source | `$evaluate` reporter parameters | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/measure/operationdefinition-Measure-evaluate.xml:129-142` | Uses `reporter` / `reporterResource`, not `provider` / `providerResource` |
| Source | `$collect-data` organization/reporting parameters | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/measure/operationdefinition-Measure-collect-data.xml:107-130` | Shows mixed `reporter`, `reporterResource`, `organizationResource` naming |
| Source | `$care-gaps` organization parameters | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/measure/operationdefinition-Measure-care-gaps.xml:248-261` | Uses `organization` / `organizationResource` |
| Commit | Broad Quality Reporting rewrite | `930dc756d24c59c97108f02aef5c0ee343121191`, https://github.com/HL7/fhir/commit/930dc756d24c59c97108f02aef5c0ee343121191, PR https://github.com/HL7/fhir/pull/3423 | Implements `FHIR-50012`, the largest page-specific rewrite |
| Commit | Add data exchange guidance | `894f1a69b8d78338b0bb2dc33d5637386357d6cc`, https://github.com/HL7/fhir/commit/894f1a69b8d78338b0bb2dc33d5637386357d6cc | Implements `FHIR-50487` topic additions for bundles/duplicates |
| Commit | Add ad-hoc organization guidance | `6fe0e09ed5ad8427fe9bced6e5051af38b009fb0`, https://github.com/HL7/fhir/commit/6fe0e09ed5ad8427fe9bced6e5051af38b009fb0, PR https://github.com/HL7/fhir/pull/3932 | Adds ad-hoc Organization section; related to `FHIR-50484`/`FHIR-53278` |
| Commit | Add basisRequirement guidance | `66fb8f7700bd0f3eaeb2770f0b5625c2ad5072af`, https://github.com/HL7/fhir/commit/66fb8f7700bd0f3eaeb2770f0b5625c2ad5072af | Implements `FHIR-50500` |
| Commit | Add scoring-method guidance | `4cfc13a189b9ec12a139b1c15844d40bde98cf3f`, https://github.com/HL7/fhir/commit/4cfc13a189b9ec12a139b1c15844d40bde98cf3f, PR https://github.com/HL7/fhir/pull/3941 | Implements `FHIR-41272` |
| Commit | Add value-based stratifier guidance | `a313c0542179c48816e8f4f588548130d7225e6a`, https://github.com/HL7/fhir/commit/a313c0542179c48816e8f4f588548130d7225e6a, PR https://github.com/HL7/fhir/pull/3941 | Implements `FHIR-53139`; introduced several examples |
| Jira | `FHIR-50484` | https://jira.hl7.org/browse/FHIR-50484; local snapshot `.copilot/session-state/79fa6a5f-f891-4291-bc98-d27d24e6c828/files/jira-clinicalreasoning-quality-reporting/FHIR-50484.md:35-48` | Says align Measure `$evaluate` with DEQM and correct `$evaluate-measure` to `$evaluate` |
| Jira | `FHIR-50486` | https://jira.hl7.org/browse/FHIR-50486; snapshot `.../FHIR-50486.md:31-35` | Confirms `$evaluate-measure` was already deprecated |
| Jira | `FHIR-45727` | https://jira.hl7.org/browse/FHIR-45727; snapshot `.../FHIR-45727.md:59-73` | Operation example disposition says use `subject=Patient/124` |
| Jira | `FHIR-53278` | https://jira.hl7.org/browse/FHIR-53278; snapshot `.../FHIR-53278.md:33-48`, `:54-61` | Ad-hoc Organization alignment and operation parameter rationale |
| Jira | `FHIR-53433` | https://jira.hl7.org/browse/FHIR-53433; snapshot `.../FHIR-53433.md:31-45` | Later decision says add multiple-value value-based stratifier guidance to this page |
| Confluence | 2026 - 01 Clinical Reasoning | https://confluence.hl7.org/spaces/FHIR/pages/391651979/2026+-+01+Clinical+Reasoning; snapshot `.../confluence-clinicalreasoning-quality-reporting/391651979.md:30`, `:57-63` | Later connectathon scenario references current stratification page and `FHIR-53433` |
| Command | Reopen Jira snapshots | `bun run jira:search snapshot FHIR-50484` etc. | Rehydrates exact Jira evidence |
| Command | Reopen Confluence snapshot | `bun run confluence:search snapshot 391651979` | Rehydrates later stratifier/connectathon evidence |

## Change summary

### Metadata/template/navigation

- Mechanical/template churn removed the old wrapper `<div>` (`d7b8dadc...`) and changed status-table classes (`c3da43d4...`, `270e0ceb...`).
- Page metadata changed from R4 Trial Use/FMM 2 to R6 ballot4 Normative (`270e0ceb...`, `7466cfc...`). This is publication/status metadata, not page-specific narrative guidance.

### Introduction, terminology, and metadata mapping

- `FHIR-50012` added the Measure/QM/QMS terminology note and rewrote the opening representation guidance.
- The old eMeasure metadata mapping table was first adjusted by `FHIR-21220`, `FHIR-39605`, and `FHIR-29951`, then removed/replaced by `FHIR-50284` with general narrative about Measure metadata and a link to CQM terminology concept maps.
- Classification: mostly semantic/editorial guidance; `FHIR-50284` deliberately removed stale NQF-number table content.

### Subject, basis, and basisRequirement

- `FHIR-49273` replaced the R4 patient-default subject paragraph with detailed subject/basis guidance for subject-based and non-subject-based measures.
- `FHIR-50500` expanded this to `group.basisRequirement`, with normative language: `basisRequirements SHALL specify type`, `MAY specify profile and codeFilter`, `SHALL NOT specify dateFilter, valueFilter, limit, or sort`, and SHALL be consistent with `basis` when `basis` is specified.
- Classification: substantive semantic/conformance guidance.

### Population criteria and scoring methods

- `FHIR-26695` changed "MeasureType" to "Measure Scoring" and clarified "measure type" versus "scoring".
- `FHIR-41272` incorporated scoring-method guidance into core: proportion, ratio, continuous variable, cohort, and attestation sections; formulas for performance rate/ratio; and labels/population-membership instructions.
- Classification: substantive semantic guidance; no explicit SHALL language in the added scoring sections, but implementers are likely to read them as computational guidance.

### Stratification and supplemental data

- `FHIR-37559` clarified how `MeasureReport.supplementalData` is reported in individual and summary reports.
- `FHIR-50012` rewrote the stratification and supplemental data overview; `FHIR-50256` fixed only the `thay` typo, leaving other typos nearby until later text repeats the corrected wording.
- `FHIR-53139` added extensive examples for criteria-based, value-based, and component stratifiers, including non-subject-based value-based examples.
- `7aecb6f...` changed "possible values" to "discovered values" for path-based strata.
- Classification: semantic guidance and examples, with several reader-facing editorial/rendering defects left in the current page.

### Composite measures

- `FHIR-40256` added the Composite Measures section and a public-health-agency example image.
- Classification: semantic guidance/example addition.

### Invoking measures and data exchange

- `FHIR-50012` updated eMeasure wording but left the "Invoking Measures" section centered on `$evaluate-measure`.
- `FHIR-50487` added Data Exchange for Reporting, Bundles Organized by Subject, and Duplicate Data guidance, including SHOULD/SHALL language about bundle organization and duplicate resources.
- `FHIR-50484`/`FHIR-53278`-related commits added Ad-Hoc Organizations for Reporting Operations.
- Current R6 ballot4 page still presents `$evaluate-measure` as the operation to use, while the MeasureReport section and OperationDefinition source point to `$evaluate`; this is an actionable mismatch.

### MeasureReport reporting guidance

- `FHIR-25718` added guidance on `linkId` correlation between Measure and MeasureReport.
- `FHIR-34351`/`FHIR-49273` updated subject-list reporting guidance to allow either `subjectResults` via List or direct `subjectReport` references.
- `FHIR-40268` added evaluation messages guidance using the `messages` element.
- Classification: substantive MeasureReport semantics.

## Source history

| Commit | Date | Jira/PR | Change classification | Page effect |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | none | mechanical/template | Removed wrapper `<div class="col-12">` |
| `606d18ae40e640ba3011e0d580e062db30168744` | 2021-09-21 | `FHIR-21220` | terminology/model cleanup | Replaced metadata table references to `Measure.contributor` with `Measure.author`/`Measure.endorser` |
| `fb6236f76aef7e34c5874572f098f3a646dcc983` | 2022-08-20 | `FHIR-18448`, N-Infra #136 | link cleanup | Changed bulk-data link from `formats.html#bulk` to `resource-formats.html#bulk` |
| `c3da43d4d906bc8ef71d67923be5e5db976665be` | 2022-09-05 | none | metadata/template | Changed status table CSS class |
| `7aa28d921d33e9500898c44c5636e846cea429fd` | 2023-02-24 | `FHIR-37559` | semantic guidance | Clarified supplementalData in individual/summary reports |
| `bfbb8880c20d48b7f6cce65cf1e488f4e5549f0b` | 2023-02-24 | `FHIR-39605` | element rename/removal cleanup | Changed metadata table guidance from `guidance` to `Measure.usage` |
| `e9e025abe745570e34e38009ffafc2570c0bb4a9` | 2023-03-19 | `FHIR-25718` | semantic guidance | Added Measure/MeasureReport `linkId` correlation guidance |
| `d1757fc501a0ec87db78dc2a8d23302d2037dd27` | 2023-03-19 | `FHIR-26695` | terminology clarification | Clarified measure scoring vs measure type |
| `9ba5869242d1fcf01e610e9d2c158076e3d2ec9c` | 2025-03-11 | `FHIR-34351`, PR #3364 | substantive MeasureReport guidance | Added direct `subjectReport` option alongside `subjectResults` |
| `1d2267e4ce3e9cd7ee3dd723ed1d9498774171b4` | 2025-03-14 | `FHIR-40268` | semantic guidance | Added Evaluation Messages section |
| `2b67800e7e72b57e51326ac8ee24b47df28e4841` | 2025-03-14 | `FHIR-40268` | editorial/precision | Wrapped element names in `<code>` and changed `MeasureReport.message` to `messages` |
| `d4b562ac7586e4cc584c2ed14d71cba04eaa9a62` | 2025-03-18 | `FHIR-40256` | semantic guidance/example | Added Composite Measures section |
| `930dc756d24c59c97108f02aef5c0ee343121191` | 2025-03-18 | `FHIR-50012`, PR #3423 | broad substantive rewrite | Raised FMM to 5, added terminology note, rewrote representation/scoring/stratification/invocation/reporting sections |
| `894f1a69b8d78338b0bb2dc33d5637386357d6cc` | 2025-10-17 | `FHIR-50487`, PR #3778 | conformance/data-exchange guidance | Added bundles-by-subject and duplicate-data guidance |
| `76d8982291f11c2ddb2f90dabefdfce3a2424d65` | 2025-10-17 | `FHIR-49273`, PR #3778 | subject/basis guidance | Added population basis and subject-list count clarification |
| `122a3c22a65bb4c7965cba4a1d5cd21d03f16612` | 2025-10-18 | `FHIR-50284` | stale metadata removal | Replaced eCQM mapping table with general Measure metadata narrative |
| `7947fdceb361e4764bf0468fd50afccb076a48d8` | 2025-10-24 | `FHIR-29951` | terminology-link guidance | Added link to Quality Measure IG concept maps |
| `d2e4add2fb30c887df9a83f8d3a61fba57b62249` | 2025-10-28 | commit subject says `FHIR-50526` but link points `FHIR-50256` | typo fix | Fixed `thay` -> `they`; did not address `Helth IT certifiaction` in same sentence |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | none | status metadata | Changed status table to normative style, still text Trial Use |
| `6fe0e09ed5ad8427fe9bced6e5051af38b009fb0` | 2025-11-03 | `FHIR-50484`, PR #3932 | operation/data-exchange guidance | Added Ad-Hoc Organizations for Reporting Operations |
| `66fb8f7700bd0f3eaeb2770f0b5625c2ad5072af` | 2025-11-03 | `FHIR-50500` | basisRequirement conformance guidance | Added basisRequirement example and SHALL/SHALL NOT paragraph |
| `4cfc13a189b9ec12a139b1c15844d40bde98cf3f` | 2025-11-04 | `FHIR-41272`, PR #3941 | scoring guidance | Added scoring-method sections and moved metadata/population-group structure |
| `a313c0542179c48816e8f4f588548130d7225e6a` | 2025-11-05 | `FHIR-53139`, PR #3941 | stratifier guidance/examples | Added criteria/value/component/value set stratifier examples |
| `7aecb6fcb93efa0499108de4b1e50b92fd88ddbc` | 2025-11-06 | QA | editorial/semantic precision | Changed path stratifier values to "discovered values" |
| `7466cfc63cd0b162497a42c80a67480eed86c75a` | 2025-11-12 | none | status metadata | Changed Standards Status text to Normative |

## Jira evidence

### Explicit Jira keys from commits/patches

| Key | Status/resolution | Snapshot command | Relevance |
|---|---|---|---|
| `FHIR-21220` | Applied; Not Persuasive with Modification; non-compatible; R6 | `bun run jira:search snapshot FHIR-21220` | Background for contributor/author/endorser metadata table cleanup |
| `FHIR-18448` | Published; Persuasive; non-substantive; R5 | `bun run jira:search snapshot FHIR-18448` | Link cleanup only |
| `FHIR-37559` | Published; Persuasive; non-compatible; R5 | `bun run jira:search snapshot FHIR-37559` | SupplementalData MeasureReport guidance |
| `FHIR-39605` | Published; Persuasive; non-compatible; R5 | `bun run jira:search snapshot FHIR-39605` | `Measure.guidance` removal/update to usage |
| `FHIR-25718` | Published; Persuasive; non-substantive; R5 | `bun run jira:search snapshot FHIR-25718` | Measure/MeasureReport `linkId` correlation guidance |
| `FHIR-26695` | Published; Persuasive; non-substantive; R5 | `bun run jira:search snapshot FHIR-26695` | Measure scoring vs type wording |
| `FHIR-34351` | Applied; Persuasive with Modification; compatible substantive; R6 | `bun run jira:search snapshot FHIR-34351` | Subject-list direct `subjectReport` option; PR #3364 |
| `FHIR-40268` | Applied; Persuasive; compatible substantive; R6 | `bun run jira:search snapshot FHIR-40268` | Evaluation messages in MeasureReport |
| `FHIR-40256` | Applied; Not Persuasive with Modification; non-substantive; R6 | `bun run jira:search snapshot FHIR-40256` | Composite measures topic |
| `FHIR-50012` | Applied; Persuasive; compatible substantive; R6 | `bun run jira:search snapshot FHIR-50012` | Broad Quality Reporting rewrite from CQI-reviewed attachment; PR #3423 |
| `FHIR-50487` | Applied; Persuasive; non-compatible; R6 | `bun run jira:search snapshot FHIR-50487` | `$submit-data` alignment and Data Exchange for Reporting text |
| `FHIR-49273` | Applied; Persuasive; non-substantive; R6 | `bun run jira:search snapshot FHIR-49273` | Population basis and subject-list count wording |
| `FHIR-50284` | Applied; Not Persuasive with Modification; non-substantive; R6 | `bun run jira:search snapshot FHIR-50284` | Removed NQF mapping table |
| `FHIR-29951` | Applied; Not Persuasive with Modification; non-substantive; R6 | `bun run jira:search snapshot FHIR-29951` | Added CQM concept-map link |
| `FHIR-50256` | Applied; Persuasive; non-substantive; R6 | `bun run jira:search snapshot FHIR-50256` | Fixed `thay` typo in stratification paragraph |
| `FHIR-50526` | Applied; Persuasive; R6 | `bun run jira:search snapshot FHIR-50526` | Commit subject collision only; this issue is about Observation/Condition, not this page |
| `FHIR-50484` | Applied; Persuasive; non-compatible; R6 | `bun run jira:search snapshot FHIR-50484` | Align Measure `$evaluate` with DEQM; page remains stale in Invoking Measures |
| `FHIR-50500` | Applied; Persuasive; compatible substantive; R6 | `bun run jira:search snapshot FHIR-50500` | Added `basisRequirement` support/guidance |
| `FHIR-41272` | Applied; Persuasive; non-substantive; R6 | `bun run jira:search snapshot FHIR-41272` | Move scoring algorithms/guidance into core |
| `FHIR-53139` | Applied; Persuasive; non-substantive; R6 | `bun run jira:search snapshot FHIR-53139` | Add value-based stratifier/non-subject-based examples |

### Other Jira issues that plausibly explain or affect the same text

- `FHIR-50486` (Resolved - No Change, Not Persuasive) confirms the `$evaluate-measure` operation was already deprecated. This matters because the current page still presents `$evaluate-measure` as the operation to use.
- `FHIR-45727` (Applied) corrected `$evaluate-measure` examples to use `subject=Patient/124`; the current page still has `subject=124` and even uses `[base]/Basic/CMS146/...`.
- `FHIR-53278` (Applied) records ad-hoc Organization alignment across `$evaluate`, `$care-gaps`, and `$collect-data`; current page uses provider/providerResource names that do not match the current operation definitions.
- `FHIR-53433` (Applied after the R6 ballot4 tree) directs adding clarification to this page about value-based stratifiers returning multiple values. It is later reassessment evidence, not a cause of the reviewed diff.
- `FHIR-49824` explains related summary text added to Measure/MeasureReport resource pages and references the Quality Reporting topic; it is context only for this page review.
- `FHIR-51856` is DEQM-specific and postdates ballot4, but `FHIR-50484`/`FHIR-53278` cite it for simplifying `$evaluate` and removing instance-level invocation.

### Context-only Jira hits that should not drive action

- `FHIR-55952` appeared in a phrase search for "Cooking With CQL" and CAUTI but is for the Quality Measure IG, not this core page.
- `FHIR-53825`/`FHIR-50053` appeared in ad-hoc Organization phrase searches but are DEQM-specific/contextual unless cross-applied through `FHIR-53278`.

## Zulip evidence

- Quoted explicit-key searches for `FHIR-50012`, `FHIR-50484`, `FHIR-50486`, `FHIR-50487`, `FHIR-45727`, `FHIR-49273`, `FHIR-50500`, `FHIR-53139`, `FHIR-53433`, and `FHIR-53278` returned no hits.
- Changed-phrase searches for `"value-based stratifiers"`, `"basisRequirement"`, `"Ad-Hoc Organizations"`, `"Basic/CMS146"`, and `"subject=124"` returned no hits.
- Initial unquoted Zulip FTS searches for hyphenated Jira keys failed with `SQLiteError: no such column` because the FTS parser treated the hyphenated numeric part as syntax. These were rerun with quoted keys; no relevant results were found.
- No Zulip thread was promising enough to snapshot.

## Confluence evidence

- `confluence:search refs jira FHIR-53433` found:
  - Page `391651979`, "2026 - 01 Clinical Reasoning", https://confluence.hl7.org/spaces/FHIR/pages/391651979/2026+-+01+Clinical+Reasoning
  - Page `413255199`, "2026 - 05 Clinical Reasoning", https://confluence.hl7.org/spaces/FHIR/pages/413255199/2026+-+05+Clinical+Reasoning
- Snapshot `391651979` includes a Connectathon "Stratifier Configurations" scenario referencing the build stratification page and "Value-based stratifiers with multiple cardinality results" tied to `FHIR-53433` (`.../confluence-clinicalreasoning-quality-reporting/391651979.md:30`, `:57-63`).
- Snapshot `413255199` contains references to `FHIR-53433` but little body text in the local snapshot beyond the TOC.
- `refs jira` found no Confluence references for `FHIR-50012`, `FHIR-50484`, `FHIR-50486`, `FHIR-50487`, `FHIR-45727`, `FHIR-49273`, `FHIR-50500`, `FHIR-53139`, `FHIR-53278`, or `FHIR-50256`.
- FTS searches for `"Quality Reporting" "final_edits"`, `"value-based stratifiers"`, `"basisRequirement"`, `"Ad-Hoc Organizations"`, and `"clinicalreasoning-quality-reporting"` found no additional high-signal Confluence pages in the default high-signal kinds.

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2019-04-22 | Jira vote | `FHIR-18448` resolved/voted for link/comparison cleanup |
| 2019-09-09 | Jira vote | `FHIR-21220` vote for contributor metadata changes |
| 2020-04-24 | Jira vote | `FHIR-25718` and `FHIR-26695` voted for `linkId` and scoring/type wording |
| 2021-06-27 | Source commit | Template wrapper removed from this page |
| 2023-01-18 | Jira vote | `FHIR-34351`, `FHIR-37559`, `FHIR-39605` voted for MeasureReport/supplementalData/guidance changes |
| 2023-02-24 to 2023-03-19 | Source commits | R5-era page updates for supplementalData, usage, linkId, scoring/type |
| 2023-05-10 | Jira vote | `FHIR-41272` voted to incorporate measure calculation guidance into core |
| 2025-02-28 | Jira vote | `FHIR-45727` voted to correct operation examples, including `subject=Patient/124` |
| 2025-03-14 | Jira vote/resolution | `FHIR-50012` broad Quality Reporting update approved |
| 2025-03-18 | Source commit | `930dc756...` applies broad Quality Reporting rewrite |
| 2025-06-20 | Jira votes | `FHIR-50484`, `FHIR-50486`, `FHIR-50487`, `FHIR-50500` align Measure operations/DEQM and population basis work |
| 2025-07-25 | Jira vote | `FHIR-49273` population basis and subject-list count clarification |
| 2025-10-17 to 2025-11-06 | Source commits | R6 ballot4 page updates for data exchange, basisRequirement, scoring guidance, stratifiers |
| 2025-10-31 | Jira vote | `FHIR-53278` ad-hoc Organization alignment |
| 2025-11-12 | Source commit | `7466cfc...` changes page standards status to Normative |
| 2026-01-23 | Jira vote | `FHIR-53433` later clarification on multi-valued value-based stratifiers |
| 2026-01 / 2026-05 | Confluence/connectathon | Clinical Reasoning pages reference stratifier testing and `FHIR-53433` |

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/clinicalreasoning-quality-reporting.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-quality-reporting.html" && echo "new exists"`
  - `wc -l` returned 301 old / 711 new.
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalreasoning-quality-reporting.html`
  - Diff saved locally during review as `.copilot/session-state/79fa6a5f-f891-4291-bc98-d27d24e6c828/files/clinicalreasoning-quality-reporting.diff`.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalreasoning-quality-reporting.html`
  - Per-commit patches saved as `.copilot/session-state/79fa6a5f-f891-4291-bc98-d27d24e6c828/files/clinicalreasoning-quality-reporting-history-patches.diff`.
- Jira:
  - Snapshotted all explicit keys and followed high-signal related keys (`FHIR-45727`, `FHIR-49824`, `FHIR-50486`, `FHIR-51856`, `FHIR-53278`, `FHIR-53433`).
  - Phrase searches established no existing Jira for exact `Basic/CMS146` and no direct issue for `Helth IT certifiaction`; `subject=124 evaluate-measure` found `FHIR-50484` and `FHIR-45727`.
- Zulip:
  - Quoted explicit-key searches and changed-phrase searches found no relevant discussion.
  - Failed unquoted key searches are recorded because they explain why the quoted rerun was necessary.
- Confluence:
  - `bun run confluence:search refs jira FHIR-53433` found 2026 Clinical Reasoning pages.
  - `bun run confluence:search snapshot 391651979` captured the later stratifier/connectathon context.

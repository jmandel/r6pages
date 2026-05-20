# clinicalreasoning-module research appendix

## Scope and coverage

- Page path: `source/clinicalreasoning-module.html`.
- Old version/commit: R4 4.0.1 at `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, local tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/commit: R6 ballot4 6.0.0-ballot4 at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, local tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: file exists in both trees; direct diff is a modification (`131 insertions, 96 deletions`).
- New page read end-to-end: yes, all 349 lines in chunks. Old page has 314 lines.
- Page-touching commits in range: 39.
- Explicit Jira keys found in page history: `FHIR-28921`, `FHIR-29320`, `FHIR-30204`, `FHIR-21005`, `FHIR-31866`, `FHIR-24619`, `FHIR-32899`, `FHIR-24623`, `FHIR-15751`, `FHIR-25431`, `FHIR-32674`, `FHIR-28556`, `FHIR-27817`, `FHIR-48393`, `FHIR-41440`, `FHIR-50284`, `FHIR-53078`, `FHIR-53085`, `FHIR-44047`.
- Jira: snapshot searches were run for all explicit keys. Phrase searches were run for distinctive changed phrases including `Quality Improvement Ecosystem`, `clinicalreasoning-cds-on-fhir.html`, `Decision Support Services`, and `EventDefinition clinical reasoning module`.
- Zulip: all explicit keys were searched. The first unquoted FTS pass failed on hyphenated Jira keys because FTS parsed the numeric suffix as a column; the key searches were rerun with quoted issue keys. Phrase searches and snapshots were taken for the relevant RequestGroup/RequestOrchestration and core-profile threads.
- Confluence: `refs jira` and FTS searches were run for all explicit keys. Phrase searches were run for `Quality Improvement Ecosystem`, `RequestGroup RequestOrchestration`, `Using Clinical Reasoning with FHIR`, and related terms. Selected pages were snapshotted.
- Important caveat: no Jira/Zulip/Confluence evidence was found that directly discusses the malformed `https://clinicalreasoning-cds-on-fhir.html/` link or the `EventDefinition` row linking to `evidence.html`; those appear to be concrete source defects visible in the current page.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/clinicalreasoning-module.html` | Older page boundary |
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-module.html` | Newer page boundary |
| Source line | Malformed Decision Support Services link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-module.html:70` | Current page links to `https://clinicalreasoning-cds-on-fhir.html/` |
| Source line | EventDefinition row | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-module.html:89` | Current page labels EventDefinition but links to `evidence.html` |
| Source line | Valid EventDefinition locator elsewhere | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourcelist.html:243` | The resource list links EventDefinition to `eventdefinition.html` |
| Source line | Valid EventDefinition historical link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/history.html:395` | Another current source page links EventDefinition to `eventdefinition.html` |
| Commit | Major R6 module rewrite | `5ef0571d4759248fa832a858612aa703739103ce`, https://github.com/HL7/fhir/commit/5ef0571d4759248fa832a858612aa703739103ce | Implements much of `FHIR-53078` on this page |
| Commit | CDS-on-FHIR cleanup | `1268605a53fabdafc86a868ba2a51656aa9907c7`, https://github.com/HL7/fhir/commit/1268605a53fabdafc86a868ba2a51656aa9907c7 | Introduced the malformed `https://clinicalreasoning-cds-on-fhir.html/` href |
| Commit | Added missing CR index entries | `f2c01f013006a55844d5a4975b429827f025fc0f`, https://github.com/HL7/fhir/commit/f2c01f013006a55844d5a4975b429827f025fc0f | Added EventDefinition, ParameterDefinition, TriggerDefinition rows; EventDefinition href is wrong |
| Commit | Fixed TriggerDefinition link | `4fc8a69b31ede7410e3251421346f8b404a91f3d`, https://github.com/HL7/fhir/commit/4fc8a69b31ede7410e3251421346f8b404a91f3d | Corrected `triggerDefinition.html` to `metadatatypes.html#TriggerDefinition`, but left EventDefinition unchanged |
| Jira | Main page update | `FHIR-53078`, https://jira.hl7.org/browse/FHIR-53078; reopen with `bun run jira:search snapshot FHIR-53078` | Formal R6 issue for extension table, profile/services handling, roadmap/background updates |
| Jira | CDS-on-FHIR move | `FHIR-53085`, https://jira.hl7.org/browse/FHIR-53085; reopen with `bun run jira:search snapshot FHIR-53085` | Formal issue to move most CDS-on-FHIR page content to the Using Clinical Reasoning IG |
| Jira | Profiles removed from core | `FHIR-48393`, https://jira.hl7.org/browse/FHIR-48393; reopen with `bun run jira:search snapshot FHIR-48393` | Explains removal of shareable/publishable/CDS Hooks profile listings from core |
| Jira | CDS Hooks use-case wording | `FHIR-41440`, https://jira.hl7.org/browse/FHIR-41440; reopen with `bun run jira:search snapshot FHIR-41440` | Explains use-case row changing from `$evaluate` to CDS Hooks service integration |
| Jira | CMS Blueprint link | `FHIR-50284`, https://jira.hl7.org/browse/FHIR-50284; reopen with `bun run jira:search snapshot FHIR-50284` | Explains added CMS Blueprint related-specification link |
| Jira | Evidence and Statistics addition | `FHIR-29320`, https://jira.hl7.org/browse/FHIR-29320; reopen with `bun run jira:search snapshot FHIR-29320` | Explains enabling Evidence and Statistics topic and evidence-related resources |
| PR | Rename RequestGroup PR | https://github.com/HL7/fhir/pull/2236 | Merged `2022-08-25T02:15:37Z`; implements `FHIR-24619` |
| PR | R6 CDS changes PR | https://github.com/HL7/fhir/pull/3411 | Merged `2025-03-19T08:47:18Z`; includes `FHIR-48393` and `FHIR-41440` page edits |
| PR | CQI changes PR | https://github.com/HL7/fhir/pull/3778 | Merged `2025-10-20T19:12:12Z`; includes `FHIR-50284` CMS Blueprint link |
| PR | R6 module main page PR | https://github.com/HL7/fhir/pull/3914 | Merged `2025-11-02T15:31:34Z`; implements `FHIR-53078` |
| PR | CDS-on-FHIR move PR | https://github.com/HL7/fhir/pull/3916 | Merged `2025-11-04T15:00:27Z`; implements `FHIR-53085` |
| PR | Additional background PR | https://github.com/HL7/fhir/pull/3941 | Merged `2025-11-05T20:49:24Z`; adds `FHIR-53078` background material |
| Zulip | RequestGroup rename discussion | `#implementers > Rename RequestGroup to RequestOrchestration`, https://chat.fhir.org/#narrow/stream/implementers/topic/Rename%20RequestGroup%20to%20RequestOrchestration | Rationale and objections for `FHIR-24619` |
| Zulip | RequestGroup rename revisit | `#committers > RequestGroup Rename`, https://chat.fhir.org/#narrow/stream/committers/topic/RequestGroup%20Rename | Later implementation-cost discussion before rename was applied |
| Zulip | Core profiles proposal | `#fmg > FHIR Core Profiles proposal`, https://chat.fhir.org/#narrow/stream/fmg/topic/FHIR%20Core%20Profiles%20proposal | Rationale for removing profiles from base/core and moving to IGs |
| Confluence | EBM/FHIR-29320 approval | Page `92001937`, https://confluence.hl7.org/spaces/CDS/pages/92001937/2020-10-21+Meeting+Agenda | Approves Clinical Reasoning module updates documenting evidence-related resources |
| Confluence | RequestGroup vote | Page `66924040`, https://confluence.hl7.org/spaces/CDS/pages/66924040/2019-10-09+Meeting+Agenda | Records motion approving RequestGroup -> RequestOrchestration |
| Confluence | Profile movement discussion | Page `345543948`, https://confluence.hl7.org/spaces/CDS/pages/345543948/2025-05-21+-+Meeting+Agenda | Discusses moving CDS Hooks profiles out of core |
| Confluence | QI ecosystem background | Page `91991759`, https://confluence.hl7.org/spaces/CDS/pages/91991759/2020-09-22+1400-1530+CDS+WGM+Minutes | Records Clinical Reasoning update and quality improvement ecosystem discussion |

## Change summary

### Module header and page template

- Metadata/template/navigation: the old `<div class="col-12">` wrapper was removed and the workgroup row now says `Responsible Owner: Work Group`. This is template/header churn, not page-specific semantics.

### Introduction/topic table and audience text

- Semantic guidance/editorial: the previously commented-out `Evidence and Statistics` topic row is now active, linking to `clinicalreasoning-evidence-and-statistics.html`. This traces to evidence-related updates such as `FHIR-29320`.
- Reader-facing link defect: the Knowledge Evaluation Service Provider paragraph changed from linking `CDS Hooks` at `https://cds-hooks.hl7.org/` to `Decision Support Services`, but the current href is `https://clinicalreasoning-cds-on-fhir.html/` (`clinicalreasoning-module.html:70`). That is not a valid local relative link and appears to be an implementation error in commit `1268605a53fabdafc86a868ba2a51656aa9907c7` for `FHIR-53085`.

### Resource/DataType index

- Substantive/semantic index update: section title changed from `Resources` to `Resources and DataTypes`.
- Resource list additions/updates: `ArtifactAssessment`, external `Citation` in the EBM IG, `EventDefinition`, `EvidenceVariable`, `ParameterDefinition`, and `TriggerDefinition` are listed; `RequestGroup` is renamed to `RequestOrchestration`; `DataRequirement` anchor casing changed to `metadatatypes.html#DataRequirement`.
- Concrete rendering defect: the EventDefinition row links to `evidence.html`, while the current resource list and history pages use `eventdefinition.html`. Commit `f2c01f013006a55844d5a4975b429827f025fc0f` added the row with the wrong href; commit `4fc8a69b31ede7410e3251421346f8b404a91f3d` fixed only the adjacent `TriggerDefinition` link.
- Context-only: the external Citation link to the EBM IG is consistent with nearby `clinicalreasoning-evidence-and-statistics.html` text saying Citation moved from FHIR core to EBM; no action was identified from that link alone.

### Extensions, profiles, and services

- Substantive/semantic index update: the small R4 CQF extension list was replaced with a much broader list of commonly used extension-pack extensions, plus an explicit caveat that the extensions pack is the source of truth if descriptions differ.
- Substantive/conformance-organization update: the R4/R5 `Profiles` section was removed from the page, consistent with `FHIR-48393` and the later profile-movement discussion. Jira `FHIR-53078` initially said to remove Profiles and Services, but its comment explicitly says services were kept because there was no reason to remove them.
- Semantic guidance: the `Services` section now includes a paragraph describing minimum capability statements and pointing readers to CRMI and Quality Measure IGs for more detailed treatment.

### Security and common use cases

- Semantic guidance: the Security and Privacy section now points not only to the Security and Privacy module but also to the Implementer's Safety Checklist.
- Example/navigation updates: referral and medication request anchors were corrected; the Questionnaire dynamic-content use case was removed; a computable-guidelines use case was added; the Decision Support Service row now describes use of services such as CDS Hooks rather than `$evaluate`, matching `FHIR-41440`.

### Roadmap/background/related specifications

- Semantic guidance/editorial: the roadmap was rewritten from an R4-era "past year of trial use" framing to a broad post-STU3 stability narrative covering decision support, quality measurement, public health reporting, evidence sharing, and computable practice guidelines.
- Semantic guidance: new implementation guide references include Using CQL With FHIR, CRMI, Clinical Guidelines, Using FHIR Clinical Reasoning with CDS Hooks, Quality Measures, and DEQM.
- Substantive/conformance-organization guidance: new CRMI paragraph says Shareable, Publishable, Computable, and Executable content patterns/profiles are now defined in and evolving as part of CRMI and applications should use CRMI profiles.
- Semantic guidance/editorial: background now names additional coordinating work groups and updates the CQF initiative link.
- Semantic guidance/editorial: the QI ecosystem diagram and Learning Health System paragraph were added by `d0ec6d068473aecdec8446d5dc199352e66a060e` and refined by `f2c01f013006a55844d5a4975b429827f025fc0f`.
- Related-specification update: CMS Blueprint was added by `122a3c22a65bb4c7965cba4a1d5cd21d03f16612`, matching `FHIR-50284`.

## Source history

| Commit | Date | Label | Page-specific effect |
|---|---:|---|---|
| `8ec1978249b0` | 2020-07-31 | Added contactDetail extensions | Added contact-related CQF extension rows. |
| `7b409bcfcb50` | 2020-07-31 | Bump | Broad/mechanical page touch; not an action driver. |
| `c7b65a0fc706` | 2020-10-11 | `J#28921` certainty extension | Added `cqf-certainty` extension row. |
| `f34463aca6e` | 2020-10-22 | `J#29320` Clinical Reasoning/Evidence updates | Enabled Evidence and Statistics topic and added Statistics/Citation/EvidenceReport-era rows. |
| `33b409a4b6d5` | 2021-01-14 | rework source for new build core | Broad/mechanical source-build rework. |
| `bc30255627a5` | 2021-03-30 | `J#30204`, `J#21005` CQF Questionnaire removal | Removed CQF-Questionnaire profile and dynamic Questionnaire use case. |
| `d7b8dadc6213` | 2021-06-27 | update html template | Broad/mechanical template churn. |
| `7a66857e48c8` | 2021-07-21 | `J#31866` | Reflected removal/reclassification of Statistic/OrderedDistribution material. |
| `a21a521bb156` | 2022-03-23 | pull/merge | Broad merge/mechanical touch. |
| `46bea37a00e6` | 2022-08-24 | `J#24619` RequestGroup rename | Changed RequestGroup links/text to RequestOrchestration; PR https://github.com/HL7/fhir/pull/2236. |
| `b550a27cd59d` | 2022-08-25 | `J#32899` relative-date | Deprecated `cqf-relativeDateTime` row and points to `relative-date`. |
| `6cdb0d85a32c` | 2022-08-29 | `J#24623` periodDuration | Added period-duration extension row. |
| `0b6b322dd1e1` | 2022-08-29 | `J#24623` periodDuration | Duplicate/related page touch for same extension topic. |
| `d647c65b3b40` | 2022-08-30 | `J#15751` CDS Hooks parameters | Added `parameterDefinition` and `isPrefetchToken` extension rows. |
| `13fb5889ecbc` | 2022-08-30 | Merge PR #2288 | Merge for compatible-substantive CDS changes. |
| `8592e1207273` | 2022-08-31 | `FHIR-25431` datatype wording | Normalized `data type`/`datatype` wording. |
| `fd379f4320b4` | 2022-09-03 | `J#32674` supported CQL version | Added `cqf-supportedCqlVersion` row. |
| `7a7282f7790f` | 2022-09-04 | `J#28556` DataRequirement links | Corrected `DataRequirement` anchor casing. |
| `23a31a590b7b` | 2022-09-06 | update ballot and stu notes | Broad ballot/STU-note churn. |
| `b3e373388f81` | 2023-02-08 | fix extension links | Mechanical link migration to extension-pack location. |
| `dad7cf37c758` | 2023-02-21 | QA related changes | QA cleanup. |
| `39f090d04caf` | 2023-03-12 | QA roadmap updates, `J#27817` | Added ArtifactAssessment/EvidenceVariable/resource list refinements, safety checklist link, IG roadmap language. |
| `f0d5d69c3a16` | 2023-03-12 | QA missing anchor | Anchor/link QA cleanup. |
| `80eecb02fa2e` | 2023-03-25 | broken links/build links | Link cleanup. |
| `571498e2b295` | 2025-03-18 | `FHIR-48393` profiles removed | Removed Shareable/Computable/CQL profile rows from base page. |
| `f0023dbb0492` | 2025-03-18 | `FHIR-41440` CDS Hooks wording | Changed guidance use case from `$evaluate` to services such as CDS Hooks. |
| `ed8d19bddc19` | 2025-03-18 | Fixed broken link | Link cleanup. |
| `122a3c22a65b` | 2025-10-18 | `FHIR-50284` CMS Blueprint | Added CMS Blueprint to related specifications. |
| `270e0ceb7b02` | 2025-10-31 | normative changes for R6 | Header changed to `Responsible Owner`; standards status remains informative. |
| `5ef0571d4759` | 2025-11-01 | `FHIR-53078` main page update | Major R6 page rewrite: expanded extensions, removed profiles, roadmap/background updates. |
| `8a448f61f25b` | 2025-11-01 | Merge branch into R6 CDS branch | Merge noise around R6 CDS changes. |
| `1268605a53fa` | 2025-11-02 | `FHIR-53085` CDS Hooks mapping move | Changed provider paragraph link/text; introduced malformed `https://clinicalreasoning-cds-on-fhir.html/` href. |
| `887bc2383fb7` | 2025-11-03 | `FHIR-44047` | Editorial punctuation fixes for `i.e.`/`e.g.` text in extension descriptions. |
| `d0ec6d068473` | 2025-11-05 | `FHIR-53078` additional background | Added QI ecosystem diagram and Learning Health System paragraph. |
| `87f87a8a0389` | 2025-11-06 | Merge branch `i.e.-e.g-` | Merge noise. |
| `71567db3ee03` | 2025-11-07 | ballot notes/removals/QA | Broad ballot-note and removal cleanup. |
| `26e92f629920` | 2025-11-07 | Merge remote-tracking branch | Merge noise. |
| `f2c01f013006` | 2025-11-08 | QA missing CR index entries | Added EventDefinition, ParameterDefinition, TriggerDefinition; corrected QI ecosystem paragraph; introduced EventDefinition wrong href. |
| `4fc8a69b31ed` | 2025-11-09 | fix link | Fixed TriggerDefinition link to `metadatatypes.html#TriggerDefinition`; EventDefinition still links to Evidence. |

## Jira evidence

### Explicit Jira keys from commits/patches

| Key | Snapshot command | Evidence relevant to this page | Action impact |
|---|---|---|---|
| `FHIR-53078` | `bun run jira:search snapshot FHIR-53078` | Main R6 page update: update extension table, remove profiles, remove implementer note, update roadmap/background, add IG references; comments note services were kept. PRs #3914 and #3941. | Explains most late R6 narrative/index changes. No direct mismatch except link bugs noted separately. |
| `FHIR-53085` | `bun run jira:search snapshot FHIR-53085` | Move most `clinicalreasoning-cds-on-fhir.html` content to the Using Clinical Reasoning with FHIR IG; reference new IG; move CDS Hooks profiles/concept maps. PR #3916. | The page change at line 70 should not leave a malformed URL; actionable. |
| `FHIR-48393` | `bun run jira:search snapshot FHIR-48393` | Remove profiles from base spec. Lists CDS Hooks profiles, CQL profiles, Shareable/Publishable/Computable profiles, and EBMRecommendation. PR #3411. | Supports removal of Profiles section; not an issue. |
| `FHIR-41440` | `bun run jira:search snapshot FHIR-41440` | Original use-case row incorrectly said use `$evaluate` for CDS Hooks; resolution says reference CDS Hooks as specification for service integration. PR #3411. | Current use-case row matches intent. |
| `FHIR-50284` | `bun run jira:search snapshot FHIR-50284` | NQF/CBE issue also requests adding CMS Blueprint to Clinical Reasoning related specifications. PR #3778. | Current CMS Blueprint related-specification link matches intent. |
| `FHIR-29320` | `bun run jira:search snapshot FHIR-29320` | Approves applying proposed Citation, EvidenceReport, Evidence, and Clinical Reasoning module content, including Evidence and Statistics. | Supports Evidence and Statistics activation and evidence-related rows. |
| `FHIR-24619` | `bun run jira:search snapshot FHIR-24619` | Rename RequestGroup to RequestOrchestration; note implementer concerns and Zulip discussion. PR #2236. | Current RequestOrchestration row matches formal resolution. |
| `FHIR-15751` | `bun run jira:search snapshot FHIR-15751` | Define extensions for TriggerDefinition parameters and prefetch token indication. PR #2288. | Supports extension-list additions. |
| `FHIR-32674` | `bun run jira:search snapshot FHIR-32674` | Temporary extension for supported CQL version on CapabilityStatement. PR #2358. | Supports `cqf-supportedCqlVersion` row. |
| `FHIR-28556` | `bun run jira:search snapshot FHIR-28556` | DataRequirement example/link clarification. PR #2372. | Supports DataRequirement anchor/link cleanup. |
| `FHIR-32899`, `FHIR-24623`, `FHIR-28921`, `FHIR-30204`, `FHIR-21005`, `FHIR-31866`, `FHIR-25431`, `FHIR-27817`, `FHIR-44047` | `bun run jira:search snapshot <key>` | Explain individual extension additions/deprecations, CQF Questionnaire removal, Statistic/OrderedDistribution change, wording/roadmap/QA punctuation updates. | Contextual; no current actionable mismatch found on this page. |

### Other Jira issues from phrase searches

- `clinicalreasoning-cds-on-fhir.html` FTS returned `FHIR-51661`, `FHIR-51660`, `FHIR-41440`, `FHIR-52959`, and `FHIR-18846`. Only `FHIR-41440` directly explains a changed row on this page. The others are CDS Hooks/CPG/context hits and were not elevated to the action file.
- `Quality Improvement Ecosystem` FTS returned older quality-measure/quality-reporting issues such as `FHIR-21212`, `FHIR-21977`, `FHIR-21711`, `FHIR-21213`, `FHIR-55969`, `FHIR-55970`, and `FHIR-49347`. These are mostly IG-specific or context-only and do not explain a current core-page defect.
- `EventDefinition clinical reasoning module` and `Decision Support Services clinical reasoning` phrase searches did not find Jira evidence for the two current link defects.

## Zulip evidence

- Quoted issue-key searches found no hits for most explicit keys. Relevant hits:
  - `FHIR-24619`: `#committers > RequestGroup Rename` records Bryn revisiting the rename cost, Grahame saying RequestOrchestration is clearer than RequestGroup, and Lloyd supporting rename because implementation cost was low.
  - `FHIR-48393`: `#fmg > FHIR Core Profiles proposal` records FMG rationale for moving/removing core profiles and later comments that CDS/CQI approved removals.
  - `FHIR-53085`: one sparse `#committers > PR Reviews` mention with the Jira URL; no substantive rationale beyond Jira/PR.
  - `FHIR-31866`: one `#implementers > Do we need Observation.valueStatistics` mention; context only for Statistic removal.
- Phrase search for `"Rename RequestGroup to RequestOrchestration"` found and snapshot the `#implementers` thread. It records the initial CDS WG request for feedback, concerns that `RequestOrchestration` might sound too heavy for grouping prescriptions, and clarification that the resource is not just a generic group of requests.
- Phrase searches for `"clinical reasoning module main page"`, `"Move CDS-on-FHIR page"`, `"Using Clinical Reasoning with FHIR"`, `"Quality Improvement Ecosystem"`, and `"EventDefinition" "Evidence" "clinical reasoning"` did not find relevant substantive threads.

## Confluence evidence

- `FHIR-29320`: CDS 2020-10-21 Meeting Agenda page `92001937` records review of `FHIR-29320`, approval of descriptive content changes for Evidence and Clinical Reasoning, and approval to include Evidence/EvidenceReport/Citation/EvidenceVariable/Statistic/OrderedDistribution material in the R4B/R5 trajectory.
- `FHIR-24619`: CDS 2019-10-02 page `66922984` says the rename needed more discussion and links the Zulip thread; CDS 2019-10-09 page `66924040` records the motion to rename RequestGroup to RequestOrchestration passing 12-0-1.
- `FHIR-48393`: CDS 2025-05-21 page `345543948` records discussion of where CDS Hooks profiles should live and states TSC had determined there should be no resource profiles in the base FHIR specification. This supports the profile-removal direction.
- QI ecosystem/background: CDS 2020-09-22 WGM minutes page `91991759` records a Clinical Reasoning update, review of the Quality Improvement Ecosystem diagram, and a roadmap of related IGs (EBM-on-FHIR, CPG, CDS Hooks, Quality Measure, DEQM). This is background evidence for the later narrative, not a direct source-event for the 2025 wording.
- No Confluence hits were found for `FHIR-53078` or `FHIR-53085`; their formal evidence is Jira plus PR/source history.

## Timeline

| Date | Clock | Evidence |
|---:|---|---|
| 2019-10-02 | Confluence discussion | CDS agenda says `#24619` RequestGroup rename needed more discussion and would be posted to Zulip. |
| 2019-10-03/04 | Zulip discussion | `#implementers > Rename RequestGroup to RequestOrchestration` debates rename semantics and prescription/grouping implications. |
| 2019-10-09 | Workgroup vote | CDS agenda records RequestGroup -> RequestOrchestration approval 12-0-1. |
| 2020-09-22 | Confluence background | CDS/CQI WGM minutes review Clinical Reasoning and QI ecosystem diagram. |
| 2020-10-21 | Workgroup vote | `FHIR-29320` resolved/voted 20-0-0; Clinical Reasoning/Evidence content approved. |
| 2020-10-22 | Source commit | `f34463aca6e13fbc0b9d60b9789b9576ea6b586e` updates Clinical Reasoning/Evidence rows. |
| 2021-03-30 | Source commit | `bc30255627a58b5e899f1afd7a087806ab48ac23` removes CQF-Questionnaire material. |
| 2022-08-25 | PR merge | PR #2236 merges RequestGroup -> RequestOrchestration. |
| 2022-08-24/25 | Source commit | `46bea37a00e63d1ace04a5f322614c6d0815f500` updates this page for RequestOrchestration. |
| 2022-09-04 | PR merge | PR #2372 merges DataRequirement link improvements. |
| 2023-03-13 | PR merge | PR #2834 merges roadmap/QA updates. |
| 2024-09-25 | Jira vote | `FHIR-48393` resolved/voted to remove listed profiles from core. |
| 2025-03-19 | PR merge | PR #3411 merges R6 CDS changes including `FHIR-48393` and `FHIR-41440`. |
| 2025-05-21 | Confluence discussion | CDS agenda discusses CDS Hooks profile movement and no-resource-profiles-in-base direction. |
| 2025-07-11 | Jira vote | `FHIR-50284` resolved/voted; includes CMS Blueprint link request for Clinical Reasoning related specs. |
| 2025-10-20 | PR merge | PR #3778 merges CQI changes including CMS Blueprint link. |
| 2025-10-15 | Jira vote | `FHIR-53078` and `FHIR-53085` recorded vote date for R6 main page/CDS-on-FHIR move items. |
| 2025-11-02 | PR merge/source commit | PR #3914 / commit `5ef0571d...` rewrites the module main page. |
| 2025-11-04 | PR merge | PR #3916 merges CDS-on-FHIR move work. |
| 2025-11-02 | Source commit | `1268605a...` changes the provider paragraph and introduces malformed `https://clinicalreasoning-cds-on-fhir.html/`. |
| 2025-11-05 | PR merge/source commit | PR #3941 / commit `d0ec6d...` adds QI ecosystem background. |
| 2025-11-08 | Source commit | `f2c01f...` adds EventDefinition/ParameterDefinition/TriggerDefinition rows; EventDefinition href is wrong. |
| 2025-11-09 | Source commit | `4fc8a69...` fixes TriggerDefinition link but leaves EventDefinition pointing to Evidence. |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/clinicalreasoning-module.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-module.html" && echo "new exists"`
- Direct diff:
  - `git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26" "5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/clinicalreasoning-module.html"`
  - Established `131 insertions, 96 deletions` and the meaningful topic changes summarized above.
- Source history:
  - `git ... log --reverse --date=short --format='%H%x09%ad%x09%s' "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/clinicalreasoning-module.html"`
  - `git ... show --stat --patch <commit> -- "source/clinicalreasoning-module.html"` for likely meaningful commits.
- Full new-page read:
  - `wc -l` reported 349 new-page lines.
  - Read chunks covering lines 1-349 of the R6 ballot4 source file.
- Link defect checks:
  - `rg -n 'href="https://[^/"]+\.html/?"|href="evidence\.html">EventDefinition|profiles in support' .../source/clinicalreasoning-module.html`
  - Confirmed only the malformed local-looking HTTPS link and EventDefinition-to-Evidence link on the current page.
- Jira:
  - `bun run jira:search snapshot <key>` for all explicit keys listed in Scope.
  - Phrase searches included `"Updated clinical reasoning module main page"`, `"Cleanup related to moving CDS Hooks mapping to CDS IG"`, `"Decision Support Services" "clinical reasoning"`, `"Quality Improvement Ecosystem"`, `"EventDefinition" "clinical reasoning module"`, and `"clinicalreasoning-cds-on-fhir.html"`.
- Zulip:
  - Initial unquoted `bun run zulip:search fts FHIR-XXXXX` failed because FTS parsed hyphenated keys incorrectly; reran as `bun run zulip:search fts "\"FHIR-XXXXX\"" --limit 10`.
  - Snapshots taken for `implementers/Rename RequestGroup to RequestOrchestration`, `committers/RequestGroup Rename`, and `fmg/FHIR Core Profiles proposal`.
- Confluence:
  - `bun run confluence:search refs jira <key>` and `bun run confluence:search fts <key> --limit 10` for all explicit keys.
  - Phrase searches included `"clinical reasoning module main page"`, `"Using Clinical Reasoning with FHIR"`, `"Quality Improvement Ecosystem"`, `"RequestGroup" "RequestOrchestration"`, and `"Clinical Reasoning" "FHIR-53078"`.
  - Snapshots taken for pages `92001937`, `66924040`, `66922984`, `345543948`, `91991759`, and `81028096`.

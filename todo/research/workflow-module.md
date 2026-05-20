# workflow-module research appendix

## Scope and coverage

- Page reviewed: `source/workflow-module.html` (`workflow-module`), modified and present in both source trees.
- Older version/source: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- Newer version/source: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary check: both old and new files exist; newer file has 178 lines and was read end-to-end.
- Source history: 14 commits touched this page between the two commits.
- Explicit Jira keys found in commit subjects/patches: `FHIR-31478` (commit uses `J#31478`), `FHIR-36242`, `FHIR-44611`, `FHIR-44047`.
- Additional context-only Jira issues found by phrase/resource searches: `FHIR-53506`, `FHIR-53581`.
- Jira, Zulip, and Confluence searches were performed for explicit keys and distinctive changed phrases. Exact Zulip searches for `FHIR-31478`, `FHIR-36242`, `FHIR-44611`, `FHIR-44047`, `"workflow module references"`, and `"relationship of specific domain resources"` found no direct threads.
- Caveat: the 2025 OO-incubator link change has clear source/PR/community context, but no Jira key in the page-changing commit itself; do not treat later OO-incubator Jira hits as causal for the workflow page commit.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New workflow page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-module.html:1-178` | Full current page read end-to-end |
| Source | New domain-module cross-reference paragraph | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-module.html:37-44` | Implements `FHIR-44611` resolution |
| Source | Current resource index OO/incubator links | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-module.html:76-81` | Main reference/link surface changed since R4 |
| Source | Current roadmap typo | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-module.html:163-165` | Concrete reader-facing typo: `interoperablity` |
| Commit | DeviceUseStatement rename | `f7e99e9a9213aed67e7b055503da57bf19954e8b`, https://github.com/HL7/fhir/commit/f7e99e9a9213aed67e7b055503da57bf19954e8b | Updates workflow index from DeviceUseStatement to DeviceUsage |
| Commit | Link case fix | `9825def2f59dcd0743922d4da4c4a94f93bc11c4`, https://github.com/HL7/fhir/commit/9825def2f59dcd0743922d4da4c4a94f93bc11c4 | Fixes mis-cased `InventoryReport` link |
| Commit | Workflow roadmap update | `1ce2d8dfbf69e6a9b9617a382aee935403e9a5b5`, https://github.com/HL7/fhir/commit/1ce2d8dfbf69e6a9b9617a382aee935403e9a5b5 | Rewrites future-work guidance and introduces the typo noted in actions |
| Commit | FHIR-44611 implementation | `9469508bb1666922b74221e4748ec934de575431`, https://github.com/HL7/fhir/commit/9469508bb1666922b74221e4748ec934de575431 | Adds the domain-module cross-reference paragraph |
| Commit | OO resources moved to incubator | `3b38b80cf23f9cbb306fab8fcedb293315478c32`, https://github.com/HL7/fhir/commit/3b38b80cf23f9cbb306fab8fcedb293315478c32 | Changes several workflow index links from core pages to OO-incubator IG pages |
| Commit | OO incubator link fix | `01706a920f4e88452c409c2cc0b7c74f09ac51c6`, https://github.com/HL7/fhir/commit/01706a920f4e88452c409c2cc0b7c74f09ac51c6 | Corrects `oo-incubator-ig` URLs to `oo-incubator` |
| Commit | FHIR-44047 editorial punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Applies `e.g.,`/`i.e.,` style fixes to this page |
| PR | OO incubator move | https://github.com/HL7/fhir/pull/3937 | Merged page commit moving OO resources to incubator links |
| PR | FHIR-44047 | https://github.com/HL7/fhir/pull/3951 | Merged editorial punctuation changes |
| Jira | FHIR-31478 | https://jira.hl7.org/browse/FHIR-31478; reopen with `bun run jira:search snapshot FHIR-31478` | Formal rationale for DeviceUseStatement -> DeviceUsage |
| Jira | FHIR-36242 | https://jira.hl7.org/browse/FHIR-36242; reopen with `bun run jira:search snapshot FHIR-36242` | Broad link-case correction issue |
| Jira | FHIR-44611 | https://jira.hl7.org/browse/FHIR-44611; reopen with `bun run jira:search snapshot FHIR-44611` | Direct intent for new paragraph pointing to Administration/Diagnostics modules |
| Jira | FHIR-44047 | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Direct intent for `e.g.,`/`i.e.,` punctuation cleanup |
| Jira | FHIR-53506 | https://jira.hl7.org/browse/FHIR-53506; reopen with `bun run jira:search snapshot FHIR-53506` | Later context for OO-incubator links; not causal for page commit |
| Jira | FHIR-53581 | https://jira.hl7.org/browse/FHIR-53581; reopen with `bun run jira:search snapshot FHIR-53581` | Later context describing the OO-incubator IG and migrated resources |
| Zulip | OO Additional Resource IG naming | `#Orders and Observation WG > OO Additional Resource IG -- Naming Discussion`, https://chat.fhir.org/#narrow/stream/Orders%20and%20Observation%20WG/topic/OO%20Additional%20Resource%20IG%20--%20Naming%20Discussion; reopen with `bun run zulip:search snapshot "Orders and Observation WG" "OO Additional Resource IG -- Naming Discussion"` | Names the resources planned for the OO IG and explains supply-like resources were pulled out of core |
| Zulip | FMG resource removal | `#fmg > Assessment of Resources for removal from R6`, https://chat.fhir.org/#narrow/stream/fmg/topic/Assessment%20of%20Resources%20for%20removal%20from%20R6; reopen with `bun run zulip:search snapshot fmg "Assessment of Resources for removal from R6"` | Broader 2025 discussion of moving low-maturity resources out of core |
| Confluence | FHIR-I 2024-12-16 minutes | Page `288072400`, https://confluence.hl7.org/spaces/FHIRI/pages/288072400/FHIR+Infrastructure+Minutes+CC+2024-12-16; reopen with `bun run confluence:search snapshot 288072400` | Records `FHIR-44611` motion to address, 9-0-0 |
| Confluence | PA Jan 2024 WGM minutes | Page `218828654`, https://confluence.hl7.org/spaces/PA/pages/218828654/2024+January+WGM+virtual+-+Meeting+Minutes; reopen with `bun run confluence:search snapshot 218828654` | PA-side context for the scheduling overview request |
| Confluence | FHIR-I Dallas WGM 2024 minutes | Page `234784975`, https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas; reopen with `bun run confluence:search snapshot 234784975` | Records `FHIR-44047 will fix` |
| Confluence | OO 2025-10-23 minutes | Page `391650456`, https://confluence.hl7.org/spaces/OO/pages/391650456/2025-10-23+OO+Main; reopen with `bun run confluence:search snapshot 391650456` | Records OO-incubator naming/proposal and FMG-review approval motion |
| Confluence | OO 2025-11-06 minutes | Page `403866640`, https://confluence.hl7.org/spaces/OO/pages/403866640/2025-11-06+OO+Main; reopen with `bun run confluence:search snapshot 403866640` | Notes OO Incubator IG approved at FMG and repo/resource migration work |

## Change summary

### Metadata/template/navigation

- The page still declares Standards Status `Informative`; no new page-level normative status was introduced.
- The work group label changed from `Work Group` to `Responsible Owner: Work Group` in commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` as part of broad R6 normative/template work.
- The outer `<div class="col-12">` wrapper was removed by `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, a mechanical template update.

### Domain relationship guidance

- `FHIR-44611` added a short paragraph after the module's opening questions directing readers to resource-specific modules for domain resource relationships, with Administration examples (`Appointment`, `Slot`, `Encounter`) and Diagnostics examples (`ObservationDefinition`, `ServiceRequest`, `Observation`, `DiagnosticReport`).
- This is semantic guidance/reference navigation, not a new conformance rule. The applied wording closely matches the Jira resolution.

### Resource index and link changes

- `DeviceUseStatement` was renamed to `DeviceUsage` in the workflow index under `FHIR-31478`.
- `InventoryReport` was added, then the mis-cased `inventoryReport.html` link was fixed under `FHIR-36242`.
- In 2023, several OO resources (`DeviceDispense`, `DeviceAssociation`, `BiologicallyDerivedProductDispense`, `InventoryItem`, `InventoryReport`, `Transport`) were added to the index.
- In 2025, most of those low-maturity OO resources plus `DeviceUsage`, `SupplyRequest`, and `SupplyDelivery` were changed from core links to OO-incubator IG links. `DeviceRequest` and `DeviceAssociation` remain core links. The final external URLs tested with `curl -L` returned HTTP 200 on 2026-05-20.

### Roadmap guidance

- The R4 roadmap text was substantially refreshed for R6: it now says alignment tooling exists, work groups should capture divergence reasons, breaking changes generally should not be made solely for pattern alignment, Diagnostics order-fulfillment guidance is underway, ExampleScenario rendering is hoped for, and PlanDefinition/ActivityDefinition guidance should document system-level interoperability interactions.
- This is informative future-work guidance, not a new REST/search/operation semantic or conformance requirement.
- The new roadmap text contains a typo: `interoperablity` at line 165.

### Editorial cleanup

- `FHIR-44047` corrected `I.e.`/`E.g.` usages to `i.e.,`/`e.g.,` in several sentences. This matches the issue's stated editorial goal.

### No direct changes found

- No changed examples were found on this page.
- No REST interaction, search, operation, or explicit conformance behavior changes were found.
- No new or changed normative `SHALL`/`SHOULD` requirements were found in the page body. The only `SHALL` in the file is the unchanged source template comment at the top.

## Source history

| Commit | Date | Subject | Page effect | Classification |
|---|---:|---|---|---|
| `d859feaadf9f9a93eb140df22024b99294ef3cd9` | 2020-09-20 | Start adding InventoryReport resource | Adds an `InventoryReport` line, initially with duplicate/mis-cased links | Reference/link change |
| `25ac9a39f93fefd109a0c3a537b041c2d9cf74eb` | 2020-09-30 | add InventoryReport content | Adjusts the nearby list formatting around `SupplyRequest`/`SupplyDelivery`/`InventoryReport` | Reference/link cleanup |
| `f7e99e9a9213aed67e7b055503da57bf19954e8b` | 2021-03-30 | J#31478 - rename DeviceUseStatement to DeviceUsage | Changes workflow index link text/path to `DeviceUsage` | Substantive name/reference change |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Removes wrapper `<div class="col-12">` | Mechanical/template |
| `9825def2f59dcd0743922d4da4c4a94f93bc11c4` | 2022-04-11 | FHIR-36242 - Fixed improperly-cased references | Fixes `inventoryReport.html` to `inventoryreport.html` | Link correction |
| `9a6bccc9832fd33f872b51b53e5dcdc99cc3962f` | 2023-03-09 | add OO resources | Adds `DeviceDispense`, `DeviceAssociation`, `BiologicallyDerivedProductDispense`, `InventoryItem`, `InventoryReport`, `Transport` to the index | Reference/link expansion |
| `2821a5497bf351c8f847558ee9a4511f73000b04` | 2023-03-09 | Update workflow-module.html | Fixes `BiologicallyDerivedProductDispense.html` casing | Link correction |
| `1ce2d8dfbf69e6a9b9617a382aee935403e9a5b5` | 2023-03-17 | Updated workflow roadmap | Rewrites roadmap/future-work paragraphs | Semantic guidance/editorial; introduces `interoperablity` typo |
| `9469508bb1666922b74221e4748ec934de575431` | 2025-02-26 | FHIR-44611 workflow module references | Adds cross-reference paragraph to Administration and Diagnostics modules | Semantic guidance |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Changes label to `Responsible Owner: Work Group` | Metadata/template |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Applies `e.g.,`/`i.e.,` punctuation corrections | Editorial |
| `3b38b80cf23f9cbb306fab8fcedb293315478c32` | 2025-11-05 | Remove OO resources and point to new incubator | Repoints several OO resource links to `https://build.fhir.org/ig/HL7/oo-incubator-ig/...` | Reference/link change |
| `01706a920f4e88452c409c2cc0b7c74f09ac51c6` | 2025-11-05 | fix oo links | Corrects external IG path from `oo-incubator-ig` to `oo-incubator` | Link correction |
| `87f87a8a0389df053a5217de019d2596933da10f` | 2025-11-06 | Merge branch 'master' into i.e.-e.g- | Merge/carry-forward of punctuation branch | Mechanical/merge |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-31478` (`Change Name of DeviceUseStatement`): Published, persuasive, compatible substantive, applied for R5. The resolution says to change `DeviceUseStatement` to `DeviceUsage` to align with `MedicationUsage` and avoid "statement" ambiguity. This matches commit `f7e99e9a...`.
- `FHIR-36242` (`Case-broken links to extensions aren't being detected`): Published technical correction, related pages `FHIR-core-many`. The issue/comment says remaining case errors were fixed, including R5 commit `9825def2f5`. This matches the `InventoryReport` link casing fix in this page.
- `FHIR-44611` (`Scheduling workflow resources could use a better overview`): Applied, persuasive with modification, non-substantive clarification, applied for R6. The resolution text asks for a sentence pointing readers to domain modules and specifically names Administration and Diagnostics examples. Commit `9469508...` implements that sentence closely.
- `FHIR-44047` (`Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout`): Resolved - change required, persuasive technical correction. Commit `887bc238...` applies the requested punctuation style on this page; Jira status still appears not fully applied/published, but that is workflow status, not a page-specific defect.

### Other Jira issues that plausibly explain related changed text

- `FHIR-53506` (`R6 Ballot Notes: VisionPrescription`) was found by searching `"oo-incubator" workflow`. It is after the page's Nov 2025 OO-incubator commit and is about VisionPrescription ballot notes, but it confirms contemporaneous OO work to add OO-incubator links for resource content.
- `FHIR-53581` (`IG home page should have a summary of its purpose and content`) was found by searching the migrated resource names. It is an OO-incubator issue, created after the page commit, and describes the incubator as a consolidated workspace for actively evolving resources. Its "Migrated Resources" table includes the same resource family (`BiologicallyDerivedProductDispense`, `DeviceDispense`, `DeviceUsage`, `InventoryItem`, `InventoryReport`, `SupplyDelivery`, `SupplyRequest`, `Transport`). This is useful context but not direct workflow page causality.

### Context-only Jira hits that should not drive action

- `FHIR-53506` and `FHIR-53581` should not be treated as the cause of the workflow page link changes because both were created after the Nov 5, 2025 page commits.
- Exact Jira FTS for `"workflow module references"` found no results; `FHIR-44611` was found by exact changed phrase `"relationship of specific domain resources"`.

## Zulip evidence

- Exact searches for the explicit Jira keys (`FHIR-31478`, `FHIR-36242`, `FHIR-44611`, `FHIR-44047`) found no direct Zulip hits in the local snapshot.
- Exact phrase searches for `"workflow module references"` and `"relationship of specific domain resources"` found no Zulip hits.
- `#Orders and Observation WG > OO Additional Resource IG -- Naming Discussion` (2025-10-03 to 2025-10-22) is relevant background for the OO-incubator links. Marti Velezis stated that the planned IG would include `BiologicallyDerivedProductDispense`, `DeviceDispense`, `DeviceUsage`, `InventoryItem`, `InventoryReport`, `SupplyDelivery`, `SupplyRequest`, and `Transport`, and that the supply resources were pulled out of core so supply-like resources could progress together. This supports the source/PR direction but does not mention `source/workflow-module.html` specifically.
- `#fmg > Assessment of Resources for removal from R6` (2025-08-20 to 2025-11-07) provides broader resource-removal context. Lloyd McKenzie noted that "Main Specification" means de facto normative. This is background only for why low-maturity resources might move out of core.

## Confluence evidence

- `FHIRI` page `288072400` (`FHIR Infrastructure Minutes CC 2024-12-16`) references `FHIR-44611` and records: "Motion to address: Paul Lynch / Grahame Grieve : 9-0-0." This aligns with Jira's vote and the later source commit.
- `PA` page `218828654` (`2024 January WGM (virtual) - Meeting Minutes`) references `FHIR-44611`. The Jira snapshot's PA WGM comment is more specific: PA pointed to the existing Administration module scheduling relationship section and recommended updating the workflow page to refer there.
- `FHIRI` page `234784975` (`FHIR Infrastructure Minutes WGM 202405 - Dallas`) records `FHIR-44047 will fix` among prior for-comment ballot issues.
- `OO` page `391650456` (`2025-10-23 OO Main`) records that `oo-incubator` was approved by FMG for the OO Incubator IG code, includes a motion to approve for FMG review next week (12-0-0), and says next steps included creating the `oo-incubator` repo and updating Jira Spec Artifact tickets.
- `OO` page `403866640` (`2025-11-06 OO Main`) records "OO Incubator IG Approved at FMG" and that Grahame created the repository while JD was pulling in resources. This closely follows the Nov 5 page commits and supports the link move context.

## Timeline

| Date | Clock | Evidence | Note |
|---:|---|---|---|
| 2021-03-08 | Jira vote | `FHIR-31478` | Motion 8-0-1 to rename DeviceUseStatement to DeviceUsage |
| 2021-03-30 | Source commit | `f7e99e9a...` | Workflow index uses `DeviceUsage` |
| 2022-03-10 | Jira created/resolved | `FHIR-36242` | Case-broken link correction issue |
| 2022-04-11 | Source commit | `9825def2...` | Fixes `InventoryReport` link casing in this page |
| 2023-03-09 | Source commits | `9a6bccc9...`, `2821a549...` | Adds/fixes several OO resource links in the workflow index |
| 2023-03-17 | Source commit | `1ce2d8df...` | Rewrites workflow roadmap, including current typo |
| 2023-03-20 | PR merge | https://github.com/HL7/fhir/pull/2876 | Merges roadmap update branch |
| 2024-01-30 | Jira/community | `FHIR-44611`; PA WGM comment | Scheduling relationship overview request and PA recommendation to point to Administration module |
| 2024-05-23 | Jira/Confluence | `FHIR-44047`; Confluence page `234784975` | FHIR-I records punctuation issue "will fix" |
| 2024-12-16 | Jira/Confluence vote | `FHIR-44611`; Confluence page `288072400` | FHIR-I motion to address, 9-0-0 |
| 2025-02-26 | Source commit | `9469508b...` | Adds FHIR-44611 domain-module cross-reference paragraph |
| 2025-02-27 | PR merge | https://github.com/HL7/fhir/pull/3325 | Merge containing `FHIR-44611` page commit (also seen in later catch-up PR #3355) |
| 2025-08 to 2025-11 | Zulip discussion | `#fmg > Assessment of Resources for removal from R6` | Broader low-maturity resource removal discussion |
| 2025-10-03 to 2025-10-22 | Zulip discussion | `#Orders and Observation WG > OO Additional Resource IG -- Naming Discussion` | Names migrated resources and rationale for a combined/additional OO IG |
| 2025-10-23 | Confluence minutes | OO page `391650456` | `oo-incubator` approved for FMG review; repo/Jira artifact next steps |
| 2025-11-03 | Source commit | `887bc238...` | Applies `FHIR-44047` punctuation corrections |
| 2025-11-05 | Source commits/PR merge | `3b38b80c...`, `01706a92...`; PR #3937 | Moves OO links to the incubator IG and fixes the path |
| 2025-11-06 | Confluence/PR merge | OO page `403866640`; PR #3951 | OO repo/resource migration noted; `FHIR-44047` PR merged |
| 2025-11-22 onward | Jira context | `FHIR-53506`, `FHIR-53581` | Later OO-incubator context, not causal for the workflow page link commit |

## Evidence log

- Page boundary: `test -f .../4.0.1-0da2a0a84dc1/source/workflow-module.html` and `test -f .../6.0.0-ballot4-5d67a34a13a5/source/workflow-module.html` returned `old exists` and `new exists`.
- New page size/read: `wc -l .../source/workflow-module.html` returned 178; the full file was read from lines 1-178.
- Direct diff: `git -C .../6.0.0-ballot4-5d67a34a13a5 --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/workflow-module.html`.
- Source history: `git -C .../6.0.0-ballot4-5d67a34a13a5 --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/workflow-module.html`.
- Commit inspection: `git show --stat --patch` was run for all 14 page-touching commits listed in Source history.
- Jira snapshots: `bun run jira:search snapshot FHIR-31478`, `FHIR-36242`, `FHIR-44611`, `FHIR-44047`, `FHIR-53506`, `FHIR-53581`.
- Jira searches: `"workflow module references"` found no results; `"relationship of specific domain resources"` found `FHIR-44611`; `"oo-incubator" workflow` found `FHIR-53506`; `DeviceUsage DeviceDispense SupplyDelivery InventoryReport Transport` found `FHIR-53581`.
- Zulip searches: exact key and exact changed-phrase searches for `FHIR-31478`, `FHIR-36242`, `FHIR-44611`, `FHIR-44047`, `"workflow module references"`, and `"relationship of specific domain resources"` found no direct hits.
- Zulip snapshots: `bun run zulip:search snapshot "Orders and Observation WG" "OO Additional Resource IG -- Naming Discussion"` and `bun run zulip:search snapshot fmg "Assessment of Resources for removal from R6"`.
- Confluence searches: `bun run confluence:search refs jira FHIR-31478`, `FHIR-36242`, `FHIR-44611`, `FHIR-44047`, `FHIR-53506`, `FHIR-53581`; only `FHIR-44611` and `FHIR-44047` had direct references among the explicit page keys.
- Confluence snapshots: pages `288072400`, `218828654`, `234784975`, `391650456`, `403866640`, `404097318` were reviewed; `404097318` was background only and did not materially change conclusions.
- GitHub PR searches: `gh pr list -R HL7/fhir --state all --search ...` found PR #3937 for the OO-incubator move, PR #3951 for `FHIR-44047`, PR #2876 for the roadmap commit, PR #3901 for the owner-label metadata commit, and PR #3325/#3355 containing the `FHIR-44611` commit.
- Link spot check: all eight current `https://build.fhir.org/ig/HL7/oo-incubator/StructureDefinition-*.html` URLs in the workflow index returned HTTP 200 with `curl -L -s -o /dev/null -w '%{http_code}'` on 2026-05-20.

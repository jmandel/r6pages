# clinicalsummary-module research appendix

## Scope and coverage

- Page path: `source/clinicalsummary-module.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Local old tree: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- Local new tree: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: page exists in both trees. Old file has 128 lines; new file has 130 lines.
- The R6 ballot4 page was read end-to-end: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalsummary-module.html:1-130`.
- Commit count touching this page between the two commits: 9.
- Explicit Jira keys found in page-specific commit history: FHIR-40584, FHIR-46526, FHIR-46596.
- Jira/Zulip/Confluence searches were performed for those keys plus distinctive changed concepts: `clinical summary module`, `ClinicalAssessment`, `Clinicians on FHIR`, `NutritionIntake NutritionOrder VisionPrescription ServiceRequest`, `Documenting and retrieving the patient conditions`, and `remove additional resources`.
- Caveats: Jira/Zulip FTS queries containing unquoted hyphenated keys or `clinicalsummary-module` failed because FTS parsed the hyphen as an operator. Known Jira keys were snapshotted directly; Zulip exact-key searching was repeated with SQL `LIKE`. No Zulip exact-key hits were found for FHIR-46526 or FHIR-46596. Confluence had no direct refs/FTS hits for FHIR-46596, but ClinicalAssessment removal/additional-resource evidence was found in PC minutes and Zulip.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalsummary-module.html:17` | Current owner/status header. |
| Source | R6 resource index | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalsummary-module.html:43-64` | Current list of resources covered by the page. |
| Source | R6 ClinicalAssessment link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalsummary-module.html:56` | Lists ClinicalAssessment with an external PC incubator link but no status qualifier. |
| Source | R6 common use cases | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalsummary-module.html:87-116` | Current Condition, AllergyIntolerance, Procedure, FamilyMemberHistory, and CarePlan bullets. |
| Source | R6 roadmap | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalsummary-module.html:118-126` | Current roadmap text and updated PC Clinicians on FHIR link. |
| Commit | Template update | https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removed wrapper `<div>`; mechanical/template. |
| Commit | Add OO resources | https://github.com/HL7/fhir/commit/9a6bccc9832fd33f872b51b53e5dcdc99cc3962f | Added NutritionIntake to the module resource list. |
| Commit | FHIR-40584 implementation | https://github.com/HL7/fhir/commit/a2cd5856117f5d838d167d17b0b85fbfe90ffb31 | Main R5 QA update: added resources, Procedure use case, roadmap edits, PC Clinicians on FHIR link. |
| PR | FHIR-40584 PR | https://github.com/HL7/fhir/pull/2816 | Jira comment links PR/commit for Clinical Summary Module QA. |
| Commit | Spelling/grammar | https://github.com/HL7/fhir/commit/fd29fa2cbf5790eb72afa4ee2027327b4af2e397 | Editorial grammar corrections. |
| Commit | FHIR-46526 implementation | https://github.com/HL7/fhir/commit/b4600dfab1d98821cf536235dfbc36eb2f91f64d | Merged Condition/probelms use-case bullets. |
| PR | FHIR-46526 PR | https://github.com/HL7/fhir/pull/3157 | Jira comment links PR/commit for Clinical Summary Common Use Case. |
| Commit | FHIR-46596 implementation | https://github.com/HL7/fhir/commit/670d3a407a962cdde0ef1136fbcdea045b124f19 | Renamed module list entry from ClinicalImpression to ClinicalAssessment. |
| PR | FHIR-46596 PR | https://github.com/HL7/fhir/pull/3441 | Jira comment links PR for ClinicalImpression to ClinicalAssessment rename. |
| Commit | ClinicalAssessment link case fix | https://github.com/HL7/fhir/commit/25b23a94c11b75120d2cf6dbea496525c6372a57 | Fixed `ClinicalAssessment.html` to `clinicalassessment.html`. |
| Commit | Owner label change | https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changed `Work Group` header to `Responsible Owner: Work Group`. |
| Commit | Additional-resource link conversion | https://github.com/HL7/fhir/commit/fad1b9cf84ef652e88947e1a13b026c62f95334e | Changed ClinicalAssessment from a core relative link to the PC incubator URL. |
| Jira | FHIR-40584 | https://jira.hl7.org/browse/FHIR-40584; reopen with `bun run jira:search snapshot FHIR-40584` | Formal rationale for R5 Clinical Summary Module QA changes. |
| Jira | FHIR-46526 | https://jira.hl7.org/browse/FHIR-46526; reopen with `bun run jira:search snapshot FHIR-46526` | Formal rationale for merging the Condition and problems bullets. |
| Jira | FHIR-46596 | https://jira.hl7.org/browse/FHIR-46596; reopen with `bun run jira:search snapshot FHIR-46596` | Formal rationale for renaming ClinicalImpression to ClinicalAssessment. |
| Jira | FHIR-53725 | https://jira.hl7.org/browse/FHIR-53725; reopen with `bun run jira:search snapshot FHIR-53725` | Related context on linking from core spec text to additional/incubator resources. |
| Zulip | Module Ownership | https://chat.fhir.org/#narrow/stream/committers/topic/Module%20Ownership; reopen with `bun run zulip:search snapshot committers "Module Ownership"` | Directly cited from FHIR-40584 comments; clarifies module page listing vs breadcrumb ownership. |
| Zulip | ClinicalAssessment status | https://chat.fhir.org/#narrow/stream/Patient%20Care%20WG/topic/Status%20of%20ClinicalAssessment%20resource%20(ClinicalImpression); reopen with `bun run zulip:search snapshot "Patient Care WG" "Status of ClinicalAssessment resource (ClinicalImpression)"` | States PC voted to remove ClinicalAssessment from R6 and move it to Additional Resources. |
| Zulip | Additional Resources removal | https://chat.fhir.org/#narrow/stream/fmg/topic/Assessment%20of%20Resources%20for%20removal%20from%20R6; reopen with `bun run zulip:search snapshot fmg "Assessment of Resources for removal from R6"` | FMG rationale for moving immature resources, including ClinicalAssessment, out of R6 core. |
| Zulip | Linking to Additional Resources | https://chat.fhir.org/#narrow/stream/implementers/topic/Linking%20to%20Additional%20Resources; reopen with `bun run zulip:search snapshot implementers "Linking to Additional Resources"` | Says links are acceptable as work-in-progress documentation, but comparison text should move/adjust. |
| Confluence | 2023-03-09 PC call | https://confluence.hl7.org/spaces/PC/pages/161056336/2023-03-09+Patient+Care+FHIR+Conference+Call; `bun run confluence:search snapshot 161056336` | PC meeting minutes for FHIR-40584 module QA. |
| Confluence | 2023-03-16 PC call | https://confluence.hl7.org/spaces/PC/pages/161058382/2023-03-16+Patient+Care+FHIR+Conference+Call; `bun run confluence:search snapshot 161058382` | Notes clinical summary changes applied and clarifies narrative listing vs breadcrumb ownership. |
| Confluence | 2024-08-01 PC call | https://confluence.hl7.org/spaces/PC/pages/256187168/2024-08-01+Patient+Care+FHIR+Conference+Call; `bun run confluence:search snapshot 256187168` | Records FHIR-46526 feedback received. |
| Confluence | 2024-08-08 PC call | https://confluence.hl7.org/spaces/PC/pages/256516900/2024-08-08+Patient+Care+FHIR+Conference+Call; `bun run confluence:search snapshot 256516900` | R6 QA minutes listing FHIR-46526 and ClinicalImpression rename work. |
| Confluence | 2025 Sept PC WGM | https://confluence.hl7.org/spaces/PC/pages/358875423/2025+Sept+Patient+Care+WGM+Agenda+and+Minutes; `bun run confluence:search snapshot 358875423` | PC agreement to move ConditionDefinition, ClinicalAssessment, and Linkage to Additional Resources. |
| Confluence | 2025-11-20 PC call | https://confluence.hl7.org/spaces/PC/pages/404096912/2025-11-20+Patient+Care+FHIR+Conference+Call; `bun run confluence:search snapshot 404096912` | R6 QA note that auto-converted ClinicalAssessment references should be reviewed and often removed/altered. |
| Confluence | PC Incubator proposal | https://confluence.hl7.org/spaces/FHIR/pages/404098231/PC+Incubator+IG+Proposal; `bun run confluence:search snapshot 404098231` | Defines PC incubator for artifacts removed from R6 normative content. |

## Change summary

### Resource/module coverage changes

- **Semantic guidance / metadata-navigation:** The page's index changed from a shorter R4 resource list to a broader R6 list. Added or newly present in the final page: AdverseEvent, ServiceRequest, VisionPrescription, NutritionIntake, NutritionOrder, and ClinicalAssessment.
- **Context from source/community:** FHIR-40584 directed adding ServiceRequest, NutritionOrder, NutritionIntake, and VisionPrescription to the page's narrative index. The cited Zulip `#committers > Module Ownership` discussion and 2023-03-16 PC minutes clarify that module-page narrative mentions are not the same as breadcrumb/module ownership; e.g., ServiceRequest can remain in Workflow while being discussed here.
- **Substantive naming change:** ClinicalImpression was renamed to ClinicalAssessment under FHIR-46596. That was a non-compatible R6 resource rename. This page only updates the module list label/link.
- **Later Additional Resources change:** Commit `fad1b9cf84ef652e88947e1a13b026c62f95334e` changed the ClinicalAssessment link from a core relative page to `https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-ClinicalAssessment.html`. This reflects the later R6 Additional Resources move, but the surrounding page text still says the Clinical Module "covers the following resources" without indicating ClinicalAssessment is no longer in R6 core.

### Common use cases and roadmap

- **Editorial / semantic guidance:** FHIR-40584 added a Procedure use-case bullet and revised the roadmap to remove the stale "next 18 months" phrasing, name Condition/AllergyIntolerance/Procedure as core resources expected to see wider implementation, and change the Clinicians on FHIR link to the PC Confluence space.
- **Editorial / semantic guidance:** FHIR-46526 merged the standalone "Retrieving the patient's problems" bullet into the Condition bullet as "Documenting and retrieving the patient's conditions."
- **Editorial only:** Multiple capitalization/grammar updates changed "Resource(s)" to "resource(s)" in ordinary prose and fixed grammar/commas.

### Template, status, and layout

- **Mechanical/template:** The wrapper `<div class="col-12">` and closing `</div>` were removed by the 2021 template update.
- **Metadata/template:** The header label changed from `Work Group` to `Responsible Owner: Work Group` in the broad R6 normative-changes commit. The page remains `Informative`.

### No detected changes in these categories

- No examples were added or changed.
- No REST/search/operation behavior changed.
- No explicit conformance requirement (`SHALL`, `SHOULD`, etc.) was added to this page. The file has a boilerplate HTML comment containing `SHALL`, but it predates the compared range and is not reader-facing page guidance.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Removed wrapper `<div class="col-12">` and closing `</div>`. | mechanical/template |
| `9a6bccc9832fd33f872b51b53e5dcdc99cc3962f` | 2023-03-09 | add OO resources | Added `NutritionIntake` to the resource list. | semantic/navigation |
| `a2cd5856117f5d838d167d17b0b85fbfe90ffb31` | 2023-03-10 | J#40584 - QA for Clinical Summary Module as well as updated FMM for ClinicalImpression and AdverseEvent | Added AdverseEvent, ServiceRequest, VisionPrescription, NutritionOrder; added Procedure use case; updated roadmap and PC Clinicians on FHIR link; broad capitalization edits. Jira links PR #2816. | semantic guidance + editorial |
| `fd29fa2cbf5790eb72afa4ee2027327b4af2e397` | 2023-03-13 | QA Patient Care Resources for spelling and grammar | Fixed "low, moderate, or high" and "within the clinical community." | editorial |
| `b4600dfab1d98821cf536235dfbc36eb2f91f64d` | 2024-08-30 | J#46526 updated clinical summary module | Changed Condition bullet to "Documenting and retrieving the patient's conditions" and removed the separate problems-only bullet. Jira links PR #3157. | editorial/semantic guidance |
| `670d3a407a962cdde0ef1136fbcdea045b124f19` | 2025-01-14 | J#46596 Rename ClinicalImpression to ClinicalAssessment | Renamed the module list entry/link from ClinicalImpression to ClinicalAssessment. Jira links PR #3441. | substantive naming consequence |
| `25b23a94c11b75120d2cf6dbea496525c6372a57` | 2025-03-31 | fix up references | Changed `ClinicalAssessment.html` to `clinicalassessment.html`. | link fix |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Changed header from `Work Group` to `Responsible Owner: Work Group`. | template/metadata |
| `fad1b9cf84ef652e88947e1a13b026c62f95334e` | 2025-11-12 | remove additional resources | Changed ClinicalAssessment link from relative core page to the PC incubator URL. | additional-resource link conversion |

## Jira evidence

### Explicit Jira keys from commits/patches

- **FHIR-40584: Clinical Summary Module QA** (`bun run jira:search snapshot FHIR-40584`)
  - Status: Published; resolution: Persuasive; work group: PC; change impact: Non-substantive; vote date: 2023-03-09.
  - Resolution directs adding ServiceRequest, NutritionOrder, NutritionIntake, and VisionPrescription to the Index; adding a Procedure use case; and updating the roadmap/Clinicians on FHIR link.
  - Comment links PR/commit: `https://github.com/HL7/fhir/pull/2816/commits/a2cd585`.
  - The applied page broadly matches the resolution. One non-actionable wording drift: the Jira resolution says CarePlan depends on maturation of "their referenced resources"; the source uses "its referenced resources."

- **FHIR-46526: Clinical Summary Common Use Case** (`bun run jira:search snapshot FHIR-46526`)
  - Status: Applied; resolution: Persuasive; work group: PC; impact: Non-substantive; vote date: 2024-08-22.
  - The issue notes that the standalone "Retrieving the patient's problems" bullet had no clarifying text and should be merged into the Condition bullet.
  - Comment links PR/commit: `https://github.com/HL7/fhir/pull/3157/commits/b4600df`.
  - Applied text matches intent.

- **FHIR-46596: ClinicalImpression renamed to ClinicalAssessment** (`bun run jira:search snapshot FHIR-46596`)
  - Status: Applied; resolution: Persuasive; work group: PC; raised in R6; impact: Non-compatible; vote date: 2024-08-08.
  - Resolution: "Rename resource ClinicalImpression to ClinicalAssessment. Replace resource name in the text to reflect the new resource name, too."
  - Comment links PR #3441: `https://github.com/HL7/fhir/pull/3441`.
  - This explains the page list entry rename, but not the later move to the PC incubator.

### Other Jira issues that plausibly explain changed text

- **FHIR-53725: Remove reference and wording regarding the Linkage Resource, which is no longer part of FHIR Core R6** (`bun run jira:search snapshot FHIR-53725`)
  - Not about this page, but directly relevant to the Additional Resources linking pattern.
  - Resolution says Linkage is moving to an incubator and the issue will be resolved once the incubator and linking mechanism exist.
  - Comment links the Zulip `#implementers > Linking to Additional Resources` thread.
  - This provides evidence that core-to-incubator links were under active review, but should not be treated as a page-specific decision for ClinicalSummary.

### Context-only Jira hits not elevated to action

- `clinical summary module` and `Clinical Module` FTS surfaced older/contextual issues such as FHIR-14947 and FHIR-34376. These predate the R4-to-R6 ballot4 delta or concern other module questions; they did not explain a current mismatch.
- `ClinicalAssessment` FTS surfaced R6 issues such as FHIR-50192, FHIR-50480, FHIR-50441, and FHIR-50410. These concern the ClinicalAssessment resource or references from other resources, not this module page's list text.
- `remove additional resources` FTS surfaced broader Additional Resources issues, including FHIR-54121 for FM resources. They provide background only and are not page-specific.

## Zulip evidence

- **`#committers > Module Ownership`** (`bun run zulip:search snapshot committers "Module Ownership"`)
  - Date range: 2023-03-09 to 2023-03-12.
  - Grahame Grieve asked editors to review module pages for resources not stated in any module.
  - Michelle Miller reported PC approved FHIR-40584 changes adding ServiceRequest, NutritionOrder, NutritionIntake, and VisionPrescription to the clinical module page.
  - Marti Velezis asked whether resources can be in more than one module because ServiceRequest/NutritionOrder/VisionPrescription were under other modules; Grahame answered that resources can only "be" in one module for breadcrumbs, but more than one module can comment on them and where they fit.
  - This supports reading the page's list as narrative coverage, not necessarily canonical module ownership.

- **`#Patient Care WG > Status of ClinicalAssessment resource (ClinicalImpression)`** (`bun run zulip:search snapshot "Patient Care WG" "Status of ClinicalAssessment resource (ClinicalImpression)"`)
  - Date range: 2025-05-22 to 2025-10-24.
  - Rik Smithies questioned whether the low-adoption, FMM 1 ClinicalAssessment should be dropped from R6.
  - Michelle Miller replied on 2025-10-24 that during the Sept WGM, Patient Care voted to remove ClinicalAssessment from R6 and that it would proceed and mature on the "Additional Resources" track.

- **`#fmg > Assessment of Resources for removal from R6`** (`bun run zulip:search snapshot fmg "Assessment of Resources for removal from R6"`)
  - FMG discussed using Additional Resources/incubator IGs so immature resources can evolve outside the main R6 specification.
  - Grahame's 2025-08-28 committee communication listed PC Development 2 resources, including ClinicalAssessment and Linkage, for committee consideration.
  - It says resources moved to Additional Resources can still be referred to from main-spec narrative as "work in progress," but cannot be directly referred to from resource definitions/examples.
  - Later messages discuss naming concerns around "Additional Resources."

- **`#implementers > Linking to Additional Resources`** (`bun run zulip:search snapshot implementers "Linking to Additional Resources"`)
  - Brian Postlethwaite asked whether linking to additional resources from the core spec remains acceptable.
  - Grahame replied: "you can link to it as work in progress in documentation, but you should move comparison text to where it's being incubated as much as possible."
  - This supports the action finding: the ClinicalSummary page may link to ClinicalAssessment, but the current list should not imply unqualified core coverage.

- **Exact Jira-key Zulip checks**
  - SQL `LIKE` found two messages for FHIR-40584, both in `#committers > Module Ownership`.
  - SQL `LIKE` found no messages for FHIR-46526 or FHIR-46596.
  - Initial FTS searches for `FHIR-40584`, `FHIR-46526`, and `FHIR-46596` failed due hyphen parsing; this is a search-tool caveat, not evidence of absence.

## Confluence evidence

- **2023-03-09 Patient Care FHIR Conference Call** (`bun run confluence:search snapshot 161056336`)
  - Mentions FHIR-40584 and the Clinicalsummary-module roadmap/index review.
  - Includes the same resource-addition list and cites the Zulip Module Ownership topic.
  - Records PC FMM review context for several resources.

- **2023-03-16 Patient Care FHIR Conference Call** (`bun run confluence:search snapshot 161058382`)
  - Says "clinical summary changes are applied."
  - Clarifies "Only includes narrative text (not breadcrumbs)" and that ServiceRequest remains in Workflow.
  - Notes the module page contains 11 resources and discusses why ServiceRequest is included despite not always being clinical.

- **2024-08-01 and 2024-08-08 Patient Care FHIR Conference Calls** (`bun run confluence:search snapshot 256187168`; `bun run confluence:search snapshot 256516900`)
  - 2024-08-01 records FHIR-46526 feedback for the clinicalsummary-module page.
  - 2024-08-08 minutes list FHIR-46526 among non-substantive Clinical Summary QA items and mention ClinicalImpression/ConditionDefinition R6 review and the expected ClinicalAssessment rename Jira.

- **2025 Sept Patient Care WGM Agenda and Minutes** (`bun run confluence:search snapshot 358875423`)
  - PC discussed FMG recommendations for Additional Resources.
  - Records agreement that ConditionDefinition, ClinicalAssessment, and Linkage should be removed from R6 and moved to Additional Resources.
  - Thursday Q1 minutes record a motion supporting the feedback to FMG: 31 for, 0 against, 1 abstain.

- **2025-11-20 Patient Care FHIR Conference Call** (`bun run confluence:search snapshot 404096912`)
  - PC approved the PC Incubator IG Proposal.
  - R6 QA note: "Review Additional Resource references" and specifically says mostly ClinicalAssessment references from Condition.stage.assessment were auto-converted; in many cases those references should be removed or language altered to reflect the resource's new status.
  - This is the strongest process evidence that unqualified auto-converted ClinicalAssessment references still require conscious review.

- **PC Incubator IG Proposal** (`bun run confluence:search snapshot 404098231`)
  - Approved 2025-11-20.
  - Scope: the IG acts as the incubator for PC artifacts that are not part of the R6 Normative content.
  - Short/long descriptions say it defines usage of Patient Care FHIR resources evolving in maturity until they are ready for inclusion in the Normative FHIR Core specification.

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2021-06-27 | Source commit | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the wrapper div as part of an HTML template update. |
| 2023-03-09 | Discussion/Jira vote | PC reviewed Clinical Summary Module QA, created/resolved/voted FHIR-40584, and discussed module ownership/listing on Confluence and Zulip. |
| 2023-03-09 | Source commit | `9a6bccc9832fd33f872b51b53e5dcdc99cc3962f` added NutritionIntake. |
| 2023-03-10 | Source commit / PR | `a2cd5856117f5d838d167d17b0b85fbfe90ffb31` implemented FHIR-40584; Jira links PR #2816. |
| 2023-03-13 | Source commit | `fd29fa2cbf5790eb72afa4ee2027327b4af2e397` applied grammar fixes. |
| 2023-03-16 | Discussion | PC minutes record that clinical summary changes were applied and that additions are narrative, not breadcrumb ownership. |
| 2024-08-01 | Discussion/Jira created | PC minutes record FHIR-46526 feedback on the clinicalsummary-module page. |
| 2024-08-08 | Jira vote | FHIR-46596 was created/resolved/voted to rename ClinicalImpression to ClinicalAssessment. |
| 2024-08-22 | Jira vote | FHIR-46526 was resolved/voted to merge the Condition/problems bullets. |
| 2024-08-30 | Source commit / PR | `b4600dfab1d98821cf536235dfbc36eb2f91f64d` implemented FHIR-46526; Jira links PR #3157. |
| 2025-01-14 | Source commit | `670d3a407a962cdde0ef1136fbcdea045b124f19` changed ClinicalImpression to ClinicalAssessment in this page. |
| 2025-03-31 | Source commit | `25b23a94c11b75120d2cf6dbea496525c6372a57` fixed the ClinicalAssessment link casing. |
| 2025-08-28 | Discussion | FMG Zulip draft requested committees assess immature resources for Additional Resources; ClinicalAssessment was listed for PC consideration. |
| 2025-09-15/18 | Workgroup decision | PC WGM minutes record agreement to remove ClinicalAssessment from R6 and move it to Additional Resources; feedback motion 31-0-1. |
| 2025-10-24 | Discussion | Patient Care WG Zulip confirms ClinicalAssessment will proceed on the Additional Resources track. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the owner label. |
| 2025-11-12 | Source commit | `fad1b9cf84ef652e88947e1a13b026c62f95334e` auto-converted the ClinicalAssessment link to the PC incubator URL. |
| 2025-11-20 | Workgroup/process | PC approved the PC Incubator IG Proposal and noted auto-converted Additional Resource references need review/removal or wording changes. |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/clinicalsummary-module.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/clinicalsummary-module.html" && echo "new exists"`
  - Result: both exist; old 128 lines, new 130 lines.
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalsummary-module.html`
  - Established the final R4-to-R6 changes: resource list expansion, ClinicalAssessment external link, use-case and roadmap edits, owner label/template changes.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalsummary-module.html`
  - `git show --stat --patch` for all 9 page-touching commits.
- Full newer-page read:
  - `wc -l ".../6.0.0-ballot4-5d67a34a13a5/source/clinicalsummary-module.html"`
  - Read lines `1-130` with line-numbered file view.
- Jira:
  - `bun run jira:search snapshot FHIR-40584`
  - `bun run jira:search snapshot FHIR-46526`
  - `bun run jira:search snapshot FHIR-46596`
  - `bun run jira:search snapshot FHIR-53725`
  - FTS searches for `clinical summary module`, `Clinical Module`, `ClinicalAssessment`, `Clinicians on FHIR`, `NutritionIntake NutritionOrder VisionPrescription ServiceRequest`, `Documenting and retrieving the patient conditions`, and `remove additional resources`.
  - Failed search affecting confidence: `bun run jira:search fts clinicalsummary-module --limit 10` failed due hyphen parsing as `no such column: module`; other terms covered the concept.
- Zulip:
  - SQL exact-key searches for FHIR-40584, FHIR-46526, FHIR-46596 using `content LIKE`.
  - `bun run zulip:search snapshot committers "Module Ownership"`
  - `bun run zulip:search snapshot "Patient Care WG" "Status of ClinicalAssessment resource (ClinicalImpression)"`
  - `bun run zulip:search snapshot fmg "Assessment of Resources for removal from R6"`
  - `bun run zulip:search snapshot implementers "Linking to Additional Resources"`
  - Failed FTS key searches for `FHIR-40584`, `FHIR-46526`, `FHIR-46596` due hyphen parsing were corrected with SQL.
- Confluence:
  - `bun run confluence:search refs jira FHIR-40584`, `FHIR-46526`, `FHIR-46596`
  - `bun run confluence:search fts ClinicalAssessment --limit 10`, `clinical summary module`, `Clinicians on FHIR`
  - Snapshots: `161056336`, `161058382`, `256187168`, `256516900`, `358875423`, `404096912`, `404098231`.

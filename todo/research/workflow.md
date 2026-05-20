# workflow research appendix

## Scope and coverage

- Page path: `source/workflow.html`
- Old version/source: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/source: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: page exists in both trees. Old file has 316 lines; new file has 334 lines.
- New page read end-to-end: yes, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow.html:1-334`.
- Direct diff captured 194 lines. Source history found 22 commits touching this page between the two commits.
- Explicit Jira keys found in source commit subjects/patch context: `FHIR-26947`, `FHIR-31478`, `FHIR-37935`, `FHIR-38682`, `FHIR-46596`, `FHIR-42871`. Additional strongly related key found from Zulip/Jira/PR evidence: `FHIR-28105`.
- Jira searched/snapshotted for all explicit keys and selected changed phrases. Zulip searched by quoted Jira keys and distinctive phrases, with snapshots for the meaningful threads. Confluence searched by Jira refs/FTS and snapshotted relevant meeting pages.
- Caveats: this was bounded, not exhaustive. Some broad R6 "remove/additional resources" changes were applied by mechanical commits without page-specific Jira keys. Live link checks were performed on 2026-05-20; the `pc-incubator` target could become valid later if that IG is populated and built.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Current full page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow.html:1-334` | Current R6 ballot4 page reviewed end-to-end |
| Source | Workflow resources table typo | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow.html:90` | `calss="grid"` appears to prevent grid styling; inherited from R4 |
| Source | ClinicalAssessment external link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow.html:169-172` | Links ClinicalAssessment to `https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-ClinicalAssessment.html`, which returned HTTP 404 |
| Source | Pattern extensions section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow.html:297-308` | Implements `FHIR-37935` by linking workflow extension collections |
| Source | Open Issues / SpecimenDefinition note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow.html:311-329` | The SpecimenDefinition rationale appears inside "Open Issues" rather than as a footnote/note |
| Commit | Contract moved to Event | `701d231b127cb074b1d1adf183c334b0782de09c`, `32f0e0a45348521177e77ba6ec7863c46b7f66e7`, https://github.com/HL7/fhir/pull/849 | Applies `FHIR-26947` and then list-column cleanup |
| Commit | ObservationDefinition added | `c7cb8841b8470f9bcff4af0dbe096dd44e5c1bde`, PR https://github.com/HL7/fhir/pull/1397 | Adds ObservationDefinition to Definitions group for `FHIR-28105` |
| Commit | SpecimenDefinition note added | `64843ca44709779740f8cffcc9f7da2b00823148`, merge `62638e419e8ce8d2faf3eb3c134e6cf4af8a8137`, PR https://github.com/HL7/fhir/pull/1398 | Adds the note now shown under Open Issues |
| Commit | Pattern extensions section | `8ed49cf593228a47bd6b14e4f123c11977e11911`, https://github.com/HL7/fhir/commit/8ed49cf593228a47bd6b14e4f123c11977e11911 | Implements `FHIR-37935` |
| Commit | MedicationUsage rename | `b2032629f28b8d31b9a67b46170dde873398fb0d`, PR https://github.com/HL7/fhir/pull/2590 | Applies `FHIR-38682`, changing table entry to MedicationStatement |
| Commit | ClinicalImpression rename | `670d3a407a962cdde0ef1136fbcdea045b124f19`, PR https://github.com/HL7/fhir/pull/3441 | Applies `FHIR-46596`, changing ClinicalImpression to ClinicalAssessment |
| Commit | RequestOrchestration added | `8ba74d9a3b3deb91baed014bf3495736c89af1b8`, PR https://github.com/HL7/fhir/pull/3357 | Applies `FHIR-42871` |
| Commit | R6 status/template | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Changes page status from Trial Use/Maturity 2 to Informative/Responsible Owner |
| Commit | OO incubator links | `3b38b80cf23f9cbb306fab8fcedb293315478c32`, `01706a920f4e88452c409c2cc0b7c74f09ac51c6` | Moves OO resources to `oo-incubator` links and fixes URL path |
| Commit | PC incubator link | `fad1b9cf84ef652e88947e1a13b026c62f95334e` | Changes ClinicalAssessment to a `pc-incubator` URL that is not currently live |
| Jira | `FHIR-26947` | https://jira.hl7.org/browse/FHIR-26947; `bun run jira:search snapshot FHIR-26947` | Contract belongs under Event, not Request |
| Jira | `FHIR-28105` | https://jira.hl7.org/browse/FHIR-28105; `bun run jira:search snapshot FHIR-28105` | Add ObservationDefinition to Definitions and add a SpecimenDefinition note |
| Jira | `FHIR-31478` | https://jira.hl7.org/browse/FHIR-31478; `bun run jira:search snapshot FHIR-31478` | Rename DeviceUseStatement to DeviceUsage |
| Jira | `FHIR-37935` | https://jira.hl7.org/browse/FHIR-37935; `bun run jira:search snapshot FHIR-37935` | Add/link workflow pattern extensions from this page |
| Jira | `FHIR-38682` | https://jira.hl7.org/browse/FHIR-38682; `bun run jira:search snapshot FHIR-38682` | Rename MedicationUsage back to MedicationStatement |
| Jira | `FHIR-46596` | https://jira.hl7.org/browse/FHIR-46596; `bun run jira:search snapshot FHIR-46596` | Rename ClinicalImpression to ClinicalAssessment |
| Jira | `FHIR-42871` | https://jira.hl7.org/browse/FHIR-42871; `bun run jira:search snapshot FHIR-42871` | Add RequestOrchestration to Requests list |
| Jira | `FHIR-54838` | https://jira.hl7.org/browse/FHIR-54838; `bun run jira:search snapshot FHIR-54838` | Context-only later R6 ObservationDefinition reference-list issue; not a workflow page defect |
| Zulip | Common Workflow Extensions | https://chat.fhir.org/#narrow/stream/workflow/topic/Common%20Workflow%20Extensions; `bun run zulip:search snapshot workflow "Common Workflow Extensions"` | Rationale leading to `FHIR-37935` |
| Zulip | ObservationDefinition, SpecimenDefinition | https://chat.fhir.org/#narrow/stream/workflow/topic/ObservationDefinition%2C%20SpecimenDefinition; `bun run zulip:search snapshot workflow "ObservationDefinition, SpecimenDefinition"` | Explains `FHIR-28105` and why SpecimenDefinition should not be in Definitions |
| Zulip | ClinicalAssessment status | https://chat.fhir.org/#narrow/stream/Patient%20Care%20WG/topic/Status%20of%20ClinicalAssessment%20resource%20(ClinicalImpression); `bun run zulip:search snapshot "Patient Care WG" "Status of ClinicalAssessment resource (ClinicalImpression)"` | Later reassessment: Patient Care voted to remove ClinicalAssessment from R6 and mature it on Additional Resources track |
| Confluence | FHIR-I `FHIR-37935` vote | Page `108303407`, https://confluence.hl7.org/spaces/FHIRI/pages/108303407/FHIR+Infrastructure+Minutes+CC+2022-08-22; `bun run confluence:search snapshot 108303407` | Records `FHIR-37935` persuasive-with-mod vote |
| Confluence | Pharmacy `FHIR-38682` vote | Page `144966025`, https://confluence.hl7.org/spaces/PHAR/pages/144966025/2022-10-31+Agenda+Meeting+Notes; `bun run confluence:search snapshot 144966025` | Records MedicationUsage reverting to MedicationStatement |
| Confluence | CDS `FHIR-42871` context | Page `198869766`, https://confluence.hl7.org/spaces/CDS/pages/198869766/2023-10-25+Meeting+Agenda; `bun run confluence:search snapshot 198869766` | Explains why RequestOrchestration was added to base workflow list |
| Confluence | OO `FHIR-28105` vote | Page `77368758`, https://confluence.hl7.org/spaces/OO/pages/77368758/2021-08-31+FHIR; `bun run confluence:search snapshot 77368758` | Records ObservationDefinition addition as persuasive |
| Confluence | PC Additional Resources | Page `358875423`, https://confluence.hl7.org/spaces/PC/pages/358875423/2025+Sept+Patient+Care+WGM+Agenda+and+Minutes; `bun run confluence:search snapshot 358875423` | Records ClinicalAssessment removal from R6 / Additional Resources direction |
| Confluence | OO Incubator resource migration | Page `403867067`, https://confluence.hl7.org/spaces/OO/pages/403867067/2025-11-07+OO+on+FHIR; `bun run confluence:search snapshot 403867067` | Supports links to OO incubator resources |
| Live check | ClinicalAssessment URL | `curl -L -s -o /dev/null -w '%{http_code}' https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-ClinicalAssessment.html` returned `404` on 2026-05-20 | Current page link target is not live |
| GitHub | PC incubator repo | `gh api repos/HL7/pc-incubator` showed `size: 0`, created/updated `2026-05-18T06:30:20Z` | Explains why the linked IG is not built yet |

## Change summary

### Page metadata/template/navigation

- Metadata/template/navigation: R4 showed a `colstu` status table with FHIR WG, Maturity Level 2, and Trial Use. R6 ballot4 shows `colsi`, "Responsible Owner", no FMM cell, and Standards Status Informative (`270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`).
- Mechanical/template: wrapper `<div class="col-12">` was removed by template update (`d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`).
- Mechanical/template: STU/open-issues block changed from literal `<blockquote class="stu-note">` to `[%stu-note issues%]` / `[%end-note%]` (`23a31a590b7b03840e4f5946c17b6ec6e0e54665`).

### Workflow resource classification and list content

- Semantic classification: Contract moved from Request to Event (`FHIR-26947`; commits `701d231...`, `32f0e0...`).
- Semantic classification: ObservationDefinition added to Definitions (`FHIR-28105`; commit `c7cb884...`). The related SpecimenDefinition rationale was added later (`64843ca...` / merge `62638e...`) but appears under "Open Issues".
- Terminology/reference updates: DeviceUseStatement renamed DeviceUsage (`FHIR-31478`), MedicationUsage renamed back to MedicationStatement (`FHIR-38682`), ClinicalImpression renamed ClinicalAssessment (`FHIR-46596`), and RequestOrchestration added to Requests (`FHIR-42871`).
- Resource lifecycle/link updates: DocumentManifest removed; ChargeItem, ClinicalAssessment, DeviceUsage, ImmunizationRecommendation, SupplyRequest, SupplyDelivery, Transport, and some other resources were changed from local core links to external incubator links. OO/Admin/Immunization checked links were live; the `pc-incubator` ClinicalAssessment link was not live at review time.
- Mostly mechanical/noise: several resource moves between table columns appear to preserve list ordering/column balance rather than change classification.

### Workflow pattern extensions

- Semantic guidance: `FHIR-37935` added a new "Pattern extensions" section linking to Event, Request, and Workflow pattern extension collections. The Jira resolution and Zulip thread specifically asked for discoverability/linkage from the workflow page, which the current section largely implements.

### Current-page defects noticed during review

- Rendering/link defect: `ClinicalAssessment` links to an unbuilt `pc-incubator` page that currently returns HTTP 404.
- Intent/editorial mismatch: `FHIR-28105` asked for a note/footnote explaining why SpecimenDefinition is not a Definition; the applied text is still presented as an "Open Issue".
- Rendering defect: `<table calss="grid">` typo at line 90 is inherited from R4 and likely prevents intended grid styling.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `701d231b127c` | 2020-04-27 | `Preapply <li><a href=contract.html>Contract</a></li>` | Moves Contract toward Event list; formatting cleanup | Semantic classification / cleanup |
| `32f0e0a45348` | 2020-04-27 | `Preapply FHIR-26947` | Finishes moving list entries across columns after Contract move | Semantic classification / cleanup |
| `f7e99e9a9213` | 2021-03-30 | `J#31478 - rename DeviceUseStatement to DeviceUsage` | Renames DeviceUseStatement list entry | Terminology/reference |
| `d7b8dadc6213` | 2021-06-27 | `update html template` | Removes page wrapper div | Mechanical/template |
| `c7cb8841b847` | 2021-08-31 | `added reference to ObservationDefinition` | Adds ObservationDefinition to Definitions group | Semantic classification |
| `64843ca44709` | 2021-09-01 | `added note to workflow.html that was left out in the last commit` | Adds SpecimenDefinition rationale under Open Issues | Intent/editorial concern |
| `ddb7bfbf0535` | 2022-02-03 | `first commit of Transport resource` | Adds Transport to Events | Resource list content |
| `219de452b465` | 2022-05-01 | `Cleaned up workflow artifact lists a bit` | Table formatting/list-column cleanup | Mechanical/editorial |
| `8ed49cf59322` | 2022-09-05 | `FHIR-37935 - Add references to workflow pattern extensions` | Adds Pattern extensions section | Semantic guidance |
| `23a31a590b7b` | 2022-09-06 | `update all ballot and stu notes` | Converts open issues note to macro | Mechanical/template |
| `ea9417370766` | 2023-01-23 | `Remove DocumentManifest` | Removes DocumentManifest from Events list | Resource lifecycle/reference |
| `b2032629f28b` | 2023-01-25 | `FHIR-38682` | Renames MedicationUsage to MedicationStatement | Terminology/reference |
| `903d9ba64282` | 2023-01-30 | `Merge the latest master changes into our branch.` | Merge shows net one-line deletion for this page in history view; direct diff reflects DocumentManifest removal | Merge/noise |
| `670d3a407a96` | 2025-01-14 | `J#46596 Rename ClinicalImpression to ClinicalAssessment` | Renames ClinicalImpression to ClinicalAssessment | Terminology/reference |
| `8ba74d9a3b3d` | 2025-03-09 | `Apply FHIR-42871- add RequestOrchestration to the list of resources implementing Request` | Adds RequestOrchestration and shifts ServiceRequest | Semantic classification/list content |
| `8008494e80a2` | 2025-03-24 | `Merge branch 'master' into michelle-miller-46596-ClinicalImpression-renamed` | Merge for ClinicalAssessment branch | Merge/noise |
| `270e0ceb7b02` | 2025-10-31 | `normative changes for R6` | Changes page status to Informative and owner wording | Metadata/template |
| `3b38b80cf23f` | 2025-11-05 | `Remove OO resources and point to new incubator` | Changes OO resources to `oo-incubator-ig` external links | Resource lifecycle/link update |
| `01706a920f4e` | 2025-11-05 | `fix oo links` | Corrects OO incubator path from `oo-incubator-ig` to `oo-incubator` | Link fix |
| `e073fb45ec6f` | 2025-11-07 | `removing ImmunizationRecommendation and ImmunizationEvaluation` | Changes ImmunizationRecommendation to immunization incubator URL | Resource lifecycle/link update |
| `71567db3ee03` | 2025-11-07 | `ballot notes part #1, and remove Citation, VerificationResult, ChargeItem, ChargeItemDefinition, EncounterHistory, PersonalRelationship, and some QA` | Changes ChargeItem to admin incubator URL | Resource lifecycle/link update |
| `fad1b9cf84ef` | 2025-11-12 | `remove additional resources` | Changes ClinicalAssessment to `pc-incubator` URL | Resource lifecycle/link update; current link defect |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-26947` (Published, Persuasive, fhir-i): Contract should be listed under Event in the Workflow module. Resolution: "Move Contract from Request to Event." This matches the R4->R6 table change.
- `FHIR-31478` (Published, Persuasive, OO): Change DeviceUseStatement to DeviceUsage. Current direct diff shows DeviceUsage now linked externally to OO incubator after later resource removal.
- `FHIR-37935` (Published, Persuasive with Modification, fhir-i): Asked to link/embed standard workflow extensions from the workflow page. Resolution says to add a Pattern extensions section after listing patterns and link to profiles containing workflow extensions. Current page lines 297-308 implement this.
- `FHIR-38682` (Published, Persuasive with Modification, Pharmacy): Rename MedicationUsage back to MedicationStatement. Confluence Pharmacy minutes page `144966025` records the 11-0-0 vote; current page line 201 reflects MedicationStatement.
- `FHIR-46596` (Applied, Persuasive, Patient Care): Rename ClinicalImpression to ClinicalAssessment. Jira comment links PR `HL7/fhir#3441`; current page line 171 reflects the rename but a later commit changed the link to a currently non-live `pc-incubator` URL.
- `FHIR-42871` (Applied, Persuasive, fhir-i): Add RequestOrchestration to the list of Requests resource types. Current page line 150 includes RequestOrchestration.

### Other Jira issues that plausibly explain changed text

- `FHIR-28105` (Published, Persuasive, OO): Add ObservationDefinition to Definitions group and "put a note (foot note)" that SpecimenDefinition defines a thing, not an action. PRs `HL7/fhir#1397` and `#1398` apply the add and note. The classification addition matches intent; the note placement under "Open Issues" appears questionable.
- `FHIR-53506` (Applied, Persuasive, OO): R6 ballot notes for VisionPrescription include adding the OO Incubator IG link for SupplyRequest. This supports the general R6-era shift to external OO incubator links, though it is not a direct workflow.html commit key.

### Context-only Jira hits that should not drive action

- `FHIR-54838`: Later R6 ballot issue about missing resource references for ObservationDefinition/SpecimenDefinition on another page/section. It was resolved no-change because fixed in ballot/CI and does not show a workflow.html issue.
- `FHIR-48951`: FHIR-extensions typo about workflow extensions pointing to ObservationDefinition, not OperationDefinition. It confirms ongoing workflow-extension maintenance but does not identify a workflow.html mismatch.
- `FHIR-43449`: ObservationDefinition alignment with the workflow Definition pattern. Relevant background only; it concerns ObservationDefinition mappings, not this overview page.
- `FHIR-57327`: A broad Observation/ClinicalAssessment search hit while investigating `pc-incubator`; not relied upon for this page.

## Zulip evidence

- `#workflow > Common Workflow Extensions` (2018-06-26 to 2022-08-17): Jose Costa Teixeira asked on 2022-08-16 to put the new workflow-extension descriptions on the workflow page. Lloyd McKenzie replied that the page could link to them and asked for a change request. Jose then posted `FHIR-37935`. This directly supports the new Pattern extensions section.
- `#workflow > ObservationDefinition, SpecimenDefinition` (2020-07-17 to 2020-07-20): Shamil Nizamov asked why ObservationDefinition and SpecimenDefinition were not under Definitions. Lloyd McKenzie answered that ObservationDefinition should be, but "SpecimentDefinition is defining a 'thing', not an action" and asked for a change request. Shamil replied "Done. FHIR-28105." This supports ObservationDefinition addition and the SpecimenDefinition explanatory note.
- `#Patient Care WG > Status of ClinicalAssessment resource (ClinicalImpression)` (2025-05-22 to 2025-10-24): Rik Smithies questioned whether ClinicalAssessment should remain in R6. Michelle Miller later stated that during the September WGM Patient Care voted to remove ClinicalAssessment from R6 and have it mature on the Additional Resources track. This supports the source decision to stop using the local `clinicalassessment.html` link, but not the dead current `pc-incubator` URL.
- Quoted issue-key searches found no Zulip hits for `FHIR-26947`, `FHIR-31478`, `FHIR-38682`, `FHIR-46596`, or `FHIR-42871`. Unquoted key searches initially failed because FTS parsed hyphenated issue keys as operators; quoted key searches were used before concluding no hits.

## Confluence evidence

- FHIR Infrastructure Minutes CC 2022-08-22, page `108303407`: records `FHIR-37935` as Persuasive with Mod, motion Eric Haas/Christiaan Knaap 13-0-0.
- Pharmacy 2022-10-31 Agenda/Meeting Notes, page `144966025`: records discussion of `FHIR-38682` and motion to accept proposed resolution, John Hatem/Peter Sergent, vote 11-0-0; "MedicationUsage resource name will revert to the MedicationStatement name."
- Pharmacy 2022-10-24 Agenda/Meeting Notes, page `139674497`: records preparatory discussion for `FHIR-38682`/`FHIR-39271`, including inviting Peter and Grahame.
- CDS 2023-10-25 Meeting Agenda, page `198869766`: records that the CDS Hooks resource context list would remove a generic resource list and that an additional base spec tracker `FHIR-42871` was added; motion Nick Radov/Juliet Rubini 9-0-2.
- OO 2021-08-31 FHIR minutes, page `77368758`: records `FHIR-28105` motion persuasive, Marti/Eric, 5-0-0.
- Patient Care 2025 September WGM Agenda and Minutes, page `358875423`: records agreement on Additional Resources removal from R6 for ConditionDefinition, ClinicalAssessment, and Linkage, with later feedback motion 31-0-1. This supports the concept of ClinicalAssessment moving out of core, while the current link target remains unresolved.
- OO on FHIR 2025-11-07, page `403867067`: records OO Incubator resource migration, including DeviceUsage, SupplyDelivery, SupplyRequest, and Transport moved to OO Incubator and a 7-0-0 motion to update Jira spec artifacts. This supports the R6-era OO incubator links.
- FHIR-I 2025-10-06, page `391186921`: records broader "Additional Resources" profiling discussion and constraints on using incubator resources from core/dependent packages. Useful context only; not a workflow.html-specific decision.

## Timeline

- 2020-04-27: `FHIR-26947` created; commits `701d231...` and `32f0e0...` move Contract from Request to Event.
- 2020-04-28: `FHIR-26947` resolved; PR `HL7/fhir#849` merged.
- 2020-07-17: Zulip workflow discussion says ObservationDefinition should be under Definitions and SpecimenDefinition should not.
- 2020-07-20: `FHIR-28105` created.
- 2021-03-08/09: `FHIR-31478` voted/resolved; commit `f7e99e...` renames DeviceUseStatement to DeviceUsage on this page.
- 2021-08-31: OO Confluence records `FHIR-28105` persuasive 5-0-0; commit `c7cb884...` adds ObservationDefinition; PR `#1397` merges.
- 2021-09-01: commit `64843ca...` and merge `62638e...` / PR `#1398` add the SpecimenDefinition note.
- 2022-08-16: Zulip `Common Workflow Extensions` discussion leads to `FHIR-37935`.
- 2022-08-22: FHIR-I votes `FHIR-37935` persuasive with mod 13-0-0.
- 2022-09-05: commit `8ed49cf...` adds Pattern extensions section.
- 2022-09-06: commit `23a31a...` converts Open Issues note to macro.
- 2022-10-31: Pharmacy votes `FHIR-38682` 11-0-0 to revert MedicationUsage to MedicationStatement.
- 2023-01-23/25: DocumentManifest removed; `FHIR-38682` applied to workflow list.
- 2023-10-25: CDS Confluence records additional base tracker `FHIR-42871` for RequestOrchestration.
- 2024-08-08: `FHIR-46596` resolved to rename ClinicalImpression to ClinicalAssessment.
- 2024-09-16: `FHIR-42871` resolved.
- 2025-01-14 / 2025-03-30: ClinicalAssessment rename implemented in source and PR `#3441` merged.
- 2025-03-09 / 2025-03-10: `FHIR-42871` source commit and PR `#3357` merge add RequestOrchestration.
- 2025-09 WGM: Patient Care agrees to remove ClinicalAssessment from R6 and move it to Additional Resources.
- 2025-10-31: R6 status/template commit changes workflow page to Informative.
- 2025-11-05 to 2025-11-12: resource-removal/incubator-link commits change OO/Admin/Immunization/PC resources to external incubator links.
- 2026-05-20: live check shows `https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-ClinicalAssessment.html` returns HTTP 404; `HL7/pc-incubator` GitHub repo exists but has size 0.

## Evidence log

- Boundary/diff/history:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/workflow.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/workflow.html" && echo "new exists"`
  - `wc -l <old> <new>` -> 316 old, 334 new.
  - `git -C <new-tree> diff --find-renames 0da2a0... 5d67a34... -- source/workflow.html` -> 194-line direct diff.
  - `git -C <new-tree> log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0.....5d67a34... -- source/workflow.html` -> 22 commits.
  - `git -C <new-tree> show --stat --patch <sha> -- source/workflow.html` for all 22 commits.
- Full page read:
  - Viewed current source in line ranges `1-120`, `121-240`, and `241-334`.
- Jira:
  - `bun run jira:search snapshot FHIR-26947 FHIR-31478 FHIR-37935 FHIR-38682 FHIR-46596 FHIR-42871` (run as separate snapshot calls in one shell loop).
  - Additional snapshots: `FHIR-28105`, `FHIR-54838`, `FHIR-48951`, `FHIR-43449`, `FHIR-53506`.
  - Phrase searches included `SpecimenDefinition thing action Definitions`, `ObservationDefinition workflow`, `workflow pattern extensions`, `RequestOrchestration resources implementing Request`, `OO resources incubator workflow`, and ClinicalAssessment/incubator variants.
  - `pc-incubator ClinicalAssessment` Jira FTS failed because the hyphen was parsed as an operator; other ClinicalAssessment/incubator searches found no issue explaining the dead link.
- GitHub:
  - `gh pr list --repo HL7/fhir --state all --search <FHIR-key> --json ...` found PRs `#849`, `#2590`, and `#3357`.
  - `gh pr view 1398`, `gh pr list --search FHIR-28105`, and `gh pr view 3441` captured PRs `#1397`, `#1398`, and `#3441`.
  - `gh api repos/HL7/pc-incubator` showed the repo exists but has `size: 0`.
- Zulip:
  - Quoted key searches: `bun run zulip:search fts "\"FHIR-XXXXX\"" --limit 20`; only `FHIR-37935` returned a direct hit.
  - Phrase searches: `"workflow pattern extensions"`, `"RequestOrchestration"`, `"ClinicalAssessment"`, `"OO incubator"`, `"SpecimenDefinition" "workflow"`.
  - Snapshots: `workflow "Common Workflow Extensions"`, `workflow "ObservationDefinition, SpecimenDefinition"`, and `Patient Care WG "Status of ClinicalAssessment resource (ClinicalImpression)"`.
- Confluence:
  - `bun run confluence:search refs jira <key>` and `bun run confluence:search fts <key> --limit 10` for explicit keys plus `FHIR-28105`.
  - Snapshots: pages `108303407`, `144966025`, `139674497`, `198869766`, `77368758`, `358875423`, `403867067`, `391186921`.
- Link/rendering checks:
  - `curl -L -s -o /dev/null -w '%{http_code}'` for all external links introduced in the current workflow resource table. OO/Admin/Immunization links returned 200; `pc-incubator/StructureDefinition-ClinicalAssessment.html` returned 404.
  - `rg -n '<table calss="grid"|SpecimenDefinition is defining|ClinicalAssessment|pc-incubator' <old-workflow> <new-workflow>` confirmed `calss="grid"` exists in both R4 and R6, while ClinicalAssessment/SpecimenDefinition entries are R6-era changes.

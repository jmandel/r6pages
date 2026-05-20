# history research appendix

## Scope and coverage

- Page path: `source/history.html`
- Page label/topic: `history`
- Old version/source: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/source: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: file exists in both trees; detected status is modified, not added/deleted/renamed.
- Full newer page read end-to-end: yes, 1148 lines plus final blank line.
- Commit trace: 53 commits touched `source/history.html` between the old and new commits.
- Explicit Jira-like keys from commit metadata: `FHIR-31478` (as `J#31478`), `FHIR-31847` (as `FHIR#31847`), `FHIR-28177`, `FHIR-35933`, `FHIR-32072`, `FHIR-25431`, `FHIR-51227`, `FHIR-51930`, `FHIR-44047`.
- Explicit Jira links in current source body include contextual aggregate links `FHIR-5507` and `FHIR-7612`; these are filter-anchor links for R5 change-count totals, not evidence that those two issues caused the history page change.
- Jira searched/snapshotted: explicit keys above, plus candidate issues from changed phrases: `FHIR-50203`, `FHIR-50204`, `FHIR-50572`, `FHIR-48870`, `FHIR-47496`, and `FHIR-54250`.
- Zulip searched: explicit Jira keys, exact changed phrases, Additional Resources, PersonalRelationship, MolecularDefinition/MolecularSequence, and GraphDefinition/api-incubator terms. Snapshotted relevant threads.
- Confluence searched: explicit Jira keys and candidate issues via `refs jira` and `fts`. Snapshotted high-signal minutes/pages for BRR substance resources, Clinical Genomics MolSeq->MolDef, FHIR-I Additional Resources/search, PersonalRelationship, and GraphDefinition/API Incubator.
- Important caveats: many old `GF#...` references in the historical R4 ballot table are legacy tracker references and were not exhaustively searched because the R4-era text is not the main R4->R6 change. Several broad exact-phrase searches found no Jira/Zulip/Confluence hits; these are noted in the evidence log.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/history.html` | R4 baseline |
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/history.html` | R6 ballot4 source under review |
| Source lines | Milestone table R4B date | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/history.html:50-53` | Current top milestone table says R4B date is `Dec 27, 2018` |
| Source lines | R4B detailed row | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/history.html:309-312` | Same page says `Release R4B: May 28, 2022` |
| Source lines | R6 ballot4 row | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/history.html:96-106` | New top release row for R6 ballot4 |
| Source lines | R6 ballot3 row | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/history.html:109-131` | Additional Resources and resource-move summary |
| Source lines | R5 row | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/history.html:147-237` | Large release-note addition and R5 normative-status note |
| Source lines | GraphDefinition link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/history.html:604-607` | Current link to `http://build.fhir.org/HL7/api-incubator/StructureDefinition-GraphDefinition` returns 404 |
| Commit | Add top milestone table R4B date | `3b0f25862d63f6a8e87a2059eae426748a5edf04`, https://github.com/HL7/fhir/commit/3b0f25862d63f6a8e87a2059eae426748a5edf04 | Introduced R4B milestone row with `Dec 27, 2018` |
| Commit | Add detailed R4B release row | `df8d5f8991e91a78c38f38b77b5d910397cf2225`, https://github.com/HL7/fhir/commit/df8d5f8991e91a78c38f38b77b5d910397cf2225 | Added detailed `Release R4B: May 28, 2022` row but left top milestone date unchanged |
| Commit | Fix R5 release date | `803338e2860d606ab0b5eefba43b527bb043e2cc`, https://github.com/HL7/fhir/commit/803338e2860d606ab0b5eefba43b527bb043e2cc | Shows date cleanup was done for R5 but not R4B |
| Commit | Add R6 ballot3 history | `7d89a5aa76039d0a41da20c64ac3e05506592258`, https://github.com/HL7/fhir/commit/7d89a5aa76039d0a41da20c64ac3e05506592258 | Added `6.0.0-ballot3` release-note row |
| Commit | Add R6 ballot4 history | `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, https://github.com/HL7/fhir/commit/5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd | Added `6.0.0-ballot4` release-note row |
| Commit | GraphDefinition link retarget | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changed history page GraphDefinition link to the currently broken API Incubator URL |
| Jira | DeviceUsage rename | https://jira.hl7.org/browse/FHIR-31478 | Matches `J#31478` commit |
| Jira | ClinicalUseDefinition rename | https://jira.hl7.org/browse/FHIR-31847 | Matches `FHIR#31847` commit |
| Jira | CatalogEntry removal | https://jira.hl7.org/browse/FHIR-28177 | Matches CatalogEntry removal commit and Confluence OO minutes |
| Jira | R5 ballot date correction | https://jira.hl7.org/browse/FHIR-32072 | Page-specific Jira for correcting `4.6.0` R5 ballot date from 2020 to 2021 |
| Jira | Datatype spelling consistency | https://jira.hl7.org/browse/FHIR-25431 | Explains broad `data type` -> `datatype` edits |
| Jira | MolSeq -> MolDef | https://jira.hl7.org/browse/FHIR-51227 | Explains MolecularSequence removal/replacement context |
| Jira | Substance resources removal | https://jira.hl7.org/browse/FHIR-51930 | Explains removal of five substance definition resources |
| Jira | e.g./i.e. punctuation | https://jira.hl7.org/browse/FHIR-44047 | Explains punctuation-only edits |
| Jira | Additional resources/search wording | https://jira.hl7.org/browse/FHIR-50203 | Context for Additional Resources term confusion, not a history-page issue |
| Jira | Searching additional resources | https://jira.hl7.org/browse/FHIR-50204 | Context for Additional Resources, not a history-page issue |
| Jira | Additional resources conformance language | https://jira.hl7.org/browse/FHIR-50572 | Open context-only issue on `resource.html#additional` |
| Jira | PersonalRelationship boundaries | https://jira.hl7.org/browse/FHIR-48870 | Explains PersonalRelationship scope but not a history-page defect |
| Jira | Group involvement/PersonalRelationship | https://jira.hl7.org/browse/FHIR-47496 | Related Group/PersonalRelationship context |
| Jira | GraphDefinition broken link | https://jira.hl7.org/browse/FHIR-54250 | Existing unresolved R6 issue for the same broken GraphDefinition URL on another page |
| Zulip | Additional Resources update | `bun run zulip:search snapshot fhir/infrastructure-wg "Additional Resources"` | Says GraphDefinition and `$graph` move to the API Incubator IG |
| Zulip | Conformance Module | `bun run zulip:search snapshot fhir/infrastructure-wg "Conformance Module"` | Discusses GraphDefinition as still subject to change and found in API Incubator |
| Zulip | Resource removal from R6 | `bun run zulip:search snapshot fmg "Assessment of Resources for removal from R6"` | FMG rationale for moving immature resources to Additional Resources before R6 |
| Zulip | MolSeq/MolDef | `bun run zulip:search snapshot genomics "Update Observation to support MolDef"` and `bun run zulip:search snapshot genomics "Referencing MolDef from Observation"` | Rationale, objections, and later questions about MolDef replacement |
| Zulip | PersonalRelationship draft | `bun run zulip:search snapshot "patient administration WG" "PersonalRelationship resource"` | Early PA discussion around PersonalRelationship scope |
| Confluence | BRR substance removal vote | `bun run confluence:search snapshot 345545642` | BRR 2025-06-10 minutes vote to remove five substance-related resources |
| Confluence | CG MolSeq->MolDef vote | `bun run confluence:search snapshot 358260196` | CG 2025-07-08 minutes vote on FHIR-51227 |
| Confluence | FHIR-I Additional Resources/search | `bun run confluence:search snapshot 325460605` | Madrid WGM minutes for FHIR-50203/50204 and Additional Resources governance |
| Confluence | PersonalRelationship page | `bun run confluence:search snapshot 220692924` | PA page with PersonalRelationship scope and B&R proposal |
| Confluence | FHIR-I GraphDefinition/API Incubator | `bun run confluence:search snapshot 389679504` | FHIR-I 2025-09-22 minutes: GraphDefinition-related content assigned to R6 API Incubator IG |
| Confluence | FHIR-44047 decision | `bun run confluence:search snapshot 234784975` | FHIR-I Dallas WGM minutes: `FHIR-44047 will fix` |

## Change summary

### R6/R5/R4B release-history rows - substantive release-note content

- The current page adds release-note rows for `6.0.0-ballot4`, `6.0.0-ballot3`, placeholder `6.0.0-ballot2`, placeholder `6.0.0-ballot1`, `5.0.0`, `5.0.0-draft-final`, `5.0.0-snapshot3`, `5.0.0-ballot`, `4.6.0`, `4.5.0`, `4.4.0`, `4.3.0`, and `4.2.0`.
- `6.0.0-ballot4` summarizes the first R6 normative ballot: moving definitions to Additional Resources, Dosage Types, Signatures, broad minor changes, and making everything normative except explicit informative pages.
- `6.0.0-ballot3` summarizes the Additional Resources mechanism, Group changes, `RelativeTime`, new/moved resources, EvidenceReport removal, Vital Signs and MPHO changes, and module page updates.
- `5.0.0` adds a long R5 milestone summary, including REST/Search conformance clarifications and the R5 normative-status note.
- `4.3.0` adds the R4B release summary.

### Additional Resources / resource removal link retargeting - semantic guidance and navigation

- Many resource names that no longer have core pages are changed from local links to incubator/IG links or unlinked plain text.
- This includes EvidenceReport, MolecularSequence/MolecularDefinition, substance definition resources, OO incubator resources, PersonalRelationship, EncounterHistory, Citation, VerificationResult, ChargeItemDefinition, FormularyItem, GenomicStudy, ConditionDefinition, Linkage, ClinicalAssessment, MedicationKnowledge, Permission, and TestPlan/TestScript references.
- Community evidence supports the general intent: FMG and FHIR-I moved immature or evolving content out of core to Additional Resources/IG homes before R6 normative balloting.

### Page metadata/template - metadata/template/navigation

- The header table changes from WG/FMM/status to `Responsible Owner` plus standards status.
- The page remains `Informative`.
- Top milestone table was restructured to put the version link in the first column and date in the second column.

### Editorial cleanup - editorial only

- `data type`/`Data Types` was standardized toward `datatype`/`Datatypes` in many historical entries (`FHIR-25431`).
- `e.g.` and `i.e.` punctuation cleanup appears in a few lines (`FHIR-44047`).
- Typos such as `cahgnes`, `Vresion`, `comformance`, and some spelling variants were corrected.

### Mechanical/noise

- Broad release-version commits and merge commits update surrounding boilerplate and links without page-specific rationale.
- Some current-page old historical text still contains pre-existing typos or odd wording, but only two issues rose to actionable level: the R4B milestone date inconsistency and a broken GraphDefinition link.

## Source history

| Date | Commit | Subject | Classification / page effect |
|---|---|---|---|
| 2019-12-31 | `ff9475f5fd8b` | 4.2.0 release | Adds early R5 milestone row; release bookkeeping |
| 2020-05-02 | `ca88c91d9896` | update to v4.4.0 | Adds/updates 4.4.0 row; release bookkeeping |
| 2020-05-04 | `4a33e634cfce` | 4.4.0 release | Release bookkeeping |
| 2020-05-21 | `43ee4082005e` | Added the EvidenceReport draft resource | Adds EvidenceReport to historical rows |
| 2020-08-20 | `a621ed4bdc06` | r4.5.0 upgrade | Adds/updates 4.5.0 row |
| 2020-08-20 | `cfd589ec3d58` | fixes for R4.5 release | Release cleanup |
| 2021-03-30 | `f7e99e9a9213` | J#31478 - rename DeviceUseStatement to DeviceUsage | Applies `FHIR-31478` rename in older history entry |
| 2021-03-31 | `a1a1ced0eba5` | update deviceusage resource | Follow-up DeviceUsage reference cleanup |
| 2021-04-13 | `22e289ed3bfc` | more R5 ballot clean up | R5 ballot row cleanup |
| 2021-06-27 | `d7b8dadc6213` | update html template | Template/navigation mechanical |
| 2021-07-16 | `b749d029049d` | adding a new copy of ClinicalUseIssue so the build works during the rename FHIR#31847 R4B and R5 | Unlinks ClinicalUseIssue in history row during rename |
| 2021-11-05 | `47b44e3ba157` | removed CatalogEntry resource for FHIR-28177 | Removes CatalogEntry references from R4/R4 draft history rows |
| 2022-02-21 | `2c649532f566` | remove ehrsrle IG | Comments out EHR-S FM record lifecycle events IG link |
| 2022-08-08 | `81e5862f203f` | FHIR-35933 | Unlinks LOINC/RxNorm/SNOMED CT old pages after migration to THO |
| 2022-08-31 | `c662852b2aef` | FHIR-32072 history page has R5 ballot as 2020. It is now 2021 | Corrects 4.6.0 row from May 2020 to May 2021 |
| 2022-08-31 | `8592e1207273` | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Broad spelling standardization |
| 2022-09-05 | `c3da43d4d906` | tidy up status codes on pages, and set version for ballot | Mechanical release/status cleanup |
| 2022-09-07 | `21bc7e314436` | final QA for R5 ballot | QA cleanup |
| 2022-09-08 | `a41e7958c85a` | ballot QA | QA cleanup |
| 2022-12-14 | `b908b522178d` | final r5 changes | R5 release cleanup |
| 2022-12-15 | `4b30e9aa9de6` | go back to ci-build | Versioning mechanical |
| 2022-12-16 | `a51433b9a1ca` | rework versioning | Versioning mechanical |
| 2023-01-23 | `ea9417370766` | Remove DocumentManifest | Retargets removed DocumentManifest guidance |
| 2023-02-21 | `dad7cf37c758` | QA related changes | QA cleanup |
| 2023-02-21 | `9f780149387d` | more QA | QA cleanup |
| 2023-03-09 | `3b0f25862d63` | update language around versions | Restructures top milestone table; introduces R4B top date as `Dec 27, 2018` |
| 2023-03-11 | `df8d5f8991e9` | write draft release notes for 5.0.0 | Adds detailed R5 and R4B rows; detailed R4B row says `May 28, 2022` |
| 2023-03-12 | `f0cd7c249731` | tidy up history | R5/R4B release-note cleanup |
| 2023-03-13 | `c5d9a65aed62` | tidy up history | R5 release-note cleanup |
| 2023-03-13 | `4186c8b1c634` | upgrade core + minor fixes | Release/version cleanup |
| 2023-03-14 | `c5a1cbeada5c` | regenerate links to use extension IG | Retargets links to extension IG |
| 2023-03-25 | `803338e2860d` | fix date of release | Corrects R5 top date to `Mar 26, 2023`; does not correct R4B top date |
| 2025-02-27 | `050832a81c28` | Disconnects and de-lists EvidenceReport resource | Removes EvidenceReport local links |
| 2025-03-31 | `25b23a94c11b` | fix up references | Retargets ClinicalAssessment/ClinicalImpression references |
| 2025-04-01 | `7d89a5aa7603` | change version to 6.0.0-ballot3 | Adds R6 ballot3/ballot2/ballot1 rows |
| 2025-05-01 | `c05c9fc0a8a5` | tidy up history note | Moves R5 normative-status note under R5 row |
| 2025-08-05 | `fab0f722a6cf` | Removing additional references to MolecularSequence | Unlinks/removes MolecularSequence references |
| 2025-08-21 | `cbf92015f86f` | Merge branch 'master' into ak-FHIR-51227 | Merge related to MolSeq/MolDef branch |
| 2025-09-09 | `b595760a8a14` | removed extra substance definition resources per https://jira.hl7.org/browse/FHIR-51930 | Unlinks/removes extra substance definition resources |
| 2025-10-01 | `f9a44787c450` | remove testing resources, and various minor fixes | Unlinks TestPlan/TestScript references |
| 2025-10-31 | `270e0ceb7b02` | normative changes for R6 | Metadata change; retargets GraphDefinition to broken API Incubator URL |
| 2025-11-03 | `887bc2383fb7` | FHIR-44047 | Punctuation cleanup for e.g./i.e. |
| 2025-11-05 | `3b38b80cf23f` | Remove OO resources and point to new incubator | Retargets OO resources to OO incubator |
| 2025-11-05 | `01706a920f4e` | fix oo links | Corrects OO incubator link forms |
| 2025-11-06 | `87f87a8a0389` | Merge branch 'master' into i.e.-e.g- | Merge for punctuation branch |
| 2025-11-07 | `e073fb45ec6f` | removing ImmunizationRecommendation and ImmunizationEvaluation | Retargets/removes immunization resource references |
| 2025-11-07 | `71567db3ee03` | ballot notes part #1, and remove Citation, VerificationResult, ChargeItem, ChargeItemDefinition, EncounterHistory, PersonalRelationship, and some QA | Retargets many removed/moved resources to incubator IGs |
| 2025-11-07 | `26e92f629920` | Merge remote-tracking branch 'origin/master' | Merge |
| 2025-11-12 | `9987f9c0c3ce` | Remove FormularyItem, and update status codes | Retargets FormularyItem |
| 2025-11-12 | `fad1b9cf84ef` | remove additional resources | Retargets MolecularDefinition, ConditionDefinition, GenomicStudy, Linkage, ClinicalAssessment to incubator IGs |
| 2025-11-13 | `5a4307d78b02` | remove MedicationKnowledge | Unlinks MedicationKnowledge |
| 2025-11-24 | `0e2a8a7f839d` | remove Permission | Retargets Permission to data-access-policies IG |
| 2025-12-18 | `5d67a34a13a` | bump version for publication | Adds R6 ballot4 row |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-31478` (snapshot command: `bun run jira:search snapshot FHIR-31478`): Published, persuasive, OO. Rename DeviceUseStatement to DeviceUsage to align with MedicationUsage and avoid confusion. Matches commit `f7e99e9a9213`.
- `FHIR-31847` (snapshot command: `bun run jira:search snapshot FHIR-31847`): Published, persuasive with modification, BRR. Rename ClinicalUseIssue to ClinicalUseDefinition. Matches commit `b749d029049d`; Confluence BRR minutes `116462929` record the 2021-07-06 motion.
- `FHIR-28177` (snapshot command: `bun run jira:search snapshot FHIR-28177`): Published, persuasive, OO. Remove CatalogEntry. Jira comment links PR/commit `47b44e3`. Confluence OO minutes include multiple pages around this vote.
- `FHIR-35933` (snapshot command: `bun run jira:search snapshot FHIR-35933`): Published, persuasive, vocab. Remove "Using X with FHIR" pages from core and migrate content to HL7 Terminology. History page effect is only old-link removal.
- `FHIR-32072` (snapshot command: `bun run jira:search snapshot FHIR-32072`): Published, persuasive technical correction. Page-specific correction that the 4.6.0 R5 ballot date was 2021, not 2020. This does not address the separate R4B top milestone date issue.
- `FHIR-25431` (snapshot command: `bun run jira:search snapshot FHIR-25431`): Published, persuasive technical correction. Normalize use of `datatype` vs `data type`; explains broad text cleanup.
- `FHIR-51227` (snapshot command: `bun run jira:search snapshot FHIR-51227`): Applied, persuasive with modification, CG. Replace MolecularSequence with MolecularDefinition. Jira resolution references PSS and Observation/MolDef relationship. Zulip and Confluence show discussion, objections, and vote.
- `FHIR-51930` (snapshot command: `bun run jira:search snapshot FHIR-51930`): Applied, persuasive, BRR. Remove five substance-related resources; description links BRR 2025-06-10 minutes. Matches commit `b595760a8a14`.
- `FHIR-44047` (snapshot command: `bun run jira:search snapshot FHIR-44047`): Resolved - change required, persuasive. Broad e.g./i.e. punctuation cleanup. The page edit is editorial; Confluence Dallas WGM minutes say `will fix`.

### Other Jira issues that plausibly explain related changed text

- `FHIR-50203` (snapshot command: `bun run jira:search snapshot FHIR-50203`): Applied; says use of "additional resources" on Search was confusing now that Additional Resources is a named R6 concept. Resolution changes search-page wording, not history-page wording.
- `FHIR-50204` (snapshot command: `bun run jira:search snapshot FHIR-50204`): Applied; adds search guidance for Additional Resources. Relevant context but not a history-page defect.
- `FHIR-50572` (snapshot command: `bun run jira:search snapshot FHIR-50572`): Triaged/unresolved; asks for conformance language on `resource.html#additional`. Context only; no history-page application expected.
- `FHIR-48870` (snapshot command: `bun run jira:search snapshot FHIR-48870`): Applied; RelatedPerson boundaries and relationship with PersonalRelationship. Supports PersonalRelationship being a real R6 concept, but the history page merely links it as an Additional Resource.
- `FHIR-47496` (snapshot command: `bun run jira:search snapshot FHIR-47496`): Applied; Group.member.involvement value set and PersonalRelationship guidance. Supports the R6 ballot3 Group/PersonalRelationship context.
- `FHIR-54250` (snapshot command: `bun run jira:search snapshot FHIR-54250`): Triaged/unresolved technical correction. Reports that a GraphDefinition link resolves to `https://build.fhir.org/HL7/api-incubator/StructureDefinition-GraphDefinition` with 404 on `compartmentdefinition.html`. The history page has the same broken target at line 606.

### Context-only Jira hits that should not drive action

- `FHIR-5507` and `FHIR-7612` appear in current source as aggregate R5 change-count links with `?filter=...`. Their snapshots are unrelated individual DSTU-era issues and should not be used as causality for the R5 change totals.
- Old numbered Jira links in the DSTU/DSTU2 sections are historical release-note references and were not elevated.

## Zulip evidence

- `bun run zulip:search fts "\"FHIR-51227\"" --limit 10` found the Clinical Genomics thread `#genomics > Update Observation to support MolDef`, with posts from June-July 2025. Snapshot command: `bun run zulip:search snapshot genomics "Update Observation to support MolDef"`.
  - Key points: concerns about whether MolDef covered all MolecularSequence use cases; the patient-specific sequence use case; comments that examples/comparison and future Observation-profile guidance should be documented; approval after CG call/vote.
- `bun run zulip:search snapshot genomics "Referencing MolDef from Observation"` captured later September 2025 reassessment.
  - Key points: participants questioned how Observation should reference MolDef, whether more guidance is needed, and whether valueReference(MolecularDefinition) affects backward compatibility. This is important context but not directly actionable for `history.html`, whose text just reports the move/replacement at a high level.
- `bun run zulip:search snapshot fmg "Assessment of Resources for removal from R6"` captured FMG resource-removal rationale.
  - Key points: market feedback favored R6 stability; immature/new resources were recommended for Additional Resources; moved resources can still be referenced narratively as work in progress; specific lists include PersonalRelationship, MolecularDefinition, Permission, FormularyItem, etc.
- `bun run zulip:search snapshot "patient administration WG" "PersonalRelationship resource"` captured early PA drafting.
  - Key points: discussion of source/target, scope/group, and WGM review; supports that PersonalRelationship existed as an evolving PA resource before moving to the admin incubator.
- `bun run zulip:search snapshot fhir/infrastructure-wg "Additional Resources"` captured a concise FHIR-I update.
  - Key points: GraphDefinition and `$graph` belong in the API Incubator IG; Additional Resources keep `http://hl7.org/fhir` canonicals and require package dependencies.
- `bun run zulip:search snapshot fhir/infrastructure-wg "Conformance Module"` captured later discussion of GraphDefinition maturity.
  - Key points: GraphDefinition is still subject to additional change and is found in the API Incubator. This supports the intent to link to an API Incubator home, but not the current broken URL.
- Exact phrase Zulip searches for `"Change the status of everything to normative now"`, `"R6 1st Normative Ballot"`, and `"Additional Resources" "set of definitions"` found no results.
- Initial unquoted Jira-key FTS searches in Zulip failed because FTS parsed hyphenated keys as operators; quoted retries were used.

## Confluence evidence

- BRR 2025-06-10 Conference Call (`bun run confluence:search snapshot 345545642`): minutes say R6 plans are to move almost everything to normative; FMM 0 items may be dropped; BRR voted 9-0-0 to remove SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, and SubstanceSourceMaterial. Supports `FHIR-51930` and commit `b595760a8a14`.
- CG 2025-07-08 (`bun run confluence:search snapshot 358260196`): minutes list `Replacing MolSeq with MolDef (vote)` for `FHIR-51227`; discussion includes MolDef use cases, decoupling from patient/encounter details, TODO to update the predisposition/resolution, and vote 8-0-0. Supports `FHIR-51227`.
- FHIR-I Madrid WGM 2025 (`bun run confluence:search snapshot 325460605`): Monday Q4 records `FHIR-50203` and `FHIR-50204` votes and Additional Resources search guidance; Tuesday Q3 includes broader Additional Resources governance discussion. Context only for `history.html`.
- PA Personal Relationships and Households (`bun run confluence:search snapshot 220692924`): page has PersonalRelationship scope/usage and boundaries language, and points to the admin incubator URL `https://build.fhir.org/ig/HL7/admin-incubator/en/StructureDefinition-PersonalRelationship.html`. Context only for history page link.
- FHIR-I 2025-09-22 (`bun run confluence:search snapshot 389679504`): minutes approve a plan for moved resources; GraphDefinition-related resource and `$graph` are assigned to the R6 API Incubator IG. Supports the GraphDefinition link-intent but not the broken target.
- FHIR-I Dallas WGM 2024 (`bun run confluence:search snapshot 234784975`): minutes record `FHIR-44047 will fix`; supports punctuation cleanup.

## Timeline

| Date | Clock | Evidence | Notes |
|---|---|---|---|
| 2020-01-09 | Jira created | `FHIR-25431` | Datatype spelling consistency |
| 2021-03-08 | Jira vote | `FHIR-31478` | DeviceUseStatement -> DeviceUsage |
| 2021-03-30 | Source commit | `f7e99e9a9213` | Applies DeviceUsage wording in history page |
| 2021-07-06 | Jira/Confluence vote | `FHIR-31847`, Confluence `116462929` | ClinicalUseDefinition rename |
| 2021-07-16 | Source commit | `b749d029049d` | Removes ClinicalUseIssue link in history page |
| 2021-10-28 | Jira vote | `FHIR-28177` | CatalogEntry removal approved |
| 2021-11-05 | Source commit | `47b44e3ba157` | Removes CatalogEntry from history rows |
| 2022-02-03 | Jira/Confluence vote | `FHIR-35933`, Confluence `90344804` | External code system pages migrate to THO |
| 2022-08-31 | Source commit | `c662852b2aef` | Applies page-specific R5 ballot date fix from `FHIR-32072` |
| 2022-08-31 | Source commit | `8592e1207273` | Applies datatype spelling cleanup |
| 2023-03-09 | Source commit | `3b0f25862d63` | Introduces top milestone table with R4B date `Dec 27, 2018` |
| 2023-03-11 | Source commit | `df8d5f8991e9` | Adds detailed R4B row saying `May 28, 2022` |
| 2023-03-25 | Source commit | `803338e2860d` | Fixes R5 date to `Mar 26, 2023`; R4B top date remains wrong |
| 2025-04-01 | Source commit | `7d89a5aa7603` | Adds R6 ballot3 history row |
| 2025-06-10 | Confluence vote | BRR page `345545642` | Remove five substance-related resources |
| 2025-07-08 | Confluence/Jira vote | CG page `358260196`, `FHIR-51227` | Replace MolSeq with MolDef |
| 2025-08-20 to 2025-11-07 | Zulip discussion | `#fmg > Assessment of Resources for removal from R6` | FMG resource-removal and Additional Resources rationale |
| 2025-09-22 | Confluence vote | FHIR-I page `389679504` | GraphDefinition-related content to R6 API Incubator IG |
| 2025-09-24 | Zulip update | `#fhir/infrastructure-wg > Additional Resources` | GraphDefinition and `$graph` listed under API Incubator IG |
| 2025-09-09 | Source commit | `b595760a8a14` | Applies substance resource removal references |
| 2025-10-31 | Source commit | `270e0ceb7b02` | Retargets GraphDefinition history link to broken API Incubator URL |
| 2025-11-2025 | Source commits | `3b38b80...` through `0e2a8a7...` | Retargets many removed resources to incubator/IG links |
| 2025-12-18 | Source commit | `5d67a34a13a` | Adds R6 ballot4 history row |
| 2026-01-14 | Jira created | `FHIR-54250` | Reports same broken GraphDefinition URL on `compartmentdefinition.html` |

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/history.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/history.html" && echo "new exists"`
  - Result: both exist.
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/history.html`
  - Result: large diff dominated by release-note additions, top milestone restructuring, resource link retargeting, and editorial cleanup.
- Commit trace:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/history.html`
  - Result: 53 commits.
- Commit inspection:
  - `git show --stat --patch` was run for the Jira-linked and recent R6 commits listed above.
  - `git blame -L 43,54 -- source/history.html` showed `3b0f25862d63` introduced the R4B top milestone date and `df8d5f8991e9` later added the detailed R4B row.
  - `git blame -L 604,607 -- source/history.html` showed `270e0ceb7b02` retargeted the GraphDefinition link.
- Current page read:
  - `wc -l .../source/history.html` returned 1148 lines.
  - Read in chunks `1-220`, `221-440`, `441-660`, `661-880`, `881-1148`, and `1096-1149`.
- Jira searches:
  - Snapshots: `FHIR-31478`, `FHIR-31847`, `FHIR-28177`, `FHIR-35933`, `FHIR-32072`, `FHIR-25431`, `FHIR-51227`, `FHIR-51930`, `FHIR-44047`, `FHIR-50203`, `FHIR-50204`, `FHIR-50572`, `FHIR-48870`, `FHIR-47496`, `FHIR-54250`.
  - Phrase searches with no results: `"Change the status of everything to normative now"`, `"R6 1st Normative Ballot"`, `"Additional Resources" "set of definitions"`, `"Release 4B" "Dec 27, 2018"`.
  - Search `GraphDefinition "api-incubator"` found `FHIR-54250`.
- Zulip searches:
  - Quoted Jira-key searches found meaningful hits mainly for `FHIR-51227`, `FHIR-31847`, and `FHIR-47496`.
  - Exact phrase searches for the R6 ballot4 wording found no results.
  - Snapshots taken for FMG resource removal, genomics MolDef threads, PA PersonalRelationship, FHIR-I Additional Resources, and FHIR-I Conformance Module.
- Confluence searches:
  - `refs jira` and `fts` searches found high-signal minutes for `FHIR-31847`, `FHIR-28177`, `FHIR-35933`, `FHIR-32072`, `FHIR-25431`, `FHIR-51227`, `FHIR-44047`, `FHIR-50203`, `FHIR-50204`, and `FHIR-48870`.
  - Snapshots taken for pages `345545642`, `358260196`, `325460605`, `220692924`, `234784975`, and `389679504`.
- Link checks:
  - `curl -L -s -o /dev/null -w '%{http_code} %{url_effective}\n' 'http://build.fhir.org/HL7/api-incubator/StructureDefinition-GraphDefinition'` returned `404`.
  - Probes for likely variants such as `https://build.fhir.org/graphdefinition.html`, `https://hl7.org/fhir/R3/graphdefinition.html`, and several `/ig/HL7/.../StructureDefinition-GraphDefinition(.html)` variants also returned `404`, so the action should be to confirm the intended API Incubator publication URL or unlink the history-page reference rather than guessing.
- Published R4B date check:
  - `curl -L -s https://hl7.org/fhir/R4B/index.html | rg -o 'Release 4B|May 28, 2022|May 28'` returned `Release 4B` and `May 28, 2022`.
  - `curl -L -s https://hl7.org/fhir/R4B/history.html | rg -o 'Release 4B|May 28, 2022|May 28'` also returned `Release 4B` and `May 28, 2022`.

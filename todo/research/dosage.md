# dosage research appendix

## Scope and coverage

- Page path: `source/dosage.html`
- Older version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- Newer version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Page boundary: present in both source trees. The page is modified, not added/deleted/renamed.
- Newer page read end-to-end: yes. `wc -l` reported 284 because the file has no final newline; the viewer showed lines 1-285.
- Source-history coverage: 17 commits touched `source/dosage.html` between the two commits.
- Explicit Jira keys found in commit metadata/patch context: `FHIR-34415`, `FHIR-35826`, `FHIR-33988`, `FHIR-26595`, `FHIR-37472`.
- Additional high-signal Jira issues found from changed phrases and linked discussion: `FHIR-51540`, `FHIR-53687`, `FHIR-54014`, `FHIR-54557`, `FHIR-54651`, plus context-only follow-ups `FHIR-53983`, `FHIR-54032`, `FHIR-54330`, `FHIR-54340`.
- Jira, Zulip, and Confluence searches were bounded to explicit keys and distinctive dosage phrases (`DosageDetails`, `dosageInstruction DosageDetails`, `renderedInstruction dosage`, `DosageSafety`, `DosageCondition`).
- Caveats: I did not exhaustively snapshot every post-ballot R6 dosage issue. Exact Zulip searches for `FHIR-33988` and `FHIR-37472` found no hits; the unquoted `FHIR-37472` FTS query failed due hyphen parsing and was rerun quoted. A first ambiguous Zulip snapshot for `Medication Dosage` selected `Maximum Dosage per day`, so exact SQL was used for `#Medication > Dosage`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 dosage page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/dosage.html:11-41` | Old page was a short Dosage datatype page with an empty interpretation TODO |
| Source | R6 dosage intro/balloter note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage.html:28-54` | Names the new dosage structures and flags R6 breaking changes |
| Source | R6 renderedInstruction guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage.html:56-84` | New semantic guidance on rendered text vs structured dosage |
| Source | R6 limitations | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage.html:87-103` | New boundary guidance for titration/orchestration/care planning |
| Source | R6 DosageDetails section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage.html:105-153` | Defines DosageDetails, steps, component concurrency, and usage |
| Source | R6 Dosage section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage.html:155-179` | Existing Dosage is now one part of the broader regime model |
| Source | R6 DosageSafety section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage.html:182-220` | New safety-limit model and scopes |
| Source | R6 DosageCondition section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage.html:223-250` | New conditional dosage datatype narrative |
| Source | DosageDetails spreadsheet source | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes/dosagedetails.xml:878-917` | Shows ballot4 `renderedInstruction` as `0..1 markdown` and `simple` as `0..1 Dosage` |
| Source | DosageDetails safety paths | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes/dosagedetails.xml:1062-1091` | Shows safety at both step and overall DosageDetails levels |
| Source | MedicationRequest dosageInstruction | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/medicationrequest/structuredefinition-MedicationRequest.xml:869-877` | Confirms `dosageInstruction` is now `0..1 DosageDetails` |
| Source | MedicationRequest stale wording | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/medicationrequest/structuredefinition-MedicationRequest.xml:850-852` | Still refers to multiple `dosageInstruction` lines |
| Source | MedicationDispense stale wording | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/medicationdispense/structuredefinition-MedicationDispense.xml:729-743` | Has `0..1 DosageDetails` but comment still says multiple dosage instructions are needed |
| Commit | Remove empty interpretation section | `d61b35bbd4e574c019f315e930d78e4341cde26a`, https://github.com/HL7/fhir/commit/d61b35bbd4e574c019f315e930d78e4341cde26a | Implements the only older page-specific Jira (`FHIR-33988`) |
| Commit | Add terminology macro | `3102a60753db7b6c0b73b853981c470692650d57`, https://github.com/HL7/fhir/commit/3102a60753db7b6c0b73b853981c470692650d57 | Implements `FHIR-37472` for Dosage bindings |
| PR | Pharmacy updates | https://github.com/HL7/fhir/pull/3896 | PR associated with `FHIR-37472`/merge into pharmacy branch |
| PR | Dosage rework | https://github.com/HL7/fhir/pull/3974 | Main R6 ballot4 dosage rewrite PR; merged 2025-11-13 |
| Jira | `FHIR-33988` | https://jira.hl7.org/browse/FHIR-33988; `bun run jira:search snapshot FHIR-33988` | Requested removal of empty "Interpretation of Dosage" section |
| Jira | `FHIR-37472` | https://jira.hl7.org/browse/FHIR-37472; `bun run jira:search snapshot FHIR-37472` | Requested Dosage "Bindings"/terminology section |
| Jira | `FHIR-51540` | https://jira.hl7.org/browse/FHIR-51540; `bun run jira:search snapshot FHIR-51540` | Formal driver for R6 DosageDetails/DosageSafety redesign and balloter note |
| Jira | `FHIR-53687` | https://jira.hl7.org/browse/FHIR-53687; `bun run jira:search snapshot FHIR-53687` | Post-ballot concern about "concurrent" components vs different-day/time examples |
| Jira | `FHIR-54014` | https://jira.hl7.org/browse/FHIR-54014; `bun run jira:search snapshot FHIR-54014` | Later applied decision to require `renderedInstruction` |
| Jira | `FHIR-54557` | https://jira.hl7.org/browse/FHIR-54557; `bun run jira:search snapshot FHIR-54557` | Later persuasive safety-scope clarification for multiple safety levels |
| Jira | `FHIR-54651` | https://jira.hl7.org/browse/FHIR-54651; `bun run jira:search snapshot FHIR-54651` | Later applied decision to remove `DosageDetails.simple` |
| Zulip | R6 dosage design thread | `#Medication > Dosage`, message IDs `553721140`, `553957808`, `554682681`, `554684214`, `554776256`; URL pattern `https://chat.fhir.org/#narrow/channel/179249-Medication/topic/Dosage/with/<id>` | Shows the discussion moving from a limited max-dose fix to the breaking DosageDetails redesign |
| Zulip | Nested datatype thread | `#committers > nested element in a data type`, message `553696462`; `https://chat.fhir.org/#narrow/channel/179165-committers/topic/nested.20element.20in.20a.20data.20type/with/553696462` | Linked from Jira/Confluence as technical context for nesting new dosage structures |
| Confluence | FHIR IG Authoring minutes | `104760224`, https://confluence.hl7.org/spaces/FHIRI/pages/104760224/FHIR+IG+Authoring+Minutes+CC+20220517 | Records kindling issue approval and creation of `FHIR-37472` |
| Confluence | Documentation Jira WGM page | `307302474`, https://confluence.hl7.org/spaces/PHAR/pages/307302474/Documentation-related+Jira+items+-+January+2025+WGM | Pharmacy documentation backlog specifically called out missing Dosage bindings section |
| Confluence | 2025-11-03 Pharmacy agenda | `404095223`, https://confluence.hl7.org/spaces/PHAR/pages/404095223/2025-11-03+Agenda+Meeting+Notes | Initial vote/discussion for `FHIR-51540` and proposed dosage structure |
| Confluence | 2025-11-10 Pharmacy agenda | `404096315`, https://confluence.hl7.org/spaces/PHAR/pages/404096315/2025-11-10+Agenda+Meeting+Notes | Records 7-0-0 vote on breaking dosage changes, examples, and balloter notes |
| Confluence | 2026-03-02 Pharmacy notes | `413255873`, https://confluence.hl7.org/spaces/PHAR/pages/413255873/2026-03-02+Agenda+Meeting+Notes | Records vote to remove `DosageDetails.simple` |

## Change summary

### R6 dosage redesign (`substantive/normative`)

- R4 page described only the `Dosage` datatype and had no real narrative beyond a placeholder. R6 ballot4 changes the page title to "Dosage Regimes" and introduces four related structures: `DosageDetails`, `Dosage`, `DosageSafety`, and `DosageCondition` (`dosage.html:28-37`).
- The page marks the structures as Normative in the page header (`dosage.html:13-15`), while also presenting a balloter note that the medication dosage model has breaking changes in R6 (`dosage.html:42-54`).
- The largest semantic change is that MedicationRequest, MedicationDispense, and MedicationStatement no longer use repeating `Dosage` instructions for complex regimens; the page says their `dosageInstruction` changed from `0..* Dosage` to `0..1 DosageDetails` (`dosage.html:47-49`). Related structuredefinition evidence confirms `MedicationRequest.dosageInstruction` is `0..1 DosageDetails` (`MedicationRequest.xml:869-877`) and equivalent changes exist for MedicationDispense and MedicationStatement.

### New guidance on rendered vs structured dosage (`semantic guidance`)

- R6 ballot4 adds a "Dosage text and structured Data" section (`dosage.html:56-84`).
- The page permits `renderedInstruction` and/or structured data, says rendered-only is sufficient for human-mediated medication functionality, recommends fully populating structure for medication-management support, and says applications `SHOULD` consider populating `renderedInstruction`.
- Later Jira `FHIR-54014` changed this direction by resolving to make `renderedInstruction` required and to strengthen the comment, so the ballot4 page text is known to be unstable after ballot4.

### New limitations/boundaries (`semantic guidance`)

- R6 ballot4 says the dosage model does not address complex titration, cross-medication orchestration/safety management, or medication regimes tightly linked to wider care planning (`dosage.html:87-103`).
- It directs those challenges to `PlanDefinition` and/or `RequestOrchestration`, and links MedicationRequest boundaries.

### New DosageDetails model (`substantive/normative`)

- `DosageDetails` is introduced as the container for dosing information, with `renderedInstruction`, a simple dosage or step sequence, and safety information (`dosage.html:105-125`).
- Steps are sequential and must have end conditions via an external event or `Timing.repeat.bounds[x]`/`Timing.repeat.count` (`dosage.html:127-132`).
- Components within the same step are said to be concurrent, but examples include different days/times and PRN restrictions (`dosage.html:134-148`). This exact ambiguity is the subject of `FHIR-53687`.

### New DosageSafety model (`substantive/normative`)

- R6 ballot4 adds a `DosageSafety` section and scopes: `administration`, `dosage`, `period`, `lifetime` (`dosage.html:182-220`).
- The data model has safety elements at multiple levels (`DosageDetails.step.safety` and `DosageDetails.safety`, `datatypes/dosagedetails.xml:1062-1091`). Later issue `FHIR-54557` says the page should clarify how those safety elements relate.

### New DosageCondition model (`substantive/normative`)

- R6 ballot4 adds `DosageCondition` for conditional rules such as lower dosage if not tolerated, alternative medication if not tolerated, until symptoms resolve, or if medication supply is available (`dosage.html:223-250`).

### Template, navigation, and mechanical changes (`metadata/template/navigation`, `mechanical/noise`)

- The page moved from `diheader` to `dtxheader`, added the Types Framework cross-reference, removed the old wrapper div, changed jQuery asset paths, and added tab initialization for the new datatypes.
- Commit `22b5c245...` mostly reorganized data type pages and introduced a BOM/no-final-newline artifact; no separate page semantics were found there.

## Source history

| Commit | Date | Subject | PR | Page-specific interpretation |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | https://github.com/HL7/fhir/pull/1295 | Mechanical template cleanup: removed wrapper div around content |
| `d61b35bbd4e574c019f315e930d78e4341cde26a` | 2022-01-21 | FHIR-34415, FHIR-35826, FHIR 33988, FHIR-26595 | https://github.com/HL7/fhir/pull/1632 | Relevant part is `FHIR-33988`: removed empty "Interpretation of Dosage in different contexts" section |
| `c1d765ab73d0bf137c30793009baf937473668ac` | 2022-08-13 | various fixes including IHE + DICOM value sets + version | https://github.com/HL7/fhir/pull/2141 | Changed header macro from `diheader` to `dtxheader base Dosage` |
| `7bf9e9408044b81c4f56930c20697f3afd3393f4` | 2022-09-09 | more datatypes indexing | https://github.com/HL7/fhir/pull/2406 | Added Types Framework cross-reference links |
| `22b5c2457301de9acd614a6d899679b609536031` | 2023-03-12 | reorganise data types pages ready for IG | https://github.com/HL7/fhir/pull/2830 | Mechanical whole-file rewrite/no content change of substance |
| `a581075555b02be851eb33506ac66a982aab61f7` | 2025-05-01 | upgrade jquery | https://github.com/HL7/fhir/pull/3589 | Updated jQuery asset paths |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | https://github.com/HL7/fhir/pull/3901 | Header status/owner table changed, but still Trial Use at this point |
| `3102a60753db7b6c0b73b853981c470692650d57` | 2025-10-31 | FHIR-37472 | https://github.com/HL7/fhir/pull/3896 | Added `[%tx Dosage%]` terminology/bindings macro under Dosage constraints |
| `f183ae358375f2cce6d4045116d0a1549a9619a1` | 2025-11-02 | Merge branch 'master' into jct-pharm | https://github.com/HL7/fhir/pull/3896 | Merge carried the header and terminology macro changes; no independent dosage rationale |
| `bc7ac9db4e24a9da9eb639008e70d1dc76b74886` | 2025-11-11 | dosage draft | https://github.com/HL7/fhir/pull/3974 | First draft insertion of `DosageDetails` and `DosageSafety` sections |
| `9572f719b785b46d55cab4ba032fa3d5d3f9a615` | 2025-11-11 | make it wokr | https://github.com/HL7/fhir/pull/3974 | Added tab JavaScript for `DosageDetails` and `DosageSafety` |
| `ba10a6f24d181dec80b69dd90e68e0337421e7a0` | 2025-11-11 | wip | https://github.com/HL7/fhir/pull/3974 | Main expansion: title "Dosage Regimes", four datatypes, limitations, DosageDetails steps/components, DosageSafety, DosageCondition |
| `e225678eb95ae7e7685bf002728b776cabef3d34` | 2025-11-12 | finish Dosage related changes | https://github.com/HL7/fhir/pull/3974 | Added renderedInstruction guidance, MedicationRequest boundaries link, DosageSafety scope table, and refined DosageCondition examples |
| `ab7e93057bda067cc243411b3c2819adda907d96` | 2025-11-12 | tidy up dosage page | https://github.com/HL7/fhir/pull/3974 | Added usage sections/anchors and renamed "Content" to "Dosage" |
| `7466cfc63cd0b162497a42c80a67480eed86c75a` | 2025-11-12 | sort out trial-use notes | https://github.com/HL7/fhir/pull/3974 | Changed page standards status to Normative |
| `d0739e22c278c351272feaf4d6d342027f89b2f6` | 2025-11-12 | fix more typos | https://github.com/HL7/fhir/pull/3974 | Added R6 breaking-change balloter note |
| `f0436e13e225d6b92404e94034efd534b990f8ea` | 2025-11-13 | update balloter note and explanation | https://github.com/HL7/fhir/pull/3974 | Added `.sequence` replacement and Timing offset notes; changed component wording to "concurrent" |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-33988` ("What is 'Interpretation of Dosage in different Contexts'") is directly relevant. It says the empty section had existed since earlier DosageInstruction/Dosage history and "will remove section." Commit `d61b35bb...` removes exactly that section from `source/dosage.html`.
- `FHIR-37472` ("Dosage should have a Terminology section") is directly relevant. The issue asks for a bindings section listing all bindings referenced in the datatype, and commit `3102a607...` adds the `[%tx Dosage%]` macro. Later PR #3974 adds `[%tx ...%]` for the new structures too.
- `FHIR-34415`, `FHIR-35826`, and `FHIR-26595` appeared in a combined commit subject but are about MedicationKnowledge storage, MedicationStatement related clinical info, and MedicationRequest scope/boundaries. They do not explain dosage page text except as co-travelers in the same commit/PR.

### Jira issues that plausibly explain the R6 page rewrite

- `FHIR-51540` is the main formal driver for the R6 rewrite. It started as "MaxDosePerPeriod to apply across multiple concurrent dosage instruction" and resolved to modify Dosage, add `DosageDetails` and `DosageSafety`, add examples, add explicit limitations, and add a balloter note. Its comments link the nested datatype Zulip thread and confirm that `sequence` was agreed to be removed. Status was still "Resolved - change required" in the local Jira snapshot, but source PR #3974 merged with the page changes.
- `FHIR-53687` is a post-ballot issue for current page wording: it says the page's concurrency statement conflicts with examples such as different days/times and maybe PRN. This is directly tied to `dosage.html:138-144`.
- `FHIR-54014` is a later applied issue changing ballot4 semantics for `renderedInstruction`: make `DosageDetails.renderedInstruction` `1..1`, add a "must always be present" sentence, and remove old wording about multiple dosage instructions.
- `FHIR-54557` is a later persuasive clarification request for how safety elements at `DosageDetails.safety`, `DosageDetails.simple.safety`, `DosageDetails.step.safety`, and `DosageDetails.step.component.safety` relate. Its resolution text would add guidance to the DosageDetails section.
- `FHIR-54651` is a later applied issue to remove `DosageDetails.simple` and update the exact page phrases at `dosage.html:59-60` and `dosage.html:112-113`.

### Context-only or lower-confidence Jira hits

- `FHIR-53983` raised a concern about end conditions of `DosageDetails.step` and examples, but it was retracted by the submitter.
- `FHIR-54032` asks whether `renderedInstruction` should be a string rather than markdown. It is unresolved and not directly caused by this page diff, but it shows ongoing concern about the rendered text model.
- `FHIR-54330` asks for guidance on `DosageDetails.step.count` vs `Timing.repeat.count`. This is related to new model clarity but not directly visible in `source/dosage.html` except the line that mentions `Timing.repeat.count`.
- `FHIR-54340` asks to rename `DosageDetails`; it is unresolved and naming-focused. It is useful context but not a current page implementation mismatch.

## Zulip evidence

- `#Medication > Dosage` is the core discussion thread for the R6 rewrite.
  - `553721140` (2025-11-04, Jose Costa Teixeira) summarizes `FHIR-51540`, an initial vote, uncertainty about acceptability as a release/breaking change, and an alternative to focus narrowly if redesign conditions are not met.
  - `553957808` (2025-11-05, Grahame Grieve) lists recommendations before the full redesign: require/best-practice sequence numbers, add Dosage page guidance, document multiple dosages, add dosage-limit guidance/examples, and handle orchestration outside scope.
  - `554682681` (2025-11-10, Grahame Grieve) records the revised working proposal: replace renderedDoseInstructions/dosageInstructions with `dosageDetails 0..1 DosageDetails`, remove `Dosage.sequence`, replace `maxPer*` with safety, create `DosageDetails`, and add page guidance/examples.
  - `554684214` (2025-11-10, Grahame Grieve) explicitly acknowledges the proposal is breaking but supports it because real cases require the improvements and there is a transformation path from R4.
  - `554776256` (2025-11-10, Grahame Grieve) says a later draft made event dependency a complex dosage.
  - `554878545` (2025-11-11, Jose Costa Teixeira) points back to `FHIR-51540` as the outcome voted on the prior day.
- `#committers > nested element in a data type` is linked by `FHIR-51540` and Confluence. It provides technical/editorial context about adding nested elements inside a datatype and introducing a `dosageDetails` element, but the page semantics are better evidenced by `#Medication > Dosage`, Jira, and PR #3974.
- Follow-up Zulip searches:
  - Exact `"FHIR-51540"` found the `#Medication > Dosage` and `#committers > nested element in a data type` references.
  - Exact `"FHIR-54651"` found `#Medication > backlog for next call`, where Jose grouped `FHIR-54524`/`FHIR-54651`/`FHIR-54337` around removing `DosageDetails.simple`.
  - Exact `"FHIR-53687"`, `"FHIR-54014"`, and `"FHIR-54557"` found no Zulip hits in the local snapshot.

## Confluence evidence

- `FHIRI` minutes page `104760224` (2022-05-17) records kindling issue review, approval of a related kindling issue, and creation of `FHIR-37472`.
- Pharmacy documentation WGM page `307302474` (January 2025) lists `FHIR-37472` as a resolved May 2022 documentation-related Jira and notes that Dosage lacked a bindings section unlike Ingredient; this supports why the `[%tx Dosage%]` macro was added later.
- Pharmacy 2025-11-03 agenda/notes `404095223` records discussion of `FHIR-51540`, says the proposed structure for dosage should be added with an STU/ballot note, and records a 3-0-0 vote for the proposed change while planning to confirm timing/acceptability.
- Pharmacy 2025-11-10 agenda/notes `404096315` records "Dosage changes" for `FHIR-51540`, says the change would be breaking, links the committers thread and `#Medication > Dosage`, links the dosage-rework branch, and records "we will document the extension, add documentation of the examples covered and Balloter notes 7:0:0."
- Pharmacy January 2026 WGM minutes `403869392` list numerous R6 dosage ballot follow-ups, including `FHIR-53687`, `FHIR-54014`, `FHIR-54032`, `FHIR-54557`, and `FHIR-54651`. This indicates the R6 ballot4 rewrite generated substantial follow-up rather than being settled.
- Pharmacy 2026-03-02 agenda/notes `413255873` records the vote to remove `Dosage.simple` for `FHIR-54651` and close duplicate issues `FHIR-54337`/`FHIR-54524`.

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2020-03-16 | Jira created | `FHIR-26595` created, later co-traveled in a commit touching dosage but is about MedicationRequest scope/boundaries |
| 2021-06-27 | Source commit | `d7b8dadc...` template cleanup removes wrapper div |
| 2021-09-22 | Jira created | `FHIR-33988` opened about empty "Interpretation of Dosage" section |
| 2022-01-18 | Jira resolved | `FHIR-33988` resolution: remove section |
| 2022-01-21 | Source commit | `d61b35bb...` removes the empty interpretation section |
| 2022-05-17 | Confluence/Jira | FHIR IG Authoring minutes approve/create `FHIR-37472`; Jira asks for a Dosage terminology/bindings section |
| 2022-08 to 2023-03 | Source commits | Header/indexing/data type page reorganization and cross-reference changes |
| 2025-01-27 | Confluence | Pharmacy WGM documentation page still lists `FHIR-37472`/missing Dosage bindings section |
| 2025-07-22 | Jira created | `FHIR-51540` created for max dose across concurrent dosage instructions |
| 2025-11-03 | Confluence/vote | Pharmacy records proposed dosage structure and initial 3-0-0 vote |
| 2025-11-04 to 2025-11-10 | Zulip discussion | `#Medication > Dosage` discussion evolves from narrower fix to breaking `DosageDetails` redesign |
| 2025-11-10 | Jira vote/Confluence | `FHIR-51540` vote date 7-0-0; Confluence records breaking change and branch/balloter notes |
| 2025-11-11 to 2025-11-13 | Source commits | PR #3974 builds out `dosage.html` with DosageDetails/Safety/Condition, limitations, renderedInstruction guidance, and balloter note |
| 2025-11-13 | PR merge | `HL7/fhir#3974` merged |
| 2025-12 to 2026-04 | Later Jira | R6 ballot follow-ups opened/resolved/triaged: `FHIR-53687`, `FHIR-54014`, `FHIR-54557`, `FHIR-54651`, etc. |

## Evidence log

- Confirmed page existence with `test -f` for both source trees; both old and new pages exist.
- Direct diff command: `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/dosage.html`
- Source history command: `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/dosage.html`
- Inspected relevant commits with `git show --stat --patch <commit> -- source/dosage.html`; inspected merge commit `f183ae3...` with `git show -m`.
- Looked up associated PRs with `gh api /repos/HL7/fhir/commits/<sha>/pulls`.
- Read the full R6 ballot4 page with line-range views over `source/dosage.html:1-285`.
- Jira snapshots run: `FHIR-34415`, `FHIR-35826`, `FHIR-33988`, `FHIR-26595`, `FHIR-37472`, `FHIR-51540`, `FHIR-53687`, `FHIR-53983`, `FHIR-54014`, `FHIR-54032`, `FHIR-54330`, `FHIR-54340`, `FHIR-54557`, `FHIR-54651`.
- Jira phrase searches run: `DosageDetails`, `dosageInstruction DosageDetails`, `renderedInstruction dosage`, `DosageSafety DosageCondition`.
- Zulip searches run: quoted explicit issue keys plus `DosageDetails`, `dosageInstruction DosageDetails`, `renderedInstruction dosage`; exact SQL was used for `#Medication > Dosage`.
- Confluence searches run: `refs jira FHIR-37472`, `fts FHIR-37472`, `refs jira FHIR-51540`, `fts FHIR-51540`, `fts DosageDetails`, `fts dosageInstruction DosageDetails`; snapshots included `104760224`, `307302474`, `404095223`, `404096315`, `403869392`, and `413255873`.

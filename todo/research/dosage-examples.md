# dosage-examples research appendix

## Scope and coverage

- Page path: `source/dosage-examples.html`.
- Older version/source: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- Newer version/source: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: the page exists in both trees. The R4 page is a 27-line stub; the R6 ballot4 page is 2884 lines and was read end-to-end.
- Direct diff: `1 file changed, 2884 insertions(+), 27 deletions(-)`. The R4 stub was replaced by a full examples page with explanatory text, CSS, tabbed structure/JSON/XML examples, and 12 dosage regime examples.
- Source history: 23 commits touched the page between the two boundary commits.
- Explicit Jira keys found in commit metadata/patches: `FHIR-53245`, but the Jira snapshot shows that key is about `Composition.consent` and is unrelated to dosage examples. Treat the commit subject as an erroneous or stale key, not evidence of page intent.
- Community/source searches performed: Jira snapshots/searches for `FHIR-53245`, `FHIR-56016`, `FHIR-55331`, `FHIR-54523`, `FHIR-54331`, `FHIR-54014`, `FHIR-54651`, `FHIR-53412`, `FHIR-54062`, and `FHIR-54557`; Zulip searches/snapshot for the same high-signal keys and the `#Medication > backlog for next call` thread; Confluence refs/FTS/snapshots for high-signal Pharmacy and FHIR-I pages.
- Caveat: several high-signal Jira issues and source commits occurred after the R6 ballot4 boundary commit. They are evidence that the ballot4 page was later corrected or superseded, not evidence that the reviewed R6 ballot4 source already contains those fixes.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 stub page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/dosage-examples.html:15-18` | R4 only says to see MedicationRequest examples; no local dosage examples. |
| Source | R6 page intro | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage-examples.html:37-59` | New page title, owner/status, and scope of examples. |
| Source | R6 page uses stale rendered element path | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage-examples.html:79-83` | Example 1 still says `renderedDosageInstruction`; surrounding page and datatype use `renderedInstruction`. |
| Source | Example 2 JSON mismatch | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage-examples.html:333-351` | PRN component has no 5 mg `doseAndRate`; safety unit is `"s"` despite table/code saying tablets. |
| Source | Example 2 XML duplicate block | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage-examples.html:473-506` | Same 150 mg/week safety block appears twice; later Jira explicitly calls this out. |
| Source | Example 3 safety mismatch | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage-examples.html:632-635`, `:854-864`, `:1061-1070` | YAML says 6 months while JSON/XML say 2 months; JSON/XML also omit mandatory `scope`. |
| Source | Example 10 XML structural mismatch | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage-examples.html:2218-2274` | XML puts `timing`/`doseAndRate` outside the `step.component` structure. |
| Source | R6 DosageDetails step/component definition | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes/dosagedetails.xml:930-1039` | `DosageDetails.step.component` is 1..* and contains the Dosage content for a step. |
| Source | R6 DosageSafety scope definition | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes/dosagesafety.xml:851-917` | `DosageSafety.doseLimit.scope` is 1..1. |
| Commit | Main examples PR commits | `https://github.com/HL7/fhir/pull/3974` | Associated with `8954c5e1`, `ecb78dfb`, and `e225678e`, which added/filled the examples. |
| Commit | Minor-fix PR commits | `https://github.com/HL7/fhir/pull/3981` | Associated with `cd92e3b2` and `2857f064`; introduced/fixed some example text around the boundary. |
| Commit | `cd92e3b2` patch | `https://github.com/HL7/fhir/commit/cd92e3b248e55686901dbd7912638b9055095c8e` | Commit subject says `FHIR-53245`, but patch is dosage-example cleanup; the Jira key is unrelated. |
| Commit | Later FHIR-54651 fix | `https://github.com/HL7/fhir/commit/accc7b7f11fd24da385298c692cdd0304cc220ee` | Post-ballot commit removes `DosageDetails.simple` from examples. |
| Commit | Later FHIR-56016 fix | `https://github.com/HL7/fhir/commit/b5c35f6ea3e799a408023608279ce72ab62b4084`, `https://github.com/HL7/fhir/commit/a566c33d62e08b7daf02d4fe0f4abdb895693825` | Post-ballot commits move `timing`/`doseAndRate` under `step.component` and repair XML closure. |
| Commit | Later FHIR-54523 fix | `https://github.com/HL7/fhir/commit/074fad2f3edd694c8c41bc7e8280691b040063c8` | Post-ballot commit fixes several text/structure mismatches in examples 1-3. |
| Jira | FHIR-53245 | `https://jira.hl7.org/browse/FHIR-53245`; reopen with `bun run jira:search snapshot FHIR-53245` | Explicit key from source history, but unrelated to this page. |
| Jira | FHIR-54523 | `https://jira.hl7.org/browse/FHIR-54523`; reopen with `bun run jira:search snapshot FHIR-54523` | Ballot issue directly states dosage examples have text/structure mismatches. |
| Jira | FHIR-56016 | `https://jira.hl7.org/browse/FHIR-56016`; reopen with `bun run jira:search snapshot FHIR-56016` | Technical correction: step timing should be under `step.component`. |
| Jira | FHIR-54651 | `https://jira.hl7.org/browse/FHIR-54651`; reopen with `bun run jira:search snapshot FHIR-54651` | Applied decision to remove `DosageDetails.simple`. |
| Jira | FHIR-54014 | `https://jira.hl7.org/browse/FHIR-54014`; reopen with `bun run jira:search snapshot FHIR-54014` | Applied renderedInstruction requirement/rationale. |
| Jira | FHIR-54331 | `https://jira.hl7.org/browse/FHIR-54331`; reopen with `bun run jira:search snapshot FHIR-54331` | Unresolved concern that examples use `Timing.repeat.count` where duration was intended. |
| Jira | FHIR-55331 | `https://jira.hl7.org/browse/FHIR-55331`; reopen with `bun run jira:search snapshot FHIR-55331` | Resolved-change-required editorial issue for contractions/abbreviations on this page. |
| Jira | FHIR-54557 | `https://jira.hl7.org/browse/FHIR-54557`; reopen with `bun run jira:search snapshot FHIR-54557` | Clarifies DosageSafety levels; relevant to safety examples. |
| Zulip | Medication backlog thread | `https://chat.fhir.org/#narrow/stream/Medication/topic/backlog%20for%20next%20call`; snapshot command `bun run zulip:search snapshot Medication "backlog for next call"` | Jose Costa Teixeira listed the same dosage-example errors and intended Jira fixes on 2026-03-05. |
| Confluence | Jan 2026 Pharmacy WGM minutes | `https://confluence.hl7.org/spaces/PHAR/pages/403869392/January+2026+-+Virtual+-+Pharmacy+WG+Minutes`; snapshot `bun run confluence:search snapshot 403869392` | Mentions many dosage ballot issues, including `FHIR-54523`, `FHIR-54331`, `FHIR-54014`, `FHIR-54651`, and `FHIR-54557`. |
| Confluence | 2026-03-02 Pharmacy agenda/minutes | `https://confluence.hl7.org/spaces/PHAR/pages/413255873/2026-03-02+Agenda+Meeting+Notes`; snapshot `bun run confluence:search snapshot 413255873` | Records agreement/vote to remove `Dosage.simple` for `FHIR-54651`. |
| Confluence | 2026-04-13 Pharmacy agenda/minutes | `https://confluence.hl7.org/spaces/PHAR/pages/453904167/2026-04-13+Agenda+Meeting+Notes`; snapshot `bun run confluence:search snapshot 453904167` | Records `FHIR-56016` vote 8-0-0 and says `FHIR-54523` was ready to apply. |

## Change summary

### R4 stub replaced by full R6 dosage regime examples

- Classification: example change; semantic guidance.
- R4: a short informational page with title "Dosage Examples" and only "See MedicationRequest examples for examples using Dosage."
- R6 ballot4: a full "Dosage Regime Examples" page with introduction, 12 examples, and Structure/JSON/XML tabs.
- This is not a normative requirement change on the page itself, but it is high-impact example guidance because the page teaches the new R6 `DosageDetails` model.

### R6 examples use the new dosage model

- Classification: substantive example/semantic guidance.
- The page demonstrates `DosageDetails.renderedInstruction`, `simple`, `step`, `component`, `safety`, `doseLimit`, `start`/`end` event dependencies, `Timing.repeat.startOffset`, `endOffset`, and the `timing-dayOfMonth` extension.
- The examples align with broader R6 dosage redesign text in `source/dosage.html`, including the break from R4's multiple `Dosage` elements toward a single `DosageDetails` container.

### Metadata/template/navigation churn

- Classification: metadata/template/navigation and mechanical.
- Header changed from `%diheader examples%` to `%dtxheader examples Dosage%`, responsible owner/status table was updated, local CSS and jQuery UI tab script were added, and the old empty paragraph/footer layout was replaced.

### Later R6 decisions supersede parts of the ballot4 page

- Classification: later semantic guidance / intent mismatch for ballot4 text.
- `FHIR-54651` later removed `DosageDetails.simple` and updated examples to express simple dosages as one `step`.
- `FHIR-56016` then corrected those updated examples so `timing` and `doseAndRate` live under `step.component`.
- `FHIR-54523` later corrected several cross-format mismatches in examples 1-3.

### Current R6 ballot4 page contains concrete example defects

- Classification: example correctness / editorial.
- Known later-corrected defects: Example 1 dose mismatch, Example 2 missing PRN dose and wrong safety unit, Example 2 duplicate XML safety block, Example 3 safety period mismatch, Example 10 XML misplaced `timing`/`doseAndRate`.
- Additional observed defect: Example 3 JSON/XML `doseLimit` omits mandatory `scope` even though `DosageSafety.doseLimit.scope` is 1..1.
- Additional observed editorial/path defect: Example 1 still says `MedicationRequest.dosageInstruction.renderedDosageInstruction`, which is stale under the R6 `DosageDetails.renderedInstruction` design.

## Source history

| Commit | Date | Subject | Classification / notes |
|---|---:|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Mechanical template churn; 1 insertion/3 deletions. |
| `c1d765ab73d0bf137c30793009baf937473668ac` | 2022-08-13 | various fixes including IHE + DICOM value sets + version | Mechanical/version churn; 1 insertion/1 deletion. |
| `22b5c2457301de9acd614a6d899679b609536031` | 2023-03-12 | reorganise data types pages ready for IG | Template/navigation reorganization; 25 insertions/24 deletions. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Metadata/status change around the R6 work. |
| `ba10a6f24d181dec80b69dd90e68e0337421e7a0` | 2025-11-11 | wip | First substantial expansion toward examples; 55 insertions/2 deletions. |
| `8954c5e1cdee2d94c9d9899c5996eda4d3df8f43` | 2025-11-11 | add examples draft | Major examples draft; associated PR `https://github.com/HL7/fhir/pull/3974`. |
| `f65e0284cdfb4eee7417ee8eaba5f750ac7695a8` | 2025-11-11 | fix xml | XML example cleanup. |
| `ecb78dfb771db23ab107f6f6c763897d9b8e6865` | 2025-11-12 | fill out examples | Major fill-out of the examples; associated PR `https://github.com/HL7/fhir/pull/3974`. |
| `01de4ab3fea6b992e02c3aebf25911fe8c78e219` | 2025-11-12 | R6 excmples | Editorial/example fixes; subject typo retained in history. |
| `b2e0264175bbc809238bda5a48157ab3dc03fdcc` | 2025-11-12 | merge work | Merge/work integration changes. |
| `5003ed2c45568a17843011550e2e4d25ceb5d1d6` | 2025-11-11 | minor fixes in dosage examples | Minor example corrections. |
| `e225678eb95ae7e7685bf002728b776cabef3d34` | 2025-11-12 | finish Dosage related changes | Significant cleanup/finalization; associated PR `https://github.com/HL7/fhir/pull/3974`. |
| `cc3b05ca23fdec25a4cdde3f9478aa2d1d261cd5` | 2025-11-12 | merge | Merge/integration cleanup. |
| `43ece5c24b58b3d338f1048d5637e7536e7cb9e3` | 2025-11-12 | more qa | QA fixes. |
| `d510bbd48b7410c735c6cbefe011c565335e99fa` | 2025-11-12 | more qa | QA fixes. |
| `4d1a06a81a54503102c8c5ea1593e719ff7880cd` | 2025-11-12 | fix typos in description of examples | Editorial fixes; blamed for the stale `renderedDosageInstruction` line. |
| `d0739e22c278c351272feaf4d6d342027f89b2f6` | 2025-11-12 | fix more typos | Editorial fixes. |
| `cd92e3b248e55686901dbd7912638b9055095c8e` | 2025-11-13 | FHIR-53245 | Patch says "Update minor issues in example documentation"; associated PR `https://github.com/HL7/fhir/pull/3981`. Jira `FHIR-53245` is unrelated to dosage examples. |
| `05b06e9d68ebad046f1f2a32328aebc73e41cc57` | 2025-11-13 | fix unwanted li | Removed stray list item. |
| `945d744a39c8ba85aa0ff66c422388c676ea03ca` | 2025-11-13 | add missing step in examples | Example structure fix. |
| `dc94cbf0a008ba7d97a59e605783c006172f41c6` | 2025-11-13 | remove empty line | Mechanical. |
| `7c07aed7209ed78cf98a19d767e6963d379a591e` | 2025-11-13 | remove extra comma | JSON/syntax cleanup. |
| `2857f064f9e2fb412a767be4f1e5493a5d2707f6` | 2025-11-13 | fix xml syntax | XML cleanup; associated PR `https://github.com/HL7/fhir/pull/3981`. |

Additional post-boundary commits found in all refs but not in the R6 ballot4 `HEAD`:

| Commit | Date | Subject | Why it matters |
|---|---:|---|---|
| `accc7b7f11fd24da385298c692cdd0304cc220ee` | 2026-03-05 | FHIR-54651 | Removes `DosageDetails.simple` and updates examples accordingly. |
| `b5c35f6ea3e799a408023608279ce72ab62b4084` | 2026-03-05 | FHIR-56016 | Moves `timing`/`doseAndRate` under `step.component` in examples. |
| `074fad2f3edd694c8c41bc7e8280691b040063c8` | 2026-03-05 | FHIR-54523 | Fixes text/structure mismatches between examples and formats. |
| `a566c33d62e08b7daf02d4fe0f4abdb895693825` | 2026-03-06 | FHIR-56016 updates | Adds missing closing XML lines after the prior fix. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-53245` appears as commit subject `cd92e3b248e55686901dbd7912638b9055095c8e`, but `bun run jira:search snapshot FHIR-53245` shows "Enable Composition.consent to reference DocumentReference also" with work group SD and related artifact Composition. It is unrelated to dosage examples and should not be used as rationale for the page.

### Jira issues that plausibly explain or supersede changed text

- `FHIR-53412` ("Add new elements to Timing") is Applied for R6. It introduces `Timing.repeat.startOffset` and `endOffset`, which the dosage examples use in Examples 4/5 and the supporting R6 dosage design.
- `FHIR-54014` ("Dosage redesign could be improved by requiring renderedInstruction") is Applied for R6. Resolution says to make `renderedInstructions` 1..1 and add guidance that rendered instructions must be present to communicate full dosage intent. This aligns with the examples page's emphasis on `renderedInstruction`, but also makes the stale `renderedDosageInstruction` path more problematic.
- `FHIR-54651` ("Dosage - remove 'simple' an use step.component") is Applied for R6. Resolution: remove `Dosage.simple` and revise examples to express simple dosages as a single step. Post-boundary commit `accc7b7f11fd24da385298c692cdd0304cc220ee` implements this in `source/dosage-examples.html`.
- `FHIR-56016` ("Dosage - examples have step.timing, should have step.component.timing") is Applied for R6. Description: "There is an element missing - component (which is the one that contains timing)." Post-boundary commits `b5c35f6e...` and `a566c33d...` implement corrections.
- `FHIR-54523` ("Textural representation does not match with structural representation") was raised against `https://hl7.org/fhir/6.0.0-ballot4/dosage-examples.html`. Resolution says to fix Example 1 dose 10 mg -> 2.5 mg in JSON/XML and also fix Example 2 missing PRN dose, Example 2 safety unit `"s"`, Example 2 duplicate XML safety block, and Example 3 safety period 2 -> 6 months. Post-boundary commit `074fad2f...` applies these fixes.
- `FHIR-54331` ("Change Timing.repeat.count in Dosage Regime Examples to Timing.repeat.boundsDuration") remains unresolved/triaged. It argues that Example 3 uses `Timing.repeat.count` where the intended meaning is "for N days", not "repeat N times." This is a substantive unresolved design/example issue but was not promoted to the action file because it is already open and broad.
- `FHIR-55331` ("Spelling/abbreviation issues on page: dosage-examples") is Resolved - change required with non-substantive impact. It records contraction cleanup such as "shouldn't" -> "should not"; useful editorial context but not a high-signal standalone action here.
- `FHIR-54557` ("Clarify Use of DosageSafety in DosageDetails and Sub-Elements") is triaged/resolved persuasive. It clarifies which safety level applies to component, step, or whole dosage. It does not directly mention the observed missing `doseLimit.scope` in Example 3, but it confirms that safety examples were under active review.
- `FHIR-54062` ("Rework startOffset/endOffset constraint") is related to the Timing offset examples; the issue is about constraints requiring `period` when offsets are present. No current page mismatch was elevated from this search.

### Context-only Jira hits not used for action

- `FHIR-15606` is an old STU3 owning-work-group cleanup.
- `FHIR-53983`, `FHIR-54522`, and `FHIR-54252` appeared in broad dosage search results, but were not traced further because the available snippets did not directly explain the changed page text or a concrete current defect.

## Zulip evidence

- `bun run zulip:search snapshot Medication "backlog for next call"` produced a direct rationale thread: `https://chat.fhir.org/#narrow/stream/Medication/topic/backlog%20for%20next%20call`.
  - On 2026-03-05, Mattias Colliander reported finding errors in the dosage examples.
  - Jose Costa Teixeira replied with the exact tracked errors: `FHIR-56016` for incorrectly placed `timing/doseAndRate` under step instead of `step.component`; `FHIR-54523` for Example 2 missing 5 mg PRN dose, safety unit fix, duplicate safety block removal, and Example 3 safety period 2 -> 6 months.
  - Jose invited additional errors to be added to `FHIR-54523` or filed as new Jiras.
- Zulip key searches:
  - `FHIR-56016`: one hit in `#Medication > backlog for next call`.
  - `FHIR-54523`: two hits in the same thread.
  - `FHIR-54651`: one hit in the same thread about removing `DosageDetails.simple`.
  - `FHIR-53412`: hits in `#fhir/infrastructure-wg > Agenda topic for future call` and `#Medication > Dosage`, but not needed for action because Jira/Confluence evidence was sufficient.
  - `FHIR-55331`, `FHIR-54331`, `FHIR-54014`, and `FHIR-54062`: no relevant Zulip hits found in the bounded search.
- Exact phrase searches for `MedicationRequest.dosageInstruction.renderedDosageInstruction` found no Zulip hits.

## Confluence evidence

- `bun run confluence:search snapshot 403869392` (January 2026 Virtual Pharmacy WG Minutes) references many dosage ballot issues and specifically includes `FHIR-54523`, `FHIR-54331`, `FHIR-54014`, `FHIR-54651`, and `FHIR-54557`. It is useful meeting/process evidence that dosage examples and `DosageDetails` design were under WGM review after ballot4.
- `bun run confluence:search snapshot 413255873` (2026-03-02 Pharmacy agenda/meeting notes) records: `FHIR-54651. Agreed to remove Dosage.simple (because is duplicative). Jose Costa Teixeira / Stephen Chu : 7 - 0 - 0`.
- `bun run confluence:search snapshot 453904167` (2026-04-13 Pharmacy agenda/meeting notes) records technical corrections and votes, including `FHIR-56016 - Jose Costa Teixeira, Dave Hill 8-0-0`, and notes `FHIR-54523 - ready to apply`.
- Confluence refs/FTS for `FHIR-54557` show continued Pharmacy agenda/minutes attention to dosage safety levels; no page-specific scope defect was found there.
- Confluence refs for `FHIR-53412` and `FHIR-54062` point to FHIR-I minutes relevant to Timing offset decisions, but they were not central to actionable findings for this page.

## Timeline

| Date | Evidence | Event |
|---:|---|---|
| 2019-10-30 | Boundary commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` | Older R4 source boundary. |
| 2025-10-31 | Commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | R6 normative/dosage status changes begin touching this page. |
| 2025-11-10 | `FHIR-53412` vote; FHIR-I/Timing evidence | Timing `startOffset`/`endOffset` rationale established. |
| 2025-11-11 to 2025-11-12 | PR `https://github.com/HL7/fhir/pull/3974`; commits `8954c5e1`, `ecb78dfb`, `e225678e` | Main examples were drafted and filled out. |
| 2025-11-13 | PR `https://github.com/HL7/fhir/pull/3981`; commits `cd92e3b2` through `2857f064` | Minor dosage-example cleanup before ballot4. |
| 2025-12-18 | Boundary commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` | Newer R6 ballot4 source boundary ("bump version for publication"). |
| 2026-01-16 to 2026-01-27 | Jira `FHIR-54523`, `FHIR-54331`, `FHIR-55331`, `FHIR-54557`; Confluence January WGM minutes | Ballot/comment review identifies example mismatches, editorial issues, safety-level questions, and count-vs-duration concerns. |
| 2026-03-02 | Confluence `413255873`; Jira `FHIR-54651` | Pharmacy WG votes to remove `Dosage.simple`. |
| 2026-03-05 | Zulip `#Medication > backlog for next call`; commits `accc7b7f...`, `b5c35f...`, `074fad...` | Errors are discussed informally and post-boundary fixes are committed for `FHIR-54651`, `FHIR-56016`, and `FHIR-54523`. |
| 2026-04-13 | Confluence `453904167`; Jira `FHIR-56016` | Pharmacy WG votes `FHIR-56016` 8-0-0 and notes `FHIR-54523` ready to apply. |

## Evidence log

- Confirmed page boundary:
  - `test -f "$OLD/source/dosage-examples.html" && echo "old exists"`
  - `test -f "$NEW/source/dosage-examples.html" && echo "new exists"`
- Reviewed direct diff and summary:
  - `git -C "$NEW" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/dosage-examples.html`
  - `git -C "$NEW" --no-pager diff --find-renames --stat ... -- source/dosage-examples.html`
- Traced source history:
  - `git -C "$NEW" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/dosage-examples.html`
  - `git -C "$NEW" --no-pager blame -L 78,82 -- source/dosage-examples.html`
  - `git -C "$NEW" --no-pager blame -L 473,506 -- source/dosage-examples.html`
  - `git -C "$NEW" --no-pager blame -L 2218,2274 -- source/dosage-examples.html`
  - `git -C "$NEW" --no-pager show --stat --patch cd92e3b248e55686901dbd7912638b9055095c8e -- source/dosage-examples.html`
- Checked associated PRs with:
  - `gh api -H 'Accept: application/vnd.github+json' "/repos/HL7/fhir/commits/<sha>/pulls" --jq '.[].html_url'`
- Read R6 ballot4 page end-to-end with `view` ranges covering lines 1-2884.
- Checked related structural definitions:
  - `source/datatypes/dosagedetails.xml:904-1095`
  - `source/datatypes/dosagesafety.xml:851-940`
- Parsed embedded JSON examples to look for missing `doseLimit.scope`; all JSON blocks parsed and `j3` has `dosageInstruction.safety.doseLimit[0] missing scope`.
- Jira searches/snapshots:
  - `bun run jira:search snapshot FHIR-53245`
  - `bun run jira:search fts "\"dosage examples\"" --limit 10`
  - `bun run jira:search snapshot FHIR-56016 FHIR-55331 FHIR-54523 FHIR-54331 FHIR-54014 FHIR-54651 FHIR-53412 FHIR-54062 FHIR-54557` (run sequentially in shell)
  - Exact stale path search: `bun run jira:search fts "\"MedicationRequest.dosageInstruction.renderedDosageInstruction\"" --limit 10` returned no results.
- Zulip searches/snapshot:
  - `bun run zulip:search fts "\"FHIR-56016\"" --limit 10`, and same pattern for other relevant keys.
  - `bun run zulip:search snapshot Medication "backlog for next call"`.
  - Exact stale path search returned no results.
- Confluence searches/snapshots:
  - `bun run confluence:search refs jira <KEY>` and `bun run confluence:search fts "<KEY>" --limit 10` for relevant keys.
  - `bun run confluence:search snapshot 403869392`
  - `bun run confluence:search snapshot 413255873`
  - `bun run confluence:search snapshot 453904167`
- Failed/quirky searches that affect confidence:
  - Unquoted FTS queries containing hyphenated terms such as `FHIR-53245` or `dosage-examples` can be parsed as column/operator expressions by the local FTS tools and produced `no such column` errors. Retried useful cases as exact quoted phrases.
  - Exact phrase searches for the stale `MedicationRequest.dosageInstruction.renderedDosageInstruction` path found no Jira/Zulip/Confluence issue, so that defect appears to be a direct source/page observation rather than a known tracked issue.

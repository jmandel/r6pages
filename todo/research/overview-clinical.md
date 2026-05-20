# overview-clinical research appendix

## Scope and coverage

- Page path: `source/overview-clinical.html`; page label: `overview-clinical`.
- Compared R4 `4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` against R6 ballot4 `6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Boundary confirmed: the page exists in both materialized source trees. Rename-aware diff status is `M source/overview-clinical.html`; line counts are 267 old and 265 new.
- The newer source page was read end-to-end after diff/history/community searches (`source/overview-clinical.html:1-265`).
- Source-history count between the two commits: 7 commits touching this page. Explicit Jira keys found in page-related commit/PR evidence: `FHIR-44047` and PR-body `FHIR-40524`. Page/topic searches also found `FHIR-55118`, `FHIR-8291`, and `FHIR-12131` as plausible or context hits.
- Jira searches performed for explicit keys, page path/label, page title/topic hints, changed phrases (`Responsible Owner`, `Maturity Level`, `exempli gratia`, `id est`, contractions), and the Zulip GraphQL/paradigm context.
- Zulip searches performed for quoted Jira keys, `overview-clinical`, `overview clinical clinicians`, exact changed/issue phrases, and `Responsible Owner`/metadata terms; one context-only thread was snapshotted.
- Confluence searches performed for Jira refs/FTS on key issues, page path/title terms, `overview-clinical`, `GraphQL`/paradigm terms, and abbreviation phrases; relevant FHIR-I minutes were snapshotted with focused context extraction.
- Caveats: community databases are local snapshots; Zulip/Jira FTS treats unquoted hyphenated Jira/page tokens as operators, so quoted FTS and SQL `LIKE` checks were used after one failed hyphenated search. No rendered build was run. Some `href` targets such as `observation.html` are generated publication pages rather than checked-in source files, so source-tree existence alone was not treated as link failure.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old R4 page | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/overview-clinical.html` | Baseline source; exists, 267 lines. |
| Source | New R6 ballot4 page | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-clinical.html` | Reviewed end-to-end; exists, 265 lines. |
| Source lines | New header metadata | New page lines 22-23 | Shows `Responsible Owner` header and no `Maturity Level` cell. |
| Source lines | Old header metadata | Old page lines 19-23 | Shows removed wrapper `div`, old WG text, and `Maturity Level: N/A`. |
| Source lines | FHIR-44047 punctuation edits | New page lines 97, 106, 224; old page lines 97, 106, 224 | Exact e.g./i.e. edits applied by `FHIR-44047`. |
| Source lines | Current contractions flagged by later issue | New page lines 63, 66, 181 plus nearby contraction lines 87, 88, 110, 160, 189, 194, 196, 208, 214, 225, 251 | Supports the only actionable editorial finding. |
| Source lines | Four-paradigm text | New page lines 141-144 | Locator for Zulip GraphQL/paradigm context; not elevated to action. |
| Local command | Boundary/diff status | `git -C "$NEW" diff --find-renames --name-status 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/overview-clinical.html` | Confirms modified, not added/deleted/renamed. |
| Local command | Direct diff | `git -C "$NEW" diff --find-renames --unified=80 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/overview-clinical.html` | Establishes net R4->R6 ballot4 changes: 5 insertions, 7 deletions. |
| Local command | Source history | `git -C "$NEW" log --reverse --follow --date=iso --pretty=format:'%h | %ad | %an | %s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/overview-clinical.html` | Seven page-touching commits. |
| Commit | Template wrapper removal | https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removes outer `div`; PR #1295. |
| PR | HTML template PR | https://github.com/HL7/fhir/pull/1295 | Merged 2021-06-26; broad template change. |
| Commit | QA double-period churn | https://github.com/HL7/fhir/commit/dad7cf37c75822c352509e1c2e8d050408d0be18 | Introduced `etc..` punctuation in this page; later reverted. |
| Commit | QA reversion | https://github.com/HL7/fhir/commit/9f780149387dc652bec02aa7744e52774acddbc9 | Reverted the page-level `etc..` churn; PR #2714. |
| PR | QA PR | https://github.com/HL7/fhir/pull/2714 | Merged 2023-02-21; no page-specific Jira in PR body. |
| Commit | Transient Patient heading | https://github.com/HL7/fhir/commit/a7b5d4574d5f5301ded1f590e357d9ba927d7be1 | Temporarily changed this page heading to `Patients`. |
| Commit | Heading correction | https://github.com/HL7/fhir/commit/fd6813c45e617edf1f6a432bbc5cf54c218252bf | Restores `Clinicians` heading in same PR. |
| PR | R5 Patient Intro PR | https://github.com/HL7/fhir/pull/2743 | References `FHIR-40524`; touched this page only transiently. |
| Jira | FHIR-40524 | https://jira.hl7.org/browse/FHIR-40524 | Patient Intro issue; related to PR #2743, not a final clinical-overview content change. |
| Confluence | FHIR-I 2023-03-20 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/161059574/FHIR+Infrastructure+Minutes+CC+2023-03-20 | Records `FHIR-40524` approval and Patient Empowerment ownership for patient intro. |
| Commit | Header metadata update | https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changes WG cell to `Responsible Owner` and removes FMM cell. |
| PR | Normative/header PR | https://github.com/HL7/fhir/pull/3901 | Merged 2025-11-02; no page-specific body/Jira found. |
| Commit | FHIR-44047 punctuation | https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Applies e.g./i.e. punctuation edits on this page. |
| PR | FHIR-44047 PR | https://github.com/HL7/fhir/pull/3951 | Merged 2025-11-06; body contains `FHIR-44047`. |
| Jira | FHIR-44047 | https://jira.hl7.org/browse/FHIR-44047 | R6 technical correction for e.g./i.e. punctuation; resolved persuasive/change required. |
| Confluence | FHIR-I Dallas 2024 WGM minutes | https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas | Body context says `FHIR-44047 will fix`. |
| Jira | FHIR-55118 | https://jira.hl7.org/browse/FHIR-55118 | Later unresolved page-specific spelling/abbreviation issue; basis for actionable cleanup finding. |
| Jira | FHIR-8291 | https://jira.hl7.org/browse/FHIR-8291 | Historical DSTU1 typo on overview clinical page; already published, not current action. |
| Jira | FHIR-12131 | https://jira.hl7.org/browse/FHIR-12131 | Context-only QI-Core navigation issue that links to Clinical Overview. |
| Zulip | GraphQL/paradigm thread | https://chat.fhir.org/#narrow/stream/implementers/topic/GraphQL%20part%20of%20REST%20interop.%20paradigm%3F | Weak context on line 141-144 four-paradigm wording; no matching Jira/source change found. |

## Change summary

- **metadata/template/navigation**: The page remained present and was not renamed. The outer `<div class="col-12">` wrapper was removed by a broad 2021 HTML-template commit. The header table changed from a WG cell plus `Maturity Level: N/A` to `Responsible Owner: ... Work Group` plus standards status only. This appears to be metadata/template churn, not a clinical content change.
- **editorial only**: `FHIR-44047` changed three abbreviation instances to comma style (`e.g.,`, `i.e.,`) on the page. Earlier 2023 QA commits introduced and then removed double periods after `etc.` with no net R4->R6 text effect.
- **mechanical/noise**: PR #2743, associated with the separate R5 Patient Intro work, temporarily changed this page's heading to `FHIR Overview - Patients`; a follow-up commit in the same PR restored `FHIR Overview - Clinicians`. There is no net page change.
- **substantive/normative**: No new, removed, or changed clinical requirements were found. No examples, REST/search/operation semantics, terminology bindings, anchors, or cross-resource clinical guidance changed in the net diff. The page remains `Informative`.
- **semantic guidance**: No meaningful guidance change was found. The current four-paradigm wording has a weak Zulip context thread about GraphQL/operations, but no applied Jira/source change was found.

## Source history

| Date | Commit | PR | Jira/refs | Page effect | Classification |
|---|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213` `update html template` | #1295, merged 2021-06-26 | none found | Removes `<div class="col-12">` and closing `</div>`. | mechanical/template |
| 2023-02-21 | `dad7cf37c758` `QA related changes` | #2714, merged 2023-02-21 | none found | Changes several `etc.` instances to `etc..`; later reverted. | mechanical/noise |
| 2023-02-21 | `9f780149387d` `more QA` | #2714 | none found | Reverts the `etc..` churn back to `etc.`. | editorial/mechanical |
| 2023-02-24 | `a7b5d4574d5f` `r5 patient intro edits` | #2743, merged 2023-02-25 | PR body `FHIR-40524` | Temporarily changes heading from `Clinicians` to `Patients`. | noise/reverted |
| 2023-02-24 | `fd6813c45e61` `typo correction on overview-clinicians.html` | #2743 | PR body `FHIR-40524` | Restores heading to `Clinicians`. | editorial/reversion |
| 2025-10-31 | `270e0ceb7b02` `normative changes for R6` | #3901, merged 2025-11-02 | none found | Adds `Responsible Owner:` label; removes `Maturity Level: N/A` cell. | metadata/template |
| 2025-11-03 | `887bc2383fb7` `FHIR-44047` | #3951, merged 2025-11-06 | `FHIR-44047` | Applies e.g./i.e. comma/case style edits at lines 97, 106, 224. | editorial |

Pickaxe checks corroborated the key source events: `git log -S 'Responsible Owner:'` and `git log -S 'Maturity Level'` identify `270e0ceb7b02`; `git log -S` for the changed e.g./i.e. phrases identifies `887bc2383fb7`.

## Jira evidence

### Explicit Jira keys

- `FHIR-44047` (`Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout`): R6 FHIR-core technical correction, ballot `BALLOT-56530`, status `Resolved - change required`, resolution `Persuasive`. The description asks for `e.g.,` and `i.e.,` comma style throughout the specification. Commit `887bc2383fb7` and PR #3951 apply exactly that style on this page.
- `FHIR-40524` (`R5 Patient Intro`): Found in PR #2743 body, not in the page diff itself. The issue and PR concern adding `overview-patient.html` and Patient Empowerment ownership. This page was only transiently mis-headed as `Patients` and corrected before the final R4->R6 net diff.

### Other plausible issues

- `FHIR-55118` (`Spelling/abbreviation issues on page: overview-clinical`): Submitted/unresolved technical correction created 2026-01-20, related URL `http://build.fhir.org/overview-clinical.html`. It specifically calls out `"doesn't" "they're"` and says abbreviations need to be fully spelled out. The R6 ballot4 source still contains those exact forms at lines 66 and 181, plus `don't` at line 63 and additional contractions. This is actionable editorial evidence, but it is later than the provided R6 ballot4 source commit and not the cause of the R4->R6 diff.
- `FHIR-8291` (`Typo overview clinical page`): Historical DSTU1 typo (`prevent` -> `present`, `thre's` -> `there's`), status Published. It does not explain current R4->R6 changes.

### Context-only hits

- `FHIR-12131`: QI-Core issue to add a link to the Clinical Overview for non-IT audiences. It supports the page's audience/context but does not discuss the R4->R6 changed text.
- `FHIR-44560` and `FHIR-44053`: Similar e.g./i.e. punctuation issues for other IGs, found by exact `exempli gratia`/`id est` search. They are not evidence for this core page beyond showing the broader ballot-comment pattern.
- Searches for `source/overview-clinical.html`, exact `FHIR Overview - Clinicians`, `Responsible Owner`/`Maturity Level`, and GraphQL/paradigm phrases did not find a Jira issue explaining additional page changes.

## Zulip evidence

- Quoted FTS and SQL `LIKE` searches found no Zulip mentions of `FHIR-44047`, `FHIR-55118`, `FHIR-8291`, or `FHIR-40524`.
- `overview-clinical` search found a context-only #implementers thread, `GraphQL part of REST interop. paradigm?` (2022-08-15 to 2022-09-01). Nick Radov asked whether GraphQL is within the four FHIR interoperability paradigms or a fifth paradigm. Lloyd McKenzie characterized GraphQL as essentially an operation; Grahame Grieve called it a decoration on RESTful; John Moehrke objected that Operations are not RESTful and suggested a Client/Server framing. Grahame responded `sure` when asked whether a Jira should be created. I found no matching Jira/source change, so this remains weak context only and was not elevated to an action.
- Searches for `FHIR Overview`/clinicians, `Responsible Owner`, `Maturity Level`, `exempli gratia`/`id est`, and abbreviation cleanup terms found no stronger relevant threads.

## Confluence evidence

- FHIR-I WGM Dallas minutes page `234784975` references `FHIR-44047`; body context says `FHIR-44047 will fix` among prior ballot issues. This supports that the e.g./i.e. change was noticed/approved for fixing, but the minutes do not mention `overview-clinical` specifically.
- FHIR-I conference call minutes page `161059574` references `FHIR-40524`; body context says `FHIR-40524 Approve the Patient Intro page Will change the owner to Patient Empowerment ... 14-0-0`. This supports the separate patient-intro PR context and confirms it is not a clinical-overview content rationale.
- Confluence refs/FTS found no pages for `FHIR-55118` or `FHIR-8291`.
- `overview-clinical` Confluence hits were context-only: a CG WGM page linking to the clinical introduction and an old DSTU2 breaking-changes list mentioning tracker 8291. Searches for GraphQL/paradigm and spelling/abbreviation phrases found no supporting minutes.

## Timeline

| Date | Clock | Event |
|---|---|---|
| 2015-06 to 2015-09 | Jira/source history | `FHIR-8291` raised/resolved/published for old overview-clinical typos; no current R4->R6 effect. |
| 2016-09 to 2018-03 | Jira | `FHIR-12131` asks to improve navigation for non-IT users and link to Clinical Overview from QI-Core; context only. |
| 2021-06-26/27 | PR merge/source commit | PR #1295 merges; commit `d7b8dadc6213` removes the page wrapper `div` as template churn. |
| 2022-08-15 to 2022-09-01 | Zulip discussion | GraphQL/four-paradigm thread occurs; no follow-up Jira/source change found. |
| 2023-02-21 | Source commit/PR | PR #2714 QA commits touch this page but net out to no substantive change. |
| 2023-02-24 to 2023-02-25 | Source commit/PR | PR #2743 for `FHIR-40524` temporarily changes this page heading to `Patients`, then restores `Clinicians`; PR merges. |
| 2023-03-20 | Confluence/Jira vote | FHIR-I minutes and `FHIR-40524` record approval of Patient Intro, not this clinical page's final text. |
| 2024-01-22 | Jira created | `FHIR-44047` created for e.g./i.e. punctuation across FHIR core. |
| 2024-05-23 | Jira resolution | `FHIR-44047` resolved persuasive/change required. |
| 2024-05 WGM / 2024-06-24 page version | Confluence | FHIR-I Dallas minutes record `FHIR-44047 will fix`. |
| 2025-10-31 / 2025-11-02 | Source commit/PR merge | Commit `270e0ceb7b02`, PR #3901, updates header metadata and removes FMM cell. |
| 2025-11-03 / 2025-11-06 | Source commit/PR merge | Commit `887bc2383fb7`, PR #3951, applies `FHIR-44047` punctuation to this page. |
| 2026-01-20 | Later Jira reassessment | `FHIR-55118` submitted for remaining spelling/abbreviation issues on `overview-clinical`; not yet applied in the reviewed R6 ballot4 source. |

## Evidence log

- `test -f` and `wc -l` on both source trees established that `source/overview-clinical.html` exists in both versions and changed from 267 to 265 lines.
- `git diff --find-renames --name-status` established `M source/overview-clinical.html`; `git diff --stat` reported 12 net line changes (5 insertions, 7 deletions).
- Full direct diff showed only wrapper/header metadata plus e.g./i.e. punctuation in the net R4->R6 ballot4 diff.
- `git log --follow` over the commit range found 7 page-touching commits; compact `git show --unified=0` extraction identified each page-level edit.
- `git log -S` for `Responsible Owner:`, `Maturity Level`, `I.e. The information shared`, and e.g./i.e. changed phrases tied the final text to commits `270e0ceb7b02` and `887bc2383fb7`.
- `gh api /repos/HL7/fhir/commits/<sha>/pulls` and `gh pr view` mapped the seven commits to PRs #1295, #2714, #2743, #3901, and #3951 and exposed PR-body `FHIR-40524` and `FHIR-44047` references.
- `bun run jira:search snapshot FHIR-44047`, `FHIR-40524`, `FHIR-55118`, `FHIR-8291`, and `FHIR-12131` provided issue statuses, descriptions, votes/resolutions, and related pages.
- Jira FTS for `"overview-clinical"`, `"source/overview-clinical.html"`, `"FHIR Overview - Clinicians"`, `"Responsible Owner" "Maturity Level"`, `"exempli gratia" "id est"`, and GraphQL/paradigm terms distinguished page-specific, implementation, and context-only issues. An unquoted `overview-clinical` query failed because FTS parsed the hyphen; quoted query results were used.
- `bun run zulip:search fts` with quoted Jira keys and SQL `LIKE` counts found no key mentions. `bun run zulip:search snapshot implementers "GraphQL part of REST interop. paradigm?"` captured the only relevant context thread.
- `bun run confluence:search refs jira` and `fts` found/snapshotted FHIR-I minutes for `FHIR-44047` and `FHIR-40524`; no Confluence references were found for `FHIR-55118`.
- `view` read the newer source page in chunks covering lines 1-265. `rg "doesn't|they're|don't|can't|there's|that's|what's"` verified current contractions for the actionable editorial finding.

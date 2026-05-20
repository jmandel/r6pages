# updates research appendix

## Scope and coverage
- Page path: `source/updates.html` (`updates`), compared from R4 4.0.1 source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to R6 ballot4 6.0.0-ballot4 source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Page boundary: `test -f` confirmed the page exists in both trees. Direct rename-aware diff reports `M source/updates.html`, not added/deleted/renamed.
- Newer page was read end-to-end after diff/history/community review: `wc -l` reports 195 lines; read chunks 1-80, 81-160, and 161-195.
- Source history between the two commits has 10 commits touching this page. Explicit issue-like keys found in commit/path evidence: `FHIR#17462`, `FHIR-19714`, `FHIR-32757`, `FHIR-44047`; related PR merge subjects also mention `FHIR-35172`. `FHIR#17462` did not match the same concept as Jira `FHIR-17462`.
- Jira searches performed: snapshots for explicit/candidate issues `FHIR-17462`, `FHIR-19714`, `FHIR-32757`, `FHIR-44047`, `FHIR-35172`, `FHIR-24914`, `FHIR-20874`, `FHIR-5541`; FTS searches for exact changed phrases including `"de-containing"`, `"server SHOULD either echo back"`, `"atypical and unexpected"`, `SUBSETTED CREATE UPDATE`, `"Variations between Submitted data"`, `"not return an ETag"`, `"Move conformance language"`, and `"updates.html" "normative"`.
- Zulip searches performed: explicit key searches via SQL `LIKE` after FTS key searches failed on hyphenated keys; phrase/topic searches for `de-containment`, `Response to Create Interaction`, `Server response location value`, `Connectathon Patient Stream`, `Security tags in a transaction`, `SUBSETTED tags and create/update`, `server SHOULD either echo`, and punctuation terms. Snapshots were taken for all promising threads.
- Confluence searches performed: `refs jira` and FTS for explicit keys; phrase searches for `de-containing`, `Variations between Submitted data`, `SUBSETTED create update`, `server SHOULD either echo`, R6/publication/normative/update terms. Targeted snapshots/SQL snippets were read for the relevant minutes pages.
- Caveats: the review is source/history/community evidence only; it did not render the HTML. Confluence snapshot output was too large to keep whole in the terminal, so targeted SQL snippets from `plain_text` were used for the relevant locators. The default Zulip DB omits noisy notification streams. Some Jira issue states lag source application (for example `FHIR-44047` is still `Resolved - change required` in the local Jira snapshot despite a source commit and PR merge).

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source line | R4 page status | `R4 source/updates.html:15-16` in `.cache/.../4.0.1-0da2a0a84dc1/source/updates.html` | Old page was Trial Use, FMM 5. |
| Source line | R6 page status | `R6 source/updates.html:11-12` in `.cache/.../6.0.0-ballot4-5d67a34a13a5/source/updates.html` | New page is marked Informative. |
| Source line | R6 V2/PUT omission wording | `source/updates.html:105-109` | FHIR-19714 clarified omitted elements on PUT and V2-style behavior. |
| Source line | R6 de-containment paragraph | `source/updates.html:111-118` | New FHIR-32757 semantic guidance. |
| Source line | R6 ETag SHOULD | `source/updates.html:168-172` | New normative-style mitigation statement. |
| Source line | R6 SUBSETTED handling | `source/updates.html:175-182` | Replaced old visible SUBSETTED Security Label recommendation with server-discretion guidance; source still has an explanatory HTML comment. |
| Source line | HTTP SUBSETTED simple tag context | `source/http.html:676-678`, `:777`, `:1308` | Cross-page context: `SUBSETTED` is a Simple Tag for `_summary`/`_elements`; update/create behavior is discussed in HTTP. |
| Source line | HTTP transactional integrity context | `source/http.html:2203-2206` | Parallel normative guidance from FHIR-24914 on returning stored resource or omitting ETag. |
| Commit | Template wrapper removal | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Mechanical page wrapper/template churn. |
| Commit | SUBSETTED/create-update text | `7ad9e8aa04cfb006e56bbb40316234270869e91b` / https://github.com/HL7/fhir/commit/7ad9e8aa04cfb006e56bbb40316234270869e91b | Added server-discretion SUBSETTED text, initially with typo. |
| PR | Vassil HTTP page changes | `HL7/fhir#1717` / https://github.com/HL7/fhir/pull/1717 | Merge subject mentions `FHIR#17462` and `FHIR#35172`; the Jira key match for `FHIR-17462` was unrelated. |
| Commit | FHIR-19714 wording | `0e62f8fbeddb2985a942147daf090ff72f4e21ab` / https://github.com/HL7/fhir/commit/0e62f8fbeddb2985a942147daf090ff72f4e21ab | Applied exact Jira resolution for V2-style omitted elements. |
| PR | FHIR-19714 merge | `HL7/fhir#1782` / https://github.com/HL7/fhir/pull/1782 | Merge of the FHIR-19714 branch. |
| Commit | FHIR-32757 main changes | `aa8e2ccd33ac9e6fa6d92d5b0d097d2328b48321` / https://github.com/HL7/fhir/commit/aa8e2ccd33ac9e6fa6d92d5b0d097d2328b48321 | Adds de-containment and ETag SHOULD; removes visible SUBSETTED Security Label sentence. |
| Commit | SUBSETTED typo fix | `6c21d0f75d73085eb985adc161f5c0a20eff511a` / https://github.com/HL7/fhir/commit/6c21d0f75d73085eb985adc161f5c0a20eff511a | Fixes `<code>SUBSETTED></code>` to `<code>SUBSETTED</code>`. |
| Commit | R6 status change | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changes page metadata from Trial Use/FMM 5 to Informative. |
| PR | R6 normative batch | `HL7/fhir#3901` / https://github.com/HL7/fhir/pull/3901 | Merge containing `270e0ce`; title/subject `2025 11 gg normative`. |
| Commit | FHIR-44047 punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` / https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Adds commas after `i.e.`/`e.g.`. |
| PR | FHIR-44047 merge | `HL7/fhir#3951` / https://github.com/HL7/fhir/pull/3951 | Merge of punctuation branch. |
| Jira | FHIR-19714 | https://jira.hl7.org/browse/FHIR-19714 | Formal rationale for V2-style omitted-element wording; Applied for R5. |
| Jira | FHIR-32757 | https://jira.hl7.org/browse/FHIR-32757 | Formal rationale for create/update variability guidance, ETag SHOULD, SUBSETTED removal, and de-containment wording. |
| Jira | FHIR-44047 | https://jira.hl7.org/browse/FHIR-44047 | Ballot technical correction for `e.g.,`/`i.e.,` punctuation. |
| Jira | FHIR-24914 | https://jira.hl7.org/browse/FHIR-24914 | Earlier HTTP transactional integrity issue that explains ETag/returned-resource risk. |
| Jira | FHIR-20874 | https://jira.hl7.org/browse/FHIR-20874 | No-change context on warnings when server modifies submitted data. |
| Jira | FHIR-5541 | https://jira.hl7.org/browse/FHIR-5541 | Older origin/context for the updates page and suppressed data discussion. |
| Zulip | `#implementers > de-containment` | https://chat.fhir.org/#narrow/stream/implementers/topic/de-containment | Direct source for de-containment rationale and wording. |
| Zulip | `#implementers > Response to Create Interaction` | https://chat.fhir.org/#narrow/stream/implementers/topic/Response%20to%20Create%20Interaction | Rationale for ETag/returned resource safety concerns; mentions GF#24914. |
| Zulip | `#fhir/infrastructure-wg > Subsetted` | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Subsetted | Post-commit concern that FHIR-32757 removal of SUBSETTED sentence lacked clear explanation. |
| Zulip | `#implementers > SUBSETTED tags and create/update` | https://chat.fhir.org/#narrow/stream/implementers/topic/SUBSETTED%20tags%20and%20create%2Fupdate | Background for accepting/rejecting updates with SUBSETTED-tagged resources. |
| Zulip | `#implementers > Security tags in a transaction` | https://chat.fhir.org/#narrow/stream/implementers/topic/Security%20tags%20in%20a%20transaction | Background for FHIR-20874 and warnings/OperationOutcome discussion. |
| Confluence | FHIRI WGM 202105 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/113673765/FHIR+Infrastructure+Minutes+WGM+202105 | Records FHIR-32757: SUBSETTED Security Label sentence is not correct; persuasive with modification. |
| Confluence | Security WG 2022-07-11 minutes | https://confluence.hl7.org/spaces/SEC/pages/104764291/2022-07-11+Security+WG+Agenda+Minutes | Clarifies SUBSETTED in `meta.tag` for `_summary`/`_elements` vs `meta.security` for security/privacy policy. |
| Confluence | FHIRI WGM 202405 Dallas minutes | https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas | Records `FHIR-44047 will fix`. |
| Confluence | FHIRI WGM 202509 Pittsburgh minutes | https://confluence.hl7.org/spaces/FHIRI/pages/358879917/FHIR+Infrastructure+Minutes+WGM+202509+-+Pittsburgh | R6 status note says for `updates.html`: `Move conformance language and make normative`, important for current Informative+SHOULD mismatch. |
| Local command | Direct diff | `git -C $new_tree --no-pager diff --find-renames 0da2a0a... 5d67a34... -- source/updates.html` | Establishes R4->R6 page changes. |
| Local command | Source history | `git -C $new_tree --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a...5d67a34... -- source/updates.html` | Establishes the 10 page-touching commits. |
| Local command | Pickaxe checks | `git -C $new_tree log --reverse -S 'server SHOULD either echo back' -- source/updates.html` and analogous commands | Confirms introduction commits for exact phrases. |
| Local command | Community snapshots | `bun run jira:search snapshot FHIR-32757`; `bun run zulip:search snapshot implementers "de-containment"`; `bun run confluence:search snapshot 358879917` | Reproduce the most important evidence. |

## Change summary

### Page boundary and template/navigation changes — metadata/template/navigation; mechanical/editorial
- The page exists in both trees and diff status is modified (`M`), not renamed.
- `d7b8dadc` removed the old `<div class="col-12">` wrapper and closing tag. The direct diff also removes blank lines and normalizes final newline.
- `aa8e2ccd` added named anchors before each `<h3>` (`element`, `system`, `access`, `generated`, `integration`, `ramifications`, `mitigation`), improving local linkability without changing rendered prose semantics.
- `270e0ceb` changed the standards table from `colstu` Trial Use with FMM 5 to `colsi` Informative with no FMM. This is metadata/status, but it interacts with the new uppercase `SHOULD` at `source/updates.html:170`.

### V2-style omitted-element behavior — semantic guidance / clarification
- R4 said the HL7 V2 approach of retaining omitted elements `can be followed with FHIR` and that FHIR lacks a construct to set an element explicitly empty.
- `FHIR-19714` changed this to: technically possible in FHIR, but atypical/unexpected; and the lack of a construct is scoped to processing a PUT in a mode where omitted elements are typically retained. The final text is at `source/updates.html:105-109`.
- Jira `FHIR-19714` exactly records this intended wording and classifies it as a non-substantive clarification, Applied for R5.

### De-containment on create/update — substantive semantic guidance
- R6 adds a paragraph at `source/updates.html:111-118` saying a server may convert a contained-resource reference into a reference to a distinct resource based on server-side business logic/uniqueness information, but must take care that re-identification is reliable between invocations.
- Jira `FHIR-32757` says this language should be added to the updates page and points to Zulip de-containment discussion. The Zulip `de-containment` thread contains the same business-logic/uniqueness rationale from Grahame Grieve and caveats from Lloyd McKenzie and others.

### ETag mitigation — substantive/normative requirement wording
- R4 said servers enforcing ETags for updates can choose not to include an ETag when returning modified resource instances.
- R6 says the server `SHOULD` either echo back what was stored and include an ETag, or not return an ETag because the client cannot know the current record, preventing subsequent unsafe update (`source/updates.html:168-172`).
- Jira `FHIR-32757` formally requested this exact replacement. Jira `FHIR-24914` and Zulip `Response to Create Interaction` supply earlier rationale: clients can overwrite unseen server changes if they update from the submitted resource rather than the stored/returned resource.
- The same concept is also present in `source/http.html:2203-2206`, which is useful context because HTTP is the more direct REST conformance page.

### SUBSETTED handling — substantive guidance plus source-comment churn
- R4 visibly said the `SUBSETTED` Security Label can flag removed information.
- `7ad9e8aa` first expanded that sentence to say accepting `UPDATE`/`CREATE` requests tagged `SUBSETTED` is at server discretion, but introduced `<code>SUBSETTED></code>` typo.
- `FHIR-32757` then removed the visible `SUBSETTED Security Label` recommendation because the sentence was not correct, leaving the server-discretion guidance. The removed sentence remains only inside an HTML source comment at `source/updates.html:175-178` with the note `FHIR-32757 said to remove this, but not clear why?`.
- `6c21d0f7` fixed the visible typo to `<code>SUBSETTED</code>`.
- Confluence Security WG 2022-07-11 clarifies the likely reason: `SUBSETTED` belongs in `meta.tag` for `_summary`/`_elements`, while `meta.security` is appropriate when subsetting is due to security/privacy policy. Current HTTP text uses `Resource.meta.tag`/Simple Tag for `_summary` and `_elements`.

### Punctuation and QA edits — editorial only
- `dad7cf37` and `9f780149` made QA/capitalization/punctuation tweaks, including a transient `etc..` regression immediately fixed.
- `887bc238` applied `FHIR-44047` by changing `i.e.`/`e.g.` examples to `i.e.,`/`e.g.,` in four places. Jira and Confluence both support this as a small punctuation correction.

### Status/conformance mismatch — actionable implementation/intent issue
- The current page is marked Informative (`source/updates.html:12`) but contains uppercase RFC-style `SHOULD` (`source/updates.html:170`).
- FHIRI WGM 202509 minutes list `Variations between Submitted data and Retrieved data https://build.fhir.org/updates.html` with the action `Move conformance language and make normative`.
- The later source commit `270e0ceb` instead marks the page Informative and does not remove or relocate the `SHOULD` from this page. This is the one high-signal current finding carried into `todo/actions/updates.md`.

## Source history

| Date | Commit | Subject | Change to `source/updates.html` | Classification |
|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | `update html template` | Removed `col-12` wrapper and closing tag. | Mechanical/template |
| 2022-02-21 | `7ad9e8aa04cfb006e56bbb40316234270869e91b` | `FHIR#17462` | Replaced visible SUBSETTED Security Label sentence with longer server-discretion guidance, but introduced `SUBSETTED>` typo. | Substantive guidance, tracker label ambiguous |
| 2022-03-17 | `0e62f8fbeddb2985a942147daf090ff72f4e21ab` | `Apply FHIR-19714` | Clarified V2-style omitted-element behavior and FHIR PUT expectations. | Semantic clarification |
| 2022-03-17 | `e9fbfd39a29f11dcc4996bfae722b4b6fd85aeae` | `Fix duplicate sentence` | Removed duplicated `Systems wishing to fully emulate HL7 v2 behavior...` sentence introduced by previous patch. | Mechanical/editorial fix |
| 2022-08-25 | `aa8e2ccd33ac9e6fa6d92d5b0d097d2328b48321` | `FHIR-32757 Provide normative guidance for variability in create operation` | Added anchors, de-containment paragraph, ETag `SHOULD`; removed visible SUBSETTED sentence into source comment; added server-discretion SUBSETTED guidance. | Substantive/normative guidance |
| 2023-02-21 | `dad7cf37c75822c352509e1c2e8d050408d0be18` | `QA related changes` | Temporary punctuation changes (`etc..`) and `HL7 V2` capitalization. | Editorial/QA |
| 2023-02-21 | `9f780149387dc652bec02aa7744e52774acddbc9` | `more QA` | Reverted `etc..` punctuation to `etc.`. | Editorial/QA |
| 2024-06-26 | `6c21d0f75d73085eb985adc161f5c0a20eff511a` | `Fix SUBSETTED> typo` | Fixed visible `SUBSETTED>` typo and whitespace/final newline. | Concrete typo fix |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | `normative changes for R6` | Changed status table from Trial Use/FMM 5 to Informative. Merged via PR #3901. | Metadata/status; possible mismatch |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | `FHIR-44047` | Added commas after `i.e.`/`e.g.` in four places. Merged via PR #3951. | Editorial punctuation |

Pickaxe checks confirmed the key phrase introductions:
- `Technically, this same approach can be followed with FHIR` -> `0e62f8fb` (`FHIR-19714`).
- `server SHOULD either echo back` -> `aa8e2ccd` (`FHIR-32757`).
- `de-containing` -> `aa8e2ccd` (`FHIR-32757`).
- `tagged as <code>SUBSETTED</code>` -> `6c21d0f7` (typo fix produced the exact final phrase).
- `Standards Status...Informative` -> `270e0ceb`.

## Jira evidence

### Explicit Jira keys
- `FHIR-19714` (`Emptying the element`): directly matches the V2-style omitted-elements change. Resolution text is nearly identical to current `source/updates.html:105-109`; status Published, resolution Persuasive with Modification, Applied for R5, related page `FHIR-core-updates`/section `7.14.5`.
- `FHIR-32757` (`Provide normative guidance for variability in create operation`): directly matches the most substantive page changes. Resolution requires replacing the ETag sentence with a `SHOULD`, removing the old `SUBSETTED Security Label` sentence, adding de-containment language to `updates.html`, and making related HTTP transaction/create changes. Status Published; impact Compatible, substantive; related pages `FHIR-core-updates`; vote/date in Jira: Joseph Lamy/Michael Donnelly 15-0-0, 2021-05-28.
- `FHIR-44047` (`Incorrect punctuation of exempli gratia and id est...`): supports the 2025 punctuation-only edits. Jira local status is `Resolved - change required`, ballot `BALLOT-56530`, resolution says to review/correct for R6; Confluence later says `will fix`; source has commit/PR applied.
- `FHIR-17462`: snapshot is about removing marital status code systems and is unrelated to the `source/updates.html` patch in commit subject `FHIR#17462`. Treat the commit subject as likely GitHub issue/legacy tracker notation, not reliable Jira evidence for this page.
- `FHIR-35172`: appears in PR #1717 merge subject but is about FHIR version management pages, not `updates.html`; context-only/irrelevant to this page.

### Other plausible Jira issues explaining same changed text
- `FHIR-24914` (`Set expectations about paying attention to returned resources on create/update`): not a direct `updates.html` commit in this diff, but it explains the ETag/returned-resource safety problem that FHIR-32757 builds on. It added HTTP transactional integrity guidance: if the server changed content, return the stored resource or omit ETag; clients should base later updates on returned content.
- `FHIR-20874` (`strengthen recommendation for warning when server ignores or modifies submitted data`): resolved No Change. It references the updates page and Zulip `Security tags in a transaction`; useful context for why warnings/OperationOutcome were not made a stronger page requirement.
- `FHIR-5541` (`Add best practice narrative on suppressing data for client access of a resource`): older context for the page's suppressed-data/access-control discussion and the page title/rename. It records 2015 Security discussion to reference the updates page from security material.

### Context-only or failed Jira paths
- Exact phrase searches for `Move conformance language` and `conformance language updates.html` found no Jira issue corresponding to the 2025 Confluence R6 status note.
- `"updates.html" "normative"`, `"Variations between Submitted data" "normative"`, and `"Informative" "SHOULD" "updates.html"` only returned `FHIR-32757`, not a later status-change tracker.
- `"accept an UPDATE" SUBSETTED` returned no Jira hits.

## Zulip evidence

- `#implementers > de-containment` (2021-01-25 to 2021-05-04) is directly relevant to the new de-containment paragraph. Key points: Lloyd says clients cannot expect de-containment and that contained resources assert no independent identity; Grahame says a server may de-contain when it has business logic/uniqueness statements unavailable to the client; Joe Lamy asks whether transaction responses should include an extra response entry, and Grahame/Lloyd say no, the base resource reference changes and the client resolves it.
- `#implementers > Response to Create Interaction` (2019-10-08 to 2019-11-14) supports the ETag/returned-content rationale. Lloyd explains the risk of clients using an ETag and submitted content after the server has changed/stored different content, leading to overwriting unseen data. He creates `GF#24914`; later Jira `FHIR-24914` records the same issue.
- `#fhir/infrastructure-wg > Subsetted` (2022-08-25) is directly tied to the source commit date. Grahame quotes `FHIR-32757`'s instruction to remove the SUBSETTED Security Label sentence and asks why; John Moehrke hopes it is not reversing recent clarity on SUBSETTED. This proves the source uncertainty comment was noticed but does not by itself contradict the final visible text.
- `#implementers > SUBSETTED tags and create/update` (2021-03-22) gives background: RB Johnson asks whether servers should prevent create/update when the new version has the SUBSETTED tag; John Moehrke answers that this is the implied guidance. Current page softens this to server discretion plus safety considerations.
- `#implementers > Security tags in a transaction` (2019-03-29 to 2019-04-18) is background for `FHIR-20874`: Lloyd says servers may ignore/alter bits and SHOULD warn if possible; later messages discuss OperationOutcome limitations. Jira resolved no change due burden/weak use case.
- `#implementers > Server response location value` and `#implementers > Connectathon Patient Stream` are background for parts of `FHIR-32757` outside this page (create response codes/locations) rather than direct `updates.html` text.
- Explicit key searches: FTS searches for unquoted hyphenated keys failed with SQLite `no such column` errors, so SQL `LIKE` searches were used. Only `FHIR-32757` was found in Zulip by exact key in the local DB; `FHIR-19714`, `FHIR-44047`, `FHIR-17462`, `FHIR-24914`, and `FHIR-20874` had no exact-key SQL hits. Punctuation search for `i.e.,`/`e.g.,` found no Zulip discussion.

## Confluence evidence

- FHIR Infrastructure Minutes WGM 202105 (`113673765`) include `jira:FHIR-32757` and the specific note that the sentence `The SUBSETTED ... Security Label ... can be used to flag data that has had information removed` is not correct. The minutes also note broken links in R4B and disposition `Persuasive with Mod`. This supports removal of the old visible SUBSETTED Security Label sentence.
- Security WG Agenda/Minutes 2022-07-11 (`104764291`) discuss `FHIR-20698` and SUBSETTED placement: FHIR-I asked whether SUBSETTED should be used in `meta.security` vs `meta.tag`; Security agreed that `_summary` or `_elements` subsetting should use `.meta.tag`, while `.meta.security` is appropriate when the reason is security/privacy policy. This supports why the old blanket `Security Label` wording was wrong.
- FHIR Infrastructure Minutes WGM 202405 Dallas (`234784975`) record tracker block voting: `FHIR-44047 will fix`, supporting the punctuation-only commit.
- FHIR Infrastructure Minutes WGM 202509 Pittsburgh (`358879917`) record R6 normative/status review. The relevant snippet lists `Variations between Submitted data and Retrieved data https://build.fhir.org/updates.html` and says `Move conformance language and make normative`. Current R6 ballot4 source is instead Informative and still contains uppercase `SHOULD`, so this is the strongest intent-vs-implementation concern.
- Confluence searches found no direct refs/FTS hits for `FHIR-19714`, `FHIR-17462`, `FHIR-24914`, or `FHIR-20874`; no `6.0.0-ballot4 updates.html` publication-request hit was found.

## Timeline

| Date | Type | Evidence | Notes |
|---|---|---|---|
| 2015-01 to 2015-09 | Jira/discussion | `FHIR-5541` | Older suppressed-data/update-page context; Security agreed to reference/rename the updates page. |
| 2019-03 to 2019-04 | Zulip/Jira | `Security tags in a transaction`; `FHIR-20874` | Warning/OperationOutcome idea discussed, then resolved No Change. |
| 2019-10 | Zulip/Jira | `Response to Create Interaction`; `FHIR-24914` | ETag/returned-resource hazard identified and formalized for HTTP transactional integrity. |
| 2021-01 to 2021-05 | Zulip | `de-containment` | Community rationale for new de-containment paragraph. |
| 2021-05-24/28 | Jira | `FHIR-32757` created/voted | Formal resolution to add normative guidance, remove SUBSETTED Security Label sentence, add de-containment text. |
| 2021-05 WGM | Confluence | FHIRI WGM 202105 | Minutes record SUBSETTED sentence as incorrect and disposition persuasive with modification. |
| 2022-02-21/24 | Source/PR | `7ad9e8aa`; PR #1717 | Adds SUBSETTED server-discretion text with typo; commit subject issue notation is not reliable Jira evidence. |
| 2022-03-17/18 | Source/PR/Jira | `0e62f8fb`, `e9fbfd39`; PR #1782; `FHIR-19714` | Applies and cleans up omitted-element wording. |
| 2022-08-25 | Source/Zulip | `aa8e2ccd`; `#fhir/infrastructure-wg > Subsetted` | Applies FHIR-32757 to this page; same day Zulip asks why old SUBSETTED text was removed. |
| 2023-02-21 | Source | `dad7cf37`, `9f780149` | QA/punctuation and V2 capitalization. |
| 2024-05 | Jira/Confluence | `FHIR-44047`; FHIRI WGM 202405 | Punctuation correction accepted/will fix for R6 ballot. |
| 2024-06-26 | Source | `6c21d0f7` | Fixes `SUBSETTED>` typo. |
| 2025-09 | Confluence | FHIRI WGM 202509 | R6 status note for updates page says move conformance language and make normative. |
| 2025-10-31 / 2025-11-02 | Source/PR | `270e0ceb`; PR #3901 | Actual source marks updates page Informative, not normative. |
| 2025-11-03 / 2025-11-06 | Source/PR | `887bc238`; PR #3951 | Applies `FHIR-44047` punctuation. |
| 2025-12-18 | Source publication commit | `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` | R6 ballot4 source commit (`bump version for publication`). |

## Evidence log

- `test -f old/source/updates.html` and `test -f new/source/updates.html`: both yes.
- `wc -l old/source/updates.html new/source/updates.html`: old 180 lines, new 195 lines.
- `git -C $new_tree diff --find-renames --stat/name-status 0da2a0a... 5d67a34... -- source/updates.html`: modified file, 34 insertions, 20 deletions; no rename.
- Full direct diff reviewed with `git diff --find-renames --src-prefix=R4/ --dst-prefix=R6/ ... -- source/updates.html`.
- Source log reviewed with `git log --reverse --date=short --format='%H%x09%ad%x09%s' old..new -- source/updates.html`.
- Individual `git show --stat --patch` reviewed for all 10 page-touching commits.
- PR ancestry checks: `7ad9e8aa` ancestor of merge `746f2dd5` (#1717); `0e62f8fb` ancestor of merge `0ff6d179` (#1782); `270e0ceb` ancestor of merge `879df03b` (#3901); `887bc238` ancestor of merge `ac44d699` (#3951). No merge subject found for `FHIR-32757` in local history.
- Pickaxe checks with `git log -S` confirmed the implementation commits for the exact changed phrases listed above.
- Jira snapshots established issue metadata, rationale, dispositions, votes, applied versions, and comments for the explicit/candidate issues.
- Zulip snapshots established full-thread context for de-containment, create response/ETag risk, SUBSETTED tag create/update handling, and warnings/security-tag context. Failed FTS key searches were followed by SQL `LIKE` exact-key searches.
- Confluence `refs jira` and FTS searches established relevant minutes pages; targeted SQL `plain_text` snippets were used for large pages to avoid relying on truncated snapshot output.

# comparison-v2 research appendix

## Scope and coverage

- Page path: `source/comparison-v2.html`, label `comparison-v2`.
- Compared `R4 4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to `R6 ballot4 6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Both source files exist:
  - Old: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/comparison-v2.html`
  - New: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-v2.html`
- The R6 ballot4 source page was read end-to-end. It has 203 lines, versus 205 lines in R4.
- Seven commits in the range touched this page. Explicit Jira keys found in commit subjects/patch history: `FHIR-24642`, `FHIR-25431`, `FHIR-44047`.
- Additional page-path Jira search found later page-specific submitted issues `FHIR-55089` and `FHIR-55090`.
- Jira/Zulip/Confluence searches were bounded to explicit Jira keys and distinctive changed/page phrases.
- Caveats:
  - The most actionable open Jira issues (`FHIR-55089`, `FHIR-55090`) were created in January 2026, after the R6 ballot4 source boundary commit dated 2025-12-18, so they are later reassessment/QA evidence rather than missed R4-to-R6 implementation commits.
  - Initial unquoted Zulip searches for hyphenated Jira keys failed because FTS parsed the hyphenated key incorrectly; quoted retries found no Zulip key hits.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/comparison-v2.html:190` | Old wording said `Nulls and update modes` and described fields populated with `"null"`. |
| Source | New R6 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-v2.html:190` | Current wording says `Delete indicator and update modes`, matching `FHIR-24642`. |
| Source | Current stale compatibility text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-v2.html:78-83` | Current text still says future handling rules "will be developed during the STU period"; later `FHIR-55090` flags "future versions". |
| Source | Current incomplete link marker | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-v2.html:121-125` | Current source still has `<!-- Todo: Link -->` after "FHIR extension registry"; later `FHIR-55090` flags "Todo". |
| Source | Current contraction | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-v2.html:177` | Current text still contains `doesn't`; later `FHIR-55089` flags this exact contraction. |
| Commit | Template update | https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removed wrapping `div`; mechanical/template only for this page. |
| Commit | Apply `FHIR-24642` | https://github.com/HL7/fhir/commit/5725bad7f8557dcf70740c21a00e32e8e7e83edf | Page-specific semantic wording changed from "null" to "delete indicator". |
| PR | `FHIR-24642` merge | https://github.com/HL7/fhir/pull/1790 | Merge commit `c6a60ab3e83393ffe8b85af2b25e4b21e28f13b1` referenced in Jira comment. |
| Commit | Apply `FHIR-25431` | https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9 | Broad spelling consistency pass changed `data types` to `datatypes` on this page. |
| Commit | QA capitalization | https://github.com/HL7/fhir/commit/dad7cf37c75822c352509e1c2e8d050408d0be18 | Broad QA pass changed `HL7 v2` to `HL7 V2`; later commit corrected accidental `etc..`. |
| Commit | QA correction | https://github.com/HL7/fhir/commit/9f780149387dc652bec02aa7744e52774acddbc9 | Corrected accidental doubled periods introduced by the prior QA pass. |
| Commit | R6 normative template | https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changed page metadata table from work group/maturity/standards status to responsible owner/standards status. |
| Commit | Apply `FHIR-44047` | https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Added commas after `e.g.` occurrences on this page. |
| PR | `FHIR-44047` merge | https://github.com/HL7/fhir/pull/3951 | Merge commit `ac44d699460cc94d75024d58d938509e6e590289` says `Merge pull request #3951 from HL7/jct-FHIR-44047`. |
| Jira | `FHIR-24642` | https://jira.hl7.org/browse/FHIR-24642; reopen with `bun run jira:search snapshot FHIR-24642` | Formal rationale for replacing "null" with "delete indicator"; Published, Persuasive, non-substantive clarification. |
| Jira | `FHIR-25431` | https://jira.hl7.org/browse/FHIR-25431; reopen with `bun run jira:search snapshot FHIR-25431` | Formal issue behind `datatype`/`data type` consistency edits. |
| Jira | `FHIR-44047` | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Formal punctuation issue for `e.g.,`/`i.e.,`; source has page changes but Jira status remains `Resolved - change required`. |
| Jira | `FHIR-55089` | https://jira.hl7.org/browse/FHIR-55089; reopen with `bun run jira:search snapshot FHIR-55089` | Later page-specific submitted issue: "Spelling/abbreviation issues on page: comparison-v2"; flags `doesn't`. |
| Jira | `FHIR-55090` | https://jira.hl7.org/browse/FHIR-55090; reopen with `bun run jira:search snapshot FHIR-55090` | Later page-specific submitted issue: "Incomplete content indicated on: comparison-v2"; flags `future versions` and `Todo`. |
| Confluence | `FHIR-24642` vote minutes | `bun run confluence:search snapshot 66933824`; https://confluence.hl7.org/spaces/FHIRI/pages/66933824/FHIR+Infrastructure+Minutes+CC+20191125 | Records `FHIR-24642` as Persuasive, motion Michael Donnelly/Eric Haas 7-0-0. |
| Confluence | `FHIR-25431` minutes | `bun run confluence:search snapshot 66940491`; https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113 | Records `FHIR-25431`; minutes say `Lloyd: Using "data type" Will auto approve`. |
| Confluence | `FHIR-44047` WGM minutes | `bun run confluence:search snapshot 234784975`; https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas | References `FHIR-44047` and says it "will fix". |
| Search | Zulip key retry | `bun run zulip:search fts "\"FHIR-24642\"" --limit 20` and similarly for `FHIR-25431`, `FHIR-44047`, `FHIR-55089`, `FHIR-55090` | Quoted exact-key searches returned no Zulip results. |

## Change summary

### Semantic guidance

- `FHIR-24642` changed the final interoperability consideration from "Nulls and update modes" to "Delete indicator and update modes" and replaced fields populated with `"null"` by fields populated with a `"delete indicator"` (`source/comparison-v2.html:190-193` in the new tree). This is semantic reader guidance for HL7 V2 update/delete behavior, but Jira marks it non-substantive and the wording matches the formal issue.

### Editorial terminology

- `FHIR-25431` changed three instances of `data type(s)` to `datatype(s)` on this page. This was part of a 59-file consistency pass and is editorial.
- QA changes capitalized `HL7 v2` to `HL7 V2` throughout headings, prose, and named anchors. The anchor names changed too, for example `HL7 v2-extensions` to `HL7 V2-extensions`. A source search in the newer tree found no references to the old or new fragment names outside this page.
- `FHIR-44047` added commas after `e.g.` occurrences, such as `e.g., the introduction` and `e.g., add this address`.

### Metadata/template/navigation

- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the outer `<div class="col-12">` wrapper as part of an HTML template update.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the metadata table to say `Responsible Owner` and removed the `Maturity Level: N/A` cell. This is template/status presentation, not page-specific content guidance.

### Mechanical/noise

- `dad7cf37c75822c352509e1c2e8d050408d0be18` temporarily introduced doubled periods after some `etc.` text while applying QA changes. `9f780149387dc652bec02aa7744e52774acddbc9` fixed the doubled periods; no net issue remains in R6 ballot4.

### No direct normative/API changes found

- No changes to examples, REST/search/operation behavior, conformance requirements, or FHIR resource definitions were found on this page. The only substantive-seeming wording change is the HL7 V2 "delete indicator" clarification.

## Source history

| Commit | Date | Subject | Page effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removed wrapping `div class="col-12"` and closing tag. | mechanical/template |
| `5725bad7f8557dcf70740c21a00e32e8e7e83edf` | 2022-03-17 | `Apply FHIR-24642` | Replaced "Nulls" and `"null"` with "Delete indicator" and `"delete indicator"`. | semantic guidance |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | Replaced `data type(s)` with `datatype(s)`. | editorial terminology |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | `QA related changes` | Changed `HL7 v2` to `HL7 V2`; temporarily introduced several `etc..` strings. | editorial/mechanical |
| `9f780149387dc652bec02aa7744e52774acddbc9` | 2023-02-21 | `more QA` | Fixed the accidental `etc..` strings. | mechanical cleanup |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Changed metadata table: `Responsible Owner`, removed `Maturity Level: N/A`. | metadata/template |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Added commas after `e.g.` occurrences. | editorial punctuation |

Additional source-history notes:

- `git show c6a60ab3e83393ffe8b85af2b25e4b21e28f13b1 --stat` shows `Merge pull request #1790 from HL7/AZ-FHIR-24642-v2` and `source/comparison-v2.html | 4 ++--`, aligning with the `FHIR-24642` Jira comment that cited commit `c6a60ab3e83393ffe8b85af2b25e4b21e28f13b1`.
- `git log --all --merges --grep=FHIR-44047` found `ac44d699460cc94d75024d58d938509e6e590289` (`Merge pull request #3951 from HL7/jct-FHIR-44047`), after the page-specific commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`.
- Pickaxe for `<!-- Todo: Link -->`, `future versions`, and `doesn't` showed these strings date back to early page history (`16436ebe1a3b38ec88266daafde7cb2d6b562f86` in 2013, with later repository migration/rewrite entry `6bf66c167ce30cc7fe9398849a898c25880cdb92` in 2014). They are not introduced by the R4-to-R6 diff, but they remain in the current page and were later flagged by Jira.

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-24642` (`Replace null with delete indicator`)
  - Status: Published; Resolution: Persuasive; Change Impact: Non-substantive; Applied for Version: R5.
  - Description: HL7 V2.9 replaced the term "null" with "delete indicator" to reduce confusion, so this page should change accordingly.
  - Resolution: "Replace 'null' with the updated term, as described in the issue."
  - Comment: "Fixed in commit c6a60ab3e83393ffe8b85af2b25e4b21e28f13b1."
  - Source implementation on this page is consistent: old lines 190-192 changed to new lines 190-193.

- `FHIR-25431` (`Inconsistent use of "datatype" vs. "data type"`)
  - Status: Published; Resolution: Persuasive; Type: Technical Correction.
  - Description asked to pick either "data type" or "datatype" and be consistent.
  - Commit `8592e1207273b786db340efb927bb6d1dc9756c9` changed many files from `data type(s)` to `datatype(s)`, including this page.
  - Confluence minutes for 2020-01-13 say `Lloyd: Using "data type" Will auto approve`; the later source commit applies the opposite spelling (`datatype`). Because the committed change is broad and the Jira is Published, this was treated as a historical caveat rather than a page-specific actionable mismatch.

- `FHIR-44047` (`Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout`)
  - Status in snapshot: `Resolved - change required`; Resolution: Persuasive; Ballot: `BALLOT-56530`; Related Pages: `FHIR-core-many`.
  - Resolution: "Should make a note to review this as we review content for R6."
  - Commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` changed relevant `e.g.` occurrences on this page; merge PR #3951 is visible in source history.
  - This looks applied in source despite Jira not yet showing Applied/Published; not elevated as an action because it is workflow/status cleanup rather than a page defect.

### Other Jira issues that plausibly explain current page concerns

- `FHIR-55089` (`Spelling/abbreviation issues on page: comparison-v2`)
  - Status: Submitted; Resolution: Unresolved; Created: 2026-01-20.
  - Description: page contains misspelled or abbreviated words; specifics: `"doesn't"`.
  - Current R6 ballot4 source still has `doesn't` at line 177. Other contractions also remain (`can't`, `won't`), but the issue explicitly names `doesn't`.

- `FHIR-55090` (`Incomplete content indicated on: comparison-v2`)
  - Status: Submitted; Resolution: Unresolved; Created: 2026-01-20.
  - Description: page contains phrases implying missing/incomplete content; specifics: `"future versions"` and `"Todo"`.
  - Current R6 ballot4 source still has `future versions`/`will be developed during the STU period` at lines 81-83 and `<!-- Todo: Link -->` at line 124.
  - Similar existing source uses `[%extensions-location%]extension-registry.html` and `http://hl7.org/fhir/registry` for extension registry links, e.g. `source/exchanging.html:986`, `source/defining-extensions.html:241`, and `source/extensibility-examples.html:992`.

### Context-only Jira hits not used for action

- Phrase search for `"HL7 V2"` produced many unrelated Jira issues about mapping, IGs, and V2 terminology. None explained the page-specific capitalization change beyond the local QA commits.
- Phrase search for `"exempli gratia"` found `FHIR-44047` plus similar IG-specific punctuation issues. Only `FHIR-44047` was relevant to FHIR core and this page.
- Phrase search for `"comparison-v2"` also returned unrelated/contextual hits (`FHIR-17639`, `FHIR-9839`, and an IG issue) that did not explain the R4-to-R6 page edits or a current page defect.

## Zulip evidence

- Quoted exact-key searches returned no results for `FHIR-24642`, `FHIR-25431`, `FHIR-44047`, `FHIR-55089`, or `FHIR-55090`.
- Phrase search for `"delete indicator"` found one later contextual thread, `#V2 > Erroneous Data Handling` (2024-12-10), but it was about V2 data handling generally and was not used as rationale for the page change.
- Phrase search for `"comparison-v2"` found general implementer references to the page, including a 2018 `#implementers > FHIR support for V2 "" active null` hit quoting the old "Nulls and update modes" text. This supports that the page was visible to implementers before `FHIR-24642`, but no direct disposition or page-change rationale was found there.
- Phrase searches for `"Relationship between FHIR and HL7"` and `"exempli gratia"` found no Zulip results.

## Confluence evidence

- `FHIR-24642`: `bun run confluence:search refs jira FHIR-24642` and `fts "FHIR-24642"` found page `66933824`, `FHIR Infrastructure Minutes CC 20191125`. The snapshot references `FHIR-24642`; the text records it as Persuasive with motion Michael Donnelly/Eric Haas 7-0-0.
- `FHIR-25431`: `bun run confluence:search refs jira FHIR-25431` and `fts "FHIR-25431"` found page `66940491`, `FHIR Infrastructure Minutes CC 20200113`. The text records `FHIR-25431 Lloyd: Using "data type" Will auto approve`.
- `FHIR-44047`: `bun run confluence:search refs jira FHIR-44047` and `fts "FHIR-44047"` found page `234784975`, `FHIR Infrastructure Minutes WGM 202405 - Dallas`. The search excerpt says `FHIR-44047 will fix`.
- `FHIR-55089` and `FHIR-55090`: Confluence refs/FTS searches found no references.
- Phrase search for `"delete indicator"` found OO and INM context pages about V2 delete indicator handling. These were not directly tied to this page's source change and were kept as context-only.

## Timeline

| Date | Clock | Evidence | Event |
|---:|---|---|---|
| 2013-12-28 | Source origin | `git log --all --reverse -S "<!-- Todo: Link -->"` | The current TODO marker, future-version wording, and `doesn't` trace back to early page history. |
| 2019-09-17 | Jira created | `FHIR-24642` snapshot | Request filed to replace "null" with "delete indicator". |
| 2019-11-25 | WG decision/Jira resolved | `FHIR-24642`; Confluence `66933824` | `FHIR-24642` resolved Persuasive; FHIR-I minutes record 7-0-0 motion. |
| 2020-01-09 | Jira created | `FHIR-25431` snapshot | Inconsistent `datatype`/`data type` issue opened. |
| 2020-01-13 | WG discussion | Confluence `66940491` | FHIR-I minutes mention `FHIR-25431` and "Using \"data type\"". |
| 2021-10-27 | Jira resolved | `FHIR-25431` snapshot | Jira marked Published/Persuasive. |
| 2021-06-27 | Source commit | `d7b8dadc...` | Template wrapper removed from page. |
| 2022-03-17 | Source commit | `5725bad7...` | Page text changed from "null" to "delete indicator". |
| 2022-03-19 | PR merge | `c6a60ab3...`, PR #1790 | Merge of `AZ-FHIR-24642-v2`. |
| 2022-08-31 | Source commit | `8592e120...` | Broad `datatype` consistency pass changed this page. |
| 2023-02-21 | Source commits | `dad7cf37...`, `9f780149...` | Broad QA capitalization and cleanup. |
| 2024-01-22 | Jira created | `FHIR-44047` snapshot | Punctuation issue filed for R6 ballot. |
| 2024-05-23 | Jira resolved/WG process | `FHIR-44047`; Confluence `234784975` | Jira resolved Persuasive; WGM minutes say "will fix". |
| 2025-10-31 | Source commit | `270e0ceb...` | R6 normative metadata template change. |
| 2025-11-03 | Source commit | `887bc238...` | Page punctuation updated for `FHIR-44047`. |
| 2025-11-06 | PR merge | `ac44d699...`, PR #3951 | Merge of `jct-FHIR-44047`. |
| 2025-12-18 | Publication boundary source | `5d67a34a...` | R6 ballot4 source boundary commit (`bump version for publication`). |
| 2026-01-20 | Later Jira QA | `FHIR-55089`, `FHIR-55090` snapshots | Page-specific submitted issues opened for contractions and incomplete-content markers. |

## Evidence log

- Established page boundary and direct diff:
  - `test -f .../4.0.1-0da2a0a84dc1/source/comparison-v2.html`
  - `test -f .../6.0.0-ballot4-5d67a34a13a5/source/comparison-v2.html`
  - `wc -l` returned 205 old lines and 203 new lines.
  - `git -C .../6.0.0-ballot4-5d67a34a13a5 diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/comparison-v2.html`
- Traced source history:
  - `git -C ... log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/comparison-v2.html`
  - `git show --stat --patch` for all seven page-touching commits.
  - `git log --all --merges --grep=FHIR-24642` and `--grep=FHIR-44047` to identify PR merge commits.
  - Pickaxe: `git log --all --reverse -S "<!-- Todo: Link -->" -- source/comparison-v2.html`, and similarly for `future versions` and `doesn't`.
- Jira:
  - Snapshotted `FHIR-24642`, `FHIR-25431`, `FHIR-44047`, `FHIR-55089`, `FHIR-55090`.
  - FTS searches: `"delete indicator"`, `"comparison-v2"`, `"HL7 V2"`, `"Relationship between FHIR and HL7"`, `"exempli gratia"`.
- Zulip:
  - Initial unquoted `bun run zulip:search fts FHIR-24642`/similar failed because FTS parsed the hyphenated key as a column/operator. Quoted retries were used.
  - Quoted key searches for all five Jira keys found no results.
  - Phrase searches: `"delete indicator"`, `"comparison-v2"`, `"HL7 V2"`, `"Relationship between FHIR and HL7"`, `"exempli gratia"`.
- Confluence:
  - `refs jira` and `fts` for `FHIR-24642`, `FHIR-25431`, `FHIR-44047`, `FHIR-55089`, `FHIR-55090`.
  - Snapshots: `66933824`, `66940491`, `234784975`.
  - Phrase searches: `"delete indicator"`, `"comparison-v2"`, `"HL7 V2"`, `"Relationship between FHIR and HL7"`, `"exempli gratia"`.
- Current-page checks:
  - Full `view` of `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-v2.html`.
  - `rg -n "doesn't|can't|won't|Todo|future versions|HL7 v2|HL7 V2|delete indicator|null|data type|datatype" .../source/comparison-v2.html`
  - `rg -n "extensibility-registry|extension-registry|extensions.html|registry of extensions|extension registry" .../source`
  - `rg -n "comparison-v2\\.html#HL7 v2|comparison-v2\\.html#HL7 V2|HL7 v2-extensions|HL7 V2-extensions|HL7 v2-updateMode|HL7 V2-updateMode" .../source`

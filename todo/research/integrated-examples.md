# integrated-examples research appendix

## Scope and coverage

- Page path: `source/integrated-examples.html`.
- Compared `R4 4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` with `R6 ballot4 6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Old source: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/integrated-examples.html`.
- New source: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/integrated-examples.html`.
- Page boundary confirmed: file exists in both trees. Old file has 449 lines; new file has 447 lines.
- Newer page read end-to-end: yes, lines 1-447.
- Source history between the two commits: 3 commits touched this page.
- Explicit Jira keys found in page-touching commits, patches, and page source: none.
- Jira/Zulip/Confluence searches were bounded to the page label/path and distinctive changed phrases: `integrated examples`, `integrated-examples`, `real-world clinical cases`, `hospital/home`, `Responsible Owner`, plus the later Jira key `FHIR-55108` and context-only Jira keys `FHIR-5149`/`FHIR-7466`.
- Caveat: the diff is almost entirely broad template/QA churn, not page-specific semantics. One later unresolved Jira issue (`FHIR-55108`) concerns the current page but was created after the R6 ballot4 source commit.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old header/opening text | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/integrated-examples.html:13` and `:17-28` | Shows old wrapper div, maturity cell, and unhyphenated `real world`. |
| Source | New header/opening text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/integrated-examples.html:16-29` | Shows current `Responsible Owner`, no maturity cell, and `real-world` wording. |
| Source | Old device typo | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/integrated-examples.html:146-158` | `hopital/home` and `hopital` before QA cleanup. |
| Source | New device typo fix | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/integrated-examples.html:145-158` | Same table after `hospital/home` and `hospital` correction. |
| Source | Old closing wrapper | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/integrated-examples.html:443-447` | Shows removed closing `</div>`. |
| Source | New closing footer | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/integrated-examples.html:443-447` | Confirms wrapper removal only affects template structure. |
| Source | Current spelling/abbreviation defects | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/integrated-examples.html:39`, `:74`, `:153`, `:223`, `:415` | Current reader-facing defects: `didn't`, `specializm`, `presciber`, `Antiobiotic`/`mediatinum`, and `Celsius1`. |
| Commit | Template wrapper change | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Broad `update html template` commit; removes `div.col-12` wrapper on this page. |
| PR | Template wrapper PR | https://github.com/HL7/fhir/pull/1295 | PR containing `d7b8dad`; merged 2021-06-26T22:33:10Z. No Jira key in PR body. |
| Commit | QA typo cleanup | `dad7cf37c75822c352509e1c2e8d050408d0be18`, https://github.com/HL7/fhir/commit/dad7cf37c75822c352509e1c2e8d050408d0be18 | Broad `QA related changes`; hyphenates `real-world` and fixes `hopital`. |
| PR | QA cleanup PR | https://github.com/HL7/fhir/pull/2714 | PR containing `dad7cf3`; merged 2023-02-21T11:28:06Z. No Jira key in PR body. |
| Commit | R6 header metadata change | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Broad `normative changes for R6`; changes owner/status metadata row on this page. |
| PR | R6 metadata PR | https://github.com/HL7/fhir/pull/3901 | PR containing `270e0ce`; merged 2025-11-02T02:17:42Z. No Jira key in PR body. |
| Jira | Current-page editorial issue | https://jira.hl7.org/browse/FHIR-55108; reopen with `bun run jira:search snapshot FHIR-55108` | Submitted technical correction for `integrated-examples`; specifically flags `didn't`. |
| Jira | Historical integrated examples link/narrative issue | https://jira.hl7.org/browse/FHIR-5149; reopen with `bun run jira:search snapshot FHIR-5149` | Context-only 2015 issue about missing narrative/link rendering on integrated examples; not tied to R4->R6 changes. |
| Jira | Historical complete narrative issue | https://jira.hl7.org/browse/FHIR-7466; reopen with `bun run jira:search snapshot FHIR-7466` | Context-only 2015 issue about not snipping narratives; not tied to R4->R6 changes. |

## Change summary

### Metadata/template/navigation

- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the page-level `<div class="col-12">` wrapper and matching closing `</div>`. This was part of a 212-file `update html template` commit and appears mechanical/template-only.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the metadata row from `FHIR Work Group`, `Maturity Level: N/A`, and `Standards Status: Informative` to `Responsible Owner: FHIR Work Group` and `Standards Status: Informative`. This was part of a 351-file R6 metadata/normative-status cleanup, not a page-specific content decision.

### Editorial only

- `dad7cf37c75822c352509e1c2e8d050408d0be18` hyphenated `real world` to `real-world` in two places and fixed `hopital/home`/`hopital` to `hospital/home`/`hospital`. This was part of a 625-file broad QA commit.

### Substantive/normative, semantic guidance, example, REST/search/operation changes

- None found. The clinical examples, linked example resource references, table structure, and explanatory purpose text are otherwise unchanged between R4 and R6 ballot4.

### Mechanical/noise

- Blank-line churn around the removed wrapper and footer is mechanical.

## Source history

| Date | Commit | PR | Page change | Classification |
|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | https://github.com/HL7/fhir/pull/1295 | Removed opening `<div class="col-12">` and closing `</div>`. Commit touched 212 files. | mechanical/template |
| 2023-02-21 | `dad7cf37c75822c352509e1c2e8d050408d0be18` | https://github.com/HL7/fhir/pull/2714 | `real world` -> `real-world`; `hopital` -> `hospital`. Commit touched 625 files. | editorial/QA |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | https://github.com/HL7/fhir/pull/3901 | Header metadata row now says `Responsible Owner`; removes `Maturity Level: N/A`. Commit touched 351 files. | metadata/template/navigation |

No page-touching commit message, patch, or associated PR body contained an explicit Jira key.

## Jira evidence

### Explicit Jira keys from commits/patches

None.

### Other Jira issues plausibly related to the current page

- `FHIR-55108` (`Submitted`, Technical Correction, created 2026-01-20) is directly about `integrated-examples` and the current build URL. It says: "The page contains one or more misspelled or abbreviated words. Abbreviations need to be fully spelled out. Specifics: "didn't"." The current R6 ballot4 source still has `didn't` at line 39, but this issue was created after the R6 ballot4 source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` dated 2025-12-18, so it does not explain the R4->R6 diff.
- Jira searches for additional obvious current-page typos (`specializm`, `presciber`, `Antiobiotic`, `mediatinum`, `Celsius1`) returned no results.

### Context-only Jira hits that should not drive action

- `FHIR-5149` is a 2015 published/non-substantive issue about links on integrated examples returning "Error processing narrative: null"; resolution was to add narrative components where missing. This is historical context only and does not match the R4->R6 changed text.
- `FHIR-7466` is a 2015 published issue about not snipping narrative in examples, noting the integrated examples as a likely place for complete examples. It is historical context only.
- Searching `hospital/home` found `FHIR-29284`, but that issue is about the US Vitals blood pressure profile and is a keyword collision.
- Searching `Responsible Owner` found `FHIR-55949`, but that issue is about the Devices workgroup name for DeviceMetric/DeviceAlert and is not about this page.

## Zulip evidence

- Exact searches for `integrated examples` and `integrated-examples` found one 2019 `#patient empowerment > Marketing / outreach / dissemination to public` message that linked the page as an example-scenario resource. It did not discuss the R4->R6 wording/template changes.
- Exact searches for `real-world clinical cases` found no results.
- Exact searches for `hospital/home` found unrelated 2024 Da Vinci coverage-determination messages.
- Exact searches for `FHIR-55108`, `FHIR-5149`, and `FHIR-7466` found no results after quoting the hyphenated keys.
- Searches involving `didn't` required avoiding the apostrophe because FTS treated it as syntax; the retried `didn integrated examples` search produced unrelated hits only.

No Zulip thread found gave rationale, objections, or later reversal for the page changes.

## Confluence evidence

- Exact searches for `integrated examples` and `integrated-examples` in high-signal page kinds found no results.
- `confluence:search refs jira FHIR-55108`, `FHIR-5149`, and `FHIR-7466` found no references.
- Exact FTS searches for `FHIR-55108`, `FHIR-5149`, and `FHIR-7466` found no results.
- Searching `hospital/home` found Devices WG agenda/minutes about "Hospital @ Home" or hospital/home settings; these are unrelated keyword hits.
- Searching `Responsible Owner` found a 2026 OO minutes page mentioning that the first listed WG is the responsible owner for a module, but this was after the R6 ballot4 source commit and was not about `integrated-examples`.

No Confluence evidence found a workgroup decision specific to this page.

## Timeline

| Date | Event |
|---|---|
| 2015-01-19 | `FHIR-5149` created about integrated-example link/narrative rendering; resolved/published in 2015 and unrelated to R4->R6 diff. |
| 2015-05-10 | `FHIR-7466` created about complete narratives in examples; resolved/published and unrelated to R4->R6 diff. |
| 2021-06-26 | PR https://github.com/HL7/fhir/pull/1295 merged. |
| 2021-06-27 | Commit `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed this page's wrapper div as part of broad template churn. |
| 2023-02-21 | Commit `dad7cf37c75822c352509e1c2e8d050408d0be18` and PR https://github.com/HL7/fhir/pull/2714 applied broad QA typo cleanup, including this page. |
| 2025-10-31 | Commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed this page's metadata row as part of broad R6 normative/status changes. |
| 2025-11-02 | PR https://github.com/HL7/fhir/pull/3901 merged. |
| 2025-12-18 | Newer source boundary commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` (`bump version for publication`). |
| 2026-01-20 | `FHIR-55108` created after the R6 ballot4 source boundary, flagging `didn't` on `integrated-examples`. |

## Evidence log

- Confirmed page exists in both trees with `test -f`; old/new line counts were 449 and 447.
- Ran rename-aware page diff: `git -C <new-tree> --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/integrated-examples.html`. Established that all R4->R6 changes are wrapper/template metadata or typo edits.
- Ran chronological history: `git -C <new-tree> --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/integrated-examples.html`. Found exactly three page-touching commits.
- Inspected each page-touching commit with `git show --stat --patch`; no Jira keys appeared in commit messages or patches.
- Used `gh api /repos/HL7/fhir/commits/<sha>/pulls` and `gh pr view` to find PRs #1295, #2714, and #3901; PR bodies had no Jira tracker number.
- Read the new page end-to-end with file views covering lines 1-220 and 221-447.
- Searched Jira for `integrated examples`, `integrated-examples`, `real-world clinical cases`, `hospital/home`, and `Responsible Owner`; only `FHIR-55108` was current-page relevant, while `FHIR-5149`/`FHIR-7466` were historical context and other hits were keyword collisions.
- Snapshotted `FHIR-55108`, `FHIR-5149`, and `FHIR-7466`.
- Searched Jira for current-page typo anchors `specializm`, `presciber`, `Antiobiotic`, `mediatinum`, and `Celsius1`; no Jira hits.
- Searched Zulip and Confluence for page terms, distinctive changed phrases, and relevant Jira keys. No page-change rationale was found.
- Initial unquoted Zulip FTS searches for `FHIR-55108` and apostrophe-containing `didn't` failed because FTS parsed the hyphen/apostrophe as syntax. Retried with quoted issue keys and apostrophe-free terms; no relevant results.

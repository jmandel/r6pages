# comparison-cda research appendix

## Scope and coverage

- Page path: `source/comparison-cda.html`
- Versions compared: `R4 4.0.1` at `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to `R6 ballot4 6.0.0-ballot4` at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Source trees:
  - Old: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/comparison-cda.html`
  - New: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-cda.html`
- Page boundary: present in both trees. Old source has 119 lines; new source has 117 lines.
- Newer page read end-to-end: yes, lines 1-117.
- Direct page history between the two commits contains 3 commits. Explicit Jira keys found in page-touching commits: `FHIR-25431`.
- Jira/Zulip/Confluence searches performed for `FHIR-25431`, `comparison cda`, `comparison-cda`, `individual datatype components`, `Inconsistent use of datatype`, `Responsible Owner`/`Maturity Level`, and page-specific Jira hits found by `comparison cda`.
- Caveats:
  - No Zulip thread was found for `FHIR-25431` or the exact page phrase.
  - The Confluence minute for `FHIR-25431` says `Using "data type"`, while the applied global commit standardizes many occurrences to `datatype`; because Jira is now Published and the source commit consistently changed 59 files to `datatype`, I treated this as ambiguous shorthand rather than a page-specific actionable mismatch.
  - `FHIR-54494` appeared in a `comparison cda` Jira search, but it concerns the documents/Composition page text that mentions the CDA comparison, not a visible defect in `source/comparison-cda.html`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page header | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/comparison-cda.html:13-18` | Shows the old wrapper div, WG label, `Maturity Level: N/A`, and Informative status. |
| Source | New page header | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-cda.html:15-18` | Shows current `Responsible Owner` header and omitted maturity cell. |
| Source | Old datatype phrase | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/comparison-cda.html:102-109` | Original wording used `individual data type components`. |
| Source | New datatype phrase | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-cda.html:102-109` | Current wording uses `individual datatype components`. |
| Source | Current contraction | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-cda.html:48-55` | Current page still contains `isn't`, matching open Jira `FHIR-55087`. |
| Commit | HTML template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removes page wrapper div; mechanical/template. |
| PR | HTML template PR | https://github.com/HL7/fhir/pull/1295 | Merged 2021-06-26; PR title `Gg 20210627 html template`. |
| Commit | `FHIR-25431` terminology edit | `8592e1207273b786db340efb927bb6d1dc9756c9`, https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9 | Changes this page from `data type` to `datatype`; global 59-file terminology consistency commit. |
| PR | `FHIR-25431` PR | https://github.com/HL7/fhir/pull/2312 | Merged 2022-09-01; PR title `Gg 202209 edits`. |
| Commit | R6 normative/header update | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changes metadata table wording to `Responsible Owner` and removes the maturity cell. |
| PR | R6 normative/header PR | https://github.com/HL7/fhir/pull/3901 | Merged 2025-11-02; PR title `2025 11 gg normative`. |
| Jira | `FHIR-25431` | https://jira.hl7.org/browse/FHIR-25431; reopen with `bun run jira:search snapshot FHIR-25431` | Formal Technical Correction for inconsistent `datatype` vs `data type`; status Published, resolution Persuasive, applied for R5. |
| Jira | `FHIR-55087` | https://jira.hl7.org/browse/FHIR-55087; reopen with `bun run jira:search snapshot FHIR-55087` | Current Submitted page-specific editorial issue for `comparison-cda`; flags contraction `"isn't"`. |
| Jira | `FHIR-54494` | https://jira.hl7.org/browse/FHIR-54494; reopen with `bun run jira:search snapshot FHIR-54494` | Context-only hit: about Clinical Document Profile text on the documents/Composition page, not an applied `comparison-cda.html` change. |
| Confluence | FHIR-I minutes for `FHIR-25431` | Page `66940491`, https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113; reopen with `bun run confluence:search snapshot 66940491` | Records FHIR-I tracker discussion: `FHIR-25431 Lloyd: Using "data type" Will auto approve`. |

## Change summary

### Template wrapper removal - mechanical/noise

Commit `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removes the outer `<div class="col-12">` wrapper and matching closing `</div>` from the page. This is consistent with the commit title `update html template` and PR `#1295`; no page-specific semantic text changed.

### Header/status metadata table - metadata/template/navigation

Commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changes the metadata row from:

`<a ...>FHIR</a> Work Group | Maturity Level: N/A | Standards Status: Informative`

to:

`Responsible Owner: <a ...>FHIR</a> Work Group | Standards Status: Informative`

This is reader-visible metadata/template churn, not a change to CDA/FHIR comparison guidance. The page remains Informative.

### `data type` to `datatype` - editorial terminology consistency

Commit `8592e1207273b786db340efb927bb6d1dc9756c9` changes `individual data type components` to `individual datatype components` in the interoperability paragraph. This is tied to `FHIR-25431`, a Published/Persuasive Technical Correction for inconsistent use of `datatype` vs `data type`.

The commit is global: 59 files changed, 300 insertions and 300 deletions, consistently replacing many `data type` occurrences with `datatype`. I found no evidence that this changes normative requirements, example content, REST/search/operation semantics, or CDA/FHIR conversion behavior.

### Existing editorial issue not introduced by the diff

The current page still says `It isn't obvious...` at line 54. `FHIR-55087` was submitted in 2026 specifically for `comparison-cda` and identifies `"isn't"` as a spelling/abbreviation issue. This is unrelated to the R4-to-R6 diff, but it is a concrete current-page editorial issue.

## Source history

| Commit | Date | Subject | Page effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removes `<div class="col-12">` wrapper and closing div. PR `#1295`, merged 2021-06-26. | mechanical/noise |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | Changes `data type components` to `datatype components`. PR `#2312`, merged 2022-09-01. | editorial terminology consistency |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Changes page metadata row to `Responsible Owner`, removes `Maturity Level: N/A`. PR `#3901`, merged 2025-11-02. | metadata/template/navigation |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-25431` - `Inconsistent use of "datatype" vs. "data type"`
  - Snapshot command: `bun run jira:search snapshot FHIR-25431`
  - URL: https://jira.hl7.org/browse/FHIR-25431
  - Status: Published; Resolution: Persuasive; Type: Technical Correction; Work Group: fhir-i; Raised in Version: R4; Applied for Version: R5.
  - Description: the page and maybe others were inconsistent about spelling `Data Type`; request was to pick either `data type` or `datatype` and be consistent.
  - This issue plausibly explains the page's only prose-wording diff.

### Other Jira issues that plausibly touch the same page

- `FHIR-55087` - `Spelling/abbreviation issues on page: comparison-cda`
  - Snapshot command: `bun run jira:search snapshot FHIR-55087`
  - URL: https://jira.hl7.org/browse/FHIR-55087
  - Status: Submitted; Resolution: Unresolved; Type: Technical Correction; Work Group: fhir-i; Raised in Version: R5; Created 2026-01-20.
  - Related URL: `http://build.fhir.org/comparison-cda.html`
  - Description identifies the contraction `"isn't"`. Current R6 ballot4 source still contains `It isn't obvious...` at line 54.

### Context-only Jira hits that should not drive action

- `FHIR-54494` - `Clinical Document Profile is no longer present`
  - Snapshot command: `bun run jira:search snapshot FHIR-54494`
  - URL: https://jira.hl7.org/browse/FHIR-54494
  - Status: Triaged; Resolution: Unresolved; Work Group: sd; Ballot: `BALLOT-88034`; Related Artifacts: `FHIR-core-Composition`.
  - Search hit came from the phrase `See also the comparison with CDA`, but the described defect is on the documents/Composition page: a link/reference to the Clinical Document profile reportedly points to a set of extensions. I did not find a direct `comparison-cda.html` implementation mismatch from this issue.

## Zulip evidence

- `bun run zulip:search fts "\"FHIR-25431\"" --limit 20` found no results.
- SQL fallback `SELECT ... FROM messages WHERE content LIKE '%FHIR-25431%' ...` found no results.
- Exact phrase search for `"individual datatype components"` found no results.
- Broader `"datatype" "data type"` search was noisy and returned general datatype/data type discussions, not `comparison-cda` or `FHIR-25431` rationale.
- `comparison-cda` search returned two unrelated-looking implementers messages; I did not snapshot them because the snippets did not discuss this page change.

## Confluence evidence

- `bun run confluence:search refs jira FHIR-25431` found one page:
  - Page ID `66940491`, `FHIR Infrastructure Minutes CC 20200113`
  - URL: https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113
  - Snapshot command: `bun run confluence:search snapshot 66940491`
  - Relevant text in tracker-items section: `jira:FHIR-25431 Lloyd: Using "data type" Will auto approve`
- `bun run confluence:search fts "FHIR-25431" --limit 20` found the same page.
- Exact phrase search for `"individual datatype components"` found no results.
- `Responsible Owner`/`Maturity Level` search found a 2026 OO minutes page about module ownership, but not this page or the R6 header/template change.

## Timeline

| Date | Clock | Evidence |
|---:|---|---|
| 2020-01-09 | Jira created | `FHIR-25431` created for inconsistent `datatype` vs `data type`. |
| 2020-01-13 | Work group minutes | FHIR-I minutes page `66940491` mentions `FHIR-25431` and `Using "data type" Will auto approve`. |
| 2021-06-26 | PR merge | PR `#1295` merged for HTML template changes. |
| 2021-06-27 | Source commit | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removes the page wrapper div. |
| 2021-10-27 | Jira resolved | `FHIR-25431` resolved; Jira status now Published. |
| 2022-08-31 | Source commit | `8592e1207273b786db340efb927bb6d1dc9756c9` applies `data type` -> `datatype` on this page and many others. |
| 2022-09-01 | PR merge | PR `#2312` merged with the `FHIR-25431` page change. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changes the page metadata row for R6. |
| 2025-11-02 | PR merge | PR `#3901` merged. |
| 2026-01-16 | Context Jira | `FHIR-54494` created about Clinical Document Profile text on documents/Composition page; not a direct `comparison-cda.html` defect. |
| 2026-01-20 | Page-specific Jira | `FHIR-55087` submitted for `comparison-cda` contraction `"isn't"`, still present in current source. |

## Evidence log

- Confirmed both old and new source files exist with `test -f` commands from the batch prompt.
- Captured direct diff:
  - `git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26" "5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/comparison-cda.html"`
  - Result: 35-line diff with wrapper removal, header metadata change, and `data type` -> `datatype`.
- Captured page history:
  - `git -C ... --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/comparison-cda.html"`
  - Result: 3 commits listed in Source history.
- Inspected each page-touching commit with `git show --stat --patch <commit> -- "source/comparison-cda.html"`.
- Checked GitHub PR associations with `gh api repos/HL7/fhir/commits/<sha>/pulls` and `gh pr view <number> --repo HL7/fhir`.
- Read current page line count and full source: 117 lines, read lines 1-117.
- Jira searches:
  - `bun run jira:search snapshot FHIR-25431`
  - `bun run jira:search fts "comparison cda" --limit 10`
  - `bun run jira:search fts "\"individual datatype components\"" --limit 10`
  - `bun run jira:search fts "\"Inconsistent use of datatype\"" --limit 10`
  - `bun run jira:search fts "\"Responsible Owner\" \"Maturity Level\"" --limit 10`
  - `bun run jira:search snapshot FHIR-55087`
  - `bun run jira:search snapshot FHIR-54494`
- Zulip searches:
  - Initial unquoted `FHIR-25431` FTS failed because the hyphen was parsed by FTS; corrected with quoted FTS and SQL fallback.
  - `bun run zulip:search fts "\"FHIR-25431\"" --limit 20`
  - `bun run zulip:search sql "SELECT ... WHERE content LIKE '%FHIR-25431%' ..."`
  - `bun run zulip:search fts "\"individual datatype components\"" --limit 20`
  - `bun run zulip:search fts "\"datatype\" \"data type\"" --limit 20`
  - `bun run zulip:search fts "\"comparison-cda\"" --limit 20`
- Confluence searches:
  - `bun run confluence:search refs jira FHIR-25431`
  - `bun run confluence:search fts "FHIR-25431" --limit 20`
  - `bun run confluence:search snapshot 66940491`
  - `bun run confluence:search fts "\"individual datatype components\"" --limit 20`
  - `bun run confluence:search fts "\"Responsible Owner\" \"Maturity Level\"" --limit 20`

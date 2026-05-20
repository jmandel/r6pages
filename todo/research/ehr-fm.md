# ehr-fm research appendix

## Scope and coverage

- Page path: `source/ehr-fm.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Boundary: page exists in both trees and is modified, not added/deleted/renamed.
- New page read end-to-end: yes, 159 lines at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ehr-fm.html:1-159`.
- Source history count: 4 commits touched the page between the two commits.
- Explicit Jira keys found in source history: `FHIR-25431`, `FHIR-44047`.
- Jira/Zulip/Confluence searches performed: explicit Jira snapshots for both keys; Jira FTS for page/path/topic and distinctive changed phrases; Zulip FTS for explicit keys and page/topic terms; Confluence refs/FTS for both keys and topic terms, with snapshots of the two relevant FHIR-I minutes pages.
- Important caveats:
  - Initial unquoted FTS searches for hyphenated terms such as `FHIR-25431`, `FHIR-44047`, and `ehr-fm` failed in Jira/Zulip because the hyphen was parsed as an operator; they were retried with phrase quoting.
  - `FHIR-44047` remains Jira status `Resolved - change required`, even though commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` and PR 3951 applied the `e.g.,` edits to this page. Treat the Jira status as broader-ticket state, not proof this page edit is missing.
  - `FHIR-25431` Confluence minutes say `Using "data type"`, while the later source commit broadly standardizes this page and many others to `datatypes`. Because the current datatypes page itself is titled `Datatypes` and the Jira is `Published`, this was kept as audit context rather than elevated as an action.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/ehr-fm.html` | R4 baseline exists |
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ehr-fm.html` | R6 ballot4 page reviewed end-to-end |
| Source lines | Current owner/status row | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ehr-fm.html:27` | Shows the R6 metadata/template row after maturity-level removal |
| Source lines | Current datatype wording | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ehr-fm.html:87` | Page-specific application of `FHIR-25431` |
| Source lines | Current `e.g.,` edits | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ehr-fm.html:115-123` | Page-specific application of `FHIR-44047` |
| Source lines | Stale conformance wording | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ehr-fm.html:97` | Basis for the actionable overlooked-problem finding |
| Source lines | Current resource list | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourcelist.html:50-52`, `:301`, `:414` | R6 names `CapabilityStatement` and `StructureDefinition`, not `Conformance Statement` / `Resource Profile` resources |
| Commit | Template wrapper cleanup | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`; https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removed page wrapper div; mechanical |
| PR | Template wrapper cleanup PR | https://github.com/HL7/fhir/pull/1295 | Associated PR for `d7b8dadc...`, merged 2021-06-26 |
| Commit | Datatype spelling | `8592e1207273b786db340efb927bb6d1dc9756c9`; https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9 | Applies `FHIR-25431`; changes this page from `data types` to `datatypes` |
| PR | Datatype spelling PR | https://github.com/HL7/fhir/pull/2312 | Associated PR for `8592e120...`, merged 2022-09-01 |
| Commit | R6 normative/status template | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`; https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changes page metadata row, removing `Maturity Level: N/A` |
| PR | R6 normative/status template PR | https://github.com/HL7/fhir/pull/3901 | Associated PR for `270e0ceb...`, merged 2025-11-02 |
| Commit | `e.g.,` punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`; https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Applies `FHIR-44047` to five examples on this page |
| PR | `e.g.,` punctuation PR | https://github.com/HL7/fhir/pull/3951 | Associated PR for `887bc238...`, merged 2025-11-06 |
| Jira | FHIR-25431 | https://jira.hl7.org/browse/FHIR-25431; reopen with `bun run jira:search snapshot FHIR-25431` | Formal issue for datatype/data type consistency |
| Jira | FHIR-44047 | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Formal issue for `e.g.,` / `i.e.,` punctuation cleanup |
| Confluence | FHIR-I minutes for FHIR-25431 | Page 66940491, https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113; reopen with `bun run confluence:search snapshot 66940491` | Records FHIR-I discussion/vote context for `FHIR-25431` |
| Confluence | FHIR-I WGM minutes for FHIR-44047 | Page 234784975, https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas; reopen with `bun run confluence:search snapshot 234784975` | Records `FHIR-44047 will fix` vote context |
| Zulip | Explicit-key searches | `bun run zulip:search fts "\"FHIR-25431\"" --limit 20`; `bun run zulip:search fts "\"FHIR-44047\"" --limit 20` | No Zulip hits for the explicit Jira keys in the local DB |

## Change summary

### Mechanical/noise

- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` (`update html template`) removes an outer `<div class="col-12">` wrapper and closing `</div>`. This is template/layout churn, not page-specific specification content.

### Metadata/template/navigation

- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` (`normative changes for R6`) changes the standards-status table row from:
  - EHR Work Group + `Maturity Level: N/A` + `Standards Status: Informative`
  - to `Responsible Owner: EHR Work Group` + `Standards Status: Informative`
- Classification: metadata/template. It removes the maturity-level cell from an informative appendix but does not change the EHR-FM mapping guidance.

### Editorial only

- `8592e1207273b786db340efb927bb6d1dc9756c9` (`FHIR-25431`) changes link text from `data types` to `datatypes` at the TI.4 terminology row. This aligns the page with the current `Datatypes` page title and broad commit-wide spelling normalization.
- `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` (`FHIR-44047`) adds commas after `e.g.` in five example labels. This is grammar/punctuation only.

### Substantive/normative, semantic guidance, example semantics, REST/search/operation semantics

- None found in the direct R4 4.0.1 -> R6 ballot4 diff for this page. The page remains an informative appendix; no requirements, examples with computable behavior, REST/search semantics, operations, or conformance behavior changed in the diff.

### Overlooked current-page issue noticed during full-page read

- Current R6 ballot4 line 97 still says `The FHIR Conformance Statement and Resource Profile resources...`. In R6, the current resource list identifies `CapabilityStatement` and `StructureDefinition` instead. This stale wording is not part of the R4 -> R6 diff but is concrete enough to put in the action file.

## Source history

| Date | Commit | PR | Subject | Page-specific effect | Classification |
|---|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | https://github.com/HL7/fhir/pull/1295 | `update html template` | Removes `<div class="col-12">` wrapper and closing `</div>` | Mechanical/template |
| 2022-08-31 | `8592e1207273b786db340efb927bb6d1dc9756c9` | https://github.com/HL7/fhir/pull/2312 | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | `data types` -> `datatypes` in TI.4 link text | Editorial terminology consistency |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | https://github.com/HL7/fhir/pull/3901 | `normative changes for R6` | Changes workgroup/status row; removes `Maturity Level: N/A` | Metadata/template |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | https://github.com/HL7/fhir/pull/3951 | `FHIR-44047` | `e.g.` -> `e.g.,` in five examples | Editorial punctuation |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-25431` - `Inconsistent use of "datatype" vs. "data type"`
  - Snapshot command: `bun run jira:search snapshot FHIR-25431`
  - URL: https://jira.hl7.org/browse/FHIR-25431
  - Metadata in local snapshot: `Published`, `Persuasive`, priority `High`, type `Technical Correction`, specification `FHIR-core`, raised in `R4`, work group `fhir-i`, created `2020-01-09`, resolved `2021-10-27`, applied for version `R5`, related URL `http://hl7.org/fhir/R4/datatypes.html#id`.
  - Description: the datatypes page and possibly other pages were inconsistent with spelling `Data Type`; requested choosing either `data type` or `datatype` and being consistent.
  - Page implementation: commit `8592e1207273b786db340efb927bb6d1dc9756c9` changes this page from `data types` to `datatypes` at current line 87. The commit touched 59 files with 300 insertions/300 deletions, indicating broad spelling normalization rather than an EHR-FM-specific decision.

- `FHIR-44047` - `Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout`
  - Snapshot command: `bun run jira:search snapshot FHIR-44047`
  - URL: https://jira.hl7.org/browse/FHIR-44047
  - Metadata in local snapshot: `Resolved - change required`, status category `indeterminate`, `Persuasive`, priority `Medium`, type `Technical Correction`, specification `FHIR-core`, raised in `R6`, work group `fhir-i`, ballot `BALLOT-56530`, created `2024-01-22`, resolved `2024-05-23`, related URL `https://hl7.org/fhir/6.0.0-ballot1/`, related pages `FHIR-core-many`.
  - Description: `e.g.` and `i.e.` should be punctuated as `e.g.,` and `i.e.,` throughout.
  - Resolution text: `Should make a note to review this as we review content for R6.`
  - Comments include a short style discussion between Jose Costa-Teixeira and Jeff Brown; no page-specific objection to the EHR-FM edits found.
  - Page implementation: commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` changes five occurrences on this page.

### Other Jira issues that plausibly explain the same changed text

- Jira FTS for `"e.g." comma` returned `FHIR-44047` plus related punctuation issues for other specs/IGs such as `FHIR-44053` and `FHIR-44560`. Only `FHIR-44047` is FHIR-core and directly tied to this page's commit.
- Jira FTS for `"data types" datatype` did not surface a better page-specific rationale than the explicit `FHIR-25431` commit. Hits included unrelated datatype issues such as `FHIR-55680`, `FHIR-24958`, and older datatype design issues.

### Context-only Jira hits not driving action

- Jira FTS for `"EHR System Functional Model"` returned older/contextual issues including `FHIR-15130` (`Typo: IDO/HL7 10781 EHR System Functional Model`), `FHIR-10409`, `FHIR-10408`, and `FHIR-6303`. These do not explain the R4 -> R6 page diff and were not elevated.
- Jira FTS for `"ehr-fm"` returned older ballot/context issues such as `FHIR-5396`, `FHIR-5407`, `FHIR-11142`, `FHIR-11144`, `FHIR-11145`, and `FHIR-15130`, plus `FHIR-49462` in the separate PHR spec. None matched the changed R4 -> R6 text.

## Zulip evidence

- Explicit key searches:
  - `bun run zulip:search fts "\"FHIR-25431\"" --limit 20` -> no results.
  - `bun run zulip:search fts "\"FHIR-44047\"" --limit 20` -> no results.
- Topic/page searches:
  - `bun run zulip:search fts "\"EHR System Functional Model\"" --limit 20` returned context-only threads in `#terminology`, `#patient empowerment`, `#workflow`, and a 2018 tracker bot message for `FHIR-15130`; none were tied to the R4 -> R6 edits.
  - `bun run zulip:search fts "\"ehr-fm\"" --limit 20` returned EHR product-family/publishing discussions in 2024/2025 and a 2016 commit notification; none were tied to the page changes reviewed here.
- No Zulip snapshot was taken because no Zulip search result provided rationale, objection, later reassessment, or direct linkage for the changed lines.

## Confluence evidence

- `FHIR-25431`
  - `bun run confluence:search refs jira FHIR-25431` and `bun run confluence:search fts "FHIR-25431" --limit 20` both found page 66940491.
  - Snapshot command: `bun run confluence:search snapshot 66940491`
  - Page: `FHIR Infrastructure Minutes CC 20200113`, https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113
  - Relevant text in snapshot: under tracker items, `jira:FHIR-25431 Lloyd: Using "data type" Will auto approve`.
  - Interpretation caveat: that phrase is not enough by itself to prove the final implementation should have used spaced `data type`; the later source commit explicitly tied to `FHIR-25431` standardizes this page to `datatypes`, and current `source/datatypes.html:3`/`:15` uses title `Datatypes`.

- `FHIR-44047`
  - `bun run confluence:search refs jira FHIR-44047` and `bun run confluence:search fts "FHIR-44047" --limit 20` both found page 234784975.
  - Snapshot command: `bun run confluence:search snapshot 234784975`
  - Page: `FHIR Infrastructure Minutes WGM 202405 - Dallas`, https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas
  - Relevant text in snapshot: `jira:FHIR-44048 will fix jira:FHIR-43942 will apply jira:FHIR-44047 will fix jira:FHIR-43488 Josh Mandel / Corey Spears: 11-0-0`.
  - This supports the `e.g.,` punctuation cleanup as a FHIR-I-approved broad fix.

- Topic search:
  - `bun run confluence:search fts "\"EHR System Functional Model\"" --limit 20` returned many EHR/ARB/public-health minutes that mention the EHR-S FM generally. These were context-only and did not discuss the R4 -> R6 changed text.

## Timeline

| Date | Event type | Evidence | Notes |
|---|---|---|---|
| 2020-01-09 | Jira created | `FHIR-25431` | Datatype/data type consistency issue created against FHIR-core R4 |
| 2020-01-13 | Workgroup minutes | Confluence page 66940491 | FHIR-I tracker discussion includes `FHIR-25431` |
| 2021-06-27 | Source commit | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Template wrapper cleanup on this page |
| 2021-06-26 | PR merge | PR 1295 | GitHub reports merge before local commit date because of timezone |
| 2021-10-27 | Jira resolved | `FHIR-25431` | Snapshot says resolved/published, applied for R5 |
| 2022-08-31 | Source commit | `8592e1207273b786db340efb927bb6d1dc9756c9` | Applies datatype spelling normalization to this page and 58 others |
| 2022-09-01 | PR merge | PR 2312 | Associated GitHub PR for `FHIR-25431` commit |
| 2024-01-22 | Jira created | `FHIR-44047` | R6 ballot comment for `e.g.,` / `i.e.,` punctuation |
| 2024-05-23 | Jira resolved/voted | `FHIR-44047`; Confluence page 234784975 | Jira resolved `Persuasive`; FHIR-I WGM minutes say `will fix` |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | R6 status/metadata row update |
| 2025-11-02 | PR merge | PR 3901 | Associated GitHub PR for R6 status/metadata row update |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Applies `FHIR-44047` punctuation edits to this page |
| 2025-11-06 | PR merge | PR 3951 | Associated GitHub PR for `FHIR-44047` commit |
| R6 ballot4 boundary | Publication/source boundary | New commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` | Reviewed current page at this source tree |

## Evidence log

- Confirmed both old and new source files exist:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/ehr-fm.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/ehr-fm.html" && echo "new exists"`
- Direct diff:
  - `git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26" "5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/ehr-fm.html"`
  - Established only wrapper/template, metadata row, spelling, and punctuation changes.
- Source history:
  - `git ... log --reverse --date=short --format='%H%x09%ad%x09%s' "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/ehr-fm.html"`
  - `git ... show --stat --patch <commit> -- "source/ehr-fm.html"` for the four touching commits.
  - Established explicit Jira keys `FHIR-25431` and `FHIR-44047`.
- GitHub PR lookup:
  - `gh api -H "Accept: application/vnd.github+json" "/repos/HL7/fhir/commits/<sha>/pulls" --jq '.[] | {number, title, url: .html_url, state, merged_at}'`
  - Found PRs 1295, 2312, 3901, and 3951.
- Full current page read:
  - `wc -l ".../source/ehr-fm.html"` -> 159 lines.
  - Read `/source/ehr-fm.html:1-159` with the file viewer.
  - Established current context and noticed the stale line 97 conformance-resource wording.
- Jira:
  - `bun run jira:search snapshot FHIR-25431`
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search fts "\"EHR System Functional Model\"" --limit 10`
  - `bun run jira:search fts "\"data types\" datatype" --limit 10`
  - `bun run jira:search fts "\"e.g.\" comma" --limit 10`
  - `bun run jira:search fts "\"ehr-fm\"" --limit 10`
  - Initial unquoted `ehr-fm` failed with `SQLiteError: no such column: fm`; quoted retry succeeded.
- Zulip:
  - `bun run zulip:search fts "\"FHIR-25431\"" --limit 20` -> no results.
  - `bun run zulip:search fts "\"FHIR-44047\"" --limit 20` -> no results.
  - `bun run zulip:search fts "\"EHR System Functional Model\"" --limit 20` -> context-only hits.
  - `bun run zulip:search fts "\"ehr-fm\"" --limit 20` -> context-only hits.
  - Initial unquoted Jira-key and `ehr-fm` searches failed because of hyphen parsing; quoted retries are the material searches.
- Confluence:
  - `bun run confluence:search refs jira FHIR-25431`
  - `bun run confluence:search refs jira FHIR-44047`
  - `bun run confluence:search fts "FHIR-25431" --limit 20`
  - `bun run confluence:search fts "FHIR-44047" --limit 20`
  - `bun run confluence:search snapshot 66940491`
  - `bun run confluence:search snapshot 234784975`
  - `bun run confluence:search fts "\"EHR System Functional Model\"" --limit 20`
- Current-page consistency checks:
  - `rg "Resource Profile|Conformance Statement|CapabilityStatement|StructureDefinition" ".../source/ehr-fm.html"`
  - `rg "CapabilityStatement|StructureDefinition" ".../source/resourcelist.html"`
  - Established that current line 97 uses obsolete names while current R6 resource list names `CapabilityStatement` and `StructureDefinition`.

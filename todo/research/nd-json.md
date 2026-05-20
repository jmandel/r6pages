# nd-json research appendix

## Scope and coverage
- **Page path:** `source/nd-json.html`; **label:** `nd-json`.
- **Old version:** R4 4.0.1 at `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`; tree `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- **New version:** R6 ballot4 6.0.0-ballot4 at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`; tree `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- **Boundary:** `test -f` confirmed `source/nd-json.html` exists in both version trees; the page is modified, not added/deleted/renamed.
- **End-to-end read:** yes. The full newer source page was read (`source/nd-json.html` lines 1-49), as was the R4 page (`lines 1-48`).
- **History coverage:** 6 commits touched this page between the old and new commits.
- **Explicit Jira keys in page commits:** `FHIR-22656`, `FHIR-31425`, `FHIR-26598`. No Jira key appeared in the R6 normative-status commit.
- **Community searches performed:** Jira snapshots and FTS/SQL searches for explicit keys, `NDJSON`, `nd-json`, `application/fhir+ndjson`, `single type ndjson`, normative/status terms, related pages/URLs, and exact changed phrases; Zulip FTS/SQL/snapshots for explicit keys, page terms, MIME/status topics, and changed phrases; Confluence `refs jira`, FTS, SQL, and snapshots for the same keys/terms.
- **Caveats:** hyphenated FTS searches such as `nd-json` and unquoted Jira keys failed in Jira/Zulip/Confluence because FTS parsed `-` as an operator; corrected SQL `LIKE` searches were used. Confluence `normalized_text` was not a valid column; corrected to `plain_text`. PR searches by commit SHA can return branch-merge PRs; only PRs whose commit list/title matched the page commit are treated as relevant.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source line | R6 page status | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/nd-json.html:16-17` | Shows page title and `Normative` standards status. |
| Source line | R6 intro | `.cache/.../6.0.0-ballot4-5d67a34a13a5/source/nd-json.html:20-24` | Current intro says `NDJSON ... is a variant of the NDJSON format` and mandates CRLF-style wording. |
| Source line | R6 example | `.cache/.../6.0.0-ballot4-5d67a34a13a5/source/nd-json.html:27-35` | Shows corrected line-delimited example and MIME type. |
| Source line | R6 single-type rule | `.cache/.../6.0.0-ballot4-5d67a34a13a5/source/nd-json.html:38-43` | Contains the `SHALL only contain resources of a single type` requirement and async API statement. |
| Source line | R4 baseline | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/nd-json.html:16-40` | Baseline had `ND-JSON`, typo `ns-json`, Draft/FMM2, invalid wrapped example, descriptive single-type sentence. |
| Commit | Template cleanup | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removed old wrapper `<div>`; mechanical. |
| Commit | Apply FHIR-22656 | `779657b7b93248a50d7b855d908c0d5177a95b62` / https://github.com/HL7/fhir/commit/779657b7b93248a50d7b855d908c0d5177a95b62 | Fixed `ns-json` to `nd-json`. |
| PR | Apply FHIR-22656 | https://github.com/HL7/fhir/pull/1805 | Merged 2022-03-23; includes the typo-fix commit. |
| Commit | Apply FHIR-31425 | `5ff951a848f4c4e937ebbcd51442e9262f65ab7a` / https://github.com/HL7/fhir/commit/5ff951a848f4c4e937ebbcd51442e9262f65ab7a | Renamed to NDJSON, added spec link, added `SHALL`, changed example label. |
| PR | Misc PR containing FHIR-31425 | https://github.com/HL7/fhir/pull/2202 | Merged 2022-08-20; commit list includes `FHIR-31425 Corrections to ND-JSON page`. |
| Commit | Apply FHIR-26598 | `68fad5f12e1fcb13a116564726a3e99dec206360` / https://github.com/HL7/fhir/commit/68fad5f12e1fcb13a116564726a3e99dec206360 | Removed invalid outer braces from the NDJSON example. |
| PR | Misc PR containing FHIR-26598 | https://github.com/HL7/fhir/pull/2203 | Merged 2022-08-22; commit list includes `FHIR-26598 invalid ndjson sample`. |
| Commit | R5 ballot status tidy | `c3da43d4d906bc8ef71d67923be5e5db976665be` / https://github.com/HL7/fhir/commit/c3da43d4d906bc8ef71d67923be5e5db976665be | Raised FMM 2 to FMM 4 while keeping Draft. |
| PR | R5 ballot prep | https://github.com/HL7/fhir/pull/2400 | Merged 2022-09-07; contains status-code tidy commit. |
| Commit | R6 normative changes | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changed page table to `Normative` and removed FMM column. |
| PR | R6 normative PR | https://github.com/HL7/fhir/pull/3901 | Merged 2025-11-02; commit list includes `normative changes for R6`. |
| Jira | FHIR-22656 | https://jira.hl7.org/browse/FHIR-22656; local: `bun run jira:search snapshot FHIR-22656` | Formal typo fix for `ns-json` to `nd-json`; applied for R5. |
| Jira | FHIR-31425 | https://jira.hl7.org/browse/FHIR-31425; local: `bun run jira:search snapshot FHIR-31425` | Direct source of NDJSON naming, external spec link, RFC2119 `SHALL`, and example changes. |
| Jira | FHIR-26598 | https://jira.hl7.org/browse/FHIR-26598; local: `bun run jira:search snapshot FHIR-26598` | Direct source for correcting the invalid wrapped NDJSON sample. |
| Jira | FHIR-22625 | https://jira.hl7.org/browse/FHIR-22625; local: `bun run jira:search snapshot FHIR-22625` | Same `ns-json` typo on the page; context for FHIR-22656. |
| Jira | FHIR-16500 | https://jira.hl7.org/browse/FHIR-16500; local: `bun run jira:search snapshot FHIR-16500` | Older MIME/status issue: changed to `application/fhir+ndjson` and said the page should not be normative at that time. |
| Zulip | Bulk data `application/fhir+ndjson` | https://chat.fhir.org/#narrow/stream/bulk%20data/topic/application%2Ffhir%2Bndjson; local: `bun run zulip:search snapshot 'bulk data' 'application/fhir+ndjson'` | 2020 discussion noticed `ns-json`, invalid wrapper, and missing link to the NDJSON spec; led to FHIR-26598. |
| Zulip | FHIR-I `Status of ND-JSON` | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Status%20of%20ND-JSON; local: `bun run zulip:search snapshot 'fhir/infrastructure-wg' 'Status of ND-JSON'` | 2022 discussion: documentation page said normative, NDJSON page said Draft; conclusion was Trial Use/FMM4. |
| Zulip | Bulk data `Mime Type` | https://chat.fhir.org/#narrow/stream/bulk%20data/topic/Mime%20Type; local: `bun run zulip:search snapshot 'bulk data' 'Mime Type'` | 2018 context for `application/fhir+ndjson` and non-normative status. |
| Zulip | Subscription Block Vote 3 | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Subscription%20Block%20Vote%203 | Mentions `FHIR#31425` only in a subscription block-vote list; not evidence for this page change. |
| Confluence | FHIR-I 2020-05-11 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/82910485/FHIR+Infrastructure+Minutes+CC+20200511; local: `bun run confluence:search snapshot 82910485` | Records `FHIR-26598` persuasive, 9-0-0, will fix in R4. |
| Confluence | FHIR-I 2021-05-31 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/113676821/FHIR+Infrastructure+Minutes+CC+20210531; local: `bun run confluence:search snapshot 113676821` | Records `FHIR-31425 - Persuasive`. |
| Confluence | FHIR-I 2025-09 WGM minutes | https://confluence.hl7.org/spaces/FHIRI/pages/358879917/FHIR+Infrastructure+Minutes+WGM+202509+-+Pittsburgh | Excerpt says `JSON, NDJSON (already normative)` shortly before R6 normative source commit. |
| External spec | NDJSON spec | https://github.com/ndjson/ndjson-spec/blob/master/README.md | Section 3.1/3.2 says LF is required and CR before LF is optional/accepted; useful cross-check for FHIR wording. |

## Change summary

### Naming, title, and external reference — editorial/terminology
- R4 title/header used `ND-JSON`; R6 uses `NDJSON` (`source/nd-json.html:3,16`).
- R4 intro had the typo `ns-json`; R6 uses `NDJSON` and links to `https://github.com/ndjson/ndjson-spec` (`lines 20-22`).
- Evidence: `FHIR-22656`/`FHIR-22625` for the typo; `FHIR-31425` for consistent `NDJSON` naming and adding the external spec reference.
- Caveat/actionable defect: the implementation changed `is a variant of the JSON format` to `is a variant of the NDJSON format`, creating a self-referential sentence not requested by FHIR-31425.

### Example format — example change/correction
- R4 showed an invalid example wrapped in an outer JSON object (`{ ... }`). R6 shows two top-level JSON texts, one per line (`lines 30-33`).
- Evidence: `FHIR-26598` description exactly reports the extra wrapper as wrong; `FHIR-31425` also requested the amended example.
- The applied correction matches the intended example structure. The Jira resolution said label it `NDJSON example`; the source says only `Example:`. That is minor compared with the actual corrected sample.

### Single resource-type requirement — substantive/normative conformance wording
- R4: `each nd-json document contains only resources of a single type`.
- R6: `each NDJSON document SHALL  only contain resources of a single type` (`line 39`).
- Evidence: `FHIR-31425` explicitly requested an RFC 2119 keyword; resolution specified `SHALL only contain resources of a single type`.
- This formalizes an existing sentence as a hard requirement. It is substantive in conformance effect even though Jira marked impact non-substantive/clarification.

### REST/async statement — editorial only
- The RESTful API sentence is unchanged except capitalization from `nd-json` to `NDJSON` (`lines 42-43`).
- No search/operation semantics changed in this page diff.

### MIME type — unchanged in this diff; historical context only
- R4 and R6 both say `application/fhir+ndjson` (`line 35`).
- `FHIR-16500` and the 2018 Zulip MIME thread explain earlier resolution from `application/x-ndjson`/status confusion to `application/fhir+ndjson`, but that change predates the R4 baseline and should not be treated as an R4-to-R6 action.

### Standards metadata/status — standards-status change/process metadata, potentially substantive
- R4 page had table class `colsd`, FMM 2, Standards Status Draft.
- 2022 commit changed FMM 2 to FMM 4 while keeping Draft, consistent with the 2022 Zulip `Status of ND-JSON` thread saying Trial Use/FMM4.
- 2025 commit changed table class to `colsn`, removed FMM column, and set Standards Status Normative. Confluence WGM 2025 minutes say `JSON, NDJSON (already normative)`, but the page-specific commit has no Jira key.

### Template/navigation/churn — mechanical/noise
- Removed the old `<div class="col-12">` wrapper in a template update.
- Extra blank lines and table class changes are primarily template/status rendering changes.

## Source history

| Date | Commit | Subject | Page effect | Evidence classification |
|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | `update html template` | Removed `<div class="col-12">` wrapper and closing tag. | Mechanical/template. |
| 2022-03-22 | `779657b7b93248a50d7b855d908c0d5177a95b62` | `Apply FHIR-22656` | Changed `ns-json` to `nd-json`. | Editorial typo fix; PR #1805; Jira FHIR-22656. |
| 2022-08-20 | `5ff951a848f4c4e937ebbcd51442e9262f65ab7a` | `FHIR-31425 Corrections to ND-JSON page` | Renamed to NDJSON, added ndjson spec link, added `Example:`, changed single-type sentence to `SHALL`. Also introduced `variant of the NDJSON format`. | Mixed editorial + normative conformance wording; PR #2202; Jira FHIR-31425. |
| 2022-08-21 | `68fad5f12e1fcb13a116564726a3e99dec206360` | `FHIR-26598 invalid ndjson sample` | Removed invalid outer braces from example. | Example correction; PR #2203; Jira FHIR-26598. |
| 2022-09-05 | `c3da43d4d906bc8ef71d67923be5e5db976665be` | `tidy up status codes on pages, and set version for ballot` | Changed FMM 2 to FMM 4, status still Draft. | Standards metadata; PR #2400; aligns with 2022 Zulip status thread. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | `normative changes for R6` | Changed status table to `Responsible Owner`, removed FMM, and made Standards Status `Normative`. | Standards metadata/normative promotion; PR #3901; no explicit page Jira key found. |

## Jira evidence

### Explicit Jira keys from commits/patches
- **FHIR-22656 — `nd-json called ns-json on page`**: Technical Correction, Published, Persuasive, created 2019-06-04, resolved 2019-07-29, applied for R5. Description identifies the opening typo and resolution says `Change to nd-json`. Commit `779657b...` applies it; Jira comment points to commit `e2e378...`, likely the same change after history/branch mapping.
- **FHIR-31425 — `Corrections to ND-JSON page`**: Change Request, Published, Persuasive, created 2021-03-08, vote 2021-05-31 (4-0-0), applied for R5. Requested: link to NDJSON spec, consistently use `NDJSON`, add RFC 2119 keyword to single-type sentence, and fix/label example. Commit `5ff951...` implements most of this, including the `SHALL` requirement.
- **FHIR-26598 — `invalid ndjson sample`**: Change Request, Published, Persuasive, created 2020-03-17, vote 2020-05-11 (9-0-0), applied for R5. Description shows the outer-wrapped example as wrong and supplies the desired two-line example. Commit `68fad5...` implements it.

### Other Jira issues plausibly explaining same changed text
- **FHIR-22625 — `Should ns-json be nd-json?`**: Same typo on `FHIR-core-nd-json`, Published/Persuasive, created 2019-05-29. Context for the FHIR-22656 typo fix, but not cited in the page commit.
- **FHIR-16500 — `Resolve MIME type issue`**: Earlier STU3 issue on this page's MIME type/status. Resolution changed text to `application/fhir+ndjson` and said the page should not be normative at that time. It predates the R4 baseline but is relevant background for the later R6 normative-status change.

### Context-only Jira hits that should not drive action
- `NDJSON`/`single type ndjson` searches also found Bulk Data and IG issues such as `FHIR-47468`, `FHIR-42612`, `FHIR-38075`, `FHIR-53513`, and others. They concern Bulk Data, output formats, IG-specific operations, or later implementation questions rather than this core `source/nd-json.html` page change.
- Exact phrase searches for `variant NDJSON format` and `newline pair characters 13 10` found no Jira issue explaining those current-page wording problems.

## Zulip evidence

- **#bulk data > application/fhir+ndjson (2020-03-17)**: Lee Surprenant noticed the page typo `ns-json`, the invalid outer `{ }` example wrapper, and asked for confirmation. Dan Gottlieb confirmed the example would not comply with the NDJSON spec; Lee opened `FHIR-26598`; Grahame said the wrapper was a copy/paste error. This is strong rationale for the example correction and supports the need for the external spec link.
- **#bulk data > Mime Type (2018-06-13)**: Grahame noted the page used `application/x-ndjson`, a ballot comment suggested an FHIR-specific MIME type, and he planned to make the page non-normative because its normative-candidate status was a mistake. Dan Gottlieb pointed to Bulk Data use of `application/fhir+ndjson`. This supports `FHIR-16500` as status/MIME background only.
- **#fhir/infrastructure-wg > Status of ND-JSON (2022-09-04)**: Grahame observed that `documentation.html` said nd-json was normative while the NDJSON page was Draft, then said FHIR-I should label nd-json Trial Use; Josh Mandel agreed; Grahame added FMM=4. This matches the 2022 FMM4/Draft commit, not the later R6 Normative commit.
- **#fhir/infrastructure-wg > Subscription Block Vote 3 (2021-07/08)**: Search for `FHIR-31425` hit only a subscription-related block-vote list where `FHIR#31425` is a different subscription issue context (`Relation to R5 changes`). It should not be used to infer intent for the NDJSON page.

## Confluence evidence

- **FHIR Infrastructure Minutes CC 20200511**: lists `jira:FHIR-26598 Correction, will fix in R4 Persuasive Motion: Rick Geimer/Bas van den Heuvel: 9-0-0`. This supports formal approval for the sample correction.
- **FHIR Infrastructure Minutes CC 20210531**: lists `jira:FHIR-31425 - Persuasive`. This supports formal approval for the naming/link/SHALL/example corrections.
- **FHIR Infrastructure Minutes WGM 202509 - Pittsburgh**: source excerpt says `JSON, NDJSON (already normative)` in a review of what goes normative. This supports, but does not fully explain, the later R6 source commit that changed the page status to Normative.
- Confluence `refs jira FHIR-22656` and `refs jira FHIR-16500` found no direct references. Broader NDJSON/Confluence hits were mostly connectathon/IG/background pages and not page-change rationale.

## Timeline

| Date | Event type | Evidence | Notes |
|---|---|---|---|
| 2018-05-07 | Jira created | `FHIR-16500` | MIME/status issue for this page. |
| 2018-06-13 | Zulip discussion | `#bulk data > Mime Type` | Discussed `application/fhir+ndjson` and making the page non-normative. |
| 2018-07-10 / 2019-01-07 | Vote/resolution | `FHIR-16500` | Vote date 2018-07-10; Jira resolved 2019-01-07; applied before R4 baseline. |
| 2019-05-29 / 2019-06-04 | Jira created | `FHIR-22625`, `FHIR-22656` | Both reported the `ns-json` typo. |
| 2019-07-29 | Jira resolved | `FHIR-22625`, `FHIR-22656` | Typo fixes marked persuasive/published. |
| 2020-03-17 | Zulip + Jira created | `#bulk data > application/fhir+ndjson`, `FHIR-26598` | Invalid example wrapper noticed and Jira filed. |
| 2020-05-11 | WG vote | FHIR-I minutes page `82910485`, `FHIR-26598` | Persuasive, 9-0-0. |
| 2021-03-08 | Jira created | `FHIR-31425` | Requests NDJSON naming/link, RFC2119 keyword, example label/fix. |
| 2021-05-31 | WG vote/Jira resolved | FHIR-I minutes page `113676821`, `FHIR-31425` | Persuasive; Jira vote 4-0-0. |
| 2022-03-22 / 2022-03-23 | Source commit / PR merge | `779657b...`, PR #1805 | Applies FHIR-22656 typo fix. |
| 2022-08-20 | Source commit / PR merge | `5ff951...`, PR #2202 | Applies FHIR-31425 corrections; introduces self-referential `variant of the NDJSON format`. |
| 2022-08-21 / 2022-08-22 | Source commit / PR merge | `68fad5...`, PR #2203 | Applies FHIR-26598 sample correction. |
| 2022-09-04 | Zulip reassessment | `#fhir/infrastructure-wg > Status of ND-JSON` | FHIR-I should label Trial Use/FMM4. |
| 2022-09-05 / 2022-09-07 | Source commit / PR merge | `c3da43...`, PR #2400 | FMM raised to 4; page remains Draft. |
| 2025-09-29 | Confluence minutes updated | FHIR-I WGM 202509 page `358879917` | Minutes say `JSON, NDJSON (already normative)`. |
| 2025-10-31 / 2025-11-02 | Source commit / PR merge | `270e0c...`, PR #3901 | R6 normative commit makes page status Normative. |

## Evidence log

- `test -f` in both source trees: established page boundary and confirmed expected present-in-both status.
- `git diff --find-renames old new -- source/nd-json.html`: established the 15-insertion/14-deletion direct diff and separated content from template/status changes.
- `git log --reverse --date=short ... -- source/nd-json.html`: found 6 page-touching commits and 3 explicit Jira keys.
- `git show --stat --patch <commit> -- source/nd-json.html`: confirmed each cited commit actually changed `source/nd-json.html`.
- `git log -S 'variant of the NDJSON format'` and `git log -G 'NDJSON|SHALL|application/fhir\+ndjson|new line'`: tied the self-referential intro and `SHALL` wording to commit `5ff951...`.
- `bun run jira:search snapshot FHIR-22656 FHIR-31425 FHIR-26598 FHIR-22625 FHIR-16500`: read full formal issue context and resolutions.
- Jira FTS/SQL searches for `NDJSON`, `application fhir ndjson`, `single type ndjson`, related URLs/pages, normative/status terms, `variant NDJSON format`, and `newline pair characters 13 10`: found direct/context issues and no formal issue for two current wording defects.
- Zulip FTS/SQL plus snapshots of `bulk data/application/fhir+ndjson`, `bulk data/Mime Type`, `fhir/infrastructure-wg/Status of ND-JSON`, and `fhir/infrastructure-wg/Subscription Block Vote 3`: separated direct rationale from context-only hits.
- Confluence `refs jira` and snapshots for pages `82910485`, `113676821`, plus SQL excerpt from `358879917`: confirmed formal minutes for FHIR-26598/FHIR-31425 and later normative-status context.
- `gh pr list/view` by commit SHA: located relevant PRs #1805, #2202, #2203, #2400, and #3901. Some branch-merge PRs also matched SHA searches and were not used as direct evidence.
- `web_fetch https://raw.githubusercontent.com/ndjson/ndjson-spec/master/README.md`: checked the linked NDJSON spec; section 3.1/3.2 says LF is required and CRLF accepted, which conflicts with the FHIR page's `newline pair (characters 13 and 10)` wording.

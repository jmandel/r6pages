# overview research appendix

## Scope and coverage

- Page path: `source/overview.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Page boundary: present in both source trees.
- Full newer page read end-to-end: yes, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview.html:1-183`.
- Direct diff size: 20 changed lines, 9 insertions and 11 deletions.
- Source-history commits touching this page in range: 6.
- Explicit Jira keys found in commit subjects: `FHIR-18448`, `FHIR-25431`.
- Methodology docs read: `SKILL.md`, `jira/README.md`, `zulip/README.md`, `confluence/README.md`, `spec/README.md`.
- Jira/Zulip/Confluence searches performed for explicit keys and distinctive changed phrases. No Zulip thread was found for either explicit key; Confluence had one FHIR-I minutes page for `FHIR-25431`.
- Caveat: several commits are broad mechanical/template/QA commits. The only source-history keys are non-substantive Jira issues, and no source-history evidence points to a normative or conformance behavior change on this page.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New overview page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview.html:1-183` | Current page reviewed end-to-end. |
| Source | Metadata header | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview.html:15-18` | Shows R6 wording "Responsible Owner" and no maturity cell. |
| Source | Components link taxonomy | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview.html:55-60` | "define" now points to `formats.html`; "represent" now points to `resource-formats.html`. |
| Source | Where-to-start links | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview.html:103-115` | Contains the current `Resource Definitions` and `Formats` getting-started links. |
| Source | Resource Definitions page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/formats.html:1-19` | `formats.html` is titled "Resource Definitions" and describes how resource content is documented. |
| Source | Resource Formats page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resource-formats.html:5-38` | `resource-formats.html` is titled "Resource Formats" and covers serialization formats. |
| Commit | Template wrapper removal | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Broad HTML template update removing the outer `col-12` wrapper. |
| PR | Template wrapper PR | https://github.com/HL7/fhir/pull/1295 | `gh pr list` by commit SHA found this as the merged PR for the template update. |
| Commit | `FHIR-18448` formats split/link cleanup | `fb6236f76aef7e34c5874572f098f3a646dcc983`, https://github.com/HL7/fhir/commit/fb6236f76aef7e34c5874572f098f3a646dcc983 | Page-specific link changes; also created `source/resource-formats.html`. |
| PR | Likely original PR for `FHIR-18448` commit | https://github.com/HL7/fhir/pull/2202 | `gh pr list` by SHA found this merged PR; a later branch-update PR also contained the commit. |
| Jira | `FHIR-18448` | https://jira.hl7.org/browse/FHIR-18448; reopen with `bun run jira:search snapshot FHIR-18448` | Formal issue for moving syntax-comparison material and adding a Resource Formats page/tab; non-substantive. |
| Commit | `FHIR-25431` datatype wording | `8592e1207273b786db340efb927bb6d1dc9756c9`, https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9 | Standardized `data type(s)` wording to `datatype(s)` on this page. |
| PR | Likely original PR for `FHIR-25431` commit | https://github.com/HL7/fhir/pull/2312 | `gh pr list` by SHA found this merged PR; a later rebase PR also contained the commit. |
| Jira | `FHIR-25431` | https://jira.hl7.org/browse/FHIR-25431; reopen with `bun run jira:search snapshot FHIR-25431` | Formal issue about inconsistent "datatype" vs "data type" wording; technical correction. |
| Confluence | FHIR-I minutes for `FHIR-25431` | Page `66940491`, https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113; reopen with `bun run confluence:search snapshot 66940491` | Meeting record mentions `FHIR-25431` and the spelling discussion. |
| Commit | QA spelling/capitalization | `dad7cf37c75822c352509e1c2e8d050408d0be18`, https://github.com/HL7/fhir/commit/dad7cf37c75822c352509e1c2e8d050408d0be18 | Broad QA commit changing `HL7 v2` to `HL7 V2`; briefly introduced double periods. |
| Commit | QA punctuation follow-up | `9f780149387dc652bec02aa7744e52774acddbc9`, https://github.com/HL7/fhir/commit/9f780149387dc652bec02aa7744e52774acddbc9 | Broad QA commit that fixed the double periods from the prior QA commit. |
| PR | QA commits PR | https://github.com/HL7/fhir/pull/2714 | Merged PR containing both 2023 QA commits. |
| Commit | R6 normative metadata update | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Broad R6 update replacing WG label with "Responsible Owner" and removing the maturity cell for this page. |
| PR | R6 normative PR | https://github.com/HL7/fhir/pull/3901 | `gh pr list` by SHA found this as the merged PR for the R6 normative commit. |

## Change summary

### Metadata/template/navigation

- The outer `<div class="col-12">` wrapper was removed by `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`; this is template churn, not page-specific content.
- The top classification table changed from "`FHIR` Work Group / Maturity Level: N/A / Standards Status: Informative" to "Responsible Owner: `FHIR` Work Group / Standards Status: Informative" in `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`. This is broad R6 metadata/template cleanup.
- `formats.html` and `resource-formats.html` links were adjusted in `fb6236f76aef7e34c5874572f098f3a646dcc983`:
  - `overview.html:58` now sends "define" to `formats.html` and "represent" to `resource-formats.html`.
  - `overview.html:112` now sends "Formats" to `resource-formats.html`.
  - This aligns the overview with the new separation between Resource Definitions (`formats.html`) and Resource Formats (`resource-formats.html`).

### Editorial only

- `HL7 v2` was changed to `HL7 V2` at `overview.html:38`, `overview.html:114`, and `overview.html:129` by broad QA commit `dad7cf37c75822c352509e1c2e8d050408d0be18`.
- `data types` was changed to `datatypes` at `overview.html:58`, `overview.html:86`, and `overview.html:127` by `FHIR-25431` commit `8592e1207273b786db340efb927bb6d1dc9756c9`.
- Two temporary double-period changes in `dad7cf37c75822c352509e1c2e8d050408d0be18` were corrected by `9f780149387dc652bec02aa7744e52774acddbc9`, leaving no net diff in those sentences.

### Substantive/normative, semantic guidance, examples, REST/search/operation semantics

- No substantive/normative requirements were added, removed, or changed on this page.
- No examples were changed.
- No REST, search, or operation semantics were changed.
- No meaningful section moves were found.

### Overlooked current-page issue noticed during review

- In `overview.html:110`, the link text "Resource Definitions" still points to `resource.html`. The current Resource Definitions page is `formats.html` (`formats.html:2`, `formats.html:13`, `formats.html:16-19`), and the same overview page now points "define" to `formats.html` at `overview.html:58`. This looks like a low-priority navigation/link consistency issue rather than an R4-to-R6 semantic change. It is carried into the action file as `E-001`.

## Source history

| Commit | Date | Subject | Page effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removes `<div class="col-12">` wrapper and closing `</div>`. | Mechanical/template |
| `fb6236f76aef7e34c5874572f098f3a646dcc983` | 2022-08-20 | `FHIR-18448 Comparisons not consistent - N-Infra #136` | Changes overview links from old resource/format targets to `formats.html` and `resource-formats.html`; commit also creates `source/resource-formats.html`. | Non-substantive navigation/content organization |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | Replaces three `data type(s)` instances with `datatype(s)`. | Editorial terminology consistency |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | `QA related changes` | Changes three `HL7 v2` instances to `HL7 V2`; briefly changes `etc.` to `etc..` in two sentences. | Broad QA/editorial |
| `9f780149387dc652bec02aa7744e52774acddbc9` | 2023-02-21 | `more QA` | Reverts the two `etc..` artifacts back to `etc.`. | Broad QA/editorial cleanup |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Changes table label to "Responsible Owner" and removes "Maturity Level: N/A". | Broad R6 metadata/template |

## Jira evidence

### Explicit Jira keys from commits/patches

#### `FHIR-18448` - Comparisons not consistent - N-Infra #136

- Link: https://jira.hl7.org/browse/FHIR-18448
- Snapshot command: `bun run jira:search snapshot FHIR-18448`
- Status: Published; resolution: Persuasive; change impact: Non-substantive; applied for version: R5.
- Created: 2018-09-27; resolved/voted: 2019-04-22.
- Resolution: add a "Differences" tab after all formats, move the XML/JSON comparison into that section, add RDF guidance, and add links from each formats tab.
- Source connection: commit `fb6236f76aef7e34c5874572f098f3a646dcc983` changes overview links and creates `source/resource-formats.html`.
- Assessment: The overview changes are consistent with splitting definitional guidance (`formats.html`, titled "Resource Definitions") from serialization guidance (`resource-formats.html`, titled "Resource Formats"). No semantic or conformance issue found from this Jira evidence.

#### `FHIR-25431` - Inconsistent use of "datatype" vs. "data type"

- Link: https://jira.hl7.org/browse/FHIR-25431
- Snapshot command: `bun run jira:search snapshot FHIR-25431`
- Status: Published; resolution: Persuasive; type: Technical Correction; change category: Correction; applied for version: R5.
- Created: 2020-01-09; resolved: 2021-10-27.
- Description asks the editors to pick either "data type" or "datatype" and be consistent.
- Source connection: commit `8592e1207273b786db340efb927bb6d1dc9756c9` globally applies the one-word convention on this overview page.
- Confluence caveat: FHIR-I minutes page `66940491` records "Lloyd: Using \"data type\" Will auto approve". The final source implementation uses "datatype(s)" on this page. Because the Jira issue itself only requires consistency and the current FHIR page title is "Datatypes", this was treated as context rather than a high-signal action item.

### Other Jira searches

- `bun run jira:search fts '"Responsible Owner" "Maturity Level"' --limit 10`: no results.
- `bun run jira:search fts '"HL7 V2" overview' --limit 10`: found `FHIR-55626` and `FHIR-11070`, neither about this core overview page or the changed capitalization.
- `bun run jira:search fts '"resource-formats.html" overview' --limit 10`: no results.
- `bun run jira:search fts '"common way" define represent' --limit 10`: hits were unrelated IG issues, not this page.
- `bun run jira:search fts '"Differences between syntaxes"' --limit 10`: found `FHIR-18448`, confirming the formats-split issue.

### Context-only Jira hits not used for action

- `FHIR-55626` concerns FHIR-COW orientation material, not the FHIR core overview page.
- `FHIR-11070` concerns Consent category, not the FHIR core overview page.

## Zulip evidence

- `bun run zulip:search fts '"FHIR-18448"' --limit 20`: no results.
- `bun run zulip:search fts '"FHIR-25431"' --limit 20`: no results.
- `bun run zulip:search fts '"Differences between syntaxes"' --limit 20`: no results.
- `bun run zulip:search fts '"Resource Definitions" "Resource Formats"' --limit 10`: no results.
- `bun run zulip:search fts '"Responsible Owner" "Maturity Level"' --limit 10`: no results.
- `bun run zulip:search fts 'datatype "data type"' --limit 20`: returned many generic datatype/data-type discussions, mostly recent conformance and implementer topics; none were connected to `FHIR-25431` or this overview page.

Important search caveat: unquoted FTS searches for `FHIR-18448` and `FHIR-25431` failed because the hyphen was parsed as an FTS operator. The corrected quoted searches above found no relevant Zulip evidence.

## Confluence evidence

### `FHIR-25431`

- `bun run confluence:search refs jira FHIR-25431` found page `66940491`.
- Snapshot command: `bun run confluence:search snapshot 66940491`.
- Page: FHIR Infrastructure Minutes CC 20200113, https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113.
- Relevant text in the tracker-items section: `jira:FHIR-25431 Lloyd: Using "data type" Will auto approve`.
- Assessment: This supports that FHIR-I treated the issue as a spelling/consistency cleanup. The minute text appears different from the final one-word implementation, but the formal Jira issue is broad enough ("pick either") and the source now consistently uses the one-word convention on this page.

### `FHIR-18448`

- `bun run confluence:search refs jira FHIR-18448`: no references found.
- `bun run confluence:search fts FHIR-18448 --limit 10`: no results.

### Distinctive phrase searches

- `bun run confluence:search fts '"Resource Formats" overview' --limit 10`: returned Security WG pages using "resource formats" in a US Core/provenance context; not related to this overview page or `FHIR-18448`.
- `bun run confluence:search fts '"Responsible Owner" "Maturity Level"' --limit 10`: returned a 2026 Orders & Observations minutes page discussing responsible-owner display for a different module; context-only and later than the source commit.

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2018-09-27 | Jira created | `FHIR-18448` opened about inconsistent syntax comparison placement. |
| 2019-04-22 | Jira vote/resolution | `FHIR-18448` resolved Persuasive, Non-substantive, for R5. |
| 2020-01-09 | Jira created | `FHIR-25431` opened about inconsistent "datatype" vs "data type". |
| 2020-01-13 | Confluence minutes | FHIR-I minutes mention `FHIR-25431` in tracker discussion. |
| 2021-06-27 | Source commit | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` template wrapper change. |
| 2021-10-27 | Jira resolution | `FHIR-25431` resolved. |
| 2022-08-20 | Source commit | `fb6236f76aef7e34c5874572f098f3a646dcc983` applies `FHIR-18448` link/page-organization changes. |
| 2022-08-20 | PR merge | Likely original PR for `FHIR-18448` commit, `HL7/fhir#2202`, merged. |
| 2022-08-31 | Source commit | `8592e1207273b786db340efb927bb6d1dc9756c9` applies `FHIR-25431` datatype wording. |
| 2022-09-01 | PR merge | Likely original PR for `FHIR-25431` commit, `HL7/fhir#2312`, merged. |
| 2023-02-21 | Source commits/PR merge | Broad QA commits `dad7cf37...` and `9f780149...` merged in `HL7/fhir#2714`. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changes R6 metadata/table wording. |
| 2025-11-02 | PR merge | `HL7/fhir#3901` merged the R6 normative update containing the overview metadata change. |
| 2026-05-20 | Review | Current review compared R4 4.0.1 to R6 ballot4 source boundary and current page context. |

## Evidence log

- `test -f .../source/overview.html`: established old and new source files both exist.
- `wc -l`: old page has 185 lines; new page has 183 lines.
- `git diff --find-renames 0da2a0a... 5d67a34... -- source/overview.html`: established the exact R4-to-R6 diff and confirmed there are no normative/examples/REST/search/operation changes.
- `git log --reverse --date=short --format=... 0da2a0a.....5d67a34... -- source/overview.html`: found six page-touching commits.
- `git show --stat --patch <commit> -- source/overview.html`: inspected each page-touching patch and separated mechanical/editorial changes from link organization changes.
- `git blame -L ... -- source/overview.html`: mapped current changed lines to implementation commits.
- `gh pr list -R HL7/fhir --search <sha> --state all --json number,title,url,mergedAt`: found likely merged PRs for implementation commits; some results were branch-update or rebase PRs and are treated as secondary.
- `bun run jira:search snapshot FHIR-18448`: confirmed formal non-substantive rationale for syntax-comparison/resource-format organization.
- `bun run jira:search snapshot FHIR-25431`: confirmed formal technical-correction rationale for datatype/data-type consistency.
- `bun run jira:search fts '"Responsible Owner" "Maturity Level"' --limit 10`: no matching Jira rationale found for the metadata/table wording.
- `bun run jira:search fts '"HL7 V2" overview' --limit 10`: only unrelated context hits.
- `bun run jira:search fts '"resource-formats.html" overview' --limit 10`: no results.
- `bun run jira:search fts '"common way" define represent' --limit 10`: unrelated hits only.
- `bun run jira:search fts '"Differences between syntaxes"' --limit 10`: found `FHIR-18448`.
- `bun run zulip:search fts '"FHIR-18448"' --limit 20`, `bun run zulip:search fts '"FHIR-25431"' --limit 20`, and phrase searches: no relevant Zulip evidence.
- `bun run confluence:search refs jira FHIR-25431` and `bun run confluence:search snapshot 66940491`: found and read FHIR-I minutes mentioning `FHIR-25431`.
- `bun run confluence:search refs jira FHIR-18448` and `bun run confluence:search fts FHIR-18448 --limit 10`: no Confluence evidence for `FHIR-18448`.
- Read current neighboring pages `source/formats.html:1-80`, `source/resource-formats.html:1-80`, and `source/resource/resource-introduction.xml:1-80` to cross-check the current overview link targets.

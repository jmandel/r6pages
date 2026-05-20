# patterns research appendix

## Scope and coverage

- Page path: `source/patterns.html`.
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`.
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Page boundary: the page exists in both source trees.
- Newer page read end-to-end: yes, 106 lines, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/patterns.html:1-106`.
- Direct diff size: 17 changed lines, 12 insertions and 5 deletions.
- Source-history commits touching this page between the two commits: 5.
- Explicit Jira keys found in page history: `FHIR-44047`.
- Jira/Zulip/Confluence coverage: targeted searches for `FHIR-44047`, exact changed phrases, the patterns page label/path, `Types Framework Cross Reference`, and the visible leftover typo `higher cardinality that the pattern`.
- Important caveat: no broad, exhaustive keyword search was performed because the direct diff is nearly all metadata/template/navigation and editorial punctuation. A Zulip FTS search for unquoted `FHIR-44047` failed because the hyphen was parsed by SQLite FTS; a SQL `LIKE '%FHIR-44047%'` retry found no Zulip messages.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/patterns.html:1-99` | R4 baseline source |
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/patterns.html:1-106` | R6 ballot4 source under review |
| Source | New metadata/cross-reference block | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/patterns.html:13-24` | Shows changed owner/status row and added type-framework navigation |
| Source | Interface-pattern guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/patterns.html:67-79` | Contains the editorial punctuation fix and remaining typo |
| Commit | Template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removed the page wrapper `<div class="col-12">`; mechanical/template |
| PR | Template update PR | https://github.com/HL7/fhir/pull/1295 | PR containing `d7b8dadc...`, merged 2021-06-26 |
| Commit | R5 ballot page status/cross-reference | `c3da43d4d906bc8ef71d67923be5e5db976665be`, https://github.com/HL7/fhir/commit/c3da43d4d906bc8ef71d67923be5e5db976665be | Added the `Types Framework Cross Reference` block |
| PR | R5 ballot final PR | https://github.com/HL7/fhir/pull/2403 | PR containing `c3da43d...`, merged 2022-09-07 |
| Commit | QA editorial fix | `dad7cf37c75822c352509e1c2e8d050408d0be18`, https://github.com/HL7/fhir/commit/dad7cf37c75822c352509e1c2e8d050408d0be18 | Changed `a active` to `an active`; editorial |
| PR | QA PR | https://github.com/HL7/fhir/pull/2714 | PR containing `dad7cf...`, merged 2023-02-21 |
| Commit | R6 normative metadata change | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Added `Responsible Owner:` and removed `Maturity Level: N/A` from this informative page |
| PR | R6 normative PR | https://github.com/HL7/fhir/pull/3901 | PR containing `270e0c...`, merged 2025-11-02; PR body had no Jira key |
| Commit | `FHIR-44047` punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Changed `e.g. mapping` to `e.g., mapping` |
| PR | `FHIR-44047` PR | https://github.com/HL7/fhir/pull/3951 | PR body lists `FHIR-44047`; merged 2025-11-06 |
| Jira | `FHIR-44047` | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Formal tracker for adding commas after `e.g.`/`i.e.` |
| Confluence | FHIR-I WGM Dallas minutes | https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas; reopen with `bun run confluence:search snapshot 234784975` | Minutes include `FHIR-44047 will fix` among prior for-comment ballot issues |

## Change summary

### Metadata/template/navigation

- The R4 wrapper `<div class="col-12">` was removed by `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`. This is mechanical/template churn; no page-specific semantics changed.
- The page owner/status row changed from `FHIR Infrastructure Work Group` plus `Maturity Level: N/A` to `Responsible Owner: FHIR Infrastructure Work Group` with no FMM cell. This came from `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` (`normative changes for R6`). The standards status remains `Informative`.
- The page gained a `Types Framework Cross Reference` block linking Base Types, Datatypes, Resources, and the current Patterns page. This is reader navigation, not conformance guidance.

### Editorial only

- `a active : boolean` became `an active : boolean` in `dad7cf37c75822c352509e1c2e8d050408d0be18`.
- `e.g. mapping` became `e.g., mapping` in `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, matching `FHIR-44047`.
- A visible typo remains unchanged: `allow for a higher cardinality that the pattern` at new line 76. This appears to mean `than the pattern`; exact searches found no Jira/Zulip/Confluence discussion.

### Substantive/normative, semantic guidance, examples, REST/search/operation semantics

- No new or removed normative requirements were found.
- No examples changed.
- No REST, search, operation, terminology, anchor, or conformance semantics changed in this page diff.

## Source history

| Date | Commit | PR | Subject | Page-specific change | Classification |
|---|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | https://github.com/HL7/fhir/pull/1295 | `update html template` | Removed `<div class="col-12">` wrapper | Mechanical/template |
| 2022-09-05 | `c3da43d4d906bc8ef71d67923be5e5db976665be` | https://github.com/HL7/fhir/pull/2403 | `tidy up status codes on pages, and set version for ballot` | Added `Types Framework Cross Reference` links | Metadata/navigation |
| 2023-02-21 | `dad7cf37c75822c352509e1c2e8d050408d0be18` | https://github.com/HL7/fhir/pull/2714 | `QA related changes` | Changed `a active` to `an active` | Editorial |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | https://github.com/HL7/fhir/pull/3901 | `normative changes for R6` | Added `Responsible Owner:` and removed `Maturity Level: N/A` | Metadata/template |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | https://github.com/HL7/fhir/pull/3951 | `FHIR-44047` | Changed `e.g. mapping` to `e.g., mapping` | Editorial, Jira-backed |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-44047`: "Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout" (https://jira.hl7.org/browse/FHIR-44047).
  - Snapshot command: `bun run jira:search snapshot FHIR-44047`.
  - Created 2024-01-22; resolved 2024-05-23; status in the local snapshot is `Resolved - change required`; resolution is `Persuasive`.
  - Description requests correcting FHIR-core uses of `e.g.` and `i.e.` to `e.g.,` and `i.e.,`.
  - The commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` applies that punctuation style to this page at new line 77.

### Other Jira issues that plausibly explain changed text

- None found beyond `FHIR-44047`.
- `bun run jira:search fts '"Types Framework Cross Reference"' --limit 10` found no results.
- `bun run jira:search fts '"mapping a set of status codes to an active"' --limit 10` found no results.
- `bun run jira:search fts '"higher cardinality that the pattern"' --limit 10` found no results.

### Context-only Jira hits that should not drive action

- `bun run jira:search fts '"patterns.html" OR "Patterns Index"' --limit 10` returned broad/contextual hits such as `FHIR-44698` and non-core/IG issues. These were not used as evidence because the snippets did not match the direct changed phrases or this page's small metadata/editorial diff.

## Zulip evidence

- `bun run zulip:search fts '"mapping a set of status codes to an active"' --limit 20`: no results.
- `bun run zulip:search fts '"Types Framework Cross Reference"' --limit 20`: no results.
- `bun run zulip:search fts '"higher cardinality that the pattern"' --limit 10`: no results.
- `bun run zulip:search fts "FHIR-44047" --limit 20` failed because SQLite FTS parsed the hyphenated key as an expression. Retried with SQL:
  - `bun run zulip:search sql "SELECT id, stream_name, topic, sender_name, datetime(timestamp, 'unixepoch') AS sent_at, substr(content, 1, 240) AS excerpt FROM messages WHERE content LIKE '%FHIR-44047%' ORDER BY timestamp DESC LIMIT 20"`
  - Result: no messages.

## Confluence evidence

- `bun run confluence:search refs jira FHIR-44047` found one page:
  - Page ID `234784975`, "FHIR Infrastructure Minutes WGM 202405 - Dallas", https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas.
  - Snapshot command: `bun run confluence:search snapshot 234784975`.
  - The normalized text includes `jira:FHIR-44047 will fix` among "Issues from prior for-comment ballot".
- `bun run confluence:search fts 'FHIR-44047' --limit 20` found the same page.
- `bun run confluence:search fts '"Types Framework Cross Reference"' --limit 20`: no results.
- `bun run confluence:search fts '"higher cardinality that the pattern"' --limit 10`: no results.

## Timeline

| Date | Clock | Evidence | Note |
|---|---|---|---|
| 2021-06-26 | PR merge | https://github.com/HL7/fhir/pull/1295 | Template update PR containing the wrapper removal commit |
| 2021-06-27 | Source commit | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Removed `<div class="col-12">` from this page |
| 2022-09-05 | Source commit | `c3da43d4d906bc8ef71d67923be5e5db976665be` | Added type-framework cross-reference navigation |
| 2022-09-07 | PR merge | https://github.com/HL7/fhir/pull/2403 | R5 ballot final/status PR containing cross-reference addition |
| 2023-02-21 | Source commit and PR merge | `dad7cf37c75822c352509e1c2e8d050408d0be18`, https://github.com/HL7/fhir/pull/2714 | QA editorial article fix |
| 2024-01-22 | Jira created | `FHIR-44047` | Punctuation correction request raised for R6 |
| 2024-05-23 | Jira resolved/voted | `FHIR-44047` snapshot | Persuasive; "Should make a note to review this as we review content for R6" |
| 2024-05 WGM, updated 2024-06-24 | Confluence minutes | Page `234784975` | Lists `FHIR-44047 will fix` |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | R6 metadata/normative status cleanup for this page |
| 2025-11-02 | PR merge | https://github.com/HL7/fhir/pull/3901 | PR containing the metadata change; no Jira key in PR body |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Applies `FHIR-44047` punctuation to this page |
| 2025-11-06 | PR merge | https://github.com/HL7/fhir/pull/3951 | `FHIR-44047` PR merged |

## Evidence log

- `test -f .../4.0.1-0da2a0a84dc1/source/patterns.html && echo "old exists"`: confirmed old file exists.
- `test -f .../6.0.0-ballot4-5d67a34a13a5/source/patterns.html && echo "new exists"`: confirmed new file exists.
- `git -C .../6.0.0-ballot4-5d67a34a13a5 diff --find-renames --stat 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/patterns.html`: 17 changed lines, 12 insertions, 5 deletions.
- `git -C .../6.0.0-ballot4-5d67a34a13a5 diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/patterns.html`: established the exact diff.
- `git -C .../6.0.0-ballot4-5d67a34a13a5 log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/patterns.html`: found five page-touching commits.
- `git -C .../6.0.0-ballot4-5d67a34a13a5 show --stat --patch <commit> -- source/patterns.html`: inspected each of the five page-touching commits.
- `wc -l .../source/patterns.html`: new page has 106 lines; old page has 99 lines.
- `gh api /repos/HL7/fhir/commits/<sha>/pulls`: found PRs #1295, #2403, #2714, #3901, and #3951 for the five commits.
- `gh pr view 3951 --repo HL7/fhir --json number,title,url,state,mergedAt,body,author`: confirmed PR #3951 is `FHIR-44047` and merged 2025-11-06.
- `gh pr view 3901 --repo HL7/fhir --json number,title,url,state,mergedAt,body,author`: confirmed PR #3901 has no Jira key in its body.
- `bun run jira:search snapshot FHIR-44047`: confirmed the punctuation issue and formal disposition.
- `bun run jira:search fts '"mapping a set of status codes to an active"' --limit 10`: no results.
- `bun run jira:search fts '"patterns.html" OR "Patterns Index"' --limit 10`: broad/contextual results only; not relied upon.
- `bun run jira:search fts '"Types Framework Cross Reference"' --limit 10`: no results.
- `bun run jira:search fts '"higher cardinality that the pattern"' --limit 10`: no results.
- `bun run zulip:search fts '"mapping a set of status codes to an active"' --limit 20`: no results.
- `bun run zulip:search fts '"Types Framework Cross Reference"' --limit 20`: no results.
- `bun run zulip:search sql "SELECT ... FROM messages WHERE content LIKE '%FHIR-44047%' ..."`: no Zulip mentions.
- `bun run zulip:search fts '"higher cardinality that the pattern"' --limit 10`: no results.
- `bun run confluence:search refs jira FHIR-44047`: found page `234784975`.
- `bun run confluence:search snapshot 234784975`: confirmed FHIR-I minutes mention `FHIR-44047 will fix`.
- `bun run confluence:search fts '"Types Framework Cross Reference"' --limit 20`: no results.
- `bun run confluence:search fts '"higher cardinality that the pattern"' --limit 10`: no results.

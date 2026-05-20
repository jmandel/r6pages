# comparison research appendix

## Scope and coverage

- Page path: `source/comparison.html` (`comparison`), present in both trees.
- Old version/source: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/source: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Newer page read end-to-end: yes, 78 lines, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison.html:1-79`.
- Direct page-history commit count in range: 5 commits touched this page.
- Explicit Jira keys found in commits/patches/source comments: `FHIR-44047`.
- Jira/Zulip/Confluence searches were bounded to the explicit key, the page title/path, distinctive changed phrases, and one newly noticed grammar phrase. No source files were modified.
- Caveats: Confluence snapshot text is normalized into long paragraphs, so the exact vote grouping around `FHIR-44047` is not as clean as Jira/PR evidence. Zulip FTS initially errored on unquoted `FHIR-44047` because the hyphen was parsed as an operator; rerunning with `"FHIR-44047"` found no results.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/comparison.html:1-81` | Baseline R4 source page. |
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison.html:1-79` | Current R6 ballot4 page, read fully. |
| Source | Header metadata | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison.html:19-20` | Shows `Responsible Owner` and no `Maturity Level` cell after R6 metadata-template update. |
| Source | Navigation labels | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison.html:40-44` | Shows `HL7 V2` capitalization after QA update. |
| Source | FHIR-44047 applied text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison.html:55-59` | `e.g.` was changed to `e.g.,` in the non-HL7 standards note. |
| Source | Current grammar issue | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison.html:60-65` | Independent reader-facing wording defect: "there are chat.fhir.org streams exist". |
| Commit | Template wrapper removal | [`d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`](https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a) | Removed outer `<div class="col-12">`; mechanical template update. |
| Commit | QA label changes | [`dad7cf37c75822c352509e1c2e8d050408d0be18`](https://github.com/HL7/fhir/commit/dad7cf37c75822c352509e1c2e8d050408d0be18) | Changed `HL7 v2` to `HL7 V2`; also temporarily introduced `etc..`. |
| Commit | QA cleanup | [`9f780149387dc652bec02aa7744e52774acddbc9`](https://github.com/HL7/fhir/commit/9f780149387dc652bec02aa7744e52774acddbc9) | Corrected `etc..` back to `etc.`. |
| Commit | R6 metadata change | [`270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`](https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd) | Changed page classification table to `Responsible Owner` and removed FMM. |
| Commit | FHIR-44047 page patch | [`887bc2383fb7b429cfafd64a46bdfc0c40c5b627`](https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627) | Applies the `e.g.,` punctuation correction to this page. |
| PR | FHIR-44047 PR | [`HL7/fhir#3951`](https://github.com/HL7/fhir/pull/3951) | Merged 2025-11-06; body says `FHIR-44047`; includes commit `887bc238...`; merge commit `ac44d699...`. |
| Jira | FHIR-44047 | [`FHIR-44047`](https://jira.hl7.org/browse/FHIR-44047); reopen with `bun run jira:search snapshot FHIR-44047` | Formal technical correction requesting `e.g.,`/`i.e.,` punctuation throughout R6. |
| Confluence | FHIR-I WGM Dallas minutes | [`234784975`](https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas); reopen with `bun run confluence:search snapshot 234784975` | Minutes mention `FHIR-44047 will fix` during Thursday Q2 trackers. |
| Command | Direct diff | `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/comparison.html` | Reopens the full page diff. |

## Change summary

- **Mechanical/noise:** `d7b8dadc...` removed the surrounding `<div class="col-12">` wrapper and closing `</div>`. This is template churn, not page-specific guidance.
- **Metadata/template/navigation:** `270e0ceb...` changed the classification table from `Work Group + Maturity Level: N/A + Standards Status: Informative` to `Responsible Owner + Standards Status: Informative`. This affects page metadata display, not the comparison narrative.
- **Editorial only:** `dad7cf37...` changed visible `HL7 v2` labels to `HL7 V2` at the section list and final note. `9f780149...` fixed a transient typo (`etc..`) introduced in the same QA batch.
- **Editorial only, Jira-backed:** `887bc238...` changed `(e.g. the AuditEvent...)` to `(e.g., the AuditEvent...)`, matching `FHIR-44047` punctuation guidance.
- **Substantive/normative, semantic guidance, examples, REST/search/operation semantics:** none found in the direct diff. The page remains an informative appendix with unchanged narrative guidance.

## Source history

| Commit | Date | Subject | Page effect | Classification |
|---|---:|---|---|---|
| [`d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`](https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a) | 2021-06-27 | update html template | Removed `<div class="col-12">` wrapper and closing `</div>`. | Mechanical/template |
| [`dad7cf37c75822c352509e1c2e8d050408d0be18`](https://github.com/HL7/fhir/commit/dad7cf37c75822c352509e1c2e8d050408d0be18) | 2023-02-21 | QA related changes | `HL7 v2` -> `HL7 V2` in two visible labels; `etc.` briefly became `etc..`. | Editorial/QA |
| [`9f780149387dc652bec02aa7744e52774acddbc9`](https://github.com/HL7/fhir/commit/9f780149387dc652bec02aa7744e52774acddbc9) | 2023-02-21 | more QA | Fixed `CDA & CCDA etc..` back to `CDA & CCDA etc.`. | Editorial/QA cleanup |
| [`270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`](https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd) | 2025-10-31 | normative changes for R6 | Replaced workgroup/FMM/status table with responsible-owner/status table. | Metadata/template |
| [`887bc2383fb7b429cfafd64a46bdfc0c40c5b627`](https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627) | 2025-11-03 | FHIR-44047 | Changed `e.g.` to `e.g.,` in the non-HL7 standards note. | Editorial/Jira-backed |

Additional source/PR notes:

- `gh pr view 3951 --repo HL7/fhir` showed PR [`#3951`](https://github.com/HL7/fhir/pull/3951), title `FHIR-44047`, merged 2025-11-06, merge commit `ac44d699460cc94d75024d58d938509e6e590289`, with commit `887bc238...`.
- `git log --all --grep='FHIR-44047'` also found branch/merge history and another same-patch commit (`123305eef5d1caea343e1442530a7962d7f5c451`) outside the direct old->new page-history range. The direct range commit that matters for this page is `887bc238...`.

## Jira evidence

- **Explicit key:** `FHIR-44047` from commit `887bc238...`.
  - Snapshot command: `bun run jira:search snapshot FHIR-44047`.
  - Summary: "Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout".
  - Metadata: Technical Correction, FHIR-core, raised in R6, work group `fhir-i`, ballot `BALLOT-56530`, created 2024-01-22, resolved 2024-05-23, resolution `Persuasive`, status snapshot still `Resolved - change required`.
  - Description: says `e.g.,` and `i.e.,` should have commas and the correction is needed throughout the specification.
  - Resolution text: "Should make a note to review this as we review content for R6."
  - Comments: Jose Costa-Teixeira questioned whether comma use is always a style requirement; Jeff Brown reaffirmed the correction as proper English and clarified it was a FHIR R6 technical correction, not an IG-specific issue.
  - Fit to page: exact page patch `(e.g. the AuditEvent...)` -> `(e.g., the AuditEvent...)` is consistent with the Jira request.
- **Other plausible Jira searches:** none found that explain a semantic comparison-page change.
  - `bun run jira:search fts '"source/comparison.html"' --limit 10`: no results.
  - `bun run jira:search fts '"Relationship between FHIR and other HL7 Standards"' --limit 10`: no results.
  - `bun run jira:search fts '"HL7 V2" comparison' --limit 10`: returned unrelated/context-only issues (`FHIR-55626`, `FHIR-56729`, `FHIR-9839`), not this FHIR-core page.
  - `bun run jira:search fts '"AuditEvent" "DocumentReference" "e.g"' --limit 10`: returned unrelated resource/IG issues (`FHIR-30501`, `FHIR-54677`, `FHIR-10118`), not the page text.
- **Newly noticed grammar defect search:** `bun run jira:search fts '"there are" "streams exist"' --limit 10` and `bun run jira:search fts '"chat.fhir.org" "streams exist"' --limit 10` found no results.

## Zulip evidence

- `bun run zulip:search fts '"FHIR-44047"' --limit 20`: no results.
- `bun run zulip:search fts '"AuditEvent" "DocumentReference" "e.g"' --limit 20`: no results.
- `bun run zulip:search fts '"Relationship between FHIR and other HL7 Standards"' --limit 20`: no results.
- `bun run zulip:search fts 'comparison HL7 V2 CDA standards' --limit 20`: one context-only C-CDA Implementation-A-Thon message, not this page.
- `bun run zulip:search fts '"e.g.," "i.e.," FHIR' --limit 20`: many broad recent messages using such punctuation; none were about `FHIR-44047` or `source/comparison.html`.
- `bun run zulip:search fts '"streams exist" "chat.fhir.org"' --limit 10`: no results for the current grammar defect.

No Zulip rationale, objection, or later reassessment was found for this page.

## Confluence evidence

- `bun run confluence:search refs jira FHIR-44047` and `bun run confluence:search fts 'FHIR-44047' --limit 20` both found page `234784975`, **FHIR Infrastructure Minutes WGM 202405 - Dallas**.
- Snapshot command: `bun run confluence:search snapshot 234784975`.
- Page metadata: FHIRI minutes, updated 2024-06-24, URL `https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas`.
- Relevant normalized text around Thursday Q2 trackers includes: `Issues from prior for-comment ballot ... jira:FHIR-44048 will fix jira:FHIR-43942 will apply jira:FHIR-44047 will fix jira:FHIR-43488 ...`.
- Interpretation: Confluence supports that FHIR-I intended `FHIR-44047` to be fixed. It does not add page-specific language beyond the Jira resolution.
- Context-only Confluence search `bun run confluence:search fts '"AuditEvent" "DocumentReference" "e.g"' --limit 20` returned unrelated OO/Security minutes involving AuditEvent/DocumentReference/e.g. terms, not this comparison-page note.
- `bun run confluence:search fts '"Relationship between FHIR and other HL7 Standards"' --limit 20`: no results.
- `bun run confluence:search fts '"streams exist" "chat.fhir.org"' --limit 10`: no results for the grammar defect.

## Timeline

- **2013-12-28:** Historical page existed in source history; not part of this R4->R6 review except as long-lived page context.
- **2021-06-27:** Source commit `d7b8dadc...` removed the page wrapper as part of `update html template`.
- **2023-02-21:** Source commits `dad7cf37...` and `9f780149...` made QA/editorial label changes.
- **2024-01-22:** Jira `FHIR-44047` created for `e.g.,`/`i.e.,` punctuation throughout FHIR R6.
- **2024-05-23:** Jira `FHIR-44047` resolved as `Persuasive` with resolution text to review content for R6.
- **2024-05 WGM / updated 2024-06-24:** FHIR-I Dallas minutes (`234784975`) record `FHIR-44047 will fix`.
- **2025-10-31:** Source commit `270e0ceb...` changed page classification-table metadata for R6.
- **2025-11-03:** Source commit `887bc238...` applied the `e.g.,` fix on this page.
- **2025-11-06:** PR [`HL7/fhir#3951`](https://github.com/HL7/fhir/pull/3951) merged with title/body `FHIR-44047`.
- **2025-12-18:** Newer source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` marks the R6 ballot4 publication boundary used for this review.
- **Later reassessment:** none found in bounded Jira/Zulip/Confluence searches.

## Evidence log

- `test -f ".../4.0.1-0da2a0a84dc1/source/comparison.html"` and `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/comparison.html"`: confirmed page exists in both source trees.
- `git ... diff --find-renames 0da2a0a... 5d67a34... -- source/comparison.html`: direct diff is 12 changed lines, 5 insertions and 7 deletions; no semantic/normative content changes found.
- `git ... log --reverse --date=short --format=... 0da2a0a.....5d67a34... -- source/comparison.html`: found five page-touching commits in the review range.
- `git ... show --stat --patch <commit> -- source/comparison.html`: inspected all five commits and confirmed the classifications above.
- `git ... log --all --grep='FHIR-44047'` and `gh pr view 3951 --repo HL7/fhir ...`: tied commit `887bc238...` to merged PR `#3951`; also showed related branch history not directly needed for the old->new diff.
- `wc -l ".../source/comparison.html"` and full file read: newer page has 78 lines and was reviewed end-to-end.
- Jira searches:
  - `bun run jira:search snapshot FHIR-44047`: formal rationale for the punctuation correction.
  - `bun run jira:search fts '"source/comparison.html"' --limit 10`: no page-path hits.
  - `bun run jira:search fts '"Relationship between FHIR and other HL7 Standards"' --limit 10`: no page-title hits.
  - `bun run jira:search fts '"AuditEvent" "DocumentReference" "e.g"' --limit 10`: only unrelated/context-only issues.
  - `bun run jira:search fts '"HL7 V2" comparison' --limit 10`: only unrelated/context-only issues.
  - `bun run jira:search fts '"there are" "streams exist"' --limit 10` and `bun run jira:search fts '"chat.fhir.org" "streams exist"' --limit 10`: no evidence that the current grammar defect is tracked.
- Zulip searches:
  - Initial `bun run zulip:search fts 'FHIR-44047' --limit 20` failed because FTS parsed the hyphen; rerun as `bun run zulip:search fts '"FHIR-44047"' --limit 20` found no results.
  - Exact phrase/topic searches for the page title, `AuditEvent`/`DocumentReference`/`e.g`, and `streams exist` found no relevant thread.
- Confluence searches:
  - `bun run confluence:search refs jira FHIR-44047`, `bun run confluence:search fts 'FHIR-44047' --limit 20`, and `bun run confluence:search snapshot 234784975`: found FHIR-I minutes saying `FHIR-44047 will fix`.
  - Page-title and phrase searches found no additional relevant Confluence evidence.

# services research appendix

## Scope and coverage

- Page path: `source/services.html` (`services`), present in both compared source trees.
- Older version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- Newer version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Page boundary confirmed: `test -f` returned `old exists` and `new exists`; direct diff status is `M source/services.html`.
- Newer page was read end-to-end in chunks after source/community investigation: 524 lines, anchors `SOA/soa`, `patterns`, `approaches`, `considerations`, `other`, `rationale`, `summary`.
- Commits touching the page between the two commits: 3. Explicit Jira keys found in commit/PR metadata or patch: `FHIR-44047` only. No Jira keys appear in either page source.
- Jira searches: `FHIR-44047` snapshot; exact old/new resource-identity phrases; page title; `resource identity services`; `services Informative normative`; `Make Normative services`; residual `MAY choose` phrases; context issue `FHIR-5362` snapshot.
- Zulip searches: quoted `FHIR-44047`; exact old/new resource-identity phrases; page title; `resource identity services`; `Make Normative services`; residual `MAY choose`; `build.fhir.org/services.html`; snapshots for `#implementers > Does FHIR really need RESTful API as is?` and `#implementers > Apply Digital Signature` as context-only URL hits.
- Confluence searches: `refs jira FHIR-44047`; `fts FHIR-44047`; page title; `resource identity services`; `services Informative normative`; residual `MAY choose` phrases; snapshots for page IDs `358879917` and `234784975`.
- Caveats: no Jira issue was found for the 2025 normative/status/resource-identity change; the strongest rationale is in FHIR-I WGM minutes. The first unquoted Zulip `FHIR-44047` FTS query failed because FTS parsed the hyphenated key; it was rerun quoted and found no results. No rendered-publication check was performed beyond source HTML.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New status header | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/services.html:18` | Page is now `Informative` and no longer carries the R4 Trial Use/FMM-2 row. |
| Source | Old status header | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/services.html:18` | Baseline R4 page was Trial Use with maturity level 2. |
| Source | New resource-identity guidance | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/services.html:371-390` | Contains the changed identity sentence and the remaining uppercase `MAY`. |
| Source | Old resource-identity guidance | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/services.html:371-390` | Shows `SHOULD maintain resource identity` and the unchanged uppercase `MAY`. |
| Source | Punctuation change | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/services.html:487` | Applied `e.g.,` correction from `FHIR-44047`. |
| Source | Current editorial defects | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/services.html:54`, `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/services.html:306`, `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/services.html:346` | Full-page read found pre-existing reader-facing wording/typo issues. |
| Commit | Template wrapper removal | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Broad mechanical template update; removes `<div class="col-12">` wrapper on this page. |
| Commit | R6 normative/status change | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Changes Trial Use to Informative and rewrites the `SHOULD` identity sentence. |
| Commit | Punctuation correction | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Applies `FHIR-44047` `e.g.,` punctuation fix in the summary table. |
| PR | Template PR | https://github.com/HL7/fhir/pull/1295 | Merged `d7b8dad...` on 2021-06-26. |
| PR | Normative PR | https://github.com/HL7/fhir/pull/3901 | Merged `270e0ceb...` on 2025-11-02; PR body has no Jira key. |
| PR | FHIR-44047 PR | https://github.com/HL7/fhir/pull/3951 | Merged `887bc238...` on 2025-11-06. |
| Jira | `FHIR-44047` | https://jira.hl7.org/browse/FHIR-44047 | Explicit commit key; punctuation cleanup for `e.g.,`/`i.e.,`, not resource-identity semantics. |
| Jira | `FHIR-5362` | https://jira.hl7.org/browse/FHIR-5362 | Context-only historical services page issue about broken section numbering; not explanatory for R4→R6 changes. |
| Confluence | FHIR-I WGM 2025 Pittsburgh minutes | https://confluence.hl7.org/spaces/FHIRI/pages/358879917/FHIR+Infrastructure+Minutes+WGM+202509+-+Pittsburgh | Direct rationale: `services.html` should be made informative and the `SHOULD maintain resource identity` conformance-language sentence removed/reframed. |
| Confluence | FHIR-I WGM 2024 Dallas minutes | https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas | Records vote/context for `FHIR-44047` (`will fix`). |
| Zulip | Page URL context, REST vs operations | `bun run zulip:search snapshot implementers "Does FHIR really need RESTful API as is?"` / message `476147055` | Mentions FHIR Services page as contextual guidance, not as change rationale. |
| Zulip | Page URL context, signing service | `bun run zulip:search snapshot implementers "Apply Digital Signature"` / messages `153930717`, `153930785` | Older implementation context for service-oriented use; no R6 wording rationale. |
| Command | Direct diff | `git -C .cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5 diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/services.html` | Recreates the 4-line-add/6-line-delete page diff. |
| Command | History | `git -C .cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5 log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/services.html` | Recreates the three-commit page history. |
| Command | Confluence snapshot | `bun run confluence:search snapshot 358879917` | Best local source for the status/conformance rationale. |

## Change summary

- **Metadata/template/navigation; partly substantive status:** R4 Trial Use/FMM-2 header changed to an R6 Informative status row with `Responsible Owner`. This is a meaningful standards-status change, implemented by `270e0ceb...`, and aligns with FHIR-I minutes saying the page should be made informative. The wrapper `<div class="col-12">` removal is mechanical template churn from `d7b8dad...`.
- **Semantic guidance / conformance-language change:** In the Resource Identity section, `Services that exchange resources SHOULD maintain resource identity.` became `Services that exchange resources should preserve resource identity when it is known.` This removes uppercase RFC-style `SHOULD`, softens `maintain` to `preserve`, and adds `when it is known`. It is not backed by a Jira key, but Confluence minutes directly mention removing/reframing that sentence because of conformance language.
- **Editorial-only punctuation:** `e.g. Deadlocks, transactions` became `e.g., Deadlocks, transactions`; this is the only page-level application of `FHIR-44047`.
- **No meaningful REST/search/operation/example changes:** The service patterns, implementation approaches, SOA/FHIR rationale, and examples are otherwise unchanged by the direct diff.
- **Current-page read-through observations:** The page still contains uppercase `MAY` in an Informative page at line 390 and several pre-existing editorial defects (`that can be deployed that can be used`, `error handing`, incomplete `needed in complex.`). These were not introduced by the diff but may be worth triage if the page is being cleaned for R6.

## Source history

| Commit | Date | Subject | Page effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removes page-level `col-12` wrapper and closing `</div>`. PR #1295 merged 2021-06-26. | Mechanical/template |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Changes header from Trial Use/FMM-2 to Informative; rewrites Resource Identity `SHOULD maintain` sentence to lowercase `should preserve ... when it is known`. PR #3901 merged 2025-11-02. | Substantive standards-status + semantic guidance |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Adds comma after `e.g.` in one table row. PR #3951 merged 2025-11-06. | Editorial-only punctuation |

Pickaxe checks for `resource identity` and `Standards Status` in the comparison range did not find additional page-touching commits beyond the direct page history. A pickaxe check for `Services that exchange resources MAY choose` found no in-range change; blame shows that line is older (`f613e871f0b`, 2017-03-19).

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-44047` — `Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout`; status in the snapshot was `Resolved - change required`, resolution `Persuasive`, work group `fhir-i`, ballot `BALLOT-56530`, created 2024-01-22, resolved 2024-05-23. The description requests `e.g.,`/`i.e.,` punctuation cleanup throughout the spec. This matches only the line-487 comma change.

### Other Jira issues plausibly explaining changed text

- None found for the 2025 Informative/status/resource-identity change. Searches for exact old/new phrases, page title, `resource identity services`, `Make Normative services`, and residual `MAY choose` language did not identify a Jira issue matching the status/conformance-language change.

### Context-only Jira hits

- `FHIR-5362` — Historical page issue from the Jan 2015 ballot about duplicate/broken section numbering on the Services page. It confirms long-lived page identity (`FHIR-core-services`) but does not explain the R4→R6 diff.
- `FHIR-28045`, `FHIR-27839`, and `FHIR-40366` appeared in a broad `services Informative normative` search but were unrelated to this page/change.

## Zulip evidence

- No Zulip hits were found for quoted `FHIR-44047`, exact old/new resource-identity phrases, `Using Resources with Services`, `Make Normative services`, or the residual `MAY choose` sentence.
- `#implementers > Does FHIR really need RESTful API as is?` (message `476147055`, 2024-10-10) mentions text around different approaches on the FHIR Services page, but only as implementation context in a REST/operations discussion. It does not discuss R6 status or wording changes.
- `#implementers > Apply Digital Signature` (messages `153930717`, `153930785`, 2018-01-25) links to `build.fhir.org/services.html` in a signing-service discussion. It is useful background that implementers reference the page, but it does not provide rationale for the changed text.

## Confluence evidence

- FHIR Infrastructure WGM 202509 Pittsburgh minutes (`358879917`) are the strongest rationale source. In the section reviewing pages for normative/informative status, the minutes include: `Make Normative Using Resources with Services and Service-oriented Architecture https://build.fhir.org/services.html` followed by Grahame's statement that the page `should be made informative` and the sentence with conformance language, quoted as `Services that exchange resources SHOULD maintain resource identity`, should be removed/reframed. This directly matches commit `270e0ceb...`.
- FHIR Infrastructure WGM 202405 Dallas minutes (`234784975`) reference `FHIR-44047` among prior for-comment ballot issues and record `will fix`, supporting the later punctuation commit.
- Broad Confluence searches also surfaced process/context pages about normative vs informative artifacts, but only `358879917` directly discusses `services.html`.

## Timeline

| Date | Clock | Evidence | Note |
|---:|---|---|---|
| 2015-01-19 | Jira created | `FHIR-5362` | Historical services page numbering issue; context only. |
| 2017-03-19 | Source ancestry | `git blame` on current lines 371-391 | Resource Identity block and residual `MAY choose` line predate this R4→R6 comparison. |
| 2021-06-26 | PR merge | PR #1295 | Template update containing `d7b8dad...` merged. |
| 2021-06-27 | Source commit | `d7b8dad...` | Removes wrapper div from this page. |
| 2024-01-22 | Jira created | `FHIR-44047` | Punctuation issue opened for R6 ballot. |
| 2024-05-23 | Jira resolved/voted | `FHIR-44047`; Dallas FHIR-I minutes | Resolution `Persuasive`; minutes say `will fix`. |
| 2025-09-29 | Confluence updated | FHIR-I Pittsburgh minutes `358879917` | Records services page should be Informative and `SHOULD maintain resource identity` conformance language should be removed/reframed. |
| 2025-10-31 | Source commit | `270e0ceb...` | Implements Informative status and resource-identity rewrite. |
| 2025-11-02 | PR merge | PR #3901 | Normative/status change PR merged; no Jira key in body. |
| 2025-11-03 | Source commit | `887bc238...` | Applies `FHIR-44047` punctuation in this page. |
| 2025-11-06 | PR merge | PR #3951 | `FHIR-44047` PR merged. |
| R6 ballot4 | Publication boundary | User-provided newer version | New source tree contains all three page changes. |

## Evidence log

- `test -f .../4.0.1-0da2a0a84dc1/source/services.html` and `test -f .../6.0.0-ballot4-5d67a34a13a5/source/services.html`: confirmed both source pages exist.
- `git diff --find-renames --stat/--numstat`: confirmed modified-only diff, 4 insertions and 6 deletions.
- `git diff --find-renames --unified=0 ... -- source/services.html`: isolated all direct line changes: template wrapper, status row, resource-identity sentence, punctuation.
- `git log --reverse ... -- source/services.html`: found exactly three page-touching commits in range.
- `git show --stat --patch <commit> -- source/services.html`: verified each commit's page-specific effect.
- `gh pr list/view` for the three commit SHAs: mapped commits to PR #1295, #3901, and #3951; confirmed #3901 has no Jira key and #3951 cites `FHIR-44047`.
- `bun run jira:search snapshot FHIR-44047`: verified punctuation rationale and Jira metadata.
- Jira failed/no-hit searches that affect confidence: exact old `SHOULD maintain resource identity`, exact new `preserve resource identity`, `Make Normative services`, and residual `MAY choose` all found no matching Jira rationale for the 2025 status/resource-identity change.
- Zulip failed/no-hit searches that affect confidence: quoted `FHIR-44047`, exact old/new identity phrases, page title, `Make Normative services`, and residual `MAY choose`; only page-URL context threads were found.
- `bun run confluence:search snapshot 358879917`: established direct FHIR-I minutes rationale for the Informative/status and conformance-language change.
- `bun run confluence:search snapshot 234784975`: established FHIR-I minutes support for fixing `FHIR-44047`.
- `rg '\b(SHALL|SHOULD|MAY|MUST|REQUIRED)\b' .../source/services.html`: found remaining uppercase `MAY` at line 390 as the only uppercase conformance keyword in the newer page.
- Full newer page read in four chunks (`1-140`, `141-280`, `281-420`, `421-524`): checked current context, anchors, normative-looking language, links, and reader-facing defects.

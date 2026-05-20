# op-example-request research appendix

## Scope and coverage

- Page path: `source/op-example-request.html`.
- Older version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- Newer version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: the page exists in both trees. R4 source has 71 lines; R6 ballot4 source has 69 lines.
- The R6 ballot4 page was read end-to-end: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/op-example-request.html:1-69`.
- Commit count in the requested range touching this page: 3. Explicit Jira keys found in those commits/patches: `FHIR-44047`.
- Jira searches/snapshots performed for `FHIR-44047`, `FHIR-55115`, `FHIR-3193`, `op-example-request`, `Operation Request Example`, `Clinical finding`, `SNOMED CT codes`, `91723000`, `valueString name abdo`, and `todo work this over`.
- Zulip searches performed for `FHIR-44047`, `FHIR-55115`, `op-example-request`, `Operation Request Example`, `Clinical finding SNOMED CT codes`, `91723000 Anatomical structure`, `valueString name abdo`, and `todo work this over`.
- Confluence searches performed for `FHIR-44047`, `FHIR-55115`, `op-example-request`, `Operation Request Example`, `Clinical finding SNOMED CT codes`, `valueString name abdo`, and `todo work this over`; page `234784975` was snapshotted.
- Caveats: some FTS queries containing hyphenated terms such as `op-example-request` failed when not quoted because the local FTS parser treated hyphens as operators. Quoted/rephrased searches were used where needed. No Zulip discussion was found for `FHIR-44047` or `FHIR-55115` in the local snapshot.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/op-example-request.html:17` | Current metadata/status row changed from R4. |
| Source | R6 example request | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/op-example-request.html:18-65` | Full current request example; contains the actionable issues. |
| Source | R6 example parameter names | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/op-example-request.html:27-33` | Uses `filter` and lowercase `valueset`; the latter conflicts with the operation definition's `valueSet`. |
| Source | R6 embedded body-site text and TODO | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/op-example-request.html:39-57` | Inline ValueSet is stale and includes a rendered `todo` comment. |
| Source | Current body-site ValueSet | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/bodystructure/valueset-body-site.xml:26-39` | Current canonical body-site definition uses different description/code than the embedded example. |
| Source | ValueSet `$expand` OperationDefinition | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/valueset/operationdefinition-ValueSet-expand.xml:68-85` | Defines the `url` and `valueSet` input parameter names. |
| Source | Current `$expand` request examples | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/valueset/$expand-request.txt:9-24` | Related current example uses `valueSet`, unlike this page. |
| Source | Parameters structure | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/parameters/structuredefinition-Parameters.xml:113-127` | Confirms `Parameters.parameter.name` is the operation-defined name and `value[x]` conveys data content. |
| Commit | Template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removed outer bootstrap wrapper; mechanical template churn. |
| PR | Template update PR | https://github.com/HL7/fhir/pull/1295 | Associated PR for `d7b8dad`; merged 2021-06-26T22:33:10Z. |
| Commit | R6 normative metadata update | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changed the status bar wording and removed FMM display for this page. |
| PR | R6 normative metadata PR | https://github.com/HL7/fhir/pull/3901 | Associated PR for `270e0c`; merged 2025-11-02T02:17:42Z. |
| Commit | FHIR-44047 punctuation fix | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Changed `i.e. codes` to `i.e., codes` on this page. |
| PR | FHIR-44047 PR | https://github.com/HL7/fhir/pull/3951 | Associated PR for `887bc23`; merged 2025-11-06T19:03:18Z. |
| Commit | Original page add | `151ddc9524d888aafe6a6f3c89263a92c9b179ec`, https://github.com/HL7/fhir/commit/151ddc9524d888aafe6a6f3c89263a92c9b179ec | Introduced the embedded body-site text and TODO in 2014. |
| Commit | Example-operation rewrite | `27182775e3dc121618915ca6f2e8d8119c853c18`, https://github.com/HL7/fhir/commit/27182775e3dc121618915ca6f2e8d8119c853c18 | Rewrote multipart example to a Parameters resource and introduced lowercase `valueset`. |
| Jira | FHIR-44047 | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Formal issue for `e.g.,`/`i.e.,` punctuation across FHIR core. |
| Jira | FHIR-55115 | https://jira.hl7.org/browse/FHIR-55115; reopen with `bun run jira:search snapshot FHIR-55115` | Later open issue explicitly says `op-example-request` contains `todo`. |
| Jira | FHIR-3193 | https://jira.hl7.org/browse/FHIR-3193; reopen with `bun run jira:search snapshot FHIR-3193` | Historical body-site issue about `Clinical finding` vs `Anatomical structure`. |
| Confluence | FHIR-I WGM Dallas 202405 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas; reopen with `bun run confluence:search snapshot 234784975` | Records `FHIR-44047 will fix` with 11-0-0 vote. |
| Zulip | Context-only `op-example-request` hits | Search with `bun run zulip:search fts '"op-example-request"' --limit 20` | Found 2020 implementer/HAPI `$expand` questions, but not page-change rationale. |

## Change summary

### Metadata/template/navigation

- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the outer `<div class="col-12">` wrapper around the page body. This is mechanical template churn and does not change the operation example.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the status table from `<a ...>FHIR</a> Work Group` plus `Maturity Level: N/A` to `Responsible Owner: <a ...>FHIR</a> Work Group` and removed the FMM cell. The page remains `Informative`; no operation semantics changed.

### Editorial only

- `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` changed `i.e. codes` to `i.e., codes` in the embedded ValueSet description at current line 46. This matches `FHIR-44047`, which requested punctuation fixes for `e.g.,` and `i.e.,` throughout FHIR core.

### Substantive/normative or operation semantics

- No direct R4 4.0.1 -> R6 ballot4 diff changed the REST operation, operation parameters, HTTP method, content type, or conformance requirements on this page.
- However, the current page still contains older, actionable example problems that are not introduced by the R4 -> R6 diff: lowercase `valueset` instead of `valueSet`, a likely malformed `valueString` example, stale body-site terminology content, and a rendered `todo` comment.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removes `<div class="col-12">` wrapper. PR: https://github.com/HL7/fhir/pull/1295. | Mechanical/template |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Changes status table wording to `Responsible Owner` and removes FMM `N/A`. PR: https://github.com/HL7/fhir/pull/3901. | Metadata/navigation |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Adds comma in `i.e., codes`. PR: https://github.com/HL7/fhir/pull/3951. | Editorial |

Older context outside the requested range:

| Commit | Date | Subject | Why it matters |
|---|---:|---|---|
| `151ddc9524d888aafe6a6f3c89263a92c9b179ec` | 2014-07-20 | `add example request` | Added this page and introduced the `Clinical finding`/`91723000` wording plus the `todo: work this over` comment. |
| `27182775e3dc121618915ca6f2e8d8119c853c18` | 2014-11-20 | `fix example operation` | Replaced multipart/form-data with a `Parameters` request and introduced current lowercase `<name value="valueset"/>` and `<valueString name="abdo"/>` text. |
| `3c8bef2fb3e86a56a8efb32857f71baebc766a76` | 2015-07-11 | `#7545 - drop Bundle.base...` | Updated embedded body-site identifier from `/vs/body-site` to `/ValueSet/body-site`; did not update the rest of the inline ValueSet content. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-44047` (`Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout`) is the only explicit Jira key found in the requested-range page history.
- Snapshot command: `bun run jira:search snapshot FHIR-44047`.
- Key metadata: status `Resolved - change required`, resolution `Persuasive`, type `Technical Correction`, work group `fhir-i`, ballot `BALLOT-56530`, created 2024-01-22, resolved 2024-05-23.
- Description requests correcting `e.g.` and `i.e.` to `e.g.,` and `i.e.,` throughout the specification. The page commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` applies exactly that punctuation change to this page.

### Other Jira issues that plausibly explain current page concerns

- `FHIR-55115` (`Incomplete content indicated on: op-example-request`) directly names this page.
- Snapshot command: `bun run jira:search snapshot FHIR-55115`.
- Key metadata: status `Submitted`, unresolved, type `Change Request`, work group `fhir-i`, raised in R5, created 2026-01-20, related URL `http://build.fhir.org/op-example-request.html`, related pages `FHIR-core-operations`.
- Description: the page contains one or more phrases implying missing/incomplete content; specifics: `"todo"`. This matches current source lines 52-53, which render an XML comment containing `todo: work this over... how should this be done?`.
- `FHIR-3193` (`http://hl7.org/fhir/vs/body-site documentation is incorrect`) is older but conceptually relevant to the embedded body-site ValueSet.
- Snapshot command: `bun run jira:search snapshot FHIR-3193`.
- Key metadata: status `Published`, resolution `Persuasive`, applied for version `DSTU1`, created 2014-04-26, resolved 2018-07-08. The issue says body-site documentation should not claim `Clinical finding` codes when the cited SNOMED concept is `91723000: Anatomical structure`.
- The current `op-example-request` page still contains the `Clinical finding`/`91723000` mismatch at lines 46-56, even though the current body-site ValueSet source now describes a different body-site basis at `bodystructure/valueset-body-site.xml:38`.

### Context-only Jira hits that should not drive action

- `Operation Request Example` found no Jira results.
- `op-example-request` found `FHIR-55115` only.
- `Clinical finding` plus `SNOMED CT codes`, and `91723000` plus `Anatomical structure`, found `FHIR-3193`.
- Searches for `valueString name abdo` and `todo work this over` found no Jira issues beyond the direct `FHIR-55115` page hit.

## Zulip evidence

- `bun run zulip:search fts '"FHIR-44047"' --limit 20`: no results.
- `bun run zulip:search fts '"FHIR-55115"' --limit 20`: no results.
- `bun run zulip:search fts '"Operation Request Example"' --limit 20`: no results.
- `bun run zulip:search fts '"op-example-request"' --limit 20`: two 2020 messages in `#implementers > hapi-fhir` and `#hapi > ValueSet - $expand operation`; these are general implementer questions about `$expand`, not evidence about this page's source change.
- `bun run zulip:search fts '"Clinical finding" "SNOMED CT codes"' --limit 20`: one 2018 `#implementers > SNOMED Value Sets` hit; context-only and not tied to this page.
- `bun run zulip:search fts '91723000 "Anatomical structure"' --limit 20`: 2025 `#terminology > ECL Queries in MS Copilot` hits; context-only and not tied to this page.
- `valueString name abdo` and `todo work this over` searches found no relevant Zulip evidence.

## Confluence evidence

- `bun run confluence:search refs jira FHIR-44047` and `bun run confluence:search fts FHIR-44047 --limit 20` found one page: `234784975`, `FHIR Infrastructure Minutes WGM 202405 - Dallas`.
- Snapshot command: `bun run confluence:search snapshot 234784975`.
- The minutes include the Thursday Q2 tracker block: `FHIR-44048 will fix`, `FHIR-43942 will apply`, `FHIR-44047 will fix`, `FHIR-43488`, with motion/vote `Josh Mandel / Corey Spears: 11-0-0`.
- This supports the Jira disposition for the punctuation-only change. It does not discuss this page specifically.
- `FHIR-55115`, `Operation Request Example`, `op-example-request`, `Clinical finding SNOMED CT codes`, `valueString name abdo`, and `todo work this over` Confluence searches found no relevant pages.

## Timeline

| Date | Event type | Evidence | Notes |
|---:|---|---|---|
| 2014-04-26 | Jira created | `FHIR-3193` | Reported body-site `Clinical finding` vs `91723000: Anatomical structure` mismatch. |
| 2014-07-20 | Source commit | `151ddc9524d888aafe6a6f3c89263a92c9b179ec` | Adds `op-example-request.html` with the body-site mismatch and `todo` comment. |
| 2014-10-15 | Jira comment | `FHIR-3193` | Grahame comments `svn revision 3061`; this predates the later operation-example rewrite. |
| 2014-11-20 | Source commit | `27182775e3dc121618915ca6f2e8d8119c853c18` | Rewrites request as a `Parameters` resource; current lowercase `valueset` dates to this commit. |
| 2015-07-11 | Source commit | `3c8bef2fb3e86a56a8efb32857f71baebc766a76` | Updates body-site identifier URL, but not the stale body-site description/filter. |
| 2018-07-08 | Jira resolved | `FHIR-3193` | Body-site issue resolved as persuasive; applied for DSTU1. |
| 2021-06-27 | Source commit | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Template wrapper removal in requested range. |
| 2024-01-22 | Jira created | `FHIR-44047` | Punctuation issue for `e.g.,`/`i.e.,`. |
| 2024-05-23 | Jira resolved/voted | `FHIR-44047`; Confluence page `234784975` | FHIR-I minutes record `FHIR-44047 will fix` and vote 11-0-0. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | R6 metadata/status-bar update. |
| 2025-11-02 | PR merge | https://github.com/HL7/fhir/pull/3901 | Associated PR for `270e0c`. |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Applies `i.e.,` punctuation to this page. |
| 2025-11-06 | PR merge | https://github.com/HL7/fhir/pull/3951 | Associated PR for `FHIR-44047`. |
| 2026-01-20 | Jira created | `FHIR-55115` | Later open issue directly flags `todo` on `op-example-request`. |

## Evidence log

- Page boundary and direct diff:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/op-example-request.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/op-example-request.html" && echo "new exists"`
  - `wc -l <old> <new>`
  - `git -C <newtree> --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/op-example-request.html`
- Requested-range history:
  - `git -C <newtree> --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/op-example-request.html`
  - `git -C <newtree> --no-pager show --stat --patch <commit> -- source/op-example-request.html`
- Older source context for actionable issues:
  - `git -C <newtree> --no-pager log --all --reverse --date=short --format='%H%x09%ad%x09%s' -S 'todo: work this over' -- source/op-example-request.html`
  - `git -C <newtree> --no-pager log --all --follow --date=short --format='%H%x09%ad%x09%s' -- source/op-example-request.html`
  - `git -C <newtree> --no-pager show --stat --patch 151ddc9524d888aafe6a6f3c89263a92c9b179ec -- source/op-example-request.html`
  - `git -C <newtree> --no-pager show --stat --patch 27182775e3dc121618915ca6f2e8d8119c853c18 -- source/op-example-request.html`
- GitHub PR lookup:
  - `gh api -H 'Accept: application/vnd.github+json' "/repos/HL7/fhir/commits/<commit>/pulls" --jq '.[] | {number,title,state,merged_at,html_url}'`
- Jira:
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search snapshot FHIR-55115`
  - `bun run jira:search snapshot FHIR-3193`
  - `bun run jira:search fts '"Operation Request Example"' --limit 20`
  - `bun run jira:search fts '"op-example-request"' --limit 20`
  - `bun run jira:search fts '"Clinical finding" "SNOMED CT codes"' --limit 20`
  - `bun run jira:search fts '91723000 "Anatomical structure"' --limit 20`
  - `bun run jira:search fts '"valueString" name abdo' --limit 20`
  - `bun run jira:search fts '"todo" "work this over"' --limit 20`
- Zulip:
  - `bun run zulip:search fts '"FHIR-44047"' --limit 20`
  - `bun run zulip:search fts '"FHIR-55115"' --limit 20`
  - `bun run zulip:search fts '"Operation Request Example"' --limit 20`
  - `bun run zulip:search fts '"op-example-request"' --limit 20`
  - `bun run zulip:search fts '"Clinical finding" "SNOMED CT codes"' --limit 20`
  - `bun run zulip:search fts '91723000 "Anatomical structure"' --limit 20`
  - `bun run zulip:search fts '"valueString" name abdo' --limit 20`
  - `bun run zulip:search fts '"todo" "work this over"' --limit 20`
- Confluence:
  - `bun run confluence:search refs jira FHIR-44047`
  - `bun run confluence:search fts FHIR-44047 --limit 20`
  - `bun run confluence:search snapshot 234784975`
  - `bun run confluence:search refs jira FHIR-55115`
  - `bun run confluence:search fts FHIR-55115 --limit 20`
  - `bun run confluence:search fts '"Operation Request Example"' --limit 20`
  - `bun run confluence:search fts '"op-example-request"' --limit 20`
  - `bun run confluence:search fts '"Clinical finding" "SNOMED CT codes"' --limit 20`
  - `bun run confluence:search fts '"valueString" name abdo' --limit 20`
  - `bun run confluence:search fts '"todo" "work this over"' --limit 20`

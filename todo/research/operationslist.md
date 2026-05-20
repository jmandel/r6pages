# operationslist research appendix

## Scope and coverage

- Page path: `source/operationslist.html`
- Compared versions: R4 4.0.1 (`0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`) to R6 ballot4 6.0.0-ballot4 (`5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`)
- Boundary: page exists in both trees.
- Newer page read end-to-end: yes, 134 lines at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operationslist.html:1-134`.
- Source history: 6 commits touched this page between the two commits. Explicit Jira keys found in page-specific commits: `FHIR-31704`, `FHIR-44047`.
- Jira searches performed: snapshots for `FHIR-31704`, `FHIR-44047`, and context issue `FHIR-22632`; FTS searches for `"Maintaining a closure table"`, `closure table operationslist`, `closure find matches ValueSet scope`, `"ValueSet.scope" R6 normative ballot`, and related closure/find-matches terms.
- Zulip searches performed: quoted key searches for `"FHIR-31704"` and `"FHIR-44047"`; exact phrase/topic searches for `"Maintaining a closure table"`, `closure table operationslist`, `closure find matches ValueSet scope`, and `"move to an incubator FHIR IG"`; snapshots for `terminology > ConceptMap $closure operation` and `implementers > $closure`.
- Confluence searches performed: `refs jira` and FTS for `FHIR-31704` and `FHIR-44047`; FTS for `closure table`, `ValueSet scope closure find matches`, and PR #3913 rationale phrases; snapshots for pages `113673765`, `234784975`, and `51218206`.
- Caveat: the source-wide R6 terminology cleanup in PR #3913 did not name a Jira tracker in the PR body, and no direct Jira/Zulip/Confluence hit was found for the exact 2025 rationale phrase that `$closure` and `$find-matches` would move to an incubator FHIR IG. The PR body and source consistency are clear; formal community-decision evidence was not found in this bounded pass.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operationslist.html:59-70` | Current Terminology Service functionality list; no longer includes "Maintaining a closure table". |
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/operationslist.html:59-71` | Previous Terminology Service list included "Maintaining a closure table". |
| Source | R6 page candidate services | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operationslist.html:115-125` | Shows `Other?`, the applied `FHIR-31704` wording. |
| Source | R6 page punctuation | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operationslist.html:89-93` | Shows `e.g.,` comma change from `FHIR-44047`. |
| Source | R6 page metadata | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operationslist.html:13-16` | Shows current owner/status metadata row after template/normative metadata changes. |
| Commit | HTML template cleanup | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removed the page's surrounding `<div class="col-12">`; mechanical/template. |
| PR | HTML template cleanup | https://github.com/HL7/fhir/pull/1295 | Associated PR for `d7b8dadc`. |
| Commit | `FHIR-31704` grammar | `5450becd9e3fcf37ed84f140ecde282ab601f329` / https://github.com/HL7/fhir/commit/5450becd9e3fcf37ed84f140ecde282ab601f329 | Changed `...?` to `Other?`. |
| PR | Lloyd changes | https://github.com/HL7/fhir/pull/2347 | Associated PR containing `5450becd`; PR body does not mention `FHIR-31704`, but Jira comment links the commit. |
| Commit | R6 owner/status metadata | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Replaced old WG/FMM metadata row with "Responsible Owner" and removed FMM cell. |
| PR | R6 normative metadata | https://github.com/HL7/fhir/pull/3901 | Associated PR for `270e0ceb`. |
| Commit | TI cleanup | `40306e5cd9c1b1e3eb6f115de16a8da3aa13a351` / https://github.com/HL7/fhir/commit/40306e5cd9c1b1e3eb6f115de16a8da3aa13a351 | Removed "Maintaining a closure table" from this page while removing `$closure`, `$find-matches`, and `ValueSet.scope` across source. |
| Commit | TI cleanup merge | `2fa84e06bc4fd54048bc269c9f5bdad935879746` / https://github.com/HL7/fhir/commit/2fa84e06bc4fd54048bc269c9f5bdad935879746 | Merge commit preserving the TI cleanup and bringing metadata-row changes together. |
| PR | TI WG changes for R6 | https://github.com/HL7/fhir/pull/3913 | PR body says `ValueSet.scope` moves to extension pack and `$find-matches`/`$closure` move to an incubator FHIR IG. |
| Commit | `FHIR-44047` punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` / https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Changed `e.g.` to `e.g.,` in Knowledge Repository text. |
| PR | `FHIR-44047` | https://github.com/HL7/fhir/pull/3951 | Associated punctuation cleanup PR. |
| Jira | `FHIR-31704` | https://jira.hl7.org/browse/FHIR-31704 / `bun run jira:search snapshot FHIR-31704` | Formal resolution says to change `...?` to `other?`; non-substantive, applied for R5. |
| Jira | `FHIR-44047` | https://jira.hl7.org/browse/FHIR-44047 / `bun run jira:search snapshot FHIR-44047` | Broad punctuation correction for `e.g.,` and `i.e.,`; this page got one instance. |
| Jira | `FHIR-22632` | https://jira.hl7.org/browse/FHIR-22632 / `bun run jira:search snapshot FHIR-22632` | Historical ConceptMap/$closure context; not direct evidence for the 2025 page removal. |
| Confluence | FHIR-I WGM 202105 | https://confluence.hl7.org/spaces/FHIRI/pages/113673765/FHIR+Infrastructure+Minutes+WGM+202105 / `bun run confluence:search snapshot 113673765` | Minutes record `FHIR-31704` Not Persuasive with Mod, motion Alexander Henket/Grahame Grieve 21-0-0. |
| Confluence | FHIR-I WGM 202405 Dallas | https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas / `bun run confluence:search snapshot 234784975` | Minutes list `FHIR-44047 will fix`. |
| Confluence | May 2019 VOC WGM Wednesday Q3 | https://confluence.hl7.org/spaces/VOC/pages/51218206/May+2019+-+HL7+WGM+-+Wednesday+Q3+Minutes / `bun run confluence:search snapshot 51218206` | Historical notes: group agreed not to move `$find-matches` forward for R5 and asked for more `$closure` implementation evidence. |
| Zulip | `terminology > ConceptMap $closure operation` | https://chat.fhir.org/#narrow/stream/terminology/topic/ConceptMap%20%24closure%20operation / `bun run zulip:search snapshot terminology 'ConceptMap $closure operation'` | Historical user-facing confusion/parameter issue around closure table docs; context only. |
| Zulip | `implementers > $closure` | https://chat.fhir.org/#narrow/stream/implementers/topic/%24closure / `bun run zulip:search snapshot implementers '$closure'` | Historical implementation discussion of `$closure`; context only. |

## Change summary

### Metadata/template/navigation

- The page exists in both version trees.
- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the page-local `<div class="col-12">` wrapper and closing tag. This is mechanical/template churn.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the status row from `FHIR Infrastructure Work Group` plus `Maturity Level: N/A` to `Responsible Owner: FHIR Infrastructure Work Group` and removed the maturity-level cell. This appears to be broad R6 metadata/status template work, not a page-specific semantic decision.

### Terminology Service closure-table bullet

- R4 listed `Maintaining a closure table` as a Terminology Service function at `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/operationslist.html:63-71`.
- R6 no longer lists that function at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operationslist.html:63-70`.
- `git log -S 'Maintaining a closure table'` identifies `40306e5cd9c1b1e3eb6f115de16a8da3aa13a351` as the removal commit.
- That commit removed 1,027 lines across 18 terminology files, including `operationdefinition-CodeSystem-find-matches.xml`, `operationdefinition-ConceptMap-closure.xml`, `$closure` examples, `terminology-service.html` closure-table content, `TerminologyCapabilities.closure`, and `ValueSet.scope`.
- PR #3913 states the rationale: `ValueSet.scope` moves to an extension pack; `$find-matches` and `$closure` move to an incubator FHIR IG.
- Cross-check: in the R6 ballot4 source tree, `rg 'conceptmap-operation-closure|codesystem-operation-find-matches|\$closure|\$find-matches|ValueSet.scope' source` returned no matches, while R4 had many references. The page bullet removal is therefore consistent with the source-wide removal.
- Classification: semantic guidance / source-wide substantive cleanup, but no page-local inconsistency found. The page itself is Informative.

### Editorial changes

- `FHIR-31704` / commit `5450becd9e3fcf37ed84f140ecde282ab601f329` changed the candidate-service placeholder from `...?` to `Other?`; Jira says this was non-substantive clarification and "not a binding part of the spec."
- `FHIR-44047` / commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` changed `e.g. order sets` to `e.g., order sets`; broad punctuation correction.
- No changed examples, REST/search operation invocation semantics, conformance requirements, or normative SHALL/SHOULD language were introduced directly in this page.

## Source history

| Date | Commit | PR | Subject | Page effect | Classification |
|---|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | https://github.com/HL7/fhir/pull/1295 | `update html template` | Removed `<div class="col-12">` wrapper/closing tag. | Mechanical/template |
| 2022-09-03 | `5450becd9e3fcf37ed84f140ecde282ab601f329` | https://github.com/HL7/fhir/pull/2347 | `FHIR-31704 - Small grammar change on operationslist page` | Changed `...?` to `Other?`. | Editorial |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | https://github.com/HL7/fhir/pull/3901 | `normative changes for R6` | Changed metadata row to `Responsible Owner` and removed maturity-level cell. | Metadata/template |
| 2025-11-02 | `40306e5cd9c1b1e3eb6f115de16a8da3aa13a351` | https://github.com/HL7/fhir/pull/3913 | `Applied ... Terminology Infrastructure WG ... R6 normative ballot ... Removed ... $closure and $find-matches operations` | Removed `Maintaining a closure table` bullet. | Semantic/source-wide cleanup |
| 2025-11-02 | `2fa84e06bc4fd54048bc269c9f5bdad935879746` | https://github.com/HL7/fhir/pull/3913 | `Merge branch 'master' into TI_WG_R6_CHANGES_1` | Merge preserved TI cleanup and metadata changes. | Merge/mechanical |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | https://github.com/HL7/fhir/pull/3951 | `FHIR-44047` | Added comma after `e.g.` in Knowledge Repository example parenthetical. | Editorial |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-31704` (`Possible candidate Business Services for future versions (RESTful API)`)
  - Snapshot command: `bun run jira:search snapshot FHIR-31704`
  - Status: Published; Resolution: Not Persuasive with Modification; Change Impact: Non-substantive; Applied for Version: R5.
  - Resolution: "This isn't a binding part of the spec... Will change `...?` to `other?`."
  - Comment on 2022-09-04: `Git lloyd-changes 5450becd9e`, matching the implementation commit.
  - Confluence page `113673765` records the WGM motion: Not Persuasive with Mod, Alexander Henket/Grahame Grieve, 21-0-0.

- `FHIR-44047` (`Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout`)
  - Snapshot command: `bun run jira:search snapshot FHIR-44047`
  - Status: Resolved - change required; Resolution: Persuasive; Raised in Version: R6; Related Pages: `FHIR-core-many`.
  - Resolution: "Should make a note to review this as we review content for R6."
  - PR #3951 and commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` applied a relevant instance on this page.
  - Confluence page `234784975` lists `FHIR-44047 will fix`.

### Other Jira issues that plausibly explain related text

- `FHIR-22632` (`Changes to ConceptMap resource agreed at May 2019 WGM`)
  - Snapshot command: `bun run jira:search snapshot FHIR-22632`
  - Found by exact phrase search for `"Maintaining a closure table"`.
  - This is historical ConceptMap/$closure context. Comments note `$closure` implications from ConceptMap relationship changes and requested closure-table documentation changes in 2019.
  - It does not explain the 2025 R6 removal from `operationslist.html`; treat as background only.

### Context-only Jira hits and failed searches

- `bun run jira:search fts '"Maintaining a closure table"' --limit 20` found `FHIR-22632`.
- `bun run jira:search fts 'closure table operationslist' --limit 20` found no results.
- `bun run jira:search fts 'closure find matches ValueSet scope' --limit 20` found no results.
- `bun run jira:search fts '"ValueSet.scope" R6 normative ballot' --limit 20` found no results.
- An unquoted `find-matches` FTS query produced an FTS parse error (`no such column: matches`), so hyphenated operation names require quoting or alternate phrasing.
- No Jira key was found in commit `40306e5cd9c1b1e3eb6f115de16a8da3aa13a351` or PR #3913.

## Zulip evidence

- Quoted key searches:
  - `bun run zulip:search fts '"FHIR-31704"' --limit 20`: no results.
  - `bun run zulip:search fts '"FHIR-44047"' --limit 20`: no results.
- Exact changed phrase:
  - `bun run zulip:search fts '"Maintaining a closure table"' --limit 20` found historical 2016-2017 threads, not R6 removal discussions.
- Snapshots:
  - `bun run zulip:search snapshot terminology 'ConceptMap $closure operation'`
    - Thread URL: https://chat.fhir.org/#narrow/stream/terminology/topic/ConceptMap%20%24closure%20operation
    - Peter Jordan asked in 2017 about the `version` datatype in the closure-table examples and mentioned tracker `#13481`.
  - `bun run zulip:search snapshot implementers '$closure'`
    - Thread URL: https://chat.fhir.org/#narrow/stream/implementers/topic/%24closure
    - 2017 implementation discussion clarifying that `$closure` incrementally returns transitive closure among concepts added to the table, not all ancestors/descendants for one code.
- Searches for `closure table operationslist`, `closure find matches ValueSet scope`, and `"move to an incubator FHIR IG"` found no direct R6 removal discussion.

## Confluence evidence

- `FHIR-31704`
  - `bun run confluence:search refs jira FHIR-31704` and FTS both found page `113673765`.
  - Snapshot: `bun run confluence:search snapshot 113673765`
  - Relevant note: WGM 202105 minutes list `FHIR-31704 Not Persuasive with Mod Motion: Alexander Henket/Grahame Grieve: 21-0-0`.

- `FHIR-44047`
  - `bun run confluence:search refs jira FHIR-44047` and FTS both found page `234784975`.
  - Snapshot: `bun run confluence:search snapshot 234784975`
  - Relevant note: WGM 202405 Dallas minutes include `FHIR-44047 will fix`.

- Closure/find-matches historical context
  - `bun run confluence:search fts 'ValueSet scope closure find matches' --limit 20` found page `51218206`.
  - Snapshot: `bun run confluence:search snapshot 51218206`
  - Relevant notes: May 2019 Vocabulary WGM minutes say the group agreed not to move `$find-matches` forward for R5 and recommended `$closure` be exercised by multiple terminology-server instances to provide evidence to move maturity.
  - This is useful background but not direct evidence for PR #3913's 2025 R6 removal.

- Searches for `"Terminology Infrastructure WG" "incubator" "closure"` and `"move to an incubator FHIR IG"` found no direct Confluence evidence.

## Timeline

| Date | Clock | Evidence | Notes |
|---|---|---|---|
| 2017-03 | Zulip discussion | `implementers > $closure` | Implementers discussed expected `$closure` behavior and confusion over closure-table use. |
| 2017-05/06 | Zulip discussion | `terminology > ConceptMap $closure operation` | Closure-table documentation datatype issue; context only. |
| 2019-05 | Workgroup minutes | Confluence `51218206` | Vocabulary WGM: `$find-matches` should not move forward for R5; `$closure` needed more implementation evidence. |
| 2019-05 to 2020-12 | Jira history | `FHIR-22632` | ConceptMap relationship changes had implications for `$closure`; context only. |
| 2021-05-24 | Jira vote/resolution | `FHIR-31704`; Confluence `113673765` | FHIR-I approved changing `...?` to `other?`, non-substantive. |
| 2021-06-27 | Source commit | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Template wrapper removal. |
| 2022-09-03/04 | Source commit / PR merge | `5450becd9e3fcf37ed84f140ecde282ab601f329`; PR #2347 | Applied `FHIR-31704` wording to this page. |
| 2024-05-23 | Jira resolution / minutes | `FHIR-44047`; Confluence `234784975` | FHIR-I accepted broad punctuation cleanup. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`; PR #3901 | R6 owner/status metadata row update. |
| 2025-11-02 | Source commit / PR merge | `40306e5cd9c1b1e3eb6f115de16a8da3aa13a351`; PR #3913 | Removed closure-table bullet as part of source-wide TI cleanup moving `$closure`/`$find-matches` out of core. |
| 2025-11-02 | Merge commit | `2fa84e06bc4fd54048bc269c9f5bdad935879746`; PR #3913 | Combined TI cleanup with current master metadata changes. |
| 2025-11-03 / 2025-11-06 | Source commit / PR merge | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`; PR #3951 | Applied `FHIR-44047` punctuation instance to this page; PR merged 2025-11-06. |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/operationslist.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/operationslist.html" && echo "new exists"`
  - Result: both exist.
- Reviewed direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/operationslist.html`
  - Result: metadata/template row changes; removal of `Maintaining a closure table`; `e.g.,` punctuation; `...?` to `Other?`.
- Reviewed page history:
  - `git log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/operationslist.html`
  - Result: 6 page-touching commits listed in Source history.
- Inspected commits:
  - `git show --stat --patch <commit> -- source/operationslist.html`
  - Result: page-specific patches matched direct diff.
- Pickaxe checks:
  - `git log -S 'Maintaining a closure table' ... -- source/operationslist.html` -> `40306e5c...`
  - `git log -S 'Other?' ... -- source/operationslist.html` -> `5450becd...`
  - `git log -S 'e.g., order sets' ... -- source/operationslist.html` -> `887bc238...`
- PR association checks:
  - `gh api /repos/HL7/fhir/commits/<sha>/pulls`
  - Result: PRs #1295, #2347, #3901, #3913, and #3951 identified.
- PR #3913 metadata:
  - `gh pr view 3913 --repo HL7/fhir --json number,title,url,state,createdAt,mergedAt,author,body,commits`
  - Result: body says `ValueSet.scope` moves to extension pack and `$find-matches`/`$closure` move to incubator FHIR IG; tracker field blank.
- Current source cross-check:
  - `rg 'conceptmap-operation-closure|codesystem-operation-find-matches|\$closure|\$find-matches|ValueSet.scope' <R6 source>`
  - Result: no matches.
  - Same search in R4 source found `$closure`, `$find-matches`, and closure-table references.
- Community searches:
  - Jira/Zulip/Confluence commands summarized in Scope and evidence sections above.
  - Failed/no-hit searches are recorded where they affect confidence, especially for PR #3913 formal rationale.

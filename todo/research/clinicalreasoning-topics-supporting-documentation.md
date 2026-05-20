# clinicalreasoning-topics-supporting-documentation research appendix

## Scope and coverage

- Page path: `source/clinicalreasoning-topics-supporting-documentation.html`
- Compared `R4 4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` with `R6 ballot4 6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Old tree: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New tree: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: page exists in both trees. Old source has 48 lines; new source has 51 lines.
- Full newer page read end-to-end; key current lines are `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-supporting-documentation.html:13-48`.
- Seven commits touched this page between the two source commits.
- Explicit Jira keys found in source history/PR evidence: `FHIR-53086`, `FHIR-24619` (`J#24619` in commit/PR text).
- Jira/Zulip/Confluence searches were bounded to explicit keys and distinctive changed phrases. No page-specific Zulip or Confluence evidence was found for `FHIR-53086`.
- Caveat: unquoted hyphenated terms such as `FHIR-53086` and `cqf-qualityOfEvidence` caused SQLite FTS parse errors in Jira/Zulip searches; those searches were rerun with phrase quoting and/or SQL `LIKE`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page status and old prose | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/clinicalreasoning-topics-supporting-documentation.html:13,22,42` | R4 page displayed `Trial Use`, used `PlanDefinition.actionDefinition`, and referred to `RequestGroup`. |
| Source | R6 ballot4 current status | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-supporting-documentation.html:13` | Current page displays `Standards Status: Normative`. This conflicts with FHIR-53086's requested/resolved status change to informative. |
| Source | R6 current main changed prose | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-supporting-documentation.html:22,42,46,48` | Shows `PlanDefinition.action`, `RequestOrchestration`, linked CQF extensions, and new CPG/EBM IG references. |
| Source | Neighbor topic page with informative status | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-definitional-resources.html:13` | Confirms this page family can display `Informative`; supporting-documentation alone currently displays `Normative`. |
| Commit | `46bea37a00e63d1ace04a5f322614c6d0815f500` | https://github.com/HL7/fhir/commit/46bea37a00e63d1ace04a5f322614c6d0815f500 | Page-specific rename of `RequestGroup` references to `RequestOrchestration`; cites `J#24619`. |
| Commit | `645fedca25affaec5feb32826641b78c9a397275` | https://github.com/HL7/fhir/commit/645fedca25affaec5feb32826641b78c9a397275 | Page-specific FHIR-53086 implementation commit: updates PlanDefinition action wording, links CQF extensions, and adds CPG/EBM IG references. |
| Commit | `7466cfc63cd0b162497a42c80a67480eed86c75a` | https://github.com/HL7/fhir/commit/7466cfc63cd0b162497a42c80a67480eed86c75a | Later status commit changed this page from `Trial Use` to `Normative`. |
| PR | HL7/fhir#3914 | https://github.com/HL7/fhir/pull/3914 | Merged 2025-11-02; body lists FHIR-53086; includes implementation commit `645fed...` and merge-branch commit `8a448...`. |
| PR | HL7/fhir#2236 | https://github.com/HL7/fhir/pull/2236 | Merged 2022-08-25; implements `J#24619` rename. |
| Jira | FHIR-53086 | https://jira.hl7.org/browse/FHIR-53086; reopen with `bun run jira:search snapshot FHIR-53086` | Formal issue for this page. Resolution says to update page status to informative and add CPG/EBM references. |
| Jira | FHIR-24619 | https://jira.hl7.org/browse/FHIR-24619; reopen with `bun run jira:search snapshot FHIR-24619` | Formal rename rationale for `RequestGroup` -> `RequestOrchestration`. |
| Zulip | `#committers > RequestGroup Rename` | Snapshot with `bun run zulip:search snapshot committers "RequestGroup Rename"`; thread URL `https://chat.fhir.org/#narrow/stream/committers/topic/RequestGroup%20Rename`; first keyed message id `210880097` | Informal discussion supporting proceeding with the RequestGroup rename. |
| Confluence | FHIR-53086 refs/searches | `bun run confluence:search refs jira FHIR-53086`; `bun run confluence:search fts "FHIR-53086" --limit 20` | No references found; no Confluence rationale located for the page-specific status/content update. |

## Change summary

### Page structure and status metadata

- `mechanical/noise`: `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the surrounding `<div class="col-12">` wrapper as part of an HTML template update.
- `metadata/template/navigation`: `c3da43d4d906bc8ef71d67923be5e5db976665be` changed the status table class from `cols` to `colstu` while retaining `Trial Use`.
- `metadata/template/navigation`: `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the header table style to `colsi`, changed the owner label to `Responsible Owner`, and removed the maturity-level cell while retaining `Trial Use`.
- `substantive/normative`: `7466cfc63cd0b162497a42c80a67480eed86c75a` changed the visible standards status from `Trial Use` to `Normative`. This is the main actionable issue because FHIR-53086 requested/resolved that the page status become informative.

### Clinical Reasoning prose and terminology

- `semantic guidance`: `46bea37a00e63d1ace04a5f322614c6d0815f500` updated `RequestGroup` references to `RequestOrchestration`, matching FHIR-24619 and PR #2236.
- `semantic guidance`: `645fedca25affaec5feb32826641b78c9a397275` changed `PlanDefinition.actionDefinition` to `PlanDefinition.action`, aligning the page with the current element name.
- `metadata/template/navigation`: `645fed...` changed plain extension names into links to `cqf-qualityOfEvidence` and `cqf-strengthOfRecommendation`.
- `semantic guidance`: `645fed...` added two reader-facing references: the Clinical Practice Guideline IG for guideline-recommendation rationale/supporting documentation and the Evidence-based Medicine on FHIR IG for linking evidence.
- `example change`: the XML example itself is substantively unchanged; it continues to demonstrate `cqf-qualityOfEvidence` on the example `<document>` element.

## Source history

| Commit | Date | Subject | Page effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removed old wrapper div. | Mechanical/template |
| `46bea37a00e63d1ace04a5f322614c6d0815f500` | 2022-08-24 | `J#24619: Renaming RequestGroup to RequestOrchestration` | Replaced `RequestGroup` with `RequestOrchestration`; whitespace/no-newline cleanup. | Substantive rename |
| `c3da43d4d906bc8ef71d67923be5e5db976665be` | 2022-09-05 | `tidy up status codes on pages, and set version for ballot` | Header table class `cols` -> `colstu`, still `Trial Use`. | Template/status code |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Header table changed to `Responsible Owner` style, still `Trial Use`. | Template/status staging |
| `645fedca25affaec5feb32826641b78c9a397275` | 2025-10-31 | `[FHIR-53086](https://jira.hl7.org/browse/FHIR-53086): Updated supporting documentation page` | Updated `PlanDefinition.action`, linked CQF extensions, added CPG/EBM IG references. Did not change status to informative. | Page-specific content |
| `8a448f61f25b04d6dae7fff0b7ec082ae8ca833d` | 2025-11-01 | `Merge branch 'master' into br-cds-2025-10-31` | Combined branch content with header update; page remained `Trial Use` after merge. | Merge/integration |
| `7466cfc63cd0b162497a42c80a67480eed86c75a` | 2025-11-12 | `sort out trial-use notes` | Changed visible standards status from `Trial Use` to `Normative` on this page and `clinicalreasoning-topics-using-expressions.html`. | Substantive status change |

GitHub PR metadata:

- PR #3914 (`https://github.com/HL7/fhir/pull/3914`) was opened by `brynrhodes`, merged 2025-11-02, merge commit `817bc744f3b9640e5203c94f4576ac6782cd0919`, and lists FHIR-53086 as "Updated supporting documentation page." No PR comments; one approval from `lmckenzi`.
- PR #2236 (`https://github.com/HL7/fhir/pull/2236`) was opened by `brynrhodes`, merged 2022-08-25, merge commit `2d8dc0251c22bd75f55b272ef5b80b036668426e`, and body says `J#24619: Renamed RequestGroup to RequestOrchestration`.

## Jira evidence

### Explicit Jira keys from source/PR evidence

#### FHIR-53086: Update supporting documentation page

- Snapshot command: `bun run jira:search snapshot FHIR-53086`
- URL: `https://jira.hl7.org/browse/FHIR-53086`
- Status: `Applied`; resolution: `Persuasive`; work group: `cds`; change impact: `Non-substantive`; applied for: `R6`.
- Created: 2025-10-08; resolved: 2025-10-08; vote date: 2025-10-15; vote: `Jeff Brown / Gail Winters: 14-0-0`.
- Related URL: `https://build.fhir.org/clinicalreasoning-topics-supporting-documentation.html`
- Related page: `FHIR-core-clinicalreasoning-module`
- Description/resolution both say:
  - "Update the supporting documentation page status to informative."
  - Add references to the EBM-on-FHIR IG for linking evidence.
  - Add references to the Clinical Guidelines IG for supporting documentation for guideline recommendations.
- Comment from 2025-11-02 links PR #3914.
- Implementation check:
  - `645fed...` implemented the new CPG/EBM references and extension links.
  - Current R6 ballot4 source line 13 is still `Normative`, and blame assigns that line to later commit `7466cfc...`.
  - This is the strongest intent-vs-implementation mismatch.

#### FHIR-24619: Rename RequestGroup to RequestOrchestration

- Snapshot command: `bun run jira:search snapshot FHIR-24619`
- URL: `https://jira.hl7.org/browse/FHIR-24619`
- Status: `Published`; resolution: `Persuasive with Modification`; change impact: `Non-compatible`; applied for: `R5`.
- Description requested renaming `RequestGroup`; resolution chose `RequestOrchestration` and asked for documentation clarification.
- Comments include Zulip discussion link and PR #2236.
- The page change in `46bea37...` is consistent with this Jira and the later Zulip thread.

### Other Jira searches and context-only hits

- `bun run jira:search fts '"supporting documentation" "Clinical Reasoning"' --limit 10`: no results.
- `bun run jira:search fts '"EBM-on-FHIR"' --limit 10`: found FHIR-53086 plus unrelated IG issues; FHIR-53086 was the only page-specific core hit.
- `bun run jira:search fts '"Clinical Guidelines" IG' --limit 10`: found FHIR-53086 plus unrelated CPG/IG issues; only FHIR-53086 explained this page.
- `bun run jira:search fts 'actionDefinition PlanDefinition' --limit 10`: found older PlanDefinition/actionDefinition cleanup issues, but no evidence that any of them directly drove this R4->R6 page change.
- `bun run jira:search fts '"cqf-qualityOfEvidence"' --limit 10`: found extension-context and example issues such as FHIR-42946, FHIR-30114, FHIR-45135, but no page-specific contradiction was established from those hits.

## Zulip evidence

- `FHIR-53086`:
  - `bun run zulip:search fts '"FHIR-53086"' --limit 20`: no results.
  - `bun run zulip:search sql "SELECT ... WHERE content LIKE '%FHIR-53086%' ..."`: no results.
  - Distinctive phrase searches for `supporting documentation Clinical Reasoning`, `cqf-qualityOfEvidence`, and `EBM-on-FHIR` did not produce a page-specific FHIR-53086 rationale.
- `FHIR-24619`:
  - `bun run zulip:search fts '"FHIR-24619"' --limit 20` found `#committers > RequestGroup Rename`.
  - Snapshot command: `bun run zulip:search snapshot committers "RequestGroup Rename"`
  - Thread URL: `https://chat.fhir.org/#narrow/stream/committers/topic/RequestGroup%20Rename`
  - First keyed message: id `210880097`, stream id `179165`, created `2020-09-22T14:44:27.000Z`.
  - Summary: Bryn Rhodes reopened whether the rename was worth the cross-version/tooling cost; Grahame Grieve and Lloyd McKenzie supported proceeding; Bryn concluded "Okay, I'll proceed with the rename as planned." This supports the RequestOrchestration page update.
- Context-only:
  - `bun run zulip:search fts '"cqf-qualityOfEvidence"' --limit 20` found an older `#implementers > Justification in CDS Response` mention of CQF recommendation/evidence extensions, but it did not discuss the R6 supporting-documentation page change.
  - `bun run zulip:search fts '"EBM-on-FHIR"' --limit 20` found general EBM-on-FHIR mentions but no direct page evidence.

## Confluence evidence

- `bun run confluence:search refs jira FHIR-53086`: no references found.
- `bun run confluence:search fts "FHIR-53086" --limit 20`: no results.
- `bun run confluence:search refs jira FHIR-24619`: no references found.
- `bun run confluence:search fts '"supporting documentation" "Clinical Reasoning"' --limit 20`: no results.
- `bun run confluence:search fts '"supporting documentation page status"' --limit 20`: no results.
- `bun run confluence:search fts '"Update supporting documentation page"' --limit 20`: no results.
- `bun run confluence:search fts '"EBM-on-FHIR"' --limit 20` returned general minutes/agendas mentioning EBM-on-FHIR, but none explained FHIR-53086 or this page status/content change.

## Timeline

| Date | Clock | Evidence | Event |
|---:|---|---|---|
| 2019-09-17 | Jira created | FHIR-24619 | RequestGroup rename issue created. |
| 2019-10-09 | Jira vote/resolution | FHIR-24619 | Resolved to rename RequestGroup to RequestOrchestration. |
| 2020-09-22 | Zulip discussion | `#committers > RequestGroup Rename`, message id `210880097` and thread snapshot | Rename reconsidered; conclusion was to proceed. |
| 2022-08-24 | Source commit | `46bea37...` | This page updated from `RequestGroup` to `RequestOrchestration`. |
| 2022-08-25 | PR merge | HL7/fhir#2236 | Rename PR merged. |
| 2025-10-08 | Jira created/resolved | FHIR-53086 | Supporting-documentation page issue created/resolved; requested status informative plus CPG/EBM references. |
| 2025-10-15 | Jira vote | FHIR-53086 | Vote recorded `Jeff Brown / Gail Winters: 14-0-0`. |
| 2025-10-31 | Source commit | `270e0ceb...` | R6 normative header styling applied but this page still displayed `Trial Use`. |
| 2025-10-31 | Source commit | `645fed...` | FHIR-53086 content changes applied, but status was not changed to informative. |
| 2025-11-01 | Source merge commit | `8a448f...` | PR branch merge retained the content changes and `Trial Use` status. |
| 2025-11-02 | PR merge / Jira update | HL7/fhir#3914; FHIR-53086 comment | PR #3914 merged; FHIR-53086 comment links that PR. |
| 2025-11-12 | Source commit | `7466cfc...` | Page status changed from `Trial Use` to `Normative`. |
| R6 ballot4 boundary | Current source | commit `5d67a34...`, page line 13 | Current page displays `Normative`. |

## Evidence log

- Read methodology and source README files:
  - `SKILL.md`
  - `jira/README.md`
  - `zulip/README.md`
  - `confluence/README.md`
  - `spec/README.md`
- Page boundary:
  - `test -f "$OLD_TREE/source/clinicalreasoning-topics-supporting-documentation.html" && echo "old exists"`
  - `test -f "$NEW_TREE/source/clinicalreasoning-topics-supporting-documentation.html" && echo "new exists"`
  - `wc -l "$OLD_TREE/$PAGE" "$NEW_TREE/$PAGE"` -> 48 old lines, 51 new lines.
- Direct diff:
  - `git -C "$NEW_TREE" --no-pager diff --find-renames --minimal --unified=6 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- "$PAGE"`
  - Established 10 insertions and 8 deletions: status/header, RequestGroup rename, PlanDefinition action wording, extension links, CPG/EBM references.
- Source history:
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- "$PAGE"`
  - `git -C "$NEW_TREE" --no-pager show --stat --patch <commit> -- "$PAGE"` for all seven page-touching commits.
  - `git -C "$NEW_TREE" --no-pager show -m --stat --patch 8a448f61f25b04d6dae7fff0b7ec082ae8ca833d -- "$PAGE"` to inspect the merge commit against both parents.
  - `git -C "$NEW_TREE" --no-pager blame -L 13,13 -- "$PAGE"` -> current `Normative` line attributed to `7466cfc...`.
- Current page read:
  - `nl -ba "$NEW_TREE/$PAGE"` read lines 1-51 end-to-end.
- GitHub PR checks:
  - `gh pr view 3914 --repo HL7/fhir --json number,title,state,author,createdAt,mergedAt,mergeCommit,url,body,commits`
  - `gh pr view 2236 --repo HL7/fhir --json number,title,state,author,createdAt,mergedAt,mergeCommit,url,body,commits`
  - `gh pr view 3914 --repo HL7/fhir --comments --json comments,reviews` -> no comments, one approval.
- Jira:
  - `bun run jira:search snapshot FHIR-53086`
  - `bun run jira:search snapshot FHIR-24619`
  - `bun run jira:search fts '"EBM-on-FHIR"' --limit 10`
  - `bun run jira:search fts '"Clinical Guidelines" IG' --limit 10`
  - `bun run jira:search fts 'actionDefinition PlanDefinition' --limit 10`
  - `bun run jira:search fts '"cqf-qualityOfEvidence"' --limit 10`
- Zulip:
  - `bun run zulip:search fts '"FHIR-53086"' --limit 20`
  - `bun run zulip:search sql "SELECT id, stream_name, topic, sender_name, created_at, substr(content,1,240) AS excerpt FROM messages WHERE content LIKE '%FHIR-53086%' ORDER BY timestamp DESC LIMIT 20"`
  - `bun run zulip:search fts '"FHIR-24619"' --limit 20`
  - `bun run zulip:search snapshot committers "RequestGroup Rename"`
  - `bun run zulip:search sql "SELECT id, stream_id, stream_name, topic, sender_name, created_at FROM messages WHERE id=210880097"`
- Confluence:
  - `bun run confluence:search refs jira FHIR-53086`
  - `bun run confluence:search fts "FHIR-53086" --limit 20`
  - `bun run confluence:search refs jira FHIR-24619`
  - `bun run confluence:search fts '"supporting documentation" "Clinical Reasoning"' --limit 20`
  - `bun run confluence:search fts '"supporting documentation page status"' --limit 20`
  - `bun run confluence:search fts '"Update supporting documentation page"' --limit 20`
  - `bun run confluence:search fts '"EBM-on-FHIR"' --limit 20`

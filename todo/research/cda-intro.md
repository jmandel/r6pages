# cda-intro research appendix

## Scope and coverage

- Page path: `source/cda-intro.html`
- Older version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- Newer version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Page boundary: present in both source trees.
- Newer page read end-to-end: yes, 95 lines, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/cda-intro.html:1-95`.
- Page-changing commits between the two source commits: 3.
- Explicit Jira keys found in page history: `FHIR-44047`.
- Jira/Zulip/Confluence searches performed: `FHIR-44047`, exact changed phrases, `cda-intro`, `CDA intro`, and `exempli gratia`.
- Caveats:
  - Some initial FTS searches with hyphenated terms (`FHIR-44047`, `cda-intro`) failed because the local FTS parser treated the hyphen as an operator; corrected searches used snapshots, quoted phrases, or SQL `LIKE`.
  - The later Zulip discussion questioning whether `cda-intro.html` should remain in the build is informal evidence. I found no Jira or Confluence final removal/retention decision in the bounded search.
  - The visible editor notes and stale title macro predate R4; they were not introduced by the R4-to-R6 diff.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Older page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/cda-intro.html:1-95` | R4 baseline; already contained the editor notes and `Resource Index` title macro |
| Source | Newer page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/cda-intro.html:1-95` | R6 ballot4 page under review |
| Source | Current owner/status row | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/cda-intro.html:13-15` | Shows the page still exists as an Informative page owned by Structured Documents |
| Source | Current editor notes | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/cda-intro.html:74` and `:88` | Unresolved source notes visible in the page body if rendered as-is |
| Source | Current title macro | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/cda-intro.html:3` | Title macro still says `Resource Index`, not CDA intro |
| Commit | HTML template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removed the surrounding `div.col-12`; mechanical template churn |
| PR | HTML template update PR | https://github.com/HL7/fhir/pull/1295 | PR containing `d7b8dadc...`, merged 2021-06-26 |
| Commit | R6 normative metadata update | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changed page metadata row to `Responsible Owner` and removed `Maturity Level: N/A` |
| PR | R6 normative metadata PR | https://github.com/HL7/fhir/pull/3901 | PR containing `270e0ceb...`, merged 2025-11-02 |
| Commit | `FHIR-44047` punctuation update | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Added commas after `e.g.` in this page |
| PR | `FHIR-44047` PR | https://github.com/HL7/fhir/pull/3951 | PR body only names `FHIR-44047`; merged 2025-11-06 |
| Jira | `FHIR-44047` | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Formal tracker for adding commas after `e.g.` / `i.e.` |
| Confluence | FHIR-I WGM minutes, Dallas 2024 | https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas; reopen with `bun run confluence:search snapshot 234784975` | Records `FHIR-44047 will fix` in a FHIR-I tracker block |
| Zulip | `#fmg > R6 Checklist - Automation??` | https://chat.fhir.org/#narrow/stream/fmg/topic/R6%20Checklist%20-%20Automation%3F%3F; reopen with `bun run zulip:search snapshot fmg "R6 Checklist - Automation??"` | Later discussion explicitly questioning whether `cda-intro.html` should remain in the R6/core build |
| Zulip message | Gay Dolin retention concern | `#fmg`, topic `R6 Checklist - Automation??`, message `546732438`, near URL `https://chat.fhir.org/#narrow/stream/fmg/topic/R6%20Checklist%20-%20Automation%3F%3F/near/546732438` | Says SD did not think `cda:intro` should be present because it is not FHIR, pending co-chair check |
| Zulip message | Gino Canessa removal process reply | `#fmg`, topic `R6 Checklist - Automation??`, message `546846299`, near URL `https://chat.fhir.org/#narrow/stream/fmg/topic/R6%20Checklist%20-%20Automation%3F%3F/near/546846299` | Says informative-page removal likely requires WG vote and that `cda-intro.html` was still in the build |

## Change summary

### Metadata/template/navigation

- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the page body wrapper `<div class="col-12">` and its closing tag. This appears to be broad HTML-template churn, not a page-specific content decision.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the status table from:
  - `Structured Documents Work Group`, `Maturity Level: N/A`, `Standards Status: Informative`
  - to `Responsible Owner: Structured Documents Work Group`, `Standards Status: Informative`
- I did not find a page-specific Jira key for the `270e0ceb...` metadata change. PR `HL7/fhir#3901` has no tracker key in the body.

### Editorial only

- `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` / `FHIR-44047` changed `e.g.` to `e.g.,` in two places:
  - scope paragraph: `/source/cda-intro.html:35`
  - derived-from-narrative bullet: `/source/cda-intro.html:83`
- `FHIR-44047` is a broad punctuation technical correction. The Jira says proper usage is `e.g.,` and `i.e.,` throughout the specification and the resolution says to review this as R6 content is reviewed.

### No substantive page-content change found

- No changed CDA/FHIR semantics, requirements, examples, REST/search/operation behavior, terminology, anchors, or section structure were found in the direct R4-to-R6 page diff.
- The page still contains normative-sounding legacy requirements such as `CDA documents must be human readable...` and `There must be...`, but those sentences are unchanged from R4.

### Current-page issues noticed outside the direct diff

- The newer page still carries `[%settitle Resource Index%]` at line 3 even though the page heading is CDA on FHIR.
- The newer page still contains two `[EDITORS: ...]` notes in the body at lines 74 and 88. These are unchanged from R4, but if the page remains in the R6 publication they look like unfinished reader-facing content.
- A later Zulip thread (`#fmg > R6 Checklist - Automation??`) explicitly questioned whether this page should remain in core/R6 because it is "not FHIR"; no final removal or retention decision was found in the bounded evidence.

## Source history

| Commit | Date | Summary | Page effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removed surrounding `<div class="col-12">` wrapper | Mechanical/template |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Reworded owner cell to `Responsible Owner` and removed `Maturity Level: N/A` from the metadata row | Metadata/template |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Added commas after `e.g.` in two unchanged content sentences | Editorial only |

Relevant PR lookups:

- `d7b8dadc...` is in https://github.com/HL7/fhir/pull/1295, merged 2021-06-26.
- `270e0ceb...` is in https://github.com/HL7/fhir/pull/3901, merged 2025-11-02.
- `887bc238...` is in https://github.com/HL7/fhir/pull/3951, merged 2025-11-06.

## Jira evidence

### Explicit Jira keys from commits/patches

#### `FHIR-44047`

- Snapshot command: `bun run jira:search snapshot FHIR-44047`
- URL: https://jira.hl7.org/browse/FHIR-44047
- Summary: `Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout`
- Type: Technical Correction
- Specification: FHIR-core
- Raised in Version: R6
- Work Group: `fhir-i`
- Ballot: `BALLOT-56530`
- Status in local snapshot: `Resolved - change required`
- Resolution: Persuasive
- Created: 2024-01-22
- Resolved: 2024-05-23
- Related pages: `FHIR-core-many`
- Resolution text: "Should make a note to review this as we review content for R6."
- Applicability to this page: directly explains the two `e.g.` punctuation changes in `887bc238...`.
- Intent-vs-implementation: no mismatch found; the commit applies exactly the punctuation correction expected by the Jira.

### Other Jira issues plausibly related to changed text

- Exact phrase searches for the two changed page sentences found no Jira hits:
  - `bun run jira:search fts '"data format used to store clinical documents"' --limit 10`
  - `bun run jira:search fts '"When structured content is derived from narrative"' --limit 10`
- `bun run jira:search fts '"exempli gratia"' --limit 10` found `FHIR-44047` plus analogous punctuation tickets for US Core and Da Vinci CRD (`FHIR-44053`, `FHIR-44560`). Those other issues are not page-specific and should not drive action for this core page.

### Context-only Jira hits

- `bun run jira:search fts '"cda-intro"' --limit 10` found `FHIR-7465`, `2015May core #753 - SDC stuff in cda-intro`, for DSTU1. It appears historical/context-only for this R4-to-R6 review and was not elevated to the action file.
- `bun run jira:search fts 'CDA intro' --limit 10` produced mostly unrelated CDA/intro keyword hits in other specifications or pages.

## Zulip evidence

### Direct Jira-key and changed-phrase searches

- `bun run zulip:search sql "SELECT ... FROM messages WHERE content LIKE '%FHIR-44047%' ..."` found no `FHIR-44047` mentions.
- Exact phrase searches found no hits:
  - `bun run zulip:search fts '"data format used to store clinical documents"' --limit 20`
  - `bun run zulip:search fts '"When structured content is derived from narrative"' --limit 20`
  - `bun run zulip:search fts '"exempli gratia"' --limit 20`

### Page-retention discussion

- Search commands:
  - `bun run zulip:search fts '"cda-intro"' --limit 20`
  - `bun run zulip:search fts 'CDA intro' --limit 20`
  - `bun run zulip:search snapshot fmg "R6 Checklist - Automation??"`
  - `bun run zulip:search sql "SELECT id, stream_name, topic, sender_name, datetime(timestamp, 'unixepoch') AS sent_at, substr(content, 1, 500) AS excerpt FROM messages WHERE stream_name = 'fmg' AND topic = 'R6 Checklist - Automation??' AND (content LIKE '%cda:intro%' OR content LIKE '%cda-intro%') ORDER BY timestamp"`
- Thread: `#fmg > R6 Checklist - Automation??`, URL `https://chat.fhir.org/#narrow/stream/fmg/topic/R6%20Checklist%20-%20Automation%3F%3F`
- Relevant messages:
  - `546732438`, 2025-10-23, Gay Dolin: "under SD - I don't think cda:intro should be present (since its not FHIR), and I'll double check with the other co-chairs..."
  - `546846299`, 2025-10-24, Gino Canessa: "If you want to remove an informative page, I believe it only requires a WG vote. As of now, https://build.fhir.org/cda-intro.html is part of the build..."
- Interpretation: this does not prove a formal decision to remove the page, but it is concrete evidence that page retention was questioned immediately before the R6 ballot4 source snapshot. The reviewed R6 ballot4 source still contains the page.

### Other context-only Zulip hits

- `#implementers > FHIR document` (2020-05-09) links to CDA-on-FHIR and says CDA documents correspond to FHIR documents. It is background only for page existence, not evidence of the R4-to-R6 changes.
- `#implementers > $document, text generation` (2019-03-06) links to `https://www.hl7.org/fhir/cda-intro.html`; background only.

## Confluence evidence

### `FHIR-44047`

- `bun run confluence:search refs jira FHIR-44047` found one page:
  - `234784975`, `FHIR Infrastructure Minutes WGM 202405 - Dallas`
  - URL: https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas
  - Snapshot command: `bun run confluence:search snapshot 234784975`
- The snapshot references `FHIR-44047` and, in the Thursday Q2 tracker block, records `FHIR-44047 will fix` with a vote line `Josh Mandel / Corey Spears: 11-0-0` for a group of prior-ballot issues.
- This supports the Jira disposition for the punctuation cleanup. It does not add page-specific rationale beyond the broad `e.g.`/`i.e.` correction.

### Page terms and exact phrases

- Exact phrase searches found no results:
  - `bun run confluence:search fts '"data format used to store clinical documents"' --limit 20`
  - `bun run confluence:search fts '"When structured content is derived from narrative"' --limit 20`
  - `bun run confluence:search fts '"exempli gratia"' --limit 20`
  - `bun run confluence:search fts '"cda-intro"' --limit 20`
- `bun run confluence:search fts 'CDA intro' --limit 20` produced broad CDA/intro hits. None clearly discussed this page's R4-to-R6 changes or the later retention question.

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2021-06-26 | PR merge | `HL7/fhir#1295` merged, containing `d7b8dadc...` |
| 2021-06-27 | Source commit | `d7b8dadc...` updated the HTML template wrapper on this page |
| 2024-01-22 | Jira created | `FHIR-44047` created for `e.g.,` / `i.e.,` punctuation across FHIR core |
| 2024-05-23 | Jira resolved | `FHIR-44047` resolved Persuasive, `Resolved - change required` |
| 2024-05 WGM | Confluence minutes | FHIR-I minutes page `234784975` records `FHIR-44047 will fix` in a tracker block |
| 2025-10-23 | Zulip discussion | Gay Dolin says under SD she does not think `cda:intro` should be present because it is not FHIR, pending co-chair check |
| 2025-10-24 | Zulip discussion | Gino Canessa says removal of an informative page likely needs WG vote and that `cda-intro.html` is still in the build |
| 2025-10-31 | Source commit | `270e0ceb...` applies R6 metadata/status-row changes to this page |
| 2025-11-02 | PR merge | `HL7/fhir#3901` merged for `270e0ceb...` |
| 2025-11-03 | Source commit | `887bc238...` applies `FHIR-44047` punctuation changes to this page |
| 2025-11-06 | PR merge | `HL7/fhir#3951` merged for `887bc238...` |
| R6 ballot4 boundary | Reviewed source | `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` still contains `source/cda-intro.html` |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/cda-intro.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/cda-intro.html" && echo "new exists"`
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/cda-intro.html`
  - Established only wrapper, metadata-row, and `e.g.` punctuation edits.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/cda-intro.html`
  - Found `d7b8dadc...`, `270e0ceb...`, and `887bc238...`.
- Commit inspection:
  - `git show --stat --patch --format=fuller <commit> -- source/cda-intro.html`
  - Confirmed each commit's page-specific patch.
- PR lookup:
  - `gh api /repos/HL7/fhir/commits/<sha>/pulls`
  - `gh pr view <number> --repo HL7/fhir --json number,title,body,mergedAt,author,url`
- Jira:
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search fts '"data format used to store clinical documents"' --limit 10`
  - `bun run jira:search fts '"When structured content is derived from narrative"' --limit 10`
  - `bun run jira:search fts '"exempli gratia"' --limit 10`
  - `bun run jira:search fts '"cda-intro"' --limit 10`
  - `bun run jira:search fts 'CDA intro' --limit 10`
- Zulip:
  - `bun run zulip:search sql "SELECT ... WHERE content LIKE '%FHIR-44047%' ..."`
  - `bun run zulip:search fts '"data format used to store clinical documents"' --limit 20`
  - `bun run zulip:search fts '"When structured content is derived from narrative"' --limit 20`
  - `bun run zulip:search fts '"exempli gratia"' --limit 20`
  - `bun run zulip:search fts '"cda-intro"' --limit 20`
  - `bun run zulip:search fts 'CDA intro' --limit 20`
  - `bun run zulip:search snapshot fmg "R6 Checklist - Automation??"`
  - `bun run zulip:search sql "SELECT id, stream_name, topic, sender_name, datetime(timestamp, 'unixepoch') AS sent_at, substr(content, 1, 500) AS excerpt FROM messages WHERE stream_name = 'fmg' AND topic = 'R6 Checklist - Automation??' AND (content LIKE '%cda:intro%' OR content LIKE '%cda-intro%') ORDER BY timestamp"`
- Confluence:
  - `bun run confluence:search refs jira FHIR-44047`
  - `bun run confluence:search fts FHIR-44047 --limit 20`
  - `bun run confluence:search snapshot 234784975`
  - `bun run confluence:search fts '"data format used to store clinical documents"' --limit 20`
  - `bun run confluence:search fts '"When structured content is derived from narrative"' --limit 20`
  - `bun run confluence:search fts '"exempli gratia"' --limit 20`
  - `bun run confluence:search fts '"cda-intro"' --limit 20`
  - `bun run confluence:search fts 'CDA intro' --limit 20`
- Full newer page read:
  - `wc -l ".../6.0.0-ballot4-5d67a34a13a5/source/cda-intro.html"`
  - Read `/source/cda-intro.html:1-95`.

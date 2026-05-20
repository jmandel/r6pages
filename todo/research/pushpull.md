# pushpull research appendix
## Scope and coverage
- Page reviewed: `source/pushpull.html` (`pushpull`) from FHIR R4 `4.0.1` to R6 ballot4 `6.0.0-ballot4`.
- Boundary confirmed: the page exists at the same path in both trees; it was modified, not added/deleted/renamed.
  - Old: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/pushpull.html` (83 lines, 4844 bytes).
  - New: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/pushpull.html` (80 lines, 4757 bytes).
- Methodology inputs read: `SKILL.md`, `jira/README.md`, `zulip/README.md`, `confluence/README.md`, and `spec/README.md`.
- After diff/history/community review, the full newer page was read end-to-end (`source/pushpull.html` lines 1-80). Internal `http.html` anchors referenced by the page were checked and present.

## Quick links and locators
- Direct source diff command:
  `git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26" "5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/pushpull.html"`
- Source-history command:
  `git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/pushpull.html"`
- Relevant current-page locators: metadata row at new line 30; supported exchange modes at lines 60-67; REST push/pull bullets at lines 69-75; unresolved contraction at line 66.
- GitHub PRs containing page-changing commits: HL7/fhir#1295, HL7/fhir#2714, HL7/fhir#3901.
- Jira: FHIR-55125 (`https://jira.hl7.org/browse/FHIR-55125`).
- Zulip context: `https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/PSS-1666`; `https://chat.fhir.org/#narrow/stream/smart%2Fscheduling-links/topic/Apple%20Vaccination%20Availability`.
- Confluence context: FHIR Infrastructure Minutes CC 20201012, page `91998482`, `https://confluence.hl7.org/spaces/FHIRI/pages/91998482/FHIR+Infrastructure+Minutes+CC+20201012`.

## Change summary
- Net source diff: `source/pushpull.html | 9 +++------` (3 insertions, 6 deletions).
- Public narrative content about push, pull, interface repositories, REST, messages, services, and documents is unchanged between R4 and R6 ballot4.
- Content-relevant but non-rendered change: an HTML comment changed `HL7 v2 or V3`/`HL7 v2 and V3` to `HL7 V2 or V3`/`HL7 V2 and V3`.
- Rendered metadata change: the conformance/status table changed from FHIR WG + `Maturity Level: N/A` + `Informative` to `Responsible Owner: FHIR Work Group` + `Informative` (new line 30).
- Mechanical/template churn: `<div class="col-12">` wrapper and closing `</div>` were removed by the 2021 HTML template update; whitespace changed. A transient `etc..` typo in 2023 was immediately reverted and is not present in the final diff.
- Link check: `http.html#create`, `#update`, `#transaction`, `#search`, `#read`, and `#history` anchors all exist in the newer source.

## Source history
- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` (2021-06-27, Grahame Grieve), subject `update html template`: removed the `col-12` wrapper around the page body. PR lookup found merged HL7/fhir#1295 (`Gg 20210627 html template`, merged 2021-06-26). No Jira key in the page-changing commit or PR body.
- `dad7cf37c75822c352509e1c2e8d050408d0be18` (2023-02-21, Grahame Grieve), subject `QA related changes`: capitalized hidden-comment references from `HL7 v2` to `HL7 V2`; also introduced `etc..` in rendered prose. PR lookup found merged HL7/fhir#2714 (`Gg 202302 more qa`, merged 2023-02-21). No page-specific Jira key in the commit or PR body.
- `9f780149387dc652bec02aa7744e52774acddbc9` (2023-02-21, Grahame Grieve), subject `more QA`: reverted `etc..` back to `etc.` on the same page. Same PR HL7/fhir#2714.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` (2025-10-31, Grahame Grieve), subject `normative changes for R6`: changed the page metadata row to `Responsible Owner` and removed the FMM `N/A` cell. PR lookup found merged HL7/fhir#3901 (`2025 11 gg normative`, merged 2025-11-02). The PR included many unrelated Jira-keyed commits, but this page-changing commit itself did not cite a Jira key.
- Pickaxe/blame checks: `git log -S "HL7 V2 or V3" -- source/pushpull.html` isolates the 2023 QA capitalization commit; `git blame -L 63,66 -- source/pushpull.html` shows the current `doesn't` line predates the R6 diff (line 66 blamed to 2015), so FHIR-55125 is a current unresolved problem rather than a newly introduced R6 change.

## Jira evidence
- Explicit initial Jira keys: none. Source commits and relevant PR bodies did not provide a page-specific Jira key.
- Productive search: `bun run jira:search fts 'pushpull' --limit 20` found FHIR-55125.
- Snapshot: `bun run jira:search snapshot FHIR-55125` showed `Spelling/abbreviation issues on page: pushpull`, Technical Correction, status `Submitted`, status category `indeterminate`, unresolved, reporter Lloyd McKenzie, work group `fhir-i`, raised in `R5`, related URL `http://build.fhir.org/pushpull.html`, related page `FHIR-core-pushpull`, created 2026-01-20. Description: the page has misspelled/abbreviated words; specifics: `"doesn't"`.
- Current source check: newer `source/pushpull.html` line 66 still says `This question doesn't apply...`, so the Jira issue remains applicable.
- Searches with no relevant results: `"Managing Push and Pull"`, `"interface repository" "push" "pull"`, `"Push/Pull" REST history`, `"source system will push" "destination system will pull"`, `"pull-based destination"`, `"push-based source"`, `"AFAICS"`, `"dynamic behavior" "HL7 V2"`, `"Managing Push" "Pull"`, and `"RESTful interface" "Push/Pull"`.
- Metadata-change searches for `"Responsible Owner" "Maturity Level"`, `"Responsible Owner" "FHIR" "Work Group"`, `"Maturity Level" "N/A" "Informative"`, `"normative changes for R6"`, and `"standards status" "responsible owner"` found no page-specific rationale; hits were unrelated resources/issues and were not elevated into findings.

## Zulip evidence
- Jira-key search: unquoted `FHIR-55125` failed because FTS parsed the hyphenated key; quoted search `bun run zulip:search fts '"FHIR-55125"' --limit 20` returned no results.
- Exact/page searches with no direct results: `"Managing Push and Pull"`, `"source system will push"`, `"interface repository" "push" "pull"`, `"Push/Pull" REST history`, and `"doesnt" "pushpull"`.
- `bun run zulip:search fts 'pushpull' --limit 20` found one contextual thread, `#smart/scheduling-links > Apple Vaccination Availability`. Snapshot showed Henry Wei citing `https://www.hl7.org/fhir/pushpull.html` in a 2021 implementation discussion about scheduling-feed push vs periodic pull. This is same concept but not evidence for the R4-to-R6 page edits.
- `bun run zulip:search fts '"push and pull" "FHIR"' --limit 20` found contextual discussions including `#fhir/infrastructure-wg > PSS-1666`. Snapshot showed 2020 discussion of FAST support for push/pull models and alternate terminology (`data source initiated`, `data recipient initiated`). It does not mention `pushpull.html`, FHIR-55125, or the page-changing commits.

## Confluence evidence
- Jira-key searches: `bun run confluence:search fts FHIR-55125 --kind any --limit 20` and `bun run confluence:search refs jira FHIR-55125` returned no results.
- Page/exact searches with no direct results: `"Managing Push and Pull"`, `pushpull`, `"source system will push"`, and `"interface repository" "push" "pull"`.
- `bun run confluence:search fts '"push and pull" "FHIR"' --kind any --limit 20` returned general-context pages only. The PSS-1666 trail was the most relevant cross-check.
- Snapshot: `bun run confluence:search snapshot 91998482` showed FHIR Infrastructure minutes from 2020-10-12 reviewing FAST PSS `PSS-1666` and changing its title to `FHIR at Scale: Exchange With or Without Intermediaries (FAST)`. This aligns with general push/pull/intermediary concepts found on Zulip, but it is not evidence for the `pushpull.html` page changes.

## Timeline
- 2014-2015: Current rendered bullets largely originated before R4; blame places the `Documents` bullet containing `doesn't` at 2015-06-03.
- 2019/R4 baseline: `source/pushpull.html` present at old commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` with same public narrative content, including `doesn't`.
- 2021-06-27 source commit / 2021-06-26 PR merge: HTML template wrapper removed by `d7b8dad...` / HL7/fhir#1295.
- 2023-02-21 source commits and PR merge: QA capitalization in hidden comment by `dad7cf...`; transient punctuation regression corrected by `9f7801...` / HL7/fhir#2714.
- 2025-10-31 source commit / 2025-11-02 PR merge: R6 normative metadata-row update by `270e0c...` / HL7/fhir#3901.
- 2026-01-20 Jira clock: FHIR-55125 filed and still Submitted/unresolved in the local snapshot; it post-dates the R6 ballot4 source commit and flags a longstanding current-page contraction.

## Evidence log
- Boundary/diff/history:
  - `wc -l -c` on old and new `source/pushpull.html` paths.
  - Direct rename-aware diff command listed above.
  - Source log command listed above.
  - `git show --date=short --format=... --stat --patch <commit> -- source/pushpull.html` for `d7b8dad...`, `dad7cf...`, `9f7801...`, and `270e0c...`.
  - `gh pr list -R HL7/fhir --state all --search <sha> --json number,title,state,author,createdAt,updatedAt,mergedAt,url --limit 10` and `gh pr view <pr> -R HL7/fhir --json ...` for PR context.
  - `git log --all --reverse --date=short --format='%H%x09%ad%x09%s' -S "HL7 V2 or V3" -- source/pushpull.html` and `git blame -L 30,30`, `git blame -L 63,66` for current-line provenance.
- Jira:
  - `bun run jira:search fts 'pushpull' --limit 20`; `bun run jira:search snapshot FHIR-55125`.
  - Metadata-change FTS searches listed in Jira evidence; no page-specific hit found.
  - Failed/no-action searches recorded in Jira evidence to avoid overclaiming.
- Zulip:
  - `bun run zulip:search fts '"FHIR-55125"' --limit 20`; `bun run zulip:search fts 'pushpull' --limit 20`; `bun run zulip:search fts '"push and pull" "FHIR"' --limit 20`.
  - `bun run zulip:search snapshot 'smart/scheduling-links' 'Apple Vaccination Availability'`; `bun run zulip:search snapshot 'fhir/infrastructure-wg' 'PSS-1666'`.
- Confluence:
  - `bun run confluence:search fts FHIR-55125 --kind any --limit 20`; `bun run confluence:search refs jira FHIR-55125`; `bun run confluence:search fts '"push and pull" "FHIR"' --kind any --limit 20`; `bun run confluence:search snapshot 91998482`.
- Full-page and link review:
  - `view` of newer `source/pushpull.html` lines 1-80 after community research.
  - `rg` in newer `source/http.html` for anchors `create`, `update`, `transaction`, `search`, `read`, and `history`.

# best-practices research appendix

## Scope and coverage
- Page path: `source/best-practices.html` (`best-practices`).
- Old version/tree/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/tree/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary confirmed: `source/best-practices.html` exists in both old and new trees.
- New page read end-to-end after diff/history/community research: yes; 59 lines (`wc -l`, then `sed -n '1,220p'` and `sed -n '221,440p'`).
- Commit count touching this page between boundary commits: 3.
- Explicit Jira keys found in the page diff, commit subjects, or commit bodies: none.
- Community searches performed: Jira, Zulip, and Confluence searches for page path/canonical URL, `FHIR Best Practices`, `best practice rules`, `Responsible Owner`, `Maturity Level`, and concept phrases such as `committees define best practices` and `best practices informative validator enforce`.
- Caveats: The page source contains a generated `<%best-practice-list%>` placeholder, so this review covers the changed HTML source page, not every generated list item from other source files. Several broad community hits concern IG/SMART/local best practices, not this core page. FTS searches for `best-practices.html` failed in Jira/Zulip/Confluence because punctuation was parsed by FTS5; SQL `LIKE` searches were used to cross-check exact path/canonical URL mentions.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source lines | R4 source header/chrome | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/best-practices.html:13-17,57` | Shows old wrapper `<div class="col-12">`, `colsn`, FMM `Maturity Level: N/A`, and closing wrapper. |
| Source lines | R6 ballot4 source header/chrome | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/best-practices.html:15-17,57` | Shows new `colsi` table, `Responsible Owner`, no FMM cell, and no wrapper div. |
| Source lines | Unchanged substantive prose | New source lines 19-53; old source lines 19-53 | Main best-practices guidance and generated-list placeholder are unchanged across R4 -> R6 ballot4. |
| Commit | Template wrapper removal | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removes page wrapper div as part of broad HTML template update. |
| PR | Template wrapper removal PR | https://github.com/HL7/fhir/pull/1295 (`Gg 20210627 html template`, merged 2021-06-26) | PR containing `d7b8dadc...`. |
| Commit | Status class update | `c3da43d4d906bc8ef71d67923be5e5db976665be` / https://github.com/HL7/fhir/commit/c3da43d4d906bc8ef71d67923be5e5db976665be | Changes page status table class `colsn` -> `colsi`; page prose unchanged. |
| PR | Status class update PR | https://github.com/HL7/fhir/pull/2403 (`Gg 202209 r5 ballot final`, merged 2022-09-07) | PR containing `c3da43d...`. |
| Commit | R6 normative chrome update | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Adds `Responsible Owner:` label and removes `Maturity Level: N/A` metadata cell on this page. |
| PR | R6 normative chrome update PR | https://github.com/HL7/fhir/pull/3901 (`2025 11 gg normative`, merged 2025-11-02) | PR containing `270e0ceb...`. |
| Jira | FHIR-15977 | https://jira.hl7.org/browse/FHIR-15977 | Background origin for best-practice recommendations and summary page, predating R4. |
| Jira | FHIR-17147 | https://jira.hl7.org/browse/FHIR-17147 | Context-only issue about validator best-practice rules not being documented; no source change to this page found. |
| Jira | FHIR-47002 | https://jira.hl7.org/browse/FHIR-47002 | Later validation-severity guidance mentioning best-practice rules; related to validation, not this page diff. |
| Jira | FHIR-55949 | https://jira.hl7.org/browse/FHIR-55949 | Context-only later use of `Responsible Owner` label for Device WG naming; not causal for this page. |
| Zulip | Committers GF#15977 | https://chat.fhir.org/#narrow/stream/committers/topic/GF%2315977 | Implementation discussion: whether best practices are informative/hints and where they render. |
| Zulip | Committers Best Practices (GF#15977) | https://chat.fhir.org/#narrow/stream/committers/topic/Best%20Practices%20(GF%2315977) | Confirms build support and that `build.fhir.org/best-practices.html` would document best practices. |
| Zulip | Tooling UCUM annotations | https://chat.fhir.org/#narrow/stream/tooling/topic/%E2%9C%94%20Why%20are%20UCUM%20annotations%20flagged%20as%20error%3F | Later discussion references the Best Practices page for validator treatment of best-practice rules; not a page-change driver. |
| Confluence | MnM Minutes WGM 201805 Cologne | https://confluence.hl7.org/spaces/MnM/pages/42992015/MnM+Minutes+WGM+201805+Cologne | Minutes list tracker 15977 `FHIR Best Practices Documentation - Persuasive`. |
| Confluence | 2020-02 Conformance Meeting Notes | https://confluence.hl7.org/spaces/CONF/pages/76153774/2020-02+Conformance+Meeting+Notes | Background on a conformance/best-practices whitepaper and central webpage idea; not this source change. |
| Confluence | OO 2023-05-23 OO on FHIR | https://confluence.hl7.org/spaces/OO/pages/171443121/2023-05-23+OO+on+FHIR | Context for FHIR-17147 proposed Not Persuasive disposition. |
| Confluence | OO 2023-06-29 Main | https://confluence.hl7.org/spaces/OO/pages/175608092/2023-06-29+Main | FHIR-17147 block-vote context. |
| Confluence | OO 2026-01 WGM | https://confluence.hl7.org/spaces/OO/pages/413246813/2026-01-26-30_WGM | Later unrelated example of `responsible owner` wording in WG ownership discussions. |
| Local command | Direct diff | `git -C <new-tree> --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/best-practices.html` | Establishes exact R4 -> R6 ballot4 source-page changes. |
| Local command | Source history | `git -C <new-tree> --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/best-practices.html` | Establishes three commits touching this page. |
| Local command | Snapshots | `bun run jira:search snapshot FHIR-15977`; `bun run zulip:search snapshot committers "GF#15977"`; `bun run confluence:search snapshot 42992015` | Main local evidence snapshots used for background context. |

## Change summary

### Page layout wrapper removal — metadata/template/navigation; mechanical/noise
- R4 had `<div class="col-12">` before the content and `</div>` before the footer (`old:13,57`). R6 ballot4 omits both (`new:11-17,57`).
- Implemented by `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` (`update html template`), which touched many HTML pages with similar small deletions.
- No best-practices prose, generated-list macro, or standard-status semantics changed.

### Status table class update — metadata/template/navigation; mechanical/noise
- The metadata table class changed from `colsn` to `colsi` (`old:17`, intermediate/new line 17).
- Implemented by `c3da43d4d906bc8ef71d67923be5e5db976665be` (`tidy up status codes on pages, and set version for ballot`).
- This appears to be page-status/icon/template bookkeeping; the page remains `Standards Status: Informative`.

### R6 page owner/status metadata refresh — metadata/template/navigation; non-substantive semantic chrome
- The header row now says `Responsible Owner: ... Work Group` and removes the `Maturity Level: N/A` cell (`old:17`, `new:17`).
- Implemented by `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` (`normative changes for R6`) in PR #3901.
- This changes page chrome/metadata presentation, not the body guidance. No evidence found that a Jira/Zulip/Confluence discussion specifically requested this change for `source/best-practices.html`.

### Best-practice guidance body — unchanged
- Lines 19-53 in the R6 ballot4 source match the R4 source body, including the two documentation mechanisms, validator-enforcement statement, and `<%best-practice-list%>` placeholder.
- Classification: no substantive/normative source-page change in the body.

## Source history

| Date | Commit | PR | Subject | Page-specific delta | Classification |
|---|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | HL7/fhir#1295, merged 2021-06-26 | `update html template` | Removed `<div class="col-12">` and matching closing `</div>` from this page. | Mechanical/template/navigation. |
| 2022-09-05 | `c3da43d4d906bc8ef71d67923be5e5db976665be` | HL7/fhir#2403, merged 2022-09-07 | `tidy up status codes on pages, and set version for ballot` | Changed status table class `colsn` -> `colsi`. | Mechanical/status metadata. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | HL7/fhir#3901, merged 2025-11-02 | `normative changes for R6` | Changed WG cell to `Responsible Owner: ... Work Group`; removed FMM `Maturity Level: N/A` cell. | Metadata/template/navigation; no body prose change. |

## Jira evidence

### Explicit Jira keys from commits/patches
- None found in the direct diff, page-touching commit subjects, or page-touching commit bodies.

### Other plausibly related Jira issues
- **FHIR-15977 — FHIR Best Practices Documentation**: Published/Persuasive FHIR-core issue created 2018-04-19, vote date 2018-05-16, resolved 2019-01-07. Resolution says FHIR would expose `best practice recommendations` with a specific invariant extension, mark best practices informative, include rationale/exceptions, and provide a summary view linking to best practices across the specification. This is strong background for why the page exists, but it predates the R4 source boundary and is not a cause of the R4 -> R6 ballot4 page diff.
- **FHIR-17147 — Best Practice rules of the JAVA RI validator aren't documented**: Resolved No Change/Not Persuasive. It confirms ongoing concern about validator best-practice checks and whether best practices should be documented resource-by-resource or generally. It did not result in a change to `source/best-practices.html` in the reviewed boundary.

### Context-only Jira hits
- **FHIR-47002 — Need more guidance on validation response expectations**: R5 validation-severity issue with comments mentioning best-practice rules. It targets validation/OperationOutcome guidance and is after the reviewed page-body text; no causal tie to this page diff.
- **FHIR-55949 — The name used for the Devices workgroup is incorrect**: Uses the phrase `Responsible Owner`, but concerns DeviceMetric/DeviceAlert WG naming in 2026. It postdates the R6 ballot4 source page commit and is not evidence for this page change.
- Broad searches for `Maturity Level` returned resource/IG maturity issues, not `best-practices.html` changes.

## Zulip evidence

- **#committers > GF#15977** (2018-06-08 to 2018-07-07): Grahame quoted the FHIR-15977 disposition and asked whether best-practice invariants should be warnings/hints and where they should be rendered. Lloyd replied that best practices are informative and should be hints. On 2018-07-07 Grahame reported build support was done, implementers could ask the validator to enforce best practices, and `http://build.fhir.org/best-practices.html` would document them. This supports the page's original intent, not a later R4 -> R6 page change.
- **#committers > Best Practices (GF#15977)** (2018-07-07): Shorter thread with the same implementation announcement and page URL.
- **#tooling > ✔ Why are UCUM annotations flagged as error?** (2025-11-11 to 2025-11-15): Later user confusion about UCUM best-practice validation. Alexander quoted validator text that points to the Best Practices page; the thread concluded the observed error came from a terminology server, while FHIR should warn about curly-brace UCUM annotations. This is useful later context that the page is still used for validator semantics, but it does not indicate a defect in the R6 source page.
- Searches for `Responsible Owner` and `Maturity Level` in Zulip found unrelated implementer/resource maturity discussions.

## Confluence evidence

- **42992015 — MnM Minutes WGM 201805 Cologne**: Minutes list tracker `15977 - FHIR Best Practices Documentation - Persuasive`, corroborating the formal acceptance of FHIR-15977.
- **76153774 — 2020-02 Conformance Meeting Notes**: Discusses a `FHIR Best Practices Conformance Whitepaper`, central webpage ideas, and best-practice/conformance guidance. This is background on broader conformance guidance, not evidence of a source-page change.
- **171443121 / 175608092 / 175608094 — OO minutes around FHIR-17147**: Record FHIR-17147 as Not Persuasive / block-vote context. Supports the Jira disposition but not a change to this page.
- **413246813 — 2026-01 OO WGM**: Later unrelated discussion using `responsible owner` in multi-WG ownership context. Useful only to avoid overclaiming that `Responsible Owner` search hits explain the 2025 page metadata commit.

## Timeline

| Date | Clock | Evidence | Notes |
|---|---|---|---|
| 2018-04-19 | Jira created | FHIR-15977 | Request to document general FHIR best practices. |
| 2018-05-16 | Jira vote | FHIR-15977 | Persuasive vote recorded; best-practice recommendations to be informative and summarized. |
| 2018-05 WGM | Meeting evidence | Confluence 42992015 | MnM minutes list tracker 15977 as persuasive. |
| 2018-06-08 | Zulip implementation discussion | #committers > GF#15977 | Discussion of hint/warning/informative rendering and page location. |
| 2018-07-07 | Zulip/source-era implementation notice | #committers > GF#15977 and `Best Practices (GF#15977)` | Grahame says build support was done and `build.fhir.org/best-practices.html` would document these. |
| 2019-01-07 | Jira resolved | FHIR-15977 | Jira marked resolved/published before the R4 source boundary. |
| 2019-10-30 | Old boundary source commit | `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` | R4 4.0.1 tree source boundary used in this review. |
| 2020-02 | Confluence background | Confluence 76153774 | Conformance WG best-practices whitepaper discussion; distinct from source commit history. |
| 2021-06-27 | Source commit | `d7b8dadc...` | Removes wrapper div from page; PR #1295 merged 2021-06-26. |
| 2022-09-05 | Source commit | `c3da43d...` | Changes status table class; PR #2403 merged 2022-09-07. |
| 2023-05-23 / 2023-07-06 | Jira/meeting disposition | FHIR-17147; Confluence 171443121/175608094 | No-change/not-persuasive handling of validator best-practice documentation concern. |
| 2025-10-31 | Source commit | `270e0ceb...` | R6 metadata chrome update; PR #3901 merged 2025-11-02. |
| 2025-11-11 | Later Zulip reassessment/context | #tooling UCUM thread | Best Practices page referenced in validator text; issue traced to terminology server, not page wording. |
| 2025-12-18 | New boundary source commit | `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` | R6 ballot4 tree source boundary used in this review. |
| R6 ballot4 6.0.0-ballot4 | Publication/version boundary | User-supplied newer version/tree | Page source includes only metadata/template changes from R4. |

## Evidence log

- Read methodology/docs: `SKILL.md`, `jira/README.md`, `zulip/README.md`, `confluence/README.md`, `spec/README.md`.
- Boundary checks: `test -f .../4.0.1-0da2a0a84dc1/source/best-practices.html && echo "old exists"`; `test -f .../6.0.0-ballot4-5d67a34a13a5/source/best-practices.html && echo "new exists"`.
- Direct diff: `git -C <new-tree> --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/best-practices.html` established the wrapper, status-table class, and header metadata changes only.
- History: `git -C <new-tree> --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/best-practices.html` found 3 commits.
- Commit inspection: `git show --stat --patch <commit> -- source/best-practices.html` run for all three page-touching commits; no Jira keys or body prose changes found.
- PR lookup: `gh api /repos/HL7/fhir/commits/<sha>/pulls` associated the three commits with PRs #1295, #2403, and #3901.
- Full page read: `wc -l` plus `sed -n '1,220p'` and `sed -n '221,440p'` on the R6 ballot4 source page; repeated after community research.
- Jira searches: `bun run jira:search fts "\"FHIR Best Practices\""`, `"\"best practice rules\""`, `"\"Responsible Owner\" \"Maturity Level\""`, `"\"Responsible Owner\""`, `"\"Maturity Level\""`, `best practice list`, `committees define best practices`, `best practices informative validator enforce`; snapshots for FHIR-15977, FHIR-17147, FHIR-47002, FHIR-55949.
- Jira failed/narrowed searches: `bun run jira:search fts "best-practices.html"` failed with FTS5 punctuation syntax; SQL `LIKE '%source/best-practices%'` and `LIKE '%hl7.org/fhir/best-practices.html%'` returned no Jira hits.
- Zulip searches: analogous FTS searches for `FHIR Best Practices`, `best practice rules`, `Responsible Owner`, `Maturity Level`, `GF 15977`, `GF 17147`, and SQL `LIKE` for `best-practices.html`, `source/best-practices`, and `hl7.org/fhir/best-practices.html`; snapshots for `committers/GF#15977`, `committers/Best Practices (GF#15977)`, and `tooling/✔ Why are UCUM annotations flagged as error?`.
- Zulip failed/narrowed searches: `bun run zulip:search fts "best-practices.html"` failed with FTS5 punctuation syntax; SQL found no `source/best-practices` mentions and one canonical page mention in the UCUM tooling thread.
- Confluence searches: FTS for `FHIR Best Practices`, `best practice rules`, `Responsible Owner Maturity Level`, `best practice list`, `committees define best practices`; `refs jira` for FHIR-15977, FHIR-17147, FHIR-47002; snapshots/snippets for 42992015, 76153774, 171443121, 175608092, 175608094, and 413246813.
- Confluence failed/narrowed searches: `bun run confluence:search fts "best-practices.html"` failed with FTS5 punctuation syntax; SQL `LIKE` over `plain_text` found no `best-practices.html`, `source/best-practices`, or `hl7.org/fhir/best-practices.html` Confluence pages.

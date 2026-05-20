# cda-intro page change review

## Metadata
- Page path: `source/cda-intro.html`
- Page status: modified
- Old version: `R4 4.0.1`
- Old commit: `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version: `R6 ballot4 6.0.0-ballot4`
- New commit: `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Output file: `todo/cda-intro.md`
- Review confidence: high

## Investigation coverage
- Confirmed `source/cda-intro.html` exists in both provided source trees; direct diff status is `M` with 4 insertions and 6 deletions.
- Read `SKILL.md`, `jira/README.md`, `zulip/README.md`, `confluence/README.md`, and `spec/README.md` for methodology and command caveats.
- Reviewed rename-aware direct diff, full commit history touching the page between the two commits, individual patches, pickaxe results for changed phrases, and GitHub PR associations.
- Searched Jira, Zulip, and Confluence for explicit key `FHIR-44047`, `cda-intro`, page/topic terms, exact changed phrases, `Responsible Owner`, and punctuation terms.
- Read the full newer page after source/community work; current line references below are from the R6 ballot4 source tree.

## Executive summary
The page remained present and substantively stable. The R4-to-R6 changes are all boilerplate or editorial:

1. `d7b8dadc6213` removed a page-local `<div class="col-12">` wrapper as part of broad HTML template work (PR `HL7/fhir#1295`; 212 files).
2. `270e0ceb7b02` changed the metadata table from `Work Group` + `Maturity Level: N/A` + status to `Responsible Owner` + status as part of broad R6 normative/template changes (PR `HL7/fhir#3901`; 351 files).
3. `887bc2383fb7` applied `FHIR-44047` punctuation corrections, changing two `e.g.` parentheticals to `e.g.,` (PR `HL7/fhir#3951`; 104 files).

No new or removed CDA requirements, examples, REST/search/operation semantics, or terminology bindings were found in the page diff. The only formal Jira connection found for a changed content line is `FHIR-44047`.

## Current R6 ballot4 page state
- The page anchor/title identify `Clinical Document Architecture (CDA) on FHIR` (`source/cda-intro.html` lines 13-14).
- Metadata table now says `Responsible Owner: ... Structured Documents Work Group` and `Standards Status: Informative`; no FMM row is present (line 15).
- Intro says CDA on FHIR implements CDA R2 with FHIR `Composition` (line 18) and defines clinical document characteristics (lines 20-29).
- Scope remains exchange-focused: data formats outside exchange are not addressed, and document management messages are out of scope (lines 32-37).
- Design principles still include existing requirement-like statements, including compatibility with XML/JSON and human readability (lines 54-63).
- Human-readability requirements remain unchanged except for punctuation in an `e.g.,` parenthetical (lines 78-86).
- Two source-visible editor notes remain in the current page (lines 74 and 88); these pre-date the reviewed diff.

## Major change clusters

| Cluster | Evidence | Classification | Meaningful impact |
|---|---|---|---|
| HTML wrapper removal | `d7b8dadc6213`, `update html template`; removed opening `<div class="col-12">` and closing `</div>` | Restructuring/template | Broad template cleanup; no CDA text changed. |
| Metadata table boilerplate | `270e0ceb7b02`, `normative changes for R6`; PR `#3901`; current line 15 | Editorial/template/version boilerplate | Re-labels work group as responsible owner and drops `Maturity Level: N/A`. Page remains Informative. No page-specific Jira found. |
| `e.g.` punctuation | `887bc2383fb7`, `FHIR-44047`; current lines 35 and 83 | Editorial | Adds commas after `e.g.` in two parentheticals; no semantic change. |
| Normative requirements | Direct diff; current lines 54-63 and 80-84 | None changed | Existing `must`/`shall` language is unchanged. |
| Examples | Direct diff | None changed | No examples added/removed. |
| REST/search/operation semantics | Direct diff | None changed | Page has no REST/search/operation behavior changes. |
| References/links/terminology | Direct diff; current lines 15 and 18 | Minor metadata/link boilerplate | Composition link unchanged; status link unchanged; FMM link removed with the FMM cell. |

## Source history

| Date | Commit | Subject | Explicit Jira/PR refs | Relevance |
|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | `update html template` | PR `HL7/fhir#1295` (`Gg 20210627 html template`, merged 2021-06-26T22:33Z) | Broad template change across 212 files; removes `col-12` wrapper from this page. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | `normative changes for R6` | PR `HL7/fhir#3901` (`2025 11 gg normative`, merged 2025-11-02T02:17Z) | Broad R6 metadata/table change across 351 files; changes WG/FMM boilerplate on this page. |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | `FHIR-44047` | Jira `FHIR-44047`; PR `HL7/fhir#3951` (`FHIR-44047`, merged 2025-11-06T19:03Z) | Applies punctuation correction in two `e.g.` parentheticals on this page. |

Pickaxe checks tied `Responsible Owner` to `270e0ceb7b02`, `e.g., the data format` and `e.g., by author` to `887bc2383fb7`, and `<div class="col-12">` removal to `d7b8dadc6213`.

## Jira evidence

### Explicitly referenced Jira issues

| Jira | Status/resolution | Ballot/version fields | Evidence connecting to page change | Assessment |
|---|---|---|---|---|
| `FHIR-44047` | `Resolved - change required`; resolution `Persuasive`; type `Technical Correction`; category `Correction` | Raised in `R6`; ballot `BALLOT-56530`; related URL `https://hl7.org/fhir/6.0.0-ballot1/`; related pages `FHIR-core-many` | Description asks to correct `e.g.`/`i.e.` punctuation throughout; source commit `887bc2383fb7` is titled `FHIR-44047` and edits two `e.g.` occurrences on this page. | Strong formal evidence for the punctuation-only changes. Jira snapshot still did not show `Applied` status. |

### Other relevant Jira issues found by search

| Jira | Status/resolution | Why considered | Relevance to this R4-to-R6 diff |
|---|---|---|---|
| `FHIR-7465` | `Duplicate`; related URL `http://hl7.org/fhir/2015May/cda-intro.html`; related page `FHIR-core-cda-intro` | Direct `cda intro` search hit; complained in 2015 that copied SDC content was in the wrong place. | Historical page context only; not connected to the R4-to-R6 changes. |
| `FHIR-13528` | `Published`; `Persuasive with Modification`; related artifact `FHIR-core-Composition`; applied for `STU3`; vote date 2018-01-18 | `CDA on FHIR` search hit; concerned naming of the ClinicalDocument profile. | Context only. The resolution says the profile should remain `ClinicalDocument` and that `CDA on FHIR` should no longer be used for that profile/page set; it does not directly cite `cda-intro.html` or the reviewed diff. |
| `FHIR-55949` | `Applied` | Only Jira hit for exact `Responsible Owner`. | Not relevant to this page; device workgroup naming issue. |

Jira searches for `source/cda-intro.html`, exact changed phrases, `build.fhir.org/cda-intro.html`, and removal-related phrases found no page-change tracker beyond `FHIR-44047` and the older/contextual issues above.

## Community and workgroup evidence

### Zulip

| Stream/topic | Date(s) | Evidence | Relevance/confidence |
|---|---|---|---|
| `#fmg` / `R6 Checklist - Automation??` | 2025-10-23 to 2025-10-24 | Snapshot found Gay Dolin saying, under SD, `I don't think cda:intro should be present (since its not FHIR)`; Gino Canessa replied that removing an informative page likely requires a WG vote, that `https://build.fhir.org/cda-intro.html` was still in the build, and that WGs could remove pages themselves or ask Grahame. | Genuine page-specific informal evidence, but not a formal disposition and not tied to any applied source change; current R6 ballot4 still includes the page. |
| `#implementers` / `FHIR document`; `#implementers` / `$document, text generation` | 2019-2020 | Search found links to `cda-intro.html` as general CDA/FHIR document context. | Background only; no change rationale. |

No Zulip hits were found for quoted `FHIR-44047`, `exempli gratia`, or the exact punctuation/title phrases. Unquoted hyphenated searches initially failed due FTS parsing and were retried quoted/with SQL `LIKE`.

### Confluence

| Page ID / space | Page kind | Evidence | Relevance/confidence |
|---|---|---|---|
| `234784975` / `FHIRI` (`FHIR Infrastructure Minutes WGM 202405 - Dallas`) | minutes | `refs jira FHIR-44047` found the page. Plain-text context under Thursday Q2 says issues from prior for-comment ballot include `FHIR-44047 will fix` near a motion/vote block. | Workgroup/process evidence supporting `FHIR-44047` as an accepted correction. The flattened page text is enough for `will fix`, but I do not rely on a precise vote assignment to this issue. |
| Search results for `CDA on FHIR` | mixed TSC/SD/project pages | Mostly C-CDA-on-FHIR IG publication and project context. | Not tied to this core `cda-intro.html` R4-to-R6 source diff. |

Confluence searches for `cda-intro`, `cda:intro`, `build.fhir.org/cda-intro`, `R6 Checklist cda`, and removal-related phrases found no formal page-removal decision in the local Confluence mirror.

## Highest-priority investigation items

- **H-1 (P2, consistency/process): Decide whether `source/cda-intro.html` should remain in FHIR core for R6.** Zulip `#fmg/R6 Checklist - Automation??` records an SD concern that `cda:intro` may not belong because it is not FHIR, but current R6 ballot4 source still contains the page and no Jira/Confluence formal removal disposition was found. Action: locate or create a formal SD/FM G tracker/minute if removal is intended.

## Confirmed editorial/rendering defects

- **E-1 (P3, editorial): Current source still contains two `[EDITORS: ...]` notes.** Lines 74 and 88 are visible in the R6 ballot4 source and appear to be unfinished editorial notes. They were not introduced by this diff, so treat as pre-existing cleanup rather than a regression.

## Timeline

| Date | Event type | Evidence | Notes |
|---|---|---|---|
| 2015-05-10 | Jira created | `FHIR-7465` | Historical `cda-intro.html` placement complaint; duplicate; no R4-to-R6 link. |
| 2018-01-18 / 2019-01-04 | Jira vote/resolution/publication | `FHIR-13528` | Profile naming context; not a direct page-diff driver. |
| 2021-06-27 | Source commit | `d7b8dadc6213`; PR `#1295` | Broad HTML template update removes wrapper from this page. |
| 2024-01-22 | Jira created | `FHIR-44047` | Requests correcting `e.g.`/`i.e.` punctuation throughout R6 ballot content. |
| 2024-05-23 | Jira resolved | `FHIR-44047` | Resolution `Persuasive`; status remains `Resolved - change required` in snapshot. |
| 2024-05 WGM | WG/process evidence | Confluence page `234784975` | FHIR-I minutes list `FHIR-44047 will fix`. |
| 2025-10-23/24 | Zulip discussion | `#fmg/R6 Checklist - Automation??` | Informal concern about whether `cda-intro` should remain; no applied removal found. |
| 2025-10-31 | Source commit | `270e0ceb7b02`; PR `#3901` | Broad R6 normative/metadata table update. |
| 2025-11-03 | Source commit | `887bc2383fb7`; PR `#3951` | Applies `FHIR-44047` punctuation changes on this page. |
| R6 ballot4 source | Publication/source boundary | commit `5d67a34a13a5` | Page is present with only the above changes relative to R4 source. |

## Gaps between intent and applied text

- **G-1 (P3, jira-gap): `FHIR-44047` is applied in source but Jira status still says `Resolved - change required`.** Source commit/PR evidence shows the page was edited, but Jira did not show `Applied`/`Published` in the local snapshot.
- **G-2 (P2, confluence-gap/jira-gap): No formal tracker or Confluence decision was found for the Zulip suggestion to remove `cda-intro`.** The current source keeps the page.
- **G-3 (P3, consistency): `FHIR-13528` discourages `CDA on FHIR` naming for the ClinicalDocument profile context, while this intro page still uses `CDA on FHIR`.** The issue does not clearly target `source/cda-intro.html`; verify scope before treating this as a defect.

## Source/history context to preserve

- Do not treat `d7b8dadc6213` or `270e0ceb7b02` as page-specific content decisions; both were broad mechanical/template commits.
- `FHIR-44047` is an editorial punctuation correction, not a CDA semantic change.
- The page status remains `Informative`; removal of `Maturity Level: N/A` is metadata boilerplate, not a maturity/status upgrade.
- Informal Zulip page-removal discussion postdates most historical content and did not manifest as a source deletion by R6 ballot4.

## Suggested investigation order

1. Ask SD/FM G whether the 2025-10 Zulip concern about keeping `cda-intro.html` resulted in a WG vote or tracker; if yes, link it and apply/remove accordingly.
2. Update or verify Jira workflow for `FHIR-44047` if the source changes are accepted as applied for R6.
3. Review current source editor notes on lines 74 and 88 and either remove, resolve, or mark them so they do not publish as reader-facing text.
4. Clarify whether `FHIR-13528` naming guidance applies only to the ClinicalDocument profile pages or also to this intro page.

## Evidence log

- `test -f` confirmed both old and new `source/cda-intro.html` files exist; line counts were 97 old and 95 new.
- `git diff --find-renames old new -- source/cda-intro.html` returned modified-only diff: wrapper removal, metadata table boilerplate, and two punctuation edits.
- `git log --reverse old..new -- source/cda-intro.html` returned exactly three commits: `d7b8dadc6213`, `270e0ceb7b02`, `887bc2383fb7`.
- `git show --patch` verified each listed commit really changes this page.
- GitHub commit-to-PR API returned PRs `#1295`, `#3901`, and `#3951` for the three commits.
- Jira snapshots read: `FHIR-44047`, `FHIR-7465`, `FHIR-13528`.
- Jira FTS searches tried explicit key, `cda-intro`, `source/cda-intro.html`, `CDA on FHIR`, exact changed phrases, `Responsible Owner`, and removal terms. Hyphenated unquoted `cda-intro` caused FTS parsing errors; quoted/space variants were used afterward.
- Zulip searches tried `FHIR-44047`, `cda-intro`, `CDA on FHIR`, `Responsible Owner`, punctuation phrases, exact changed phrases, and SQL `LIKE` fallback. Only the FMG R6 checklist thread was page-specific.
- Confluence searches tried `refs jira FHIR-44047`, FTS for `FHIR-44047`, `cda-intro`, `cda:intro`, `CDA on FHIR`, `Responsible Owner`, `R6 Checklist cda`, and removal terms. Page `234784975` was the only formal process hit for a changed line.
- Full Confluence/Zulip snapshots were large in the CLI; targeted database/plain-text extraction was used for relevant snippets after invoking snapshot/search.

## Problems discovered and follow-up items

| ID | Type | Priority | Evidence | Recommended action |
|---|---|---:|---|---|
| H-1 | consistency | P2 | Zulip `#fmg/R6 Checklist - Automation??` says SD questioned whether `cda:intro` should be present; source still includes it. | Find/create formal SD/FM G decision and Jira if removal or retention needs tracking. |
| E-1 | editorial | P3 | Current source lines 74 and 88 contain `[EDITORS: ...]` notes. | Clean up or intentionally mark editor notes before final publication. |
| G-1 | jira-gap | P3 | `FHIR-44047` source commit/PR applied; Jira snapshot status remains `Resolved - change required`. | Update Jira workflow if changes are accepted/applied. |
| G-2 | confluence-gap | P2 | No Confluence/Jira evidence found for the Zulip removal suggestion. | Search later SD/FM G minutes after 2025-10-24 and record the formal decision. |
| G-3 | consistency | P3 | `FHIR-13528` naming resolution may conflict with current page title, but scope is unclear. | Verify whether the resolution applies to `cda-intro.html`; avoid changing until confirmed. |
| FS-1 | follow-up-search | P3 | Local searches may predate later R6 decisions. | Re-run Jira/Zulip/Confluence searches for `cda-intro`, `cda:intro`, and `build.fhir.org/cda-intro.html` after updated snapshots. |
| FS-2 | follow-up-search | P3 | `270e0ceb7b02` had no page-specific Jira. | If template rationale matters, inspect PR `HL7/fhir#3901` discussion/review comments. |
| FS-3 | follow-up-search | P3 | Confluence flattened text around `FHIR-44047` was sufficient for `will fix` but not clean vote attribution. | If vote precision is needed, inspect the rendered Confluence table/page manually. |

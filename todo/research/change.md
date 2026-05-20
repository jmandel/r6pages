# change research appendix

## Scope and coverage

- Page path: `source/change.html`; page label: `change`.
- Compared R4 4.0.1 source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to R6 ballot4 6.0.0-ballot4 source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Page boundary confirmed: `source/change.html` exists in both trees; detected status is modified, not added/deleted/renamed.
- Newer page was read end-to-end through `</html>` (`wc -l` reports 80 newline-counted lines; file lacks a final newline, so viewers may number the closing line as 81).
- Commits touching this page between the boundary commits: 3. Explicit Jira keys in commit subjects, PR bodies, or patches: none.
- Jira searched by page path/title, exact changed phrases, `change` topic terms, template/status terms, commit/PR references, and candidate keys discovered by search. Snapshotted `FHIR-11265`, `FHIR-39289`, and `FHIR-55949` where potentially explanatory or contextual.
- Zulip searched for candidate Jira keys, exact page phrases, changed phrases, path terms, commit SHAs, and PR URLs. No page-specific threads were found.
- Confluence searched for candidate Jira keys, page phrases, template/status terms, commit SHAs, and PR URLs. Snapshotted/mined relevant pages `144983126`, `161061640`, and `413246813` as context only.
- Caveats: FTS tokenization treats dots/hyphens specially; unquoted `change.html`, unquoted `FHIR-xxxxx`, and GitHub URLs caused syntax/no-column errors in some tools, so those searches were retried with quoted terms or SQL `LIKE`. The page is an informative essay, not a conformance page; no REST/search/operation semantics are present.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source file | Old R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/change.html` | Boundary file exists in old tree. |
| Source file | New R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/change.html` | Boundary file exists in new tree; read end-to-end. |
| Source lines | New page metadata row | New file lines 14-16 | Shows `Responsible Owner` label and no `Maturity Level: N/A`. |
| Source lines | New changed prose | New file lines 23-24 | Shows `and by economic` and `real-world` editorial change. |
| Commit | HTML template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`; PR https://github.com/HL7/fhir/pull/1295 | Removes page wrapper `<div class="col-12">`; broad mechanical commit. |
| Commit | QA related changes | `dad7cf37c75822c352509e1c2e8d050408d0be18`; PR https://github.com/HL7/fhir/pull/2714 | Changes the only substantive prose words in this R4->R6 diff. |
| Commit | R6 normative/template changes | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`; PR https://github.com/HL7/fhir/pull/3901 | Changes metadata row label and removes FMM column. |
| Jira | Historic same-page typo | https://jira.hl7.org/browse/FHIR-11265 | Related URL was `2016sep/change.html`; describes same sentence but predates R4 and does not explain 2023 QA commit. |
| Jira | Context-only maturity/profile issue | https://jira.hl7.org/browse/FHIR-39289 | Search hit for `Maturity Level`/`Informative`; retracted and not about this appendix page. |
| Jira | Context-only Responsible Owner wording | https://jira.hl7.org/browse/FHIR-55949 | Shows later use of `Responsible Owner` terminology, but concerns Devices WG naming, not `change.html`. |
| Confluence | FHIR-I WGM minutes | https://confluence.hl7.org/spaces/FHIRI/pages/144983126/FHIR+Infrastructure+Minutes+WGM+202301+-+Henderson | Mentions `FHIR-39289` assigned back for an example; context-only. |
| Confluence | FHIR-I CC minutes | https://confluence.hl7.org/spaces/FHIRI/pages/161061640/FHIR+Infrastructure+Minutes+CC+2023-03-27 | Mentions proposed retraction/workflow problem for `FHIR-39289`; context-only. |
| Confluence | OO WGM minutes | https://confluence.hl7.org/spaces/OO/pages/413246813/2026-01-26-30_WGM | Later context that first WG listed may be the responsible owner; not causal for this page. |
| Local command | Direct diff | `git -C <new-tree> --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/change.html` | Reproduces the 10-line diff. |
| Local command | Source history | `git -C <new-tree> --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/change.html` | Reproduces the 3 touching commits. |
| Local command | Jira snapshots | `bun run jira:search snapshot FHIR-11265`; `bun run jira:search snapshot FHIR-39289` | Reopens formal tracker context. |
| Local command | Confluence snapshots | `bun run confluence:search snapshot 144983126`; `bun run confluence:search snapshot 161061640`; `bun run confluence:search snapshot 413246813` | Reopens meeting/context evidence. |

## Change summary

- **Metadata/template/navigation (mechanical/noise):** The 2021 template commit removes the outer `<div class="col-12">` wrapper and matching close tag. The 2025 R6 template/normative commit changes the header table from `Work Group` plus `Maturity Level: N/A` plus `Standards Status: Informative` to `Responsible Owner: ... Work Group` plus `Standards Status: Informative`. These are page chrome changes, not changes to the appendix argument.
- **Editorial prose (editorial only):** The 2023 QA commit changes `biological and information revolutions, by economic imperative` to `biological and information revolutions and by economic imperative`, and changes `real world` to `real-world`. No source history, Jira, Zulip, or Confluence evidence tied this to a substantive policy decision.
- **Unchanged content:** Title, main narrative, image, references, maintainer line, and page status remain effectively the same. No examples, resource definitions, terminology bindings, operations, REST/search semantics, constraints, conformance language, or normative requirements are added/removed/changed.
- **Actionable editorial note:** The new phrase `grounded in the real-world which is changing rapidly` is awkward because `real-world` is hyphenated as a noun phrase; see action finding `E-001`.

## Source history

| Date | Commit | PR | Subject | Change to `source/change.html` | Classification |
|---|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | HL7/fhir#1295, merged 2021-06-26 | `update html template` | Removed opening `<div class="col-12">` and closing `</div>`; commit touched 212 files. | Mechanical/template |
| 2023-02-21 | `dad7cf37c75822c352509e1c2e8d050408d0be18` | HL7/fhir#2714, merged 2023-02-21 | `QA related changes` | Replaced comma before `by economic` with `and by`; hyphenated `real-world`; commit touched 625 files. | Editorial/QA |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | HL7/fhir#3901, merged 2025-11-02 | `normative changes for R6` | Header row now says `Responsible Owner:` and drops the FMM `Maturity Level: N/A` cell; commit touched 351 files. | Metadata/template |

Context from pickaxe outside the R4->R6 range: `dd611870612698f2ca55db0d25f52c9ed1f6d750` (2015-08-20, `#5319 - relate appendix to FHIR more directly`) introduced the modern first paragraph with `and by economic` and a double period. `5ebb8db8d2d83621e046ede3e487cec74eb4f79b` (2018-04-01, `GF #15589 ... FHIR Ballot QA on html pages`) changed that to the R4 comma wording. The 2023 QA commit changed it back.

## Jira evidence

- **Explicit Jira keys from commits/patches/PR bodies:** none. The three associated PR bodies left the Jira tracker field blank.
- **Plausibly related same-page issue:** `FHIR-11265` (`Remove second period. - 2016-09 core #419`) has related URL `http://hl7.org/fhir/2016sep/change.html`, related page `FHIR-core-change`, and describes the same sentence with desired wording ending `revolutions and by economic imperative and social change.` It was created 2016-09-18, resolved 2017-03-27, and comments cite SVN revision 10321. This is useful context for the sentence but predates R4 and does not prove that the 2023 QA commit was applying this Jira.
- **Context-only Jira hits:** `FHIR-39289` (`Differentiate between normative/spec and informative profiles`) surfaced from `Maturity Level`/`Informative` searches, but was retracted after the reporter found no actual profiles with FMM N/A/status informative. It does not explain this appendix's header change. `FHIR-55949` uses the term `Responsible Owner`, but concerns the Devices workgroup name in R6 resource pages after ballot4; not this page.
- **No useful Jira hits:** exact searches for `source/change.html`, `Healthcare Informatics Change`, `The Role of Informatics`, `Reactive to Proactive Healthcare`, `Responsible Owner` plus `Maturity Level`, and commit SHAs found no causal issue. Broad `real-world` searches returned unrelated issues.

## Zulip evidence

No Zulip thread was found that discusses this page or the R4->R6 changes. Searches for quoted `FHIR-11265`, quoted `FHIR-39289`, page title phrases, `biological and information revolutions`, `Responsible Owner`/`Maturity Level`, `normative changes for R6`, `/change.html`, the three PR URLs, and the three commit SHAs produced either no results or broad irrelevant hits. No promising Zulip topic was snapshotted.

## Confluence evidence

- `FHIR-11265`: no Confluence `refs jira` or FTS results.
- `FHIR-39289`: FHIR-I minutes page `144983126` records the WGM action `We assign back to Bas to provide an example`; FHIR-I minutes page `161061640` records that the issue was proposed for retraction but Jira workflow did not allow it, assigned to Lloyd to figure out. This supports treating `FHIR-39289` as context-only, not as a driver for `change.html`.
- `Responsible Owner` context: OO WGM page `413246813` (2026-01-26/30) says the first WG listed on a module page is the responsible owner and mentions FMG standardization, but it is after the R6 ballot4 boundary and about co-owned OO/module content, not this appendix.
- Exact page-title/path/prose searches in Confluence found no page-specific meeting minutes or publication request.

## Timeline

- **2015-08-20 source context:** `dd611870612698f2ca55db0d25f52c9ed1f6d750` rewrote the appendix introduction and included `revolutions and by economic ... change..`.
- **2016-09-18 / 2017-03-27 Jira context:** `FHIR-11265` filed/resolved to remove the double period on `2016sep/change.html`; comments cite SVN revision 10321.
- **2018-04-01 source context:** `5ebb8db8d2d83621e046ede3e487cec74eb4f79b` changed the sentence to the comma form later present in R4.
- **2019-10-30 old boundary:** R4 4.0.1 commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` (`Corrected typo.`) is the older comparison endpoint.
- **2021-06-26/27 PR/source:** PR #1295 merged; commit `d7b8dadc...` removed the page wrapper as part of an HTML template update.
- **2023-01-20 and 2023-03-27 meeting context:** Confluence minutes discuss/retract `FHIR-39289`; context only.
- **2023-02-21 PR/source:** PR #2714 merged; commit `dad7cf37...` made the two first-paragraph editorial changes.
- **2025-10-31 / 2025-11-02 source/PR:** commit `270e0ceb...` and PR #3901 changed the metadata row for R6 template/normative presentation.
- **2025-12-18 new boundary:** R6 ballot4 commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` (`bump version for publication`) is the newer comparison endpoint.
- **2026 context after boundary:** `FHIR-55949` and OO minutes use `Responsible Owner` terminology, but they are later/contextual and do not explain this page's change.

## Evidence log

- Confirmed page boundary with `test -f <old>/source/change.html` and `test -f <new>/source/change.html`; both existed.
- Ran rename-aware direct diff for `source/change.html`; established only 10 changed lines: wrapper removal, header table change, and two editorial prose changes.
- Ran source log between boundary commits; established exactly 3 touching commits. Ran `git show --stat --patch` for each and `git show --shortstat` to classify broad mechanical commits.
- Ran pickaxe (`git log -S`) for `and by economic`, comma wording, `real-world`, `real world`, `Responsible Owner:`, `<div class="col-12">`, and `Maturity Level</a>: N/A`; established older context and that `real-world` appears in this page only at the 2023 QA commit.
- Queried GitHub with `gh api /repos/HL7/fhir/commits/<sha>/pulls` and `gh pr view`; found PRs #1295, #2714, #3901, with blank Jira fields.
- Ran Jira FTS/snapshots for page phrases, changed phrases, template terms, commits/PRs, `FHIR-11265`, `FHIR-39289`, and `FHIR-55949`. Dot-containing FTS terms failed until quoted/avoided; those failures reduce confidence for punctuation-heavy paths but SQL/phrase retries found no causal tracker.
- Ran Zulip FTS/SQL searches for candidate Jira keys, exact phrases, path/title terms, commit SHAs, and PR URLs. Unquoted issue-key FTS failed because hyphens were parsed; quoted and SQL `LIKE` retries found no relevant messages.
- Ran Confluence `refs jira`, FTS, SQL, and snapshots for candidate keys, exact phrases, template terms, commit SHAs, and PR URLs. Found only context-only pages described above.
- Read the full newer `source/change.html` with `wc -l` and `sed -n '1,220p'`, and cross-checked line numbers with file view.

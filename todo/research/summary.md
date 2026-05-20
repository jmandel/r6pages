# summary research appendix

## Scope and coverage

- Page path: `source/summary.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` (`2019-10-30`, `Corrected typo.`)
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` (`2025-12-18`, `bump version for publication`)
- Page boundary: present in both trees.
- Newer page read end-to-end: yes, 103 lines at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/summary.html`.
- Commit count touching `source/summary.html` between old and new commits: 7.
- Explicit Jira keys found in source-history commits: `FHIR-41514`, `FHIR-41327`.
- Jira/Zulip/Confluence searches performed for explicit Jira keys and distinctive changed phrases, including `Candidate additions to the FHIR specification`, `link to be provided`, `Ontology-based analysis with formal mapping`, `Summary page example is out of date`, and `Follow us on Twitter`.
- Important caveat: the `FHIR-41514` source commit changed the referenced `images/shot.png` asset as well as `source/summary.html`; this appendix focuses on `source/summary.html` but notes that asset-level implementation evidence.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/summary.html:18` | Old metadata table included Work Group, Maturity Level N/A, and Informative status. |
| Source | R4 ontology bullet | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/summary.html:53` | Bullet later removed by `FHIR-41327`. |
| Source | R4 development-process text | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/summary.html:84-95` | Old text described mixed Normative/Trial Use publication and included the Twitter hashtag. |
| Source | R6 metadata table | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/summary.html:18` | New table says `Responsible Owner` and removes maturity-level display. |
| Source | R6 feature list | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/summary.html:39-53` | Shows ontology bullet is gone. |
| Source | R6 development-process placeholder | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/summary.html:89-94` | Current page contains the concrete placeholder `For a list, see link to be provided`. |
| Commit | Template wrapper removal | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Mechanical HTML template update; PR https://github.com/HL7/fhir/pull/1295. |
| Commit | QA hyphen edit | `dad7cf37c75822c352509e1c2e8d050408d0be18` / https://github.com/HL7/fhir/commit/dad7cf37c75822c352509e1c2e8d050408d0be18 | Editorial `real world` -> `real-world`; PR https://github.com/HL7/fhir/pull/2714. |
| Commit | QA punctuation fix | `9f780149387dc652bec02aa7744e52774acddbc9` / https://github.com/HL7/fhir/commit/9f780149387dc652bec02aa7744e52774acddbc9 | Reverted accidental `etc..`; PR https://github.com/HL7/fhir/pull/2714. |
| Commit | `FHIR-41514` implementation | `49a9b66cef8df71a54462ccd1c30af90167bc85c` / https://github.com/HL7/fhir/commit/49a9b66cef8df71a54462ccd1c30af90167bc85c | Removed Twitter hashtag from page and updated `images/shot.png`; PR https://github.com/HL7/fhir/pull/3340. |
| Commit | R6 normative/page-process edit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Replaced old Normative/Trial Use paragraph with candidate-additions text and placeholder; PR https://github.com/HL7/fhir/pull/3901. |
| Commit | Review wording fix | `4d92dfae4cd04c18da95802751a0f7737d50cf81` / https://github.com/HL7/fhir/commit/4d92dfae4cd04c18da95802751a0f7737d50cf81 | Fixed `developed on other publications` to `developed in other publications`; PR https://github.com/HL7/fhir/pull/3901. |
| Commit | `FHIR-41327` implementation | `66bdaaf37b034ecec2dfa4369830f9479eb615fd` / https://github.com/HL7/fhir/commit/66bdaaf37b034ecec2dfa4369830f9479eb615fd | Removed inaccurate ontology-analysis bullet; PR https://github.com/HL7/fhir/pull/3920. |
| Jira | `FHIR-41514` | https://jira.hl7.org/browse/FHIR-41514; reopen locally with `bun run jira:search snapshot FHIR-41514` | Formal issue for outdated summary example and Twitter hashtag removal. |
| Jira | `FHIR-41327` | https://jira.hl7.org/browse/FHIR-41327; reopen locally with `bun run jira:search snapshot FHIR-41327` | Formal issue for removing ontology-analysis bullet. |
| Jira | `FHIR-13590` | https://jira.hl7.org/browse/FHIR-13590; reopen locally with `bun run jira:search snapshot FHIR-13590` | Older context for softened ontology-analysis wording; not an R4->R6 action driver. |
| Confluence | FHIR-I 2024-01-22 minutes | Page `216240953`, https://confluence.hl7.org/spaces/FHIRI/pages/216240953/FHIR+Infrastructure+Minutes+CC+2024-01-22; `bun run confluence:search snapshot 216240953` | Records `FHIR-41514 Persuasive with Mod` motion, Corey Spears/Rick Geimer: 15-0-0. |
| Confluence | FHIR-I 2023-12-18 minutes | Page `212731099`, https://confluence.hl7.org/spaces/FHIRI/pages/212731099/FHIR+Infrastructure+Minutes+CC+2023-12-18; `bun run confluence:search snapshot 212731099` | Records `FHIR-41327 Persuasive with Mod` motion, Grahame Grieve/Rick Geimer: 7-0-0. |
| Confluence | OO 2024-02-29 minutes | Page `220705369`, https://confluence.hl7.org/spaces/OO/pages/220705369/2024-02-29+OO+Main; `bun run confluence:search snapshot 220705369` | Context-only hit mentioning `FHIR-41514`; not used as page-specific rationale. |
| PR | Template update | https://github.com/HL7/fhir/pull/1295 | PR containing `d7b8dadc`. |
| PR | QA updates | https://github.com/HL7/fhir/pull/2714 | PR containing `dad7cf37` and `9f780149`. |
| PR | 2025 sweep | https://github.com/HL7/fhir/pull/3340 | PR containing `49a9b66`. |
| PR | R6 normative | https://github.com/HL7/fhir/pull/3901 | PR containing `270e0ceb` and `4d92dfae`; body did not identify a Jira key for this page. |
| PR | Misc tasks | https://github.com/HL7/fhir/pull/3920 | PR containing `66bdaaf`. |

## Change summary

### Metadata/template/navigation

- The outer `<div class="col-12">` wrapper and matching closing `</div>` were removed by `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` (`update html template`). This looks mechanical/template-related.
- The metadata table changed from plain Work Group plus `Maturity Level: N/A` to `Responsible Owner: ... Work Group` and no maturity-level cell at `/source/summary.html:18`. This came from broad R6 normative work in `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, not from a page-specific Jira found in this investigation.

### Editorial only

- `real world clinical` became `real-world clinical` in `dad7cf37c75822c352509e1c2e8d050408d0be18`.
- A transient accidental `etc..` was introduced in `dad7cf37c75822c352509e1c2e8d050408d0be18` and fixed in `9f780149387dc652bec02aa7744e52774acddbc9`; final R6 text matches R4 punctuation.

### Semantic guidance

- The R4 development-process paragraph said FHIR is a mixed standard with Normative portions and Trial Use portions, and that HL7 monitors implementations to improve the specification. R6 replaces this with: `Candidate additions to the FHIR specification are developed in other publications. For a list, see link to be provided.` See current source lines `/source/summary.html:89-94`.
- The first version of the new sentence said `developed on other publications`; `4d92dfae4cd04c18da95802751a0f7737d50cf81` corrected it to `developed in other publications`.
- No Jira/Zulip/Confluence evidence was found for the candidate-additions wording or the placeholder. The placeholder is the only actionable issue identified.

### Jira-backed page-specific changes

- `FHIR-41514` requested that the summary example be updated to R6/JSON and that the Twitter hashtag reference be removed. In `source/summary.html`, `49a9b66cef8df71a54462ccd1c30af90167bc85c` removed `Follow us on Twitter using #FHIR`; the same commit also changed `images/shot.png`.
- `FHIR-41327` asked whether the ontology-analysis bullet was still accurate. Its resolution says: `We will remove the bullet. It's not accurate and there are no current plans to make it accurate.` Commit `66bdaaf37b034ecec2dfa4369830f9479eb615fd` removed the bullet from `source/summary.html`.

### Mechanical/noise

- Broad PRs/commits (`d7b8dadc`, `dad7cf37`, `9f780149`, `270e0ceb`) touched many files or performed QA/template updates. They should not be overread as page-specific decisions except where exact page text changed.

## Source history

| Date | Commit | Subject | PR | Page effect | Classification |
|---|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | `update html template` | https://github.com/HL7/fhir/pull/1295 | Removed `<div class="col-12">` wrapper and closing `</div>`. | Mechanical/template |
| 2023-02-21 | `dad7cf37c75822c352509e1c2e8d050408d0be18` | `QA related changes` | https://github.com/HL7/fhir/pull/2714 | Hyphenated `real-world`; accidentally changed `etc.` to `etc..`. | Editorial/QA |
| 2023-02-21 | `9f780149387dc652bec02aa7744e52774acddbc9` | `more QA` | https://github.com/HL7/fhir/pull/2714 | Restored `etc.`. | Editorial/QA |
| 2025-03-03 | `49a9b66cef8df71a54462ccd1c30af90167bc85c` | `FHIR-41514 Summary page example is out of date` | https://github.com/HL7/fhir/pull/3340 | Removed Twitter hashtag sentence from page; full commit also changed `images/shot.png`. | Jira-backed editorial/example |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | `normative changes for R6` | https://github.com/HL7/fhir/pull/3901 | Changed metadata table and replaced mixed-standard paragraph with candidate-additions paragraph containing placeholder. | Semantic guidance plus defect |
| 2025-11-01 | `4d92dfae4cd04c18da95802751a0f7737d50cf81` | `review fixes` | https://github.com/HL7/fhir/pull/3901 | Fixed `developed on other publications` -> `developed in other publications`. | Editorial |
| 2025-11-03 | `66bdaaf37b034ecec2dfa4369830f9479eb615fd` | `FHIR-41327 Status of ontology-based analysis with formal mapping for correctness?` | https://github.com/HL7/fhir/pull/3920 | Removed ontology-analysis bullet. | Jira-backed correction |

Pickaxe checks:

- `git log -S "Candidate additions to the FHIR specification" -- source/summary.html` found `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`.
- `git log -S "Ontology-based analysis with formal mapping for correctness" -- source/summary.html` found `6ba53e94c5cfafb45448eef3c6d1ca463d5ab287` (`2018-04-02`, context before R4) and `66bdaaf37b034ecec2dfa4369830f9479eb615fd`.
- `git log -S "Follow us on Twitter" -- source/summary.html` found the old introduction and `49a9b66cef8df71a54462ccd1c30af90167bc85c`.
- `git log -S "real-world clinical" -- source/summary.html` found `dad7cf37c75822c352509e1c2e8d050408d0be18`.

## Jira evidence

### Explicit Jira keys from commits/patches

#### `FHIR-41514`: Summary page example is out of date

- Snapshot command: `bun run jira:search snapshot FHIR-41514`
- Jira link: https://jira.hl7.org/browse/FHIR-41514
- Status: Applied; resolution: Persuasive with Modification; work group: fhir-i; vote date: 2024-01-22; vote: Corey Spears/Rick Geimer: 15-0-0; applied for version: R6.
- Description says the summary page XML example looked out of date and suggested a JSON Patient example.
- Resolution says the example would be updated to comply with R6 and switched to JSON; it also says: `While we're at it, we'll remove the reference to the Twitter hashtag on the page.`
- Implementation evidence: `49a9b66cef8df71a54462ccd1c30af90167bc85c` removed the Twitter hashtag from `source/summary.html`; the same commit changed `images/shot.png`, which is the image referenced by `<img src="shot.png"/>`.

#### `FHIR-41327`: Status of ontology-based analysis with formal mapping for correctness?

- Snapshot command: `bun run jira:search snapshot FHIR-41327`
- Jira link: https://jira.hl7.org/browse/FHIR-41327
- Status: Applied; resolution: Persuasive with Modification; work group: fhir-i; vote date: 2023-12-18; vote: Grahame Grieve/Rick Geimer: 7-0-0; applied for version: R6.
- Description asked whether `Ontology-based analysis with formal mapping for correctness (under development)` was still active or should be removed.
- Resolution says: `We will remove the bullet. It's not accurate and there are no current plans to make it accurate.`
- Implementation evidence: `66bdaaf37b034ecec2dfa4369830f9479eb615fd` removed the bullet from `source/summary.html`.

### Other Jira issues that plausibly explain changed text

- `FHIR-13590` (`Further over-statements`) is older context for the ontology phrase. It objected to the stronger pre-R4 claim `Solid ontology-based analysis with a rigorous formal mapping for correctness`; its resolution was to soften the language. This likely explains why R4 had the weaker `(under development)` wording, but it does not create a current R6 action because `FHIR-41327` later removed the bullet entirely.

### Context-only Jira hits that should not drive action

- `FHIR-5574` appeared in the broad `summary Twitter FHIR` Jira search but is about incorrect code systems and not this page change.
- No Jira issue was found for `Candidate additions to the FHIR specification`, `developed in other publications`, `link to be provided`, or the summary-page placeholder.

## Zulip evidence

- `bun run zulip:search fts '"FHIR-41514"' --limit 20`: no results.
- `bun run zulip:search fts '"FHIR-41327"' --limit 20`: no results.
- `bun run zulip:search fts '"link to be provided"' --limit 20`: no results.
- `bun run zulip:search fts '"Summary page example is out of date"' --limit 20`: no results.
- `bun run zulip:search fts '"Candidate additions to the FHIR specification"' --limit 20`: no results.
- `bun run zulip:search fts '"Ontology-based analysis" "formal mapping"' --limit 20`: no results.
- Initial unquoted issue-key searches such as `bun run zulip:search fts "FHIR-41514" --limit 20` failed because FTS parsed the hyphenated key as an expression; the quoted-key searches above were the corrected searches.

No Zulip thread was elevated to the action file.

## Confluence evidence

### `FHIR-41514`

- `bun run confluence:search refs jira FHIR-41514` found:
  - Page `216240953`, `FHIR Infrastructure Minutes CC 2024-01-22`: records `FHIR-41514 Persuasive with Mod Motion: Corey Spears/Rick Geimer: 15-0-0`.
  - Page `220705369`, `2024-02-29 OO Main`: mentions `FHIR-41514` in a longer list. This appears context-only for this page review and was not used as causal evidence.
- Snapshot command for the FHIR-I minutes: `bun run confluence:search snapshot 216240953`.

### `FHIR-41327`

- `bun run confluence:search refs jira FHIR-41327` found:
  - Page `212731099`, `FHIR Infrastructure Minutes CC 2023-12-18`: records `FHIR-41327 Persuasive with Mod Motion: Grahame Grieve/Rick Geimer: 7-0-0`.
- Snapshot command: `bun run confluence:search snapshot 212731099`.

### Placeholder/new development-process wording

- `bun run confluence:search fts '"Candidate additions to the FHIR specification"' --limit 10`: no results.
- `bun run confluence:search fts '"link to be provided"' --limit 10`: no results.
- `bun run confluence:search fts '"developed in other publications"' --limit 10`: no results.

## Timeline

| Date | Clock | Event |
|---|---|---|
| 2017-06-28 | Jira created | `FHIR-13590` filed against overstatement about ontology-based analysis. |
| 2018-04-02 | Source context | Pickaxe shows `6ba53e94c5cfafb45448eef3c6d1ca463d5ab287` touched the softened ontology phrase before R4. |
| 2019-01-07 | Jira resolved | `FHIR-13590` resolved/published as non-substantive enhancement. |
| 2019-10-30 | Publication boundary/source | Old R4 source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` includes the R4 page text reviewed here. |
| 2021-06-27 | Source commit | Template wrapper removed in `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`; PR #1295 merged 2021-06-26. |
| 2023-02-21 | Source/PR | QA commits `dad7cf37c75822c352509e1c2e8d050408d0be18` and `9f780149387dc652bec02aa7744e52774acddbc9`; PR #2714 merged 2023-02-21. |
| 2023-05-24 | Jira created | `FHIR-41327` created. |
| 2023-07-01 | Jira created | `FHIR-41514` created. |
| 2023-12-18 | Jira/workgroup | `FHIR-41327` resolved; FHIR-I minutes page `212731099` records 7-0-0 motion. |
| 2024-01-22 | Jira/workgroup | `FHIR-41514` resolved; FHIR-I minutes page `216240953` records 15-0-0 motion. |
| 2025-03-03 | Source commit | `49a9b66cef8df71a54462ccd1c30af90167bc85c` applies `FHIR-41514` changes; PR #3340 merged 2025-03-05. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changes R6 normative/development-process wording and introduces placeholder; PR #3901 merged 2025-11-02. |
| 2025-11-01 | Source commit | `4d92dfae4cd04c18da95802751a0f7737d50cf81` fixes wording from `on` to `in`; PR #3901. |
| 2025-11-03 | Source/PR | `66bdaaf37b034ecec2dfa4369830f9479eb615fd` applies `FHIR-41327`; PR #3920 merged 2025-11-03. |
| 2025-12-18 | Publication boundary/source | New R6 ballot4 source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`. |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/summary.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/summary.html" && echo "new exists"`
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/summary.html`
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/summary.html`
  - `git show --stat --patch <commit> -- source/summary.html` for each of the 7 commits.
  - `git log -S` and `git log -G` checks for the distinctive changed phrases listed in Source history.
- PR mapping:
  - `gh api repos/HL7/fhir/commits/<sha>/pulls`
  - `gh pr view <pr> --repo HL7/fhir --json number,title,url,mergedAt,author,body`
- Newer page read:
  - `wc -l ".../6.0.0-ballot4-5d67a34a13a5/source/summary.html"` returned 103.
  - The full file was read with line-numbered source view.
- Jira:
  - Snapshots: `FHIR-41514`, `FHIR-41327`, `FHIR-13590`.
  - FTS searches included exact/broad changed phrases. No Jira evidence was found for the `link to be provided` placeholder or candidate-additions wording.
  - One attempted Jira query containing `summary.html` failed because FTS5 parsed the dot; corrected `summary page` searches found no results.
- Zulip:
  - Corrected quoted issue-key and exact phrase searches found no results.
- Confluence:
  - `refs jira` and `fts` searches found FHIR-I minutes for the two Jira-backed changes and no evidence for the placeholder/candidate-additions wording.

# implsupport-module research appendix

## Scope and coverage

- Page path: `source/implsupport-module.html`.
- Versions compared: R4 `4.0.1` at `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to R6 ballot4 `6.0.0-ballot4` at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Boundary: page exists in both source trees; diff status is modified, not added/deleted/renamed.
- Newer page read end-to-end: yes, all 149 source lines were read.
- Direct diff: 52 insertions, 86 deletions. The page remains an informative implementation-support landing page.
- Source history count: 9 commits touched this page between the two commits.
- Explicit Jira keys found in source history/PR evidence: `FHIR-26978`, `FHIR-31735`; PR #1257 also mentions `FHIR-22719`, but that PR's page-relevant commit for this file is `FHIR-26978`.
- Jira/Zulip/Confluence searches were performed for the explicit keys and distinctive phrases: `Testing FHIR IG`, `Implementation Support Module`, `public test servers`, `Open Source Implementations`, `Additional resources testing`, `remove testing resources`, and `testing FHIR Implementations`.
- Important caveats:
  - PR #2812 and commit `f9a44787c45071394532c7c2ee94d76f30f47387` did not expose a page-specific Jira key in the commit/PR metadata found.
  - Several community hits were context-only and were not elevated into actions.
  - Zulip FTS treats hyphens specially; initial unquoted `FHIR-26978`/`FHIR-31735` searches failed as FTS syntax, then quoted searches were rerun.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/implsupport-module.html:13-180` | R4 baseline: old wrapper, index links, inline reference server/library tables, old roadmap text. |
| Source | New R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/implsupport-module.html:17-145` | Current page read end-to-end; contains current owner label, index, Additional Resources/Testing IG pointer, Confluence links, help links, and roadmap. |
| Source | Additional Resources paragraph | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/implsupport-module.html:79-81` | New page-specific pointer after testing resources moved out of core page index. |
| Source | Current tool-list delegation | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/implsupport-module.html:91-125` | Current reference servers, implementations, profiling, and testing tool sections all point to Confluence lists. |
| Source | Link target for Additional Resources | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resource/resource-introduction.xml:48` | Confirms `resource.html#additional` target exists in source. |
| Source | Testing IG macro precedent | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/documentation.html:127`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourcelist.html:260` | Same `[%ig testing%]` macro is used elsewhere, reducing concern that the new page link is an orphaned macro. |
| Commit | `265f01b0dda00c6df8e23087e8998b848b77bf87` | https://github.com/HL7/fhir/commit/265f01b0dda00c6df8e23087e8998b848b77bf87 | Implements `FHIR-26978`; updated Spark/Vonk/Firely and .NET SDK table entries before later table removal. |
| Commit | `e404ccd07129409bf907b904ae62ded6c82d28bf` | https://github.com/HL7/fhir/commit/e404ccd07129409bf907b904ae62ded6c82d28bf | Applies `FHIR-31735` to this page by replacing inline tool/reference implementation lists with Confluence links. |
| Commit | `b6812327a3b53925987f2787c30bbaaa2a329334` | https://github.com/HL7/fhir/commit/b6812327a3b53925987f2787c30bbaaa2a329334 | PR #2812 branch commit reorganizing the module index and adding Requirements/ActorDefinition, TestPlan, and ExampleScenario links. |
| Commit | `f9a44787c45071394532c7c2ee94d76f30f47387` | https://github.com/HL7/fhir/commit/f9a44787c45071394532c7c2ee94d76f30f47387 | Removes the Testing FHIR/TestPlan/TestScript/TestReport index item and adds the Additional Resources/Testing IG paragraph. |
| Commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Broad R6 owner-label wording change: `Work Group` to `Responsible Owner: Work Group`. |
| PR | HL7/fhir#1257 | https://github.com/HL7/fhir/pull/1257 | PR for `FHIR-26978`; body says it updates Firely .NET SDK and Firely Server links/titles. |
| PR | HL7/fhir#2396 | https://github.com/HL7/fhir/pull/2396 | PR for `FHIR-31735`; body says it splits specific tool listings out of spec pages and creates/links Confluence pages. |
| PR | HL7/fhir#2812 | https://github.com/HL7/fhir/pull/2812 | PR with no Jira key in body; merged index updates for this page. |
| Jira | `FHIR-26978` | https://jira.hl7.org/browse/FHIR-26978; reopen with `bun run jira:search snapshot FHIR-26978` | Formal issue for replacing Spark/Vonk and updating .NET library link in the old inline tables. |
| Jira | `FHIR-31735` | https://jira.hl7.org/browse/FHIR-31735; reopen with `bun run jira:search snapshot FHIR-31735` | Formal issue/resolution for moving implementation/reference tool lists to Confluence-maintained pages. |
| Zulip | Additional Resources thread | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Additional%20Resources; reopen with `bun run zulip:search snapshot 'fhir/infrastructure-wg' 'Additional Resources'` | 2025-09-24 FHIR-I message says Testing IG will hold TestScript/TestPlan/TestReport/testing narrative and core keeps a brief overview. |
| Confluence | FHIR-I WGM 202201 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/81028096/FHIR+Infrastructure+Minutes+WGM+202201; reopen with `bun run confluence:search snapshot 81028096` | Records `FHIR-31735` agreement: list other tools and likely add a Confluence page to update independently from the spec. |
| Confluence | FHIR-I WGM 202509 Pittsburgh minutes | https://confluence.hl7.org/spaces/FHIRI/pages/358879917/FHIR+Infrastructure+Minutes+WGM+202509+-+Pittsburgh; reopen with `bun run confluence:search snapshot 358879917` | Records Additional Resources/R6 resource-removal discussions, including moving testing resources/narrative to the Testing IG while keeping core overview. |
| Confluence | FHIR-I CC 2025-09-29 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/391186848/FHIR+Infrastructure+Minutes+CC+2025-09-29; reopen with `bun run confluence:search snapshot 391186848` | Says FHIR-I will need to move some testing material to the testing IG and addresses Additional Resource versioning. |
| Confluence | FMG 2025-10-01 minutes | https://confluence.hl7.org/spaces/FMG/pages/391644145/2025-10-01+FMG+Agenda+Minutes; reopen with `bun run confluence:search snapshot 391644145` | FMG discussion says Additional Resource href/example cleanup can be procedural/technical-correction-like if the committee has decided the move. |

## Change summary

### Page shell/metadata

- Category: metadata/template/navigation.
- R4 had `<div class="col-12">` wrapping the page and the owner row began `Work Group`.
- R6 removes the wrapper and changes the owner label to `Responsible Owner: Work Group`.
- Source events: `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` (template), `bb3428390ab6e94154659749bcf0ba4d0b4bafcf` (merge), `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` (R6 owner-label wording).
- No page-specific normative requirement changed.

### Module index/content restructuring

- Category: semantic guidance/navigation, not conformance.
- R4 index linked directly to `Testing FHIR + TestScript + TestReport`, Validation, Mapping, FHIRPath, Common Usages, Version Management, Safety, EHR-FM, identity, patterns, updates, examples, and comparison pages.
- R6 index adds `Requirements` and `ActorDefinition`, keeps Validation/Common Usages, adds `ExampleScenario`, moves Mapping/FHIRPath/Safety/identity/patterns/updates/examples, and moves EHR-FM/Version Management into the third column.
- PR #2812 (`b6812327a3b53925987f2787c30bbaaa2a329334`, merged by `5c8051fa7d9830af7fe9a1fced576f10c93a87a3`) made the main index reorganization but did not include a Jira key in the PR body.

### Testing resources moved out of the page index

- Category: semantic guidance/navigation.
- R6 ballot4 no longer includes direct `testing.html`, `testplan.html`, `testscript.html`, or `testreport.html` index entries on this page. Instead it says HL7 is working on Additional Resources that support testing FHIR implementations in the Testing FHIR IG.
- Source event: `f9a44787c45071394532c7c2ee94d76f30f47387` (`remove testing resources, and various minor fixes`).
- Community/process evidence supports the direction:
  - FHIR-I Zulip Additional Resources update (2025-09-24) says Testing IG contains TestScript, TestPlan, TestReport, and testing narrative, with core keeping a brief overview.
  - FHIR-I 2025-09-29 minutes say some testing material will need to move to the testing IG.
  - FMG 2025-10-01 minutes treat Additional Resource link/example cleanup as procedural when tied to a committee-approved move.
- No actionable mismatch found between the page text and this evidence.

### Inline tool/reference lists replaced by Confluence-maintained lists

- Category: semantic guidance/editorial maintenance.
- R4 embedded static tables for public reference servers and open-source reference implementations.
- R6 points to Confluence pages for public test servers, open source FHIR implementations, profile tooling, and testing platforms.
- `FHIR-26978` first updated stale entries in the old tables via commit `265f01b0dda00c6df8e23087e8998b848b77bf87`/PR #1257.
- `FHIR-31735` then deliberately split specific tool listings out of spec pages and into Confluence-maintained pages via commit `e404ccd07129409bf907b904ae62ded6c82d28bf`/PR #2396.
- This is not a normative behavior change; it is a maintenance strategy for fast-changing community tool/server lists.

### Help and roadmap wording

- Category: editorial/semantic guidance.
- Help links now say Zulip and the community forum are maintained by the FHIR Foundation and add `HL7's FHIR Documentation`.
- Roadmap no longer discusses reference servers/implementations keeping up with recent builds or future curated test data; it now says most implementer support work moved away from the specification and little further work is planned on this page.
- Source event: `0b361f316d50a2c68fb7bdf55f7e8b59f937832c` (`update roadmaps`).
- This matches the overall shift toward Confluence and Additional Resource IGs.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `265f01b0dda00c6df8e23087e8998b848b77bf87` | 2021-04-09 | Implementing FHIR-26978 | Replaced Spark/Furore with Firely Server and old FHIR .NET API with Firely .NET SDK in inline tables. | Editorial/tool-list correction |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Removed page wrapper `<div class="col-12">`. | Mechanical/template |
| `bb3428390ab6e94154659749bcf0ba4d0b4bafcf` | 2021-06-27 | merge | Merge resolved wrapper/newline state. | Mechanical/merge |
| `e404ccd07129409bf907b904ae62ded6c82d28bf` | 2022-09-05 | Applying FHIR-31735 also on the Implementation Support Module | Replaced static server/library tables with Confluence links and updated Profile Tooling link. | Editorial maintenance strategy |
| `0b361f316d50a2c68fb7bdf55f7e8b59f937832c` | 2023-03-09 | update roadmaps | Updated help link maintainers, added HL7 documentation link, replaced old roadmap paragraphs. | Editorial/roadmap |
| `b6812327a3b53925987f2787c30bbaaa2a329334` | 2023-03-09 | Update implsupport-module.html | Reorganized module index; added Requirements/ActorDefinition, TestPlan nested under Testing FHIR, and ExampleScenario. | Navigation/restructure |
| `5c8051fa7d9830af7fe9a1fced576f10c93a87a3` | 2023-03-10 | Merge pull request #2812 from HL7/jct-moduleupdate | Merged PR #2812. | Merge/navigation |
| `f9a44787c45071394532c7c2ee94d76f30f47387` | 2025-10-01 | remove testing resources, and various minor fixes | Removed Testing FHIR/TestPlan/TestScript/TestReport index entry; added Additional Resources/Testing FHIR IG paragraph. | Navigation tied to Additional Resources move |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Changed owner label to `Responsible Owner: Work Group`. | Metadata/template |

## Jira evidence

### Explicit Jira keys from commits/patches/PRs

- `FHIR-26978` (`Spark should be Vonk`)
  - Snapshot command: `bun run jira:search snapshot FHIR-26978`.
  - Status: Published; resolution: Persuasive; type: Technical Correction; raised in R5; applied for R5.
  - Related URL/pages: old `implsupport-module.html#7.0.4.1`, `FHIR-core-implsupport-module`.
  - Description requested replacing Spark with Vonk/Firely and updating the .NET library link.
  - Jira comment links PR #1257.
  - Current page no longer has the inline affected table, because `FHIR-31735` later replaced the whole table with a Confluence link.

- `FHIR-31735` (`Add .NET Validator on the page on Validating resources`)
  - Snapshot command: `bun run jira:search snapshot FHIR-31735`.
  - Status: Published; resolution: Persuasive with Modification; change impact: Non-substantive; applied for R5.
  - Resolution says to change implementation/reference tool lists to Confluence pages and update validation tool-specific documentation.
  - Comments identify candidate pages including Public Test Servers, Profile Tooling, Testing Platforms, and Open Source Implementations.
  - Comment says applied in PR #2396.
  - Current `implsupport-module.html:91-125` is consistent with this resolution.

### Other Jira issues that plausibly explain the same changed text

- No additional Jira issue was found for the 2025 `remove testing resources` page commit after phrase searches for:
  - `bun run jira:search fts '"Additional resources" testing' --limit 20`
  - `bun run jira:search fts '"remove testing resources"' --limit 20`
  - `bun run jira:search fts '"testing FHIR Implementations"' --limit 20`
- The rationale for that change is better supported by source history, Zulip, and Confluence Additional Resources discussions than by a page-specific Jira tracker.

### Context-only Jira hits that should not drive action

- `bun run jira:search fts '"Testing FHIR IG"' --limit 20` found `FHIR-33689`, but it is about SMART Health Cards Vaccination & Testing FHIR IG, not this core page change.
- `bun run jira:search fts '"public test servers"' --limit 20` found `FHIR-53819`, `FHIR-26845`, `FHIR-13008`, `FHIR-31735`, and `FHIR-19254`. Only `FHIR-31735` was directly relevant to the page text change.
- `bun run jira:search fts '"Open Source Implementations"' --limit 20` found several issues, but only `FHIR-31735` matched the current core-page maintenance change.

## Zulip evidence

- Explicit key searches:
  - `bun run zulip:search fts '"FHIR-26978"' --limit 20`: no results.
  - `bun run zulip:search fts '"FHIR-31735"' --limit 20`: one `#committers > XML tools` hit on 2022-05-10; context was downloads/tool-list cleanup, not a separate page-specific decision.

- Additional Resources rationale:
  - Snapshot command: `bun run zulip:search snapshot 'fhir/infrastructure-wg' 'Additional Resources'`.
  - Thread URL: https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Additional%20Resources.
  - On 2025-09-24, Josh Mandel summarized the R6 Additional Resources lane: R6 core must be stable/mostly normative; evolving content moves to IG packages; the Testing IG contains TestScript, TestPlan, TestReport, and testing narrative; core keeps a brief overview pointing there.
  - This directly supports the `f9a44787c45071394532c7c2ee94d76f30f47387` page change.

- Context-only Zulip hits:
  - `Implementation Support Module` found implementer-help threads in 2019 and 2025 where users were pointed to the page; these show the page is used as a landing page but do not reveal a mismatch.
  - `public test servers` found many implementation help threads and a `#FHIR HL7 test servers > Add entry to "Public test servers" page` thread. These support why Confluence is a better-maintained home, but no action on this source page follows.

## Confluence evidence

- `FHIR-31735`:
  - `bun run confluence:search refs jira FHIR-31735` and `bun run confluence:search fts FHIR-31735 --limit 20` both found page `81028096`, FHIR Infrastructure Minutes WGM 202201.
  - Snapshot command: `bun run confluence:search snapshot 81028096`.
  - The minutes record agreement that other tools should be listed and that a Confluence page would likely be added so it could be updated independently from the spec; motion Ward Weistra/Lloyd McKenzie 14-0-0.
  - This supports the `FHIR-31735` resolution and PR #2396 source changes.

- Additional Resources/testing move:
  - `bun run confluence:search fts '"Additional resources" testing' --limit 20` found directly relevant 2025 FHIR-I and FMG minutes.
  - Page `358879917` (FHIR-I WGM 202509 Pittsburgh) records discussion of moving Testing resources/TestScript/TestPlan/TestReport/testing narrative out of core or into the Testing IG, and keeping a general overview in core.
  - Page `391186848` (FHIR-I CC 2025-09-29) says FHIR-I needs to move some testing material to the testing IG and discusses Additional Resource artifact versioning.
  - Page `391644145` (FMG 2025-10-01) discusses whether Additional Resources href/example cleanup can be treated as technical-correction-like procedural work once the move is decided; it also notes the Additional Resources IG now exists and displays planned core spec updates.

- Context-only Confluence hits:
  - `Testing FHIR IG` also found SMART Health Cards Vaccination & Testing IG minutes/pages; those are unrelated to this core implementation-support page.
  - `public test servers` found FMG/PC event pages that use the Confluence public test servers page as a resource; they do not contradict the current page.

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2020-04-28 | Jira created | `FHIR-26978` filed to replace Spark/Vonk and update .NET library link on the implementation support page. |
| 2020-05-04 | Jira resolved | `FHIR-26978` resolved Persuasive. |
| 2021-04-09 | Source commit | `265f01b0dda00c6df8e23087e8998b848b77bf87` implemented `FHIR-26978` table updates. |
| 2021-06-09 | PR merge | PR #1257 merged, including the `FHIR-26978` commit. |
| 2022-01-21 | WG vote/Jira resolution | FHIR-I resolved `FHIR-31735` Persuasive with Modification; Confluence minutes record 14-0-0. |
| 2022-09-05 | Source commit | `e404ccd07129409bf907b904ae62ded6c82d28bf` applied `FHIR-31735` to this page. |
| 2022-09-06 | PR merge | PR #2396 merged. |
| 2023-03-09 | Source commit | `0b361f316d50a2c68fb7bdf55f7e8b59f937832c` updated help/roadmap text. |
| 2023-03-09 | Source commit | `b6812327a3b53925987f2787c30bbaaa2a329334` reorganized module index in PR #2812 branch. |
| 2023-03-10 | PR merge | PR #2812 merged without a Jira key in the PR body. |
| 2025-09-24 | Zulip discussion | FHIR-I Additional Resources update says Testing IG holds testing resources/narrative and core keeps a brief overview. |
| 2025-09-29 | WG minutes | FHIR-I minutes discuss moving testing material to the testing IG and Additional Resources versioning. |
| 2025-10-01 | Source commit | `f9a44787c45071394532c7c2ee94d76f30f47387` removes testing resources from this page's index and adds the Testing FHIR IG paragraph. |
| 2025-10-01 | FMG minutes | FMG discusses Additional Resources cleanup as procedural/technical-correction-like when tied to a decided move. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changes owner label to `Responsible Owner`. |

## Evidence log

- Page boundary:
  - `test -f .../4.0.1-0da2a0a84dc1/source/implsupport-module.html && echo "old exists"`
  - `test -f .../6.0.0-ballot4-5d67a34a13a5/source/implsupport-module.html && echo "new exists"`
  - Established that both files exist.

- Direct diff:
  - `git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26" "5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/implsupport-module.html"`
  - Established the complete R4-to-R6 page diff: 52 insertions, 86 deletions.

- Source history:
  - `git -C <new-tree> --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/implsupport-module.html`
  - `git -C <new-tree> --no-pager show --stat --patch <commit> -- source/implsupport-module.html`
  - Established the 9 page-touching commits and their page effects.

- Jira:
  - `bun run jira:search snapshot FHIR-26978`
  - `bun run jira:search snapshot FHIR-31735`
  - `bun run jira:search fts '"Testing FHIR IG"' --limit 20`
  - `bun run jira:search fts '"Implementation Support Module"' --limit 20`
  - `bun run jira:search fts '"public test servers"' --limit 20`
  - `bun run jira:search fts '"Open Source Implementations"' --limit 20`
  - `bun run jira:search fts '"Additional resources" testing' --limit 20`
  - `bun run jira:search fts '"remove testing resources"' --limit 20`
  - `bun run jira:search fts '"testing FHIR Implementations"' --limit 20`

- Zulip:
  - `bun run zulip:search fts '"FHIR-26978"' --limit 20`
  - `bun run zulip:search fts '"FHIR-31735"' --limit 20`
  - `bun run zulip:search fts '"Testing FHIR IG"' --limit 20`
  - `bun run zulip:search fts '"Implementation Support Module"' --limit 20`
  - `bun run zulip:search fts '"public test servers"' --limit 20`
  - `bun run zulip:search fts '"Additional resources" testing' --limit 20`
  - `bun run zulip:search snapshot 'fhir/infrastructure-wg' 'Additional Resources'`

- Confluence:
  - `bun run confluence:search refs jira FHIR-26978`
  - `bun run confluence:search refs jira FHIR-31735`
  - `bun run confluence:search fts 'FHIR-26978' --limit 20`
  - `bun run confluence:search fts 'FHIR-31735' --limit 20`
  - `bun run confluence:search fts '"Testing FHIR IG"' --limit 20`
  - `bun run confluence:search fts '"Implementation Support Module"' --limit 20`
  - `bun run confluence:search fts '"public test servers"' --limit 20`
  - `bun run confluence:search fts '"Additional resources" testing' --limit 20`
  - `bun run confluence:search snapshot 81028096`
  - `bun run confluence:search snapshot 358879917`
  - `bun run confluence:search snapshot 391186848`
  - `bun run confluence:search snapshot 391644145`

- GitHub PR metadata:
  - `gh pr view 1257 -R HL7/fhir --json number,title,url,author,mergedAt,body,commits`
  - `gh pr view 2396 -R HL7/fhir --json number,title,url,author,mergedAt,body,commits`
  - `gh pr view 2812 -R HL7/fhir --json number,title,url,author,mergedAt,body,commits`

- Full newer page read:
  - Read `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/implsupport-module.html:1-149`.
  - Cross-checks found `resource.html#additional` target source and other uses of `[%ig testing%]`; no broken current-page link/macro issue was established.

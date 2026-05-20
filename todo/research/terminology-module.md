# terminology-module research appendix

## Scope and coverage

- Page path: `source/terminology-module.html`.
- Compared `R4 4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` with `R6 ballot4 6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Old source file exists: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/terminology-module.html`.
- New source file exists and was read end-to-end: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminology-module.html`.
- Commit count touching this HTML page between the two source commits: 8.
- Explicit Jira keys found in page-touching commit metadata/patches: `FHIR-25431`.
- Additional directly relevant Jira issues found by page/topic search: `FHIR-53785`, `FHIR-53820`.
- Jira/Zulip/Confluence searches covered explicit keys, changed operation names (`$closure`, `$find-matches`), terminology-module page terms, and the later Terminology Module Incubator trail.
- Caveats:
  - The semantically meaningful R6 removal of `$closure` and `$find-matches` from this page was implemented by PR `HL7/fhir#3913`, whose PR template has a blank Jira tracker field. I found PR, Zulip, Confluence, and later CI-build evidence for the intent, but no single formal Jira issue driving that removal.
  - Some first-pass FTS searches failed because unquoted keys/hyphenated terms such as `FHIR-25431`, `find-matches`, and dotted terms such as `ValueSet.scope` are parsed specially by SQLite FTS5. Those were corrected with quoted searches, snapshots, SQL/LIKE searches, or direct snapshots.
  - This review focused on `source/terminology-module.html`; related image and generated operation pages were checked only where needed to interpret page-level findings.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New page, owner/status header | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminology-module.html:17` | Shows the R6 "Responsible Owner" header wording. |
| Source | New page, intro and diagram | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminology-module.html:25-32` | Current intro text and diagram reference that later Jira/Confluence review asks to revise. |
| Source | New page, operations index | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminology-module.html:66-90` | Current operations list omits `$closure`, `$find-matches`, and NamingSystem operations. |
| Source | New page, common use cases | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminology-module.html:130-145` | Current bullets still largely match pre-review wording. |
| Source | New page, development roadmap | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminology-module.html:149-164` | Current split list is part of the later text-update Jira request. |
| Source | Old page, operations/use cases | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/terminology-module.html:66-91`, `:131-148` | Shows R4 included `$closure`, `$find-matches`, and their use-case bullets. |
| Commit | Direct operation removal | `40306e5cd9c1b1e3eb6f115de16a8da3aa13a351` / `https://github.com/HL7/fhir/commit/40306e5cd9c1b1e3eb6f115de16a8da3aa13a351` | Removes `$closure` and `$find-matches` links/use-case bullets from this page. |
| PR | Terminology Infrastructure R6 removal PR | `https://github.com/HL7/fhir/pull/3913` | PR body says `$find-matches` and `$closure` will move to an incubator FHIR IG; tracker field blank. |
| Commit | Datatype spelling | `8592e1207273b786db340efb927bb6d1dc9756c9` / `https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9` | Applies `FHIR-25431` spelling consistency to this page. |
| PR | Datatype spelling PR | `https://github.com/HL7/fhir/pull/2312` | Contains the page-touching `FHIR-25431` commit. |
| Commit | R6 header wording | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / `https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Changes "Work Group" to "Responsible Owner: Work Group". |
| PR | R6 normative PR | `https://github.com/HL7/fhir/pull/3901` | Contains the header wording commit; broad normative-changes PR, no page-specific rationale found. |
| Jira | `FHIR-25431` | `https://jira.hl7.org/browse/FHIR-25431`; reopen with `bun run jira:search snapshot FHIR-25431` | Formal issue for consistent "datatype" spelling; status Published. |
| Jira | `FHIR-53785` | `https://jira.hl7.org/browse/FHIR-53785`; reopen with `bun run jira:search snapshot FHIR-53785` | Later R6 ballot feedback requesting page text/index/use-case/roadmap updates. |
| Jira | `FHIR-53820` | `https://jira.hl7.org/browse/FHIR-53820`; reopen with `bun run jira:search snapshot FHIR-53820` | Later R6 ballot feedback requesting diagram update/clickable resource boxes. |
| Zulip | Reader confusion about removed operations | `#terminology > Where is $find-matches`; `https://chat.fhir.org/#narrow/stream/terminology/topic/Where%20is%20%24find-matches`; reopen with `bun run zulip:search snapshot terminology "Where is \$find-matches"` | Reuben Daniels explains both operations left core because they were not mature enough for R6 normative status and will be in a Terminology Module Incubator IG. |
| Confluence | May 2019 Vocab WGM minutes | Page `51218206`, `https://confluence.hl7.org/spaces/VOC/pages/51218206/May+2019+-+HL7+WGM+-+Wednesday+Q3+Minutes`; reopen with `bun run confluence:search snapshot 51218206` | Historical evidence: group agreed not to move `$find-matches` forward for R5 and wanted more `$closure` implementation evidence. |
| Confluence | FMG incubator proposal | Page `403868073`, `https://confluence.hl7.org/spaces/FMG/pages/403868073/2025-11-12+FMG+Agenda+Minutes`; reopen with `bun run confluence:search snapshot 403868073` | FMG reviewed Terminology Module Incubator IG proposal after the R6 removal PR. |
| Confluence | TI naming decision | Page `403870209`, `https://confluence.hl7.org/spaces/VOC/pages/403870209/2025-11-20+Terminology+Infrastructure+WG+Call+Agenda+Minutes`; reopen with `bun run confluence:search snapshot 403870209` | TI approved the "Terminology Module Incubator FHIR IG (uv/tmi)" name 4-0-1 and noted concerns about scattered terminology material. |
| Confluence | R6 Terminology Content Review | Page `256510055`, `https://confluence.hl7.org/spaces/VOC/pages/256510055/FHIR+R6+Terminology+Content+Review`; reopen with `bun run confluence:search snapshot 256510055` | Source for later page-review requests that became `FHIR-53785` and `FHIR-53820`. |
| Spec/QAS | Terminology Module Incubator current build | `bun run spec:list hl7.fhir.uv.txmodule-incubator`; package `hl7.fhir.uv.txmodule-incubator#0.1.0`, QAS `2026-05-18`, repo `https://github.com/HL7/txmodule-incubator` | Shows the incubator destination now exists after the R6 core removals. |
| Web | Incubator operation pages | `https://build.fhir.org/ig/HL7/txmodule-incubator/branches/main/OperationDefinition-CodeSystem-find-matches.html`, `https://build.fhir.org/ig/HL7/txmodule-incubator/branches/main/OperationDefinition-ConceptMap-closure.html` | Current CI pages for the moved operations. |

## Change summary

### Operation index and use-case removals - substantive/navigation

R4 listed CodeSystem `$find-matches` and ConceptMap `$closure` in the operations table and had matching common-use-case bullets for maintaining a transitive closure table and returning concepts for property/concept pairs. R6 ballot4 removes those links and bullets:

- removed from operations table: `codesystem-operation-find-matches.html` and `conceptmap-operation-closure.html`
- removed from common use cases: "Maintain a client-side transitive closure table..." and "For a set of property/concept pairs..."

This is meaningful despite the page itself being Informative: it changes the module landing page from advertising the operations as part of core terminology services to no longer listing them. Source history and PR `#3913` connect the removal to R6 normative-ballot preparation and migration of insufficiently mature terminology artifacts to an incubator IG.

### Page metadata/template - metadata/template/navigation

The R4 `<div class="col-12">` wrapper was removed in an HTML-template update, and the workgroup header changed from `Work Group` to `Responsible Owner: Work Group`. These are template/metadata changes rather than terminology semantics.

### "data type" -> "datatype" - editorial only

`FHIR-25431` changed "coded data types" / "Coded Data Types" / "Coding data types" to "coded datatypes" / "Coded Datatypes" / "Coding datatypes". This is a terminology/spelling consistency correction, not a semantics change.

### ConceptMap2 transient history - mechanical/no final R4->R6 effect

`ConceptMap2` was added to this page in 2021 and removed in 2022 by the ConceptMap2 -> ConceptMap work. Because neither R4 nor R6 ballot4 contains `ConceptMap2` in this page, it has no final direct R4->R6 diff effect.

### Later unresolved page-review items - overlooked current-page work

After the R6 ballot4 source commit, TI review/ballot issues `FHIR-53785` and `FHIR-53820` requested broader updates to this same landing page and diagram. The R6 ballot4 HTML source still has the older introduction, `Operations` heading, no NamingSystem operation column, older common-use-case bullets, split roadmap lists, and the same diagram image reference.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `9e9b97453f45d60fcf7e9eaf6d6f4d27b7aa7a7c` | 2021-06-16 | Fixed build issues, removed unnecessary files, and added dragon boxes. | Adds `ConceptMap2` link to resources list. | Intermediate/no final R4->R6 effect. |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Removes surrounding `<div class="col-12">`. | Template/mechanical. |
| `bb3428390ab6e94154659749bcf0ba4d0b4bafcf` | 2021-06-27 | merge | Merge reports one page insertion; no standalone patch shown in normal `git show`. | Merge/mechanical. |
| `8623473ddfcef0cb88b9abf5241abfe6e28ea542` | 2022-07-18 | ConceptMap2 -> ConceptMap, and deal with many consequent issues | Removes `ConceptMap2` link. PR `#2050`. | Cleanup/no final R4->R6 effect. |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Applies three spelling consistency changes on this page. PR `#2312`. | Editorial/Jira-backed. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Changes header to `Responsible Owner: Work Group`. PR `#3901`. | Metadata/template. |
| `40306e5cd9c1b1e3eb6f115de16a8da3aa13a351` | 2025-11-02 | Applied ... TI WG curated artefacts ... Removed the `$closure` and `$find-matches` operations | Removes operation links and use-case bullets from this page. PR `#3913`. | Substantive/navigation. |
| `2fa84e06bc4fd54048bc269c9f5bdad935879746` | 2025-11-02 | Merge branch `master` into `TI_WG_R6_CHANGES_1` | Merge combines operation-removal branch with header wording from master. `git show -m` shows both sides. | Merge/mechanical plus final integration. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-25431` (`Published`, `Persuasive`, `Technical Correction`, raised in R4, applied for R5): asks the spec to pick either "data type" or "datatype" and be consistent. The page commit changed three occurrences to `datatype(s)`. FHIR-I minutes page `66940491` records Lloyd saying "Using 'data type' Will auto approve"; however the eventual source commit uses `datatype`, so the formal Jira snapshot plus source commit are stronger evidence for the applied spelling than the abbreviated minutes text.

### Jira issues that plausibly explain or affect current page text

- `FHIR-53785` (`Triaged`, `Unresolved`, `Highest`, R6 ballot `BALLOT-88263`): "Text Updates for Terminology Module Page". Requests:
  - replace the introduction first sentence,
  - change the diagram lead-in sentence,
  - rename "Operations" to "Terminology Specific Operations",
  - add a NamingSystem operation column with `$preferred-id` and `$translate-id`,
  - revise common-use-case bullets,
  - revise/collapse the Development Roadmap lists.
  The current R6 ballot4 source does not include these requested changes.
- `FHIR-53820` (`Triaged`, `Unresolved`, `Highest`, R6 ballot `BALLOT-88263`): "Update Terminology Module Diagram". Requests label/relationship changes, addition of TerminologyCapabilities and FHIR Terminology Service, clickable boxes, color/legend changes, and removal of dotted ElementDefinition lines. The current page still references `terminology-module-relationships.png` without HTML changes, and the linked Confluence review says this diagram work was agreed/decided.

### Context-only Jira hits that should not drive action

- `FHIR-22632`, `FHIR-17563`, `FHIR-13158`, `FHIR-13481`, `FHIR-12984`, `FHIR-10232`, and `FHIR-10233` appeared in broader `$closure`/`$find-matches` SQL/FTS searches. They provide historical context for ConceptMap and operation behavior, but they do not explain the R6 page removal directly.
- `FHIR-54108` and other R6 terminology issues appeared in page/path searches but target operation parameter descriptions or other terminology pages, not this landing-page diff.

## Zulip evidence

- `#terminology > Where is $find-matches` (`2026-04-28` to `2026-04-30`, `https://chat.fhir.org/#narrow/stream/terminology/topic/Where%20is%20%24find-matches`):
  - Guillermo Rodríguez asked where `$find-matches` and `$closure` went between R5 and R6.
  - Reuben Daniels answered that both were removed from core because they were not mature enough for R6 normative status and would be published in a Terminology Module Incubator FHIR IG. He also directed future feedback to Jira using the "Terminology Module Incubator" specification value.
  - This supports the intent behind PR `#3913` and also shows reader-facing confusion caused by the silent disappearance from core navigation.
- Searches for `"FHIR-25431"`, `"FHIR-53785"`, and `"FHIR-53820"` found no relevant Zulip hits in the local snapshot.

## Confluence evidence

- Page `51218206`, May 2019 Vocab WGM Wednesday Q3 minutes:
  - `$find-matches`: "Group agreed to NOT move `$find-matches` forward for R5."
  - `$closure`: "Group recommends that `$closure` is exercised by multiple TS instances for its original purpose ... to provide required evidence to move maturity from 3 to 4."
  - This is historical maturity context, not direct R6-removal approval.
- Page `403868073`, 2025-11-12 FMG minutes:
  - FMG discussed the "Terminology Module Incubator FHIR Implementation Guide Proposal".
  - Notes say it is an incubator IG, not titled as such yet; Reuben was asked to take naming back to the group; descriptions should be present tense; item carried forward.
  - Supports the post-removal destination/process.
- Page `403870209`, 2025-11-20 TI WG minutes:
  - TI revisited the IG proposal and passed a motion 4-0-1 to accept the name "Terminology Module Incubator FHIR IG (uv/tmi)".
  - Minutes note concern that terminology material may be difficult to find when scattered across different IGs.
  - This is directly relevant to the action concern that the core module page now omits a pointer to moved operations.
- Page `256510055`, FHIR R6 Terminology Content Review:
  - References `FHIR-53785` and `FHIR-53820`.
  - Records agreed/review comments for the terminology module page: improve the opening sentence, update the diagram description, update labels and relationships in the diagram, add TerminologyCapabilities and FHIR Terminology Service to the diagram, add NamingSystem operations, rename the Operations section, revise common-use-case bullets, and collapse/adjust the roadmap.
  - This is the strongest process evidence behind the later unresolved action items.
- Page `66940491`, FHIR-I 2020-01-13 minutes:
  - References `FHIR-25431` and says "Using 'data type' Will auto approve"; useful as meeting context but less precise than the Jira snapshot/source commit for the eventual spelling applied.

## Timeline

| Date | Event type | Evidence | Notes |
|---:|---|---|---|
| 2019-05 | WG discussion | Confluence `51218206` | `$find-matches` not moved forward for R5; `$closure` needed more implementation evidence. |
| 2020-01-09 | Jira created | `FHIR-25431` | Spelling consistency issue raised in R4. |
| 2020-01-13 | WG minutes | Confluence `66940491` | FHIR-I minutes mention `FHIR-25431`. |
| 2021-06-16 to 2021-06-27 | Source commits | `9e9b974...`, `d7b8dad...`, `bb342839...` | ConceptMap2/template churn. |
| 2022-07-18 | Source commit/PR merge | `8623473...`, PR `#2050` | Removes `ConceptMap2` from page. |
| 2022-08-31 / 2022-09-01 | Source commit/PR merge | `8592e120...`, PR `#2312` | Applies `FHIR-25431` spelling changes; PR merged 2022-09-01. |
| 2025-10-31 / 2025-11-02 | Source commit/PR merge | `270e0ceb...`, PR `#3901` | Header changes to "Responsible Owner". |
| 2025-11-02 | Source commit/PR | `40306e5...`, PR `#3913` | Removes `$closure` and `$find-matches` from this page; PR merged 2025-11-02. |
| 2025-11-12 | FMG discussion | Confluence `403868073` | FMG reviews Terminology Module Incubator IG proposal. |
| 2025-11-20 | TI WG decision | Confluence `403870209` | TI accepts "Terminology Module Incubator FHIR IG (uv/tmi)" name; notes discoverability concern. |
| 2026-01-05 | Jira created | `FHIR-53785` | Text updates for Terminology Module Page entered from TI co-chair review. |
| 2026-01-06 | Jira created | `FHIR-53820` | Diagram update request entered. |
| 2026-04-28 to 2026-04-30 | Zulip discussion | `#terminology > Where is $find-matches` | Reader asks where removed operations went; Reuben explains incubator plan. |
| 2026-05-18 | CI/QAS | `bun run spec:list hl7.fhir.uv.txmodule-incubator` | Terminology Module Incubator CI entry exists as package `hl7.fhir.uv.txmodule-incubator#0.1.0`. |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/terminology-module.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/terminology-module.html" && echo "new exists"`
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/terminology-module.html`
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/terminology-module.html`
  - `git show --stat --patch` for all eight page-touching commits.
  - `git show -m --stat --patch 2fa84e06bc4fd54048bc269c9f5bdad935879746 -- source/terminology-module.html` to inspect the merge.
- GitHub PR lookups:
  - `gh api repos/HL7/fhir/commits/<sha>/pulls`
  - `gh pr view 3913 --repo HL7/fhir --json number,title,url,author,createdAt,mergedAt,body,commits`
- Full newer page read:
  - `wc -l .../source/terminology-module.html` returned 171 newline-counted lines; `view` showed lines `1-172` because the final `</html>` is present without a trailing newline.
- Jira:
  - `bun run jira:search snapshot FHIR-25431`
  - `bun run jira:search snapshot FHIR-53785`
  - `bun run jira:search snapshot FHIR-53820`
  - `bun run jira:search fts '"Terminology Module" page' --limit 20`
  - `bun run jira:search sql "SELECT ... WHERE data LIKE '%terminology-module.html%' OR data LIKE '%FHIR-core-terminology-module%' ..."`
  - Failed/ corrected: unquoted `closure find-matches operations`, `ValueSet.scope closure find-matches`, and unescaped `$closure` produced FTS/SQL noise; direct snapshots and SQL searches were used instead.
- Zulip:
  - `bun run zulip:search fts "find matches closure" --limit 20`
  - `bun run zulip:search snapshot terminology "Where is \$find-matches"`
  - `bun run zulip:search fts '"FHIR-53785"' --limit 20`, `'"FHIR-53820"'`, `'"FHIR-25431"'` found no hits.
- Confluence:
  - `bun run confluence:search refs jira FHIR-25431`
  - `bun run confluence:search snapshot 51218206`
  - `bun run confluence:search snapshot 403868073`
  - `bun run confluence:search snapshot 403870209`
  - `bun run confluence:search snapshot 66940491`
  - `bun run confluence:search snapshot 256510055`
  - `bun run confluence:search refs jira FHIR-53785` and `FHIR-53820`
- Incubator destination:
  - `bun run spec:list hl7.fhir.uv.txmodule-incubator`
  - `bun run spec:resolve hl7.fhir.uv.txmodule-incubator current`
  - Fetched current CI pages for `OperationDefinition-CodeSystem-find-matches.html` and `OperationDefinition-ConceptMap-closure.html`.

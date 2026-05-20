# datatypes-mappings research appendix

## Scope and coverage

- Page path: `source/datatypes-mappings.html`.
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: page exists in both trees. Direct diff is 53 insertions / 34 deletions, modified in place.
- New page read end-to-end: yes, 262 lines.
- Source-history commits touching this page between the boundary commits: 13.
- Explicit keys found in commit history: `FHIR-25431`, `J# 41582` (snapshotted as `FHIR-41582`), `FHIR-45488`, `FHIR-47467`. Supplemental issue found by search: `FHIR-55681`.
- Jira/Zulip/Confluence searches were bounded to explicit keys plus distinctive changed terms: `RatioRange`, `RelativeTime`, `Datatype Mappings`, `Data Type Mappings`, `conversions-datatypes`, `R4 Conversions`, and phrases from `FHIR-45488` / `FHIR-47467`.
- Caveat: this review inspected the HTML source page, not a rendered build. The source contains reader-facing text and link targets, but final rendering/macros should be checked before editing.
- Caveat: initial Zulip FTS searches for unquoted hyphenated Jira keys failed with SQLite FTS parsing errors (`no such column: 25431`, etc.); they were rerun with quoted keys. Quoted key searches found no hits for `FHIR-25431`, `FHIR-41582`, `FHIR-45488`, or `FHIR-47467`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New page header/status/index | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-mappings.html:14-28` | Shows title, owner/status table, intro, and new datatype index. |
| Source | Current repeated "Extensions" / wrong extension-anchor pattern | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-mappings.html:36`, `:63`, `:72`, `:160`, `:236` | Non-primitive sections link to `extensions-datatypes.html#primitive`; conversion links are also labelled `Extensions`. |
| Source | RatioRange mapping section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-mappings.html:156-163` | Anchors/macro are RatioRange, but the visible `<h3>` says `Ratio`. |
| Source | RelativeTime mapping section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-mappings.html:232-239` | New R6 datatype appears on this mapping page. |
| Commit | Add RatioRange to mapping page | `b9fd58139d35c8aa90083ae99a279c8a6d3dd854`, https://github.com/HL7/fhir/commit/b9fd58139d35c8aa90083ae99a279c8a6d3dd854 | Adds RatioRange block but copies the visible heading as `Ratio`. |
| Commit | Datatype spelling cleanup | `8592e1207273b786db340efb927bb6d1dc9756c9`, https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9 | Implements `FHIR-25431` on this page. |
| Commit | Datatypes index | `7bf9e9408044b81c4f56930c20697f3afd3393f4`, https://github.com/HL7/fhir/commit/7bf9e9408044b81c4f56930c20697f3afd3393f4 | Replaces simple TOC table with four datatype-index diagrams. |
| Commit | Reorganize datatype pages | `22b5c2457301de9acd614a6d899679b609536031`, https://github.com/HL7/fhir/commit/22b5c2457301de9acd614a6d899679b609536031 | Changes "See also" rows from R2 conversions / profiles-and-extensions to profiles/extensions/R4 conversions. |
| Commit | Move links to extension IG | `c5a1cbeada5c8e4fd1582a8e4919a69e37476fd8`, https://github.com/HL7/fhir/commit/c5a1cbeada5c8e4fd1582a8e4919a69e37476fd8 | Earlier, type-specific extension anchors and `R4 Conversions` labels were still present. |
| Commit | Add RelativeTime to mapping page | `86dc727207742c7e2ae8492822ed3f16804fc0fa`, https://github.com/HL7/fhir/commit/86dc727207742c7e2ae8492822ed3f16804fc0fa | Implements `J# 41582` / `FHIR-41582` by adding RelativeTime. |
| Commit | Owner FHIR-I | `d5e267fbf120c85dc323b19515e0e38a626303f8`, https://github.com/HL7/fhir/commit/d5e267fbf120c85dc323b19515e0e38a626303f8 | Implements `FHIR-45488`; changes owner from MnM back to FHIR-I. |
| Commit | R4/R5 diff cleanup, but link regression | `dbb78e2435ad20bdcc43ada9656bf01fe99d6165`, https://github.com/HL7/fhir/commit/dbb78e2435ad20bdcc43ada9656bf01fe99d6165 | Implements `FHIR-47467`; changes conversion labels to `Extensions` and non-primitive extension anchors to `#primitive`. |
| Commit | R6 normative header cleanup | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Removes FMM cell and changes owner label to `Responsible Owner`; page status remains Informative. |
| Jira | `FHIR-25431` | https://jira.hl7.org/browse/FHIR-25431; reopen: `bun run jira:search snapshot FHIR-25431` | Formal tracker for `datatype` vs `data type` consistency. |
| Jira | `FHIR-41582` | https://jira.hl7.org/browse/FHIR-41582; reopen: `bun run jira:search snapshot FHIR-41582` | Formal tracker creating RelativeTime. |
| Jira | `FHIR-45488` | https://jira.hl7.org/browse/FHIR-45488; reopen: `bun run jira:search snapshot FHIR-45488` | Formal tracker for FHIR-I owner on Datatypes/Metadata Types pages. |
| Jira | `FHIR-47467` | https://jira.hl7.org/browse/FHIR-47467; reopen: `bun run jira:search snapshot FHIR-47467` | Formal tracker for R6 pages referring to R4 instead of R5; applied commit affects this page's links. |
| Jira | `FHIR-55681` | https://jira.hl7.org/browse/FHIR-55681; reopen: `bun run jira:search snapshot FHIR-55681` | Later unresolved tracker explicitly says RatioRange labels are wrong on datatype pages. |
| Zulip | `FHIR-55681` mention | `#fmg > ✔ CodeableReference usage in Core`, https://chat.fhir.org/#narrow/stream/fmg/topic/%E2%9C%94%20CodeableReference%20usage%20in%20Core; reopen: `bun run zulip:search snapshot fmg "✔ CodeableReference usage in Core"` | Confirms the later label-defect Jira was filed from community discussion. |
| Zulip | RatioRange choice-type context | `#implementers > RatioRange and CodeableReference in choice types`, https://chat.fhir.org/#narrow/stream/implementers/topic/RatioRange%20and%20CodeableReference%20in%20choice%20types | Context-only discussion for RatioRange as a new type. |
| Confluence | `FHIR-25431` minutes | Page `66940491`, https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113 | FHIR-I minutes mention `FHIR-25431`; not enough alone to override final source/Jira state. |
| Confluence | RelativeTime proposal page | Page `175618136`, https://confluence.hl7.org/spaces/BRR/pages/175618136/RelativeTime+Datatype | Detailed rationale referenced from `FHIR-41582`. |
| Confluence | `FHIR-45488` vote | Page `239211981`, https://confluence.hl7.org/spaces/FHIRI/pages/239211981/FHIR+Infrastructure+Minutes+CC+2024-05-06 | Records persuasive vote for changing owner to FHIR-I. |
| Confluence | `FHIR-47467` vote | Page `288067657`, https://confluence.hl7.org/spaces/FHIRI/pages/288067657/FHIR+Infrastructure+Minutes+CC+2024-11-25 | Records decision to wait until final publication because changes are large. |
| Confluence | R6 normative discussion | Page `358879917`, https://confluence.hl7.org/spaces/FHIRI/pages/358879917/FHIR+Infrastructure+Minutes+WGM+202509+-+Pittsburgh | Mentions RatioRange/RelativeTime normative discussion on main Datatypes page; page under review remains Informative mappings. |

## Change summary

### Page boundary and overall nature

- Modified and present in both trees.
- Most changes are metadata/template/navigation churn rather than mapping-table semantic changes.
- The page remains explicitly `Informative` in the R6 ballot4 source (`datatypes-mappings.html:16`).

### Metadata/template/navigation

- Mechanical/template: UTF-8 BOM appears at the file start, wrapper `<div class="col-12">` was removed, final newline normalized, and the header table changed over time.
- Owner/status: owner moved from FHIR to MnM in `4652397...`, then to FHIR-I in `d5e267f...` for `FHIR-45488`; `270e0ce...` changes display wording to `Responsible Owner` and removes the FMM cell.
- Title/spelling: `Data Type Mappings` -> `Datatype Mappings`, and `data type` -> `datatype` where applicable, via `FHIR-25431`.

### Datatype index restructuring

- The old two-column `Table of Contents` with Primitive/Complex diagrams was replaced by a `Datatypes Index` with Primitive, General-Purpose, Metadata, and Special Purpose diagram blocks (`7bf9e94...`).
- This is navigation/reference restructuring, not a normative requirement change.

### New datatype mapping sections

- `RatioRange` block added in `b9fd581...`; this is substantive coverage for a new datatype mapping section. The visible heading was copied as `Ratio`, which remains visible in the current source.
- `RelativeTime` block added in `86dc727...`; Jira `FHIR-41582` and Confluence page `175618136` provide formal/background rationale. No mapping prose beyond the standard `See also` row and `<%dtmappings RelativeTime%>` macro appears in this page source.

### "See also" link overhaul

- R4 source used links to `datatypes-extras.html` and `datatypes-version-maps.html` with `R2 Conversions`.
- `22b5c24...` split profiles/extensions and changed conversion labels to `R4 Conversions`.
- `c5a1cbe...` moved extensions/conversions to `[%extensions-location%]extensions-datatypes.html#<Type>` and `[%extensions-location%]conversions-datatypes.html#<Type>`, still with type-specific anchors and `R4 Conversions` labels.
- `dbb78e2...` for `FHIR-47467` changed every non-primitive extension link to `extensions-datatypes.html#primitive` and changed the conversion link label from `R4 Conversions` to `Extensions`. This is the clearest reader-facing defect found.

### Editorial only / unchanged mapping prose

- `HL7 v2` changed to `HL7 V2`.
- The Identifier/V3 mapping explanatory prose and vCard HumanName mapping prose are materially unchanged aside from `datatype` spelling.
- No REST/search/operation semantic changes were found except the pre-existing Identifier search example that remained unchanged.

## Source history

| Date | Commit | Subject | Page-specific effect |
|---|---|---|---|
| 2021-03-30 | `b9fd58139d35c8aa90083ae99a279c8a6d3dd854` | Added new RatioRange dataytpe. | Adds RatioRange anchors/`<%dtmappings RatioRange%>`, but heading says `Ratio`. |
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | update html template | Removes wrapper div; mechanical. |
| 2022-08-31 | `8592e1207273b786db340efb927bb6d1dc9756c9` | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Changes title/header/intro/Identifier mapping prose to `datatype`. |
| 2022-09-05 | `4652397b3f33fa5641bf58d760a47b3084417e2a` | work on navigation and consistency | Changes owner from FHIR to MnM. Later reversed. |
| 2022-09-09 | `7bf9e9408044b81c4f56930c20697f3afd3393f4` | more datatypes indexing | Replaces simple TOC with four datatype-index diagram blocks. |
| 2023-02-21 | `dad7cf37c75822c352509e1c2e8d050408d0be18` | QA related changes | Changes `HL7 v2` to `HL7 V2`. |
| 2023-03-12 | `22b5c2457301de9acd614a6d899679b609536031` | reorganise data types pages ready for IG | Adds `<!--xlp:...-->` comments; changes `Profiles & Extensions` / `R2 Conversions` to separate Profiles/Extensions/R4 Conversions links. |
| 2023-03-14 | `c5a1cbeada5c8e4fd1582a8e4919a69e37476fd8` | regenerate links to use extension IG | Moves extensions/conversions to extension-IG URLs, keeping type-specific anchors and `R4 Conversions`. |
| 2023-10-02 | `86dc727207742c7e2ae8492822ed3f16804fc0fa` | J# 41582 created a new data type RelativeTime | Adds RelativeTime mapping block; body mentions placeholder RelativeTime docs elsewhere. |
| 2025-02-27 | `d5e267fbf120c85dc323b19515e0e38a626303f8` | FHIR-45488 The curating work group... | Changes owner from MnM to FHIR-I. |
| 2025-02-28 | `dbb78e2435ad20bdcc43ada9656bf01fe99d6165` | FHIR-47467 The resource pages indicate the diff with R4 and not R5 | Changes `R4 Conversions` labels to `Extensions` and extension anchors to `#primitive`; likely defective on this page. |
| 2025-03-31 | `ae7b5cba2cf91381060410cf215dc5fc1c1e9c17` | html conformance changes | Changes `no-external` to `data-no-external`; mechanical. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | normative changes for R6 | Header table says `Responsible Owner`; removes FMM cell. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-25431` (Published, Persuasive, Applied for R5): asks to pick either `data type` or `datatype`. Source implements `datatype`; Confluence 2020 minutes mention "Using `data type`", but later source/Jira state is not enough for an action item.
- `FHIR-41582` (Applied, Persuasive with Modification, Applied for R6): creates RelativeTime. Resolution defines `relativeTime` with context/offset/text elements. Source commit `86dc727...` adds the mapping-page entry.
- `FHIR-45488` (Applied, Persuasive, Applied for R6): says Datatypes/Metadata Types pages should be FHIR-I, not MnM. Commit `d5e267f...` applies this page-specific owner change.
- `FHIR-47467` (Applied, Persuasive, Applied for R6): complains R6 pages indicate diff with R4 rather than R5. Resolution says this would happen near publication and that mappings are maintained in a separate IG. Commit `dbb78e2...` has a likely unintended side effect on this page's `See also` links.

### Other Jira issues that plausibly explain changed or current text

- `FHIR-55681` (Submitted, unresolved): "Incorrect data type labels"; comment says labels for RatioRange should be `RatioRange` not `Ratio`. It cites the main datatype page sections, but the same defect is visible in this mappings source (`datatypes-mappings.html:156-163`).
- `FHIR-34453`, `FHIR-34454`, `FHIR-32404`: RatioRange context in core datatypes, choice types, invariants, and examples. They explain the type's history but not a direct change to this mapping page beyond RatioRange existing.
- `FHIR-50467`, `FHIR-50586`, `FHIR-50530`, `FHIR-53409`: RelativeTime follow-up issues on type framework, constraints, wording, and EventDefinition context. They affect broader RelativeTime documentation, not the mapping page's minimal entry.

### Context-only Jira hits that should not drive action

- `FHIR-23062`, `FHIR-46582`, `FHIR-46583`, `FHIR-47688` appeared in broad `R4 Conversions` searches but concern other pages/resources or historical conversion-tab wording.
- `FHIR-13962` appeared in `Data Type Mappings` search but concerns QICore/QUICK, not this core page.

## Zulip evidence

- Quoted key searches for `FHIR-25431`, `FHIR-41582`, `FHIR-45488`, and `FHIR-47467` found no Zulip hits in the local database.
- `#fmg > ✔ CodeableReference usage in Core` includes Craig Newman saying he created `FHIR-55681` as a related data-type technical correction. This supports that the RatioRange label defect was noticed later, though the thread itself is not about `datatypes-mappings.html`.
- `#implementers > RatioRange and CodeableReference in choice types` and `#implementers > potentially bad invariant in RatioRange` provide context for RatioRange as a new datatype and related R4B/R5 issues. They do not explain the mapping-page heading typo.
- Broad `RelativeTime` Zulip search found later implementation/discussion threads, but no direct evidence about this mapping page. No actionable mismatch was inferred from those hits.

## Confluence evidence

- FHIR-I minutes page `66940491` (2020-01-13) references `FHIR-25431` and records "Using `data type`" / auto-approve. Because the final Jira/source changed this page to `datatype`, this is background only.
- RelativeTime page `175618136` and BRR minutes page `175618106` explain the shift from TimeFromEvent to RelativeTime and the requested structure. This aligns with adding RelativeTime to the page.
- FHIR-I minutes page `239211981` records the `FHIR-45488` persuasive vote; source now shows FHIR-I owner.
- FHIR-I minutes page `288067657` records the `FHIR-47467` persuasive vote and notes that final-publication changes are large. This supports the timing/rationale, but not the specific link-label/anchor regression.
- FHIR-I WGM page `358879917` discusses making main Datatypes content normative, including RatioRange and RelativeTime. The reviewed mapping page still says Informative, which appears appropriate for a mappings page; no action was raised from this alone.

## Timeline

| Date | Clock | Event |
|---|---|---|
| 2020-01-09 | Jira created | `FHIR-25431` filed for inconsistent `datatype` / `data type`. |
| 2020-01-13 | Confluence discussion | FHIR-I minutes mention `FHIR-25431`. |
| 2021-03-30 | Source commit | `b9fd581...` adds RatioRange block with wrong visible heading. |
| 2021-10-27 | Jira resolved | `FHIR-25431` resolved/published later. |
| 2022-08-31 | Source commit | `8592e12...` applies `datatype` spelling on this page. |
| 2023-03-12 | Source commit | `22b5c24...` reorganizes datatype pages and `See also` links. |
| 2023-03-14 | Source commit | `c5a1cbe...` moves extension/conversion links to extension IG while preserving type anchors and conversion labels. |
| 2023-07-13 | Jira created | `FHIR-41582` filed as TimeFromEvent datatype. |
| 2023-07-17 | Confluence discussion | FHIR-I asks for more work; not ready for final decision. |
| 2023-08-18 | Confluence page | RelativeTime proposal page version captured. |
| 2023-09-14 | Jira vote/resolution | `FHIR-41582` resolved as RelativeTime. |
| 2023-10-02 | Source commit | `86dc727...` adds RelativeTime block to this page. |
| 2024-05-06 | Jira vote/resolution | `FHIR-45488` resolved; Confluence vote recorded. |
| 2024-09-12 | Jira created | `FHIR-47467` filed for R6 pages referring to R4 rather than R5. |
| 2024-11-25 | Jira vote/resolution | `FHIR-47467` resolved; FHIR-I minutes say final-publication update because work is large. |
| 2025-02-27 | Source commit | `d5e267f...` changes owner to FHIR-I. |
| 2025-02-28 | Source commit | `dbb78e2...` applies `FHIR-47467` and introduces current link-label/anchor problems. |
| 2025-10-31 | Source commit | `270e0ce...` updates header table during R6 normative cleanup. |
| 2026-02-10 | Jira/Zulip | `FHIR-55681` filed for incorrect RatioRange labels; Zulip thread records the filing. |

## Evidence log

- Confirmed page boundary with `test -f` in both version trees: old exists, new exists.
- Ran direct diff: `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/datatypes-mappings.html`; result saved at `.copilot/session-state/dbce7333-cf10-4291-b10b-1e533f25fd66/files/datatypes-mappings.diff`.
- Ran source history: `git log --reverse --date=short --format='%H%x09%ad%x09%s' ... -- source/datatypes-mappings.html`; result saved at `.copilot/session-state/dbce7333-cf10-4291-b10b-1e533f25fd66/files/datatypes-mappings.log`.
- Inspected all 13 touching commits with `git show --stat --patch`; result saved at `.copilot/session-state/dbce7333-cf10-4291-b10b-1e533f25fd66/files/datatypes-mappings-shows.txt`.
- Read full newer source in two chunks (`1-140`, `141-262`) after diff/history/community investigation.
- Jira snapshots run: `FHIR-25431`, `FHIR-41582`, `FHIR-45488`, `FHIR-47467`, `FHIR-55681`, `FHIR-34453`, `FHIR-34454`, `FHIR-32404`, `FHIR-50467`, `FHIR-50586`, `FHIR-50530`, `FHIR-53409`.
- Jira FTS searches run for `RatioRange`, `RelativeTime`, `"Datatype Mappings"`, `"Data Type Mappings"`, `"conversions-datatypes"`, `"R4 Conversions"`, `"The resource pages indicate the diff with R4 and not R5"`, and `"curating work group" "Data types"`.
- Zulip FTS searches run for quoted explicit keys and topic terms. Unquoted Jira-key searches failed due FTS hyphen parsing and were rerun quoted.
- Zulip snapshots captured for `#fmg > ✔ CodeableReference usage in Core`, `#implementers > RatioRange and CodeableReference in choice types`, and `#implementers > potentially bad invariant in RatioRange`.
- Confluence refs/FTS searches run for explicit keys plus `RatioRange`, `RelativeTime`, `"Datatype Mappings"`, `"Data Type Mappings"`, `"conversions-datatypes"`, and `"R4 Conversions"`.
- Confluence snapshots captured for pages `66940491`, `175613710`, `175618136`, `175618106`, `239211981`, `288067657`, and `358879917`.

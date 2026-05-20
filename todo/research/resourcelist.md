# resourcelist research appendix

## Scope and coverage

- Page path: `source/resourcelist.html`.
- Compared `R4 4.0.1` commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to `R6 ballot4 6.0.0-ballot4` commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Both source files exist. Old file has 721 lines; new file has 485 lines.
- The R6 ballot4 page was read end-to-end: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourcelist.html:1-485`.
- Git history between the two endpoints has 84 commits touching this page. Most changes are resource-list maintenance, resource add/remove/rename churn, and page/navigation template cleanup rather than normative language.
- Explicit Jira keys or issue references found in commit metadata and searched/snapshotted: `FHIR-25933`, `FHIR-26959`, `FHIR-29208`, `FHIR-31478`, `FHIR-19523`, `FHIR-22702`, `FHIR-23809`, `FHIR-31847`, `FHIR-28177`, `FHIR-17183`, `FHIR-34369`, `FHIR-36704`, `FHIR-24619`, `FHIR-38682`, `FHIR-14157`, `FHIR-24827`, `FHIR-46596`, `FHIR-51227`, `FHIR-51930`; later exact-phrase Jira search also found `FHIR-54820` and `FHIR-20002`.
- Jira, Zulip, and Confluence searches were performed for explicit keys and distinctive changed phrases including `Testing Resources`, `fhir-testing-ig`, `Resource Type Index`, `Additional resources may be defined`, `Security Category Considerations`, `R2 Layout`, and `By Maturity`.
- Caveat: the first Zulip FTS pass used unquoted Jira keys and failed because FTS parsed hyphens as operators; quoted key searches were rerun. No Zulip hit was found for `FHIR-54820`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourcelist.html:11-28` | Current heading, metadata, additional-resources wording, and security-category cross-link. |
| Source | Testing Resources row | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourcelist.html:257-260` | Current concrete defect: visible `+ see also` and broken testing IG target. |
| Source | Testing IG macro | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhir.ini:8-9` | Defines `[%ig testing%]` as `https://build.fhir.org/ig/hl7/fhir-testing-ig/index.html`; lowercase org URL returned 404. |
| Diff artifact | Full direct diff | `.copilot/session-state/d928e9ba-72c9-4679-987d-8a02df56f85a/files/resourcelist.diff` | Complete R4->R6 page diff saved for audit. |
| Git commit | Testing resources external-link row | `f9a44787c45071394532c7c2ee94d76f30f47387` / https://github.com/HL7/fhir/commit/f9a44787c45071394532c7c2ee94d76f30f47387 | Removed `TestPlan`, `TestScript`, `TestReport` from the list and added the `+ see also Testing Resources` row. |
| Jira | Broken Testing Resources link | `FHIR-54820` / https://jira.hl7.org/browse/FHIR-54820; local snapshot `.copilot/session-state/d928e9ba-72c9-4679-987d-8a02df56f85a/files/jira/FHIR-54820.md`; reopen: `bun run jira:search snapshot FHIR-54820` | Exact unresolved R6 ballot issue for this page and link. |
| Git commit | Remove old tabs and add resource-desc check | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Removed R2 layout, maturity, and standards-status tabs; added `[%resdesc-check 4%]`. |
| Git commit | Additional resource wording | `931df6ae329dd3d7f44df8358b5affdd2b95e757` / https://github.com/HL7/fhir/commit/931df6ae329dd3d7f44df8358b5affdd2b95e757 | Changed heading to "Resource Type Index" and added the statement that other specs may define additional resources. |
| Jira | Work Group tab wording | `FHIR-36704` / https://jira.hl7.org/browse/FHIR-36704; local snapshot `.copilot/session-state/d928e9ba-72c9-4679-987d-8a02df56f85a/files/jira/FHIR-36704.md` | Explains `By Committee` -> `By Work Group`; implementation commit is `766bd4052d40cc4a31c2f75be57913ce5f307290`. |
| Jira | Security category link | `FHIR-20002` / https://jira.hl7.org/browse/FHIR-20002; local snapshot `.copilot/session-state/d928e9ba-72c9-4679-987d-8a02df56f85a/files/jira/FHIR-20002.md` | Resolution explicitly asked to link `resourcelist.html` to Security Category Considerations. |
| Zulip | Testing IG topic | `#testing > Testing IG`; local snapshot `.copilot/session-state/d928e9ba-72c9-4679-987d-8a02df56f85a/files/zulip/testing__Testing_IG.md`; reopen: `bun run zulip:search snapshot testing "Testing IG"` | Confirms current community references use `https://build.fhir.org/ig/HL7/fhir-testing-ig/en/` or `/en/index.html`. |
| Zulip | Additional Resources topic | `#committers > Additional Resources`; local snapshot `.copilot/session-state/d928e9ba-72c9-4679-987d-8a02df56f85a/files/zulip/committers__Additional_Resources.md`; reopen: `bun run zulip:search snapshot committers "Additional Resources"` | Background for moving low-maturity resources out of core and replacing them with external IG links. |
| Confluence | FHIR-I 2026 Testing resources minutes | Page `404100072`, https://confluence.hl7.org/spaces/FHIRI/pages/404100072/FHIR+Infrastructure+Minutes+WGM+202601+-+Virtual; local snapshot `.copilot/session-state/d928e9ba-72c9-4679-987d-8a02df56f85a/files/confluence/404100072.md` | Meeting background for Testing resources/additional resource IG; no explicit `FHIR-54820` hit found. |
| Confluence | BR&R removal motion | Page `345545642`, https://confluence.hl7.org/spaces/BRR/pages/345545642/2025-06-10+Conference+Call; local snapshot `.copilot/session-state/d928e9ba-72c9-4679-987d-8a02df56f85a/files/confluence/345545642.md` | Supports `FHIR-51930` removal of extra Substance-related resources. |

## Change summary

### Page framing and navigation

- **Metadata/template/navigation:** The page title shown to readers changed from "Resource Index" to "Resource Type Index"; the metadata row changed to "Responsible Owner"; the maturity-level cell was removed; type framework cross-links were added for Base Types, Datatypes, Resources, and Patterns; script paths changed from old jQuery paths to `assets/js/...`.
- **Semantic guidance:** New text says additional resources may be defined in other specifications and points to `resource.html#additional`. This matches the broader R6 "additional resources" direction, but this page remains informative and does not add conformance requirements.
- **Semantic guidance:** The introductory paragraph now points to `security.html#SecPrivConsiderations`; `FHIR-20002` explicitly requested a resource-list link to Security Category Considerations.
- **Metadata/template/navigation:** The tab set was reduced from Categorized, Alphabetical, R2 Layout, By Maturity, Security Category, By Standards Status, By Committee to Categorized, Alphabetical, Security Category, By Work Group. `FHIR-36704` explains the `By Committee` -> `By Work Group` label correction. Commit `270e0ceb...` later removed the obsolete R2 layout, maturity, and standards-status tabs.

### Resource list content

- **Resource-list maintenance, reader-facing but not normative:** The categorized and alphabetical lists changed extensively to reflect resources added, removed, renamed, or moved out of core between R4 and R6 ballot4.
- Examples of resources added or newly listed in the current page include `SubscriptionStatus`, `SubscriptionTopic`, `DeviceAlert`, `NutritionProduct`, `NutritionIntake`, `ImagingSelection`, `InsuranceProduct`, `ActorDefinition`, `Requirements`, and `ArtifactAssessment`.
- Examples of resources removed from this page include `CapabilityStatement2`, `GraphDefinition`, `DocumentManifest`, `CatalogEntry`, `Linkage`, `VerificationResult`, `ClinicalImpression`/later `ClinicalAssessment`, `MolecularSequence`/later `MolecularDefinition`, `GenomicStudy`, `TestPlan`, `TestReport`, `TestScript`, extra Substance resources, and multiple late R6 candidates moved out of core.
- **Reader-facing defect:** Commit `f9a44787...` replaced the three testing resources with `+ see also Testing Resources`. The current macro expands through `source/fhir.ini:9` to a lowercase `hl7` URL that returns 404, while the uppercase `HL7` path works. Jira `FHIR-54820` is an exact unresolved R6 ballot issue for this page defect.

### Mechanical/noise

- Many diff hunks are alphabetical bucket shifts or removals from obsolete tabs. These are noisy but expected after resource additions/removals and the removal of R2/maturity/status tabs.
- No REST/search/operation semantics or normative requirements were changed directly in `source/resourcelist.html`.

## Source history

| Date | Commit | Classification | Notes |
|---|---|---|---|
| 2020-02-07 | `3e3089515a27ab6af3c234f23bb4ec6596878ee2` | resource add | Added `Permission` for `FHIR-25933`; later removed by `0e2a8a7...`. |
| 2020-05-06 | `1f24cf8743f7c9fc97cb383e731d9dc60af729d3` | page-list correction | Corrected medication-definition ordering and removed duplicate `SubstanceDefinition`; tied to `FHIR-26959`. |
| 2020-10-23 | `84488dd4c5694d8e2a1a491b7dcbe8a3496598bc` | resource add/context | Merge noted `FHIR-29208`; page later no longer lists inventory resources after R6 removals. |
| 2021-03-30 | `f7e99e9a9213aed67e7b055503da57bf19954e8b` | resource rename | `J#31478` renamed `DeviceUseStatement` to `DeviceUsage`; later R6 removals superseded this on the page. |
| 2021-05-30 | `142ad7624ca77d81a9463a6ddbd278f521a109da` | mixed/context-only | Subject references `FHIR-19523`, `FHIR-22702`, `FHIR-23809`; these issues are not page-specific resource-list rationale. |
| 2021-07-16 | `b749d029049da7124fff4a982321bc8447c43f61` | resource rename transition | Added copy of `ClinicalUseIssue` for `FHIR-31847`; current page lists `ClinicalUseDefinition`. |
| 2021-11-05 | `47b44e3ba15773f30f6d96fb210fd61213363a88` | resource removal | Removed `CatalogEntry`; tied to `FHIR-28177`. |
| 2021-11-13 | `f141f3aacd701e0a7f1ee7694a963d9c93541a30` | resource add | Initial `ImagingSelection` draft for `FHIR-17183`. |
| 2021-11-23 | `49cdf277a95cca711cdc8b297a6209358ca18019` | resource add | Added `ArtifactAssessment`; issue `FHIR-34369`. |
| 2022-05-10 | `766bd4052d40cc4a31c2f75be57913ce5f307290` | page-label correction | Changed `By Committee` to `By Work Group`; `FHIR-36704`. |
| 2022-08-24 | `46bea37a00e63d1ace04a5f322614c6d0815f500` | resource rename | Renamed `RequestGroup` to `RequestOrchestration`; `FHIR-24619`. |
| 2022-09-05 | `c3da43d4d906bc8ef71d67923be5e5db976665be` | template/status cleanup | Added type framework cross-reference area; set ballot/status-related page structure. |
| 2022-12-14 | `19da5709adf007d9a932f4145dc95406396a7bc0` | semantic guidance | Added `Security Category Considerations` link; exact Jira rationale found in `FHIR-20002`. |
| 2023-01-25 | `b2032629f28b8d31b9a67b46170dde873398fb0d` | resource rename | Changed `MedicationUsage` to `MedicationStatement`; `FHIR-38682`. |
| 2023-02-10 | `53538c40d6fd5ba9a8dc8c07e050478d73aa9037` | resource add/context | Added `EncounterHistory` for `FHIR-14157`; later removed in late R6 cleanup. |
| 2023-12-08 | `2028e3df2dec71628827a8be0ccdda7f9d170b1b` | resource split | Split/addition around `InsuranceProduct`/`InsurancePlan`; `FHIR-24827`. |
| 2025-01-14 | `670d3a407a962cdde0ef1136fbcdea045b124f19` | resource rename | Renamed `ClinicalImpression` to `ClinicalAssessment`; `FHIR-46596`, PR https://github.com/HL7/fhir/pull/3441. |
| 2025-03-15 | `931df6ae329dd3d7f44df8358b5affdd2b95e757` | semantic guidance | Changed heading to `Resource Type Index`; added additional-resources wording. |
| 2025-09-09 | `b595760a8a140b57e6e0733823bdeab5dc8e7863` | resource removal | Removed extra SubstanceDefinition-related resources per `FHIR-51930`; Confluence BR&R motion page `345545642`. |
| 2025-10-01 | `f9a44787c45071394532c7c2ee94d76f30f47387` | resource move + defect | Removed `TestPlan`, `TestReport`, `TestScript` from core lists and added external Testing Resources link; later Jira `FHIR-54820` reports the link is broken. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | navigation cleanup | Removed R2 Layout, By Maturity, and By Standards Status tabs; added `[%resdesc-check 4%]`. |
| 2025-11-05 | `3b38b80cf23f9cbb306fab8fcedb293315478c32` | resource removal | Removed multiple OO resources and pointed toward an incubator in the broader source change. |
| 2025-11-07 to 2025-11-24 | `e073fb45...`, `71567db3...`, `9987f9c0...`, `fad1b9cf...`, `5a4307d...`, `0e2a8a7...` | late R6 resource removals | Removed immunization, citation, verification, charge-item, encounter-history, personal-relationship, additional-resource candidates, medication-knowledge, and permission entries from this page. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-36704` directly explains a page-label correction: the resource-list tab labelled "By Committee" was confusing because it is really "By Workgroup"; commit `766bd405...` applied it.
- `FHIR-20002` was found by exact phrase search for `Security Category Considerations`; its resolution explicitly says to update the top explanation on `resourcelist.html` to point to `security.html#SecPrivConsiderations`.
- `FHIR-26959` directly concerns this page: `SubstanceDefinition is listed twice in the resource list`; commit `1f24cf87...` fixed the duplicate/order issue.
- Resource lifecycle keys provide context for list changes but do not imply current page problems: `FHIR-25933`, `FHIR-29208`, `FHIR-31478`, `FHIR-31847`, `FHIR-28177`, `FHIR-17183`, `FHIR-34369`, `FHIR-24619`, `FHIR-38682`, `FHIR-14157`, `FHIR-24827`, `FHIR-46596`, `FHIR-51227`, `FHIR-51930`.
- `FHIR-19523`, `FHIR-22702`, and `FHIR-23809` appeared in one commit subject but are context-only for this review; their issue content is not about `resourcelist.html` semantics.

### Other Jira issues that plausibly explain changed text

- `FHIR-54820` was found by exact phrase search for `Testing Resources`. It is an unresolved, triaged R6 technical correction with related URL `https://hl7.org/fhir/6.0.0-ballot4/resourcelist.html#1.1`. The description quotes the current row (`+ see also Testing Resources`) and says the link to `https://build.fhir.org/ig/hl7/fhir-testing-ig/index.html` is broken.

### Context-only Jira hits that should not drive action

- Exact search for `+ see also` returned unrelated historical issues such as QI-Core website comments and general narrative-link issues; these should not be used for this page.
- Exact search for `Resource Type Index`, `Additional resources may be defined`, `R2 Layout resourcelist`, and `By Maturity resourcelist` did not find relevant Jira issues.

## Zulip evidence

- Quoted key searches found no Zulip discussion for `FHIR-54820`, `FHIR-36704`, `FHIR-46596`, or `FHIR-51930`.
- Quoted key search for `FHIR-51227` found Clinical Genomics and committers discussions about replacing MolecularSequence with MolecularDefinition. These explain one resource lifecycle change but do not reveal a mismatch in `resourcelist.html`.
- `#testing > Testing IG` snapshot: current participants refer to the Testing IG at `https://build.fhir.org/ig/HL7/fhir-testing-ig/en/` and `https://build.fhir.org/ig/HL7/fhir-testing-ig/en/index.html`, both with uppercase `HL7`. This supports the conclusion that the source macro's lowercase `hl7` target is wrong.
- `#committers > Additional Resources` snapshot: discussion in October 2025 says resources moved out of R6 should generally disappear from core resource lists, while page text can hyperlink to external IGs where relevant. This supports the idea of replacing removed testing resources with an external IG pointer, but not the broken URL or visible leading plus.

## Confluence evidence

- No Confluence refs or FTS hits were found for `FHIR-54820`, `FHIR-36704`, or `FHIR-46596`.
- `FHIR-51227` refs found a series of Clinical Genomics pages, including CG-2025-07-08 through CG-2025-09-09, consistent with the Jira's MolSeq/MolDef replacement history.
- Page `345545642` (`2025-06-10 Conference Call`, BR&R) records the motion and vote to remove five Substance-related resources, matching `FHIR-51930`.
- FHIR-I pages for 2025/2026 mention "Testing resources" and additional-resource IG topics, but no Confluence evidence was found that resolves or contradicts the exact broken-link issue in `FHIR-54820`.

## Timeline

- **2019-12 to 2023-12 source history:** many resource list additions, removals, and renames accumulated between R4 and R5/R6 drafts, including SubscriptionTopic, MedicationStatement, RequestOrchestration, ImagingSelection, ArtifactAssessment, and InsuranceProduct.
- **2022-04/05 Jira and source:** `FHIR-36704` was created April 5, 2022, resolved April 27, and applied May 10 by commit `766bd405...`.
- **2022-12 source and Jira vote:** `FHIR-20002` vote date December 5, 2022; commit `19da570...` added the Security Category Considerations link on December 14, 2022.
- **2025-03 source:** commit `931df6ae...` introduced "Resource Type Index" and additional-resources wording.
- **2025-09 to 2025-11 source:** several late R6 commits removed or externalized low-maturity/additional resources, including extra Substance resources, testing resources, OO resources, and other resource candidates.
- **2025-10-01 source:** commit `f9a44787...` removed `TestPlan`, `TestReport`, and `TestScript` from the page and added the external Testing Resources row.
- **2026-01-19 Jira:** `FHIR-54820` was created as an R6 ballot issue for the broken Testing Resources link on `resourcelist.html`; it remains triaged/unresolved in the local snapshot.
- **2026-02 to 2026-05 Zulip:** `#testing > Testing IG` discussion refers to the working uppercase `HL7` Testing IG URL.

## Evidence log

- Confirmed page existence and line counts with `test -f` and `wc -l` for both trees: old exists, new exists; old 721 lines, new 485 lines.
- Saved direct diff with:
  `git -C "$NEW" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/resourcelist.html > .../files/resourcelist.diff`.
- Listed page history with:
  `git -C "$NEW" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/resourcelist.html`.
- Used blame and pickaxe for current key phrases: `Types Framework Cross Reference`, `Additional resources may be defined`, `Security Category Considerations`, `+ see also`, `R2 Layout`, `By Maturity`, `By Standards Status`, `By Committee`, and `resdesc-check 4`.
- Snapshotted explicit Jira keys with `bun run jira:search snapshot FHIR-XXXXX`; snapshots are under `.copilot/session-state/d928e9ba-72c9-4679-987d-8a02df56f85a/files/jira/`.
- Jira exact phrase searches found `FHIR-54820` for `"Testing Resources"` and `FHIR-20002` for `"Security Category Considerations"`; searches for `"Resource Type Index"` and `"Additional resources may be defined"` found no results.
- Zulip unquoted Jira key searches failed due FTS parsing; quoted searches were rerun. Snapshots were taken for `testing` / `Testing IG` and `committers` / `Additional Resources`.
- Confluence searches used `refs jira` and `fts` for selected keys/phrases; snapshots were taken for page `345545642` and page `404100072`.
- Link verification command showed:
  - `https://build.fhir.org/ig/hl7/fhir-testing-ig/index.html` -> HTTP 404.
  - `https://build.fhir.org/ig/HL7/fhir-testing-ig/index.html` -> HTTP 200.
  - `https://build.fhir.org/ig/HL7/fhir-testing-ig/en/index.html` -> HTTP 200.

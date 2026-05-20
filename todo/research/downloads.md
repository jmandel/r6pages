# downloads research appendix

## Scope and coverage

- Page path: `source/downloads.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Page boundary: present in both trees.
- New page read end-to-end: yes, 154 lines at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/downloads.html`.
- Direct source-history count: 24 commits touching `source/downloads.html` between the two commits.
- Explicit issue keys from source history: `FHIR-22719`, `FHIR-22793`, `FHIR-22780`, `FHIR-24913`, `FHIR-25431`, `FHIR-30088`, `FHIR-31735`, `FHIR-39010`, `FHIR-44047`; legacy `GF#22719`/`GF#22793` also appeared in history/community context.
- Additional Jira issues found by changed-phrase/page searches: `FHIR-51415` and `FHIR-34429`.
- Jira/Zulip/Confluence searches were bounded to explicit keys and distinctive changed phrases. Failed key searches in Zulip FTS were retried with SQL `LIKE` because unquoted hyphenated issue keys were parsed as FTS operators.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/downloads.html` | R4 baseline |
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/downloads.html` | R6 ballot4 reviewed page |
| Source lines | Tools Registry row | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/downloads.html:101-107` | Current page points implementation tools to Confluence |
| Source lines | R6 package list | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/downloads.html:111-121` | Current NPM package wording and typo |
| Source lines | End of page after code-generation support | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/downloads.html:144-154` | Shows no current Reference Implementations section |
| Commit | Split tools out from spec | `472abf78c495c2ae44924d499be7434ed50788d0`, https://github.com/HL7/fhir/commit/472abf78c495c2ae44924d499be7434ed50788d0, PR https://github.com/HL7/fhir/pull/2396 | Applies `FHIR-31735`, replacing validator/publisher rows with Tools Registry link |
| Commit | Reference implementations to Confluence | `f575ef6b27e6bc5fc01db942c9cf8d00f50099f2`, https://github.com/HL7/fhir/commit/f575ef6b27e6bc5fc01db942c9cf8d00f50099f2, PR https://github.com/HL7/fhir/pull/2347 | Initially replaced in-page implementation list with Confluence link |
| Commit | R6 package update/removal | `3bfb4a3a0bea81f82e7e71100893c1226d8fccdc`, https://github.com/HL7/fhir/commit/3bfb4a3a0bea81f82e7e71100893c1226d8fccdc, PR https://github.com/HL7/fhir/pull/3987 | Changes package links to R6 and deletes remaining Reference Implementations section |
| Commit | Search package row | `a4ed0ed8a81d8e4c5fc6a978f0aed73e23c558d4`, https://github.com/HL7/fhir/commit/a4ed0ed8a81d8e4c5fc6a978f0aed73e23c558d4, PR https://github.com/HL7/fhir/pull/2651 | Implements search-parameter package row from `FHIR-39010` |
| Commit | RDF terminology | `75ac19316e0ecb87514d39cb809677955bae914a`, https://github.com/HL7/fhir/commit/75ac19316e0ecb87514d39cb809677955bae914a, PR https://github.com/HL7/fhir/pull/2453 | Changes RDF "Definitions" to "Ontology" |
| Jira | `FHIR-31735` | https://jira.hl7.org/browse/FHIR-31735; reopen with `bun run jira:search snapshot FHIR-31735` | Formal decision to move implementation tools/reference implementations to Confluence |
| Jira | `FHIR-30088` | https://jira.hl7.org/browse/FHIR-30088; reopen with `bun run jira:search snapshot FHIR-30088` | Python-library request resolved by moving reference implementation list to Confluence |
| Jira | `FHIR-39010` | https://jira.hl7.org/browse/FHIR-39010; reopen with `bun run jira:search snapshot FHIR-39010` | Rationale for resource-specific search-parameter package row |
| Jira | `FHIR-22793` | https://jira.hl7.org/browse/FHIR-22793; reopen with `bun run jira:search snapshot FHIR-22793` | Removes RDF "(not up to date)" wording |
| Jira | `FHIR-51415` | https://jira.hl7.org/browse/FHIR-51415; reopen with `bun run jira:search snapshot FHIR-51415` | Open R6 issue saying downloads links pointed to R5; current source appears fixed |
| Jira | `FHIR-34429` | https://jira.hl7.org/browse/FHIR-34429; reopen with `bun run jira:search snapshot FHIR-34429` | Earlier package-description/link correctness issue |
| Zulip | RDF ontology thread | `#ontology > current version of the FHIR ontology`, https://chat.fhir.org/#narrow/stream/ontology/topic/current%20version%20of%20the%20FHIR%20ontology; `bun run zulip:search snapshot ontology "current version of the FHIR ontology"` | Human rationale for removing "(not up to date)" |
| Zulip | Python implementation thread | `#python > py reference implementation`, https://chat.fhir.org/#narrow/stream/python/topic/py%20reference%20implementation; `bun run zulip:search snapshot python "py reference implementation"` | Origin discussion for `FHIR-30088` |
| Zulip | Search params thread | `#implementers > FHIR-39010 shared search params`, https://chat.fhir.org/#narrow/stream/implementers/topic/FHIR-39010%20shared%20search%20params; `bun run zulip:search snapshot implementers "FHIR-39010 shared search params"` | Implementer rationale for split search-parameter artifacts |
| Zulip | XML tools thread | `#committers > XML tools`, https://chat.fhir.org/#narrow/stream/committers/topic/XML%20tools; `bun run zulip:search snapshot committers "XML tools"` | Supports removal of old XML tools/reference-implementation remnants |
| Confluence | FHIR Tools Registry | Page `66941491`, https://confluence.hl7.org/spaces/FHIR/pages/66941491/FHIR+Tools+Registry; `bun run confluence:search snapshot 66941491` | Current downloads page target |
| Confluence | Open Source Implementations | Page `35718838`, https://confluence.hl7.org/spaces/FHIR/pages/35718838/Open+Source+Implementations; `bun run confluence:search snapshot 35718838` | Intended external home for reference implementations |
| Confluence | `FHIR-30088` minutes | Page `104569268`, https://confluence.hl7.org/spaces/FHIRI/pages/104569268/FHIR+Infrastructure+Minutes+CC+20210222 | Minutes say to move reference implementations to Confluence |
| Confluence | `FHIR-31735` minutes | Page `81028096`, https://confluence.hl7.org/spaces/FHIRI/pages/81028096/FHIR+Infrastructure+Minutes+WGM+202201 | Minutes say other tools should be listed via Confluence |
| Confluence | `FHIR-39010` vote minutes | Page `154995277`, https://confluence.hl7.org/spaces/FHIRI/pages/154995277/FHIR+Infrastructure+Minutes+CC+2023-01-30 | Vote evidence for search package change |
| Confluence | `FHIR-44047` minutes | Page `234784975`, https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas | Broad punctuation cleanup context |

## Change summary

### Page header and metadata

- Classification: metadata/template/navigation.
- Direct diff removes the old `<div class="col-12">` wrapper, switches the table class from `colis` to `colsi`, removes the old maturity-level cell, and changes the work-group label to "Responsible Owner".
- Main commits: `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` (HTML template), `4491c7392b67571b2d046e44536a1d865905577c` (top header), `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` (R6 normative header wording).

### FHIR definitions

- Classification: editorial/tooling cleanup.
- The Forge-specific `definitions-r2.xml.zip` row was removed. `c95c477ee4c1304738599514c3c0b9bcd1fb6fdc` says this was a follow-up from `FHIR-22719`, and `FHIR-31735` later explicitly lists removal of the outdated Forge link as part of its downloads-page work.
- No new normative or conformance semantics were introduced.

### RDF/Turtle downloads

- Classification: semantic guidance/editorial, not normative requirements.
- R4's RDF label becomes "RDF (Turtle)" and the `fhir.rdf.ttl.zip` description changes from "Definitions ... (not up to date)" to "Ontology - OWL assertions...".
- `FHIR-22793` says the RDF download was incorrectly marked "not up to date" and should have that parenthetical removed.
- Zulip `#ontology > current version of the FHIR ontology` records the source of the request: Lloyd McKenzie said the build download was as up-to-date as it gets, and asked for a change request to remove the wording.

### FHIR specification zip

- Classification: download-link/editorial.
- The `fhir-spec.zip` link is restored in `d382fc3af52ab7607c6c8fead1f47cdf09be3562`, replacing text that said the whole specification was not downloadable from build.fhir.org.

### Implementation tools and reference implementations

- Classification: substantive reader-facing restructuring, but not normative/conformance behavior.
- Direct validator and IG Publisher rows were removed and replaced with a single Tools Registry pointer at current lines 105-107.
- `FHIR-31735` resolution says downloads.html should remove the outdated Forge link, change "Implementation Tools" to a Confluence page, and change "Reference Implementations" to a Confluence page. PR #2396 (`472abf78...`) implemented the Tools Registry part.
- `FHIR-30088` requested adding Python libraries; its Jira resolution and FHIR-I minutes instead moved reference implementations to Confluence so the list could be maintained outside the core spec. PR #2347 (`f575ef6...`) initially left a Reference Implementations section with a Confluence link.
- PR #3987 (`3bfb4a3...`) later removed the remaining Reference Implementations section and disclaimer text from downloads.html. Current R6 ballot4 has no direct `Open Source Implementations` link; the Tools Registry Confluence page itself points onward to Open Source Implementations. This is the main intent/discoverability issue elevated in `todo/actions/downloads.md`.

### NPM packages

- Classification: substantive download artifact/link changes and semantic package guidance; no direct normative requirement language.
- The old single `package.tgz` row became named package downloads (`hl7.fhir.r5.*`, later `hl7.fhir.r6.*`).
- `FHIR-34429` records prior package-description/link corrections in the R4B/R5 timeframe.
- `FHIR-39010` adds the search-parameter package row and says resource-specific search parameters should be generated and included in the published package for R5 and later, not rendered in the spec and not referenced by CapabilityStatements.
- Zulip `#implementers > FHIR-39010 shared search params` provides implementation rationale: server implementers discussed performance and optional use of split search-parameter definitions.
- `FHIR-51415` is a later open R6 issue saying the downloads page still pointed to `hl7.fhir.r5.*`; current R6 ballot4 source has `hl7.fhir.r6.*` and no `R5`/`r5` matches, apparently fixed by PR #3987 even though the Jira issue remains Triaged.
- Current line 116 still contains a typo: "value sets the have a required binding".

### Other download/support links

- Classification: reader-facing link cleanup.
- Test cases moved from the old HAPI core R4 resource path to `https://github.com/FHIR/fhir-test-cases/releases`.
- Icon pack moved from local `icon-pack.zip` to `http://hl7.org/fhir/iconpack`.
- Code generation support remains a concise row listing expansion files plus choice/backbone element JSON.

### Removed reference implementation listing and disclaimer

- Classification: restructuring/editorial with potential intent mismatch.
- R4's in-page Java/C#/Pascal/XML/Javascript/Python/Swift reference implementation list and disclaimer were removed.
- The removal avoids stale product/library links and aligns with the broad "maintain outside the core spec" rationale, but the final R6 page no longer includes the direct Confluence destination that `FHIR-30088` and `FHIR-31735` expected.

## Source history

| Date | Commit | Subject | Page-specific effect | Classification |
|---|---|---|---|---|
| 2019-11-06 | `336d90813313b01c048a6bfaf4e0a39f1ba0890e` | Update links to .NET library per GF#22719 | Updated C# reference implementation links | link maintenance |
| 2020-01-20 | `b98b26f6cb50c11be16c313747ddb33bbea37ad1` | updates for revised validator | Replaced single NPM package with named R5 package list; introduced the "the have" typo | package restructuring |
| 2020-04-30 | `7e428a18a149895ab197fa5336eb14da7808f0cf` | fix broken links | Validator/publisher links changed to Google storage | link maintenance |
| 2020-08-14 | `021fdd52eec1b71a39014469ed6df9dbb3804995` | update core dependency | Validator/publisher links changed to GitHub releases | link maintenance |
| 2021-04-09 | `c95c477ee4c1304738599514c3c0b9bcd1fb6fdc` | Follow-up from FHIR-22719 | Removed Forge-specific definitions link; updated Firely SDK link | tooling cleanup |
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | update html template | Removed `col-12` wrapper | mechanical/template |
| 2021-06-27 | `bb3428390ab6e94154659749bcf0ba4d0b4bafcf` | merge | Merge/no page-specific rationale visible in patch output | mechanical |
| 2022-03-17 | `53366fab6394f8c17cfb49ef9873da7ad9b03b87` | Apply FHIR-22793 | Removed RDF "(not up to date)" | editorial/semantic clarity |
| 2022-08-09 | `b45913e9990355abbf1dc7ab73da4f425c55d519` | FHIR-22780 | Patch adds Python library links, but `FHIR-22780` snapshot is about contained resources; commit subject appears mis-keyed or unrelated | history caveat |
| 2022-08-28 | `67c4ba690d1c4aca555bf00d9f8ca9bdbbbb095e` | FHIR-24913 Outdated statements on Version page | Updated test-case path and C# package version | link/version maintenance |
| 2022-08-30 | `4491c7392b67571b2d046e44536a1d865905577c` | fix top header | Header table class change | metadata/template |
| 2022-08-31 | `0d58d10e724397da66de18b51936bc3c2702e4f7` | typos | Test cases link changed to `FHIR/fhir-test-cases` releases | link correction |
| 2022-08-31 | `8592e1207273b786db340efb927bb6d1dc9756c9` | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | "data types" to "datatypes" in removed R5 elements package row | editorial |
| 2022-09-03 | `f575ef6b27e6bc5fc01db942c9cf8d00f50099f2` | FHIR-30088 - Changed downloads page to point to Confluence for reference implementations | Removed in-page language-specific reference implementation list and inserted Confluence link | restructuring |
| 2022-09-04 | `ec63f83ffe65f4c03073aa0ac435750cb81f859d` | Fixed link in downloads.html | Fixed Confluence link scheme | link correction |
| 2022-09-05 | `472abf78c495c2ae44924d499be7434ed50788d0` | Applying FHIR-31735: split tools out from spec | Removed validator/publisher direct rows; inserted FHIR Tools Registry link | restructuring |
| 2022-12-01 | `75ac19316e0ecb87514d39cb809677955bae914a` | FHIR RDF definitions-->ontology | RDF "Definitions" becomes "Ontology"; "formal definitions" becomes "OWL assertions" | semantic wording |
| 2022-12-13 | `d382fc3af52ab7607c6c8fead1f47cdf09be3562` | fixing up broken links etc (links to build.fhir.org) | Restored `fhir-spec.zip` link | link correction |
| 2023-02-15 | `a4ed0ed8a81d8e4c5fc6a978f0aed73e23c558d4` | FHIR-39010 Search parameters included in output artifacts... | Added search-parameter package row | package artifact change |
| 2023-03-26 | `eca054db690594b98b3cf81ff52634f2bbc69822` | fix up downloads page | Removed R5 elements package row; changed icon link; edited reference implementation disclaimer | link/editorial |
| 2025-10-22 | `8244937cafb494f6c637de64b22982826c5533db` | Fix extensibility example in RDF; Fix links; Editorial improvements & typos | Renamed "RDF" to "RDF (Turtle)" | editorial clarity |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | normative changes for R6 | Header owner/status wording | metadata/template |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | FHIR-44047 | Adds comma in "e.g.," | editorial |
| 2025-11-16 | `3bfb4a3a0bea81f82e7e71100893c1226d8fccdc` | R6 packages, and ballot intro clarifications | R5 package links changed to R6; remaining Reference Implementations section/disclaimer removed | package update/restructuring |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-22719` (Published, Persuasive): "Updates to C# Reference Implementation links on downloads page"; comments cite PR #737 and PR #1257. It explains the old C# link updates that were later removed from the page.
- `FHIR-22793` (Published, Persuasive): RDF download was marked "(not up to date)" incorrectly; resolution says to remove the parenthetical. Commit `53366fab...` applies this.
- `FHIR-22780` (Published, Persuasive with Modification): about `contained` resources, not downloads. The `b45913...` commit subject appears unrelated to its patch, which adds Python library links.
- `FHIR-24913` (Published, Persuasive with Modification): standards-status wording on versions page. It is mostly context-only for downloads; the downloads patch performed link/version cleanup.
- `FHIR-25431` (Published, Persuasive): broad datatype spelling cleanup. Downloads impact was only a removed package row's wording.
- `FHIR-30088` (Published, Persuasive with Modification): requested adding Python libraries to the downloads reference implementation section. Resolution instead moves reference implementations to Confluence and reorganizes that page.
- `FHIR-31735` (Published, Persuasive with Modification): requested adding .NET validator information. Resolution includes downloads.html changes: remove old Forge link, change Implementation Tools to a Confluence page, and change Reference Implementations to a Confluence page.
- `FHIR-39010` (Published, Persuasive with Modification): asks for individual/resource-specific search parameter definitions in output artifacts. Resolution says to generate and include them in the published package for R5 and later, not render them in the spec or reference them from CapabilityStatements.
- `FHIR-44047` (Resolved - change required, Persuasive): broad punctuation cleanup for `e.g.,`/`i.e.,`; the downloads page has one punctuation-only commit.

### Other Jira issues that plausibly explain changed text

- `FHIR-51415` (Triaged, unresolved, Highest): "download links point to R5" for `build.fhir.org/downloads.html`; description quotes the R5 package links and says link text/URLs should be R6. Current R6 ballot4 source has no R5 references in `downloads.html`, apparently addressed by `3bfb4a3...`/PR #3987, but the Jira issue remains open.
- `FHIR-34429` (Published, Persuasive): earlier R4B package download issue noting identical package descriptions and wrong versioned package names; it provides historical package-list context and also preserves the same "the have a required binding" typo in copied R5 text.

### Context-only Jira hits that should not drive action

- `FHIR-29395` appeared in a broad "NPM Packages downloads" search but concerns `FHIR-smart-web-messaging`, not the core downloads page.
- `FHIR-22780`, `FHIR-24913`, and `FHIR-25431` are useful for commit-history provenance but do not reveal current page issues.

## Zulip evidence

- `#ontology > current version of the FHIR ontology` (2019-03-22 to 2019-07-02): Andreas Keil asked whether the RDF download was current because downloads.html said "(not up to date)"; Lloyd McKenzie said the build download was as up-to-date as it gets and asked for a change request; Patrick Werner later wrote "added it: GF#22793". This supports `FHIR-22793`.
- `#python > py reference implementation` (2020-12-17 to 2021-02-16): implementers noted Python libraries missing from the downloads reference implementation section, created `FHIR-30088`, and later updated the Confluence Open Source Implementations page. This supports moving library lists out of the spec.
- `#implementers > FHIR-39010 shared search params` (2023-01-22 to 2023-01-30): Brian Postlethwaite and server implementers discussed split search-parameter definitions for performance/code generation; this supports the added `hl7.fhir.r*.search.tgz` row.
- `#committers > XML tools` (2022-05-10): Ward Weistra asked whether a dead XML tools URL should stay as part of `FHIR-31735`; Grahame Grieve answered "remove it". This supports removal of old reference-implementation/tooling remnants.
- `#fhir/infrastructure-wg > FHIR-I Block Vote` (2020-04-08 to 2020-04-13): mentions `J#22719` in a block-vote list; useful vote/process context but not a current page concern.
- SQL searches found no Zulip mentions of `FHIR-51415` or `FHIR-44047`.

## Confluence evidence

- FHIR Tools Registry page `66941491` is the current downloads-page target. Snapshot shows it has incoming links from downloads/validation and summarizes common tools, including a pointer to Open Source Implementations for programming libraries.
- Open Source Implementations page `35718838` is the intended external home for reference implementations. Snapshot shows it lists known open-source FHIR implementations and includes an incoming FHIR downloads link from older publication context.
- FHIR Infrastructure minutes `104569268` (2021-02-22) for `FHIR-30088`: "There is an existing python implementation listed, fine adding the two others suggested. Will move all reference implementations to Confluence ... so that the list can be maintained outside the core spec. Will reorg that Confluence page as well... Persuasive with Mod".
- FHIR Infrastructure minutes `81028096` (2022-01 WGM) for `FHIR-31735`: "Agreed that other tools should be listed. Will likely add a confluence page so it can be updated independently from the spec. Persuasive with Mod".
- FHIR Infrastructure minutes `144993476` (2023-01-09) for `FHIR-39010`: asked Brian for clarification.
- FHIR Infrastructure minutes `154995277` (2023-01-30) for `FHIR-39010`: "Persuasive with Mod Grahame Grieve/Gino Canessa: 13-0-0".
- FHIR Infrastructure minutes `234784975` (2024 WGM Dallas) for `FHIR-44047`: broad "will fix" punctuation context.
- FHIR Infrastructure minutes `66940491` (2020-01-13) for `FHIR-25431`: "Using 'data type' Will auto approve"; context only for this page.

## Timeline

| Date | Clock | Event |
|---|---|---|
| 2019-03-22 | Zulip discussion | RDF ontology thread determines downloads RDF file is current and "(not up to date)" should be removed |
| 2019-07-02 | Jira/community | `GF#22793`/`FHIR-22793` created from RDF discussion |
| 2019-11-06 | Source/Jira | `FHIR-22719` C# link update committed |
| 2020-01-20 | Source | Named R5 package rows added; current typo originates here by pickaxe |
| 2021-02-22 | Confluence/Jira decision | `FHIR-30088` resolved to move reference implementations to Confluence |
| 2022-01-21 | Confluence/Jira decision | `FHIR-31735` resolved to move implementation tools/reference implementations to Confluence |
| 2022-03-17 | Source | `FHIR-22793` RDF "(not up to date)" removal applied |
| 2022-09-03 | Source/PR | `f575ef6...` / PR #2347 changes downloads page to point reference implementations to Confluence |
| 2022-09-05 | Source/PR | `472abf...` / PR #2396 splits tools out of the spec and links Tools Registry |
| 2023-01-30 | Confluence/Jira decision | `FHIR-39010` voted Persuasive with Modification |
| 2023-02-15 | Source/PR | `a4ed0e...` / PR #2651 adds search package row |
| 2025-07-02 | Jira | `FHIR-51415` opened: R6 downloads still point to R5 packages |
| 2025-11-16 | Source/PR | `3bfb4a...` / PR #3987 changes package links to R6 and removes Reference Implementations section |
| 2026-01-17 | Jira update | `FHIR-51415` still Triaged/unresolved despite current source no longer having R5 package links |

## Evidence log

- Confirmed page boundary with `test -f` for both old and new trees; both exist.
- Ran direct rename-aware diff: `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/downloads.html`.
- Ran history: `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/downloads.html`.
- Inspected each page-touching commit with `git show --stat --patch`.
- Read the full newer page with line-numbered file reads: lines 1-90 and 91-154.
- Snapshotted explicit Jira keys: `FHIR-22719`, `FHIR-22793`, `FHIR-22780`, `FHIR-24913`, `FHIR-25431`, `FHIR-30088`, `FHIR-31735`, `FHIR-39010`, `FHIR-44047`.
- Searched Jira for distinctive phrases including `"FHIR Tools Registry" downloads`, `"Open Source Implementations" downloads`, `"hl7.fhir.r6.search"`, `"NPM Packages" downloads`, and `"the have a required binding"`; this surfaced `FHIR-51415` and `FHIR-34429`.
- Snapshotted `FHIR-51415`, `FHIR-34429`, and context-only `FHIR-29395`.
- Zulip FTS searches for unquoted issue keys failed due FTS parsing of hyphens as operators; reran key searches with SQL `content LIKE`.
- Snapshotted Zulip threads: ontology/current version, python/py reference implementation, implementers/FHIR-39010 shared search params, committers/XML tools, and fhir/infrastructure-wg/FHIR-I Block Vote.
- Searched Confluence refs/FTS for all explicit keys plus `FHIR Tools Registry`, `Open Source Implementations`, `downloads page`, `R6 packages`, and the typo phrase.
- Snapshotted Confluence pages `66941491`, `35718838`, `104569268`, `81028096`, `154995277`, `144993476`, `234784975`, and `66940491`.
- Used `gh api /repos/HL7/fhir/commits/<sha>/pulls` to identify PRs #2347, #2396, #2453, #2651, and #3987 for key commits.
- Verified current R6 ballot4 `downloads.html` has no `R5`/`r5` references and does contain the typo at line 116.

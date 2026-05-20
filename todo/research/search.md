# search research appendix

## Scope and coverage

- Page path: `source/search.html`.
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Page boundary: `source/search.html` exists in both trees. The page is modified, not added/deleted/renamed.
- Direct diff size: `source/search.html | 7113`, with 5,812 insertions and 1,301 deletions.
- New page coverage: line count is 6,928. I performed an end-to-end section scan of all 109 headings, plus targeted source reads of the changed sections and suspected defect ranges.
- Source history: 211 commits touched this page between the two commits. Commit subjects contain many explicit tracker keys; this review snapshoted the high-signal keys tied to current R6 semantics and the actionable finding rather than every historical R5 cleanup key.
- Source file itself contains no `FHIR-#####` keys.
- Jira/Zulip/Confluence coverage: selected Jira snapshots, Zulip searches/snapshots, and Confluence refs/snapshots were run for the most distinctive R6 changes and the main evidence gap. Initial unquoted Zulip FTS searches for hyphenated issue keys failed because FTS parsed the hyphen; the searches were rerun with quoted issue keys.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/search.html:1` | R4 baseline, 2,417 lines |
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html:1` | R6 ballot4 reviewed page, 6,928 lines |
| Source | New URL-encoding note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html:149` | Current implementation of FHIR-48702-style escaping guidance |
| Source | Search input naming/disambiguation context | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html:693` | Location where FHIR-53569 said client CapabilityStatement guidance should be added |
| Source | Custom SearchParameter guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html:6469` | Partial application of FHIR-53569 |
| Source | Broken `#paging` TOC link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html:109` and target at `:5802` | Link uses lowercase `#paging`; source anchor is uppercase `Paging` |
| Source | Broken `#types` link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html:6361` and target at `:4661` | Link uses `#types`; section anchor is `#type` |
| Source | Broken `_summary` value links | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html:5208` | `#summary-true`, `#summary-text`, `#summary-data`, `#summary-count`, `#summary-false` have no matching source anchors |
| Commit | URL encoding note | `d83729a5d4743f1218b4e53aad9e70c5363880da`, https://github.com/HL7/fhir/commit/d83729a5d4743f1218b4e53aad9e70c5363880da | Adds URL-encoding note and updates examples; Jira FHIR-48702 |
| Commit | Conformance tagging cleanup | `a3766ac36c61fa3448d53aca0519dcbd874cfc93`, https://github.com/HL7/fhir/commit/a3766ac36c61fa3448d53aca0519dcbd874cfc93 | Large pass tagging conformance language; Jira FHIR-37753 |
| Commit | `_maxresults` matches only | `647d1548bcf7a7a6c7cdccb4a6986aad39d3718f`, https://github.com/HL7/fhir/commit/647d1548bcf7a7a6c7cdccb4a6986aad39d3718f | Clarifies `_maxresults` excludes includes/outcomes; Jira FHIR-46763 |
| Commit | Contained chaining SHOULD | `48bf8dfc355a30114d773dd999df18f345fe27cc`, https://github.com/HL7/fhir/commit/48bf8dfc355a30114d773dd999df18f345fe27cc | Changes contained chained search wording; Jira FHIR-47537 |
| Commit | Iterate behavior | `80761a68de394a4770496d0f05bfd4494abc0e98`, https://github.com/HL7/fhir/commit/80761a68de394a4770496d0f05bfd4494abc0e98 | Clarifies `:iterate` applies to included resources as well as matches; Jira FHIR-46944 |
| Commit | Resource search type | `554d2c28aa585e14e3bbe39a4291c3bfedff0eb3`, https://github.com/HL7/fhir/commit/554d2c28aa585e14e3bbe39a4291c3bfedff0eb3 | Adds `resource` search parameter type section; Jira FHIR-48363 |
| Commit | Canonical/URI search prose | `8db9a2eba3276aaa4e33f243cfeee4e183b063bf`, https://github.com/HL7/fhir/commit/8db9a2eba3276aaa4e33f243cfeee4e183b063bf | Clarifies `uri` vs `reference` for canonicals; Jira FHIR-52936 |
| Commit | Non-Reference reference chaining/includes | `50ef95a57642a2038880bbf9f7433c803efc3a1e`, https://github.com/HL7/fhir/commit/50ef95a57642a2038880bbf9f7433c803efc3a1e | Clarifies discretion and outcomes for non-Reference references; Jira FHIR-45252 |
| Commit | Custom SearchParameter prefixes | `8b4082caae2d890a9164d9119c7db8722a31f172`, https://github.com/HL7/fhir/commit/8b4082caae2d890a9164d9119c7db8722a31f172 | Partially applies FHIR-53569; key actionable finding |
| PR | R6 search cleanup cluster | https://github.com/HL7/fhir/pull/3442 | Referenced by Jira comments for many 2025-03 search changes |
| PR | Later R6 search clarifications | https://github.com/HL7/fhir/pull/3967 | Referenced by Jira comments for 2025-10/11 changes |
| Jira | FHIR-53569 | https://jira.hl7.org/browse/FHIR-53569; reopen with `bun run jira:search snapshot FHIR-53569` | Formal resolution includes client CapabilityStatement guidance not present in source |
| Zulip | Custom SearchParameters and preceding hyphens | https://chat.fhir.org/#narrow/stream/implementers/topic/Custom%20SearchParameters%20and%20preceding%20hyphens; reopen with `bun run zulip:search snapshot implementers "Custom SearchParameters and preceding hyphens"` | Discussion that led to FHIR-53569 |
| Confluence | FHIR-I minutes 2025-12-08 | Page `413042140`, https://confluence.hl7.org/spaces/FHIRI/pages/413042140/FHIR+Infrastructure+Minutes+CC+2025-12-08; reopen with `bun run confluence:search snapshot 413042140` | WG minutes for FHIR-53569; says to point people to CapabilityStatement checking |
| Zulip | Bundle?composition | https://chat.fhir.org/#narrow/stream/hapi/topic/Bundle%3Fcomposition; reopen with `bun run zulip:search snapshot hapi "Bundle?composition"` | Informal evidence that Bundle composition search ambiguity led to FHIR-48363 |
| Zulip | Reference.reference with version | https://chat.fhir.org/#narrow/stream/conformance/topic/syntax%20of%20Reference.reference%20with%20version; reopen with `bun run zulip:search snapshot conformance "syntax of Reference.reference with version"` | Rationale for readable examples plus URL-encoding note |
| Confluence | FHIR-I minutes 2025-01-13 | Page `307299878`, https://confluence.hl7.org/spaces/FHIRI/pages/307299878/FHIR+Infrastructure+Minutes+CC+2025-01-13 | Mentions FHIR-46944 and FHIR-47537 votes |
| Confluence | FHIR-I minutes 2025-07-21 | Page `358883031`, https://confluence.hl7.org/spaces/FHIRI/pages/358883031/FHIR+Infrastructure+Minutes+CC+2025-07-21 | Mentions FHIR-51428 vote |
| Confluence | FHIR-I minutes 2024-10-21 | Page `274271287`, https://confluence.hl7.org/spaces/FHIRI/pages/274271287/FHIR+Infrastructure+Minutes+CC+2024-10-21 | Mentions FHIR-48363 |

## Change summary

### Page structure and navigation - metadata/template/navigation

- R4 starts with a compact "Summary Table" near the top (`old source/search.html:27`); R6 ballot4 replaces this with a long `Contents` section near the top (`new source/search.html:26`) and moves the summary material to `Summary Tables` at the end (`new source/search.html:6505`).
- R6 reorganizes the document around major sections: `Search Responses`, `Transport Protocols`, `Search Parameters`, `Special Search Conditions`, `Modifying Search Results`, `Standard Parameters`, `Server Conformance`, and `Summary Tables`.
- The old `<div class="col-12">` wrapper is removed in the diff. The status table changes from including both maturity and standards cells in R4 to the R6 normative standards status row.
- Concrete navigation defects remain in the new source: `#paging`, `#types`, and the `_summary` value links have no matching source anchors.

### Conformance tagging and normative presentation - substantive/normative plus metadata

- R6 adds extensive `<span class="fhir-conformance">...</span>` tagging and a generated conformance summary hook. Jira FHIR-37753 resolved this as tooling plus tagging so conformance statements can be summarized.
- Current examples include normative statements such as search feature declaration at `new source/search.html:21`, server self-link obligations around `:315`, `_count` page-size limits around `:5120`, `_query` refusal around `:6181`, and custom SearchParameter naming guidance around `:6469`.
- Commits `a3766ac36c61fa3448d53aca0519dcbd874cfc93`, `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, and `605a6ffefb83e002264b0504348dea50144bb951` are broad conformance/normative cleanup commits. They should not be treated as single-issue semantic decisions without checking surrounding Jira.

### Search examples and URL encoding - semantic guidance/example change

- R6 adds `Notes on URL-Encoding` at `new source/search.html:149`, with examples of readable unencoded requests and over-the-wire encoded requests.
- Jira FHIR-48702 requested clarification that the pipe (`|`) delimiter in GET examples needs encoding over the wire while retaining readable examples. Zulip #conformance / "syntax of Reference.reference with version" captures the rationale: Grahame said the pipe delimiter is correct but should be escaped; Gino said the page should explain escaping rather than make examples harder to read.
- Many examples were converted to GET/POST display blocks by the search-page rewrite and later URL-encoding pass.

### Search matching model, modifiers, and prefixes - substantive/normative/semantic guidance

- R6 adds/expands Search Test Basics, matching/cardinality, sub-element matching, multiple AND/OR combinations, a large modifier table, detailed modifier subsections, and a revised prefix table.
- R6 clarifies unsupported modifiers and server behavior (e.g., unsupported modifier requests should be rejected), expands `:above`/`:below`, `:contains`, `:identifier`, `:iterate`, `:missing`, `:of-type`, and text modifiers.
- FHIR-46944 specifically changes `:iterate` from applying "instead of" matches to applying to included resources "as well" as matching resources.
- FHIR-40792 adds `contains` modifier support for hierarchical searches; FHIR-51068 clarifies the `le` comparator; FHIR-51466 clarifies canonical reference behavior for `above`/`below`.

### Search parameter types and FHIR type mapping - substantive/semantic guidance

- R6 moves type descriptions deeper into the page and adds a `Search Types and FHIR Types` section at `new source/search.html:2732`.
- FHIR-48363 adds a new `resource` search parameter type section at `new source/search.html:3955` to describe chaining through embedded resources such as `Bundle.entry.resource`; direct tests like `Bundle?composition=Composition/123` are described as undefined, with chained form such as `Bundle?composition._id=123` as the intended shape.
- FHIR-52936 clarifies that `uri` can be used for `canonical`, `uri`, and `url`, but `reference` is generally preferred for canonical values when versioned canonical matching is needed.

### References, canonicals, chaining, includes, and contained resources - substantive/semantic guidance

- R6 substantially expands references/version handling (`new source/search.html:4175`), chaining (`:4392`), reverse chaining (`:4475`), canonical includes (`:5571`), and contained resource behavior (`:5614`).
- FHIR-47537 changed contained chained searches from "will" to "SHOULD" because the page is normative and many systems did not support the stronger SHALL request.
- FHIR-45252 clarifies that behavior is not fully defined when using `identifier` or chaining against references without explicit `Reference.reference` values, while giving servers discretion and suggesting OperationOutcome inclusion when a resolved type differs.

### Search result controls - substantive/normative/example change

- R6 greatly expands result parameters: `_sort`, `_total`, `_count`, `_maxresults`, `_summary`, `_elements`, `_score`, `_include`, `_revinclude`, `_graph`, and contained paging.
- FHIR-46763 clarifies that `_maxresults` limits only match resources, not included resources or operation outcomes (`new source/search.html:5153`).
- FHIR-51428 adds best-practice indirection from the search page to the HTTP paging best-practices section.
- FHIR-43354 clarifies `_elements` conformance language.

### Additional resources and custom search parameters - substantive/semantic guidance

- FHIR-50203/FHIR-50204 distinguish "additional resources" as definitional artifacts from additional/related resources returned by a search (`new source/search.html:4901`).
- FHIR-53569 changes custom SearchParameter code guidance away from leading hyphen recommendations toward organization-scoped alphanumeric prefixes (`new source/search.html:6469`).
- The FHIR-53569 implementation appears incomplete: Jira resolution also said to add a client obligation after the "Search inputs are dereferenced" paragraph, but commit `8b4082caae2d890a9164d9119c7db8722a31f172` only changes the server/IG-author bullet.

## Source history

The full command used was:

```bash
git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short \
  --format='%H%x09%ad%x09%s' "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/search.html"
```

Selected relevant commits:

| Date | Commit | Subject | Classification / notes |
|---|---|---|---|
| 2020-08-14 | `e4bf792d2ca24701564c5890adb25a931390bfae` | `FHIR#25928: Changed references to subscriptions framework page instead of resource.` | Specific link/reference update |
| 2021-05-26 | `0ad8347015dc36b2f56cb96aeaad8fee2352c541` | `#FHIR-9853 add _list search parameter...` | Adds/clarifies `_list` |
| 2022-01-21 to 2022-09-02 | Multiple searchPage commits, including `83529ed...`, `b464a22...`, `ddecc63...`, `ebb3103...` | WIP/modifiers/summary tables/result params/HTTP examples | Major R5-era rewrite and expansion; many later R6 semantics inherit from this |
| 2022-03-30 | `b464a229a5f3fc4f8d1cde220ed7fbcbad74fc2c` | `FHIR-31949 - Technical Correction WIP on modifiers` | Large modifier rewrite |
| 2022-08-25 | `ddecc63591d23dab5767aa2888c985a7c75964b6` | `Definitions and examples... FHIR-31939... FHIR-31491...` | `_include:iterate`, named queries, resource/result parameter definitions |
| 2022-08-26 | `ebb31030e5ea17f43fd92ffbe4523c849414608d` | `FHIR-22785 - Add _graph result parameter...` | Adds result parameter table and `_graph` |
| 2023-02-23 | `31975a04ec83f6394a0d5e542fb36069f782e9d6` | `FHIR-39122 - Add _maxresults search result parameter.` | Adds `_maxresults` |
| 2023-03-19 | `e441170220c19e992f803667b245e63dcdd508cf` | `FHIR-39137 - Moving protocol content from Search to HTTP.` | Section move/restructure |
| 2025-03-20 | `d83729a5d4743f1218b4e53aad9e70c5363880da` | `FHIR-48702 - Added section Notes on URL-Encoding...` | URL-encoding semantics and example updates |
| 2025-03-20 | `a3766ac36c61fa3448d53aca0519dcbd874cfc93` | `FHIR-37753 - conformance language tagging and cleanup.` | Large conformance-tagging pass |
| 2025-03-20 | `647d1548bcf7a7a6c7cdccb4a6986aad39d3718f` | `FHIR-46763 - clarify that _maxresults only applies to matches.` | Semantic clarification |
| 2025-03-20 | `20dd71b98d7fbbc1b76799d43ffbfb7b7ddf7ed5` | `FHIR-46649 - clarify sensitive content expectations in bundle links` | Search response links security guidance |
| 2025-03-20 | `48bf8dfc355a30114d773dd999df18f345fe27cc` | `FHIR-47537 - changed "will" to "SHOULD" for chaining searches into contained resources.` | Intentional weaker normative requirement |
| 2025-03-20 | `80761a68de394a4770496d0f05bfd4494abc0e98` | `FHIR-46944 - clarification on iterate behavior applying to both matches and inclusions` | Semantic clarification |
| 2025-03-21 | `554d2c28aa585e14e3bbe39a4291c3bfedff0eb3` | `FHIR-48363 - pass of additional search parameter type "resource".` | Adds `resource` search parameter type |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | `normative changes for R6` | Small normative cleanup; broad, not page-specific rationale by itself |
| 2025-10-31 | `605a6ffefb83e002264b0504348dea50144bb951` | `more normative. changes` | Small normative cleanup |
| 2025-10-31 | `7737bfeea16cc151563f253dfa404f58eacc9a5f` | `FHIR-51608: Clarify compartment search URL behavior...` | Search URL/interaction clarification |
| 2025-10-31 | `8db9a2eba3276aaa4e33f243cfeee4e183b063bf` | `FHIR-52936 Clarify uri search type prose...` | Canonical/URI search guidance |
| 2025-10-31 | `86b86856e0ada55dbe10a9ad631033525d5a471f` | `FHIR-52942 - clarification for chained search filters` | Chaining guidance |
| 2025-10-31 | `567404363cd3f8b75c115a0e1a9df8cae7476622` | `FHIR-40304 - Search period comparison clarifications` | Period/date semantics |
| 2025-10-31 | `4dbcb67f72d1f701f1368db66f7a4b6250456583` | `FHIR-51466 - Clarify behavior of above and below modifiers for canonical references` | Modifier/canonical semantics |
| 2025-10-31 | `f4b40dbeae49d93586894d500992de55221b1e7e` | `FHIR-51506 - Additions to the self link` | Search self link semantics |
| 2025-10-31 | `e0f264eba8e61b44a1fde5a37be03c61389d4f78` / `19b667e8...` | `FHIR-50204` / `FHIR-50203` | Additional resources wording |
| 2025-11-03 | `216f001194d17327f7b2ffdf9150b89b2303e5ae` | `FHIR-34866 - Define SearchParameter aliasCode...` | SearchParameter naming/alias guidance |
| 2025-11-03 | `f41c8ea93f5763d8335d679863f9a3fc45dde6db` | `FHIR-40792 - Add contains modifier for hierarchical searches` | Modifier expansion |
| 2025-11-03 | `10af8c0a5aff3957b36d6c901af64f0d577e1877` | `FHIR-41688 - Document composite search for Range datatypes` | Composite/range semantics |
| 2025-11-03 | `50ef95a57642a2038880bbf9f7433c803efc3a1e` | `FHIR-45252 - Clarify expectations for chaining and includes with non-Reference references` | Chaining/includes semantics |
| 2025-11-06 | `798188a32dfd0480f550e7a6365b42f0d16b0023` | `FHIR-51428 - paging best practices` | Adds pointer to HTTP paging best practices |
| 2025-12-15 | `8b4082caae2d890a9164d9119c7db8722a31f172` | `FHIR-53569 Custom SearchParameter codes beginning with "-"...` | Partially applies formal resolution; actionable mismatch |

## Jira evidence

### Explicit Jira keys from commits/patches

The commit history contains many explicit tracker keys. High-signal snapshots reviewed include:

- FHIR-48702, FHIR-37753, FHIR-46763, FHIR-46649, FHIR-47537, FHIR-46944, FHIR-48363, FHIR-46101, FHIR-51608, FHIR-52936, FHIR-52942, FHIR-40304, FHIR-51466, FHIR-51068, FHIR-51506, FHIR-50203, FHIR-50204, FHIR-46311, FHIR-43354, FHIR-34866, FHIR-40792, FHIR-41688, FHIR-45252, FHIR-51428, and FHIR-53569.
- Command batch used: `bun run jira:search snapshot <KEY>` for the keys above.

### Jira issues that plausibly explain meaningful changed text

- [FHIR-48702](https://jira.hl7.org/browse/FHIR-48702): "Pipe symbol (as version delimiter) needs to be percent-encoded in HTTP GET request." Resolution was to add a near-top note explaining readable examples vs over-the-wire escaping and to avoid making the rest of the examples unreadable. Implemented by `d83729a5d4743f1218b4e53aad9e70c5363880da`.
- [FHIR-37753](https://jira.hl7.org/browse/FHIR-37753): "Add 'Conformance Summary'." Resolution was to add tooling/tagging for conformance statements. Implemented across search source by `a3766ac36c61fa3448d53aca0519dcbd874cfc93` and related tooling changes.
- [FHIR-46763](https://jira.hl7.org/browse/FHIR-46763): Clarifies `_maxresults` applies only to matches, not included resources/outcomes. Current text at `new source/search.html:5153` matches this intent.
- [FHIR-47537](https://jira.hl7.org/browse/FHIR-47537): Requested SHALL for chained searches into contained resources, but resolution intentionally changed "will" to "SHOULD" because the search page is normative and a SHALL was too strong. Current contained-resource text at `new source/search.html:5618` appears consistent.
- [FHIR-46944](https://jira.hl7.org/browse/FHIR-46944): Clarifies `:iterate` applies to included resources as well as matching resources. Current text appears consistent with the resolution.
- [FHIR-48363](https://jira.hl7.org/browse/FHIR-48363): Bundle `composition`/`message` search parameters were invalid as `reference`; resolution defined a new `resource` search type intended for chaining through embedded resources. Current `Resource Parameters` section appears consistent.
- [FHIR-51428](https://jira.hl7.org/browse/FHIR-51428): Best-practice note for paging links; current search page adds a link to HTTP page paging best practices, and PR 3967 is cited in Jira.
- [FHIR-53569](https://jira.hl7.org/browse/FHIR-53569): Custom SearchParameter codes beginning with `-` cause sort ambiguity. Resolution has two required source changes: revise server/IG author prefix guidance and add a client `CapabilityStatement` query/adjustment paragraph after "Search inputs are dereferenced." Current source has the first change but not the second; see actionable H-001.

### Context-only Jira hits that should not drive action

- Many older R5-era tracker keys in the 211-commit history are real history for the page rewrite but were not individually used as action evidence unless their text still matters in R6 ballot4.
- Broad normative/tagging commits are not by themselves evidence of page-specific intent beyond FHIR-37753 unless tied to a tracker snapshot.

## Zulip evidence

- `bun run zulip:search fts "\"FHIR-53569\"" --limit 10` found #implementers / "Custom SearchParameters and preceding hyphens".
- Snapshot: `bun run zulip:search snapshot implementers "Custom SearchParameters and preceding hyphens"`.
  - Thread URL: https://chat.fhir.org/#narrow/stream/implementers/topic/Custom%20SearchParameters%20and%20preceding%20hyphens.
  - Date range: 2025-12-03 10:27 to 2025-12-03 21:09.
  - Lee Campbell explained that `_sort=-end-date` is ambiguous between ascending sort on custom `-end-date` and descending sort on future standard `end-date`.
  - Lloyd McKenzie moved the issue to FHIR-53569.
  - Gino/John/Paul discussed that safe parsing and future collision avoidance depend on CapabilityStatement conventions and better prefix guidance.
- Snapshot: `bun run zulip:search snapshot conformance "syntax of Reference.reference with version"`.
  - Thread URL: https://chat.fhir.org/#narrow/stream/conformance/topic/syntax%20of%20Reference.reference%20with%20version.
  - Supports FHIR-48702: Grahame said the pipe delimiter is correct but should be escaped; Gino proposed expanding escaping guidance and preserving readable examples.
- Snapshot: `bun run zulip:search snapshot hapi "Bundle?composition"`.
  - Thread URL: https://chat.fhir.org/#narrow/stream/hapi/topic/Bundle%3Fcomposition.
  - Gino noted he filed FHIR-48363 after reviewing Bundle composition search parameters.
- Quoted issue-key searches for FHIR-51428, FHIR-46944, and FHIR-47537 found no direct Zulip hits in the default local DB.

## Confluence evidence

- `bun run confluence:search refs jira FHIR-53569` found page `413042140`, FHIR Infrastructure Minutes CC 2025-12-08.
- Snapshot: `bun run confluence:search snapshot 413042140`.
  - Page URL: https://confluence.hl7.org/spaces/FHIRI/pages/413042140/FHIR+Infrastructure+Minutes+CC+2025-12-08.
  - Minutes reference the same Zulip thread and say: "We should point people to a safe mechanism by checking the CapabilityStatement" and "Will update the guidance on how to avoid conflict on local defined search parameter."
  - Vote in Confluence snapshot says Persuasive with Mod Gino Canessa / Bas van den Heuvel: 12-0-0; Jira snapshot says 11-0-0. This discrepancy does not affect the observed missing implementation text.
- `bun run confluence:search refs jira FHIR-47537` and `FHIR-46944` found page `307299878`, FHIR Infrastructure Minutes CC 2025-01-13, with vote/context snippets consistent with the Jira resolutions.
- `bun run confluence:search refs jira FHIR-51428` found page `358883031`, FHIR Infrastructure Minutes CC 2025-07-21, with vote/context snippets.
- `bun run confluence:search refs jira FHIR-48363` found pages `274271287`, `265096084`, and `265096093`, documenting WGM/minutes context around the Bundle search issue.

## Timeline

| Date | Clock | Event |
|---|---|---|
| 2022-01 to 2022-09 | Source history | Major search page rewrite branch expands structure, examples, modifiers, result parameters, and TOC. |
| 2023-06-05 | Jira vote/resolution | FHIR-37753 resolved to add conformance tagging/tooling; Jira vote Grahame Grieve/Rick Geimer 4-0-0. |
| 2025-03-11 to 2025-03-17 | Zulip/Jira discussion | FHIR-48702 URL-encoding discussion on #conformance; Grahame and Gino clarify pipe delimiter vs escaping/readability. |
| 2025-03-20 | Source commits | PR 3442-era source commits add URL-encoding note, conformance tagging cleanup, `_maxresults`, sensitive link guidance, contained chaining SHOULD, iterate clarification, and related changes. |
| 2025-07-08 | Jira comments/PR merge evidence | Multiple Jira snapshots note "Merged in https://github.com/HL7/fhir/pull/3442". |
| 2025-10-31 to 2025-11-08 | Source commits | PR 3967-era source commits apply R6 ballot clarifications around compartments, URI/canonical search, chaining, prefixes, self links, additional resources, `_elements`, aliases, `contains`, Range composites, non-Reference references, and paging best practices. |
| 2025-11-10 | Jira comment/PR evidence | FHIR-51428 references https://github.com/HL7/fhir/pull/3967. |
| 2025-12-03 | Zulip discussion | #implementers / "Custom SearchParameters and preceding hyphens" identifies sort ambiguity and moves toward FHIR-53569. |
| 2025-12-08 | Confluence/Jira vote | FHIR-I minutes and Jira resolve FHIR-53569 Persuasive with Modification. |
| 2025-12-15 | Source commit | `8b4082caae2d890a9164d9119c7db8722a31f172` applies only the server/IG-author custom prefix bullet from FHIR-53569. |
| R6 ballot4 boundary | Publication/source boundary | New source tree at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` includes the partial FHIR-53569 application and link defects. |

## Evidence log

- Page existence:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/search.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/search.html" && echo "new exists"`
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/search.html`
  - Output was large; stat showed 5,812 insertions and 1,301 deletions.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- source/search.html`
  - 211 commits found.
- Selected commit inspection:
  - `git show --stat --patch` for `d83729a5d...`, `a3766ac3...`, `647d1548...`, `48bf8dfc...`, `80761a68...`, `554d2c28...`, `8db9a2eb...`, `50ef95a5...`, `798188a3...`, and `8b4082ca...`.
- Full page pass:
  - `wc -l` returned 6,928.
  - End-to-end section scan found 109 headings and summarized each section's conformance markers, examples, anchors, and anomaly flags.
- Anchor/wording checks:
  - Script extracted `<a name="...">` and `href="#..."` references and found unresolved local anchors including `#paging`, `#types`, and `_summary` value links.
  - Wording anomalies found but not escalated as standalone actions: "data time" at `:501`, "the the" at `:1957`, and "respect the the" at `:5126`.
- Jira:
  - Batch snapshots for selected keys listed under Jira evidence.
- Zulip:
  - Initial unquoted FHIR issue-key FTS searches failed with `SQLiteError: no such column` for hyphenated keys; rerun with quoted phrases.
  - Snapshots taken for #implementers / "Custom SearchParameters and preceding hyphens", #conformance / "syntax of Reference.reference with version", and #hapi / "Bundle?composition".
- Confluence:
  - `refs jira` and FTS searches run for FHIR-51428, FHIR-48363, FHIR-46944, FHIR-47537, and FHIR-53569.
  - Snapshot taken for page `413042140` because it directly supports the FHIR-53569 action finding.

# operations research appendix

## Scope and coverage

- Page path: `source/operations.html`.
- Older version/tree: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- Newer version/tree: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: page exists in both trees; old file has 310 lines, new file has 322 lines.
- The newer source page was read end-to-end.
- Source history: 23 commits touched this page in the requested range.
- Explicit Jira keys found in commit subjects/patches: `FHIR-19523`, `FHIR-22702`, `FHIR-23809`, `FHIR-32015`, `FHIR-28142`, `FHIR-33385`, `FHIR-37847`, `FHIR-32069`, `FHIR-20203`, `FHIR-24869`, `FHIR-28292`, `FHIR-25431`, `FHIR-38034`, `FHIR-44706`, `FHIR-44047`, `FHIR-51046`, `FHIR-45251`, `FHIR-41220`.
- Jira coverage: snapshotted all explicit keys above. Phrase searches also found and snapshotted `FHIR-45277`, `FHIR-56007`, `FHIR-56194`, `FHIR-14960`, and `FHIR-37983`.
- Zulip coverage: searched all explicit Jira keys with quoted FTS queries; snapshotted the promising threads for operation error responses, GET invocation, resource body plus query parameters, Bundle return type, and searchType discussion.
- Confluence coverage: ran `refs jira` and FTS for explicit keys; snapshotted the relevant FHIR-I minutes for `FHIR-32015`, `FHIR-33385`, `FHIR-28292`, `FHIR-44706`, `FHIR-45251`, `FHIR-51046`, and `FHIR-41220`.
- Caveats: initial unquoted Zulip key searches failed because FTS parsed hyphenated Jira keys as operators; they were rerun with quoted keys. Confluence FTS for `OperationDefinition.parameter.searchType` failed on the dot syntax; the relevant Jira key and Confluence page references were still searched and snapshotted. This was a bounded page review, not an exhaustive scan of all context-only hits.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/operations.html` | Old comparison source. |
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html` | Current reviewed page. |
| Source lines | GET summary criterion | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html:63-64` | Still says all parameters are primitive datatypes with no extensions. |
| Source lines | GET general criterion | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html:98-102` | R6 text from `FHIR-51046` permits data types with corresponding search types. |
| Source lines | GET request criterion | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html:238-241` | Still says all operation parameters are primitive types. |
| Source lines | Simple parameters link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html:255-258` | `FHIR-41220` intended this wording to be changed, but it remains. |
| Source lines | Search Type bullet | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html:173-178` | Part of `FHIR-41220`; current sentence has a grammar issue and does not fix the linked phrase. |
| Source lines | Bundle response paragraph | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html:105-110` | Has `eample` typo and malformed/nested anchor markup. |
| Source lines | Operation completion paragraph | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html:85-91` | Contains the `ne or more` typo and zero-output response text. |
| Source lines | Operation response paragraph | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html:270-292` | Current success/error response rules after `FHIR-44706`. |
| Commit | `FHIR-32015` | `5d7c5faef30b3c41d1d60dc3198873822a4e8009`, https://github.com/HL7/fhir/commit/5d7c5faef30b3c41d1d60dc3198873822a4e8009 | Changed Bundle response type guidance and introduced the current malformed paragraph. |
| Commit | `FHIR-24869` | `1c5be8bd4b6a6093cc032761f943cdadb433a2e3`, https://github.com/HL7/fhir/commit/1c5be8bd4b6a6093cc032761f943cdadb433a2e3 | Added empty-body/zero-output response guidance and the `ne` typo. |
| Commit | `FHIR-28292` | `61cdda43d3a05009c396bee82e3ae6273559a953`, https://github.com/HL7/fhir/commit/61cdda43d3a05009c396bee82e3ae6273559a953 | Made single `return` Resource output a SHALL. |
| Commit | `FHIR-44706` | `2e0758d21869d6ceed701a9ef5e317df20c349a9`, https://github.com/HL7/fhir/commit/2e0758d21869d6ceed701a9ef5e317df20c349a9 | Clarified bare OperationOutcome on 4xx/5xx operation failures. |
| Commit | `FHIR-51046` | `d542f8a98ce80fed9a951b76190bb8379ebc09f5`, https://github.com/HL7/fhir/commit/d542f8a98ce80fed9a951b76190bb8379ebc09f5 | Changed one GET rule from primitive/simple to data types with corresponding search types. |
| Commit | `FHIR-45251` | `18b4d75a69e6750437040bf640220a0366108cb6`, https://github.com/HL7/fhir/commit/18b4d75a69e6750437040bf640220a0366108cb6 | Removed a lowercase non-conformance `may`, but retained the primitive-only wording. |
| Commit | `FHIR-41220` | `9c256b4f7839949c03eed3321415a0f8999b3561`, https://github.com/HL7/fhir/commit/9c256b4f7839949c03eed3321415a0f8999b3561 | Applied only the Search Type bullet part of the Jira resolution. |
| Jira | `FHIR-51046` | https://jira.hl7.org/browse/FHIR-51046; reopen: `bun run jira:search snapshot FHIR-51046` | Formal R6 change to allow GET parameters with corresponding search types. |
| Jira | `FHIR-56194` | https://jira.hl7.org/browse/FHIR-56194; reopen: `bun run jira:search snapshot FHIR-56194` | Later unresolved issue explicitly identifies the current primitive-vs-search-type inconsistency. |
| Jira | `FHIR-41220` | https://jira.hl7.org/browse/FHIR-41220; reopen: `bun run jira:search snapshot FHIR-41220` | Formal resolution says to replace `simple parameters` with associated search types. |
| Jira | `FHIR-56007` | https://jira.hl7.org/browse/FHIR-56007; reopen: `bun run jira:search snapshot FHIR-56007` | Later issue says operations with no out parameters may return empty body or empty Parameters. |
| Jira | `FHIR-45277` | https://jira.hl7.org/browse/FHIR-45277; reopen: `bun run jira:search snapshot FHIR-45277` | Tracks the current `ne` typo. |
| Jira | `FHIR-32015` | https://jira.hl7.org/browse/FHIR-32015; reopen: `bun run jira:search snapshot FHIR-32015` | Rationale for Bundle type change. |
| Jira | `FHIR-44706` | https://jira.hl7.org/browse/FHIR-44706; reopen: `bun run jira:search snapshot FHIR-44706` | Rationale for bare OperationOutcome on operation errors. |
| Zulip | Error response thread | https://chat.fhir.org/#narrow/stream/implementers/topic/%E2%9C%94%20Operations%20response%20on%20error; reopen: `bun run zulip:search snapshot implementers "✔ Operations response on error"` | Lloyd clarifies 4xx gets bare OperationOutcome; led to `FHIR-44706`. |
| Zulip | GET/search-type thread | https://chat.fhir.org/#narrow/stream/implementers/topic/%E2%9C%94%20Query%20parameters%20for%20extended%20operation; reopen: `bun run zulip:search snapshot implementers "✔ Query parameters for extended operation"` | Led to `FHIR-51046`. |
| Zulip | GET confusion thread | https://chat.fhir.org/#narrow/stream/implementers/topic/Understanding%20GET%20invoked%20extended%20operations; reopen: `bun run zulip:search snapshot implementers "Understanding GET invoked extended operations"` | Led to `FHIR-45251`; Lloyd says parameters expressible as search types are the GET boundary. |
| Zulip | Resource body plus query params | https://chat.fhir.org/#narrow/stream/conformance/topic/url%20params%20on%20operations; reopen: `bun run zulip:search snapshot conformance "url params on operations"` | Led to `FHIR-33385`. |
| Zulip | Bundle response type | https://chat.fhir.org/#narrow/stream/implementers/topic/%24document%20operation%20returns; reopen: `bun run zulip:search snapshot implementers "$document operation returns"` | Led to `FHIR-32015`. |
| Confluence | `FHIR-51046` July draft note | Page `358883031`, https://confluence.hl7.org/spaces/FHIRI/pages/358883031/FHIR+Infrastructure+Minutes+CC+2025-07-21; reopen: `bun run confluence:search snapshot 358883031` | Says Gino would draft `FHIR-51046` text. |
| Confluence | `FHIR-51046` WGM vote | Page `358879917`, https://confluence.hl7.org/spaces/FHIRI/pages/358879917/FHIR+Infrastructure+Minutes+WGM+202509+-+Pittsburgh; reopen: `bun run confluence:search snapshot 358879917` | Records discussion about what can be mapped as HTTP parameters and a 7-0-0 vote. |
| Confluence | `FHIR-41220` 2024 vote | Page `288072268`, https://confluence.hl7.org/spaces/FHIRI/pages/288072268/FHIR+Infrastructure+Minutes+CC+2024-12-09; reopen: `bun run confluence:search snapshot 288072268` | Says the simple-parameter definition was insufficient. |
| Confluence | `FHIR-41220` 2025 vote | Page `413042140`, https://confluence.hl7.org/spaces/FHIRI/pages/413042140/FHIR+Infrastructure+Minutes+CC+2025-12-08; reopen: `bun run confluence:search snapshot 413042140` | Says to update by removing the word `simple`. |
| Confluence | `FHIR-44706` vote | Page `227220068`, https://confluence.hl7.org/spaces/FHIRI/pages/227220068/FHIR+Infrastructure+Minutes+CC+2024-04-08; reopen: `bun run confluence:search snapshot 227220068` | Records FHIR-I approval and the Zulip rationale for bare OperationOutcome. |

## Change summary

### Metadata/template/navigation

- Mechanical/template: removed the wrapping `<div class="col-12">` and closing `</div>` (`d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`).
- Metadata/template: changed the owner/status table and removed the maturity-level cell and `[%normative page infrastructure%]` macro (`270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, `605a6ffefb83e002264b0504348dea50144bb951`).

### Endpoint scope and introductory guidance

- Editorial correction: "four types" of operation endpoints changed to "three types" because only base, resource type, and resource instance endpoints are listed (`142ad7624ca77d81a9463a6ddbd278f521a109da`, tied to `FHIR-23809` in the issue text).
- Semantic guidance: the "side effects" bullet now links to the computer-science term and clarifies that side effects mean changes such as resources not transmitted as part of the RESTful call or changes outside the RESTful interface (`FHIR-28142`, commit `5b5349293bbdc00bf741dc84397e62803b02dbb1`).

### Operation invocation and GET semantics

- Substantive/semantic: GET invocation text was changed from "simple input parameters" to parameters whose data type has a corresponding search type, explicitly permitting Identifier and Reference with token search type and excluding Address/HumanName (`FHIR-51046`, commit `d542f8a98ce80fed9a951b76190bb8379ebc09f5`).
- Normative wording cleanup: lowercase "may" in a GET paragraph was changed to non-RFC wording, but the same paragraph still says "all the parameters ... primitive types" (`FHIR-45251`, commit `18b4d75a69e6750437040bf640220a0366108cb6`).
- Current inconsistency: the new page has three GET descriptions with different boundaries: primitive datatypes with no extensions at lines 63-64, corresponding search types at lines 98-102, and primitive types at lines 238-241. Later `FHIR-56194` explicitly identifies this mismatch.

### Request body and simple/search-type parameters

- Substantive/semantic: POST with a single Resource input plus additional URL parameters was clarified in `FHIR-33385`; current text says the client MAY submit the input resource as the request body and additional parameters as query parameters, and servers SHALL support this invocation.
- Intent mismatch: `FHIR-41220` resolved that "simple parameters" should be replaced with "parameters ... have associated search types", but commit `9c256b4f7839949c03eed3321415a0f8999b3561` changed only the Search Type bullet. The current page still says `simple parameters` and links to `#executing` at lines 255-258.

### Operation responses

- Substantive/semantic: zero-input and zero-output operations were clarified through `FHIR-20203` and `FHIR-24869`, adding empty-body guidance when there are zero parameters or zero output parameters. The source still has "ne or more output parameters" from `1c5be8bd4b6a6093cc032761f943cdadb433a2e3`.
- Substantive/semantic: `FHIR-28292` made a single `return` output resource with max cardinality 1 a SHALL to return the bare resource rather than Parameters.
- Substantive/semantic: `FHIR-44706` clarified that an OperationOutcome returned with a 4xx/5xx failure is not wrapped in Parameters, and added a note that the bare-resource return rule applies when the expected response is OperationOutcome.
- Later reassessment: `FHIR-56007` says successful operations without out parameters may return either an empty body or an empty Parameters resource and should update both execution and response sections; this is not present in the reviewed R6 ballot4 source.

### Bundle return guidance

- Semantic guidance: `FHIR-32015` changed "Bundle.type is collection unless search semantics" to "typically collection, though it could be one of the other types", with search-set as the search-semantics example.
- Rendering/editorial defect: the current paragraph has `For eample`, an unclosed `http.html#paging` anchor whose text includes "then", and an extra closing `</a>` after `search-set` at lines 105-110. This appears to have been introduced by the `FHIR-32015` commit and only partly touched by later QA.

### OperationDefinition/searchType and derived operations

- Semantic/editorial: `FHIR-37847` removed a redundant optional Search Type bullet and tried to explain use of search types. Later `FHIR-41220` revised the wording further, but with a grammar issue: "for parameters with a data type can be expressed..." at lines 176-177.
- Guidance link: `FHIR-38034` added a link to derived OperationDefinitions.

### Mechanical/editorial only

- `FHIR-25431` changed "data type" to "datatype" in several places.
- `FHIR-44047` applied e.g./i.e. punctuation changes and did not otherwise alter operation semantics.
- QA commits `dad7cf37c75822c352509e1c2e8d050408d0be18` and `9f780149387dc652bec02aa7744e52774acddbc9` were mostly punctuation churn, but the Bundle paragraph remained malformed.

## Source history

| Date | Commit | Subject | Page-specific effect |
|---|---|---|---|
| 2021-05-30 | `142ad7624ca77d81a9463a6ddbd278f521a109da` | Fix FHIR-19523,22702,23809 | Changed "four types" to "three types"; matches `FHIR-23809` operations-page typo. |
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | update html template | Removed wrapper div; mechanical/template. |
| 2021-06-27 | `bb3428390ab6e94154659749bcf0ba4d0b4bafcf` | merge | Merge-only/minor churn. |
| 2022-08-25 | `5d7c5faef30b3c41d1d60dc3198873822a4e8009` | FHIR-32015 Bundles returned from operation are not always collection | Changed Bundle.type guidance; introduced malformed paragraph. |
| 2022-08-25 | `5b5349293bbdc00bf741dc84397e62803b02dbb1` | FHIR-28142 Clarify meaning of side effects in REST operations | Clarified side effects. |
| 2022-08-26 | `f142c025b4ce2f551ca9376d48b3dfa12287d9d4` | FHIR-33385 POST: Operation with resource Parameter & URL Parameter | Allowed single Resource request body plus query parameters. |
| 2022-08-26 | `bd263e608c193abcd2d6ad7e71d704200796e2ac` | FHIR-37847 OperationDefinition.parameter.searchType is inconsistently documented | Changed Search Type bullet and removed redundant optional bullet. |
| 2022-08-26 | `e7b4eba11e0bf24c8b4452079cc80dff04c014c0` | FHIR-32069 Remove 'abstract' types from ResourceType code system | Broad ResourceType cleanup; no page-specific operations concern found. |
| 2022-08-28 | `7aa4b98258362d89ee719d5d2eb5236550e24fe9` | FHIR-20203 Operation returns one or more or zero or more parameters | Began response wording changes for zero or more parameters. |
| 2022-08-28 | `1c5be8bd4b6a6093cc032761f943cdadb433a2e3` | FHIR-24869 Better describe expected response of operations without out parameters | Added empty-body response guidance; introduced `ne or more` typo. |
| 2022-08-29 | `61cdda43d3a05009c396bee82e3ae6273559a953` | FHIR-28292 Is a single-output "return" sometimes wrapped in Parameters? | Made single Resource `return` response bare resource with SHALL. |
| 2022-08-31 | `8592e1207273b786db340efb927bb6d1dc9756c9` | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Terminology/editorial. |
| 2023-02-15 | `1888906e9734b876d74e13eec359f047a3090a14` | FHIR-38034 Provide derived OperationDefinition example and guidance | Added link to derived OperationDefinitions. |
| 2023-02-21 | `dad7cf37c75822c352509e1c2e8d050408d0be18` | QA related changes | Punctuation changes; changed `next etc)` to `next etc.)` but left anchor malformed. |
| 2023-02-21 | `9f780149387dc652bec02aa7744e52774acddbc9` | more QA | Punctuation rollback/fix; mechanical. |
| 2025-02-26 | `2e0758d21869d6ceed701a9ef5e317df20c349a9` | FHIR-44706 Operation response on error is unclear | Added bare OperationOutcome clarification. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | normative changes for R6 | Metadata/status table change. |
| 2025-10-31 | `605a6ffefb83e002264b0504348dea50144bb951` | more normative. changes | Removed normative macro; metadata/template. |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | FHIR-44047 | e.g./i.e. punctuation only. |
| 2025-11-02 | `d542f8a98ce80fed9a951b76190bb8379ebc09f5` | FHIR-51046 - operation GET clarifications | Updated one GET criterion to corresponding search types. |
| 2025-11-03 | `18b4d75a69e6750437040bf640220a0366108cb6` | FHIR-45251 - Remove confusing non-conformance 'may' | Changed lowercase may in later GET paragraph; retained primitive-only criterion. |
| 2025-12-15 | `9c256b4f7839949c03eed3321415a0f8999b3561` | FHIR-41220 Operations page has link to "simple parameters" but no definition | Updated Search Type bullet only; did not replace the `simple parameters` link. |

## Jira evidence

### Explicit Jira keys from source history

- `FHIR-23809` includes the operations-page issue "Operations can be invoked on four types..." while only three were listed; commit `142ad7624ca77d81a9463a6ddbd278f521a109da` fixed it. `FHIR-19523` and `FHIR-22702` are search-page issues included in the same commit/PR and are context-only for this page.
- `FHIR-32015` says Bundle responses are not always `collection`; resolution changed the text to "typically collection... though it could be one of the other types" and `search-set` for search semantics. Current implementation has the intended concept but malformed markup and typo.
- `FHIR-28142` clarifies side effects; applied text matches the Jira resolution.
- `FHIR-33385` clarifies POST with a Resource body plus other URL/query parameters; applied text broadly matches the resolution, but its "simple parameters" terminology later became the subject of `FHIR-41220`.
- `FHIR-37847` documents inconsistent `OperationDefinition.parameter.searchType` wording; the R5 change removed the redundant optional bullet.
- `FHIR-20203`, `FHIR-24869`, and `FHIR-28292` explain the evolution of output parameter cardinality, empty-body response guidance, and the single `return` Resource SHALL rule.
- `FHIR-44706` clarifies operation error responses; applied text matches the Jira and Zulip rationale.
- `FHIR-51046` is the key R6 semantic change for GET invocation: it explicitly says datatypes like Identifier or Reference with a corresponding search type are permitted.
- `FHIR-45251` was a technical correction to remove a confusing lowercase "may"; it did not resolve the broader primitive-vs-search-type wording.
- `FHIR-41220` says `simple parameters` links back to a section with no definition and resolves to replace that phrase with parameters that have associated search types. Current source does not apply that part of the resolution.

### Other Jira issues that plausibly explain or challenge current text

- `FHIR-56194` (Triaged, unresolved, created 2026-03-30) directly identifies the current page's GET inconsistency: the page permits data types with corresponding search types in one place but still uses the primitive-type characterization after the first example and in the Operation Request section.
- `FHIR-56007` (Resolved - change required, 2026) says that operations with no out parameters may return either an empty body or an empty Parameters resource, and that both executing and response sections should be updated. This is later than the reviewed source and suggests current R6 ballot4 text is incomplete.
- `FHIR-45277` (Resolved - change required) specifically tracks the current typo: "ne" instead of "one" in the operation completion paragraph.
- `FHIR-14960` is older context for the primitive/simple GET rule and server GET/POST support. It should not drive action over the newer `FHIR-51046`/`FHIR-56194` evidence.
- `FHIR-37983` is historical context for allowing "simple" URL parameters alongside a Resource body; `FHIR-33385` is the more direct tracker for the R4->R6 page change.

### Context-only Jira hits that should not drive action

- `FHIR-32069`, `FHIR-25431`, and `FHIR-44047` are broad cleanup/editorial issues with no unresolved operations semantics found.
- `FHIR-19523` and `FHIR-22702` were present in the same 2021 commit as `FHIR-23809` but concern search-page behavior rather than this operations page.

## Zulip evidence

- `#implementers > $document operation returns` (snapshot command: `bun run zulip:search snapshot implementers "$document operation returns"`) records the issue that operation-returned Bundles are not always `collection`/`searchset`, specifically noting `$document`; it led to `FHIR-32015`.
- `#conformance > url params on operations` (snapshot command: `bun run zulip:search snapshot conformance "url params on operations"`) records the Resource-body-plus-URL-parameters scenario for operations such as `$validate`; it led to `FHIR-33385`.
- `#implementers > ✔ Operations response on error` (snapshot command: `bun run zulip:search snapshot implementers "✔ Operations response on error"`) records the rationale behind `FHIR-44706`. Lloyd McKenzie states that 4xx gets a bare OperationOutcome, while 2xx gets a response resource or Parameters, and Parameters might include warning OperationOutcome on success.
- `#implementers > Understanding GET invoked extended operations` (snapshot command: `bun run zulip:search snapshot implementers "Understanding GET invoked extended operations"`) shows confusion about primitive-only GET wording. Lloyd says the standard really means "parameter expressed in the URL" and later "Any parameter that can be expressed as a search type, yes." Gino files `FHIR-45251` from this discussion.
- `#implementers > ✔ Query parameters for extended operation` (snapshot command: `bun run zulip:search snapshot implementers "✔ Query parameters for extended operation"`) records later discussion about complex parameters and query strings; Gino files `FHIR-51046` to revisit rules for what can be mapped to query parameters.
- `#fhir/infrastructure-wg > Agenda item for today: testing invariants` mentions `FHIR-37847` as an invariant/searchType testing concern; useful background but not direct action evidence for current page text.

## Confluence evidence

- `FHIR Infrastructure Minutes WGM 202109`, page `77365771`, records `FHIR-32015` as "Will fix" with a 7-0-0 vote.
- `FHIR Infrastructure Minutes WGM 202201`, page `81028096`, records `FHIR-33385` with "Thorough discussion..." and a 10-0-0 persuasive vote.
- `FHIR Infrastructure Minutes CC 20201207`, page `97469316`, records `FHIR-28292`: if output is Resource named `return` with cardinality 0..1, server SHALL return it as a bare resource.
- `FHIR Infrastructure Minutes CC 2024-04-08`, page `227220068`, records the `FHIR-44706` discussion and vote, referencing the Zulip thread and Lloyd's bare OperationOutcome rationale.
- `FHIR Infrastructure Minutes CC 2024-05-13`, page `239246098`, records `FHIR-45251` as a technical correction.
- `FHIR Infrastructure Minutes CC 2025-07-21`, page `358883031`, records that Gino would draft `FHIR-51046` text.
- `FHIR Infrastructure Minutes WGM 202509 - Pittsburgh`, page `358879917`, records `FHIR-51046`, "Discussion about what can be mapped as HTTP parameters", and a 7-0-0 persuasive-with-modification vote.
- `FHIR Infrastructure Minutes CC 2024-12-09`, page `288072268`, records `FHIR-41220`: the "simple parameter" statement was insufficient and should be updated.
- `FHIR Infrastructure Minutes CC 2025-12-08`, page `413042140`, records `FHIR-41220` again: "Already in FHIR R6 Operations page, executing section Will update this section by removing the word 'simple' Persuasive with Mod ... 10-0-0."

## Timeline

- 2019-01 to 2019-10: `FHIR-20203` and `FHIR-24869` resolve earlier ambiguity around one-or-more vs zero-or-more operation outputs and empty responses.
- 2020-08 to 2020-12: `FHIR-28292` resolves the single `return` Resource wrapping contradiction; Confluence records the SHALL decision on 2020-12-07.
- 2021-04 to 2021-09: `$document`/Bundle response discussion leads to `FHIR-32015`; Confluence WGM 202109 records vote; commit applied 2022-08-25.
- 2021-09 to 2022-01: Resource body plus URL parameters leads to `FHIR-33385`; Confluence WGM 202201 records vote; commit applied 2022-08-26.
- 2022-08: `FHIR-37847`, `FHIR-20203`, `FHIR-24869`, `FHIR-28292`, `FHIR-25431`, and `FHIR-32069` changes land close together before R5 publication.
- 2024-02 to 2025-02: Zulip error-response thread leads to `FHIR-44706`; FHIR-I approves on 2024-04-08; source commit lands 2025-02-26.
- 2024-04 to 2025-11: GET wording confusion leads to `FHIR-45251`; source commit lands 2025-11-03.
- 2025-06 to 2025-11: Query-parameter/search-type discussion leads to `FHIR-51046`; FHIR-I WGM 202509 approves; source commit lands 2025-11-02/Nov 7 commit date.
- 2024-12 to 2025-12: `FHIR-41220` identifies the undefined `simple parameters` link; FHIR-I revisits in 2025 and says to remove "simple"; source commit lands 2025-12-15 but only changes the Search Type bullet.
- 2026-03 to 2026-04: `FHIR-56194` and `FHIR-56007` later identify remaining GET and no-output-response issues on the current build.

## Evidence log

- Boundary command confirmed both files exist and line counts: `test -f .../source/operations.html`, `wc -l`.
- Direct diff command saved to session artifact: `git -C "$NEW_TREE" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/operations.html`.
- Source history command found 23 commits: `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/operations.html`.
- Commit patches were inspected with `git show --stat --patch <sha> -- source/operations.html`.
- Jira snapshots: `bun run jira:search snapshot <FHIR-key>` for all explicit keys and later candidate issues.
- Jira phrase searches that materially affected confidence:
  - `bun run jira:search fts "\"ne or more output parameters\"" --limit 20` found `FHIR-45277` and `FHIR-56007`.
  - `bun run jira:search fts "\"corresponding search type\"" --limit 20` found `FHIR-56194` and `FHIR-51046`.
  - `bun run jira:search fts "\"simple parameters\"" --limit 20` found `FHIR-41220`.
  - `bun run jira:search fts "\"For eample\"" --limit 20` found no Jira issue.
- Zulip key searches: unquoted FTS key searches failed with SQLite errors on hyphenated keys; rerun as `bun run zulip:search fts "\"FHIR-XXXXX\"" --limit 20`.
- Zulip snapshots were taken for the promising threads listed above.
- Confluence searches: `bun run confluence:search refs jira FHIR-XXXXX` and `bun run confluence:search fts FHIR-XXXXX --limit 10` for explicit keys. Phrase searches were noisy except for key-backed pages.
- Confluence snapshot commands used for relevant pages: `bun run confluence:search snapshot 77365771`, `81028096`, `97469316`, `227220068`, `239246098`, `358883031`, `358879917`, `288072268`, `413042140`.

# datatypes-examples research appendix

## Scope and coverage

- Page path: `source/datatypes-examples.html`.
- Old version/commit/tree: R4 `4.0.1`, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/commit/tree: R6 ballot4 `6.0.0-ballot4`, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary confirmed: page exists in both trees. Old page has 1427 lines; new page has 2898 lines.
- Direct diff size: `1926 insertions(+), 455 deletions(-)`. The page is modified, not added/deleted/renamed.
- Full newer page read end-to-end: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-examples.html:1-2898`.
- Source history count between the two commits for this page: 36 commits.
- Explicit Jira keys found in commit subjects/patches: `FHIR-20670`, `FHIR-20990`, `FHIR-25431`, `FHIR-32404`, `FHIR-23079`, `FHIR-27546`, `FHIR-19608`, `FHIR-41582`, `FHIR-45488`, `FHIR-47467`, `FHIR-40919`, `FHIR-41514`, `FHIR-43364`, `FHIR-41495`, `FHIR-41496`, `FHIR-44047`. Additional Jira issues found by targeted search for current SampledData concerns: `FHIR-25034`, `FHIR-35948`.
- Jira snapshots were taken for all explicit keys above plus `FHIR-25034` and `FHIR-35948`.
- Zulip searches were run for all explicit keys; unquoted `FHIR-NNNNN` searches failed because FTS parsed the hyphen as an operator, then quoted-key searches were repeated. Promising threads were snapshotted for Quantity comparator encoding, SampledData variable timing, SampledData non-numeric characters, and Nordic middle-name examples.
- Confluence was searched for key Jira references and high-signal phrases. Snapshots were read for MnM minutes on `FHIR-19608`/`FHIR-27546` and FHIR-I/BRR pages on `FHIR-41582`.
- Important caveat: no Jira/Zulip/Confluence issue was found that specifically tracks the current page's broad JSON primitive typing problems or the current SampledData XML `period`/JSON `interval` mismatch on `datatypes-examples.html`; those are source-page findings from cross-checking current examples against current datatype/JSON rules.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/datatypes-examples.html` | Old comparison page; present, 1427 lines. |
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-examples.html` | Current reviewed page; present, 2898 lines. |
| Source | Primitive JSON rules | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/json.html:170-173` | Says integer/unsignedInt/positiveInt/decimal are JSON numbers and boolean is JSON boolean. |
| Source | Primitive JSON example defect | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-examples.html:72-83` and `:75` | Primitive examples were added in JSON; `base64Binary` JSON line has a malformed comment-like tail. |
| Source | Stringified primitive examples | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-examples.html:545`, `:746-771`, `:1174-1177`, `:2620-2623` | Examples show booleans/numeric primitives as quoted strings. |
| Source | Address JSON mismatch | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-examples.html:2129-2174` | XML codes state/country as `US`; paired JSON codes both as `IN`. |
| Source | SampledData current example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-examples.html:1151-1177` | XML uses `period`; paired JSON uses `interval`; both omit required `intervalUnit`. |
| Source | SampledData current definition | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes/sampleddata.xml:877-902` | R6 source defines `SampledData.interval` and `SampledData.intervalUnit`, not `period`. |
| Source | Timing current examples | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-examples.html:2587-2737` | Current examples use `<schedule>`/`"schedule"` despite `FHIR-20670` decision to use `timing`. |
| Source | HumanName bad extension URLs | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-examples.html:1602-1623`, `:1641-1692` | Current examples still use nonexistent `StructureDefinitioniso-20190#name-qualifier` and `EntityNamePartQualifier2`. |
| Commit | Add JSON tabs/examples | `e9e4e5f34c8d0b40d680c26f92acfa19b5f714a6`, https://github.com/HL7/fhir/commit/e9e4e5f34c8d0b40d680c26f92acfa19b5f714a6 | Implements `FHIR-19608`; largest page-specific content expansion. |
| Commit | Primitive JSON/extensions | `f12f3344c19615301ec287e5b70eb46cecb0b242`, https://github.com/HL7/fhir/commit/f12f3344c19615301ec287e5b70eb46cecb0b242 | Implements `FHIR-40919`; adds primitive JSON examples and primitive extensions section. |
| Commit | SampledData JSON QA fix | `c27bdb7a6c4a63b716f83815a9096b413cf658a8`, https://github.com/HL7/fhir/commit/c27bdb7a6c4a63b716f83815a9096b413cf658a8 | Changes SampledData JSON `period` to `interval`, but leaves XML `period`. |
| Commit | Timing root fix | `b1a191ea63c373039d54c387aced8a9f11daea24`, https://github.com/HL7/fhir/commit/b1a191ea63c373039d54c387aced8a9f11daea24 | Applies `FHIR-20670`, changing Timing root nodes from `schedule` to `timing`. |
| Commit | Timing root regression | `b9fd58139d35c8aa90083ae99a279c8a6d3dd854`, https://github.com/HL7/fhir/commit/b9fd58139d35c8aa90083ae99a279c8a6d3dd854 | Adds RatioRange but also reverts Timing examples back to `schedule`. |
| Commit | Quantity comparator fix | `e5b949659a2da06a1af0a2816f7d6ebfb70ce7ba`, https://github.com/HL7/fhir/commit/e5b949659a2da06a1af0a2816f7d6ebfb70ce7ba | Implements `FHIR-41495`, changing rendered comparator from `&amp;gt;` to `&gt;`. |
| Commit | Quantity anchor fix | `64a3fffa26689936c243b6aa0d36cf55dbb4cec5`, https://github.com/HL7/fhir/commit/64a3fffa26689936c243b6aa0d36cf55dbb4cec5 | Implements `FHIR-41496`; moves `Quantity` anchor after subtype anchors. |
| Jira | Add JSON examples | `bun run jira:search snapshot FHIR-19608`, https://jira.hl7.org/browse/FHIR-19608 | Formal intent: every datatype example should be available in XML and JSON. |
| Jira | Fill TODO examples | `bun run jira:search snapshot FHIR-27546`, https://jira.hl7.org/browse/FHIR-27546 | Formal intent: complete Signature/Annotation examples that were TODO. |
| Jira | Timing root names | `bun run jira:search snapshot FHIR-20670`, https://jira.hl7.org/browse/FHIR-20670 | Formal decision: `<schedule>` roots were not technically wrong but less confusing if fixed to `<timing>`. |
| Jira | SampledData period rename | `bun run jira:search snapshot FHIR-25034`, https://jira.hl7.org/browse/FHIR-25034 | Resolution: change `SampledData.period` to `SampledData.interval`. |
| Jira | SampledData offsets | `bun run jira:search snapshot FHIR-35948`, https://jira.hl7.org/browse/FHIR-35948 | Resolution changes interval cardinality and adds offsets-related rule. |
| Jira | RelativeTime | `bun run jira:search snapshot FHIR-41582`, https://jira.hl7.org/browse/FHIR-41582 | Formal R6 issue behind RelativeTime datatype/example. |
| Jira | Quantity comparator | `bun run jira:search snapshot FHIR-41495`, https://jira.hl7.org/browse/FHIR-41495 | Current Quantity encoding issue was noticed and fixed. |
| Jira | Quantity anchor | `bun run jira:search snapshot FHIR-41496`, https://jira.hl7.org/browse/FHIR-41496 | Current Quantity anchor issue was noticed and fixed. |
| Zulip | Quantity comparator thread | `bun run zulip:search snapshot implementers "Quantity.comparator encoding"`; https://chat.fhir.org/#narrow/stream/implementers/topic/Quantity.comparator%20encoding | Informal source for `FHIR-41495`/`FHIR-41496`. |
| Zulip | SampledData non-numeric thread | `bun run zulip:search snapshot fhir/infrastructure-wg "SampledData with non-numeric characters"`; https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/SampledData%20with%20non-numeric%20characters | Notes `FHIR-35948` was missed in snapshot3 and discusses interval/strings. |
| Zulip | Variable timing thread | `bun run zulip:search snapshot implementers "Representing array of data with variable timing"`; https://chat.fhir.org/#narrow/stream/implementers/topic/Representing%20array%20of%20data%20with%20variable%20timing | Origin discussion behind `FHIR-35948`; period/offset rationale. |
| Zulip | Nordic middle name thread | `bun run zulip:search snapshot nordics "Middle Name"`; https://chat.fhir.org/#narrow/stream/nordics/topic/Middle%20Name | Calls the current HumanName example extension URL wrong/nonexistent and says it was fixed, but current page still has it. |
| Confluence | `FHIR-19608` minutes | `bun run confluence:search snapshot 42993129`, https://confluence.hl7.org/spaces/MnM/pages/42993129/MnM+Minutes+CC+20190219 | MnM vote: add JSON to datatype examples page, persuasive. |
| Confluence | `FHIR-27546` minutes | `bun run confluence:search snapshot 91985978`, https://confluence.hl7.org/spaces/MnM/pages/91985978/MnM+Minutes+CC+20200901 | MnM tracker list includes `FHIR-27546` technical correction. |
| Confluence | `FHIR-41582` FHIR-I minutes | `bun run confluence:search snapshot 175613710`, https://confluence.hl7.org/spaces/FHIRI/pages/175613710/FHIR+Infrastructure+Minutes+CC+2023-07-17 | FHIR-I discussed `FHIR-41582`; not ready for decision at that meeting. |
| Confluence | RelativeTime proposal | `bun run confluence:search snapshot 175618136`, https://confluence.hl7.org/spaces/BRR/pages/175618136/RelativeTime+Datatype | Proposal page behind RelativeTime datatype shape and example. |

## Change summary

### Metadata/template/navigation

- **Metadata/template/navigation:** title standardized from `Data Type Examples` to `Datatype Examples` (`FHIR-25431`).
- **Metadata/template/navigation:** page ownership row changed from simple work group/FMM/standards row to "Responsible Owner" and removed maturity cell as part of broader R6 template/normative changes.
- **Metadata/template/navigation:** old table-of-contents block was replaced with the four datatype diagrams (`allprimitivetypes`, `alltypes`, `metadatatypes`, `specialtypes`).
- **Metadata/template/navigation:** "Profiles & Extensions" links were split into datatype profiles and extension IG links; `data-no-external="true"` was added by broad conformance/template commits.
- **Mechanical/noise:** example tab script and jQuery paths were added/updated. One possible script inconsistency remains: current tab is read from `fhir-example-tab-index`, but stored under `fhir-resource-tab-index` at `datatypes-examples.html:2877-2889`; I did not elevate this because it may be a broader template convention and I did not verify rendered behavior.

### Example additions and edits

- **Example change:** `FHIR-19608` added JSON examples and tab markers (`[%example-start%]`, `[%example-json%]`, `[%example-end%]`) across the page.
- **Example change:** `FHIR-40919` added JSON examples for primitive/string-pattern examples and added the "Primitive Extensions and Ids" section.
- **Example change:** `FHIR-27546` replaced TODO placeholders for Signature and Annotation with concrete examples.
- **Example change:** RatioRange examples were added and later expanded/fixed (`b9fd581...`, `FHIR-32404`, later QA).
- **Example change:** Identifier example with `Identifier.type.text` was added.
- **Example change:** address-line extension examples were added for `FHIR-20990` and `FHIR-23079`.
- **Example change/substantive:** RelativeTime section and example were added for `FHIR-41582`, then fixed by `FHIR-41514` and `FHIR-43364`.
- **Example change/correction:** Quantity comparator and anchor were fixed by `FHIR-41495`/`FHIR-41496`.

### Substantive or potentially conformance-affecting current issues

- **Substantive/spec problem:** SampledData XML example still uses `<period>` while the R6 datatype defines `SampledData.interval`; the paired JSON uses `"interval"`, and both formats omit required `intervalUnit`. This appears to be an incomplete application of the `FHIR-25034` period-to-interval change to this examples page.
- **Substantive/spec problem:** Many JSON examples added for `FHIR-19608` use quoted JSON strings for primitives that should be JSON numbers/booleans under `json.html:170-173`, and at least one JSON Address example disagrees with its XML values.
- **Intent mismatch:** `FHIR-20670` changed Timing root nodes from `<schedule>` to `<timing>`; the next page-specific commit (`b9fd581...`) reverted those examples back to `<schedule>`, and R6 still uses `schedule`.
- **Overlooked problem:** current HumanName Scandinavian examples still include a nonexistent `StructureDefinitioniso-20190#name-qualifier` URL and old `EntityNamePartQualifier2` code-system URL, despite the 2019 Zulip thread saying that exact extension was wrong and had been fixed.

## Source history

| Commit | Date | Subject | Page-specific relevance |
|---|---:|---|---|
| `b1a191ea63c373039d54c387aced8a9f11daea24` | 2021-03-29 | Update datatypes-examples.html | Applies `FHIR-20670`: changes Timing example roots from `schedule` to `timing`. |
| `ec83d5b5057f1402bdeb77453f5d214806de6b8c` | 2021-03-29 | MnM Non Substantive changes for R5 | Broad non-substantive cleanup. |
| `b9fd58139d35c8aa90083ae99a279c8a6d3dd854` | 2021-03-30 | Added new RatioRange dataytpe. | Adds RatioRange examples; unintentionally reverts Timing roots back to `schedule`. |
| `a7571852d6417113d2641a1fff9720b38926f9e6` | 2021-03-31 | Added identifier.type.text example | Adds bank-card identifier example. |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Broad template churn. |
| `d621ab0bda61832d87d16ee8fa98261bf403a9da` | 2022-02-17 | MnM changes batch #1 | Broad MnM edits. |
| `3fe108e91dc94537ac937263f428e8f9245410fa` | 2022-08-22 | FHIR-20990 Add standard extension for address line qualifier | Adds/updates address part extension example prose. |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Standardizes title/prose to "Datatype". |
| `307a4f54b5075a3036e1d25af387159fb2c95597` | 2022-09-03 | fhir-32404 | Adds/fixes RatioRange example use case. |
| `b8aac7778d29a4e078ba555dc56d5722c8dfc272` | 2022-09-03 | fhir-23079 | Address state/country/codeable concept related example changes. |
| `6d5e1da018b819a7eb74f44f3f3f3edf15e45143` | 2022-09-03 | fixed self-introduced error in example | Corrective follow-up to page example edits. |
| `663f617913507ba6127fbc7096dce5c73c6d679a` | 2022-09-03 | Update datatypes-examples.html | Additional page cleanup. |
| `4652397b3f33fa5641bf58d760a47b3084417e2a` | 2022-09-05 | work on navigation and consistency | Link/navigation consistency. |
| `7bf9e9408044b81c4f56930c20697f3afd3393f4` | 2022-09-09 | more datatypes indexing | Anchor/indexing changes. |
| `7d26f6f51a9a011949161c6632737ca00f037945` | 2023-02-08 | FHIR-27546 - data type examples | Fills Signature/Annotation TODO examples and removes an old TODO note. |
| `e9e4e5f34c8d0b40d680c26f92acfa19b5f714a6` | 2023-02-09 | FHIR-19608 Add JSON to datatype examples page | Adds most JSON examples and example tabs; also introduces many JSON example problems. |
| `4baa8f22bae6d8f787c024219b5842a6cc658bb5` | 2023-02-14 | fix character references for fragment parsing | Mechanical/example-fragment character reference cleanup. |
| `55017c7f96a4fe7e8a3f3d08718be0ba56799699` | 2023-02-24 | more qa | QA fixes. |
| `22b5c2457301de9acd614a6d899679b609536031` | 2023-03-12 | reorganise data types pages ready for IG | Link target changes from `datatypes-extras.html` to `datatypes-profiles.html`. |
| `c5a1cbeada5c8e4fd1582a8e4919a69e37476fd8` | 2023-03-14 | regenerate links to use extension IG | Changes extension links to `[%extensions-location%]extensions-datatypes.html`. |
| `86dc727207742c7e2ae8492822ed3f16804fc0fa` | 2023-10-02 | J# 41582 created a new data type RelativeTime | Adds RelativeTime section. |
| `a3cf48d6d4e25bd2c9807684581b068cd17ea68b` | 2023-10-02 | Undid the whitespace changes made to datatypes-examples.html, but only kept RelativeTime | Keeps RelativeTime while reverting unrelated whitespace churn. |
| `c27bdb7a6c4a63b716f83815a9096b413cf658a8` | 2023-11-23 | QA fixes | Fixes multiple JSON array/field issues and changes SampledData JSON `period` to `interval`, but not XML. |
| `d5e267fbf120c85dc323b19515e0e38a626303f8` | 2025-02-27 | FHIR-45488 The curating work group for the Data types and Metadata Types pages should be FHIR-I and not MnM | Ownership/workgroup terminology cleanup. |
| `dbb78e2435ad20bdcc43ada9656bf01fe99d6165` | 2025-02-28 | FHIR-47467 The resource pages indicate the diff with R4 and not R5 | Broad release-diff wording; minor/no page-specific semantic effect here. |
| `f12f3344c19615301ec287e5b70eb46cecb0b242` | 2025-03-02 | FHIR-40919 Primitives section should include a link to extensions, like examples | Adds primitive JSON examples and primitive extension/id examples. |
| `641e79181e2bef88f7d5611cd943aea18d653179` | 2025-03-03 | FHIR-41582 Create a TimeFromEvent Datatype | Adds RelativeTime example. |
| `49a9b66cef8df71a54462ccd1c30af90167bc85c` | 2025-03-03 | FHIR-41514 Summary page example is out of date | Fixes RelativeTime display quote and JSON fragment type. |
| `2865d924342d7f3870bcbaefb89ecdd67b671a2a` | 2025-03-03 | FHIR-43364 Extensions with context Element apply everywhere but a resource is not an Element | Adds wrapping braces to RelativeTime JSON example. |
| `ae7b5cba2cf91381060410cf215dc5fc1c1e9c17` | 2025-03-31 | html conformance changes | Changes link attribute from `no-external` to `data-no-external`. |
| `a581075555b02be851eb33506ac66a982aab61f7` | 2025-05-01 | upgrade jquery | Changes script paths to `assets/js`. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Changes header ownership row and removes FMM cell. |
| `e5b949659a2da06a1af0a2816f7d6ebfb70ce7ba` | 2025-11-01 | FHIR-41495 | Fixes Quantity comparator rendered encoding. |
| `64a3fffa26689936c243b6aa0d36cf55dbb4cec5` | 2025-11-01 | FHIR-41496 | Fixes Quantity anchor behavior. |
| `491fe750f34ccc8913ec3887c70e9f68f0a82012` | 2025-11-02 | Merge remote-tracking branch 'origin/master' | Merge commit; no independent page rationale found. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Punctuation cleanup for `e.g.,`/`i.e.,`. |

## Jira evidence

### Explicit Jira keys from commits/patches

| Key | Snapshot command | Status/resolution | Relevance |
|---|---|---|---|
| `FHIR-19608` | `bun run jira:search snapshot FHIR-19608` | Published / Persuasive / Applied for R5 | Formal request to add JSON to every datatype example. Resolution: "Will do this and set up tabs so you can see either JSON or XML." Does not discuss validation/typing details. |
| `FHIR-27546` | `bun run jira:search snapshot FHIR-27546` | Published / Persuasive / Applied for R5 | Asked to replace TODO example content; commit fills Signature and Annotation examples. |
| `FHIR-20670` | `bun run jira:search snapshot FHIR-20670` | Published / Persuasive / Applied for R5 | Reporter noted Timing roots were `<schedule>` instead of `<timing>`. Lloyd: "It's not technically wrong, but it'll be less confusing if we fix it." Fixed by `b1a191...`, then regressed by `b9fd581...`. |
| `FHIR-20990` | `bun run jira:search snapshot FHIR-20990` | Published / Not Persuasive with Modification / Applied for R5 | Address line qualifier request; resolution says existing extensions are intended and an example should clarify use. |
| `FHIR-25431` | `bun run jira:search snapshot FHIR-25431` | Published / Persuasive / Applied for R5 | Standardizes "datatype" spelling. |
| `FHIR-32404` | `bun run jira:search snapshot FHIR-32404` | Published / Persuasive / Applied for R5 | Requests better RatioRange example; resolution describes lowNumerator/highNumerator/denominator for strength ranges. |
| `FHIR-23079` | `bun run jira:search snapshot FHIR-23079` | Published / Not Persuasive with Modification / Applied for R5 | Address state/country/district as CodeableConcept; related to codedString address examples. |
| `FHIR-45488` | `bun run jira:search snapshot FHIR-45488` | Applied / Persuasive / Applied for R6 | Curating work group should be FHIR-I; mainly metadata/page ownership. |
| `FHIR-47467` | `bun run jira:search snapshot FHIR-47467` | Applied / Persuasive / Applied for R6 | Broad diff-label cleanup; not page-specific beyond template/release context. |
| `FHIR-40919` | `bun run jira:search snapshot FHIR-40919` | Applied / Persuasive with Modification / Applied for R6 | Asked primitive section to link to primitive examples/extensions; resolution also says primitive examples section will add JSON tab. |
| `FHIR-41582` | `bun run jira:search snapshot FHIR-41582` | Applied / Persuasive with Modification / Applied for R6 | Creates RelativeTime datatype; source page has RelativeTime example. |
| `FHIR-41514` | `bun run jira:search snapshot FHIR-41514` | Applied / Persuasive with Modification / Applied for R6 | Summary/example out of date; commit fixes RelativeTime example fragment and XML display quote. |
| `FHIR-43364` | `bun run jira:search snapshot FHIR-43364` | Applied / Persuasive with Modification / Applied for R6 | Extension context clarification; commit adds wrapping braces to RelativeTime JSON example. |
| `FHIR-41495` | `bun run jira:search snapshot FHIR-41495` | Applied / Persuasive / Applied for R6 | Bad Quantity comparator encoding; fixed in source by `e5b949...`. |
| `FHIR-41496` | `bun run jira:search snapshot FHIR-41496` | Applied / Persuasive / Applied for R6 | Bad Quantity anchor link; fixed in source by `64a3fff...`. |
| `FHIR-44047` | `bun run jira:search snapshot FHIR-44047` | Resolved - change required / Persuasive | Punctuation cleanup for `e.g.`/`i.e.` across many pages; commit touched two lines here. |

### Other Jira issues that plausibly explain changed/current text

| Key | Snapshot command | Status/resolution | Relevance |
|---|---|---|---|
| `FHIR-25034` | `bun run jira:search snapshot FHIR-25034` | Published / Persuasive with Modification / Applied for R5 | Resolution: "Change SampledData.period to SampledData.interval..." This directly conflicts with current XML example using `<period>`. |
| `FHIR-35948` | `bun run jira:search snapshot FHIR-35948` | Published / Persuasive / Applied for R5 | Adds `offsets` and changes `interval` cardinality; reinforces that the current R6 SampledData element is `interval`, not `period`. |

### Context-only Jira hits that should not drive action

- `FHIR-41495` and `FHIR-41496` are resolved in current source. The current source contains `&gt;` because this is HTML source for a rendered `>` in a `<pre>` block; the prior double-escaping problem was `&amp;gt;`.
- `FHIR-47467`, `FHIR-45488`, and `FHIR-44047` explain broad template or editorial churn but do not by themselves create page-specific follow-up.
- Search queries for `"value" "25" "datatypes-examples"`, `"userSelected" "true" "datatypes-examples"`, and `"Noodles are called"` found no Jira issue for the current JSON typing/primitive-string problems.

## Zulip evidence

- `bun run zulip:search fts "\"FHIR-41495\"" --limit 5` and `FHIR-41496` found `#implementers > Quantity.comparator encoding`. Snapshot: `bun run zulip:search snapshot implementers "Quantity.comparator encoding"`. Elliot Silver asked whether JSON strings/code values should be HTML escaped in the Quantity comparator example and then filed `FHIR-41495`/`FHIR-41496`. This supports the conclusion that the Quantity comparator/anchor defects were noticed and fixed.
- `bun run zulip:search fts "\"FHIR-35948\"" --limit 5` found `#fhir/infrastructure-wg > SampledData with non-numeric characters` and `#implementers > Representing array of data with variable timing`. Snapshots confirm SampledData interval/offsets work was actively discussed, and one message says `FHIR-35948` had been missed when preparing snapshot3. This is background for the current `period`/`interval` mismatch, but the thread does not mention `datatypes-examples.html` specifically.
- `bun run zulip:search snapshot implementers "Representing array of data with variable timing"` shows the origin rationale for offsets: the old `period` assumed fixed sampling; participants discussed adding an offsets array and retaining or redefining period/interval semantics.
- `bun run zulip:search snapshot nordics "Middle Name"` contains the exact bad example URL `http://hl7.org/fhir/StructureDefinitioniso-20190#name-qualifier`. Lloyd says "that extension is wrong - it doesn't exist"; Grahame says "I've fixed this in the current build." Current R6 ballot4 still has this URL and the non-R2 code-system URL in multiple HumanName examples, including JSON copies introduced later.
- Quoted Zulip searches for other explicit Jira keys mostly found no results. The unquoted versions failed with SQLite `no such column: NNNNN`; this is a search tooling/FTS hyphen issue and not evidence of absence.

## Confluence evidence

- `bun run confluence:search snapshot 42993129` (`MnM Minutes CC 20190219`) records tracker `19608 - Add JSON to datatype examples page - Persuasive`. This supports `FHIR-19608` formal intent but has no detail about JSON validation.
- `bun run confluence:search snapshot 91985978` (`MnM Minutes CC 20200901`) references `FHIR-27546 Technical Correction`; this supports the TODO-cleanup history.
- `bun run confluence:search refs jira FHIR-41582` found multiple pages. `bun run confluence:search snapshot 175613710` (`FHIR Infrastructure Minutes CC 2023-07-17`) records `FHIR-41582` under tracker items and says the WG was not ready for decision then. `bun run confluence:search snapshot 175618136` (`RelativeTime Datatype`) gives the proposal text that shifted TimeFromEvent toward RelativeTime.
- `bun run confluence:search fts "datatype examples JSON" --limit 10` found the 2019 MnM minutes above plus context-only JSON/example hits in other WGs.
- `bun run confluence:search fts "SampledData interval period" --limit 10` found no results.

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2019-02-19 | Confluence/Jira vote | MnM minutes mark tracker 19608 "Add JSON to datatype examples page" persuasive; Jira `FHIR-19608` has vote date 2019-02-19. |
| 2019-04-04 | Jira decision | `FHIR-20670` resolved persuasive: Timing root `<schedule>` is not technically wrong, but should be fixed to reduce confusion. |
| 2019-06-07 | Zulip discussion | `#nordics > Middle Name` says the `StructureDefinitioniso-20190#name-qualifier` extension URL is wrong/nonexistent and claims it was fixed in current build. |
| 2021-03-29 | Source commit | `b1a191...` applies `FHIR-20670`, changing Timing examples from `schedule` to `timing`. |
| 2021-03-30 | Source commit | `b9fd581...` adds RatioRange examples but reverts Timing roots back to `schedule`. |
| 2022-08-03 | Jira decision | `FHIR-25034` resolved: change `SampledData.period` to `SampledData.interval`; applied for R5. |
| 2022-09-21 | Jira decision | `FHIR-35948` resolved: add offsets and update interval cardinality/constraint. |
| 2023-02-08 | Source commit | `7d26f6...` fills Signature/Annotation TODOs for `FHIR-27546`. |
| 2023-02-09 | Source commit | `e9e4e5...` adds JSON examples/tabs for `FHIR-19608`. |
| 2023-11-23 | Source commit | `c27bdb...` QA fixes change SampledData JSON `period` to `interval`, but XML example remains `period`. |
| 2025-03-02 | Source commit | `f12f334...` implements `FHIR-40919`, adding primitive JSON examples and primitive extension/id examples. |
| 2025-03-03 | Source commits | `641e791...`, `49a9b66...`, `2865d92...` add/fix RelativeTime example for `FHIR-41582`, `FHIR-41514`, `FHIR-43364`. |
| 2025-11-01 | Source commits | `e5b949...` and `64a3ff...` fix Quantity comparator encoding and anchor for `FHIR-41495`/`FHIR-41496`. |
| 2025-11-03 | Source commit | `887bc238...` applies `FHIR-44047` punctuation changes. |
| R6 ballot4 boundary | Publication/source boundary | Current reviewed page still contains SampledData XML `period`, Timing `schedule`, stringified JSON primitives, and HumanName bad extension URLs. |

## Evidence log

- Boundary:
  - `test -f "$OLD_TREE/source/datatypes-examples.html" && echo "old exists"`
  - `test -f "$NEW_TREE/source/datatypes-examples.html" && echo "new exists"`
  - `wc -l "$OLD_TREE/$PAGE" "$NEW_TREE/$PAGE"` established 1427 old lines and 2898 new lines.
- Direct diff:
  - `git -C "$NEW_TREE" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/datatypes-examples.html`
  - Diff was 122 KB; summarized as `1926 insertions(+), 455 deletions(-)`.
- Source history:
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/datatypes-examples.html`
  - Key `git show --stat --patch` calls were run for `b1a191...`, `b9fd581...`, `e9e4e5...`, `c27bdb...`, `f12f334...`, `641e791...`, `49a9b66...`, `2865d92...`, `e5b949...`, `64a3fff...`, `887bc238...`, and template/navigation commits.
- Full page read:
  - Read current page in chunks covering `1-220`, `221-440`, `441-660`, `661-880`, `881-1100`, `1101-1320`, `1321-1540`, `1541-1760`, `1761-1980`, `1981-2200`, `2201-2420`, `2421-2640`, `2641-2860`, and `2861-2898`.
- Jira:
  - Snapshotted all explicit keys listed in scope and `FHIR-25034`/`FHIR-35948`.
  - Targeted searches with no issue found: `SampledData.interval datatypes examples`, `"value" "25" "datatypes-examples"`, `"userSelected" "true" "datatypes-examples"`, `"Noodles are called"`.
- Zulip:
  - Unquoted `bun run zulip:search fts FHIR-XXXXX` failed due FTS hyphen parsing (`no such column: NNNNN`); repeated as `bun run zulip:search fts "\"FHIR-XXXXX\""`.
  - Snapshotted promising threads listed in the Zulip evidence section.
- Confluence:
  - Ran `refs jira`/`fts` for `FHIR-19608`, `FHIR-27546`, `FHIR-41582` and targeted phrases.
  - Snapshotted pages `42993129`, `91985978`, `175613710`, and `175618136`.

# datatypes research appendix

## Scope and coverage

- Page path: `source/datatypes.html`.
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: the page exists in both trees and is modified, not added/deleted/renamed.
- Current page read end-to-end: yes; R6 ballot4 source is 1942 lines.
- Direct diff size: 842 insertions, 600 deletions in `source/datatypes.html`.
- Source history: 104 commits touched the page between the two commits. Explicit Jira-style keys found in commit subjects: `FHIR-20400`, `FHIR-22655`, `FHIR-23839`, `FHIR-24869`, `FHIR-25431`, `FHIR-27789`, `FHIR-31866`, `FHIR-31893`, `FHIR-32800`, `FHIR-33040`, `FHIR-34099`, `FHIR-34314`, `FHIR-34355`, `FHIR-35948`, `FHIR-36000`, `FHIR-36267`, `FHIR-36641`, `FHIR-36679`, `FHIR-37368`, `FHIR-37406`, `FHIR-37603`, `FHIR-37873`, `FHIR-38006`, `FHIR-38714`, `FHIR-38824`, `FHIR-38946`, `FHIR-38981`, `FHIR-38983`, `FHIR-40387`, `FHIR-40419`, `FHIR-40555`, `FHIR-40624`, `FHIR-40919`, `FHIR-41370`, `FHIR-41478`, `FHIR-41582`, `FHIR-42959`, `FHIR-42984`, `FHIR-44047`, `FHIR-45292`, `FHIR-45479`, `FHIR-45488`, `FHIR-47467`, `FHIR-47558`, `FHIR-48953`, `FHIR-49899`, `FHIR-50188`, `FHIR-50530`, `FHIR-50574`, `FHIR-50981`, `FHIR-50983`, `FHIR-53409`.
- Jira coverage: summarized all explicit commit keys via local Jira SQL; snapshot-read selected issues that explain substantive datatypes page text (`FHIR-35948`, `FHIR-40624`, `FHIR-50188`, `FHIR-41582`, `FHIR-53409`, `FHIR-45292`, `FHIR-41478`, `FHIR-45479`, `FHIR-42959`, `FHIR-47558`, `FHIR-48953`, `FHIR-40555`, `FHIR-40387`).
- Zulip coverage: searched quoted Jira keys and distinctive changed phrases; snapshot-read selected threads for SampledData, CodeableConcept multiple codings, Identifier namespaces, Coding.system, SimpleQuantity/Quantity variations, exceptional Quantity values, and line breaks.
- Confluence coverage: searched Jira refs and distinctive terms; snapshot-read selected FHIR-I/MnM minutes and the BRR RelativeTime Datatype page.
- Caveat: this was bounded page-review research, not a complete audit of every one of the 104 page-touching commits. The action file only elevates concrete reader-facing defects or clear intent/implementation mismatches.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes.html` | Current page reviewed end-to-end. |
| Source lines | Primitive `instant` wording | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes.html:216-219` | Contains visible typo in normative "SHALL specified" sentence. |
| Source lines | Quantity variations headings | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes.html:965-1010` | Age subsection is headed and anchored as duplicate Distance. |
| Source lines | CodeableConcept multiple codings | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes.html:789-850` | Major R6 semantic guidance from FHIR-50188. |
| Source lines | Quantity exceptional values | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes.html:941-948` | Guidance from FHIR-47558. |
| Source lines | SampledData codeMap guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes.html:1291-1335` | R5/R6 substantive SampledData guidance; includes editorial typos. |
| Source lines | Identifier namespace guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes.html:1360-1418` | Clarifies absolute systems, registries, and RFC3986 behavior. |
| Source lines | Timing repeat text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes.html:1630-1640` | Contains invalid `<cod>count</cod>` tag in new Timing guidance. |
| Source lines | RelativeTime narrative | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes.html:1731-1764` | New R6 datatype and later EventDefinition update. |
| Commit | FHIR-35948 SampledData | `6b6661326a60980f6418679f71a404c573394df2` / `https://github.com/HL7/fhir/commit/6b6661326a60980f6418679f71a404c573394df2` | Added SampledData code/codeMap guidance and introduced visible "by by" typo. |
| Commit | FHIR-40624 Quantity headings | `0cd58f90e8487891bc4cf3b8ceb320d7ee12ce34` / `https://github.com/HL7/fhir/commit/0cd58f90e8487891bc4cf3b8ceb320d7ee12ce34` | Added subheadings for Quantity variations but duplicated Distance before Age. |
| Commit | FHIR-50188 multiple codings | `cb7a9ab16ee6c654f1d4a92ef14a5de31f2a3f31` / `https://github.com/HL7/fhir/commit/cb7a9ab16ee6c654f1d4a92ef14a5de31f2a3f31` | Replaced "Additional Codes" section with R6 multiple-codings guidance. |
| Commit | RelativeTime added | `86dc727207742c7e2ae8492822ed3f16804fc0fa` / `https://github.com/HL7/fhir/commit/86dc727207742c7e2ae8492822ed3f16804fc0fa` | Created RelativeTime datatype page entry for J#41582. |
| Commit | FHIR-53409 RelativeTime EventDefinition | `2641560b525b36bac72e47ff0513afc23b76bcbc` / `https://github.com/HL7/fhir/commit/2641560b525b36bac72e47ff0513afc23b76bcbc` | Added EventDefinition to narrative contextDefinition list. |
| Commit | Timing "wip" | `ba10a6f24d181dec80b69dd90e68e0337421e7a0` / `https://github.com/HL7/fhir/commit/ba10a6f24d181dec80b69dd90e68e0337421e7a0` | Added Timing bounds/startOffset text and `<cod>count</cod>` typo. |
| Jira | FHIR-40624 | `https://jira.hl7.org/browse/FHIR-40624`; reopen with `bun run jira:search snapshot FHIR-40624` | Formal request to add separate Quantity variation subheaders. |
| Jira | FHIR-35948 | `https://jira.hl7.org/browse/FHIR-35948`; reopen with `bun run jira:search snapshot FHIR-35948` | Formal SampledData variable timing issue. |
| Jira | FHIR-50188 | `https://jira.hl7.org/browse/FHIR-50188`; reopen with `bun run jira:search snapshot FHIR-50188` | Formal CodeableConcept multiple codings resolution. |
| Jira | FHIR-41582 | `https://jira.hl7.org/browse/FHIR-41582`; reopen with `bun run jira:search snapshot FHIR-41582` | Formal RelativeTime creation issue. |
| Jira | FHIR-53409 | `https://jira.hl7.org/browse/FHIR-53409`; reopen with `bun run jira:search snapshot FHIR-53409` | Added EventDefinition target and more narrative guidance for RelativeTime. |
| Jira | FHIR-45292 | `https://jira.hl7.org/browse/FHIR-45292`; reopen with `bun run jira:search snapshot FHIR-45292` | Coding.system should be populated when known. |
| Jira | FHIR-45479 | `https://jira.hl7.org/browse/FHIR-45479`; reopen with `bun run jira:search snapshot FHIR-45479` | Clarifies custom namespaces for globally unique identifier values. |
| Jira | FHIR-47558 | `https://jira.hl7.org/browse/FHIR-47558`; reopen with `bun run jira:search snapshot FHIR-47558` | Quantity exceptional values guidance. |
| Zulip | SampledData variable timing | `#implementers > Representing array of data with variable timing`; reopen with `bun run zulip:search snapshot implementers "Representing array of data with variable timing"` | Source discussion quoted in FHIR-35948. |
| Zulip | Multiple codes in CodeableConcept | `#terminology > Multiple codes in CodeableConcept`; reopen with `bun run zulip:search snapshot terminology "Multiple codes in CodeableConcept"` | Informal rationale and draft text for FHIR-50188. |
| Zulip | Identifier namespaces | `#implementers > Namespaces for identifiers that happen to be globally unique`; reopen with `bun run zulip:search snapshot implementers "Namespaces for identifiers that happen to be globally unique"` | Direct background for FHIR-45479. |
| Confluence | FHIR-I 2023-03-20 | `https://confluence.hl7.org/spaces/FHIRI/pages/161059574/FHIR+Infrastructure+Minutes+CC+2023-03-20`; `bun run confluence:search snapshot 161059574` | Minutes say FHIR-40624 "Will fix". |
| Confluence | FHIR-I 2025-04-07 | `https://confluence.hl7.org/spaces/FHIRI/pages/325461753/FHIR+Infrastructure+Minutes+CC+2025-04-07`; `bun run confluence:search snapshot 325461753` | Vote for FHIR-50188. |
| Confluence | RelativeTime Datatype | `https://confluence.hl7.org/spaces/BRR/pages/175618136/RelativeTime+Datatype`; `bun run confluence:search snapshot 175618136` | Work-up page behind FHIR-41582. |

## Change summary

### Page framing, categorization, and generated navigation

- Metadata/template/navigation: title changed from "Data Types" to "Datatypes"; standards status shown as Normative; responsible owner shown as FHIR-I; a Types Framework cross-reference block was added.
- Semantic guidance: the introductory taxonomy changed from four to five categories by making base abstract types explicit and linking MetaDatatypes.
- Mechanical/editorial: broad "data type" to "datatype" style changes, generated profile/extension links, R2/R4 conversion link churn, and extension-pack link changes account for much of the diff.

### Primitive types

- Substantive/normative and semantic guidance:
  - Primitive definition now says primitives specialize `PrimitiveType` and have `id` plus extensions.
  - Primitive table was expanded/reworked with generated regex macros and profile definition links.
  - `canonical` was added to the local primitive table narrative and explicitly says canonical URLs are never relative except fragment identifiers (FHIR-27789).
  - `integer64` appears as a JSON string due precision concerns.
  - Date/dateTime/time wording now references ISO 8601 and clarifies timezone offset language (FHIR-34355, FHIR-38006, FHIR-41370).
  - String size is expressed as 1,048,576 characters, not bytes, and string newline handling was clarified (FHIR-36641, FHIR-48953).
  - Markdown guidance was expanded to address inline HTML, escaping, and string-to-markdown compatibility, including choice-element wire-format risk (FHIR-38714, FHIR-40387, FHIR-40555).
- Editorial/mechanical:
  - Regexes now use `[%regex ...%]` macros and link to XML/JSON definitions.
  - The RDF primitive example was removed from this page in favor of linking to format pages.
- Concrete defect noticed:
  - `instant` says "The time SHALL specified..." at current line 217; this appears to have been introduced with the 2022 canonical/primitive rework and persists.

### Coding and CodeableConcept

- Substantive/normative and semantic guidance:
  - `Coding.system` is now described as an absolute URI (FHIR-37873).
  - Coding now says systems SHOULD populate `Coding.system` whenever known (FHIR-45292).
  - Coding with system but no code was clarified as meaning no suitable code in that system, and should not be used unless that is intended (FHIR-36267).
  - Display guidance now distinguishes code-system displays/designations from value-set displays (FHIR-37603).
  - CodeableConcept's "Additional Codes" text was replaced by "Multiple Codings" guidance: multiple codings have no order significance; their meaning intersection SHALL NOT be empty; granularity must remain appropriate to the element; and negation examples illustrate safety risks (FHIR-50188).
- Evidence fit:
  - The current CodeableConcept text at lines 789-850 closely tracks the FHIR-50188 resolution and the Zulip terminology thread; no actionable intent mismatch found.

### Quantity, Quantity variations, RatioRange, and exceptional values

- Substantive/semantic guidance:
  - Quantity now has a note advising exceptional values such as NaN, trace, and sufficient quantity should be conveyed with coded datatypes such as CodeableConcept and relevant extensions/code systems (FHIR-47558).
  - Defined variations on Quantity were split into subheadings/tables to make Distance, Age, Count, Duration, and SimpleQuantity easier to locate (FHIR-40624).
  - RatioRange was added as a new datatype (commit `b9fd58139d35c8aa90083ae99a279c8a6d3dd854`, later refined).
- Concrete defect noticed:
  - The Age subsection is mislabeled with a duplicate `Distance` anchor and `Distance` heading at lines 1005-1009. This contradicts the FHIR-40624 intent to create separate subheaders including Age.

### Period, SampledData, Identifier, HumanName, Address, ContactPoint

- Period: text for missing `end` was clarified and constraints block restored.
- SampledData:
  - FHIR-35948 added support for variable timing/offsets in the underlying datatype history.
  - Later SampledData guidance allows data points to be decimal values or codes; special codes `E`, `L`, `U` are reserved; other codes are defined by `codeMap` pointing to a ConceptMap; one ConceptMap group is required; numeric values and reserved codes cannot be redefined.
  - Current page has typos in this text: "separated by by", "source system defined", and "There is no escape sequences".
- Identifier:
  - `Identifier.system` is now an absolute URI (FHIR-37873).
  - Guidance for OIDs/UUIDs, registries, `urn:ietf:rfc:3986`, and custom namespaces was revised through FHIR-41478, FHIR-42959, and FHIR-45479.
  - Current text broadly matches the later Jira/Zulip intent but contains minor editorial issues: "processer" and a missing closing parenthesis in the RFC3986 examples sentence.
- HumanName:
  - Nickname destination changed from use `common` to use `nickname`.
  - Extension links moved to the extension IG.
- Address:
  - Address.line addressee guidance added (FHIR-50983).
  - Address.text newline delimiter guidance added (FHIR-50981).
- ContactPoint:
  - Direct page text has relatively small changes; ContactPoint.rank details are mostly in generated datatype definitions.

### Timing, RelativeTime, Signature, and other sections

- Timing:
  - The example table now includes `startOffset`.
  - New prose distinguishes `offset` from `startOffset`/`endOffset`.
  - A new paragraph describes repeat bounds when no `bounds[x]` or count is provided; it contains invalid `<cod>count</cod>` markup.
- RelativeTime:
  - Added as a new R6 datatype from J#41582/FHIR-41582, with initial placeholder text later refined.
  - FHIR-53409 added EventDefinition to the contextDefinition narrative and requested fuller explanation about context use; current line 1749 includes `EventDefinition`.
- Signature:
  - Signature-specific XML/JSON rules were largely moved out/removed from this page; the remaining section points to `signatures.html`.
  - A broad 2024 commit removed fixed SHA-256 recommendations so validation policy can determine acceptable algorithms.
- Other/template:
  - Type-characteristic summary and generated wildcard/open-type sections were added/updated.

## Source history

Selected chronological history, with broad mechanical commits labeled so they are not over-read as page-specific decisions:

| Commit | Date | Subject | Page-specific interpretation |
|---|---:|---|---|
| `cbdf7d1e55dc4bfa1dc30fc526edee0491e05782` | 2019-12-10 | rebuild abstract type framework | Broad type-framework restructuring after R4. |
| `5cbc14c7d0f361941099bf72066b75c3f74f6d4f` / `c4807a5165ee632872ef9f6289fee8e9e1abbb5f` | 2021-03 | R5 MnM changes | Broad R5 datatypes changes; inspect only for specific wording questions. |
| `b9fd58139d35c8aa90083ae99a279c8a6d3dd854` | 2021-03-30 | Added new RatioRange datatype | Adds RatioRange page section. |
| `8454f5094b892669faa0b194a04a9dc695aebbb5` / `7a66857e48c8dac76aaff07350a54f4d8133637e` | 2021-07-21 | J# 31866 / OrderedDistribution | Removes Statistic/OrderedDistribution as datatypes. |
| `d621ab0bda61832d87d16ee8fa98261bf403a9da` | 2022-02-17 | MnM changes batch #1 | Broad R5 updates. |
| `86b525699180156ab8538d87361a368aa9664203` | 2022-08-18 | FHIR-37873 Make explicit that Identifier.system and Coding.system must be absolute | Adds "absolute URI" wording for Coding.system and Identifier.system. |
| `356b6a87ae93a7e325a44c2ba82c60c7205d247d` | 2022-08-23 | FHIR-27789 Clarify that canonical URL shall be absolute | Adds/reworks canonical primitive text; also contains the persistent "SHALL specified" instant typo in the reworked primitive table. |
| `76bb95d2eb022c79180c7cbaf83a9b4be431aeaf`, `3ef54c37a52ed2d27ea04d457899585052cd4b1f`, `0ed3302de365979d3eee6f8c96cd9570acb542d8` | 2022-08 | FHIR-32800 / FHIR-37368 / FHIR-20400 | String and primitive regex clarifications. |
| `a705329af6cbb66189916ad41320f5368d39d654` | 2022-08-23 | FHIR-23839 discourage Annotation.authorString use | Adds Annotation authorString guidance. |
| `64c90499b7ab069345668b555e7cb6889ae29b09` | 2022-08-27 | FHIR-34355 Datatype date/dateTime are not correct | Date/dateTime clarification. |
| `1c5be8bd4b6a6093cc032761f943cdadb433a2e3` | 2022-08-28 | FHIR-24869 ... + fix date/time regex | Mixes operations text with date/time regex work. |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Editorial terminology consistency. |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / `4652397b3f33fa5641bf58d760a47b3084417e2a` / `c3da43d4d906bc8ef71d67923be5e5db976665be` | 2021-2022 | template/navigation/status commits | Mechanical/template/status churn. |
| `6b6661326a60980f6418679f71a404c573394df2` | 2023-02-10 | FHIR-35948 Expand SampledData to allow for variable timings | Adds SampledData code/codeMap prose and the current "by by" typo. |
| `327a3bf4db401405da782c2e172afa67438dbf2d` | 2023-02-16 | FHIR-38946 Sampled data - additional special values | Related SampledData non-numeric values work. |
| `342751f76e01b92363de3e8fedb4608ceef1797d` | 2023-03-19 | FHIR-40419 Added guidance on missing Identifier.value | Identifier best-practice guidance. |
| `e161279945db540d091fb3ab145294a235d3e60f` | 2023-03-20 | FHIR-40555 - Added guidance on string -> markdown | Markdown compatibility/wire-format guidance. |
| `0cd58f90e8487891bc4cf3b8ceb320d7ee12ce34` | 2023-03-20 | FHIR-40624 - Added headings for Quantity variations | Adds requested headings but accidentally duplicates `Distance` for Age. |
| `200774111b88bee2825053f54cb0a05c28e13704` | 2023-03-24 | add invariants for identifier | Adds identifier constraints macro. |
| `68e29442bb075d1aa0a64e66ec004818364eb07f` / `c756d61663a72511a16767d200a64e7636aaf239` | 2023-06 | FHIR-41370 / ISO8601 link | ISO date/time references. |
| `86dc727207742c7e2ae8492822ed3f16804fc0fa` | 2023-10-02 | J# 41582 created a new data type RelativeTime | Adds RelativeTime with placeholder notes. |
| `a343c89971e6fe3276be1b670d3c575ade5118be` | 2023-10-02 | Replaced placeholder text for RelativeTime datatype | Refines RelativeTime narrative. |
| `8817c237229bfcd156c66ffe94494ee207327d0a` | 2024-12-30 | Allow more hashing algorithms by not mentioning SHA-256 | Removes specific SHA-256 recommendations from Signature rules. |
| `f50114c214b613f37b7570508041a7f3f42d1709` | 2025-02-27 | FHIR-45292 Clarify that Coding.system is required if known | Adds Coding.system SHOULD-populate-if-known language. |
| `d5e267fbf120c85dc323b19515e0e38a626303f8` | 2025-02-27 | FHIR-45488 ... owner FHIR-I not MnM | Page owner/status metadata. |
| `f12f3344c19615301ec287e5b70eb46cecb0b242` | 2025-03-02 | FHIR-40919 primitives link to extensions | Adds primitive extensions link. |
| `cf56ea1c5b5bf3b860bfef8ee6c6f84a13b2ded6` | 2025-03-03 | FHIR-42984 Inconsistent statement/text on regex | Regex notes alignment. |
| `e3f83b936d1041110fe8e63316611bfe19438fdf` | 2025-11-03 | FHIR-47558 Provide value set, discussion and examples for NaN, +inf, etc. | Adds exceptional Quantity note. |
| `369aa0c0cdf6832e4b9370858d9a4c507fa4984c` | 2025-11-03 | FHIR-45479 Clarify use of namespaces for globally unique identifiers | Adds identifier namespace clarification. |
| `6b590133d50b26348f24e87fe8a4e8bf95a804c0` | 2025-11-03 | FHIR-41478 Clarify when OID/GUID identifiers must use RFC3986 | Refines Identifier.system wording. |
| `1192e15c8181cd012c1b77cc3b836f7144e67b5b` | 2025-11-03 | FHIR-42959 Identifier.system UUIDs cannot be registered in HL7 OID Registry | Updates registry guidance for OIDs/UUIDs. |
| `cb7a9ab16ee6c654f1d4a92ef14a5de31f2a3f31` | 2025-10-31 | FHIR-50188 | Rewrites CodeableConcept multiple-codings guidance. |
| `3fc495d092a54f358a1be349339c51eb01f598b6` / `ffd380f0bf5fd9c645d487a8557001b340ac0ac8` | 2025-11-01 | FHIR-50981 / FHIR-50983 | Address.text delimiter and Address.line addressee guidance. |
| `64be65ba7275891b32eb64d07d7f6b24af7f23d3` | 2025-11-02 | FHIR-48953 strings - expectation for newline vs carriage return | Adds string newline recommendation. |
| `ba10a6f24d181dec80b69dd90e68e0337421e7a0` | 2025-11-11 | wip | Timing/RelativeTime/Dosage-related edits; introduces invalid `<cod>count</cod>` tag. |
| `2641560b525b36bac72e47ff0513afc23b76bcbc` | 2025-11-11 | FHIR-53409 Allow relativeTime to reference EventDefinition | Adds EventDefinition to RelativeTime contextDefinition narrative. |
| `dcf53a8af6d730f886918f45af2510e990a986eb` | 2025-06-29 | rewrite signatures section | Removes detailed XML/JWS Signature rules from datatypes page and points to `signatures.html`. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / `605a6ffefb83e002264b0504348dea50144bb951` | 2025-10-31 | normative changes for R6 | Broad normative/status cleanup near ballot boundary. |

## Jira evidence

### Explicit Jira keys from commits/patches

All explicit keys found in commit subjects were summarized via Jira SQL. Most are Published or Applied; notable open/indeterminate statuses in the explicit list include:

- `FHIR-31893` "Review all Extensible and Required bindings in the core resources" - `Resolved - change required`; commit `0e2302e...` touched the page but the issue should not drive action here without a specific mismatch.
- `FHIR-44047` punctuation cleanup - `Resolved - change required`; commit `887bc238...` is broad editorial cleanup, not a page-specific unresolved semantics issue.

Selected snapshots that explain substantive current page text:

- `FHIR-35948` (Published, Persuasive, Compatible substantive, R5): describes SampledData's fixed-period limitation and resolves by adding `offsets` plus interval cardinality/definition changes. The Jira description links the Zulip variable-timing thread.
- `FHIR-40624` (Published, Persuasive, Correction, R5): asks for separate subheaders under "Defined Variations on Quantity" for Variation/Age/Count/Duration/SimpleQuantity; comment records commit `0cd58f90e8`. Current implementation has an Age-section heading/anchor copy-paste bug.
- `FHIR-50188` (Applied, Persuasive with Modification, R6): supplies the replacement CodeableConcept multiple-codings language; current text closely follows it.
- `FHIR-41582` (Applied, Persuasive with Modification, R6): creates new "relativeTime" datatype; resolution lists contextReference/contextDefinition/contextPath/contextCode/offset/text and invariants.
- `FHIR-53409` (Applied, Persuasive, R6): adds EventDefinition to RelativeTime contextDefinition targets and asks for fuller narrative explanation. Current line 1749 includes EventDefinition.
- `FHIR-45292` (Applied, Persuasive with Modification, R6): asks to clarify Coding.system required if known; current lines 713-719 apply this.
- `FHIR-41478`, `FHIR-45479`, `FHIR-42959` (Applied): together explain the Identifier namespace/RFC3986/OID registry rewrite.
- `FHIR-47558` (Applied, Persuasive with Modification, R6): asks for standard handling of NaN/+inf/trace/sufficient; current Quantity note implements the resolution.
- `FHIR-48953` (Applied, Persuasive with Modification, R6): string newline expectations; current line 296 implements `\r`, `\n`, `\r\n` guidance.
- `FHIR-40387` and `FHIR-40555` (Published, R5): markdown escaping and string-to-markdown compatibility guidance; current lines 443-464 implement these ideas.

### Other Jira issues plausibly explaining changed text

- `FHIR-38946` explains SampledData special/non-numeric values and is discussed with FHIR-35948 in Zulip.
- `FHIR-50981` and `FHIR-50983` explain the Address.text newline and Address.line addressee additions.
- `FHIR-27789`, `FHIR-37873`, `FHIR-38006`, `FHIR-41370`, `FHIR-42984`, and primitive-regex issues explain parts of the primitive table; no action raised beyond visible typos.

### Context-only Jira hits not driving action

- Broad template/status commits, version-map changes, extension IG link moves, and datatypes-vs-data-type editorial cleanups explain many diff lines but do not create actionable page-specific findings.
- Some Jira issues surfaced in Confluence/Zulip as adjacent discussion (`FHIR-49677`, `FHIR-51863`, `FHIR-50189`, etc.); they were not elevated because they do not show a current `source/datatypes.html` mismatch.

## Zulip evidence

- `#implementers > Representing array of data with variable timing`: discussion that SampledData cannot represent variable intervals; Grahame suggests an `offsets` string with the same format as data. The Jira `FHIR-35948` description quotes this thread.
- `#fhir/infrastructure-wg > SampledData with non-numeric characters`: discusses `FHIR-38946`, `FHIR-39323`, and missed `FHIR-35948` when allowing coded values in SampledData. Participants discuss use cases such as sleep studies and whether a distinct CodedSampledData is preferable. Current page takes the codeMap-in-SampledData path.
- `#terminology > Multiple codes in CodeableConcept`: discussion led directly to `FHIR-50188`; it contains draft text with the non-empty intersection rule and debate about granularity and value-set relevance. Current page matches the Jira resolution closely.
- `#terminology > Required Coding fields for a requied binding`: contains the link to `FHIR-45292` and background for "Coding.system if known"; no mismatch found.
- `#implementers > Distinguishing OID identifiers` and `#implementers > Namespaces for identifiers that happen to be globally unique`: show confusion around whether UUID/OID values must always use `urn:ietf:rfc:3986`, custom systems, and Identifier.type. This led to later Jira clarification (`FHIR-45479`/`FHIR-41478`).
- `#implementers > SimpleQuantity data type rationale`: pre-dates FHIR-40624 but confirms users had difficulty understanding/locating Quantity variations.
- `#implementers > Subsecond resolution of dateTime and instant`: includes the Quantity exceptional values concern and `FHIR-47558`.
- `#implementers > Inconsistent handling of \n line breaks in narrative`: later thread references `FHIR-48953` and shows remaining implementation/rendering questions around string line breaks; useful context but not a datatypes-page mismatch by itself.

## Confluence evidence

- `90362804` MnM Minutes CC 20220302: records discussion of `FHIR-35948`, including pros/cons of offsets and what value they should hold.
- `161059574` FHIR Infrastructure Minutes CC 2023-03-20: records `FHIR-40624 Will fix`; this supports the intent that Quantity variation headings should help locate each variation.
- `325461753` FHIR Infrastructure Minutes CC 2025-04-07: records `FHIR-50188 Persuasive: Grahame Grieve / Josh Mandel: 12-0-0`.
- `175618136` BRR RelativeTime Datatype: captures the detailed RelativeTime proposal, relationship to FHIR-41582, and the prospective/retrospective use-case concern. Current page implements the common datatype, not a split into two types.
- `403867726` FHIR Infrastructure Minutes CC 2025-11-10: records `FHIR-53409` request to add EventDefinition as RelativeTime context and additional documentation; vote 8-0-0.
- `288072400` FHIR Infrastructure Minutes CC 2024-12-16: records `FHIR-45292` discussion and vote; says system should be populated if known.
- `212761335` FHIR Infrastructure Minutes CC 2024-01-08: records `FHIR-41478 Persuasive with Mod`.
- `307299878` FHIR Infrastructure Minutes CC 2025-01-13: records `FHIR-47558` and the decision to add a Quantity note for non-numeric text/special values.
- `325460605` FHIR Infrastructure WGM 202505 - Madrid: references `FHIR-48953` and newline handling discussion.

## Timeline

- 2019-12 to 2021-03: abstract/base type framework and R5 MnM datatype reshaping begin.
- 2021-03: RatioRange added.
- 2021-07: `FHIR-31866` removes Statistic/OrderedDistribution from datatype modifier-extension list.
- 2022-02-04: Zulip variable timing thread starts; `FHIR-35948` created.
- 2022-03-02: MnM minutes discuss `FHIR-35948` offsets.
- 2022-08: canonical, Coding.system, Identifier.system, string/primitive regex, date/time, Annotation, and wording cleanups are applied for R5.
- 2022-09-21: `FHIR-35948` resolved/voted.
- 2023-02-10: SampledData text updated for `FHIR-35948`; typo "by by" introduced.
- 2023-03-20: FHIR-I votes related datatype issues; `FHIR-40624` commit adds Quantity variation subheadings with duplicate Distance/Age heading bug; `FHIR-40555` markdown guidance applied.
- 2023-07 to 2023-09: `FHIR-41582` RelativeTime proposal discussed/resolved.
- 2023-10-02: RelativeTime added and placeholder text replaced.
- 2024-01 to 2024-05: identifier RFC3986/OID/UUID clarification issues (`FHIR-41478`, `FHIR-45479`, `FHIR-42959`) move through FHIR-I/Jira.
- 2024-12: `FHIR-45292` Coding.system-if-known voted; `FHIR-48953` newline issue filed.
- 2025-01: `FHIR-47558` Quantity exceptional values voted.
- 2025-02 to 2025-03: R6 page owner/status and primitive-extension/regex clarifications applied.
- 2025-04: CodeableConcept multiple-codings discussion and `FHIR-50188` vote.
- 2025-10 to 2025-11: R6 normative/status updates, CodeableConcept, Timing/Dosage, RelativeTime, Identifier, Address, and SampledData-related edits land before ballot4 source commit `5d67a34...`.
- 2025-11-10/11: `FHIR-53409` voted and committed, adding EventDefinition to RelativeTime.

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/datatypes.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/datatypes.html" && echo "new exists"`
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/datatypes.html`
  - Saved session copy: `.copilot/session-state/afcf949d-cb8d-44c5-9f10-d79c47641749/files/datatypes.diff`
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/datatypes.html`
  - Selected commit patches saved at `.copilot/session-state/afcf949d-cb8d-44c5-9f10-d79c47641749/files/selected-shows.txt`.
- Jira:
  - SQL summary over all explicit keys extracted from the log.
  - Snapshots saved under `.copilot/session-state/afcf949d-cb8d-44c5-9f10-d79c47641749/files/jira/`.
- Zulip:
  - Initial unquoted issue-key FTS searches such as `bun run zulip:search fts "FHIR-35948"` failed because FTS parsed the hyphen as an operator/no-column term. Rerun with quoted phrases, e.g. `bun run zulip:search fts "\"FHIR-35948\"" --limit 10`.
  - Snapshots saved under `.copilot/session-state/afcf949d-cb8d-44c5-9f10-d79c47641749/files/zulip/`.
- Confluence:
  - `bun run confluence:search refs jira FHIR-XXXXX` for selected keys.
  - Snapshots saved under `.copilot/session-state/afcf949d-cb8d-44c5-9f10-d79c47641749/files/confluence/`.
- Full current page read:
  - `wc -l` reported 1942 lines in the R6 ballot4 source page.
  - Read in ranges `1-220`, `221-440`, `441-660`, `661-880`, `881-1100`, `1101-1320`, `1321-1540`, `1541-1760`, `1761-1942`, with a follow-up read for `1738-1762` after one chunk truncated near RelativeTime.

# fhirpath research appendix

## Scope and coverage

- Page path: `source/fhirpath.html`.
- Old version/source: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/source: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary check: `source/fhirpath.html` exists in both trees; this is a modified page, not an add/delete/rename.
- Full newer page read end-to-end: yes, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:1-1261`.
- Direct diff size: 1,809 diff lines; `source/fhirpath.html | 1802 +++++++++++++++++++++++++++++++++++---------------`, 1,260 insertions and 542 deletions. Some churn is whole-file/template/line-ending noise, especially commit `9427f2600639`.
- Source history count: 46 commits touched the page between the two boundary commits.
- Explicit Jira keys found in diff/history: `FHIR-20846`, `FHIR-24858`, `FHIR-25026`, `FHIR-25431`, `FHIR-26389`, `FHIR-27532`, `FHIR-33539`, `FHIR-34417`, `FHIR-36334`, `FHIR-38872`, `FHIR-40303`, `FHIR-41302`, `FHIR-41458`, `FHIR-41595`, `FHIR-42983`, `FHIR-44047`, `FHIR-44719`, `FHIR-44814`, `FHIR-44817`, `FHIR-45455`, `FHIR-46082`, `FHIR-48379`, `FHIR-48737`, `FHIR-48828`, `FHIR-53208`.
- Jira: all explicit keys above were snapshotted successfully under `.copilot/session-state/a9fe4cc7-e7d6-4483-86ba-154d961ac8bc/files/fhirpath/jira/`.
- Zulip: searched explicit keys and distinctive changed phrases; snapshotted the relevant `#fhirpath > Is a resource id a String?`, `#fhirpath > .slice()`, and `#conformance > co-occurrence of slices` threads.
- Confluence: searched explicit keys and snapshotted key FHIR-I minute pages and the externalized FHIRPath usage page.
- Caveats:
  - Direct R4-to-R6 diff is noisy because several commits reformatted or rewrapped large sections.
  - Zulip exact-key searches must quote hyphenated Jira keys. Initial unquoted `FHIR-44817` style searches failed with FTS parsing errors; repeated quoted searches succeeded.
  - Confluence snapshots normalize most meeting text into long lines, so page IDs and source links are more useful than line locators for those pages.
  - No broad web/PR archaeology was performed beyond links present in Jira/source history; only PRs explicitly surfaced were `#2624` and `#3797`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Current R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:1-1261` | Page read end-to-end and source for current-line findings. |
| Source | Resource.id example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:177-181` | Current text appears opposite to `FHIR-44817` resolution. |
| Source | Observation.value type list | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/observation/structuredefinition-Observation.xml:682-728` | Cross-check for the `Observation.value.ofType(canonical)` example. |
| Source | `ofType` examples | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:346-349` | Example added for `FHIR-45455`; first example uses a type not allowed for `Observation.value[x]`. |
| Source | Duplicate `fn-subsumes` anchors | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:432` and `:975` | Concrete navigation/rendering defect after function-anchor work. |
| Source | Type Factory examples | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:597-650`, `:684-736`, `:800-827` | Contains several copy/paste/example defects. |
| Source | General Service API copy/paste issues | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:1109-1112`, `:1168-1181`, `:1222-1256` | Current REST-like API text has stale wording/typos. |
| Commit | Added Type Factory API | `662229e4296562444046aeac9c485f03292d1a34`, https://github.com/HL7/fhir/commit/662229e4296562444046aeac9c485f03292d1a34 | Implements `FHIR-20846`; introduced much of the factory text. |
| Commit | Added General Service API | `36365345c78a1ddcd443605a8c033a4dd757c61d`, https://github.com/HL7/fhir/commit/36365345c78a1ddcd443605a8c033a4dd757c61d | Implements `%server` API for `FHIR-38872`. |
| Commit | Added Resource.id example | `415c4e014bc12bc9f0724783f92d17f1e267bbe3`, https://github.com/HL7/fhir/commit/415c4e014bc12bc9f0724783f92d17f1e267bbe3 | Introduced the apparent `FHIR-44817` mismatch. |
| Commit | Added examples | `8926ed304970e6e73500a1a66b0985fba92824ec`, https://github.com/HL7/fhir/commit/8926ed304970e6e73500a1a66b0985fba92824ec | Added function examples for `FHIR-45455`. |
| Commit | Clarified `slice()` | `f3149e95020436d1309d808aa83016ccd80a2080`, https://github.com/HL7/fhir/commit/f3149e95020436d1309d808aa83016ccd80a2080 | Implements `FHIR-45455` and `FHIR-42983` slice wording. |
| Commit | Removed low/highBoundary | `0c8e9b52f17390a69cf8add6b9a4bde4ba144cdf`, https://github.com/HL7/fhir/commit/0c8e9b52f17390a69cf8add6b9a4bde4ba144cdf | Applies `FHIR-53208` content removal. |
| PR | FHIR-53208 PR | https://github.com/HL7/fhir/pull/3797 | Jira comment identifies this PR for removing content moved to FHIRPath spec. |
| PR | General Service API typo PR | https://github.com/HL7/fhir/pull/2624 | Merge commit `643f46b8...` touched `source/fhirpath.html`. |
| Jira | Resource.id clarification | `bun run jira:search snapshot FHIR-44817`, https://jira.hl7.org/browse/FHIR-44817 | Formal decision says Resource.id is FHIR.id and not System.String. |
| Zulip | Resource.id discussion | `bun run zulip:search snapshot fhirpath "Is a resource id a String?"` | Later discussion confirms `Patient.id is System.String = false`. |
| Confluence | FHIR-44817 WGM minutes | `bun run confluence:search snapshot 234784975`, https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas | Meeting minutes for FHIR-44817. |
| Jira | Slice clarification | `bun run jira:search snapshot FHIR-42983`, https://jira.hl7.org/browse/FHIR-42983 | Formal `slice()` clarification used by `f3149e...`. |
| Zulip | `.slice()` rationale | `bun run zulip:search snapshot fhirpath ".slice()"` | Original ambiguity discussion for `FHIR-42983`. |
| Zulip | Slice examples/bookmarks | `bun run zulip:search snapshot conformance "co-occurrence of slices"` | Discussion that led to `FHIR-45455`. |
| Jira | Function bookmarks/examples | `bun run jira:search snapshot FHIR-45455`, https://jira.hl7.org/browse/FHIR-45455 | Requested bookmarks and examples; relevant to duplicate anchors/example defects. |
| Jira | Remove moved content | `bun run jira:search snapshot FHIR-53208`, https://jira.hl7.org/browse/FHIR-53208 | Explains removal of duplicate `ofType` and low/highBoundary. |
| Confluence | External FHIRPath usage page | `bun run confluence:search snapshot 391650086`, https://confluence.hl7.org/spaces/FHIRI/pages/391650086/FHIRPath+Usage+and+Extensions | Target of `FHIR-40303` externalization link. |
| Local artifact | Direct diff | `.copilot/session-state/a9fe4cc7-e7d6-4483-86ba-154d961ac8bc/files/fhirpath/direct.diff` | Full rename-aware diff output used in review. |
| Local artifact | Commit patches | `.copilot/session-state/a9fe4cc7-e7d6-4483-86ba-154d961ac8bc/files/fhirpath/patches/` | Saved selected `git show --stat --patch` outputs. |

## Change summary

### Page framing, metadata, and publication status

- **metadata/template/navigation**: The page header changed from a table with responsible WG, FMM, and normative status to a "Responsible Owner" + Standards Status table (`270e0ceb...`). Older `<div class="col-12">` wrappers and draft-content wrappers were removed.
- **substantive/normative status**: `270e0ceb...` removed draft warning wrappers around `weight()`, Type Factory, Terminology Service API, and General Service API. In the current page these appear under the page's normative status without the previous explicit "draft/maturity 0" banner.
- **mechanical/noise**: `d7b8dad...` updated HTML template; `9427f260...` rewrote the entire file, making line-based direct diffs noisy.

### Introductory usage list and external references

- **references/links**: TestScript link now targets `[%ig testing%]/StructureDefinitions-TestScript-definitions.html#TestScript.setup.action.assert.expression` instead of a local TestScript definition page.
- **semantic/editorial**: The old CDS Hooks prefetch-template sentence was replaced with a broader statement that FHIRPath is used/extended in many contexts, pointing to Confluence page `391650086` (`FHIRPath Usage and Extensions`). This follows `FHIR-40303`, whose summary says the page wrongly claimed CDS Hooks prefetch support.
- **editorial**: The current Confluence usage page itself contains typos ("prominant", "usaged") but that is outside the requested source file.

### Inter-version compatibility guidance

- **semantic guidance**: A new warning says FHIRPath expressions SHOULD be written presuming all elements repeat, because future FHIR versions can make non-repeating elements repeating (`8a7bd856...`, `FHIR-48379`). This is reader-facing guidance with conformance-language strength.

### Polymorphism and type mapping

- **substantive/semantic**: Choice-element guidance switched from `as` to `ofType` (`7b140ecc...`, `9427f260...`, `FHIR-41595`), and the duplicate accidental alias was removed (`f2a36b42...`, `FHIR-53208`).
- **substantive/semantic**: `FHIR.integer64` was added to the primitive-to-FHIRPath mapping as `System.Long` (`a1a72707...`, `FHIR-26389`).
- **substantive/semantic**: `FHIR.sid` was removed from the `System.String` mapping (`bb55579a...`, `FHIR-25026`).
- **editorial**: "data type" was standardized to "datatype" in relevant text (`FHIR-25431`).

### Primitive handling and return semantics

- **substantive/semantic**: `hasValue()`, `getValue()`, `toString()`, `empty()`, and primitive-extension examples were clarified through `FHIR-36334`, `FHIR-41458`, `FHIR-44719`, and `FHIR-48737`.
- **substantive/semantic**: Multiple function definitions changed invalid/multiple/missing input behavior from errors/null/undefined to empty collections (`FHIR-36334`, `FHIR-41302`). This affects `hasValue`, `getValue`, `conformsTo`, `memberOf`, `subsumes`, `htmlChecks`, and API return wording.
- **intent mismatch**: `FHIR-44817` formally resolved that `Patient.id` is `FHIR.id` and not `System.String`, but the current page says `Patient.id is System.String` and `(Patient.id is FHIR.id).not` (`source/fhirpath.html:177-181`).

### Quantity/UCUM guidance

- **semantic guidance**: Added a dragons note on subtle differences between UCUM `a`/`mo` definition durations and FHIRPath calendar `year`/`month`, with a link to FHIRPath time-valued quantities (`FHIR-24858`).

### Additional functions, examples, and anchors

- **substantive/semantic**: `slice()` was substantially clarified: it filters input items to those matching a profile slice, allows canonical URI or `%profile`, accepts `sliceName` or `ElementDefinition.id`, returns empty when unresolved/unmatched, and notes implementation needs a validation engine (`FHIR-42983`, `FHIR-45455`).
- **example change**: Examples were added for several FHIR-specific functions (`FHIR-45455`): `extension`, `hasValue`, `toString`, `getValue`, `resolve`, `ofType`, `conformsTo`, `subsumes`, and `slice`.
- **rendering/navigation**: Bookmark anchors were added for functions (`FHIR-45455`). Current page has a duplicate `fn-subsumes` anchor at lines 432 and 975.
- **semantic guidance**: New `%profile` variable documented for profile-invariant contexts, supporting `slice(%profile, ...)`.
- **substantive/semantic**: `weight()` was added from SDC-related guidance (`FHIR-33539`) and then included without draft wrapper after R6 normative changes.
- **substantive/content removal**: `lowBoundary` and `highBoundary` sections were removed because they are now in the FHIRPath specification (`FHIR-53208`).

### Type Factory API

- **substantive/new API**: A new `%factory` Type Factory section was added for primitive, Extension, Identifier, HumanName, ContactPoint, Address, Quantity, Coding, CodeableConcept, `create`, `withExtension`, and `withProperty` functions (`FHIR-20846`).
- **actionable editorial/example defects**: Current Type Factory text contains multiple concrete defects, including `HumanName.system` for the `family` parameter, an Address example with an email-like city, a broken Coding example string, and `http:/` URLs in examples.

### Terminology Service API

- **substantive/semantic**: `%terminologies` now explicitly represents the default terminology server and has `%terminologies.at(url)` for server selection (`FHIR-46082`).
- **semantic/editorial**: Many return values changed from `null` to empty; `FHIR-41302` aligned terminology API wording.
- **editorial**: Typo `%terminologes` fixed to `%terminologies` in the summary and expansion signature.
- **remaining inherited defects**: Some older wording remains questionable, such as validate-code links pointing to `terminology-service.html#expand` and `translate` saying the canonical URL references a "value set" rather than a ConceptMap. These were old/contextual and not elevated in the action file unless directly tied to the new R4-to-R6 changes.

### General Service API

- **substantive/new API**: `%server` General Service API was added to allow FHIRPath statements to interact with RESTful operations (`FHIR-38872`), including read/create/update/delete/patch/search/capabilities/validate/transform/everything/apply.
- **semantic/editorial**: `%server` return values changed from `null` to empty (`FHIR-41302`); the link target changed from terminology service to the FHIR RESTful framework.
- **actionable editorial defects**: Current text still has copy/paste issues: update uses "create" wording, capabilities says `CapabilitiesStatement`, and everything/apply descriptions say "Get a resource from the server."

## Source history

| Commit | Date | Subject | Page-relevant interpretation |
|---|---:|---|---|
| `d7b8dadc6213` | 2021-06-27 | update html template | Mechanical/template cleanup. |
| `a1a727070c2c` | 2022-05-16 | FHIR-26389 Include integer64 in FHIRPath mapping | Adds `FHIR.integer64 -> System.Long`; mostly whitespace otherwise. |
| `b97b82820271` | 2022-08-26 | FHIR-36334 Each function should define its behavior for input collections with multiple elements | Clarifies empty/multiple input behavior; removes FHIR-specific `trace()` extension text. |
| `84a650b04be0` | 2022-08-26 | FHIR-27532 Minor inconsistency between two fhirpath simple and ElementDefinition pages | Temporarily added an `as` alias, later corrected/removed. |
| `6e6dba6a9bba` | 2022-08-26 | clean up | Minor cleanup. |
| `9c94e6c4fa0d` | 2022-08-29 | FHIR-24858 FhirPath mapping may need to warn about UCUM units in Timing | Adds dragons note about UCUM time-valued units vs calendar durations. |
| `8592e1207273` | 2022-08-31 | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Editorial terminology. |
| `36365345c78a` | 2022-12-08 | FHIR-38872 Expression should support operations | Adds `%server` General Service API; originally under draft warning. |
| `a4ae98f684fc` | 2022-12-08 | typo | Minor typo fixes. |
| `7b140ecceeee` | 2023-01-20 | switch to ofType() instead of as() due to clarification of fhirpath functionality | Changes polymorphism example from `as` to `ofType`; accidentally leaves an alias later fixed. |
| `8a6a54029fde` | 2023-02-10 | FHIR-34417 per-1 invariant limits representation of real-world periods | Adds content that later appears to have been removed/moved; not a current-page action. |
| `4f373347afce` | 2023-02-10 | Fix typo in general service API | Small service API typo fix. |
| `dad7cf37c758` | 2023-02-21 | QA related changes | QA cleanup. |
| `662229e42965` | 2023-02-23 | FHIR-20846 Should we align transforms and FhirPath? | Adds Type Factory API and many bookmarks; source of several current example/property defects. |
| `55017c7f96a4` | 2023-02-24 | more qa | Minor QA. |
| `643f46b8b885` | 2023-02-28 | Merge pull request #2624 from vadi2/patch-5 | Merged service API typo PR. |
| `bb55579a5911` | 2023-03-21 | FHIR-25026 - Dropped sid from FHIRPath | Removes non-existent `FHIR.sid` from primitive mapping. |
| `093dbe7579f3` | 2024-02-27 | FHIR-44814 Uses incorrect Environment Variable escape character, (and a typo) | Changes environment variables from `%\"...\"` to backtick form and fixes a Coding-function typo but leaves a broken quote. |
| `9ea8288fce31` | 2025-03-18 | FHIR-33539 - Added SDC FHIRPath guidance, variables and functions | Adds SDC-related links and `weight()` function. |
| `ef21d8ddf304` | 2025-05-01 | removing references to build.fhir.org | Link cleanup. |
| `f9a44787c450` | 2025-10-01 | remove testing resources, and various minor fixes | Link cleanup around testing IG. |
| `d5f7097becd3` | 2025-10-02 | fix path | Fixes testing IG path. |
| `9427f2600639` | 2025-10-22 | FHIR-41595 as -> ofType in fhirpath documentation | Whole-file rewrite/noise plus wording from `as` to `ofType`. |
| `7783722e70ae` | 2025-10-22 | FHIR-41302 Change "null" to "empty" in return values | Changes `%server` return values from null to empty. |
| `d624d31444c9` | 2025-10-22 | FHIR-40303 Externalize (confluence) the other usages and extensions of fhirpath | Replaces CDS Hooks prefetch sentence with link to Confluence usage page. |
| `f2a36b4266ed` | 2025-10-22 | FHIR-53208 remove duplicate ofType function | Removes accidental duplicate `ofType` alias. |
| `8a7bd856e19a` | 2025-10-22 | FHIR-48379 Add warning that FHIRPath expressions might break if maximum cardinality changes | Adds inter-version SHOULD guidance. |
| `e4aef602b441` | 2025-10-22 | FHIR-41302 Change "null" to "empty" in return values | Further consistent empty-return wording. |
| `4818554d40dd` | 2025-10-22 | FHIR-46082 FHIRPath %terminologies: which server | Adds `%terminologies.at(url)` and fixes `%server.at` typo. |
| `cdd704b3ec17` | 2025-10-22 | FHIR-46082 FHIRPath %terminologies: which server? and tidy formatting | Re-heads Type Factory/Terminology/Server sections; introduces one of the duplicate `fn-subsumes` anchors. |
| `e9624872bc2c` | 2025-10-28 | work | Large add of page content during branch work; mechanical in final history. |
| `cd774234a5b7` | 2025-10-29 | redo w5 changes | Large removal/redo; mechanical in final history. |
| `270e0ceb7b02` | 2025-10-31 | normative changes for R6 | Removes FMM cell and draft wrappers; makes formerly draft blocks part of normative-looking page. |
| `f356afeb29b3` | 2025-11-03 | FHIR-41458 Clarify return of hasValue() | Clarifies true/false/empty behavior for `hasValue()`. |
| `5465375c661b` | 2025-11-03 | FHIR-44719 Clarify that empty() considers extensions | Adds example where `hasValue()` and `empty()` can both be false. |
| `e27704404ef4` | 2025-11-03 | FHIR-48737 primitive FHIR types with only extension and toString | Adds `toString()` behavior section. |
| `415c4e014bc1` | 2025-11-03 | FHIR-44817 Clarify whether a resource id is a String | Adds current Resource.id example, apparently opposite to Jira/Zulip intent. |
| `4961dcb9df16` | 2025-11-03 | FHIR-48828 Decide on moving FHIR-I profiles out of the core | Changes TestScript link to testing IG. |
| `887bc2383fb7` | 2025-11-03 | FHIR-44047 | Editorial punctuation changes. |
| `bbae11ecde82` | 2025-11-04 | FHIR-45455 fhirpath - add bookmark anchors | Adds/moves function anchors; source of regular-function `fn-subsumes` anchor. |
| `8926ed304970` | 2025-11-04 | FHIR-45455 fhirpath - include examples of the functions | Adds examples, including current `Observation.value.ofType(canonical)` issue. |
| `f3149e950204` | 2025-11-04 | FHIR-45455 / FHIR-42983 clarify slice | Adds `%profile` and detailed `slice()` wording/example. |
| `849a5dc977ab` | 2025-11-04 | QA: markup function parameter names | Markup/editorial. |
| `514a8cab3534` | 2025-11-04 | QA: Typo on hasValue function in toString | Fixes `hsaValue` typo. |
| `32ee662cd81e` | 2025-11-04 | Merge branch 'master' into i.e.-e.g- | Merge/churn in final history. |
| `0c8e9b52f173` | 2025-12-15 | FHIR-53208 Remove the fhirpath content that was to be moved into the fhirpath spec | Removes `lowBoundary` and `highBoundary` sections. |

## Jira evidence

### Explicit Jira keys from commits/patches

- All 25 explicit keys listed in Scope were snapshotted successfully. Use `bun run jira:search snapshot FHIR-XXXXX` to reopen.
- High-relevance issues:
  - `FHIR-44817` (Applied, Not Persuasive with Modification): resolution says "Make it clear that Patient.id is a FHIR.id and Patient.id is not a System.String" and explains Resource.id is intended to be an `id` datatype but cannot have extensions. This conflicts with current page lines 180-181.
  - `FHIR-45455` (Applied, Persuasive, Highest): requested bookmarks for each function, clearer `slice()` parameters, and examples for FHIR-specific functions. Current duplicate anchor and invalid example are related to the implementation area.
  - `FHIR-42983` (Applied, Persuasive with Modification): records detailed intended `slice()` semantics: filter current collection using the specified profile; allow canonical or `%profile`; return empty for unresolved/missing/unmatched cases; note validation-engine dependency.
  - `FHIR-53208` (Applied, Persuasive): remove duplicate `ofType` declaration and low/highBoundary functions now in FHIRPath spec. Current page reflects these removals.
  - `FHIR-20846` (Published, Persuasive with Modification): requested factory functions for common datatypes; current Type Factory section is directly connected.
  - `FHIR-38872` (Published, Persuasive with Modification): requested support for operations in expressions and led to `%server` API.
  - `FHIR-46082` (Applied/Persuasive with Modification): clarifies which terminology server `%terminologies` uses and adds `.at(url)`.
  - `FHIR-48379` (Applied): explains the inter-version maximum-cardinality warning.
  - `FHIR-33539` (Applied): adds SDC-related `weight()` and guidance links.
  - `FHIR-41302`, `FHIR-41458`, `FHIR-44719`, `FHIR-48737`: clarify empty/primitive function semantics.
- Lower-relevance/contextual explicit keys:
  - `FHIR-25431` and `FHIR-44047` are editorial terminology/punctuation.
  - `FHIR-48828` is a link/path adjustment for TestScript/testing resources.
  - `FHIR-34417` touched the page but does not appear to leave a current actionable issue after later removals.

### Other Jira issues that plausibly explain the same changed text

- Jira phrase search for `"Resource.id" "System.String"` also returned `FHIR-25262`, `FHIR-25274`, `FHIR-45989`, and other type-related issues. These are context for Resource.id history, but the actionable mismatch is already directly supported by `FHIR-44817`, its Zulip thread, and current source lines.
- Jira phrase search for `"maximum cardinality" FHIRPath` returned `FHIR-48379` and unrelated/context hits (`FHIR-49571`, `FHIR-36738`).
- Jira phrase search for `"FHIRPath.slice"` returned `FHIR-42983`.

### Context-only Jira hits that should not drive action

- `FHIR-49571`, `FHIR-36738`, `FHIR-25262`, `FHIR-25274`, `FHIR-45989`, `FHIR-38631`, `FHIR-36036`, and `FHIR-31055` appeared in phrase searches but were not needed to explain the R4-to-R6 page changes.
- Searches for `"HumanName.system" "FHIRPath"` and `"fn-subsumes"` found no Jira issues; these look like newly noticed page defects rather than tracked decisions.

## Zulip evidence

- `#fhirpath > Is a resource id a String?`, snapshot command `bun run zulip:search snapshot fhirpath "Is a resource id a String?"`, URL `https://chat.fhir.org/#narrow/stream/fhirpath/topic/Is%20a%20resource%20id%20a%20String%3F`.
  - 2024-01-29 to 2024-02-26: Paul Lynch asks whether `Patient.id is System.String = true` and `Patient.id is FHIR.id = false`; then files `FHIR-44817`.
  - 2025-03-31: Brian Postlethwaite rechecks before applying; Grahame states "Patient.id is System.String = false". This supports the Jira resolution and contradicts the current page example.
- `#fhirpath > .slice()`, snapshot command `bun run zulip:search snapshot fhirpath ".slice()"`, URL `https://chat.fhir.org/#narrow/stream/fhirpath/topic/.slice()`.
  - Grahame says original `slice()` definition is ambiguous and plans to implement it as a filter on the list of elements.
  - Brian asks about mismatched focus/profile; Grahame says "nah just return {}", matching the empty-return intent.
- `#conformance > co-occurrence of slices`, snapshot command `bun run zulip:search snapshot conformance "co-occurrence of slices"`, URL `https://chat.fhir.org/#narrow/stream/conformance/topic/co-occurrence%20of%20slices`.
  - Josh asks how to express slice co-occurrence.
  - Grahame says the `slice()` function does not appear implemented.
  - Brian says examples/bookmarks are probably worth adding and reports `FHIR-45455`.
- Escaped Jira-key Zulip searches:
  - `"FHIR-44817"` returned the Resource.id thread plus a Shorthand context hit.
  - `"FHIR-42983"` returned the `.slice()` thread and a later `#fhir/infrastructure-wg > fhirpath slice() definition` hit.
  - `"FHIR-45455"` returned the `co-occurrence of slices` thread.
  - `"FHIR-46082"` returned `#fhirpath > %terminologies`.
  - `"FHIR-48379"` and `"FHIR-53208"` returned no Zulip hits in the local index.
- Phrase searches for `Observation.value.ofType(canonical)` and `HumanName.system` did not identify a Zulip rationale; these appear to be current-page defects rather than documented decisions.

## Confluence evidence

- `234784975` / "FHIR Infrastructure Minutes WGM 202405 - Dallas", command `bun run confluence:search snapshot 234784975`.
  - References `FHIR-44817` and `build.fhir.org/fhirpath.html#types`; minutes record tracker review for "Clarify whether a resource id is a String."
- `197331139` / "FHIR Infrastructure Minutes CC 2023-10-23", command `bun run confluence:search snapshot 197331139`.
  - References `FHIR-42983`; minutes say the FHIRPath page's `slice()` definition was unclear, discuss whether scope is entire resource or element, and record Persuasive with Modification vote 9-0-0.
- `239211981` / "FHIR Infrastructure Minutes CC 2024-05-06", command `bun run confluence:search snapshot 239211981`.
  - References `FHIR-45455`; minutes record discussion and Persuasive vote 11-0-0.
- `248715196` / "FHIR Infrastructure Minutes CC 2024-07-01", command `bun run confluence:search snapshot 248715196`.
  - References `FHIR-46082`; minutes record Persuasive with Modification vote 5-0-0.
- `281219681` / "FHIR Infrastructure Minutes WGM 202501 - Virtual", command `bun run confluence:search snapshot 281219681`.
  - References `FHIR-48379`; minutes note changing cardinality may break FHIRPath and that a ticket should be raised for FHIRPath.
- `403869367` / "FHIR Infrastructure Minutes CC 2025-11-17", command `bun run confluence:search snapshot 403869367`.
  - References `FHIR-53208`; minutes say "Approve this PR" with 11-0-0 vote.
- `265096084` / "FHIR Infrastructure Minutes WGM 202409 - Atlanta", command `bun run confluence:search snapshot 265096084`.
  - References `FHIR-33539`; minutes record an option to link to SDC extensions/functions, add `ordinal()`/`weight()`-type function to core FHIRPath extensions, and add QuestionnaireResponse links.
- `391650086` / "FHIRPath Usage and Extensions", command `bun run confluence:search snapshot 391650086`.
  - The page now linked from `source/fhirpath.html` as the externalized usage/extension inventory.

## Timeline

| Date | Clock | Evidence | Event |
|---:|---|---|---|
| 2019-04-15 | Jira created | `FHIR-20846` | Request to align transforms and FHIRPath, including factory functions. |
| 2022-05-16 | Source commit | `a1a727070c2c` | Adds `integer64` mapping. |
| 2022-08-26 | Source commit | `b97b82820271` | Clarifies function behavior for multiple/empty inputs. |
| 2022-12-08 | Source commit | `36365345c78a` | Adds General Service API for `FHIR-38872`. |
| 2023-02-23 | Source commit | `662229e42965` | Adds Type Factory API for `FHIR-20846`. |
| 2023-10-22 | Zulip discussion | `#fhirpath > .slice()` | Original `slice()` ambiguity discussed. |
| 2023-10-23 | Jira vote/minutes | `FHIR-42983`; Confluence `197331139` | `slice()` clarification accepted 9-0-0. |
| 2024-01-29 to 2024-02-26 | Zulip discussion | `#fhirpath > Is a resource id a String?` | Resource.id typing question raised and converted to `FHIR-44817`. |
| 2024-05-02 to 2024-05-03 | Zulip discussion | `#conformance > co-occurrence of slices` | Discussion leads to `FHIR-45455` for examples/bookmarks and slice parameters. |
| 2024-05-06 | Jira vote/minutes | `FHIR-45455`; Confluence `239211981` | Bookmarks/examples/slice parameter work accepted. |
| 2024-05-20 | Jira vote | `FHIR-44817` | Resolution says Resource.id is FHIR.id and not System.String. |
| 2024-07-01 | Jira vote/minutes | `FHIR-46082`; Confluence `248715196` | `%terminologies` server selection accepted with modification. |
| 2024-09 WGM | Minutes | Confluence `265096084` | SDC/FHIRPath guidance and `weight()` approach discussed for `FHIR-33539`. |
| 2025-03-18 | Source commit | `9ea8288fce31` | Adds SDC guidance and `weight()` function. |
| 2025-03-31 | Zulip later reassessment | `#fhirpath > Is a resource id a String?` | Grahame says `Patient.id is System.String = false`. |
| 2025-10-22 | Source commits | `d624d314`, `f2a36b42`, `8a7bd856`, `4818554`, `cdd704b3` | External usage link, duplicate `ofType` removal, cardinality warning, `%terminologies.at`, formatting. |
| 2025-10-31 | Source commit | `270e0ceb` | R6 normative changes remove draft wrappers. |
| 2025-11-03 | Source commit | `415c4e014bc1` | Adds current Resource.id example, apparently opposite to `FHIR-44817`. |
| 2025-11-04 | Source commits | `bbae11ec`, `8926ed30`, `f3149e95` | Adds anchors/examples and applies `slice()` clarification. |
| 2025-11-17 | Confluence/Jira vote | Confluence `403869367`, `FHIR-53208` | PR to remove moved FHIRPath content approved 11-0-0. |
| 2025-12-15 | Source commit | `0c8e9b52f173` | Removes low/highBoundary sections for `FHIR-53208`. |

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/fhirpath.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html" && echo "new exists"`
  - Established both old and new pages exist.
- Direct diff/history:
  - `git -C "$TREE" --no-pager diff --find-renames "$OLD" "$NEW" -- "source/fhirpath.html" > .../direct.diff`
  - `git -C "$TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' "$OLD..$NEW" -- "source/fhirpath.html" > .../history.tsv`
  - Established 1,809 diff lines and 46 page-touching commits.
- Commit inspection:
  - Saved selected `git show --stat --patch` outputs under `.../files/fhirpath/patches/`.
  - `git blame -L 177,182 -- source/fhirpath.html` tied Resource.id example to `415c4e014bc1`.
  - `git blame -L 346,349`, `-L 432,433`, `-L 975,977`, `-L 650,650`, `-L 689,689`, `-L 736,736` tied current defect candidates to source commits.
- Full page read:
  - `wc -l ".../source/fhirpath.html"` returned 1,260 newline count; `view` chunks read lines `1-1261`.
- Current-page cross-checks:
  - Duplicate-anchor script found only `fn-subsumes` duplicated at lines `[432, 975]`.
  - `rg` + `view` on `source/observation/structuredefinition-Observation.xml:682-728` verified `Observation.value[x]` types do not include `canonical`.
- Jira:
  - Snapshotted all explicit keys with `bun run jira:search snapshot FHIR-XXXXX`.
  - Phrase searches included `"maximum cardinality" FHIRPath`, `"FHIRPath.slice"`, `"Resource.id" "System.String"`, `"HumanName.system" "FHIRPath"`, and `"fn-subsumes"`.
  - Failed/negative searches that affect confidence: no Jira hits for `HumanName.system` or `fn-subsumes`.
- Zulip:
  - Initial unquoted key FTS searches failed due hyphen parsing; repeated as quoted strings.
  - Quoted key searches found relevant hits for `FHIR-44817`, `FHIR-42983`, `FHIR-45455`, and `FHIR-46082`; no hits for `FHIR-48379` or `FHIR-53208`.
  - Snapshotted `fhirpath "Is a resource id a String?"`, `fhirpath ".slice()"`, and `conformance "co-occurrence of slices"`.
- Confluence:
  - `bun run confluence:search refs jira FHIR-XXXXX` and `fts` were run for high-relevance keys.
  - Snapshotted pages `234784975`, `197331139`, `239211981`, `248715196`, `281219681`, `403869367`, `265096084`, and `391650086`.

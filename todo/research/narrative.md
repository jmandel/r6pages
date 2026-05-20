# narrative research appendix

## Scope and coverage

- Page path: `source/narrative.html`.
- Older version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- Newer version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: the page exists in both trees (`old exists`, `new exists`). The old file has 434 lines; the new file has 466 lines.
- Newer page read end-to-end: yes, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/narrative.html:1-466`.
- Direct diff size: `source/narrative.html | 116 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++---------------------------------`, 74 insertions and 42 deletions.
- Source history count: 15 commits touched this page between the two commits.
- Explicit Jira keys found in commit subjects/patch context: `FHIR-37792`, `FHIR-34314`, `FHIR-25684`, `FHIR-22768`, `FHIR-49732`, `FHIR-44047`.
- Jira coverage: snapshots taken for all explicit keys, plus adjacent current/later hits `FHIR-53999` and `FHIR-57292`. Phrase searches were run for `nolist unlist`, narrative root `div`, `Composition.section.text originalText`, `img src Binary narrative`, `xhtml defined type`, `root element xhtml div`, and `contained Binary XHTML narrative`.
- Zulip coverage: literal issue-key SQL searches plus snapshots for the most relevant threads: `#implementers > HL7-defined narrative CSS classes: nolist vs. unlist`, `#implementers > Narrative with non-div as the root tag`, `#implementers > xhtml type definition`, `#questionnaire > Smart question`, `#conformance > Validating References in Narrative`, and `#fhir/infrastructure-wg > XHTML definition`.
- Confluence coverage: snapshots for FHIR-I minutes pages `134946171`, `81010491`, `82903557`, `345089269`, `325460605`, and `234784975`.
- Caveats: initial Zulip FTS searches for unquoted Jira keys failed because FTS parsed hyphens as operators; I reran those as SQL `content LIKE` searches. A Confluence FTS query for `Composition.section.text originalText` also hit FTS punctuation syntax and was treated as a failed search; Jira/source evidence for that change is still strong.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New page full file | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/narrative.html:1-466` | Current R6 ballot4 source page, read end-to-end. |
| Source | XHTML type section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/narrative.html:87-110` | Added/relocated `xhtml` section from `FHIR-34314`/`FHIR-25684`. |
| Source | XHTML allowed content | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/narrative.html:112-122` | Current rule allows `a` elements with `href` but does not explain FHIR-resource href display semantics. |
| Source | Image references | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/narrative.html:189-217` | `FHIR-22768` guidance on contained Binary image references and browser preprocessing. |
| Source | Styling classes | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/narrative.html:245-294` | `FHIR-49732` adds `nolist` next to `unlist`. |
| Source | Linking section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/narrative.html:338-406` | Narrative/data linking guidance and `FHIR-37792` example. |
| Source | HTTP url-fixing section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/http.html:1828-1849` | Related spec text requires replacement of narrative `<a href="">` and `<img src="">` links. |
| Commit | Template wrapper | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a, PR https://github.com/HL7/fhir/pull/1295 | Mechanical HTML template update. |
| Commit | `FHIR-37792` narrative example | `33e68c1eda7168d4cc4282e3ced2a12256037b39`, https://github.com/HL7/fhir/commit/33e68c1eda7168d4cc4282e3ced2a12256037b39, PR https://github.com/HL7/fhir/pull/2202 | Changes second originalText example to `Composition.section.text`. |
| Commit | `FHIR-34314` xhtml section | `de45347b3f5c7bb159ea4b78ba1efce9cc982485`, https://github.com/HL7/fhir/commit/de45347b3f5c7bb159ea4b78ba1efce9cc982485, PR https://github.com/HL7/fhir/pull/2202 | Adds explicit `xhtml` section/table. |
| Commit | `FHIR-25684` root div wording | `450fc3172fe21051b0546ee6a5bbc8afe773d04b`, https://github.com/HL7/fhir/commit/450fc3172fe21051b0546ee6a5bbc8afe773d04b, PR https://github.com/HL7/fhir/pull/2220 | Clarifies root element is an XHTML `div`. |
| Commit | `FHIR-22768` image note | `5ae11b752bc72888f47a66a496144080b094fe28`, https://github.com/HL7/fhir/commit/5ae11b752bc72888f47a66a496144080b094fe28, PR https://github.com/HL7/fhir/pull/2638 | Adds browser preprocessing note for `img src="#..."`. |
| Commit | `FHIR-49732` nolist/unlist | `d58d5482293fa7c56b050faa3007413e9abe662d`, https://github.com/HL7/fhir/commit/d58d5482293fa7c56b050faa3007413e9abe662d, PR https://github.com/HL7/fhir/pull/3901 | Adds `nolist` duplicate class. |
| Commit | `FHIR-44047` punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627, PR https://github.com/HL7/fhir/pull/3951 | Editorial `e.g.,` punctuation cleanup. |
| Jira | `FHIR-37792` | https://jira.hl7.org/browse/FHIR-37792; reopen: `bun run jira:search snapshot FHIR-37792` | Formal source for Composition.section.text narrative linking change. |
| Jira | `FHIR-34314` | https://jira.hl7.org/browse/FHIR-34314; reopen: `bun run jira:search snapshot FHIR-34314` | Formal source for explicit `xhtml` type guidance. |
| Jira | `FHIR-25684` | https://jira.hl7.org/browse/FHIR-25684; reopen: `bun run jira:search snapshot FHIR-25684` | Formal source for root tag must be `div`. |
| Jira | `FHIR-22768` | https://jira.hl7.org/browse/FHIR-22768; reopen: `bun run jira:search snapshot FHIR-22768` | Formal source for contained Binary image guidance. |
| Jira | `FHIR-49732` | https://jira.hl7.org/browse/FHIR-49732; reopen: `bun run jira:search snapshot FHIR-49732` | Formal source for `nolist`/`unlist` compatibility fix. |
| Jira | `FHIR-44047` | https://jira.hl7.org/browse/FHIR-44047; reopen: `bun run jira:search snapshot FHIR-44047` | Editorial punctuation tracker; still `Resolved - change required` in snapshot. |
| Jira | `FHIR-53999` | https://jira.hl7.org/browse/FHIR-53999; reopen: `bun run jira:search snapshot FHIR-53999` | Later unresolved R6 issue identifying href/narrative ambiguity; drives the action finding. |
| Jira | `FHIR-57292` | https://jira.hl7.org/browse/FHIR-57292; reopen: `bun run jira:search snapshot FHIR-57292` | Later submitted xhtml baseDefinition question; context only for this page review. |
| Zulip | `nolist` vs `unlist` | https://chat.fhir.org/#narrow/stream/implementers/topic/HL7-defined%20narrative%20CSS%20classes%3A%20nolist%20vs.%20unlist; reopen: `bun run zulip:search snapshot implementers "HL7-defined narrative CSS classes: nolist vs. unlist"` | Grahame says the only possible fix is to define both. |
| Zulip | Non-div root | https://chat.fhir.org/#narrow/stream/implementers/topic/Narrative%20with%20non-div%20as%20the%20root%20tag; reopen: `bun run zulip:search snapshot implementers "Narrative with non-div as the root tag"` | Discussion leading to `FHIR-25684`. |
| Zulip | xhtml type definition | https://chat.fhir.org/#narrow/stream/implementers/topic/xhtml%20type%20definition; reopen: `bun run zulip:search snapshot implementers "xhtml type definition"` | Early implementer confusion about where `xhtml` is defined. |
| Zulip | Contained Binary image | https://chat.fhir.org/#narrow/stream/questionnaire/topic/Smart%20question; reopen: `bun run zulip:search snapshot questionnaire "Smart question"` | Discussion leading to `FHIR-22768`. |
| Zulip | Later narrative references validation | https://chat.fhir.org/#narrow/stream/conformance/topic/Validating%20References%20in%20Narrative; reopen: `bun run zulip:search snapshot conformance "Validating References in Narrative"` | Later discussion notes the page's contained Binary example interacts with DOM-3/reference validation. |
| Confluence | `FHIR-37792` minutes | https://confluence.hl7.org/spaces/FHIRI/pages/134946171/FHIR+Infrastructure+Minutes+CC+2022-08-01; reopen: `bun run confluence:search snapshot 134946171` | FHIR-I persuasive-with-mod vote. |
| Confluence | `FHIR-34314` minutes | https://confluence.hl7.org/spaces/FHIRI/pages/81010491/FHIR+Infrastructure+Minutes+CC+20211129; reopen: `bun run confluence:search snapshot 81010491` | FHIR-I xhtml length/definition discussion and vote. |
| Confluence | `FHIR-25684` minutes | https://confluence.hl7.org/spaces/FHIRI/pages/82903557/FHIR+Infrastructure+Minutes+CC+20200420; reopen: `bun run confluence:search snapshot 82903557` | FHIR-I persuasive vote. |
| Confluence | `FHIR-49732` WGM minutes | https://confluence.hl7.org/spaces/FHIRI/pages/325460605/FHIR+Infrastructure+Minutes+WGM+202505+-+Madrid; reopen: `bun run confluence:search snapshot 325460605` | Initial review wanted Grahame input before final vote. |
| Confluence | `FHIR-49732` final minutes | https://confluence.hl7.org/spaces/FHIRI/pages/345089269/FHIR+Infrastructure+Minutes+CC+2025-06-09; reopen: `bun run confluence:search snapshot 345089269` | Final persuasive vote. |
| Confluence | `FHIR-44047` WGM minutes | https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas; reopen: `bun run confluence:search snapshot 234784975` | Prior ballot minutes say `FHIR-44047 will fix`. |

## Change summary

### XHTML type definition and root element guidance - substantive/semantic guidance

R6 adds an explicit `XHTML Content` section and table at `source/narrative.html:87-110`. The table says `xhtml` has no extensions, no intrinsic length limit, XML representation `xhtml:div`, JSON representation as a string encoding the XHTML `div`, and that the `id` property becomes `xml:id` on the root XHTML `div`.

This is primarily explained by:

- `FHIR-34314` (`de45347b3f5c7bb159ea4b78ba1efce9cc982485`): add explicit section for the `xhtml` type and note no intrinsic limit, no extensions, and `id`/`xml:id`.
- `FHIR-25684` (`450fc3172fe21051b0546ee6a5bbc8afe773d04b`): clarify that the root tag is a `div`.

No direct intent mismatch was found for these applied changes. A later submitted issue, `FHIR-57292`, questions whether the generated `xhtml` StructureDefinition should derive from PrimitiveType/DataType rather than Element, but it is not specifically a defect in this narrative page.

### Narrative linking examples - example change plus semantic guidance

The linking section now uses generated extension links with `[%extensions-location%]StructureDefinition-narrativeLink.html` and `StructureDefinition-originalText.html` (`source/narrative.html:338-344`). The JSON example now includes `"status" : "generated"` (`source/narrative.html:347-353`). The second XML example now targets `Composition.section.text` rather than `Composition.text` (`source/narrative.html:373-389`), matching `FHIR-37792`.

This is an example/guidance change with compatible substantive intent. No page-level mismatch was found for the applied example change.

### Image references to contained Binary/DocumentReference - semantic guidance

R6 adds an implementation note after the image reference example (`source/narrative.html:212-217`) saying browser display of `img src` values starting with `#` needs preprocessing by replacing with a `data:` URL, hosting the binary content, or intercepting browser events. This maps directly to `FHIR-22768` and its originating Zulip `#questionnaire > Smart question` thread.

A later Zulip `#conformance > Validating References in Narrative` thread noted that the page's example exposes a validation issue with `dom-3` and contained Binary references. That later discussion was about validators/invariants rather than a direct mismatch in the page text.

### XHTML styling classes - substantive compatible correction

R6 adds `nolist` as a duplicate of `unlist` in the built-in narrative CSS class table and adds a note that the duplicate is intentional (`source/narrative.html:282-289`). This implements `FHIR-49732`. A cross-check found both classes in the linked runtime stylesheet source (`implementations/fhir-runtime.css:21-22`) and `unlist` in the example page/source, so the applied fix appears consistent with the resolution to support both names.

### Href/resource-link display semantics - overlooked current-page issue

This was not introduced by a direct R4-to-R6 page diff, but it is visible in the current page and backed by later `FHIR-53999`. The narrative page permits XHTML `a` elements with `href` (`source/narrative.html:112-116`) and explains `img src="#..."` preprocessing (`source/narrative.html:212-217`), while the HTTP page says servers SHALL replace `<a href="">` and `<img src="">` links in narrative (`source/http.html:1832-1838`). The narrative/data linking section only discusses `narrativeLink` and `originalText` extensions (`source/narrative.html:338-343`). `FHIR-53999` says this leaves unclear whether FHIR resources should ever be referenced through narrative `href`, and if so how display implementations should handle those links. This is carried into the actionable file.

### Editorial/mechanical changes

- Template/navigation/metadata: wrapper `<div class="col-12">` removed; work-group header changed to `Responsible Owner`; maturity column/normative macro removed; jQuery paths updated.
- Editorial typo fixes: `ia`/`chosend` to `is`/`chosen`; `e.g.` to `e.g.,` instances; character references in examples normalized to literal quotes for fragment parsing.
- Links/paths: narrative example link renamed from `narrative-example.html` to `narrative-examples.html`; extension links now use `[%extensions-location%]StructureDefinition-...`.

## Source history

| Date | Commit | Subject | Classification | Page effect | PR |
|---|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | update html template | mechanical/template | Removes outer wrapper div. | https://github.com/HL7/fhir/pull/1295 |
| 2022-07-26 | `0684c64b51ea94d2188161d93428ca9c40b567a4` | Fix typos in multi-language narrative guidance | editorial | Fixes `ia`/`chosend` typo. | https://github.com/HL7/fhir/pull/2060 |
| 2022-08-19 | `33e68c1eda7168d4cc4282e3ced2a12256037b39` | FHIR-37792 Clarify intended text targets for narrativeLink and originalText extensions | example/substantive guidance | Changes second example to `Composition.section.text`. | https://github.com/HL7/fhir/pull/2202 |
| 2022-08-19 | `de45347b3f5c7bb159ea4b78ba1efce9cc982485` | FHIR-34314 xhtml is not actually a defined type | substantive clarification | Adds explicit `xhtml` section/table and moves datatype macro near top. | https://github.com/HL7/fhir/pull/2202 |
| 2022-08-23 | `450fc3172fe21051b0546ee6a5bbc8afe773d04b` | https://jira.hl7.org/browse/FHIR-25684 | semantic clarification | Clarifies root element is an XHTML `div` and JSON encodes XHTML div. | https://github.com/HL7/fhir/pull/2220 |
| 2022-08-31 | `0d58d10e724397da66de18b51936bc3c2702e4f7` | typos | example correction | Adds missing `"status" : "generated"` to JSON originalText example. | https://github.com/HL7/fhir/pull/2312 |
| 2023-02-08 | `b3e373388f8137e589fdc6b18beb9ff86a2c23cb` | fix extension links | link fix | Uses `[%extensions-location%]StructureDefinition-...` links. | https://github.com/HL7/fhir/pull/2614 |
| 2023-02-10 | `5ae11b752bc72888f47a66a496144080b094fe28` | FHIR-22768 Document references to Binary from XHTML | semantic guidance | Adds implementation note for `img src="#..."` preprocessing. | https://github.com/HL7/fhir/pull/2638 |
| 2023-02-14 | `4baa8f22bae6d8f787c024219b5842a6cc658bb5` | fix character references for fragment parsing | mechanical/example encoding | Replaces `&quot;` with literal quote characters in source examples. | https://github.com/HL7/fhir/pull/2644 |
| 2023-03-25 | `69b9c5382ca5e4710c851ca8377f242e2c9adeab` | rename narrative examples | link fix | Updates `narrative-example.html` to `narrative-examples.html`. | https://github.com/HL7/fhir/pull/2912 |
| 2025-05-01 | `a581075555b02be851eb33506ac66a982aab61f7` | upgrade jquery | mechanical/template | Updates script paths to `assets/js`. | https://github.com/HL7/fhir/pull/3589 |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | normative changes for R6 | metadata/template | Changes header to `Responsible Owner` and removes maturity column. | https://github.com/HL7/fhir/pull/3901 |
| 2025-10-31 | `605a6ffefb83e002264b0504348dea50144bb951` | more normative. changes | metadata/template | Removes `[%normative page infrastructure%]`. | https://github.com/HL7/fhir/pull/3901 |
| 2025-11-01 | `d58d5482293fa7c56b050faa3007413e9abe662d` | FHIR-49732 Discrepancy between "nolist" and "unlist" for CSS class name when styling XHTML | compatible substantive correction | Adds `nolist` and note that it duplicates `unlist`. | https://github.com/HL7/fhir/pull/3901 |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | FHIR-44047 | editorial | Adds commas after `e.g.` instances. | https://github.com/HL7/fhir/pull/3951 |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-37792` (Published, Persuasive with Modification, compatible substantive, applied for R5). Requested that the second Narrative Linking example point to `Composition.section.text` rather than `Composition.text`, and that narrativeLink/originalText extension text mention `DomainResource.text or Composition.section.text`. The page example change matches the first request.
- `FHIR-34314` (Published, Persuasive with Modification, non-substantive clarification, applied for R5). Requested an explicit `xhtml` type section covering no intrinsic length limit, no extensions, and `id` rendered as `xml:id`. The new `XHTML Content` table matches this.
- `FHIR-25684` (Published, Persuasive, non-substantive clarification, applied for R5). Requested clearer language that the root XHTML tag must be `div`; the page table now says root element is an XHTML `div` and JSON encodes the XHTML `div`.
- `FHIR-22768` (Published, Persuasive with Modification, non-substantive clarification, applied for R5). Requested documentation for rendering XHTML references to contained Binary resources; the page adds an implementation note after the image example.
- `FHIR-49732` (Applied, Persuasive, compatible substantive, applied for R6). Reported `unlist` on the page but `nolist` in stylesheet and proposed defining both in both places. Current page and `implementations/fhir-runtime.css` both include both names.
- `FHIR-44047` (Resolved - change required, Persuasive, correction). Broad punctuation issue for `e.g.,` and `i.e.,`; the page commit applies several `e.g.,` edits. This looks editorial and not page-specific.

### Other Jira issues that plausibly explain or affect the same page concepts

- `FHIR-53999` (Triaged, unresolved, R6 ballot, related pages `FHIR-core-narrative`, `FHIR-core-http`). This later issue directly names a current ambiguity: other core pages imply narrative `href` can point to FHIR resources, while narrative guidance explains extension-based linking and gives only `img src` handling guidance. This is actionable because it affects current reader/implementation behavior.
- `FHIR-57292` (Submitted, unresolved, R6). This later issue questions the `xhtml` StructureDefinition baseDefinition and primitive/DataType classification, citing `FHIR-34314`. It is relevant context for xhtml modeling but not a direct actionable defect in `source/narrative.html`.

### Context-only Jira hits not used for action

- Phrase search for `Composition section text originalText` also found US C-CDA/clinical-document/IPS issues (`FHIR-40899`, `FHIR-41146`, `FHIR-47937`, `FHIR-43316`) that use similar narrative linking concepts but are not changes to this core page.
- Phrase search for `img src Binary narrative` found older/contextual core issues (`FHIR-36032`, `FHIR-13154`, `FHIR-12288`, `FHIR-13823`) and DTR issues (`FHIR-55693`, `FHIR-55401`, `FHIR-55692`). They were not used as action evidence because the explicit `FHIR-22768` history and current `FHIR-53999` concern are more directly relevant.

## Zulip evidence

- `#implementers > HL7-defined narrative CSS classes: nolist vs. unlist` (2025-02-05, https://chat.fhir.org/#narrow/stream/implementers/topic/HL7-defined%20narrative%20CSS%20classes%3A%20nolist%20vs.%20unlist): James Jahns reported the page/stylesheet mismatch; Grahame Grieve replied "it's definitely a mistake and the only possible fix is to define both of them"; James then filed `FHIR-49732`.
- `#implementers > Narrative with non-div as the root tag` (2020-01-24 to 2020-01-27, https://chat.fhir.org/#narrow/stream/implementers/topic/Narrative%20with%20non-div%20as%20the%20root%20tag): James Agnew asked whether JSON narrative could use `<pre>` as the root. Lloyd McKenzie said convention says it is an error; Grahame said the standard is trying to say it must be a `div`. This led to `FHIR-25684`.
- `#implementers > xhtml type definition` (2019-07-09 to 2019-07-13, https://chat.fhir.org/#narrow/stream/implementers/topic/xhtml%20type%20definition): Gino Canessa asked where `xhtml` is formally defined; Grahame pointed to generated `xhtml.profile.json` and advised using StructureDefinitions rather than source spreadsheets. This is background for later `FHIR-34314`.
- `#fhir/infrastructure-wg > XHTML definition` (2022-08-18 to 2022-08-19, https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/XHTML%20definition): Grahame and Gino discussed an implementation detail from `FHIR-34314` about PrimitiveType links on `datatypes.html`; useful for commit rationale but not a page-specific issue.
- `#questionnaire > Smart question` (2019-05-28 to 2019-07-15, https://chat.fhir.org/#narrow/stream/questionnaire/topic/Smart%20question): Paul Lynch asked how XHTML `img src="#something"` would know how to use a contained Binary; Lloyd suggested documenting it, and Paul posted `GF#22768`.
- `#conformance > Validating References in Narrative` (2024-02-08 to 2025-05-06, https://chat.fhir.org/#narrow/stream/conformance/topic/Validating%20References%20in%20Narrative): later validator discussion notes the current narrative page example can fail `dom-3` because the contained Binary is referenced only from narrative. Lloyd said this should be supported; Grahame later said the Java validator ignores DOM-3 and uses custom code enforcing the narrative rules. This is background and related to validation, not a direct page change mismatch.
- Literal issue-key SQL search found no Zulip posts for `FHIR-37792`, `FHIR-22768`, or `FHIR-44047`; it found `FHIR-34314`, `FHIR-25684`, and `FHIR-49732`.

## Confluence evidence

- Page `134946171`, FHIR Infrastructure Minutes CC 2022-08-01: references `FHIR-37792`; tracker section records `FHIR-37792 Persuasive with Mod Motion: Grahame Grieve/Gino Canessa`.
- Page `81010491`, FHIR Infrastructure Minutes CC 20211129: references `FHIR-34314`; tracker text discusses Narrative length, whether whole IG HTML could be placed in Narrative, that `xhtml` is defined at `http://hl7.org/fhir/xhtml.profile.json.html`, and records `Persuasive with Mod Rick Geimer / Grahame Grieve: 17-0-0`.
- Page `82903557`, FHIR Infrastructure Minutes CC 20200420: references `FHIR-25684`; tracker section records `FHIR-25684 Persuasive Motion: Rick Geimer/Christiaan Knaap: 11-0-0`.
- Page `325460605`, FHIR Infrastructure Minutes WGM 202505 - Madrid: references `FHIR-49732`; notes "Want to review with Grahame given publication context."
- Page `345089269`, FHIR Infrastructure Minutes CC 2025-06-09: references `FHIR-49732`; records "Discussed at WGM, but wanted Grahame to chime in. Motion: Persuasive: Gino Canessa / Grahame Grieve : 6-0-0."
- Page `234784975`, FHIR Infrastructure Minutes WGM 202405 - Dallas: references `FHIR-44047`; tracker text says `FHIR-44047 will fix`.
- No Confluence references or FTS hits were found for `FHIR-22768`.

## Timeline

| Date | Clock | Evidence | Event |
|---|---|---|---|
| 2019-07-09 to 2019-07-13 | Zulip discussion | `#implementers > xhtml type definition` | Early implementer confusion about where `xhtml` is formally defined. |
| 2019-06-21 to 2019-06-26 | Zulip discussion | `#questionnaire > Smart question` | Contained Binary image rendering issue discussed; Paul Lynch posts `GF#22768`. |
| 2019-08-20 | Jira vote/resolution | `FHIR-22768` | Resolved Persuasive with Modification; add paragraph about id-referenced source data. |
| 2020-01-24 to 2020-01-27 | Zulip discussion | `#implementers > Narrative with non-div as the root tag` | Root element ambiguity discussed; `FHIR-25684` filed. |
| 2020-04-20 | Confluence/Jira vote | `FHIR-25684`, page `82903557` | FHIR-I persuasive vote, 11-0-0. |
| 2021-11-29 | Confluence/Jira vote | `FHIR-34314`, page `81010491` | FHIR-I persuasive-with-mod vote, 17-0-0. |
| 2022-08-01 | Confluence/Jira vote | `FHIR-37792`, page `134946171` | FHIR-I persuasive-with-mod motion. |
| 2022-08-19 | Source commit | `33e68c1eda7168d4cc4282e3ced2a12256037b39` | Applies `FHIR-37792` page example change. |
| 2022-08-19 | Source commit | `de45347b3f5c7bb159ea4b78ba1efce9cc982485` | Applies `FHIR-34314` `xhtml` section. |
| 2022-08-23 | Source commit | `450fc3172fe21051b0546ee6a5bbc8afe773d04b` | Applies `FHIR-25684` root `div` wording. |
| 2023-02-10 | Source commit | `5ae11b752bc72888f47a66a496144080b094fe28` | Applies `FHIR-22768` image reference implementation note. |
| 2024-02-08 to 2025-05-06 | Zulip later reassessment | `#conformance > Validating References in Narrative` | Validator/DOM-3 implications of narrative-only contained Binary references discussed. |
| 2025-02-05 | Zulip discussion/Jira created | `#implementers > HL7-defined narrative CSS classes: nolist vs. unlist`; `FHIR-49732` | Mismatch found; Grahame says define both; Jira filed. |
| 2025-05-16 | Confluence WGM | page `325460605` | `FHIR-49732` held for Grahame review given publication context. |
| 2025-06-09 | Confluence/Jira vote | `FHIR-49732`, page `345089269` | FHIR-I persuasive vote, 6-0-0. |
| 2025-11-01 | Source commit | `d58d5482293fa7c56b050faa3007413e9abe662d` | Applies `FHIR-49732` to page. |
| 2025-11-03 to 2025-11-06 | Source/PR | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, PR `#3951` | Applies `FHIR-44047` punctuation edits to page. |
| 2026-01-12 | Jira created | `FHIR-53999` | Later unresolved R6 issue flags narrative `href` ambiguity. |
| 2026-05-17 | Jira created | `FHIR-57292` | Later submitted xhtml baseDefinition question. |

## Evidence log

- Confirmed page boundary and line counts:
  - `test -f "$OLD_TREE/source/narrative.html" && echo "old exists"`
  - `test -f "$NEW_TREE/source/narrative.html" && echo "new exists"`
  - `wc -l "$OLD_TREE/source/narrative.html" "$NEW_TREE/source/narrative.html"`
- Reviewed direct diff:
  - `git -C "$NEW_TREE" --no-pager diff --find-renames "$OLD_COMMIT" "$NEW_COMMIT" -- "source/narrative.html"`
- Listed source history:
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' "$OLD_COMMIT..$NEW_COMMIT" -- "source/narrative.html"`
- Inspected all page-touching commits with:
  - `git -C "$NEW_TREE" --no-pager show --color=never --stat --patch <commit> -- "source/narrative.html"`
- Looked up PRs with GitHub CLI:
  - `gh api -H "Accept: application/vnd.github.groot-preview+json" "repos/HL7/fhir/commits/<commit>/pulls"`
- Jira snapshots:
  - `bun run jira:search snapshot FHIR-37792`
  - `bun run jira:search snapshot FHIR-34314`
  - `bun run jira:search snapshot FHIR-25684`
  - `bun run jira:search snapshot FHIR-22768`
  - `bun run jira:search snapshot FHIR-49732`
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search snapshot FHIR-53999`
  - `bun run jira:search snapshot FHIR-57292`
- Jira phrase searches:
  - `bun run jira:search fts "nolist unlist" --limit 20`
  - `bun run jira:search fts "Narrative non div root tag" --limit 20`
  - `bun run jira:search fts "Composition section text originalText" --limit 20`
  - `bun run jira:search fts "img src Binary narrative" --limit 20`
  - `bun run jira:search fts "xhtml defined type" --limit 20`
  - `bun run jira:search fts "root element xhtml div" --limit 20`
  - `bun run jira:search fts "contained Binary XHTML narrative" --limit 20`
- Zulip snapshots:
  - `bun run zulip:search snapshot implementers "HL7-defined narrative CSS classes: nolist vs. unlist"`
  - `bun run zulip:search snapshot implementers "Narrative with non-div as the root tag"`
  - `bun run zulip:search snapshot implementers "xhtml type definition"`
  - `bun run zulip:search snapshot questionnaire "Smart question"`
  - `bun run zulip:search snapshot conformance "Validating References in Narrative"`
  - `bun run zulip:search snapshot "fhir/infrastructure-wg" "XHTML definition"`
- Zulip failed/material searches:
  - Initial FTS searches for `FHIR-37792`, `FHIR-34314`, `FHIR-25684`, `FHIR-22768`, `FHIR-49732`, and `FHIR-44047` failed due hyphen parsing such as `SQLiteError: no such column: 37792`. Reran with SQL `content LIKE '%FHIR-XXXXX%'`.
  - SQL `content LIKE` found no explicit Zulip posts for `FHIR-37792`, `FHIR-22768`, or `FHIR-44047`; it found explicit posts for `FHIR-34314`, `FHIR-25684`, and `FHIR-49732`.
  - SQL search for `(Composition.section.text OR Composition section text) AND originalText` found no Zulip results.
- Confluence searches/snapshots:
  - `bun run confluence:search refs jira FHIR-37792`; `bun run confluence:search snapshot 134946171`
  - `bun run confluence:search refs jira FHIR-34314`; `bun run confluence:search snapshot 81010491`
  - `bun run confluence:search refs jira FHIR-25684`; `bun run confluence:search snapshot 82903557`
  - `bun run confluence:search refs jira FHIR-22768` found no references.
  - `bun run confluence:search refs jira FHIR-49732`; `bun run confluence:search snapshot 325460605`; `bun run confluence:search snapshot 345089269`
  - `bun run confluence:search refs jira FHIR-44047`; `bun run confluence:search snapshot 234784975`
  - `bun run confluence:search fts "Composition.section.text originalText" --limit 20` failed with `fts5: syntax error near "."`.
- Current-page cross-checks:
  - `rg -n "\b(nolist|unlist)\b" <new tree> ...` confirmed both CSS names in `source/narrative.html` and `implementations/fhir-runtime.css`.
  - `rg -n "href.*narrative|Narrative.*href|<a href=\"\"|img src|matching links" "$NEW_TREE/source" --glob "{http.html,narrative.html}"` located the current href/image cross-page ambiguity.

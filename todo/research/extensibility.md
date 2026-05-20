# extensibility research appendix

## Scope and coverage

- Page path: `source/extensibility.html`
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: `source/extensibility.html` exists in both trees; direct diff is modified/no rename.
- Newer page read end-to-end: yes, 648 lines (`source/extensibility.html:1-648`).
- Direct diff size: 464 lines.
- Source history: 30 commits touched this page between the old and new commits.
- Explicit Jira keys found in source history/diff: FHIR-18350, FHIR-18353, FHIR-18355, FHIR-18361, FHIR-18362, FHIR-19359, FHIR-22725, FHIR-22780, FHIR-23867, FHIR-25431, FHIR-26360, FHIR-28143, FHIR-29323, FHIR-31385, FHIR-31656, FHIR-34131, FHIR-36066, FHIR-36738, FHIR-37903, FHIR-42822, FHIR-44047, FHIR-52917, FHIR-53088.
- Jira: snapshotted every explicit key with `bun run jira:search snapshot <KEY>`.
- Zulip: searched issue-key mentions by SQL after raw FTS key searches failed on hyphenated keys; snapshotted the most relevant threads.
- Confluence: searched `refs jira` and FTS for all explicit keys plus distinctive phrases; snapshotted relevant FHIR-I/Vocab minutes.
- Caveats:
  - Initial Zulip FTS searches for raw `FHIR-#####` terms failed because FTS parsed the hyphen as an operator; this was corrected with a SQL key/GF-number search.
  - Confluence FTS phrase searches containing `non-fullURL` and `Extension.url` failed due punctuation parsing; refs searches and punctuation-free phrase searches still found the relevant minutes for FHIR-52917/FHIR-53088.
  - Some keys came from broad commit subjects rather than page-specific edits; those are separated below as context-only.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/extensibility.html:1-648` | Current R6 ballot4 page read end-to-end |
| Source | Extension URL / complex extension bullets | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/extensibility.html:65-70` | Main normative extension URL and full-URL slice rules |
| Source | Simple/complex extension intro | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/extensibility.html:57` | Applied FHIR-23867 area; lacks exact `value[x] 0..0` wording from minutes/Jira |
| Source | Primitive/missing-data guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/extensibility.html:287-310` | Required/extensible binding guidance and visible typos |
| Source | Modifier extension definition/use | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/extensibility.html:315-368` | Applied modifier-extension clarifications |
| Source | Modifier processing rules | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/extensibility.html:409-526` | Applied "process data" nuance |
| Source | Unknown extension preservation vs summary | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/extensibility.html:591-599`, `:615-618` | Body says preserve unknown non-modifier extensions when possible; summary still says ignore other extensions |
| Commit | FHIR-18362 applied change | `acbede90b7f03015ad54c2a1383b13d92a6bc6ec`, https://github.com/HL7/fhir/commit/acbede90b7f03015ad54c2a1383b13d92a6bc6ec | Replaced old "ignore unknown extensions" bullet but left summary wording unchanged |
| Commit | FHIR-23867 simple/complex wording | `12a292220bb95af891f160d4ec59147f262153a0`, https://github.com/HL7/fhir/commit/12a292220bb95af891f160d4ec59147f262153a0 | Adds current simple/complex paragraph |
| Commit | FHIR-52917 full URL slices | `7372dff82aadbe6f4ffb3d0818f3dd7f8a4d50bf`, https://github.com/HL7/fhir/commit/7372dff82aadbe6f4ffb3d0818f3dd7f8a4d50bf | Adds derived complex-extension slice rule |
| Commit | FHIR-53088 URL exception refinement | `c9eb1465db96232b9300125b8a29ff8477acbc21`, https://github.com/HL7/fhir/commit/c9eb1465db96232b9300125b8a29ff8477acbc21 | Refines local child-extension exception; introduced stray apostrophe in URL |
| Jira | FHIR-18362 | https://jira.hl7.org/browse/FHIR-18362; `bun run jira:search snapshot FHIR-18362` | Formal intent to remove/reword unknown-extension ignore recommendation |
| Jira | FHIR-23867 | https://jira.hl7.org/browse/FHIR-23867; `bun run jira:search snapshot FHIR-23867` | Formal intent for exact complex-extension definition fields |
| Jira | FHIR-26360 | https://jira.hl7.org/browse/FHIR-26360; `bun run jira:search snapshot FHIR-26360` | Meaning-code guidance for extension definitions |
| Jira | FHIR-28143 | https://jira.hl7.org/browse/FHIR-28143; `bun run jira:search snapshot FHIR-28143` | Extension.url is a URI reference to canonical URL, not `canonical` datatype with `|version` |
| Jira | FHIR-31385 | https://jira.hl7.org/browse/FHIR-31385; `bun run jira:search snapshot FHIR-31385` | DataAbsentReason cannot bypass required/extensible bindings |
| Jira | FHIR-31656 | https://jira.hl7.org/browse/FHIR-31656; `bun run jira:search snapshot FHIR-31656` | No extensions on `Extension.url` / `Element.id` |
| Jira | FHIR-36738 | https://jira.hl7.org/browse/FHIR-36738; `bun run jira:search snapshot FHIR-36738` | How to define a modifier extension |
| Jira | FHIR-37903 | https://jira.hl7.org/browse/FHIR-37903; `bun run jira:search snapshot FHIR-37903` | Explicit modifier/non-modifier placement rule |
| Jira | FHIR-52917 | https://jira.hl7.org/browse/FHIR-52917; `bun run jira:search snapshot FHIR-52917` | Derived complex-extension profiles must add full-URL slices |
| Jira | FHIR-53088 | https://jira.hl7.org/browse/FHIR-53088; `bun run jira:search snapshot FHIR-53088` | Clarifies local child extension slices only when defining complex extension based on Extension |
| Zulip | Max dose per course | https://chat.fhir.org/#narrow/stream/implementers/topic/Max%20dose%20per%20course; `bun run zulip:search snapshot implementers "Max dose per course"` | Rationale for FHIR-19359: modifier depends on changing meaning, not generic safety |
| Zulip | Extension.url optional version | https://chat.fhir.org/#narrow/stream/implementers/topic/Can%20%2F%20should%20an%20Extension.url%20contain%20an%20optional%20version%3F; `bun run zulip:search snapshot implementers "Can / should an Extension.url contain an optional version?"` | Rationale for FHIR-28143 |
| Zulip | modifierExtension | https://chat.fhir.org/#narrow/stream/fhirpath/topic/modifierExtension; `bun run zulip:search snapshot fhirpath "modifierExtension"` | Rationale for FHIR-36738/root `isModifier` clarification |
| Zulip | Extension meaning details | https://chat.fhir.org/#narrow/stream/implementers/topic/inline%20details%20from%20extension%20definitions; `bun run zulip:search snapshot implementers "inline details from extension definitions"` | Rationale around FHIR-26360 |
| Zulip | Extension.url cannot have extensions | https://chat.fhir.org/#narrow/stream/implementers/topic/XML%20representation%20of%20extension%20on%20Extension.url; `bun run zulip:search snapshot implementers "XML representation of extension on Extension.url"` | Rationale for FHIR-31656 |
| Zulip | Later DAR/binding discussion | https://chat.fhir.org/#narrow/stream/implementers/topic/Can%20we%20add%20extension%20data-absent-reason%20for%20mandatory%20e... | Later community discussion consistent with FHIR-31385 semantics |
| Confluence | FHIR-23867 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/66933824/FHIR+Infrastructure+Minutes+CC+20191125; `bun run confluence:search snapshot 66933824` | Minutes say spec should note `value[x] must be 0..0` and one or more child extensions |
| Confluence | FHIR-52917 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/358879917/FHIR+Infrastructure+Minutes+WGM+202509+-+Pittsburgh; `bun run confluence:search snapshot 358879917` | Minutes support full-URL rule and naming-collision rationale |
| Confluence | FHIR-53088 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/403869367/FHIR+Infrastructure+Minutes+CC+2025-11-17; `bun run confluence:search snapshot 403869367` | Minutes record "Will update the text" / persuasive with modification |

## Change summary

- Extension page metadata/template/navigation: metadata table changed from WG/FMM/status plus normative include to "Responsible Owner" and status only; new footer script paths. Category: metadata/template/navigation and mechanical/noise.
- Extension element definition and URL rules:
  - Added simple vs complex extension explanation: simple extensions have value/no nested extensions; complex extensions have nested extensions/no value. Category: semantic guidance, tied to FHIR-23867 but potentially incomplete versus Jira/minutes.
  - Added rule that extensions are not allowed on `Extension.url` or `Element.id`. Category: substantive/normative; FHIR-31656.
  - Changed `url` from "canonical URL" to "reference to the canonical URL" and later narrowed the local child-extension exception for complex extension definitions based on `Extension`. Category: substantive/normative; FHIR-28143 and FHIR-53088.
  - Added complex-extension slicing guidance: complex extensions SHOULD use open slicing, but derived profiles adding slices SHALL use full URLs. Category: substantive/normative; FHIR-52917.
  - Added SHOULD guidance to declare a meaning code on the extension root when clearly defined by a code. Category: semantic guidance; FHIR-26360.
- Examples and representation:
  - Extension definition links now route through `[%extensions-location%]StructureDefinition-...`.
  - XML examples use literal quotes instead of `&quot;` for fragment parsing.
  - Added RDF/Turtle explanation and example. Category: example change / editorial.
- Primitive datatype extension and missing-data guidance:
  - Added "Extensions on Primitive Datatypes" section.
  - Added guidance that DataAbsentReason/nullFlavor/expression can explain missing primitive values but cannot bypass required or extensible binding requirements. Category: semantic guidance / substantive conformance clarification; FHIR-31385.
  - Existing special-case missing-data example typo fixed (`<valueCode value="unknown"/>`). Category: example correction; FHIR-34131.
- Modifier extensions:
  - Added "not safe" definition for when ordinary extensions must instead be modifier extensions. Category: semantic guidance; FHIR-19359, supported by Zulip.
  - Reworked "refuse to process" language and defined "processing the data of" to limit the scope of the requirement. Category: substantive/semantic guidance; FHIR-18353/FHIR-18355.
  - Clarified modifier extensions are allowed at the base of a domain resource, in class-like elements, and selected datatypes. Category: correction; FHIR-18350.
  - Added root `isModifier` rule: if true, extension SHALL appear only in `modifierExtension`; if false, only in `extension`; regular extensions cannot be constrained into modifiers. Category: substantive/normative; FHIR-36738/FHIR-37903.
  - Clarified updating resources/elements with unknown modifier extensions and changed non-modifier guidance to preserve when possible instead of reject/ignore. Category: substantive/normative; FHIR-18361/FHIR-18362.
- Editorial/mechanical:
  - Broad punctuation/type-name cleanup (`e.g.,`, `i.e.,`, `datatype`), link casing fixes, typo correction for `interpretted`, jQuery upgrade, and R6 normative template changes.
  - Current page still contains reader-facing typos and one malformed canonical URL; see actions.

## Source history

| Commit | Date | Subject | Page-specific assessment |
|---|---:|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Mechanical/template |
| `5348543e9e67e7475cb9e38a25d9b815c90b07e3` | 2022-03-17 | Fix FHIR-34131 | Corrects DataAbsentReason XML example |
| `67ee800fd2ddfec4ee1fbcc42d293789a7429077` | 2022-08-18 | FHIR-19359 Clarify the understanding and documentation of extensions | Adds "not safe" definition for modifier extension choice |
| `cc4787a87875b6ecb6291c5b3091feb1fe649a7b` | 2022-08-18 | FHIR-22725 Explain whether maxValueSet prevents use of additional/translation codes | Patch only fixes link syntax in FHIR-19359 text; key is context-only for this page |
| `4739b64e17490a52f316d16b3f889525d8b423d5` | 2022-08-18 | FHIR-36738 Extension / ElementDefinition Clarifications | Adds how to define modifier extensions using root `isModifier` |
| `a7a9de9de5aac39956783378d73bbacc3a320891` | 2022-08-18 | FHIR-31656 Clarify/Specify that Extension.url cannot have extensions similar to Element.id | Adds no-extensions rule for `Extension.url`/`Element.id` |
| `f6c7cdf7d6b9f23831f950a4cacec60fd8678694` | 2022-08-21 | FHIR-26360 Add Meaning Code to Extension | Adds SHOULD guidance for extension root code |
| `3946ca05fec8ee0fea1bcd8de309bf1d6e447ca5` | 2022-08-21 | FHIR-31385 Make expectations around 'required' super-explicit | Adds primitive/DAR required/extensible binding section |
| `9cee2b12d67a79dc05b7176be66fb200fad24fa8` | 2022-08-21 | FHIR-18361 Be clearer about not updating resources with unknown modifiers | Narrows update prohibition to impacted resource/element/descendant scope |
| `d095c440f325f9a3a3adf28bcad4c636839f1b5b` | 2022-08-21 | FHIR-18353 Need more nuance on "refuse to process" | Adds definition of "processing the data of" and narrows refusal rule |
| `12a292220bb95af891f160d4ec59147f262153a0` | 2022-08-23 | FHIR-23867 Clarify simple vs complex extensions | Adds simple/complex paragraph, but not exact `value[x] 0..0` wording |
| `c46ff00cc7bffce09464c5e632054d767672c77c` | 2022-08-27 | FHIR-18350 Change to domain resource, drop or | Corrects modifier extension location wording |
| `cab5cb7cfb379a21ea246965fd6300d963d32876` | 2022-08-27 | FHIR-18355 Do not process has more options than just reject | Adds options for excluding affected child elements and moves key paragraph up |
| `acbede90b7f03015ad54c2a1383b13d92a6bc6ec` | 2022-08-29 | FHIR easy changes FHIR-18362, FHIR-29323,FHIR-22780,FHIR-36066 | Page-specific change is FHIR-18362 preservation wording |
| `34f08837d9a4e13f9b9101a7280c205102450804` | 2022-08-31 | FHIR-28143 Clarify spec language around extension URLs | Changes "canonical URL" to "reference to the canonical URL" |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Editorial terminology consistency |
| `e1276243c6d167a3eb38b1effd6410565ec0039b` | 2023-01-27 | Extensibility explanations, examples, typos and TOC improvements | Adds RDF explanation/example and editorial fixes |
| `b3e373388f8137e589fdc6b18beb9ff86a2c23cb` | 2023-02-08 | fix extension links | Link location/casing fixes |
| `4baa8f22bae6d8f787c024219b5842a6cc658bb5` | 2023-02-14 | fix character references for fragment parsing | Mechanical/example quote changes |
| `d461d9831352eb489c8c77466208c8c7399c21e1` | 2023-02-16 | FHIR-37903 Clarification on modifier extensions | Adds explicit extension vs modifierExtension placement rule |
| `60e98c41f6c5fab597bbdb8d7ec41898ca4ec777` | 2023-02-24 | more QA | Introduces `managable` typo |
| `4118eb9ddb6eabe52c56c903b3932f27c2c42e38` | 2023-03-14 | remove content now moved to extensions IG, and fix broken links | Link case fix |
| `69b235edbd912243e94ef66ac9bc5cd64c568431` | 2023-12-09 | #FHIR-42822 Typos is resource text | Corrects `interpretted` to `interpreted` |
| `a581075555b02be851eb33506ac66a982aab61f7` | 2025-05-01 | upgrade jquery | Mechanical script path changes |
| `8244937cafb494f6c637de64b22982826c5533db` | 2025-10-22 | Fix extensibility example in RDF; Fix links; Editorial improvements & typos | Adds RDF `fhir:l` line |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Metadata/template normative change |
| `605a6ffefb83e002264b0504348dea50144bb951` | 2025-10-31 | more normative. changes | Removes normative include |
| `7372dff82aadbe6f4ffb3d0818f3dd7f8a4d50bf` | 2025-11-03 | FHIR-52917 Prevent derived profiles of complex extensions from adding non-fullURL slices | Adds full-URL slices rule |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Punctuation cleanup for `e.g.,`/`i.e.,` |
| `c9eb1465db96232b9300125b8a29ff8477acbc21` | 2025-12-15 | FHIR-53088 Clarify that complex extensions can't be profiled to add new 'local' components | Refines URL exception; leaves stray apostrophe in canonical URL |

## Jira evidence

### Explicit Jira keys from commits/patches

| Key | Status/resolution from snapshot | Relevance to this page |
|---|---|---|
| FHIR-18350 | Published / Persuasive | Exact wording change: "base of a domain resource..." |
| FHIR-18353 | Published / Persuasive with Modification | Exact "process the data of" definition and refusal wording |
| FHIR-18355 | Published / Persuasive | Exact expanded options for unrecognized modifier extensions |
| FHIR-18361 | Published / Persuasive with Modification | Exact unknown modifier update prohibition |
| FHIR-18362 | Published / Persuasive with Modification | Exact preservation-vs-ignore guidance; current summary still appears stale |
| FHIR-19359 | Published / Persuasive | Adds "not safe" definition; backed by Zulip Max dose thread |
| FHIR-22725 | Published / Persuasive | Context-only for this page; commit patch only corrected link syntax in unrelated text |
| FHIR-22780 | Published / Persuasive with Modification | Context-only; broad commit subject but page patch did not implement contained-resource guidance |
| FHIR-23867 | Published / Persuasive | Intended exact complex-extension definition fields; current page only has broader simple/complex prose |
| FHIR-25431 | Published / Persuasive | Editorial `datatype` consistency |
| FHIR-26360 | Published / Persuasive with Modification | Adds SHOULD guidance for extension root code |
| FHIR-28143 | Published / Persuasive | Clarifies Extension.url as reference to canonical URL; backed by Zulip |
| FHIR-29323 | Published / Persuasive with Modification | Context-only; broad commit subject, not page-specific |
| FHIR-31385 | Published / Persuasive | Adds DAR cannot bypass required/extensible bindings |
| FHIR-31656 | Published / Persuasive | Adds no extensions on `Extension.url`/`Element.id` |
| FHIR-34131 | Published / Persuasive | Fixes DataAbsentReason XML example |
| FHIR-36066 | Published / Persuasive with Modification | Context-only; broad commit subject, not page-specific |
| FHIR-36738 | Published / Persuasive | Adds root `isModifier` explanation for defining modifier extensions |
| FHIR-37903 | Published / Persuasive | Adds explicit extension vs modifierExtension placement |
| FHIR-42822 | Applied / Persuasive | Broad typo issue; page-specific correction of `interpretted` |
| FHIR-44047 | Resolved - change required / Persuasive | Broad punctuation cleanup (`e.g.,`, `i.e.,`); source has applied page changes despite Jira status not "Applied" |
| FHIR-52917 | Applied / Persuasive | Adds derived complex-extension full-URL slice rule |
| FHIR-53088 | Applied / Persuasive with Modification | Refines local child extension exception; current page has a stray apostrophe in the canonical URL |

### Other Jira issues that plausibly explain changed text

No additional Jira issue was needed beyond the explicit keys to explain meaningful page changes. Distinctive phrase searches either returned the same keys or context-only hits.

### Context-only Jira hits that should not drive action

- FHIR-22725, FHIR-22780, FHIR-29323, and FHIR-36066 appeared in commit metadata but their snapshots describe other pages or concepts; the actual `source/extensibility.html` patch in the relevant broad commit was FHIR-18362 preservation wording.
- FHIR-42822 and FHIR-44047 are broad typo/punctuation tickets; useful for provenance but not evidence of substantive extensibility decisions.

## Zulip evidence

- `#implementers > Max dose per course` (`bun run zulip:search snapshot implementers "Max dose per course"`): Rob Hausam and Lloyd McKenzie discussed whether a dose-course extension should be a modifier. Lloyd clarified that modifier status is about changing the meaning of other elements, not generic safety or decision-support importance. Rob then filed GF/FHIR-19359. This matches the added "Not safe" definition at current lines 71 and supports the applied direction.
- `#implementers > Can / should an Extension.url contain an optional version?` (`bun run zulip:search snapshot implementers "Can / should an Extension.url contain an optional version?"`): Lloyd said `Extension.url` is not allowed to contain `|version` because it is not type `canonical`; Grahame said this is deliberate because extension definitions should not change so much that version is relevant to interpretation, while agreeing wording could be clarified. John Timm filed FHIR-28143. This supports "reference to the canonical URL" wording.
- `#fhirpath > modifierExtension` (`bun run zulip:search snapshot fhirpath "modifierExtension"`): Gino Canessa discovered and questioned the root `isModifier` convention; Lloyd explained root ElementDefinition properties (including `isModifier`) control characteristics of the type. Gino created FHIR-36738. This supports current lines 349-368.
- `#implementers > inline details from extension definitions` (`bun run zulip:search snapshot implementers "inline details from extension definitions"`): Discussion around FHIR-26360 favored improving computable meaning in extension definitions (e.g., `ElementDefinition.code`) rather than adding inline meaning in every instance. This supports current lines 73-74.
- `#implementers > XML representation of extension on Extension.url` (`bun run zulip:search snapshot implementers "XML representation of extension on Extension.url"`): Michele Mottini and Lloyd agreed extensions on `Extension.url` are not supported and should be explicitly ruled out; Anand filed FHIR-31656. This supports current line 66.
- Later `#implementers > Can we add extension data-absent-reason for mandatory e...` (2025-12): Lloyd restated that DataAbsentReason does not bypass required/extensible binding semantics when a valueset code applies. This is consistent with current lines 301-310 and does not suggest a reversal.

## Confluence evidence

- FHIR-I minutes 2019-11-25, page 66933824 (`bun run confluence:search snapshot 66933824`): For FHIR-23867, minutes say "Will update the spec to note that value[x] must be 0..0 and one or more child extensions are defined. Persuasive Motion: Rick Geimer/Eric Haas: 4-0-0." The current page only says complex extensions contain nested extensions and no value, not the exact StructureDefinition constraints.
- FHIR-I minutes 2020-06-29, page 86970520 (`bun run confluence:search snapshot 86970520`): Lists FHIR-26360 as "Define a standard extension to convey coded meaning"; Jira snapshot provides the stronger rationale.
- FHIR-I minutes WGM 202105, page 113673765 (`bun run confluence:search snapshot 113673765`): Records FHIR-31385 persuasive motion 26-0-2.
- FHIR-I minutes 2021-08-02, page 120752896 (`bun run confluence:search snapshot 120752896`): Records FHIR-31656 persuasive motion 10-0-0.
- FHIR-I minutes WGM 202205, page 101355607 (`bun run confluence:search snapshot 101355607`): Records FHIR-36738 persuasive motion 16-0-2.
- FHIR-I minutes 2022-08-29, page 108307268 (`bun run confluence:search snapshot 108307268`): Records FHIR-37903 persuasive motion 8-0-4.
- FHIR-I minutes WGM 202509 - Pittsburgh, page 358879917 (`bun run confluence:search snapshot 358879917`): For FHIR-52917, minutes state added slices to derived complex extensions SHALL have a full URL to avoid confusion and naming collisions; motion approved 10-0-0.
- FHIR-I minutes 2025-11-17, page 403869367 (`bun run confluence:search snapshot 403869367`): Records FHIR-53088 "Will update the text" and persuasive-with-modification vote 11-0-0.
- FHIR-I minutes WGM 202405 - Dallas, page 234784975 (`bun run confluence:search snapshot 234784975`): Records FHIR-44047 "will fix" among punctuation cleanup issues.

## Timeline

| Date | Clock | Evidence |
|---:|---|---|
| 2018-10-09/10 | Discussion | Zulip `Max dose per course` leads to FHIR-19359 |
| 2018-10-22 to 2019-04-22 | Jira votes/resolutions | FHIR-18350/18353/18355/18361/18362/19359 resolve R5 modifier-extension clarifications |
| 2019-11-25 | WG minutes/vote | FHIR-23867 approved; minutes specify `value[x] 0..0` and one or more child extensions |
| 2020-02-24 to 2020-06-29 | Discussion/vote | FHIR-26360 discussed in Zulip/FHIR-I; resolution adds root code SHOULD guidance |
| 2020-07-21/24 | Discussion/Jira | Extension.url optional-version Zulip thread leads to FHIR-28143 |
| 2021-02/05 | Jira/vote | FHIR-31385 resolves required/extensible binding clarification |
| 2021-03/08 | Discussion/vote | FHIR-31656 extension-on-Extension.url thread and FHIR-I approval |
| 2022-03/05 | Discussion/vote | FHIR-36738 root `isModifier` discussion and approval |
| 2022-03-17 to 2023-02-16 | Source commits | Most R5-era page-specific Jira changes applied to `source/extensibility.html` |
| 2023-01/03 | Source commits | RDF examples, extension links, fragment parsing, and QA edits |
| 2025-09-18 | Jira/vote | FHIR-52917 approved for R6 |
| 2025-10-31 | Source commits | R6 normative page metadata/template changes |
| 2025-11-03 | Source commit | FHIR-52917 full-URL slice rule and FHIR-44047 punctuation cleanup applied |
| 2025-11-17 | WG minutes/vote | FHIR-53088 approved persuasive with modification |
| 2025-12-15 | Source commit | FHIR-53088 applied; current page includes malformed canonical URL with stray apostrophe |
| 2025-12-11/13 | Later discussion | Zulip DAR/binding discussion reaffirms current FHIR-31385 semantics |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/extensibility.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/extensibility.html" && echo "new exists"`
- Captured direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/extensibility.html`
- Captured source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/extensibility.html`
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager show --stat --patch <COMMIT> -- source/extensibility.html`
- Jira snapshots:
  - `bun run jira:search snapshot FHIR-18350` through `FHIR-53088` for all explicit keys listed above.
- Zulip:
  - Raw `bun run zulip:search fts FHIR-#####` failed on hyphenated keys; recovered with SQL `content LIKE '%FHIR-#####%' OR content LIKE 'GF#<num>%'`.
  - Snapshots taken for `Max dose per course`, `Can / should an Extension.url contain an optional version?`, `modifierExtension`, `inline details from extension definitions`, `XML representation of extension on Extension.url`, and later DAR/binding discussion.
- Confluence:
  - `bun run confluence:search refs jira <KEY>` and `bun run confluence:search fts <KEY> --limit 5` for all explicit keys.
  - Snapshots taken for pages 66933824, 86970520, 113673765, 120752896, 101355607, 108307268, 358879917, 403869367, and 234784975.
- Current-page checks:
  - `wc -l ".../source/extensibility.html"` returned 648.
  - Read current page in chunks covering `1-220`, `221-440`, and `441-648`.
  - Searched current source for visible defects and intent mismatches: stale "ignore other extensions" summary, malformed `StructureDefinition/Extension'`, `managable`, `mininum`, and binding-requirement grammar.

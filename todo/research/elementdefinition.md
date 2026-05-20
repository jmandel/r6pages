# elementdefinition research appendix

## Scope and coverage

- Page path: `source/elementdefinition.html`.
- Versions compared: R4 4.0.1 at `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to R6 ballot4 6.0.0-ballot4 at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Boundary: the page exists in both source trees and is modified in place.
- Current page read end-to-end: yes, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition.html:1-598`.
- Source history: 31 commits touched this page between the two commits.
- Explicit Jira keys found in commit subjects/patches: `FHIR-19756`, `FHIR-25274`, `FHIR-25431`, `FHIR-28126`, `FHIR-33316`, `FHIR-33432`, `FHIR-37871`, `FHIR-39180`, `FHIR-39182`, `FHIR-40296`, `FHIR-44047`, `FHIR-48664`, `FHIR-50391`. The bare commit subject `36700` was followed as `FHIR-36700`.
- Additional Jira issues followed from phrase searches/context: `FHIR-41762` for `valueAlternatives`; `FHIR-50390` for `applicable-number`.
- Jira/Zulip/Confluence coverage was bounded: all explicit Jira keys were snapshotted; Zulip was searched by quoted Jira key and linked/high-signal topics were snapshotted; Confluence was searched by Jira refs for explicit keys plus selected exact phrases, with relevant FHIR-I minute pages snapshotted.
- Caveats: no broad PR mining was done beyond Jira/source references; only one PR link was found (`HL7/fhir#1814`). Some Confluence snapshots flatten minutes into one long text line, so page IDs/URLs are more useful than line ranges for those minute snippets. Initial unquoted FTS searches for hyphenated Jira keys failed in Zulip/Jira; quoted/key-specific searches were rerun where needed.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source page | R4 source | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/elementdefinition.html` | Old page boundary. |
| Source page | R6 ballot4 source | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition.html` | Current page boundary and final text. |
| Source lines | Interpretation table | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition.html:126-354` | Main table changed by `FHIR-48664`, validation follow-up, and mustSupport note. |
| Source lines | Slicing rules | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition.html:406-435` | `FHIR-50391` text about constraints across slices and mustSupport/obligation ambiguity. |
| Source lines | Primitive values | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition.html:466-500` | `mustHaveValue` / `valueAlternatives` guidance and current editorial defects. |
| Source lines | Must-support section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition.html:550-564` | Shows obligation moved to extension reference after `FHIR-40296`. |
| Commit | Polymorphic path clarification | `b1329db957738e422efb1a88e83984e1f00528d7` / `https://github.com/HL7/fhir/commit/b1329db957738e422efb1a88e83984e1f00528d7` | Applies `FHIR-33432`. |
| Commit | System.String notes | `a60a9ee277bbd8c4b2be9b0686c37f0bdfe6bf37` / `https://github.com/HL7/fhir/commit/a60a9ee277bbd8c4b2be9b0686c37f0bdfe6bf37` | Adds ElementDefinition notes from `FHIR-25274`. |
| Commit | Primitive values / obligations / bindings | `1e1665b9352f33a691326fdf3079bc19865a8681` / `https://github.com/HL7/fhir/commit/1e1665b9352f33a691326fdf3079bc19865a8681` | Adds major R5 ElementDefinition guidance. |
| Commit | Binding on datatype profile root | `2f3664baf35835a0d3cac9be76a13175c52bc9a1` / `https://github.com/HL7/fhir/commit/2f3664baf35835a0d3cac9be76a13175c52bc9a1` | Applies `FHIR-48664` table changes. |
| Commit | Slicer constraints / mustSupport | `3f3077a286d669ed69f2cb51540b8f3aef58a433` / `https://github.com/HL7/fhir/commit/3f3077a286d669ed69f2cb51540b8f3aef58a433` | Applies `FHIR-50391` text. |
| Commit | e.g./i.e. punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` / `https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Applies `FHIR-44047` editorial cleanup. |
| PR | `FHIR-33432` PR | `https://github.com/HL7/fhir/pull/1814` | Only page-specific PR link found in Jira snapshots. |
| Jira | `FHIR-33432` | `https://jira.hl7.org/browse/FHIR-33432`; reopen with `bun run jira:search snapshot FHIR-33432` | Formal resolution for `[x]` path clarification. |
| Jira | `FHIR-48664` | `https://jira.hl7.org/browse/FHIR-48664`; reopen with `bun run jira:search snapshot FHIR-48664` | Formal resolution allowing binding on root of datatype profiles. |
| Jira | `FHIR-50391` | `https://jira.hl7.org/browse/FHIR-50391`; reopen with `bun run jira:search snapshot FHIR-50391` | Formal R6 clarification for slicing, mustSupport, and obligations. |
| Jira | `FHIR-50390` | `https://jira.hl7.org/browse/FHIR-50390`; reopen with `bun run jira:search snapshot FHIR-50390` | Defines `applicable-number`, referenced by current page. |
| Jira | `FHIR-41762` | `https://jira.hl7.org/browse/FHIR-41762`; reopen with `bun run jira:search snapshot FHIR-41762` | Later `valueAlternatives` clarification. |
| Zulip | `ElementDefinition.path characters too strict` | `https://chat.fhir.org/#narrow/stream/implementers/topic/ElementDefinition.path%20characters%20too%20strict`; `bun run zulip:search snapshot implementers "ElementDefinition.path characters too strict"` | Informal rationale for `FHIR-33432`. |
| Zulip | `fixed/pattern on min = 0` | `https://chat.fhir.org/#narrow/stream/conformance/topic/fixed%2Fpattern%20on%20min%20%3D%200`; `bun run zulip:search snapshot conformance "fixed/pattern on min = 0"` | Rationale for `FHIR-28126`. |
| Zulip | `ValueSet binding on CodeableConcept in datatype profile` | `https://chat.fhir.org/#narrow/stream/implementers/topic/ValueSet%20binding%20on%20CodeableConcept%20in%20datatype%20profile`; `bun run zulip:search snapshot implementers "ValueSet binding on CodeableConcept in datatype profile"` | Direct precursor to `FHIR-48664`. |
| Zulip | `Slices not inheriting preferred bindings from root` | `https://chat.fhir.org/#narrow/stream/IG%20creation/topic/Slices%20not%20inheriting%20preferred%20bindings%20from%20root`; `bun run zulip:search snapshot "IG creation" "Slices not inheriting preferred bindings from root"` | Long discussion behind `FHIR-50391`; contains unresolved/possibly omitted snapshot-rendering caveat. |
| Confluence | FHIR-I 2025-07-14 minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/358880988/FHIR+Infrastructure+Minutes+CC+2025-07-14`; `bun run confluence:search snapshot 358880988` | Records `FHIR-50391` approved 6-0-1. |
| Confluence | FHIR-I 2025-04-28 minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/325466744/FHIR+Infrastructure+Minutes+CC+2025-04-28`; `bun run confluence:search snapshot 325466744` | Records `FHIR-50390` approval. |
| Confluence | FHIR-I 2025-02-10 minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/320995811/FHIR+Infrastructure+Minutes+CC+2025-02-10`; `bun run confluence:search snapshot 320995811` | Records `FHIR-48664` table fix plus invariant follow-up. |

## Change summary

### Metadata/template/navigation

- Mechanical/template: `<%edheader base%>` changed to `<%dtxheader base ElementDefinition%>`; a types framework cross-reference paragraph was added; owner/status header changed for R6 normative display; jQuery paths moved to `assets/js`.
- Mechanical/R6 standards-status cleanup: `[%normative page infrastructure%]` and the old `Maturity Level` cell were removed.
- Links to migrated extension content were updated to use `[%extensions-location%]`.

### Element path, id, and choice-type guidance

- Substantive/semantic guidance: `FHIR-33432` adds a SHALL statement that polymorphic elements end in `[x]`, and clarifies that `[x]` is not part of the official element name. This matches Jira and the linked Zulip thread.
- Editorial/spec-correction: `FHIR-39180` and `FHIR-39182` replace old renamed choice paths such as `Patient.deceasedBoolean` with `Patient.deceased[x]:deceasedBoolean`.

### Interpretation table semantics

- Substantive/semantic guidance: `FHIR-48664` changes the table to allow `binding` on the root element of constraint definitions, addressing datatype profiles such as a `CodeableConcept` profile with a root binding.
- Related semantic reshaping: the same area changes "first element" to "root element", introduces `Expected/Not Expected`, splits `requirements/comment/alias`, changes several "required/prohibited" cells to "expected/optional/Not expected", and adds a note that root elements may be absent from differentials.
- Semantic guidance: `FHIR-19756` clarifies that root cardinality on a type is not irrelevant: it constrains references to that type.
- Semantic guidance: a note explains use of FHIRPath `System.String` plus the `structuredefinition-fhir-type` extension (`FHIR-25274`).
- Possible rendering/editorial issue: the `mustSupport` footnote marker uses the Taurus-like `♉` symbol in table cells and in "Notes:♉" (`source/elementdefinition.html:280-340`). This is unusual but was not elevated separately because the note remains discoverable.

### Slicing

- Substantive/semantic guidance: `FHIR-50391` adds a list of constraints that apply across all slices and entries (`max`, `type`, fixed/pattern/min/max values, constraints, required/extensible bindings including additional bindings, `mustHaveValue`, `valueAlternatives`) and states that obligations apply across all slices unless the obligation specifies `applicable-number`.
- Substantive/semantic guidance: the same change states that `mustSupport` assertions without additional specificity cannot be assumed to apply to all slices/entries; readers must consult IG documentation or community guidance.
- Potential overlooked issue: the Zulip discussion and a Jira comment also proposed adding language that slicer constraints apply even when not displayed/rendered in slice snapshots. No matching phrase was found in the current page or nearby source pages.

### Fixed/pattern/min behavior and pattern-on-repeating context

- Substantive/semantic guidance: `FHIR-28126` adds that when `min = 0` and a fixed or pattern value is present, the fixed/pattern only applies if the element is actually present.
- Context-only for this page source: `FHIR-33316` and `FHIR-36700` discuss pattern wording on arrays/repeating elements; the page-specific source changes were mostly a typo in a temporary XPath ballot note and blank lines, while the main generated definitions likely changed elsewhere.

### Primitive values, `mustHaveValue`, `valueAlternatives`, bindings, and mustSupport

- Semantic guidance: the R5-era ElementDefinition update adds a Primitive Values section describing absent primitive values, common extensions, `mustHaveValue`, and `valueAlternatives`.
- Follow-on Jira: `FHIR-41762` later clarifies expectations for `valueAlternatives`, but the page source text was not directly changed in the captured page history after the search result; likely applied in generated definitions or related artifacts.
- Semantic guidance: a short Bindings / Additional Bindings section points to terminology binding documentation.
- Semantic guidance: after `FHIR-40296`, obligations are described as an extension rather than a core ElementDefinition property.

### Editorial/mechanical

- `FHIR-25431` standardizes "datatype".
- `FHIR-44047` applies e.g./i.e. punctuation fixes.
- Several current-page typos remain in the slicing/primitive prose (`source/elementdefinition.html:414`, `:417`, `:471`, `:495`).

## Source history

| Commit | Date | Subject | Page-specific effect |
|---|---:|---|---|
| `cbdf7d1e55dc4bfa1dc30fc526edee0491e05782` | 2019-12-10 | rebuild abstract type framework | Link target for `Element.id` changed from `element.html#table` to `types.html#Element`; link/mechanical. |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Removes old wrapping `div`; mechanical template. |
| `b1329db957738e422efb1a88e83984e1f00528d7` | 2022-03-20 | FHIR-33432 | Adds polymorphic `[x]` path clarification; substantive guidance. |
| `a60a9ee277bbd8c4b2be9b0686c37f0bdfe6bf37` | 2022-08-09 | FHIR-25274 Add new documentation to ElementDefinition notes section | Adds FHIRPath `System.String` / `structuredefinition-fhir-type` explanatory notes. |
| `73080e5bdeff04df26787237e1412af2fc181915` | 2022-08-11 | fix definition of fhir-type extension | Converts raw fhir-type URL text to link. |
| `c1d765ab73d0bf137c30793009baf937473668ac` | 2022-08-13 | various fixes including IHE + DICOM value sets + version | Switches page header macro to datatype framework header. |
| `44ed2366be24968481e1dc367d04cff3be43df0d` | 2022-08-17 | 36700 - pattern examples and clarification | Only blank-line page source change; context for generated definitions, not a meaningful page-source change. |
| `2fb5b028a63c2d5932dbaf549cd777bc0ffb05ed` | 2022-08-18 | FHIR-19756 Need to clarify meaning of root cardinality | Replaces "optional (irrelevant)" with footnote explaining root cardinality constraints references to the type. |
| `6551c7b8c82e77ff82fa8937a63a69916f06fd5a` | 2022-08-24 | FHIR-37871 Remove the Trial-Use element "ElementDefinition.constraint.xpath" | Adds temporary ballot note warning of planned XPath removal. |
| `08d840fb48809b6e69bfd75e45073818aab41498` | 2022-08-29 | FHIR-33316 Clarify behavior of pattern[x] on arrays | Fixes typo in the temporary XPath ballot note; not the main pattern change in this page source. |
| `1736091b56105ca469a08c4d7a91976dfe2346e8` | 2022-08-29 | FHIR-28126 Clarify the meaning of a fixed/pattern value when min=0 | Adds min=0 fixed/pattern rule. |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Editorial terminology standardization. |
| `14fd16187b72d40151e3f4606bb29a3132ed6ec5` | 2022-09-01 | fix bugs | Whitespace only. |
| `23a31a590b7b03840e4f5946c17b6ec6e0e54665` | 2022-09-06 | update all ballot and stu notes | Converts temporary XPath note macro from STU to ballot note. |
| `7bf9e9408044b81c4f56930c20697f3afd3393f4` | 2022-09-09 | more datatypes indexing | Adds type-framework cross reference links. |
| `1e1665b9352f33a691326fdf3079bc19865a8681` | 2022-12-05 | ElementDefinition updates - add obligations and additional bindings, and update associated documentation + improve CS / VS templates | Removes temporary XPath note; adds Primitive Values, Bindings / Additional Bindings, and Must-support / Obligations sections. |
| `343a3ba4e9d376f425daaa91055cb651d8ac2404` | 2022-12-06 | obligation & additional binding changes after first review | Clarifies min=0 fixed/pattern omission behavior. |
| `b3e373388f8137e589fdc6b18beb9ff86a2c23cb` | 2023-02-08 | fix extension links | Updates extension links to `[%extensions-location%]`. |
| `fa3b0bac14ef36316b1359d43a8d847291ff42ad` | 2023-02-10 | FHIR-40296 Obligation should be an extension | Changes "Must-support / Obligations" to "Must-support" and points to the obligation extension. |
| `f554f92b9fc7bca48b797f769a36eb1696dfca0b` | 2023-02-15 | FHIR-39180 FHIR should not refer to renamed paths anymore | Fixes choice-type id example. |
| `5501af5db9172cc245c69d70806b74d4b35f64aa` | 2023-02-15 | FHIR-39182 Do not use choice type renamed paths in documentation | Fixes choice-type constraining example. |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | QA related changes | Editorial capitalization and punctuation. |
| `9f780149387dc652bec02aa7744e52774acddbc9` | 2023-02-21 | more QA | Reverts accidental double-period edits. |
| `4118eb9ddb6eabe52c56c903b3932f27c2c42e38` | 2023-03-14 | remove content now moved to extensions IG, and fix broken links | Updates geolocation extension example links to `.profile.*`. |
| `2f3664baf35835a0d3cac9be76a13175c52bc9a1` | 2025-03-04 | FHIR-48664 Allow binding on first element (of datatype profiles) | Major interpretation-table changes, including allowing root binding on datatype profiles. |
| `34138d8926ecd5622fb2c9d40f683c0257a51b1c` | 2025-03-13 | Fix up element definition use table for issues discovered from validation | Allows slicing/mustSupport in table cells and adds mustSupport footnote. |
| `a581075555b02be851eb33506ac66a982aab61f7` | 2025-05-01 | upgrade jquery | Mechanical JS path changes. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Header/status row update. |
| `605a6ffefb83e002264b0504348dea50144bb951` | 2025-10-31 | more normative. changes | Removes normative-page macro. |
| `3f3077a286d669ed69f2cb51540b8f3aef58a433` | 2025-10-31 | FHIR-50391 | Adds slicing constraints list and mustSupport/obligation ambiguity text; removes R5 trial-use primitive wrapper. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Editorial e.g./i.e. punctuation pass. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-33432` (Published, Persuasive with Modification, Applied for R5) says `ElementDefinition.path` should clarify polymorphic `[x]`; resolution text matches current `source/elementdefinition.html:95-96`. Jira comment links PR `https://github.com/HL7/fhir/pull/1814`.
- `FHIR-25274` (Published, Persuasive with Modification, Applied for R5) asks for documentation of FHIRPath `System.String` and `structuredefinition-fhir-type`; current notes at `source/elementdefinition.html:346-353` match the resolution.
- `FHIR-19756` (Published, Persuasive, Applied for R5) says root cardinality constrains references to the type; current note at `source/elementdefinition.html:342-345` matches.
- `FHIR-28126` (Published, Persuasive, Applied for R5) says fixed/pattern with `min=0` only applies if the element is present; current text at `source/elementdefinition.html:462-463` matches.
- `FHIR-37871` (Published, Persuasive, Applied for R5) planned removal of `ElementDefinition.constraint.xpath`; a temporary ballot note was added and later removed from this page. No current-page issue found.
- `FHIR-39180` and `FHIR-39182` (Published, Persuasive, Applied for R5) correct old choice-type renamed-path examples; current lines `119` and `451` match.
- `FHIR-40296` (Published, Persuasive, Non-compatible, Applied for R5) moved obligation to an extension; current lines `550-563` match the extension approach.
- `FHIR-48664` (Applied, Persuasive with Modification, R6, compatible substantive) allows binding on the first/root element of datatype profiles. Current table sets `binding` in "Constraint Definition, root element" to optional at `source/elementdefinition.html:301-305`.
- `FHIR-50391` (Applied, Persuasive with Modification, R6, compatible substantive) records the slicing/mustSupport/obligation clarification. Current page implements the main list at `source/elementdefinition.html:421-432`.
- `FHIR-44047` (Resolved - change required, Persuasive) is a broad e.g./i.e. punctuation cleanup; commit `887bc2383...` applies page edits, but the Jira status remains "Resolved - change required" in the local snapshot.

### Other Jira issues that plausibly explain the same changed text

- `FHIR-36700` was followed because of the bare commit subject `36700`. Jira and Zulip discuss pattern wording on repeating elements, but the page-specific commit only added blank lines; do not treat it as causal for current narrative beyond context.
- `FHIR-41762` (Applied, Persuasive, R6) clarifies `valueAlternatives`; phrase search found it, and it is relevant to the current primitive-value section, though the page-source history for `source/elementdefinition.html` did not show a direct narrative edit for this issue.
- `FHIR-50390` (Published, Persuasive, FHIR-extensions) defines `applicable-number`, which current `FHIR-50391` text references at `source/elementdefinition.html:425`.

### Context-only Jira hits that should not drive action

- `FHIR-33316` is real and related to pattern wording, but its direct page-source patch in this file only corrected "comstraints" in a temporary XPath ballot note. Do not use it to explain the current page narrative.
- `FHIR-25431` and `FHIR-44047` are broad editorial cleanup issues. They matter for audit history but do not create semantic action items.

## Zulip evidence

- `#implementers > ElementDefinition.path characters too strict` (`https://chat.fhir.org/#narrow/stream/implementers/topic/ElementDefinition.path%20characters%20too%20strict`) directly motivates `FHIR-33432`: Ardon Toonstra noted the path character rule seemed to conflict with `[x]`; Lloyd McKenzie said `[x]` is not technically part of the name but needed clarification.
- `#conformance > fixed/pattern on min = 0` (`https://chat.fhir.org/#narrow/stream/conformance/topic/fixed%2Fpattern%20on%20min%20%3D%200`) motivated `FHIR-28126`; participants settled on validator behavior where fixed/pattern is checked only when the element exists.
- `#implementers > "http://hl7.org/fhirpath/System.String"` explains the system-type/fhir-type confusion that `FHIR-25274` documents.
- `#fhir/infrastructure-wg > Agenda item for today: testing invariants` contains Josh Mandel's note that he submitted `FHIR-37871` to remove `ElementDefinition.constraint.xpath`.
- `#conformance > Moving Obligation to be an extension` records Lloyd McKenzie's rationale for `FHIR-40296`: moving obligation out to an extension avoids premature core/normative constraints while allowing iteration.
- `#implementers > ValueSet binding on CodeableConcept in datatype profile` directly motivates `FHIR-48664`. Ewout Kramer pointed to the old table forbidding binding on a constraint-definition root; Ardon Toonstra then filed the Jira issue.
- `#IG creation > Slices not inheriting preferred bindings from root` is the main rationale for `FHIR-50391`. Key points:
  - The original problem was snapshot generation not carrying slicer-level binding/additional binding expectations into slices.
  - The discussion split validation semantics from what generated snapshots render.
  - Grahame proposed the list that became current `source/elementdefinition.html:421-432`.
  - Later in the same thread, Grahame and Rob/Lloyd drafted an additional caveat: constraints on the slicer apply even if they are not explicitly rendered/displayed in slice snapshots; to display them in the snapshot, authors may need to explicitly define them on slices, though this is not necessary for validation. No matching text was found in current source.
- `#conformance > pattern[x] on 0..* elements` is background for `FHIR-36700`/`FHIR-33316`; it is useful context but not a direct current-page action except insofar as slicing prose needs clarity.
- `#conformance > Rendering Obligation Extension` is background for the obligation-extension ecosystem and `FHIR-41762`; it does not contradict current page text.

## Confluence evidence

- `FHIR Infrastructure Minutes WGM 202201 - Virtual`, page `81028096`, records `FHIR-33432` as Persuasive with Modification and says a footnote/clarification should explain that `[x]` may appear in `ElementDefinition.path`.
- `FHIR Infrastructure Minutes CC 20201109`, page `97457190`, records `FHIR-28126` as Persuasive, 11-0-0.
- `FHIR Infrastructure Minutes CC 2023-02-06`, page `156533817`, records `FHIR-40296` as Persuasive, 11-0-0, with concern over whether the extension would be core or tooling.
- `FHIR Infrastructure Minutes CC 2025-02-10`, page `320995811`, records `FHIR-48664`: "We will fix the table 'Interpretation of ElementDefinition in different contexts'. We will also create an invariant." Motion 11-0-0.
- `FHIR Infrastructure Minutes WGM 202501 - Virtual`, page `281219681`, notes `FHIR-48664` was significant because ElementDefinition is normative and should have the right people on the call.
- `FHIR Infrastructure Minutes CC 2025-04-28`, page `325466744`, records `FHIR-50390` approval with an added comment.
- `FHIR Infrastructure Minutes CC 2025-07-14`, page `358880988`, records `FHIR-50391` approval as Persuasive with Modification, 6-0-1, and notes `FHIR-51477` was addressed by `FHIR-50390`/`FHIR-50391`.
- Exact Confluence phrase searches for `"Slices not inheriting preferred bindings"`, `"binding on first element"`, `"applicable-number"`, and `"ElementDefinition.constraint.xpath"` returned no additional high-signal pages beyond refs searches.

## Timeline

- 2018-12 to 2019-07: `FHIR-19756` raised/resolved for root cardinality semantics; page text applied in 2022 commit.
- 2019-12: Zulip discussion and `FHIR-25274` around FHIRPath `System.String` and fhir-type; page notes applied 2022-08-09.
- 2020-07 to 2020-11: Zulip discussion and `FHIR-28126` resolve fixed/pattern with `min=0`; page text applied 2022-08-29 and refined 2022-12-06.
- 2021-09 to 2022-01: Zulip/Jira/Confluence for `FHIR-33432`; page text applied 2022-03-20.
- 2022-08: `FHIR-37871` temporary XPath-removal ballot note added; removed by later R5 content update.
- 2022-10 to 2023-02: `FHIR-39180`/`FHIR-39182` choice-type example corrections applied.
- 2023-01 to 2023-02: `FHIR-40296` moves obligation to extension; page updated 2023-02-10.
- 2024-03: `FHIR-41762` clarifies `valueAlternatives`; relevant to generated definitions/primitive guidance.
- 2024-10 to 2025-03: Zulip and `FHIR-48664` drive root binding allowance for datatype profiles; page updated 2025-03-04.
- 2025-04: Long Zulip thread on slicing, mustSupport, obligations; `FHIR-50390` and `FHIR-50391` created.
- 2025-04-28: Confluence records `FHIR-50390` approval.
- 2025-07-14: Confluence records `FHIR-50391` approval.
- 2025-10-31: `FHIR-50391` page text applied in commit `3f3077a286d669ed69f2cb51540b8f3aef58a433`.
- 2025-11-03: `FHIR-44047` e.g./i.e. editorial pass applied.

## Evidence log

- Confirmed both page files exist with `test -f` in the old and new source trees.
- Captured direct diff with:
  - `git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/elementdefinition.html`
- Captured page history with:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/elementdefinition.html`
- Inspected all page-touching commits with `git show --stat --patch --format=fuller <sha> -- source/elementdefinition.html`.
- Snapshotted all explicit Jira keys plus `FHIR-36700`, `FHIR-41762`, and `FHIR-50390` using `bun run jira:search snapshot`.
- Jira phrase searches included `valueAlternatives mustHaveValue`, `"mustHaveValue" "valueAlternatives"`, `"binding on first element"`, `"mustSupport assertions"`, and `"Primitive Values" "valueAlternatives"`.
- A Jira FTS query for `applicable-number mustSupport obligations slices` failed because the hyphen was parsed as an operator/column; the query was rerun without the hyphen and with exact phrase alternatives.
- Zulip unquoted FTS queries for keys like `FHIR-50391` failed due FTS parsing of hyphenated issue keys; quoted key searches were rerun successfully.
- Zulip snapshots taken:
  - `bun run zulip:search snapshot implementers "ElementDefinition.path characters too strict"`
  - `bun run zulip:search snapshot conformance "fixed/pattern on min = 0"`
  - `bun run zulip:search snapshot implementers "\"http://hl7.org/fhirpath/System.String\""`
  - `bun run zulip:search snapshot "fhir/infrastructure-wg" "Agenda item for today: testing invariants"`
  - `bun run zulip:search snapshot conformance "Moving Obligation to be an extension"`
  - `bun run zulip:search snapshot implementers "ValueSet binding on CodeableConcept in datatype profile"`
  - `bun run zulip:search snapshot "IG creation" "Slices not inheriting preferred bindings from root"`
  - `bun run zulip:search snapshot conformance "pattern[x] on 0..* elements"`
  - `bun run zulip:search snapshot conformance "Rendering Obligation Extension"`
- Confluence refs searches were run for explicit Jira keys and `FHIR-50390`; snapshots were taken for pages `358880988`, `325466744`, `320995811`, `281219681`, `156533817`, `81028096`, and `97457190`.
- Current page was read in four chunks covering lines `1-598`.
- Cross-check for the possible `FHIR-50391` omitted snapshot-rendering caveat used `rg "explicitly rendered|displayed in the snapshot|explicitly shown|define them explicitly on the slices|not necessary for validation|constraints on the slicer"` across the R6 ballot4 source HTML and found no matches.

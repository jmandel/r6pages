# json research appendix

## Scope and coverage

- Page path: `source/json.html`.
- Compared R4 4.0.1 source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` with R6 ballot4 6.0.0-ballot4 source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Confirmed the page exists in both trees:
  - Old: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/json.html`
  - New: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/json.html`
- Read the full newer page end-to-end: 359 lines.
- Direct history found 21 commits touching `source/json.html` in this range.
- Explicit Jira keys found from commit subjects/patches: `FHIR-31538`, `FHIR-18452`, `FHIR-26937`, `FHIR-32806` (commit subject typo `HIR-32806`), `FHIR-18447`, `FHIR-22649`, `FHIR-18448`, `FHIR-18445`, `FHIR-25431`, `FHIR-20587`, `FHIR-47629`, `FHIR-44047`.
- Additional Jira issues found by targeted searches and needed to interpret later text: `FHIR-50863`, `FHIR-51115`, `FHIR-41522`, `FHIR-53891`, `FHIR-54783`, `FHIR-54080`.
- Jira, Zulip, and Confluence searches were performed for explicit keys and distinctive changed phrases including `resourceDefinition additional resources`, `RFC 8785 canonicalization`, and `cardinality JSON array normative`.
- Caveats:
  - Zulip FTS parses hyphenated Jira keys poorly, so direct key lookups were cross-checked with `bun run zulip:search sql ... LIKE '%FHIR-xxxxx%'`.
  - `resource.html#additional` is generated from source fragments; the relevant source text is in `source/resource/resource-introduction.xml`, not `source/resource.html`.
  - Some broad Jira/Confluence hits were context-only and are not treated as causal evidence.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Current JSON page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/json.html:75` | Start of new "JSON representation of additional resources" section |
| Source | `resourceDefinition` exclusion text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/json.html:95-99` | Says `resourceDefinition` is not present for resources defined in core |
| Source | FHIR-50863 applied rule | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resource/resource-introduction.xml:82-99` | Says `resourceDefinition` may remain after moving to core, SHOULD NOT be added, and version SHALL be correct |
| Source | Cardinality warning and stray colon | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/json.html:151-160` | Current visible rendering defect after the warning |
| Source | Primitive JSON example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/json.html:175-181` | Example has a closing `}` with no opening `{` in the snippet |
| Source | Primitive array null handling | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/json.html:253-258` | Current `SHALL`/`SHOULD` text from `FHIR-32806` |
| Source | Canonical JSON delegation | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/json.html:350-355` | JSON page now delegates canonical JSON rules to signatures page |
| Source | RFC 8785 canonicalization | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:196-210` | Target text says JSON resources SHALL be canonicalized using RFC 8785 |
| Source | Versions cardinality anchor | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versions.html:378-385` | Target for the JSON page cardinality warning; anchor spelling is `f-compat-cardianality` |
| Commit | Additional resource JSON/XML support | `931df6ae329dd3d7f44df8358b5affdd2b95e757`, https://github.com/HL7/fhir/commit/931df6ae329dd3d7f44df8358b5affdd2b95e757 | Added `resourceDefinition` section to JSON/XML pages |
| Commit | FHIR-50863 application | `09b9a4c718f6db95ad354a42fede0090b80dfce8`, https://github.com/HL7/fhir/commit/09b9a4c718f6db95ad354a42fede0090b80dfce8 | Added moved-to-core `resourceDefinition` compatibility rule to resource introduction, but not JSON page |
| Commit | Cardinality warning | `0a5592638b4ebfaa8352e8ec5f9b2ae0044e7a71`, https://github.com/HL7/fhir/commit/0a5592638b4ebfaa8352e8ec5f9b2ae0044e7a71 | Added FHIR-47629 warning and the stray colon |
| Commit | Typo fix after warning | `02a18701b372f2b0e25ad61286546803bda59dec`, https://github.com/HL7/fhir/commit/02a18701b372f2b0e25ad61286546803bda59dec | Fixed visible spelling in warning but left the colon |
| Commit | JSON array null handling | `8e9cbec98b9483a1f85374cd61a367e5e4c6234d`, https://github.com/HL7/fhir/commit/8e9cbec98b9483a1f85374cd61a367e5e4c6234d | Added suffix-null inference and all-null omission guidance |
| Commit | Examples rewrite | `6940f50152d47d242a8365fda5d825396a22f30b`, https://github.com/HL7/fhir/commit/6940f50152d47d242a8365fda5d825396a22f30b | Reworked XML/JSON examples and introduced the current primitive snippet brace |
| Commit | Signature rewrite | `dcf53a8af6d730f886918f45af2510e990a986eb`, https://github.com/HL7/fhir/commit/dcf53a8af6d730f886918f45af2510e990a986eb | Removed local canonical JSON details from JSON page and moved details to signatures page |
| Jira | FHIR-47629 | https://jira.hl7.org/browse/FHIR-47629 | Formal rationale for the JSON cardinality warning |
| Jira | FHIR-50863 | https://jira.hl7.org/browse/FHIR-50863 | Later applied rule that `resourceDefinition` may remain after an additional resource moves to core |
| Jira | FHIR-51115 | https://jira.hl7.org/browse/FHIR-51115 | Unresolved tracker proposing RFC 8785 canonical JSON |
| Jira | FHIR-32806 | https://jira.hl7.org/browse/FHIR-32806 | Formal rationale for array null handling text |
| Confluence | FHIR-I 2025-07-21 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/358883031/FHIR+Infrastructure+Minutes+CC+2025-07-21 | Workgroup discussion/vote for `FHIR-50863` |
| Confluence | FHIR-I WGM 202409 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/265096084/FHIR+Infrastructure+Minutes+WGM+202409+-+Atlanta | Workgroup discussion/vote for `FHIR-47629` |
| Confluence | FHIR-I 2021-11-29 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/81010491/FHIR+Infrastructure+Minutes+CC+20211129 | Workgroup discussion/vote for `FHIR-32806` |
| Confluence | Security 2025-06-30 minutes | https://confluence.hl7.org/spaces/SEC/pages/358255047/2025-06-30+Security+WG+Agenda+Minutes | Security WG references `FHIR-51115` and RFC 8785 discussion |
| Confluence | Security 2025-07-14 minutes | https://confluence.hl7.org/spaces/SEC/pages/358258654/2025-07-14+Security+WG+Agenda+Minutes | Later Security WG reference for `FHIR-51115`/`FHIR-41522` |
| Snapshot command | Explicit Jira snapshots | `bun run jira:search snapshot FHIR-47629` and similarly for keys listed above | Reopen full issue evidence |
| Snapshot command | Confluence `FHIR-50863` minutes | `bun run confluence:search snapshot 358883031` | Reopen meeting evidence |
| Snapshot command | Zulip RFC 8785 thread | `bun run zulip:search snapshot "Security and Privacy" "Signing and narrative"` | Reopen informal signature discussion |

## Change summary

### Metadata/template/navigation

- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` updated the HTML template and removed an outer `div`.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` and `605a6ffefb83e002264b0504348dea50144bb951` changed R6 normative page header boilerplate, including "Responsible Owner" wording and removal of `[%normative page infrastructure%]`.
- These are largely mechanical/template changes.

### Editorial and terminology cleanup

- `FHIR-31538` fixed `partiular` -> `particular` in the comment prohibition sentence.
- `FHIR-25431` normalized many occurrences of "data type" to "datatype".
- `FHIR-20587` fixed the `property3` explanatory parenthesis/comma.
- `FHIR-44047` added commas after `e.g.`/`i.e.` in several places.
- `02a18701b372f2b0e25ad61286546803bda59dec` fixed visible typos in the FHIR-47629 warning (`cadinality`, `Processers`), but left the visible stray colon at current `json.html:159`.

### XML comparison and examples

- `FHIR-18452`, `FHIR-18447`, and `FHIR-18448` substantially rewrote the former "Comparison with XML" section:
  - Removed the older standalone XML-vs-JSON comparison list.
  - Added a short note that XML examples are for comparison and moved detailed comparison to `resource-formats.html#comparison`.
  - Reordered examples so JSON generally appears before XML, and aligned examples to show the same content.
- This is mostly semantic/editorial guidance, not a new wire-format rule.
- Concrete current-page defect: the primitive JSON example at `json.html:175-181` has a closing `}` without a matching opening `{`.

### Primitive numeric representation

- `FHIR-26937` updated primitive representation:
  - `integer`, `unsignedInt`, `positiveInt`, and `decimal` are JSON numbers.
  - `boolean` is a JSON boolean.
  - all other primitive types, including `integer64`, are JSON strings.
- This is substantive representation guidance and matches the Jira resolution.

### JSON null arrays for primitive extensions

- `FHIR-32806` added:
  - "If the length of a JSON `element` array is different from the length of its JSON `_element` array, implementations SHALL infer null values in the suffix of the shorter array."
  - "If an array has only null elements, implementations SHOULD omit it entirely."
- Jira resolution explicitly contains the suffix-null inference sentence. The issue description asked what to do for arrays with only null values; the applied `SHOULD omit` sentence answers that, but is more explicit than the short resolution text.
- Confluence `81010491` records the FHIR-I vote and rationale: missing items may be clarified as null; if already implicit, the `SHALL` does not affect anyone.

### Decimal precision note

- `FHIR-22649` added a link to the quantity precision extension from the decimal precision warning. `b3e373388f8137e589fdc6b18beb9ff86a2c23cb` later changed the link to `[%extensions-location%]StructureDefinition-quantity-precision.html`.
- This is safety/editorial guidance.

### Cardinality changes across normative versions

- `FHIR-47629` added a dragon warning under repeating elements:
  - Elements may change from non-repeating to repeating across versions, even after becoming normative.
  - Processors should be prepared to manage such changes.
- The warning is consistent with Jira and FHIR-I WGM minutes, but the applied patch left a visible stray `:` before the next heading (`json.html:159`).
- `versions.html:378-385` has the related cardinality compatibility rule. The fragment id is misspelled as `f-compat-cardianality`, and `json.html` links to that misspelled target. This is not currently a broken link because the target uses the same spelling.

### Additional resources and `resourceDefinition`

- `931df6ae329dd3d7f44df8358b5affdd2b95e757` added `resourceDefinition` support to the JSON/XML format pages. In JSON, `resourceDefinition` is a format-level property containing a versioned canonical for an additional resource.
- Current JSON text says: "The resourceDefinition property is not present if the resourceType is one defined in this specification" (`json.html:98`).
- Later `FHIR-50863` resolved a promoted-to-core case: once an additional resource moves into core, `resourceDefinition` is allowed to remain present for compatibility, SHOULD NOT be added, and if present the version SHALL be correct.
- Commit `09b9a4c718f6db95ad354a42fede0090b80dfce8` applied that rule to `source/resource/resource-introduction.xml:97-98`, but did not update `source/json.html`. This creates a current-page mismatch.

### Canonical JSON/signatures

- `FHIR-18445` previously refined the old JSON canonicalization wording around ordered properties and multiple fragments.
- `dcf53a8af6d730f886918f45af2510e990a986eb` removed the detailed canonical JSON section from `json.html` and replaced it with a pointer to `signatures.html#json`.
- The current signatures page says JSON resources SHALL be canonicalized according to RFC 8785 (`signatures.html:202-206`) and defines `http://hl7.org/fhir/canonicalization/json`.
- Jira search found `FHIR-51115` ("Update JSON Canonicalization section to reference rfc8785"), still Triaged/Unresolved, and `FHIR-41522`, retracted as a duplicate of `FHIR-51115`.
- This is a substantive conformance change with informal/supporting discussion, but no applied/resolved Jira disposition found in this investigation.

## Source history

| Commit | Date | Label | Page-specific change |
|---|---:|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | mechanical | HTML template/header/footer update |
| `f8ac9a49459c1adae930684565bab8e344a27db6` | 2021-08-25 | `FHIR-31538` | Fixed "partiular" typo |
| `a7026edb074d5100e871d93a03aaa02231cb1218` | 2022-08-20 | `FHIR-18452` | Removed large XML comparison and replaced with a short comparison note |
| `acc7cdb646da57a8080f5f1d83475ea33b72cbee` | 2022-08-20 | `FHIR-26937` | Added unsignedInt/positiveInt/integer64 primitive JSON guidance |
| `8e9cbec98b9483a1f85374cd61a367e5e4c6234d` | 2022-08-20 | `FHIR-32806` | Added array suffix-null inference and all-null array omission guidance |
| `6940f50152d47d242a8365fda5d825396a22f30b` | 2022-08-20 | `FHIR-18447` | Reworked examples to compare same JSON/XML content |
| `319c9305544fe9cfc6e34a59742f10e5846d4f2e` | 2022-08-20 | `FHIR-22649` | Added precision extension link to decimal warning |
| `fb6236f76aef7e34c5874572f098f3a646dcc983` | 2022-08-20 | `FHIR-18448` | Corrected comparison link to `resource-formats.html#comparison` |
| `1e7f05f8b99b616f6c03888a4e1ee59b76d36c25` | 2022-08-21 | `FHIR-18445` | Clarified JSON canonicalization for signed fragments |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | `FHIR-25431` | Normalized "datatype" wording |
| `b3e373388f8137e589fdc6b18beb9ff86a2c23cb` | 2023-02-08 | link fix | Updated extension link macro |
| `641e2e9f8f96acbf96eef10d6b82fe5fe925657e` | 2023-02-14 | `FHIR-20587` | Fixed property3 parenthesis/comma |
| `0a5592638b4ebfaa8352e8ec5f9b2ae0044e7a71` | 2024-09-27 | `FHIR-47629` | Added cardinality-change warning; introduced stray colon |
| `931df6ae329dd3d7f44df8358b5affdd2b95e757` | 2025-03-15 | additional resources | Added `resourceDefinition` section and example |
| `179f07d794ac58a920e26ca625ad0c91d94e1951` | 2025-03-16 | editorial/normative wording | Changed `SHALL not` to `SHALL NOT` |
| `02a18701b372f2b0e25ad61286546803bda59dec` | 2025-03-19 | typo correction | Fixed visible typos in FHIR-47629 warning |
| `dcf53a8af6d730f886918f45af2510e990a986eb` | 2025-06-29 | signatures rewrite | Replaced local canonical JSON rules with link to signatures page |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | R6 normative changes | Changed header owner/status boilerplate |
| `605a6ffefb83e002264b0504348dea50144bb951` | 2025-10-31 | R6 normative changes | Removed `[%normative page infrastructure%]` include |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Added punctuation after `e.g.`/`i.e.` |
| `02f79b0a3ba639280ab7d0d92e364f0a2b676bea` | 2025-11-14 | ballot note cleanup | Removed additional-resource ballot note from JSON page |

## Jira evidence

### Explicit Jira keys from commits/patches

| Key | Status | Resolution/evidence | Relevance |
|---|---|---|---|
| `FHIR-31538` | Published | Typo correction; PR `https://github.com/HL7/fhir/pull/1387` | Applied exactly |
| `FHIR-18452` | Published | Not Persuasive with Modification; add note explaining XML examples are for comparison | Applied through comparison-section rewrite |
| `FHIR-26937` | Published | Add newer integer type language; integer64 is string | Applied in primitive representation text |
| `FHIR-32806` | Published | Persuasive with Modification; suffix-null inference | Applied; all-null SHOULD also added |
| `FHIR-18447` | Published | XML/JSON examples should represent same content | Applied through examples rewrite |
| `FHIR-22649` | Published | Decimal precision note should link precision extension | Applied |
| `FHIR-18448` | Published | Move comparison guidance to formats/differences page | Applied as link to `resource-formats.html#comparison` |
| `FHIR-18445` | Published | Clarify signature canonicalization scope | Partly superseded by later signature rewrite |
| `FHIR-25431` | Published | Normalize `datatype` vs `data type` | Applied |
| `FHIR-20587` | Published | Property3 example missing closing parenthesis | Applied |
| `FHIR-47629` | Applied | Add JSON-page dragon warning about cardinality changes | Applied, with stray colon defect |
| `FHIR-44047` | Resolved - change required | Punctuation of `e.g.`/`i.e.` throughout | Partly applied here by `887bc238...`; Jira status still not done |

### Other Jira issues that explain or challenge current text

| Key | Status | Evidence | Why it matters |
|---|---|---|---|
| `FHIR-50863` | Applied | Resolution says promoted-to-core additional resources may retain `resourceDefinition`, SHOULD NOT add it, version SHALL be correct | Conflicts with JSON page text that `resourceDefinition` is "not present" for resources defined in core |
| `FHIR-51115` | Triaged/Unresolved | Proposes replacing JSON canonicalization with RFC 8785; notes it is technically breaking for numbers | Current target text already says JSON SHALL use RFC 8785 |
| `FHIR-41522` | Resolved - No Change/Retracted | Earlier RFC 8785 issue, withdrawn as duplicate of `FHIR-51115` | Supports that `FHIR-51115` is the active formal tracker |
| `FHIR-53891` | Triaged/Unresolved | Later edits to canonicalization sections; includes RFC 8785 wording | Shows signature/canonicalization text remains under active review |
| `FHIR-54783` | Triaged/Unresolved | Trial-use elements in normative resources; relates to `FHIR-55447` allowing resourceDefinition for core resources | Context only for future additional-resource evolution; not direct action on this page |
| `FHIR-54080` | Triaged/Unresolved | Rewrite XML Digital Signature Section | Context only; not direct `json.html` evidence |

### Context-only Jira hits not elevated

- `FHIR-29821` appeared in a broad cardinality search but concerns CodeSystem/ValueSet designation cardinality, not this page.
- `FHIR-45297`, `FHIR-50934`, and other signature search hits concern related signature/hash issues but do not directly explain this JSON page change.

## Zulip evidence

- Direct FTS for `resourceDefinition additional resources` and `"additional resources" "resourceDefinition"` found no Zulip hits.
- Direct FTS for unquoted Jira keys such as `FHIR-47629` failed due FTS parsing of hyphenated keys; SQL `LIKE` checks were used instead.
- SQL key mention counts:
  - No Zulip mentions found for most explicit JSON-page Jira keys, including `FHIR-31538`, `FHIR-18452`, `FHIR-32806`, `FHIR-18447`, `FHIR-22649`, `FHIR-18448`, `FHIR-25431`, `FHIR-20587`, `FHIR-47629`, `FHIR-44047`, and `FHIR-50863`.
  - `FHIR-26937` had one mention in `#implementers > unsignedInt and positiveInt string in JSON and FHIRPath?`.
  - `FHIR-51115` had three Security and Privacy mentions.
- RFC 8785/signature evidence:
  - `bun run zulip:search fts "RFC 8785 canonicalization" --limit 20` found `#Security and Privacy > Signing and narrative`, `#Security and Privacy > Signature`, and older `Progress on digital signatures and integrity` discussions.
  - `#Security and Privacy > Signing and narrative` includes Grahame listing `FHIR-51115`, `FHIR-31566`, and `FHIR-41522`.
  - `#Security and Privacy > Signature` includes Grahame adding `FHIR-51115` and later discussion references around signature/canonicalization.
- No Zulip thread was found that discusses `FHIR-50863` or the current JSON-page `resourceDefinition` mismatch.

## Confluence evidence

| Page | Evidence |
|---|---|
| `79504672` FHIR Infrastructure Minutes CC 20211004 | References `FHIR-18452`; matches Jira vote/rewrite direction |
| `82904531` FHIR Infrastructure Minutes CC 20200427 | References `FHIR-26937`; matches newer integer type issue |
| `81010491` FHIR Infrastructure Minutes CC 20211129 | References `FHIR-32806`; records "missing items are null" rationale and 10-0-0 vote |
| `66940491` FHIR Infrastructure Minutes CC 20200113 | References `FHIR-18445` and `FHIR-25431` |
| `265096084` FHIR Infrastructure Minutes WGM 202409 - Atlanta | References `FHIR-47629`; records concern that changing upper cardinality from 1 to `*` may break JSON/FHIRPath and vote 16-0-8 |
| `265492373` FHIR Infrastructure Minutes CC 2024-09-16 | Agenda/process reference for `FHIR-47629` |
| `234784975` FHIR Infrastructure Minutes WGM 202405 - Dallas | References `FHIR-44047` punctuation cleanup |
| `358883031` FHIR Infrastructure Minutes CC 2025-07-21 | References `FHIR-50863`; records "don't want to say there shall not be resourceDefinition" and vote 12-0-0 |
| `358255047` Security WG Agenda/Minutes 2025-06-30 | References `FHIR-51115` and `FHIR-41522` in RFC 8785/canonicalization context |
| `358258654` Security WG Agenda/Minutes 2025-07-14 | Later Security WG reference for `FHIR-51115`/`FHIR-41522` |
| `325460605` FHIR Infrastructure Minutes WGM 202505 - Madrid | Context for additional resources and examples; not direct `json.html` issue evidence |
| `391186848` FHIR Infrastructure Minutes CC 2025-09-29 | Additional-resource versioning/tooling discussion; says `resourceDefinition` is base-format metadata and should show in examples |

## Timeline

- 2018-09-27: Lloyd McKenzie files `FHIR-18445`, `FHIR-18447`, `FHIR-18448`, `FHIR-18452` against STU3/R4-era JSON/signature/comparison text.
- 2019-04-22 to 2021-10-04: FHIR-I resolves/votes the XML comparison and signature-scope issues across several meetings.
- 2020-04-27: `FHIR-26937` resolved; newer integer type guidance approved.
- 2021-11-29: `FHIR-32806` resolved; FHIR-I minutes record missing array items/null clarification.
- 2022-08-20 to 2022-08-21: Multiple R5-era commits apply the JSON page rewrites for examples, integer types, null handling, decimal precision, and signatures.
- 2024-09-24: `FHIR-47629` resolved at WGM; JSON/FHIRPath cardinality breakage warning approved.
- 2024-09-27: Commit `0a559263...` adds the cardinality warning to `json.html`.
- 2025-03-15: Commit `931df6ae...` adds draft JSON/XML support for additional resources and `resourceDefinition`.
- 2025-06-17: `FHIR-51115` created to update JSON canonicalization to RFC 8785; comments note it is technically breaking for number canonicalization.
- 2025-06-29: Commit `dcf53a8...` rewrites the signatures section and changes `json.html` canonical JSON section to a pointer.
- 2025-07-21: `FHIR-50863` resolved/voted; Confluence says `resourceDefinition` should not be forbidden after a resource moves to core.
- 2025-10-31: Commit `09b9a4c...` applies `FHIR-50863` to `resource/resource-introduction.xml`, not `json.html`.
- 2025-11-14: Last direct `json.html` commit before R6 ballot4 removes the additional-resource ballot note.
- 2026-01: Later issues `FHIR-53891`, `FHIR-54080`, and `FHIR-54783` show signatures/additional-resource areas still under review after ballot4.

## Evidence log

- Page boundary and direct diff:
  - `test -f "$OLD_TREE/source/json.html"` and `test -f "$NEW_TREE/source/json.html"` both succeeded.
  - `git -C "$NEW_TREE" --no-pager diff --find-renames "$OLD_COMMIT" "$NEW_COMMIT" -- "source/json.html"` showed 114 insertions and 140 deletions.
- Source history:
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' "$OLD_COMMIT..$NEW_COMMIT" -- "source/json.html"` found 21 commits.
  - `git show --stat --patch` was used for each direct `json.html` commit.
  - `git blame -L 95,99 -- source/json.html` showed the current `resourceDefinition` exclusion line came from `931df6ae...`.
  - `git blame -L 92,99 -- source/resource/resource-introduction.xml` showed the promoted-to-core compatibility rule came from `09b9a4c...`.
- Jira:
  - Snapshot commands were run for all explicit keys and for `FHIR-50863`, `FHIR-51115`, `FHIR-41522`, `FHIR-53891`, `FHIR-54783`, and `FHIR-54080`.
  - FTS searches included `resourceDefinition additional resources`, `"additional resources" "resourceDefinition"`, `"Canonical JSON" signatures`, `cardinality JSON array normative`, `"RFC 8785" FHIR canonicalization`, and `json canonicalization RFC 8785`.
- Zulip:
  - FTS searches included `resourceDefinition additional resources`, `"additional resources" "resourceDefinition"`, `resourceDefinition additional resource`, and `RFC 8785 canonicalization`.
  - SQL `LIKE` searches counted exact Jira-key mentions because FTS failed on hyphenated keys.
- Confluence:
  - `refs jira` searches were run for explicit Jira keys plus `FHIR-50863` and `FHIR-51115`.
  - Snapshots were taken for `265096084`, `81010491`, `358883031`, `391186848`, `325460605`, `358255047`, and `358258654`.

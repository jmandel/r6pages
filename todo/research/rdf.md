# rdf research appendix

## Scope and coverage

- Page path: `source/rdf.html`.
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: `source/rdf.html` exists in both trees. R4 source has 454 lines; R6 ballot4 source has 1563 lines.
- Page read: the R6 ballot4 source page was read end-to-end in chunks.
- Direct diff: the page is a large rewrite, with 1563 insertions and 454 deletions in the two-endpoint diff.
- Source history: 71 commits touched `source/rdf.html` between the two source commits.
- Explicit Jira keys found in source history: `FHIR-25431`, `FHIR-37937`, `FHIR-37938`, `FHIR-37939`, `FHIR-37940`, `FHIR-37941`, `FHIR-49713`, `FHIR-44047`.
- Additional relevant Jira keys found through PR/Confluence context: `FHIR-48846`, `FHIR-48882`, `FHIR-49834`.
- Jira/Zulip/Confluence searches were performed for explicit Jira keys and distinctive changed phrases (`fhir:div`, `rdf:XMLLiteral`, `fhir:l`, `fhir:link`, `Concept IRI`, `IRI stem`, `RDF lists`, `fhir:index`, `Turtle shorthand`, `xsd:decimal`).
- Caveats:
  - Initial unquoted Zulip FTS searches for keys like `FHIR-37937` failed because the hyphen was parsed by FTS. Quoted searches such as `bun run zulip:search fts "\"FHIR-37937\""` were rerun and found no key-specific messages.
  - Several 2025 commit messages cite GitHub issue numbers (`#120`, `#127`, `#138`, etc.) from the W3C HCLS FHIR RDF repository, not Jira keys.
  - Some 2025 changes appear to have been discussed in W3C/HCLS minutes and GitHub issues rather than in Zulip.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/rdf.html` | Baseline page; Trial Use and much shorter RDF description. |
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html` | Current reviewed page. |
| Source lines | R6 status/header | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:19-20` | Page is now "RDF / Turtle" and Normative under ITS. |
| Source lines | Prefixes | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:88-108` | Adds explicit Turtle prefixes, including `loinc:` and `fhirw5:`. |
| Source lines | Turtle template | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:118-173` | Current resource template, cardinality/list rules, and type-arc guidance. |
| Source lines | Polymorphism | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:277-323` | New explanation of shared property names and type-discriminated polymorphic values. |
| Source lines | RDF lists | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:332-345` | R6 uses RDF collections instead of R4 `fhir:index`. |
| Source lines | Primitive literal rules | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:347-490` | Current primitive datatype, union datatype, and Turtle shorthand rules. |
| Source lines | XHTML contradiction | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:410-428` | Current page says both `rdf:XMLLiteral` and escaped `xsd:string` for XHTML. |
| Source lines | `fhir:l` | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:492-554` | New URI/reference linking guidance; R6 renames R5 `fhir:link` to `fhir:l`. |
| Source lines | Inline resources | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:556-704` | Reworked Bundle/contained-resource identity examples. |
| Source lines | Concept IRIs | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:705-819` | Adds IRI-stem model and SHOULD use THO-published stems. |
| Source lines | Extension example issue | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:821-854` | Current non-modifier extension example has type/syntax problems. |
| Source lines | Modifier extensions | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:879-960` | Adds underscore class/property semantics and ontology mapping properties. |
| Source lines | Artifact status | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:962-1027` | Current ShEx/OWL/W5/RIM artifact status text. |
| Source lines | Concept IRI algorithm | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:1178-1286` | Normative algorithm-like text for concept IRI generation. |
| Source lines | LOINC scheme mismatch | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:100`, `:754-755`, `:809`, `:1354-1363`, `:1461` | Same page uses both `http://loinc.org/rdf/` and `https://loinc.org/rdf/`. |
| Commit | R5 RDF usability rewrite | `95ebab0581cb29d7f8867a843d478baf9c3415d6`, https://github.com/HL7/fhir/commit/95ebab0581cb29d7f8867a843d478baf9c3415d6 | Implements `FHIR-37937` to `FHIR-37941`. |
| Commit | RDF page cleanup after rewrite | `0eb9b5726183fb5fbd1d4fc999aee901f444f44a`, https://github.com/HL7/fhir/commit/0eb9b5726183fb5fbd1d4fc999aee901f444f44a | Removes erroneous duplicated content and fixes page after the large rewrite. |
| Commit | Modifier extension ontology helpers | `3dbb9a1df170e394e8f8c04ed3c67913c4a86e8c`, https://github.com/HL7/fhir/commit/3dbb9a1df170e394e8f8c04ed3c67913c4a86e8c | Adds `fhir:modifierExtensionClass` and `fhir:modifierExtensionProperty` prose. |
| Commit/PR | Polymorphic property examples | `95e74808822af65afbfb0be444fb4f99690583c8`, https://github.com/HL7/fhir/pull/3227 | Implements `FHIR-48846` explanatory updates. |
| Commit/PR | Turtle template type arc | `5d1bae3c537066cd92f4a1a9cfdfb0d3465c6694`, https://github.com/HL7/fhir/pull/3528 | Fixes `FHIR-49713`; yellow template had missed the type-arc change from `FHIR-37937`. |
| Commit | `fhir:div` bnode example | `1c59841a18ca23ed4a027d63029f087722b31e2e`, https://github.com/HL7/fhir/commit/1c59841a18ca23ed4a027d63029f087722b31e2e | Applies W3C issue `#199` bnode form for `fhir:div`. |
| Commit | Normative page status | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changes page from Trial Use/FMM3 to Normative. |
| Commit | Normative marker cleanup | `605a6ffefb83e002264b0504348dea50144bb951`, https://github.com/HL7/fhir/commit/605a6ffefb83e002264b0504348dea50144bb951 | Removes `[%normative page infrastructure%]` marker. |
| Commit | Punctuation cleanup | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Applies `FHIR-44047` style cleanup on this page. |
| Jira | RDF usability series | `FHIR-37937` to `FHIR-37941`, e.g. https://jira.hl7.org/browse/FHIR-37937 | Formal R5 decisions for property names, `fhir:v`, RDF lists, modifier extensions, and concept IRIs. |
| Jira | Template type arc | https://jira.hl7.org/browse/FHIR-49713 | Corrects the resource template after the `FHIR-37937` property-name/type-arc change. |
| Jira | Polymorphism prose | https://jira.hl7.org/browse/FHIR-48846 | Source of PR 3227; adds more explanation/examples of polymorphic properties. |
| Jira | XHTML div examples | https://jira.hl7.org/browse/FHIR-49834 | Formal decision that FHIR RDF examples should use `rdf:XMLLiteral` for narrative XHTML divs. |
| GitHub issue | `fhir:div` XMLLiteral | https://github.com/w3c-cg/hcls-fhir-rdf/issues/187 | W3C/HCLS issue says group agreed to change `fhir:div` from `xsd:string` to `rdf:XMLLiteral`. |
| GitHub issue | `fhir:div` bnode standoff | https://github.com/w3c-cg/hcls-fhir-rdf/issues/199 | W3C/HCLS issue says group agreed to use `[ fhir:v "..."^^rdf:XMLLiteral ]`. |
| GitHub issue | LOINC URI slash fix context | https://github.com/w3c-cg/hcls-fhir-rdf/issues/185 | Lists LOINC URI fixes and other rdf.html cleanups; does not resolve current http/https mismatch. |
| GitHub PR | Generator XMLLiteral fix | https://github.com/hapifhir/org.hl7.fhir.core/pull/1854 | Implements `FHIR-49834` in generator, producing `rdf:XMLLiteral` for div text. |
| Zulip | ShEx / old `fhir:index` context | `bun run zulip:search snapshot ontology "ShEx"`; URL `https://chat.fhir.org/#narrow/stream/ontology/topic/ShEx` | 2016 background: Grahame says "we chose to use fhir:index not RDF lists"; later reversed by `FHIR-37939`. |
| Confluence | FHIR-25431 vote context | `bun run confluence:search snapshot 66940491` | FHIR-I 2020 minutes mention "Using data type" and auto-approval. |
| Confluence | FHIR-37941 context-only hit | `bun run confluence:search snapshot 144990122` | Clinical Genomics chat mention of IRI/terminology Jira keys, including `FHIR-37941`; context only. |
| Confluence | FHIR-44047 vote context | `bun run confluence:search snapshot 234784975` | FHIR-I WGM 202405 minutes record "FHIR-44047 will fix". |
| Confluence | ITS RDF subgroup votes | `bun run confluence:search snapshot 325458140` | 2025-03-12 ITS minutes mention RDF subgroup update and votes on `FHIR-48846`, `FHIR-48882`, `FHIR-49834`. |

## Change summary

### Page framing and maturity/status

- Type: metadata/template/navigation plus substantive standards-status change.
- R4 labels the page "Resource Description Framework (RDF) Representation", Trial Use, FMM 2, under the FHIR work group.
- R6 labels the page "Resource Description Framework (RDF) / Turtle Representation", Normative, under ITS, with explicit joint maintenance by the FHIR project/RDF subgroup and W3C HCLS.
- The table-of-contents was expanded from five broad bullets to detailed sections covering prefixes, templates, examples, serialization conventions, ShEx/OWL/W5/RIM artifacts, guidance, relationship to other ontologies, tutorials, and appendices.

### R5 RDF serialization usability changes

- Type: substantive/normative and non-compatible for RDF serialization, but scoped by Jira to RDF only.
- `FHIR-37937` shortened RDF property names and moved type information into explicit `rdf:type` arcs.
- `FHIR-37938` changed primitive literal value property from `fhir:value` to `fhir:v` to avoid OWL object/datatype property conflicts.
- `FHIR-37939` replaced the R4 `fhir:index` repeat-order pattern with RDF lists/collections.
- `FHIR-37940` added modifier-extension handling by underscore-prefixed modified resource classes/properties.
- `FHIR-37941` added concept IRI guidance and the SHOULD to use THO-published IRI stems when available.

### R6/R6-ballot4 RDF refinement changes

- Type: semantic guidance and examples, some tied to Jira and W3C issue decisions.
- The page now explains polymorphic properties and how FHIR RDF discriminates choice types with explicit type assertions.
- Primitive type class names are capitalized in RDF class position (`fhir:Code`, `fhir:Xhtml`) to avoid clashes with same-spelled properties.
- The old `fhir:link` relationship was renamed to `fhir:l`, including guidance for URI primitives, canonical version bars, and Reference targets.
- Inline resources were rewritten to cover Bundle members and contained resources with URI/base-resolution examples.
- Concept IRI/IRI-stem sections were greatly expanded, including an algorithm and registration guidance.
- ShEx/OWL/W5/RIM artifact roles were clarified, with ShEx and `fhir.ttl` described as normative in logical meaning while their expression is informative.

### Examples

- Type: example change, with some concrete defects remaining.
- The main example changed from older `Observation/Obs123` style examples to a `bgpanel` observation example.
- Bundle and contained-resource examples were added or rewritten.
- Extension and modifier-extension examples were added; the current non-modifier extension example contains actionable defects (see `todo/actions/rdf.md`).
- The `fhir:div` example was changed to a bnode standoff form with `rdf:XMLLiteral`, but one nearby prose sentence still says XHTML is escaped `xsd:string`.

### Editorial/mechanical churn

- The direct diff includes template changes, wording cleanup, broken-link fixes, punctuation cleanup (`FHIR-44047`), formatting/font fixes, and no-op commits documenting already-fixed W3C issues.
- Several commits were only editorial or generated by branch merges and do not indicate separate page-specific decisions.

## Source history

| Date | Commit | Category | Evidence/notes |
|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213` | mechanical/template | `update html template`. |
| 2022-08-31 | `8592e1207273` | editorial | `FHIR-25431` data type/datatype consistency. |
| 2022-09-02 | `95ebab0581cb` | substantive | Large RDF rewrite for `FHIR-37937`-`FHIR-37941`; 928 insertions. |
| 2022-09-02 | `340ed1383319` | formatting | Removes extraneous line and updates formatting for same Jira group. |
| 2022-09-05 | `0eb9b5726183` | cleanup/substantive repair | Removes 478 lines of erroneous duplicated page content after rewrite. |
| 2023-01-18 | `44b2897b75e0` | editorial | R5 editorial fixes. |
| 2023-01-18 | `29bcc44318e9` | mechanical/build | Removes build-failing URL. |
| 2023-01-27 | `e1276243c6d1` | editorial/navigation | Extensibility explanations, examples, typos, TOC. |
| 2023-02-21 | `dad7cf37c758` | QA | QA-related changes. |
| 2023-02-22 | `3dbb9a1df170` | semantic guidance | Adds `fhir:modifierExtensionClass` and `fhir:modifierExtensionProperty`. |
| 2023-03-15 | `cec565186f67` | link cleanup | Broken-link fixes. |
| 2024-11-04 | `993cdace5c60` | formatting | W3C issue 153, formatting on rdf.html. |
| 2024-11-04 | `95e74808822a` | semantic guidance | W3C issue 138; later tied to `FHIR-48846`/PR 3227. |
| 2024-11-04 | `df379fc08281` | semantic guidance | W3C issue 127; CURIEs as FHIR codes. |
| 2024-11-06 | `5cb98d87bb2b` | semantic cleanup | Deletes line about accepting CURIEs if encountered. |
| 2024-11-12 | `309f6be4ce87` | editorial/semantic | Rewords polymorphism; changes "predicate" to "property". |
| 2024-11-15 | `315bc12f37e4` | WG edit | Edits from 14-Nov-2024 FHIR RDF call. |
| 2024-11-15 | `812c6c779472` | merge | Merge into RDF polymorphic primitive branch. |
| 2024-11-19 | `7f7efc6d948b` | formatting | Formatting/font fixes. |
| 2024-11-21 | `ef27c3521079` | merge | Merge into RDF formatting branch. |
| 2025-02-04 | `f6a2da677cb4` | editorial | Update rdf.html. |
| 2025-02-04 | `f7d8b286c2c6` | merge | Merge branch for RDF polymorphic primitive work. |
| 2025-07-04 | `5d1bae3c5370` | example correction | Fixes Turtle template for `FHIR-49713`; PR 3528. |
| 2025-10-09 | `d907213f3995` | example correction | W3C issue 183; `fhir:subjectReference` -> `fhir:subject`. |
| 2025-10-13 | `c347df3e1d2a` | semantic guidance/editorial | Turtle shorthand restrictions and polymorphic property improvements. |
| 2025-10-14 | `c35784254187` | semantic guidance/editorial | LOINC URI slash fix, FHIR/Turtle/XSD literal differences. |
| 2025-10-15 | `364c1013a7a4` | semantic guidance/editorial | `fhir:link` -> `fhir:l`; appendix table column swap. |
| 2025-10-17 | `d9b54dcca19e` | editorial | Editorial improvements throughout. |
| 2025-10-17 | `f060706fe171` | example correction | Removes erroneous `a fhir:Reference` from subject example. |
| 2025-10-17 | `c7fb92dd1ec5` | example correction | Removes second erroneous `a fhir:Reference`. |
| 2025-10-17 | `06d00914821d` | editorial | Misc Reference section improvements. |
| 2025-10-17 | `c0d92b8a277f` | example alignment | W3C issue 185 item 1.a; aligns with current Observation yellow schema. |
| 2025-10-17 | `c5c99719706b` | example/editorial | W3C issue 185 items 2 and 3. |
| 2025-10-17 | `a900e500c96a` | noop/documentation | Notes previously fixed W3C issue 185 items 5-8. |
| 2025-10-17 | `da8711c1094b` | noop/documentation | Notes W3C issue 187 not needed then because no `fhir:div` example was shown. |
| 2025-10-17 | `7d5b9b58a2f0` | noop/documentation | W3C issue 120, `fhir:l` sibling already done. |
| 2025-10-17 | `70adbe909620` | noop/documentation | W3C issue 120, URI vertical-bar version conversion already done. |
| 2025-10-17 | `6cf52c433f8e` | semantic guidance | W3C issue 120; generate `fhir:l` for every URI. |
| 2025-10-17 | `2689243a9646` | noop/documentation | W3C issue 120, `fhir:link` -> `fhir:l` already done. |
| 2025-10-19 | `e18df923cf7f` | substantive/example | Rewrites inline resources for W3C issue 170 and updates extension example. |
| 2025-10-19 | `0bb7b4d111f8` | example/navigation | Updates Bundle example, adds prefixes, fixes HTML. |
| 2025-10-20 | `7c69feee904b` | semantic guidance/structure | Clarifies artifact roles and rearranges sections. |
| 2025-10-20 | `e92b82b54e07` | example/editorial | Changes example to `bgpanel`; tabs to spaces. |
| 2025-10-20 | `838dc098789f` | cross-page reference | Updates `datatypes.html` to point to rdf.html. |
| 2025-10-20 | `a83ae5a833f9` | cross-page guidance | Updates `datatypes.html`; adds IRI stem lookup guidance. |
| 2025-10-20 | `cee29f889992` | editorial/guidance | Improves "Using this format" section. |
| 2025-10-21 | `162d53231973` | cleanup | Removes obsolete TODO highlight. |
| 2025-10-21 | `b871106ec416` | editorial | Adds W5 to section title. |
| 2025-10-21 | `d1b92ab8a198` | structure | Restructures ontology section. |
| 2025-10-21 | `310450e52884` | editorial | Typo fixes. |
| 2025-10-21 | `179999e415b0` | editorial | Editorial tweaks. |
| 2025-10-21 | `1c59841a18ca` | example/spec consistency | W3C issue 199; `fhir:div` should use `rdf:XMLLiteral` bnode standoff. |
| 2025-10-21 | `5a46b805f009` | semantic wording | Rewords OWL/ShEx section and conformance keywords. |
| 2025-10-21 | `e45afb735179` | naming/conformance | W3C issue 178; capitalizes primitive types and conformance words. |
| 2025-10-22 | `7c94709077bf` | cleanup | Deletes obsolete TODO marker. |
| 2025-10-22 | `8244937cafb4` | example/link/editorial | Fixes extensibility example, links, typos. |
| 2025-10-24 | `4cfa14bc1bb5` | semantic guidance | Clarifies relative URL resolution semantics. |
| 2025-10-24 | `aa6e397bf07d` | whitespace | Whitespace-only. |
| 2025-10-24 | `aac0677f9522` | mechanical | `s/.stu/b`. |
| 2025-10-24 | `a7f16bf5301f` | example correction | Parent bnode -> relative URI `<>` in contained example. |
| 2025-10-28 | `d1b89bc74b91` | noop/documentation | Notes W3C issue 182 already fixed. |
| 2025-10-28 | `d7b440afb2a0` | noop/documentation | Notes W3C issue 200 `w5:` -> `fhirw5:` already fixed. |
| 2025-10-28 | `4a0b9e91b171` | semantic naming | Clarifies `fhir:Xhtml` capitalization. |
| 2025-10-28 | `fd59d45fdf02` | QA/editorial | Fixes HTML warnings. |
| 2025-10-28 | `516c2ba1f617` | semantic cleanup | Removes obsolete `fhir:instantiates` property example. |
| 2025-10-28 | `f77b3078fbb1` | markup fix | Fixes missing HTML tag. |
| 2025-10-28 | `bc1f22d824af` | cleanup | Deletes obsolete self-reminder. |
| 2025-10-28 | `96ee2d1ae631` | link cleanup | Fixes broken links. |
| 2025-10-31 | `270e0ceb7b02` | status/normative | Changes page header to Normative/ITS. |
| 2025-10-31 | `605a6ffefb83` | status/normative cleanup | Removes normative page infrastructure macro. |
| 2025-11-03 | `887bc2383fb7` | editorial | `FHIR-44047` punctuation cleanup. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-25431` (Published, Persuasive, R5): "Inconsistent use of datatype vs. data type." This is editorial terminology cleanup, not RDF-specific semantics.
- `FHIR-37937` (Published, Persuasive, R5, Non-compatible): Shortening RDF/Turtle property names and replacing type-bearing property names with explicit type arcs. Jira says these changes affect only RDF serialization, not JSON/XML or underlying FHIR models.
- `FHIR-37938` (Published, Persuasive, R5, Non-compatible): Changes primitive scalar value property from `fhir:value` to `fhir:v` because OWL DL does not allow one property to be both object and datatype property.
- `FHIR-37939` (Published, Persuasive, R5, Non-compatible): Replaces R4 `fhir:index` repeat ordering with RDF lists/collections.
- `FHIR-37940` (Published, Persuasive, R5, Non-compatible): Adds underscore-prefixed classes/properties for elements with modifier extensions.
- `FHIR-37941` (Published, Persuasive, R5, Non-substantive clarification): Adds concept IRI guidance and says THO-published IRI stems SHOULD be used when available.
- `FHIR-49713` (Triaged/indeterminate but Resolution Persuasive, R6): Says the yellow Turtle template was missing the `rdf:type` arc from `FHIR-37937`; PR 3528 fixed and merged it.
- `FHIR-44047` (Resolved - change required, Persuasive): Broad punctuation cleanup for `e.g.,` and `i.e.,`; commit `887bc2383fb7` touched this page.

### Other Jira issues that plausibly explain current text

- `FHIR-48846` (Applied, Persuasive, R6): Adds more explanation/examples of polymorphic properties. Jira links PR 3227, whose commits include `95e74808822a`, `309f6be4ce87`, `315bc12f37e4`, and related merges/updates.
- `FHIR-48882` (Applied, Persuasive, R6): RDF page font/formatting issue corresponding to W3C issue 153. Context only for page formatting.
- `FHIR-49834` (Applied, Persuasive, R6, Non-compatible correction): "Correct the type of text div xhtml properties in FHIR RDF examples." Jira says generated examples should use `rdf:XMLLiteral`, not plain string, for narrative XHTML divs. This supports the action finding that the current `xsd:string` sentence in rdf.html is stale.

### Context-only Jira hits that should not drive action

- `FHIR-25431` Confluence minutes confirm "Using data type" but do not affect RDF semantics.
- `FHIR-37941` appeared in Clinical Genomics minutes/chat context about terminology/IRI discussions. This supports broader interest in IRI stems but does not change the rdf.html implementation evidence.
- `FHIR-44047` is a style cleanup; no page-specific semantic issue.

## Zulip evidence

- Quoted FTS searches for explicit Jira keys (`FHIR-25431`, `FHIR-37937`-`FHIR-37941`, `FHIR-49713`, `FHIR-44047`, `FHIR-49834`, `FHIR-48846`) found no Zulip messages in the local snapshot.
- Exact phrase searches for `"fhir:div" "rdf:XMLLiteral"`, `"fhir:l" "fhir:link"`, `"Concept IRI" "IRI stem"`, and `"Turtle shorthand" "xsd:decimal"` found no relevant Zulip hits.
- `bun run zulip:search fts "\"RDF lists\" \"fhir:index\"" --limit 10` found one historical context hit in `#ontology > ShEx`.
- Snapshot: `bun run zulip:search snapshot ontology "ShEx"`, URL `https://chat.fhir.org/#narrow/stream/ontology/topic/ShEx`.
  - On 2016-04-14, the thread discussed ShEx handling of `fhir:index`.
  - Grahame Grieve wrote "we chose to use fhir:index not RDF lists" (historical R4 context).
  - This is useful background only: it shows the old design later reversed by `FHIR-37939`.

## Confluence evidence

- `bun run confluence:search snapshot 66940491`: FHIR Infrastructure Minutes CC 20200113 include `FHIR-25431`; text says "Lloyd: Using 'data type' Will auto approve." This supports the editorial nature of the data type/datatype change.
- `bun run confluence:search snapshot 144990122`: Clinical Genomics 2022-12-13 references `FHIR-37941` in chat alongside terminology IRI tickets (`UP-364`, `FHIR-37962`). This is context-only and not evidence of the rdf.html source change.
- `bun run confluence:search snapshot 234784975`: FHIR Infrastructure Minutes WGM 202405 - Dallas include "FHIR-44047 will fix", matching the later punctuation cleanup commit.
- `bun run confluence:search snapshot 325458140`: 2025-03-12 ITS minutes include an RDF subgroup update and votes on:
  - `FHIR-48846` Polymorphic types, motion approved DB/BP 4-0-0.
  - `FHIR-48882` font fields technical correction.
  - `FHIR-49834` correct type of text div XHTML properties in FHIR RDF examples, motion approved DB/BP 4-0-0.

## Timeline

| Date | Clock | Event |
|---|---|---|
| 2016-04-14 | Zulip discussion | `#ontology > ShEx` discusses `fhir:index`; Grahame says the then-current choice was `fhir:index`, not RDF lists. |
| 2020-01-13 | Confluence minutes | FHIR-I minutes mention `FHIR-25431` data type wording cleanup. |
| 2022-08-17 | Jira creation/vote | `FHIR-37937`-`FHIR-37941` created/resolved/voted by ITS/RDF participants for R5 RDF usability changes. |
| 2022-09-02 | Source commit | `95ebab0581cb` applies the large RDF page update for `FHIR-37937`-`FHIR-37941`. |
| 2022-09-05 | Source commit | `0eb9b5726183` cleans erroneous page content after the large update. |
| 2023-03-26 | Publication boundary | R5 published with the RDF serialization changes (inferred from R5 target in Jira/source; not separately rendered here). |
| 2024-11-15 | Jira created | `FHIR-48846` created for polymorphic property explanation/examples. |
| 2025-03-12 | ITS minutes/vote | ITS minutes approve RDF subgroup items including `FHIR-48846`, `FHIR-48882`, and `FHIR-49834`. |
| 2025-03-12 | Jira resolved | `FHIR-49834` resolves the generated-example `fhir:div` datatype issue as `rdf:XMLLiteral`. |
| 2025-07-04 | Source commit | `5d1bae3c5370` fixes `FHIR-49713` in `source/rdf.html`; PR 3528 later recorded as merged. |
| 2025-10-13 to 2025-10-28 | Source commits | Intensive rdf.html cleanup/refinement: polymorphism, `fhir:l`, inline resources, examples, artifact roles, primitive type naming, `fhir:div` bnode/XMLLiteral. |
| 2025-10-21 | Source commit | `1c59841a18ca` changes the `fhir:div` example to `[ fhir:v "..."^^rdf:XMLLiteral ]`. |
| 2025-10-31 | Source commits | `270e0ceb7b02` and `605a6ffefb83` change page status to Normative and clean up status markup. |
| 2025-11-03 | Source commit | `887bc2383fb7` applies `FHIR-44047` punctuation cleanup. |
| 2026-05-20 | Review | Current review found three actionable current-page issues: stale XHTML `xsd:string` prose, invalid/inconsistent extension example, and LOINC `http`/`https` IRI-stem mismatch. |

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/rdf.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/rdf.html" && echo "new exists"`
  - Result: both exist.
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/rdf.html`
  - Stored at `.copilot/session-state/2cb830ae-a0f6-4cc1-8bf7-5365cbc3d826/files/rdf/direct-diff.patch`.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/rdf.html`
  - Stored at `.copilot/session-state/2cb830ae-a0f6-4cc1-8bf7-5365cbc3d826/files/rdf/commits.tsv`.
- Selected commit patches:
  - Stored as `show-<sha>.patch` in `.copilot/session-state/2cb830ae-a0f6-4cc1-8bf7-5365cbc3d826/files/rdf/`.
- Jira snapshots:
  - `bun run jira:search snapshot FHIR-37937` through `FHIR-37941`.
  - `bun run jira:search snapshot FHIR-49713`.
  - `bun run jira:search snapshot FHIR-48846`.
  - `bun run jira:search snapshot FHIR-49834`.
  - `bun run jira:search snapshot FHIR-44047`.
  - Stored in `jira-snapshots.txt` and `jira-additional-snapshots.txt` under the session `files/rdf` directory.
- Zulip searches:
  - Initial unquoted key searches failed with FTS hyphen parsing errors; quoted key searches reran and found no key hits.
  - `bun run zulip:search fts "\"RDF lists\" \"fhir:index\"" --limit 10` found historical `#ontology > ShEx`.
  - `bun run zulip:search snapshot ontology "ShEx"` captured the full thread.
- Confluence searches/snapshots:
  - `bun run confluence:search refs jira <KEY>` and `bun run confluence:search fts <KEY> --limit 10` for explicit and additional keys.
  - Snapshots read for pages `66940491`, `144990122`, `234784975`, and `325458140`.

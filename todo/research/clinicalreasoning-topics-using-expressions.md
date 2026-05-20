# clinicalreasoning-topics-using-expressions research appendix

## Scope and coverage

- Page path: `source/clinicalreasoning-topics-using-expressions.html`
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: page exists in both trees. Old source is 190 lines; new source is 235 lines.
- Newer R6 ballot4 source page was read end-to-end: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-using-expressions.html:1-235`.
- Direct R4 -> R6 ballot4 page diff: 62 insertions, 17 deletions.
- Source-history commits touching this page in range: 23.
- Explicit Jira keys found in source commit metadata: `FHIR-27883`, `FHIR-25431`, `FHIR-28556`, `FHIR-30570`, `FHIR-28283`, `FHIR-29211`, `FHIR-38848`, `FHIR-25737`, `FHIR-43175`, `FHIR-39528`, `FHIR-51574`, `FHIR-49976`, `FHIR-53080`, `FHIR-44047`.
- Additional Jira issues found by phrase/page searches and used as evidence: `FHIR-35981`, `FHIR-36496`, `FHIR-29551`, `FHIR-49740`, `FHIR-49581`, `FHIR-30932`.
- Jira snapshots were taken for all explicit source-history keys and for the additional CQL-media/page-path issues above.
- Zulip searches were run for explicit Jira keys, page path, `text/cql-identifier`, `text/cql-expression`, and UCUM URL phrases. Promising threads were snapshotted.
- Confluence `refs jira` and FTS searches were run for explicit Jira keys and key phrases. Only one direct Confluence reference for a core page-change key was found: `FHIR-49976` in CDS agenda page `324969006`.
- Caveats: most explicit Jira keys had no direct Zulip key hits and no Confluence references. The UCUM typo appears in the current source and is contradicted by FHIRPath text, but no page-specific Jira issue for this typo was found. `FHIR-44047` is still in Jira status `Resolved - change required` even though one punctuation commit touched this page, so it is context for an editorial sweep, not a page-specific disposition.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New R6 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-using-expressions.html:1-235` | Current page reviewed end-to-end |
| Source | CQL media type list and compatibility note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-using-expressions.html:52-90` | Contains `text/cql`, `text/cql-identifier`, `text/cql-expression`, and a `<text>` markup defect |
| Source | Qualified expression examples and inline-expression guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-using-expressions.html:115-149` | Current examples still use `text/cql` while related guidance/Jira says qualified identifiers use `text/cql-identifier` |
| Source | Evaluation context and parameter guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-using-expressions.html:151-177` | R6 additions from `FHIR-39528`, `FHIR-51574`, and `FHIR-29211` |
| Source | Quantity/UCUM section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-using-expressions.html:195-214` | Added by `FHIR-28283`; current text misspells `http://unitsofmeasure.org` |
| Source | FHIRPath comparison text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:194-202` | `FHIR-28283` asked for similar text; FHIRPath has the correct UCUM URL |
| Local artifact | Saved direct diff | `.copilot/session-state/c833eca6-acc8-497c-90e2-8c7b6b85cd36/files/clinicalreasoning-topics-using-expressions.diff` | Direct R4 -> R6 page diff |
| Local artifact | Saved commit list | `.copilot/session-state/c833eca6-acc8-497c-90e2-8c7b6b85cd36/files/clinicalreasoning-topics-using-expressions.commits.txt` | Chronological source-history list |
| Commit | `c3a6925d119e8f0c2360c819b1e3ddcd7b772b04` | https://github.com/HL7/fhir/commit/c3a6925d119e8f0c2360c819b1e3ddcd7b772b04 | Corrected examples to `text/cql-identifier`/`text/cql-expression` for `FHIR-35981`/PR 1801 |
| Commit | `c7660fc81c9a286d9f1db2210560f4d16a29a00f` | https://github.com/HL7/fhir/commit/c7660fc81c9a286d9f1db2210560f4d16a29a00f | Added Quantity/UCUM section for `FHIR-28283` |
| Commit | `96ae6fe19d929585aa3b10e1257887adf15b9557` | https://github.com/HL7/fhir/commit/96ae6fe19d929585aa3b10e1257887adf15b9557 | Added operation-parameter context-variable recommendation for `FHIR-29211` |
| Commit | `67989bee777b5e31b8065968748cc29aa4f5fb34` | https://github.com/HL7/fhir/commit/67989bee777b5e31b8065968748cc29aa4f5fb34 | Added subject/evaluation-context guidance for `FHIR-39528` |
| Commit | `fc77fd6df77c46c31523e9161e41ec5c150eb6ae` | https://github.com/HL7/fhir/commit/fc77fd6df77c46c31523e9161e41ec5c150eb6ae | Added inline-expression/library access guidance for `FHIR-49976` |
| Commit | `43b30c68fb2502e969acc862afac259bd4b7d412` | https://github.com/HL7/fhir/commit/43b30c68fb2502e969acc862afac259bd4b7d412 | Added `text/cql` backwards-compatibility note and FHIRPath link updates for `FHIR-53080` |
| Commit | `7466cfc63cd0b162497a42c80a67480eed86c75a` | https://github.com/HL7/fhir/commit/7466cfc63cd0b162497a42c80a67480eed86c75a | Set page standards status to Normative |
| Jira | FHIR-28283 | https://jira.hl7.org/browse/FHIR-28283; reopen with `bun run jira:search snapshot FHIR-28283` | Rationale for adding Quantity/UCUM conversion guidance |
| Jira | FHIR-35981 | https://jira.hl7.org/browse/FHIR-35981; reopen with `bun run jira:search snapshot FHIR-35981` | Says Using Expressions examples using `text/cql` should use `text/cql-expression` or `text/cql-identifier` as appropriate |
| Jira | FHIR-49976 | https://jira.hl7.org/browse/FHIR-49976; reopen with `bun run jira:search snapshot FHIR-49976` | R6 formal decision for inline expressions and library access |
| Jira | FHIR-53080 | https://jira.hl7.org/browse/FHIR-53080; reopen with `bun run jira:search snapshot FHIR-53080` | R6 formal decision to update page content and make page Normative |
| Jira | FHIR-49581 | https://jira.hl7.org/browse/FHIR-49581; reopen with `bun run jira:search snapshot FHIR-49581` | Cross-spec issue saying library expression names should use `text/cql-identifier`, qualified when multiple libraries are in scope |
| PR | HL7/fhir#1801 | https://github.com/HL7/fhir/pull/1801 | Linked from `FHIR-35981`, media-type correction |
| PR | HL7/fhir#2834 | https://github.com/HL7/fhir/pull/2834 | Linked from `FHIR-28283`, `FHIR-29211`, and `FHIR-38848` comments |
| PR | HL7/fhir#3864 | https://github.com/HL7/fhir/pull/3864 | Linked from `FHIR-49976` |
| PR | HL7/fhir#3914 | https://github.com/HL7/fhir/pull/3914 | Linked from `FHIR-53080` |
| Zulip | CQL expression extensions in questionnaire | https://chat.fhir.org/#narrow/stream/questionnaire/topic/CQL%20expression%20extensions%20in%20questionnaire | Bryn Rhodes explains `text/cql` is whole-library CQL, `text/cql-expression` is expression grammar, `text/cql-identifier` is identifier or qualified identifier |
| Zulip | Plan Definition with Conditions syntax help | https://chat.fhir.org/#narrow/stream/hapi/topic/Plan%20Definition%20with%20Conditions%20syntax%20help | User hit runtime issue using `text/cql` for an expression name; answer was to use `text/cql-identifier` |
| Zulip | Example Questionnaires with CQL | https://chat.fhir.org/#narrow/stream/Da%20Vinci%20DTR/topic/%E2%9C%94%20Example%20Questionnaires%20with%20CQL | Shows current user confusion and points to this page for `text/cql-identifier` guidance |
| Confluence | CDS 2025-03-26 agenda | https://confluence.hl7.org/spaces/CDS/pages/324969006/2025-03-26+-+Meeting+Agenda; reopen with `bun run confluence:search snapshot 324969006` | Meeting/process evidence for approval of `FHIR-49976` |

## Change summary

### CQL media types and ExpressionLanguage references - substantive/semantic guidance

- R4 linked `codesystem-expression-language.html`; R6 links `valueset-expression-language.html` and describes the value set as based on media types.
- `FHIR-27883` introduced the CQL media-type split, initially `text/cql.identifier`, and changed the named-expression example away from generic `text/cql`.
- `FHIR-36496` and `FHIR-35981` corrected the IANA names to `text/cql-identifier` and `text/cql-expression`, and added examples using those codes.
- R6 ballot4 current page lists `text/cql`, `text/cql-identifier`, and `text/cql-expression`, and states systems MAY treat `text/cql` as `text/cql-identifier` for backwards compatibility.
- Actionable issue: the qualified-expression XML/JSON examples at current lines 120 and 131 still use `text/cql`; this appears inconsistent with `FHIR-35981`, `FHIR-49581`, and Zulip guidance saying qualified identifiers should use `text/cql-identifier`.

### Library references and inline CQL - substantive/normative guidance

- `FHIR-49976` added a SHALL about CQL identifiers with `Expression.reference`, and added the Inline Expressions section.
- Current source lines 141-145 include two SHALLs:
  - CQL identifiers with a `reference` SHALL identify an expression in the referenced library.
  - Inline CQL expressions SHALL have access to any libraries referenced by the resource.
- Jira `FHIR-49976` says this was a non-substantive clarification for R6. The CDS 2025-03-26 Confluence agenda records approval of that tracker set.

### Evaluation context, Measure subject, and operation parameters - substantive/semantic guidance

- `FHIR-39528` replaced the older "Measure overrides general behavior" note with explicit subject-based evaluation context guidance for knowledge artifacts.
- `FHIR-51574` added a Measure-specific note: root `Measure.subject` is being deprecated, group-level subject is more flexible, and missing `group.subject` means the CQL context is `unfiltered`.
- `FHIR-29211` added a SHOULD recommendation that operations make operation parameters available as context variables when evaluating expressions.

### Quantity/UCUM mapping - substantive/semantic guidance

- `FHIR-28283` added a "Use of FHIR Quantity" section mirroring FHIRPath quantity guidance.
- Current lines 195-214 now describe when FHIR Quantity can map to CQL `System.Quantity`, map time-valued UCUM units to calendar duration units, and give an example.
- Actionable issue: current line 197 uses `http://unitsofmeausure.org`, while the FHIRPath source text it was modeled on uses `http://unitsofmeasure.org`.

### Links, references, and examples - examples/link maintenance

- `FHIR-25737` changed relative canonical example references such as `Library/mmi-suiciderisk-orderset-logic` to absolute canonical URLs.
- `FHIR-38848` fixed an XML example closing tag from `>/valueExpression>` to `</valueExpression>`.
- `FHIR-30570` and `FHIR-43175` moved CQL usage guidance out to the Using CQL with FHIR IG and fixed the link to the published IG.
- Extension links were changed from local extension pages to `[%extensions-location%]StructureDefinition-cqf-expression.html` and `[%extensions-location%]StructureDefinition-cqf-library.html`.

### Metadata/template/navigation - metadata/template

- The old page had a Trial Use metadata table with FMM 2. R6 ballot4 has `Responsible Owner: Work Group ...` and Standards Status `Normative`.
- Template commits removed the outer `<div class="col-12">`, adjusted table classes, and removed FMM display from the page header.

### Editorial only / mechanical noise

- `FHIR-25431` changed "data type" to "datatype".
- `FHIR-44047` added commas after `i.e.` in several newly added lines.
- The FHIRPath section was shortened and linked to the independent FHIRPath specification; this is editorial/structure per `FHIR-53080`.

## Source history

| Commit | Date | Jira/PR evidence | Page-specific effect | Classification |
|---|---:|---|---|---|
| `450cf3e64ae3d71ae6c027d39327311afdfc1986` | 2020-06-30 | `FHIR-27883` | Changed ExpressionLanguage link from code system to value set, added FHIR Query and CQL identifier media type, changed named-expression example, updated CQL release label | Substantive/semantic guidance |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | none | Removed outer `div` wrapper as part of HTML template update | Mechanical/template |
| `c3a6925d119e8f0c2360c819b1e3ddcd7b772b04` | 2022-03-22 | `FHIR-35981`, PR 1801 | Changed examples from `text/cql` or `text/cql.identifier` to `text/cql-expression`/`text/cql-identifier`; added CQL Expression list entry | Substantive correction |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | `FHIR-25431` | "data type" -> "datatype" | Editorial |
| `7a7282f7790f78ca919721ed0528756482994420` | 2022-09-04 | `FHIR-28556`, PR 2372 | Changed CQL product label from Release 1.4 to Release 1 | Editorial/reference cleanup |
| `c3da43d4d906bc8ef71d67923be5e5db976665be` | 2022-09-05 | none | Changed page header table class to `colstu` | Metadata/template |
| `b3e373388f8137e589fdc6b18beb9ff86a2c23cb` | 2023-02-08 | none | Fixed `cqf-expression` and `cqf-library` extension links to use `[%extensions-location%]` | Link maintenance |
| `2e2ccec2adf474bbdbb66019700fc8f71ecc3b99` | 2023-02-11 | `FHIR-30570`, PR 2635 | Added guidance link to CRMI/Using CQL; first insertion used markdown link syntax in HTML | Link/guidance |
| `c7660fc81c9a286d9f1db2210560f4d16a29a00f` | 2023-03-12 | `FHIR-28283`, PR 2834 | Added "Use of FHIR Quantity" section and UCUM time-valued unit mapping | Substantive/semantic guidance |
| `96ae6fe19d929585aa3b10e1257887adf15b9557` | 2023-03-12 | `FHIR-29211`, PR 2834 | Added SHOULD guidance for operation parameters as context variables | Substantive/semantic guidance |
| `db10b408ffb94fa0a2279b399518a102493f7d8e` | 2023-03-12 | `FHIR-38848`, PR 2834 | Fixed malformed XML closing tag in example | Concrete editorial/example correction |
| `54830d2febad78c584b8fde82d53885061dea26f` | 2023-03-19 | `FHIR-25737`, PR 2879 | Changed example Library canonical references from relative to absolute | Example correction |
| `80eecb02fa2e33912305596384aaf6eca318d670` | 2023-03-25 | none | Replaced `build.fhir.org` CRMI link with `[%ig crmi%]` macro, still markdown syntax | Link maintenance |
| `bef4e71b772211a695d045c7aabdd66019700fc8f71ecc3b99` | 2025-03-09 | `FHIR-43175`, PR 3359 | Replaced broken CRMI/Using CQL reference with published `https://hl7.org/fhir/uv/cql/` anchor | Link/guidance |
| `a6329ef5d1e8951a0bbe48b2ac5b0f54a6468a7e` | 2025-03-10 | `FHIR-43175` follow-up | Removed leading space from the `href` value | Editorial/link correction |
| `67989bee777b5e31b8065968748cc29aa4f5fb34` | 2025-03-18 | `FHIR-39528`, PR 3411 | Clarified subject-based evaluation context for knowledge artifacts | Substantive/semantic guidance |
| `f9a0e6d380fc375ba5a4c44e90ae0a40da6c64cd` | 2025-10-21 | `FHIR-51574`, PR 3811/3932 | Added Measure root-subject deprecation and unfiltered context note | Substantive guidance |
| `fc77fd6df77c46c31523e9161e41ec5c150eb6ae` | 2025-10-28 | `FHIR-49976`, PR 3864 | Added identifier/reference SHALL and Inline Expressions section | Substantive/normative guidance |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | none | Changed header style/owner wording but still left Standards Status as Trial Use in that commit | Metadata/template |
| `43b30c68fb2502e969acc862afac259bd4b7d412` | 2025-11-01 | `FHIR-53080`, PR 3914 | Added backwards-compatibility note for `text/cql`; changed FHIRPath links and reduced duplicated FHIRPath prose | Semantic/editorial |
| `8a448f61f25b04d6dae7fff0b7ec082ae8ca833d` | 2025-11-01 | none | Merge branch into `br-cds-2025-10-31`; page had a one-line merge reconciliation | Mechanical/merge |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Added commas after `i.e.` in new inline-expression/Quantity prose | Editorial |
| `7466cfc63cd0b162497a42c80a67480eed86c75a` | 2025-11-12 | `FHIR-53080` context | Set Standards Status from Trial Use to Normative | Metadata/status |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-27883` - Published, R5, persuasive with modification. Added `text/cql-identifier` and `text/cql-expression` to FHIR MIME expansion, removed/deprecated ExpressionLanguage code system usage, and moved value set to BCP 13 codes. Comments record IANA completion and dash-separated names.
- `FHIR-25431` - Published technical correction for consistent "datatype" spelling. Context-only for this page.
- `FHIR-28556` - Published clarification about DataRequirement examples. It explains the broad examples cleanup; the page-specific result here is only the CQL release label/reference cleanup.
- `FHIR-30570` - Published, R5. Asked for CQL Library usage guidance. Comments explain that guidance was consolidated into the CRMI/Using CQL material and this page was updated to point there.
- `FHIR-28283` - Published, R5. Asked to add text similar to FHIRPath quantity guidance for implicit conversion of UCUM definite-duration time-valued units to calendar duration units. Applied by commit `c7660fc...`; current page has a typo in the UCUM URL.
- `FHIR-29211` - Published, R5. Asked that expressions be able to access operation parameter fields. Resolution chose SHOULD guidance rather than a blanket requirement.
- `FHIR-38848` - Published technical correction. Directly requested changing `>/valueExpression>` to `</valueExpression>`.
- `FHIR-25737` - Published correction. Requested absolute canonical URLs in examples.
- `FHIR-43175` - Applied for R6. Clarified references to Using CQL for operation parameters and fixed broken link to the published Using CQL with FHIR IG.
- `FHIR-39528` - Applied for R6. Requested subject-based evaluation context guidance for knowledge artifacts with a subject element.
- `FHIR-51574` - Applied for R6. Deprecates root `Measure.subject` and requests Using Expressions language saying absent `group.subject` means CQL context is `unfiltered`.
- `FHIR-49976` - Applied for R6. Formal decision to add inline CQL expression guidance and clarify that CQL identifiers with `Expression.reference` SHALL identify expressions in the referenced library.
- `FHIR-53080` - Applied for R6. Requested reducing duplicated FHIRPath/CQL/Using CQL content and making this page Normative. Linked PR 3914.
- `FHIR-44047` - Resolved - change required, not done. Broad editorial issue about `e.g.,` and `i.e.,` punctuation; one commit applied punctuation edits to this page.

### Other Jira issues that plausibly explain changed text

- `FHIR-35981` - Published correction: "Multiple places throughout the Using Expressions topic reference the text/cql media type, but they should be using the text/cql-expression or text/cql-identifier media types as appropriate for the examples." This directly explains commit `c3a692...` even though that commit message omitted the Jira key.
- `FHIR-36496` - Published correction to ExpressionLanguage value set. It records the change from `text/cql.identifier` to `text/cql-identifier` and adds `text/cql-expression`.
- `FHIR-29551` - CQL issue adding `text/cql-expression` to distinguish a pure CQL expression from `text/cql` as a complete CQL library.
- `FHIR-49740` - CQL IG issue with the same resolution text later mirrored by `FHIR-49976`: inline CQL expressions use `text/cql-expression`; named expressions use `text/cql-identifier`.
- `FHIR-49581` - SDC issue saying expression guidance in another spec was inconsistent with base FHIR/Using CQL. It explicitly says an expression element uses `text/cql-expression` for inline CQL and `text/cql-identifier` for a named expression in a library, "qualified if there are multiple library references in the artifact." This supports the action item about current examples at lines 120 and 131.
- `FHIR-30932` - Earlier operation-parameters issue. A later comment from Paul Denning says R5 links to "Using CQL" were hard to find and motivated the R6 correction tracked by `FHIR-43175`.

### Context-only Jira hits that should not drive action

- Page-path search also returned `FHIR-24022`; it is an IG context hit and not direct evidence for the R4 -> R6 page change.
- UCUM phrase search returned older UCUM URL issues (`FHIR-14459`, `FHIR-19472`, `FHIR-19537`, etc.). They confirm the canonical spelling is widely used, but none directly discusses this page's R6 typo.
- `FHIR-44047` is an editorial sweep and should not be interpreted as a page-specific unresolved semantic issue.

## Zulip evidence

- `#IG creation > Quality Measure IG QA Issues` (2020-06-29) includes Bryn Rhodes linking `FHIR-27883` as the tracker for adding CQL media types to the ExpressionLanguage value set. Snapshot command: `bun run zulip:search fts "\"FHIR-27883\"" --limit 20`.
- `#questionnaire > CQL expression extensions in questionnaire` (2024-04-04 to 2024-04-11) is high-value rationale:
  - Bryn Rhodes says `text/cql` is used when content is an entire CQL Library, `text/cql-expression` when content is a CQL expression, and `text/cql-identifier` when content is a valid identifier or qualified identifier.
  - Lloyd McKenzie notes historical/backwards-compatible use of `text/cql` for inline CQL.
  - Snapshot command: `bun run zulip:search snapshot questionnaire "CQL expression extensions in questionnaire"`.
- `#hapi > Plan Definition with Conditions syntax help` (2025-01-21 to 2025-01-22) shows an implementation-facing failure mode: a PlanDefinition condition using `text/cql` with an expression name failed to resolve; Brenin Rhodes advised using `text/cql-identifier` because the expression is defined within the referenced library. Snapshot command: `bun run zulip:search snapshot hapi "Plan Definition with Conditions syntax help"`.
- `#Da Vinci DTR > Example Questionnaires with CQL` (2025-05-29 to 2025-05-30) shows implementer confusion around `text/cql-identifier`; Brenin Rhodes points to this page and says qualified library names can be used when multiple libraries are referenced. Lloyd McKenzie notes older SDC/DTR versions may still use `text/cql`. Snapshot command: `bun run zulip:search snapshot "Da Vinci DTR" "✔ Example Questionnaires with CQL"`.
- `#IG creation > using text/cql or text/cql-identifier` (2024-04-01) is context-only evidence that extensible binding allows newer media types in older-version contexts; it does not identify a page defect.
- Key searches for `FHIR-28283`, `FHIR-29211`, `FHIR-38848`, `FHIR-25737`, `FHIR-43175`, `FHIR-39528`, `FHIR-51574`, `FHIR-49976`, `FHIR-53080`, and `FHIR-44047` produced no direct Zulip hits in the local default database.

## Confluence evidence

- `CDS 2025-03-26 - Meeting Agenda`, page ID `324969006`, references `FHIR-49976` in an approved tracker set. This is process evidence that the workgroup approved the inline-expression/library-access change. Snapshot command: `bun run confluence:search snapshot 324969006`.
- `FHIR Infrastructure Minutes CC 2023-10-23`, page ID `197331139`, mentions this page as related context for an unrelated expression-related Jira discussion. This is background-only and does not explain the reviewed page changes.
- Confluence FTS for `unitsofmeasure` found multiple historical mentions of the canonical UCUM URL and discussions that the URL is widely used. These are background-only for the typo and not direct page-change evidence.
- Confluence searches found no references for most explicit page-change keys, including `FHIR-53080`, `FHIR-28283`, `FHIR-29211`, `FHIR-39528`, and `FHIR-51574`.

## Timeline

| Date | Event type | Evidence | Notes |
|---:|---|---|---|
| 2020-06-29 | Discussion/Jira created | Zulip `#IG creation > Quality Measure IG QA Issues`; `FHIR-27883` created | Tracks adding CQL media types to ExpressionLanguage |
| 2020-06-30 | Source commit | `450cf3e64ae3d71ae6c027d39327311afdfc1986` | Adds value set link and early CQL identifier text |
| 2020-10-26 | CQL Jira | `FHIR-29551` | Adds `text/cql-expression`; distinguishes expression from full CQL library |
| 2020-12-09 | Jira resolution/comment | `FHIR-27883` | IANA registration completed; names use dashes |
| 2021-03-17 / 2021-03-24 | Jira resolution/vote | `FHIR-28283` | Agrees to add FHIRPath-like quantity conversion guidance |
| 2022-02-08 / 2022-02-16 | Jira resolution/vote | `FHIR-35981` | Correct `text/cql` examples to specific CQL media types |
| 2022-03-22 | Source commit | `c3a6925d119e8f0c2360c819b1e3ddcd7b772b04` | Applies CQL media type example corrections |
| 2022-04-13 | Jira resolution/vote | `FHIR-36496` | Corrects ExpressionLanguage value set to dashed IANA names |
| 2023-03-12 | Source commits | `c7660fc...`, `96ae6f...`, `db10b...` | Adds Quantity section, parameter context-variable guidance, and XML tag fix |
| 2023-03-13 | PR evidence | `FHIR-28283`, `FHIR-29211`, `FHIR-38848` comments | Link PR 2834 |
| 2024-04-04 to 2024-04-11 | Zulip discussion | `#questionnaire > CQL expression extensions in questionnaire` | Explains exact intended meaning of `text/cql`, `text/cql-expression`, and `text/cql-identifier` |
| 2025-03-06 / 2025-03-12 | CQL IG decision | `FHIR-49740` | Same inline-expression text later used for FHIR core |
| 2025-03-09 to 2025-03-10 | Source commits | `bef4e71...`, `a6329ef...` | Applies `FHIR-43175` link correction |
| 2025-03-18 | Source commit | `67989bee777b5e31b8065968748cc29aa4f5fb34` | Applies `FHIR-39528` subject/evaluation context guidance |
| 2025-03-26 | Confluence approval | CDS agenda page `324969006` | References `FHIR-49976` in approved tracker set |
| 2025-10-21 | Source commit | `f9a0e6d380fc375ba5a4c44e90ae0a40da6c64cd` | Applies `FHIR-51574` root Measure subject deprecation note |
| 2025-10-28 | Source commit | `fc77fd6df77c46c31523e9161e41ec5c150eb6ae` | Applies `FHIR-49976` inline-expression guidance |
| 2025-11-01 | Source commit | `43b30c68fb2502e969acc862afac259bd4b7d412` | Applies `FHIR-53080` text reduction/backwards-compatibility note |
| 2025-11-02 | Jira comment | `FHIR-53080` | Links PR 3914 |
| 2025-11-12 | Source commit | `7466cfc63cd0b162497a42c80a67480eed86c75a` | Final page status in reviewed tree is Normative |

## Evidence log

- Page existence and line count:
  - `test -f "<old-tree>/source/clinicalreasoning-topics-using-expressions.html" && echo "old exists"`
  - `test -f "<new-tree>/source/clinicalreasoning-topics-using-expressions.html" && echo "new exists"`
  - `wc -l "<old-page>" "<new-page>"`
- Direct diff:
  - `git -C "<new-tree>" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalreasoning-topics-using-expressions.html`
- Source history:
  - `git -C "<new-tree>" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalreasoning-topics-using-expressions.html`
  - Per-commit `git show --stat --patch` saved to `.copilot/session-state/c833eca6-acc8-497c-90e2-8c7b6b85cd36/files/clinicalreasoning-topics-using-expressions.shows.txt`.
- Jira snapshots:
  - `bun run jira:search snapshot FHIR-27883`, `FHIR-25431`, `FHIR-28556`, `FHIR-30570`, `FHIR-28283`, `FHIR-29211`, `FHIR-38848`, `FHIR-25737`, `FHIR-43175`, `FHIR-39528`, `FHIR-51574`, `FHIR-49976`, `FHIR-53080`, `FHIR-44047`.
  - Additional snapshots: `FHIR-35981`, `FHIR-36496`, `FHIR-29551`, `FHIR-49740`, `FHIR-49581`, `FHIR-30932`.
- Jira FTS searches:
  - `bun run jira:search fts "\"text/cql-identifier\" \"text/cql-expression\"" --limit 20`
  - `bun run jira:search fts "\"unitsofmeausure\" OR \"unitsofmeasure\"" --limit 20`
  - `bun run jira:search fts "\"operations SHOULD make any parameters\"" --limit 20`
  - `bun run jira:search fts "\"clinicalreasoning-topics-using-expressions\"" --limit 30`
- Zulip searches/snapshots:
  - Key FTS searches for all explicit Jira keys; most had no results.
  - `bun run zulip:search fts "\"text/cql-identifier\"" --limit 20`
  - `bun run zulip:search fts "\"text/cql-expression\"" --limit 20`
  - `bun run zulip:search fts "\"clinicalreasoning-topics-using-expressions\"" --limit 20`
  - `bun run zulip:search snapshot questionnaire "CQL expression extensions in questionnaire"`
  - `bun run zulip:search snapshot hapi "Plan Definition with Conditions syntax help"`
  - `bun run zulip:search snapshot "Da Vinci DTR" "✔ Example Questionnaires with CQL"`
  - `bun run zulip:search snapshot "IG creation" "using text/cql or text/cql-identifier"`
- Confluence searches/snapshots:
  - `bun run confluence:search refs jira <key>` and `bun run confluence:search fts <key> --limit 20` for explicit keys.
  - `bun run confluence:search fts "\"text/cql-identifier\"" --limit 20`
  - `bun run confluence:search fts "\"unitsofmeausure\" OR \"unitsofmeasure\"" --limit 20`
  - `bun run confluence:search fts "\"clinicalreasoning-topics-using-expressions\"" --limit 20`
  - `bun run confluence:search snapshot 324969006`
  - `bun run confluence:search snapshot 197331139`

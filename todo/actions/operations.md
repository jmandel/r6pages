# operations actionable findings

## Summary

The page has 5 actionable findings. The main risk is that R6 ballot4 currently gives conflicting GET-invocation criteria and did not fully apply the `FHIR-41220` cleanup, leaving implementers without a single clear rule for URL/query parameters.

## High-signal findings

### H-001: GET invocation criteria conflict across the page

- Priority: P1
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html:63-64`, `:98-102`, `:238-241`; `FHIR-51046`; `FHIR-56194`; commit `d542f8a98ce80fed9a951b76190bb8379ebc09f5`; Zulip `#implementers > Understanding GET invoked extended operations`.
- Problem: one section says GET applies when parameters are primitive datatypes with no extensions, another says GET applies to parameters whose data type has a corresponding search type, and the Operation Request section still says all operation parameters must be primitive types.
- Why it matters: Identifier and Reference are explicitly permitted by the newer `FHIR-51046` rule, but readers can still conclude they are prohibited by the primitive-only paragraphs.
- Recommended next step: align all GET-invocation paragraphs to one rule and add/point to a clear table or definition for "has a corresponding search type"; triage against `FHIR-56194`.

### H-002: `FHIR-41220` was only partially applied

- Priority: P2
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html:173-178` and `:255-258`; `FHIR-41220` resolution says to replace `simple parameters` with parameters that have associated search types; commit `9c256b4f7839949c03eed3321415a0f8999b3561`; Confluence pages `288072268` and `413042140`.
- Problem: the current page still says "simple parameters" and links to `#executing`, even though the formal resolution said to remove/replace that phrase. The applied commit only changed the Search Type bullet and left the problematic sentence intact.
- Why it matters: the link still does not define "simple parameters" and now conflicts with the newer search-type framing.
- Recommended next step: replace the Resource-body-plus-query-parameters sentence with the `FHIR-41220` resolved wording and fix the Search Type bullet grammar.

### H-003: no-output operation responses need the later clarification

- Priority: P2
- Category: overlooked-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html:85-91` and `:270-292`; `FHIR-24869`; later `FHIR-56007`.
- Problem: R6 ballot4 says the body can be omitted when there are zero output parameters, but `FHIR-56007` later resolved that successful operations with no out parameters may return either an empty body or an empty Parameters resource and should update both sections.
- Why it matters: clients and servers can interpret zero-output success responses differently.
- Recommended next step: apply the `FHIR-56007` clarification to both the execution and response sections.

### E-001: Bundle response paragraph has malformed markup

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html:105-110`; `FHIR-32015`; commit `5d7c5faef30b3c41d1d60dc3198873822a4e8009`.
- Problem: the paragraph says `For eample`, leaves the `page links` anchor open through `then`, and has an extra closing `</a>` after the `search-set` link.
- Why it matters: this is reader-facing rendering/link breakage in normative operation response guidance.
- Recommended next step: correct the typo and anchor structure, matching the `FHIR-32015` resolved sentence.

### E-002: `ne or more output parameters` typo remains

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operations.html:85-87`; `FHIR-45277`; `FHIR-56007`; commit `1c5be8bd4b6a6093cc032761f943cdadb433a2e3`.
- Problem: the page still says "ne or more output parameters"; this has an existing technical-correction Jira and is also noted in `FHIR-56007`.
- Why it matters: it is a visible typo in core operation response text.
- Recommended next step: apply the existing technical correction by changing `ne` to `one`.

## Intent-vs-implementation mismatches

`H-001` and `H-002` are the material mismatches: `FHIR-51046`/`FHIR-56194` point to a search-type criterion that was not propagated to all GET text, and `FHIR-41220` explicitly requested removal/replacement of `simple parameters` but the current source still contains it.

## Overlooked or newly noticed problems

`H-003`, `E-001`, and `E-002` are current-page problems visible after reading the full R6 ballot4 source. `E-001` did not show a matching Jira hit for `For eample`; `E-002` is already tracked by `FHIR-45277`.

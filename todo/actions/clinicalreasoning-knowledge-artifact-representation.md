# clinicalreasoning-knowledge-artifact-representation actionable findings

## Summary

The page has 4 actionable findings. The main risk is that two Jira-applied PlanDefinition guidance changes do not clearly match their recorded intent, and two newly added/example-adjacent markup defects will confuse readers or render incorrectly.

## High-signal findings

### H-001: FHIR-30209 requested a prescription-medication update example, but the page updates a referral ServiceRequest status

- Priority: P2
- Category: intent-mismatch
- Evidence: `FHIR-30209` resolution says to "model a request to update the medication on a prescription"; commit `5369f00212df3db568bacd32d406a0be2d2a58ad`; current source `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-representation.html:252-277`
- Problem: The applied example updates the status of a referral `ServiceRequest`, not medication on a prescription.
- Why it matters: The example still illustrates an update, but it is narrower/different than the voted Jira resolution and may not answer the original medication/prescription modeling question.
- Recommended next step: Ask CDS to confirm whether the scenario intentionally changed; if not, revise the example to match the prescription-medication update requested in `FHIR-30209` or update the Jira rationale.

### H-002: FHIR-30433's REST interaction URL/code-system guidance is not actually documented on this page

- Priority: P1
- Category: intent-mismatch
- Evidence: `FHIR-30433` resolution says using "the code system URL + code to refer to the RESTful interactions should be documented in PlanDefinition"; Zulip `#IG creation > Referencing an interaction`; Confluence page `97478278`; commit `bedab38b5ca162114c3b60501fd84a2da9945692`; current source `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-representation.html:279`
- Problem: The applied paragraph says clients may turn create/update/remove proposals into RESTful API calls, but it does not document the requested mechanism for referencing REST interactions by URL/code or how to distinguish `Patient` create/update from generic create/update.
- Why it matters: Implementers reading the applied text still lack the concrete referencing guidance that the Jira issue and FHIRI minutes said should be documented.
- Recommended next step: Add explicit PlanDefinition guidance for REST interaction code-system URL + code, or move/point to the page where that mechanism is documented.

### E-001: Added update example contains `<langage>` instead of `<language>`

- Priority: P2
- Category: editorial
- Evidence: current source `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-representation.html:269-273`; introduced by commit `5369f00212df3db568bacd32d406a0be2d2a58ad`
- Problem: The second expression in the new update example uses `&lt;langage value="text/cql-expression"/&gt;`.
- Why it matters: Readers may copy a malformed example while learning the `dynamicValue.expression` pattern.
- Recommended next step: Correct the element name to `&lt;language .../&gt;`.

### E-002: Added Guideline table row is missing the Example column

- Priority: P2
- Category: rendering
- Evidence: current source table header and rows `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-representation.html:345-357`; introduced by commit `78bdf597e0749e52efa7984e9f9d90a41fdb3616`
- Problem: The artifact-type table has three columns (`Artifact Type`, `Description`, `Example`), but the added `Guideline` row has only two `<td>` cells.
- Why it matters: The table can render misaligned and gives no example for the newly added artifact type.
- Recommended next step: Add a third Example cell for the Guideline row, or intentionally restructure the table if no example should be shown.

## Intent-vs-implementation mismatches

- H-001: `FHIR-30209` scenario mismatch.
- H-002: `FHIR-30433` REST interaction guidance mismatch.

## Overlooked or newly noticed problems

- E-001: malformed `<language>` element spelling in the added update example.
- E-002: missing third cell in the added Guideline table row.

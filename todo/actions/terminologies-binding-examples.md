# terminologies-binding-examples actionable findings

## Summary

The page has 2 actionable findings: the new `FHIR-38967` examples contain a binding-strength contradiction/wording defects, and a later Vocab decision (`FHIR-54589`) calls for additional-binding examples that are absent from the R6 ballot4 page.

## High-signal findings

### H-001: Required-binding example text contradicts its own binding strength

- Priority: P2
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-binding-examples.html:58`, same file lines 62-68, commit `c40179b5decbac4cfba23711fe59fda46454945e`, `FHIR-38967`
- Problem: The new Required `CodeableConcept` example says the profile binds `Condition.code` "with an Extensible binding", but the snippet immediately below says `"strength": "required"`. The same added section also has likely copy/edit defects: "version specific finding" at line 37 and `valueSetCanonical` in an ElementDefinition-like snippet while the preceding Required example uses `valueSet`.
- Why it matters: This page teaches binding-strength behavior; a Required example that labels itself Extensible can mislead readers about conformance expectations.
- Recommended next step: Review the `FHIR-38967` added section with Vocab and correct the label to Required, then clean up the nearby wording/snippet consistency.

### H-002: Later Vocab decision asks for additional-binding examples not present here

- Priority: P2
- Category: overlooked-problem
- Evidence: `FHIR-54589`, Confluence page `413042382` ("Jan 2026 - HL7 WGM - Wednesday Q2 Minutes"), and `rg -n "additional binding|additional bindings|binding.additional" .../source/terminologies-binding-examples.html` finding no additional-binding examples in the R6 ballot4 page
- Problem: The January 2026 Vocab discussion and `FHIR-54589` resolution say to add examples demonstrating additional bindings to the examples page, but this R6 ballot4 page has only Required, Extensible, Preferred, and Example binding examples.
- Why it matters: Additional bindings have open implementation/validation questions; examples here are the natural reader path for clarifying allowed combinations and subset/non-subset behavior.
- Recommended next step: Track `FHIR-54589` application against this page and add an additional-bindings example section or cross-link once the terminology binding guidance text is updated.

## Intent-vs-implementation mismatches

See H-001. No other R4 -> R6 intent mismatch was found for the page-specific commits.

## Overlooked or newly noticed problems

See H-002. A minor typo in the new Example binding paragraph also remains at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-binding-examples.html:368` ("use or create their own codes for us").

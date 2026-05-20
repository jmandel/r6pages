# clinicalreasoning-topics-definitional-resources actionable findings

## Summary

The page has 3 actionable findings. The main risk is that current medication/device guidance uses invalid or stale element names, so implementers may model ActivityDefinition/PlanDefinition application incorrectly.

## High-signal findings

### H-001: Device guidance uses invalid `action.typeCanonical` path

- Priority: P1
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-definitional-resources.html:130-134`; commit `2d711ff3b0b74bdd990e87221db5c7ed2c305d8d`; `FHIR-37698`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/activitydefinition/structuredefinition-ActivityDefinition.xml:1062-1124`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/plandefinition/structuredefinition-PlanDefinition.xml:1951-1994`
- Problem: The page says to use `action.typeCanonical`, but ActivityDefinition has no `action` element, and PlanDefinition uses `action.participant.typeCanonical`, not `action.typeCanonical`. `FHIR-37698` also resolved around `typeReference`/DeviceDefinition usage, so the applied text is underqualified at best and likely uses the wrong path.
- Why it matters: This is reader-facing implementation guidance for representing a medication administration device; the current path is not implementable as written.
- Recommended next step: Correct the paragraph and example to name the intended real path, likely `ActivityDefinition.participant.typeCanonical` or `PlanDefinition.action.participant.typeCanonical`, and clarify how that maps to `MedicationRequest.device`.

### H-002: Medication paragraph names non-existent ActivityDefinition `dosageInstruction`

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-definitional-resources.html:103`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/activitydefinition/structuredefinition-ActivityDefinition.xml:1243-1247`
- Problem: In an ActivityDefinition paragraph, the page lists `dosageInstruction` as an ActivityDefinition element, but the R6 ActivityDefinition element is `dosage`.
- Why it matters: The wrong element name makes the medication example harder to translate into a conformant ActivityDefinition.
- Recommended next step: Change the prose to refer to `dosage`, or clarify if the sentence is intentionally comparing ActivityDefinition with MedicationRequest's `dosageInstruction`.

### E-001: Referral example bullet says `That is should occur`

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-definitional-resources.html:94`; commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`; `FHIR-44047`
- Problem: The explanatory bullet has a visible typo: `That is should occur`.
- Why it matters: Low-risk, but it is a concrete reader-facing defect in newly added explanatory text.
- Recommended next step: Change to `That it should occur`.

## Intent-vs-implementation mismatches

H-001 is the only substantive mismatch found. `FHIR-37698` says the device representation can be done with `typeReference` referring to a Device or DeviceDefinition resolved during `$apply`, while the applied page text says `action.typeCanonical`; adjacent R6 structures do not contain that path. No mismatch was found for `FHIR-53082` status because the Jira resolution says Informative and the page is Informative.

## Overlooked or newly noticed problems

H-002 and E-001 are current-page problems not clearly covered by the tracked changes. No other concrete overlooked problem was strong enough to elevate from the evidence reviewed.

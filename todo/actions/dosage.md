# dosage actionable findings

## Summary

The page has 4 actionable findings. The main risk is that R6 ballot4 introduced a breaking DosageDetails model, but some page guidance and related spec text remained ambiguous or was superseded by immediate post-ballot decisions.

## High-signal findings

### H-001: Stale "multiple dosageInstruction" wording conflicts with the new 0..1 DosageDetails model

- Priority: P1
- Category: spec-problem
- Evidence: `source/dosage.html:47-49`; `source/medicationrequest/structuredefinition-MedicationRequest.xml:850-877`; `source/medicationdispense/structuredefinition-MedicationDispense.xml:729-743`; `source/datatypes/dosagedetails.xml:878-893`; `FHIR-51540`; PR `https://github.com/HL7/fhir/pull/3974`
- Problem: The dosage page says R6 changed MedicationRequest/MedicationDispense/MedicationStatement from multiple `Dosage` entries to one `DosageDetails`, and the structuredefinitions confirm `0..1 DosageDetails`. Related definitions/comments still describe "multiple dosageInstruction lines" or "multiple dosage instructions" for complex dosing.
- Why it matters: Implementers could follow stale guidance and model complex/tapering regimens as multiple `dosageInstruction` entries even though the R6 structure no longer permits that.
- Recommended next step: Update related definitions/comments/example labels to point to `DosageDetails.step`/`step.component` rather than multiple `dosageInstruction` instances.

### H-002: Component concurrency guidance is internally ambiguous

- Priority: P2
- Category: spec-problem
- Evidence: `source/dosage.html:134-148`; `FHIR-53687`
- Problem: The page says all components within the same step are concurrent, but immediately gives examples such as "Different dosages on different days, or different times of the day" and PRN restrictions. `FHIR-53687` raises this exact concern and remains triaged.
- Why it matters: The difference between concurrent components and sequential/conditional/event-based components affects how systems calculate dosing, timing, and safety limits.
- Recommended next step: Clarify whether "concurrent" means same step membership, overlapping authorization, or same-time administration; revise examples accordingly.

### H-003: Safety levels need relationship/boundary guidance

- Priority: P1
- Category: overlooked-problem
- Evidence: `source/dosage.html:110-114`, `source/dosage.html:195-209`; `source/datatypes/dosagedetails.xml:1062-1091`; `FHIR-54557`
- Problem: The ballot4 page introduces safety information at multiple levels but does not explain whether higher-level safety aggregates lower-level safety, whether safety should be populated at the most precise level, or when step-level safety is appropriate.
- Why it matters: The issue is explicitly about medication safety, and ambiguous placement can lead to missed or double-counted dose limits.
- Recommended next step: Apply the `FHIR-54557` clarification text to the DosageDetails section and align examples with the chosen safety-level rules.

### H-004: Post-ballot applied decisions supersede ballot4 `simple` and `renderedInstruction` guidance

- Priority: P2
- Category: intent-mismatch
- Evidence: `source/dosage.html:56-84`, `source/dosage.html:110-113`; `source/datatypes/dosagedetails.xml:878-917`; `FHIR-54014`; `FHIR-54651`; Confluence `413255873`
- Problem: Ballot4 says `renderedInstruction` is optional/SHOULD and describes `simple` as an alternative to step-based structure. Later applied Jira decisions require `renderedInstruction` and remove `DosageDetails.simple`.
- Why it matters: Anyone reviewing or carrying forward ballot4 text could preserve semantics that Pharmacy later voted to change.
- Recommended next step: Verify the current R6 working source has incorporated `FHIR-54014` and `FHIR-54651`, then update this page's narrative and generated datatype content if any ballot4 wording remains.

## Intent-vs-implementation mismatches

- `FHIR-51540` intended to replace repeating dosage instructions with `0..1 DosageDetails`, but related R6 ballot4 text still references multiple dosage instructions.
- `FHIR-54014` and `FHIR-54651` post-date ballot4 but are applied R6 decisions that supersede ballot4 page text.

## Overlooked or newly noticed problems

- The component concurrency and safety-level concerns are not merely historical: they were raised as R6 ballot follow-ups (`FHIR-53687`, `FHIR-54557`) against the ballot4 page.

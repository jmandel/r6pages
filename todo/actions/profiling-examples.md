# profiling-examples actionable findings

## Summary

The page has 2 actionable findings. The main risk is that the R5/R6 modernization meant to make profiling examples valid still leaves multiple copied StructureDefinition snippets invalid or internally contradictory.

## High-signal findings

### H-001: Modernized slicing examples still contain invalid ElementDefinition syntax

- Priority: P1
- Category: intent-mismatch
- Evidence: `source/profiling-examples.html:118-158`, `:228`, `:286-304`, `:419-423`, `:488-503`, `:590-592`, `:1172-1182`, `:1218-1237`; commit `76a58b57d0ef8e83c56bd0c4c470277c80c51ec6`; `FHIR-20569`; `FHIR-25738`; Zulip `#fhirpath > Slice ID Uniqueness`
- Problem: `FHIR-20569`/`FHIR-25738` intended to update this page to current valid slicing syntax, but the current snippets still include duplicate ids (`Patient.telecom:WorkPhone`/`Email`), a malformed id (`Patient.telecom:Email.system` missing the closing quote), lowercase `slicename`, a Triglyceride slice with id/path reversed, and reslice ids using `med-request` while the parent slice is `medrequest`.
- Why it matters: readers can copy examples that violate StructureDefinition constraints, including `sdf-16`/`sdf-17` unique-id rules, undermining the page's purpose as slicing guidance.
- Recommended next step: audit every converted snippet from `FHIR-20569`/`FHIR-25738` against a validator-backed example or the attached `FHIR-20569` test IG, then fix all `id`, `path`, and `sliceName` casing/name mismatches.

### H-002: HDLCholesterol profile snippet constrains an LDL code

- Priority: P2
- Category: overlooked-problem
- Evidence: `source/profiling-examples.html:714-737`, `:801-821`; commit `ea9e526cc83eeeff8d3446a95de766022e8d215c`
- Problem: the `HDLCholesterol` profile snippet fixes `Observation.code` to LOINC `2089-1` with display `LDL Cholesterol`, while the matching example instance uses `2085-9` with display `HDL Cholesterol`.
- Why it matters: the lipid slicing example depends on different target profiles constraining different LOINC codes; an HDL profile that constrains an LDL code breaks the discriminator example.
- Recommended next step: decide whether the snippet is meant to be HDL or LDL and make the profile name, targetProfile, fixed code, display, and instance code consistent.

## Intent-vs-implementation mismatches

H-001 is an intent-vs-implementation mismatch: the formal Jira intent was to make profiling examples use current valid `ElementDefinition.id` and `sliceName` syntax, but the applied page still has invalid examples.

## Overlooked or newly noticed problems

H-002 appears to be a current page problem not clearly covered by the tracked Jira issues for this page.

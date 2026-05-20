# workflow actionable findings

## Summary

The page has 3 actionable findings. The main risk is that the current Workflow table points readers to a non-existent ClinicalAssessment incubator page; a smaller intent mismatch makes a resolved SpecimenDefinition rationale look like an open issue, and an inherited table-class typo likely affects rendering.

## High-signal findings

### E-001: ClinicalAssessment incubator link is currently dead

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow.html:169-172`; commit `fad1b9cf84ef652e88947e1a13b026c62f95334e`; `curl -L -s -o /dev/null -w '%{http_code}' https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-ClinicalAssessment.html` returned `404`; `gh api repos/HL7/pc-incubator` showed repo `size: 0`
- Problem: The Events list links ClinicalAssessment to `https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-ClinicalAssessment.html`, but that IG page is not live.
- Why it matters: Readers following the workflow resource list cannot reach the referenced resource, and the broken `pc-incubator` target may affect other R6 pages using the same Additional Resources link pattern.
- Recommended next step: Either publish/populate the PC incubator IG at the linked path, or update/remove the link until a stable ClinicalAssessment Additional Resources URL exists.

### H-001: SpecimenDefinition rationale is presented as an open issue

- Priority: P3
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow.html:311-329`; `FHIR-28105`; PR `https://github.com/HL7/fhir/pull/1398`; Zulip `#workflow > ObservationDefinition, SpecimenDefinition`
- Problem: `FHIR-28105` requested a note/footnote explaining that SpecimenDefinition is not a Definition because it defines a thing, not an action. The applied text is now inside the "Open Issues" list.
- Why it matters: The page makes a resolved rationale look like an unresolved workflow issue.
- Recommended next step: Move the SpecimenDefinition sentence out of "Open Issues" into a footnote or explanatory note near the Definitions list, or reword it as non-issue guidance.

### E-002: Workflow resources table uses `calss` instead of `class`

- Priority: P3
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow.html:90`; the same typo exists in the R4 source at `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/workflow.html:90`
- Problem: `<table calss="grid">` likely prevents the workflow resources table from receiving intended grid styling.
- Why it matters: This is a concrete reader-facing rendering defect on the central resource list.
- Recommended next step: Correct the attribute to `<table class="grid">`.

## Intent-vs-implementation mismatches

H-001 is the only material mismatch found: the SpecimenDefinition text matches the rationale from `FHIR-28105`, but not the requested placement/status as a note or footnote.

## Overlooked or newly noticed problems

E-001 and E-002 are current-page defects found while reading the page and checking links. E-002 is inherited from R4 rather than introduced by the R4-to-R6 diff.

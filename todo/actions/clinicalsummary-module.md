# clinicalsummary-module actionable findings

## Summary

The page has 1 actionable finding: ClinicalAssessment was moved out of R6 core to the Patient Care incubator/Additional Resources track, but the current Clinical Module index still lists it like an ordinary covered resource without qualifying that status.

## High-signal findings

### H-001: ClinicalAssessment is listed without its Additional Resources status

- Priority: P2
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalsummary-module.html:43-56`; commit `fad1b9cf84ef652e88947e1a13b026c62f95334e`; Confluence `358875423`; Confluence `404096912`; Zulip `#Patient Care WG > Status of ClinicalAssessment resource (ClinicalImpression)`
- Problem: The page says "The Clinical Module covers the following resources" and includes ClinicalAssessment as a plain list entry, even though PC later agreed to remove ClinicalAssessment from R6 and move it to Additional Resources. The final commit only changed the link target to the PC incubator URL; it did not alter the surrounding page language to reflect the new status.
- Why it matters: Readers may infer ClinicalAssessment is still part of the R6 Clinical Module/core resource set. PC's 2025-11-20 QA note says auto-converted Additional Resource references should be reviewed and often removed or changed to reflect the resource's new status.
- Recommended next step: Decide whether to remove ClinicalAssessment from this index or keep it with explicit "Additional Resources / PC incubator / work in progress" wording and a stable link appropriate for publication.

## Intent-vs-implementation mismatches

H-001 is the only mismatch found.

## Overlooked or newly noticed problems

None found.

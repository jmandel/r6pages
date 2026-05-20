# elementdefinition-mappings actionable findings

## Summary

The page has 1 actionable finding: a low-priority, concrete editorial typo in the current page. No substantive intent-vs-implementation mismatch was found for the R4 -> R6 ballot4 changes.

## High-signal findings

### E-001: "principle differences" should be "principal differences"

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition-mappings.html:60-62`
- Problem: The ISO 11179 row says "the principle differences are"; in this context it should be "the principal differences are."
- Why it matters: This is a visible reader-facing typo on an informative mapping page.
- Recommended next step: Change `principle differences` to `principal differences`.

## Intent-vs-implementation mismatches

None found.

## Overlooked or newly noticed problems

E-001 is a current-page editorial defect not tied to the tracked R4 -> R6 changes.

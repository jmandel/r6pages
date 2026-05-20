# comparison-v2 actionable findings

## Summary

The page has 2 actionable findings, both from later page-specific Jira QA that still matches the R6 ballot4 source. The R4-to-R6 diff itself is mostly editorial/template churn, and the `delete indicator` semantic clarification appears consistent with its Jira rationale.

## High-signal findings

### E-001: Incomplete-content markers and stale future/STU wording remain

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-v2.html:78-83`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-v2.html:121-125`, `FHIR-55090`
- Problem: `FHIR-55090` flags `future versions` and `Todo`; the current source still says handling rules "will be developed during the STU period" and still has `<!-- Todo: Link -->` where "FHIR extension registry" should likely link somewhere.
- Why it matters: The page presents stale forward-looking guidance in an R6 ballot source and leaves a source-level incomplete-link marker in user guidance about finding extensions.
- Recommended next step: Triage `FHIR-55090`; replace the STU/future wording with current compatibility guidance, and either link the extension registry using the existing registry link pattern or remove the TODO marker.

### E-002: Page-specific contraction cleanup remains unapplied

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-v2.html:177`, `FHIR-55089`
- Problem: `FHIR-55089` specifically flags `doesn't`, and the current source still contains it.
- Why it matters: Low-severity style/QA inconsistency remains on a page already flagged by Jira.
- Recommended next step: Triage `FHIR-55089`; replace `doesn't` with `does not` and consider checking nearby contractions for consistency.

## Intent-vs-implementation mismatches

None found for the R4-to-R6 diff. `FHIR-24642`, `FHIR-25431`, and `FHIR-44047` are reflected in source; `FHIR-55089` and `FHIR-55090` are later open page-specific issues rather than failed implementation in the compared commit range.

## Overlooked or newly noticed problems

The two findings above are the concrete current-page problems. No additional substantive/spec behavior issue was found.

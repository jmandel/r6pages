# comparison-cda actionable findings

## Summary

The R4-to-R6 page diff itself did not reveal a substantive CDA/FHIR guidance change or intent mismatch. One low-priority current-page editorial issue is actionable because it is already tracked in unresolved Jira `FHIR-55087` and remains present in the R6 ballot4 source.

## High-signal findings

### E-001: Current page still contains the contraction flagged by `FHIR-55087`

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-cda.html:54`; `FHIR-55087` (`https://jira.hl7.org/browse/FHIR-55087`)
- Problem: `FHIR-55087` says abbreviations need to be fully spelled out and specifically flags `"isn't"` on `comparison-cda`; the current page still says `It isn't obvious...`.
- Why it matters: This is a reader-facing editorial/style issue that has a live, page-specific Jira and can be fixed without affecting CDA/FHIR semantics.
- Recommended next step: Triage `FHIR-55087` and, if accepted, change `isn't` to `is not` on `source/comparison-cda.html`.

## Intent-vs-implementation mismatches

None found.

## Overlooked or newly noticed problems

E-001 covers the only concrete current-page issue found. No substantive overlooked CDA/FHIR guidance problem was identified.

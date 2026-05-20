# credits actionable findings

## Summary

The page has 1 actionable finding: a concrete editorial defect in the current former-FMG-member credits list. No substantive, conformance, or intent-vs-implementation mismatch was found for the Jira-backed page changes.

## High-signal findings

### E-001: Missing separator between former FMG member names

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/credits.html:139`; introduced by `71567db3ee039ac6977be5f96a7e013896569a36`
- Problem: The former members list reads `John Quinn Josh Mandel`, making two names look like one.
- Why it matters: It is a reader-facing miscredit in the credits page.
- Recommended next step: Insert a comma or `and` between `John Quinn` and `Josh Mandel`; optionally proofread the surrounding FMG roster sentence for spacing.

## Intent-vs-implementation mismatches

None found.

## Overlooked or newly noticed problems

E-001 is the only concrete newly noticed problem.

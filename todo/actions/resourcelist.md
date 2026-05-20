# resourcelist actionable findings

## Summary

The page has 1 actionable finding: its replacement link for Testing Resources is broken in R6 ballot4, blocking readers from reaching the external IG that replaced `TestPlan`, `TestReport`, and `TestScript`.

## High-signal findings

### E-001: Testing Resources link points to a 404 target

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourcelist.html:257-260`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhir.ini:8-9`; commit `f9a44787c45071394532c7c2ee94d76f30f47387`; `FHIR-54820`
- Problem: `[%ig testing%]` expands to `https://build.fhir.org/ig/hl7/fhir-testing-ig/index.html`, which returns 404. The visible row also starts with a stray-looking `+ see also`.
- Why it matters: readers looking for the testing resources removed from core cannot follow the advertised replacement link.
- Recommended next step: update the `testing` IG URL to the working uppercase `HL7` Testing IG URL and clean up the visible leading `+`; then resolve `FHIR-54820`.

## Intent-vs-implementation mismatches

None found beyond E-001.

## Overlooked or newly noticed problems

None found.

# ehr-fm actionable findings

## Summary

The R4 4.0.1 -> R6 ballot4 edits to this page are template/editorial only, and no changed-line intent mismatch was found. One actionable overlooked problem remains in the current page: an unchanged EHR-FM mapping row still names obsolete conformance resources, which can mislead R6 readers.

## High-signal findings

### H-001: Interchange Agreements row uses obsolete conformance resource names

- Priority: P2
- Category: overlooked-problem
- Evidence: Current page says `The FHIR Conformance Statement and Resource Profile resources...` at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ehr-fm.html:97`; the current R6 resource list names `CapabilityStatement` and `StructureDefinition` at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourcelist.html:50-52`, `:301`, and `:414`.
- Problem: The EHR-FM `TI.5.4 Interchange Agreements` mapping still uses pre-current terminology (`Conformance Statement` and `Resource Profile resources`) rather than the R6 resource names.
- Why it matters: Readers using the R6 page may look for nonexistent/currently-renamed resources or misunderstand which conformance artifacts support trading partner agreements.
- Recommended next step: Ask EHR/FHIR-I to update the row to current linked terminology, likely `CapabilityStatement` and `StructureDefinition`/profiles, and confirm the broader `registry-based infrastructure` claim is still accurate.

## Intent-vs-implementation mismatches

None found for the changed R4 -> R6 lines.

## Overlooked or newly noticed problems

H-001 above.

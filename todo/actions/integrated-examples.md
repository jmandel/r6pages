# integrated-examples actionable findings

## Summary

The R4 -> R6 ballot4 page diff itself has no substantive/spec-semantic findings: the changes are template metadata and typo cleanup only. One P3 editorial finding remains for the current page because an unresolved Jira issue flags `didn't`, and nearby obvious reader-facing typos remain in the R6 ballot4 source.

## High-signal findings

### E-001: Current page still has reader-facing spelling and abbreviation defects

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/integrated-examples.html:39`, `:74`, `:153`, `:223`, `:415`; `FHIR-55108` (`https://jira.hl7.org/browse/FHIR-55108`); QA cleanup commit `dad7cf37c75822c352509e1c2e8d050408d0be18`
- Problem: The 2023 QA commit fixed `hopital`, but the current page still contains `didn't` (explicitly flagged by unresolved `FHIR-55108`) plus apparent typos such as `specializm`, `presciber`, `Antiobiotic`, `mediatinum`, and `Celsius1`.
- Why it matters: This is an Informative examples page used as reader-facing clinical/example material; the defects do not change conformance behavior, but they reduce publication polish and may confuse readers.
- Recommended next step: Triage `FHIR-55108` and apply a targeted editorial cleanup for the listed lines, confirming intended clinical wording where needed.

## Intent-vs-implementation mismatches

None found.

## Overlooked or newly noticed problems

See E-001.

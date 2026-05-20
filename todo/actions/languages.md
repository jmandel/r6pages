# languages actionable findings

## Summary

The page has 1 actionable finding: the CodeSystem/ValueSet translation guidance now uses the newer `preferredForLanguage` example, but later Jira/Zulip evidence shows the page still does not clearly explain when translations belong in CodeSystem supplements vs ValueSet designations or how to handle the legacy `designation-usage#display` example.

## High-signal findings

### H-001: Clarify translation designations after the `preferredForLanguage` switch

- Priority: P2
- Category: overlooked-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/languages.html:139-172`; commit `cd60623d614d8257ec769594687ce0587b385870`; `FHIR-37991`; `FHIR-51614`; Zulip `#terminology > CodeSystem designation-use`; Zulip `#terminology > Better guidance for translating codesystems`
- Problem: the page's designation example was updated to `http://terminology.hl7.org/CodeSystem/hl7TermMaintInfra#preferredForLanguage`, but the surrounding text still broadly says designations can be used on CodeSystems and ValueSets without explaining the important modeling distinction raised later: translations of third-party code systems generally belong in CodeSystem supplements, while ValueSet designations are context/expansion-specific. `FHIR-37991` also asked for a statement about legacy `designation-usage#display` backward compatibility, which is not present.
- Why it matters: implementers can model translations in the wrong artifact or be confused by old examples/legacy instances using `designation-usage#display`, affecting terminology validation and display behavior.
- Recommended next step: resolve or explicitly triage `FHIR-51614` and `FHIR-37991` by adding concise guidance in this section, with links to the relevant CodeSystem/ValueSet designation sections and a note on legacy `designation-usage#display` compatibility.

## Intent-vs-implementation mismatches

The `preferredForLanguage` source change addresses the main example problem from `FHIR-37991`, but not the requested backward-compatibility note or the broader guidance gap later captured in `FHIR-51614`.

## Overlooked or newly noticed problems

H-001 is the only high-signal current-page problem found. No separate actionable editorial/rendering defect was identified.

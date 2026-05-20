# workflow-examples actionable findings

## Summary

The page has 3 actionable findings, all reader-facing editorial or consistency issues. No high-severity normative/conformance problem was found; the main risk is that the new examples tab still contains incomplete or misleading example content despite being part of a workflow-page cleanup.

## High-signal findings

### E-001: Option H section is present but empty

- Priority: P2
- Category: overlooked-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-examples.html:61-63`; commit `70e67c6d2dc76bdd232f94e9e062ce4f6b34df16`; `FHIR-45287`; Confluence `239206707`
- Problem: The current examples page renders an "Option H Scenario - POST of Task to a workflow broker" heading with no scenario text beneath it.
- Why it matters: The PR-linked Jira issue and FHIR-I minutes were about cleaning up TODO/TBD/empty workflow sections; leaving a blank example section undermines that cleanup and signals unfinished content to readers.
- Recommended next step: Add the Option H scenario content or remove/hide the heading until content exists, then update `FHIR-45287` with the remaining cleanup status.

### E-002: Related text promises example instances that the examples tab does not provide

- Priority: P2
- Category: spec-problem
- Evidence: target page narrative-only content at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-examples.html:33-78`; related links at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-management.html:94-96`, `:152-154`, `:242-244`
- Problem: The management page links to the examples tab for F/G/I "including example instances," but the target page only provides prose scenarios and no instance links or embedded resources.
- Why it matters: Readers following the links may expect concrete FHIR resource examples and instead find narrative only, which is misleading for implementation guidance.
- Recommended next step: Either add/link actual example instances for the scenarios or remove "including example instances" from the related management-page link text.

### E-003: New scenario prose contains obvious grammar defects

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-examples.html:55`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-examples.html:76`
- Problem: Option G says "Once the medication is picked up is fulfilled," and Option I says "The cardiologist document the findings."
- Why it matters: These are visible defects in newly added examples and can make the intended event/resource lifecycle harder to parse.
- Recommended next step: Editorially revise those sentences, e.g. clarify whether pickup, dispense, Task completion, or request fulfillment is the event being described.

## Intent-vs-implementation mismatches

- `FHIR-45287` and the April 2024 FHIR-I minutes point to cleaning up incomplete workflow sections, but the target page still has an empty Option H section.
- Related management-page text says the examples tab includes example instances, but the target page currently contains narrative scenarios only.

## Overlooked or newly noticed problems

- The obvious grammar defects in Option G and Option I appear to be newly introduced with the R6 examples and were not covered by a specific Jira or Zulip discussion found in this review.

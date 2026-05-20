# genomics actionable findings

## Summary

The page has 1 actionable finding: a concrete stale metadata/title defect. The major R4-to-R6 content removals and MolecularSequence-to-MolecularDefinition/GenomicStudy link changes have traceable source, Jira, Zulip, and Confluence rationale; no substantive intent-vs-implementation mismatch was found for the current page text.

## High-signal findings

### E-001: Source page title is still the Messaging page title

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/genomics.html:3`; current visible heading is `Genomics in FHIR` at lines 38-48; exact Jira searches for `Messaging using FHIR Resources` and `Genomics in FHIR` found no matching issue.
- Problem: `[%settitle Messaging using FHIR Resources%]` is unrelated to genomics and appears to be a stale copy/paste title.
- Why it matters: rendered page metadata, browser/search titles, and generated navigation can label the genomics page as a messaging page, confusing readers and reviewers.
- Recommended next step: update the `settitle` to `Genomics in FHIR` or the work group preferred genomics page title, then confirm the rendered page title.

## Intent-vs-implementation mismatches

None found.

## Overlooked or newly noticed problems

See E-001.

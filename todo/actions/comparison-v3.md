# comparison-v3 actionable findings

## Summary

The page has 1 low-priority actionable finding: the only Jira-linked content change is editorial terminology, but the available FHIR-I minute appears to name the opposite spelling from what was applied. No substantive, normative, example, REST/search, or operation-semantics issue was found.

## High-signal findings

### H-001: Confirm the intended FHIR-25431 spelling direction

- Priority: P3
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison-v3.html:21-27`, `:42-47`, `:115-132`; commit `8592e1207273b786db340efb927bb6d1dc9756c9`; `https://jira.hl7.org/browse/FHIR-25431`; Confluence page `66940491` (`FHIR Infrastructure Minutes CC 20200113`)
- Problem: `FHIR-25431` says to choose either `data type` or `datatype`, and the implementation commit changes this page to `datatype(s)`. The only workgroup-minute evidence found says `jira:FHIR-25431 Lloyd: Using "data type" Will auto approve`, so the applied spelling may be opposite the recorded intent.
- Why it matters: this is editorial, not semantic, but it affects visible terminology consistency across a comparison page and the broader FHIR core terminology cleanup.
- Recommended next step: confirm the intended convention with FHIR-I/editorial history. If `data type` was intended, update the applied wording; if `datatype` was intended, consider correcting/annotating the issue or minutes trail so future reviewers do not treat this as an unresolved mismatch.

## Intent-vs-implementation mismatches

See H-001.

## Overlooked or newly noticed problems

None found.

# comparison actionable findings

## Summary

The page has 1 actionable finding: a concrete reader-facing grammar defect in the current guidance text. The R4->R6 changed text itself appears editorial/template-only and matches the available Jira/PR/Confluence intent.

## High-signal findings

### E-001: Grammar defect in chat.fhir.org guidance sentence

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/comparison.html:60-65`; unchanged from R4 at `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/comparison.html:60-65`; no Jira/Zulip/Confluence hits for `"streams exist" "chat.fhir.org"`.
- Problem: the sentence says "there are chat.fhir.org streams exist dealing with...", which combines two constructions and reads as ungrammatical.
- Why it matters: it is visible guidance for readers looking for FHIR/community support channels and is easy to fix without changing semantics.
- Recommended next step: revise to a clean construction, e.g. "Also, chat.fhir.org streams deal with CDA and FHIR and v2 and FHIR."

## Intent-vs-implementation mismatches

None found.

## Overlooked or newly noticed problems

E-001 is visible in the current page and was not part of the tracked R4->R6 page changes.

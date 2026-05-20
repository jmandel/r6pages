# defining-extensions actionable findings

## Summary

The page has 2 actionable findings: one substantive pre-existing cardinality wording gap visible in the current page, and one low-priority copy-edit gap in the changed context section. The main R4-to-R6 context changes otherwise match the Jira/Zulip/Confluence intent found for `FHIR-43364`, `FHIR-46620`, `FHIR-37903`, and `FHIR-50268`.

## High-signal findings

### H-001: Minimum cardinality guidance omits the `1` case

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/defining-extensions.html:136-149`; same wording in R4 at `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/defining-extensions.html:108-121`
- Problem: the section explains minimum cardinality `0`, then says "If the Extension minimum cardinality is > 1", while the same paragraph later says "Even with a minimum cardinality > 0". That leaves a minimum cardinality of exactly `1` outside the stated rule.
- Why it matters: extension authors and profile authors could misread whether the required-extension guidance applies to the common `min = 1` case.
- Recommended next step: file or triage a FHIR Jira technical correction to change the condition to `> 0` or add an explicit sentence for `min = 1`.

### E-001: Context section has copy-edit leftovers

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/defining-extensions.html:87`, `:107`, `:116`; `FHIR-44047`; commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`
- Problem: the context section still has reader-facing copy-edit issues: "extension that appear", "e.g. if" despite the broad `FHIR-44047` punctuation cleanup, and "a expression".
- Why it matters: this is minor, but it is in newly changed explanatory text and one item is a missed instance of a tracked punctuation cleanup.
- Recommended next step: fix to "extensions that appear", "e.g., if", and "an expression" when making the next editorial pass.

## Intent-vs-implementation mismatches

Only E-001 found. No substantive mismatch was found between the current context text and the intent recorded in `FHIR-43364`, `FHIR-46620`, the Zulip `#conformance > StructureDefinition Context of Resource` thread, or FHIR-I Confluence minutes.

## Overlooked or newly noticed problems

H-001 is an overlooked current-page wording problem that predates the R4-to-R6 diff. E-001 is a concrete copy-edit problem visible in the current changed section.

# identifier-registry actionable findings

## Summary

The page has 1 actionable finding: the R6 page preserves conformance-style Identifier.system rules, but the release cutoff, IG applicability, and linked TSMG policy scope are ambiguous enough to merit triage.

## High-signal findings

### H-001: Clarify release-relative and IG-scope rules for THO Identifier.system URIs

- Priority: P1
- Category: spec-problem
- Evidence: current R6 page lines `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/identifier-registry.html:17` and `:24-27`, `FHIR-35932`, Zulip `#implementers > Identifier.system for NAIC code?` message ids `445447512`, `445468856`, `445497849`, Confluence page `413241175`, commit `71f5602acf06ad7fe0f46052ca1c6b477311c1ae`.
- Problem: the page is now marked Informative but still says THO Identifier.system URIs can be SHALL-level requirements, then gives only an R5-specific example (`systems claiming conformance to FHIR R5`). Later Zulip discussion shows readers were unsure how this applies to IGs and to implementations based on older or newer FHIR releases. The 2025 TSMG minutes behind the latest link update also say the Terminology Expectations policy needs to be broadened to all implementers, while the current shortlink resolves to `Terminology Expectations for IG Developers`.
- Why it matters: implementers and IG authors may not know whether the applicable SHALL set is based on the base FHIR release, the IG publication date, the current THO release, or HL7-published-IG policy. This affects whether different `Identifier.system` strings are conformant and can create interoperability-breaking aliases.
- Recommended next step: open or triage a FHIR-core/TSMG issue to rewrite this paragraph in release-relative terms, explicitly state how it applies to IGs versus non-IG implementations, and align the source link text/target with the finalized TSMG policy scope.

## Intent-vs-implementation mismatches

H-001 is the only material mismatch found: the R5-era `FHIR-35932` wording remains on the R6 page after later TSMG policy discussions exposed scope ambiguity.

## Overlooked or newly noticed problems

H-001 is also a newly noticed current-page problem. No separate rendering or typo defect was found.

# narrative actionable findings

## Summary

The page has 1 actionable finding: the current narrative page does not clearly align with related HTTP guidance about narrative `<a href="">` links to FHIR resources, and a later unresolved Jira flags this as a clinically relevant ambiguity.

## High-signal findings

### H-001: Narrative href links lack display semantics while HTTP requires replacement

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/narrative.html:112-116`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/narrative.html:212-217`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/narrative.html:338-343`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/http.html:1832-1838`, `FHIR-53999`
- Problem: `narrative.html` allows XHTML `<a>` elements with `href` and gives explicit preprocessing guidance for `img src="#..."`, but the linking section only describes `narrativeLink`/`originalText` extensions. Meanwhile `http.html` says servers SHALL replace narrative `<a href="">` links during transaction processing. `FHIR-53999` notes that the spec does not say whether FHIR resources should be referenced via narrative `href`, or how display systems should handle such links.
- Why it matters: narrative display implementations may resolve, expose, ignore, or render FHIR-resource hrefs differently, which can produce unsafe or misleading human-readable displays.
- Recommended next step: resolve `FHIR-53999` by aligning `narrative.html`, `http.html`, and any Bundle text: either explicitly discourage/remove FHIR-resource href usage in narratives, or add normative/display guidance comparable to the existing `img src` guidance.

## Intent-vs-implementation mismatches

None found for the applied R4-to-R6 Jira-linked page changes. The reviewed source changes for `FHIR-37792`, `FHIR-34314`, `FHIR-25684`, `FHIR-22768`, `FHIR-49732`, and `FHIR-44047` appear to match their page-specific intent.

## Overlooked or newly noticed problems

See H-001.

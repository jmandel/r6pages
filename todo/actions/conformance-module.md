# conformance-module actionable findings

## Summary

The page has 2 actionable findings: one P2 broken GraphDefinition/API Incubator link tied to an unresolved R6 Jira issue, and one P3 grammar defect visible in the current page. No substantive intent-vs-implementation mismatch was found for the R6 "maintenance mode" roadmap rewrite.

## High-signal findings

### E-001: GraphDefinition API Incubator link resolves to 404

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-module.html:186-187`; `FHIR-54250` (`https://jira.hl7.org/browse/FHIR-54250`); `curl -L -I` returned 404 for `http://build.fhir.org/HL7/api-incubator/StructureDefinition-GraphDefinition`
- Problem: the current page tells readers GraphDefinition is in the API Incubator but links to a non-resolving URL. `FHIR-54250` reports the same broken target from another R6 ballot4 page, so the problem is likely cross-page.
- Why it matters: readers cannot reach the referenced GraphDefinition replacement/incubator content from the conformance module roadmap.
- Recommended next step: coordinate with `FHIR-54250`, identify the intended current API Incubator/Additional Resources target, and update this page plus the other `StructureDefinition-GraphDefinition` references that use the same broken URL.

### E-002: CapabilityStatement sentence has singular/plural grammar error

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-module.html:83`
- Problem: the page says "A capability statements use..." which mixes a singular article with plural noun/verb.
- Why it matters: low-priority reader-facing typo in introductory conformance text.
- Recommended next step: change to either "Capability statements use..." or "A CapabilityStatement uses...", matching the page's preferred naming style.

## Intent-vs-implementation mismatches

None found. The final R6 roadmap text appears to have addressed the Zulip concern about overclaiming that some resources would have no future scope/content changes.

## Overlooked or newly noticed problems

E-001 and E-002 above.

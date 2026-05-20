# modules actionable findings

## Summary

The tracked R4 -> R6 ballot4 edits appear to match the Jira/Zulip/Confluence intent and are non-substantive, but the current page has 2 actionable reader-facing cleanup findings: one broken intra-spec anchor and one grammar issue.

## High-signal findings

### E-001: Foundation Module `#uses` link targets a missing anchor

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/modules.html:35`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/foundation-module.html:19-79`; neighboring anchors exist at `terminology-module.html:129`, `secpriv-module.html:159`, `conformance-module.html:146`, and `workflow-module.html:105`.
- Problem: The first startup bullet links to `foundation-module.html#uses`, but the Foundation module source has no `uses` anchor. The other comparable module links point to existing Common Use Cases anchors.
- Why it matters: New implementers following the "How will information be exchanged?" guidance may land at the wrong place instead of a use-case section.
- Recommended next step: Either add a `uses` anchor/section to `foundation-module.html` or change the link to an existing target such as `foundation-module.html` or `foundation-module.html#index`.

### E-002: Conformance startup bullet is grammatically awkward

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/modules.html:40`; commit `c32901f547075a3a54f97ef1c7d2e6ad248dc73d`; `https://jira.hl7.org/browse/FHIR-19572`.
- Problem: The added question reads "How the information conforms to the FHIR specification and implementation guides?" Unlike the surrounding bullets, it is not a well-formed question.
- Why it matters: Low-risk editorial issue, but this page is explicitly for new implementers and the bullet is part of the entry-point checklist.
- Recommended next step: Rephrase to "How will the information conform to the FHIR specification and implementation guides?" or "How does the information conform to the FHIR specification and implementation guides?"

## Intent-vs-implementation mismatches

None found. The page-specific Jira changes for `FHIR-23809`, `FHIR-31702`, `FHIR-22752`, `FHIR-19572`, and `FHIR-33977` were applied consistently with the available evidence.

## Overlooked or newly noticed problems

- `E-001`: existing broken `foundation-module.html#uses` anchor.
- `E-002`: grammar issue in the `FHIR-19572` Conformance bullet, even though the applied wording matches the Jira resolution text.

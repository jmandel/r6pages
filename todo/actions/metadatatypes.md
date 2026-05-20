# metadatatypes actionable findings

## Summary

The page has 2 actionable findings: one concrete rendering/section-numbering defect already tracked in Jira, plus a small cluster of reader-facing editorial defects in new or changed narrative text. No substantive intent-vs-implementation mismatch was found for the main Jira-backed semantic changes.

## High-signal findings

### E-001: RelatedArtifact subheadings skip heading levels

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/metadatatypes.html:177-225`; `FHIR-51822` (`https://jira.hl7.org/browse/FHIR-51822`); Zulip `#committers > Skipped heading levels`
- Problem: The current page has `h4` headings directly under the `RelatedArtifact` `h2`, and `FHIR-51822` explicitly reports `metadatatypes.html: h4 follows H2`.
- Why it matters: The generated section numbering can include spurious `.0.` levels and creates a reader-facing/navigation defect.
- Recommended next step: Fix the RelatedArtifact subheading hierarchy, likely by making these subheads `h3` or otherwise aligning heading levels, and resolve `FHIR-51822`.

### E-002: Several current-page typos remain in narrative text

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/metadatatypes.html:298`, `:316-318`, `:373`, and `:453`
- Problem: The current R6 ballot4 page contains visible spelling/grammar errors in Expression, ExtendedContactDetail, and MonetaryComponent prose.
- Why it matters: These are low-risk but reader-facing defects in normative-page narrative.
- Recommended next step: Correct these in the next editorial pass.

## Intent-vs-implementation mismatches

None found.

## Overlooked or newly noticed problems

E-001 and E-002 above.

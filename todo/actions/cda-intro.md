# cda-intro actionable findings

## Summary

The direct R4-to-R6 page diff is only template/metadata churn plus `FHIR-44047` punctuation cleanup, with no substantive CDA semantics changed. I found 2 actionable findings: one evidence gap about whether this informative CDA page should still be in the R6/core build, and one concrete editorial cleanup if the page remains.

## High-signal findings

### G-001: Confirm whether `cda-intro.html` should remain in the R6/core build

- Priority: P2
- Category: evidence-gap
- Evidence: current R6 ballot4 source still contains the page at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/cda-intro.html:13-15`; Zulip `#fmg > R6 Checklist - Automation??` messages `546732438` and `546846299`.
- Problem: On 2025-10-23, Gay Dolin said that under Structured Documents she did not think `cda:intro` should be present because it is not FHIR, pending co-chair confirmation. On 2025-10-24, Gino Canessa replied that removing an informative page likely requires a WG vote and that `https://build.fhir.org/cda-intro.html` was still in the build. I found no Jira or Confluence evidence of a final retention/removal decision.
- Why it matters: If SD intended removal before R6, the reviewed source still appears stale. If the page should remain, the decision and owner rationale should be explicit so the ballot build is not carrying a questioned core page by accident.
- Recommended next step: Ask SD/FMG to confirm the retention decision and record it in Jira or minutes; if removal was intended, remove the page through the normal WG-vote/process path.

### E-001: Resolve unfinished editor notes and stale title macro if the page remains

- Priority: P2
- Category: editorial
- Evidence: title macro says `[%settitle Resource Index%]` at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/cda-intro.html:3`; unresolved `[EDITORS: ...]` notes appear at lines `74` and `88`.
- Problem: The current page source still has a non-CDA page title and two body-visible editor notes, including one saying the current design does not make clear where to consistently find narrative. These were not introduced by the R4-to-R6 diff, but they remain in the R6 ballot4 source.
- Why it matters: If published/rendered, these look like unfinished editorial work and can undermine reader confidence in an informative page about CDA on FHIR.
- Recommended next step: If G-001 resolves to keeping the page, update the title macro and either resolve/remove the editor notes or replace them with proper published guidance.

## Intent-vs-implementation mismatches

No mismatch found for `FHIR-44047`; the source change matches the punctuation-only Jira intent. The only potential intent gap is G-001, where informal SD/FM discussion questioned page retention but the page remains present.

## Overlooked or newly noticed problems

E-001 captures the concrete current-page editorial problems noticed while reading the R6 ballot4 source end-to-end.

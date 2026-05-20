# versioning actionable findings

## Summary

The page has 2 actionable findings. The main risk is that the R6 ballot4 page still contains R5-era version-identification guidance in the version-specific profile table, and a tracked FHIR-I follow-up says compatibility guidance for `fhirVersion` elements still needs to be added to this page.

## High-signal findings

### H-001: R6 page still labels R5 as "this version"

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versioning.html:160-186`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/downloads.html:115`; `FHIR-35172`; `FHIR-35779`; Zulip `#implementers > R4B versioning`
- Problem: The R6 ballot4 `Version Specific Profile` table stops at `FHIR R5 (this version)` with version `5.0`, and has no R6/6.0 row or caveat. Prior Jira/Zulip work specifically treated stale `(this version)` wording in this table as a problem.
- Why it matters: Readers of an R6 page can reasonably infer that R5/5.0 is the current FHIR version for version-specific profile URLs, which is wrong for R6 ballot4 and undermines version-identification guidance.
- Recommended next step: Update the table for R6 or remove release-relative "this version" wording entirely; cross-check any duplicated fhirVersion/version-profile tables on `http.html#version-parameter` and `versions.html#extensions`.

### H-002: Open FHIR-I follow-up says this page still needs fhirVersion compatibility guidance

- Priority: P2
- Category: evidence-gap
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versioning.html:70-78`; `FHIR-40644`; Confluence `413046557` (`FHIR Infrastructure Minutes CC 2026-01-12`)
- Problem: The current page mentions `ImplementationGuide.fhirVersion` and `StructureDefinition.fhirVersion` only briefly, but `FHIR-40644` remains open for clarifying how those elements and CapabilityStatement `fhirVersion` values should be used for version compatibility. FHIR-I minutes in 2026 explicitly say to add a section to the Managing Multiple Versions page and link related element comments to it.
- Why it matters: The page is where implementers look for version-identification rules, but it still does not answer questions like whether an artifact for one FHIR version is compatible with systems/resources from nearby patch, minor, or ballot versions.
- Recommended next step: Triage `FHIR-40644` against the current R6 page and add the planned compatibility section or explicitly defer it with cross-links so readers can find the pending decision.

## Intent-vs-implementation mismatches

- `H-001`: Prior intent in `FHIR-35172`/`FHIR-35779` was to remove stale release-relative wording and keep the table current; the R6 ballot4 page has the same class of stale wording again.
- `H-002`: `FHIR-40644` is not resolved, but FHIR-I's recorded direction is not yet reflected in the page.

## Overlooked or newly noticed problems

- `H-001`: The stale R5 row is visible in the current R6 ballot4 page and was not corrected by the late R6 commits that updated metadata, package-note text, and punctuation.
- No other high-signal current-page defects were found.

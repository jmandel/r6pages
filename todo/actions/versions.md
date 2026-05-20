# versions actionable findings

## Summary

The page has 3 actionable findings. The main risk is that R6 ballot4 still gives R5/R6 cross-version extension guidance that conflicts with resolved Jira/workgroup intent, and its future-release section is already the subject of an R6 ballot negative.

## High-signal findings

### H-001: Defining-version table still omits R6 and labels R5 as this version

- Priority: P1
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versions.html:650-673`; `FHIR-47208`; `FHIR-47216`; Confluence page `265492373`; commit `e89e89caca55b2ecdb1ba6820a95b94f9115d36a`
- Problem: The table defining valid `[defining_version]` values still stops at `FHIR R5 (this version)` / `5.0` on an R6 ballot page. `FHIR-47208` says R6 is missing from this exact table, and `FHIR-47216` resolved that all tables should have R6 as well as R5.
- Why it matters: Implementers constructing cross-version extension URLs for R6 elements may infer that R6 is not a valid defining version, or that R5 is the current page version.
- Recommended next step: Add an R6/`6.0` row marked as this version, update/remove the R5 "(this version)" label, and move `FHIR-47208`/`FHIR-47216` through applied/publication status after verifying all affected tables.

### E-001: R6 Extensions to R5 package cell displays the wrong package id

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versions.html:761-767`; `FHIR-42924`; commit `e89e89caca55b2ecdb1ba6820a95b94f9115d36a`; PR https://github.com/HL7/fhir/pull/3967
- Problem: In the R6 Extensions row, the R5 Package cell links to `https://hl7.org/fhir/uv/xver-r5.r6/` but displays `hl7.fhir.uv.xver-r6.r6`.
- Why it matters: The visible package id contradicts the link and table position, making the package matrix unreliable for implementers.
- Recommended next step: Change the displayed text to match the intended package id (`hl7.fhir.uv.xver-r5.r6`) or correct both href and text if the naming convention is different.

### H-002: Future-release plans section is stale for R6

- Priority: P2
- Category: overlooked-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/versions.html:776-817`; `FHIR-54575`
- Problem: The R6 ballot4 page still says "HL7's general intent for the Release 6..." and "More information on plans for Release 5..." in the future-release section. `FHIR-54575` is a submitted R6 ballot negative citing this stale Release 5 sentence.
- Why it matters: This page is intended to set implementer expectations for version evolution, so stale future-release guidance can mislead readers about post-R6 plans.
- Recommended next step: Triage `FHIR-54575` and update the section to current post-R6 planning guidance, or replace it with a link to an FMG-maintained planning page.

## Intent-vs-implementation mismatches

H-001 and E-001 are the material mismatches. `FHIR-42924`/`FHIR-47216` called for R6 table updates, but the current defining-version table still lacks R6 and the package matrix contains a visible R5/R6 package-id mismatch.

## Overlooked or newly noticed problems

H-002 is the material newly noticed problem. Minor typos such as `this this`, `f-compat-cardianality`, and `This leads to URLs like following` are visible in the current page but were not elevated because stronger R5/R6 defects have direct Jira evidence.

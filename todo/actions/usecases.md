# usecases actionable findings

## Summary
One actionable finding: a resolved R6 Jira correction for this page is not present in the R6 ballot4 source, leaving a stale `(R5)` note on the current usecases page.

## High-signal findings
### E-001: Resolved `FHIR-44051` stale-R5 correction is not applied
- Priority: P2
- Category: editorial
- Evidence: Current `source/usecases.html:33-34` says consumer-centered data exchange work is expected in the next release `(R5)`. `FHIR-44051` resolves this exact R6 usecases issue as "Update to R6." Commit `aab383f7800e` makes that change on branch `rhofstede-fixes-pharmacy`, but is not an ancestor of `5d67a34...`.
- Problem: R6 ballot4 still publishes the stale R5 note despite an accepted correction.
- Why it matters: Readers see obsolete release guidance, and a resolved ballot correction appears lost before publication.
- Recommended next step: Apply or supersede `FHIR-44051` on the active R6 branch; decide whether the note should say R6, R6 final, R7, or be removed.

## Intent-vs-implementation mismatches
- `FHIR-44051` says to update the PHR note from `(R5)` for R6, but current R6 ballot4 source still has `(R5)`. See E-001.

## Overlooked or newly noticed problems
None found beyond E-001.

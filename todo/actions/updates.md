# updates actionable findings

## Summary
Found 1 actionable finding: the R6 ballot4 `updates.html` page is labeled Informative while retaining uppercase conformance language, despite FHIR-I R6 minutes saying to move conformance language and make the page normative.

## High-signal findings

### H-001 Informative page still contains normative SHOULD
- **Priority:** P1
- **Category:** Intent-vs-implementation mismatch / conformance status
- **Evidence:** `source/updates.html:12` marks the page `Standards Status: Informative`; `source/updates.html:170` says `the server SHOULD either...`; FHIRI WGM 202509 minutes for `updates.html` say `Move conformance language and make normative`; commit `270e0ceb` instead changed the page to Informative.
- **Problem:** Current source leaves a normative-style requirement on an Informative page, and appears not to apply the recorded R6 status decision.
- **Why it matters:** Readers and implementers may be unsure whether the ETag behavior is enforceable conformance guidance or only informative advice.
- **Recommended next step:** Ask FHIR-I to confirm intent; either make `updates.html` normative or move/reword the `SHOULD` into a normative page such as HTTP and leave only non-normative explanation here.

## Intent-vs-implementation mismatches
H-001.

## Overlooked or newly noticed problems
None found.

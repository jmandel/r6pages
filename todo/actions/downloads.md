# downloads actionable findings

## Summary

The page has 2 actionable findings: one P2 intent/discoverability mismatch around the removed Reference Implementations link, and one P3 reader-facing typo in the R6 package list.

## High-signal findings

### H-001: Reference implementation Confluence link disappeared after decisions to keep it external but discoverable

- Priority: P2
- Category: intent-mismatch
- Evidence: current page only links the FHIR Tools Registry at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/downloads.html:105-107` and ends without a Reference Implementations row at lines 144-154; commit `3bfb4a3a0bea81f82e7e71100893c1226d8fccdc` / PR https://github.com/HL7/fhir/pull/3987 deleted the remaining Reference Implementations Confluence link; `FHIR-31735` and `FHIR-30088` both resolved to move reference implementations to Confluence, not to make them undiscoverable from downloads.
- Problem: R6 ballot4 no longer gives downloads-page readers a direct `Open Source Implementations`/reference implementation destination, even though the tracked Jira and FHIR-I minutes expected that list to live on Confluence and remain linked from the spec.
- Why it matters: implementers looking for supported libraries/reference platforms lose the intended handoff, and the final source no longer clearly matches the recorded workgroup intent.
- Recommended next step: ask FHIR-I/spec maintainers whether PR #3987 intentionally removed this handoff; if not, restore a concise row/link to `https://confluence.hl7.org/display/FHIR/Open+Source+Implementations` or mention it next to the Tools Registry link.

### E-001: Typo in the R6 expansions package description

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/downloads.html:116`; blame points the current line to `3bfb4a3a0bea81f82e7e71100893c1226d8fccdc`, with the phrase originally introduced by `b98b26f6cb50c11be16c313747ddb33bbea37ad1`.
- Problem: The text says "value sets the have a required binding" instead of "value sets that have a required binding".
- Why it matters: reader-facing typo on a high-traffic downloads page.
- Recommended next step: change `the have` to `that have`.

## Intent-vs-implementation mismatches

H-001 is the only mismatch found that appears worth triage.

## Overlooked or newly noticed problems

E-001 is the only concrete current-page editorial defect found.

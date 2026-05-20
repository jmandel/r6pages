# exchange-module actionable findings

## Summary
2 findings: one substantive wording mismatch where Exchange-module subscription text missed the FHIR-47279 R6 fix, plus one low-priority rendering/editorial cleanup.

## High-signal findings

### H-001: Exchange module still uses subscription wording that FHIR-47279 removed elsewhere
- **Priority:** P2
- **Category:** Intent-vs-implementation mismatch / semantic guidance
- **Evidence:** `source/exchange-module.html:115-119` still says “establish proactive event notifications”; FHIR-47279 resolved that “proactive” was not the best word; commit `7b84f997...` changed `source/subscriptions.html:18-20` to “establish a request for event or change notifications”; PR #3967 included `source/subscriptions.html` but not `source/exchange-module.html`.
- **Problem:** The Exchange module repeats the old subscription summary after the canonical Subscriptions page was corrected for R6.
- **Why it matters:** Readers may see inconsistent guidance about whether subscriptions are “proactive,” despite a voted FHIR-I clarification.
- **Recommended next step:** Update the Exchange-module Subscriptions paragraph to align with the FHIR-47279 wording, or explicitly triage if FHIR-I intended different summary wording here.

### E-002: Services/SOA line renders without a space before the parenthetical
- **Priority:** P3
- **Category:** Editorial/rendering defect
- **Evidence:** `source/exchange-module.html:97` contains `</a>(e.g., a SOA)`.
- **Problem:** Rendered text reads like `services framework(e.g., a SOA)`.
- **Why it matters:** Minor polish issue on a line already touched for FHIR-44047 punctuation cleanup.
- **Recommended next step:** Insert a space before the parenthetical: `</a> (e.g., a SOA)`.

## Intent-vs-implementation mismatches
- H-001.

## Overlooked or newly noticed problems
- E-002.

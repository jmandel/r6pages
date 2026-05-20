# foundation-module actionable findings

## Summary
2 actionable findings were found. Main risk: the R6 ballot4 Foundation Module roadmap may be stale after R6 normative-status edits, and it contains visible editorial placeholders.

## High-signal findings

### H-001: Subscription roadmap status appears stale after R6 normative changes
- **Priority:** P2
- **Category:** intent-mismatch
- **Evidence:** `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/foundation-module.html:106-110` says Subscription, SubscriptionStatus, and SubscriptionTopic are “undergoing trial use.” Commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / PR #3901 changed each corresponding StructureDefinition `structuredefinition-standards-status` from `trial-use` to `normative`.
- **Problem:** The page’s roadmap language may no longer match current R6 source metadata.
- **Why it matters:** Readers may get conflicting maturity/status signals for Subscription resources.
- **Recommended next step:** Ask FHIR-I to decide whether the resource metadata or the roadmap prose should be updated before publication.

### E-001: Roadmap prose has a typo and empty placeholders
- **Priority:** P3
- **Category:** editorial
- **Evidence:** `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/foundation-module.html:104` says “here have been significant redesigns”; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/foundation-module.html:108-110` renders `Subscription:`, `SubscriptionStatus:`, and `SubscriptionTopic:` with no text after the colons.
- **Problem:** The roadmap looks unfinished.
- **Why it matters:** It reduces confidence in the maturity guidance on the page.
- **Recommended next step:** Fix “here” to “there” and either add descriptions after the colons or remove the colons.

## Intent-vs-implementation mismatches
H-001.

## Overlooked or newly noticed problems
E-001.

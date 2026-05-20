# ballot-intro actionable findings

## Summary

The page has 2 actionable findings. The main risk is that ballot reviewers are being directed by a change-summary page with one accepted-but-unapplied broken-link correction and a moved-artifact list that is visibly corrupted and later reported incomplete.

## High-signal findings

### H-001: Moved-artifact list is not reliable enough for ballot review

- Priority: P2
- Category: overlooked-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ballot-intro.html:69-113`; commit `71567db3ee039ac6977be5f96a7e013896569a36`; commit `02f79b0a3ba639280ab7d0d92e364f0a2b676bea`; Zulip `#fmg > Overview of Incubating IGs` (`https://chat.fhir.org/#narrow/stream/fmg/topic/Overview%20of%20Incubating%20IGs`)
- Problem: The page says "Here's the list" for resources moved out of the specification and then lists other moved artifacts, but the list contains a stray rendered `4`, a corrupted `DocumentReCapabilityStatementference.$conforms` label for a CapabilityStatement operation, and a likely wrong `ChargeDefinition.$apply` label pointing to `ChargeItemDefinition.$apply`. Later Zulip discussion says the ballot-intro overview was the only overview found and was incomplete, with `Encounter.$everything` cited as missing.
- Why it matters: Balloters may miss or misidentify moved resources/operations when deciding what changed in R6 and where to file comments.
- Recommended next step: Reconcile this list against an authoritative incubator/additional-resource inventory, fix the corrupted labels/rendering, and link to the maintained incubator overview rather than relying on a hand-maintained static list.

### E-001: Accepted THO link correction is still not applied

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ballot-intro.html:129`; `FHIR-53852` (`https://jira.hl7.org/browse/FHIR-53852`)
- Problem: The medication statement category note still links to `http://terminology.fhr.org`, while `FHIR-53852` resolved that this should be changed to `https://terminology.hl7.org/`.
- Why it matters: The visible THO link is broken on a ballot guidance page, and the accepted correction has not reached this source snapshot.
- Recommended next step: Apply the `FHIR-53852` URL correction and update/close the tracker state when the fix is merged.

## Intent-vs-implementation mismatches

- `FHIR-53852` is persuasive and specifies the exact URL correction, but the R6 ballot4 source still contains the broken URL.
- The ballot intro acts as a discoverability list for moved incubator/additional-resource content, but later community discussion indicates it was incomplete and should be replaced or supplemented by a maintained overview.

## Overlooked or newly noticed problems

- The moved-artifact list includes reader-facing text/rendering corruption at lines 97, 102, and 106.

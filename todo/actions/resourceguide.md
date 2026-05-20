# resourceguide actionable findings

## Summary

The page has 2 actionable findings. The substantive issue is that `FHIR-43371` appears incompletely applied: the formal resolution called for Observation to be added for both Chief Complaint and Family History, but only Chief Complaint was updated.

## High-signal findings

### H-001: `FHIR-43371` missed Family History's Observation mapping

- Priority: P2
- Category: intent-mismatch
- Evidence: `FHIR-43371` resolution says "add Observation as a candidate resource for Chief Complaint and Family History" (`bun run jira:search snapshot FHIR-43371`; https://jira.hl7.org/browse/FHIR-43371); commit `991a414216283bead11ce07c6173007106dca6ae` updates only Chief Complaint; current source has Chief Complaint as Condition + Observation at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourceguide.html:53`, while Family History remains only FamilyMemberHistory at line `59`.
- Problem: the applied page text does not fully match the Jira/workgroup resolution.
- Why it matters: readers using the visible common-concepts table do not see the intended Observation option for Family History, and the Jira issue is marked Applied.
- Recommended next step: update the Family History row to include Observation if the `FHIR-43371` intent still stands, or reopen/link a follow-up Jira if the omission was deliberate.

### E-001: Commented resource-classification source has stale/malformed text

- Priority: P3
- Category: editorial
- Evidence: the resource-classification block is currently commented out from `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourceguide.html:92` through line `700`; inside it, line `148` says `<code>ClinicalAssessment</code> (aka ClinicalAssessment)`, and line `368` has malformed markup `<code>DeviceAlert<code>`.
- Problem: source-only content preserved in the page has an obvious stale rename artifact and malformed HTML.
- Why it matters: it is not currently rendered, but it will become a reader-facing defect if the block is restored and it signals that mechanical resource updates in the commented section were not fully cleaned up.
- Recommended next step: either fix/remove the stale commented text or delete the dead commented resource-classification block if it is no longer intended to be maintained.

## Intent-vs-implementation mismatches

`H-001` is the only substantive mismatch found.

## Overlooked or newly noticed problems

`E-001` is source-only because the affected block is currently inside an HTML comment.

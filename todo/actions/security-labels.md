# security-labels actionable findings

## Summary

The page has 3 actionable findings. The main risk is that the R6 ballot4 page is already known to be misleading in places: Security WG post-ballot resolutions moved/rewrote major parts of the page, while one remaining NOREUSE sentence still appears semantically weakened by modal-word cleanup.

## High-signal findings

### H-001: R6 ballot4 security-labels text is superseded by post-ballot Security WG fixes

- Priority: P1
- Category: overlooked-problem
- Evidence: R6 ballot4 source `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security-labels.html:162`-`176`, `258`-`337`, `360`-`362`; `FHIR-53884`, `FHIR-53885`, `FHIR-53928`; PR https://github.com/HL7/fhir/pull/4066; commits `2277eb5f378a974398668a1c200713a37dc119c3`, `b7b0249d1f4cc7d8442639d6c728fc7c22359905`, `d59d16721deb82e840400f88b3a119145093983f`
- Problem: Later R6 ballot issues found the "Core Security Labels" section confusing, the break-the-glass examples misplaced on the security-labels page, and the HCS Confidentiality `1..1` cardinality misleading. These were fixed after the ballot4 source commit in PR 4066.
- Why it matters: Anyone using ballot4 text as final normative security-label guidance may preserve content that the responsible WG already moved or corrected.
- Recommended next step: Ensure the target publication/release branch includes PR 4066 or backport the three page-level fixes.

### H-002: NOREUSE handling caveat is weakened to "might only use"

- Priority: P2
- Category: spec-problem
- Evidence: R6 ballot4 source `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security-labels.html:233`-`240`; R4 source `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/security-labels.html:210`-`217`; commit `87b00c9c0de977f8559e0f99694e8664e03a06cd`
- Problem: R4 said an application receiving a NOREUSE resource "may only use it for the immediate purpose of use"; the R6 QA commit changed this to "might only use it", which reads as uncertainty rather than a restriction.
- Why it matters: NOREUSE is a Refrain/handling caveat. Weakening the restriction can confuse implementers about whether reuse is prohibited.
- Recommended next step: Reword without RFC modal ambiguity, e.g. "is permitted to use it only for the immediate purpose of use."

### E-001: HCS classification subsection is missing its intended heading/link

- Priority: P2
- Category: intent-mismatch
- Evidence: R6 ballot4 source `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security-labels.html:339`-`367`; `FHIR-11071` snapshot lines showing supplied `<h4 ...>Security Classification</h4>`; commit `28032417e6d3166967321d4aaefc06693dd370f7`
- Problem: `FHIR-11071` supplied HTML includes a "Security Classification" heading linking to `ValueSet-v3-SecurityClassificationObservationType`, but the ballot4 page starts the classification text/table without that heading, making "Security Category" the first visible subsection under HCS.
- Why it matters: The classification row is conceptually peer to Security Category and Security Control; without a heading/link, readers can miss the taxonomy level and there is no stable in-page anchor for it.
- Recommended next step: Add the missing Security Classification heading/link before the classification definition/table.

## Intent-vs-implementation mismatches

- `FHIR-11071` supplied a Security Classification heading/link that is absent from the current page.
- `FHIR-53884`, `FHIR-53885`, and `FHIR-53928` identify later WG intent that differs from the ballot4 source; PR 4066 applies that intent after the ballot4 source cut.

## Overlooked or newly noticed problems

- The NOREUSE "might only use" wording appears to be a mechanical modal-word cleanup with a substantive reading change and was still present on current `master` during this review.

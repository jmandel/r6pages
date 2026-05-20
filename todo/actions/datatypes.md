# datatypes actionable findings

## Summary

The page has 2 actionable findings, both reader-facing editorial/rendering issues. No substantive intent-vs-implementation mismatch was found in the major R6 semantic changes, but the Quantity-variation heading bug directly undercuts a Jira-requested navigation fix.

## High-signal findings

### E-001: Age variation is mislabeled as Distance

- Priority: P2
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes.html:975-1010`; `0cd58f90e8487891bc4cf3b8ceb320d7ee12ce34`; `FHIR-40624`; Confluence page `161059574`
- Problem: `FHIR-40624` asked for separate subheaders under "Defined Variations on Quantity", including Age. The implementation adds a second `<a name="Distance">` and `<h4>Distance</h4>` immediately before the Age table row.
- Why it matters: readers and anchor/navigation tooling looking for Age are sent through a duplicate Distance heading, which defeats the discoverability fix.
- Recommended next step: change the second `Distance` anchor/heading to `Age` and verify generated anchors remain unique.

### E-002: Several visible typos/markup issues remain in current prose

- Priority: P3
- Category: editorial
- Evidence: current source lines `217`, `1314`, `1326-1329`, `1394`, `1405-1408`, and `1637-1640`; commits `356b6a87ae93a7e325a44c2ba82c60c7205d247d`, `6b6661326a60980f6418679f71a404c573394df2`, `369aa0c0cdf6832e4b9370858d9a4c507fa4984c`, and `ba10a6f24d181dec80b69dd90e68e0337421e7a0`
- Problem: examples include "The time SHALL specified", "separated by by", "source system defined", "There is no escape sequences", "processer", a missing closing parenthesis in the Identifier RFC3986 example sentence, and invalid `<cod>count</cod>` markup.
- Why it matters: most are minor, but they appear in normative or implementation-guidance prose; the invalid tag is a concrete rendering defect.
- Recommended next step: make an editorial cleanup pass for these exact strings, using `<code>count</code>` for the Timing markup.

## Intent-vs-implementation mismatches

Only E-001 found.

## Overlooked or newly noticed problems

E-002 lists concrete current-page editorial/rendering defects noticed during the full-page read.

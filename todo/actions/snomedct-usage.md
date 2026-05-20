# snomedct-usage actionable findings

## Summary

2 actionable findings were found. Main risk: the R4→R6 source diff is only mechanical, but the unchanged SNOMED licensing/current-guidance prose appears stale and under-linked for R6 ballot4.

## High-signal findings

### H-001: US-specific SNOMED CT exception statement appears stale and unauditable
- **Priority:** P2
- **Category:** substantive-history/spec-guidance
- **Evidence:** R6 source still says the base spec “only uses concepts defined in the International distribution,” but “there are some US specific codes” and HL7/IHTSDO are working to remove them (`source/snomedct-usage.html:25-31`). The same wording was introduced in 2016 (`f632a5...`); 2016 Zulip says IHTSDO allowed US-specific content “for now,” not permanently. No page-specific Jira was found.
- **Problem:** The page does not identify which US-specific codes remain, whether the temporary exception is still valid, or who owns cleanup.
- **Why it matters:** This page exists for SNOMED CT licensing management; stale exception language weakens that control.
- **Recommended next step:** Ask FHIR-I/Vocab/HTA to review the generated current code list, document or remove any remaining US-specific exceptions, and update `IHTSDO`/wording to current SNOMED International terminology.

### E-001: Current page lacks authoritative SNOMED guidance link and has visible typos
- **Priority:** P3
- **Category:** editorial/navigation
- **Evidence:** R6 source has no `terminology.hl7.org/SNOMEDCT.html` link; a 2024 Zulip thread requested a prominent link from `snomedct-usage.html` to that THO page. Current text also says `towards remove` (`:30`) and `value sets,the` (`:38`).
- **Problem:** Readers are not pointed to current THO SNOMED edition/version guidance, and the page looks stale.
- **Why it matters:** This increases confusion around SNOMED editions/licensing and reduces confidence in a licensing-management page.
- **Recommended next step:** Add a prominent THO SNOMED guidance link and fix the two typos in the same technical-correction PR.

## Intent-vs-implementation mismatches

None found for the direct R4→R6 page diff.

## Overlooked or newly noticed problems

H-001 and E-001.

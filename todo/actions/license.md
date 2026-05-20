# license actionable findings

## Summary

The page has 3 actionable findings: one stale/possibly non-applied LOINC legal notice, one resolved R6 trademark-clarification request that is not reflected in the current page, and one concrete cluster of reader-facing trademark/legal text defects.

## High-signal findings

### H-001: LOINC notice still hard-codes copyright details despite later FHIR-28295 direction

- Priority: P2
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/license.html:115-117`; commit `8cd675bf1d83dc4d58f66a7f54c5bad6c838c083`; `FHIR-28295`; Confluence page `120756184`
- Problem: the current page still says LOINC is copyright `1995-2020` and links directly to `loinc.org/license`. `FHIR-28295` was later resolved to remove that specific copyright information and refer to THO/terminology.hl7.org; Jira comments explicitly note that `license.html#loinc` likely also needed the same treatment.
- Why it matters: this is legal/third-party-IP guidance. A hard-coded date/license statement can become stale and conflicts with the documented direction to centralize current LOINC copyright information.
- Recommended next step: ask FHIR-I/Vocab/HTA or TSMG to confirm whether the license page LOINC row should be replaced with a THO reference, and file/apply a FHIR-core license-page tracker if no current one exists.

### H-002: Resolved R6 trademark-example request is not reflected in the page

- Priority: P2
- Category: overlooked-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/license.html:70-96`; `FHIR-44925`; Zulip `#implementers > Trademark question about text to include`; Confluence page `413043627`
- Problem: `FHIR-44925` was resolved persuasive on 2025-12-15 to add examples explaining trademark-use vs non-trademark-use cases. The R6 ballot4 source commit is 2025-12-18, but `source/license.html` has no post-2025-11-03 implementation commit and the current trademark section has no such examples.
- Why it matters: the current trademark section was confusing enough to trigger a later community question and a formal FHIR-I decision. Leaving the examples out preserves the ambiguity for readers deciding whether permission and notice text are required.
- Recommended next step: apply `FHIR-44925` to `source/license.html#trademark` or update the Jira status/target if it is intentionally deferred past R6 ballot4.

### E-001: Trademark/legal text has concrete reader-facing typos and malformed wording

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/license.html:67`, `:75`, `:78-83`; blame points lines 75, 78-83 to `56a635cea5e5fd1271db44961429a40dea50b3e2`
- Problem: current text includes an extra trailing quote in the GOM/patent bullet, `it's affiliates` instead of `its affiliates`, an unclosed parenthetical around the fair-use note, and `FHIR always include the ® symbol`.
- Why it matters: this is a legal/trademark guidance page; visible typos and malformed wording reduce trust and can obscure what users are being asked to do.
- Recommended next step: fix these editorial defects when applying the next license/trademark-page update, ideally alongside `FHIR-44925`.

## Intent-vs-implementation mismatches

- `H-001` appears to be a partial or stale application of the `FHIR-28295` LOINC copyright direction.
- `H-002` is a resolved R6 page-specific decision not yet present in the current source.

## Overlooked or newly noticed problems

- `E-001` is visible in the current page and was not clearly covered by the tracked changes reviewed here.

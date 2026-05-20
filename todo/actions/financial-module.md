# financial-module actionable findings

## Summary

The page has 3 actionable findings: one glossary consistency concern introduced without a clear rationale, plus two reader-facing editorial/staleness issues in newly added or carried-forward text.

## High-signal findings

### H-001: Insurer/Payer/Payor glossary rows are no longer aligned

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/financial-module.html:152-163`; commit `720258c80a99566e1259c4c1a1dcacd8fbc5abbf`
- Problem: the `Insurer` row now defines "payer" using a detailed transaction-processing definition and US Realm payer ID examples, while adjacent `Payer` and `Payor` rows remain generic "A public or private insurer" despite being listed as aliases.
- Why it matters: readers can reasonably infer that Insurer, Payer, and Payor are interchangeable, but the table gives only one alias the detailed definition and leaves the other rows semantically weaker.
- Recommended next step: ask FM to decide whether the detailed definition belongs under `Payer`, should be copied/harmonized across all three alias rows, or should cite its source and scope.

### E-001: Added 3-tier and tax sections contain typo/wording defects

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/financial-module.html:464-482` and `:495-498`; commits `f32e28bfd05e47a8bcfdd86277cb75f032e9185e`, `75e9d09e288b16ae6531e19fbaffff9380ebf942`; Jira `FHIR-29689`
- Problem: visible defects include "current only", "unlimited numer", "unlimited number or .details", "strictures", "` ,item.detail`", and "breakdown" where "break down" is intended.
- Why it matters: these are in newly added explanatory sections that implementers may read for line-item/tax semantics.
- Recommended next step: make an editorial cleanup Jira or patch that preserves the intended 3-tier and tax formulas while fixing the wording.

### E-002: Roadmap text appears R5/R6-stale in the R6 ballot4 page

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/financial-module.html:512-525`; Jira `FHIR-40659`; commit `8306797af543e39f16c15b5007bae264b076f29f`
- Problem: `FHIR-40659` intentionally applied R5 roadmap text, but the R6 ballot4 page still says FM "has been focusing for R5" and will work in "preparation to Release 6".
- Why it matters: even if acceptable during R6 balloting, the roadmap can read stale or historically ambiguous on an R6 page.
- Recommended next step: have FM review before publication and either update the roadmap for the current/future release or explicitly frame the R5 sentence as historical context.

## Intent-vs-implementation mismatches

None found.

## Overlooked or newly noticed problems

H-001, E-001, and E-002 are current-page problems noticed during full-page review rather than clear mismatches with a formal Jira decision.

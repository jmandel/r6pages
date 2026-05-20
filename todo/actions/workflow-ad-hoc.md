# workflow-ad-hoc actionable findings

## Summary

The page has 2 actionable findings. The main risk is that R6 ballot4 presents informative workflow guidance that still looks unfinished: visible TODO/???/TBD text remains, and the newly linked usage-example page is itself TODO-only.

## High-signal findings

### E-001: Cleanup of incomplete workflow content is not finished

- Priority: P2
- Category: overlooked-problem
- Evidence: current source lines `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/workflow-ad-hoc.html:145`, `:182`, `:193`, `:197`, `:201`, `:209`; usage links at `:66-67`, `:103-104`, `:140-141`, `:176-177`, `:203-204`; `FHIR-44031`; `FHIR-55136`; Confluence page `234784905`; Confluence minutes `234784839` and `239206707`.
- Problem: `FHIR-44031` was resolved persuasive/change-required to clean up TODO/TBD/??? content, but the current page still renders TODOs, `???`, and `TBD`. The added "Usage Examples" links send readers to Confluence page `234784905`, whose snapshot still lists `TODO` for every workflow pattern.
- Why it matters: Readers looking for workflow implementation guidance see incomplete normative-adjacent narrative and are directed to a page that does not provide the promised examples.
- Recommended next step: Triage `FHIR-44031`/`FHIR-55136` together; either replace the incomplete sections and populate the linked examples page, or explicitly mark the gaps as pending/non-normative implementation notes rather than TODO placeholders.

### E-002: Multiple concrete spelling and wording defects remain

- Priority: P3
- Category: editorial
- Evidence: current source lines `:79` and `:115` (`DiagosticReport`), `:81` (`received and store`), `:91` (`unmanagable`), `:112` (`fullfiller`), `:188` (`conformation of receipt`), `:220` (`Services responds`); related submitted QA issue `FHIR-55135`.
- Problem: The current page still contains several reader-facing typos/wording errors. One R4->R6 change even regressed `unmanageable` to `unmanagable`.
- Why it matters: These defects are low-risk semantically but undermine page quality, especially on a page already flagged for incomplete content.
- Recommended next step: Fix these obvious typos as a technical correction, preferably while resolving the broader incomplete-content cleanup.

## Intent-vs-implementation mismatches

`FHIR-44031` intended cleanup of TODO/TBD/??? content has not been fully implemented; see E-001.

## Overlooked or newly noticed problems

The spelling/wording defects in E-002 are visible in the current page and were not fully covered by the tracked R4-to-R6 page changes.

# op-example-request actionable findings

## Summary

The R4-to-R6 ballot4 diff itself is mostly template/metadata plus one punctuation fix, but the current page has 2 actionable findings: the `$expand` request example appears stale enough to mislead implementers, and its embedded body-site ValueSet still contains unresolved/stale terminology text.

## High-signal findings

### H-001: `$expand` example uses the wrong submitted-ValueSet parameter name

- Priority: P1
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/op-example-request.html:27-33`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/valueset/operationdefinition-ValueSet-expand.xml:77-85`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/valueset/$expand-request.txt:13-23`
- Problem: the page names the embedded ValueSet parameter `valueset`, but the R6 `$expand` OperationDefinition parameter is `valueSet` and the current `$expand` example file uses `valueSet`. The same payload also appears to put the filter value in `<valueString name="abdo"/>`, which should be reviewed with the rest of the Parameters example.
- Why it matters: readers copying this operation request may send a parameter name a conforming server does not recognize, defeating the page's purpose as an operation request example.
- Recommended next step: update the page's request body to match the current `ValueSet/$expand` OperationDefinition and preferably reuse or align with `source/valueset/$expand-request.txt`.

### H-002: Embedded body-site ValueSet is stale and still renders a TODO

- Priority: P2
- Category: overlooked-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/op-example-request.html:39-57`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/bodystructure/valueset-body-site.xml:26-39`; `FHIR-55115`; `FHIR-3193`
- Problem: the inline example identifies body-site content but still says `"Clinical finding"` with `91723000: Anatomical structure` and includes a rendered XML comment saying `todo: work this over... how should this be done?`. The current body-site ValueSet source describes `442083009 (Anatomical or acquired body site (body structure))`, and `FHIR-55115` directly flags this page's `todo`.
- Why it matters: this is visible example content, not hidden source commentary; it can teach the wrong SNOMED constraint and signals incomplete specification content.
- Recommended next step: replace the embedded ValueSet with a current, valid, minimal body-site example or a neutral placeholder, and resolve/triage `FHIR-55115` when the TODO is removed.

## Intent-vs-implementation mismatches

No mismatch found for the R4-to-R6 tracked commits: `FHIR-44047` requested punctuation cleanup and the page applies that narrow change. The older body-site correction in `FHIR-3193` appears not to have been reflected in this embedded example; see H-002.

## Overlooked or newly noticed problems

H-001 and H-002 are both current-page problems that were not introduced by the R4-to-R6 diff but are visible in the R6 ballot4 source.

# clinicalreasoning-quality-reporting actionable findings

## Summary

The page has 4 actionable findings. The main risk is that the Normative R6 ballot4 page still points implementers at retired or mismatched operation semantics while adjacent OperationDefinitions and Jira decisions moved toward `$evaluate`/DEQM alignment.

## High-signal findings

### H-001: Invoking Measures still presents retired `$evaluate-measure` as the primary operation

- Priority: P1
- Category: intent-mismatch
- Evidence: current page `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-quality-reporting.html:501-541`; same page says MeasureReport is returned by `$evaluate` at `:628`; current `$evaluate` OperationDefinition is `code=evaluate` and `instance=false` at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/measure/operationdefinition-Measure-evaluate.xml:62-68`; `$evaluate-measure` is deprecated/retired at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/measure/operationdefinition-Measure-evaluate-measure.xml:11-13` and `:61-86`; `FHIR-50484` says to align with DEQM and "Correct $evaluate-measure to $evaluate" (`https://jira.hl7.org/browse/FHIR-50484`); `FHIR-50486` says `$evaluate-measure` was already deprecated; `FHIR-45727` says the subject example should use `subject=Patient/124`.
- Problem: The page still describes `$evaluate-measure` as the custom operation, links `operation-measure-evaluate-measure.html`, gives type and instance examples using `$evaluate-measure`, and has a patient example using `[base]/Basic/CMS146/$evaluate-measure?subject=124`.
- Why it matters: Readers may implement or call the retired operation, use an invalid/stale resource path, or copy a subject parameter form that later Jira explicitly corrected.
- Recommended next step: Rewrite the Invoking Measures section around the current `$evaluate` operation or clearly mark `$evaluate-measure` as deprecated; align examples with the current OperationDefinition and Jira dispositions before publication.

### H-002: Ad-hoc Organization guidance uses parameter names that do not match current operations

- Priority: P1
- Category: spec-problem
- Evidence: current page says the Organization can be supplied in the `provider` or `providerResource` parameter for `$evaluate`, `$care-gaps`, or `$collect-data` at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-quality-reporting.html:554-610`; `$evaluate` currently defines `reporter`/`reporterResource` at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/measure/operationdefinition-Measure-evaluate.xml:129-142`; `$collect-data` uses `reporter`, `reporterResource`, and `organizationResource` at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/measure/operationdefinition-Measure-collect-data.xml:107-130`; `$care-gaps` uses `organization`/`organizationResource` at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/measure/operationdefinition-Measure-care-gaps.xml:248-261`; related Jira `FHIR-53278` records the ad-hoc Organization alignment intent.
- Problem: The page gives one parameter pair for three operations, but the operation definitions use different names. The final SHALL sentence is therefore not directly actionable for at least `$evaluate` and `$care-gaps`.
- Why it matters: This is conformance-facing text: implementers need to know which request parameter drives `MeasureReport.reporter` and when a contained ad-hoc Organization is required.
- Recommended next step: Replace the generic `provider/providerResource` wording with operation-specific parameter names, or align the OperationDefinitions and page text so they use the same names consistently.

### H-003: Later Jira decision adds missing value-based stratifier behavior

- Priority: P2
- Category: overlooked-problem
- Evidence: current value-based/component stratifier guidance is at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-quality-reporting.html:335-444`; `FHIR-53433` explicitly directs adding text above "Using Value Sets for Stratification" explaining that multiple returned values mean inclusion in each stratum, not a combined stratum (`https://jira.hl7.org/browse/FHIR-53433`); Confluence page `391651979` references stratifier testing with `FHIR-53433`.
- Problem: The R6 ballot4 page explains value-based stratifiers but does not state how to interpret a value-based stratifier expression that returns multiple values.
- Why it matters: Without the clarification, implementations could create an unintended combined stratum rather than counting the case in each returned stratum.
- Recommended next step: Apply or backport the `FHIR-53433` clarification to this page, or verify that a later source branch already includes it before closing.

### E-001: Current page has multiple concrete rendering/editorial defects in new guidance

- Priority: P2
- Category: rendering
- Evidence: literal backticks in HTML at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-quality-reporting.html:101`; missing space `resource.The` at `:108`; Markdown link left in HTML at `:222`; typos at `:256`, `:261`, `:366`, and `:444`; missing parenthesis in criteria-based stratifier explanation at `:277`; broken escaped XML closing tag `&gt;/component&gt;` at `:348`; grammar issue "an quality measure" at `:501`; bare, unwrapped paragraphs in the ad-hoc Organization section at `:554-610`.
- Problem: Several defects are visible to readers or break examples, especially the `>/component>` XML fragment and literal Markdown link.
- Why it matters: The page is marked Normative, and readers may copy examples or rely on links directly.
- Recommended next step: Do an editorial/markup pass over the R6-added sections, prioritizing the broken XML fragment, Markdown-to-HTML conversion, and operation-example wording.

## Intent-vs-implementation mismatches

- `H-001`: Jira and OperationDefinition evidence moved toward `$evaluate`, but the page still teaches `$evaluate-measure`.
- `H-002`: Ad-hoc Organization text does not match the operation parameter names currently defined.
- `H-003`: Later Jira `FHIR-53433` says to add clarification to this page; the R6 ballot4 page lacks it.

## Overlooked or newly noticed problems

- `E-001`: Multiple concrete rendering/editorial defects are visible in the current page and were not fully covered by the tracked typo fix.

# dosage-examples actionable findings

## Summary

The page has 3 actionable findings. The main risk is that R6 ballot4 introduced a large hand-authored examples page, and several snippets either conflict with later approved R6 dosage decisions or contain concrete cross-format/path defects that implementers could copy.

## High-signal findings

### H-001: Ballot4 examples using `DosageDetails.simple` are superseded by later R6 decisions

- Priority: P1
- Category: intent-mismatch
- Evidence: ballot4 uses `simple` in examples such as `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage-examples.html:91-101`, `:1362-1371`, `:1488-1497`, and `:1780-1788`; `FHIR-54651` says to remove `Dosage.simple`; Confluence page `413255873` records a 7-0-0 vote; post-ballot commit `accc7b7f11fd24da385298c692cdd0304cc220ee` updates examples; `FHIR-56016` and commits `b5c35f6ea3e799a408023608279ce72ab62b4084`/`a566c33d62e08b7daf02d4fe0f4abdb895693825` fix the follow-on `step.component` placement.
- Problem: the reviewed ballot4 page still teaches `DosageDetails.simple`, while the later approved R6 direction removes it and requires simple dosages to be expressed as a step with a component.
- Why it matters: readers using ballot4 examples as implementation guidance may model R6 dosage instructions against a structure that was subsequently removed.
- Recommended next step: when triaging this page, verify the target publication branch includes the post-`FHIR-54651` and post-`FHIR-56016` example form; avoid carrying forward ballot4 `simple` examples.

### H-002: Several example snippets are internally inconsistent or structurally incomplete

- Priority: P1
- Category: spec-problem
- Evidence: `FHIR-54523` explicitly identifies mismatches in examples 1-3; source examples show Example 2 missing PRN `doseAndRate` and using safety unit `"s"` at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage-examples.html:333-351`, duplicate Example 2 XML safety at `:473-506`, and Example 3 safety period/scope problems at `:632-635`, `:854-864`, and `:1061-1070`; `DosageSafety.doseLimit.scope` is 1..1 at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes/dosagesafety.xml:904-917`; post-ballot commit `074fad2f3edd694c8c41bc7e8280691b040063c8` fixes several but not the observed missing `scope`.
- Problem: the page presents examples whose narrative, YAML, JSON, and XML do not all describe the same dosage; at least one safety limit omits a mandatory `scope`.
- Why it matters: implementers often copy examples directly, so these mismatches can produce invalid resources or incorrect dose-safety logic.
- Recommended next step: apply/verify the `FHIR-54523` fixes and additionally add the missing `doseLimit.scope` for Example 3 or clarify why the safety limit is intentionally not a conformant `DosageSafety.doseLimit`.

### E-001: Example 1 still uses stale `renderedDosageInstruction` path text

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage-examples.html:79-83` says `MedicationRequest.dosageInstruction.renderedDosageInstruction`; the same page says `renderedInstruction` at `:48-53`, R6 dosage overview says rendered dosage moved into `DosageDetails.renderedInstruction` in `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/dosage.html:41-49`, and exact Jira/Zulip/Confluence searches for that stale full path found no tracked issue.
- Problem: the example list names the removed resource-level element instead of the R6 `DosageDetails.renderedInstruction` element.
- Why it matters: it is a reader-facing path error on a page specifically teaching the R6 dosage redesign.
- Recommended next step: replace the displayed path with `MedicationRequest.dosageInstruction.renderedInstruction` and check whether the same stale path survives in post-ballot/current build branches.

## Intent-vs-implementation mismatches

H-001 and H-002 are the material mismatches: later Jira/workgroup decisions and post-boundary commits show that the ballot4 examples were not the final intended R6 shape, and `FHIR-54523` confirms several example values/structures did not match the intended text.

## Overlooked or newly noticed problems

E-001 appears not to have a tracked Jira issue. H-002 also includes a newly noticed missing `doseLimit.scope` in Example 3 that was not explicitly covered by the `FHIR-54523` resolution text.

# fhirpatch actionable findings

## Summary

The page has 2 actionable findings. The main risk is that the normative R6 page includes a newly added extension example that is malformed XML and conflicts with the formal FHIRPath Patch Parameters profile.

## High-signal findings

### H-001: Extension example is invalid and conflicts with the FHIRPath Patch profile

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpatch.html:268-310`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpatch.html:314-327`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/parameters/structuredefinition-profile-fhirpath-patch.xml:79-90`, commit `147147842e3fd0e1fce396e212dead752d91869c`, `FHIR-33256`
- Problem: the Extension Example is labeled `class="json"` but contains XML; both XML blocks fail parsing because `<reference reference="Device/1">` is not closed and is not valid FHIR XML. The patch example also uses `<valueString value="add"/>` for the operation `type`, while the page/profile require a code (`valueCode`) bound to `ValueSet/patch-operation`.
- Why it matters: readers copying the example will get invalid FHIR XML and a patch Parameters instance that does not conform to the normative FHIRPath Patch profile.
- Recommended next step: correct the example to XML markup, use `<valueCode value="add"/>`, and represent the Reference as valid FHIR XML, e.g. `<valueReference><reference value="Device/1"/></valueReference>`.

### E-001: Base rule has a grammar typo already tracked by Jira

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpatch.html:99`, `FHIR-53791`
- Problem: the rule says "Servers SHALL return an error if the outcome of the patch operation is a not a valid resource".
- Why it matters: this is a reader-facing typo in a normative `SHALL` rule.
- Recommended next step: change "is a not a valid resource" to "is not a valid resource" while resolving `FHIR-53791`.

## Intent-vs-implementation mismatches

`H-001` is the only material mismatch found: `FHIR-33256` intended to clarify extension use with examples, but the applied example is invalid and conflicts with the profile added later by `FHIR-46086`.

## Overlooked or newly noticed problems

`E-001` is a current-page editorial defect tracked by open Jira `FHIR-53791`. No other high-signal overlooked problems were found.

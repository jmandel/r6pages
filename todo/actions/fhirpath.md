# fhirpath actionable findings

## Summary

The page has 5 actionable findings. The main risk is that some newly applied FHIRPath text and examples are reader-facing but either contradict tracked workgroup intent or contain concrete example/navigation defects.

## High-signal findings

### H-001: Resource.id example is opposite to the FHIR-44817 resolution

- Priority: P1
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:177-181`; commit `415c4e014bc12bc9f0724783f92d17f1e267bbe3`; `FHIR-44817`; Zulip `#fhirpath > Is a resource id a String?`
- Problem: The current page says `Patient.id is System.String` and `(Patient.id is FHIR.id).not`, but `FHIR-44817` resolved to make clear that `Patient.id` is `FHIR.id` and not `System.String`. The later Zulip discussion also says `Patient.id is System.String = false`.
- Why it matters: This is a substantive FHIRPath type-semantics example; implementers could copy the opposite behavior from the formal page.
- Recommended next step: Replace the example with text/examples that assert Resource.id is `FHIR.id` and not `System.String`, and confirm the exact FHIRPath syntax/casing before applying.

### E-001: Duplicate `fn-subsumes` anchor breaks unambiguous navigation

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:432` and `:975`; commits `bbae11ecde825fc92830d70f058016af01bcf34e` and `cdd704b3ec17142987b573e46db611f925aa1bf8`; `FHIR-45455`
- Problem: The FHIR-specific `subsumes()` function and `%terminologies.subsumes()` both use `name="fn-subsumes"`.
- Why it matters: `FHIR-45455` specifically added anchors for function navigation; a duplicate anchor can send links to the wrong function.
- Recommended next step: Give the terminology API anchor a distinct name such as `fn-terminologies-subsumes` and update any generated links if needed.

### E-002: Type Factory examples include concrete invalid or misleading copy

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:650`, `:689`, `:736`, `:805`, `:826`; `FHIR-20846`
- Problem: The Type Factory section says `HumanName.family` goes in `HumanName.system`, uses an email address as an Address city, has a broken `Coding` example quote, and includes `http:/` URLs in examples.
- Why it matters: These are examples for a new API section; readers copying them will get invalid expressions or wrong property mappings.
- Recommended next step: Audit the Type Factory section and fix the examples/property descriptions together, ideally by checking example expressions with a FHIRPath/parser test.

### E-003: `Observation.value.ofType(canonical)` is not a valid Observation.value[x] example

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:346-349`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/observation/structuredefinition-Observation.xml:682-728`; commit `8926ed304970e6e73500a1a66b0985fba92824ec`; `FHIR-45455`
- Problem: The added `ofType()` example uses `Observation.value.ofType(canonical)`, but `Observation.value[x]` does not include `canonical` among its allowed types.
- Why it matters: The example is meant to demonstrate polymorphic type filtering; using a non-existent type for the chosen element undermines that guidance.
- Recommended next step: Replace it with a valid `Observation.value[x]` type example or use a different element that can actually be `canonical`.

### E-004: General Service API text has stale copy/paste wording

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:1109-1112`, `:1168-1181`, `:1222-1256`; `FHIR-38872`
- Problem: `%server.update` describes "resource to create" and "create operation failed"; `%server.capabilities` says `CapabilitiesStatement`; `%server.everything` and `%server.apply` both say "Get a resource from the server."
- Why it matters: These descriptions define the intended behavior of FHIRPath server interactions and can mislead implementers even if the signatures are correct.
- Recommended next step: Correct the operation-specific descriptions and resource name (`CapabilityStatement`) in one editorial pass.

## Intent-vs-implementation mismatches

H-001 is the only clear mismatch found: current Resource.id example text contradicts `FHIR-44817` resolution and later Zulip clarification.

## Overlooked or newly noticed problems

E-001 through E-004 are concrete current-page problems found during the full-page read; searches did not find Jira/Zulip issues already tracking the duplicate anchor, Type Factory copy defects, or invalid `Observation.value.ofType(canonical)` example.

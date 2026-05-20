# conformance-rules actionable findings

## Summary

The page has 2 actionable findings: one possible intent mismatch where FHIR-37692's accepted constraint-key uniqueness wording appears weaker/vaguer in the current page, and one concrete editorial cleanup cluster in reader-facing normative text.

## High-signal findings

### H-001: Constraint-key uniqueness text is weaker than the accepted FHIR-37692 wording

- Priority: P2
- Category: intent-mismatch
- Evidence: `source/conformance-rules.html:345-350`; commit `39122085c8ac5594f8421a1ec1902e20b8bf6832`; FHIR-37692; Zulip `#fhir/infrastructure-wg > FHIR-37692`; Confluence page 108303407
- Problem: FHIR-37692's resolution says constraint IDs "SHALL be defined such that they are unique within a StructureDefinition (though they may appear in multiple places in derived models due to slicing)." The current page instead says keys are "required to be unique when they are declared" and that validators check they are "meaningfully unique as they can," without the explicit SHALL/scope language.
- Why it matters: implementers and tool authors may not understand the intended uniqueness scope, especially around slicing/inheritance.
- Recommended next step: ask FHIR-I to either align this paragraph with the FHIR-37692 resolution or explicitly document the intended weaker/special-case rule.

### E-001: Current page has several concrete reader-facing typos/wording defects

- Priority: P3
- Category: editorial
- Evidence: `source/conformance-rules.html:78`, `source/conformance-rules.html:135`, `source/conformance-rules.html:299`, `source/conformance-rules.html:312`
- Problem: The current page contains `absense`, `mimimum`, "the base application does not specify any application obligations" where the surrounding text appears to mean "base specification," and "Allows for suppress warnings" instead of grammatical wording such as "Allows suppression of warnings."
- Why it matters: this is a normative page; the obligations wording in particular can distract or confuse readers.
- Recommended next step: file/apply a small technical correction for these typos and review the copied obligations wording in `source/obligations.html`.

## Intent-vs-implementation mismatches

H-001 only.

## Overlooked or newly noticed problems

E-001 only.

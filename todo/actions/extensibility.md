# extensibility actionable findings

## Summary

The page has 4 actionable findings. The main risk is that current guidance still mixes the post-R5 "preserve unknown non-modifier extensions when possible" rule with a stale summary telling readers to ignore unknown extensions, and one R6 normative URL exception contains a malformed canonical URL.

## High-signal findings

### H-001: Summary still tells readers to ignore unknown non-modifier extensions

- Priority: P1
- Category: intent-mismatch
- Evidence: current `source/extensibility.html:598-599` says unrecognized non-modifier extensions SHOULD be preserved when possible; current `source/extensibility.html:617` says to "ignore other extensions"; FHIR-18362 resolution says to replace the old ignore recommendation; commit `acbede90b7f03015ad54c2a1383b13d92a6bc6ec`.
- Problem: The summary retains the exact style of guidance FHIR-18362 was meant to remove, creating a reader-facing mismatch inside the page.
- Why it matters: Implementers may interpret "ignore" as permission to drop unknown non-modifier extensions, weakening round-trip preservation and interoperability.
- Recommended next step: Update the Summary: Handling extensions bullet to align with `source/extensibility.html:598-599`, e.g., process known extensions, preserve unknown non-modifier extensions when possible, and only ignore them when preservation is not possible.

### H-002: Complex-extension definition text appears narrower than FHIR-23867 intent

- Priority: P2
- Category: intent-mismatch
- Evidence: current `source/extensibility.html:57`; commit `12a292220bb95af891f160d4ec59147f262153a0`; FHIR-23867 resolution; FHIR-I minutes page 66933824 state the spec should note `value[x]` must be `0..0` and one or more child extensions are defined.
- Problem: The page says complex extensions contain nested extensions and no value, but does not give the exact StructureDefinition authoring rule that FHIR-23867/minutes called for.
- Why it matters: The original issue was about IG Publisher errors when authors do not know the exact fields required to define a complex extension.
- Recommended next step: Add or link explicit authoring guidance: a complex extension definition constrains `Extension.value[x]` to `0..0` and defines at least one nested `Extension.extension` slice.

### E-001: Canonical URL in the R6 complex-extension exception has a stray apostrophe

- Priority: P2
- Category: editorial
- Evidence: current `source/extensibility.html:67`; FHIR-53088; commit `c9eb1465db96232b9300125b8a29ff8477acbc21`.
- Problem: The code literal is `http://hl7.org/fhir/StructureDefinition/Extension'` with an apostrophe inside the URL.
- Why it matters: This appears in a SHALL sentence and can confuse readers or be copied as an invalid canonical URL.
- Recommended next step: Remove the apostrophe so the code literal is `http://hl7.org/fhir/StructureDefinition/Extension`.

### E-002: Primitive-extension guidance has visible typos and grammar errors

- Priority: P3
- Category: editorial
- Evidence: current `source/extensibility.html:48`, `:294-307`.
- Problem: Reader-facing text includes `managable`, `mininum`, `Type use case are`, `a required binding requirements`, and `required or extensible binding requirements`.
- Why it matters: These defects are in explanatory/conformance-adjacent text about required/extensible bindings and make the guidance look less reliable.
- Recommended next step: Correct the typos and grammar while preserving the FHIR-31385 semantics that DataAbsentReason cannot bypass required or applicable extensible bindings.

## Intent-vs-implementation mismatches

H-001 and H-002.

## Overlooked or newly noticed problems

E-001 and E-002.

# json actionable findings

## Summary

The page has 4 actionable findings. The main risks are a substantive `resourceDefinition` mismatch with later FHIR-I guidance, and an RFC 8785 canonical JSON change that appears in the current text while its matching Jira remains unresolved.

## High-signal findings

### H-001: `resourceDefinition` guidance contradicts the promoted-to-core compatibility rule

- Priority: P1
- Category: intent-mismatch
- Evidence: `source/json.html:95-99`; `source/resource/resource-introduction.xml:97-98`; `FHIR-50863`; commit `09b9a4c718f6db95ad354a42fede0090b80dfce8`; Confluence page `358883031`
- Problem: The JSON page says `resourceDefinition` "is not present" when `resourceType` is defined in the core specification. Later `FHIR-50863` says that after an additional resource moves into core, `resourceDefinition` may remain present for backward compatibility, SHOULD NOT be added, and if present its version SHALL match the published core FHIR version.
- Why it matters: Implementers reading only the JSON format page could reject or strip a backward-compatible `resourceDefinition` that the resource introduction explicitly allows.
- Recommended next step: Update the JSON page to mirror the `FHIR-50863` rule, or add a cross-link to the moved-to-core rule so the JSON format page is not stricter than the general additional-resource guidance.

### G-001: Canonical JSON now uses RFC 8785, but the matching Jira is unresolved

- Priority: P1
- Category: evidence-gap
- Evidence: `source/json.html:350-355`; `source/signatures.html:196-210`; commit `dcf53a8af6d730f886918f45af2510e990a986eb`; `FHIR-51115`; `FHIR-41522`; Confluence pages `358255047` and `358258654`
- Problem: The JSON page now delegates canonical JSON to the signatures page, where JSON resources SHALL use RFC 8785. `FHIR-51115`, the tracker proposing this change, is still Triaged/Unresolved, and its comments call the number-canonicalization change technically breaking.
- Why it matters: Canonicalization affects signature interoperability and conformance. The current page may be right, but the formal decision trail is not clear from Jira/source history.
- Recommended next step: Resolve or otherwise formally disposition `FHIR-51115` for R6, and confirm the RFC 8785 wording in `signatures.html#json` is the intended approved rule.

### E-001: Primitive JSON example has an unmatched closing brace

- Priority: P2
- Category: rendering
- Evidence: `source/json.html:175-181`; commit `6940f50152d47d242a8365fda5d825396a22f30b`
- Problem: The primitive JSON example starts with `"code" : "abc"` but ends with `}` without an opening `{`.
- Why it matters: This is a reader-facing invalid JSON snippet on the JSON format page.
- Recommended next step: Remove the stray closing brace or add an opening brace if the example is intended to be a complete object.

### E-002: Cardinality warning leaves a visible stray colon

- Priority: P3
- Category: rendering
- Evidence: `source/json.html:151-160`; `FHIR-47629`; commit `0a5592638b4ebfaa8352e8ec5f9b2ae0044e7a71`; commit `02a18701b372f2b0e25ad61286546803bda59dec`
- Problem: A standalone `:` appears between `[%dragons-end%]` and the `JSON representation of primitive elements` heading.
- Why it matters: It is a concrete rendering defect introduced with the FHIR-47629 warning and not part of the Jira resolution text.
- Recommended next step: Remove the standalone colon.

## Intent-vs-implementation mismatches

H-001 is a direct mismatch between the JSON page and the later applied `FHIR-50863` moved-to-core rule. G-001 is a formal evidence gap for a substantive canonicalization change.

## Overlooked or newly noticed problems

E-001 and E-002 are visible current-page defects that were not the intended substance of the tracked Jira changes.

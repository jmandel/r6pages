# terminologies actionable findings

## Summary

The page has 4 actionable findings. The main risk is that two resolved binding-clarification decisions were added and then removed from `terminologies.html`, leaving current R6 text without general guidance that Jira says should be present; the rest are concrete reader-facing rendering/editorial defects.

## High-signal findings

### H-001: FHIR-31385 extension-bypass clarification is not retained in the binding sections

- Priority: P1
- Category: intent-mismatch
- Evidence: FHIR-31385 resolution at https://jira.hl7.org/browse/FHIR-31385; commit `3946ca05fe4e7e6dc76c35ed333f46f9fe23dece` added the required-binding paragraph; commit `ab0ada522243d1ecd280228fc660c8628115a383` removed it the next day; current R6 required/extensible sections are at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies.html:514-667`.
- Problem: Jira resolved to add explicit required and extensible binding guidance that extensions such as data-absent-reason cannot bypass binding requirements. The current page does not retain that general clarification; only a narrower legacy-data paragraph says a required-bound element cannot be sent "not even with an extension" when no mapping is possible.
- Why it matters: implementers can misread extension behavior for required/extensible bindings, especially for data-absent-reason cases where Jira explicitly wanted clarification.
- Recommended next step: confirm whether FHIR-I/Vocab still intend the FHIR-31385 text, then restore or replace the required and extensible binding clarification in the current binding sections.

### H-002: FHIR-35891 multiple-type binding clarification was removed

- Priority: P2
- Category: intent-mismatch
- Evidence: FHIR-35891 resolution at https://jira.hl7.org/browse/FHIR-35891; commit `d7b4a4ab88bf349b2676663058b2feac97292280` added the paragraph; commit `ab0ada522243d1ecd280228fc660c8628115a383` removed it; current R6 page has the bindable datatype list at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies.html:76-86` but no multiple-type or alternate-bindings guidance.
- Problem: Jira resolved to say that a binding on an element with multiple types applies to all bindable types, and that type-specific bindings can use the alternate-bindings extension. That clarification is absent from the current page.
- Why it matters: choice-type elements with bindings remain ambiguous for profile authors and validators, which was the exact ambiguity FHIR-35891 sought to remove.
- Recommended next step: restore the FHIR-35891 clarification or add equivalent guidance near the datatype list or `ElementDefinition.binding` overview.

### E-001: `#strings` link points to a commented-out section

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies.html:94` links to `#strings`; the `name="strings"` anchor and section are inside an HTML comment at lines 790-800.
- Problem: Readers are sent to an anchor that will not render because the target section is commented out.
- Why it matters: the page explicitly promises more information about binding `string` and `uri`, but the target is unavailable.
- Recommended next step: either restore/render the string/URI binding section or remove/update the `#strings` link and surrounding note.

### E-002: Visible editorial defects in binding guidance

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies.html:82`, `:246-249`, and `:618-647`.
- Problem: The current page has visible text defects: "or a to a concept"; a missing sentence break plus "in way or another"; repeated "inexpressable"; "Quantity.code and Quantity.system represents..."; and a missing separator in the `uri, string` ordered list.
- Why it matters: these defects are in normative/semantically dense guidance and reduce reader confidence in the binding rules.
- Recommended next step: make a small editorial cleanup pass over those lines, using "inexpressible" and fixing the grammar/list punctuation without changing semantics.

## Intent-vs-implementation mismatches

H-001 and H-002 are the relevant mismatches found. No other Jira/Zulip/Confluence intent mismatch was strong enough to elevate: FHIR-39056, FHIR-40248/FHIR-40249/FHIR-40431, FHIR-46350, FHIR-48479, and FHIR-50652 generally appear reflected in current text.

## Overlooked or newly noticed problems

E-001 and E-002 are concrete current-page defects found during the read-through. No additional high-confidence overlooked semantic problem was found in the bounded review.

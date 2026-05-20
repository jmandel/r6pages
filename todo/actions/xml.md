# xml actionable findings

## Summary
The page has 2 actionable findings. The main risk is that the new XML `resourceDefinition` guidance does not reflect the later applied FHIR-50863 rule for resources promoted into core, and the new additional-resource XML example is not well-formed.

## High-signal findings

### H-001: `xml.html` contradicts the applied moved-to-core `resourceDefinition` rule

- **Priority:** P1
- **Category:** Substantive/spec conformance mismatch
- **Evidence:** `source/xml.html:95-99` says the `resourceDefinition` attribute “is not present if the resource is one defined in this specification.” `source/resource/resource-introduction.xml:82-98`, added by commit `09b9a4c718f6db95ad354a42fede0090b80dfce8` for `FHIR-50863`, says once a resource moves into core the XML/JSON `resourceDefinition` is allowed to remain present, SHOULD NOT be added, and if present its version SHALL match the published core FHIR version. Confluence FHIR-I 2025-07-21 recorded the same 12-0-0 decision.
- **Problem:** The XML format page still states the pre-FHIR-50863 absolute rule and omits the backwards-compatibility exception.
- **Why it matters:** Implementers/validators reading the normative XML page could reject promoted core-resource instances that FHIR-50863 intentionally allows for transition compatibility.
- **Recommended next step:** Update the XML additional-resource paragraph to mirror `resource.html#moving`; also check the parallel JSON page for the same stale sentence.

### E-001: Additional-resource XML example has an invalid closing tag

- **Priority:** P2
- **Category:** Concrete editorial/rendering defect
- **Evidence:** `source/xml.html:87-92`, introduced by `931df6ae329dd3d7f44df8358b5affdd2b95e757`, shows an escaped XML example ending with `&lt;ViewDefinition&gt;` instead of `&lt;/ViewDefinition&gt;`.
- **Problem:** The newly added example is not well-formed XML.
- **Why it matters:** This is on the XML format page and is the primary example for the new additional-resource representation; copy/paste or documentation consumers would get an invalid instance.
- **Recommended next step:** Change the final example line to `&lt;/ViewDefinition&gt;`.

## Intent-vs-implementation mismatches

- H-001: FHIR-50863/resource.html says `resourceDefinition` may remain for promoted core resources, but `xml.html` still says it is not present for resources defined in this specification.

## Overlooked or newly noticed problems

- E-001: The added `ViewDefinition` XML example is not well-formed due to the missing `/` in the closing tag.

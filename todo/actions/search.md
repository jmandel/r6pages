# search actionable findings

## Summary

The page has 2 actionable findings: one substantive FHIR-53569 intent/application gap that leaves out a client-side SHALL, and one concrete set of broken internal source links.

## High-signal findings

### H-001: FHIR-53569 client CapabilityStatement guidance was not applied

- Priority: P1
- Category: intent-mismatch
- Evidence: FHIR-53569 resolution at https://jira.hl7.org/browse/FHIR-53569; commit `8b4082caae2d890a9164d9119c7db8722a31f172`; current source `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/search.html:693` and `:6469`; Confluence page `413042140`; Zulip #implementers / "Custom SearchParameters and preceding hyphens".
- Problem: FHIR-53569 said to add a paragraph after "Search inputs are dereferenced..." requiring unfamiliar clients to query the CapabilityStatement and adjust search names. The applied commit only changed the server/IG-author custom prefix bullet near Server Conformance.
- Why it matters: the omitted sentence is normative client behavior tied to resolving ambiguous custom SearchParameter names; without it, the page only warns authors/servers and loses the client-side disambiguation rule the workgroup approved.
- Recommended next step: add the missing FHIR-53569 client guidance near `search.html:693` or reopen/adjust FHIR-53569 if the workgroup intentionally dropped that part.

### E-001: Several internal links target missing source anchors

- Priority: P2
- Category: rendering
- Evidence: current source `search.html:109` links `#paging` but the section anchor is `search.html:5802` as `Paging`; `search.html:6361` links `#types` but the multi-type section anchor is `search.html:4661` as `type`; `_summary` value links at `search.html:5208`, `:5216`, `:5226`, `:5230`, and `:5234` target `#summary-true`, `#summary-text`, `#summary-data`, `#summary-count`, and `#summary-false` with no matching source anchors.
- Problem: readers following these links will not land on the intended sections/rows in source-derived output unless the publisher injects matching anchors elsewhere.
- Why it matters: these are navigation aids in a long normative page; broken links make the R6 search page harder to use and audit.
- Recommended next step: align the hrefs with existing anchors (`#Paging` -> or rename the anchor to lowercase, `#types` -> `#type`) and either add anchors for the `_summary` values or remove those self-links.

## Intent-vs-implementation mismatches

H-001.

## Overlooked or newly noticed problems

E-001.

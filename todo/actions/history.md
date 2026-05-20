# history actionable findings

## Summary

The page has 2 actionable findings, both concrete reader-facing defects: the R4B date is internally inconsistent, and a GraphDefinition link points to a known broken API Incubator URL.

## High-signal findings

### E-001: R4B milestone date conflicts with the page's detailed R4B row

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/history.html:50-53` says R4B `4.3.0` is `Dec 27, 2018`; the same page says `Release R4B: May 28, 2022` at `source/history.html:309-312`. The published R4B page also reports `May 28, 2022`.
- Problem: the top milestone table gives R4B the R4 publication date.
- Why it matters: readers using the quick milestone table get the wrong publication chronology.
- Recommended next step: change the R4B milestone date to `May 28, 2022` and check whether any generated/published history page copies need the same correction.

### E-002: GraphDefinition link resolves to 404

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/history.html:604-607` links GraphDefinition to `http://build.fhir.org/HL7/api-incubator/StructureDefinition-GraphDefinition`; `curl -L` returns 404. `FHIR-54250` reports the same broken URL on another R6 ballot4 page.
- Problem: the current history page points readers to a non-resolving GraphDefinition target.
- Why it matters: GraphDefinition was moved to an API Incubator home, but the current link does not take readers there.
- Recommended next step: include `history.html` when fixing `FHIR-54250`; retarget to the actual API Incubator GraphDefinition page once available, or remove the link until a stable target exists.

## Intent-vs-implementation mismatches

None found for the substantive R4->R6 history-page changes. The Additional Resources/resource-move wording is broadly supported by Jira, Zulip, and Confluence evidence; the issue is the broken GraphDefinition target, not the intent to move it.

## Overlooked or newly noticed problems

See `E-001` and `E-002`.

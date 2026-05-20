# clinicalreasoning-cds-on-fhir actionable findings

## Summary

The page has 1 actionable finding: the FHIR-53085 rewrite appears to match the approved intent to move most CDS-on-FHIR detail into a new IG and mark the page Informative, but the current page's handoff link to that new IG resolves to 404.

## High-signal findings

### E-001: New CDS Hooks/Clinical Reasoning IG link is not live at the URL used by the page

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-cds-on-fhir.html:44`; `FHIR-53085`; Confluence pages `391187341` and `391644145`; Zulip `#committers > PR Reviews`; `curl` returned 404 for `http://hl7.org/fhir/uv/cds-hooks-clinical-reasoning` while `https://build.fhir.org/ig/HL7/cds-hooks-clinical-reasoning/` returned 200.
- Problem: the page removed most detailed CDS Hooks mapping/profile guidance and sends readers to `http://hl7.org/fhir/uv/cds-hooks-clinical-reasoning`, but that published `hl7.org` URL and its trailing-slash/history variants were 404 at review time.
- Why it matters: readers cannot reach the content that FHIR-53085 says was moved out of this page, so the rewrite leaves a broken handoff for the main displaced material.
- Recommended next step: either publish/enable the IG at the canonical `hl7.org/fhir/uv/cds-hooks-clinical-reasoning` path before R6 ballot/publication, or temporarily link to the working CI build URL until the publication URL is live.

## Intent-vs-implementation mismatches

None found beyond E-001. The page status change to Informative and the removal of detailed examples/mappings align with FHIR-53085, FHIR-48393, and the CDS/FMG Confluence approvals.

## Overlooked or newly noticed problems

E-001 is the only concrete current-page problem found.

# medications-module actionable findings

## Summary

The page has 2 actionable findings. The main risk is an incomplete Additional Resources transition: the R6 ballot4 page points readers to a nonexistent FormularyItem incubator target and still lacks later accepted medications-module cleanup that would separate core normative resources from additional resources.

## High-signal findings

### H-001: FormularyItem replacement path is currently broken

- Priority: P1
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/medications-module.html:49`, `:203-204`; commit `9987f9c0c3ce5ec4f277c22ed71cbb2d210efeb6`; `FHIR-50845`; `FHIR-57378`; Confluence page 441128732; 2026-05-20 curl check returned HTTP 404 for `https://build.fhir.org/ig/HL7/phx-incubator/StructureDefinition-FormularyItem`.
- Problem: MedicationKnowledge was removed and FormularyItem was substituted, but the page's FormularyItem link points to a `phx-incubator` target that is not created. The roadmap still references medication knowledge/formulary work without giving implementers the landing/mapping path later requested in `FHIR-57378`.
- Why it matters: readers cannot find the replacement for removed MedicationKnowledge content, making the R6 transition path unclear and partly broken.
- Recommended next step: create/publish the Pharmacy incubator FormularyItem target or change the page to a valid interim target, then add the MedicationKnowledge landing/mapping guidance requested in `FHIR-57378` and update the roadmap text.

### H-002: Accepted medications-module cleanup is not reflected in the reviewed ballot4 page

- Priority: P2
- Category: intent-mismatch
- Evidence: current source lines `47-56`, `74`, `100`, `123-129`, `136-161`; `FHIR-53486`; Confluence page 358283983.
- Problem: `FHIR-53486` accepted page-specific changes to fix typos, create Normative and Additional Resources subsections, move FormularyItem/ImmunizationEvaluation/ImmunizationRecommendation to Additional Resources, update immunization descriptions, and reorder common use cases. The R6 ballot4 page still intermixes those additional resources in the main index and retains the cited typos.
- Why it matters: the current page can mislead readers about which resources remain in core versus external Additional Resources, and it misses a formally accepted workgroup cleanup.
- Recommended next step: apply the `FHIR-53486` wording/structure to the medications module page, or verify that it has already been applied in a post-ballot source line before final R6 publication.

## Intent-vs-implementation mismatches

- H-001: Pharmacy agreed to remove MedicationKnowledge in favor of FormularyItem/other resources, but the visible FormularyItem replacement link is dead and no landing/mapping guidance is present.
- H-002: `FHIR-53486` is accepted/applied in Jira but not visible in the reviewed R6 ballot4 page.

## Overlooked or newly noticed problems

- H-001: The broken FormularyItem/phx-incubator link is visible in the current page and confirmed by both Confluence incubator status and HTTP 404.

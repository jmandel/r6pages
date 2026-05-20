# lifecycle actionable findings

## Summary

The page has 2 actionable findings. The main risk is that R6 removed the lifecycle page's current-list definitions while related `_list`, List, safety, and resource-guide text still points readers to `lifecycle.html#current` as if those definitions remain.

## High-signal findings

### H-001: Removed current-list definitions left dependent references dangling

- Priority: P1
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/lifecycle.html:195-201`; commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`; Confluence page `358879917`; `/source/search.html:6078-6082`, `/source/search.html:4085-4090`, `/source/http.html:2087`, `/source/resource/bundle-Resource-search-params.xml:103-104`, `/source/list/list-notes.xml:14-15`, `/source/list/list-notes.xml:33-36`; `FHIR-39342`
- Problem: The lifecycle page now says the current-list section was removed, but related current R6 source still says functional-list literals are defined there and that current list references are allowed.
- Why it matters: Implementers following `_list` or List guidance can no longer find the `$current-*` definitions/conformance text, leaving search behavior underspecified and navigation misleading.
- Recommended next step: Audit all `lifecycle.html#current` and `$current-*` references; either restore/relocate the functional-list definitions and update links, or remove/deprecate functional-list semantics consistently across `_list`, List, safety, and resource-guide text.

### E-001: Appointment.status link points to Encounter.status anchor

- Priority: P3
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/lifecycle.html:83-86`; commit `fb56e0750c8530f97dc1c861248216fc6e310d79`; `FHIR-32152`
- Problem: The lifecycle example text says `Appointment.status`, but the hyperlink target is `appointment-definitions.html#Encounter.status`.
- Why it matters: Readers are sent to the wrong/missing definition anchor when checking Appointment status lifecycle details.
- Recommended next step: Change the href to `appointment-definitions.html#Appointment.status`.

## Intent-vs-implementation mismatches

H-001 is the substantive mismatch: FHIR-I minutes say to remove `$current` lists and replace the lifecycle section with a note, but the implementation left related text that still relies on lifecycle for functional-list definitions.

## Overlooked or newly noticed problems

E-001 is a concrete link defect introduced when `Appointment.status` was added to the lifecycle examples.

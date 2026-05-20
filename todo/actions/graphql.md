# graphql actionable findings

## Summary

The page has 3 actionable findings. The main risk is that the R6 ballot4 source marks `Using GraphQL with FHIR` as Normative even though FHIR-I minutes appear to say that page should be removed, and the current page still contains stale status text plus reader-facing example defects.

## High-signal findings

### H-001: Normative page status appears to contradict FHIR-I R6 disposition

- Priority: P1
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/graphql.html:17`, `:24-35`; commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`; Confluence page `358879917` (`bun run confluence:search snapshot 358879917`)
- Problem: The current page is marked Standards Status: Normative, but still says "This page is a draft" and GraphQL has no standards path. More importantly, the 2025 FHIR-I WGM minutes say "We will remove Using GraphQL with FHIR" while separately marking `Operation $graphql on Resource` as Normative.
- Why it matters: Readers and balloters may treat stale or removal-intended GraphQL narrative/conformance text as normative R6 guidance.
- Recommended next step: Confirm the R6 disposition with FHIR-I/FMG; either remove/move `source/graphql.html` or align its status/body text with the intended normative scope, keeping `resource-operation-graphql.html` normative only if that was the intended target.

### E-001: `FHIR-25408` did not fully remove the R3 reference

- Priority: P2
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/graphql.html:143-152`; `FHIR-25408`; commit `8c3c5be2487c884c03c5a7fa079df00fbb7b142b`
- Problem: The visible Field Selection prose still says "Patient resource (r3)" even though `FHIR-25408` identified R3 references as stale and the implementation replaced the example URLs with `<%test-server%>`.
- Why it matters: A normative/current page still appears to describe an STU3-era example, which undercuts the release-neutral fix.
- Recommended next step: Remove `(r3)` or replace it with release-neutral wording.

### E-002: Practitioner resource-reference examples still use invalid-looking fields

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/graphql.html:315-333`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/practitioner/structuredefinition-Practitioner.xml:377-384`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/practitionerrole/structuredefinition-PractitionerRole.xml:306-310`; commit `9991aeb25ebef43a8f4db3fb6a1c988356ba33bf`
- Problem: The examples were changed from `Practioner` to `Practitioner`, but still query `practitionerRole { speciality }`. R6 source says practitioner specialties are represented by `PractitionerRole.specialty` and "are not defined on the practitioner"; the example also spells `specialty` as `speciality`.
- Why it matters: The example likely fails against generated GraphQL schema and misleads implementers about reference resolution.
- Recommended next step: Replace the example with valid fields for a target resource, or use a context that legitimately resolves to `PractitionerRole` and query `specialty`.

## Intent-vs-implementation mismatches

- H-001: FHIR-I minutes appear to say `Using GraphQL with FHIR` should be removed, while the source marks it Normative.
- E-001: `FHIR-25408` removed hardcoded test-server URLs but left visible `(r3)` prose.

## Overlooked or newly noticed problems

- E-002: The current resource-reference examples still select invalid-looking Practitioner fields after the earlier typo-only fix.

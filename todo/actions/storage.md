# storage actionable findings

## Summary

The page has 3 actionable findings. The main risk is that the updated RDF guidance now points readers toward `fhir:Canonical` while still saying it is describing "codings"; two older page-navigation/metadata defects also remain visible in the current source.

## High-signal findings

### H-001: RDF resolved-link sentence conflates codings with canonical links

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/storage.html:172-179`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:492-515`, `:518-554`, `:705-715`; commit `8244937cafb494f6c637de64b22982826c5533db`; `FHIR-53178`; PR `https://github.com/HL7/fhir/pull/3852`.
- Problem: the storage page says RDF does the resolved-link pattern for "references and codings" but the parenthetical now links to `fhir:Reference` and `fhir:Canonical`. The current RDF page has separate rules for URI/canonical `fhir:l`, references, and coding concept IRIs, so "codings (`fhir:Canonical`)" is likely misleading.
- Why it matters: readers trying to model resolved links in persistent stores may misunderstand whether the guidance is about `Coding`, canonical URI values, references, or all URI-like primitives.
- Recommended next step: revise the sentence to name the actual RDF mechanisms, e.g. references plus URI/canonical values via `fhir:l`, and separately link coding concept IRIs if codings are still intended.

### E-001: Duplicate `choice` anchors make `storage.html#choice` ambiguous

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/storage.html:33`, `:139`; same duplicate existed in R4 at `.../4.0.1-0da2a0a84dc1/source/storage.html:33`, `:137`.
- Problem: both "Applicability of storing resources natively" and "Technology Choices" declare `<a name="choice"></a>`.
- Why it matters: fragment links to `storage.html#choice` cannot unambiguously target the Technology Choices section; related Jira records for different sections (`FHIR-20595`, `FHIR-41344`) both use `storage.html#choice`.
- Recommended next step: give "Technology Choices" a distinct stable anchor and update any source references that should point there, while preserving backward compatibility if needed.

### E-002: Storage page title still says "Managing Resource Identity"

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/storage.html:4`, `:15`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/managing.html:21`, `:32`.
- Problem: `source/storage.html` sets `[%settitle Managing Resource Identity%]`, duplicating `managing.html` and not matching the storage page heading.
- Why it matters: the rendered browser/page title or generated metadata can mislabel the persistent-storage guidance as the identity-management page.
- Recommended next step: change the storage page title macro to match the page, such as `Using FHIR in persistent stores`, and verify the rendered title.

## Intent-vs-implementation mismatches

H-001 above. No mismatch found for `FHIR-38866`: the request to standardize a resolved-link extension was resolved Not Persuasive / No Change, and the current storage page does not standardize one.

## Overlooked or newly noticed problems

E-001 and E-002 above.

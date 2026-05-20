# signatures actionable findings

## Summary

The page has 4 actionable findings. The main risk is that normative signature/canonicalization guidance and worked examples are still inconsistent in places after the R6 rewrite, especially around canonicalization variants, `Bundle.signature` deprecation, and XML signature media types.

## High-signal findings

### H-001: `#narrative` canonicalization appears to remove Bundle entries, contradicting nearby text and the Jira intent

- Priority: P1
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:289-307`; `FHIR-50934`; commit `66dd40468918876ef3bd89f6be54b58c5f659d98`
- Problem: the `#narrative` row says "any bundle entries are removed", but the following paragraph says path nodes such as `Bundle.entry`/`Bundle.entry.resource` are retained to reach retained Narrative elements. `FHIR-50934` appears to have intended removal of internal references to bundle entries, not removal of the entries themselves.
- Why it matters: implementers could canonicalize Bundles differently, making signatures unverifiable across systems.
- Recommended next step: clarify whether Bundle entries are retained as path nodes while references/links inside retained narrative may break, and align the text with the `FHIR-50934` resolution.

### H-002: `#document` canonicalization references unclear/non-existent Bundle metadata and has an open clarity challenge

- Priority: P1
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:298-310`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:427-444`; `FHIR-52814`
- Problem: the `#document` row says to omit `Bundle.metadata`, but FHIR Bundles have `Bundle.meta`, not a `Bundle.metadata` element. The embedded-Provenance removal rules also remain hard to interpret, and `FHIR-52814` specifically reports that readers may not understand what is removed for document signatures.
- Why it matters: document-signature verification depends on identical canonical payload construction; ambiguous or incorrect element names create interoperability failures.
- Recommended next step: replace `Bundle.metadata` with the intended concrete element(s), and add explicit step-by-step rules for `#document` signing and verification, including which Provenance entries/signature data are removed.

### H-003: Worked examples still rely on deprecated `Bundle.signature`

- Priority: P2
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:451-454`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:457-644`; `FHIR-51099`; commit `9fe4e8ba2ec241ab35dc18046c102c38872e1d50`; Zulip `#Security and Privacy > Bundle.signature`
- Problem: the page deprecates `Bundle.signature` and recommends Provenance resources, but the examples section says one Bundle example is based on `Bundle.signature` and "needs to be reworked", while the detailed JWS example still uses `Bundle.signature` and tells verifiers to remove `Bundle.signature`.
- Why it matters: readers looking for implementation guidance may copy the deprecated pattern instead of the intended Provenance-based approach.
- Recommended next step: replace the worked examples with valid Provenance-based Bundle signing examples, or clearly label remaining `Bundle.signature` material as legacy/deprecated and not the preferred R6 pattern.

### H-004: XML Digital Signature `sigFormat` conflicts with the Signature datatype text and examples

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/signatures.html:377-384`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes/signature.xml:720-721`; examples such as `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/provenance/provenance-example-sig.xml:67`
- Problem: the XML Digital Signatures section says `Signature.sigFormat` is `application/pkcs7-signature`, but the Signature datatype definition says the important MIME type for XML DigSig is `application/signature+xml`, and existing examples use `application/signature+xml`.
- Why it matters: this is a direct conformance cue; using different MIME types for the same signature format can break validation, routing, or verification logic.
- Recommended next step: confirm the intended MIME type with Security/FHIR-I and align the signatures page, datatype definition, and examples.

## Intent-vs-implementation mismatches

- `FHIR-51099`/FHIR-I/Zulip intent moved Bundle signing guidance from `Bundle.signature` toward Provenance resources, but the current worked examples still present `Bundle.signature` as the detailed concrete pattern.
- `FHIR-50934` intent appears to be recursive Narrative handling and removal of internal references to bundle entries; current `#narrative` wording says Bundle entries themselves are removed, which conflicts with nearby path-retention text.

## Overlooked or newly noticed problems

- `source/signatures.html` has concrete reader-facing defects in normative sections, including `seperate` (`:251`), `occurrances` and missing space (`:281`), malformed code text `Composition.section.text exist` (`:305`), duplicated "the the" and `avilable` (`:427-428`), plural `Provenance.targets` for the singular element (`:439`), and `if it it` (`:624`). These are lower priority than the four findings above but should be cleaned up with the same page revision.

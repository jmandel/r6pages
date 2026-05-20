# rdf actionable findings

## Summary

The page has 3 actionable findings. The main risk is that current normative RDF guidance contains contradictory XHTML datatype prose and examples that can produce different or invalid Turtle.

## High-signal findings

### H-001: XHTML datatype prose still says `xsd:string` after `rdf:XMLLiteral` decisions

- Priority: P1
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:410-428`; `FHIR-49834`; W3C HCLS issues https://github.com/w3c-cg/hcls-fhir-rdf/issues/187 and https://github.com/w3c-cg/hcls-fhir-rdf/issues/199; commit `1c59841a18ca23ed4a027d63029f087722b31e2e`.
- Problem: the page says RDF type `rdf:XMLLiteral` is used for FHIR `xhtml`, and examples now use `fhir:div [ fhir:v "..."^^rdf:XMLLiteral ]`, but the same primitive section still says "XHTML is represented as an escaped xsd:string."
- Why it matters: implementers could serialize narrative XHTML using the wrong literal datatype, contradicting the applied `FHIR-49834`/RDF subgroup intent.
- Recommended next step: update the stale sentence to describe `xhtml` as `rdf:XMLLiteral` in the `fhir:v` bnode form, or remove it if the earlier datatype list is sufficient.

### E-001: Non-modifier extension example is internally inconsistent and appears invalid Turtle

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:821-854`; introduced/retained through commits `95ebab0581cb29d7f8867a843d478baf9c3415d6`, `e18df923cf7f39629f132e50cc03dd54ecf94992`, and `0bb7b4d111f8ceb2851c9928df9c6f7732c84a2d`.
- Problem: the example uses a `MedicationRequest/MR321` URI with type `fhir:Observation`, and its `fhir:coding (` lists contain `a sct:...; fhir:system ...` without wrapping each Coding in a blank node (`[ ... ]`), unlike nearby valid coding-list examples.
- Why it matters: this is reader-facing sample Turtle on a Normative page; copying it can lead to invalid or misleading RDF.
- Recommended next step: decide whether the example resource should be an Observation or MedicationRequest, then rewrite each `fhir:coding` list member as a valid blank node Coding.

### H-002: LOINC concept IRI examples mix `http` and `https` stems

- Priority: P2
- Category: spec-problem
- Evidence: `http://loinc.org/rdf/` appears at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/rdf.html:100`, `:754-755`, `:809`, and `:1461`; `https://loinc.org/rdf/` appears at `:1354-1363`; W3C issue https://github.com/w3c-cg/hcls-fhir-rdf/issues/185 records LOINC URI cleanup but not this scheme mismatch.
- Problem: the page presents both `http://loinc.org/rdf/...` and `https://loinc.org/rdf/...` as LOINC concept IRI stems/examples.
- Why it matters: RDF IRIs are identifiers; `http` and `https` forms are distinct IRIs unless explicitly normalized, so the examples can fragment concept identity.
- Recommended next step: verify the current THO/LOINC authoritative IRI stem and make all LOINC prefix, prose, and Appendix 1 examples use the same scheme.

## Intent-vs-implementation mismatches

- `H-001`: applied `rdf:XMLLiteral` intent is only partially reflected in the page.
- `H-002`: LOINC IRI cleanup left inconsistent stem schemes in the current text.

## Overlooked or newly noticed problems

- `E-001`: the non-modifier extension example appears to have both resource-type and Turtle syntax defects.

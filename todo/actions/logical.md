# logical actionable findings

## Summary

The page has 3 actionable findings: one substantive clarification gap about logical-model instances/FHIR REST conformance, one incorrect Base/Element link pair, and one small cluster of reader-facing editorial defects.

## High-signal findings

### H-001: Clarify whether logical-model instances are FHIR resources or REST endpoints

- Priority: P2
- Category: overlooked-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/logical.html:26-28`, `:76-78`; Zulip `#implementers > Logical Models instantiation` (2024-08-23 to 2024-08-24), `bun run zulip:search snapshot implementers "Logical Models instantiation"`
- Problem: the page explains projecting logical models into FHIR resources/profiles or other standards, but does not state the related conformance boundary that later came up on Zulip: logical models can be instantiated, but they are not FHIR resources and cannot automatically be regular FHIR REST CRUD endpoints.
- Why it matters: implementers may infer that exposing logical-model-shaped instances over CRUD is a FHIR-conformant interface, which Grahame Grieve and Lloyd McKenzie explicitly said is not the case in the later discussion.
- Recommended next step: triage a focused change request for a short "instances and exchange" note that distinguishes projection into resources/profiles from direct logical-model instances and says any server endpoint for those instances is not a regular FHIR REST resource endpoint unless otherwise specified.

### E-001: Base and Element links are reversed

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/logical.html:31`; `types.html:46-55` defines `#Base`; `types.html:73-83` defines `#Element`
- Problem: the sentence says `Element` but links it to `types.html#Base`, and says `Base` but links it to `types.html#Element`.
- Why it matters: this sends readers to the wrong base-type definition in the key "Defining logical models" section.
- Recommended next step: swap the anchors so `Element` links to `types.html#Element` and `Base` links to `types.html#Base`.

### E-002: Current page has visible typos and malformed wording

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/logical.html:21`, `:60`, `:66`, `:72`, `:82`
- Problem: reader-facing text includes `They allows`, `posible`, `thic`, `techical`, and the patterns sentence "design patterns that are expected the FHIR resources..." is missing words.
- Why it matters: the page is informative guidance for a concept that already causes implementer questions; obvious typos reduce clarity and polish.
- Recommended next step: bundle these into a small editorial cleanup pass, ideally alongside the link fix.

## Intent-vs-implementation mismatches

None found for the tracked page changes. `FHIR-37543` is substantially reflected in the new page; `FHIR-25431` and `FHIR-44047` were broad editorial passes. The `FHIR-25431` Confluence minute wording is terse and appears ambiguous, but the applied source consistently standardized to `datatype`/`datatypes` across many files, so it is not raised as a logical-page-specific mismatch.

## Overlooked or newly noticed problems

H-001, E-001, and E-002 above.

# async actionable findings

## Summary

The page has 3 actionable findings. The main risk is that R6 ballot4 `async.html` delegates both asynchronous pattern definitions to API Incubator links that currently return `404`, after the local detailed pages were deleted.

## High-signal findings

### H-001: Async pattern definition links are broken after local detail pages were removed

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/async.html:40`, `:44`, `:51`; commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`; `FHIR-53868`; live checks returned `404` for `https://build.fhir.org/ig/HL7/api-incubator/async-bulk.html` and `https://build.fhir.org/ig/HL7/api-incubator/async-bundle.html`.
- Problem: the current page says the two async patterns are defined in the API Incubator, but both linked definition pages are unavailable.
- Why it matters: R6 no longer has local `async-bulk.html` or `async-bundle.html`, so implementers following this page cannot reach the detailed request/response semantics.
- Recommended next step: update `async.html` and related `http.html` links to live pattern definitions, or restore/publish the API Incubator targets before relying on them.

### E-001: Conformance heading reuses the `patterns` anchor

- Priority: P3
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/async.html:37` and `:55`; commit `3512b7ea6d43b0409809b60ae404037102e91f63`.
- Problem: both "Patterns" and "Conformance" use `<h3 id="patterns">`.
- Why it matters: generated anchors/TOC links cannot uniquely target the Conformance section.
- Recommended next step: change the Conformance heading id to `conformance` and update any inbound references if present.

### E-002: Stray closing parenthesis in CapabilityStatement sentence

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/async.html:61-63`; `FHIR-41202`; commit `3512b7ea6d43b0409809b60ae404037102e91f63`.
- Problem: the sentence ends `in their CapabilityStatements.)`.
- Why it matters: visible punctuation error in the new conformance text.
- Recommended next step: remove the extra `)`.

## Intent-vs-implementation mismatches

None found for the tracked intent in `FHIR-35936` or `FHIR-41202`. The current `either` code is supported by the later Zulip implementation thread for `FHIR-41202`.

## Overlooked or newly noticed problems

The broken API Incubator links, duplicate anchor, and stray parenthesis above are the concrete current-page problems found.

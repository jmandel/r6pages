# elementdefinition-examples actionable findings

## Summary

The page has 1 actionable finding: JSON examples added to clarify `ElementDefinition.pattern[x]` contain malformed JSON, undermining an otherwise well-supported `FHIR-36700` implementation.

## High-signal findings

### E-001: Malformed JSON examples in pattern examples

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition-examples.html:167-187`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition-examples.html:281-295`; commit `e9e4e5f34c8d0b40d680c26f92acfa19b5f714a6`; `FHIR-19608`
- Problem: The complex Coding JSON example has invalid tokens like `"url" : "lang"" : {` and `"url" : "content"" : {`; the invalid repeating-value JSON example omits the closing `]` for `coding` before `"text"`.
- Why it matters: This page exists to clarify subtle pattern semantics; invalid JSON examples can mislead profile authors and implementers or render badly in generated example tabs.
- Recommended next step: Correct the malformed JSON snippets and review the remaining JSON examples on this page that were added in the same commit.

## Intent-vs-implementation mismatches

None found. The current pattern semantics align with `FHIR-36700`, the FHIR-I 2022-04-04 minutes, and the `#conformance` Zulip discussion.

## Overlooked or newly noticed problems

See E-001. No additional high-signal problems found.

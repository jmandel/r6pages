# references actionable findings

## Summary

The page has 5 actionable findings. The main risk is one current normative conflict in canonical version matching, plus concrete reader-facing defects in examples/links/prose introduced or left behind by the R4-to-R6 changes.

## High-signal findings

### H-001: Canonical package-first and manifest-first rules appear to conflict

- Priority: P1
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:399-416`; `FHIR-55991` (`https://jira.hl7.org/browse/FHIR-55991`); Zulip `#fhir/infrastructure-wg > Version-specific references`
- Problem: the page says applications SHALL first look through the package/dependencies for unversioned or wildcard canonical references, then says manifest-specified versions SHALL be used and typically must be consulted before package dependencies.
- Why it matters: implementers get conflicting conformance instructions for canonical resolution in package plus manifest contexts.
- Recommended next step: resolve/apply FHIR-55991 by qualifying the package-first rule with an exception for explicit manifest or other resolution methods.

### H-002: Contained-resource XPath correction was applied incorrectly

- Priority: P2
- Category: intent-mismatch
- Evidence: current XPath at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:721-727`; commit `38aa93e3461d8c449438335c18a74054987993e1`; `FHIR-39715`
- Problem: FHIR-39715 resolved to use `ancestor::f:*[not(parent::f:*)]/f:contained/*[f:id/@value=substring-after(current()/f:reference/@value, '#')]`, but the current page has `ancestor::f:[not(parent::f:*)]/f:contained/[...]`, missing both wildcard steps.
- Why it matters: the example XPath is syntactically wrong and fails the correction the Jira issue was meant to make.
- Recommended next step: update the XPath example to match the FHIR-39715 resolution.

### H-003: Additional References guidance has a resolved search-behavior follow-up

- Priority: P2
- Category: overlooked-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:304-323`; `FHIR-53909` (`https://jira.hl7.org/browse/FHIR-53909`); Confluence page `404100072`
- Problem: the page recommends `alternate-reference`, but later FHIR-I discussion resolved that reference search parameters need guidance for indexing/searching `additionalReference` or rejecting unsupported instances.
- Why it matters: without the follow-up, implementers can accept alternate references that normal reference searches silently miss.
- Recommended next step: ensure FHIR-53909 is applied, and consider adding a cross-link from `references.html#additional` to the search-page note once present.

### E-001: Canonical section has concrete broken/dangling reader-facing text

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:404-412` and `:481-486`
- Problem: the package-source link uses malformed host `http://hl7.org.fhir/...`; the manifest paragraph says "context of us"; and the paragraph "In addition, some types of Additional Resources" is incomplete.
- Why it matters: the broken URL and dangling prose interrupt a normative section and can mislead readers looking for package-source or additional-resource guidance.
- Recommended next step: correct the package-source URL, change "context of us" to "context of use", and complete or remove the dangling Additional Resources paragraph.

### E-002: Low-risk prose defects remain in changed reference guidance

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/references.html:260-264` and `:326-330`; commits `50302bfe36d1307fc1a80cc37d51b3da221219a6`, `4c62878beb7f314514c3f68dd936bbdc510dc25a`
- Problem: the logical-reference aggregation sentence is ungrammatical ("nor does ... aggregation restrictions"), and the Additional References paragraph retains a trailing quotation mark from the Jira resolution text.
- Why it matters: these do not change conformance intent, but they are visible on a normative page and reduce reader confidence.
- Recommended next step: rewrite the aggregation sentence and remove the stray quote.

## Intent-vs-implementation mismatches

- FHIR-39715 intended a corrected XPath with `ancestor::f:*` and `/f:contained/*[...]`; current source line 726 does not match that resolution.

## Overlooked or newly noticed problems

- FHIR-55991 identifies a live normative conflict in current canonical version matching text.
- FHIR-53909 identifies a later alternate-reference search behavior gap related to the new Additional References guidance.
- The broken package-source link, dangling Additional Resources paragraph, "context of us" typo, aggregation grammar, and stray quote are concrete current-page defects.

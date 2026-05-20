# clinicalreasoning-topics-using-expressions actionable findings

## Summary

The page has 3 actionable findings. The main risk is that a Normative R6 page now contains one incorrect canonical UCUM URL and CQL examples that still use the legacy `text/cql` media type where the tracked Jira/Zulip evidence says qualified CQL identifiers should use `text/cql-identifier`.

## High-signal findings

### H-001: Qualified CQL identifier examples still use `text/cql`

- Priority: P1
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-using-expressions.html:115-132`; `FHIR-35981`; `FHIR-49581`; Zulip `#questionnaire > CQL expression extensions in questionnaire`; Zulip `#hapi > Plan Definition with Conditions syntax help`
- Problem: The multiple-library expression-reference examples use `text/cql` at lines 120 and 131, even though the page's own named-expression example uses `text/cql-identifier` at line 99. Jira `FHIR-35981` says Using Expressions examples should use `text/cql-expression` or `text/cql-identifier` as appropriate, and `FHIR-49581` says named library expressions use `text/cql-identifier`, qualified when multiple libraries are in scope.
- Why it matters: Implementers may copy these examples and send qualified expression identifiers as raw CQL. Zulip evidence shows this can cause expression-resolution failures and confusion.
- Recommended next step: Update the XML and JSON examples to `text/cql-identifier`, unless the workgroup intends these to be inline CQL expressions, in which case update the prose and use `text/cql-expression`.

### H-002: UCUM system URL is misspelled

- Priority: P1
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-using-expressions.html:195-199`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpath.html:194-202`; commit `c7660fc81c9a286d9f1db2210560f4d16a29a00f`; `FHIR-28283`
- Problem: The new Quantity mapping text says the UCUM system is `http://unitsofmeausure.org`; the correct canonical URL is `http://unitsofmeasure.org`, as shown in the FHIRPath text that `FHIR-28283` asked this page to mirror.
- Why it matters: This is reader-facing normative guidance for when FHIR Quantity can map to CQL `System.Quantity`; copying the typo would produce the wrong coding system.
- Recommended next step: Correct the URL to `http://unitsofmeasure.org` and check rendered output for the same typo.

### E-001: Backwards-compatibility note uses a stray `<text>` element

- Priority: P3
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-using-expressions.html:90`; commit `43b30c68fb2502e969acc862afac259bd4b7d412`; `FHIR-53080`
- Problem: The sentence says systems may treat `text/cql` as though they had specified `<text>text/cql-identifier</text>`. That appears to be an accidental HTML tag where the surrounding media types use `<code>`.
- Why it matters: It creates inconsistent rendering/markup on a Normative page and could fail stricter XHTML checks.
- Recommended next step: Replace `<text>text/cql-identifier</text>` with `<code>text/cql-identifier</code>`.

## Intent-vs-implementation mismatches

H-001 is the main mismatch: the retained examples appear broader/older than the Jira and Zulip intent for R5/R6 CQL media-type clarification.

## Overlooked or newly noticed problems

H-002 and E-001 are concrete current-page defects found while reviewing the R6 ballot4 source. No formal Jira/workgroup decision found in this pass appears to require intentionally keeping either defect.

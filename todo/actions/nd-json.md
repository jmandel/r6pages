# nd-json actionable findings

## Summary
Found 3 actionable findings: two reader-facing wording/conformance defects on the now-Normative page, plus one process/evidence gap around the R6 Normative status change.

## High-signal findings

### E-001: Intro says NDJSON is a variant of itself

- **Priority:** Medium
- **Category:** Editorial / intent-vs-implementation mismatch
- **Evidence:** R6 `source/nd-json.html:20-22` says `NDJSON ... is a variant of the NDJSON format`. Commit `5ff951a...` introduced this while applying `FHIR-31425`, whose request was to use the term `NDJSON` consistently and link the NDJSON spec, not to change the base format from JSON to NDJSON.
- **Problem:** The sentence is self-referential and obscures that NDJSON is a newline-delimited form/variant of JSON.
- **Why it matters:** This page is now marked Normative, so even small definitional wording errors can confuse implementers looking for the authoritative FHIR NDJSON definition.
- **Recommended next step:** Change the sentence to say NDJSON is a variant/profile of JSON for newline-delimited resource streams, while keeping the external NDJSON spec link.

### H-002: Line separator wording is narrower than the linked NDJSON spec

- **Priority:** High
- **Category:** Conformance / semantic defect
- **Evidence:** R6 `source/nd-json.html:20-24` links to the NDJSON spec but says resources are separated by `a newline pair (characters 13 and 10)`. The linked NDJSON spec says each JSON text is followed by LF (`\n`, 0x0A), CR (`\r`, 0x0D) may precede it, and parsers must accept both LF and CRLF.
- **Problem:** FHIR appears to require CRLF only, which is stricter than NDJSON and conflicts with the external spec it cites.
- **Why it matters:** LF-only NDJSON is common and valid NDJSON. A Normative FHIR page that appears to reject LF-only streams can cause avoidable interoperability and validation disagreements.
- **Recommended next step:** Clarify the separator as LF, optionally preceded by CR, e.g. `separated by a newline character (LF, 0x0A; CRLF is also accepted)`.

### G-003: Normative promotion lacks a page-specific rationale link

- **Priority:** Medium
- **Category:** Evidence gap / standards status
- **Evidence:** `FHIR-16500` said the page should not be normative at that time; the 2022 Zulip `Status of ND-JSON` thread concluded Trial Use/FMM4; commit `270e0ceb...` later changed the page to `Normative` with no page-specific Jira key. 2025 FHIR-I WGM minutes say `JSON, NDJSON (already normative)`, but do not show the page-specific ballot/resolution trail.
- **Problem:** The standards-status change is substantive, but the trace from Trial Use/FMM4 to R6 Normative is not explicit in the page history.
- **Why it matters:** If the promotion was intentional, implementers and reviewers need a clear decision record; if it was inherited from a broader status sweep, older contrary evidence could make the page status questionable.
- **Recommended next step:** Link or record the R6 normative approval rationale for NDJSON specifically; if none exists, ask FHIR-I to confirm the status before final publication.

## Intent-vs-implementation mismatches

- E-001: `FHIR-31425` intended consistent `NDJSON` naming and an external spec link, but the applied wording says NDJSON is a variant of NDJSON rather than JSON.
- Minor not elevated: `FHIR-31425` said the example would be labeled `NDJSON example`; the source only says `Example:`.

## Overlooked or newly noticed problems

- H-002: Current line-separator wording conflicts with the linked NDJSON spec and is more important now that the page is Normative.
- G-003: The R6 Normative status change has only broad minutes/PR context, not a page-specific Jira or resolution trail.

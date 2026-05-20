# terminologies-systems actionable findings

## Summary

The page has 3 actionable findings. The main risk is that R6 ballot4 still presents and anchors an external-code-systems section that later ballot review says should be removed or reduced to a THO pointer, while two concrete editorial/navigation defects remain visible in the current source.

## High-signal findings

### H-001: External Code Systems section may now be obsolete

- Priority: P1
- Category: overlooked-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-systems.html:36`, `:45`, `:48-147`; `FHIR-54107` (`https://jira.hl7.org/browse/FHIR-54107`); historical rationale in `FHIR-37853` and `FHIR-35933`.
- Problem: R6 ballot4 still maintains a curated External Code Systems section and related "Defined Externally tab" / registering-code-systems text, but later R6 ballot issue `FHIR-54107` says the section repeats THO and should be removed or rewritten as a THO pointer.
- Why it matters: Readers may treat the base spec table as current external-terminology authority even though the intended source of truth is THO, increasing the risk of stale duplicated URI/OID/link guidance.
- Recommended next step: Triage/apply `FHIR-54107` before R6 publication: either remove section 4.3.0.1 or replace it with the proposed concise THO pointer, and update any retained "tab" wording to match the actual rendered structure.

### E-001: Resolved typo correction is not applied

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-systems.html:153-156`; `FHIR-53839` (`https://jira.hl7.org/browse/FHIR-53839`); Confluence page `413042372`.
- Problem: The current text says "and a defined by and considered part of FHIR itself." `FHIR-53839` resolves this to "and are defined by and considered part of FHIR itself," but the fix is not in the ballot4 source tree.
- Why it matters: This is a visible reader-facing typo with an approved technical-correction disposition.
- Recommended next step: Apply the `FHIR-53839` wording exactly.

### E-002: Tab removal left duplicate anchors and stale tab script

- Priority: P2
- Category: rendering
- Evidence: duplicate `<a name="external">` at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-systems.html:48` and `:150`; no `id="tabs"` or `name="internal"` in the current file; leftover `$( '#tabs' ).tabs(...)` at `:185-197`; restructuring commit `b11348ce8cce8fc30edd440a5b97ee5a8051bc0c`.
- Problem: The internal Code Systems section uses the same `external` anchor as the external section, while the page still includes tab initialization JavaScript even though the `#tabs` wrapper was removed.
- Why it matters: Duplicate anchors can make fragment navigation ambiguous, and stale tab scaffolding makes the page harder to maintain and reason about.
- Recommended next step: Give the internal section a distinct anchor such as `internal`, remove or restore the tab wrapper/script consistently, and align the note at line 36 with the final structure.

## Intent-vs-implementation mismatches

`FHIR-53839` is the only clear formal decision found that has not been applied to this ballot4 source. `FHIR-50716`, `FHIR-37853`, `FHIR-35933`, `FHIR-37887`, `FHIR-39156`, `FHIR-41305`, and `FHIR-46008` appear implemented or superseded by later page edits.

## Overlooked or newly noticed problems

The duplicate `external` anchors and stale `#tabs` script are visible in the current source and were not found as covered by a Jira issue in the searched evidence.

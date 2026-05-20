# formats actionable findings

## Summary

The page has 1 actionable finding: the current R6 ballot4 source still references an `NE` flag that is not defined in the flag key, and later FHIR-I/Jira evidence confirms this should be fixed in rendering.

## High-signal findings

### E-001: `NE` flag is referenced but not defined/displayed

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/formats.html:139-163`; `080de8098cee5f70dc7e6bddab7e544c98da3e89`; `FHIR-50460`; Confluence page `453902815`; https://github.com/HL7/fhir-ig-publisher/issues/1293
- Problem: The Key to Flags no longer defines `NE`, but the Notes still say extensions may appear "except where the flag `NE` appears." R4 had the key entry, and `080de809...` removed it without removing the note.
- Why it matters: Readers cannot tell which elements prohibit extensions/ids, and FHIR-I later resolved that this needs a rendering fix for cases such as `Element.id`, `Resource.id`, and `Extension.url`.
- Recommended next step: Apply `FHIR-50460`/IG Publisher `#1293` by rendering the `NE` flag for affected elements and ensuring the `formats.html` flag key defines it; otherwise remove the stale `NE` sentence.

## Intent-vs-implementation mismatches

`FHIR-50460` is a post-R6-ballot4 decision, but the current page still shows the defect it describes. No other material intent-vs-implementation mismatches were found.

## Overlooked or newly noticed problems

None found.

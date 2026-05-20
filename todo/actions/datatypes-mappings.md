# datatypes-mappings actionable findings

## Summary

The page has 2 actionable findings, both reader-facing navigation/label defects. The main risk is that a broad `FHIR-47467` link update appears to have left every non-primitive datatype "Extensions" link pointing at the primitive section while also labelling the conversions link as `Extensions`.

## High-signal findings

### E-001: "See also" links point to primitive extensions and duplicate the Extensions label

- Priority: P2
- Category: intent-mismatch, rendering
- Evidence: current source lines `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-mappings.html:63`, `:160`, `:236`; commit `dbb78e2435ad20bdcc43ada9656bf01fe99d6165`; Jira `FHIR-47467`
- Problem: after the `FHIR-47467` change, non-primitive datatype sections link `Extensions` to `[%extensions-location%]extensions-datatypes.html#primitive` instead of the datatype-specific anchor, and the conversion link is also labelled `Extensions`.
- Why it matters: readers navigating from mappings for Attachment, RatioRange, RelativeTime, etc. are sent to the primitive extension section and cannot distinguish the conversions link from the extensions link.
- Recommended next step: restore datatype-specific extension anchors and give the conversions link an accurate label, or remove/update the conversions link if those mappings have intentionally moved to another IG; audit sibling datatype pages generated from the same pattern.

### E-002: RatioRange section is visibly labelled "Ratio"

- Priority: P2
- Category: editorial, rendering
- Evidence: current source lines `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-mappings.html:156-163`; commit `b9fd58139d35c8aa90083ae99a279c8a6d3dd854`; Jira `FHIR-55681`
- Problem: the section anchors and mapping macro are for `RatioRange`, but the visible heading says `Ratio`, creating a second `Ratio` section.
- Why it matters: the page mislabels the datatype mapping section and may confuse readers or tooling that relies on visible headings.
- Recommended next step: change the mappings-page heading to `RatioRange` and ensure the existing `FHIR-55681` label fix also covers `datatypes-mappings.html`.

## Intent-vs-implementation mismatches

E-001: `FHIR-47467` intended R6/R5 diff or mapping-page cleanup, but the applied page text changed extension anchors and conversion labels in a way that does not match the stated issue.

## Overlooked or newly noticed problems

E-002: `FHIR-55681` already tracks wrong RatioRange labels on datatype pages, but this mappings page carries the same visible label defect and should be included in the fix scope.

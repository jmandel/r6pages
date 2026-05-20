# elementdefinition actionable findings

## Summary

The page has 2 actionable findings: one substantive `FHIR-50391` follow-up where snapshot-rendering guidance discussed in Jira/Zulip appears absent from the applied slicing text, and one concrete editorial cleanup cluster in current normative prose.

## High-signal findings

### H-001: FHIR-50391 slicer-constraint snapshot caveat appears absent

- Priority: P2
- Category: intent-mismatch
- Evidence: `source/elementdefinition.html:416-432`; commit `3f3077a286d669ed69f2cb51540b8f3aef58a433`; `FHIR-50391` comment in local snapshot lines 90-93; Zulip `#IG creation > Slices not inheriting preferred bindings from root` lines 916-925 and 937-943; Confluence page `358880988` records `FHIR-50391` approved 6-0-1.
- Problem: the applied page says which slicer constraints apply across all slices, but does not include the discussed caveat that these constraints may not be explicitly rendered/displayed in slice snapshots and may need to be repeated on slices only for display, not validation.
- Why it matters: the original problem was readers/tooling seeing generated snapshots that appeared not to inherit slicer constraints. Without the caveat, profile authors may still infer that omitted slice-snapshot text means the constraint does not apply.
- Recommended next step: ask FHIR-I whether the snapshot-rendering caveat was intentionally omitted from `FHIR-50391`; if not, add a short note under the slicing bullets.

### E-001: Several current-page prose defects remain in normative guidance

- Priority: P3
- Category: editorial
- Evidence: `source/elementdefinition.html:414` ("All elements following the first repeat that containing..."), `:417` ("It's use"), `:471` ("an extension may be present the either provides"), `:495` ("co-occurence").
- Problem: the current page has visible grammar/spelling errors in the slicing and primitive-value sections.
- Why it matters: these sections explain conformance behavior; small prose defects make already subtle rules harder to read and quote.
- Recommended next step: correct the grammar/spelling without changing semantics.

## Intent-vs-implementation mismatches

H-001 is the only material mismatch found. The main Jira resolutions for `FHIR-33432`, `FHIR-28126`, `FHIR-39180`, `FHIR-39182`, `FHIR-40296`, `FHIR-48664`, and the core `FHIR-50391` bullets otherwise appear reflected in the current page.

## Overlooked or newly noticed problems

E-001 covers concrete current-page editorial defects. No additional substantive contradictions were found.

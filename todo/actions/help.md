# help actionable findings

## Summary

The page has 2 actionable editorial/rendering findings. No substantive conformance or Jira intent mismatch was found; the main risk is that the newly populated glossary still carries stale page metadata and visible import-era typos.

## High-signal findings

### E-001: Glossary page still declares itself as Version History

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/help.html:3`, `:20-21`; `FHIR-24866`; Confluence page `78677754`
- Problem: `help.html` now visibly renders as `Glossary`, but the source still has `[%settitle Version History%]` and `<a name="history"></a>`.
- Why it matters: page title/metadata and the top anchor are stale after the glossary was added, which can mislabel the page in browser titles, generated navigation, search results, or deep-link anchors.
- Recommended next step: change the source title and top anchor to glossary-specific values, then confirm generated navigation/rendering still links correctly.

### E-002: Imported glossary retains obvious reader-facing typos

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/help.html:68`, `:142`, `:1371`
- Problem: examples include `an an insurer`, `establishe security measures`, and `StructureDefintion`.
- Why it matters: these are visible glossary definitions, and the page is intended as a reference aid.
- Recommended next step: fix the concrete typos and consider a bounded proofreading pass over the imported glossary text.

## Intent-vs-implementation mismatches

None found.

## Overlooked or newly noticed problems

E-001 and E-002 above.

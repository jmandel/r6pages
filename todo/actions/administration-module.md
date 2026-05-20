# administration-module actionable findings

## Summary

The page has 1 actionable finding: an unclear, untracked Research Studies implementation note that gives modeling/search guidance but reads like draft text. The main Jira-backed additions otherwise match their recorded dispositions.

## High-signal findings

### E-001: Research Studies implementation note is unclear draft-like guidance

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/administration-module.html:245-250`; commit `c048e735e0c4c9d01b4e4e7548393dbbd45de4e2`; no Jira/Zulip/Confluence hits for `"mix of research and non research content"` or `"creating 2 encounters" research`
- Problem: The note says to recommend creating 2 Encounters for mixed research/non-research content, then trails into "however could derive that information Based on..." from observations/diagnostic reports/immunizations. It is grammatically incomplete, uses informal abbreviations, and leaves the intended modeling recommendation ambiguous.
- Why it matters: This is implementation guidance about encounter modeling, extensions, and search behavior; readers could misinterpret whether separate Encounters are recommended, optional, or merely one possible derivation strategy.
- Recommended next step: Open a PA editorial/spec-clarification ticket to rewrite or remove the note, explicitly naming the relevant standard extensions/search parameters and the intended modeling pattern.

## Intent-vs-implementation mismatches

None found.

## Overlooked or newly noticed problems

E-001 above.

# patterns actionable findings

## Summary

The page has 1 actionable finding, a low-priority reader-facing typo. No substantive intent-vs-implementation mismatch was found; the R4-to-R6 page changes are metadata/navigation and editorial punctuation.

## High-signal findings

### E-001: Correct `that the pattern` to `than the pattern`

- Priority: P3
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/patterns.html:76`; unchanged from R4 line 67; exact Jira/Zulip/Confluence searches for `"higher cardinality that the pattern"` found no prior tracker or discussion.
- Problem: The sentence says interface-pattern resources may "allow for a higher cardinality that the pattern"; this appears to be a typo for "higher cardinality than the pattern."
- Why it matters: This is minor, but it is visible reader-facing guidance in the interface-pattern section.
- Recommended next step: File or apply a small editorial correction from `that` to `than`.

## Intent-vs-implementation mismatches

None found.

## Overlooked or newly noticed problems

E-001 above.

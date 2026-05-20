# clinicalreasoning-knowledge-artifact-distribution actionable findings

## Summary

The page has 2 actionable findings: one likely stale DSS search-parameter mapping that could mislead implementers, and one low-risk editorial cleanup item. The tracked Jira-backed changes otherwise appear aligned with the documented intent.

## High-signal findings

### H-001: DSS table still references non-current `KnowledgeArtifact.*` search parameters

- Priority: P2
- Category: spec-problem
- Evidence: current page rows at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-distribution.html:147` and `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-distribution.html:149`; current-tree search found `minScore` only in old release-history data such as `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/tools/history/release2/search-parameters.xml:30867`, while current Library/ActivityDefinition/PlanDefinition/Measure search-param bundles include resource-specific `status`, `topic`, `context`, etc., but no `minScore`.
- Problem: the DSS mapping table names `KnowledgeArtifact.minScore` and `KnowledgeArtifact.status`, but current R6 source does not appear to define a `KnowledgeArtifact` resource/search-parameter family or a current `minScore` SearchParameter.
- Why it matters: readers trying to implement repository search could look for or advertise search parameters that no longer exist in current FHIR core.
- Recommended next step: update the DSS mapping table to current resource-specific search parameters, and either mark Minimum Score as not implemented/no current equivalent or point to a current extension/profile if one is intended.

### E-001: Two reader-facing typos remain in current prose

- Priority: P3
- Category: editorial
- Evidence: `provide-facing remote decision support` at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-distribution.html:55`; `the useContext elements is intended` at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-distribution.html:81`.
- Problem: "provide-facing" should likely be "provider-facing"; "elements is" is grammatically inconsistent.
- Why it matters: both are visible in normative-adjacent explanatory text and reduce reader confidence.
- Recommended next step: correct both typos in an editorial cleanup.

## Intent-vs-implementation mismatches

None found. `FHIR-53084` requested Informative status, recommendation wording, and replacing `topic` element language with `topic` use-context language; the current page implements those changes.

## Overlooked or newly noticed problems

H-001 is newly noticed inherited/stale text rather than a direct R4-to-R6 diff item. E-001 is a concrete reader-facing cleanup item introduced/retained by the page edits.

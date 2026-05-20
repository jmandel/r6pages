# diagnostics-module actionable findings

## Summary

The page has 2 actionable findings, both reader-facing coherence defects in the current R6 ballot4 source: the top resource index is inconsistent with the module/table, and the page repeats the same related-resources section.

## High-signal findings

### E-001: Resource index omits ServiceRequest and duplicates imaging resources

- Priority: P2
- Category: editorial
- Evidence: current source `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/diagnostics-module.html:40-64` lists `ImagingSelection` and `ImagingStudy` twice and omits `ServiceRequest`; the resource table at lines 96-103 still includes `ServiceRequest`; commit `cefb308f4b8691afd6ae29eef993eb48bf8aba68` removed `ServiceRequest` from the index and added the duplicate imaging entries.
- Problem: the "Diagnostics module covers the following resources" index is internally inconsistent with the page's own Table 1 and with the rest of the narrative, which repeatedly uses ServiceRequest as a core diagnostics workflow resource.
- Why it matters: readers relying on the module index may miss ServiceRequest as an in-scope diagnostics resource and see duplicated imaging entries as intentional.
- Recommended next step: fix the index to include `ServiceRequest` once and list `ImagingSelection`/`ImagingStudy` once; confirm intended placement of external MolecularDefinition/GenomicStudy links while editing.

### E-002: Duplicate "Related Resources and Modules" sections

- Priority: P3
- Category: editorial
- Evidence: current source lines 69-73 and 376-383 both contain `Related Resources and Modules` with the same Administration / Clinical Summary / Medications paragraph; blame shows the first block added in `cefb308f4b8691afd6ae29eef993eb48bf8aba68` while the older block from `ab140a0db3a9e05c2f36a63d57180a7a17f52776` remains.
- Problem: the page repeats the same section under different anchors (`relatedresources` and `related`), creating duplicate navigation/content.
- Why it matters: duplicate sections make the page look accidentally merged and can confuse readers or downstream anchors.
- Recommended next step: keep one related-resources section in the intended location, remove the duplicate, and update any generated navigation/anchor references if needed.

## Intent-vs-implementation mismatches

No substantive Jira/Zulip/Confluence intent mismatch found for the major R6 guidance additions. The two findings above are page-coherence defects visible in the current source rather than contested workgroup decisions.

## Overlooked or newly noticed problems

The index and duplicate-section defects do not appear to have their own Jira issue in the searched local Jira/Zulip/Confluence evidence.

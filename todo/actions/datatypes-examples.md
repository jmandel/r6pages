# datatypes-examples actionable findings

## Summary

The page has 4 actionable findings. The main risk is that several current R6 examples are not valid or are inconsistent with formal tracker decisions, so implementers copying examples may learn the wrong XML/JSON shape for current datatypes.

## High-signal findings

### H-001: SampledData XML example still uses retired `period`

- Priority: P1
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-examples.html:1151-1177`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes/sampleddata.xml:877-902`; `FHIR-25034`; `FHIR-35948`; commit `c27bdb7a6c4a63b716f83815a9096b413cf658a8`
- Problem: The SampledData XML example uses `<period value="2"/>`, but the R6 datatype source defines `SampledData.interval` and a required `SampledData.intervalUnit`. The paired JSON was changed to `"interval" : "2"` in a QA commit, leaving XML and JSON inconsistent, and neither format shows `intervalUnit`.
- Why it matters: The page currently shows an invalid/stale R6 XML element for a datatype that changed materially from R4/R5-era wording.
- Recommended next step: Change the XML example to use `interval`, add `intervalUnit` to both XML and JSON, and validate the SampledData example in both formats against the R6 definitions.

### H-002: Added JSON examples are not reliably valid FHIR JSON

- Priority: P2
- Category: spec-problem
- Evidence: JSON primitive rules at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/json.html:170-173`; current examples at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-examples.html:545`, `:746-771`, `:1174-1177`, `:2620-2623`, `:2129-2174`; commit `e9e4e5f34c8d0b40d680c26f92acfa19b5f714a6`; `FHIR-19608`
- Problem: Many JSON examples quote primitives that should be JSON numbers/booleans, such as `userSelected : "true"`, Quantity `value : "25"`, SampledData `factor/dimensions` as strings, and Timing `frequency/period/count` as strings. One Address JSON example also changes codedString values from XML `US` to JSON `IN`.
- Why it matters: The Jira intent was to add useful JSON examples, but these examples can mislead implementers about FHIR JSON primitive typing and extension value content.
- Recommended next step: Run a schema-aware audit of all JSON snippets added to this page and fix primitive JSON types and XML/JSON value mismatches, starting with the cited Quantity, SampledData, Timing, Coding, and Address examples.

### H-003: Timing roots reverted after `FHIR-20670`

- Priority: P2
- Category: intent-mismatch
- Evidence: current examples at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-examples.html:2587-2737`; `FHIR-20670`; fixing commit `b1a191ea63c373039d54c387aced8a9f11daea24`; regression commit `b9fd58139d35c8aa90083ae99a279c8a6d3dd854`
- Problem: `FHIR-20670` explicitly resolved that Timing example roots should be changed from `<schedule>` to `<timing>` because `<schedule>` was confusing. The next page-specific commit reverted those roots, and current R6 examples still use `<schedule>`/`"schedule"`.
- Why it matters: This is a formal tracker decision that appears to have been unintentionally undone, preserving the exact confusion the issue was meant to remove.
- Recommended next step: Restore `timing` as the example root names, or document why the work group intentionally chose to abandon the `FHIR-20670` resolution.

### H-004: HumanName examples still use nonexistent middle-name extension URLs

- Priority: P2
- Category: overlooked-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/datatypes-examples.html:1602-1623` and `:1641-1692`; Zulip `#nordics > Middle Name` (`bun run zulip:search snapshot nordics "Middle Name"`)
- Problem: Several Scandinavian HumanName examples still use `http://hl7.org/fhir/StructureDefinitioniso-20190#name-qualifier` and `http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifier2`. The Zulip thread identified this exact extension as wrong/nonexistent and said it had been fixed, but the current page still contains it, including JSON copies.
- Why it matters: Canonical URLs in examples are likely to be copied. Nonexistent/obsolete extension URLs make the examples non-interoperable and undermine the HumanName guidance.
- Recommended next step: Replace these URLs with the correct current extension/code-system canonicals or remove/rewrite the affected examples if the Scandinavian middle-name modeling guidance has changed.

## Intent-vs-implementation mismatches

`H-001`, `H-003`, and `H-004` are the material mismatches found: SampledData was only partially updated from `period` to `interval`, the Timing root-name fix from `FHIR-20670` was reverted, and a Zulip-noted bad HumanName extension URL remains present.

## Overlooked or newly noticed problems

`H-002` is the main newly noticed problem: the JSON expansion appears mechanical and should be validated as a set rather than fixing one line at a time.

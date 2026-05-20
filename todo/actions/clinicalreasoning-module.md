# clinicalreasoning-module actionable findings

## Summary

The page has 2 actionable findings, both concrete reader-facing link defects introduced by late R6 page edits. No broader Jira/Zulip/Confluence intent mismatch was found for the substantive page changes.

## High-signal findings

### E-001: Decision Support Services link is malformed

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-module.html:70`; commit `1268605a53fabdafc86a868ba2a51656aa9907c7`; `FHIR-53085`
- Problem: The page links `Decision Support Services` to `https://clinicalreasoning-cds-on-fhir.html/`, which is parsed as an external HTTPS host rather than the local page.
- Why it matters: Readers trying to navigate from the audience description will be sent to a broken/nonexistent domain instead of the intended local topic or IG.
- Recommended next step: Replace the href with the intended target, likely `clinicalreasoning-cds-on-fhir.html` if the core topic remains the landing page, or the actual Using Clinical Reasoning IG URL if `FHIR-53085` intended an external IG reference.

### E-002: EventDefinition index row links to Evidence

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-module.html:89`; `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resourcelist.html:243`; commit `f2c01f013006a55844d5a4975b429827f025fc0f`; follow-up commit `4fc8a69b31ede7410e3251421346f8b404a91f3d`
- Problem: The Clinical Reasoning index labels the row `EventDefinition` but its href is `evidence.html`; the resource list uses `eventdefinition.html`.
- Why it matters: The resource index silently routes readers to the wrong resource page.
- Recommended next step: Change the EventDefinition row href to `eventdefinition.html`.

## Intent-vs-implementation mismatches

None found beyond the broken implementation of the `FHIR-53085` link update in E-001.

## Overlooked or newly noticed problems

E-002 appears to be a newly noticed QA issue: the same late QA pass fixed the neighboring TriggerDefinition link but left EventDefinition pointing at Evidence.

# safety actionable findings

## Summary

The page has 4 actionable findings. The main risk is that the safety checklist changed substantially, but the formal CodeSystem and some Jira-approved wording were not kept aligned with the current page.

## High-signal findings

### H-001: Safety CodeSystem is stale relative to the current checklist

- Priority: P1
- Category: spec-problem
- Evidence: `source/safety.html:40-44`, `source/safety.html:54-109`, `source/safety.html:170-198`, `source/codesystem/codesystem-safety-entries.xml:37-200`; Zulip `#implementers > Are search parameters like filters?` says `codesystem-safety-entries.html` was added for formal computability.
- Problem: the page says the safety checklist is available as a CodeSystem for formal references, but the CodeSystem has 41 concepts while the page has 55 checklist items. Missing concepts include `implicitRules`, `search-param-names`, `search-pages-client`, `search-pages-server`, `subsetted`, narrative additions, `decimal`, and all decision-support items. Some existing definitions are also stale.
- Why it matters: applications or registration processes using `http://hl7.org/fhir/safety-entries#...` cannot reliably cite current checklist items, and implementers may see different requirements in narrative vs machine-readable artifacts.
- Recommended next step: update `codesystem-safety-entries.xml` and any associated ValueSet/generated artifacts from the current checklist, or make the CodeSystem generated from the page so future checklist edits cannot drift.

### H-002: FHIR-42989 was only partially applied

- Priority: P1
- Category: intent-mismatch
- Evidence: `source/safety.html:56-58`; Jira `FHIR-42989`; Confluence page `227220068`; commit `e963b596c7ad3585b2285ac64ae7f8ee16a644ac`; PR `HL7/fhir#3920`.
- Problem: the approved disposition required updating the modifier item, updating the modifierExtension item, and adding implicitRules behavior guidance. The current page adds an implicitRules item, but leaves modifier/modifierExtension guidance essentially unchanged and uses different implicitRules wording.
- Why it matters: implementers may not see the WG-approved guidance about behaving properly when encountering modifier elements, known/unknown modifier extensions, and unknown implicitRules values.
- Recommended next step: revise the three conformance checklist items to match the FHIR-42989 resolution and update the safety CodeSystem at the same time.

### H-003: FHIR-34155 search guidance appears narrower than the approved intent

- Priority: P2
- Category: intent-mismatch
- Evidence: `source/safety.html:93`; Jira `FHIR-34155`; commit `bacf6ea51e74b27baf81dad7a1e064fa6fee2f77`; PR `HL7/fhir#2243`.
- Problem: Jira says clients must check the CapabilityStatement and SearchParameter definitions because identical search strings can mean different things on different servers. The current checklist item only says to check names of search parameters and operation definitions in the HTTP server's CapabilityStatement to see if they have been renamed.
- Why it matters: checking names in CapabilityStatement may not catch semantic differences in SearchParameter definitions, which was the safety concern described in the Jira issue.
- Recommended next step: adjust the item to explicitly mention checking SearchParameter definitions/semantics, not just parameter names in CapabilityStatement.

### E-001: Several current checklist anchors and narrative references are broken or misleading

- Priority: P2
- Category: rendering
- Evidence: `source/safety.html:109`, `source/safety.html:173-180`, `source/safety.html:186-188`, `source/safety.html:196-198`; Jira `FHIR-34041`.
- Problem: `subsetted` anchors to `obs-focus`; all non-render narrative items anchor to `render-narratives`; `decimal` anchors to `use-provenance`; the narrative paragraph says "With regard to #38" even the current item is not #38; and the narrative item contains visible typos ("safe failback", "do not recognized", extra `)`).
- Why it matters: formal fragment links and reader references point to the wrong checklist items, undermining the page's stated formal-reference use case.
- Recommended next step: make each anchor match its checklist code, replace numeric cross-reference with the item code/title or current number, and correct the narrative transcription typos.

## Intent-vs-implementation mismatches

- H-002: FHIR-42989 disposition not fully reflected in current conformance checklist.
- H-003: FHIR-34155 SearchParameter definition intent not clearly reflected in current search checklist.
- H-001: current narrative checklist and formal CodeSystem artifact are inconsistent.

## Overlooked or newly noticed problems

- E-001: duplicate/wrong anchors, stale item number reference, and narrative typo/rendering defects are visible in the current page.

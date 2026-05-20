# mapping-tutorial actionable findings

## Summary

The page has 3 actionable findings, mainly around invalid or misleading tutorial examples rather than normative requirements. The highest-risk issue is Step 14, where later Jira/Zulip evidence says the current example is misleading about inline resources vs references and should be clarified.

## High-signal findings

### H-001: Step 14 is misleading about `ptr`, inline resources, and reference resolution

- Priority: P1
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-tutorial.html:559`, commit `c372919350db4764cebd887053bd3bd567234faa`, `FHIR-17708`, `FHIR-50272`, Zulip `#FHIR Mapping Language > resolve() references within a Bundle`
- Problem: Step 14 says the map asks the host to find the structure identified by `src.ptr`, but the source structure declares `ptr : Resource(TLeft2)`, not `Reference(TLeft2)`, and the example aliases `src.ptr` directly. Later discussion says this is misleading and should be renamed and/or split into direct-resource and reference-resolution examples.
- Why it matters: The tutorial can teach implementers that FML implicitly resolves references, or obscure when host/application resolution is required.
- Recommended next step: Revise Step 14 to clearly distinguish inline `Resource(TLeft2)` from `Reference(TLeft2)`, add a tested reference-resolution example if intended, and include complete FML syntax.

### H-002: Step 4 conversion example uses an undefined variable

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-tutorial.html:185`, commit `de492c1c3920677e9b7da8a17090407709934b7c`, `FHIR-28465`
- Problem: The third conversion rule uses `at1.convertsToInteger().not()` even though the source alias is `a`.
- Why it matters: Readers copying the tutorial get an invalid or non-working rule in the type-conversion section.
- Recommended next step: Change `at1.convertsToInteger().not()` to `a.convertsToInteger().not()` and validate the tutorial snippets.

### E-001: R6 tutorial still describes linked maps as "this version (R5)"

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-tutorial.html:592`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/r4maps.html:14`
- Problem: The R6 ballot4 tutorial says the spec includes transforms between R4B and "this version (R5)", while the linked `r4maps.html` page is explicitly R4/R5 and says it has not been updated for R6.
- Why it matters: R6 readers may think the linked maps are current R6 transforms.
- Recommended next step: Reword the paragraph to state that these are retained R4/R4B-to-R5 examples, or update the link/text when R6 transforms are available.

## Intent-vs-implementation mismatches

- `FHIR-27915`: None found; the tutorial's `/// url` / `/// name` example matches the current mapping-language metadata syntax.
- `FHIR-17708`: Partial mismatch; the TODO markers were removed, but Step 14 still has a documented clarity problem.

## Overlooked or newly noticed problems

- Step 4's `at1` typo and the stale R5 wording are concrete current-page defects not clearly covered by the tracked changes.

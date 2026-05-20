# extensibility-examples actionable findings

## Summary

The page has 3 actionable findings. The main risk is that `FHIR-34212` is marked published, but the current examples still teach stale profile URL/cardinality patterns; the added modifier-extension example also has concrete fragment labels that disagree with the resource shown.

## High-signal findings

### H-001: Patient profile still points to the wrong participation-agreement canonical

- Priority: P1
- Category: intent-mismatch
- Evidence: current definition URL at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/extensibility-examples.html:77`; current stale profile URLs at `:260` and `:318`; `FHIR-34212`; Zulip `#conformance > Extensibility examples`; commits `6f541c9ceb4d14e1794ea8945fe609fc6e495a09` and `e9e4e5f34c8d0b40d680c26f92acfa19b5f714a6`.
- Problem: `FHIR-34212` resolved that the instance and referencing profile should use the same URL as the extension definition. The Patient instance was fixed, but the XML profile and later-added JSON profile still reference `http://example.org/phr/documents/fhir/StructureDefinition/participation-agreement` instead of `http://example.org/fhir/StructureDefinition/participation-agreement`.
- Why it matters: This keeps the example inconsistent with the extension canonical URL rule and with the explicit Jira/Zulip intent.
- Recommended next step: Update both Patient profile examples to use the defining canonical URL, then check whether any surrounding "registered location" prose still implies the old URL.

### H-002: FHIR-34212 cardinality move appears only half-applied

- Priority: P1
- Category: intent-mismatch
- Evidence: `FHIR-34212` resolution says to move cardinality to the extension root, not the value; current participation table/formal definition at `extensibility-examples.html:62` and `:90-113`; current name-qualifier table/formal definition at `:360` and `:423-440`; commit `c47042398891f647a92fd4feac6a06e260375892`.
- Problem: The implementation removed `max="*"` from the simple `Extension.value*` elements, but the formal extension definitions still do not show the table cardinalities on the `Extension` root elements.
- Why it matters: The page remains misleading about where extension cardinality is expressed, which was the second explicit problem that `FHIR-34212` set out to correct.
- Recommended next step: Reconcile the tables and formal snippets with the Jira resolution, likely by showing root `min`/`max` where the example claims `1..*` or `0..*`, and ensure value cardinality remains appropriate for simple extensions.

### E-001: Modifier-extension instance blocks are labelled as Patient fragments but contain Communication

- Priority: P2
- Category: rendering
- Evidence: current `Communication` XML/JSON instance blocks at `extensibility-examples.html:1110-1127`; commit `d461d9831352eb489c8c77466208c8c7399c21e1`; `FHIR-37903`.
- Problem: Both modifier-extension instance `<pre>` blocks use `fragment="Patient"` while the example content is a `Communication` resource.
- Why it matters: Fragment labels are used by the example/tab tooling and can mislabel or mis-extract the example, even though the visible resource text says `Communication`.
- Recommended next step: Change both fragment attributes to `Communication` or choose a Patient example consistently.

## Intent-vs-implementation mismatches

- `H-001` and `H-002` are the material mismatches: both trace to `FHIR-34212` being only partially applied.

## Overlooked or newly noticed problems

- `E-001` is visible in the current page and appears introduced with the `FHIR-37903` modifier-extension example.

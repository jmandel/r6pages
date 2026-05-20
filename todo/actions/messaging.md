# messaging actionable findings

## Summary

The page has 4 actionable findings. The main risk is that R6 ballot4 made normative messaging changes, but a few current statements/examples still conflict with the intended `Bundle.identifier` and graph-connected Bundle model or render as unfinished placeholder text.

## High-signal findings

### H-001: Bundle.identifier resend guidance is internally inconsistent

- Priority: P1
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/messaging.html:204-209`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/messaging.html:237-240`, `FHIR-39096`, Zulip `fhir/infrastructure-wg > Proposal for message identifier issues`
- Problem: The identifier section says each time a message is sent, `Bundle.identifier` should change, but the reliable-messaging table says consequence resends SHALL use the same `Bundle.identifier` and notification resends SHOULD use the same identifier.
- Why it matters: Implementers could change identifiers for consequence resends, bypass duplicate-response caching, and risk duplicate business actions.
- Recommended next step: Clarify that `Bundle.identifier` changes for newly created/re-triggered message instances, while automated resends follow the category-specific reliable-messaging rules below.

### H-002: Graph-connected Bundle rules contain stale narrower wording

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/messaging.html:37-42`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/messaging.html:72-75`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/bundle/bundle-notes.xml:339-347`, `FHIR-23722`, `FHIR-43295`, `FHIR-45507`
- Problem: The top-of-page rule and Bundle notes allow a connected graph, including reverse/url/href-style connections, but the Basic Messaging Assumptions section still says the Bundle includes only resources referenced from the MessageHeader.
- Why it matters: The stale wording can be read as disallowing valid graph-connected message Bundles permitted by the newer rule.
- Recommended next step: Replace or remove the duplicate Basic Messaging sentence so it points to the graph-connected Bundle rule instead of restating a narrower "referenced from it" rule.

### H-003: Operation example omits the required MessageHeader.focus link

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/messaging.html:462-467`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/messaging.html:483-518`, `FHIR-37416`, commits `472644928c6d9df6d0cbc44736a1697fa8ef6ac2` and `307c3216b45f4fc4ba59d6026605cad823d47daf`
- Problem: The operation instructions say `MessageHeader.focus` refers to a Parameters resource, but the active XML example includes a Parameters entry without any `focus` reference to it.
- Why it matters: The example contradicts the operation rule and leaves the Parameters resource unconnected under the page's graph-connected Bundle requirement.
- Recommended next step: Add a `MessageHeader.focus.reference` pointing to `urn:uuid:00213637-dc7c-40d2-a7de-f4ef1eea5685` in the operation example, and check any response/single-return examples for the same issue.

### E-001: Raw Markdown placeholder remains in HTML source

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/messaging.html:46`, `FHIR-45507`, commit `e3fe9fdef25099c995e905af26b84a15734f81c4`
- Problem: The page contains `All message Bundles SHALL be a [fully-interconnected graph](link to above).` as raw text in an HTML source page.
- Why it matters: The rendered page is likely to show an unfinished placeholder link in a normative sentence.
- Recommended next step: Replace it with HTML linking to `bundle.html#graphs`, or remove the duplicate sentence because the preceding list item already links to `Graph-connected Bundles`.

## Intent-vs-implementation mismatches

- `FHIR-45507` requested a link to the graph-connected Bundle section, but the messaging source still contains the literal placeholder `[fully-interconnected graph](link to above)`.
- `FHIR-37416` corrected the operation prose to use `MessageHeader.focus`, but the active example still does not show a `focus` reference to the Parameters entry.
- `FHIR-39096` intended category-specific reliable-messaging behavior using `Bundle.identifier`, but the general identifier paragraph still overstates that each send should change the identifier.

## Overlooked or newly noticed problems

- The stale Basic Messaging sentence at `source/messaging.html:74` appears to have been left behind when later graph-connected Bundle work broadened and centralized the rule.

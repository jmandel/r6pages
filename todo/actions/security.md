# security actionable findings

## Summary

The page has 5 actionable findings. The main risk is that R6 ballot4 contains normative/security guidance that later Security WG Jira decisions and PR 4066 already revised, plus concrete navigation/link defects that affect readers of the current page.

## High-signal findings

### H-001: UDAP/Tiered OAuth SHOULD text was later judged too strong

- Priority: P1
- Category: intent-mismatch
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security.html:219-221`; `FHIR-53719` (`bun run jira:search snapshot FHIR-53719`); PR https://github.com/HL7/fhir/pull/4066.
- Problem: R6 ballot4 says UDAP Consumer-Facing/B2B, UDAP Registration and Discovery, and Tiered OAuth for User Authentication `SHOULD` be implemented. `FHIR-53719` says this is premature for the base spec, asks to move UDAP dynamic registration to MAY, and asks to remove Tiered OAuth.
- Why it matters: A SHOULD-level statement in a Normative page can be read as broad conformance guidance on par with TLS/NTP, even though the later ballot issue says adoption/infrastructure do not justify that strength.
- Recommended next step: Ensure the PR 4066/FHIR-53719 wording is included in the target publication and do not carry forward the ballot4 SHOULD language.

### H-002: Mechanical normative-keyword conversions were later corrected

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security.html:28-35`; commit `87b00c9c0de977f8559e0f99694e8664e03a06cd`; `FHIR-53923`; `FHIR-53717`; PR https://github.com/HL7/fhir/pull/4066.
- Problem: Ballot4 contains uppercase `MAY` in descriptive or forward-looking text, including `FHIR MAY also define...` and `Not all the capabilities that FHIR enables MAY be appropriate or legal...`. Later Jira issues explicitly say these R4-to-R6 normative verb changes were not appropriate.
- Why it matters: Uppercase RFC-style terms on a Normative page can create unintended conformance implications or confusing prose.
- Recommended next step: Apply the later Jira resolutions: remove the forward-looking `FHIR MAY also define...` sentence and replace the `MAY be appropriate/legal` wording per `FHIR-53923`.

### H-003: Access-control deny audit SHALL is still too broad for all implementations

- Priority: P1
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security.html:298`; `FHIR-53381` (`bun run jira:search snapshot FHIR-53381`).
- Problem: Ballot4 says any denied access-control decision `SHALL` be recorded. `FHIR-53381` argues this would make systems without deny-audit logging non-conformant with FHIR and records a resolution to change the SHALL to SHOULD.
- Why it matters: The current wording turns a best practice into a universal conformance requirement.
- Recommended next step: Change `SHALL be recorded` to `SHOULD be recorded` or otherwise scope the requirement to systems/environments where audit logging is expected.

### E-001: Summary links point to missing anchors

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security.html:37-38`; `rg` found no `name`/`id` anchors for `input` or `oauth`; `FHIR-56089`; PR https://github.com/HL7/fhir/pull/4066.
- Problem: `Input Validation` links to `#input` and `When using OAuth` links to `#oauth`, but neither anchor exists on the page.
- Why it matters: The checklist navigation is broken for readers and was already confirmed as a page issue.
- Recommended next step: Follow `FHIR-56089` and remove the hyperlinks, or add real sections/anchors if the content should become navigable.

### E-002: Cascaded Authorization report links are malformed

- Priority: P2
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/security.html:326`; commits `c1269d57380bacb3d93666b626606e85aa7e4af0`, `bef66cb8437b636c1c08744188fd922e35632e7d`, `6712046fe2ed7241fb52f417642ab09f1527753e`; `FHIR-14081`; Confluence page `66931686`.
- Problem: Two Confluence `preview=` URLs contain malformed encodings such as `%266931686/66939023%2Cascaded...` and `%266931686/66939022%2Privacy...`, unlike the nearby correctly encoded UMA link.
- Why it matters: Readers may be unable to open the referenced Cascaded Authorization and Privacy Preserving Authorization reports.
- Recommended next step: Replace the two malformed URLs with valid Confluence attachment links or correctly encoded preview paths for attachments `66939023` and `66939022`.

## Intent-vs-implementation mismatches

- `H-001`, `H-002`, and `E-001` are already addressed by later Jira/PR evidence but remain present in the reviewed R6 ballot4 source.
- `H-003` has later Jira agreement to weaken the requirement, but it was not part of PR 4066 and remains a live item to triage/apply.

## Overlooked or newly noticed problems

- `E-002` appears to be a concrete link defect left by the 2022 GForge-to-Confluence link migration and follow-up URL encoding commits.

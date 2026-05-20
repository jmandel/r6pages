# terminology-service actionable findings

## Summary

The page has 2 actionable findings. The main risk is that the new normative conformance table can be read as changing operation input requirements and is stale for `$translate` parameter naming.

## High-signal findings

### H-001: Conformance table's "required input parameters" are ambiguous and partly stale

- Priority: P1
- Category: spec-problem
- Evidence: `source/terminology-service.html:73-164`; `source/conceptmap/operationdefinition-ConceptMap-translate.xml:91-177`; `source/codesystem/operationdefinition-CodeSystem-lookup.xml:68-123`; `source/valueset/operationdefinition-ValueSet-expand.xml:68-149`; `FHIR-24698`; `FHIR-32129`
- Problem: The Normative conformance table says terminology services SHALL support operations with "required input parameters", but many listed parameters are optional in the OperationDefinitions. For `$translate`, the table lists `system`, while the R6 OperationDefinition uses `sourceSystem` and only says the previous `system` name MAY still be accepted.
- Why it matters: Implementers could infer stricter request cardinalities or a mandatory legacy `$translate` alias that the operation definitions do not require.
- Recommended next step: Clarify whether the table means "input parameters servers must support" rather than "parameters clients must supply", and align `$translate` names with the current OperationDefinition or explicitly document the legacy alias requirement.

### E-001: Several current examples still contain invalid FHIR JSON/HTTP snippets

- Priority: P2
- Category: editorial
- Evidence: `source/terminology-service.html:590-612`, `source/terminology-service.html:745-803`, `source/terminology-service.html:888-975`
- Problem: Examples use `ResourceType` instead of `resourceType`, include malformed Bundle JSON structure, mix `Get`/`GET`, and one `$validate-code` URL uses `codes=` instead of `code=`.
- Why it matters: These are reader-facing examples on a Normative page and can be copied into implementations or tests.
- Recommended next step: Open a cleanup ticket to normalize the JSON examples and validate the shown request URLs.

## Intent-vs-implementation mismatches

H-001 is the only material mismatch found: `FHIR-24698` intentionally added minimum terminology-server requirements, but the final table wording and `$translate` parameter names do not cleanly match the current OperationDefinitions and `FHIR-32129`.

## Overlooked or newly noticed problems

E-001 is an inherited current-page example defect, not a direct R4-to-R6 change.

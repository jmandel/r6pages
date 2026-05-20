# overview-dev actionable findings

## Summary

The page has 2 actionable findings. The main risk is reader-facing REST examples that now mix `/base`, `f001`, and `347`, including examples that explicitly say URL IDs must match resource IDs while showing the opposite.

## High-signal findings

### E-001: REST examples mix `/base`, `f001`, and `347`

- Priority: P2
- Category: editorial
- Evidence: current source lines `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html:243-269`, `:360-409`, `:514-540`, `:552-559`; commits `6eccb56d130bc6ae7f4dc255b1091a310f860ba9`, `ea971f96c13efe5478ed1fefffc845eeb80ed881`, `75eef0f2911084cd87c3e1326c0b0360df8c0a5c`
- Problem: the examples were partially normalized. The create request is `POST /base/Patient` but its note still labels `/Patient`. The read request is `GET /base/Patient/f001` while the note says the fetched id is `347`, and the read response body contains `<id value="347"/>` despite the note saying the response id must match the read request. The update request is `PUT /base/Patient/f001` while the JSON body has `"id" : "347"` and the note says the URL/resource id is `"347"`.
- Why it matters: this developer overview teaches REST URL and resource identity basics. The current examples contradict the page's own rule that a resource id in the URL must match the id in the returned or updated resource.
- Recommended next step: normalize the whole create/read/update flow to one id and one base path, then update the explanatory notes and response `Location` headers to match.

### E-002: Search response declares XML while showing JSON

- Priority: P3
- Category: editorial
- Evidence: current source lines `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html:447-455`; old source lines `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/overview-dev.html:448-455`
- Problem: the search response example uses `<pre class="json linecounter">` and shows a JSON Bundle body, but the HTTP header says `Content-Type: application/fhir+xml`.
- Why it matters: the example is reader-facing and can confuse implementers about the expected response format.
- Recommended next step: change the header to `Content-Type: application/fhir+json`, or convert the example body/class to XML.

## Intent-vs-implementation mismatches

None found for the tracked Jira/workgroup decisions. The current example mismatches above appear to be incomplete editorial propagation rather than a contradicted formal decision.

## Overlooked or newly noticed problems

See `E-001` and `E-002`.

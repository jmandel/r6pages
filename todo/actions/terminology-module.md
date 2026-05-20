# terminology-module actionable findings

## Summary

The page has 3 actionable findings: two later R6 ballot/TI-review requests for this same page remain unapplied, and the R6 removal of `$closure`/`$find-matches` now has an incubator destination but no pointer from the core module landing page.

## High-signal findings

### H-001: TI-requested page text and NamingSystem operation updates are still absent

- Priority: P2
- Category: overlooked-problem
- Evidence: current source lines `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminology-module.html:25`, `:66-90`, `:130-164`; `FHIR-53785` (`https://jira.hl7.org/browse/FHIR-53785`); Confluence page `256510055` (`FHIR R6 Terminology Content Review`)
- Problem: `FHIR-53785` requests specific updates to the introduction, Operations heading, NamingSystem operation links (`$preferred-id`, `$translate-id`), common-use-case bullets, and roadmap lists. The current page still has the old intro, the generic `Operations` heading, no NamingSystem operation column, and the older use-case/roadmap wording.
- Why it matters: the terminology module landing page is a navigation and orientation page; it currently omits discoverable NamingSystem operations and does not reflect TI's later page-review wording.
- Recommended next step: resolve/apply or formally disposition `FHIR-53785`, including the NamingSystem operation links and section text changes.

### E-001: Terminology module diagram update request remains unapplied

- Priority: P2
- Category: editorial
- Evidence: current source line `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminology-module.html:29`; `FHIR-53820` (`https://jira.hl7.org/browse/FHIR-53820`); Confluence page `256510055`
- Problem: `FHIR-53820` asks to update the diagram labels/relationships, add TerminologyCapabilities and FHIR Terminology Service, make boxes linkable, add colors/legend, and remove outdated styling. The page still points at the existing `terminology-module-relationships.png` with no source-page changes.
- Why it matters: the diagram is the first conceptual model on the page and currently does not reflect the reviewed R6 terminology-module relationship model.
- Recommended next step: update the diagram asset/source and page linkage per `FHIR-53820`, or formally record why the diagram change is deferred.

### H-002: Removed operations now have an incubator home but no core-page pointer

- Priority: P2
- Category: overlooked-problem
- Evidence: removal commit `40306e5cd9c1b1e3eb6f115de16a8da3aa13a351`; PR `https://github.com/HL7/fhir/pull/3913`; current source lines `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminology-module.html:66-90`; Zulip `#terminology > Where is $find-matches`; incubator package `hl7.fhir.uv.txmodule-incubator#0.1.0`
- Problem: `$closure` and `$find-matches` were removed from the core page for R6 because they were not mature enough for normative status, but readers get no pointer to the Terminology Module Incubator now that its CI build exists.
- Why it matters: a later Zulip thread shows real reader confusion about where these operations went; the TI minutes also note concern that terminology material may be hard to find when scattered across IGs.
- Recommended next step: add or triage a short navigation note/link from the core terminology module or terminology service pages to the Terminology Module Incubator operation pages once the WG agrees on linking policy.

## Intent-vs-implementation mismatches

- `H-001` and `E-001` are unresolved TI-review/Jira requests, not applied changes that diverged from intent.
- No mismatch found for the actual `$closure`/`$find-matches` removal: PR `#3913`, later Zulip, and Confluence evidence consistently say the operations moved out of core because they were not ready for R6 normative status.

## Overlooked or newly noticed problems

- `H-002`: the incubator destination exists now, but this core landing page still gives no destination or explanation for removed operations.

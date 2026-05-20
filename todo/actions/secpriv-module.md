# secpriv-module actionable findings

## Summary

The page has 3 actionable findings: one substantive clarity issue around listing Permission after it was moved out of core, and two concrete reader-facing defects in current text.

## High-signal findings

### H-001: Permission is listed like a module resource after being moved out of core

- Priority: P2
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:40-55`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:488-498`, commit `0e2a8a7f839d5e1a43787523daccf07d958362f3`, Zulip `#fmg > Assessment of Resources for removal from R6`, Zulip `#Security and Privacy > Permission as additional resource`
- Problem: the current Normative module page lists `Permission` under the "Resources" column but links to a CI-build IG after core `source/permission/**` was removed. The page does not label Permission as an Additional Resource or work-in-progress, while the roadmap still says future releases will "develop" Permission.
- Why it matters: readers may infer Permission is a normative/core Security module resource in R6 ballot4, contrary to the later move-out-of-core/additional-resource handling.
- Recommended next step: label Permission explicitly as an Additional Resource/work in progress, move it out of the core resource list, or otherwise align the index/roadmap wording with the additional-resource decision and link to the most stable available target.

### E-001: `_revinclude` is misspelled as `_revinc`

- Priority: P2
- Category: editorial
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:201`; correct spelling nearby at `secpriv-module.html:334-336`
- Problem: the query-parameter example says `_revinc`, which is not the FHIR search parameter name.
- Why it matters: this is in authorization guidance and could mislead readers implementing or reviewing `_revinclude` access-control behavior.
- Recommended next step: change `_revinc` to `_revinclude`.

### E-002: OWASP paragraph renders with a missing space

- Priority: P3
- Category: rendering
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/secpriv-module.html:134`, `FHIR-34400`
- Problem: the paragraph renders as `OWASP Top Tenand OWASP mobile top 10`.
- Why it matters: it is a visible typo in a prominent security warning added by `FHIR-34400`.
- Recommended next step: insert a space after the OWASP Top Ten link.

## Intent-vs-implementation mismatches

H-001 is the only material potential mismatch found. The tracked Jira-backed text for access-token enforcement, signature-page migration, audit purging, de-identified profile constraints, and AuditEvent/Consent guidance appears consistent with the cited Jira resolutions.

## Overlooked or newly noticed problems

E-001 and E-002 are concrete current-page defects. Other minor typos exist, but they were not included because they are lower signal than the findings above.

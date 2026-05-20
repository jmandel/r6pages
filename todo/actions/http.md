# http actionable findings

## Summary

The page has 5 actionable findings. The main risk is that a few current R6 reader-facing statements are stale or internally inconsistent: the fhirVersion table still presents R5 as current, the summary table gives wrong conditional endpoint paths, and one Jira-approved capabilities sentence was only partially applied.

## High-signal findings

### H-001: R6 page still lists R5 as "this version" in the fhirVersion table

- Priority: P1
- Category: spec-problem
- Evidence: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/http.html:482-528`; especially line 514. Related Jira: `FHIR-31715`, `FHIR-35172`, `FHIR-47208`, `FHIR-47216`.
- Problem: the R6 ballot4 HTTP page's FHIR Version Parameter table stops at R5 and labels R5 as "this version"; no R6/6.0 row appears.
- Why it matters: this table defines values for the `fhirVersion` MIME-type parameter, so stale current-version guidance can mislead version negotiation and conformance documentation.
- Recommended next step: update the HTTP fhirVersion table for R6, or replace the hand-maintained list with a shared/generated version table so the HTTP page stays aligned with version-management pages.

### H-002: Summary table paths contradict conditional update and conditional patch definitions

- Priority: P1
- Category: spec-problem
- Evidence: body definitions at `source/http.html:851` and `source/http.html:981`; summary rows at `source/http.html:2469` and `source/http.html:2471`; `FHIR-49646`; commits `c2724e8a568d816e87921a1f278bb7e42f771d77` and `68075d29992110bcc0fa953b73b2390595467f1c`.
- Problem: the body defines conditional update/patch as `PUT/PATCH [base]/[type]?[search parameters]`, but the summary table says `update-conditional` and `patch-conditional` use `/[type]/[id]?`.
- Why it matters: endpoint shape is implementer-facing conformance guidance; including `[id]` changes the interaction from conditional-by-search to instance-targeted.
- Recommended next step: change both summary rows to `/[type]?` (or an equivalent notation with search parameters) and cross-check all conditional interaction rows against their body sections.

### H-003: FHIR-40496 capabilities wording was not fully applied

- Priority: P2
- Category: intent-mismatch
- Evidence: current source `source/http.html:1664-1672`; Jira `FHIR-40496` resolution says the 404 sentence should end "not supported on the nominated service URL"; commit `08e2ca9544ccdc4e19a042aa50bc35239a927da0`; Confluence page 288072268.
- Problem: the current page leaves the sentence dangling: "FHIR (or the specified version) is not supported on the".
- Why it matters: this is a visible incomplete normative-adjacent statement in the capabilities interaction, and it does not match the approved Jira resolution.
- Recommended next step: complete the sentence per the Jira resolution and verify the surrounding ETag/fhirVersion paragraph order still reads correctly.

### E-001: Several concrete markup/text defects remain in reader-facing examples and tables

- Priority: P3
- Category: rendering
- Evidence: `source/http.html:174` (`[base]/type]`), `source/http.html:358` (`RFC-7231 section 37.1.2` label for section 7.1.2 link), `source/http.html:1859` stray `:`, `source/http.html:2479-2480` nested/empty `<code>` tags, `source/http.html:2529` dagger marker outside the table cell.
- Problem: these are concrete source defects, not historical context: they either render oddly or show incorrect labels/examples.
- Why it matters: the HTTP page is normative and heavily used; small rendering/example defects reduce trust and can confuse readers around exact URL or RFC references.
- Recommended next step: fix these markup/text defects in one editorial pass and run the normal HTML/publisher QA used for the spec.

### E-002: Conditional create/delete fallback text names the wrong interaction

- Priority: P3
- Category: editorial
- Evidence: conditional delete text at `source/http.html:1148-1150`; conditional create text at `source/http.html:1360-1362`.
- Problem: both sections say servers that do not support "the conditional update" should return 400, even though the sections are about conditional delete and conditional create.
- Why it matters: it is copy-paste wording in conformance-adjacent guidance and can make readers wonder whether the fallback rule applies to the interaction being described.
- Recommended next step: change the copied phrase to "conditional delete" and "conditional create" respectively, or use a generic "the conditional interaction" phrase consistently.

## Intent-vs-implementation mismatches

- `H-002`: `FHIR-49646` and the current body text identify the conditional patch URL as `[base]/[type]?[search parameters]`, but the summary table still shows `/[type]/[id]?`.
- `H-003`: `FHIR-40496`'s approved sentence was not fully applied; the current capabilities paragraph is incomplete.

## Overlooked or newly noticed problems

- `H-001`: the R6 HTTP page still has an R5-only fhirVersion table.
- `E-001`: concrete rendering/text defects in examples and summary tables.
- `E-002`: copied conditional-create/delete text still says "conditional update."

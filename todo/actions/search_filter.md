# search_filter actionable findings

## Summary

The page has 5 actionable findings. The most significant risks are: (1) a dangling "see below" cross-reference left after FHIR-38031 removed the section it points to, making two `Observation: related[...]` examples unexplained; (2) a capitalization inconsistency in the formal grammar (`DateChar` vs `dateChar`) that makes the grammar formally incorrect; (3) two operators (`ap`, `ni`) listed in the summary table but absent from the detailed type-by-parameter matrix; and (4) an inconsistent capitalization of operator `co` → `Co` in the type matrix. The normative promotion has no traced Jira issue but that is an evidence-gap finding, not necessarily a content error.

## High-signal findings

### H-001: Dangling "see below" cross-reference after section removal
- **Priority:** High
- **Category:** Internal inconsistency / editorial defect (normative page)
- **Evidence:** FHIR-38031 (commit `60a800ba`, 2022-08-29) removed the "Additional Parameters" section that defined `related`, `characteristic`, `relatesTo`, and service-related parameters. The two examples that use `Observation: related[type eq "has-component"]` and `Observation: related[type eq has-component]` were not removed. The first example explicitly says "(note: this uses one of the search parameters defined for this mechanism, see below)" — but there is no longer anything below.
- **Problem:** A reader following "see below" will find no such definition. The `related` search parameter was part of the deleted table; there is no standard Observation search parameter called `related` in R6. The examples may confuse implementers about what search parameters are valid in `_filter`.
- **Why it matters:** This is on a Normative page. The dangling cross-reference makes the normative content self-contradictory and may mislead implementers into trying to use a search parameter that no longer exists.
- **Recommended next step:** Either (a) remove or replace both `related[...]` examples with current Observation-based examples (e.g., using `component-code`), or (b) add a brief inline note explaining that `related` is retained for illustrative purposes only and does not reflect a current standard search parameter. File a Jira issue against FHIR-core-search / fhir-i WG.

### H-002: `DateChar` vs `dateChar` inconsistency in formal grammar (now Normative)
- **Priority:** High
- **Category:** Internal inconsistency / normative content defect
- **Evidence:** Observed in full page review of R6 ballot4 source. No commit introduced this inconsistency; it predates the range under review. Not covered by any found Jira issue.
- **Problem:** The grammar rule `numberOrDate = DIGIT (DateChar)*` references the production `DateChar` (capital D), but the corresponding rule is defined as `dateChar` (lowercase d). In ABNF/EBNF, rule names are case-insensitive by IETF convention but the inconsistency is visually confusing and misleading; in some grammar formalisms it would mean `DateChar` is undefined.
- **Why it matters:** This page is now Normative. An implementer deriving a parser from the formal grammar may be confused. It should be consistent.
- **Recommended next step:** Change `numberOrDate = DIGIT (DateChar)*` to `numberOrDate = DIGIT (dateChar)*` (lowercase). File as Technical Correction.

### H-003: Operators `ap` and `ni` appear in summary table but not in type-by-parameter matrix
- **Priority:** Medium
- **Category:** Internal inconsistency / normative content gap
- **Evidence:** Observed in full page review. The summary operators table includes `ap` (approximately equal) and `ni` (not in value set). The detailed type×parameter matrix lists rows for: eq, ne, Co (co), sw, ew, gt/lt/ge/le, pr, po, ss, sb, in, re — but `ap` and `ni` are absent.
- **Problem:** Readers cannot determine how `ap` and `ni` interact with string, number, date, token, reference, and quantity parameter types. For a Normative page this is a substantive gap.
- **Why it matters:** Conformance testing and implementation cannot be complete without knowing the type behaviour of all operators.
- **Recommended next step:** Add rows for `ap` and `ni` to the type-by-parameter matrix. `ap` applies to number, date, and quantity; `ni` applies to token (inverse of `in`). File as Jira clarification against FHIR-core-search.

### E-001: `Co` capitalization inconsistency in type-by-parameter matrix
- **Priority:** Low
- **Category:** Editorial / rendering defect
- **Evidence:** Observed in full page review. Summary operators table uses `co` (lowercase). The type-by-parameter matrix table uses `Co` (capital C) in the `<td>` cell for the same operator.
- **Problem:** Inconsistent capitalization of the same operator name within the same page. A reader scanning for `co` in the matrix table will find `Co` instead.
- **Recommended next step:** Change `<td>Co</td>` to `<td>co</td>` in the type-by-parameter matrix. Technical correction.

### G-001: No Jira issue found for normative promotion of `_filter`
- **Priority:** Medium
- **Category:** Evidence gap
- **Evidence:** Commit `270e0ceb` (2025-10-31) changed the page from Trial Use (FMM 2) to Normative via a generic "normative changes for R6" commit. No Jira issue was found through FTS searches on "_filter normative", "_filter parameter normative", or "search_filter normative". No Confluence WGM minutes were found discussing this specific promotion. The `_filter` feature has historically had low implementation breadth (noted in Zulip), which raises a question about readiness for Normative.
- **Problem:** The normative promotion was not traced to a formal WG vote or Jira decision in available records. If the promotion was deliberate and voted on, evidence is not surfaced. If it was a bulk "sweep" commit without individual WG review for this page, that may warrant verification.
- **Why it matters:** Promoting an underspecified/underimplemented feature to Normative without traceable decision creates risk of binding the spec to incomplete or ambiguous content.
- **Recommended next step:** Verify with FHIR-I WG whether a specific Jira issue or WGM vote covered the `_filter` Normative promotion. If none exists, consider filing a tracker issue to document the decision rationale.

## Intent-vs-implementation mismatches

FHIR-45306 resolved "Persuasive with Modification": the resolution says "will leave the first [subject] example as is and will change the other two." The applied commit (`1d29a98d`) changed `subject.name` → `patient.name` and `subject.id` → `patient.id` in the two examples. The first example in the list (`Observation: code eq http://loinc.org|1234-5`) has no subject/patient reference and was correctly left unchanged. The two `related` examples (items 5 and 6) were also left unchanged — consistent with the resolution's intention to leave examples using `related` (which is a separate issue — see H-001). Implementation appears consistent with stated intent.

## Overlooked or newly noticed problems

The `logExp` grammar rule reads:
```
logExp = filter ("and" / "or" filter)+
```
In standard ABNF, `/` has lower precedence than concatenation, so this parses as `filter ("and" / ("or" filter))+`, meaning the `filter` token is only grouped with `"or"` but not with `"and"`. The intent is clearly `filter (("and" / "or") filter)+`. This is a latent grammar ambiguity that predates the revision range but remains in the Normative text and could cause parser implementers to misread the grammar.

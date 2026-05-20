# conformance-module research appendix

## Scope and coverage

- Page path: `source/conformance-module.html`
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: page exists in both trees. Old source has 190 lines; new source has 192 lines.
- Full newer page read end-to-end: yes, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-module.html:1-192`.
- Page-specific source history between the two commits: 8 commits. Explicit Jira keys found in page-touching commit subjects: `FHIR-24868`, `FHIR-25431`, `FHIR-39179`, `FHIR-44047`.
- Additional plausible Jira found by exact changed/broken-link phrase search: `FHIR-54250` ("Link to GraphDefinition does not resolve"), filed against the same broken GraphDefinition target used by this page.
- Jira/Zulip/Confluence searches performed: explicit Jira snapshots, key searches, and phrase searches for changed roadmap/API Incubator/capability wording. See Evidence log.
- Caveats: no PR number was found from local merge history or bounded `gh search prs` searches. Zulip FTS searches for unquoted Jira keys failed because hyphenated keys are parsed as FTS operators; a SQL `LIKE` retry found no key mentions. Some Confluence snapshots have long normalized single-line text, so page IDs/URLs are more useful locators than line numbers.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New R6 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-module.html:17` | Current metadata row shows "Responsible Owner: Work Group". |
| Source | IG definition | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-module.html:78-82` | Implements `FHIR-24868` broadening who publishes Implementation Guides. |
| Source | CapabilityStatement grammar | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-module.html:83-85` | Current reader-facing typo: "A capability statements use". |
| Source | Datatype spelling | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-module.html:99-104` | Page-level effect of `FHIR-25431` spelling cleanup. |
| Source | Security expression wording | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-module.html:132-134` | Page-level `xpath` -> `FHIRPath` wording change. |
| Source | R6 developmental roadmap | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-module.html:165-187` | Main substantive R4-to-R6 page change. |
| Source | Broken GraphDefinition link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-module.html:186-187` | Current page links to `http://build.fhir.org/HL7/api-incubator/StructureDefinition-GraphDefinition`, which returns 404. |
| Commit | Template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removed wrapping `div`; mechanical/template. |
| Commit | `FHIR-24868` | `dc9ec0ba14b6f966b510248298d0256240a570a5`, https://github.com/HL7/fhir/commit/dc9ec0ba14b6f966b510248298d0256240a570a5 | Reworded Implementation Guide definition. |
| Commit | `FHIR-25431` | `8592e1207273b786db340efb927bb6d1dc9756c9`, https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9 | Spelling cleanup around `Datatype`/`datatypes`. |
| Commit | `FHIR-39179` | `11f4c1fd05211a19f6a4c7e1be88c5c992474204`, https://github.com/HL7/fhir/commit/11f4c1fd05211a19f6a4c7e1be88c5c992474204 | This page changed `xpath` to `FHIRPath`; Jira itself is about FHIRPath `as` vs `is`, so treat as a broad cleanup commit rather than page-specific rationale. |
| Commit | 2023 roadmap update | `0b361f316d50a2c68fb7bdf55f7e8b59f937832c`, https://github.com/HL7/fhir/commit/0b361f316d50a2c68fb7bdf55f7e8b59f937832c | First major rewrite of this page's roadmap after R4. |
| Commit | R6 normative changes | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Introduced "normative/stable" R6 roadmap wording and API Incubator link. |
| Commit | Roadmap rewrite | `919661a0ea21be798462b8be2709e69239aaa17f`, https://github.com/HL7/fhir/commit/919661a0ea21be798462b8be2709e69239aaa17f | Replaced the more categorical "no further changes" wording with "maintenance mode" after Zulip discussion. |
| Commit | `FHIR-44047` punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Corrected `i.e.` punctuation on this page. |
| Jira | `FHIR-24868` | https://jira.hl7.org/browse/FHIR-24868; `bun run jira:search snapshot FHIR-24868` | Formal resolution exactly matches IG definition expansion. |
| Jira | `FHIR-25431` | https://jira.hl7.org/browse/FHIR-25431; `bun run jira:search snapshot FHIR-25431` | Formal spelling cleanup issue. |
| Jira | `FHIR-39179` | https://jira.hl7.org/browse/FHIR-39179; `bun run jira:search snapshot FHIR-39179` | Commit subject key, but not page-specific for the exact `xpath` -> `FHIRPath` change. |
| Jira | `FHIR-44047` | https://jira.hl7.org/browse/FHIR-44047; `bun run jira:search snapshot FHIR-44047` | Broad `e.g.,`/`i.e.,` punctuation issue; still Jira status "Resolved - change required". |
| Jira | `FHIR-54250` | https://jira.hl7.org/browse/FHIR-54250; `bun run jira:search snapshot FHIR-54250` | R6 issue says the same GraphDefinition URL resolves to 404, though filed against `compartmentdefinition.html`. |
| Zulip | Conformance Module | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Conformance%20Module; `bun run zulip:search snapshot fhir/infrastructure-wg "Conformance Module"` | Direct rationale/disagreement for the R6 roadmap wording. |
| Zulip | Additional Resources | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Additional%20Resources; `bun run zulip:search snapshot fhir/infrastructure-wg "Additional Resources"` | Explains GraphDefinition/API Incubator and capability/helper IG migration context. |
| Confluence | `FHIR-25431` minutes | Page `66940491`, https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113 | Workgroup minutes mention `FHIR-25431` as auto-approved spelling cleanup. |
| Confluence | `FHIR-39179` minutes | Page `144973115`, https://confluence.hl7.org/spaces/FHIRI/pages/144973115/FHIR+Infrastructure+Minutes+CC+2022-11-14 | Workgroup minutes record `FHIR-39179` persuasive vote. |
| Confluence | `FHIR-44047` minutes | Page `234784975`, https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas | Minutes say `FHIR-44047` "will fix". |
| Confluence | API Incubator approval | Page `389679504`, https://confluence.hl7.org/spaces/FHIRI/pages/389679504/FHIR+Infrastructure+Minutes+CC+2025-09-22 | FHIR-I approved moving GraphDefinition-related material to an R6 API Incubator IG and capability helpers to the capstmt IG. |
| Confluence | Additional Resources/FM G context | Page `391643151`, https://confluence.hl7.org/spaces/FMG/pages/391643151/2025-09-24+FMG+Agenda+Minutes | FMG discussion: FHIR-I will create API Incubator/Testing/etc.; Additional Resources may be absent until WGs create IGs. |

## Change summary

### Page shell and metadata/template

- Mechanical/noise: `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the outer `<div class="col-12">` wrapper and matching closing `</div>`.
- Metadata/template/navigation: `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the page banner from "Work Group" to "Responsible Owner: Work Group" at current line 17. A Jira search for `"Responsible Owner" "Work Group"` found `FHIR-55949`, but that issue concerns Device workgroup naming and is context-only for this page.

### Implementation Guide definition

- Semantic guidance, non-substantive: `dc9ec0ba14b6f966b510248298d0256240a570a5` changed "domain, institution or vendor" to "domain, institution, vendor, consortium, or other organization" at current lines 78-82.
- Jira `FHIR-24868` exactly requested this expansion because public health authorities, governments, Argonauts, Da Vinci, Gravity, and CARIN do not fit the older "domain, institution or vendor" wording. Resolution: "Expand the list to include 'domain, institution, vendor, consortium, or other organization.'"
- No actionable mismatch found.

### Terminology and expression-language wording

- Editorial/terminology: `8592e1207273b786db340efb927bb6d1dc9756c9` changed "Data Type"/"data types" to "Datatype"/"datatypes" in the StructureDefinition description at current lines 99-104. Jira `FHIR-25431` is the explicit issue; Confluence page `66940491` records the workgroup's auto-approval of a spelling cleanup.
- Semantic/editorial: `11f4c1fd05211a19f6a4c7e1be88c5c992474204` changed the security section's example expression engine from `xpath` to `FHIRPath` at current lines 132-134. The commit subject references `FHIR-39179`, but the Jira issue itself is about using FHIRPath `as` rather than `is` in StructureDefinition interpretation notes; the page-level change should be treated as a broad FHIRPath cleanup rather than a directly evidenced page-specific ballot resolution.
- Editorial: `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` added commas after `i.e.` at current lines 83-85 and 132-134. Jira `FHIR-44047` requested broad `e.g.,`/`i.e.,` punctuation review. Confluence page `234784975` records "will fix". Jira status remains "Resolved - change required", so do not overinterpret Jira workflow state as proof all punctuation work is complete.

### Developmental roadmap / R6 resource maturity guidance

- Substantive/semantic guidance: the R4 roadmap paragraph and trial-use list were replaced with an R6 maintenance/API Incubator roadmap at current lines 168-187.
- `0b361f316d50a2c68fb7bdf55f7e8b59f937832c` first replaced the older R4 text with resource-by-resource maturity statements.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the roadmap into a more categorical R6 version: StructureDefinition, OperationDefinition, CapabilityStatement, SearchParameter, ImplementationGuide, and CompartmentDefinition were called "normative, and stable" with "no further changes to scope or the existing content" planned; StructureMap and MessageDefinition were listed separately as stable but more likely to attract scope/features/data elements; GraphDefinition was moved to API Incubator.
- Zulip thread `#fhir/infrastructure-wg > Conformance Module` records Lloyd McKenzie's objection that this differentiated wording could mislead readers into thinking additions/scope increases cannot happen for the first group. Grahame said he was rewriting existing text and did not mind changing it.
- `919661a0ea21be798462b8be2709e69239aaa17f` implemented that correction: the current page now says "Ongoing feedback is welcome", lists the resources as "in maintenance mode", adds MessageDefinition and StructureMap to the same maintenance-mode list, and leaves GraphDefinition as the only resource explicitly still subject to additional change in API Incubator.
- Confluence page `389679504` (FHIR-I 2025-09-22) and Zulip `Additional Resources` give process context: GraphDefinition-related material was intended for an R6 API Incubator IG; capability-related helpers/subset page were intended for the FHIR Application Feature Framework/CapabilityStatement IG.
- Confluence page `391643151` (FMG 2025-09-24) adds governance/process context: FHIR-I agreed to create an API Incubator IG, Testing IG, and other homes for Additional Resources; content might be gone until work groups create the IGs.
- Actionable defect: the current page's GraphDefinition/API Incubator link is a 404, and `FHIR-54250` already reports the same target as broken from another R6 page.

### Current full-page read observations

- Current line 83 still says "A capability statements use"; this is a visible grammar defect unrelated to the main R4-to-R6 semantic changes.
- Current line 187 links to `http://build.fhir.org/HL7/api-incubator/StructureDefinition-GraphDefinition`; `curl -L -I` returned 404 for the `http` and `https` forms. A guessed `https://build.fhir.org/ig/HL7/api-incubator/StructureDefinition-GraphDefinition.html` also returned 404, so no replacement target was confirmed in this bounded review.

## Source history

| Commit | Date | Subject | Page effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Removed outer `div.col-12` wrapper. | Mechanical/template |
| `dc9ec0ba14b6f966b510248298d0256240a570a5` | 2022-08-27 | `FHIR-24868` Definition of Implementation Guide in one part of spec seems a bit off - recommend rewording | Expanded who may publish Implementation Guides. | Semantic guidance; Jira-backed |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | `FHIR-25431` Inconsistent use of "datatype" vs. "data type" | Spelling cleanup in StructureDefinition bullets. | Editorial terminology |
| `11f4c1fd05211a19f6a4c7e1be88c5c992474204` | 2022-12-07 | `FHIR-39179` FHIRPath should use "as" to select type (not "is") | Changed security example from `xpath` to `FHIRPath`. | Broad cleanup; weak page-specific Jira linkage |
| `0b361f316d50a2c68fb7bdf55f7e8b59f937832c` | 2023-03-09 | update roadmaps | Replaced R4 developmental roadmap with resource-specific stability/trial-use statements. | Semantic roadmap update |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Changed owner label and roadmap; introduced API Incubator link. | R6 roadmap/status guidance |
| `919661a0ea21be798462b8be2709e69239aaa17f` | 2025-11-02 | rewrite based on experience | Rewrote roadmap to "maintenance mode" after Zulip concern. | R6 roadmap/status guidance |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Added commas after `i.e.`. | Editorial punctuation |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-24868` (Published, Persuasive, Applied for R5): exact match for the Implementation Guide definition change. No comments. Related URL is `http://hl7.org/fhir/conformance-module.html`; related page is `FHIR-core-conformance-module`.
- `FHIR-25431` (Published, Persuasive, Applied for R5): broad spelling issue for "datatype" vs "data type". Confluence minutes `66940491` mention auto-approval. The page patch is a spelling cleanup, but the terse minutes are not enough to elevate any mismatch claim.
- `FHIR-39179` (Published, Persuasive, R5 ballot): formal issue is about FHIRPath `as` vs `is` in StructureDefinition interpretation notes. The page patch changes `xpath` to `FHIRPath`; this is likely adjacent cleanup in the same commit, not direct page-specific rationale.
- `FHIR-44047` (Resolved - change required, Persuasive, R6 ballot): broad punctuation cleanup for `e.g.,` and `i.e.,`; this page received two comma additions. Confluence minutes `234784975` say "will fix". Status being not Applied/Published is a workflow caveat, not a page issue by itself.

### Other Jira issues that plausibly explain or affect current page text

- `FHIR-54250` (Triaged, unresolved, created 2026-01-14): "Link to GraphDefinition does not resolve." The issue cites R6 ballot4 `compartmentdefinition.html` and says the GraphDefinition link resolves to `https://build.fhir.org/HL7/api-incubator/StructureDefinition-GraphDefinition` with a 404. The same target appears in current `conformance-module.html:187`. This is actionable for this page even though the Jira issue's related artifact is CompartmentDefinition.

### Context-only Jira hits not used for action

- `FHIR-55949` appeared in a search for `"Responsible Owner" "Work Group"` but concerns Devices workgroup naming, not this page.
- Jira searches for `"maintenance mode" conformance`, `"additional declaration of capabilities"`, and `"conformance module" roadmap` found no directly relevant Jira issues.

## Zulip evidence

- `#fhir/infrastructure-wg > Conformance Module` (2025-10-31 to 2025-11-01), snapshot command `bun run zulip:search snapshot fhir/infrastructure-wg "Conformance Module"`:
  - Grahame pasted Lloyd McKenzie's objection to the categorical R6 roadmap wording.
  - Lloyd said differentiating resources could mislead people to believe additions/scope increases "can't" happen for the first group.
  - Grahame said he was rewriting existing text and did not mind changing it.
  - This thread explains why commit `919661a0...` softened the roadmap to "Ongoing feedback is welcome" and "maintenance mode".
- `#fhir/infrastructure-wg > Additional Resources` (2025-09-24), snapshot command `bun run zulip:search snapshot fhir/infrastructure-wg "Additional Resources"`:
  - Josh Mandel summarized R6 Additional Resources: evolving material should be in IG packages rather than unstable core; GraphDefinition and `$graph` go to API Incubator; capability helpers go to Feature Capabilities/CapabilityStatement IG.
  - This supports the page's direction that GraphDefinition is outside core/API Incubator, but not the broken URL itself.
- Zulip key search caveat: direct FTS searches for unquoted `FHIR-24868`, `FHIR-25431`, `FHIR-39179`, `FHIR-44047`, and `FHIR-54250` failed because FTS parsed the hyphenated issue keys as operators. A SQL `LIKE` retry across message content found no key mentions for those keys.

## Confluence evidence

- Page `66940491`, FHIR Infrastructure Minutes CC 20200113: references `FHIR-25431` and records "Lloyd: Using 'data type' Will auto approve" amid tracker triage. Useful as process evidence for the spelling cleanup, but too terse to treat as a page-specific mismatch.
- Page `144973115`, FHIR Infrastructure Minutes CC 2022-11-14: references `FHIR-39179` and records it as persuasive with vote `Grahame Grieve / Richard Ettema: 8-0-0`.
- Page `234784975`, FHIR Infrastructure Minutes WGM 202405 - Dallas: references `FHIR-44047` and says "will fix" in a block vote/minutes context.
- Page `389679504`, FHIR Infrastructure Minutes CC 2025-09-22: FHIR-I approved the Additional Resources destination plan. It specifically lists GraphDefinition-related resources/operations moving to an R6 "API Incubator" IG and capability-related items moving to `https://build.fhir.org/ig/HL7/capstmt/`.
- Page `391643151`, FMG Agenda/Minutes 2025-09-24: FMG discussed Additional Resources. Grahame said FHIR-I agreed to create API Incubator and Testing IGs; the minutes note Additional Resources may be gone until the WG creates the IG. This helps explain why a ballot4 page can point to a not-yet-stable destination, but it does not excuse a 404 link.

## Timeline

| Date | Clock | Evidence |
|---:|---|---|
| 2019-09-27 | Jira created | `FHIR-24868` filed about the Implementation Guide definition. |
| 2019-10-21 | Jira resolved/voted | `FHIR-24868` resolved Persuasive; vote `Grahame Grieve/Bryn Rhodes: 8-0-0`. |
| 2020-01-09 | Jira created | `FHIR-25431` filed about `datatype` vs `data type`. |
| 2020-01-13 | WG minutes | Confluence `66940491` mentions `FHIR-25431` auto-approval. |
| 2021-06-27 | Source commit | `d7b8dadc...` template update. |
| 2022-08-27 | Source commit | `dc9ec0ba...` applies `FHIR-24868` wording to this page. |
| 2022-08-31 | Source commit | `8592e120...` applies spelling cleanup to this page. |
| 2022-11-14 | WG minutes/Jira vote | Confluence `144973115` records `FHIR-39179` persuasive vote. |
| 2022-12-07 | Source commit | `11f4c1fd...` changes this page's security example from XPath to FHIRPath. |
| 2023-03-09 | Source commit | `0b361f31...` rewrites roadmap after R4. |
| 2024-05-23 | WG/Jira resolution | `FHIR-44047` resolved; Confluence WGM page says "will fix". |
| 2025-09-22 | WG decision/process | Confluence `389679504` approves Additional Resources destinations including GraphDefinition/API Incubator. |
| 2025-09-24 | FMG process | Confluence `391643151` discusses API Incubator/Additional Resources process. |
| 2025-09-24 | Zulip context | `Additional Resources` thread summarizes the migration plan. |
| 2025-10-31 | Source commit/discussion | `270e0ceb...` introduces categorical R6 roadmap; Zulip `Conformance Module` discusses Lloyd's concern. |
| 2025-11-02 | Source commit | `919661a0...` softens roadmap to current "maintenance mode" wording. |
| 2025-11-03 | Source commit | `887bc238...` applies `FHIR-44047` punctuation on this page. |
| 2026-01-14 | Jira created | `FHIR-54250` reports the same GraphDefinition/API Incubator target is a 404 from an R6 ballot4 page. |

## Evidence log

- Boundary and line counts:
  - `test -f .../4.0.1-0da2a0a84dc1/source/conformance-module.html`
  - `test -f .../6.0.0-ballot4-5d67a34a13a5/source/conformance-module.html`
  - `wc -l` returned 190 old lines and 192 new lines.
- Direct diff:
  - `git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26" "5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/conformance-module.html"`
  - Established a 104-line patch, mostly IG definition, terminology/punctuation, and roadmap replacement.
- Source history:
  - `git ... log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1..5d67a34a13a5 -- source/conformance-module.html`
  - Established 8 page-touching commits.
  - `git ... show --stat --patch <COMMIT> -- source/conformance-module.html` for all 8 commits.
- Jira:
  - Snapshotted `FHIR-24868`, `FHIR-25431`, `FHIR-39179`, `FHIR-44047`, `FHIR-54250`.
  - Phrase searches: `"maintenance mode" conformance` (none), `"GraphDefinition" "API Incubator"` (`FHIR-54250`), `"additional declaration of capabilities"` (none), `"conformance module" roadmap` (none), `"Responsible Owner" "Work Group"` (`FHIR-55949`, context-only).
- Zulip:
  - FTS key searches failed on hyphenated keys; SQL `LIKE` retry found no key mentions.
  - Phrase searches found `#fhir/infrastructure-wg > Conformance Module` and `#fhir/infrastructure-wg > Additional Resources`; both were snapshotted.
- Confluence:
  - `refs jira`/`fts` for explicit keys found pages `66940491`, `144973115`, and `234784975`.
  - Phrase searches for `"GraphDefinition" "API Incubator"` found pages `389679504`, `391643151`, and `358879917`; `389679504` and `391643151` provided the clearest process evidence.
- Link probe:
  - `curl -L -I --max-time 20` returned 404 for `http://build.fhir.org/HL7/api-incubator/StructureDefinition-GraphDefinition`, `https://build.fhir.org/HL7/api-incubator/StructureDefinition-GraphDefinition`, and guessed `https://build.fhir.org/ig/HL7/api-incubator/StructureDefinition-GraphDefinition.html`.

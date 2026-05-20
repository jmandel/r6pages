# conformance-rules research appendix

## Scope and coverage

- Page path: `source/conformance-rules.html`
- Older version/source: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- Newer version/source: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: page exists in both trees. Old file has 372 lines; new file has 383 lines.
- Newer page was read end-to-end (`source/conformance-rules.html:1-383`).
- Direct diff: 77 insertions, 66 deletions. Most changes are targeted conformance guidance, examples, constraint metadata, and template/editorial cleanup.
- Source history: 20 commits touched this page between the two commits.
- Explicit page-specific Jira keys found from commits/history and snapshotted: FHIR-19568, FHIR-19570, FHIR-19571, FHIR-19575, FHIR-20500, FHIR-21644, FHIR-22635, FHIR-25431, FHIR-27144, FHIR-37692, FHIR-39179, FHIR-40296, FHIR-44047, FHIR-48885.
- Broad `ec83d5b...` commit listed many MnM non-substantive keys; phrase search tied this page's added parent/child cardinality sentence specifically to FHIR-21644.
- Jira/Zulip/Confluence searches were performed by explicit keys and distinctive changed phrases. Unquoted Zulip issue-key searches failed because FTS parsed hyphenated keys; they were re-run with quoted keys.
- Caveat: no PR numbers were found in the local commit/Jira/Zulip/Confluence evidence reviewed.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New page, conformance claim | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-rules.html:74-79` | CapabilityStatement conformance language from FHIR-19575; includes `absense` typo. |
| Source | New page, RFC 8174 | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-rules.html:82-90` | R6 conformance-verb wording changed by FHIR-48885. |
| Source | New page, cardinality | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-rules.html:118-136` | Empty values, non-whitespace values, and required-parent/all-optional-children clarification; includes `mimimum` typo. |
| Source | New page, is-modifier examples | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-rules.html:179-207` | Clarifies modifier/non-modifier examples. |
| Source | New page, is-modifier processing | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-rules.html:249-263` | Corrects obsolete Observation.reliability example to Observation.status/final. |
| Source | New page, MustSupport/obligations | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-rules.html:282-299` | R5/R6 replacement of old MustSupport guidance with obligations/application roles text; includes `base application` wording concern. |
| Source | New page, constraints metadata | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conformance-rules.html:302-350` | Adds Suppress and Source, removes XPath, adds constraint-key uniqueness language; includes `Allows for suppress warnings`. |
| Source | Related obligations page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/obligations.html:27-32` | Similar obligations wording has the same `base application` phrase and older `applications obligations` typo. |
| Commit | Parent/child cardinality sentence | `ec83d5b5057f1402bdeb77453f5d214806de6b8c`, https://github.com/HL7/fhir/commit/ec83d5b5057f1402bdeb77453f5d214806de6b8c | Adds the required-parent/all-optional-children clarification; phrase search maps it to FHIR-21644. |
| Commit | Empty values and is-modifier cleanup | `44ad3ffcf04a71a9affa02374a8596ac9ade7bfa`, https://github.com/HL7/fhir/commit/44ad3ffcf04a71a9affa02374a8596ac9ade7bfa | Applies FHIR-19568, FHIR-19570, FHIR-19571 to this page. |
| Commit | Is-modifier examples | `a9713d220c784b78b225c88f407e2f5706524567`, https://github.com/HL7/fhir/commit/a9713d220c784b78b225c88f407e2f5706524567 | Applies FHIR-22635. |
| Commit | FHIR-37692 constraint keys | `39122085c8ac5594f8421a1ec1902e20b8bf6832`, https://github.com/HL7/fhir/commit/39122085c8ac5594f8421a1ec1902e20b8bf6832 | Adds Source property and constraint-key uniqueness paragraph. |
| Commit | CapabilityStatement conformance | `8c2e1da030578313093b7b0267c6e9953e257156`, https://github.com/HL7/fhir/commit/8c2e1da030578313093b7b0267c6e9953e257156 | Applies FHIR-19575. |
| Commit | Suppress property | `d92793b398246ecee92d54bbff49bfac2e34c0d0`, https://github.com/HL7/fhir/commit/d92793b398246ecee92d54bbff49bfac2e34c0d0 | Applies FHIR-20500 row to constraints table. |
| Commit | Obligations rewrite | `1e1665b9352f33a691326fdf3079bc19865a8681`, https://github.com/HL7/fhir/commit/1e1665b9352f33a691326fdf3079bc19865a8681 | Replaces MustSupport section with obligations/application roles guidance. |
| Commit | XPath removal | `11f4c1fd05211a19f6a4c7e1be88c5c992474204`, https://github.com/HL7/fhir/commit/11f4c1fd05211a19f6a4c7e1be88c5c992474204 | Removes XPath property row under FHIR-39179. |
| Commit | Obligation extension | `fa3b0bac14ef36316b1359d43a8d847291ff42ad`, https://github.com/HL7/fhir/commit/fa3b0bac14ef36316b1359d43a8d847291ff42ad | Changes obligation from ElementDefinition feature to extension. |
| Commit | Required binding wording in example table | `0bb0f8f90b14445eec59ccc75f619173c35c0ddf`, https://github.com/HL7/fhir/commit/0bb0f8f90b14445eec59ccc75f619173c35c0ddf | Updates required-binding title text in the embedded example table per FHIR-27144. |
| Commit | RFC 8174 wording | `bf998a18b975a1d3dc8f9a3261a43f08a038815d`, https://github.com/HL7/fhir/commit/bf998a18b975a1d3dc8f9a3261a43f08a038815d | Applies FHIR-48885. |
| Commit | e.g. punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Applies FHIR-44047 punctuation cleanup to this page. |
| Jira | FHIR-19568 | https://jira.hl7.org/browse/FHIR-19568; local snapshot command `bun run jira:search snapshot FHIR-19568` | Empty value attribute/property clarification. |
| Jira | FHIR-19570 | https://jira.hl7.org/browse/FHIR-19570; local snapshot command `bun run jira:search snapshot FHIR-19570` | Removes distracting word `valid` from cardinality sentence. |
| Jira | FHIR-19571 | https://jira.hl7.org/browse/FHIR-19571; local snapshot command `bun run jira:search snapshot FHIR-19571` | Updates obsolete Observation.reliability example. |
| Jira | FHIR-19575 | https://jira.hl7.org/browse/FHIR-19575; local snapshot command `bun run jira:search snapshot FHIR-19575` | CapabilityStatement required/meaningful conformance text. |
| Jira | FHIR-21644 | https://jira.hl7.org/browse/FHIR-21644; local snapshot command `bun run jira:search snapshot FHIR-21644` | Required parent with all optional children clarification and source of `mimimum` typo. |
| Jira | FHIR-22635 | https://jira.hl7.org/browse/FHIR-22635; local snapshot command `bun run jira:search snapshot FHIR-22635` | Clarifies Observation.status and Observation.subject modifier examples. |
| Jira | FHIR-37692 | https://jira.hl7.org/browse/FHIR-37692; local snapshot command `bun run jira:search snapshot FHIR-37692` | Constraint-key uniqueness decision; possible wording mismatch with current page. |
| Jira | FHIR-40296 | https://jira.hl7.org/browse/FHIR-40296; local snapshot command `bun run jira:search snapshot FHIR-40296` | Obligation should be an extension. |
| Jira | FHIR-48885 | https://jira.hl7.org/browse/FHIR-48885; local snapshot command `bun run jira:search snapshot FHIR-48885` | RFC 8174 clarification. |
| Zulip | FHIR-37692 thread | `#fhir/infrastructure-wg > FHIR-37692`, https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/FHIR-37692; local snapshot command `bun run zulip:search snapshot "fhir/infrastructure-wg" "FHIR-37692"` | Discusses why uniqueness is hard with slicing and why explicit spec declaration was needed. |
| Zulip | Constraint-key background | `#conformance > Uniqueness of constraint keys`, https://chat.fhir.org/#narrow/stream/conformance/topic/Uniqueness%20of%20constraint%20keys; local snapshot command `bun run zulip:search snapshot conformance "Uniqueness of constraint keys"` | Earlier discussion that key uniqueness was effectively only per ElementDefinition, not globally or per StructureDefinition. |
| Zulip | Obligation extension | `#conformance > Moving Obligation to be an extension`, https://chat.fhir.org/#narrow/stream/conformance/topic/Moving%20Obligation%20to%20be%20an%20extension; local snapshot command `bun run zulip:search snapshot conformance "Moving Obligation to be an extension"` | Informal rationale for FHIR-40296. |
| Confluence | FHIR-37692 July vote | Page 134939013, https://confluence.hl7.org/spaces/FHIRI/pages/134939013/FHIR+Infrastructure+Minutes+CC+2022-07-11 | Initial Persuasive-with-Mod vote for FHIR-37692. |
| Confluence | FHIR-37692 reopened/final vote | Page 108303407, https://confluence.hl7.org/spaces/FHIRI/pages/108303407/FHIR+Infrastructure+Minutes+CC+2022-08-22 | Reopen and Persuasive-with-Mod vote for FHIR-37692. |
| Confluence | FHIR-40296 vote | Page 156533817, https://confluence.hl7.org/spaces/FHIRI/pages/156533817/FHIR+Infrastructure+Minutes+CC+2023-02-06 | Notes concern about R6/R7 balloting timeline and votes persuasive. |
| Confluence | FHIR-27144 Sept WGM | Page 104765403, https://confluence.hl7.org/spaces/VOC/pages/104765403/Sept+2022+-+Virtual+HL7+WGM+-+Wed+Q1+Minutes | Joint Vocab/FHIR-I discussion that required-binding expansion can change. |
| Confluence | FHIR-27144 Jan WGM | Page 139667554, https://confluence.hl7.org/spaces/VOC/pages/139667554/Jan+2023+-+HL7+WGM+-+Wednesday+Q2+Minutes | Later note: binding is to a value-set definition identifier. |
| Confluence | FHIR-48885 vote | Page 325460605, https://confluence.hl7.org/spaces/FHIRI/pages/325460605/FHIR+Infrastructure+Minutes+WGM+202505+-+Madrid | Discusses RFC 8174 status and records 6-0-2 vote. |
| Confluence | FHIR-44047 process | Page 234784975, https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas | Broad punctuation ticket marked “will fix”; page-specific commit later corrected one `e.g.` instance. |

## Change summary

### Substantive/normative

- CapabilityStatement/conformance claim language was expanded. R4 only said systems can claim conformance for functionality described in the applicable CapabilityStatement. R6 adds that RESTful servers are required to provide a `CapabilityStatement` on request, other systems/applications MAY publish one, and assertions without one have little meaning because they cannot be tested/verified (`source/conformance-rules.html:74-79`). This maps to FHIR-19575 and commit `8c2e1da...`.
- Conformance-verb basis changed from RFC 2119 to "the RFC 8174 clarification of RFC 2119" (`source/conformance-rules.html:82-90`). This maps directly to FHIR-48885 and commit `bf998a1...`.
- Cardinality rules now explicitly state a value attribute/property can never be empty and must have non-whitespace content if present (`source/conformance-rules.html:118-123`). This maps to FHIR-19568 and FHIR-19570 via commit `44ad3ff...`.
- Cardinality guidance now says a 1..* or 1..1 parent whose children are all 0..* or 0..1 implies at least one child must be present (`source/conformance-rules.html:135-136`). Phrase search maps this to FHIR-21644, applied in broad MnM non-substantive commit `ec83d5b...`.
- Is-modifier examples now explicitly label Observation.status as a modifier and Observation.subject as not a modifier (`source/conformance-rules.html:182-190`). This maps to FHIR-22635 and commit `a9713d2...`.
- Is-modifier processing example corrected obsolete `Observation.reliability`/`ok` to `Observation.status`/`final` (`source/conformance-rules.html:249-254`). This maps to FHIR-19571 and commit `44ad3ff...`.
- The MustSupport section was substantially rewritten as "Obligations for Applications (MustSupport)" and now points to application roles and the obligation extension (`source/conformance-rules.html:282-299`). This combines the must-support replacement work, the ElementDefinition obligations work (`1e1665b...`), and FHIR-40296 (`fa3b0ba...`).
- Constraint metadata changed: `Suppress` and `Source` rows were added, `XPath` was removed, and a paragraph on constraint-key uniqueness was added (`source/conformance-rules.html:309-350`). These map to FHIR-20500, FHIR-39179, and FHIR-37692.

### Semantic guidance

- The page now points readers to the separate `obligations.html` page for application behavior expectations (`source/conformance-rules.html:292-295`).
- Constraint-key wording now says keys are required to be unique when declared, but repeated through profiles makes simple uniqueness constraining hard and validators validate "meaningfully unique" as they can (`source/conformance-rules.html:345-350`).

### Example change

- The embedded AllergyIntolerance example table changed required-binding hover/title text from "codes in this element SHALL be from the specified value set" to "the data element SHALL contain one of the values in the expansion of the bound value set" (`source/conformance-rules.html:222-223`). This comes from FHIR-27144 via commit `0bb0f8f...`.

### Metadata/template/navigation

- HTML template wrapper `<div class="col-12">` was removed by `d7b8dad...`.
- Header metadata changed to "Responsible Owner" and dropped the maturity-level cell/normative include through R6 normative cleanup commits `270e0ce...` and `605a6f...`.
- Best-practice extension link now uses `[%extensions-location%]StructureDefinition-elementdefinition-bestpractice.html` via `b3e3733...`.

### Editorial only

- `data types`/`Primitive Data Type` was normalized to `datatypes`/`Primitive Datatype` under FHIR-25431.
- One `e.g.` instance was punctuated as `e.g.,` under FHIR-44047.
- QA/editorial commit `dad7cf3...` fixed "a error" to "an error" and added a period in "etc.".

### Mechanical/noise

- Whitespace-only churn appears throughout commit `44ad3ff...` and the direct diff, especially line-wrapping and trailing-space cleanup.

## Source history

| Commit | Date | Subject | Page-specific interpretation |
|---|---:|---|---|
| `ec83d5b5057f1402bdeb77453f5d214806de6b8c` | 2021-03-29 | MnM Non Substantive changes for R5 | Adds required-parent/all-optional-children sentence; phrase search identifies FHIR-21644. |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Mechanical wrapper removal. |
| `44ad3ffcf04a71a9affa02374a8596ac9ade7bfa` | 2022-05-10 | Updates to conformance-rules.html - FHIR-19568, 19570, 19571 | Adds empty-value wording, removes "valid", and fixes Observation.status example; also whitespace cleanup. |
| `a9713d220c784b78b225c88f407e2f5706524567` | 2022-08-09 | Apply FHIR-22635 to clarify Is-Modifier examples | Explicitly labels Observation.status as modifier and Observation.subject as not modifier. |
| `a5e67f548ec9478be29c1a152ec0329522c99e21` | 2022-08-18 | Add note about replacement for must support | Adds temporary STU note pointing to Must Support replacement proposal; later removed by obligations rewrite. |
| `39122085c8ac5594f8421a1ec1902e20b8bf6832` | 2022-08-23 | FHIR-37692 Ensure ElementDefinition.constraint are unique in a StructureDefinition | Adds Source row and constraint-key uniqueness paragraph. |
| `8c2e1da030578313093b7b0267c6e9953e257156` | 2022-08-25 | FHIR-19575 Capability Statement required for FHIR conformance? | Adds RESTful server CapabilityStatement requirement and MAY publication language for other systems/applications. |
| `d92793b398246ecee92d54bbff49bfac2e34c0d0` | 2022-08-29 | FHIR-20500 Need to suppress "guidance" and potentially "warnings" in derived models | Adds `Suppress` constraint property row. |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Editorial terminology spelling normalization. |
| `23a31a590b7b03840e4f5946c17b6ec6e0e54665` | 2022-09-06 | update all ballot and stu notes | Mechanical conversion of MustSupport replacement note syntax; later removed. |
| `1e1665b9352f33a691326fdf3079bc19865a8681` | 2022-12-05 | ElementDefinition updates - add obligations and additional bindings... | Replaces MustSupport section with obligations/application roles guidance; removes temporary note. |
| `11f4c1fd05211a19f6a4c7e1be88c5c992474204` | 2022-12-07 | FHIR-39179 FHIRPath should use "as" to select type (not "is") | Removes XPath constraint property row from page. |
| `b3e373388f8137e589fdc6b18beb9ff86a2c23cb` | 2023-02-08 | fix extension links | Updates best-practice extension link template. |
| `fa3b0bac14ef36316b1359d43a8d847291ff42ad` | 2023-02-10 | FHIR-40296 Obligation should be an extension | Changes obligation from ElementDefinition feature to extension reference. |
| `0bb0f8f90b14445eec59ccc75f619173c35c0ddf` | 2023-02-13 | FHIR-27144 Need to clarify if the expansion of a REQUIRED binding can change | Updates required-binding title text in example table. |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | QA related changes | Editorial grammar fixes. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Header metadata changes: "Responsible Owner" and no maturity-level cell. |
| `605a6ffefb83e002264b0504348dea50144bb951` | 2025-10-31 | more normative. changes | Removes `[%normative page infrastructure%]`. |
| `bf998a18b975a1d3dc8f9a3261a43f08a038815d` | 2025-11-02 | FHIR-48885 Clarify applicability of RFC 8174 (updates 2119) | Updates conformance-language paragraph to cite RFC 8174 clarification. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Adds comma in `e.g.,` on this page. |

## Jira evidence

### Explicit Jira keys from commits/patches

- FHIR-19568: published, persuasive, compatible substantive/enhancement, applied for R5. Resolution requested a sentence clarifying value attributes cannot be empty as described in serialization; applied by `44ad3ff...`.
- FHIR-19570: published, persuasive, compatible substantive/correction, applied for R5. Resolution removed `valid` from the cardinality sentence; applied by `44ad3ff...`.
- FHIR-19571: published, not persuasive with modification, non-substantive/correction, applied for R5. Resolution did not require a conformance-statement link, but fixed obsolete Observation.reliability example; applied by `44ad3ff...`.
- FHIR-22635: published, persuasive, compatible substantive/enhancement, applied for R5. Resolution asked to clearly state Observation.status is a modifier and Observation.subject is not; applied by `a9713d2...`.
- FHIR-37692: published, persuasive with modification, non-substantive/clarification, applied for R5. Resolution says: "Constraint ids SHALL be defined such that they are unique within a StructureDefinition (though they may appear in multiple places in derived models due to slicing)." Current page uses weaker/vaguer wording (`source/conformance-rules.html:345-350`); see actionable H-001.
- FHIR-19575: published, persuasive with modification, non-substantive/clarification, applied for R5. Resolution requested the non-server CapabilityStatement MAY language and notes claims without CapabilityStatement have little meaning; current page includes this but has `absense` typo.
- FHIR-20500: published, persuasive, compatible substantive/enhancement, applied for R5. Resolution adds suppress property to `ElementDefinition.constraint`; page adds a `Suppress` row.
- FHIR-25431: published, persuasive technical correction, applied for R5. Context is general spelling consistency; page changed `data types` and table title text to `datatype(s)`.
- FHIR-39179: published, persuasive, non-substantive/correction, applied for R5. It is primarily about StructureDefinition interpretation, but the page-side effect is removal of the XPath row from the constraints table.
- FHIR-40296: published, persuasive, non-compatible/correction, applied for R5. Resolution moves Obligation to an extension; page now references `<%extension http://hl7.org/fhir/StructureDefinition/obligation%>`.
- FHIR-27144: published, persuasive, non-substantive/clarification, applied for R5. Main page is terminologies, but embedded example table title text in this page was updated to say required binding means one of the values in the expansion of the bound value set.
- FHIR-48885: applied, persuasive, non-substantive/clarification, applied for R6. Resolution exactly matches the page's RFC 8174 wording.
- FHIR-44047: Resolved - change required, persuasive, broad many-pages punctuation correction. This page has one applied `e.g.,` commit, but the Jira status remains indeterminate because it is a broad cleanup item.

### Other Jira issues that plausibly explain changed text

- FHIR-21644 was found by exact phrase searches for `"parent element" "minimum cardinality" "children"` and `"all of its children elements"`. It exactly contains the current sentence and its typo `mimimum`; commit `ec83d5b...` lists FHIR-21644 among broad MnM non-substantive changes.

### Context-only Jira hits that should not drive action

- FHIR-32800 and FHIR-17639 appeared in a Jira phrase search for `"element value" "non-whitespace"` but are broader empty-string/string clarifications and were not needed to explain the page commit once FHIR-19568 was snapshotted.
- FHIR-21543 and FHIR-21303 appeared in `"RFC 8174" "conformance"` Jira search but are not this page's FHIR-core conformance-rules issue.
- FHIR-25431, FHIR-39179, FHIR-27144, and FHIR-44047 are real source-history keys but their page impacts are incidental or example/editorial rather than page-specific conformance-rules decisions.

## Zulip evidence

- `#fhir/infrastructure-wg > FHIR-37692` (2022-08-21 to 2022-08-22) is the strongest discussion thread. Grahame questioned whether duplicate constraint IDs are an error; Lloyd argued non-unique keys are confusing and tooling-relevant; Grahame noted slicing duplicates constraints so uniqueness cannot be simple; Josh agreed build enforcement was fine; Lloyd asked for an explicit spec declaration if no formal invariant can define the rule.
- `#conformance > Uniqueness of constraint keys` (2020-10-12 to 2020-10-14) is useful background. Chris Moesel observed the then-current invariant only enforced uniqueness within an element's constraint array, not across a StructureDefinition; Lloyd framed uniqueness within the inheritance tree rather than globally in an IG.
- `#conformance > Moving Obligation to be an extension` (2023-01-20) records Lloyd saying he had chatted with Grahame and filed FHIR-40296 because publishing obligation as an extension could still allow later normative progression while giving flexibility.
- Quoted Zulip issue-key searches found no results for FHIR-19568, FHIR-19570, FHIR-19571, FHIR-21644, FHIR-22635, FHIR-19575, FHIR-20500, FHIR-48885, or FHIR-44047.
- FHIR-27144 Zulip key hits were only tracker-application list posts in `#Vocabulary/committers`; they did not add rationale beyond Jira/Confluence.
- Phrase search for `"must support" "obligation"` found many 2024-2026 implementation and IG-authoring discussions. I did not use them as action evidence because they did not clearly contradict this page's narrow R6 wording.

## Confluence evidence

- FHIR-37692:
  - Page 134939013, FHIR Infrastructure Minutes CC 2022-07-11, records the initial Persuasive-with-Mod motion for FHIR-37692.
  - Page 108303407, FHIR Infrastructure Minutes CC 2022-08-22, records reopening FHIR-37692 and a Persuasive-with-Mod motion. This supports the final Jira disposition after the Zulip discussion.
- FHIR-40296:
  - Page 156533817, FHIR Infrastructure Minutes CC 2023-02-06, says Grahame had concerns about balloting timeline for the proposed extension in R6/R7 and that it was not decided whether the new extension would be core or tooling; motion was persuasive 11-0-0.
- FHIR-27144:
  - Page 104765403, Sept 2022 Vocabulary/FHIR-I WGM Wednesday Q1, records "Clarify that an expansion of a Required binding can change" and points to the ticket notes.
  - Page 139667554, Jan 2023 Vocabulary/FHIR-I WGM Wednesday Q2, records the later discussion that "the binding is to a value set definition identifier."
- FHIR-48885:
  - Page 325460605, FHIR Infrastructure Minutes WGM 202505 - Madrid, records discussion about RFC 8174 and a 6-0-2 vote.
- FHIR-44047:
  - Page 234784975, FHIR Infrastructure Minutes WGM 202405 - Dallas, records the broad `e.g.`/`i.e.` cleanup as "will fix"; this page has one applied punctuation commit.
- MustSupport replacement:
  - Confluence FTS for `"Must Support replacement proposal"` found several 2022 process/minutes/project pages and a copied IPA proposal page. The original FHIR-space proposal page was not relied on because the final R6 page no longer links to it and the obligations rewrite superseded the temporary note.

## Timeline

| Date | Clock | Evidence |
|---:|---|---|
| 2018-10-30 | Jira created | FHIR-19568, FHIR-19570, FHIR-19571, FHIR-19575 were raised against STU3-era conformance rules. |
| 2019-01-17 to 2019-04-29 | Jira votes/resolution | FHIR-19568/19570/19571/19575 resolved for R5. |
| 2019-05-07 to 2019-08-20 | Jira created/resolved | FHIR-21644 created and resolved; later applied in R5 non-substantive commit. |
| 2019-05-30 to 2019-06-03 | Jira created/resolved | FHIR-22635 created/resolved; applied in 2022. |
| 2020-10-12 to 2020-10-14 | Zulip discussion | `#conformance > Uniqueness of constraint keys` discusses actual uniqueness scope. |
| 2021-03-29 | Source commit | `ec83d5b...` adds FHIR-21644 parent/child cardinality sentence. |
| 2022-05-10 | Source commit | `44ad3ff...` applies FHIR-19568, FHIR-19570, FHIR-19571 to this page. |
| 2022-08-09 | Source commit | `a9713d2...` applies FHIR-22635. |
| 2022-08-21 to 2022-08-22 | Zulip discussion | `#fhir/infrastructure-wg > FHIR-37692` debates constraint-key uniqueness and explicit spec declaration. |
| 2022-08-22 | Confluence/Jira vote | FHIR-I reopens and re-resolves FHIR-37692 Persuasive with Modification. |
| 2022-08-23 | Source commit | `3912208...` applies FHIR-37692-related page text. |
| 2022-08-25 to 2022-08-31 | Source commits | `8c2e1da...`, `d92793b...`, and `8592e12...` apply FHIR-19575, FHIR-20500, FHIR-25431. |
| 2022-09-21 | Confluence WGM | FHIR-27144 required-binding expansion discussion at joint Vocabulary/FHIR-I WGM. |
| 2022-12-05 to 2023-02-10 | Source/Jira/Zulip | Obligations section added, then FHIR-40296 moves obligation to extension; Zulip and Confluence confirm rationale/vote. |
| 2023-02-13 | Source commit | `0bb0f8f...` applies FHIR-27144 required-binding wording into embedded example table. |
| 2025-05-15 | Jira/Confluence vote | FHIR-48885 vote on RFC 8174 clarification. |
| 2025-10-31 to 2025-11-03 | Source commits | R6 normative metadata cleanup, FHIR-48885, and FHIR-44047 punctuation applied. |

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/conformance-rules.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/conformance-rules.html" && echo "new exists"`
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/conformance-rules.html`
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/conformance-rules.html`
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager show --stat --patch <commit> -- source/conformance-rules.html` for each relevant commit.
- Jira:
  - Snapshots: `bun run jira:search snapshot FHIR-19568`, `FHIR-19570`, `FHIR-19571`, `FHIR-19575`, `FHIR-20500`, `FHIR-21644`, `FHIR-22635`, `FHIR-25431`, `FHIR-27144`, `FHIR-37692`, `FHIR-39179`, `FHIR-40296`, `FHIR-44047`, `FHIR-48885`.
  - Phrase searches included `"parent element" "minimum cardinality" "children"`, `"all of its children elements"`, `"element value" "non-whitespace"`, `"Observation.subject" "not a modifier"`, `"CapabilityStatement have little meaning"`, `"mustSupport" "obligation" "application roles"`, `"constraint keys" "meaningfully unique"`, and `"RFC 8174" "conformance"`.
- Zulip:
  - Initial unquoted FHIR key searches failed with SQLite "no such column" errors because hyphenated keys were parsed incorrectly; quoted reruns succeeded.
  - Quoted key searches included FHIR-19568, FHIR-19570, FHIR-19571, FHIR-21644, FHIR-22635, FHIR-37692, FHIR-19575, FHIR-20500, FHIR-40296, FHIR-27144, FHIR-48885, FHIR-44047.
  - Phrase searches included `"constraint keys"`, `"must support" "obligation"`, `"RFC 8174"`, `"CapabilityStatement" "conformance"`, `"required binding" "expansion"`, and `"isModifier" "Observation.subject"`.
  - Snapshots: `bun run zulip:search snapshot "fhir/infrastructure-wg" "FHIR-37692"`, `bun run zulip:search snapshot conformance "Uniqueness of constraint keys"`, and `bun run zulip:search snapshot conformance "Moving Obligation to be an extension"`.
- Confluence:
  - References/FTS searched for each explicit key listed above.
  - Snapshots: `bun run confluence:search snapshot 108303407`, `134939013`, `156533817`, `139667554`, `104765403`, `325460605`, `234784975`.
  - Phrase searches included `"Must Support replacement proposal"`, `"Moving Obligation"`, `"required binding" "value set expansion"`, `"RFC 8174"`, and `"constraint keys"`.
- New page end-to-end read:
  - `wc -l ".../source/conformance-rules.html"` and source chunks `1-140`, `141-280`, `281-383`.

# xml research appendix

## Scope and coverage
- Page path: `source/xml.html`; label: `xml`.
- Compared R4 `4.0.1` commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to R6 ballot4 `6.0.0-ballot4` commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Both source files exist at the supplied trees. Diff status confirmed as modified and present in both trees.
- The newer page was read end-to-end after history/community research: `wc -l` reported 335 lines; `sed -n '1,220p'` and `sed -n '221,440p'` covered the full file.
- Direct `source/xml.html` history in the range contains 16 commits. Explicit Jira keys found in commit subjects/bodies/patch context: `FHIR-27754`, `FHIR-27053`, `FHIR-25212`, `FHIR-24857`, `FHIR-22692`, `FHIR-22671`, `FHIR-22657`, `FHIR-22268`, `FHIR-21644`, `FHIR-21225`, `FHIR-20653`, `FHIR-20850`, `FHIR-19958`, `FHIR-18452`, `FHIR-18447`, `FHIR-18448`, `FHIR-18440`, `FHIR-18445`, `FHIR-25431`, `FHIR-22655`, `FHIR-44047`, `FHIR-53492`.
- Jira searches/snapshots covered every explicit key, plus plausible non-explicit issues for the new additional-resource wording (`FHIR-48120`, `FHIR-48422`, `FHIR-50848`, `FHIR-50863`, `FHIR-54783`, `FHIR-55447`) and signature/canonicalization context (`FHIR-48937`, `FHIR-51115`, `FHIR-51133`, `FHIR-41522`).
- Zulip searches covered Jira keys, exact changed phrases, `resourceDefinition`, additional-resource terms, XML/JSON example phrases, decimal/precisionDecimal terms, and canonical XML/signature terms. Promising threads were snapshotted.
- Confluence searches covered Jira references and meaningful terms (`resourceDefinition`, additional resources, canonical XML/signature, precisionDecimal, XML and JSON examples). Promising minutes were snapshotted.
- Caveats: no GitHub PR numbers were present in inspected commit metadata; no PR evidence is relied on. Zulip key searches initially failed when unquoted because FTS parsed hyphenated Jira keys; quoted reruns succeeded. Rendered publication output was not rebuilt; findings are source-level.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source lines | R6 `xml.html` additional-resource prose | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/xml.html:75-101` | New XML `resourceDefinition` attribute section and stale core-resource statement. |
| Source lines | R6 `xml.html` invalid example close tag | `.cache/.../source/xml.html:87-92` | The added `ViewDefinition` XML example closes with `&lt;ViewDefinition&gt;` instead of `&lt;/ViewDefinition&gt;`. |
| Source lines | R6 `xml.html` schema note | `.cache/.../source/xml.html:245-261` | New note says additional resources are not in the base schema while exchanged XML still SHALL validate. |
| Source lines | R6 `xml.html` canonical XML link | `.cache/.../source/xml.html:323-328` | Detailed canonical XML rules were replaced by a link to `signatures.html#xml`. |
| Source lines | R6 resource moving guidance | `.cache/.../source/resource/resource-introduction.xml:82-98` | `resource.html#moving` says `resourceDefinition` may remain after a resource moves into core. |
| Source lines | R6 signatures XML target | `.cache/.../source/signatures.html:236-254` | Confirms `signatures.html#xml` anchor exists and carries XML canonicalization rules. |
| Commit | Add additional-resource XML support | `931df6ae329dd3d7f44df8358b5affdd2b95e757` | Adds `resourceDefinition` to `xml.html`, `json.html`, resource docs, and related structures. |
| Commit | FHIR-50863 resource moving rule | `09b9a4c718f6db95ad354a42fede0090b80dfce8` | Adds moved-to-core `resourceDefinition` rule to resource introduction only, not `xml.html`. |
| Commit | Rewrite signatures section | `dcf53a8af6d730f886918f45af2510e990a986eb` | Moves detailed XML canonicalization content out of `xml.html` to signatures page. |
| Commit | Add XML/JSON comparison examples | `6940f50152d47d242a8365fda5d825396a22f30b` | Adds repeating, primitive, complex datatype, XHTML comparison examples. |
| Commit | Decimal regex correction chain | `baee733e3e91dbb37809feeb66f9142344daac76`, `2a1360e08725bc95341e925aabb48232ff583e8d` | Introduces bounded decimal regex, then fixes extra `}` per `FHIR-53492`. |
| PR | No PR id found | `git show --stat --patch ... -- source/xml.html` | Inspected commit metadata/patches did not expose GitHub PR numbers. |
| Jira | FHIR-50863 | https://jira.hl7.org/browse/FHIR-50863 | Formal applied rule for `resourceDefinition` when additional resources move to core. |
| Jira | FHIR-48120 / FHIR-48422 / FHIR-50848 | https://jira.hl7.org/browse/FHIR-48120, https://jira.hl7.org/browse/FHIR-48422, https://jira.hl7.org/browse/FHIR-50848 | Additional-resource rationale and cross-reference/compartment consequences. |
| Jira | FHIR-18447 / FHIR-18448 / FHIR-18452 | https://jira.hl7.org/browse/FHIR-18447, https://jira.hl7.org/browse/FHIR-18448, https://jira.hl7.org/browse/FHIR-18452 | XML/JSON example consistency and comparison-link rationale. |
| Jira | FHIR-18440 / FHIR-18445 | https://jira.hl7.org/browse/FHIR-18440, https://jira.hl7.org/browse/FHIR-18445 | Signature link/scope rationale for old canonical XML wording. |
| Jira | FHIR-27053 | https://jira.hl7.org/browse/FHIR-27053 | Explains removal of XSD 1.1 `precisionDecimal` recommendation. |
| Jira | FHIR-22655 / FHIR-53492 | https://jira.hl7.org/browse/FHIR-22655, https://jira.hl7.org/browse/FHIR-53492 | Decimal range/regex change and later syntax fix. |
| Jira | FHIR-48937 | https://jira.hl7.org/browse/FHIR-48937 | Old XML canonicalization table typo; now removed by signature rewrite, but issue remains triaged. |
| Jira | FHIR-54783 / FHIR-55447 | https://jira.hl7.org/browse/FHIR-54783, https://jira.hl7.org/browse/FHIR-55447 | Later unresolved discussion around trial-use elements and `resourceDefinition` on core resources. |
| Zulip | Additional Resources | `bun run zulip:search snapshot committers "Additional Resources"` / https://chat.fhir.org/#narrow/stream/committers/topic/Additional%20Resources | WG/process discussion for moving resources to additional-resource IGs. |
| Zulip | ViewDefinition discussion | `bun run zulip:search snapshot "analytics on FHIR" "1/20 Meeting Notes & TODOs"` / https://chat.fhir.org/#narrow/stream/analytics%20on%20FHIR/topic/1%2F20%20Meeting%20Notes%20%26%20TODOs | ViewDefinition examples and resourceType/tooling discussion after the new syntax. |
| Zulip | FHIR-I Fri Q3 | `bun run zulip:search snapshot fhir/infrastructure-wg "FHIR-I Fri Q3"` / https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/FHIR-I%20Fri%20Q3 | FHIR-18445 signature-scope disposition discussion. |
| Zulip | Signing and narrative | `bun run zulip:search snapshot "Security and Privacy" "Signing and narrative"` / https://chat.fhir.org/#narrow/stream/Security%20and%20Privacy/topic/Signing%20and%20narrative | Later 2025 reassessment of signature/canonicalization issues. |
| Zulip | Canonicalization | `bun run zulip:search snapshot implementers "Canonicalization"` / https://chat.fhir.org/#narrow/stream/implementers/topic/Canonicalization | Older implementation discussion on canonicalization and XML attribute normalization. |
| Confluence | FHIR-I 2025-07-21 | `bun run confluence:search snapshot 358883031` / https://confluence.hl7.org/spaces/FHIRI/pages/358883031/FHIR+Infrastructure+Minutes+CC+2025-07-21 | Vote for FHIR-50863: do not require removal of `resourceDefinition` after promotion to core. |
| Confluence | FHIR-I 2025-09-29 | `bun run confluence:search snapshot 391186848` / https://confluence.hl7.org/spaces/FHIRI/pages/391186848/FHIR+Infrastructure+Minutes+CC+2025-09-29 | Says `resourceDefinition` is base-format metadata like `resourceType` and should show in examples. |
| Confluence | Madrid WGM 2025-05 | `bun run confluence:search snapshot 325460605` / https://confluence.hl7.org/spaces/FHIRI/pages/325460605/FHIR+Infrastructure+Minutes+WGM+202505+-+Madrid | Additional-resource concept, registered names, canonical definition, and migration concerns. |
| Confluence | FHIR-I 2019-04-22 | `bun run confluence:search snapshot 49645835` / https://confluence.hl7.org/spaces/FHIRI/pages/49645835/FHIR+Infrastructure+Minutes+CC+20190422 | Original XML/JSON examples and signature tracker decisions. |
| Confluence | FHIR-I WGM 2020-01 | `bun run confluence:search snapshot 76153514` / https://confluence.hl7.org/spaces/FHIRI/pages/76153514/FHIR+Infrastructure+Minutes+WGM+202001 | FHIR-18445 signature scope resolution text. |
| Confluence | FHIR-I 2025-11-24 | `bun run confluence:search snapshot 404099439` / https://confluence.hl7.org/spaces/FHIRI/pages/404099439/FHIR+Infrastructure+Minutes+CC+2025-11-24 | FHIR-53492 decision: keep leading-zero rule, remove extra regex brace. |

## Change summary

### Additional-resource XML representation — substantive/normative and semantic guidance
- `931df6ae329dd3d7f44df8358b5affdd2b95e757` adds `resourceDefinition` to the top XML skeleton, a new root-name bullet, a full `XML representation of additional resources` section, and an additional-resource schema note.
- This is meaningful new R6 semantics, not boilerplate. It defines XML format behavior for resources outside core FHIR and says the `resourceDefinition` canonical includes a version explicitly.
- The current page now has two concrete issues: the example close tag is invalid XML, and the paragraph saying `resourceDefinition` is not present for core resources no longer matches later FHIR-50863/resource.html guidance for resources promoted to core.

### XML/JSON comparison examples — semantic guidance and example change
- FHIR-18452 first added a comparison note; FHIR-18447 then added XML/JSON examples for repeating elements, primitives, primitive extensions, complex datatypes, and XHTML; FHIR-18448 fixed the comparison link to `resource-formats.html#comparison`.
- Jira and Confluence show this was a non-substantive R5 clarification/correction to make XML and JSON examples easier to compare, not a change to wire format.

### Canonical XML/signatures — substantive/normative content moved/restructured
- R4 carried detailed canonical XML rules directly on `xml.html`.
- FHIR-18440/18445 first adjusted signature links and canonicalization language in R5.
- `dcf53a8af6d730f886918f45af2510e990a986eb` later replaced the local XML canonicalization section with `See Signatures for details`; `signatures.html#xml` now contains the XML rules.
- Security/Zulip/Confluence evidence shows active 2025 signature reorganization work and many related trackers. The link target exists, so no broken-link action was found on `xml.html` itself.

### Decimal code-generation guidance — substantive datatype/regex correction plus editorial cleanup
- `ec83d5...` removed the XSD 1.1 `precisionDecimal` recommendation; FHIR-27053 explains the W3C target was not a final endorsed XSD 1.1 datatype.
- `baee733...` changed the suggested `decimal-primitive` string regex to bounded digit lengths but accidentally included an extra `}`.
- `2a1360...` fixed the extra `}` per FHIR-53492; Confluence 2025-11-24 confirms the WG rejected allowing `.5` but accepted removing the stray brace.

### Metadata/template/navigation — mechanical/noise
- `d7b8dad...` updated the HTML template by removing an outer `div`.
- `270e0c...` and `605a6f...` changed normative page chrome: “Responsible Owner,” removal of maturity cell and normative-page macro.
- `02f79b...` removed a balloter note. These are not page-specific semantic changes.

### Editorial/template cleanup — editorial only
- `8592e1...` standardizes `datatype` vs `data type` per FHIR-25431.
- `887bc2...` applies `e.g.,` punctuation per FHIR-44047.

## Source history

| Date | Commit | Subject | Page impact | Classification |
|---|---|---|---|---|
| 2021-03-29 | `ec83d5b5057f1402bdeb77453f5d214806de6b8c` | MnM Non Substantive changes for R5 | Removed `precisionDecimal` alternative sentence; bulk body listed many Jira keys. | Substantive correction for decimal guidance; broad commit. |
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | update html template | Removed outer `div class="col-12"` wrapper. | Mechanical/template. |
| 2022-08-20 | `a7026edb074d5100e871d93a03aaa02231cb1218` | FHIR-18452 Why XML in the JSON section? - N-Infra #140 | Added comparison-note paragraph. | Editorial/semantic guidance. |
| 2022-08-20 | `6940f50152d47d242a8365fda5d825396a22f30b` | FHIR-18447 XML and JSON examples are different - why? - N-Infra #135 | Added 130 lines of comparison examples. | Example guidance. |
| 2022-08-20 | `fb6236f76aef7e34c5874572f098f3a646dcc983` | FHIR-18448 Comparisons not consistent - N-Infra #136 | Fixed comparison link from `formats.html` to `resource-formats.html`. | Link/reference. |
| 2022-08-21 | `f0c0aa773ecfc6c50ee902e069c48c9ad47354b3` | FHIR-18440 Link to (and add) signtaure sections - N-Infra #128 | Changed Provenance link to `provenance.html#signature`. | Link/reference. |
| 2022-08-21 | `1e7f05f8b99b616f6c03888a4e1ee59b76d36c25` | FHIR-18445 How is the scope of a signature determined? - N-Infra #133 | Added SHALL framing for XML canonicalization fragments. | Substantive/normative clarification. |
| 2022-08-31 | `8592e1207273b786db340efb927bb6d1dc9756c9` | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Standardized wording. | Editorial. |
| 2023-02-09 | `baee733e3e91dbb37809feeb66f9142344daac76` | FHIR-22655 No range or precision ... decimal | Changed suggested decimal regex and introduced an extra `}`. | Substantive correction with later typo. |
| 2025-03-15 | `931df6ae329dd3d7f44df8358b5affdd2b95e757` | draft support for additional types | Added XML additional-resource section, `resourceDefinition`, and schema note. | Substantive/normative new guidance. |
| 2025-06-29 | `dcf53a8af6d730f886918f45af2510e990a986eb` | rewrite signatures section | Removed detailed canonical XML text; linked to `signatures.html#xml`. | Restructuring; substantive content moved. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | normative changes for R6 | Updated page metadata row. | Metadata/template. |
| 2025-10-31 | `605a6ffefb83e002264b0504348dea50144bb951` | more normative. changes | Removed normative-page macro. | Metadata/template. |
| 2025-10-31 | `09b9a4c718f6db95ad354a42fede0090b80dfce8` | 50863 What happens to the resourceDefinition url when an additional resource moves to core? | Did not change `xml.html`; changed `resource/resource-introduction.xml`. | Related source change; creates XML-page mismatch. |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | FHIR-44047 | Added commas after `e.g.`. | Editorial. |
| 2025-11-14 | `02f79b0a3ba639280ab7d0d92e364f0a2b676bea` | fix up notes to balloters | Removed additional-resource balloter note. | Ballot/template cleanup. |
| 2025-12-15 | `2a1360e08725bc95341e925aabb48232ff583e8d` | FHIR-53492 Incorrect Regex for Decimal Datatype | Removed extra `}` from decimal regex. | Technical correction. |

## Jira evidence

### Explicit Jira keys from commits/patches
- `FHIR-18447`, `FHIR-18448`, and `FHIR-18452` explain the added comparison note/examples and link to the formats comparison. They are Published, R5, FHIR-I, non-substantive.
- `FHIR-18440` and `FHIR-18445` explain the R5 signature-link and signature-scope text that was later moved to the signatures page. `FHIR-18445` is marked compatible substantive.
- `FHIR-25431` explains `datatype` spelling cleanup.
- `FHIR-22655` explains the decimal precision/range regex tightening; `FHIR-53492` explains the later extra-brace fix.
- `FHIR-44047` explains the `e.g.,` punctuation-only change.
- `FHIR-27053`, explicitly listed in the broad `ec83d5...` commit body, directly matches the removal of the `precisionDecimal` sentence.
- Other explicit keys in the broad `ec83d5...` commit body (`FHIR-27754`, `FHIR-25212`, `FHIR-24857`, `FHIR-22692`, `FHIR-22671`, `FHIR-22657`, `FHIR-22268`, `FHIR-21644`, `FHIR-21225`, `FHIR-20653`, `FHIR-20850`, `FHIR-19958`) were snapshotted/summarized but did not plausibly explain `source/xml.html` beyond being part of a bulk MnM non-substantive commit; they are context-only for this page.

### Other Jira issues plausibly explaining changed text
- `FHIR-48120` records that the R6 additional-resource mechanism offers an alternative to Basic for concepts not covered by existing resources.
- `FHIR-48422` records additional-resource reference migration concerns and mentions future promotion of additional resources to core.
- `FHIR-50848` records additional-resource compartment consequences.
- `FHIR-50863` is the key applied issue for the current mismatch: resolution says once a resource moves into core, `resourceDefinition` is no longer needed but is allowed to remain, SHOULD NOT be added, and if present the version SHALL match the published core FHIR version.
- `FHIR-48937` reports a typo in the old XML canonicalization URI table. That table is gone from current `xml.html`, so this is context-only for the signature rewrite.
- `FHIR-51115`, `FHIR-51133`, and `FHIR-41522` show broader 2025 signature/canonicalization reorganization and RFC 8785 discussion. They explain context for the signature-page consolidation but do not create an `xml.html` action.
- `FHIR-54783` and `FHIR-55447` are later unresolved issues around trial-use elements/resourceDefinition for core resources. They are post-ballot context and do not supersede the applied FHIR-50863 wording.

### Context-only Jira hits
- Direct Jira searches for exact `ViewDefinition resourceDefinition` returned no issue.
- Search `resourceDefinition` returned `FHIR-50863`, `FHIR-55447`, and `FHIR-54783`; only `FHIR-50863` is applied and directly explains a current wording mismatch.
- Search `"additional resources" "resourceDefinition" "XML"` returned no Jira results.

## Zulip evidence

- `#committers > Additional Resources` (snapshot command above) shows late-2025 WG coordination on moving resources out of core into additional-resource IGs. Lloyd noted R6 resources cannot have links to additional resources but page text can link to external IGs where appropriate. This supports the broad additional-resource process, not the specific XML wording.
- `#Additional Resource Proposals > channel events` confirms a public channel was created on 2025-03-14 for proposals to register additional resources for FHIR R6+.
- `#analytics on FHIR > 1/20 Meeting Notes & TODOs` includes a 2026 ViewDefinition tooling/resourceType discussion. It supports that ViewDefinition is an active real example of additional-resource work, but it does not discuss the XML page text.
- `#fhir/infrastructure-wg > FHIR-I Fri Q3` mirrors the FHIR-18445 signature-scope resolution and records the exact XML canonicalization wording that was later implemented in R5 and then moved.
- `#Security and Privacy > Signing and narrative` and `#Security and Privacy > Signature` show 2025 recognition that signature/canonicalization rules were scattered and under-specified, with a proposal for FHIR-I to lead the block of signature-related tickets.
- `#implementers > Canonicalization` shows earlier implementation concerns around XML canonicalization and markdown/attribute whitespace.
- Failed/negative Zulip searches that affect confidence: exact `resourceDefinition`, `"additional resources" "resourceDefinition"`, `"Moving Additional Resources"`, `"precisionDecimal"`, and `"decimal-primitive"` found no direct thread. Unquoted `FHIR-xxxxx` FTS searches failed due hyphen parsing; quoted reruns found only one unrelated FHIR-18445 Medication hit and no direct key hits for the page topics.

## Confluence evidence

- FHIR-I Madrid WGM 2025-05 (`325460605`) records that R6 ballot 3 had a mechanism for new resource types; Grahame said these resources look like regular resources but have `resourceDefinition` pointing to a canonical definition, and their names must be registered/approved. It also records Lloyd asking what happens to the canonical URL when an additional resource moves to core, leading to a tracker.
- FHIR-I 2025-07-21 (`358883031`) records the FHIR-50863 vote: when a resource is promoted to core there is no need for `resourceDefinition`, but the group did not want to say it SHALL NOT appear; if present, version must be corrected to the core FHIR version. Vote: Grahame Grieve / Richard Ettema, 12-0-0.
- FHIR-I 2025-09-29 (`391186848`) records that `resourceDefinition` is a base-format part like `resourceType`, not listed in element tables, and should show up in examples. This supports the page’s general example direction while reinforcing that it is format-level, not structural-definition content.
- FHIR-I 2019-04-22 (`49645835`) records the original XML/JSON example consistency decisions for old GForge trackers 18447/18448 and signature tracker 18440.
- FHIR-I WGM 2020-01 (`76153514`) records FHIR-18445 signature-scope resolution text, matching the R5 XML canonicalization language.
- MnM 2020-09-01 (`91985978`) records FHIR-27053 persuasive vote to remove the `precisionDecimal` sentence.
- MnM 2021-09 WGM (`79502299`) records FHIR-22655 persuasive vote for decimal range/precision.
- FHIR-I 2025-11-24 (`404099439`) records FHIR-53492 decision: allowing `.5` would be substantive and was rejected; removing the extra `}` was approved.
- Security 2025-06-30 (`358255047`) records the block of signature/canonicalization tickets and a motion that FHIR-I should lead signature-related tickets while consulting Security.
- FHIR-I Rotterdam 2026-05 (`453905263`) records later unresolved FHIR-54783 discussion about trial-use elements in normative resources; relevant as later reassessment, not a reason to reinterpret the R6 ballot4 page now.

## Timeline

- 2018-09-27: STU3 ballot comments created for XML/JSON example and signature wording (`FHIR-18440`, `FHIR-18445`, `FHIR-18447`, `FHIR-18448`, `FHIR-18452`).
- 2019-04-22: FHIR-I minutes approve example consistency and comparison changes; signature scope deferred for connectathon experience.
- 2020-02-07: FHIR-I WGM/Zulip approve FHIR-18445 XML/JSON canonicalization scope wording.
- 2020-09-01: MnM approves FHIR-27053 removal of `precisionDecimal` draft-note reference.
- 2021-03-29: `ec83d5...` removes the `precisionDecimal` sentence from `xml.html`.
- 2021-09-22: MnM approves FHIR-22655 decimal precision/range correction.
- 2021-10-04: FHIR-I reopens/resolves FHIR-18452; note clarifies XML examples in JSON are for comparison, not primacy.
- 2022-08-20/21: XML/JSON example and signature tracker commits land in `xml.html`.
- 2023-02-09: Decimal regex bound pattern is introduced in `xml.html`, with a stray extra `}`.
- 2025-03-15: `931df6...` adds draft additional-resource XML syntax to `xml.html`.
- 2025-05 Madrid WGM: FHIR-I discusses additional resources, canonical definitions, registration, and promotion-to-core migration; Lloyd to add tracker.
- 2025-06-18 to 2025-06-30: Security/Zulip/Confluence discussions identify broad signature/canonicalization cleanup and FHIR-I lead.
- 2025-06-29: `dcf53a...` moves detailed canonical XML content from `xml.html` to `signatures.html#xml`.
- 2025-07-21: FHIR-I approves FHIR-50863 moved-to-core `resourceDefinition` rule.
- 2025-10-31: `09b9a4...` applies FHIR-50863 only to `resource/resource-introduction.xml`, leaving `xml.html` stale.
- 2025-11-24: FHIR-I approves FHIR-53492 extra-brace fix but rejects allowing `.5` decimals.
- 2025-12-15: `2a1360...` fixes the decimal regex extra brace in `xml.html`.
- 2026-01 to 2026-05: FHIR-54783/FHIR-55447 and Rotterdam minutes continue later discussion about trial-use/core-resource mechanisms; not yet applied.

## Evidence log

- `test -f .../source/xml.html` in both supplied trees established old/new page existence.
- `git diff --find-renames 0da2a0... 5d67a34... -- source/xml.html` established the direct page diff and topic buckets above.
- `git log --reverse ... -- source/xml.html` found 16 direct page commits.
- `git show --stat --patch <commit> -- source/xml.html` inspected meaningful commits and confirmed exact page changes.
- `git log -S resourceDefinition -- source/xml.html source/json.html source/resource/resource-introduction.xml` found `931df6...` and related non-page `09b9a4...`.
- `bun run jira:search snapshot <FHIR-key>` was run for explicit keys and relevant discovered keys. SQL summary was used to compact the many explicit-key metadata rows.
- Jira FTS searches: `resourceDefinition`, `"additional resources" resourceDefinition`, `"ViewDefinition" "resourceDefinition"`, `"additional types" "FHIR"`, signature/canonicalization issue keys, and decimal terms.
- Zulip FTS searches: quoted Jira keys, `resourceDefinition`, `"additional resources"`, `"ViewDefinition"`, `"XML and JSON examples"`, `"precisionDecimal"`, `"decimal-primitive"`, `"Canonical XML" "Signature"`, and `"scope of a signature"`.
- Zulip snapshots: `committers "Additional Resources"`, `"analytics on FHIR" "1/20 Meeting Notes & TODOs"`, `"Additional Resource Proposals" "channel events"`, `fhir/infrastructure-wg "FHIR-I Fri Q3"`, `"Security and Privacy" "Signing and narrative"`, and `implementers "Canonicalization"`.
- Confluence refs searches were run for explicit and discovered Jira keys; snapshots were taken for the pages listed in the Confluence evidence section.
- Full newer page read: `wc -l`, `sed -n '1,220p'`, `sed -n '221,440p'`.

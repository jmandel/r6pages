# terminology-service research appendix

## Scope and coverage

- Page path: `source/terminology-service.html`
- Old version/source: R4 4.0.1 at `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, local tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/terminology-service.html`
- New version/source: R6 ballot4 6.0.0-ballot4 at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, local tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminology-service.html`
- Boundary: page exists in both trees and is modified. Direct diff is `200 insertions(+), 458 deletions(-)`.
- New page read end-to-end: yes, 984 lines.
- Source-history commits touching the page between the two commits: 26.
- Explicit Jira keys found in commit metadata/patches included many batch keys; page-specific or plausibly page-relevant keys investigated in detail: `FHIR-19442`, `FHIR-23787`, `FHIR-24698`, `FHIR-24699`, `FHIR-29959`, `FHIR-35933`, `FHIR-36643`, `FHIR-37514`, `FHIR-38972`, `FHIR-38974`, `FHIR-44047`, `FHIR-45006`, plus related `FHIR-32129` for `$translate` parameter naming.
- Jira, Zulip, and Confluence were searched for explicit keys and distinctive changed phrases. Caveat: no Jira key was found in the 2025 commit that removed `$closure`/`$find-matches`; Confluence search found older process context, not the 2025 removal decision itself.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 page conformance section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminology-service.html:20-177` | New normative terminology-service minimum-capability text and operation table. |
| Source | R6 `$lookup` properties | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminology-service.html:499-540` | Final Standard `$lookup` Properties wording after `FHIR-36643`/`FHIR-23787`. |
| Source | R6 current examples with inherited JSON issues | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminology-service.html:590-612`, `:745-803`, `:888-975` | Current examples still use invalid `ResourceType`, malformed Bundle JSON, and a likely `codes=` typo. |
| Source | `$translate` OperationDefinition parameter names | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/conceptmap/operationdefinition-ConceptMap-translate.xml:91-177` | Shows current `sourceSystem`/`targetSystem` and source-vs-target alternatives; contrasts with conformance table's `system`. |
| Source | `$lookup` OperationDefinition input cardinalities | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/codesystem/operationdefinition-CodeSystem-lookup.xml:68-123` | All listed inputs have `min=0`, useful for interpreting "required input parameters". |
| Source | `$expand` OperationDefinition input cardinalities | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/valueset/operationdefinition-ValueSet-expand.xml:68-149` | `filter`, `offset`, and `count` are optional in the operation definition but listed under "required input parameters" on this page. |
| Commit | `30dd523442f2ff04aa1f10829160f8451eacb598` | https://github.com/HL7/fhir/commit/30dd523442f2ff04aa1f10829160f8451eacb598 | Applies `FHIR-24698`, adding the new conformance/minimum-capability section. |
| Commit | `9500b398d1d850a06cd180c82ce330e4809a2b49` | https://github.com/HL7/fhir/commit/9500b398d1d850a06cd180c82ce330e4809a2b49 | Broad vocab batch; page-relevant effects include owner change and removal of `ValueSet/@all`. |
| Commit | `7ff7b8991a8fc8b86ca2040fc6044c2a22a23448` | https://github.com/HL7/fhir/commit/7ff7b8991a8fc8b86ca2040fc6044c2a22a23448 | Reworks Standard Properties into `$lookup` property names for `FHIR-36643`. |
| Commit | `43c2e8c78373d49b328cd5fc7698c35c8834d4dc` | https://github.com/HL7/fhir/commit/43c2e8c78373d49b328cd5fc7698c35c8834d4dc | Applies `FHIR-23787` edits to the `$lookup` property section. |
| Commit | `40306e5cd9c1b1e3eb6f115de16a8da3aa13a351` | https://github.com/HL7/fhir/commit/40306e5cd9c1b1e3eb6f115de16a8da3aa13a351 | Removes the entire closure-table section for R6 normative ballot preparation. |
| Commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Marks the page Normative and removes the R4/R5 FMM display row. |
| PR | R5 edit merge | https://github.com/HL7/fhir/pull/2312 | Merge of some `FHIR-24698` edits (`9150bef...`). |
| Jira | `FHIR-24698` | https://jira.hl7.org/browse/FHIR-24698; reopen with `bun run jira:search snapshot FHIR-24698` | Formal source of the normative/minimum terminology server capability requirements. |
| Jira | `FHIR-32129` | https://jira.hl7.org/browse/FHIR-32129; reopen with `bun run jira:search snapshot FHIR-32129` | Renamed `$translate` parameters to `sourceCode`, `sourceCoding`, `sourceCodeableConcept` and added target alternatives; relevant to the current table's `system` wording. |
| Jira | `FHIR-19442` | https://jira.hl7.org/browse/FHIR-19442; reopen with `bun run jira:search snapshot FHIR-19442` | Explains removal of "Operations across all value sets" / `ValueSet/@all`. |
| Jira | `FHIR-23787` | https://jira.hl7.org/browse/FHIR-23787; reopen with `bun run jira:search snapshot FHIR-23787` | Explains `$lookup` heading/text changes and the `lang.X` right-parens edit. |
| Jira | `FHIR-36643` | https://jira.hl7.org/browse/FHIR-36643; reopen with `bun run jira:search snapshot FHIR-36643` | Background for CodeSystem property/filter changes, with confirmation comments. |
| Jira | `FHIR-45006` | https://jira.hl7.org/browse/FHIR-45006; reopen with `bun run jira:search snapshot FHIR-45006` | Corrected closure-table ConceptMap relationship text before the whole section was later removed. |
| Zulip | HAPI as terminology service | `bun run zulip:search snapshot hapi "HAPI as a terminology service?"`; URL `https://chat.fhir.org/#narrow/stream/hapi/topic/HAPI%20as%20a%20terminology%20service%3F` | Contextual discussion references the FHIR terminology server minimum requirements; no detailed parameter rationale found. |
| Zulip | Search all Valuesets | `bun run zulip:search snapshot terminology "Search all Valuesets"`; URL `https://chat.fhir.org/#narrow/stream/terminology/topic/Search%20all%20Valuesets` | Discussion behind `FHIR-19442` and retirement of `ValueSet/@all`. |
| Zulip | property for op=regex | `bun run zulip:search snapshot terminology "property for op=regex"`; URL `https://chat.fhir.org/#narrow/stream/terminology/topic/property%20for%20op%3Dregex` | Original rationale for `FHIR-23787`. |
| Confluence | R5 Terminology Server Minimum Requirements TF | `bun run confluence:search snapshot 94636347`; URL `https://confluence.hl7.org/spaces/VOC/pages/94636347/9-Mar-2022+%E2%80%94+R5+FHIR+Terminology+Server+Minimum+Requirements+Task+Force+Call` | Detailed task force table that fed `FHIR-24698`. |
| Confluence | 2022-09-01 Vocab WG minutes | `bun run confluence:search snapshot 108310506`; URL `https://confluence.hl7.org/spaces/VOC/pages/108310506/2022-09-01+Vocab+WG+Call+Agenda+Minutes` | Records reopening and resolving `FHIR-24698` to create replacement CapabilityStatement/TerminologyCapabilities. |
| Confluence | 2023-02-06 tracker minutes | `bun run confluence:search snapshot 156533665`; URL `https://confluence.hl7.org/spaces/VOC/pages/156533665/Tracker+Issues+2023-02-06+Agenda+and+Minutes` | Extended discussion of `$lookup` properties/filters and `FHIR-23787` resolution. |
| Confluence | 2021-10-20 tracker minutes | `bun run confluence:search snapshot 79515101`; URL `https://confluence.hl7.org/spaces/VOC/pages/79515101/FHIR+Tracker+Issues+2021-10-20+Call+Agenda+and+Minutes` | Confirms `FHIR-19442` remained resolved after Zulip discussion. |
| Confluence | 2019 WGM closure/find-matches context | `bun run confluence:search snapshot 51218206`; URL `https://confluence.hl7.org/spaces/VOC/pages/51218206/May+2019+-+HL7+WGM+-+Wednesday+Q3+Minutes` | Older process evidence: `$find-matches` not moving forward for R5; `$closure` needed more exercise for maturity. |

## Change summary

- Substantive/normative:
  - The page is now marked `Normative` and owned by Terminology Infrastructure/Vocab (`source/terminology-service.html:12-13`; commit `270e0ceb...`).
  - A new Conformance section requires XML/JSON, READ/SEARCH for `CodeSystem`, `ValueSet`, `ConceptMap`, specific search parameters, CapabilityStatement/TerminologyCapabilities elements, and operation support (`source/terminology-service.html:20-177`; commits under `FHIR-24698`).
  - The `Operations across all value sets` section and `http://hl7.org/fhir/ValueSet/@all` special value set were removed (`FHIR-19442`; commit `9500b398...`).
  - The full `Maintaining a Closure Table` section was removed for R6 ballot4 (`40306e5c...`), eliminating the R4/R5 `$closure` tutorial and examples.
- Semantic guidance:
  - External code system references now point to HL7 Terminology pages for common external terminologies (`FHIR-35933`; commit `81e5862f...`).
  - Implementation-note references to "below" now link to Value Set Expansion (`FHIR-38974`; commit `8d82fef...`).
  - Standard property guidance was reframed as Standard `$lookup` Properties, with source column and altered display/designation/lang/name wording (`FHIR-36643`, `FHIR-23787`).
- Example changes:
  - LOINC display example changed from `Bicarbonate [Moles/volume] in Serum` to `Bicarbonate [Moles/volume] in Serum or Plasma`.
  - Closure-table examples were removed with the closure section.
- Metadata/template/navigation:
  - `txheader service` was added.
  - The older R4 status table (`colstu`, Maturity Level 4, Trial Use, FHIR-I owner) changed to `colsn`, Normative, Vocab owner.
- Editorial/mechanical:
  - `datatype` spelling, `e.g.,` punctuation, BCP-47 link repair, typo fixes, and QA-related edits.

## Source history

| Date | Commit | Subject | Page-specific interpretation |
|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | update html template | Mechanical/template wrapping. |
| 2022-02-09 | `9500b398d1d850a06cd180c82ce330e4809a2b49` | vocab r5 tickets batch 2 | Broad vocab batch. Page-specific: ownership changes to Vocab (`FHIR-24699`) and `ValueSet/@all` section removal (`FHIR-19442`). |
| 2022-03-17 | `40c526e297dcc3bcc43cfe2784e5309fce73d6de` | Fix FHIR-29959 | Corrects `CodeSysem` typo to `CodeSystem`. |
| 2022-08-08 | `81e5862f203fdb8a03e9c943a7cf455aba8973f4` | FHIR-35933 | Points external terminology references to THO/HL7 Terminology pages. |
| 2022-08-22 | `ab0ada522243d1ecd280228fc660c8628115a383` | Apply FHIR-30319, FHIR-37514, FHIR-37815, FHIR-22794... | Page-specific effect is BCP-47 link update from `FHIR-37514`; other keys are batch/context. |
| 2022-08-31 | `8592e1207273b786db340efb927bb6d1dc9756c9` | FHIR-25431 | Editorial `data type` -> `datatype`. |
| 2022-09-02 | `30dd523442f2ff04aa1f10829160f8451eacb598` | Applied FHIR-24698 | Adds the new Conformance section and operation table. |
| 2022-09-02 | `9370929d9db373a152e27db23dd3c5bcdf812e52` | Applied FHIR-24698 (further changes) | Temporarily adds implementation elements to capability requirements. |
| 2022-09-02 | `7633b9f6af9bdb73329d9e0e7c6340811c7d7739` | Applied FHIR-24698 (further changes 2) | Temporarily adds `format` requirement. |
| 2022-09-02 | `dca11a08ddb81b0b478fe651e9d9f30354e4003e` | Applied FHIR-24698 | Removes some over-specific CapabilityStatement/TerminologyCapabilities fields and adds conformant-resource caveat. |
| 2022-09-02 | `9150befb2d824b2b8e4223f41860e8da649979e7` | Merge pull request #2312 | Merge for R5 edits. |
| 2022-09-02 | `cc83e0b51db7e1e43ea97461d028b51b85cf646b` | Applied FHIR-24698-AdditionalUpdates | "coding system" -> "code system" in TerminologyCapabilities requirement. |
| 2022-12-10 | `7ff7b8991a8fc8b86ca2040fc6044c2a22a23448` | FHIR-36643 Expand the pre-defined CodeSystem for properties | Reworks `$lookup` properties and adds source column. |
| 2023-02-13 | `d599768304200c654a09d69598871ef83d61f418` | FHIR-38972 Confusing paragraph given the title | Removes sentence claiming examples assert mandatory capabilities. |
| 2023-02-13 | `e62bfe0bc75bdce57749bca46d24340685203b1e` | valueset-operation-expand.html | Adds link around `$expand`. |
| 2023-02-13 | `8d82fef0c513f0c08c9bdc938b14044dea98e4db` | FHIR-38974 Reference is missing | Adds links/anchors from "below" references to Value Set Expansion; also fixed closure typos then later removed. |
| 2023-02-13 | `43c2e8c78373d49b328cd5fc7698c35c8834d4dc` | FHIR-23787 Guidance needed on regex op. R4? | Updates `$lookup` heading and table wording, including the right parens after BCP-47. |
| 2023-02-21 | `dad7cf37c75822c352509e1c2e8d050408d0be18` | QA related changes | Mechanical QA. |
| 2023-02-21 | `9f780149387dc652bec02aa7744e52774acddbc9` | more QA | Mechanical QA. |
| 2024-01-05 | `ea9e526cc83eeeff8d3446a95de766022e8d215c` | qa from new validator | Mechanical QA. |
| 2025-03-13 | `f351f4562de873b8f224be36f4605deaa939ba68` | FHIR-45006 Terminology Services Closure Table... | Corrects closure ConceptMap relationship direction before the entire section is later removed. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | normative changes for R6 | Marks page Normative. |
| 2025-11-02 | `40306e5cd9c1b1e3eb6f115de16a8da3aa13a351` | Removed ValueSet.scope; removed `$closure` and `$find-matches` operations | Removes closure-table section from this page. |
| 2025-11-02 | `2fa84e06bc4fd54048bc269c9f5bdad935879746` | Merge branch 'master' into TI_WG_R6_CHANGES_1 | Merge cleanup. |
| 2025-11-03 | `d9e3792a6c4fc4ccfdde3086949a2d230f542ffa` | Added implementer note about TI WG FHIR IG | Adds note about optional additional operations in a TI WG IG. |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | FHIR-44047 | Editorial `e.g.,` punctuation cleanup. |

## Jira evidence

- Explicit/page-specific:
  - `FHIR-24698` ("Need a normative terminology service capability statement") is the formal source for the new conformance section. Resolution asks for minimum FHIR terminology server capabilities, including RESTful API requirements and "required input parameters" for terminology operations. The applied page closely follows the resolution, but the current page's "required input parameters" wording is potentially ambiguous relative to the underlying OperationDefinitions.
  - `FHIR-24699` supports moving page ownership from FHIR-I to Vocab.
  - `FHIR-19442` supports removing the `ValueSet/@all` section because use was limited, server-specific, and not interoperable. Jira comments show Grahame's surprise/interest, but final comment says the ticket remained as-is after Zulip discussion.
  - `FHIR-35933` supports migrating/pointing external code-system pages to HL7 Terminology/THO.
  - `FHIR-37514` supports the BCP-47 link repair, with final comment pointing to `https://www.rfc-editor.org/rfc/rfc5646.html`.
  - `FHIR-36643` supports CodeSystem filter/property expansion; its page-specific effect is the `$lookup` property text. Comments confirm the applied code system filter changes matched the submitter's request.
  - `FHIR-23787` supports `regex`/`code` filter guidance and the `$lookup` property table changes. Resolution explicitly says to change the heading to Standard `$lookup` Properties, update display/designation/name text, and add a right parens to `lang.X`.
  - `FHIR-38972` supports removal of the sentence asserting examples are the mandatory capabilities.
  - `FHIR-38974` supports adding a reference/link from "operational interfaces below" to Value Set Expansion.
  - `FHIR-45006` supports correcting closure-table relationship wording, but the corrected section no longer appears in R6 ballot4.
  - `FHIR-44047` supports broad e.g./i.e. punctuation cleanup and remains `Resolved - change required` in the snapshot, although the page has local applied edits.
- Plausibly relevant issue for an action item:
  - `FHIR-32129` renamed `$translate` parameters and says exactly one of the source/target concept parameters SHALL be provided. The current terminology-service conformance table still lists `system` under ConceptMap-translate, while the R6 OperationDefinition uses `sourceSystem` and says the previous `system` name MAY still be accepted.
- Context-only batch keys that should not drive action:
  - Many keys in `9500b398...` and `ab0ada...` apply to other terminology artifacts/pages. Summaries were reviewed; most do not explain current `source/terminology-service.html` changes beyond the keys listed above.

## Zulip evidence

- `#hapi > HAPI as a terminology service?` (2022-04-12) references the Vocabulary WG's proposed minimum FHIR Terminology Server capabilities and `FHIR-24698`, but does not discuss the exact "required input parameters" semantics.
- `#terminology > Search all Valuesets` (2021-10-17 to 2021-10-20) discusses `FHIR-19442`. Grahame describes the requirement behind `ValueSet/@all` as "text search across all terminology on the server"; Michael Lawley describes ambiguity around "all ValueSets known to the system". This supports the Jira concern that the old `@all` semantics were server-specific.
- `#terminology > property for op=regex` (2019-08-29 to 2019-08-30) led to `GF#23787`/`FHIR-23787`; it shows the original concern that `code` was not listed as a standard property for `regex`.
- `#terminology > Filtering by property` (2022-03-25) led to `FHIR-36643`; it discusses filter/property semantics and the need for standard `exists`/`regex` filter behavior.
- Searches for exact changed phrases such as `"required input parameters"`, `"FHIR Terminology Servers SHALL support"`, and `"normative terminology service capability statement"` found no direct Zulip rationale beyond the contextual HAPI thread. Exact Jira-key searches had to be rerun quoted because unquoted `FHIR-XXXXX` is parsed badly by FTS.

## Confluence evidence

- `94636347` (R5 FHIR Terminology Server Minimum Requirements Task Force, 2022-03-09) records the task force process for minimum CapabilityStatement/TerminologyCapabilities requirements. It includes the TerminologyCapabilities element-by-element inclusion decisions that fed `FHIR-24698`.
- `108310506` (2022-09-01 Vocab WG call) records reopening and resolving `FHIR-24698`, specifically: "Create a new, replacement CapabilityStatement and TerminologyCapabilities".
- `90360848` (2022-05 Terminology Service connectathon page) is process/context evidence for testing terminology-service conformance against the minimum set of requirements, linked to `FHIR-24698`.
- `79515101` (2021-10-20 tracker minutes) records `FHIR-19442`: use of `@all` was limited/server-specific, Grahame reviewed comments, and the ticket remained resolved-change-required.
- `139674124` (2022-10-24 tracker minutes) records `FHIR-36643` as a substantive but acceptable R5 trial-use change.
- `156533665` (2023-02-06 tracker minutes) gives the richest background on `FHIR-23787`: participants distinguish CodeSystem properties, filters, and `$lookup` property parameters; agreed heading/wording changes match the applied page.
- `234786191` (2024-04-22 tracker minutes) records `FHIR-45006` as resolved-change-required for closure-table text.
- `51218206` (May 2019 WGM) is older process context for `$find-matches` and `$closure`: group agreed not to move `$find-matches` forward for R5 and recommended more exercise of `$closure` to advance maturity. This is not direct evidence for the 2025 removal commit.

## Timeline

- 2019-05: Vocab WGM discussed `$find-matches` and `$closure`; no direct R6 removal decision found in that page.
- 2019-08: Zulip `property for op=regex` discussion leads to `FHIR-23787`.
- 2019-09: `FHIR-24698` and `FHIR-24699` created.
- 2021-10: `FHIR-19442` resolved to remove `ValueSet/@all`; Zulip discussion found possible interest but final Jira/Confluence evidence leaves removal in place.
- 2022-03: Terminology Server Minimum Requirements Task Force records CapabilityStatement/TerminologyCapabilities decisions for `FHIR-24698`.
- 2022-09-01: Vocab reopens/resolves `FHIR-24698` to create replacement CapabilityStatement/TerminologyCapabilities; source commits apply the page conformance section on 2022-09-02.
- 2022-10 to 2023-02: `FHIR-36643`, `FHIR-38972`, `FHIR-38974`, and `FHIR-23787` are resolved and applied.
- 2024-04-22: `FHIR-45006` resolved for closure-table relationship text.
- 2025-03-13: `FHIR-45006` applied to closure-table text.
- 2025-10-31: page marked Normative for R6.
- 2025-11-02: closure-table section removed for R6 normative ballot preparation.
- 2025-11-03: TI WG IG implementer note added and e.g. punctuation cleanup applied.

## Evidence log

- Confirmed both page files exist with `test -f .../source/terminology-service.html`.
- Generated direct diff with:
  - `git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/terminology-service.html`
- Generated page history with:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/terminology-service.html`
- Inspected individual patches with `git show --stat --patch <COMMIT> -- source/terminology-service.html`.
- Snapshotted Jira issues with `bun run jira:search snapshot <KEY>` for the keys listed above; used SQL summaries to separate page-specific keys from broad batch context.
- Searched Zulip with exact keys and distinctive phrases; snapshotted `hapi/HAPI as a terminology service?`, `terminology/Search all Valuesets`, `terminology/property for op=regex`, `terminology/Filtering by property`, and `Vocabulary/committers/FHIR-36643`.
- Searched Confluence with `refs jira <KEY>` and FTS phrases; snapshotted page IDs `94636347`, `108310506`, `90360848`, `156533665`, `234786191`, `79515101`, `139674124`, `154993304`, `144991201`, and `51218206`.
- Failed/low-confidence searches:
  - Zulip exact phrase searches for `"required input parameters"` and `"FHIR Terminology Servers SHALL support"` found no direct rationale.
  - Confluence FTS queries containing literal `$closure` produced FTS syntax errors; reran as `closure find matches` / `closure operation find matches`, which found only older context, not the 2025 removal decision.

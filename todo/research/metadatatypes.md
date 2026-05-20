# metadatatypes research appendix

## Scope and coverage

- Page path: `source/metadatatypes.html`.
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Page boundary confirmed: `source/metadatatypes.html` exists in both trees; direct line counts were 408 old and 519 new.
- The full newer source page was read end-to-end: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/metadatatypes.html:1-519`.
- Source history found 33 commits touching this page between the boundary commits. Explicit Jira keys in source history: `FHIR-32973`, `FHIR-21220`, `FHIR-29035`, `FHIR-25381`, `FHIR-26641`, `FHIR-33341`, `FHIR-16380`, `FHIR-27768`, `FHIR-25431`, `FHIR-38872`, `FHIR-38682`, `FHIR-37816`, `FHIR-39497`, `FHIR-47467`, `FHIR-50010`, `FHIR-44047`.
- Jira snapshots were taken for all explicit keys above and for `FHIR-51822`, which surfaced from a targeted Jira search as a current open issue naming `metadatatypes.html`.
- Zulip searches were run for explicit Jira keys and changed phrases. First unquoted Jira-key FTS searches failed because FTS parsed hyphenated keys as expressions; the searches were rerun successfully with quoted keys.
- Confluence searches were run by Jira refs/FTS for explicit keys and targeted phrases; relevant minutes were snapshotted.
- Caveat: community searches were bounded. They focused on explicit Jira keys, distinctive changed phrases, and current-page defects rather than exhaustive context-only hits.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Current R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/metadatatypes.html:1-519` | Full current source reviewed. |
| Source | Page title/status/table of contents | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/metadatatypes.html:15-57` | Shows R6 title/status and added datatypes. |
| Source | DataRequirement example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/metadatatypes.html:81-151` | Shows `performed` path correction. |
| Source | RelatedArtifact guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/metadatatypes.html:177-233` | Contains `SHALL NOT` bidirectional-linking rule and R6 usage guidance. |
| Source | Expression language support | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/metadatatypes.html:291-329` | Added semantic guidance for FHIRPath, x-fhir-query, and CQL media types. |
| Source | New PA datatypes | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/metadatatypes.html:362-470` | Current ExtendedContactDetail, VirtualServiceDetail, Availability, MonetaryComponent sections. |
| Source | Current skipped heading | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/metadatatypes.html:217-225` | Current `h4` follows `h2`, matching open Jira `FHIR-51822`. |
| Source | Current typos | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/metadatatypes.html:298`, `:316-318`, `:373`, `:453` | Concrete reader-facing editorial defects. |
| Commit | `f2d1f8f99b80c410ee2486b94ee8bfc8d27f6548` | https://github.com/HL7/fhir/commit/f2d1f8f99b80c410ee2486b94ee8bfc8d27f6548 | Implements `J#32973` RelatedArtifact changes and no-bidirectional-linking note. |
| Commit | `606d18ae40e640ba3011e0d580e062db30168744` | https://github.com/HL7/fhir/commit/606d18ae40e640ba3011e0d580e062db30168744 | Removes remaining Contributor page shell per `FHIR-21220`. |
| Commit | `acc4b456fa47bb7e776b4263561463c03b3ea3ce` | https://github.com/HL7/fhir/commit/acc4b456fa47bb7e776b4263561463c03b3ea3ce | Adds ExtendedContactDetail page section for `FHIR-29035`. |
| Commit | `447e89f4a40f92d16f33490766f29b9bce017236` | https://github.com/HL7/fhir/commit/447e89f4a40f92d16f33490766f29b9bce017236 | Adds Availability amid large line-ending/mechanical churn for `FHIR-25381`/`FHIR-26641`. |
| Commit | `7cf46b9270d28e976d4882ee79f337e119904879` | https://github.com/HL7/fhir/commit/7cf46b9270d28e976d4882ee79f337e119904879 | Adds VirtualServiceDetail section for `FHIR-33341`. |
| Commit | `5c52eddab2a0f84a64baf9af7025e120a1b9c98e` | https://github.com/HL7/fhir/commit/5c52eddab2a0f84a64baf9af7025e120a1b9c98e | Adds MonetaryComponent section for `FHIR-16380`. |
| Commit | `59ec2d482f069e93b9f619942e2dcea5b5dbdc82` | https://github.com/HL7/fhir/commit/59ec2d482f069e93b9f619942e2dcea5b5dbdc82 | Removes empty duplicated `#interpretation` sections for `FHIR-27768`. |
| Commit | `36365345c78a1ddcd443605a8c033a4dd757c61d` | https://github.com/HL7/fhir/commit/36365345c78a1ddcd443605a8c033a4dd757c61d | Adds Expression language support section for `FHIR-38872`. |
| Commit | `14b1f818e35c07b3887a664d0ab5f780e401daba` | https://github.com/HL7/fhir/commit/14b1f818e35c07b3887a664d0ab5f780e401daba | Fixes DataRequirement example path per `FHIR-37816`. |
| Commit | `c576b1ccbae661500dd32fa942553a90a860bdbc` | https://github.com/HL7/fhir/commit/c576b1ccbae661500dd32fa942553a90a860bdbc | Adds R6 RelatedArtifact usage guidance for `FHIR-50010`. |
| PR | RelatedArtifact simplification PR | https://github.com/HL7/fhir/pull/3722 | Linked from `FHIR-50010` Jira comment. |
| Jira | `FHIR-50010` | https://jira.hl7.org/browse/FHIR-50010; reopen with `bun run jira:search snapshot FHIR-50010` | Formal R6 RelatedArtifact simplification and guidance issue. |
| Jira | `FHIR-51822` | https://jira.hl7.org/browse/FHIR-51822; reopen with `bun run jira:search snapshot FHIR-51822` | Open current issue explicitly naming skipped heading levels in `metadatatypes.html`. |
| Zulip | RelatedArtifact Replacement Discussions | `bun run zulip:search snapshot implementers "RelatedArtifact Replacement Discussions"`; https://chat.fhir.org/#narrow/stream/implementers/topic/RelatedArtifact%20Replacement%20Discussions | Rationale and disagreement that led to `FHIR-50010`. |
| Zulip | Skipped heading levels | `bun run zulip:search snapshot committers "Skipped heading levels"`; https://chat.fhir.org/#narrow/stream/committers/topic/Skipped%20heading%20levels | Confirms skipped heading levels are unintended and tracked by `FHIR-51822`. |
| Zulip | Removing Contributor DataType | `bun run zulip:search snapshot committers "Removing the Contributor DataType"` | Informal rationale supporting Contributor removal. |
| Zulip | Extension Context | `bun run zulip:search snapshot committers "Extension Context"` | Notes new metadata datatypes and MnM approval status. |
| Zulip | Datatype proposal? | `bun run zulip:search snapshot "fhir/infrastructure-wg" "Datatype proposal?"` | Availability datatype design discussion, including timezone/overnight semantics. |
| Confluence | MnM `FHIR-32973` minutes | https://confluence.hl7.org/spaces/MnM/pages/120754555/MnM+Minutes+CC+20210804; `bun run confluence:search snapshot 120754555` | Formal MnM discussion/resolution for RelatedArtifact issue. |
| Confluence | OO follow-up on `FHIR-32973` | https://confluence.hl7.org/spaces/OO/pages/120752049/2021-08-05+Main; `bun run confluence:search snapshot 120752049` | OO concern about bidirectional codes and use in DocumentReference. |
| Confluence | FHIR-I `FHIR-27768` minutes | https://confluence.hl7.org/spaces/FHIRI/pages/91985630/FHIR+Infrastructure+Minutes+CC+20200831; `bun run confluence:search snapshot 91985630` | Approves removing empty broken `#interpretation` sections. |
| Confluence | MnM PA type review | https://confluence.hl7.org/spaces/MnM/pages/108309812/MnM+Minutes+CC+20220817; `bun run confluence:search snapshot 108309812` | MnM approval/concern split for PA metadata datatypes. |
| Confluence | FHIR-I `FHIR-50010` vote | https://confluence.hl7.org/spaces/FHIRI/pages/325461753/FHIR+Infrastructure+Minutes+CC+2025-04-07; `bun run confluence:search snapshot 325461753` | Records `FHIR-50010` persuasive vote. |
| Confluence | Later RelatedArtifact discussion | https://confluence.hl7.org/spaces/FHIRI/pages/404100072/FHIR+Infrastructure+Minutes+WGM+202601+-+Virtual; `bun run confluence:search snapshot 404100072` | Later context mentioning `metadatatypes.html#RelatedArtifact`; not enough by itself for a current-page action. |

## Change summary

- **Substantive/normative: RelatedArtifact expanded then simplified.** `FHIR-32973` changed RelatedArtifact wording from "resources related to a module" to "resources related to an artifact", broadened target support in datatype definitions, and added the current no-bidirectional-linking normative statement (`SHALL NOT`) at current lines 217-222. `FHIR-50010` later added current R6 guidance at lines 224-233 requiring work groups to decide core relationship/target-type use, define invariants, and get FHIR-I methodology approval for new relationship types.
- **Substantive: Contributor removed from this page.** R4 had a Contributor section and table entry; R6 has neither. The removal is tied to `FHIR-21220` and the later Contributor Zulip thread.
- **Substantive: new metadata datatypes added.** R6 includes ExtendedContactDetail, VirtualServiceDetail, Availability, and MonetaryComponent sections and tab registration. These trace to `FHIR-29035`, `FHIR-25381`, `FHIR-33341`, and `FHIR-16380`.
- **Semantic guidance: Expression language support added.** `FHIR-38872` added guidance for `text/fhirpath`, `text/x-fhir-query`, `text/cql`, `text/cql-identifier`, and `text/cql-expression` at current lines 314-329.
- **Example change: DataRequirement path correction.** `FHIR-37816` changed choice-specific example paths (`performedPeriod`, `performedDateTime`) to simple FHIRPath `performed` in XML examples at current lines 119 and 145.
- **Editorial/model rename: MedicationUsage -> MedicationStatement.** `FHIR-38682` updates DataRequirement and ParameterDefinition explanatory examples at current lines 101 and 165.
- **Metadata/template/navigation.** Page title/status changed from R4 "MetaData Types", FMM 4, partially normative to R6 `MetaDatatypes`, page-level normative status, green TOC cells, extra type framework cross-reference, and `See also` links for Profiles/Extensions. Many `h3` section headings became `h2`; jquery paths changed to `assets/js/...`.
- **Editorial/rendering cleanup.** `FHIR-27768` removed empty duplicate `#interpretation` sections. `FHIR-44047` corrected some `e.g.` punctuation. However, one current skipped heading remains for RelatedArtifact and is tracked by `FHIR-51822`.
- **Mechanical/noise.** `447e89f4...` is a large whole-file churn commit where the meaningful page addition is Availability; several template/navigation commits add links/status/coloring without page-specific semantic intent.

## Source history

| Commit | Date | Subject | Page-specific interpretation |
|---|---:|---|---|
| `d7b8dadc6213` | 2021-06-27 | update html template | Mechanical/template. |
| `f2d1f8f99b80` | 2021-09-20 | J#32973: Expanded RelatedArtifact types and added ability to reference a Resource; removed url element | Meaningful RelatedArtifact change; adds no-bidirectional-linking rule. |
| `606d18ae40e6` | 2021-09-21 | J#21220: Removed Contributor data type from the metadata types page; updated documentation that still refers to it | Removes Contributor page shell/table/script entries. |
| `acc4b456fa47` | 2022-02-20 | FHIR-29035 ExtendedContactDetail metadata type for use in directory resources | Adds ExtendedContactDetail section. |
| `2f3c04ac95a1` | 2022-02-25 | Fix tabs on the ExtendedContactDetail | Rendering/tab support for ExtendedContactDetail. |
| `447e89f4a40f` | 2022-08-10 | FHIR-25381New standard extension for Organization telephone opening hours FHIR-26641Location is missing Status Date/Period information | Large mechanical churn plus Availability addition. |
| `7cf46b9270d2` | 2022-08-10 | FHIR-33341 Add info about video meeting details to Appointment | Adds VirtualServiceDetail section. |
| `5c52eddab2a0` | 2022-08-11 | FHIR-16380 New MetaElement for PriceComponent | Adds MonetaryComponent section. |
| `e886161f3fea` | 2022-08-12 | FHIR-29035 Update the usage notes on the ExtendedContactDetail metadata type | Adds ExtendedContactDetail explanatory paragraphs and promotes headings to `h2`. |
| `59ec2d482f06` | 2022-08-29 | FHIR-27768 UsageContext interpretation section is empty (and link is broken?) | Removes empty ContactDetail/UsageContext duplicate interpretation anchors. |
| `8592e1207273` | 2022-08-31 | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Broad terminology cleanup. |
| `4652397b3f33` | 2022-09-05 | work on navigation and consistency | Navigation/template. |
| `7bf9e9408044` | 2022-09-09 | more datatypes indexing | Adds/updates cross-page datatype links. |
| `d9db15e31294` | 2022-10-11 | Better track standards + FMM status for types | Status macro/template changes. |
| `36365345c78a` | 2022-12-08 | FHIR-38872 Expression should support operations | Adds Expression language support narrative. |
| `f96429e55658` | 2022-12-08 | typos | Editorial only. |
| `fc7cfe460cab` | 2022-12-09 | update cql links | Updates CQL link details. |
| `b2032629f28b` | 2023-01-25 | FHIR-38682 | MedicationUsage -> MedicationStatement rename. |
| `14b1f818e35c` | 2023-02-10 | FHIR-37816 Invalid example for DataRequirements | Fixes DataRequirement example path. |
| `dad7cf37c758` | 2023-02-21 | QA related changes | QA/template. |
| `9f780149387d` | 2023-02-21 | more QA | QA/template. |
| `60e98c41f6c5` | 2023-02-24 | more QA | QA/template. |
| `22b5c2457301` | 2023-03-12 | reorganise data types pages ready for IG | Page/link reorganization. |
| `c5a1cbeada5c` | 2023-03-14 | regenerate links to use extension IG | Link regeneration. |
| `2c4a3bcb91f8` | 2023-05-18 | FHIR-39497 Short and long definitions can't be identical on PA metadata types | Adds MonetaryComponent narrative paragraph. |
| `865a65b10e1a` | 2025-02-25 | Changed title and workgroup | Page title/owner metadata. |
| `dbb78e2435ad` | 2025-02-28 | FHIR-47467 The resource pages indicate the diff with R4 and not R5 | Broad publication/diff metadata, no page-specific semantic issue found here. |
| `ae7b5cba2cf9` | 2025-03-31 | html conformance changes | Template/conformance. |
| `a581075555b0` | 2025-05-01 | upgrade jquery | Mechanical script path update. |
| `c576b1ccbae6` | 2025-10-11 | [FHIR-50010](https://jira.hl7.org/browse/FHIR-50010): Simplified the RelatedArtifact resource | Adds R6 RelatedArtifact usage guidance to this page. |
| `270e0ceb7b02` | 2025-10-31 | normative changes for R6 | Page status changes to Normative; removes per-type `dtstatus` macros. |
| `605a6ffefb83` | 2025-10-31 | more normative. changes | Removes page normative macro. |
| `03893addeb0a` | 2025-11-03 | fully remove Contributor data type (FHIR-21220 Add "publisher" to contributor type valueset) | Changes TOC cell colors to normative green; subject references Contributor cleanup. |
| `887bc2383fb7` | 2025-11-03 | FHIR-44047 | Adds comma after `e.g.` occurrences on this page. |
| `32ee662cd81e` | 2025-11-04 | Merge branch 'master' into i.e.-e.g- | Merge with no independent page rationale. |

## Jira evidence

### Explicit Jira keys from commits/patches

| Key | Status | Resolution/impact | Relevant evidence |
|---|---|---|---|
| `FHIR-32973` | Published | Persuasive with Modification; Non-compatible; R5 | Requested RelatedArtifact updates based on `FHIR-32795`, including implementation note that resource/reference combinations must not create bidirectional relationships. Implemented by `f2d1f8f...`. |
| `FHIR-21220` | Applied | Not Persuasive with Modification; Non-compatible; R6 | Resolution says Contributor type is being removed because publisher is represented by dedicated metadata elements; implemented in this page by `606d18a...` and later cleanup. |
| `FHIR-29035` | Published | Persuasive; Compatible, substantive; R5 | Creates ExtendedContactDetail for comprehensive contact representation. PA minutes later note binding-strength update. |
| `FHIR-25381` | Published | Persuasive; Non-compatible; R5 | Requests opening hours/availability support; resolution creates Availability structure. |
| `FHIR-26641` | Published | Persuasive with Modification; Compatible, substantive; R5 | Related Location availability/status-period issue; appears in same Availability source commit. |
| `FHIR-33341` | Published | Persuasive with Modification; Non-compatible; R5 | Requests video meeting details; resolution creates virtual service contact/detail support. |
| `FHIR-16380` | Published | Persuasive; Compatible, substantive; R5 | Creates MonetaryComponent metadata type from financial backbone structure. |
| `FHIR-27768` | Published | Persuasive with Modification; Non-substantive; R5 | Identifies broken duplicate `#interpretation` anchors and empty sections; resolution says remove them. |
| `FHIR-25431` | Published | Persuasive; R5 | Broad `datatype` vs `data type` consistency issue. |
| `FHIR-38872` | Published | Persuasive with Modification; Compatible, substantive; R5 | Requests Expression support for operations; resolution moves/defines `x-fhir-query` support and operation invocation guidance. |
| `FHIR-38682` | Published | Persuasive with Modification; Non-compatible; R5 | Renames MedicationUsage back to MedicationStatement; page text was updated accordingly. |
| `FHIR-37816` | Published | Persuasive; Non-substantive; R5 | DataRequirement example had invalid choice-type paths; resolution says path should be simple FHIRPath without type-name selectors. |
| `FHIR-39497` | Applied | Persuasive; Non-substantive; vote 2023-05-11 | Requires distinct long definitions/narrative for PA metadata types; current page has MonetaryComponent narrative but still has minor typo. |
| `FHIR-47467` | Applied | Persuasive; Non-substantive; R6 | Broad publication/diff-basis issue; no page-specific action found. |
| `FHIR-50010` | Applied | Persuasive; Non-compatible; R6; vote 2025-04-07 | Simplifies RelatedArtifact datatype and adds usage guidance. Jira comment links PR `https://github.com/HL7/fhir/pull/3722`. |
| `FHIR-44047` | Resolved - change required | Persuasive; correction | Broad e.g./i.e. punctuation issue; current page has some applied `e.g.,` fixes. |

### Other Jira issues plausibly relevant to current page

| Key | Status | Why it matters |
|---|---|---|
| `FHIR-51822` | Submitted | Targeted Jira search for `metadatatypes.html` found this open TC. It explicitly lists `metadatatypes.html: h4 follows H2 - "2.1.28.5.0.4.0.1Interpretation of RelatedArtifact in different contexts"`. Current source still has that `h4` after the RelatedArtifact `h2` at lines 217-225. |

### Context-only Jira hits not driving action

- Targeted search for `"metadatatypes.html" "RelatedArtifact"` also returned `FHIR-47418`, `FHIR-25217`, `FHIR-20198`, `FHIR-49010`, `FHIR-33925`, and `FHIR-39084`. These were not elevated because the snippets did not show a current `metadatatypes.html` defect or a direct intent mismatch for this page.
- `FHIR-40920`, `FHIR-49782`, `FHIR-49783`, and `FHIR-50011` are related background issues named in the `FHIR-50010` Jira/Zulip thread, but this review did not need to rely on them to assess the page text.

## Zulip evidence

| Thread | Snapshot command | Relevant finding |
|---|---|---|
| `#committers > Removing the Contributor DataType` | `bun run zulip:search snapshot committers "Removing the Contributor DataType"` | In 2020-2021 discussion, Lloyd says no one spoke in favor of keeping Contributor and applying the tracker/removing it is in order; supports source removal tied to `FHIR-21220`. |
| `#committers > metadata types` | `bun run zulip:search snapshot committers "metadata types"` | Brian Postlethwaite notes adding ExtendedContactDetail for `FHIR-29035`; Grahame explains tabs must be registered at the file foot, matching later script changes. |
| `#fhir/infrastructure-wg > Datatype proposal?` | `bun run zulip:search snapshot "fhir/infrastructure-wg" "Datatype proposal?"` | Availability datatype discussion includes timezone and overnight availability questions; useful background for `FHIR-25381`, but no current page mismatch found. |
| `#committers > Extension Context` | `bun run zulip:search snapshot committers "Extension Context"` | Brian lists three new metadata datatypes (`FHIR-16380`, `FHIR-33341`, `FHIR-25381`) and asks about extension datatype inclusion; later notes Monetary and Availability approved and VirtualServiceDetail needed more MnM discussion. |
| `#implementers > RelatedArtifact Replacement Discussions` | `bun run zulip:search snapshot implementers "RelatedArtifact Replacement Discussions"` | Feb-Mar 2025 discussion shows the methodology tension behind `FHIR-50010`: whether to replace RelatedArtifact with explicit resource-specific elements, whether all relationship codes/types meet 80%, and whether typed relationships are an anti-pattern. Bryn posts `FHIR-50010` as the proposed simplification tracker. |
| `#committers > Skipped heading levels` | `bun run zulip:search snapshot committers "Skipped heading levels"` | Jose reports skipped heading levels and created TC Jiras including `FHIR-51822`; Lloyd confirms inappropriate heading nesting causes wonky numbering; John notes a similar page fix was not intended to be left broken. |

Failed/negative Zulip searches that affect confidence:

- Initial key searches like `bun run zulip:search fts "FHIR-50010"` failed with SQLite `no such column` because FTS parsed the hyphen; rerun with `bun run zulip:search fts "\"FHIR-50010\""` succeeded.
- Phrase searches for `"text/x-fhir-query" operations`, `"MonetaryComponent" "different type of value"`, and `"heading levels" metadatatypes` found no direct Zulip hits beyond the issue-key threads.

## Confluence evidence

| Page ID | Title | Snapshot command | Relevant finding |
|---|---|---|---|
| `120754555` | MnM Minutes CC 20210804 | `bun run confluence:search snapshot 120754555` | MnM agenda includes RelatedArtifact datatype issue `FHIR-32973`; minutes say the ticket was resolved. Same meeting included 80% rule discussion. |
| `120752049` | 2021-08-05 Main (OO) | `bun run confluence:search snapshot 120752049` | OO notes MnM approved a RelatedArtifact datatype change, but raises concerns about bidirectional codes and asks for better guidance from MnM. This aligns with current no-bidirectional-linking text. |
| `91985630` | FHIR Infrastructure Minutes CC 20200831 | `bun run confluence:search snapshot 91985630` | `FHIR-27768` minutes say four `metadatatypes.html` paragraphs pointed to `#interpretation`, were empty, and the link was broken; voted to remove. |
| `108309812` | MnM Minutes CC 20220817 | `bun run confluence:search snapshot 108309812` | MnM approved `FHIR-16380` conditionally and `FHIR-25381`; did not approve `FHIR-33341` at that meeting pending further discussion. Later PA/source history shows VirtualServiceDetail nevertheless present by R6. |
| `101358522` | 2022 May WGM - Patient Administration | `bun run confluence:search snapshot 101358522` | PA minutes record `FHIR-29035` reopened/updated binding strength, `FHIR-25381` persuasive vote, and related VirtualContactDetail/Encounter discussion tied to `FHIR-33341`. |
| `144976863` | FHIR-I Methodology/Data Types minutes 2022-11-23 | `bun run confluence:search snapshot 144976863` | Records creation of `FHIR-39497` to correct metadata type descriptions. |
| `161077491` | 2023 May WGM (New Orleans) - Meeting Minutes | `bun run confluence:search snapshot 161077491` | PA votes `FHIR-39497` persuasive and says documentation will be updated per the resolution. |
| `325461753` | FHIR Infrastructure Minutes CC 2025-04-07 | `bun run confluence:search snapshot 325461753` | Records `FHIR-50010` persuasive vote: Lloyd McKenzie / Bryn Rhodes, 11-0-0. |
| `234784975` | FHIR Infrastructure Minutes WGM 202405 - Dallas | `bun run confluence:search snapshot 234784975` | Records `FHIR-44047 will fix`, supporting punctuation cleanup intent. |
| `404100072` | FHIR Infrastructure Minutes WGM 202601 - Virtual | `bun run confluence:search snapshot 404100072` | Later discussion references `metadatatypes.html#RelatedArtifact` and relatedArtifact extension context. It is useful later context but was not strong enough to claim the R6 ballot4 page is wrong. |

Confluence search for `FHIR-51822` found no pages; the issue is supported by Jira and Zulip instead.

## Timeline

- 2019-09-09: `FHIR-21220` resolved; resolution says Contributor type should be removed when no longer used.
- 2020-08-13 to 2021-09-21: Zulip Contributor thread confirms no support for keeping Contributor and says removing it is in order.
- 2020-08-31: FHIR-I minutes resolve `FHIR-27768` to remove broken empty `#interpretation` sections.
- 2021-06-23 to 2021-08-04: MnM/Confluence tracks RelatedArtifact harmonization and resolves `FHIR-32973`.
- 2021-09-20: Commit `f2d1f8f...` applies RelatedArtifact changes to this page, including no-bidirectional-linking note.
- 2021-09-21: Commit `606d18a...` removes remaining Contributor page artifacts.
- 2021-09-21: Zulip datatype proposal thread discusses Availability design details and FHIR-I/MnM procedure.
- 2022-01 to 2022-05: PA/Jira votes and resolutions for `FHIR-16380`, `FHIR-25381`, `FHIR-29035`, and `FHIR-33341`.
- 2022-08-10 to 2022-08-12: Commits add Availability, VirtualServiceDetail, MonetaryComponent, and updated ExtendedContactDetail usage notes.
- 2022-08-29: Commit `59ec2d...` removes empty broken interpretation sections for `FHIR-27768`.
- 2022-10-24: FHIR-I resolves `FHIR-38872` persuasive with modification.
- 2022-12-08: Commit `363653...` adds Expression language-support text.
- 2023-02-10: Commit `14b1f8...` fixes DataRequirement example for `FHIR-37816`.
- 2023-05-11 to 2023-05-18: PA resolves `FHIR-39497`; commit `2c4a3b...` adds MonetaryComponent narrative.
- 2025-02-28 to 2025-03-14: Zulip RelatedArtifact replacement discussion leads to `FHIR-50010`.
- 2025-04-07: FHIR-I votes `FHIR-50010` persuasive.
- 2025-08-17: `FHIR-51822` is created for skipped heading levels and explicitly names `metadatatypes.html`.
- 2025-10-11: Commit `c576b1...` applies R6 RelatedArtifact usage guidance and links PR 3722 in Jira.
- 2025-10-31 to 2025-11-03: Normative/status changes and `e.g.,` punctuation edits land before R6 ballot4 boundary.
- 2026-01: Later Confluence discussion references RelatedArtifact and `metadatatypes.html#RelatedArtifact`; treated as background only for this page review.

## Evidence log

- Confirmed boundary and line counts:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/metadatatypes.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/metadatatypes.html" && echo "new exists"`
  - `wc -l <old> <new>` -> 408 old, 519 new.
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/metadatatypes.html`
  - Result: 318-line diff, 215 insertions and 103 deletions.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/metadatatypes.html`
  - Result: 33 page-touching commits.
  - Selected page-specific commits were inspected with `git show --stat --patch <commit> -- source/metadatatypes.html`.
- Jira:
  - Snapshots: `bun run jira:search snapshot FHIR-32973`, `FHIR-21220`, `FHIR-29035`, `FHIR-25381`, `FHIR-26641`, `FHIR-33341`, `FHIR-16380`, `FHIR-27768`, `FHIR-25431`, `FHIR-38872`, `FHIR-38682`, `FHIR-37816`, `FHIR-39497`, `FHIR-47467`, `FHIR-50010`, `FHIR-44047`, `FHIR-51822`.
  - Targeted FTS: `"relationships and target types" "core" RelatedArtifact` found `FHIR-50010`; `"each item provides a different type of value"` found `FHIR-39497`; `"metadatatypes.html" "RelatedArtifact"` found `FHIR-51822` among context-only hits.
  - Exact `"In practice, this datatype SHALL NOT"` and `"text/x-fhir-query" "text/cql-identifier"` searches found no Jira hits beyond the known issues.
- Zulip:
  - Quoted key searches: `bun run zulip:search fts "\"FHIR-50010\"" --limit 20`, similarly for explicit keys.
  - Snapshots: RelatedArtifact Replacement Discussions, Skipped heading levels, Removing Contributor DataType, metadata types, Extension Context, Datatype proposal?
- Confluence:
  - Refs/FTS searches for explicit keys, including `bun run confluence:search refs jira FHIR-50010` and `bun run confluence:search fts FHIR-50010 --limit 10`.
  - Snapshots: `120754555`, `120752049`, `91985630`, `108309812`, `101358522`, `144976863`, `161077491`, `325461753`, `234784975`, `404100072`.

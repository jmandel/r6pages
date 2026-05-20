# logical research appendix

## Scope and coverage

- Page path: `source/logical.html`.
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`.
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Page boundary: confirmed present in both source trees.
- Newer page read end-to-end: yes, 118 lines at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/logical.html`.
- Old page read for baseline: yes, 33 lines at `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/logical.html`.
- Source history coverage: 15 commits touched `source/logical.html` between the two commits.
- Explicit Jira keys in page-touching commits: `FHIR-25431`, `FHIR-44047`.
- Additional directly relevant Jira found by phrase search: `FHIR-37543` (substantive rationale to bring the page back) and `FHIR-40368` (logical-model anchor ambiguity, mostly adjacent context).
- Jira/Zulip/Confluence searches were bounded to the explicit keys plus distinctive phrases such as `"logical models" page`, `"logical data model"`, `"redefining the FHIR primitive datatypes"`, and `"shall consider the terminology binding"`.
- Caveats:
  - PR `HL7/fhir#2173` added the page but did not include a Jira key in the PR body; `FHIR-37543` is tied by Jira description/resolution/comments, Confluence vote, timing, and subject matter rather than an explicit commit trailer.
  - Zulip FTS searches for bare Jira keys with hyphens failed as SQL parsed `FHIR-25431`/`FHIR-44047`; reran key checks with SQL `LIKE`, which found no key mentions.
  - Confluence snapshots often render meeting text as a single long line; relevant excerpts were extracted by key.
  - Broad logical-model background hits were not exhaustively followed once direct page evidence and current-page issues were established.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/logical.html:19` | R4 baseline was a short stub plus `ToDo` |
| Source | New R6 page intro | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/logical.html:20` | Current definition of logical model |
| Source | New R6 definition section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/logical.html:30` | StructureDefinition/base type guidance |
| Source | New R6 datatype/terminology text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/logical.html:59` | Guidance on logical-model datatypes and terminology bindings |
| Source | New R6 usage text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/logical.html:68` | Functional modeling, patterns, mapping, and terminology examples |
| Source | Documentation page link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/documentation.html:125` | Shows the page is linked from Documentation, matching `FHIR-37543` intent |
| Source | Type framework link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/types.html:34` | Additional navigation link to Logical Models |
| Source | Base/Element anchors | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/types.html:46` and `:73` | Confirms current `logical.html` links the labels to the wrong anchors |
| Commit | Page stub | `1ee3e42c5c8a15106626f57540208a6a6a2a73ea` / `https://github.com/HL7/fhir/commit/1ee3e42c5c8a15106626f57540208a6a6a2a73ea` | Expanded the original R4 stub before the later replacement |
| Commit | Add full page | `e334c76082b2c3f47f52f444ccbb3b9f87486203` / `https://github.com/HL7/fhir/commit/e334c76082b2c3f47f52f444ccbb3b9f87486203` | Main substantive page addition |
| PR | Logical Models page | `https://github.com/HL7/fhir/pull/2173` | PR associated with the page-add commit; merged 2022-08-19 |
| Commit | Datatype terminology | `8592e1207273b786db340efb927bb6d1dc9756c9` / `https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9` | `FHIR-25431`; global "data type" -> "datatype" consistency pass |
| PR | Gg 202209 edits | `https://github.com/HL7/fhir/pull/2312` | PR associated with `FHIR-25431` commit; merged 2022-09-01 |
| Commit | R6 normative template/editorial | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / `https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Updated ownership/status table and fixed "Logicaldata" typo |
| PR | 2025 11 gg normative | `https://github.com/HL7/fhir/pull/3901` | PR associated with R6 normative/template edits |
| Commit | e.g. punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` / `https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | `FHIR-44047`; added commas after `e.g.` examples |
| PR | FHIR-44047 | `https://github.com/HL7/fhir/pull/3951` | PR associated with punctuation commit; merged 2025-11-06 |
| Jira | FHIR-37543 | `https://jira.hl7.org/browse/FHIR-37543`; command `bun run jira:search snapshot FHIR-37543` | Formal request and rationale to restore the logical model page |
| Jira | FHIR-25431 | `https://jira.hl7.org/browse/FHIR-25431`; command `bun run jira:search snapshot FHIR-25431` | Explicit commit key for datatype spelling consistency |
| Jira | FHIR-44047 | `https://jira.hl7.org/browse/FHIR-44047`; command `bun run jira:search snapshot FHIR-44047` | Explicit commit key for `e.g.,` / `i.e.,` punctuation |
| Jira | FHIR-40368 | `https://jira.hl7.org/browse/FHIR-40368`; command `bun run jira:search snapshot FHIR-40368` | Adjacent anchor ambiguity involving logical-model links |
| Zulip | Direct page review | `#fhir/infrastructure-wg > Logical models`; `https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Logical%20models`; command `bun run zulip:search snapshot fhir/infrastructure-wg "Logical models"` | Explains capitalization, "non-FHIR" framing, page URL, and primitive datatype edits |
| Zulip | Datatype rationale | `#implementers > Logical Models and data types`; `https://chat.fhir.org/#narrow/stream/implementers/topic/Logical%20Models%20and%20data%20types`; command `bun run zulip:search snapshot implementers "Logical Models and data types"` | Broader discussion behind logical vs physical datatype guidance |
| Zulip | Later instantiation clarification | `#implementers > Logical Models instantiation`; `https://chat.fhir.org/#narrow/stream/implementers/topic/Logical%20Models%20instantiation`; command `bun run zulip:search snapshot implementers "Logical Models instantiation"` | Later evidence that users may need current-page clarification about instances and FHIR REST conformance |
| Confluence | FHIR-37543 vote | Page `134943876`, `https://confluence.hl7.org/spaces/FHIRI/pages/134943876/FHIR+Infrastructure+Minutes+CC+2022-07-25`; command `bun run confluence:search snapshot 134943876` | FHIR-I vote: `FHIR-37543` persuasive with modification, 10-0-0 |
| Confluence | FHIR-25431 minutes | Page `66940491`, `https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113`; command `bun run confluence:search snapshot 66940491` | FHIR-I discussion of datatype/data type consistency |
| Confluence | FHIR-44047 WGM minutes | Page `234784975`, `https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas`; command `bun run confluence:search snapshot 234784975` | WGM item: `FHIR-44047 will fix` |
| Confluence | FHIR-40368 minutes | Page `288072268`, `https://confluence.hl7.org/spaces/FHIRI/pages/288072268/FHIR+Infrastructure+Minutes+CC+2024-12-09`; command `bun run confluence:search snapshot 288072268` | Anchor ambiguity resolution: change SD page anchor to `logical-models` |

## Change summary

### Replacement of R4 stub with substantive guidance

Classification: substantive/semantic guidance, informative status.

The R4 page only said that a logical model was "an expression of a set of content in a FHIR ready style" and ended with `ToDo: figure out how all this happens` (`old logical.html:19-28`). The R6 ballot4 page is a full guidance page defining logical models, how FHIR represents them, what content they contain, and where they are used (`new logical.html:20-108`).

This aligns with `FHIR-37543`, whose description asked to bring back a logical model page because logical models were being used in Shorthand/specification processes and needed explanation for functional data needs, data dictionaries, semantic compatibility, privacy-by-design, and data governance. The Jira resolution said to add a page under Documentation, include examples, cross-reference patterns, and update StructureDefinition notes.

### Definition and FHIR representation

Classification: substantive/semantic guidance.

The current page now defines a logical data model as a data-structure representation not necessarily based on or implemented in FHIR (`new logical.html:20-28`). It says a FHIR logical model is captured using StructureDefinition with `StructureDefinition.kind = logical`, a specialization of a base type, with example JSON for `kind`, `abstract`, `baseDefinition`, and `derivation` (`new logical.html:30-42`).

One current defect is in this section: the link text for `Element` and `Base` appears reversed against the anchors (`new logical.html:31`; `types.html:46-55`, `types.html:73-83`). This is carried into the action file.

### Content, datatypes, and terminology bindings

Classification: semantic guidance with some normative-sounding language.

The page now explains that logical models use StructureDefinition and ElementDefinition and lists expected metadata, cardinality, type, terminology binding, and example content (`new logical.html:43-57`). It says elements are expected to have a type because of how FHIR structures are defined, warns that FHIR datatypes bring physical constraints into abstract models, and says redefining FHIR primitive datatypes is not supported (`new logical.html:59-61`).

The phrase about primitive datatype limits is consistent with the direct Zulip page-review thread where Jose asked whether to add "it is not possible to redefine the FHIR primitives" and Lloyd answered that the main differentiator was "non-FHIR", not "non-physical" (`#fhir/infrastructure-wg > Logical models`, 2022-08-22).

The terminology-binding paragraph adds business/functional terminology constraints and says implementations following the logical model "shall consider the terminology binding" (`new logical.html:63-66`). No direct Jira hit was found for the exact phrase `"shall consider the terminology binding"`.

### Usage, patterns, mappings, and terminology examples

Classification: semantic guidance and examples.

The page now describes logical models for functional data modeling, data dictionaries, projecting onto FHIR resources/profiles or other standards, patterns, cross-version/standard mappings, and mappings to SNOMED CT concepts (`new logical.html:68-108`). The patterns link (`new logical.html:81-82`) matches the `FHIR-37543` resolution to cross-reference the patterns page.

### Metadata/template/navigation

Classification: metadata/template/navigation.

The page title changed from "Logical Models" to "Logical models"; the ownership/status table changed from the older Work Group + FMM + Standards Status row to the R6 "Responsible Owner" + Standards Status table, removing the FMM cell (`new logical.html:16-17`). The page is linked from Documentation (`documentation.html:125`) and Types (`types.html:34`).

### Editorial/mechanical changes

Classification: editorial only or mechanical/noise.

Later commits normalized link paths from absolute build/hl7 URLs to local relative links, standardized `datatype`/`datatypes` across the spec for `FHIR-25431`, fixed QA punctuation, and added commas after `e.g.` examples for `FHIR-44047`. Current source still has visible editorial defects (`They allows`, `posible`, `thic`, `techical`, and missing words in the patterns sentence), which are carried into the action file as a low-priority cleanup.

## Source history

| Commit | Date | Subject | Classification | Notes |
|---|---:|---|---|---|
| `1ee3e42c5c8a15106626f57540208a6a6a2a73ea` | 2020-10-14 | `LM page (stub)` | substantive early draft | Expanded the R4 stub into initial logical-model text, usage, crosswalk, content, and terminology sections. |
| `d581433bec934505453bd9bfd5b7e0e3ebb8155f` | 2022-08-16 | `Delete logical.html` | mechanical/intermediate | Temporarily deleted the page before re-adding a fuller version. |
| `e334c76082b2c3f47f52f444ccbb3b9f87486203` | 2022-08-16 | `add logical models page` | substantive | Main full-page addition; associated with `HL7/fhir#2173` merged 2022-08-19. |
| `18c76041bd6748a07dc8de528cc3f0f095ff4ae0` | 2022-08-16 | `avoid forbidden words` | editorial | Changed "may not be intended" to "might not be intended" and punctuation. |
| `ccc5a4ce5366d9e2d75dc1d13942b969848e7048` | 2022-08-16 | `fix style issues` | editorial/examples | Fixed parenthesis/list style and improved SNOMED CT example formatting. |
| `1e4034f22076c8ec937aa52ce9250037fe17860a` | 2022-08-17 | `fix html issues` | rendering/editorial | Closed a paragraph before a list and removed an empty list item. |
| `ff4df5ba6a2ece2067d61913d8e55dcdf368bbad` | 2022-08-21 | `Update logical.html` | editorial | Removed placeholder/unfinished "Mappings to defined terminologies and models" and "Art Decor To do" sections. |
| `fa2136bf8a4c31598de52db27f06a37cbeb581e8` | 2022-08-21 | `fix text issues` | semantic/editorial | Added primitive datatype warning, terminology-binding implementation sentence, and grammar fixes. |
| `d8f08145cce1ea44f06dd0acfec8674f8044117f` | 2022-08-30 | `fix logical models page` | semantic/editorial | Applied review feedback: lower-case title, "not necessarily based on or implemented in FHIR", added patterns section and primitive datatype sentence. |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | broad editorial consistency | Global 59-file consistency pass; changed this page to `Datatypes`/`datatypes`. Associated with `HL7/fhir#2312`. |
| `d382fc3af52ab7607c6c8fead1f47cdf09be3562` | 2022-12-13 | `fixing up broken links etc (links to build.fhir.org)` | navigation/mechanical | Converted logical page links from absolute URLs to relative source links. |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | `QA related changes` | QA/editorial | Briefly introduced double periods while addressing QA. |
| `9f780149387dc652bec02aa7744e52774acddbc9` | 2023-02-21 | `more QA` | QA/editorial | Reverted the double-period QA artifacts. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | metadata/template/editorial | Changed standards header template and fixed `Logicaldata` to `Logical data`; associated with `HL7/fhir#3901`. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | editorial | Added commas after `e.g.` in SNOMED examples; associated with `HL7/fhir#3951`. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-25431` (`https://jira.hl7.org/browse/FHIR-25431`): "Inconsistent use of `datatype` vs. `data type`." Snapshot says the issue was raised in R4, resolved/published as persuasive, applied for R5, and asked to pick one spelling and be consistent. The page commit standardized this page and many others to `datatype`/`datatypes`. Confluence minutes from 2020-01-13 contain a terse note "Using `data type` Will auto approve"; because the final applied source standardized the opposite way across 59 files and the Jira has no resolution description, I treated this as ambiguous historical context rather than a logical-page-specific action.
- `FHIR-44047` (`https://jira.hl7.org/browse/FHIR-44047`): "Incorrect punctuation of exempli gratia and id est (e.g., & i.e.,) throughout." Snapshot says to review content for R6. The logical page commit changed `e.g.` examples to `e.g.,` at `new logical.html:100`, `:104`, and `:108`. Confluence WGM page `234784975` records `FHIR-44047 will fix`.

### Other Jira issues plausibly explaining the changed page

- `FHIR-37543` (`https://jira.hl7.org/browse/FHIR-37543`): "Bring back Logical Model page." This is the main rationale for the R4-to-R6 change. The description asks to restore `logical.html` to explain what logical models are in FHIR, why they are useful, how they support functional data needs/data dictionaries/semantic compatibility/privacy/data governance, and whether to use FHIR physical datatypes. The resolution says to add a new Documentation page, include examples, cross-reference patterns, and update StructureDefinition notes. The current page and navigation substantially match this.
- `FHIR-40368` (`https://jira.hl7.org/browse/FHIR-40368`): "Link to structuredefinition.html#logical is ambiguous." It is adjacent to logical-model navigation rather than a direct `logical.html` change. Resolution says to change the StructureDefinition page anchor for the Logical Models section to `logical-models`; Confluence page `288072268` records the same rationale. I did not elevate this to the action file because it concerns `structuredefinition.html`, not a defect found on `logical.html`.

### Context-only Jira hits not used for action

- Jira FTS for `"logical data model"` mostly found unrelated IG/core context and did not explain this page.
- Jira FTS for `"logical models" page` found `FHIR-37543`, `FHIR-40368`, and other IG-specific logical-model issues; only the first two were relevant.
- Jira FTS for `"redefining the FHIR primitive datatypes"` and `"shall consider the terminology binding"` found no results.
- Jira searches for later logical-model instantiation clarification (`"Logical Models instantiation"`, `"logical models" resources CRUD`, and `"FHIR-conformant interface" "logical models"`) found no results.

## Zulip evidence

- `#fhir/infrastructure-wg > Logical models` (`https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Logical%20models`) is direct page-review evidence. On 2022-08-22 Jose listed topics for the logical models page: page URL, capitalization, whether the definition should say "not necessarily based on or dependent on a physical implementation", and whether to add that redefining FHIR primitives is not possible. Lloyd replied not to capitalize non-proper names and that the primary differentiator is "non-FHIR", not "non-physical". This aligns closely with the 2022-08-30 `fix logical models page` commit.
- `#implementers > Logical Models and data types` (`https://chat.fhir.org/#narrow/stream/implementers/topic/Logical%20Models%20and%20data%20types`) is broader rationale. The thread began 2022-06-17 with Jose asking for logical datatypes that avoid forcing physical FHIR datatypes into logical models. Grahame said tooling/infrastructure anticipates logical models cannot create their own primitive datatypes. The thread continued through 2023 with debate over abstract vs physical datatype systems. This supports the current datatype paragraph but does not prove a formal decision beyond the source text and direct page-review thread.
- `#implementers > Logical Models instantiation` (`https://chat.fhir.org/#narrow/stream/implementers/topic/Logical%20Models%20instantiation`) is later reassessment/clarification evidence. In August 2024, Evgeny asked whether logical models are intended to be instantiated and whether FHIR servers support CRUD for them. Grahame answered that logical models can be instantiated, but they are not resources and cannot automatically be regular FHIR REST endpoints; Lloyd added that an interface sharing FHIR logical models cannot claim to be FHIR-conformant. Jose asked whether the spec page should clarify this, then said a subsection for logical-model instances would help; Lloyd suggested submitting a change request, and Grahame cautioned that wording could open a "pandoras box". No Jira or Confluence follow-up was found. This is carried into the action file as an overlooked clarification gap.
- SQL `LIKE` searches found no Zulip mentions of `FHIR-25431` or `FHIR-44047`. Initial FTS key searches failed because the hyphenated key was parsed incorrectly.

## Confluence evidence

- Page `134943876`, "FHIR Infrastructure Minutes CC 2022-07-25" (`https://confluence.hl7.org/spaces/FHIRI/pages/134943876/FHIR+Infrastructure+Minutes+CC+2022-07-25`) references `FHIR-37543` and records "Persuasive with Mod Motion: Rick Geimer/Marco Visser: 10-0-0".
- Page `66940491`, "FHIR Infrastructure Minutes CC 20200113" (`https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113`) references `FHIR-25431` and includes the terse note "Lloyd: Using `data type` Will auto approve." The later source commit standardized to `datatype`, so this minute is ambiguous historical context rather than a current-page-specific defect.
- Page `234784975`, "FHIR Infrastructure Minutes WGM 202405 - Dallas" (`https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas`) references `FHIR-44047` and records `FHIR-44047 will fix`.
- Page `288072268`, "FHIR Infrastructure Minutes CC 2024-12-09" (`https://confluence.hl7.org/spaces/FHIRI/pages/288072268/FHIR+Infrastructure+Minutes+CC+2024-12-09`) references `FHIR-40368` and records that the issue was two anchors with the same name and the SD page anchor in 5.4.6.5 should become `logical-models`.
- Confluence FTS for `"logical data model"` mostly found Privacy/Security Logical Data Model publication/minutes pages, not this FHIR core page.
- Confluence FTS for `"logical models"` found multiple background minutes (CIMI, IG authoring, FHIR-I), but only the Jira-reference pages above were direct enough for this review.

## Timeline

| Date | Event type | Evidence | Notes |
|---:|---|---|---|
| 2020-01-09 | Jira created | `FHIR-25431` | Datatype/data type consistency issue created. |
| 2020-01-13 | WG minutes | Confluence `66940491` | FHIR-I discussed `FHIR-25431`; minutes say "Using `data type` Will auto approve." |
| 2020-10-14 | Source commit | `1ee3e42c5c8a15106626f57540208a6a6a2a73ea` | Early logical-model stub expansion. |
| 2021-10-27 | Jira resolved | `FHIR-25431` | Jira resolved/published; no detailed resolution text in snapshot. |
| 2022-06-06 | Jira created | `FHIR-37543` | Request to bring back logical model page. |
| 2022-06-17 onward | Zulip discussion | `#implementers > Logical Models and data types` | Broader debate about logical vs physical datatypes. |
| 2022-07-25 | WG vote | Confluence `134943876`; `FHIR-37543` | Persuasive with modification, 10-0-0. |
| 2022-08-16 | Source commit | `e334c76082b2c3f47f52f444ccbb3b9f87486203` | Full logical models page added. |
| 2022-08-19 | PR merged | `HL7/fhir#2173` | "Logical Models page" merged. |
| 2022-08-21 | Source commits | `ff4df5...`, `fa2136...` | Cleanup and datatype/terminology text changes. |
| 2022-08-22 to 2022-08-30 | Zulip review | `#fhir/infrastructure-wg > Logical models` | Direct page review and requested adjustments. |
| 2022-08-30 | Source commit | `d8f08145cce1ea44f06dd0acfec8674f8044117f` | Applied logical page review edits, including patterns cross-reference. |
| 2022-08-31 | Source commit | `8592e1207273b786db340efb927bb6d1dc9756c9` | Applied `FHIR-25431` global datatype wording. |
| 2022-09-01 | PR merged | `HL7/fhir#2312` | PR containing `FHIR-25431` commit merged. |
| 2023-01-31 | Jira created | `FHIR-40368` | Anchor ambiguity filed for `structuredefinition.html#logical`. |
| 2024-01-22 | Jira created | `FHIR-44047` | `e.g.` / `i.e.` punctuation issue created for R6 ballot. |
| 2024-05-23 | Jira resolved | `FHIR-44047` | Resolved persuasive/change required. |
| 2024-08-23 to 2024-08-24 | Zulip later clarification | `#implementers > Logical Models instantiation` | Later discussion suggests possible page clarification about instances and FHIR REST conformance. |
| 2024-12-09 | WG minutes/Jira resolved | `FHIR-40368`, Confluence `288072268` | Anchor issue moved to technical correction; resolution to use `logical-models` anchor on SD page. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | R6 header/template and `Logical data` typo cleanup. |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Applied `FHIR-44047` punctuation to SNOMED examples. |
| 2025-11-06 | PR merged | `HL7/fhir#3951` | `FHIR-44047` PR merged. |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/logical.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/logical.html" && echo "new exists"`
- Counted page sizes:
  - `wc -l ".../6.0.0-ballot4-5d67a34a13a5/source/logical.html" ".../4.0.1-0da2a0a84dc1/source/logical.html"` -> 118 new, 33 old.
- Reviewed direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/logical.html`
- Listed page-touching commits:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/logical.html`
- Inspected page patches:
  - `git show --stat --patch <commit> -- source/logical.html` for all 15 page-touching commits.
- Looked up associated GitHub PRs:
  - `gh api /repos/HL7/fhir/commits/<sha>/pulls`
  - `gh pr view <number> --repo HL7/fhir --json number,title,url,author,mergedAt,body,closingIssuesReferences`
- Jira snapshots:
  - `bun run jira:search snapshot FHIR-25431`
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search snapshot FHIR-37543`
  - `bun run jira:search snapshot FHIR-40368`
- Jira phrase searches:
  - `bun run jira:search fts '"logical data model"' --limit 10`
  - `bun run jira:search fts '"logical models" page' --limit 10`
  - `bun run jira:search fts '"redefining the FHIR primitive datatypes"' --limit 10` -> no results.
  - `bun run jira:search fts '"shall consider the terminology binding"' --limit 10` -> no results.
  - `bun run jira:search fts '"Logical Models instantiation"' --limit 10` -> no results.
  - `bun run jira:search fts '"logical models" resources CRUD' --limit 10` -> no results.
  - `bun run jira:search fts '"FHIR-conformant interface" "logical models"' --limit 10` -> no results.
- Zulip searches/snapshots:
  - Initial `bun run zulip:search fts FHIR-25431` and `FHIR-44047` failed due hyphen parsing; reran SQL `LIKE` searches, which found no results.
  - `bun run zulip:search fts '"logical data model"' --limit 20`
  - `bun run zulip:search fts '"logical models" page' --limit 20`
  - `bun run zulip:search snapshot fhir/infrastructure-wg "Logical models"`
  - `bun run zulip:search snapshot implementers "Logical Models and data types"`
  - `bun run zulip:search snapshot implementers "Logical Models instantiation"`
- Confluence searches/snapshots:
  - `bun run confluence:search refs jira FHIR-25431`
  - `bun run confluence:search refs jira FHIR-44047`
  - `bun run confluence:search refs jira FHIR-37543`
  - `bun run confluence:search refs jira FHIR-40368`
  - `bun run confluence:search fts '"logical data model"' --limit 10`
  - `bun run confluence:search fts '"logical models"' --limit 10`
  - `bun run confluence:search snapshot 66940491`
  - `bun run confluence:search snapshot 234784975`
  - `bun run confluence:search snapshot 134943876`
  - `bun run confluence:search snapshot 288072268`

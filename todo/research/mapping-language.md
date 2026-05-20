# mapping-language research appendix

## Scope and coverage

- Page path: `source/mapping-language.html`
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: the page exists in both trees and is modified.
- Full newer page read end-to-end: yes, 960 lines.
- Source history: 42 commits touched the page between the two commits.
- Issue keys: 28 `FHIR-...` keys were explicit in page-touching commit subjects/bodies; the `20577 - mapping language media type` commit was also traced to `FHIR-20577`, for 29 total Jira issues reviewed.
- Jira: snapshots were taken for the 28 explicit keys and `FHIR-20577`. Phrase searches were also run for distinctive changed phrases such as `"Rules may be applied in any order"`, `"text/fhir-mapping"`, `"Date Time Transformation Details"`, `"toDateTime" "unixToDateTime"`, `"where" "check" "log" "mapping language"`, and `"StructureMap constants"`.
- Zulip: exact-key searches were run across the explicit keys; snapshots were taken for the most relevant threads: media type, multiple dependent groups/metadata, identifiers, identity mappings, constants, date parsing, and where/check/log context.
- Confluence: `refs jira` searches were run for the explicit keys and `FHIR-20577`; key FHIR-I minutes were snapshotted for issue clusters.
- Caveats: one Zulip exact-key SQL loop hit `database is locked` for `FHIR-27915`; follow-up evidence came from the `Mapping Language Question (FHIR-25220)` Zulip snapshot, Jira `FHIR-27915`, and FHIR-I minutes. The review is bounded; it prioritizes issue-linked and phrase-linked evidence over broad context-only hits.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Current R6 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-language.html:1` | New page read end-to-end |
| Source | General syntax/media type | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-language.html:105` | Identifier constraints and `text/fhir-mapping; charset=utf-8` |
| Source | Metadata syntax | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-language.html:122` | R6 prose documents `///` metadata and no longer describes the legacy `map` statement |
| Source | Constants | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-language.html:228` | `let` constants and later dynamic-context clarification |
| Source | Rule ordering/source expressions | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-language.html:338` | Rule order, source permutations, alias/FHIRPath evaluation, and `MUST` parentheses |
| Source | Log statement | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-language.html:435` | Current log guidance appears stale after `FHIR-46548` discussion |
| Source | Transform functions | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-language.html:455` | FHIRPath alignment, factory functions, date/time transforms |
| Source | Date/time details | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-language.html:659` | New R6 date/time format-code section |
| Source | Default groups/grammar link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mapping-language.html:901` | Default mapping groups and visible markup issue |
| Grammar | Current formal grammar | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/images/mapping.g4:10` | Grammar still accepts optional `mapDeclaration` plus `metadataDeclaration` |
| Git | Direct page diff command | `git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/mapping-language.html` | Net R4 -> R6 page diff |
| Git | Page history command | `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/mapping-language.html` | Chronological commit list |
| Commit | Metadata syntax | `c372919350db4764cebd887053bd3bd567234faa`, https://github.com/HL7/fhir/commit/c372919350db4764cebd887053bd3bd567234faa | Applies `FHIR-27915` / `FHIR-17708` metadata changes |
| Commit | Where/check/log context | `faa06571e350ec1e47619b0d9ad77fb1a8a21583`, https://github.com/HL7/fhir/commit/faa06571e350ec1e47619b0d9ad77fb1a8a21583 | Applies `FHIR-46548` clarification |
| Commit | Date/time parsing | `dbd826d76742728977c19b819e0ae55b532e9992`, https://github.com/HL7/fhir/commit/dbd826d76742728977c19b819e0ae55b532e9992 | Adds R6 date/time transform functions |
| PR | R6 tickets PR | https://github.com/HL7/fhir/pull/3967 | Merged PR containing `dbd826d...`, `ed4b1...`, and `60601...` for `FHIR-40645` |
| Jira | Media type | `FHIR-20577`, https://jira.hl7.org/browse/FHIR-20577, `bun run jira:search snapshot FHIR-20577` | Explains `text/fhir-mapping; charset=utf-8` |
| Jira | Metadata syntax | `FHIR-27915`, https://jira.hl7.org/browse/FHIR-27915, `bun run jira:search snapshot FHIR-27915` | Replaces `map` statement prose with `///` metadata syntax |
| Jira | Date/time parsing | `FHIR-40645`, https://jira.hl7.org/browse/FHIR-40645, `bun run jira:search snapshot FHIR-40645` | R6 date/time parsing decision |
| Jira | Constants clarification | `FHIR-43178`, https://jira.hl7.org/browse/FHIR-43178, `bun run jira:search snapshot FHIR-43178` | Clarifies constants and evaluation context |
| Jira | Where/check/log context | `FHIR-46548`, https://jira.hl7.org/browse/FHIR-46548, `bun run jira:search snapshot FHIR-46548` | Clarifies alias availability and execution order |
| Zulip | Media type | #implementers > `Content-Type for Mapping Language files`, https://chat.fhir.org/#narrow/stream/implementers/topic/Content-Type%20for%20Mapping%20Language%20files | Rationale for `text/fhir-mapping; charset=utf-8` |
| Zulip | Metadata/multiple groups | #fhir/infrastructure-wg > `Mapping Language Question (FHIR-25220)`, https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Mapping%20Language%20Question%20(FHIR-25220) | Discusses `FHIR-25220`, `FHIR-27915`, and constants follow-up |
| Zulip | Where/check/log | #FHIR Mapping Language > `where clause`, https://chat.fhir.org/#narrow/stream/FHIR%20Mapping%20Language/topic/where%20clause | Rationale and later implementation comments for `FHIR-46548` |
| Zulip | Date parsing | #implementers > `Mapping strings to dates`, https://chat.fhir.org/#narrow/stream/implementers/topic/Mapping%20strings%20to%20dates | Community discussion behind `FHIR-40645` |
| Confluence | 2019 FHIR-I cluster | Page `66937353`, https://confluence.hl7.org/spaces/FHIRI/pages/66937353/FHIR+Infrastructure+Minutes+CC+20191216, `bun run confluence:search snapshot 66937353` | Minutes for identifiers, multiple groups, evaluate, dateOp, and source statement issues |
| Confluence | FHIR-40645 WGM | Page `210078303`, https://confluence.hl7.org/spaces/FHIRI/pages/210078303/FHIR+Infrastructure+Minutes+WGM+202401+-+Virtual, `bun run confluence:search snapshot 210078303` | WGM discussion/vote context for date parsing |
| Confluence | FHIR-46548 vote | Page `265098407`, https://confluence.hl7.org/spaces/FHIRI/pages/265098407/FHIR+Infrastructure+Minutes+CC+2024-09-09, `bun run confluence:search snapshot 265098407` | FHIR-I vote for where/check/log clarification |

## Change summary

### Page status and template/navigation

- Metadata/template/navigation: the R4 page used `colsd`, showed FMM 0 Draft and Standards Status Trial Use, and wrapped content in `<div class="col-12">`; R6 uses `colsn`, removes the FMM cell and wrapper, and shows Standards Status Normative at `/source/mapping-language.html:10`.
- Substantive/normative status: the status change to Normative is not just boilerplate, but the diff does not show page-specific rationale beyond commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` (`normative changes for R6`).

### Model overview and FHIRPath dependency

- Semantic guidance: the R6 page adds a note that the mapping language applies to directed acyclic graphs that allow poly-hierarchies, while most FHIR contexts are strict mono-hierarchies/trees (`mapping-language.html:27`). This aligns with `FHIR-23007`.
- Semantic guidance: the R6 page states that Mapping Language and `StructureMap` are built on top of FHIRPath and require a FHIRPath implementation (`mapping-language.html:51`), matching the `FHIR-20846` direction to document integrated FHIRPath support.

### Syntax, identifiers, metadata, media type, and constants

- Substantive/normative: name constraints were tightened. Group/rule/variable names must be valid ids, `SHALL` start with a character, cannot be keywords, cannot contain dot or dash, and `SHALL NOT` be surrounded with backticks; source/target context element names may be backtick-delimited (`mapping-language.html:105`). This traces to `FHIR-25266` and `FHIR-25286`.
- Substantive/normative: media type `text/fhir-mapping` was added and the `charset=utf-8` parameter is `SHALL` appended (`mapping-language.html:118`), traced to `FHIR-20577`.
- Substantive syntax: the metadata section changed from documenting the old `map "url" = "title"` statement to documenting `/// name{.property}* = {value}` metadata (`mapping-language.html:122`). This traces to `FHIR-27915` and `FHIR-17708`.
- Potential mismatch: the formal grammar still has optional `mapDeclaration` (`images/mapping.g4:10`, `images/mapping.g4:40`), but the page prose no longer describes it. Jira classified `FHIR-27915` as compatible/substantive, and the Zulip discussion explicitly worried about breaking existing maps.
- Substantive syntax: constants were added with `let [name] = [fhirpath expression];` and detailed semantics for uniqueness, lazy evaluation, references to other constants, variable hiding, and circular errors (`mapping-language.html:228`). Original addition traces to `FHIR-21642`; the R6 clarification traces to `FHIR-43178`.

### Groups, rules, ordering, source matching, and target paths

- Substantive syntax: groups may now contain zero rules (`mapping-language.html:262`), from `FHIR-20839`.
- Substantive guidance: dependent rules now specify one or more groups by name, comma-separated, and allow multiple group invocations followed by child rules (`mapping-language.html:325`, `mapping-language.html:841`). This traces to `FHIR-20840`, `FHIR-20848`, and `FHIR-25220`.
- Semantic guidance: rules may be applied in any order; order is implementation-defined, and authors should avoid overlapping rules or use `first`/`last` to manage order (`mapping-language.html:338`). This matches `FHIR-23010`.
- Substantive syntax: source statements now allow type and cardinality independently (`mapping-language.html:358`), from `FHIR-20845`, and all embedded FHIRPath expressions in source conditions/defaults/logs must be parenthesized (`mapping-language.html:426`), from `FHIR-20841`.
- Semantic guidance/example change: multiple source statements are explicitly permutation-based and only existing permutations execute; an example was added (`mapping-language.html:381`). This traces to `FHIR-25376`.
- Substantive syntax: target elements can be further qualified by sub-elements (`context.element(.subElement)`), from `FHIR-21641` (`mapping-language.html:473`).
- Semantic guidance: where/check/log are now described as executing in order, with aliases mapped before the FHIRPath statements are run (`mapping-language.html:387`). This traces to `FHIR-46548`.

### Transform functions, FHIRPath alignment, implicit casts, and date/time parsing

- Substantive syntax/guidance: the transform table grew substantially. It adds a FHIRPath-equivalent column, factory functions (`cc`, `c`, `qty`, `id`, `cp`), FHIRPath expression evaluation behavior, and links to FHIRPath factory functions (`mapping-language.html:494`). This traces mainly to `FHIR-20846`.
- Semantic guidance: `evaluate` now describes empty, single, repeating, and error outcomes for FHIRPath collection results (`mapping-language.html:617`), from `FHIR-23936` and `FHIR-23937`.
- Semantic guidance: `log` remains the mapping-language keyword, but the page now says it is equivalent to FHIRPath `trace()` (`mapping-language.html:451`), matching `FHIR-39486`'s "Not Persuasive with Modification" resolution not to rename it.
- Semantic guidance: implicit type conversions and choice-type auto-creation errors were documented in a new "Type Wrangling" section (`mapping-language.html:799`), from `FHIR-22774` and `FHIR-20905`.
- Substantive syntax: `dateOp` was replaced by explicit `toDateTime`, `unixToDateTime`, `toDate`, `unixToDate`, `toTime`, and `unixToTime` transforms plus a new date/time format-code table (`mapping-language.html:550`, `mapping-language.html:659`). This traces to `FHIR-40645` and PR https://github.com/HL7/fhir/pull/3967.

### Identity and default mapping groups

- Substantive syntax/guidance: "Simple Form: Identity transform" now documents the short form `src -> tgt: type, subtype, action, recorded;` as shorthand for multiple property copies (`mapping-language.html:859`). This traces to `FHIR-22710`.
- Substantive syntax: target list mode `collate` changed to `single` in the page and reserved keywords (`mapping-language.html:483`, `mapping-language.html:947`), from the FHIRPath alignment work.
- Rendering/editorial: the current page still has `<codes>types</codes>` in the default mapping groups paragraph (`mapping-language.html:908`).

### Editorial and mechanical changes

- Mechanical/editorial changes include template churn, "datatype" vs "data type" cleanup (`FHIR-25431`), e.g./i.e. punctuation cleanup (`FHIR-44047`), and QA/build fix commits.
- Concrete current-page defects found during the full-page read include stray literal quotes after several FHIRPath factory-function links (`mapping-language.html:627`, `:633`, `:639`, `:645`, `:651`), `<codes>types</codes>` (`:908`), and small typos such as "the this specification" (`:665`) and "the the rule" (`:407`).

## Source history

| Date | Commit | Subject | Page-specific interpretation |
|---|---|---|---|
| 2019-11-18 | `ee16c520a5772bbdfe719d49cca37d52f14b01f1` | Typo fix | Editorial |
| 2020-08-19 | `143651cd757af17d57b1f001808465acfc3c0608` | `FHIR-20839 - Allow mapping groups with 0 rules` | Allows empty groups |
| 2020-08-21 | `562bf9f82d747d247363cb53f19d29d99facae54` | `FHIR#20848, FHIR#20840 Allow multiple group invocations` | Dependent groups can repeat/combine with nested rules |
| 2020-08-21 | `53e50e29332ff33bf433b294bb5d3bc1717f76ba` | `FHIR#20841 - StructureMap.group.rule.source.defaultValue should be of type string` | Parenthesized FHIRPath/default syntax |
| 2021-04-05 | `54fc90739e2cf48503811483f3cf7ffa8c5a5ce6` | `FHIR-25286 - Harmonize delimitedIdentifiers in FHIRPath and Mapping Language` | Backticks only, no double-quoted delimited identifiers |
| 2021-04-05 | `7a3e9c0df7f896fe575eceaf0d5112b97159d3bb` | `FHIR-23936 - Evaluate function does not consider FHIRPath collection handling` | Adds collection-result handling for `evaluate` |
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | update html template | Mechanical/template |
| 2021-12-17/18 | `c25467d...`, `a186737...`, `de757d...`, `720e410...`, `93aaef2...` | merge commits for AZ branches | Mechanical merge history for earlier Jira work |
| 2022-08-17 | `fd1e00c4be7727006d8858adde73744306accf14` | `20577 - mapping language media type` | Adds media type; traced to `FHIR-20577` |
| 2022-08-31 | `8592e1207273b786db340efb927bb6d1dc9756c9` | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | Editorial terminology |
| 2022-09-05 | `c3da43d4d906bc8ef71d67923be5e5db976665be` | tidy up status codes on pages, and set version for ballot | Mechanical/status |
| 2023-02-11 | `4e43df4bce0cc1671cba2bee864a7f21654e8f82` | `FHIR-39486 Change the log() function to trace() to be consistent with fhirpath` | Documents `log` as equivalent to FHIRPath `trace()` without renaming |
| 2023-02-22 | `14a82a5234ca1bd192c12874f6877867eca73bb4` | `FHIR-22774 Document support for implicit casts in mapping language` | Adds type wrangling/implicit casts |
| 2023-02-22 | `cd0bed57d72d0cb4429e68f2edc478789b432a6a` | `FHIR-25220 Clarify language around invoking multiple groups` | Clarifies multiple dependent groups |
| 2023-02-22 | `5afb4e3a7322f6d9bd0be231ac67811ddd6241ae` | `FHIR-23010 In mapping language, state that rule application order is implementation-dependent.` | Adds rule-order warning |
| 2023-02-22 | `01e6c7f9a432144b5a8a7d4054feeacaad88284e` | `FHIR-23007 In mapping language, talk about trees instead of DAGs` | Adds tree/poly-hierarchy note |
| 2023-02-22 | `0646c3096026cde98eca996d111806e36ed14572` | `FHIR-25376 Clarify behaviour for matching multiple source statements` | Adds permutation semantics and example |
| 2023-02-22 | `fae5f7f920c5e2a6152cd17317b22a3e441f7848` | `FHIR-22622 Is the Mapping "map" statement followed by a string or an identifier?` | Wording around delimited strings |
| 2023-02-22 | `379e1fd5fa6933531e474aa54c53a900c53897bb` | `FHIR-20905 How to hande an element with a choice of types as the target in a mapping rule` | Adds choice-type auto-create guidance |
| 2023-02-23 | `662229e4296562444046aeac9c485f03292d1a34` | `FHIR-20846 Should we align transforms and FhirPath?` | Adds FHIRPath dependency and transform table expansion |
| 2023-02-23 | `82dcb0036150ffbace89845ffad4a43ae3f140d1` | `FHIR-20845 Can 'type' and 'min'/'max' be used independently?` | Separates source type and cardinality |
| 2023-02-23 | `487c535a31df0e73e45f52d64b20f2fd8c8f6c88` | `FHIR-21641 Allow for a source statement to walk deeper into the children` | Allows target/source sub-element paths |
| 2023-02-23 | `cfe0c27ccf77885830ace90028056c9567b969d1` | `FHIR-21642 Add "const" keyword to the mapping language` | Adds `let` constants |
| 2023-02-23 | `9799fa13cb5f8bdf46f611954cedf432a2003df0` | `FHIR-25266 StructureMap does not account for escaped identifiers in id fields` | Clarifies which identifiers can be delimited |
| 2023-02-23 | `53722cdc2fe9311c1b888e05027d8dda743bccd5` | typo | Editorial |
| 2023-02-23 | `14d597bbd5fc2322a7137393c5fb72efa365837f` | `FHIR-22710 Modify mapping language to simplify identity conversions` | Adds identity shorthand |
| 2023-02-24 | `c372919350db4764cebd887053bd3bd567234faa` | `FHIR-27915 Replace "map" statement with shorthand syntax + FHIR-17708 Complete the FHIR Mapping Language Tutorial page` | Adds `///` metadata syntax |
| 2023-02-24 | `55017c7f96a4fe7e8a3f3d08718be0ba56799699`, `60e98c41f6c5fab597bbdb8d7ec41898ca4ec777` | more QA | Editorial/QA |
| 2023-03-09 | `2bc2ac2786e4e2e72532e03d15ef2777e710ba41` | fix examples | Editorial/example fix |
| 2023-03-19 | `8d9c57d215b956950d531a7d09940005f51c0ff4` | `FHIR-23937 - Correction around context` | Corrects `evaluate` context text and defers dateOp details to new issue |
| 2025-03-02 | `4ca72903b8bb6bbe73fb451536a6a5c69fda4d36` | `FHIR-43178 StructureMap const definition dynamic behavior unclear` | Clarifies constants' dynamic context |
| 2025-03-04 | `faa06571e350ec1e47619b0d9ad77fb1a8a21583` | `FHIR-46548 Clarify the context of fhirpath expressions used in the fhir mapping language page.` | Adds where/check/log ordering and alias mapping |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | normative changes for R6 | Normative status/template change |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | `FHIR-44047` | e.g./i.e. punctuation cleanup |
| 2025-11-07 | `dbd826d76742728977c19b819e0ae55b532e9992` | `FHIR-40645 - Mapping language date and time parsing functions.` | Adds date/time parsing functions and format table |
| 2025-11-07 | `ed4b1fdd32cbd11f4b3b388e50aaeeece326c3be` | `TC - mapping language page consistency review` | Adjusts date/time function signatures/text |
| 2025-11-07 | `60601ca5910df643f52e8168acc209b204e61ff6` | `TC - build fixes` | Fixes date/time internal anchors |

## Jira evidence

### Explicit and issue-linked Jira keys from commits

| Key | Summary | Status | Resolution | Impact | Applied |
|---|---|---|---|---|---|
| `FHIR-17708` | Complete the FHIR Mapping Language Tutorial page | Published | Persuasive | Non-substantive | R5 |
| `FHIR-20577` | Add Media Type for FHIR Mapping Language | Published | Persuasive | Non-substantive | R5 |
| `FHIR-20839` | Allow mapping groups with 0 rules | Published | Persuasive | Compatible, substantive | R5 |
| `FHIR-20840` | Document that repeating dependent rules are allowed | Published | Persuasive | Compatible, substantive | R5 |
| `FHIR-20841` | Rule source 'default' should be of type string | Published | Persuasive with Modification | Compatible, substantive | R5 |
| `FHIR-20845` | Can 'type' and 'min'/'max' be used independently? | Published | Persuasive | Compatible, substantive | R5 |
| `FHIR-20846` | Should we align transforms and FhirPath? | Published | Persuasive with Modification | Compatible, substantive | R5 |
| `FHIR-20848` | Can dependent rules and nested rules be combined? | Published | Persuasive | Compatible, substantive | R5 |
| `FHIR-20905` | How to hande an element with a choice of types as the target in a mapping rule | Published | Persuasive | Compatible, substantive | R5 |
| `FHIR-21641` | Allow for a source statement to walk deeper into the children | Published | Persuasive | Compatible, substantive | R5 |
| `FHIR-21642` | Add "const" keyword to the mapping language | Published | Persuasive | Compatible, substantive | R5 |
| `FHIR-22622` | Is the Mapping "map" statement followed by a string or an identifier? | Published | Not Persuasive with Modification | Non-substantive | R5 |
| `FHIR-22710` | Modify mapping language to simplify identity conversions | Published | Persuasive with Modification | Compatible, substantive | R5 |
| `FHIR-22774` | Document support for implicit casts in mapping language | Published | Persuasive with Modification | Compatible, substantive | R5 |
| `FHIR-23007` | In mapping language, talk about trees instead of DAGs | Published | Persuasive with Modification | Non-substantive | R5 |
| `FHIR-23010` | In mapping language, state that rule application order is implementation-dependent. | Published | Persuasive with Modification | Non-substantive | R5 |
| `FHIR-23936` | Evaluate function does not consider FHIRPath collection handling | Published | Persuasive | Non-substantive | R5 |
| `FHIR-23937` | Document parameters of dateOp | Published | Persuasive with Modification | Non-substantive | R5 |
| `FHIR-25220` | Clarify language around invoking multiple groups | Published | Persuasive with Modification | Non-substantive | R5 |
| `FHIR-25266` | StructureMap does not account for escaped identifiers in id fields | Published | Persuasive with Modification | Non-compatible | R5 |
| `FHIR-25286` | Harmonize delimitedIdentifiers in FHIRPath and Mapping Language | Published | Persuasive | Non-compatible | R5 |
| `FHIR-25376` | Clarify behaviour for matching multiple source statements | Published | Persuasive | Non-substantive | R5 |
| `FHIR-25431` | Inconsistent use of "datatype" vs. "data type" | Published | Persuasive | Not populated | R5 |
| `FHIR-27915` | Replace "map" statement with shorthand synatx | Published | Persuasive with Modification | Compatible, substantive | R5 |
| `FHIR-39486` | Change the log() function to trace() to be consistent with fhirpath | Published | Not Persuasive with Modification | Non-substantive | R5 |
| `FHIR-40645` | Define parameters of dateOp | Applied | Persuasive with Modification | Compatible, substantive | R6 |
| `FHIR-43178` | StructureMap const definition dynamic behavior unclear | Applied | Persuasive | Non-substantive | R6 |
| `FHIR-44047` | Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout | Resolved - change required | Persuasive | Not populated | Not populated |
| `FHIR-46548` | Clarify the context of fhirpath expressions used in the fhir mapping language page. | Applied | Persuasive | Non-substantive | R6 |

### Jira details that matter for current review

- `FHIR-20577` says the correct media type is `text/fhir-mapping` and, for RFC 6657, `charset=utf-8` must be appended. The current page implements this at `mapping-language.html:118`.
- `FHIR-23010` proposed and resolved the exact "Rules may be applied in any order" text; the R6 page includes that language at `mapping-language.html:338`.
- `FHIR-25266` resolved to impose id rules for listed fields, exclude `target.context`, and clearly distinguish what can/cannot be delimited. The current prose implements this distinction at `mapping-language.html:105`.
- `FHIR-27915` resolved that primitive Canonical metadata can be declared as `/// elementname = fhirpathvalue`; the current page implements `/// name{.property}* = {value}` at `mapping-language.html:126`. The issue's compatibility concern is important because the current grammar still accepts `mapDeclaration`.
- `FHIR-39486` rejected renaming `log` to `trace` because of breaking-change pain, but required documentation that `log` serves the same function as `.trace()` in FHIRPath. The current page implements that at `mapping-language.html:451`.
- `FHIR-40645` resolved separate operations for each target type (`toDate`, `toTime`, `toDateTime`, etc.) and parallel `unixTo...` operations. It explicitly did not add timezone as an argument to the non-Unix date parsing operations. The current page's table matches that broad shape at `mapping-language.html:550`.
- `FHIR-43178` resolved that constants are FHIRPath expressions evaluated each time a map is evaluated, with access limited by map-level scope; current text follows the resolution at `mapping-language.html:249`.
- `FHIR-46548` asks that where/check/log execution and alias context be clarified. The current page adds this, but still retains older log guidance that the Zulip follow-up said should be removed.

### Other Jira issues from phrase searches

- `FHIR-20577` was found by searching `"text/fhir-mapping"` because the commit subject used bare `20577` rather than `FHIR-20577`.
- No additional plausible Jira issue was found for `"Date Time Transformation Details"` or `"toDateTime" "unixToDateTime"` beyond `FHIR-40645` and its predecessor `FHIR-23937`.
- No additional plausible Jira issue was found for `"StructureMap constants"` beyond `FHIR-43178`.

### Context-only Jira hits not driving actions

- `FHIR-17708` mainly affects the tutorial and was bundled with the metadata syntax commit; it is useful history but not a direct current-page action.
- `FHIR-25431` and `FHIR-44047` are broad editorial cleanup issues. They explain some line changes but should not drive spec-semantics conclusions.

## Zulip evidence

- #implementers > `Content-Type for Mapping Language files` (2019-03-11 to 2019-03-21, https://chat.fhir.org/#narrow/stream/implementers/topic/Content-Type%20for%20Mapping%20Language%20files): Alexander Zautke asked what content type a mapping language file should use; Grahame initially suggested `text/x-fhir-mapping`; Alexander argued for `text/fhir-mapping` plus `charset=utf-8` under RFC 6657; Grahame agreed and asked for a task. This supports `FHIR-20577`.
- #fhir/infrastructure-wg > `Mapping Language Question (FHIR-25220)` (2023-02-22 to 2023-02-23, https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Mapping%20Language%20Question%20(FHIR-25220)): 
  - Lines 6-20 discuss `FHIR-25220` and whether dependent groups are executed in order versus general rule execution being implementation-defined.
  - Lines 37-49 show Grahame's concern that `FHIR-27915` could break existing maps if the old `map` statement was removed.
  - Lines 75-94 revisit `FHIR-27915`; Alexander confirms the `///` resolution was intended, while Grahame notes complex metadata such as `versionAlgorithm` and `jurisdiction` still matter.
  - Lines 69-73 discuss constants evaluation before `FHIR-43178` later formalized it.
- #FHIR Mapping Language > `where clause` (2024-08-01 to 2025-03-04, https://chat.fhir.org/#narrow/stream/FHIR%20Mapping%20Language/topic/where%20clause): 
  - Lines 6-16 explain the ambiguity: whether aliases are available to `where`, and whether `check`/`log` happen before or after filtering.
  - Lines 75-86 show Grahame revisiting the Jira wording before applying `FHIR-46548`; Brian clarifies that `where` reduces the set, `check` validates what is processed, and `log` reports what was processed.
  - Lines 87-115 are important: Grahame says the existing comment that log is used to record unmapped source elements is a problem if log runs last, and says he will remove it; Brian agrees. The current page still has that comment at `mapping-language.html:448`.
- #implementers > `Mapping strings to dates` (2023-06-28 to 2025-11-06, https://chat.fhir.org/#narrow/stream/implementers/topic/Mapping%20strings%20to%20dates): 
  - Lines 6-7 introduce `FHIR-40645` and the need to parse known legacy date/time strings during mapping.
  - Lines 24-40 discuss locale/timezone risk.
  - Lines 69-70 clarify the use case: the map author knows the source format but cannot change it, e.g. DICOM date/time values.
  - Lines 93-100 close the loop after the WGM decision and include a later personal preference that this would be nicer in FHIRPath. No formal reversal was found.
- #mapping-framework > `StructureMap constants` (2024-04-22 to 2024-04-24, https://chat.fhir.org/#narrow/stream/mapping-framework/topic/StructureMap%20constants): Lloyd asks for feedback on `FHIR-43178`; Jose questions whether dynamic constants are functions; Luke objects to simply adding "only." This supports the final Jira text rather than the submitter's narrower proposal.
- #mapping-framework > `General Syntax Notes` and `Harmonize delimited identifiers with FHIRPath` support `FHIR-25266` and `FHIR-25286`: the concern was that escaped identifiers and `id`-typed StructureMap fields did not align; the consensus moved to backticks only and tighter id rules.
- #mapping-framework > `Identity mappings` supports `FHIR-22710`: Keith Boone proposed a shorter way to express identity/default property copies, leading to the R6 simple identity transform prose.

## Confluence evidence

- Page `66937353` (`FHIR Infrastructure Minutes CC 20191216`) records multiple Mapping Language tracker decisions:
  - `FHIR-25220`: update spec to say one or more groups by name, separated by comma, or child rules; minutes also say "Groups are executed in order", later questioned on Zulip.
  - `FHIR-23936`: no target element for empty FHIRPath evaluation, single value creates target, multiple values error.
  - `FHIR-25376`: revise multiple-source-statement text and add examples.
  - `FHIR-25286`: remove double quotes as delimiter option, leaving backticks.
  - `FHIR-25266`: impose id rules and distinguish what can/cannot be delimited.
- Page `144979391` (`FHIR Infrastructure Minutes CC 2022-12-05`) records `FHIR-27915` as Persuasive with Modification, Alexander Zautke/Rick Geimer 14-0-0.
- Page `154995277` (`FHIR Infrastructure Minutes CC 2023-01-30`) records `FHIR-39486` as Not Persuasive with Modification, Grahame Grieve/Marco Visser 12-0-0.
- Page `210078303` (`FHIR Infrastructure Minutes WGM 202401 - Virtual`) references `FHIR-40645`, the `Mapping strings to dates` Zulip thread, and related follow-up issues. It supports that date/time parsing was WGM-discussed rather than a purely editorial change.
- Page `234784975` (`FHIR Infrastructure Minutes WGM 202405 - Dallas`) references `FHIR-43178`, supporting WGM handling of the constants clarification.
- Page `265098407` (`FHIR Infrastructure Minutes CC 2024-09-09`) records `FHIR-46548` as Persuasive, Gino Canessa/Jeff Brown 13-0-0.

## Timeline

| Date | Kind | Evidence |
|---|---|---|
| 2019-03-11 to 2019-03-21 | Zulip discussion | #implementers > `Content-Type for Mapping Language files` leads to GForge/Jira 20577 |
| 2019-03-25 | Jira vote | `FHIR-20577` Persuasive, media type |
| 2019-07 to 2019-12 | Jira/Confluence decisions | Early Mapping Language issues (`FHIR-20840`, `FHIR-20841`, `FHIR-20846`, `FHIR-23010`, `FHIR-25266`, `FHIR-25286`, etc.) resolved/voted |
| 2020-08-19/21 | Source commits | Initial application commits for empty groups, multiple dependent groups, and default/FHIRPath parentheses |
| 2021-04-05 | Source commits | `FHIR-25286` and `FHIR-23936` applied |
| 2022-08-17 | Source commit | `fd1e00...` applies `FHIR-20577` media type |
| 2022-12-05 | Confluence/Jira vote | `FHIR-27915` Persuasive with Modification |
| 2023-02-22/23 | Zulip discussion | `Mapping Language Question (FHIR-25220)` questions order, metadata compatibility, constants |
| 2023-02-22 to 2023-03-19 | Source commits | Large R5 wave applies most Mapping Language tracker resolutions |
| 2024-01-30 | WGM/Jira vote | `FHIR-40645` date/time parsing resolved, vote 17-0-1 |
| 2024-04-22 to 2024-05-23 | Zulip/Jira | `FHIR-43178` constants clarification discussed and resolved |
| 2024-08-01 to 2025-03-04 | Zulip/Jira/source | `FHIR-46548` where/check/log context discussed; commit `faa065...` applies text |
| 2025-10-31 | Source commit | R6 normative status changes |
| 2025-11-07 to 2025-11-09 | Source/PR | `FHIR-40645` date/time parsing commits and TC fixes merged in PR #3967 |

## Evidence log

- Read `SKILL.md`, `jira/README.md`, `zulip/README.md`, `confluence/README.md`, and `spec/README.md`.
- Established page boundary with `test -f` for both old and new `source/mapping-language.html`.
- Ran the requested rename-aware direct diff for `source/mapping-language.html` from `0da2a0a...` to `5d67a34...`; the output was saved by the tool at `/tmp/copilot-tool-output-1779294310968-6jlhdx.txt`.
- Read the entire newer page in chunks: lines 1-220, 221-440, 441-660, 661-880, and 881-960.
- Ran the requested source-history log command and counted 42 page-touching commits.
- Inspected selected page patches under `/tmp/mapping-language-review/git/*.patch` for the issue-linked commits that explain substantive changes.
- Took Jira snapshots under `/tmp/mapping-language-review/jira/FHIR-*.md`; summarized key metadata with `bun run jira:search sql`.
- Searched Zulip for exact Jira-key mentions; one exact-key loop result for `FHIR-27915` hit `database is locked`, but the relevant thread was independently snapshotted and read.
- Snapshotted Zulip threads under `/tmp/mapping-language-review/zulip/snapshots/`.
- Ran Confluence `refs jira` for the explicit keys and snapshotted the key FHIR-I minutes under `/tmp/mapping-language-review/confluence/snapshots/`.
- Ran phrase searches across Jira, Zulip, and Confluence for distinctive changed phrases. These confirmed `FHIR-23010`, `FHIR-20577`, and `FHIR-46548`; they did not reveal additional higher-confidence issue keys beyond the ones already traced.

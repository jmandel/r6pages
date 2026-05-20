# financial-module research appendix

## Scope and coverage

- Page path: `source/financial-module.html`.
- Old version/source: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/source: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: present in both trees. Old source has 481 `wc -l` lines; newer source has 529 `wc -l` lines and was read end-to-end.
- Direct page-touching commits between the two requested commits: 8.
- Explicit Jira keys in page-touching commit subjects: `FHIR-40659`, `FHIR-44047`.
- Additional Jira issues found by changed-text/source-history searches: `FHIR-37635` for the 3-tier line-item explanation origin, `FHIR-29689` for the tax text, and later context-only `FHIR-54444`.
- Jira/Zulip/Confluence searches were performed for explicit keys and distinctive changed phrases. No Zulip rationale threads were found for the main page changes, except a context-only build-break mention for `FHIR-37635`; Confluence only produced a useful page for `FHIR-44047`.
- Caveats: some FTS commands fail or misparse unquoted hyphenated Jira keys such as `FHIR-40659`; quoted retry/snapshot commands were used where needed. Several page-specific content commits have no issue key in the commit subject, so rationale is inferred from text history and Jira phrase matches rather than from explicit commit metadata.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/financial-module.html` | R4 comparison source |
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/financial-module.html` | R6 ballot4 current source |
| Source lines | Current introduction | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/financial-module.html:22-30` | Adds contracting/contracts/other parties to module scope |
| Source lines | Current glossary payer text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/financial-module.html:142-163` | Expanded Insurer definition and remaining Payer/Payor rows |
| Source lines | Current 3-tier section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/financial-module.html:461-483` | New semantic guidance moved onto this module page |
| Source lines | Current tax section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/financial-module.html:486-499` | New tax guidance, including normative-sounding "shall" wording |
| Source lines | Current roadmap/terminology | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/financial-module.html:502-526` | R5/R6 roadmap wording still present in R6 ballot4 |
| Commit | Template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removed outer `div`; mechanical/template |
| Commit | Move 3-tier text to module | `f32e28bfd05e47a8bcfdd86277cb75f032e9185e`, https://github.com/HL7/fhir/commit/f32e28bfd05e47a8bcfdd86277cb75f032e9185e | Added 3-tier text and image to this page |
| Commit | Add tax text | `75e9d09e288b16ae6531e19fbaffff9380ebf942`, https://github.com/HL7/fhir/commit/75e9d09e288b16ae6531e19fbaffff9380ebf942 | Added Tax section to this page |
| Commit | Payer glossary update | `720258c80a99566e1259c4c1a1dcacd8fbc5abbf`, https://github.com/HL7/fhir/commit/720258c80a99566e1259c4c1a1dcacd8fbc5abbf | Replaced simple Insurer definition with payer transaction definition |
| Commit | Intro scope update | `f24c65e91fd4bf39d2e112ff059e46a52db9b52a`, https://github.com/HL7/fhir/commit/f24c65e91fd4bf39d2e112ff059e46a52db9b52a | Added contracting/contracts/other parties to introduction |
| Commit | Roadmap update | `8306797af543e39f16c15b5007bae264b076f29f`, https://github.com/HL7/fhir/commit/8306797af543e39f16c15b5007bae264b076f29f | Applies `FHIR-40659` roadmap text |
| Commit | Responsible-owner label | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Mechanical/normative-page ownership template change |
| Commit | e.g. punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Applies `FHIR-44047` punctuation cleanup on this page |
| Jira | `FHIR-40659` | https://jira.hl7.org/browse/FHIR-40659; reopen with `bun run jira:search snapshot FHIR-40659` | Formal roadmap text change, applied for R5 |
| Jira | `FHIR-44047` | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Broad punctuation correction for `e.g.,` and `i.e.,` |
| Jira | `FHIR-29689` | https://jira.hl7.org/browse/FHIR-29689; reopen with `bun run jira:search snapshot FHIR-29689` | Formal tax wording closely matches current Tax section |
| Jira | `FHIR-37635` | https://jira.hl7.org/browse/FHIR-37635; reopen with `bun run jira:search snapshot FHIR-37635` | Origin issue for 3-tier diagram/text, initially requested on Claim page |
| Jira | `FHIR-54444` | https://jira.hl7.org/browse/FHIR-54444; reopen with `bun run jira:search snapshot FHIR-54444` | Later R6 ballot4 issue about missing InsurancePlan/InsuranceProduct on this module page; resolved no change |
| Confluence | `FHIR-44047` minutes | Page `234784975`, https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas; reopen with `bun run confluence:search snapshot 234784975` | FHIR-I WGM minutes include `FHIR-44047 will fix` |
| Local artifact | Direct diff | `.copilot/session-state/e0e9f7b4-7aa2-4886-9f85-90f6f110bddf/files/financial-module.diff` | Captured requested R4->R6 page diff |
| Local artifact | Source log | `.copilot/session-state/e0e9f7b4-7aa2-4886-9f85-90f6f110bddf/files/financial-module.log` | Chronological page-touching commits |

## Change summary

### Metadata/template/navigation

- Mechanical/noise: `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the wrapping `<div class="col-12">` and closing `</div>`.
- Metadata/template: `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the table label from `Work Group` to `Responsible Owner: Work Group`.
- Editorial only: `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` adds commas after `e.g.` instances under `FHIR-44047`.

### Module scope and glossary

- Semantic guidance: `f24c65e91fd4bf39d2e112ff059e46a52db9b52a` expands the introduction to include `contracting`, `contracts`, and `other parties`.
- Semantic guidance with possible internal consistency issue: `720258c80a99566e1259c4c1a1dcacd8fbc5abbf` replaces the Insurer glossary definition with a detailed payer-transaction definition, including exclusion of business associates and US Realm payer ID examples. The adjacent `Payer` and `Payor` rows remain generic despite being aliases. No Jira issue was found for this exact page change.

### 3-tier line-item hierarchy

- Semantic guidance/example-like explanation: `f32e28bfd05e47a8bcfdd86277cb75f032e9185e` moved 3-tier line-item text and the `claim-3-tiers.png` graphic from claim-related introductions to the financial module, while keeping resource pages linked to this module anchor.
- Related source history: pickaxe found `feb6f213f47514c2ea7c21862a3b41f132663d85` and `535db334e73710644dfd7021d1a069c469eb75a0` adding the same 3-tier text to `source/claim/claim-introduction.xml` under `FHIR-37635`.
- Jira rationale: `FHIR-37635` requested productOrService definition clarification and said "A picture should also be added to the Claim page to illustrate the 3-tier claim line item structure." The later move to the Financial Module is broader than the literal Jira instruction but appears consistent with sharing the same explanation across Claim, ClaimResponse, and ExplanationOfBenefit.

### Tax

- Substantive semantic guidance on an informative page: `75e9d09e288b16ae6531e19fbaffff9380ebf942` added a new Tax section. It includes formulas for `.net` and says a single tax element "shall be added" to item/detail/subDetail and addItem structures.
- Jira rationale: `FHIR-29689` is the closest match and contains the same text in its resolution, including the same misspellings (`strictures`, `,item.detail`) and the intended `.tax 0..1 Money` model addition.

### Roadmap and terminology

- Editorial/roadmap clarification: `8306797af543e39f16c15b5007bae264b076f29f` applies `FHIR-40659`, replacing STU4-era roadmap text with R5-focused text and changing the terminology paragraph from "preparation to Release 5" to "preparation to Release 6".
- Potential stale-page risk: the applied `FHIR-40659` text was explicitly an R5 change. In R6 ballot4, the page still says FM "has been focusing for R5" and "will be devoting effort in the preparation to Release 6." This may be acceptable during R6 balloting, but it should be consciously reviewed before final publication or R7 work.

## Source history

| Date | Commit | Subject | Page effect | Classification |
|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | `update html template` | Removes outer Bootstrap `div` wrapper and closing tag | Mechanical/template |
| 2022-08-03 | `f32e28bfd05e47a8bcfdd86277cb75f032e9185e` | `Moved the 3-tier text adn graphic to the financial module and add correct publish.ini entry for the 3-tier image` | Adds 3-tier section and image to this page | Semantic guidance |
| 2022-08-07 | `75e9d09e288b16ae6531e19fbaffff9380ebf942` | `FHIR core changes` | Adds Tax section | Substantive semantic guidance |
| 2022-08-10 | `720258c80a99566e1259c4c1a1dcacd8fbc5abbf` | `FHIR code updates` | Expands Insurer glossary definition using payer-transaction text | Semantic guidance |
| 2022-08-28 | `f24c65e91fd4bf39d2e112ff059e46a52db9b52a` | `FHIR c ode updates` | Expands module scope sentence to contracting/contracts/other parties | Semantic guidance |
| 2023-03-22 | `8306797af543e39f16c15b5007bae264b076f29f` | `FHIR-40659 Update Financial Module Roadmap` | Updates Developmental Roadmap and Release 6 terminology target | Roadmap/editorial |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | `normative changes for R6` | Changes label to `Responsible Owner: Work Group` | Metadata/template |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | `FHIR-44047` | Adds commas after `e.g.` occurrences | Editorial |

Related but not page-touching source origin:

| Date | Commit | Subject | Why it matters |
|---|---|---|---|
| 2022-08-01 | `feb6f213f47514c2ea7c21862a3b41f132663d85` | `FHIR-37635` | First adds 3-tier text to Claim introduction |
| 2022-08-02 | `535db334e73710644dfd7021d1a069c469eb75a0` | `FHIR-37635` | Repositions same 3-tier text in Claim introduction before it is moved to this module |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-40659` - "Update the Financial Module Roadmap text." Status Published, resolution Persuasive, work group FM, applied for R5, vote date 2023-03-21. The Jira description text closely matches the current roadmap text at lines 502-518. The source commit `8306797af543e39f16c15b5007bae264b076f29f` applies the change to this page.
- `FHIR-44047` - broad R6 technical correction for punctuation of `e.g.,` and `i.e.,`. Status in the local snapshot is `Resolved - change required`, resolution Persuasive, related pages `FHIR-core-many`, ballot `BALLOT-56530`. The page-touching source commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` applies comma-only changes on this page.

### Other Jira issues plausibly explaining changed text

- `FHIR-29689` - "Add tax at item, item.detail and item.detail.subDetail in Claim, ClamResponse, and EOB." Status Published, resolution Persuasive, compatible substantive enhancement, applied for R5, vote date 2021-06-24. Its resolution text matches the current Tax section very closely, including the formulas and several typos.
- `FHIR-37635` - "Amend description of .productOrService." Status Published, resolution Persuasive, non-substantive clarification, applied for R5, vote date 2022-06-21. It requested a 3-tier claim line-item picture on the Claim page; source commits under this key first added the 3-tier text, later moved to the Financial Module by `f32e28bfd05e47a8bcfdd86277cb75f032e9185e`.
- `FHIR-54444` - later R6 issue, "Financial Module does not contain all of the Resources listed in Categorized Resource List." Status Resolved - No Change, resolution Not Persuasive, vote date 2026-05-18. It says InsurancePlan and InsuranceProduct were listed in the Financial section on the resource list but not this module page; resolution says those resources are being pulled from R6 and should be included in the Financial Module when added back later. This is context-only for the current page.

### Context-only Jira hits that should not drive action

- `FHIR-17483` appeared in a search for `"three tier" Claim`; it concerns addItem details/additional line levels for preauthorization and is historical background, not the direct source of this page text.
- Searches for `"payer ID" NAIC` found IG/profile issues (`FHIR-28610`, `FHIR-34979`, `FHIR-50234`) and `FHIR-27881` about `Coverage.payor`; these do not explain the core Financial Module glossary replacement.

## Zulip evidence

- Quoted key searches for `"FHIR-40659"`, `"FHIR-44047"`, `"FHIR-29689"`, and `"FHIR-54444"` found no relevant Zulip messages in the local snapshot.
- Quoted key search for `"FHIR-37635"` found one `#committers > FHIR core build broken` message on 2022-07-14, but it was about a local build problem and not rationale for the financial-module text.
- Phrase searches for `"3-Tier Line Item Hierarchy"`, `"line item hierarchy" financial`, `"tax element" Claim ClaimResponse ExplanationOfBenefit`, and `subDetail tier ClaimResponse ExplanationOfBenefit` found no relevant Zulip discussions.
- Search for `"payer ID" NAIC` found context-only threads in `#argonaut`, `#Da Vinci PCT`, and `#implementers`; these did not tie to the core glossary edit.

## Confluence evidence

- `FHIR-44047` is referenced from FHIR Infrastructure WGM minutes page `234784975`, "FHIR Infrastructure Minutes WGM 202405 - Dallas", URL https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas. The local refs snippet includes `FHIR-44047 will fix`, providing process evidence for the broad punctuation cleanup.
- `confluence:search refs jira` found no pages for `FHIR-40659`, `FHIR-29689`, `FHIR-37635`, or `FHIR-54444`.
- FTS searches for `"3-Tier Line Item Hierarchy"`, `"Financial Module Roadmap"`, and `"financial module" R6` did not find useful Confluence pages.

## Timeline

| Date | Event type | Evidence |
|---|---|---|
| 2020-11-12 | Jira created | `FHIR-29689` tax issue created |
| 2021-06-24 | Jira vote/resolution | `FHIR-29689` persuasive, 5-0-0 |
| 2021-06-27 | Source commit | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` template update touches page |
| 2022-06-21 | Jira created/resolved/voted | `FHIR-37635` created, resolved, and voted 9-0-1 |
| 2022-08-01 to 2022-08-02 | Related source commits | `feb6f213...` and `535db334...` add 3-tier text to Claim introduction under `FHIR-37635` |
| 2022-08-03 | Source commit | `f32e28bfd05e47a8bcfdd86277cb75f032e9185e` moves 3-tier text/graphic to Financial Module |
| 2022-08-07 | Source commit | `75e9d09e288b16ae6531e19fbaffff9380ebf942` adds Tax section |
| 2022-08-10 | Source commit | `720258c80a99566e1259c4c1a1dcacd8fbc5abbf` expands glossary payer/insurer definition |
| 2022-08-28 | Source commit | `f24c65e91fd4bf39d2e112ff059e46a52db9b52a` expands intro scope |
| 2023-03-21 | Jira created/resolved/voted | `FHIR-40659` roadmap text persuasive, 5-0-0 |
| 2023-03-22 | Source commit | `8306797af543e39f16c15b5007bae264b076f29f` applies roadmap text |
| 2024-01-22 | Jira created | `FHIR-44047` punctuation issue created for R6 ballot1 |
| 2024-05-23 | Jira resolved | `FHIR-44047` resolved persuasive |
| 2024-05 WGM | Confluence process evidence | Page `234784975` says `FHIR-44047 will fix` |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` responsible-owner label |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` punctuation cleanup |
| 2026-01-15 to 2026-05-18 | Later Jira issue | `FHIR-54444` raised and resolved no-change for R6 ballot4 resource-list mismatch |

## Evidence log

- Boundary command established both old and new files exist and line counts are 481/529: `test -f .../source/financial-module.html` and `wc -l ...`.
- Direct requested diff saved to `.copilot/session-state/e0e9f7b4-7aa2-4886-9f85-90f6f110bddf/files/financial-module.diff`; it has 162 lines and shows the R4->R6 page changes.
- Requested page history command saved to `.copilot/session-state/e0e9f7b4-7aa2-4886-9f85-90f6f110bddf/files/financial-module.log`; it lists 8 page-touching commits.
- Commit patches saved to `.copilot/session-state/e0e9f7b4-7aa2-4886-9f85-90f6f110bddf/files/financial-module-commit-shows.txt`; these confirm each cited page-touching commit changes `source/financial-module.html`.
- Jira snapshots run: `bun run jira:search snapshot FHIR-40659`, `FHIR-44047`, `FHIR-29689`, `FHIR-37635`, and `FHIR-54444`.
- Jira searches run for changed phrases: `"3-Tier Line Item Hierarchy"`, `"line item hierarchy" financial`, `"tax element" Claim ClaimResponse ExplanationOfBenefit`, `"payer ID" NAIC`, `"Financial Module Roadmap"`, `"financial module" R6`, `"preparation to Release 6" financial`, and `"focusing for R5" financial`.
- Zulip searches run for quoted Jira keys and changed phrases. Relevant rationale was not found; failed unquoted key searches are noted because FTS interpreted hyphenated keys incorrectly.
- Confluence searches run: `refs jira` for `FHIR-40659`, `FHIR-44047`, `FHIR-29689`, `FHIR-37635`, `FHIR-54444`; FTS for `FHIR-40659`, `FHIR-44047`, `FHIR-29689`, `"3-Tier Line Item Hierarchy"`, `"Financial Module Roadmap"`, and `"financial module" R6`; only `FHIR-44047` produced a useful page.
- The full newer source page was read in chunks: lines 1-220, 221-440, and 441-530 from `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/financial-module.html`.

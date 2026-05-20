# terminologies-binding-examples research appendix

## Scope and coverage

- Page path: `source/terminologies-binding-examples.html`
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary check: page exists in both trees. Old page has 278 lines; new page has 386 lines.
- New page read end-to-end: yes, lines 1-386.
- Source commits touching this page in range: 10.
- Explicit Jira keys found in commit subjects: `FHIR-31705`, `FHIR-25431`, `FHIR-38967`, `FHIR-44047`.
- Additional related/context Jira keys reviewed from searches/minutes: `FHIR-38964`, `FHIR-38965`, `FHIR-38973`, `FHIR-40249`, `FHIR-55347`, `FHIR-54588`, `FHIR-54589`, `FHIR-54590`.
- Jira searches performed: snapshots for explicit keys and related keys above; FTS for page label, page title, exact changed phrases, and distinctive terms such as `valueSetCanonical`, `version specific finding`, `use or create their own codes for us`, and `production ready`.
- Zulip searches performed: quoted explicit Jira keys, page label/title, exact changed phrases, binding-strength terms, and `production ready`; one relevant example-binding implementer thread was snapshotted.
- Confluence searches performed: `refs jira` and FTS for explicit keys; snapshots for pages `144989994`, `113673765`, `66940491`, `234784975`, and `413042382`.
- Important caveats:
  - Unquoted Zulip FTS searches for issue keys like `FHIR-38967` failed because FTS parsed the hyphenated key as an operator. Quoted key searches were rerun and found no Zulip hits for the explicit commit keys.
  - Several current JSON snippet issues predate the R4 -> R6 diff, but the new Required Binding section added another instance of the same pattern.
  - `FHIR-54589` and related 2026 evidence postdate the R6 ballot4 source commit, so it is later reassessment/future-work evidence rather than original R4 -> R6 rationale.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source old | R4 page start | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/terminologies-binding-examples.html:19` | R4 page starts with Extensible examples only; no Required or Example binding sections. |
| Source old | R4 Preferred section | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/terminologies-binding-examples.html:159` | Preferred examples existed before R6; later changes mostly retitled/releveled them. |
| Source new | Required section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-binding-examples.html:18` | New substantive section added by `FHIR-38967`. |
| Source new | Required CodeableConcept mismatch | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-binding-examples.html:58` | Paragraph says "with an Extensible binding" while the JSON snippet says `"strength": "required"`. |
| Source new | Required static-binding wording | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-binding-examples.html:37` | "version specific finding" appears to be an introduced typo for binding. |
| Source new | Extensible section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-binding-examples.html:103` | Existing R4 content preserved with heading/link/editorial changes. |
| Source new | Preferred section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-binding-examples.html:243` | Existing R4 content preserved with heading/link/editorial changes. |
| Source new | Example section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-binding-examples.html:358` | New substantive section added by `FHIR-38967`. |
| Source new | Example section typo | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies-binding-examples.html:368` | Sentence ends "use or create their own codes for us"; likely reader-facing typo introduced with the Example section. |
| Source new | No additional binding examples | `rg -n "additional binding|additional bindings|binding.additional" .../source/terminologies-binding-examples.html` | R6 ballot4 page has no additional-binding example text; relevant to later `FHIR-54589`. |
| Commit | `c40179b5decbac4cfba23711fe59fda46454945e` | https://github.com/HL7/fhir/commit/c40179b5decbac4cfba23711fe59fda46454945e | Main substantive change: adds Required and Example binding examples for `FHIR-38967`. |
| PR | `HL7/fhir#2638` | https://github.com/HL7/fhir/pull/2638 | GitHub PR search associated `c40179b5...` with this merged PR. |
| Commit | `3e9548e1fd174e57f6b310153f25cf8f13169e0d` | https://github.com/HL7/fhir/commit/3e9548e1fd174e57f6b310153f25cf8f13169e0d | `FHIR-31705` operation/tab/heading-level change. |
| Commit | `8592e1207273b786db340efb927bb6d1dc9756c9` | https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9 | `FHIR-25431` datatype wording cleanup. |
| Commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | R6 normative metadata/status table change to Informative. |
| PR | `HL7/fhir#3901` | https://github.com/HL7/fhir/pull/3901 | GitHub PR search associated `270e0ceb...` with this merged PR. |
| Commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | `FHIR-44047` e.g./i.e. punctuation cleanup on this page. |
| PR | `HL7/fhir#3951` | https://github.com/HL7/fhir/pull/3951 | GitHub PR search associated `887bc238...` with this merged PR. |
| Jira | `FHIR-38967` | https://jira.hl7.org/browse/FHIR-38967; reopen with `bun run jira:search snapshot FHIR-38967` | Formal issue requesting Required and Example binding examples. |
| Jira | `FHIR-31705` | https://jira.hl7.org/browse/FHIR-31705; reopen with `bun run jira:search snapshot FHIR-31705` | Rationale for making Binding Examples a separate Terminologies tab. |
| Jira | `FHIR-25431` | https://jira.hl7.org/browse/FHIR-25431; reopen with `bun run jira:search snapshot FHIR-25431` | Rationale for datatype spelling cleanup. |
| Jira | `FHIR-44047` | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Rationale for e.g./i.e. punctuation cleanup. |
| Jira | `FHIR-54589` | https://jira.hl7.org/browse/FHIR-54589; reopen with `bun run jira:search snapshot FHIR-54589` | Later resolved-change-required decision says to add examples demonstrating additional bindings to the examples page. |
| Jira | `FHIR-54588` | https://jira.hl7.org/browse/FHIR-54588; reopen with `bun run jira:search snapshot FHIR-54588` | Related unresolved additional-bindings issue: strength vs purpose separation. |
| Jira | `FHIR-54590` | https://jira.hl7.org/browse/FHIR-54590; reopen with `bun run jira:search snapshot FHIR-54590` | Related unresolved issue about validation expectations and slicing for additional bindings. |
| Confluence | Vocab tracker minutes 2022-12-19 | https://confluence.hl7.org/spaces/VOC/pages/144989994/Tracker+Issues+2022-12-19+Call+Agenda+and+Minutes; `bun run confluence:search snapshot 144989994` | Lists `FHIR-38967` as resolved change required and records related binding-strength discussion. |
| Confluence | FHIR-I WGM 202105 | https://confluence.hl7.org/spaces/FHIRI/pages/113673765/FHIR+Infrastructure+Minutes+WGM+202105; `bun run confluence:search snapshot 113673765` | Records `FHIR-31705` vote for the operation/tab change. |
| Confluence | FHIR-I CC 20200113 | https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113; `bun run confluence:search snapshot 66940491` | Records `FHIR-25431` as auto-approved/"Using data type". |
| Confluence | FHIR-I WGM 202405 Dallas | https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas; `bun run confluence:search snapshot 234784975` | Records `FHIR-44047` as "will fix". |
| Confluence | Vocab WGM Jan 2026 Wed Q2 | https://confluence.hl7.org/spaces/VOC/pages/413042382/Jan+2026+-+HL7+WGM+-+Wednesday+Q2+Minutes; `bun run confluence:search snapshot 413042382` | Later discussion explicitly says to add additional-binding examples to this page. |
| Zulip | Example bindings without national IG | https://chat.fhir.org/#narrow/stream/implementers/topic/%E2%80%8BHow%20to%20handle%20example%20bindings%20with%20no%20national%20IG%3F; `bun run zulip:search snapshot implementers "How to handle example bindings with no national IG?"` | Later implementer discussion supports the practical relevance of Example binding guidance, but did not identify a mismatch in the page text. |

## Change summary

### New Required binding examples - substantive/semantic guidance

`c40179b5decbac4cfba23711fe59fda46454945e` added the entire Required binding section at new lines 18-101 in response to `FHIR-38967`.

Meaningful additions:

- A `code` example using `CodeSystem.status` with a required binding to `http://hl7.org/fhir/ValueSet/publication-status|6.0.0`.
- Guidance that the code must come from the indicated value set.
- A `CodeableConcept` example saying Required bindings are uncommon in base FHIR but common in profiles.
- A Condition example that is valid when coded with `282548003` and invalid if only text is supplied for a required binding.

Issues noticed in the added text:

- New line 58 says the profile binds `Condition.code` "with an Extensible binding", but the snippet at lines 62-68 says `"strength": "required"`.
- New line 37 says "version specific finding", likely intended as "version specific binding".
- The added ElementDefinition-like snippet uses `valueSetCanonical` at line 67, while the new `code` example uses `valueSet` at line 32. Existing Extensible/Preferred snippets also use `valueSetCanonical`, so this may be inherited from prior examples, but the newly added Required section repeats the inconsistency.

### Existing Extensible binding examples - mostly preserved; editorial/link changes

The R4 Extensible section existed at old lines 19-157. It remains at new lines 103-241.

Changes are mostly mechanical/editorial:

- Heading levels changed from `h2`/`h3` to `h3`/`h4` under `FHIR-31705`.
- `build.fhir.org` absolute links were changed to relative `valueset-condition-code.html` links by `d382fc3af52ab7607c6c8fead1f47cdf09be3562`.
- "data type" was changed to "datatype" by `FHIR-25431`.
- `e.g.`/`i.e.` comma punctuation was updated by `FHIR-44047`.

No change to the core Extensible binding semantics was found in this page diff.

### Existing Preferred binding examples - mostly preserved; editorial/link changes

The R4 Preferred section existed at old lines 159-271. It remains at new lines 243-355.

Changes mirror the Extensible section:

- Heading-level changes from `FHIR-31705`.
- Link cleanup from `d382fc3af52ab7607c6c8fead1f47cdf09be3562`.
- No substantive change to Preferred binding semantics in this page diff.

One pre-existing typo remains: line 246 says "Extensional binding" where the context is Preferred/Extensible binding strength. This was already present at old line 162, so it was not introduced by the R4 -> R6 change.

### New Example binding examples - substantive/semantic guidance

`c40179b5decbac4cfba23711fe59fda46454945e` added the Example binding section at new lines 358-379 in response to `FHIR-38967`.

Meaningful additions:

- Explains that FHIR uses Example bindings where there is no HL7 community agreement about which codes should be used.
- Says illustrative codes may lack good coverage or careful definition.
- Says implementers should not assume the codes are production ready.
- Points readers to IGs/guidance or their own codes.
- Lists `Account.billingStatus`, `Observation.code`, and `Encounter.type` as examples.

Issue noticed:

- New line 370 says "use or create their own codes for us", which appears to be an introduced typo, likely "for use" or just "use or create their own codes".

### Metadata/template/navigation - mechanical or informational

- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the old wrapper `<div class="col-12">`.
- `3e9548e1fd174e57f6b310153f25cf8f13169e0d` changed `<%txheader%>` to `<%txheader examples%>` and adjusted headings to make Binding Examples a distinct Terminologies tab.
- `c3da43d4d906bc8ef71d67923be5e5db976665be` changed the workgroup macro from `[%wg fhir%]` to `[%wg vocab%]`.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the status table from Trial Use/FMM 0 to Informative with Responsible Owner.
- `96a2d7151a590ca1a4070063010f5ce52366d3e6` removed a blank line.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Removed wrapper `<div class="col-12">`/closing `</div>`. | mechanical/template |
| `3e9548e1fd174e57f6b310153f25cf8f13169e0d` | 2022-08-27 | FHIR-31705 Operation Tab | Changed `txheader` to `txheader examples`, page title from `h1` to `h2`, and child headings from `h2/h3` to `h3/h4`. | navigation/metadata |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Changed "data type" to "datatype" in the Condition.code discussion. | editorial |
| `c3da43d4d906bc8ef71d67923be5e5db976665be` | 2022-09-05 | tidy up status codes on pages, and set version for ballot | Changed workgroup macro from `fhir` to `vocab`. | metadata |
| `96a2d7151a590ca1a4070063010f5ce52366d3e6` | 2022-12-05 | minor html fixes | Removed blank line. | mechanical |
| `d382fc3af52ab7607c6c8fead1f47cdf09be3562` | 2022-12-13 | fixing up broken links etc (links to build.fhir.org) | Changed two `http://build.fhir.org/valueset-condition-code.html` links to `valueset-condition-code.html`. | link/editorial |
| `c40179b5decbac4cfba23711fe59fda46454945e` | 2023-02-13 | FHIR-38967 Examples are missing for the Required Binding Strength and Example Binding Strength | Added Required binding examples and Example binding examples; retitled Extensible/Preferred headings to "Examples for ...". | substantive/semantic guidance |
| `4a6f587f14510cd09b0bae45f48efc11544b8b93` | 2023-04-27 | fix up stated version in source | Changed `publication-status|5.0.0` to `publication-status|6.0.0`. | version metadata/example maintenance |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Changed page status table from Trial Use/FMM 0 to Informative/Responsible Owner. | metadata/status |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Added commas after `e.g.` and `i.e.` in two places. | editorial |

Pickaxe checks:

- `git log -S "Examples for Required bindings"` and `git log -S "Examples for Example bindings"` both identify `c40179b5decbac4cfba23711fe59fda46454945e`.
- `git log -S "use or create their own codes for us"` identifies `c40179b5decbac4cfba23711fe59fda46454945e`.
- `git log -S "version specific finding"` identifies `c40179b5decbac4cfba23711fe59fda46454945e`.
- `git log -S "with an Extensible binding"` identifies the 2018 origin for the old Extensible section and `c40179b5...` for the newly added Required-section occurrence.

## Jira evidence

### Explicit Jira keys from commits/patches

| Key | Status/resolution | What it says | How it maps to the page |
|---|---|---|---|
| `FHIR-31705` | Published; Persuasive with Modification | The "Operations" tab/default terminology navigation was confusing. Resolution: make "Binding examples" a distinct tab between 4.1 and 4.3; do not make 4.1 the default. | Explains `txheader examples` and heading-level changes in `3e9548e1...`. Confluence page `113673765` records the vote. |
| `FHIR-25431` | Published; Persuasive | Inconsistent "datatype" vs. "data type"; pick one spelling. | Explains the one-line spelling cleanup in `8592e120...`. Confluence page `66940491` records "Using data type" / auto approval context. |
| `FHIR-38967` | Published; Persuasive | "Examples are missing for the Required Binding Strength and Example Binding Strength." Resolution: create examples for required and example binding strength; add simple example/text; suggested reviewer should review text with Vocab WG members. | Main source of new Required and Example sections in `c40179b5...`. |
| `FHIR-44047` | Resolved - change required; Persuasive | Correct punctuation for `e.g.,` and `i.e.,` throughout FHIR R6 ballot. | Explains `887bc238...` punctuation changes. Confluence page `234784975` says "will fix"; Jira status was still RCR in the local snapshot despite this page having an applied commit. |

### Related Jira issues that plausibly explain or contextualize the same text

| Key | Relevance |
|---|---|
| `FHIR-38964` | Asked why no guidance exists for the `code` datatype for Preferred binding. Resolution points to `FHIR-40249`; context shows Vocab was trying to make binding-strength guidance more consistent by datatype. |
| `FHIR-38965` | Asked why no guidance exists for the `code` datatype for Example binding. Comments note the 2022-12-19 Vocab review found inconsistent descriptions across binding strengths/datatype sections and deferred to broader cleanup. |
| `FHIR-40249` | Formalized Preferred binding guidance by datatype and added "For examples of Preferred bindings, see 4.2 Terminology Binding Examples." Context for why this page is the canonical examples page, but it does not directly require edits in this file. |
| `FHIR-54589` | Later R6 issue, resolved change required on 2026-01-28, says to add examples to the examples page demonstrating additional bindings and to clarify subset/non-subset behavior. This directly points to a future update not present in the R6 ballot4 page. |
| `FHIR-54588` | Related unresolved issue about separating binding strength from binding purpose for additional bindings. It reinforces that additional-binding guidance remains unsettled after ballot4. |
| `FHIR-54590` | Related unresolved issue about validation expectations and modeling guidance for additional bindings vs slicing. It reinforces the same later gap. |

### Context-only Jira hits that should not drive action

| Key | Why context-only |
|---|---|
| `FHIR-38973` | Search hit from the same Vocab minutes batch, but it concerns a different terminology-service examples paragraph and resolves via `FHIR-38972`; not this page. |
| `FHIR-55347` | 2026 spelling/abbreviation issue on this page for "doesn't" and "isn't"; resolved Not Persuasive because they are contractions, not abbreviations. It does not cover the separate "for us" typo or binding-strength mismatch noted here. |
| `FHIR-15748` | Search hit for `valueSetCanonical`; old STU3/R4-era DataRequirement issue, not this page and not evidence for current wording. |

## Zulip evidence

- Quoted searches for `"FHIR-31705"`, `"FHIR-25431"`, `"FHIR-38967"`, and `"FHIR-44047"` found no Zulip hits. Unquoted versions failed because the FTS parser treated hyphenated keys as expressions.
- `bun run zulip:search fts "\"terminologies-binding-examples\"" --limit 10` found only 2018 commit-bot messages for `GF#17402`, the original page creation/minor updates. Useful historical background, but outside this R4 -> R6 diff.
- `bun run zulip:search fts "\"production ready\" \"Example bindings\""` found a 2026 implementer thread:
  - Stream/topic: `implementers` / `How to handle example bindings with no national IG?`
  - URL: https://chat.fhir.org/#narrow/stream/implementers/topic/%E2%80%8BHow%20to%20handle%20example%20bindings%20with%20no%20national%20IG%3F
  - Snapshot command: `bun run zulip:search snapshot implementers "How to handle example bindings with no national IG?"`
  - Summary: an implementer asked how to handle Example bindings where no national IG exists; Lloyd McKenzie advised being driven by local implementer/governance reality and cherry-picking from existing specs may be the best practical approach. This supports the practical relevance of the new Example-binding guidance but did not reveal a mismatch in the page text.
- `bun run zulip:search fts "\"binding strength\" \"Example Binding Strength\""` found broad/context-only hits, including an R5 tracker-to-apply topic and later FMG discussions of Example value sets. None was relied on for causality.

## Confluence evidence

| Page ID | Title | Evidence |
|---|---|---|
| `144989994` | Tracker Issues 2022-12-19 Call Agenda and Minutes | Vocab minutes list `FHIR-38967` as "Change Request examples are missing for the required binding strength and example binding strength" and "Resolved change required." The same minutes list `FHIR-38964`/`FHIR-38965` as deferred until binding-strength datatype inconsistencies are addressed. |
| `113673765` | FHIR Infrastructure Minutes WGM 202105 | References `FHIR-31705` and records the same 21-0-0 vote as the Jira snapshot for making Binding Examples a distinct tab. |
| `66940491` | FHIR Infrastructure Minutes CC 20200113 | References `FHIR-25431`; snippet says "Using 'data type' Will auto approve." |
| `234784975` | FHIR Infrastructure Minutes WGM 202405 - Dallas | References `FHIR-44047` as "will fix", matching the later punctuation cleanup. |
| `413042382` | Jan 2026 - HL7 WGM - Wednesday Q2 Minutes | Later Vocab discussion of additional bindings explicitly links `https://build.fhir.org/terminologies-binding-examples.html` and says "Need to add examples with additional bindings here"; links to `FHIR-54589`, `FHIR-54588`, `FHIR-54590`, and related items. This is the strongest evidence for future page work after ballot4. |

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2018-08-12 | source/Zulip commit-bot background | `GF#17402` created/updated the original binding examples page with Extensible and Preferred examples. Outside the requested range but explains pre-R4 origins. |
| 2020-01-09 | Jira created | `FHIR-25431` created about inconsistent "datatype" vs "data type". |
| 2021-01-13 | Confluence/minutes | FHIR-I minutes page `66940491` records `FHIR-25431` as auto-approved context. |
| 2021-04-06 | Jira created | `FHIR-31705` created about Terminologies/Operations tab navigation. |
| 2021-05-24 | Jira vote/resolution | `FHIR-31705` resolved Persuasive with Modification, vote 21-0-0. |
| 2021-06-27 | source commit | `d7b8dad...` template cleanup on this page. |
| 2022-08-27 | source commit | `3e9548e...` applied `FHIR-31705` page tab/heading changes. |
| 2022-08-31 | source commit | `8592e12...` applied `FHIR-25431` datatype spelling cleanup. |
| 2022-10-12 | Jira created | `FHIR-38967` created requesting Required and Example binding examples. |
| 2022-12-19 | Confluence/minutes + Jira vote | Vocab minutes page `144989994` lists `FHIR-38967` as resolved change required; Jira shows vote Rob Hausam/Peter Jordan 2-0-0. |
| 2023-02-13 | source commit/PR merge | `c40179b5...` adds Required and Example binding examples; GitHub PR search associates it with `HL7/fhir#2638`, merged 2023-02-13. |
| 2023-04-27 | source commit | `4a6f587...` updates the example bound value set version from `5.0.0` to `6.0.0`. |
| 2024-01-22 | Jira created | `FHIR-44047` created for `e.g.,`/`i.e.,` punctuation across R6 ballot. |
| 2024-05-23 | Jira resolution | `FHIR-44047` resolved Persuasive; Confluence page `234784975` records "will fix." |
| 2025-10-31 | source commit | `270e0ce...` R6 normative metadata change sets page status table to Informative. |
| 2025-11-03 | source commit | `887bc238...` applies `FHIR-44047` punctuation changes on this page; GitHub PR search associates later merged PR `HL7/fhir#3951` on 2025-11-06. |
| 2026-01-16 | Jira created | `FHIR-54588`, `FHIR-54589`, and `FHIR-54590` created around additional-binding guidance. |
| 2026-01-28 | Confluence/minutes + Jira resolution | Vocab WGM page `413042382` and `FHIR-54589` resolution say to add additional-binding examples to this examples page. This postdates R6 ballot4 source. |

## Evidence log

Key commands and what they established:

```bash
test -f "$OLD/source/terminologies-binding-examples.html" && echo "old exists"
test -f "$NEW/source/terminologies-binding-examples.html" && echo "new exists"
wc -l "$OLD/source/terminologies-binding-examples.html" "$NEW/source/terminologies-binding-examples.html"
```

Established: page exists in both trees; old has 278 lines, new has 386 lines.

```bash
git -C "$NEW" --no-pager diff --find-renames \
  0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 \
  5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd \
  -- source/terminologies-binding-examples.html
```

Established: direct R4 -> R6 diff adds Required and Example sections, changes heading levels, changes status metadata, fixes links and editorial punctuation.

```bash
git -C "$NEW" --no-pager log --reverse --date=short \
  --format='%H%x09%ad%x09%s' \
  0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd \
  -- source/terminologies-binding-examples.html
```

Established: 10 commits touched the page in the range; explicit keys were `FHIR-31705`, `FHIR-25431`, `FHIR-38967`, `FHIR-44047`.

```bash
git -C "$NEW" --no-pager show --stat --patch <commit> -- source/terminologies-binding-examples.html
```

Established individual patch details for all 10 commits; `c40179b5...` is the main substantive content addition.

```bash
git -C "$NEW" --no-pager log --reverse --date=short \
  --format='%H%x09%ad%x09%s' -S "Examples for Required bindings" \
  -- source/terminologies-binding-examples.html
```

Established: Required/Example section text originates in `c40179b5...`.

```bash
bun run jira:search snapshot FHIR-31705
bun run jira:search snapshot FHIR-25431
bun run jira:search snapshot FHIR-38967
bun run jira:search snapshot FHIR-44047
```

Established: formal dispositions for explicit commit keys.

```bash
bun run jira:search snapshot FHIR-54589
bun run confluence:search snapshot 413042382
rg -n "additional binding|additional bindings|binding.additional" "$NEW/source/terminologies-binding-examples.html"
```

Established: later Vocab/Jira decision says to add additional-binding examples to this page; the R6 ballot4 page has no such text.

```bash
bun run zulip:search fts "\"FHIR-38967\"" --limit 20
bun run zulip:search fts "\"production ready\" \"Example bindings\"" --limit 10
bun run zulip:search snapshot implementers "How to handle example bindings with no national IG?"
```

Established: no exact Zulip key hit for `FHIR-38967`; a later implementer thread supports general relevance of Example binding guidance but does not show a page mismatch.

Failed or caveated searches:

- `bun run zulip:search fts "FHIR-38967"` and similar unquoted issue-key searches failed with `SQLiteError: no such column: 38967`; reran as quoted exact phrases.
- Exact Jira/Zulip/Confluence searches for `"version specific finding"` and `"use or create their own codes for us"` found no community discussion; pickaxe traces both phrases to `c40179b5...`.

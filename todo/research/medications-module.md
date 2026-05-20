# medications-module research appendix

## Scope and coverage

- Page path: `source/medications-module.html`
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: page exists in both trees; old file has 217 lines and new file has 210 lines.
- The R6 ballot4 source page was read end-to-end.
- Commit count touching the page in the requested range: 15.
- Explicit issue keys found in commit subjects/patch context: `FHIR-24100`, `FHIR-32864`, `FHIR-38682`, `FHIR-44047`, `FHIR-51930`; `FHIR#31847` in one commit corresponds to Jira `FHIR-31847`.
- Additional plausible Jira issues found by phrase search: `FHIR-50845`, `FHIR-53486`, `FHIR-57378`; OO incubator context-only hits included `FHIR-52991` and `FHIR-53581`.
- Jira/Zulip/Confluence searches were bounded to explicit keys and distinctive changed phrases such as `Medication Reconciliation List`, `MedicationKnowledge FormularyItem`, `ImmunizationRecommendation ImmunizationEvaluation`, `SupplyRequest SupplyDelivery incubator`, and `functional lists list-operation-find`.
- Caveats: no PR links were present in the inspected commit metadata. Initial unquoted Zulip FTS searches for issue keys such as `FHIR-38682` failed because the hyphen was parsed by FTS; retried with quoted FTS and SQL `LIKE`, which found no key mentions.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/medications-module.html` | Reviewed current page source. |
| Source | FormularyItem current link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/medications-module.html:49` | Points to `https://build.fhir.org/ig/HL7/phx-incubator/StructureDefinition-FormularyItem`, which returned HTTP 404 on 2026-05-20. |
| Source | Immunization additional-resource links | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/medications-module.html:54-56`, `:123-129` | ImmunizationEvaluation/Recommendation now link to the immunization incubator. |
| Source | Medication list use case | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/medications-module.html:143-147` | R4 text about functional lists and the List `$find` operation was removed. |
| Source | Medication reconciliation guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/medications-module.html:164-165` | Long guidance section added from Pharmacy Confluence/Jira. |
| Source | Supply incubator links | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/medications-module.html:170` | SupplyRequest/SupplyDelivery now point to OO incubator pages. |
| Source | Roadmap text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/medications-module.html:203-204` | Still says Pharmacy is evaluating formularies and medication knowledge after MedicationKnowledge was removed. |
| Commit | Template churn | `https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Removed wrapper div/newline; mechanical. |
| Commit | ClinicalUseIssue commented link cleanup | `https://github.com/HL7/fhir/commit/b749d029049da7124fff4a982321bc8447c43f61` | Related to `FHIR-31847`; removed a commented-out stale link. |
| Commit | FormularyItem initially added | `https://github.com/HL7/fhir/commit/2cdfc79c26c78e2094940196686a7e6e7ef1c2ef` | Added FormularyItem to the module index. |
| Commit | Medication reconciliation guidance | `https://github.com/HL7/fhir/commit/ece63351c6107ee2d837bd8bdc64871ad186dc4c` | Commit subject references `FHIR-24100`, `FHIR-32864`; added the long medication reconciliation section. |
| Commit | MedicationUsage -> MedicationStatement | `https://github.com/HL7/fhir/commit/b2032629f28b8d31b9a67b46170dde873398fb0d` | Implements `FHIR-38682` rename on this page. |
| Commit | Remove extra substance resources | `https://github.com/HL7/fhir/commit/b595760a8a140b57e6e0733823bdeab5dc8e7863` | Implements `FHIR-51930` for the two substance resources visible on this page. |
| Commit | R6 normative changes | `https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Adds "Responsible Owner" label and removes functional-list/List `$find` guidance. |
| Commit | Punctuation cleanup | `https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Implements one `FHIR-44047`-style punctuation cleanup on this page. |
| Commit | Supply links to OO incubator | `https://github.com/HL7/fhir/commit/3b38b80cf23f9cbb306fab8fcedb293315478c32`, `https://github.com/HL7/fhir/commit/01706a920f4e88452c409c2cc0b7c74f09ac51c6` | Moves SupplyRequest/SupplyDelivery links out to OO incubator and fixes the IG path. |
| Commit | Immunization links to incubator | `https://github.com/HL7/fhir/commit/e073fb45ec6f5a738a9f674baf63406bfe90fb78` | Moves ImmunizationEvaluation/Recommendation links out to immunization incubator. |
| Commit | FormularyItem external link | `https://github.com/HL7/fhir/commit/9987f9c0c3ce5ec4f277c22ed71cbb2d210efeb6` | Replaces local `formularyitem.html` link with `phx-incubator` URL. |
| Commit | Remove MedicationKnowledge from page | `https://github.com/HL7/fhir/commit/5a4307d78b0209f61bbc68d582c1e190b3aaee5c` | Removes MedicationKnowledge from the visible module index/table. |
| Jira | `FHIR-32864` | `https://jira.hl7.org/browse/FHIR-32864`; reopen with `bun run jira:search snapshot FHIR-32864` | Formal request to add Medication Reconciliation List guidance; resolution points to Confluence wording. |
| Jira | `FHIR-38682` | `https://jira.hl7.org/browse/FHIR-38682`; reopen with `bun run jira:search snapshot FHIR-38682` | Formal decision to change MedicationUsage back to MedicationStatement while stating scope did not change. |
| Jira | `FHIR-51930` | `https://jira.hl7.org/browse/FHIR-51930`; reopen with `bun run jira:search snapshot FHIR-51930` | Formal BR&R-backed removal of five substance-related resources. |
| Jira | `FHIR-50845` | `https://jira.hl7.org/browse/FHIR-50845`; reopen with `bun run jira:search snapshot FHIR-50845` | Decision to remove MedicationKnowledge and move elements to FormularyItem/other resources. |
| Jira | `FHIR-53486` | `https://jira.hl7.org/browse/FHIR-53486`; reopen with `bun run jira:search snapshot FHIR-53486` | Later accepted page-specific cleanup: typos, Additional Resources subsection, updated immunization descriptions and use-case ordering. |
| Jira | `FHIR-57378` | `https://jira.hl7.org/browse/FHIR-57378`; reopen with `bun run jira:search snapshot FHIR-57378` | Later submitted request for a MedicationKnowledge landing/mapping page. |
| Confluence | Medication Reconciliation List | `https://confluence.hl7.org/spaces/PHAR/pages/79513303/Medication+Reconciliation+List`; reopen with `bun run confluence:search snapshot 79513303` | Source wording for the long R5/R6 guidance section. |
| Confluence | January 2022 Pharmacy minutes | `https://confluence.hl7.org/spaces/PHAR/pages/81018804/January+2022+-+virtual+Minutes`; reopen with `bun run confluence:search snapshot 81018804` | Mentions `FHIR-32864` in Pharmacy tracker review. |
| Confluence | 2022-10-31 Pharmacy notes | `https://confluence.hl7.org/spaces/PHAR/pages/144966025/2022-10-31+Agenda+Meeting+Notes`; reopen with `bun run confluence:search snapshot 144966025` | Records `FHIR-38682` discussion/vote. |
| Confluence | May 2025 Pharmacy WGM | `https://confluence.hl7.org/spaces/PHAR/pages/325454356/May+2025+WGM+-+Pharmacy+WG+Minutes`; reopen with `bun run confluence:search snapshot 325454356` | Pharmacy discussed removing MedicationKnowledge in favor of FormularyItem/medication definition resources. |
| Confluence | September 2025 Pharmacy WGM | `https://confluence.hl7.org/spaces/PHAR/pages/358896372/September+2025+WGM+-+Pharmacy+WG+Minutes`; reopen with `bun run confluence:search snapshot 358896372` | Pharmacy continued discussing FormularyItem/MedicationKnowledge placement in Additional Resources. |
| Confluence | 2025-06-10 BR&R call | `https://confluence.hl7.org/spaces/BRR/pages/345545642/2025-06-10+Conference+Call`; reopen with `bun run confluence:search snapshot 345545642` | BR&R motion to remove the substance resources later reflected on this page. |
| Confluence | 2025-12-11 PHWG call | `https://confluence.hl7.org/spaces/PHWG/pages/358283983/2025-12-11+Public+Health+Work+Group+Call+Minutes`; reopen with `bun run confluence:search snapshot 358283983` | Public Health vote supporting `FHIR-53486` page updates. |
| Confluence | Immunization incubator proposal | `https://confluence.hl7.org/spaces/FHIR/pages/391645041/FHIR+Immunization+Evaluation+and+Recommendation+Incubator`; reopen with `bun run confluence:search snapshot 391645041` | Defines incubator scope for ImmunizationEvaluation/Recommendation. |
| Confluence | 2025-11-07 Immunization Focus Group | `https://confluence.hl7.org/spaces/PHWG/pages/403865953/2025-11-07+Immunization+Focus+Group`; reopen with `bun run confluence:search snapshot 403865953` | States these immunization resources are no longer in core and points to the new guide. |
| Confluence | FHIR Incubators overview | `https://confluence.hl7.org/spaces/FHIR/pages/441128732/FHIR+Incubators+overview`; reopen with `bun run confluence:search snapshot 441128732` | Lists immunization/OO incubator links as OK but FormularyItem/phx-incubator as NOT CREATED. |
| Zulip | Additional resources rationale | `https://chat.fhir.org/#narrow/stream/fmg/topic/Assessment%20of%20Resources%20for%20removal%20from%20R6`; reopen with `bun run zulip:search snapshot fmg "Assessment of Resources for removal from R6"` | FMG rationale for moving immature resources to Additional Resources. |
| Zulip | Immunization incubator setup | `https://chat.fhir.org/#narrow/stream/fmg/topic/FHIR%20IG%20Incubator%20Creation`; reopen with `bun run zulip:search snapshot fmg "FHIR IG Incubator Creation"` | Shows creation and CI availability of the immunization incubator. |
| Zulip | Additional-resources process concern | `https://chat.fhir.org/#narrow/stream/fmg/topic/Wednesday%20Rant`; reopen with `bun run zulip:search snapshot fmg "Wednesday Rant"` | Public Health concerns and assistance request for moving immunization resources. |
| Zulip | Medication overview background | `https://chat.fhir.org/#narrow/stream/implementers/topic/Medication%20overview`; reopen with `bun run zulip:search snapshot implementers "Medication overview"` | Background discussion of medication lists, MedicationRequest, and MedicationStatement/Usage semantics. |

## Change summary

### Template, ownership, and page chrome

- `substantive/normative`: none.
- `metadata/template/navigation`: removed the surrounding `<div class="col-12">`, changed the workgroup label from `Work Group` to `Responsible Owner: Work Group`, and normalized the final newline.
- Primary commits: `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`.

### Medication resource list and naming

- `substantive/normative`: the visible resource name/link changed from `MedicationUsage` to `MedicationStatement` in the index and medication table. `FHIR-38682` is the formal rationale; it was a non-compatible R5 issue, but the resolution explicitly says Pharmacy did not intend a scope change.
- `semantic guidance`: the long Medication Reconciliation List guidance was added. Jira `FHIR-32864` requested this addition and pointed to Confluence page 79513303; commit `ece63351...` added the section, then `b2032629...` updated embedded `MedicationUsage` references to `MedicationStatement`.
- `navigation/semantic`: `MedicationKnowledge` was removed from the visible index/table, and `FormularyItem` was left as an external additional-resource-style link.
- `overlooked/current-page issue`: the current FormularyItem link at line 49 returns HTTP 404, and Confluence FHIR Incubators overview page 441128732 says `phx-incubator`/FormularyItem is `NOT CREATED` as of 2026-05-19.

### Immunization resources

- `semantic guidance/navigation`: `ImmunizationEvaluation` and `ImmunizationRecommendation` links now point to the immunization incubator instead of local core pages.
- `intent evidence`: Confluence page 403865953 says R6 will only contain normative resources and that ImmunizationEvaluation/Recommendation are no longer in core; Zulip `fmg > FHIR IG Incubator Creation` records the incubator being created and available on CI.
- `later formal cleanup`: `FHIR-53486` later requested moving FormularyItem, ImmunizationEvaluation, and ImmunizationRecommendation to an `Additional Resources` subsection and updating their descriptions. The R6 ballot4 page being reviewed does not contain those structural/description updates.

### Other resources

- `semantic guidance/navigation`: SupplyRequest and SupplyDelivery links changed from local core links to OO incubator links. The current source omits `/en/`, but both current and `/en/` variants returned HTTP 200 in a spot check.
- `substantive/normative`: the medication-definition list removed `SubstancePolymer` and `SubstanceReferenceInformation`. This page only contained those two of the five resources removed by `FHIR-51930`; the broader Jira/BR&R motion also removed SubstanceNucleicAcid, SubstanceProtein, and SubstanceSourceMaterial elsewhere.
- `editorial only`: the old commented-out ClinicalUseIssue link was removed after the ClinicalUseDefinition rename context (`FHIR-31847`).

### Common use cases

- `semantic guidance`: R4 text saying FHIR defines functional lists and a specific List operation to retrieve the medication list was removed. I did not find a directly linked Jira issue for this line in the bounded search; the change came in the broad `normative changes for R6` commit.
- `editorial only`: `FHIR-44047`-style comma fixes were partly applied (`e.g.,`/`i.e.,`), but later `FHIR-53486` still identifies other page typos.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removed `<div class="col-12">` wrapper and trailing blank line/newline issue. | Mechanical/template |
| `b749d029049da7124fff4a982321bc8447c43f61` | 2021-07-16 | `adding a new copy of ClinicalUseIssue so the build works during the rename FHIR#31847 R4B and R5` | Removed a commented-out stale `ClinicalUseIssue` list item. | Editorial/mechanical |
| `2cdfc79c26c78e2094940196686a7e6e7ef1c2ef` | 2022-05-09 | `Initial commit for the FormularyItem resource.` | Added local `formularyitem.html` link to index. | Navigation/resource addition |
| `ece63351c6107ee2d837bd8bdc64871ad186dc4c` | 2022-09-04 | `FHIR-24100, FHIR-32864, fixes to Valueset narratives` | Added Medication Reconciliation List section using `MedicationUsage` wording at first. | Semantic guidance |
| `b2032629f28b8d31b9a67b46170dde873398fb0d` | 2023-01-25 | `FHIR-38682` | Changed visible `MedicationUsage` references to `MedicationStatement`. | Substantive naming/navigation |
| `b595760a8a140b57e6e0733823bdeab5dc8e7863` | 2025-09-09 | `removed extra substance definition resources per https://jira.hl7.org/browse/FHIR-51930` | Removed `SubstancePolymer` and `SubstanceReferenceInformation`; reindented `Ingredient`. | Substantive resource removal |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Added `Responsible Owner`; removed functional-list/List operation sentence. | Mixed metadata and semantic guidance |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Added comma after `i.e.` in one sentence and after `e.g.` in two medication-reconciliation/roadmap spots. | Editorial |
| `3b38b80cf23f9cbb306fab8fcedb293315478c32` | 2025-11-05 | `Remove OO resources and point to new incubator` | Changed SupplyRequest/SupplyDelivery to `oo-incubator-ig` links. | Navigation/additional resources |
| `01706a920f4e88452c409c2cc0b7c74f09ac51c6` | 2025-11-05 | `fix oo links` | Corrected OO incubator path from `oo-incubator-ig` to `oo-incubator`. | Navigation fix |
| `87f87a8a0389df053a5217de019d2596933da10f` | 2025-11-06 | `Merge branch 'master' into i.e.-e.g-` | Merge combined OO incubator link and punctuation changes. | Merge/mechanical |
| `e073fb45ec6f5a738a9f674baf63406bfe90fb78` | 2025-11-07 | `removing ImmunizationRecommendation and ImmunizationEvaluation` | Changed immunization resource links to immunization incubator URLs. | Navigation/additional resources |
| `26e92f62992049deb04d97c36677f38eb4d140af` | 2025-11-07 | `Merge remote-tracking branch 'origin/master'` | Merge combined immunization incubator links and punctuation state. | Merge/mechanical |
| `9987f9c0c3ce5ec4f277c22ed71cbb2d210efeb6` | 2025-11-12 | `Remove FormularyItem, and update status codes` | Replaced local FormularyItem link with `https://build.fhir.org/ig/HL7/phx-incubator/StructureDefinition-FormularyItem`. | Navigation/additional resources |
| `5a4307d78b0209f61bbc68d582c1e190b3aaee5c` | 2025-11-13 | `remove MedicationKnowledge` | Removed MedicationKnowledge from index/table. | Substantive resource removal/navigation |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-32864` (`Published`, `Persuasive`, `Non-substantive`, `Applied for Version: R5`) directly explains the Medication Reconciliation List addition. Its resolution says to update based on proposed wording at `https://confluence.hl7.org/display/PHAR/Medication+Reconciliation+List`.
- `FHIR-24100` (`Published`, `Persuasive`, `Non-substantive`) is broader workflow-review context. Its resolution says John Hatem would create new tickets as required. It should not be treated as the direct rationale for the medication reconciliation text beyond being named in the same commit as `FHIR-32864`.
- `FHIR-38682` (`Published`, `Persuasive with Modification`, `Non-compatible`, `Applied for Version: R5`) explains the rename back from MedicationUsage to MedicationStatement. The resolution states there was no scope change and accepts changing the name back to help existing implementations.
- `FHIR-51930` (`Applied`, `Persuasive`, `Non-compatible`, `Applied for Version: R6`) supports removing extra substance-related resources. Its description records the BR&R motion and vote, and links Confluence page 345545642.
- `FHIR-44047` (`Resolved - change required`, `Persuasive`) is a global punctuation cleanup issue for `e.g.,`/`i.e.,`. It explains only the punctuation edits, not the substantive medication/immunization changes.
- `FHIR-31847` (`Published`, `Persuasive with Modification`, `Non-compatible`, `Applied for Version: R5`) explains the ClinicalUseIssue -> ClinicalUseDefinition naming context; on this page the only effect was removing an already-commented-out stale line.

### Other Jira issues that plausibly explain changed or current text

- `FHIR-50845` (`Resolved - change required`, `Persuasive`, `Non-compatible`) says Pharmacy agreed to remove MedicationKnowledge and move elements to FormularyItem or other resources. This is relevant to the current removal of MedicationKnowledge and the FormularyItem replacement path.
- `FHIR-57378` (`Submitted`, 2026-05-20) asks for a MedicationKnowledge landing page indicating MedicationKnowledge has been deprecated in favor of FormularyItem, Medication, and MedicinalProductDefinition, plus a mapping of MedicationKnowledge elements. This is later than R6 ballot4 but directly related to the current page/transition.
- `FHIR-53486` (`Applied`, `Persuasive`, `Non-substantive`, `Applied for Version: R6`) asks for page-specific QA updates: fix typos, create Normative and Additional Resources subsections in 11.0.2, move FormularyItem/ImmunizationEvaluation/ImmunizationRecommendation to Additional Resources, update immunization descriptions, and reorder common use cases. Those changes are not visible in the R6 ballot4 source reviewed here.

### Context-only Jira hits that should not drive action

- `FHIR-53581` is about the OO incubator IG home page and lists migrated resources, including SupplyRequest/SupplyDelivery. Useful as incubator context, but not a problem in this medications module page.
- `FHIR-52991` is an unresolved OO incubator request about SupplyRequest/SupplyDelivery subjects. It is about resource content, not this page's link update.
- Da Vinci Drug Formulary issues appeared in FormularyItem searches but are IG-specific and do not explain this core page change.

## Zulip evidence

- Explicit issue-key searches for `FHIR-32864`, `FHIR-38682`, `FHIR-51930`, `FHIR-50845`, `FHIR-57378`, `FHIR-53486`, and `FHIR-44047` found no relevant human Zulip mentions after retrying quoted FTS and SQL `LIKE`.
- `fmg > Assessment of Resources for removal from R6` (thread URL in quick links) gives FMG's general rationale: R6 should incentivize stability, immature resources should move to "Additional Resources" in IGs, and moved resources should not be directly referenced by core resources/examples, though narrative can mention them as work in progress. It lists FormularyItem among recommended Additional Resources and discusses the broader R6 resource-removal process.
- `fmg > Wednesday Rant` records Public Health concerns about the new Additional Resources process. Craig Newman specifically says Public Health has people invested in ImmunizationEvaluation/Recommendation but lacks technical resources, and asks FMG to help move them to an Additional Resources IG. Lloyd McKenzie replies that the WG needs to identify the IG name and what moves.
- `fmg > FHIR IG Incubator Creation` shows operational setup for additional-resource IGs. Craig Newman proposed `uv/immunization-incubator`, Grahame created `https://github.com/HL7/immunization-incubator`, and Craig later reported the immunization incubator was live on the CI build site at `https://build.fhir.org/ig/HL7/immunization-incubator/en/`.
- `implementers > Medication overview` is useful background for medication-list semantics. The thread discusses MedicationRequest vs MedicationStatement/MedicationUsage, reconciled medication lists, and Pharmacy's medication-list guidance work. It supports why medication-list guidance was needed but does not directly cite `FHIR-32864`.

## Confluence evidence

- Page 79513303 `Medication Reconciliation List` contains the draft guidance copied into the spec. The source page later updates `MedicationUsage` terms in that copied text to `MedicationStatement`, following `FHIR-38682`.
- Page 81018804 `January 2022 - virtual Minutes` mentions `FHIR-32864` in Pharmacy FHIR tracker review. It is supporting process evidence, not detailed rationale.
- Page 144966025 `2022-10-31 Agenda/Meeting Notes` records `FHIR-38682` discussion and vote: MedicationUsage resource name would revert to MedicationStatement; vote 11-0-0.
- Page 345545642 `2025-06-10 Conference Call` records the BR&R motion to remove/delete five substance-related resources, including SubstancePolymer and SubstanceReferenceInformation, vote 9-0-0.
- Page 325454356 `May 2025 WGM - Pharmacy WG Minutes` records Pharmacy's MedicationKnowledge/FormularyItem discussion: MedicationKnowledge had little implementation interest from drug compendia, overlapped MedicinalProduct, and could be removed in favor of FormularyItem/other definition resources.
- Page 358896372 `September 2025 WGM - Pharmacy WG Minutes` shows continued discussion of FormularyItem, MedicationKnowledge, and their placement into Additional Resources.
- Page 358283983 `2025-12-11 Public Health Work Group Call Minutes` records the `FHIR-53486` vote: "FHIR Core - Medications module", typos, ImmunizationEvaluation/Recommendation, grouping of medication and immunization use cases; motion persuasive and changes as suggested, vote 28-0-1.
- Page 391645041 `FHIR Immunization Evaluation and Recommendation Incubator` defines the incubator scope for ImmunizationRecommendation and ImmunizationEvaluation as they progress toward normative state.
- Page 403865953 `2025-11-07 Immunization Focus Group` states R6 will only contain normative resources, Immunization is ready for normative, and ImmunizationRecommendation/ImmunizationEvaluation are no longer in core; it points participants to `https://build.fhir.org/ig/HL7/immunization-incubator/en/`.
- Page 441128732 `FHIR Incubators overview` is important current process evidence: immunization and OO incubator resource links are listed as OK, but `phx-incubator` is `NOT CREATED` and FormularyItem has status `NOT CREATED`.

## Timeline

| Date | Clock | Evidence | Event |
|---:|---|---|---|
| 2021-03/04 | Discussion | Zulip `implementers > Medication overview` | Community discussed medication overview/list semantics and MedicationStatement/MedicationUsage/MedicationRequest tradeoffs. |
| 2021-06-05 | Jira created | `FHIR-32864` | Request opened to add Medication Reconciliation List guidance to the medications module overview page. |
| 2022-01-21 | Jira resolved/voted | `FHIR-32864`; Confluence 81018804 | Pharmacy accepted adding the proposed medication reconciliation wording. |
| 2022-05-09 | Source commit | `2cdfc79c26c78e2094940196686a7e6e7ef1c2ef` | FormularyItem added to the module index as a local link. |
| 2022-09-04 | Source commit | `ece63351c6107ee2d837bd8bdc64871ad186dc4c` | Medication Reconciliation List guidance added to the page. |
| 2022-10-31 | WG vote | Confluence 144966025; `FHIR-38682` | Pharmacy voted to revert MedicationUsage name to MedicationStatement. |
| 2023-01-25 | Source commit | `b2032629f28b8d31b9a67b46170dde873398fb0d` | Page changed MedicationUsage references to MedicationStatement. |
| 2025-05-12/13 | WG/Jira decision | `FHIR-50845`; Confluence 325454356 | Pharmacy agreed to remove MedicationKnowledge and move elements to FormularyItem/other resources. |
| 2025-06-10 | WG vote | Confluence 345545642; `FHIR-51930` | BR&R approved removing five substance-related resources. |
| 2025-09-09 | Source commit | `b595760a8a140b57e6e0733823bdeab5dc8e7863` | Page removed SubstancePolymer and SubstanceReferenceInformation. |
| 2025-10-22 to 2025-11-07 | Discussion | Zulip FMG threads; Confluence 403865953 | Additional Resources process and immunization incubator setup discussed; immunization resources moved out of core. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | R6 normative-change commit updated owner label and removed functional-list/List operation sentence. |
| 2025-11-05/07 | Source commits | `3b38b80...`, `01706a9...`, `e073fb4...` | Supply and immunization links changed to incubator targets. |
| 2025-11-12/13 | Source commits | `9987f9c...`, `5a4307...` | FormularyItem moved to phx-incubator link; MedicationKnowledge removed from page. |
| 2025-12-11/12 | WG/Jira decision | Confluence 358283983; `FHIR-53486` | Public Health accepted later medications-module QA/update request. |
| 2025-12-18 | Publication boundary/source commit | `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` | R6 ballot4 source commit being reviewed ("bump version for publication"). |
| 2026-05-19 | Later process evidence | Confluence 441128732 | FHIR Incubators overview lists phx-incubator/FormularyItem as NOT CREATED. |
| 2026-05-20 | Later Jira | `FHIR-57378` | Pharmacy submitted request for MedicationKnowledge landing/mapping page. |
| 2026-05-20 | Link check | `curl -L` | Current FormularyItem URL returned HTTP 404; immunization and OO tested links returned HTTP 200. |

## Evidence log

- Page boundary: `test -f` confirmed old and new `source/medications-module.html`; `wc -l` reported old 217/new 210 lines.
- Direct diff: `git -C <new-tree> --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/medications-module.html`.
- History: `git -C <new-tree> --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/medications-module.html`.
- Commit inspection: `git -C <new-tree> --no-pager show --stat --patch <COMMIT> -- source/medications-module.html`; merge details inspected with `git show -m`.
- Jira snapshots: `bun run jira:search snapshot FHIR-32864`, `FHIR-38682`, `FHIR-51930`, `FHIR-44047`, `FHIR-31847`, `FHIR-50845`, `FHIR-53486`, `FHIR-57378`.
- Jira phrase searches included: `bun run jira:search fts "\"Medication Reconciliation List\"" --limit 10`, `FormularyItem medications module`, `"remove MedicationKnowledge"`, `"SupplyRequest" "SupplyDelivery" incubator`, `"ImmunizationRecommendation" "ImmunizationEvaluation" incubator`, `"functional lists" "list-operation-find"`.
- Zulip phrase searches included: `bun run zulip:search fts "MedicationKnowledge FormularyItem" --limit 20`, `bun run zulip:search fts "\"ImmunizationRecommendation\" \"ImmunizationEvaluation\"" --limit 20`, and exact-key retries with quoted FTS and SQL `LIKE`.
- Zulip snapshots: `bun run zulip:search snapshot fmg "Assessment of Resources for removal from R6"`, `bun run zulip:search snapshot fmg "FHIR IG Incubator Creation"`, `bun run zulip:search snapshot fmg "Wednesday Rant"`, `bun run zulip:search snapshot implementers "Medication overview"`.
- Confluence searches: `bun run confluence:search refs jira <KEY>`, `bun run confluence:search fts "<phrase>" --limit 10 --kind any`.
- Confluence snapshots: `bun run confluence:search snapshot 79513303`, `81018804`, `144966025`, `325454356`, `358896372`, `345545642`, `358283983`, `391645041`, `403865953`, `441128732`.
- Full current-page read: `view` ranges `[1,80]`, `[81,160]`, `[161,210]` on the R6 ballot4 source file.
- Link checks: `curl -L -s -o /tmp/curl-check.out -w '%{http_code}' <url>` for FormularyItem/phx-incubator, OO incubator, and immunization incubator targets. FormularyItem/phx-incubator returned 404; OO/immunization targets returned 200.

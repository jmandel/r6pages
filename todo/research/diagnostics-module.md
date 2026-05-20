# diagnostics-module research appendix

## Scope and coverage

- Page path: `source/diagnostics-module.html`.
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: page exists in both trees. Old file has 133 lines; newer file has 400 newline-terminated lines and was read end-to-end.
- Source history: 48 commits touched this page between the old and new commits. Explicit Jira keys found in commit subjects/bodies or linked evidence: `FHIR-17183`, `FHIR-22531`, `FHIR-39168`, `FHIR-40540`, `FHIR-40581`, `FHIR-44047`, `FHIR-50365`, `FHIR-50386`, `FHIR-50402`, `FHIR-50513`, `FHIR-50514`, `FHIR-50515`, `FHIR-50516`, `FHIR-50517`, `FHIR-50518`, `FHIR-50519`, `FHIR-50520`, `FHIR-50523`, `FHIR-50524`, `FHIR-50635`, `FHIR-50672`, `FHIR-50674`, `FHIR-50920`, `FHIR-51227`, `FHIR-51640`, `FHIR-51647`, `FHIR-52539`.
- Jira: queried all explicit keys with SQL and snapshotted the same keys. Distinctive phrase searches were also run for the current index/resource list, duplicate related-section heading, and MolecularDefinition/additional-resource wording.
- Zulip: searched explicit Jira keys, then exact/near-exact changed phrases. Snapshotted `#genomics > Update Observation to support MolDef`, `#genomics > JIRAs vote: replacing MolSeq with MolDef in R6 July 8th`, `#committers/git-help > Diagnostic-module.html`, `#committers > Replacing a FHIR resource.`, and `#implementers > Image Annotations`.
- Confluence: searched refs for the main Jira keys and snapshotted the parent/child draft, Diagnostic Module R6 update page, imaging update page, MolecularDefinition proposal, and relevant OO/CG minutes.
- Caveats: the Confluence `Diagnostic Module - R6 Updates` page snapshot is version 26, last edited 2026-05-19, after the R6 ballot4 source boundary; it is useful as later/current working context, not proof of R6 ballot4 intent by itself. I did not inspect image pixels/OCR for `diagnostic-module-resources.png`, so figure-content Jira resolutions were checked only through HTML text/history and related evidence.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/diagnostics-module.html` | Baseline page. |
| Source | New R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/diagnostics-module.html` | Current reviewed page. |
| Source lines | Current index | New page lines 40-64 | Index omits `ServiceRequest` but duplicates `ImagingSelection` and `ImagingStudy`. |
| Source lines | Resource table | New page lines 89-109 | Table still includes `ServiceRequest` and the main diagnostics resources. |
| Source lines | First related section | New page lines 69-78 | Added `Related Resources and Modules` section plus diagram intro. |
| Source lines | Duplicate related section | New page lines 376-383 | Later duplicate `Related Resources and Modules` heading/text still present. |
| Source lines | DiagnosticReport/Observation guidance | New page lines 112-297 | New parent/child, microbiology, reflex/repeat/re-run, follow-up, and add-on guidance. |
| Source lines | Not-performed observation note | New page line 122 | Applied `FHIR-51640` diagnostic-module note. |
| Source lines | Imaging/DICOM SR guidance | New page lines 299-335 | Applied `FHIR-50672` imaging use-case content. |
| Source lines | Roadmap | New page lines 385-396 | Updated FMM/resource status and MolecularDefinition additional-resource text. |
| Commit | Parent/child guidance | `ab140a0db3a9e05c2f36a63d57180a7a17f52776`, https://github.com/HL7/fhir/commit/ab140a0db3a9e05c2f36a63d57180a7a17f52776 | Adds the large organizing-related-DiagnosticReport/Observation section for `FHIR-40540`/`FHIR-39168`. |
| Commit | R6 module adjustment | `cefb308f4b8691afd6ae29eef993eb48bf8aba68`, https://github.com/HL7/fhir/commit/cefb308f4b8691afd6ae29eef993eb48bf8aba68 | Adds the first related section and creates the current index duplication/ServiceRequest omission. |
| Commit | Merge-fix recovery | `ac88de510477190e8dbfaa296479ae06518fb2c7`, https://github.com/HL7/fhir/commit/ac88de510477190e8dbfaa296479ae06518fb2c7 | Re-applies `FHIR-51647`/`FHIR-50365` content after a bad merge. |
| Commit | Not-performed note | `2fe4bdb1c4ba0be71c62f96c21b41f7e22c2255c`, https://github.com/HL7/fhir/commit/2fe4bdb1c4ba0be71c62f96c21b41f7e22c2255c | Adds `FHIR-51640` note. |
| Commit | Imaging guidance | `335e930873f9034b9018b43ac5a222c1d44830c0`, https://github.com/HL7/fhir/commit/335e930873f9034b9018b43ac5a222c1d44830c0 | Adds DICOM SR imaging content for `FHIR-50672`. |
| PR | MolecularSequence note | https://github.com/HL7/fhir/pull/3570 | Implements `FHIR-50386`; merged 2025-07-30. |
| PR | DX module fixes | https://github.com/HL7/fhir/pull/3594 | Covers `FHIR-50523`, `FHIR-50674`, `FHIR-51647`; merged 2025-08-17. |
| PR | Bad-merge repair | https://github.com/HL7/fhir/pull/3641 | Covers `FHIR-51647`, `FHIR-50365`, `FHIR-52539`; merged 2025-09-08. |
| PR | Critical relationships wording | https://github.com/HL7/fhir/pull/3685 | Implements `FHIR-50635`; merged 2025-09-23. |
| PR | Imaging use case | https://github.com/HL7/fhir/pull/3871 | Implements `FHIR-50672`; merged 2025-10-29. |
| Jira | Parent/child rationale | https://jira.hl7.org/browse/FHIR-39168, `bun run jira:search snapshot FHIR-39168` | Original request for parent/child result relationship guidance. |
| Jira | Parent/child application | https://jira.hl7.org/browse/FHIR-40540, `bun run jira:search snapshot FHIR-40540` | Says the draft narrative and diagrams needed applying to the Diagnostic Module. |
| Jira | Roadmap update | https://jira.hl7.org/browse/FHIR-40581, `bun run jira:search snapshot FHIR-40581` | Formal roadmap wording/FMM context. |
| Jira | MolecularSequence note/table | https://jira.hl7.org/browse/FHIR-50365, `bun run jira:search snapshot FHIR-50365` | Clarifies MolecularSequence replacement by MolecularDefinition. |
| Jira | MolecularSequence transition | https://jira.hl7.org/browse/FHIR-51227, `bun run jira:search snapshot FHIR-51227` | CG rationale for replacing MolSeq with MolDef. |
| Jira | Critical relationships | https://jira.hl7.org/browse/FHIR-50635, `bun run jira:search snapshot FHIR-50635` | Explains "critical relationships" wording change. |
| Jira | Imaging use cases | https://jira.hl7.org/browse/FHIR-50672, `bun run jira:search snapshot FHIR-50672` | Adds DICOM SR imaging content. |
| Jira | Not-performed tests | https://jira.hl7.org/browse/FHIR-51640, `bun run jira:search snapshot FHIR-51640` | Adds Observation/DiagnosticReport/Diagnostic Module guidance for tests not performed. |
| Zulip | MolDef discussion | https://chat.fhir.org/#narrow/stream/genomics/topic/Update%20Observation%20to%20support%20MolDef | Records rationale, concerns, and the `FHIR-51227` vote path. |
| Zulip | Bad merge diagnosis | https://chat.fhir.org/#narrow/stream/committers%2Fgit-help/topic/Diagnostic-module.html | Explains lost/reapplied `diagnostics-module.html` changes around `c3a6f8c`, `2457b3c`, and `ac88de5`. |
| Confluence | Parent/child draft | Page `156535058`, https://confluence.hl7.org/spaces/OO/pages/156535058/Draft+Parent+Child+Explanation+in+DiagnosticReport+Examples | Draft narrative later applied by `ab140a0d`. |
| Confluence | Diagnostic Module R6 Updates | Page `161056620`, https://confluence.hl7.org/spaces/OO/pages/161056620/Diagnostic+Module+-+R6+Updates | Working page for R6 module edits; later-edited caveat applies. |
| Confluence | Imaging update text | Page `358282877`, https://confluence.hl7.org/spaces/IMIN/pages/358282877/FHIR-XXXXX+Imaging+updates+to+Diagnostics+Module | Source text for DICOM SR imaging section. |
| Confluence | MolecularDefinition proposal | Page `281283028`, https://confluence.hl7.org/spaces/FHIR/pages/281283028/MolecularDefinition | FMG-approved resource proposal context for MolDef. |

## Change summary

### Page identity, ownership, and boilerplate

- **Metadata/template/navigation:** The source was reformatted for newer build templates (`33b409a`, `d7b8dad`) and later changed the visible owner from OO+CG to OO only, then to "Responsible Owner: Work Group OO" (`056d065`, `270e0c`), matching `FHIR-52539`'s direction to revert Diagnostic Module ownership to OO pending FMG approval.
- **Editorial only:** H2 changed from "Diagnostic Medicine Module" to "Diagnostics Module" in `cefb308`; `[%settitle%]` still says "Diagnostic Medicine Module".

### Resource index, table, and roadmap

- **Substantive/semantic guidance:** R5/R6 additions introduced `ImagingSelection`, `DocumentReference`, `GenomicStudy`, and MolecularDefinition/MolecularSequence transition text (`FHIR-17183`, `FHIR-40581`, `FHIR-50365`, `FHIR-50386`, `FHIR-51227`, `FHIR-51647`).
- **Concrete current defect:** the current index lists `ImagingSelection` and `ImagingStudy` twice and omits `ServiceRequest` from the top index, even though Table 1 includes `ServiceRequest` and the page text relies on it. This appears to have arisen in `cefb308`, which removed `ServiceRequest` from the first column and added the imaging resources to the third column without removing the original second-column entries.
- **Intent nuance:** `fad1b9c` later changed MolecularDefinition/GenomicStudy to external CG incubator links and removed those `[%res-item%]` rows from Table 1. This has no explicit Jira in the commit subject, but appears consistent with `7466cfc` changing MolecularDefinition roadmap text to "Additional Resource".

### Parent/child and related DiagnosticReport/Observation guidance

- **Semantic guidance:** `ab140a0` added extensive guidance on organizing DiagnosticReport and Observation resources, including microbiology, reflex/repeat/re-run testing, follow-up orders/results, and add-on orders. Jira `FHIR-39168` requested updated parent/child guidance; `FHIR-40540` specifically directed applying the draft Confluence narrative/diagrams to the Diagnostic Module.
- **Editorial cleanup:** later Jira fixes corrected typos or wording in this section: `FHIR-50513`-`FHIR-50520`, `FHIR-50523`, `FHIR-50635`, `FHIR-44047`.
- **Substantive/semantic clarification:** `FHIR-50635` changed "critical relationships" to "relationships necessary for interpretation" and added the `DiagnosticReport.composition` parenthetical.

### Not-performed tests

- **Semantic guidance:** `2fe4bdb` added a note under the organizing-related-resources section explaining that a not-performed Observation can document why a result was not performed and that DiagnosticReport includes it when needed. Jira `FHIR-51640` and OO LAB minutes show the motion also applied related text to Observation and DiagnosticReport pages.
- **Locator:** current page line 122.

### Imaging/DICOM SR use-case content

- **Semantic guidance/example change:** `335e930` added the "Imaging" subsection on DICOM SR measurements, example use cases, and figures. Jira `FHIR-50672` requested non-lab diagnostic use cases; Confluence page `358282877` supplies the applied text.
- **Editorial:** `887bc23` made the `e.g., Mammography` punctuation correction for `FHIR-44047`.

### Use cases and examples

- **Example/navigation changes:** genomics ordering/reporting examples from R4 were removed in `3cfe12f` as part of removing outdated genomics artifacts. The lipid report link changed from `diagnosticreport-example-lipids.html` to `diagnosticreport-core.html`, then to `diagnosticreport-example-lipid-panel.html` (`FHIR-22531`). Vital-sign examples were expanded, then oxygen saturation was removed when additional files were removed.
- **Semantic/editorial:** `FHIR-50523` moved the specimen/body-site bullet out from under the Observation-specific list and made it a note.

### Duplicate related section

- **Concrete current defect:** the page now has two `Related Resources and Modules` sections with substantially identical text: new page lines 69-73 and 376-383. `cefb308` added the first section but the older section from `ab140a0` remains near the end.

## Source history

| Date | Commit | Label | Page-specific effect |
|---|---|---|---|
| 2020-05-15 | `3cfe12f1b4037e4fe922af288ba96fa49faf1435` | substantive cleanup | Removed R4 genetics ordering/reporting use-case bullets as part of outdated genomics artifact cleanup. |
| 2021-01-14 | `33b409a4b6d544598262f2f074ebb4b6dc466157` | navigation/example | Changed lipid report link to `diagnosticreport-core.html`. |
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | template/mechanical | Removed old wrapper div for new HTML template. |
| 2021-11-13 | `f141f3aacd701e0a7f1ee7694a963d9c93541a30` | substantive/resource | Added `ImagingSelection` to index/table for `FHIR-17183`. |
| 2023-03-09 | `bbb03169940b53718fb872efe999005723a6282c` | resource/index | Added `DocumentReference` and `GenomicStudy` to index. |
| 2023-03-19 | `ab140a0db3a9e05c2f36a63d57180a7a17f52776` | major semantic guidance | Added organizing-related-DiagnosticReport/Observation section for `FHIR-40540`/`FHIR-39168`. |
| 2023-03-19 | `1a3fadb445c304e186648da825bcf00a63844d59` | roadmap | Updated Developmental Roadmap for `FHIR-40581`. |
| 2023-10-19 | `981e6c02dfbaaae3d18fce3714addd7071f2c142` | resource/index | Added MolecularDefinition link, initially pointing to MolecularSequence. |
| 2023-10-19 | `147c15cec745b9c320a7eb42da76e22efd294106` | link correction | Corrected MolecularDefinition link to `moleculardefinition.html`. |
| 2025-05-15 | `b689b485eac940b36ed2459c4a33e3b2102c5871` | editorial | `FHIR-50518`: "reflect" -> "reflex". |
| 2025-05-15 | `4debfe466d5b2f6c4a4c3af8afa76b1bd5f24876` | editorial | `FHIR-50513`: "follow-up orders" typo. |
| 2025-05-15 | `5338e0a6cf040dfd5489c9c985340798c50d6ca4` | editorial/roadmap | `FHIR-50519`, `FHIR-50520`, `FHIR-50524`: fixed grammar and Specimen FMM wording. |
| 2025-05-16 | `4d30cfcf44eb588ef6d586d69145491e1d87d975` | merge | Merge into typo branch; no page-specific patch shown in first-parent review. |
| 2025-05-16 | `e506dbe029d3bacc79016d422bcfe26df0b3cfc0` | merge | Merge into `FHIR-50518` branch. |
| 2025-05-16 | `059d8727ad7c6afb8736d68dd7cdd6364bfe6c79` | merge | Merge into `FHIR-50518` branch. |
| 2025-05-17 | `0e1aad86771000fb69c38d97cce766f7f39b86fc` | resource cleanup | `FHIR-50402`: removed `Media` `[%res-item%]`. |
| 2025-05-17 | `330d9d421eef15d5a740da87588f201c97da2cab` | merge | Merge for `FHIR-50402`; linked from Jira/PR #3495. |
| 2025-07-21 | `90c601099c6d26e3dd26e5cc55c9bffb11ac9613` | resource transition | Replaced MolSeq with MolDef in index/table/roadmap. |
| 2025-07-24 | `cefb308f4b8691afd6ae29eef993eb48bf8aba68` | broad R6 module adjustment | `FHIR-50920`: title/resource/diagram/add-on/roadmap changes; introduced current index duplication and first related section. |
| 2025-07-24 | `c7d1fdbfa9a59d9eed76e28e7be2661a7e6f2a4b` | editorial/roadmap | `FHIR-50514`: moved figure caption inside div, fixed duplicated "as well", compacted roadmap text. |
| 2025-07-24 | `ddbe6acb8ec1abdcaca7b38b002bfabf562d54ec` | editorial | `FHIR-50515`: fixed "then be updated". |
| 2025-07-24 | `fd6384f63991a997d946045d3e3aac39e1c52737` | editorial | `FHIR-50517`: fixed "Specimen Isolate references". |
| 2025-07-25 | `aaf829854bb32ab66b6006dc20eee07a6a1d6fd8` | semantic/editorial | `FHIR-50523`: moved specimen/body-site example into a note. |
| 2025-07-28 | `91a944c4de5e4a18dad930a9da44685354a8edec` | merge | Merge into `FHIR-51227` branch; left a blank line in index. |
| 2025-07-29 | `def032388ffa8ab609ebc080a6147ce68511a419` | resource transition | `FHIR-50386`: added implementer note that MolecularSequence would be replaced. |
| 2025-08-01 | `0438dca929188b6a47d8d8c5cf03bcd4031758bc` | merge | PR #3576 merge reintroduced the MolecularSequence future-replacement note. |
| 2025-08-05 | `9e156724986b3343e7703647e64484fa71e5c5d6` | cleanup | Removed earlier note. |
| 2025-08-05 | `3ed2ae5cb7c39c33cd00f865ef9b716a9d12b3b9` | resource transition | Replaced roadmap MolSeq text with MolDef text. |
| 2025-08-11 | `d0e5af16c145c8c5a8b821bdd243d6fb8a652ec1` | editorial | `FHIR-50523`: note text changed to "associating related". |
| 2025-08-11 | `b42a814c63ba36f7b2f7e012b608c05cea5aad5d` | semantic/editorial | `FHIR-50674`: changed diagram intro to conceptual/common-relationships wording. |
| 2025-08-12 | `c3a6f8c1c7b9223429ce2e1639bf0e18fd0df162` | resource/table | `FHIR-51647`: added table caption, MolecularDefinition row, note, fixed `servicerequest-specimenSuggestion`, roadmap MolDef text. |
| 2025-08-19 | `2457b3cdf0d616a816e51e02544808b09403f56d` | merge/problem | Merge into `FHIR-51227` branch lost some table/note changes; later diagnosed in Zulip. |
| 2025-08-28 | `ac88de510477190e8dbfaa296479ae06518fb2c7` | repair | `FHIR-51647`, `FHIR-50365`: restored lost table wrapper/caption/note and corrected `GenomicStudy`. |
| 2025-09-06 | `3128420e7110d810fc544997b2ebead60052917d` | example link | `FHIR-22531`: changed lipid report link to lipid panel example. |
| 2025-09-07 | `056d065ee28cff5f611070e8096aafae1179838e` | ownership/resource note | Reimplemented `FHIR-51647`, corrected `FHIR-50365`, implemented `FHIR-52539`; removed CG owner and removed extra MolSeq roadmap line. |
| 2025-09-08 | `5a42b0c5a30a7e526732be1e0accd9bac6a6b5da` | merge/PR | PR #3641 merge for DX module fixes. |
| 2025-09-22 | `5115cbe2fed2d045243553cffcfc6c9f8f8398b3` | semantic wording | `FHIR-50635`: changed "critical relationships" wording. |
| 2025-09-22 | `ce6b76d3f1d583cf0003f0cadaba8b6f88b392b8` | editorial | Removed extra spaces introduced in wording. |
| 2025-09-22 | `4dca0087d1d5c70eba0cb5bce123ca229231cd32` | editorial | Added missing "the". |
| 2025-10-06 | `fac08c79ad14362bfb2f5096339d87a56f6677f8` | semantic/editorial | `FHIR-50516`: rewrote new-authorization paragraph as a short list. |
| 2025-10-06 | `7fd158cb05d9d60808f7812529529ebf8ebafd58` | editorial | Fixed `SerivceRequest` typo. |
| 2025-10-22 | `f8386e1177d39f04e34f41704735a9d0421883db` | cleanup | Removed oxygen saturation example link. |
| 2025-10-23 | `2fe4bdb1c4ba0be71c62f96c21b41f7e22c2255c` | semantic guidance | `FHIR-51640`: added note on observations not performed. |
| 2025-10-29 | `335e930873f9034b9018b43ac5a222c1d44830c0` | semantic guidance/example | `FHIR-50672`: added DICOM SR imaging content. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | template/metadata | Changed owner label to "Responsible Owner". |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | editorial | `FHIR-44047`: corrected `e.g., Mammography`. |
| 2025-11-12 | `fad1b9cf84ef652e88947e1a13b026c62f95334e` | resource transition | Removed additional-resource rows and linked MolecularDefinition/GenomicStudy to CG incubator. |
| 2025-11-12 | `7466cfc63cd0b162497a42c80a67480eed86c75a` | roadmap/status | Changed Observation roadmap text and MolecularDefinition to "Additional Resource". |

## Jira evidence

### Explicit Jira keys from commits/patches

| Key | Snapshot command | Evidence/use |
|---|---|---|
| `FHIR-17183` | `bun run jira:search snapshot FHIR-17183` | ImagingSelection resource proposal context; applied for R5. |
| `FHIR-39168` | `bun run jira:search snapshot FHIR-39168` | Parent/child guidance request; comments approve draft language and move to Diagnostic Module. |
| `FHIR-40540` | `bun run jira:search snapshot FHIR-40540` | Technical correction saying `FHIR-39168` updates had not yet been applied; points to Confluence draft and diagrams. |
| `FHIR-40581` | `bun run jira:search snapshot FHIR-40581` | Developmental Roadmap wording; later applied for R6. |
| `FHIR-50365` | `bun run jira:search snapshot FHIR-50365` | MolecularSequence replacement note/table/figure resolution; applied for R6. |
| `FHIR-50386` | `bun run jira:search snapshot FHIR-50386` | Earlier MolecularSequence references update; links PR #3570. |
| `FHIR-50402` | `bun run jira:search snapshot FHIR-50402` | Remove Media from diagnostic module table/figure. |
| `FHIR-50513`-`FHIR-50520`, `FHIR-50523`, `FHIR-50524` | `bun run jira:search snapshot FHIR-50513` etc. | Mostly typo, wording, use-case note, and Specimen FMM edits. Useful history but not independently actionable now. |
| `FHIR-50635` | `bun run jira:search snapshot FHIR-50635` | "critical relationships" -> "relationships necessary for interpretation" wording; links PR #3685. |
| `FHIR-50672` | `bun run jira:search snapshot FHIR-50672` | Request for missing imaging/genomics use cases; resolved with imaging content from Confluence and PR #3871. |
| `FHIR-50674` | `bun run jira:search snapshot FHIR-50674` | Diagram references complaint; resolution changes diagram-intro wording rather than the complete diagram. |
| `FHIR-50920` | `bun run jira:search snapshot FHIR-50920` | Broad R6 Diagnostic Module update; points to Confluence page `Diagnostic Module - R6 Updates`. |
| `FHIR-51227` | `bun run jira:search snapshot FHIR-51227` | CG decision/rationale to replace MolecularSequence with MolecularDefinition. |
| `FHIR-51640` | `bun run jira:search snapshot FHIR-51640` | Guidance for tests/observations not performed. |
| `FHIR-51647` | `bun run jira:search snapshot FHIR-51647` | Additional Diagnostic Module content, MolecularDefinition/table/note/add-on-order wording; links PR #3594/#3641. |
| `FHIR-52539` | `bun run jira:search snapshot FHIR-52539` | Revert ownership to OO pending FMG approval; links PR #3641. |
| `FHIR-22531`, `FHIR-44047` | `bun run jira:search snapshot FHIR-22531`; `bun run jira:search snapshot FHIR-44047` | Context for lipid example link and punctuation cleanup only. |

### Other Jira searches

- `bun run jira:search fts "\"ImagingSelection\" \"ImagingStudy\" \"ServiceRequest\" \"diagnostics-module\"" --limit 10` returned only `FHIR-40581` and did not reveal a tracker for the current duplicate index/missing-ServiceRequest issue.
- `bun run jira:search fts "\"Related Resources and Modules\" \"diagnostics-module\" duplicate" --limit 10` found no results for the duplicate related section.
- `bun run jira:search fts "\"Diagnostics module covers the following resources\" \"ServiceRequest\"" --limit 10` found no results.
- `bun run jira:search fts "\"MolecularDefinition\" \"diagnostics-module\" \"Additional Resource\"" --limit 10` found no results.

### Context-only Jira hits that should not drive action

- `FHIR-44047` is a broad punctuation/style issue and only explains the `e.g.,` edit.
- The `FHIR-50513`-`FHIR-50520` typo issues explain narrow cleanup, not the major page structure.
- `FHIR-22531` is about DiagnosticReport lipid profile/example naming; it explains the changed lipid-panel link but not diagnostics module structure.

## Zulip evidence

- `#genomics > Update Observation to support MolDef` (2025-06-05 to 2025-07-30): active discussion of replacing MolecularSequence references with MolecularDefinition, including concerns about patient-specific sequences and whether MolDef covered MolSeq use cases. Key messages:
  - 2025-06-20: Bret Heale asked whether there was evidence MolDef met all MolSeq use cases; Bob Freimuth/Kevin Power discussed documenting Observation -> MolDef.
  - 2025-06-24: Aly Khalifa filed `FHIR-51227`; Kevin Power suggested proposed disposition should address PSS, patient-specific sequences, and testing.
  - 2025-07-09: Aly Khalifa reports CG vote approval for `FHIR-51227`.
- `#genomics > JIRAs vote: replacing MolSeq with MolDef in R6 July 8th` (2025-07-02): announces the `FHIR-51227` vote and related tickets.
- `#committers > Replacing a FHIR resource.` (2025-07-30 to 2025-08-11): build/process support for removing a resource; Bryn Rhodes notes the MolecularDefinition resource proposal was submitted and approved by FMG.
- `#committers/git-help > Diagnostic-module.html` (2025-08-30 to 2025-09-03): high-signal discussion diagnosing why `diagnostics-module.html` changes disappeared through a merge and had to be re-applied. The thread identifies `c3a6f8c` as initial implementation, `2457b3c` as problematic merge, and `ac88de5` as recovery.
- `#implementers > Image Annotations` (2018-2022): background only for ImagingReference/ImagingSelection use cases; not directly evidence for this page's R6 text.
- Exact phrase searches for `"relationships necessary for interpretation"`, `"MolecularSequence resource has been replaced"`, `"DICOM SR mapping to FHIR"`, `"test not performed" "Diagnostic Module"`, and `"conceptual diagram" "diagnostic domain"` found no additional relevant Zulip rationale. `"servicerequest-specimenSuggestion"` found the git-help thread plus an unrelated extension-pack hit.

## Confluence evidence

- Page `156535058` (`Draft Parent Child Explanation in DiagnosticReport Examples`) contains the draft narrative for Observation Grouping / DiagnosticReport Examples, including the same microbiology/reflex/follow-up/add-on content that was later applied in `ab140a0`. It also preserves some typos later fixed by `FHIR-50513`-`FHIR-50520`.
- Page `161056620` (`Diagnostic Module - R6 Updates`) contains a working/current text view for Diagnostic Module updates. Its current 2026 snapshot includes `ServiceRequest` in the index and only one `ImagingSelection`/`ImagingStudy` listing, so it supports the current-page index finding, but because it was edited after the R6 ballot4 commit it should be treated as later working context rather than strict ballot4 intent.
- Page `358282877` (`FHIR-XXXXX Imaging updates to Diagnostics Module`) contains the DICOM SR imaging text that `FHIR-50672` applied. The Confluence text says this belongs under `10.0.4.2 Imaging`, matching current source placement under the organizing-related-resources section.
- Page `281283028` (`MolecularDefinition`) records the FMG-approved resource proposal context: Clinical Genomics ownership, Jan 30 2025 approval, expected replacement of legacy MolecularSequence, and relationships to Observation and GenomicStudy.
- OO LAB minutes page `391648151` (2025-10-17) records the motion for `FHIR-51640`, including the exact Diagnostic Module page note about observations not performed and DiagnosticReport inclusion when documentation is necessary.
- OO on FHIR minutes page `345088258` (2025-05-27) records the `FHIR-40581` roadmap wording.
- OO on FHIR / WGM refs show `FHIR-50365`, `FHIR-50635`, `FHIR-50672`, and `FHIR-50920` were discussed in relevant workgroup contexts; no Confluence refs were found for `FHIR-52539`.

## Timeline

| Date | Event type | Evidence | Notes |
|---|---|---|---|
| 2018-2021 | Jira/resource proposal | `FHIR-17183`; Zulip Image Annotations thread | ImagingReference evolved into ImagingSelection context. |
| 2020-05-15 | Source commit | `3cfe12f` | Removed outdated clinical genomics use-case bullets. |
| 2022-12-20 to 2023-01-17 | Jira/vote | `FHIR-39168` | Parent/child guidance accepted with modification. |
| 2023-02-13 | Confluence/minutes | `FHIR-39168` comment, page `156535058` | OO approved draft language and moving content to Diagnostic Module. |
| 2023-03-19 | Source commit | `ab140a0` | Parent/child guidance applied to page. |
| 2023-03-19 | Source commit | `1a3fadb` | Roadmap update applied. |
| 2025-05-15 | Jira votes | `FHIR-50402`, `FHIR-50513`-`FHIR-50524`, `FHIR-50674`, `FHIR-50920` | R6 ballot3 diagnostic-module cleanup batch. |
| 2025-07-08/09 | CG vote/Jira | `FHIR-51227`; Zulip genomics thread | CG approved MolSeq -> MolDef replacement rationale. |
| 2025-07-24 | Source commit | `cefb308` | Broad R6 module update; introduced current index/duplicate-related defects. |
| 2025-08-12 to 2025-09-08 | Source/PR/Zulip | `c3a6f8c`, `2457b3c`, `ac88de5`, PR #3641, git-help Zulip | Initial DX module fixes were lost in a merge and re-applied. |
| 2025-09-17 to 2025-09-23 | Jira/PR/source | `FHIR-50635`, PR #3685, `5115cbe`/follow-up edits | "critical relationships" wording clarified. |
| 2025-10-17 to 2025-10-23 | Minutes/Jira/source | `FHIR-51640`, OO LAB minutes `391648151`, `2fe4bdb` | Not-performed observation guidance added. |
| 2025-10-24 to 2025-10-29 | Jira/Confluence/PR/source | `FHIR-50672`, page `358282877`, PR #3871, `335e930` | DICOM SR imaging section added. |
| 2025-11-12 | Source commit | `fad1b9c`, `7466cfc` | Additional-resource links/status adjusted before R6 ballot4 boundary. |

## Evidence log

- Boundary/diff/history:
  - `test -f .../4.0.1-0da2a0a84dc1/source/diagnostics-module.html`
  - `test -f .../6.0.0-ballot4-5d67a34a13a5/source/diagnostics-module.html`
  - `git -C .../6.0.0-ballot4-5d67a34a13a5 diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/diagnostics-module.html`
  - `git -C .../6.0.0-ballot4-5d67a34a13a5 log --reverse --date=short --format='%H%x09%ad%x09%s' ... -- source/diagnostics-module.html`
  - `git -C .../6.0.0-ballot4-5d67a34a13a5 show --stat --patch <commit> -- source/diagnostics-module.html`
  - `git -C .../6.0.0-ballot4-5d67a34a13a5 blame -L 40,64 -- source/diagnostics-module.html`
- Full page read:
  - Read current page in chunks covering lines 1-400.
- Jira:
  - SQL summary over all explicit keys using `bun run jira:search sql`.
  - Snapshots saved for all explicit keys; reopen any with `bun run jira:search snapshot FHIR-XXXXX`.
  - Failed/no-action searches: duplicate related-section query and exact index/service request phrase queries found no tracker for the current index/duplicate-section defects.
- Zulip:
  - SQL grouping over explicit keys using `bun run zulip:search sql`.
  - FTS searches for exact changed phrases listed in the Zulip section.
  - Snapshot commands include `bun run zulip:search snapshot genomics "Update Observation to support MolDef"` and `bun run zulip:search snapshot "committers/git-help" "Diagnostic-module.html"`.
- Confluence:
  - `bun run confluence:search refs jira FHIR-XXXXX` for major keys.
  - Snapshot commands include `bun run confluence:search snapshot 156535058`, `161056620`, `358282877`, `281283028`, `391648151`.
- GitHub PRs:
  - `gh pr view <number> --repo HL7/fhir --json number,title,state,mergedAt,url,author` for PRs #3487, #3495, #3554, #3570, #3594, #3641, #3649, #3685, #3871.

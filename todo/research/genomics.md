# genomics research appendix

## Scope and coverage

- Page path: `source/genomics.html`
- Compared versions: R4 4.0.1 at `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to R6 ballot4 6.0.0-ballot4 at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Page boundary: present in both trees. The R4 source file has 1375 lines; the R6 ballot4 source file has 134 lines.
- The R6 ballot4 page was read end-to-end: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/genomics.html:1-134`.
- Source history coverage: 17 commits touched `source/genomics.html` between the two source commits. The direct diff and the page-specific patches for those commits were reviewed.
- Explicit Jira keys found in source history: `FHIR-36085`, `FHIR-44047`.
- Other Jira issues found by targeted searches that plausibly explain page text: `FHIR-37890`, `FHIR-51227`.
- Jira/Zulip/Confluence searches performed for explicit keys and distinctive phrases including `MolecularDefinition`, `MolecularSequence`, `GenomicStudy`, `Molecular Definition Implementation Guide`, `Genomics in FHIR`, and `Messaging using FHIR Resources`.
- Caveats:
  - `FHIR-51227` is strong evidence for the MolecularSequence-to-MolecularDefinition transition, but the first page commit that changed `genomics.html` from MolecularSequence to MolecularDefinition (`f23e7828...`, 2025-03-04) predates the Jira issue creation date (2025-06-24). Treat `FHIR-51227` as later formal decision/rationale for the same direction, not as proof of causality for that March page edit.
  - Initial Zulip searches for bare Jira keys such as `FHIR-36085` failed because FTS parsed the hyphenated key incorrectly; the searches were rerun with quoted keys.
  - The newer source tree still contains `source/genomicstudy/` and `source/moleculardefinition/` source artifacts, but the final page links readers to incubator IG URLs after the "remove additional resources" change. This appears aligned with the R6 ballot-intro note that immature resources moved out to incubator IGs.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 source page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/genomics.html` | Old page boundary; 1375-line implementation guidance page. |
| Source | R6 ballot4 source page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/genomics.html:1-134` | New page boundary; full current page. |
| Source | Current stale settitle | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/genomics.html:3` | The source title still says `Messaging using FHIR Resources`, an actionable editorial/rendering defect. |
| Source | Current displayed title/status | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/genomics.html:38-48` | Shows current visible page heading and `Normative` status. |
| Source | Current product links | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/genomics.html:89-130` | Lists Genomics Reporting, MolecularDefinition, Molecular Definition data-types IG, GenomicStudy, and use-case page links. |
| Source | R6 ballot-intro additional resources | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ballot-intro.html:69-89` | Confirms R6 moved immature resources, including GenomicStudy and MolecularDefinition, to incubator IG links. |
| Commit | Removed outdated clinical genomics artifacts | `3cfe12f1b4037e4fe922af288ba96fa49faf1435`, https://github.com/HL7/fhir/commit/3cfe12f1b4037e4fe922af288ba96fa49faf1435, PR https://github.com/HL7/fhir/pull/877 | First large reduction of the R4 page; removes Observation/DiagnosticReport/ServiceRequest/HLA profile details and many examples. |
| Commit | FHIR-36085 page edits | `5dec83202954f964988bb087e0e450c16f964fad`, https://github.com/HL7/fhir/commit/5dec83202954f964988bb087e0e450c16f964fad, PR https://github.com/HL7/fhir/pull/1823 | Explicit Jira commit for removing/commenting FDA references and broader R5 MolecularSequence work. |
| Commit | Further MolecularSequence simplification | `d4613dfa1cd8a5af9a38b68054263deb0c33efc8`, https://github.com/HL7/fhir/commit/d4613dfa1cd8a5af9a38b68054263deb0c33efc8, PR https://github.com/HL7/fhir/pull/1823 | Renames `variant` guidance to `edit` and removes more page guidance/examples. |
| Commit | Move bulk guidance to MolecularSequence | `9c3d26274fffc7b04504c1c66e9a2947ad0d7816`, https://github.com/HL7/fhir/commit/9c3d26274fffc7b04504c1c66e9a2947ad0d7816, PR https://github.com/HL7/fhir/pull/1823 | Major replacement of the page with a short overview. |
| Commit | GenomicStudy summary | `efd58af521c89f4d1742d2816d72c209732d3767`, https://github.com/HL7/fhir/commit/efd58af521c89f4d1742d2816d72c209732d3767, PR https://github.com/HL7/fhir/pull/2297 | Adds GenomicStudy to the genomics page, implementing `FHIR-37890`. |
| Commit | MolecularDefinition replaces MolecularSequence in page text | `f23e7828f0258993c2dfc64c8f71dd3a6faab524`, https://github.com/HL7/fhir/commit/f23e7828f0258993c2dfc64c8f71dd3a6faab524, PR https://github.com/HL7/fhir/pull/3342 | Page changes from MolecularSequence to MolecularDefinition; related to later `FHIR-51227` direction. |
| Commit | Molecular Definition data-types IG link | `58f4ec846bd2ebbca3a3436023cd136d53085b62`, https://github.com/HL7/fhir/commit/58f4ec846bd2ebbca3a3436023cd136d53085b62, PR https://github.com/HL7/fhir/pull/3672 | Adds an emerging Molecular Definition IG link. |
| Commit | R6 normative metadata | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd, PR https://github.com/HL7/fhir/pull/3901 | Removes FMM row and changes table class as part of R6 status changes. |
| Commit | FHIR-44047 punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627, PR https://github.com/HL7/fhir/pull/3951 | Applies e.g. punctuation correction. |
| Commit | Remove additional resources links | `fad1b9cf84ef652e88947e1a13b026c62f95334e`, https://github.com/HL7/fhir/commit/fad1b9cf84ef652e88947e1a13b026c62f95334e, PR https://github.com/HL7/fhir/pull/3974 | Changes local MolecularDefinition/GenomicStudy links to `cg-incubator` URLs. |
| Commit | Final status switch to Normative | `7466cfc63cd0b162497a42c80a67480eed86c75a`, https://github.com/HL7/fhir/commit/7466cfc63cd0b162497a42c80a67480eed86c75a, PR https://github.com/HL7/fhir/pull/3974 | Changes visible standards status from Trial Use to Normative. |
| Jira | FHIR-36085 | https://jira.hl7.org/browse/FHIR-36085; reopen with `bun run jira:search snapshot FHIR-36085` | Formal R5 decision to remove Genomics Guidance apps/use cases/details now in Genomics Reporting IG and move MolSeq-specific guidance to the MolSeq page. |
| Jira | FHIR-37890 | https://jira.hl7.org/browse/FHIR-37890; reopen with `bun run jira:search snapshot FHIR-37890` | Formal R5 decision to add a high-level GenomicStudy description to the genomics implementation guidance page. |
| Jira | FHIR-51227 | https://jira.hl7.org/browse/FHIR-51227; reopen with `bun run jira:search snapshot FHIR-51227` | Formal R6 decision that MolecularDefinition supersedes legacy MolecularSequence. |
| Jira | FHIR-44047 | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Broad punctuation technical correction; page-specific commit only changes `e.g.` punctuation. |
| Zulip | Update Observation to support MolDef | https://chat.fhir.org/#narrow/stream/genomics/topic/Update%20Observation%20to%20support%20MolDef; reopen with `bun run zulip:search snapshot genomics "Update Observation to support MolDef"` | Discussion and vote context for replacing MolSeq with MolDef and documenting patient-specific sequence handling. |
| Zulip | Referencing MolDef from Observation | https://chat.fhir.org/#narrow/stream/genomics/topic/Referencing%20MolDef%20from%20Observation; reopen with `bun run zulip:search snapshot genomics "Referencing MolDef from Observation"` | Later reassessment of how MolDef should be referenced from Observation; includes a question about whether `genomics.html` should remain in core. |
| Zulip | Replacing a FHIR resource | https://chat.fhir.org/#narrow/stream/committers/topic/Replacing%20a%20FHIR%20resource.; reopen with `bun run zulip:search snapshot committers "Replacing a FHIR resource."` | Committer/tooling discussion while removing/replacing MolecularSequence. |
| Confluence | CG-2022-04-12 | https://confluence.hl7.org/spaces/CGW/pages/94661506/CG-2022-04-12; reopen with `bun run confluence:search snapshot 94661506` | Block vote evidence for `FHIR-36085` and related MolecularSequence/genomics guidance changes. |
| Confluence | CG-2022-08-30 | https://confluence.hl7.org/spaces/CGW/pages/108313461/CG-2022-08-30; reopen with `bun run confluence:search snapshot 108313461` | Meeting evidence around `FHIR-37890` GenomicStudy page summary. |
| Confluence | CG-2025-07-08 | https://confluence.hl7.org/spaces/CGW/pages/358260196/CG-2025-07-08; reopen with `bun run confluence:search snapshot 358260196` | CG vote page for `FHIR-51227` replacing MolSeq with MolDef. |
| Confluence | 2025-01 CGW WGM Minutes | https://confluence.hl7.org/spaces/CGW/pages/308974089/2025-01+CGW+WGM+Minutes; reopen with `bun run confluence:search snapshot 308974089` | Pre-Jira minutes noting MolecularSequence being superseded by MolecularDefinition and needing Jira updates. |
| Confluence | FHIRI WGM 202405 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas; reopen with `bun run confluence:search snapshot 234784975` | Process evidence for `FHIR-44047` punctuation issue. |

## Change summary

### Long implementation guidance was replaced by a short overview

- Classification: semantic guidance and example removal; mostly substantive for reader guidance, not a new normative rule on this page.
- R4 had detailed sections for MolecularSequence, Observation-genetics, DiagnosticReport-genetics, ServiceRequest-genetics, HLA genotyping, REST-like query examples, use cases, apps, and a DSTU2-to-STU3 mapping table.
- The final R6 ballot4 page is a 134-line overview that introduces the Clinical Genomics WG work products and links to Genomics Reporting, MolecularDefinition, Molecular Definition data-types, GenomicStudy, and a Confluence use-case page.
- Key source/rationale evidence:
  - `3cfe12f1b4037e4fe922af288ba96fa49faf1435` removed outdated clinical genomics artifacts and streamlined the page.
  - `FHIR-36085` resolution explicitly says: "Genomics Guidance: Remove apps, use cases, and other details that are now in the Genomics Reporting IG. Move guidance that is specific to MolSeq to the MolSeq page."
  - `9c3d26274fffc7b04504c1c66e9a2947ad0d7816` commit body says much of the page was specific to MolSeq and moved that content.

### MolecularSequence-specific page text was first reduced, then superseded by MolecularDefinition-oriented links

- Classification: semantic guidance and changed references.
- R4/R5-era content centered on MolecularSequence and detailed examples. R6 ballot4 no longer links to `molecularsequence.html`; it lists MolecularDefinition instead and links to `https://build.fhir.org/ig/HL7/cg-incubator/StructureDefinition-MolecularDefinition.html`.
- `FHIR-51227` formally records that MolecularDefinition was designed to supersede legacy MolecularSequence, while decoupling molecular definitions from patient encounter context and using Observation for encounter/patient-specific context.
- Important caveat: the page's first MolecularDefinition replacement commit (`f23e7828...`) predates `FHIR-51227`, so the causal path appears to be broader CG work and resource-proposal history, later ratified by `FHIR-51227`.

### GenomicStudy was added, then linked as an incubator/additional resource

- Classification: semantic guidance and changed references.
- `FHIR-37890` asked to mention GenomicStudy on the genomics implementation guidance page and supplied nearly the same high-level description now present in the page.
- `efd58af521c89f4d1742d2816d72c209732d3767` implemented the summary.
- `fad1b9cf84ef652e88947e1a13b026c62f95334e` later changed the local `genomicstudy.html` link to the `cg-incubator` URL, consistent with the R6 ballot-intro statement that immature resources moved out of core.

### Metadata/status and template churn

- Classification: metadata/template/navigation.
- The page table changed from the R4 `colstu` table with FMM 1 and Trial Use to an R6 `colsi` table with visible `Normative` status.
- `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` removed the FMM cell and changed the table class; `7466cfc63cd0b162497a42c80a67480eed86c75a` changed `Trial Use` to `Normative`.
- I did not find page-specific Jira for the status change; it appears part of broad R6 status cleanup.

### Editorial corrections

- Classification: editorial only.
- `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` applies `FHIR-44047` to this page by changing `e.g. BAM`/`e.g. VCF` to `e.g., BAM`/`e.g., VCF`.
- The current source still has a stale `[%settitle Messaging using FHIR Resources%]` at line 3; this is not explained by the reviewed commits and is captured as the only actionable finding.

## Source history

| Commit | Date | Subject | PR | Page-specific effect | Classification |
|---|---:|---|---|---|---|
| `3cfe12f1b4037e4fe922af288ba96fa49faf1435` | 2020-05-15 | Removed outdated clinical genomics artifacts | https://github.com/HL7/fhir/pull/877 | Removes most profile/example/use-case sections and updates overview text to point to Genomics Reporting IG and MolecularSequence. | Substantive/semantic guidance |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | not checked beyond commit metadata | Template churn around page HTML/status table. | Mechanical/template |
| `5dec83202954f964988bb087e0e450c16f964fad` | 2022-02-23 | FHIR-36085: commented out fda references in genomics.html | https://github.com/HL7/fhir/pull/1823 | Page formatting and FDA-related comment-out as part of R5 MolecularSequence cleanup. | Substantive/editorial |
| `d4613dfa1cd8a5af9a38b68054263deb0c33efc8` | 2022-03-23 | Further simplification of MolecularSequence | https://github.com/HL7/fhir/pull/1823 | Changes `MolecularSequence.variant` to `MolecularSequence.edit`; removes more use-case/app/pointer material. | Substantive/semantic guidance |
| `a1e7b53f1a72080101e54f7932e06bbc7badfbcc` | 2022-03-23 | Update genomics.html | not separately checked | Heading level/formatting adjustments and quality/FDA removal context. | Editorial/template |
| `9c3d26274fffc7b04504c1c66e9a2947ad0d7816` | 2022-03-24 | Move bulk of genomics guidance to MolecularSequence | https://github.com/HL7/fhir/pull/1823 | Replaces the remaining detailed page with a short overview plus MolecularSequence mention. | Substantive/semantic guidance |
| `da5634eea5002526e84bd4896d84567d25e5cd63` | 2022-03-28 | Update genomics.html | https://github.com/HL7/fhir/pull/1823 | Rewrites introduction and describes CG work products, including Genomics Reporting and MolecularSequence; adds placeholder use-case link. | Semantic guidance/editorial |
| `033e2c9e617375abaef8b8b6b13ef2520fbdac33` | 2022-04-14 | Include link to 'use case' page from genomics.html | https://github.com/HL7/fhir/pull/1823 | Replaces `[here]` placeholder with Confluence `Clinical Genomics on FHIR` link. | Link/editorial |
| `efd58af521c89f4d1742d2816d72c209732d3767` | 2022-08-31 | Adding an entry for GenomicStudy resource and a brief description | https://github.com/HL7/fhir/pull/2297 | Adds GenomicStudy description; matches `FHIR-37890`. | Semantic guidance |
| `f23e7828f0258993c2dfc64c8f71dd3a6faab524` | 2025-03-04 | updated genomics.html to point to MolecularDefinition, which replaces MolecularSequence | https://github.com/HL7/fhir/pull/3342 | Replaces MolecularSequence work-product entry with MolecularDefinition entry. | Substantive/semantic guidance |
| `26ecd8eed9d9729cb86c7d09ddd424fda5a9c36e` | 2025-03-04 | undo unintended reformat | not checked beyond PR mapping | Restores formatting around the previous MolecularDefinition change. | Mechanical |
| `f1918d21e45262d52128c7926999109c9a654b2d` | 2025-03-04 | Update source/genomics.html | not checked beyond commit metadata | Whitespace-only line change in GenomicStudy paragraph. | Mechanical |
| `58f4ec846bd2ebbca3a3436023cd136d53085b62` | 2025-09-13 | Update genomics.html | https://github.com/HL7/fhir/pull/3672 | Adds Molecular Definition Implementation Guide for Molecular Data Types link and description. | Link/semantic guidance |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | https://github.com/HL7/fhir/pull/3901 | Changes table class from `colstu` to `colsi`, adds `Responsible Owner`, removes FMM cell; status still Trial Use at this point. | Metadata/template |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | https://github.com/HL7/fhir/pull/3951 | Adds commas after `e.g.` in BAM/CRAM and VCF sentence. | Editorial |
| `fad1b9cf84ef652e88947e1a13b026c62f95334e` | 2025-11-12 | remove additional resources | https://github.com/HL7/fhir/pull/3974 | Changes MolecularDefinition and GenomicStudy links from local generated pages to `cg-incubator` links. | Link/metadata alignment |
| `7466cfc63cd0b162497a42c80a67480eed86c75a` | 2025-11-12 | sort out trial-use notes | https://github.com/HL7/fhir/pull/3974 | Changes visible page status from Trial Use to Normative. | Metadata |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-36085` - MolecularSequence: remove redundancies with Genomics Reporting IG.
  - Snapshot command: `bun run jira:search snapshot FHIR-36085`.
  - Status: Published; resolution Persuasive; applied for R5; vote date 2022-04-12.
  - Description/resolution includes MolecularSequence cleanup, renaming `variant` to `edit`, removing elements with no adoption, updating examples, and changing Genomics Guidance by removing apps/use cases/details now in Genomics Reporting IG and moving MolSeq-specific guidance to the MolSeq page.
  - This directly explains the 2022 simplification and guidance relocation.
- `FHIR-44047` - Incorrect punctuation of `e.g.` and `i.e.` throughout.
  - Snapshot command: `bun run jira:search snapshot FHIR-44047`.
  - Status in local snapshot: Resolved - change required; resolution Persuasive; raised in R6.
  - Page-specific implementation is limited to punctuation in the current genomics introduction. It is not page-specific rationale.

### Other Jira issues that plausibly explain changed text

- `FHIR-37890` - Add summary of GenomicStudy on the genomics implementation guidance.
  - Snapshot command: `bun run jira:search snapshot FHIR-37890`.
  - Status: Published; resolution Persuasive; applied for R5; related page `FHIR-core-genomics`.
  - Resolution asks to add the high-level GenomicStudy description that is essentially the current wording.
  - Comment links PR https://github.com/HL7/fhir/pull/2297.
- `FHIR-51227` - Replacing Molecular Sequence Resource with Molecular Definition resource.
  - Snapshot command: `bun run jira:search snapshot FHIR-51227`.
  - Status: Applied; resolution Persuasive with Modification; applied for R6; vote date 2025-07-08.
  - Resolution says MolecularDefinition is designed to supersede legacy MolecularSequence and supports sequence representation plus other molecular entities such as alleles and haplotypes.
  - Strong rationale for current MolecularDefinition-oriented page, but not proof of causality for the March 2025 `genomics.html` edit because the edit predates the Jira issue.

### Context-only Jira hits that should not drive action

- `FHIR-40292` appears in Zulip as the likely R5 issue that added `Observation.valueReference => MolecularSequence`; it informs later MolDef/Observation discussion but does not directly change `source/genomics.html`.
- `FHIR-51142` appears in Zulip as an Observation-specific companion issue for replacing MolSeq references with MolDef; it was not needed to explain this page.
- Broad GenomicStudy search results such as `FHIR-40585`, `FHIR-37756`, `FHIR-37758`, `FHIR-37759`, `FHIR-37932`, and `FHIR-39574` are resource-specific context, not page-change drivers for `genomics.html`.

## Zulip evidence

- `FHIR-36085` search:
  - Command: `bun run zulip:search fts '"FHIR-36085"' --limit 20`.
  - One relevant result: 2022-02-23 `#genomics/committers > MolecularSequence for R5`, Bob Milius says `FHIR-36085` was created for commit descriptions. This supports the PR/Jira linkage but adds little rationale beyond Jira/Confluence.
- `FHIR-37890` search:
  - Command: `bun run zulip:search fts '"FHIR-37890"' --limit 20`.
  - Relevant thread: `#genomics > GenomicStudy Resource`.
  - Messages on 2022-08-31 say the GenomicStudy guidance PR https://github.com/HL7/fhir/pull/2297 was reviewed, approved, and merged.
- `Update Observation to support MolDef` thread:
  - Snapshot command: `bun run zulip:search snapshot genomics "Update Observation to support MolDef"`.
  - URL: https://chat.fhir.org/#narrow/stream/genomics/topic/Update%20Observation%20to%20support%20MolDef.
  - Key points:
    - 2025-06-20 Bret Heale questions whether MolecularDefinition had been proven against MolecularSequence use cases and suggests keeping both until tried head-to-head.
    - 2025-06-20 Aly Khalifa says the replacement was a "face value assumption" because R5 MolSeq structure is considered part of the new MolDef, with patient-specific context handled through Observation.
    - 2025-06-20 Bob Freimuth says the intent is to represent molecular entities supported by MolSeq, asks for documented gaps, and mentions examples/tooling and connectathon work.
    - 2025-06-24 Kevin Power asks that the Jira disposition address the PSS, patient-specific sequences, and testing.
    - 2025-07-09 Aly Khalifa says the CG call vote approved `FHIR-51227`.
  - This is important rationale/concern evidence but does not show a direct `genomics.html` intent-vs-implementation mismatch.
- `Referencing MolDef from Observation` thread:
  - Snapshot command: `bun run zulip:search snapshot genomics "Referencing MolDef from Observation"`.
  - URL: https://chat.fhir.org/#narrow/stream/genomics/topic/Referencing%20MolDef%20from%20Observation.
  - Key points:
    - 2025-09-17 Kevin Power says R6 should probably have Observation guidance about referring to MolDef.
    - 2025-09-18 participants discuss whether the current Observation/MolDef linkage is mature enough and whether it could be breaking.
    - 2025-09-22 Kevin Power proposes current thinking: move MolecularDefinition to the MolDef IG as an additional resource, move GenomicStudy to an R6 Genomics Reporting IG, leave Observation references available for testing, and keep the R6 GRIG Variant profile passive.
    - 2025-09-24 Kevin Power asks whether `https://build.fhir.org/genomics.html` should remain in core as a hint of genomics in FHIR or whether other products are discoverable enough.
  - This suggests later open strategic questions, but the final page is a general pointer page and does not contradict a settled decision found in this thread.
- `Replacing a FHIR resource` thread:
  - Snapshot command: `bun run zulip:search snapshot committers "Replacing a FHIR resource."`.
  - URL: https://chat.fhir.org/#narrow/stream/committers/topic/Replacing%20a%20FHIR%20resource.
  - Committer/tooling thread for implementing `FHIR-51227`; confirms MolecularSequence replacement was being handled as a resource replacement/removal task.
- `Messaging using FHIR Resources` search:
  - Command: `bun run zulip:search fts '"Messaging using FHIR Resources"' --limit 20`.
  - A 2016 `#committers > ci-notifications` message observed this page had an "unlikely title" around the `settitle`, supporting that the stale title is longstanding and visible to tooling/reviewers.

## Confluence evidence

- `CG-2022-04-12` (page ID `94661506`):
  - Snapshot command: `bun run confluence:search snapshot 94661506`.
  - URL: https://confluence.hl7.org/spaces/CGW/pages/94661506/CG-2022-04-12.
  - Contains the `FHIR-36085` block vote. The resolution text matches Jira: remove MolecularSequence redundancies and update Genomics Guidance by removing apps/use cases/details now in the Genomics Reporting IG and moving MolSeq-specific guidance to the MolSeq page.
  - Motion passed 13-0-0.
- `CG-2022-08-30` (page ID `108313461`):
  - Snapshot command: `bun run confluence:search snapshot 108313461`.
  - URL: https://confluence.hl7.org/spaces/CGW/pages/108313461/CG-2022-08-30.
  - Referenced by `confluence:search refs jira FHIR-37890`; supports that `FHIR-37890` was part of CG meeting/vote flow around adding GenomicStudy to the guidance page.
- `CG-2025-07-08` and later CG pages:
  - Snapshot command: `bun run confluence:search snapshot 358260196`.
  - URL: https://confluence.hl7.org/spaces/CGW/pages/358260196/CG-2025-07-08.
  - `confluence:search refs jira FHIR-51227` found recurring CG pages from 2025-06-24 through 2025-09-09 with "Replacing MolSeq with MolDef (vote)" and Molecular Definition IG work-in-progress context.
- `2025-01 CGW WGM Minutes` (page ID `308974089`):
  - Snapshot command: `bun run confluence:search snapshot 308974089`.
  - Search excerpt notes `molecularsequence.html` "being superceded by molDef?" and `moleculardefinition.html` "needs JIRA update." This is pre-`FHIR-51227` process context.
- `2025-02-05 FMG Agenda/Minutes` (page ID `308979130`, searched but not fully used):
  - Search excerpt says a MolecularDefinition Resource Proposal was reviewed and that Sarah confirmed it will replace MolecularSequence.
  - Useful background, but not a direct `genomics.html` source change locator.
- `FHIR Infrastructure Minutes WGM 202405 - Dallas` (page ID `234784975`):
  - Snapshot command: `bun run confluence:search snapshot 234784975`.
  - Supports `FHIR-44047` punctuation workflow; not page-specific beyond the editorial punctuation change.

## Timeline

| Date | Clock | Evidence | Event |
|---:|---|---|---|
| 2020-05-15 | Source commit | `3cfe12f1b4037e4fe922af288ba96fa49faf1435`, PR 877 | Large removal of outdated genomics profile/example/use-case material from the page. |
| 2022-02-23 | Jira created/source commit | `FHIR-36085`; `5dec83202954f964988bb087e0e450c16f964fad` | MolecularSequence redundancy cleanup issue created and used in commit descriptions. |
| 2022-03-23 | Jira resolved/source commit | `FHIR-36085`; `d4613dfa1cd8a5af9a38b68054263deb0c33efc8` | MolecularSequence cleanup resolution; page changes include variant-to-edit language and more removals. |
| 2022-03-24 | Source commit | `9c3d26274fffc7b04504c1c66e9a2947ad0d7816` | Bulk of genomics guidance moved to MolecularSequence; page becomes short overview. |
| 2022-04-12 | WG vote | Confluence `CG-2022-04-12`; `FHIR-36085` | CG block vote passes 13-0-0. |
| 2022-04-14 | Source commit | `033e2c9e617375abaef8b8b6b13ef2520fbdac33` | Adds Confluence use-case page link. |
| 2022-08-11 | Jira created | `FHIR-37890` | Request to mention GenomicStudy on genomics guidance page. |
| 2022-08-30 | WG vote | Confluence `CG-2022-08-30`; `FHIR-37890` | CG meeting/vote context for GenomicStudy summary. |
| 2022-08-31 | Source commit/PR | `efd58af521c89f4d1742d2816d72c209732d3767`, PR 2297 | GenomicStudy description added and PR merged. |
| 2025-01 to 2025-02 | WG/FMG process | Confluence `2025-01 CGW WGM Minutes`; FMG minutes search excerpt | MolecularDefinition replacement/resource proposal discussed before `FHIR-51227`. |
| 2025-03-04 | Source commit | `f23e7828f0258993c2dfc64c8f71dd3a6faab524`, PR 3342 | Page switches from MolecularSequence to MolecularDefinition wording. |
| 2025-06-24 | Jira created/discussion | `FHIR-51227`; Zulip `Update Observation to support MolDef` | Formal Jira for replacing MolSeq with MolDef created after earlier page edit. |
| 2025-07-08 | WG vote | `FHIR-51227`; Confluence `CG-2025-07-08`; Zulip follow-up | CG vote approves replacement strategy. |
| 2025-09-13 | Source commit | `58f4ec846bd2ebbca3a3436023cd136d53085b62`, PR 3672 | Adds Molecular Definition data-types IG link. |
| 2025-09-17 to 2025-10-07 | Later discussion | Zulip `Referencing MolDef from Observation` | Ongoing discussion about Observation/MolDef guidance and whether `genomics.html` remains in core. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, PR 3901 | Broad R6 normative metadata/template update. |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, PR 3951 | `FHIR-44047` punctuation applied to the page. |
| 2025-11-12 | Source commits | `fad1b9cf84ef652e88947e1a13b026c62f95334e`, `7466cfc63cd0b162497a42c80a67480eed86c75a`, PR 3974 | Links changed to incubator IGs and visible status changed to Normative. |

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/genomics.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/genomics.html" && echo "new exists"`
  - Result: both exist.
- Line counts:
  - `wc -l` returned 1375 old lines and 134 new lines.
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/genomics.html`
  - Established the page was modified in place and reduced from detailed guidance to a short overview.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/genomics.html`
  - Found 17 page-touching commits.
  - `git show --stat --patch` was run for the page path for each commit.
- PR lookup:
  - `gh api /repos/HL7/fhir/commits/<sha>/pulls --jq '.[].html_url'`
  - Found PRs listed in the Quick links and Source history sections.
- Jira:
  - Snapshot commands: `bun run jira:search snapshot FHIR-36085`, `FHIR-44047`, `FHIR-51227`, `FHIR-37890`.
  - FTS commands included exact phrase/key searches for `MolecularDefinition MolecularSequence genomics`, `MolecularSequence will be refactored`, `GenomicStudy genomics`, `Molecular Definition Implementation Guide`, `Genomics in FHIR`, and `Messaging using FHIR Resources`.
  - Failed/no-result searches that affect confidence: no Jira results for exact `MolecularSequence will be refactored`, `Molecular Definition Implementation Guide`, `Genomics in FHIR`, or `Messaging using FHIR Resources`.
- Zulip:
  - Quoted-key FTS was required for Jira keys.
  - Snapshot commands used for `genomics / Update Observation to support MolDef`, `genomics / Referencing MolDef from Observation`, and `committers / Replacing a FHIR resource.`
  - Exact `Messaging using FHIR Resources` search found a historical note that the page had an unlikely title.
- Confluence:
  - `bun run confluence:search refs jira FHIR-36085`, `FHIR-51227`, `FHIR-37890`, and `FHIR-44047`.
  - Snapshot commands used for page IDs `94661506`, `108313461`, `358260196`, `308974089`, and `234784975`.
  - FTS searches for the exact Jira keys mostly returned no high-signal FTS results, but `refs jira` found the relevant minutes/process pages.

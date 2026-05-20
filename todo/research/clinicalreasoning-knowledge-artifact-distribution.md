# clinicalreasoning-knowledge-artifact-distribution research appendix

## Scope and coverage

- Page path: `source/clinicalreasoning-knowledge-artifact-distribution.html`
- Compared `R4 4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to `R6 ballot4 6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- The page exists in both trees and was read end-to-end in the newer tree: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-distribution.html` has 165 lines.
- Source history found 10 page-touching commits between the two commits. Explicit Jira keys found in commit metadata/patches: `FHIR-27817`, `FHIR-32643`, `FHIR-53084`.
- Jira/Zulip/Confluence searches were bounded to explicit keys and distinctive changed phrases. Related evidence also included `FHIR-38841` for the `topic` to `useContext` rationale, and `FHIR-32640`/`FHIR-51019` for CRMI artifact service context.
- Caveats: this review used the local source tree and local community-search snapshots, not a rendered-page build. Initial Zulip FTS searches for unquoted hyphenated Jira keys failed; corrected quoted searches found no direct Zulip mentions of `FHIR-27817`, `FHIR-32643`, or `FHIR-53084`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 source page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/clinicalreasoning-knowledge-artifact-distribution.html:1` | Older page boundary and baseline prose. |
| Source | R6 ballot4 source page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-distribution.html:1` | Current page reviewed end-to-end. |
| Source | New IG distribution section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-distribution.html:24` | Main content added for implementation guide distribution. |
| Source | CRMI artifact service links | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-distribution.html:74` | Page now delegates deeper service details to CRMI. |
| Source | `topic` wording update | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-distribution.html:124` | Implements the `topic` element deprecation guidance from `FHIR-53084`/`FHIR-38841`. |
| Source | De-normatized Bundle recommendation | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-distribution.html:130` | Former `SHOULD`/`SHOULD NOT` text is now recommendation prose. |
| Source | Stale-looking DSS mapping rows | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-distribution.html:147` | Current page still names `KnowledgeArtifact.minScore`/`.status`. |
| Source | Old release-history `minScore` | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/tools/history/release2/search-parameters.xml:30867` | Only current-tree hit for `minScore` outside the page is in release 2 history, not current search parameters. |
| Commit | Template removal | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / `https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Mechanical removal of wrapper div. |
| Commit | `FHIR-27817` IG categories | `39f090d04caff8976e43d9f4d0d54138901f49c1` / `https://github.com/HL7/fhir/commit/39f090d04caff8976e43d9f4d0d54138901f49c1` | Adds the implementation guide distribution discussion. |
| Commit | Remove usagecontext-group reference | `8fcc46b26c6c05c65ff77191e75c3d064fc18042` / `https://github.com/HL7/fhir/commit/8fcc46b26c6c05c65ff77191e75c3d064fc18042` | Removes reference to a removed extension. |
| Commit | `FHIR-32643` CRMI service links | `0b4226bcd1f7ab7f5b2b8c5f0b6cfd32a59a97a5` / `https://github.com/HL7/fhir/commit/0b4226bcd1f7ab7f5b2b8c5f0b6cfd32a59a97a5` | Adds Artifact Repository/Terminology Service links. |
| Commit | `FHIR-53084` update | `41c221cdb82e825c723c89d10e7995e3481458a8` / `https://github.com/HL7/fhir/commit/41c221cdb82e825c723c89d10e7995e3481458a8` | Implements informative status, recommendation wording, and topic/useContext update. |
| PR | `FHIR-27817` PR | `https://github.com/HL7/fhir/pull/2834` | Merged 2023-03-13; contains `39f090d0`. |
| PR | `FHIR-32643` PR | `https://github.com/HL7/fhir/pull/3369` | Merged 2025-03-12; contains `0b4226bc`. |
| PR | `FHIR-53084` PR | `https://github.com/HL7/fhir/pull/3914` | Merged 2025-11-02; contains `41c221cd` and merge `8a448f61`. |
| Jira | `FHIR-27817` | `https://jira.hl7.org/browse/FHIR-27817`; reopen with `bun run jira:search snapshot FHIR-27817` | Formal request to add explanatory documentation about types of IGs. |
| Jira | `FHIR-32643` | `https://jira.hl7.org/browse/FHIR-32643`; reopen with `bun run jira:search snapshot FHIR-32643` | Formal request to consider artifact repository capability statements; later applied by CRMI references. |
| Jira | `FHIR-53084` | `https://jira.hl7.org/browse/FHIR-53084`; reopen with `bun run jira:search snapshot FHIR-53084` | Direct change request for this page's status and wording. |
| Jira | `FHIR-38841` | `https://jira.hl7.org/browse/FHIR-38841`; reopen with `bun run jira:search snapshot FHIR-38841` | Rationale for deprecating `topic` in favor of useContext. |
| Jira | `FHIR-32640` | `https://jira.hl7.org/browse/FHIR-32640`; reopen with `bun run jira:search snapshot FHIR-32640` | Context: artifact terminology service not implemented in FHIR Core, developed in CRMI. |
| Zulip | Metadata Topic / Canonical UsageContext | `https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Metadata%20Topic%20%2F%20Canonical%20UsageContext`; `bun run zulip:search snapshot "fhir/infrastructure-wg" "Metadata Topic / Canonical UsageContext"` | Original discussion leading to `FHIR-38841`. |
| Zulip | Deprecating topic and jurisdiction elements | `https://chat.fhir.org/#narrow/stream/implementers/topic/Deprecating%20%22topic%22%20and%20%22jurisdiction%22%20elements`; `bun run zulip:search snapshot implementers 'Deprecating "topic" and "jurisdiction" elements'` | Implementer feedback on topic/jurisdiction deprecation. |
| Zulip | UsageContext later thread | `bun run zulip:search snapshot "fhir/infrastructure-wg" "UsageContext"` | Later 2024 discussion noticed sparse useContext documentation and linked this page. |
| Confluence | FHIR-I WGM 202301 minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/144983126/FHIR+Infrastructure+Minutes+WGM+202301+-+Henderson`; `bun run confluence:search snapshot 144983126` | Records plan to mark `topic`/`jurisdiction` deprecated and use useContext. |
| Confluence | FHIR-I 2023-02-27 minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/156545358/FHIR+Infrastructure+Minutes+CC+2023-02-27`; `bun run confluence:search snapshot 156545358` | Records `FHIR-38841` persuasive-with-mod vote. |
| Confluence | PHWG CRMI project minutes | `https://confluence.hl7.org/spaces/PHWG/pages/81031846/2022-03-10+Public+Health+Work+Group+Call+Minutes`; `bun run confluence:search snapshot 81031846` | Context for artifact repository/terminology services in CRMI project scope. |

## Change summary

### Implementation guide distribution guidance

- Classification: semantic guidance / example-supporting content.
- `39f090d04caff8976e43d9f4d0d54138901f49c1` adds a new "Distribution via Implementation Guides" section, a new diagram `clinicalreasoning-ig-types.png`, and explanatory prose about foundational standards, model IGs, specification IGs, and content IGs.
- The associated Jira `FHIR-27817` requested exactly this: explanatory documentation about types of IGs and relationships between them. Jira status is Published, resolution Persuasive, applied for R5, and comments link the commit and PR `HL7/fhir#2834`.
- This is not a new conformance requirement; it is explanatory background on a distribution path in addition to repository services.

### Repository service guidance and CRMI delegation

- Classification: semantic guidance / external-reference update.
- The R4 page described distribution via a FHIR server directly. R6 splits the page into implementation guide and repository-service paths. The repository-service section preserves the search/read model and points to CRMI for fuller treatment.
- `0b4226bcd1f7ab7f5b2b8c5f0b6cfd32a59a97a5` adds links to CRMI Artifact Repository Service and Artifact Terminology Service.
- `FHIR-32643` asked to consider knowledge artifact repository capability statements. Its comments say the formal capability statements would be made in CRMI and only considered for FHIR Core later; the applied page text references CRMI rather than defining those statements in core.
- `FHIR-32640` is relevant context only: Vocab declined to implement an artifact terminology service in FHIR Core and comments pointed to CRMI as the better home. The current page's CRMI link is consistent with that; it does not define the service in core.

### Removal of usagecontext-group extension reference

- Classification: semantic/editorial cleanup tied to a removed artifact.
- `8fcc46b26c6c05c65ff77191e75c3d064fc18042` removes the sentence that pointed readers to `usagecontext-group`.
- The current page still states that the base resource does not communicate intended semantics when multiple `useContext` elements are present, but no longer recommends the removed extension.

### Informative status and de-normatized wording

- Classification: substantive/normative-status change plus semantic guidance.
- The page changes from R4 Trial Use/FMM 2 to R6 Informative. Mechanical status-table work also removed the maturity cell from the local page header.
- `FHIR-53084` explicitly requested: make the artifact distribution topic informative; reword `SHOULD` and `SHOULD NOT` statements as recommendations appropriate for informative content; update the `topic` reference because `topic` is deprecated in favor of a `topic` use context.
- `41c221cdb82e825c723c89d10e7995e3481458a8` implements this by changing "The Bundle returned SHOULD..." to "The Bundle returned is recommended..." and "SHOULD NOT" to "are not recommended..."; it also changes the `topic` wording to "topic context type."
- Related rationale is in `FHIR-38841`, FHIR-I minutes, and Zulip threads. The page implementation appears aligned with the formal intent.

### Links, metadata, and mechanical churn

- Classification: metadata/template/navigation.
- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removes the outer `div.col-12` as template churn.
- `c3da43d4d906bc8ef71d67923be5e5db976665be`, `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, and merge `8a448f61f25b04d6dae7fff0b7ec082ae8ca833d` adjust page status-table classes and final standards status.
- `b3e373388f8137e589fdc6b18beb9ff86a2c23cb` and `80eecb02fa2e33912305596384aaf6eca318d670` update extension/CRMI links and remove `build.fhir.org` hard links where appropriate.
- `41c221cdb82e825c723c89d10e7995e3481458a8` also linkifies FHIRPath, CQL, CDS Hooks, SMART-on-FHIR, IPS, US Core, and QI Core references.

### Newly noticed current-page issues

- The DSS mapping table still names `KnowledgeArtifact.minScore` and `KnowledgeArtifact.status` search parameters at current source lines 147 and 149. A current-tree search found no current `KnowledgeArtifact` files and no current `minScore` SearchParameter; `minScore` appears only in old release-history artifacts such as `tools/history/release2/search-parameters.xml:30867`.
- The current resource search parameter bundles for Library, ActivityDefinition, PlanDefinition, and Measure include resource-specific `status`, `topic`, `context`, etc., but not `minScore`. This looks like inherited stale DSS mapping text rather than a tracked R4-to-R6 change.
- Current source also contains two clear typos: "provide-facing remote decision support" at line 55 and "the `useContext` elements is intended" at line 81.

## Source history

| Commit | Date | Subject | Page-specific interpretation |
|---|---:|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Mechanical removal of wrapper `<div class="col-12">` and closing `</div>`. |
| `c3da43d4d906bc8ef71d67923be5e5db976665be` | 2022-09-05 | tidy up status codes on pages, and set version for ballot | Mechanical status-table class change from `cols` to `colstu`; no content semantics. |
| `b3e373388f8137e589fdc6b18beb9ff86a2c23cb` | 2023-02-08 | fix extension links | Link cleanup for `usagecontext-group` before that reference was later removed. |
| `39f090d04caff8976e43d9f4d0d54138901f49c1` | 2023-03-12 | QA: Clinical reasoning roadmap updates / J#27817 | Substantive explanatory addition: implementation guide categories and distribution via IGs. |
| `80eecb02fa2e33912305596384aaf6eca318d670` | 2023-03-25 | clean up broken links and references to build.fhir.org | Link-template cleanup for CRMI references. |
| `8fcc46b26c6c05c65ff77191e75c3d064fc18042` | 2025-01-08 | QA: Removed references to removed usageContext-group extension | Removes obsolete extension reference. |
| `0b4226bcd1f7ab7f5b2b8c5f0b6cfd32a59a97a5` | 2025-03-06 | FHIR-32643: Added references to CRMI capability discussions | Adds CRMI Artifact Repository/Terminology Service links. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Mechanical/normative-status header restructuring: `Responsible Owner`, no maturity cell. |
| `41c221cdb82e825c723c89d10e7995e3481458a8` | 2025-11-01 | FHIR-53084: Updated artifact distribution topic | Direct page update: Informative, recommendation wording, topic/useContext wording, linkification. |
| `8a448f61f25b04d6dae7fff0b7ec082ae8ca833d` | 2025-11-01 | Merge branch 'master' into br-cds-2025-10-31 | Merge combines Informative status from `FHIR-53084` with R6 status-table restructuring. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-27817` (`Add explanatory documentation about types of IGs`): Published, Persuasive, applied for R5. Description asks for adding the attached IG-categorization diagram and language to clinical reasoning module documentation. Comments link commit `39f090d04caff8976e43d9f4d0d54138901f49c1` and PR `https://github.com/HL7/fhir/pull/2834`.
- `FHIR-32643` (`Consider a knowledge artifact repository capability statement`): Applied, Persuasive, applied for R6. Resolution says to generalize and add artifact repository capability statements. Comments clarify the change would be made in CRMI and considered for core later, then ask to add discussion and reference CRMI. Comment links PR `https://github.com/HL7/fhir/pull/3369`.
- `FHIR-53084` (`Update artifact distribution topic`): Applied, Persuasive, applied for R6. Description and resolution exactly match the page changes: Informative status, reword `SHOULD`/`SHOULD NOT`, and update `topic` reference to `topic` use context. Comment links PR `https://github.com/HL7/fhir/pull/3914`.

### Other Jira issues that plausibly explain changed text

- `FHIR-38841` (`Remove Metadata Topic and recommend using Canonical UsageContext property`): Published, Persuasive with Modification, applied for R5. Resolution says to deprecate `Metadata.topic` and define a mechanism for conveying topic in UseContext. This is the best explanation for why `FHIR-53084` replaces the page's `topic` element wording.
- `FHIR-32640` (`Consider an Artifact Terminology Service`): Resolved - No Change / Not Persuasive. It is context for the Artifact Terminology Service link: FHIR Core did not implement this service, and Jira comments point to CRMI as the better home.
- `FHIR-51019` (`Separate the notion of release status from artifact status`): CRMI issue, context-only for later CRMI artifact repository/terminology service evolution; it does not directly explain this core page diff.

### Context-only Jira hits that should not drive action

- `FHIR-30722` appeared in a broad `"knowledge artifact distribution"` search but is in `FHIR-us-medmorph`, not this core page.
- Exact Jira searches for `"KnowledgeArtifact.minScore"`, `"minScore" "KnowledgeArtifact"`, `"Minimum Score" "KnowledgeArtifact"`, and `"DSS" "minScore"` found no issue explaining the current stale-looking DSS table rows.

## Zulip evidence

- No corrected quoted Zulip FTS search found direct mentions of `FHIR-27817`, `FHIR-32643`, or `FHIR-53084`.
- `#fhir/infrastructure-wg > Metadata Topic / Canonical UsageContext` (2022-10-05 to 2022-10-09) is directly cited from `FHIR-38841`. It records the initial observation that Metadata Topic and Canonical UsageContext were close, with Grahame Grieve saying topic is a kind of use context and Lloyd McKenzie noting useContext is a name-value pair while topic is a keyword.
- `#implementers > Deprecating "topic" and "jurisdiction" elements` (2023-01-17 to 2023-01-22) records implementer feedback after FHIR-I discussed deprecating topic and jurisdiction in favor of useContexts. This supports the later page wording update.
- `#fhir/infrastructure-wg > UsageContext`/`Metadata Topic / Canonical UsageContext` later messages in October 2024 mention sparse useContext documentation and link this page's repository-service anchor. This is background only; it does not establish a specific required change to this page.
- Exact Zulip searches for `KnowledgeArtifact.minScore`, `minScore` plus `KnowledgeArtifact`, `Minimum Score` plus `KnowledgeArtifact`, and `DSS` plus `minScore` found no discussion explaining the stale-looking table rows.

## Confluence evidence

- `FHIR Infrastructure Minutes WGM 202301 - Henderson` (`pageId=144983126`) records `FHIR-38841`: "Mark topic and jurisdiction as deprecated" and "Add instruction to use useContext instead," with a note to post on Zulip before voting.
- `FHIR Infrastructure Minutes CC 2023-02-27` (`pageId=156545358`) records `FHIR-38841` as Persuasive with Mod, motion Bryn Rhodes/Grahame Grieve, 15-0-1.
- `2022-03-10 Public Health Work Group Call Minutes` (`pageId=81031846`) records the Content Management Infrastructure IG project scope, including shareable/publishable/authoring artifact repository service and artifact terminology service. This supports treating CRMI as the home for those service capabilities.
- `2019-06-19 CDS Meeting Agenda` (`pageId=55936083`) contains older background discussion of the knowledge artifact distribution use case in the HSPC Marketplace context. It is useful background only, not evidence for a specific R4-to-R6 page edit.
- Confluence refs/FTS searches found no direct pages for `FHIR-27817`, `FHIR-32643`, or `FHIR-53084`.

## Timeline

| Date | Event type | Evidence |
|---:|---|---|
| 2019-06-19 | Background discussion | CDS agenda mentions the knowledge artifact distribution use case in marketplace/service distribution context. |
| 2020-06-12 | Jira created | `FHIR-27817` asks for explanatory IG-categorization documentation. |
| 2021-03-17 / 2021-03-24 | Jira resolved/voted | `FHIR-27817` resolved Persuasive; vote recorded 16-0-0. |
| 2021-05-18 | Jira created | `FHIR-32643` asks to consider artifact repository capability statements. |
| 2022-02-16 | Jira vote | `FHIR-32643` vote recorded 19-0-0. |
| 2022-10-05 to 2022-10-09 | Zulip discussion | Metadata Topic / Canonical UsageContext thread leads to `FHIR-38841`. |
| 2023-01-17 | FHIR-I minutes/Zulip | FHIR-I records plan to deprecate topic/jurisdiction and use useContext; implementers thread opened. |
| 2023-02-27 | FHIR-I vote | `FHIR-38841` Persuasive with Mod, 15-0-1. |
| 2023-03-12 | Source commit | `39f090d0` applies `FHIR-27817` IG-category discussion to this page. |
| 2023-03-13 | PR merge | `HL7/fhir#2834` merged with `39f090d0`. |
| 2023-10-16 | Jira resolution | `FHIR-32640` resolved No Change for core Artifact Terminology Service, with CRMI as better home. |
| 2025-03-06 | Source commit | `0b4226bc` adds CRMI service links for `FHIR-32643`. |
| 2025-03-12 | PR merge | `HL7/fhir#3369` merged. |
| 2025-10-08 | Jira created/resolved | `FHIR-53084` created and resolved; direct request to update this page. |
| 2025-10-15 | Jira vote | `FHIR-53084` vote recorded 14-0-0. |
| 2025-11-01 | Source commit | `41c221cd` applies `FHIR-53084`; `8a448f61` merges status-table changes. |
| 2025-11-02 | PR merge | `HL7/fhir#3914` merged and Jira comment added. |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/clinicalreasoning-knowledge-artifact-distribution.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-distribution.html" && echo "new exists"`
- Captured direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalreasoning-knowledge-artifact-distribution.html`
- Captured chronological source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalreasoning-knowledge-artifact-distribution.html`
  - `git show --stat --patch <commit> -- source/clinicalreasoning-knowledge-artifact-distribution.html` for all 10 page-touching commits.
- Jira snapshots:
  - `bun run jira:search snapshot FHIR-27817`
  - `bun run jira:search snapshot FHIR-32643`
  - `bun run jira:search snapshot FHIR-53084`
  - `bun run jira:search snapshot FHIR-38841`
  - `bun run jira:search snapshot FHIR-32640`
  - `bun run jira:search snapshot FHIR-51019`
- Jira FTS searches included:
  - `"knowledge artifact distribution"`, `"artifact distribution topic"`, `"Distribution via Implementation Guides"`, `"Artifact Repository Service" "Artifact Terminology Service"`, `"useContext" "topic context type"`, `"Bundle returned is recommended"`, and exact `KnowledgeArtifact.minScore`/`minScore` queries.
- Zulip searches/snapshots:
  - Corrected quoted key searches: `"FHIR-27817"`, `"FHIR-32643"`, `"FHIR-53084"`; all found no results.
  - `bun run zulip:search snapshot "fhir/infrastructure-wg" "Metadata Topic / Canonical UsageContext"`
  - `bun run zulip:search snapshot implementers 'Deprecating "topic" and "jurisdiction" elements'`
  - `bun run zulip:search snapshot "fhir/infrastructure-wg" "UsageContext"`
- Confluence searches/snapshots:
  - `bun run confluence:search refs jira FHIR-27817`, `FHIR-32643`, `FHIR-53084`, `FHIR-38841`
  - `bun run confluence:search snapshot 144983126`
  - `bun run confluence:search snapshot 156545358`
  - `bun run confluence:search snapshot 81031846`
  - `bun run confluence:search snapshot 55936083`
- PR metadata:
  - `gh pr view 2834 -R HL7/fhir --json number,title,url,state,mergedAt,author,body,commits`
  - `gh pr view 3369 -R HL7/fhir --json number,title,url,state,mergedAt,author,body,commits`
  - `gh pr view 3914 -R HL7/fhir --json number,title,url,state,mergedAt,author,body,commits`
- Current-page cross-checks:
  - `rg "KnowledgeArtifact-minScore|KnowledgeArtifact-status|KnowledgeArtifact\\.minScore|KnowledgeArtifact.status|\"minScore\"|<code value=\"minScore\"" .../6.0.0-ballot4-5d67a34a13a5`
  - `rg "<code value=\"(status|minScore|topic|context|context-type|description|identifier|title|version)\"" source/{library,activitydefinition,plandefinition,measure}/bundle-*-search-params.xml`
  - `rg "provide-facing|useContext</code> elements is|topic context type" .../source/clinicalreasoning-knowledge-artifact-distribution.html`

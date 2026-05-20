# clinicalreasoning-cds-on-fhir research appendix

## Scope and coverage

- Page path: `source/clinicalreasoning-cds-on-fhir.html`.
- Compared `R4 4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to `R6 ballot4 6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Old source tree: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New source tree: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Page boundary confirmed: file exists in both trees. The old page has 306 lines; the new page has 47 lines.
- The newer R6 ballot4 page was read end-to-end: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-cds-on-fhir.html:1-47`.
- Direct diff: 1 file changed, 13 insertions and 272 deletions. The dominant change is a rewrite/condensation that removes detailed CDS Hooks examples and mappings and replaces them with brief pointers to PlanDefinition `$apply`, CPG Activity Flow, CDS Hooks, and the new Using FHIR Clinical Reasoning with CDS Hooks IG.
- Source history between the two boundary commits has 13 commits touching this page.
- Explicit Jira keys found in commits/patches and reviewed: `FHIR-24619`, `FHIR-24867`, `FHIR-44751`, `FHIR-44752`, `FHIR-48393`, `FHIR-53085`, `FHIR-44047`. Additional context-only Jira from phrase search: `FHIR-53713`, `FHIR-46314`, `FHIR-45999`.
- Jira, Zulip, and Confluence searches were performed for explicit keys and distinctive changed phrases. Exact Zulip issue-key FTS searches initially failed when unquoted because hyphens were parsed as FTS operators; they were retried with quoted keys.
- Important caveat: Jira `FHIR-53085` links PR `HL7/fhir#3916`, but `gh pr diff 3916 --name-only` showed that PR did not touch this page. The page rewrite itself is in commit `f87291cc3767a47e7de479803eb717af0ae4b7de`, which does touch `source/clinicalreasoning-cds-on-fhir.html`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/clinicalreasoning-cds-on-fhir.html:1` | R4 baseline, 306 lines |
| Source | New R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-cds-on-fhir.html:1-47` | Current reviewed page |
| Source | New status line | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-cds-on-fhir.html:13` | Page is now Informative |
| Source | PlanDefinition `$apply` native service text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-cds-on-fhir.html:18,25-31` | New concise consuming-decision-support guidance |
| Source | CDS Hooks handoff text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-cds-on-fhir.html:36-44` | New concise CDS Hooks guidance and IG link |
| Source | Broken new IG link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-cds-on-fhir.html:44` | Link to moved detail currently returns 404 at `hl7.org` |
| Commit | Page rewrite | `f87291cc3767a47e7de479803eb717af0ae4b7de`; `https://github.com/HL7/fhir/commit/f87291cc3767a47e7de479803eb717af0ae4b7de` | FHIR-53085 page-specific implementation |
| Commit | Status merge resolution | `8a448f61f25b04d6dae7fff0b7ec082ae8ca833d`; `https://github.com/HL7/fhir/commit/8a448f61f25b04d6dae7fff0b7ec082ae8ca833d` | Combined Informative status with R6 table template |
| Commit | Punctuation cleanup | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`; `https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | FHIR-44047 local edit to `i.e.,` |
| Jira | FHIR-53085 | `https://jira.hl7.org/browse/FHIR-53085`; reopen with `bun run jira:search snapshot FHIR-53085` | Formal intent to move most page content to the new IG and update status to informative |
| Jira | FHIR-48393 | `https://jira.hl7.org/browse/FHIR-48393`; reopen with `bun run jira:search snapshot FHIR-48393` | Formal intent to remove CDS Hooks profiles from core and move to an IG |
| Jira | FHIR-44751 | `https://jira.hl7.org/browse/FHIR-44751`; reopen with `bun run jira:search snapshot FHIR-44751` | Earlier correction from deprecated `medication-prescribe` hook to `order-sign`; removed by later rewrite |
| Jira | FHIR-44752 | `https://jira.hl7.org/browse/FHIR-44752`; reopen with `bun run jira:search snapshot FHIR-44752` | Earlier correction from `hard-stop` indicator to `critical`; removed by later rewrite |
| Jira | FHIR-24867 | `https://jira.hl7.org/browse/FHIR-24867`; reopen with `bun run jira:search snapshot FHIR-24867` | Added safety-checklist pointer retained in current page |
| Jira | FHIR-24619 | `https://jira.hl7.org/browse/FHIR-24619`; reopen with `bun run jira:search snapshot FHIR-24619` | RequestGroup -> RequestOrchestration rename reflected in historical and current wording |
| Jira | FHIR-44047 | `https://jira.hl7.org/browse/FHIR-44047`; reopen with `bun run jira:search snapshot FHIR-44047` | Broad `e.g.,`/`i.e.,` punctuation cleanup; touched current line 29 |
| Jira | FHIR-53713 | `https://jira.hl7.org/browse/FHIR-53713`; reopen with `bun run jira:search snapshot FHIR-53713` | Later context-only issue against GuidanceResponse/CDS Hooks card.source in moved IG |
| PR | HL7/fhir#3916 | `https://github.com/HL7/fhir/pull/3916` | Linked from FHIR-53085 for cleanup related to moved mappings; did not touch this page |
| IG commit | Moved ConceptMap into new IG | `https://github.com/HL7/cds-hooks-clinical-reasoning/commit/61bbc5e8933a1eed0012f8efe7b6627172a687d8` | FHIR-53085-linked IG-side commit; touched `input/resources/conceptmap/conceptmap-cdshooks-indicator.xml` |
| Zulip | FHIR-53085 PR review discussion | `#committers > PR Reviews`, local snapshot `/tmp/fhir-cds-review-zulip/committers-pr-reviews.md:1896-1927`; reopen with `bun run zulip:search snapshot committers "PR Reviews"` | Grahame asked why the CDS Hooks indicator ConceptMap was deleted; Bryn said it moved to the CDS IG and cited FHIR-53085 |
| Zulip | FHIR-48393 profile-removal discussion | `#fmg > FHIR Core Profiles proposal`, local snapshot `/tmp/fhir-cds-review-zulip/fmg-core-profiles.md:84-89,177-190`; reopen with `bun run zulip:search snapshot fmg "FHIR Core Profiles proposal"` | Confirms CDS/CQI vote to remove profiles and that CDS Hooks profiles needed an IG home |
| Confluence | CDS profile-location agenda | Page `345543948`, `https://confluence.hl7.org/spaces/CDS/pages/345543948/2025-05-21+-+Meeting+Agenda`; reopen with `bun run confluence:search snapshot 345543948` | CDS WG discussed moving CDS Hooks profiles out of core and into a Using CDS Hooks/Clinical Reasoning IG |
| Confluence | CDS IG proposal approval | Page `391187341`, `https://confluence.hl7.org/spaces/CDS/pages/391187341/2025-10-01+-+Meeting+Agenda`; reopen with `bun run confluence:search snapshot 391187341` | CDS approved the Using FHIR Clinical Reasoning with CDS Hooks IG proposal 17-0-0 |
| Confluence | FMG IG proposal approval | Page `391644145`, `https://confluence.hl7.org/spaces/FMG/pages/391644145/2025-10-01+FMG+Agenda+Minutes`; reopen with `bun run confluence:search snapshot 391644145` | FMG approved the new IG proposal |
| Confluence | CDS moved ConceptMap follow-up | Page `404096186`, `https://confluence.hl7.org/spaces/CDS/pages/404096186/2025-11-05+-+Meeting+Agenda`; reopen with `bun run confluence:search snapshot 404096186` | Follow-up on CDS Hooks indicator ConceptMap in the new IG |
| Link check | Current page IG URL | `curl -L -s -o /dev/null -w '%{http_code} %{url_effective}\n' http://hl7.org/fhir/uv/cds-hooks-clinical-reasoning` -> `404` | Current page's IG handoff is broken at review time |
| Link check | CI build URL | `curl -L -s -o /dev/null -w '%{http_code} %{url_effective}\n' https://build.fhir.org/ig/HL7/cds-hooks-clinical-reasoning/` -> `200` | The referenced draft IG exists on CI even though the `hl7.org` publication URL is not live |

## Change summary

### FHIR-53085 page rewrite and relocation of detail

- Classification: semantic guidance, metadata/status, and editorial relocation; not a new normative requirement on this page because the page is now Informative.
- The R4 page presented a high-level CDS Hooks approach with detailed discovery/request/response examples, object-level and element-level mappings to GuidanceResponse and RequestGroup/RequestOrchestration, hook/service/prefetch mapping tables, and links to core CDS Hooks profiles.
- The R6 ballot4 page removes nearly all of those detailed examples and tables. It keeps two short sections:
  - native FHIR server use of `PlanDefinition/$apply`, pointing to the CPG Activity Flow topic (`source/clinicalreasoning-cds-on-fhir.html:18,25-31`);
  - CDS Hooks wrapping of `PlanDefinition $apply`, pointing to the new Using FHIR Clinical Reasoning with CDS Hooks IG (`source/clinicalreasoning-cds-on-fhir.html:36-44`).
- This matches Jira `FHIR-53085`, whose resolution says to "Move most of the contents of this page into the Using Clinical Reasoning with FHIR Implementation Guide", "Reference the new implementation guide", "Update page status to informative", and move relevant profiles/concept maps to the IG.

### Standards status and maturity metadata

- Classification: metadata/template/navigation with reader-facing status significance.
- R4 header: Work Group CDS, Maturity Level 2, Standards Status Trial Use.
- R6 ballot4 header: Responsible Owner CDS Work Group, Standards Status Informative, no FMM cell (`source/clinicalreasoning-cds-on-fhir.html:13`).
- The Informative status comes from FHIR-53085 and merge/template commits (`f87291cc...`, `270e0ceb...`, `8a448f61...`).

### Examples and mapping tables removed

- Classification: semantic guidance and example removal.
- Removed CDS Hooks discovery/request/response JSON examples and text that had been corrected by FHIR-44751/FHIR-44752 in March 2025. These corrections are no longer visible because the entire example block was removed by FHIR-53085.
- Removed mapping tables between CDS Hooks objects/elements and GuidanceResponse/RequestOrchestration. FHIR-48393 and FHIR-53085 explain that CDS Hooks profiles and supporting concept maps should move out of core to the new IG.

### RequestGroup -> RequestOrchestration rename

- Classification: substantive historical rename already applied before the final rewrite.
- Commit `46bea37a00e63d1ace04a5f322614c6d0815f500` changed page references from RequestGroup to RequestOrchestration under `FHIR-24619`.
- Current page still mentions RequestOrchestration in the CDS Hooks wrapping section (`source/clinicalreasoning-cds-on-fhir.html:40`).

### Patient safety pointer retained

- Classification: semantic guidance/editorial.
- Commit `d0cd856afd919b36f213916cc1e9af5c7b0679e8` added the Implementer's Safety Checklist paragraph under `FHIR-24867`.
- Current page retains that paragraph at `source/clinicalreasoning-cds-on-fhir.html:20`.

### Broken new IG link

- Classification: concrete reader-facing rendering/navigation defect.
- Current line 44 links to `http://hl7.org/fhir/uv/cds-hooks-clinical-reasoning`, but all checked published URL variants returned 404:
  - `http://hl7.org/fhir/uv/cds-hooks-clinical-reasoning`
  - `https://hl7.org/fhir/uv/cds-hooks-clinical-reasoning`
  - same URLs with trailing slash
  - `http://hl7.org/fhir/uv/cds-hooks-clinical-reasoning/history.html`
- The CI build exists at `https://build.fhir.org/ig/HL7/cds-hooks-clinical-reasoning/` and the IG source uses package id `hl7.fhir.uv.cds-hooks-clinical-reasoning`.
- This is the only actionable issue found for this page.

### Mechanical/editorial churn

- Classification: mechanical/noise or low-priority editorial.
- `33b409a...`, `d7b8dad...`, `a21a521...`, `c3da43d...`, `270e0ce...`, and `8a448f...` are mostly template, link, profile-name, or status-table changes.
- `887bc238...` only adds the comma after `i.e.` in current line 29 under broad punctuation issue `FHIR-44047`.

## Source history

| Commit | Date | Subject | Page effect | Classification |
|---|---:|---|---|---|
| `33b409a4b6d544598262f2f074ebb4b6dc466157` | 2021-01-14 | `rework source for new build core` | Updates profile links: `plandefinition-cdshooks-service.html` -> `plandefinition-cdshooks.html`, `library-cql.html` -> `library-cqf.html`, `plandefinition-computable.html` -> `computableplandefinition.html` | Link/mechanical |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removes outer `<div class="col-12">` wrapper | Mechanical/template |
| `a21a521bb156c9f8409bb9effce318a10f54b85c` | 2022-03-23 | `pull/merge` | Changes link text to `CDSHooksServicePlanDefinition` | Editorial/profile naming |
| `46bea37a00e63d1ace04a5f322614c6d0815f500` | 2022-08-24 | `J#24619: Renaming RequestGroup to RequestOrchestration` | Replaces RequestGroup references, links, and mapping paths with RequestOrchestration | Substantive resource rename |
| `c3da43d4d906bc8ef71d67923be5e5db976665be` | 2022-09-05 | `tidy up status codes on pages, and set version for ballot` | Changes status table class `cols` -> `colstu` | Mechanical/status template |
| `d0cd856afd919b36f213916cc1e9af5c7b0679e8` | 2023-03-12 | `J#24867: Added decision support topic to patient safety checklist` | Adds safety/security/privacy paragraph linking `safety.html` | Semantic guidance |
| `145fd780bdcb91dd6c296d476b22378585266639` | 2025-03-18 | `FHIR-44751: Updated references to deprecated medication-prescribe hook` | Updates examples from `medication-prescribe` to `order-sign` and removes stale DSTU2 note | Example correction, later removed |
| `d909aeac89246c7b78183fc41eb03d2a56fe5a33` | 2025-03-18 | `FHIR-44752: Updated reference to outdated hard-stop CDS Hooks indicator value` | Replaces `hard-stop` with `critical` in card indicator list | Example correction, later removed |
| `571498e2b2959573e07980c9117923b42624e3a1` | 2025-03-18 | `FHIR-48393: Removed shareable/publishable profiles for Library, ActivityDefinition, PlanDefinition, and Measure` | Replaces core computable PlanDefinition/CQL profile paragraph with FHIR Clinical Guidelines IG pointer | Semantic relocation |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Converts status table to `colsi`, removes FMM cell from table, still Trial Use before later merge | Metadata/template |
| `f87291cc3767a47e7de479803eb717af0ae4b7de` | 2025-11-01 | `[FHIR-53085](https://jira.hl7.org/browse/FHIR-53085): Updated the decision support services topic` | Main rewrite: changes status to Informative, removes most content/examples/mappings, adds concise `$apply` and CDS Hooks sections and IG links | Main semantic/editorial relocation |
| `8a448f61f25b04d6dae7fff0b7ec082ae8ca833d` | 2025-11-01 | `Merge branch 'master' into br-cds-2025-10-31` | Merge resolution combines `colsi` status-table format with Informative status | Metadata/template |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Changes `i.e.` to `i.e.,` in line 29 | Editorial punctuation |

Additional all-source `FHIR-53085` commits found with `git log --all --grep=FHIR-53085`: `6abb14540e3fb2242095bca267cd1f48221c5b93` removed CDS Hooks related profiles, and `1268605a53fabdafc86a868ba2a51656aa9907c7` cleaned up moved mappings in other files. Neither touched this page in the inspected checkout.

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-53085` ("Move CDS-on-FHIR page content to Using Clinical Reasoning IG") is the main page-change rationale. Metadata: status Applied, resolution Persuasive, work group CDS, raised in R6, applied for R6, vote Jeff Brown/Gail Winters 14-0-0 on 2025-10-15. The description and resolution both say to move most page content to the new IG, reference the IG, update status to informative, move the relevant profiles to the IG, and move concept maps supporting PlanDefinition/RequestOrchestration/GuidanceResponse to CDS Hooks mappings to the IG. Comments link `https://github.com/HL7/fhir/pull/3916` and IG commit `61bbc5e8933a1eed0012f8efe7b6627172a687d8`.
- `FHIR-48393` ("Remove profiles from the base specification") is the broader profile-removal rationale. It specifically lists `CDSHooksGuidanceResponse`, `CDSHooksRequestOrchestration`, and `CDSHooksServicePlanDefinition` as moving to a Using CDS Hooks With FHIR IG. A later comment noted these still appeared in R6 Ballot 3; the current page no longer links to those core profiles.
- `FHIR-44751` ("update reference to deprecated hook") and `FHIR-44752` ("Update reference to deprecated indication") explain March 2025 corrections to the old examples. They are historically relevant but not actionable on the current page because the corrected examples were later removed.
- `FHIR-24619` ("Rename RequestGroup to RequestOrchestration") explains the RequestGroup -> RequestOrchestration page update. Current page line 40 retains RequestOrchestration terminology.
- `FHIR-24867` ("Do Not Assume the Data in the EHR is correct") explains the retained safety paragraph and safety checklist link.
- `FHIR-44047` ("Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout") explains the current line 29 punctuation-only edit. The issue is still "Resolved - change required" globally, but this page-specific edit was applied.

### Other Jira issues from phrase searches

- `FHIR-53713` ("What about other CDS Hooks card.source elements?") surfaced when searching for the exact new IG title. It was created after the page rewrite and references a GuidanceResponse profile page in the new Using FHIR Clinical Reasoning with CDS Hooks draft IG. It is context-only for this page: it suggests ongoing work in the moved IG but does not contradict current page wording.
- `FHIR-46314` and `FHIR-45999` surfaced in a search for `"Activity Flow" "PlanDefinition" "$apply"`. They relate to CPG IG guidance on `$apply`/RequestOrchestration and are background only; they do not show a current page mismatch.

### Context-only Jira hits that should not drive action

- `FHIR-44751`, `FHIR-44752`, and the detailed CDS Hooks examples they corrected are not current-page action items after FHIR-53085 removed those examples.
- `FHIR-24619`, `FHIR-24867`, and `FHIR-44047` are implemented/historical for this page and did not reveal a current mismatch.

## Zulip evidence

- `#committers > PR Reviews` (snapshot command: `bun run zulip:search snapshot committers "PR Reviews"`) contains the most relevant FHIR-53085 discussion at local lines `/tmp/fhir-cds-review-zulip/committers-pr-reviews.md:1896-1927`:
  - Grahame asked why `conceptmap-cdshooks-indicator` was deleted.
  - Bryn answered that it "was part of the CDS Hooks mapping that we agreed should move to the CDS IG" and linked the CI build `https://build.fhir.org/ig/HL7/cds-hooks-clinical-reasoning`.
  - Grahame asked "which task was this?"; Bryn cited `https://jira.hl7.org/browse/FHIR-53085`.
  - Bryn later linked the moved `ConceptMap-cdshooks-indicator.html` page in the IG CI build.
- `#fmg > FHIR Core Profiles proposal` (snapshot command: `bun run zulip:search snapshot fmg "FHIR Core Profiles proposal"`) provides the FHIR-48393 background:
  - On 2024-10-03, Bryn said CDS and CQI WGs voted to remove profiles from the base specification and cited FHIR-48393 (`/tmp/fhir-cds-review-zulip/fmg-core-profiles.md:84-89`).
  - The same message says most profiles were already in CRMI/Using CQL and that CDS Hooks-related profiles were still under consideration for CDS Hooks proper or a Using CDS Hooks IG.
  - On 2025-05-20, Lloyd said "CDSHooks ones should be gone"; Bryn replied there was still CDS WG discussion on where those would land (`/tmp/fhir-cds-review-zulip/fmg-core-profiles.md:177-190`).
- `#committers > RequestGroup Rename` (snapshot command: `bun run zulip:search snapshot committers "RequestGroup Rename"`) is historical evidence for FHIR-24619. It discusses whether the rename to RequestOrchestration was worth the cost and generally supports the rename. It is not current-page action evidence.
- Quoted Zulip FTS for `FHIR-44751`, `FHIR-44752`, `FHIR-24867`, `FHIR-44047`, and `FHIR-53713` found no directly relevant human discussion.
- Exact phrase searches for `"Using FHIR Clinical Reasoning with CDS Hooks"` and `"Move CDS-on-FHIR page content"` found no additional Zulip rationale beyond the `cds-hooks-clinical-reasoning` CI-build mentions in `#committers > PR Reviews`.

## Confluence evidence

- CDS page `345543948` ("2025-05-21 - Meeting Agenda") records the profile-location discussion for FHIR-48393. It says TSC determined there should be no resource profiles in the base FHIR specification, notes the Clinical Reasoning module has profiles mapping CDS Hooks concepts to resources, and says a "Using CDS Hooks with FHIR Clinical Reasoning" IG may make the most sense. It assigns Bryn to investigate and return to the WG.
- CDS page `391187341` ("2025-10-01 - Meeting Agenda") records CDS WG approval of the new IG proposal. It notes discussion around avoiding community confusion with the CDS Hooks base spec IGs and records "Motion to approve IG: Chris Schuler / Gail Winters: 17-0-0 Motion carries, CDS approves IG proposal."
- FMG page `391644145` ("2025-10-01 FMG Agenda/Minutes") records FMG approval of the same IG proposal. It says "Bryn reviews the contents of the proposal with the group", "No comments/questions", and "MOTION to approve: Gino/Gay VOTE: All in favor."
- CDS page `404096186` ("2025-11-05 - Meeting Agenda") records a follow-up on the moved CDS Hooks Indicator ConceptMap in the new IG's CI build and a motion related to terminology location. This supports that some moved content was actively being handled in the IG after the core-page rewrite.
- FHIRI page `78677754` ("FHIR Infrastructure Minutes CC 20200323") references FHIR-24867 and assigns it to CDS for review, matching the later safety paragraph addition.
- FHIRI page `234784975` ("FHIR Infrastructure Minutes WGM 202405 - Dallas") references FHIR-44047 as a broad punctuation fix; this is context only for the page-specific comma edit.

## Timeline

| Date | Event type | Evidence | Notes |
|---:|---|---|---|
| 2019-09-17 | Jira created | `FHIR-24619` | RequestGroup rename request |
| 2019-10-09 | Jira vote/resolution | `FHIR-24619` | Persuasive with Modification; RequestGroup -> RequestOrchestration |
| 2020-03-23 | Confluence meeting | FHIRI page `78677754` | FHIR-24867 assigned to CDS |
| 2020-04-22 | Jira vote | `FHIR-24867` | Safety-checklist language and links approved |
| 2022-08-24 | Source commit | `46bea37a00e63d1ace04a5f322614c6d0815f500` | Page text updated to RequestOrchestration |
| 2023-03-12 | Source commit | `d0cd856afd919b36f213916cc1e9af5c7b0679e8` | Safety paragraph added |
| 2024-09-25 | Jira created/resolved | `FHIR-48393` | Core profile removals approved |
| 2024-10-03 | Zulip discussion | `#fmg > FHIR Core Profiles proposal` | CDS/CQI profile-removal vote and unresolved CDS Hooks IG home discussed |
| 2025-03-18 | Source commits | `145fd780...`, `d909aeac...`, `571498e...` | Deprecated CDS Hooks hook/indicator and profile-removal references updated |
| 2025-05-21 | Confluence meeting | CDS page `345543948` | CDS Hooks profile location discussed; Using CDS Hooks/Clinical Reasoning IG suggested |
| 2025-10-01 | Confluence meetings | CDS page `391187341`; FMG page `391644145` | New IG proposal approved by CDS and FMG |
| 2025-10-08 | Jira created/resolved | `FHIR-53085` | Page-content move and Informative status approved |
| 2025-10-15 | Jira vote | `FHIR-53085` | Jeff Brown/Gail Winters: 14-0-0 |
| 2025-11-01 | Source commit | `f87291cc3767a47e7de479803eb717af0ae4b7de` | Main page rewrite |
| 2025-11-01 | Source merge | `8a448f61f25b04d6dae7fff0b7ec082ae8ca833d` | Informative status plus R6 status-table format |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | FHIR-44047 punctuation edit |
| 2025-11-04 | GitHub PR merge | `HL7/fhir#3916` merged 2025-11-04T15:00:27Z | FHIR-53085 cleanup PR, but did not touch this page |
| 2025-11-04 | IG commit | `61bbc5e8933a1eed0012f8efe7b6627172a687d8` | FHIR-53085-related ConceptMap move/update in new IG |
| 2025-11-04 | Zulip discussion | `#committers > PR Reviews` | Confirms moved CDS Hooks mapping and CI-build IG URL |
| 2025-11-05 | Confluence meeting | CDS page `404096186` | Follow-up on moved ConceptMap in new IG |
| 2025-12-22 | Jira created | `FHIR-53713` | Later context-only issue about GuidanceResponse/card.source in the moved IG |

## Evidence log

- Page boundary:
  - `test -f "fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/clinicalreasoning-cds-on-fhir.html" && echo "old exists"`
  - `test -f "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-cds-on-fhir.html" && echo "new exists"`
  - `wc -l` showed 306 old lines and 47 new lines.
- Direct diff:
  - `git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26" "5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/clinicalreasoning-cds-on-fhir.html"`
  - Established wholesale removal of old examples/mapping tables and new concise `$apply`/CDS Hooks service text.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/clinicalreasoning-cds-on-fhir.html"`
  - `git show --stat --patch <commit> -- "source/clinicalreasoning-cds-on-fhir.html"` for all 13 page-touching commits.
  - `git blame -L 13,44 -- "source/clinicalreasoning-cds-on-fhir.html"` showed FHIR-53085 owning most new text and FHIR-44047 owning the `i.e.,` punctuation edit.
- Jira:
  - `bun run jira:search snapshot FHIR-24619`
  - `bun run jira:search snapshot FHIR-24867`
  - `bun run jira:search snapshot FHIR-44751`
  - `bun run jira:search snapshot FHIR-44752`
  - `bun run jira:search snapshot FHIR-48393`
  - `bun run jira:search snapshot FHIR-53085`
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search fts '"Using FHIR Clinical Reasoning with CDS Hooks"' --limit 10` found context-only `FHIR-53713`, which was then snapshotted.
  - `bun run jira:search fts '"Activity Flow" "PlanDefinition" "$apply"' --limit 10` found context-only CPG issues `FHIR-46314` and `FHIR-45999`.
- GitHub/PR:
  - `gh pr view 3916 --repo HL7/fhir --json title,body,mergedAt,author,headRefName,state,url,commits` established PR metadata and merge time.
  - `gh pr diff 3916 --repo HL7/fhir --name-only` established PR 3916 did not touch `source/clinicalreasoning-cds-on-fhir.html`.
  - `gh api repos/HL7/cds-hooks-clinical-reasoning/commits/61bbc5e8933a1eed0012f8efe7b6627172a687d8` established the linked IG commit touched `input/resources/conceptmap/conceptmap-cdshooks-indicator.xml`.
- Zulip:
  - Initial unquoted `bun run zulip:search fts FHIR-xxxxx` attempts failed for issue keys because FTS parsed the hyphen as an operator; quoted retries were used.
  - `bun run zulip:search fts '"FHIR-53085"' --limit 20` found `#committers > PR Reviews`; snapshot command above.
  - `bun run zulip:search fts '"FHIR-48393"' --limit 20` found `#fmg > FHIR Core Profiles proposal`; snapshot command above.
  - Exact phrase searches for the new IG title and page-move language found no additional human rationale beyond the committers PR review thread.
- Confluence:
  - `bun run confluence:search refs jira FHIR-48393` and `bun run confluence:search fts "FHIR-48393" --limit 10` found CDS page `345543948`.
  - `bun run confluence:search fts '"Using FHIR Clinical Reasoning with CDS Hooks"' --limit 20` found CDS page `391187341` and FMG page `391644145`.
  - `bun run confluence:search fts '"cds-hooks-clinical-reasoning"' --limit 20` found CDS page `404096186`.
  - `bun run confluence:search refs jira FHIR-24867` found FHIRI page `78677754`; `bun run confluence:search refs jira FHIR-44047` found FHIRI page `234784975`.
- Current page and link checks:
  - Full newer page read via `view` for `source/clinicalreasoning-cds-on-fhir.html:1-47`.
  - `curl -L -s -o /dev/null -w '%{http_code} %{url_effective}\n'` for current external links showed `http://hl7.org/fhir/uv/cpg/activityflow.html` -> 200, `http://cds-hooks.hl7.org` -> 200, and `http://hl7.org/fhir/uv/cds-hooks-clinical-reasoning` -> 404.
  - URL variants for `hl7.org/fhir/uv/cds-hooks-clinical-reasoning` with `https`, trailing slash, and `history.html` also returned 404.
  - `https://build.fhir.org/ig/HL7/cds-hooks-clinical-reasoning/` returned 200.

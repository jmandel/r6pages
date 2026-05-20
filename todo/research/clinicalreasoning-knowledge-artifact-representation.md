# clinicalreasoning-knowledge-artifact-representation research appendix

## Scope and coverage

- Page path: `source/clinicalreasoning-knowledge-artifact-representation.html`.
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Page boundary: confirmed present in both trees.
- New page read end-to-end: yes, 770 lines (`source/clinicalreasoning-knowledge-artifact-representation.html:1-770`).
- Source history: 15 commits touched the page between the old and new commits.
- Explicit Jira keys found in commit messages/patch context: `FHIR-30204`, `FHIR-21005`, `FHIR-21220`, `FHIR-24619`, `FHIR-25737`, `FHIR-53083`, `FHIR-30209`, `FHIR-30433`, `FHIR-44047`.
- Community searches: Jira snapshots for all explicit keys; Jira phrase searches for page/topic and distinctive changed phrases; Zulip exact-key and phrase searches plus snapshots for the linked `Referencing an interaction` and `Rename RequestGroup to RequestOrchestration` threads; Confluence refs/FTS for explicit keys and phrase searches plus snapshots for selected minutes.
- Caveats: initial unquoted Zulip FTS searches for hyphenated Jira keys failed because FTS parsed the numeric suffix as a column; quoted key searches were rerun and found no direct Zulip hits for `FHIR-53083`, `FHIR-30209`, or `FHIR-30433`. No direct Zulip or Confluence rationale was found for the 2025 `FHIR-53083` page rewrite beyond the Jira and PR.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New page header/status | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-representation.html:13` | Page is now Informative and uses the newer page-status table. |
| Source | Metadata table | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-representation.html:74-102` | Shows expanded/updated metadata guidance. |
| Source | Added update-action example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-representation.html:252-277` | Implements `FHIR-30209`; contains an apparent `<langage>` typo. |
| Source | Automated action paragraph | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-representation.html:279` | Implements `FHIR-30433`, but does not mention the REST interaction URL/code-system detail in the Jira resolution. |
| Source | Guideline row/table defect | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-representation.html:345-357` | The table has three headers, but the added Guideline row has only two cells. |
| Source | Guideline section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-representation.html:713-766` | New FHIR-53083 content linking to the CPG IG. |
| Commit | `bc30255627a58b5e899f1afd7a087806ab48ac23` | https://github.com/HL7/fhir/commit/bc30255627a58b5e899f1afd7a087806ab48ac23 | Removes CQF Questionnaire details and points documentation templates to SDC (`FHIR-30204`, `FHIR-21005`). |
| Commit | `46bea37a00e63d1ace04a5f322614c6d0815f500` | https://github.com/HL7/fhir/commit/46bea37a00e63d1ace04a5f322614c6d0815f500 | Renames example `RequestGroup` to `RequestOrchestration` (`FHIR-24619`). |
| Commit | `54830d2febad78c584b8fde82d53885061dea26f` | https://github.com/HL7/fhir/commit/54830d2febad78c584b8fde82d53885061dea26f | Changes relative canonical example references to absolute URLs (`FHIR-25737`). |
| Commit | `78bdf597e0749e52efa7984e9f9d90a41fdb3616` | https://github.com/HL7/fhir/commit/78bdf597e0749e52efa7984e9f9d90a41fdb3616 | Main 2025 page rewrite and status change (`FHIR-53083`). |
| Commit | `5369f00212df3db568bacd32d406a0be2d2a58ad` | https://github.com/HL7/fhir/commit/5369f00212df3db568bacd32d406a0be2d2a58ad | Adds update example (`FHIR-30209`). |
| Commit | `bedab38b5ca162114c3b60501fd84a2da9945692` | https://github.com/HL7/fhir/commit/bedab38b5ca162114c3b60501fd84a2da9945692 | Adds automated action paragraph (`FHIR-30433`). |
| Commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Editorial e.g./i.e. punctuation pass (`FHIR-44047`). |
| PR | HL7/fhir#3914 | https://github.com/HL7/fhir/pull/3914 | Merged 2025-11-02; contains commits for `FHIR-53083`, `FHIR-30209`, and `FHIR-30433`. |
| PR | HL7/fhir#2236 | https://github.com/HL7/fhir/pull/2236 | Merged 2022-08-25; RequestGroup rename. |
| PR | HL7/fhir#2879 | https://github.com/HL7/fhir/pull/2879 | Merged 2023-03-20; canonical URL example corrections. |
| Jira | `FHIR-53083` | https://jira.hl7.org/browse/FHIR-53083; reopen with `bun run jira:search snapshot FHIR-53083` | Formal request to add relevant IG references and make the page Informative. |
| Jira | `FHIR-30209` | https://jira.hl7.org/browse/FHIR-30209; reopen with `bun run jira:search snapshot FHIR-30209` | Resolution asked for an update-existing-resource example, specifically updating medication on a prescription. |
| Jira | `FHIR-30433` | https://jira.hl7.org/browse/FHIR-30433; reopen with `bun run jira:search snapshot FHIR-30433` | Resolution says code-system URL + code should document REST interactions in PlanDefinition. |
| Zulip | `#IG creation > Referencing an interaction` | https://chat.fhir.org/#narrow/stream/IG%20creation/topic/Referencing%20an%20interaction; reopen with `bun run zulip:search snapshot "IG creation" "Referencing an interaction"` | Original `FHIR-30433` question about how to reference `Patient` create/update REST interactions from PlanDefinition. |
| Zulip | `#implementers > Rename RequestGroup to RequestOrchestration` | https://chat.fhir.org/#narrow/stream/implementers/topic/Rename%20RequestGroup%20to%20RequestOrchestration; reopen with `bun run zulip:search snapshot implementers "Rename RequestGroup to RequestOrchestration"` | Rationale and concerns behind `FHIR-24619`. |
| Confluence | FHIRI Minutes CC 20210118 | https://confluence.hl7.org/spaces/FHIRI/pages/97478278/FHIR+Infrastructure+Minutes+CC+20210118; reopen with `bun run confluence:search snapshot 97478278` | Records `FHIR-30433`: "Will document this in PlanDefinition" and reassignment to CDS. |
| Confluence | FHIR SDC Minutes CC 20210107 | https://confluence.hl7.org/spaces/FHIRI/pages/97475682/FHIR+SDC+Minutes+CC+20210107; reopen with `bun run confluence:search snapshot 97475682` | Records `FHIR-30204` transfer to CDS. |
| Confluence | CDS 2019-10-09 agenda/minutes | https://confluence.hl7.org/spaces/CDS/pages/66924040/2019-10-09+Meeting+Agenda; reopen with `bun run confluence:search snapshot 66924040` | Records the `FHIR-24619` motion, 12-0-1. |
| Confluence | FHIRI WGM 202405 Dallas | https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas; reopen with `bun run confluence:search snapshot 234784975` | Records `FHIR-44047` as "will fix". |

## Change summary

### Page metadata and standards status - metadata/template/navigation

- The page's standards status changed from Trial Use in R4 to Informative in R6 ballot4. The R6 page also uses the newer `colsi` table with "Responsible Owner" and no FMM cell (`source/.../clinicalreasoning-knowledge-artifact-representation.html:13`).
- This is driven by `FHIR-53083` plus R6 template/status updates and merge reconciliation. It is substantive for how readers interpret the page's authority, but not a new clinical reasoning conformance rule.

### Metadata guidance refreshed - semantic guidance

- The metadata table was significantly rewritten. It adds/updates `date`, `jurisdiction`, `copyrightLabel`, and author/editor/reviewer/endorser rows, changes example links from generated `.xml.html` pages to `.html`, and revises descriptions (`source/.../clinicalreasoning-knowledge-artifact-representation.html:74-102`).
- The documentation example changed from topic coding to age `useContext`, with the age range changed from 2-18 to 3-18 (`source/.../clinicalreasoning-knowledge-artifact-representation.html:109-127`).
- The page now links out to supporting documentation and CQL-with-FHIR guidance (`source/.../clinicalreasoning-knowledge-artifact-representation.html:131`, `:405`).

### CQF Questionnaire removal - semantic guidance

- R4 included CQF-Questionnaire discussion and a PHQ-9 expression example. R6 replaces that detail with a pointer to the Structured Data Capture IG (`source/.../clinicalreasoning-knowledge-artifact-representation.html:675`).
- This follows `FHIR-30204` and `FHIR-21005`. Jira resolution explicitly favored removing CQF/CQIF Questionnaire guidance in favor of SDC.

### RequestGroup to RequestOrchestration - terminology/example change

- The CarePlan result example now contains `RequestOrchestration` instead of `RequestGroup` (`source/.../clinicalreasoning-knowledge-artifact-representation.html:457-492`).
- This aligns with `FHIR-24619`, a non-compatible R5 rename. The Zulip thread and CDS agenda show the renaming was intentional and discussed.

### Canonical example references corrected - example change

- Relative canonical references such as `Library/example` and `Library/cbp-logic` changed to absolute `http://example.org/...` URLs (`source/.../clinicalreasoning-knowledge-artifact-representation.html:387-390`, `:432`, `:689`).
- This follows `FHIR-25737` and PR #2879.

### Update and automated execution guidance - substantive/semantic guidance and examples

- `FHIR-30209` added an example for an action with `type=update` and dynamic values (`source/.../clinicalreasoning-knowledge-artifact-representation.html:252-277`).
- `FHIR-30433` added a paragraph saying create/update/remove actions returned by `PlanDefinition/$apply` are proposals and may be turned into RESTful API calls by the client (`source/.../clinicalreasoning-knowledge-artifact-representation.html:279`).
- These are the most semantically significant page additions. Two action-file findings call out possible intent/implementation mismatches and a typo in the added example.

### New Guideline material and IG references - semantic guidance

- `FHIR-53083` adds a Guideline row to the artifact-type table and a new Guideline section with an ImplementationGuide example and a link to the Clinical Guidelines IG (`source/.../clinicalreasoning-knowledge-artifact-representation.html:356`, `:713-766`).
- A rendering defect was introduced: the table has three columns, but the Guideline row has only two cells.

### Punctuation and QA fixes - editorial only/mechanical

- `FHIR-44047` corrected several `e.g.`/`i.e.` punctuation cases on this page.
- QA commits corrected "Chalmydia" to "Chlamydia" and fixed a `workflow` link to `workflow.html`.
- Template commits removed a wrapping `div` and adjusted status table classes.

## Source history

| Commit | Date | Label | Page-specific effect |
|---|---:|---|---|
| `bc30255627a58b5e899f1afd7a087806ab48ac23` | 2021-03-30 | `J#30204, J#21005` | Removed CQF Questionnaire profile/example discussion; pointed documentation templates to SDC. |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Removed wrapping `<div class="col-12">`/closing `</div>`; mechanical template churn. |
| `606d18ae40e640ba3011e0d580e062db30168744` | 2021-09-21 | `J#21220` | Replaced `contributor` metadata row with `author`, `editor`, `reviewer`, `endorser`. |
| `46bea37a00e63d1ace04a5f322614c6d0815f500` | 2022-08-24 | `J#24619` | Renamed example `RequestGroup` to `RequestOrchestration`. |
| `c3da43d4d906bc8ef71d67923be5e5db976665be` | 2022-09-05 | status code tidy | Changed page status table class from `cols` to `colstu`; mechanical metadata. |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | QA related changes | Fixed "Chalmydia" typos in examples. |
| `54830d2febad78c584b8fde82d53885061dea26f` | 2023-03-19 | `J#25737` | Corrected relative canonical example references to absolute URLs. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Changed status table to `colsi`/Responsible Owner while still Trial Use. |
| `78bdf597e0749e52efa7984e9f9d90a41fdb3616` | 2025-11-01 | `FHIR-53083` | Main page rewrite: status to Informative, metadata refresh, added IG links, added Guideline row/section. |
| `5369f00212df3db568bacd32d406a0be2d2a58ad` | 2025-11-01 | `FHIR-30209` | Added update-action example; introduced `<langage>` typo. |
| `bedab38b5ca162114c3b60501fd84a2da9945692` | 2025-11-01 | `FHIR-30433` | Added paragraph about clients applying `PlanDefinition/$apply` proposals as RESTful API calls. |
| `8a448f61f25b04d6dae7fff0b7ec082ae8ca833d` | 2025-11-01 | merge | Reconciled branch status table: Informative + `colsi`. |
| `cb22716bf925a08537b569c8efb1a24cae496f06` | 2025-11-01 | QA broken link | Fixed new Guideline section link from `workflow` to `workflow.html`. |
| `7f8b7fc5e094105b5ce9b5a627c32293e8a33085` | 2025-11-01 | merge | Merge of the CDS branch; no additional reviewed semantic change beyond merge resolution. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Editorial punctuation corrections for `e.g.,`/`i.e.,`. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-53083` - "Update the knowledge artifact representation topic". Status Applied; resolution says to add references to relevant implementation guides for each use case and update page status to Informative. This matches the broad page rewrite and status change, though no direct Zulip/Confluence discussion was found.
- `FHIR-30209` - "How to use a Activity/PlanDefinition to update an existing resource". Status Applied; resolution: "Agreed, add an example that illustrates how to update an existing resource using an ActivityDefinition/PlanDefinition. Specifically, model a request to update the medication on a prescription." The page adds an update example, but it updates a referral `ServiceRequest.status` instead of medication on a prescription; see action finding H-001.
- `FHIR-30433` - "Need a URL for referencing REST interactions". Status Applied; resolution says the expectation of using the code-system URL + code to refer to RESTful interactions should be documented in PlanDefinition. The page change instead says clients may turn proposals into RESTful API calls; see action finding H-002.
- `FHIR-30204` and `FHIR-21005` - both support removing CQF/CQIF Questionnaire guidance in favor of SDC. The page replacement matches this intent.
- `FHIR-21220` - explains removal of Contributor as a metadata type and use of dedicated publisher/author/editor/reviewer/etc. The page metadata table update is consistent.
- `FHIR-24619` - resolves RequestGroup rename to RequestOrchestration. Page example alignment is consistent.
- `FHIR-25737` - resolves to correct examples to use absolute canonical URLs. Page example changes are consistent.
- `FHIR-44047` - broad correction for `e.g.`/`i.e.` punctuation. Jira snapshot still showed "Resolved - change required" rather than Applied/Published, but a page-specific commit applies several corrections here. This is workflow context, not an action-file issue.

### Other Jira hits

- Jira phrase search for `"knowledge artifact representation"` returned `FHIR-53083` plus older/context-only hits such as `FHIR-11520` and unrelated IG/core issues. Only `FHIR-53083` directly explains the R6 page rewrite.
- Exact Jira phrase searches for `"computable representation of a narrative clinical guideline"`, `"Update status of the referral to completed"`, and `"PlanDefinition/$apply operation" "proposal resource"` found no additional explanatory issue beyond the explicit keys.

### Context-only Jira hits not driving action

- Older context hits from broad `knowledge artifact representation` search were not elevated because they do not explain the reviewed R4 -> R6 page diff.

## Zulip evidence

- `#IG creation > Referencing an interaction` (2021-01-07) is linked from `FHIR-30433`. Bryn Rhodes asked how to represent a PlanDefinition action that posts a resource instance to a server, including whether `http://hl7.org/fhir/restful-interaction#create` can express `Patient` create vs generic create. This directly supports the Jira resolution's focus on REST interaction identifiers.
- `#implementers > Rename RequestGroup to RequestOrchestration` (2019-10-03 to 2019-10-04) is linked from `FHIR-24619`. It records support and concerns around the rename, including implementer discoverability and whether `RequestGroup` was being misread as a simple grouping mechanism.
- Exact quoted key searches for `FHIR-53083`, `FHIR-30209`, and `FHIR-30433` found no direct messages in the local Zulip mirror.
- Phrase search for `"knowledge artifact representation"` found background/context-only threads (for example a 2020 questionnaire thread pointing at the R4 page and a 2025 fhirpath thread quoting the page), but no direct rationale for the R6 `FHIR-53083` rewrite.

## Confluence evidence

- FHIRI Minutes CC 20210118 (`97478278`) records `FHIR-30433`: "Will document this in PlanDefinition" and "Reassigned to CDS." This supports the formal direction that the change should document PlanDefinition handling of REST interactions.
- FHIR SDC Minutes CC 20210107 (`97475682`) records `FHIR-30204` transferred to CDS. This supports the source commit that removed CQF Questionnaire details and pointed to SDC.
- CDS 2019-10-02 and 2019-10-09 agendas/minutes (`66922984`, `66924040`) record `FHIR-24619`, the Zulip discussion, and the 12-0-1 approval of "Rename RequestGroup to RequestOrchestration."
- FHIRI WGM 202405 Dallas (`234784975`) records `FHIR-44047` as "will fix." This supports the later punctuation cleanup as a broad editorial correction.
- Confluence searches found no direct `FHIR-53083` or `FHIR-30209` entries.

## Timeline

| Date | Event type | Evidence |
|---:|---|---|
| 2019-04-26 | Jira created | `FHIR-21005` created to withdraw CQIF Questionnaire. |
| 2019-07-24 | Jira vote/resolution | `FHIR-21005` resolved persuasive, 12-0-0. |
| 2019-09-09 | Jira vote/resolution | `FHIR-21220` resolved Not Persuasive with Modification; metadata type removal direction. |
| 2019-10-03/04 | Zulip discussion | `#implementers > Rename RequestGroup to RequestOrchestration`. |
| 2019-10-09 | WG vote | CDS agenda/minutes for `FHIR-24619`, 12-0-1. |
| 2020-01-30 | Jira created | `FHIR-25737` created for relative canonical URLs in examples. |
| 2020-04-24 | Jira vote | `FHIR-25737` vote 28-0-1. |
| 2021-01-04 | Jira created | `FHIR-30204` created to eliminate CQF Questionnaire. |
| 2021-01-07 | Zulip/discussion and SDC minutes | `FHIR-30433` Zulip question; SDC minutes transfer `FHIR-30204` to CDS. |
| 2021-01-18 | FHIRI minutes | `FHIR-30433` documented as "Will document this in PlanDefinition"; reassigned to CDS. |
| 2021-03-24 | Jira votes | `FHIR-30204` and `FHIR-30209` block vote dates. |
| 2021-03-30 | Source commit | `bc30255627a58b5e899f1afd7a087806ab48ac23` removes CQF Questionnaire text. |
| 2022-08-24/25 | Source/PR | `46bea37a00e63d1ace04a5f322614c6d0815f500`; PR #2236 merged. |
| 2023-03-19/20 | Source/PR | `54830d2febad78c584b8fde82d53885061dea26f`; PR #2879 merged. |
| 2024-05-23 | WG/Jira | FHIRI minutes and `FHIR-44047` resolution say punctuation should be fixed. |
| 2025-10-08/15 | Jira created/resolved/voted | `FHIR-53083` created/resolved and later vote recorded. |
| 2025-11-01 | Source commits | `FHIR-53083`, `FHIR-30209`, and `FHIR-30433` commits land on the page. |
| 2025-11-02 | PR merge | PR #3914 merged at 2025-11-02T15:31:34Z. |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` punctuation corrections. |
| 2026 publication boundary | New reviewed version | R6 ballot4 tree contains all above page changes. |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/clinicalreasoning-knowledge-artifact-representation.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-knowledge-artifact-representation.html" && echo "new exists"`
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalreasoning-knowledge-artifact-representation.html`
- Source log:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalreasoning-knowledge-artifact-representation.html`
- Commit inspection:
  - `git -C <new-tree> --no-pager show --stat --patch <commit> -- source/clinicalreasoning-knowledge-artifact-representation.html`
- Jira:
  - Snapshotted all explicit keys with `bun run jira:search snapshot FHIR-XXXXX`.
  - Phrase searches included `"knowledge artifact representation"`, `"Update the knowledge artifact representation topic"`, `"computable representation of a narrative clinical guideline"`, `"Update status of the referral to completed"`, and `"PlanDefinition/$apply operation" "proposal resource"`.
- Zulip:
  - Quoted exact-key searches for `FHIR-53083`, `FHIR-30209`, `FHIR-30433`; no hits.
  - Phrase searches included `"knowledge artifact representation"`, `"Referencing an interaction"`, and `"Rename RequestGroup to RequestOrchestration"`.
  - Snapshots: `bun run zulip:search snapshot "IG creation" "Referencing an interaction"` and `bun run zulip:search snapshot implementers "Rename RequestGroup to RequestOrchestration"`.
- Confluence:
  - `bun run confluence:search refs jira FHIR-XXXXX` and `bun run confluence:search fts FHIR-XXXXX --limit 5` for explicit keys.
  - Snapshots: `97478278`, `97475682`, `234784975`, `66922984`, `66924040`, and `91991759`.
- Full current page read:
  - `wc -l` reported 770 lines.
  - Read line ranges `1-200`, `201-400`, `401-600`, and `601-770`.
- Current-page defect searches:
  - `rg -n "langage|identifes|doument|mazimum|<activity>|Guideline</a></td><td>A computable" <new-page>`
  - `rg -n "restful-interaction|RESTful API calls directly|participant type|proposal resource|OperationDefinition" <new-tree>/source ...`
  - Pre-existing typos/malformed examples such as `identifes`, `mazimum`, `doument`, and the malformed CarePlan `&lt;activity&gt;` closing tag were noticed but not elevated to the action file because they predate the reviewed changes and are lower signal than the newly introduced/action-linked findings.

# clinicalreasoning-evidence-and-statistics research appendix

## Scope and coverage

- Page path: `source/clinicalreasoning-evidence-and-statistics.html`
- Compared versions: R4 4.0.1 (`0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`) to R6 ballot4 6.0.0-ballot4 (`5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`).
- Page boundary: file exists in both local source trees.
- Newer page was read end-to-end: 130 lines at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-evidence-and-statistics.html:1-130`.
- Direct path history between the two commits has 14 commits touching this page.
- Explicit Jira-style commit references found: `FHIR-29320`, `FHIR-31866`, `FHIR-49687`, `FHIR-53004`.
- Jira snapshots were reviewed for all explicit keys. Zulip and Confluence were searched by explicit keys plus distinctive changed phrases.
- Important caveat: the revised copy for `FHIR-53004` points to a Google document; I did not use that external document as evidence. `FHIR-53004` itself is enough to show the formal resolution included "update page status to informative."
- Important caveat: no Zulip or Confluence hit was found for `FHIR-53004`; the status mismatch finding rests on Jira resolution, source history, and the current source page.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source page | R4 source | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/clinicalreasoning-evidence-and-statistics.html` | Older comparison page. |
| Source page | R6 ballot4 source | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-evidence-and-statistics.html:1-130` | Current page reviewed end-to-end. |
| Source line | Current standards status | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-evidence-and-statistics.html:13` | Current page says `Standards Status: Normative`. |
| Jira | FHIR-53004 | `https://jira.hl7.org/browse/FHIR-53004`; reopen locally with `bun run jira:search snapshot FHIR-53004` | Formal R6 page revision; resolution says to update content and page status to informative. |
| Commit | `d950c79cfae33e778c2d71cc745684fd3e177d70` | `https://github.com/HL7/fhir/commit/d950c79cfae33e778c2d71cc745684fd3e177d70` | Applies `FHIR-53004` content rewrite but leaves status as Trial Use. |
| PR | PR 3779 | `https://github.com/HL7/fhir/pull/3779` | Merged implementation for `FHIR-53004`. |
| Commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | `https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Broad R6 normative-status commit changes the table class/owner label but still leaves this page Trial Use. |
| Commit | `7466cfc63cd0b162497a42c80a67480eed86c75a` | `https://github.com/HL7/fhir/commit/7466cfc63cd0b162497a42c80a67480eed86c75a` | Broad "sort out trial-use notes" commit changes this page from Trial Use to Normative. |
| Jira | FHIR-49687 | `https://jira.hl7.org/browse/FHIR-49687`; `bun run jira:search snapshot FHIR-49687` | R6 prep clarification behind the EvidenceVariable, Group, PICO role-code, EvidenceReport/Composition changes. |
| PR | PR 3310 | `https://github.com/HL7/fhir/pull/3310` | Merged implementation for `FHIR-49687`; PR body mirrors the Jira requested wording. |
| Jira | FHIR-31866 | `https://jira.hl7.org/browse/FHIR-31866`; `bun run jira:search snapshot FHIR-31866` | Formal decision to reincorporate Statistic into Evidence and remove Statistic/OrderedDistribution datatypes. |
| PR | PR 1323 / 1324 | `https://github.com/HL7/fhir/pull/1323`, `https://github.com/HL7/fhir/pull/1324` | Merged OrderedDistribution and Statistic removals. |
| Zulip | FHIR-31866 discussion | `https://chat.fhir.org/#narrow/stream/implementers/topic/Do%20we%20need%20Observation.valueStatistics`; `bun run zulip:search snapshot implementers "Do we need Observation.valueStatistics"` | OO-facing question asking whether Observation needed a Statistic value before removing the datatype. |
| Confluence | 2021-06-23 CDS agenda | `https://confluence.hl7.org/spaces/CDS/pages/116458944/2021-06-23+Meeting+Agenda`; `bun run confluence:search snapshot 116458944` | Records approval of the `FHIR-31866` proposed resolution. |
| Confluence | 2021-06-03 OO minutes | `https://confluence.hl7.org/spaces/OO/pages/113677008/2021-06-03+Main`; `bun run confluence:search snapshot 113677008` | OO discussion of whether Statistic should move into Evidence and whether Observation needed a reference. |
| Jira | FHIR-29320 | `https://jira.hl7.org/browse/FHIR-29320`; `bun run jira:search snapshot FHIR-29320` | Original R5 Clinical Reasoning/Evidence page expansion. |
| PR | PR 1037 | `https://github.com/HL7/fhir/pull/1037` | Merged implementation for `FHIR-29320`. |
| Confluence | 2020-10-21 CDS agenda | `https://confluence.hl7.org/spaces/CDS/pages/92001937/2020-10-21+Meeting+Agenda`; `bun run confluence:search snapshot 92001937` | Records approval of Evidence/Clinical Reasoning descriptive-content changes under `FHIR-29320`. |

## Change summary

### Status and ownership metadata — substantive/normative metadata

- R4 page header identified CQI as work group, maturity level 2, and Trial Use status.
- R6 ballot4 identifies CDS as responsible owner and marks the page `Normative` with no FMM cell (`source/clinicalreasoning-evidence-and-statistics.html:13`).
- This is the only actionable concern found: `FHIR-53004` resolved the 2025 page rewrite with "update page status to informative," but final R6 ballot4 source says `Normative`.

### Introduction, scope, and EBMonFHIR framing — semantic guidance

- The older "reporting of biomedical evidence" scope paragraph was split/reframed into a new `Biomedical Evidence` subsection plus a shorter scope statement: "The domain of biomedical evidence includes original research, secondary research, and evidence synthesis" (`:21-29`).
- Audience now explicitly includes evidence generation/research (`:31-36`).
- EBMonFHIR is promoted into its own heading with purpose and participation text, including CDS sponsorship and BRR/CQI co-sponsorship (`:38-49`).

### Resources and modeling guidance — substantive semantic guidance

- Evidence is described in terms of population, evidence variables, statistics, and certainty (`:54-63`).
- `Evidence.variableDefinition`, `Evidence.statistic`, and `Evidence.certainty` are now linked and described directly on the page (`:59-63`).
- EvidenceVariable text now emphasizes precise definitions, measured/processed/stored data values, CodeableConcept and Group-based definitions, and dataset interpretation (`:65-68`).
- Group text now distinguishes enumerated, definitional, and conceptual groups, and explains conceptual cohort definitions (`:70-75`).
- Citation is described as moved from FHIR core to the EBMonFHIR IG (`:77-80`).
- ArtifactAssessment, ResearchStudy, and Composition are added or expanded as evidence-related resources (`:82-99`).

### Removed resources/datatypes — substantive semantic guidance

- R4 placeholders for `Statistic` and `OrderedDistribution` disappear by R6. This aligns with `FHIR-31866`, whose resolution reincorporated Statistic into Evidence and removed Statistic and OrderedDistribution datatypes.
- EvidenceReport is no longer listed as a current resource; text now says prior FHIR EvidenceReport was replaced by an EvidenceReport Profile of Composition in the EBMonFHIR IG (`:99`). This aligns with `FHIR-49687` resolution.

### PICO / evidence variable-role text — semantic guidance

- The old standalone `PICO vs. Statistically-defined evidence variables` section is folded into the Evidence Resource / variableDefinition text (`:59`).
- Role-code guidance changed from the older `population` or `subpopulation`, `referenceExposure`, and `measuredVariable` wording to: Population = `population`, Intervention and Comparator = `exposure`, Outcome = `outcome`. This matches `FHIR-49687` description and PR 3310.

### Use cases and implementation guide — example/guidance change

- R4 placeholder use-case subsections with `...` were replaced by a concrete list of evidence-reporting use cases (`:101-112`).
- A new Implementation Guide section describes the EBMonFHIR IG scope and use (`:114-121`).

### Link/template churn — metadata/template/navigation

- Template changes removed the old wrapper div, changed table classes, removed FMM from the header, and adjusted responsible-owner wording.
- `80eecb02fa2e33912305596384aaf6eca318d670` changed the EBMonFHIR IG link from a hardcoded `build.fhir.org` URL to `[%ig ebm%]`. Later `71567db3ee039ac6977be5f96a7e013896569a36` changed the Citation link to `https://build.fhir.org/ig/HL7/ebm/StructureDefinition-Citation.html` after Citation was removed from core. Similar Citation links exist in several other R6 source files, so I did not treat this alone as actionable.
- The page still contains `<p><ul>...</ul></p>` around the use-case list (`:104-112`), inherited from earlier versions. This is invalid HTML structure but not escalated because it appears longstanding and I did not find evidence of a reader-facing rendering break.

## Source history

| Date | Commit | PR | Jira / reference | Page-specific effect |
|---|---|---|---|---|
| 2020-10-22 | `f34463aca6e13fbc0b9d60b9789b9576ea6b586e` | PR 1037 | `FHIR-29320` | Replaces placeholders with substantive resource descriptions; changes WG from CQI to CDS and maturity 2 to 1; adds Citation/EvidenceReport and use-case list. |
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | not checked | none | Mechanical HTML template cleanup: removes `div class="col-12"` wrapper. |
| 2021-07-21 | `8454f5094b892669faa0b194a04a9dc695aebbb5` | PR 1323 | `FHIR-31866` | Removes OrderedDistribution paragraph. |
| 2021-07-21 | `7a66857e48c8dac76aaff07350a54f4d8133637e` | PR 1324 | `FHIR-31866` | Removes Statistic paragraph. |
| 2022-09-05 | `c3da43d4d906bc8ef71d67923be5e5db976665be` | not checked | none | Mechanical status/table class change from `cols` to `colstu`; status remains Trial Use. |
| 2023-03-10 | `150e7a65642e6aca3e18c3b7c1666a8f928fa1c9` | PR 2817 | none found | Updates Evidence/Statistics text: adds evidence generation, EBMonFHIR links, ArtifactAssessment, PICO role-code wording, and participation section. |
| 2023-03-25 | `80eecb02fa2e33912305596384aaf6eca318d670` | PR 2912 | none found | Replaces hardcoded EBMonFHIR build link with `[%ig ebm%]`. |
| 2025-02-20 | `b80d0e579cee85317f93d7e416549a48969803f9` | PR 3310 | `FHIR-49687` | Applies R6 prep summary: EvidenceVariable/Group rewrites, removes EvidenceReport from resource list, changes PICO role-code text, adds Composition section and EvidenceReport Profile sentence. |
| 2025-02-21 | `43ebbec7aed7eb70cbecdb75766cb77a636f8d85` | not checked | none | Editorial compliance change: `may or may not` to `might or might not`. |
| 2025-10-20 | `d950c79cfae33e778c2d71cc745684fd3e177d70` | PR 3779 | `FHIR-53004` | Major R6 rewrite: current section structure, EBMonFHIR participation, ResearchStudy/Composition/IG sections. Leaves page header as Trial Use. |
| 2025-10-20 | `72743e08c1fe81b521c95fe091d72dd3d5648f3f` | not separately checked | none | Editorial IG paragraph wording: "FHIR Resources for..." to "This Implementation Guide...". |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | PR 3901 | none in PR body | Broad R6 normative-status commit; changes header table/owner wording but still leaves this page Trial Use. |
| 2025-11-07 | `71567db3ee039ac6977be5f96a7e013896569a36` | PR 3959 | none in PR body | Broad ballot/remove commit; changes Citation link from local `citation.html` to EBMonFHIR IG build URL. |
| 2025-11-12 | `7466cfc63cd0b162497a42c80a67480eed86c75a` | PR 3974 | none in PR body | Broad "sort out trial-use notes" commit; changes this page status from Trial Use to Normative. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-29320` (`Published`, `Persuasive`, `Non-substantive`, `Clarification`, applied for R5): requested updated Clinical Reasoning / Evidence content and new section 14.7 Evidence and Statistics. Resolution: "Agreed, apply content to the Citation, EvidenceReport, Evidence resources and Clinical Reasoning module content as proposed." This explains the first major expansion from R4 placeholders to resource descriptions.
- `FHIR-31866` (`Published`, `Persuasive`, `Non-compatible`, `Correction`, applied for R5): resolution says to reincorporate Statistic into Evidence and remove Statistic and OrderedDistribution datatypes, applied to R4B and R5. This matches removal of the page's Statistic and OrderedDistribution paragraphs.
- `FHIR-49687` (`Applied`, `Persuasive`, `Non-substantive`, `Clarification`, applied for R6): requested EvidenceVariable/Group rewrites, removing EvidenceReport resource text, changing PICO role-code wording, adding Composition guidance, and adding the EvidenceReport Profile replacement sentence. PR 3310 and commit `b80d0e...` match this closely.
- `FHIR-53004` (`Applied`, `Persuasive`, `Non-substantive`, `Clarification`, applied for R6): description says the page needs updating to match current resources and the EBMonFHIR IG. Resolution says: "Agreed, update content as suggested and update page status to informative." Current source content is updated, but current page status is `Normative` (`:13`).

### Other Jira issues that plausibly explain adjacent changed text

- `FHIR-53085` is not this page, but it is same work group / same October 2025 R6 block-vote context and also says "Update page status to informative" for the CDS-on-FHIR page. Current `clinicalreasoning-cds-on-fhir.html` is Informative. I treated this as context only, not evidence for this page beyond showing that "status to informative" was an active CDS R6 cleanup pattern.

### Context-only Jira hits not used for action

- Searching `"clinicalreasoning-evidence-and-statistics"` found `FHIR-43996` (FHIR-crmi acronym duplication), not relevant to this page diff.
- Searching `"Evidence Based Medicine on FHIR Implementation Guide" "Citation Resource"` found `FHIR-38935` (Composition should support Citations), not a direct explanation of the current page changes.
- Searching `"Evidence and Statistics" "Normative"` found no Jira results.

## Zulip evidence

- `FHIR-31866` appeared in #implementers topic `Do we need Observation.valueStatistics` on 2021-05-27. Hans Buitendijk asked whether Observation needed `valueStatistics` before finalizing the proposal to remove Statistic as a datatype and include it in Evidence. This supports the idea that the removal was checked with OO/Observation concerns.
- No Zulip results were found for `FHIR-29320`, `FHIR-49687`, or `FHIR-53004`.
- No Zulip results were found for exact phrases `"Evidence and Statistics" "informative"` or `"clinicalreasoning-evidence-and-statistics"`.
- Exact changed phrases such as `"Citation Resource was moved from the FHIR specification"`, `"EvidenceReport Resource in prior versions"`, `"domain of biomedical evidence includes original research"`, and `"EBMonFHIR Project, sponsored"` produced no useful Zulip hits.

## Confluence evidence

- `FHIR-29320`: CDS 2020-10-21 agenda (page `92001937`) records review of the EBM-on-FHIR tracker, approval of descriptive content changes for Evidence and Clinical Reasoning content, and approval to include the Evidence/EvidenceReport/Citation/EvidenceVariable/Statistic/OrderedDistribution items in R4B context.
- `FHIR-31866`: CDS 2021-06-23 agenda (page `116458944`) records approval of the proposed resolution to remove OrderedDistribution and Statistic datatypes. CDS 2021-06-30 agenda (page `116461042`) notes Common Metadata Framework processing of the change and a remaining Evidence.statistic.category datatype question. OO 2021-06-03 minutes (page `113677008`) discuss moving Statistic into Evidence and waiting to see whether OO needed a reference from Observation to Evidence.
- `FHIR-49687`: CDS 2025-02-12 agenda (page `308979546`) records a motion to approve the resolution for `FHIR-49687` with vote 19-0-1.
- `FHIR-53004`: no Confluence `refs jira` or FTS results were found.

## Timeline

| Date | Clock | Evidence | Note |
|---|---|---|---|
| 2020-10-20 | Jira created | `FHIR-29320` | Clinical Reasoning / Evidence descriptive content update requested. |
| 2020-10-21 | Work group vote | `FHIR-29320`; Confluence page `92001937` | CDS approval recorded, 20-0-0. |
| 2020-10-22 | Source/PR merge | commit `f34463aca6e...`, PR 1037 | Major first expansion of the page. |
| 2021-04-28 to 2021-06-23 | Jira/WG discussion | `FHIR-31866`; Confluence `116458944`; Zulip topic | Statistic/OrderedDistribution removal discussed with CDS/OO; resolution approved 2021-06-23. |
| 2021-07-21 | Source/PR merge | commits `8454f5094b...`, `7a66857e48...`; PRs 1323, 1324 | OrderedDistribution and Statistic paragraphs removed. |
| 2023-03-10 | Source/PR merge | commit `150e7a6564...`, PR 2817 | Page text substantially refreshed; no Jira key found. |
| 2025-01-28 | Jira created | `FHIR-49687` | R6 prep review suggested summary improvements. |
| 2025-02-12 | Work group vote | `FHIR-49687`; Confluence `308979546` | CDS approved resolution 19-0-1. |
| 2025-02-25 | PR merge / Jira applied | PR 3310; `FHIR-49687` comment | Applied EvidenceVariable/Group/PICO/Composition updates. |
| 2025-09-29 | Jira created | `FHIR-53004` | Newer request to revise page for current resources and EBMonFHIR IG. |
| 2025-10-15 | Work group vote | `FHIR-53004` | Resolution vote 14-0-0; resolution says update page status to informative. |
| 2025-10-27 | PR merge / Jira applied | PR 3779; `FHIR-53004` comment | Content rewrite merged. |
| 2025-10-31 | Source broad status commit | commit `270e0ceb7b...`, PR 3901 | Table/owner changed, page still Trial Use. |
| 2025-11-12/13 | Source/PR broad status commit | commit `7466cfc63c...`, PR 3974 | Page status changed to Normative. |
| R6 ballot4 boundary | Publication boundary | commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` | Final reviewed source has Normative status. |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/clinicalreasoning-evidence-and-statistics.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-evidence-and-statistics.html" && echo "new exists"`
- Reviewed direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalreasoning-evidence-and-statistics.html`
  - Established 72 insertions / 38 deletions and the content/status changes summarized above.
- Reviewed path history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalreasoning-evidence-and-statistics.html`
  - Established 14 commits and explicit Jira references.
- Inspected meaningful commits with `git show --stat --patch`, especially `f34463aca6e...`, `8454f5094b...`, `7a66857e48...`, `150e7a6564...`, `b80d0e579c...`, `d950c79cfa...`, `270e0ceb7b...`, `71567db3ee...`, and `7466cfc63c...`.
- Discovered PR links with:
  - `gh api /repos/HL7/fhir/commits/<sha>/pulls`
  - `gh pr view <number> --repo HL7/fhir --json number,title,url,state,mergedAt,body,comments`
- Jira snapshots:
  - `bun run jira:search snapshot FHIR-29320`
  - `bun run jira:search snapshot FHIR-31866`
  - `bun run jira:search snapshot FHIR-49687`
  - `bun run jira:search snapshot FHIR-53004`
  - Context-only: `bun run jira:search snapshot FHIR-53085`
- Jira FTS searches:
  - `"clinicalreasoning-evidence-and-statistics"` found only context-only `FHIR-43996`.
  - `"Evidence and Statistics" "informative"` found `FHIR-53004`.
  - `"Evidence and Statistics" "Normative"` found no results.
  - `"update page status to informative"` found `FHIR-53004` and context-only `FHIR-53085`.
  - Several exact changed phrases found no Jira hits, except `"Evidence Based Medicine on FHIR Implementation Guide" "Citation Resource"` found context-only `FHIR-38935`.
- Zulip searches:
  - `bun run zulip:search fts "\"FHIR-31866\"" --limit 20` found #implementers `Do we need Observation.valueStatistics`; snapshot saved with `bun run zulip:search snapshot implementers "Do we need Observation.valueStatistics"`.
  - `FHIR-29320`, `FHIR-49687`, `FHIR-53004`, `"Evidence and Statistics" "informative"`, and `"clinicalreasoning-evidence-and-statistics"` found no Zulip results.
- Confluence searches:
  - `bun run confluence:search refs jira FHIR-49687` found page `308979546`; snapshot reviewed.
  - `bun run confluence:search refs jira FHIR-31866` found multiple CDS/OO pages; snapshots reviewed for `116458944`, `116461042`, and `113677008`.
  - `bun run confluence:search refs jira FHIR-29320` found pages `97473817` and `92001937`; snapshot reviewed for `92001937`.
  - `FHIR-53004` had no Confluence refs or FTS results.
- Final page read:
  - `wc -l ".../source/clinicalreasoning-evidence-and-statistics.html"` returned 130.
  - Full file read via `view`, lines `1-130`.

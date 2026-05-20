# clinicalreasoning-topics-definitional-resources research appendix

## Scope and coverage

- Page path: `source/clinicalreasoning-topics-definitional-resources.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Page boundary: present in both source trees.
- New page read end-to-end: yes, 208 lines.
- Source history: 11 commits touched this page between the two commits.
- Explicit Jira keys found in commit messages/patch context: `FHIR-25774`, `FHIR-29209`, `FHIR-53082`, `FHIR-53078`, `FHIR-30209`, `FHIR-37698`, `FHIR-44047`.
- Additional related Jira issues surfaced by targeted phrase search: `FHIR-37565`, `FHIR-53410`.
- Jira/Zulip/Confluence coverage: snapshots were taken for explicit Jira keys and the most relevant related issues/threads/pages. Zulip key searches initially failed when unquoted because FTS parsed the hyphen as an operator; quoted reruns found no direct key hits. Confluence had high-signal hits for `FHIR-29209` and a context page for `FHIR-25774`; no Confluence refs were found for `FHIR-53082`, `FHIR-37698`, or `FHIR-30209`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 page, status header | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-definitional-resources.html:13` | Current page status is Informative. |
| Source | R6 page, Definition pattern and implementer note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-definitional-resources.html:18-41` | Main `FHIR-53082` content additions. |
| Source | Referral example and typo | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-definitional-resources.html:64-98` | Added/updated example explanation; line 94 has `That is should occur`. |
| Source | Medication example paragraph | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-definitional-resources.html:103` | Mentions ActivityDefinition `dosageInstruction`, but the R6 element is `ActivityDefinition.dosage`. |
| Source | Device guidance on current page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-definitional-resources.html:130-134` | Current page says to use `action.typeCanonical`; this appears to be an invalid/underqualified path. |
| Source | Event resource guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-definitional-resources.html:156-159` | Applied `FHIR-29209` Task/focus guidance. |
| Source | EvidenceVariable section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-definitional-resources.html:161-205` | Applied `FHIR-25774`-related EvidenceVariable wording/example. |
| Source | ActivityDefinition participant paths | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/activitydefinition/structuredefinition-ActivityDefinition.xml:1062-1124` | ActivityDefinition has `participant.typeCanonical`/`participant.typeReference`, not `action.typeCanonical`. |
| Source | PlanDefinition action participant paths | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/plandefinition/structuredefinition-PlanDefinition.xml:1951-1994` | PlanDefinition has `action.participant.typeCanonical`, not `action.typeCanonical`. |
| Source | ActivityDefinition dosage element | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/activitydefinition/structuredefinition-ActivityDefinition.xml:1243-1247` | Confirms the element is `ActivityDefinition.dosage`. |
| Source | MedicationRequest device element | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/medicationrequest/structuredefinition-MedicationRequest.xml:705-714` | Confirms `MedicationRequest.device` targets `DeviceDefinition`. |
| Commit | `5595d874e8f73f92aec2bdb2739daddfae534a56` | https://github.com/HL7/fhir/commit/5595d874e8f73f92aec2bdb2739daddfae534a56 | `FHIR-25774` EvidenceVariable changes and example replacement. |
| Commit | `5126624496f45455a6dbaf65bfc5c7d44f4f367e` | https://github.com/HL7/fhir/commit/5126624496f45455a6dbaf65bfc5c7d44f4f367e | `FHIR-29209` event-resource guidance and resource subsections. |
| Commit | `4cf18e55a2e99b6296cde048297887fe26dcb2cb` | https://github.com/HL7/fhir/commit/4cf18e55a2e99b6296cde048297887fe26dcb2cb | `FHIR-53082` page update and status to Informative. |
| Commit | `2d711ff3b0b74bdd990e87221db5c7ed2c305d8d` | https://github.com/HL7/fhir/commit/2d711ff3b0b74bdd990e87221db5c7ed2c305d8d | Added current device guidance for `FHIR-37698`. |
| Commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | `FHIR-44047` punctuation change. |
| PR | PR 2288 | https://github.com/HL7/fhir/pull/2288 | Jira comment link for `FHIR-37565`; merged 2022-08-31. |
| PR | PR 2834 | https://github.com/HL7/fhir/pull/2834 | Jira comment link for `FHIR-29209`; merged 2023-03-13. |
| PR | PR 3914 | https://github.com/HL7/fhir/pull/3914 | Jira comment link for `FHIR-53082`, `FHIR-30209`, `FHIR-37698`; merged 2025-11-02. |
| PR | PR 3941 | https://github.com/HL7/fhir/pull/3941 | Later `FHIR-53078` clinical reasoning main page PR, not materially important for this page. |
| Jira | `FHIR-25774` | https://jira.hl7.org/browse/FHIR-25774; reopen with `bun run jira:search snapshot FHIR-25774` | Formal rationale for EvidenceVariable resource revisions. |
| Jira | `FHIR-29209` | https://jira.hl7.org/browse/FHIR-29209; reopen with `bun run jira:search snapshot FHIR-29209` | Formal rationale for Task/focus guidance for generated event resources. |
| Jira | `FHIR-53082` | https://jira.hl7.org/browse/FHIR-53082; reopen with `bun run jira:search snapshot FHIR-53082` | Direct R6 update for this page; resolution says Informative, matching current page. |
| Jira | `FHIR-37698` | https://jira.hl7.org/browse/FHIR-37698; reopen with `bun run jira:search snapshot FHIR-37698` | Device-in-ActivityDefinition issue whose applied page text may be incorrect. |
| Jira | `FHIR-37565` | https://jira.hl7.org/browse/FHIR-37565; reopen with `bun run jira:search snapshot FHIR-37565` | Related DeviceDefinition/typeReference context. |
| Jira | `FHIR-53410` | https://jira.hl7.org/browse/FHIR-53410; reopen with `bun run jira:search snapshot FHIR-53410` | Later unresolved R6 issue about DeviceDefinition in typeReference. |
| Zulip | `#committers > ActivityDefinition.participant.typeCanonical` | https://chat.fhir.org/#narrow/stream/committers/topic/ActivityDefinition.participant.typeCanonical; reopen with `bun run zulip:search snapshot committers "ActivityDefinition.participant.typeCanonical"` | Clarifies that DeviceDefinition is canonical in R6; weakens any claim that `typeCanonical` itself is invalid, but not the page's `action.typeCanonical` path. |
| Zulip | `#implementers > ActivityDefinition creating Event resource` | https://chat.fhir.org/#narrow/stream/implementers/topic/ActivityDefinition%20creating%20Event%20resource; reopen with `bun run zulip:search snapshot implementers "ActivityDefinition creating Event resource"` | Later implementer confusion around the page's Task/focus event guidance. |
| Confluence | FHIR Workflow Minutes CC 20210111 | https://confluence.hl7.org/spaces/FHIRI/pages/97476227/FHIR+Workflow+Minutes+CC+20210111; reopen with `bun run confluence:search snapshot 97476227` | Workgroup minutes supporting the `FHIR-29209` Task approach. |
| Confluence | FHIR Workflow Minutes CC 20210208 | https://confluence.hl7.org/spaces/FHIRI/pages/104562929/FHIR+Workflow+Minutes+CC+20210208; reopen with `bun run confluence:search snapshot 104562929` | Further `FHIR-29209` Task/proposal rationale. |

## Change summary

### Metadata/template/navigation

- The page remains present but the header changed from R4's `cols` table with Maturity Level 2 and Trial Use status to R6 ballot4's `colsi` table with Responsible Owner and Informative status.
- `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the wrapping `<div class="col-12">` as template churn.
- `c3da43d4d906bc8ef71d67923be5e5db976665be`, `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, and merge `8a448f61f25b04d6dae7fff0b7ec082ae8ca833d` changed page status/table mechanics.
- `4cf18e55a2e99b6296cde048297887fe26dcb2cb` changed the Standards Status to Informative. This matches the `FHIR-53082` resolution, even though the issue description initially requested "normative".

### Substantive/semantic guidance

- `FHIR-53082` added text tying clinical reasoning definitional resources to the Workflow Definition pattern, added an implementer note, and added an Activity Flow subsection that links to PlanDefinition, ActivityDefinition, and the CPG Activity Flow topic.
- `FHIR-29209` added an Event Resources subsection saying ActivityDefinition is designed for request resources and that event resources created by reasoning should be represented with a `Task` with proposal intent and `focus` pointing to the computed event resource. Confluence minutes support this Task/proposal rationale.
- `FHIR-37698` added a device guidance paragraph for medication administration. The current wording says to use `action.typeCanonical`, but the page context and R6 structures do not support that exact path. This is the strongest actionable issue from this review.

### Example changes

- The referral ActivityDefinition example gained a SNOMED display and changed CQL expression language from `text/cql` to `text/cql-expression`.
- A prose explanation of the referral example was added. It contains a typo: `That is should occur`.
- The medication example anchor changed from `medication-activity-definition` to `medication-request-activity-definition`.
- Medication example CQL language declarations changed from `text/cql` to `text/cql-expression`.
- The EvidenceVariable section replaced an old placeholder (`*enter example here*`) and chlorpromazine description with an intracranial hemorrhage within 7 days characteristic example.

### Editorial/mechanical/noise

- `FHIR-44047` only added the comma in `(i.e., as soon as possible)`.
- `FHIR-53078` only changed an anchor on this page and appears to be collateral from a broader clinical reasoning module update.
- `FHIR-30209` was about updating an existing resource with PlanDefinition; on this page it only coincides with two `text/cql` to `text/cql-expression` edits in the medication example.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `5595d874e8f73f92aec2bdb2739daddfae534a56` | 2020-02-06 | Changes described in FHIR-25774 | Updated EvidenceVariable table rows, removed placeholder example, added intracranial hemorrhage/timeFromStart example, and moved/rewrote implementer note. | substantive/example |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Removed wrapper div. | mechanical/template |
| `c3da43d4d906bc8ef71d67923be5e5db976665be` | 2022-09-05 | tidy up status codes on pages, and set version for ballot | Changed header table class from `cols` to `colstu`. | metadata/mechanical |
| `5126624496f45455a6dbaf65bfc5c7d44f4f367e` | 2023-03-12 | J#29209: Described process for creating Event resources as part of an ActivityDefinition and PlanDefinition $apply | Added ActivityDefinition/resource subsections and Event Resources guidance using Task/focus. | semantic guidance |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Changed header table to `colsi`/Responsible Owner, still Trial Use before later merge. | metadata/mechanical |
| `4cf18e55a2e99b6296cde048297887fe26dcb2cb` | 2025-11-01 | [FHIR-53082]: Updated the definitional resources page content and status to informative. | Changed status to Informative, added Definition pattern and Activity Flow content, changed implementer note, added referral explanation, and promoted EvidenceVariable heading from h5 to h4. | substantive/editorial |
| `5ef0571d4759248fa832a858612aa703739103ce` | 2025-11-01 | [FHIR-53078]: Updated clinical reasoning module main page | Renamed medication example anchor. | metadata/anchor |
| `5369f00212df3db568bacd32d406a0be2d2a58ad` | 2025-11-01 | [FHIR-30209]: Added example of updating an existing resource with a PlanDefinition | Changed two medication example expression languages from `text/cql` to `text/cql-expression`. | example consistency |
| `2d711ff3b0b74bdd990e87221db5c7ed2c305d8d` | 2025-11-01 | [FHIR-37698]: Documented how to set device of a medication request in a PlanDefinition | Added device guidance with `action.typeCanonical` and a `typeCanonical` snippet. | substantive, possibly flawed |
| `8a448f61f25b04d6dae7fff0b7ec082ae8ca833d` | 2025-11-01 | Merge branch 'master' into br-cds-2025-10-31 | Resolved status table merge to `colsi` and Informative. | merge/mechanical |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Changed `(i.e. as soon as possible)` to `(i.e., as soon as possible)`. | editorial |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-25774` ("EvidenceVariable Resource major revisions post-connectathon 23") was Published/Persuasive for R5. It explains removal of conceptual EvidenceVariable elements including `participantEffective[x]`, addition of `timeFromStart` subelements, and replacement/addition of examples. This aligns with the current EvidenceVariable table and example.
- `FHIR-29209` ("Clinical reasoning cannot generate event resources") was Published/Persuasive with Modification. Its resolution says to add guidance in the definitional artifacts topic and link from PlanDefinition/ActivityDefinition realization topics. Comments and Confluence minutes indicate the output should be a Task/proposal, not a direct event. The current page line 159 matches that direction.
- `FHIR-53082` ("Update the definitional resources page") was Applied/Persuasive for R6. Description requested updating the page to normative; the resolution changed this to Informative. The current page is Informative, so no status mismatch was found.
- `FHIR-53078` ("Update clinical reasoning module main page") was Applied/Persuasive. It is context-only for this page: the only observed direct page change was the medication example anchor rename.
- `FHIR-30209` ("How to use a Activity/PlanDefinition to update an existing resource") was Applied/Persuasive. On this page, the only observed patch changed expression language codes in the medication example; the core requested PlanDefinition example is not on this page.
- `FHIR-37698` ("How to represent a device to be used ... in ActivityDefinition?") was Applied/Persuasive with Modification. The resolution says: "This can be done with the typeReference element referring to a specific Device, or a DeviceDefinition that would be resolved as part of the apply. Create an example that illustrates this usage." The applied page text says `action.typeCanonical`. This is a likely page defect/intent mismatch.
- `FHIR-44047` is a broad punctuation Technical Correction. It explains the comma in `i.e.,` but not the remaining `That is should occur` typo.

### Other Jira issues that plausibly explain or contextualize changed text

- `FHIR-37565` ("DeviceDefinition is missing in ActivityDefinition.participant.typeReference") resolved Persuasive in 2022 and says to allow `typeReference` to reference DeviceDefinition. It is related to the same DeviceDefinition/ActivityDefinition concept and PR 2288, but it was not the commit that added this page's device paragraph.
- `FHIR-53410` ("PlanDefinition should reference DeviceDefinition as well as Device") was Submitted on 2025-11-08 and unresolved. It says `PlanDefinition.actor.option.typeReference`, `PlanDefinition.action.participant.typeReference`, and `ActivityDefinition.participant.typeReference` allow Device but not DeviceDefinition. This later issue supports that DeviceDefinition/typeReference handling remains unsettled, but it is not direct evidence that the page must avoid `typeCanonical`.

### Context-only Jira hits not used for action

- `FHIR-39389` appeared in a broad DeviceDefinition search but was about DeviceDefinition modeling generally, not this page text.
- Broad `clinicalreasoning-topics-definitional-resources`, `action.typeCanonical DeviceDefinition`, `intracranial hemorrhage within 7 days`, and `Activity Flow Clinical Guidelines` Jira phrase searches did not produce additional page-specific issues beyond the tracked keys above.

## Zulip evidence

- Quoted Zulip FTS searches for `FHIR-53082`, `FHIR-37698`, `FHIR-29209`, `FHIR-25774`, `FHIR-37565`, and `FHIR-53410` found no direct key mentions.
- `bun run zulip:search fts "\"typeReference\" DeviceDefinition ActivityDefinition" --limit 10` found `#committers > ActivityDefinition.participant.typeCanonical`.
  - Snapshot command: `bun run zulip:search snapshot committers "ActivityDefinition.participant.typeCanonical"`
  - URL: https://chat.fhir.org/#narrow/stream/committers/topic/ActivityDefinition.participant.typeCanonical
  - Key content: Grahame initially said `ActivityDefinition.participant.typeCanonical` could not reference Group or DeviceDefinition and that he moved them to `ActivityDefinition.participant.typeReference`; Bryn pointed out Group and DeviceDefinition are canonical in R6; Grahame concluded, "turns out that's my problem. I won't make those changes."
  - Interpretation: This thread prevents overclaiming that `typeCanonical` is inherently wrong for DeviceDefinition in R6. It does not fix the page's use of the unqualified/invalid `action.typeCanonical` path.
- `bun run zulip:search fts "\"clinicalreasoning-topics-definitional-resources\"" --limit 10` found `#implementers > ActivityDefinition creating Event resource`.
  - Snapshot command: `bun run zulip:search snapshot implementers "ActivityDefinition creating Event resource"`
  - URL: https://chat.fhir.org/#narrow/stream/implementers/topic/ActivityDefinition%20creating%20Event%20resource
  - Key content: An implementer cited the page's `#event-resources` guidance and asked whether Task.focus was the right approach and whether there was a working example. The only reply redirected to `#cds` or `#cql`.
  - Interpretation: This is a signal that the event-resource guidance may be hard to implement without an example, but it did not contradict the `FHIR-29209` decision, so it was not elevated as a primary action finding.

## Confluence evidence

- `FHIR-29209` had three Confluence reference/search hits. Two were snapshotted:
  - `97476227` FHIR Workflow Minutes CC 20210111: "Expectation is that result will always be a Task saying 'please store this Observation' - because the response is always a Request that has intent of 'proposal'."
  - `104562929` FHIR Workflow Minutes CC 20210208: Bryn discussed benefits of the Task approach because it allows output of a CDS system to be a proposal.
  - These support the current page's Task/proposal guidance at line 159.
- `FHIR-25774` had one Confluence refs hit:
  - `97473817` EBMonFHIR 2020 Resource Development lists `FHIR-25774` among Evidence/EvidenceVariable tracker items. It is process/context evidence, not a stronger rationale than Jira.
- No Confluence refs or high-signal FTS hits were found for `FHIR-53082`, `FHIR-37698`, or `FHIR-30209`.
- A broad Confluence search for `DeviceDefinition MedicationRequest ActivityDefinition` found OO/HCP minutes about DeviceDefinition modeling and ActivityDefinition references, but no direct page-change rationale; these were not relied on for action.

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2020-02-04 to 2020-02-06 | Jira | `FHIR-25774` created/resolved for EvidenceVariable R5 revisions. |
| 2020-02-06 | Source commit | `5595d874e8f73f92aec2bdb2739daddfae534a56` updates this page's EvidenceVariable content and example. |
| 2021-01-11 | Confluence | FHIR Workflow minutes discuss `FHIR-29209`; expectation is a Task proposal requesting storage of an Observation. |
| 2021-02-08 | Jira/Confluence | `FHIR-29209` resolved; minutes again support Task/proposal approach. |
| 2022-06 to 2022-08 | Jira | `FHIR-37565` and `FHIR-37698` discuss DeviceDefinition/device representation in ActivityDefinition. |
| 2022-08-31 | PR | PR 2288 merged for related DeviceDefinition/typeReference work (`FHIR-37565`). |
| 2023-03-12 | Source commit | `5126624496f45455a6dbaf65bfc5c7d44f4f367e` applies event-resource guidance to this page. |
| 2023-03-13 | PR | PR 2834 merged, linked from `FHIR-29209`. |
| 2025-10-08 | Jira | `FHIR-53082` and `FHIR-53078` created/resolved/voted for R6 clinical reasoning page updates. |
| 2025-10-31 | Zulip | `#committers` thread clarifies R6 canonical status for Group/DeviceDefinition. |
| 2025-11-01 | Source commits | `4cf18e55...`, `5ef0571...`, `5369f002...`, and `2d711ff...` update this page on the CDS branch. |
| 2025-11-02 | PR/Jira comments | PR 3914 merged and linked from `FHIR-53082`, `FHIR-53078`, `FHIR-30209`, and `FHIR-37698`. |
| 2025-11-03 | Source commit | `887bc238...` applies `FHIR-44047` punctuation correction. |
| 2025-11-08 | Jira | `FHIR-53410` submitted, indicating DeviceDefinition/typeReference questions persisted after the page change. |

## Evidence log

- Confirmed page presence:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/clinicalreasoning-topics-definitional-resources.html"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-definitional-resources.html"`
- Reviewed direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalreasoning-topics-definitional-resources.html`
- Listed and inspected page-touching commits:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/clinicalreasoning-topics-definitional-resources.html`
  - `git show --stat --patch` for each of the 11 commits listed in Source history.
- Read the full R6 page:
  - `wc -l` reported 208 lines.
  - Read `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/clinicalreasoning-topics-definitional-resources.html:1-208`.
- Snapshotted explicit Jira keys:
  - `bun run jira:search snapshot FHIR-25774`
  - `bun run jira:search snapshot FHIR-29209`
  - `bun run jira:search snapshot FHIR-53082`
  - `bun run jira:search snapshot FHIR-53078`
  - `bun run jira:search snapshot FHIR-30209`
  - `bun run jira:search snapshot FHIR-37698`
  - `bun run jira:search snapshot FHIR-44047`
- Ran targeted Jira phrase searches:
  - `bun run jira:search fts "\"clinicalreasoning-topics-definitional-resources\"" --limit 10` - no results.
  - `bun run jira:search fts "\"action.typeCanonical\" DeviceDefinition" --limit 10` - no results.
  - `bun run jira:search fts "DeviceDefinition MedicationRequest ActivityDefinition" --limit 10` - found `FHIR-37698` and context issues.
  - `bun run jira:search fts "\"typeReference\" DeviceDefinition ActivityDefinition" --limit 10` - found `FHIR-37565`, `FHIR-53410`, and `FHIR-37698`.
  - `bun run jira:search fts "\"intracranial hemorrhage within 7 days\"" --limit 10` - no results.
  - `bun run jira:search fts "\"Activity Flow\" \"Clinical Guidelines\"" --limit 10` - no results.
- Snapshotted related Jira issues:
  - `bun run jira:search snapshot FHIR-37565`
  - `bun run jira:search snapshot FHIR-53410`
- Ran Zulip searches:
  - Initial unquoted key searches failed due FTS hyphen parsing (`SQLiteError: no such column`). Quoted reruns for explicit keys and related keys found no direct key hits.
  - `bun run zulip:search fts "\"typeReference\" DeviceDefinition ActivityDefinition" --limit 10` found the `#committers` thread.
  - `bun run zulip:search fts "\"action.typeCanonical\"" --limit 10` found no results.
  - `bun run zulip:search fts "\"clinicalreasoning-topics-definitional-resources\"" --limit 10` found the implementers event-resource thread.
- Snapshotted Zulip threads:
  - `bun run zulip:search snapshot committers "ActivityDefinition.participant.typeCanonical"`
  - `bun run zulip:search snapshot implementers "ActivityDefinition creating Event resource"`
- Ran Confluence refs/searches:
  - `bun run confluence:search refs jira FHIR-29209` and `fts FHIR-29209` found workflow minutes.
  - `bun run confluence:search refs jira FHIR-25774` found EBMonFHIR tracker context.
  - No refs/FTS results for `FHIR-53082`, `FHIR-37698`, or `FHIR-30209`.
- Snapshotted Confluence pages:
  - `bun run confluence:search snapshot 97476227`
  - `bun run confluence:search snapshot 104562929`
  - `bun run confluence:search snapshot 97473817`
- Cross-checked suspect current text:
  - `rg -n "action.typeCanonical"` found only this page.
  - `rg -n "ActivityDefinition\.action"` found no matches in `structuredefinition-ActivityDefinition.xml`.
  - `rg -n "PlanDefinition\.action\.typeCanonical|PlanDefinition\.action\.participant\.typeCanonical"` found only `PlanDefinition.action.participant.typeCanonical`.
  - `rg -n "ActivityDefinition\.dosage|dosageInstruction"` confirmed current ActivityDefinition has `dosage`, not `dosageInstruction`.

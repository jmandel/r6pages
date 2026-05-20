# managing research appendix

## Scope and coverage

- Page path: `source/managing.html`
- Older version: R4 4.0.1, source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- Newer version: R6 ballot4 6.0.0-ballot4, source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: page exists in both trees. Old file has 233 lines; new file has 229 lines.
- New page read end-to-end: yes, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/managing.html:1-229`.
- Direct diff size: 122 lines. Commit history touching this page in range: 8 commits.
- Explicit Jira keys found in page-specific commits: `FHIR-25928`, `FHIR-44047`. Related evidence also reviewed for `FHIR-53725`, `FHIR-54090`, and `FHIR-52121`.
- Jira/Zulip/Confluence searches performed for explicit keys, changed phrases, Linkage/additional-resource terms, Subscription framework terms, and Patient/$everything/admin-incubator terms.
- Caveats: no PR numbers were found in the local commit messages for this page. The live external link checks reflect status on 2026-05-20 and may change. Search was bounded to high-signal exact keys and changed phrases, not exhaustive across all additional-resource pages.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New page, Linkage link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/managing.html:179` | Current page links `Linkage` to `https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-Linkage.html`, which returned HTTP 404 in live check. |
| Source | New page, Patient/$everything link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/managing.html:193-195` | Current page cites Patient/$everything while linking to the Admin Incubator operation definition. |
| Source | New page, Subscription framework link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/managing.html:186-187` | Direct result of `FHIR-25928` subscription-framework change. |
| Commit | Subscription link update | `e4bf792d2ca24701564c5890adb25a931390bfae` / `https://github.com/HL7/fhir/commit/e4bf792d2ca24701564c5890adb25a931390bfae` | Changes `subscription.html` to `subscriptions.html` on this page; subject cites `FHIR#25928`. |
| Commit | Template metadata update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / `https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Removes wrapping `div` from this page; mechanical template change. |
| Commit | R6 metadata update | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / `https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Changes page header metadata to "Responsible Owner" and removes maturity display. |
| Commit | Punctuation update | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` / `https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Applies `FHIR-44047` style changes for `e.g.,` and `i.e.,`. |
| Commit | Linkage moved to PC incubator link | `fad1b9cf84ef652e88947e1a13b026c62f95334e` / `https://github.com/HL7/fhir/commit/fad1b9cf84ef652e88947e1a13b026c62f95334e` | Changes this page from core `linkage.html` to external PC incubator Linkage URL. |
| Commit | Patient/$everything moved to Admin Incubator link | `b487fdda4bb4a5382a93dbb5a811efd02425b9bc` / `https://github.com/HL7/fhir/commit/b487fdda4bb4a5382a93dbb5a811efd02425b9bc` | Removes PA operation definitions from core and changes this page to the Admin Incubator Patient/$everything URL. |
| Jira | FHIR-25928 | `https://jira.hl7.org/browse/FHIR-25928`; reopen with `bun run jira:search snapshot FHIR-25928` | Formal issue for adding Subscription to the exchanging-resources guidance; resolution: add as sibling to Messaging/Documents. |
| Jira | FHIR-44047 | `https://jira.hl7.org/browse/FHIR-44047`; reopen with `bun run jira:search snapshot FHIR-44047` | Formal issue for punctuation of `e.g.,` and `i.e.,`; explains the 2025 editorial changes. |
| Jira | FHIR-53725 | `https://jira.hl7.org/browse/FHIR-53725`; reopen with `bun run jira:search snapshot FHIR-53725` | Later ballot issue says a Linkage link on the Patient page is broken because Linkage moved out of core; same broken PC incubator URL pattern appears on `managing.html`. |
| Jira | FHIR-54090 | `https://jira.hl7.org/browse/FHIR-54090`; reopen with `bun run jira:search snapshot FHIR-54090` | Confirms PA was aware that Patient page narratives mention incubator artifacts; resolution says general R6 guidance should explain incubator specs, but also notes Linkage link is broken via `FHIR-53725`. |
| Jira | FHIR-52121 | `https://jira.hl7.org/browse/FHIR-52121`; reopen with `bun run jira:search snapshot FHIR-52121` | Related Patient/$everything issue; later discussion asks about the operation after move to Admin Incubator. |
| Zulip | Subscription discussion | `https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/adding%20Subscription%20to%20%22Exchanging%20Resources%22`; reopen with `bun run zulip:search snapshot fhir/infrastructure-wg 'adding Subscription to "Exchanging Resources"'` | Rationale for adding Subscription guidance and for creating/using a Subscription Framework page. |
| Zulip | Resource removal thread | `https://chat.fhir.org/#narrow/stream/fmg/topic/Assessment%20of%20Resources%20for%20removal%20from%20R6`; reopen with `bun run zulip:search snapshot fmg 'Assessment of Resources for removal from R6'` | Explains the additional-resources process and lists Linkage among resources considered for Additional Resources. |
| Zulip | Linking to Additional Resources | `https://chat.fhir.org/#narrow/stream/implementers/topic/Linking%20to%20Additional%20Resources`; reopen with `bun run zulip:search snapshot implementers 'Linking to Additional Resources'` | Grahame says linking from core docs to additional resources is OK as work in progress, but comparison text should move to incubator content as much as possible. |
| Zulip | PA operations move | `https://chat.fhir.org/#narrow/stream/committers/topic/operations%20that%20move%20out`; reopen with `bun run zulip:search snapshot committers 'operations that move out'` | Direct rationale for moving Patient/$everything, Encounter/$everything, EpisodeOfCare/$everything, and Patient/$merge operation definitions out of core. |
| Confluence | FHIR-I 2020-04-20 minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/82903557/FHIR+Infrastructure+Minutes+CC+20200420`; reopen with `bun run confluence:search snapshot 82903557` | Records `FHIR-25928` disposition: "Will add as sibling to messaging and documents on that page." |
| Confluence | FHIR-I 2020-02-24 minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/76160393/FHIR+Infrastructure+Minutes+CC+20200224`; reopen with `bun run confluence:search snapshot 76160393` | Records earlier Subscriptions and Messaging discussion and tabled motion. |
| Confluence | FHIR-I 2024 WGM minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas`; reopen with `bun run confluence:search snapshot 234784975` | Records `FHIR-44047 will fix`. |
| Confluence | PC Sept 2025 minutes | `https://confluence.hl7.org/spaces/PC/pages/358875423/2025+Sept+Patient+Care+WGM+Agenda+and+Minutes`; reopen with `bun run confluence:search snapshot 358875423` | Records agreement on Additional Resources removal from R6 for `ConditionDefinition`, `ClinicalAssessment`, and `Linkage`. |
| Confluence | PA May 2026 minutes | `https://confluence.hl7.org/spaces/PA/pages/453919522/2026+May+WGM+Rotterdam+-+Meeting+Minutes`; reopen with `bun run confluence:search snapshot 453919522` | Records PA comfort with introductory guidance for `FHIR-54090` and later concern about whether `$everything` remains safe to use after the Admin Incubator move. |
| Local evidence | Link check output | `.copilot/session-state/9ebd5211-b3e9-408a-8ba0-e198c095c398/files/link-checks.txt` | Shows PC incubator Linkage URL returned `HTTP/2 404`; Admin Incubator Patient/$everything URLs returned `HTTP/2 200`. |

## Change summary

- **Subscription framework link: semantic guidance / link target.** `e4bf792d2ca24701564c5890adb25a931390bfae` changes the synchronization paragraph from FHIR's `Subscription` mechanism at `subscription.html` to FHIR's `Subscription framework` at `subscriptions.html`. This aligns with `FHIR-25928` and FHIR-I minutes; no mismatch found.
- **HTML/template/header metadata: metadata/template/navigation.** `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removes the page wrapping `div`. `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changes the status table to "Responsible Owner" and removes the explicit maturity cell. No page-specific semantic change.
- **Punctuation and casing cleanup: editorial only.** `dad7cf37c75822c352509e1c2e8d050408d0be18`, `9f780149387dc652bec02aa7744e52774acddbc9`, and `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` apply V2 capitalization and `e.g.,` / `i.e.,` style changes. `FHIR-44047` explains the latter. No content semantics changed.
- **Linkage reference moved out of core: substantive link target / current rendering problem.** `fad1b9cf84ef652e88947e1a13b026c62f95334e` changes the page's `Linkage` link from `linkage.html` to `https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-Linkage.html`. The move is consistent with the R6 additional-resources process, but the live target returned `HTTP/2 404` on 2026-05-20. Later `FHIR-53725` and `FHIR-54090` show the same Linkage-incubator broken-link issue was noticed on the Patient page, not specifically on `managing.html`.
- **Patient/$everything reference moved out of core: semantic link target.** `b487fdda4bb4a5382a93dbb5a811efd02425b9bc` changes `Patient/$everything` from the core page to the Admin Incubator URL. The linked Admin Incubator operation URL returned `HTTP/2 200`. Zulip and Confluence show this was a deliberate move of PA operations out of core; later discussions raise questions about future $everything guidance, but no clear `managing.html` mismatch was found.
- **Mechanical/noise.** Removed final wrapper markup and no-newline diff are mechanical. No examples, REST conformance rule, search parameter, operation definition text, or normative requirement was added directly on this page.

## Source history

| Commit | Date | Subject | Page effect | Classification |
|---|---:|---|---|---|
| `e4bf792d2ca24701564c5890adb25a931390bfae` | 2020-08-14 author / 2020-08-17 commit | `FHIR#25928: Changed references to subscriptions framework page instead of resource.` | Changes `Subscription` link/text to `Subscription framework` and `subscriptions.html`. | Semantic guidance / link target |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | Removes `<div class="col-12">` wrapper and closing `</div>`. | Mechanical/template |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | `QA related changes` | Capitalizes `HL7 V2`; temporarily introduces several `etc..` punctuation changes later reverted. | Editorial/QA |
| `9f780149387dc652bec02aa7744e52774acddbc9` | 2023-02-21 | `more QA` | Reverts the accidental `etc..` forms from the previous QA commit. | Editorial/QA |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | Rewrites the page metadata table to "Responsible Owner" and removes maturity cell. | Metadata/template |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | Adds commas after `e.g.` and `i.e.` in several sentences. | Editorial only |
| `fad1b9cf84ef652e88947e1a13b026c62f95334e` | 2025-11-12 | `remove additional resources` | Changes `Linkage` from core `linkage.html` to external PC incubator URL. | Substantive link target / actionable broken link |
| `b487fdda4bb4a5382a93dbb5a811efd02425b9bc` | 2025-11-17 | `more PA Operations out` | Changes `Patient/$everything` from core `patient-operation-everything.html` to Admin Incubator operation URL. | Substantive link target |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-25928` (`bun run jira:search snapshot FHIR-25928`): "Adding Subscription to 'Exchanging Resources' section"; status Published, resolution Persuasive, applied for R5. The resolution says "Will add it as a sibling to Messaging and Documents." The `managing.html` commit is not one of the Jira comment's listed commit links, but the page-specific commit subject cites `FHIR#25928` and the change matches the issue and FHIR-I minutes.
- `FHIR-44047` (`bun run jira:search snapshot FHIR-44047`): "Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout"; status "Resolved - change required", resolution Persuasive, R6 ballot. The page commit `887bc2383f...` makes only punctuation changes consistent with the issue. No Zulip hits were found for this exact key.

### Other Jira issues that plausibly explain the same changed text

- `FHIR-53725` (`bun run jira:search snapshot FHIR-53725`): "Remove reference and wording regarding the Linkage Resource, which is no longer part of FHIR Core R6." Although filed against `patient.html#linking`, it quotes a broken Linkage link to the same PC incubator URL pattern. Resolution says Linkage is being moved to an incubator and "Once that incubator exists, and the mechanism for linking to that content is operational this will be resolved." This strongly supports the `managing.html` action on the broken Linkage URL.
- `FHIR-54090` (`bun run jira:search snapshot FHIR-54090`): "Patient, AdditionalResource Incubator Effect." The description says Patient narratives mention merge operation and Linkage after those moved to incubators, and explicitly says "the link to Linkage is broken though, see FHIR-53725." The resolution is Not Persuasive because PA is comfortable with introductory guidance remaining and expects general R6 guidance to explain incubator specifications. This argues against a page-specific action to remove every narrative mention, but not against fixing the broken link.
- `FHIR-52121` (`bun run jira:search snapshot FHIR-52121`): "Confirm $everything is unpaged." This is not a direct cause of the `managing.html` link change, but the `#committers` thread identified it as related to the `$everything` move. Later comments and PA minutes discuss uncertainty around $everything's future use after moving to Admin Incubator.

### Context-only Jira hits that should not drive action

- `FHIR-46495` appeared in a search for `subscription framework managing`, but it concerns administratively created subscriptions and does not explain the `managing.html` R4-to-R6 diff.
- Older Patient/$everything issues (`FHIR-15935`, `FHIR-16610`, `FHIR-16611`, `FHIR-17362`, etc.) surfaced in broad searches but did not explain the 2025 link-target move on this page.

## Zulip evidence

- `#fhir/infrastructure-wg > adding Subscription to "Exchanging Resources"` (`bun run zulip:search snapshot fhir/infrastructure-wg 'adding Subscription to "Exchanging Resources"'`): This thread is linked from `FHIR-25928`. It shows the discussion leading to Subscription guidance around the exchange documentation. Notable messages: Eric Haas asked for guidance comparing Subscriptions/FHIRCast/Messaging; Vassil suggested a page similar to Messaging, perhaps named SubscriptionFramework; Gino noted the Jira was thin and that there was approval for adding "something" to Exchanging Resources. This supports the `Subscription framework` link update.
- `#fmg > Assessment of Resources for removal from R6` (`bun run zulip:search snapshot fmg 'Assessment of Resources for removal from R6'`): FMG discussed moving low-maturity resources to Additional Resources / incubators. The draft communication included `ClinicalAssessment, Linkage` under PC Development 2 and said moved resources can still be referred to from narrative as work in progress, but cannot be directly referenced from core resource definitions/examples.
- `#implementers > Linking to Additional Resources` (`bun run zulip:search snapshot implementers 'Linking to Additional Resources'`): Brian Postlethwaite asked whether linking to additional resources from core docs remains acceptable, referencing `FHIR-53725`. Grahame answered: "you can link to it as work in progress in documentation, but you should move comparison text to where it's being incubated as much as possible." This supports treating the Linkage mention as allowed in principle, but also supports fixing the actual broken URL.
- `#committers > operations that move out` (`bun run zulip:search snapshot committers 'operations that move out'`): Brian Postlethwaite said PA was moving out `$everything` "all locations" and `$merge`, and later supplied the Admin Incubator link and specific operations: `Patient/$merge`, `Patient/$everything`, `Encounter/$everything`, `EpisodeOfCare/$everything`. Grahame said "I'll do it now." This directly aligns with commit `b487fdda4...`.
- No Zulip hits were found for exact `FHIR-44047`.
- Initial unquoted Zulip FTS searches for hyphenated Jira keys failed due FTS parsing (`no such column` errors); quoted key searches succeeded or cleanly returned no results.

## Confluence evidence

- FHIR-I minutes 2020-04-20 (`bun run confluence:search snapshot 82903557`) record `FHIR-25928`: "Will add as sibling to messaging and documents on that page" and the persuasive vote `Rick Geimer/John Moehrke: 9-0-0`.
- FHIR-I minutes 2020-02-24 (`bun run confluence:search snapshot 76160393`) record the broader Subscriptions and Messaging discussion, including that Subscriptions should be added to the exchanging resources page, but the initial motion was tabled for more discussion.
- FHIR-I WGM 2024 Dallas minutes (`bun run confluence:search snapshot 234784975`) record `FHIR-44047 will fix` among prior ballot issues.
- Patient Care Sept 2025 WGM minutes (`bun run confluence:search snapshot 358875423`) record agreement on Additional Resources removal from R6 for `ConditionDefinition`, `ClinicalAssessment`, and `Linkage`.
- PA Jan 2026 minutes (`bun run confluence:search snapshot 413248899`, captured in `confluence-followup.txt`) say the Admin Incubator currently has PA operations `$everything`, `$merge`, and `$apply`; the group considered whether they should move to the FHIR-I API Incubator, but noted the API Incubator did not have them at that time.
- PA May 2026 minutes (`bun run confluence:search snapshot 453919522`) record `FHIR-54090`: "we are comfortable with the level of 'introductory' guidance in the patient page." The same minutes also record concerns raised by Germany around `$everything` after moving the operation to the Administration Incubator and note related trackers `FHIR-21050` and `FHIR-52121`.

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2020-02-05 to 2020-04-24 | Zulip discussion | `#fhir/infrastructure-wg` discusses adding Subscription guidance to Exchanging Resources and how Subscription relates to Messaging. |
| 2020-02-24 | Confluence meeting | FHIR-I discusses Subscriptions and Messaging; motion to add Subscriptions to `exchange-module.html` is tabled. |
| 2020-04-20 | Jira vote / Confluence meeting | `FHIR-25928` resolved persuasive; minutes say add as sibling to messaging and documents. |
| 2020-08-14/17 | Source commit | `e4bf792d2ca24701564c5890adb25a931390bfae` changes this page to `Subscription framework`. |
| 2021-06-27 | Source commit | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` applies HTML template cleanup. |
| 2023-02-21 | Source commits | QA commits apply V2 capitalization and then revert accidental double-period punctuation. |
| 2024-01-22 | Jira created | `FHIR-44047` filed for `e.g.` / `i.e.` punctuation across FHIR core. |
| 2024-05-23 | Jira resolved / FHIR-I WGM | `FHIR-44047` resolved persuasive; minutes say "will fix." |
| 2025-08-28 | Zulip/FM discussion | FMG Additional Resources communication lists Linkage among resources recommended/considered for movement to Additional Resources. |
| 2025-09-15/19 | Confluence meeting | PC WGM minutes record agreement on Additional Resources removal from R6 for `ConditionDefinition`, `ClinicalAssessment`, and `Linkage`. |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changes metadata header style. |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` applies `FHIR-44047` punctuation changes. |
| 2025-11-07 to 2025-11-17 | Zulip/source | `#committers` discusses operations moving out; `b487fdda4...` removes PA operation definitions and changes this page's Patient/$everything link. |
| 2025-11-12 | Source commit | `fad1b9cf84ef652e88947e1a13b026c62f95334e` changes this page's Linkage link to PC Incubator URL. |
| 2025-12-29 to 2026-01-28 | Jira/Zulip | `FHIR-53725` reports broken Linkage link on Patient page; Zulip confirms core docs may link to additional resources as work in progress, but comparison text should move where possible. |
| 2026-05-19 | Jira/Confluence | `FHIR-54090` resolved no change for patient-page introductory guidance; PA minutes also discuss future `$everything` usage after Admin Incubator move. |
| 2026-05-20 | Link check | `https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-Linkage.html` returned `HTTP/2 404`; Admin Incubator Patient/$everything URLs returned `HTTP/2 200`. |

## Evidence log

- Read methodology and source docs:
  - `SKILL.md`
  - `jira/README.md`
  - `zulip/README.md`
  - `confluence/README.md`
  - `spec/README.md`
- Established boundary and direct diff:
  - `test -f "$OLD_TREE/source/managing.html"`
  - `test -f "$NEW_TREE/source/managing.html"`
  - `git -C "$NEW_TREE" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/managing.html`
  - Diff captured in `.copilot/session-state/9ebd5211-b3e9-408a-8ba0-e198c095c398/files/managing.diff`.
- Traced source history:
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/managing.html`
  - Page-specific `git show --stat --patch` output captured in `.copilot/session-state/9ebd5211-b3e9-408a-8ba0-e198c095c398/files/managing-shows.txt`.
- Searched and snapshotted Jira:
  - `bun run jira:search snapshot FHIR-25928`
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search snapshot FHIR-53725`
  - `bun run jira:search snapshot FHIR-54090`
  - `bun run jira:search snapshot FHIR-52121`
  - Additional FTS queries: `subscription framework managing`, `Linkage additional resources`, `Patient everything PA Operations`, `Responsible Owner Maturity Level`, `Linkage no longer core`, `Additional Resources remove R6 Linkage`, `Patient everything incubator`, `operations move out admin incubator`, `PA operations incubator everything merge`.
- Searched and snapshotted Zulip:
  - `bun run zulip:search snapshot fhir/infrastructure-wg 'adding Subscription to "Exchanging Resources"'`
  - `bun run zulip:search snapshot fmg 'Assessment of Resources for removal from R6'`
  - `bun run zulip:search snapshot implementers 'Linking to Additional Resources'`
  - `bun run zulip:search snapshot committers 'operations that move out'`
  - Exact key searches for `FHIR-25928`, `FHIR-44047`, and `FHIR-54090`; no exact Zulip hits for `FHIR-44047` or `FHIR-54090`.
  - Failed searches that affected method: unquoted hyphenated Jira-key FTS queries in Zulip failed with SQLite parse errors, so they were rerun with quoted keys.
- Searched and snapshotted Confluence:
  - `bun run confluence:search refs jira FHIR-25928`
  - `bun run confluence:search refs jira FHIR-44047`
  - `bun run confluence:search refs jira FHIR-54090`
  - `bun run confluence:search snapshot 82903557`
  - `bun run confluence:search snapshot 76160393`
  - `bun run confluence:search snapshot 234784975`
  - `bun run confluence:search snapshot 358875423`
  - `bun run confluence:search snapshot 413248899`
  - `bun run confluence:search snapshot 453919522`
- Read the full newer page:
  - `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/managing.html:1-229`
- Checked changed external URLs:
  - `curl -L -I https://build.fhir.org/ig/HL7/pc-incubator/StructureDefinition-Linkage.html` -> `HTTP/2 404`
  - `curl -L -I https://build.fhir.org/ig/HL7/admin-incubator/branches/main/en/OperationDefinition-Patient-everything.html` -> `HTTP/2 200`
  - `curl -L -I https://build.fhir.org/ig/HL7/admin-incubator/en/OperationDefinition-Patient-everything.html` -> `HTTP/2 200`

# async research appendix

## Scope and coverage

- Page path: `source/async.html`
- Versions compared: R4 `4.0.1` at `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to R6 ballot4 `6.0.0-ballot4` at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Page boundary: present in both source trees. R4 file has 152 lines; R6 ballot4 file displays 69 lines (`wc -l` reports 68 because there is no final newline).
- The R6 ballot4 page was read end-to-end at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/async.html:1-69`.
- Source history: 7 commits touched `source/async.html` between the two commits. Explicit Jira keys found in source history were `FHIR-35936` and `FHIR-41202`.
- Community/source searches performed: Jira snapshots for `FHIR-35936`, `FHIR-41202`, `FHIR-53868`, `FHIR-52426`; Jira FTS for distinctive changed phrases; Zulip FTS for explicit keys and changed phrases, plus snapshots for the main async and synchronicity threads; Confluence refs/FTS and snapshots for the two explicit Jira keys.
- Important caveats: `FHIR-53868` is filed against `http.html`, but it names the same dead `async-bundle.html` API Incubator URL that appears on `async.html`. I did not run a local rendered FHIR build; live link checks were done with `curl`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/async.html:23-144` | Old page carried detailed bulk async request/status/delete/file semantics. |
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/async.html:1-69` | Current page is a short informative overview plus links. |
| Source | Current pattern links | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/async.html:37-53` | Links to the two pattern definitions and API Incubator note. |
| Source | Current conformance text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/async.html:55-63` | Text added for `FHIR-41202`; includes duplicate anchor and stray parenthesis defects. |
| Source | `OperationDefinition.synchronicity` | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operationdefinition/structuredefinition-OperationDefinition.xml:540-555` | Confirms current codes include `synchronous`, `asynchronous`, and `either`. |
| Source | Synchronicity code system | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/operationdefinition/codesystem-synchronicity-control.xml:32-50` | Confirms code-system definition moved into core and includes `either`. |
| Commit | Template update | `https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Mechanical removal of page wrapper div. |
| Commit/PR | `FHIR-35936` split | `https://github.com/HL7/fhir/commit/440a91ad3fc960eac116920548e0f3b2e3539aca`, PR `https://github.com/HL7/fhir/pull/1668` | Replaced the R4 monolithic page with an overview and created `async-bulk.html`/`async-bundle.html`. |
| Commit | Table/status cleanup | `https://github.com/HL7/fhir/commit/c3da43d4d906bc8ef71d67923be5e5db976665be` | Mechanical status table class change. |
| Commit | Bulk data link tweak | `https://github.com/HL7/fhir/commit/d382fc3af52ab7607c6c8fead1f47cdf09be3562` | Changed `$export` link from `https` to `http`. |
| Commit/PR | Technical correction | `https://github.com/HL7/fhir/commit/5d721b40c9f2047200b99d2511d299cb7ebd28d4`, PR `https://github.com/HL7/fhir/pull/3163` | Added "FHIR supports two asynchronous patterns" wording. |
| Commit/PR | `FHIR-41202` implementation | `https://github.com/HL7/fhir/commit/3512b7ea6d43b0409809b60ae404037102e91f63`, PR `https://github.com/HL7/fhir/pull/3340` | Added async conformance text plus `OperationDefinition.synchronicity` and core synchronicity code system/value set. |
| Commit/PR | R6 normative cleanup | `https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, PR `https://github.com/HL7/fhir/pull/3901` | Deleted local `async-bulk.html`/`async-bundle.html` and changed overview links to API Incubator URLs. |
| Jira | `FHIR-35936` | `https://jira.hl7.org/browse/FHIR-35936`; reopen with `bun run jira:search snapshot FHIR-35936` | Formal rationale/vote for splitting/updating the async page for R5. |
| Jira | `FHIR-41202` | `https://jira.hl7.org/browse/FHIR-41202`; reopen with `bun run jira:search snapshot FHIR-41202` | Formal rationale/vote for adding `OperationDefinition.synchronicity` and CapabilityStatement synchronicity extension text. |
| Jira | `FHIR-53868` | `https://jira.hl7.org/browse/FHIR-53868`; reopen with `bun run jira:search snapshot FHIR-53868` | Triaged R6 issue saying the `https://build.fhir.org/ig/HL7/api-incubator/async-bundle.html` link is broken. |
| Jira | `FHIR-52426` | `https://jira.hl7.org/browse/FHIR-52426`; reopen with `bun run jira:search snapshot FHIR-52426` | Explains why synchronicity CodeSystem/ValueSet were moved into core after `FHIR-41202`. |
| Zulip | Async FMM for R5 | `https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Async%20FMM%20for%20FHIR%20R5`; `bun run zulip:search snapshot fhir/infrastructure-wg "Async FMM for FHIR R5"` | Josh Mandel explains bulk async had implementation experience but arbitrary interactions did not, motivating split/FMM differences. |
| Zulip | Async non-bulk use cases | `https://chat.fhir.org/#narrow/stream/implementers/topic/Async%20use%20cases%3A%20delay%20vs%20data%20deluge`; `bun run zulip:search snapshot implementers "Async use cases: delay vs data deluge"` | Discussion that drove the asynchronous interaction pattern. |
| Zulip | Operation synchronicity | `https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Operation%20synchronicity%20(FHIR-41202)`; `bun run zulip:search snapshot fhir/infrastructure-wg "Operation synchronicity (FHIR-41202)"` | Later implementation discussion added the `either` code and derivation comment. |
| Zulip | Optional async interaction behavior | `https://chat.fhir.org/#narrow/stream/implementers/topic/%E2%9C%94%20Optional%20Asynchronous%20Interaction%20Request%20Pattern`; `bun run zulip:search snapshot implementers "Optional Asynchronous Interaction Request Pattern"` | Later implementer discussion on whether servers can respond synchronously to `Prefer: respond-async`; useful context but not a direct current-page action. |
| Confluence | FHIR-I 2022-02-07 minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/90345037/FHIR+Infrastructure+Minutes+CC+2022-02-07`; `bun run confluence:search snapshot 90345037` | Records FHIR-I vote for `FHIR-35936`. |
| Confluence | FHIR-I 2023-12-18 minutes | `https://confluence.hl7.org/spaces/FHIRI/pages/212731099/FHIR+Infrastructure+Minutes+CC+2023-12-18`; `bun run confluence:search snapshot 212731099` | Records FHIR-I vote for `FHIR-41202`. |
| Live check | Dead API Incubator links | `curl -L -s -o /dev/null -w '%{http_code} %{url_effective}\n' https://build.fhir.org/ig/HL7/api-incubator/async-bulk.html` and same for `async-bundle.html` | Both returned `404`; the extension-pack link returned `200`. |

## Change summary

### Split and relocation of detailed async semantics - substantive/normative history

R4 `async.html` contained the full asynchronous bulk data request pattern: kick-off request headers, `_outputFormat`, success/error responses, DELETE cancellation, polling status, completion manifest fields, file downloads, and an example response. The R6 ballot4 `async.html` no longer contains those details. It is an informative overview that states FHIR defines two asynchronous patterns and links to external API Incubator pages.

The major transformation occurred in `440a91ad3fc960eac116920548e0f3b2e3539aca` for `FHIR-35936`, which created separate `source/async-bulk.html` and `source/async-bundle.html` pages and reduced `async.html` to an overview. The R6 normative cleanup commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` then deleted those local detail pages and changed links from local `async-bulk.html`/`async-bundle.html` to `https://build.fhir.org/ig/HL7/api-incubator/...`.

### New conformance/discovery guidance - semantic guidance

Commit `3512b7ea6d43b0409809b60ae404037102e91f63` implemented `FHIR-41202` by adding `OperationDefinition.synchronicity`, core `synchronicity-control` CodeSystem/ValueSet, and a short conformance section in `async.html`. The page now tells readers that operations can declare sync/async/either behavior and systems can declare server behavior via synchronicity extensions in CapabilityStatements.

The final code system includes `either`, which is not in the original Jira resolution text but is explicitly supported by the later Zulip implementation discussion.

### Link/reference changes - reader-facing

- `$export` link changed from the SMART bulk data docs GitHub page to `http://hl7.org/fhir/uv/bulkdata/export.html`.
- R5-era overview links pointed to local `async-bulk.html` and `async-bundle.html`; R6 ballot4 links point to API Incubator `build.fhir.org/ig/HL7/api-incubator/...` pages.
- The current API Incubator links are broken (`404`) for both `async-bulk.html` and `async-bundle.html`. `FHIR-53868` tracks the same broken `async-bundle.html` URL from `http.html`; `async.html` has both broken URLs.

### Metadata/template/navigation - mechanical/editorial

- Page title changed from singular "Asynchronous pattern" to plural "Asynchronous patterns".
- Standards status changed from Draft/FMM 2 in R4 to Informative/no FMM in R6 ballot4.
- Table markup changed from older `colsd` format to `colsi` with "Responsible Owner".
- `d7b8dad...`, `c3da43...`, and parts of `270e0...` are broad template/status cleanups rather than page-specific async decisions.

### Current concrete defects - editorial/rendering

- `async.html:40`, `async.html:44`, and `async.html:51` point to API Incubator URLs that return `404`.
- `async.html:37` and `async.html:55` both use `<h3 id="patterns">`, so the Conformance heading has a duplicate anchor instead of a unique `#conformance`.
- `async.html:63` has a stray closing parenthesis after `CapabilityStatements.)`.

## Source history

| Date | Commit | Summary | Classification | Page-specific effect |
|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | update html template | mechanical/noise | Removed wrapping `<div class="col-12">`; no async semantic change. |
| 2022-02-09 | `440a91ad3fc960eac116920548e0f3b2e3539aca` | split and update async page per FHIR-35936 | substantive/semantic | Replaced monolithic R4 async page with overview; created `source/async-bulk.html` and `source/async-bundle.html`; PR `#1668`. |
| 2022-09-05 | `c3da43d4d906bc8ef71d67923be5e5db976665be` | tidy up status codes on pages, and set version for ballot | metadata/mechanical | Changed table class `colsd` to `colsi`. |
| 2022-12-13 | `d382fc3af52ab7607c6c8fead1f47cdf09be3562` | fixing up broken links etc (links to build.fhir.org) | link/editorial | Changed Bulk Data IG link from `https://hl7.org/...` to `http://hl7.org/...`. |
| 2024-09-11 | `5d721b40c9f2047200b99d2511d299cb7ebd28d4` | Technical corrections on async pattern files. | editorial | Added "FHIR supports two asynchronous patterns:" before the list. |
| 2025-03-02 | `3512b7ea6d43b0409809b60ae404037102e91f63` | FHIR-41202 Define a way for an OperationDefinition to indicate that the operation follows the async pattern. | semantic guidance | Added conformance paragraph to `async.html`; added core `OperationDefinition.synchronicity` and synchronicity CodeSystem/ValueSet. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | normative changes for R6 | substantive relocation + broad mechanical | Deleted `source/async-bulk.html` and `source/async-bundle.html`; changed overview links to API Incubator URLs; removed FMM cell from overview table. |

## Jira evidence

### Explicit Jira keys from commits/patches

#### `FHIR-35936` - Update async.html to align with community work on FHIR Bulk Data IG

- Link: https://jira.hl7.org/browse/FHIR-35936
- Snapshot command: `bun run jira:search snapshot FHIR-35936`
- Status: Published; resolution: Persuasive with Modification; change impact: Non-substantive; applied for R5; vote Josh Mandel/Daniel Gottlieb 21-0-0 on 2022-02-07.
- Description says FHIR-I agreed at the January 2022 WGM to update the async page with DSTU2 Bulk IG content and likely split into an FMM4 bulk export pattern plus an FMM0/FMM1 non-bulk interaction pattern.
- Resolution: "Agree to the proposed split. Will complete the 'todo' section on Async-bundle and remove references to 'bulk' on that page. Will mark the Async-bundle page as FMM 1."
- Jira comments link the key Zulip threads and a `better-async` build branch.
- Implementation: commit `440a91ad3fc960eac116920548e0f3b2e3539aca`; PR `https://github.com/HL7/fhir/pull/1668`.

#### `FHIR-41202` - Define a way for an OperationDefinition to indicate that the operation follows the async pattern

- Link: https://jira.hl7.org/browse/FHIR-41202
- Snapshot command: `bun run jira:search snapshot FHIR-41202`
- Status: Applied; resolution: Persuasive with Modification; change impact: Compatible, substantive; applied for R6; vote Rick Geimer/Gino Canessa 7-0-0 on 2023-12-18.
- Description asks how an `OperationDefinition` indicates an asynchronous response and requests async-pattern documentation if there is an existing mechanism or a new mechanism if not.
- Resolution defines `OperationDefinition.synchronicity` and a CapabilityStatement synchronicity extension, and explicitly says the async page should be updated with text matching the current conformance paragraph.
- Implementation: commit `3512b7ea6d43b0409809b60ae404037102e91f63`.
- Later source and Zulip evidence refined the code list to include `either`, which is visible in current `structuredefinition-OperationDefinition.xml:542-545` and `codesystem-synchronicity-control.xml:36-50`.

### Other Jira issues that plausibly explain or affect current page text

#### `FHIR-53868` - Broken links to Asynchronous Interaction Request Pattern

- Link: https://jira.hl7.org/browse/FHIR-53868
- Snapshot command: `bun run jira:search snapshot FHIR-53868`
- Status: Triaged; unresolved; R6 ballot issue; related URL is `https://hl7.org/fhir/6.0.0-ballot4/http.html`.
- Description: "The links from text titled 'Asynchronous Interaction Request Pattern' are broken" and names `https://build.fhir.org/ig/HL7/api-incubator/async-bundle.html`.
- This issue is not filed directly against `async.html`, but the same URL is present on `async.html:44`. The related `async-bulk.html` API Incubator URL on `async.html:40` also returns `404`.

#### `FHIR-52426` - Core element code binding should not point to external content

- Link: https://jira.hl7.org/browse/FHIR-52426
- Snapshot command: `bun run jira:search snapshot FHIR-52426`
- Status: Applied; resolution: Persuasive; applied for R6.
- Resolution moved the synchronicity CodeSystem and ValueSet from the extensions pack into FHIR Core. This explains why current R6 source has `source/operationdefinition/codesystem-synchronicity-control.xml` and `valueset-synchronicity-control.xml`.
- This is context for `OperationDefinition.synchronicity`; it does not itself create an `async.html` action beyond confirming the core binding is no longer external.

### Context-only Jira hits not driving action

- `FHIR-46199`, `FHIR-41490`, `FHIR-42769`, `FHIR-24882`, `FHIR-50598`, and several IG-specific async hits appeared in broad phrase searches. They were not elevated because they do not explain the R4-to-R6 `source/async.html` change or reveal a current defect on this page.
- Searches for the stray `CapabilityStatements.)` punctuation produced broad `CapabilityStatements` hits but no reliable exact current-page tracker.

## Zulip evidence

### Explicit key and source-intent threads

- `bun run zulip:search fts '"FHIR-35936"' --limit 20` found `#fhir/infrastructure-wg > Agenda for Feb 7`, where Dan Gottlieb asked to add async page updates to the FHIR-I call agenda and linked Jira `FHIR-35936`, PR `https://github.com/HL7/fhir/pull/1668`, and a build branch.
- `bun run zulip:search snapshot fhir/infrastructure-wg "Async FMM for FHIR R5"` captured Josh Mandel's 2022-01-18 rationale: the bulk async use case had enough implementation experience for FMM4, but arbitrary FHIR interactions did not; this supports the split into bulk vs non-bulk patterns.
- `bun run zulip:search snapshot implementers "Async use cases: delay vs data deluge"` captured the 2021-06-30 to 2022-02-08 design discussion for non-bulk async use cases such as human intervention, validation, slow external dependencies, high-frequency monitoring, and queued writes. It also records the rationale for wrapping eventual responses in a Bundle to preserve HTTP response semantics.

### `FHIR-41202` implementation discussion

- `bun run zulip:search fts '"FHIR-41202"' --limit 20` and `bun run zulip:search snapshot fhir/infrastructure-wg "Operation synchronicity (FHIR-41202)"` found the March 2025 implementation thread.
- Grahame Grieve noted the Jira resolution only had synchronous/asynchronous and proposed a third option; Lloyd McKenzie preferred the label `either` rather than `both`; Grahame agreed.
- The thread also produced the derivation comment now visible on `OperationDefinition.synchronicity`: derived operations cannot switch synchronous to asynchronous or vice versa, but may choose one if synchronicity is `either` or unspecified.
- This supports the current source implementation and avoids treating `either` as an intent mismatch.

### Later background discussion

- `bun run zulip:search snapshot implementers "Optional Asynchronous Interaction Request Pattern"` records a 2024 implementer question about whether a server may answer synchronously when the client sends `Prefer: respond-async`. Josh Mandel suggested a server should not return async unless the client indicated capability, but clients invoking async should be prepared for synchronous responses. Lloyd suggested clarifying in the spec; Josh said there was not enough implementation experience for new rules.
- This thread is useful context but I did not elevate it to an action item: it is about behavior of the external async interaction pattern rather than a clear defect in the current overview page.

### Failed or corrected searches

- Unquoted Zulip searches for `FHIR-35936` and `FHIR-41202` failed because FTS parsed the hyphenated key as a column/operator expression (`SQLiteError: no such column`). Rerunning with quoted phrase syntax (`'"FHIR-35936"'`, `'"FHIR-41202"'`) succeeded.

## Confluence evidence

- `bun run confluence:search refs jira FHIR-35936` and `bun run confluence:search snapshot 90345037` found FHIR Infrastructure Minutes CC 2022-02-07. The minutes record `jira:FHIR-35936 Persuasive Motion: Josh Mandel/Daniel Gottlieb: 21-0-0`, matching the Jira vote metadata and implementation shortly afterward.
- `bun run confluence:search refs jira FHIR-41202` and `bun run confluence:search snapshot 212731099` found FHIR Infrastructure Minutes CC 2023-12-18. The minutes record `jira:FHIR-41202 Persuasive with Mod Motion: Rick Geimer/Gino Canessa: 7-0-0`, matching Jira.
- No Confluence page was found that explains the 2025-10-31 R6 normative deletion of `async-bulk.html`/`async-bundle.html`; the source commit and PR metadata are the only evidence located for that relocation.

## Timeline

- 2021-06-30 to 2022-02-08: Zulip implementer thread discusses non-bulk async use cases and response modeling.
- 2022-01-18: Zulip FHIR-I thread discusses async FMM for R5 and the distinction between bulk and arbitrary interactions.
- 2022-02-03: `FHIR-35936` created.
- 2022-02-07: FHIR-I votes `FHIR-35936` persuasive; Confluence minutes and Jira both record 21-0-0.
- 2022-02-09: Commit `440a91ad3fc960eac116920548e0f3b2e3539aca` and merged PR `#1668` split/update async pages.
- 2023-05-06: `FHIR-41202` created.
- 2023-12-18: FHIR-I votes `FHIR-41202` persuasive with modification; Confluence minutes and Jira both record 7-0-0.
- 2024-06-06 to 2024-06-07: Zulip implementer thread discusses optional/synchronous responses to async requests; no direct page change found.
- 2024-09-11: Commit `5d721b40c9f2047200b99d2511d299cb7ebd28d4` adds "FHIR supports two asynchronous patterns".
- 2025-03-01 to 2025-03-03: Zulip implementation thread for `FHIR-41202` adds `either` and derivation semantics.
- 2025-03-02: Commit `3512b7ea6d43b0409809b60ae404037102e91f63` implements `FHIR-41202` in source.
- 2025-09-22: `FHIR-52426` resolved to move synchronicity CodeSystem/ValueSet into core.
- 2025-10-31: Commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` deletes local async detail pages and links to API Incubator.
- 2025-11-02: PR `#3901` containing the R6 normative cleanup merged.
- 2026-01-08: `FHIR-53868` created for broken Asynchronous Interaction Request Pattern links in R6 ballot4.

## Evidence log

- Confirmed page boundary and line counts:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/async.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/async.html" && echo "new exists"`
  - `wc -l` reported 152 old lines and 68 new lines.
- Reviewed direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/async.html`
  - Established that detailed R4 async bulk content was removed from this page and replaced by overview/conformance links.
- Reviewed source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/async.html`
  - `git show --stat --patch` for each of the 7 page-touching commits.
- Inspected key commits with broader stats:
  - `git show --stat --summary 440a91ad3fc960eac116920548e0f3b2e3539aca`
  - `git show --stat --summary 3512b7ea6d43b0409809b60ae404037102e91f63`
  - `git show --stat --summary 270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`
- Checked GitHub PR metadata:
  - `gh pr view 1668 --repo HL7/fhir ...` confirmed PR `#1668` merged 2022-02-09 and contains commit `440a91...`.
  - `gh pr list --repo HL7/fhir --state all --search <commit>` found PR `#3163` for `5d721...`, PR `#3340` for `3512...`, and PR `#3901` for `270e0...`.
- Read current page end-to-end with `view` of `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/async.html:1-69`.
- Searched related source:
  - `rg -n "synchronicity"` in current source found the page link and core OperationDefinition/code-system files.
  - `glob **/async-bulk.html` and `glob **/async-bundle.html` in the current R6 source tree found no files.
- Searched/snapshotted Jira:
  - `bun run jira:search snapshot FHIR-35936`
  - `bun run jira:search snapshot FHIR-41202`
  - `bun run jira:search snapshot FHIR-53868`
  - `bun run jira:search snapshot FHIR-52426`
  - FTS queries included `"Asynchronous Interaction Request"`, `"OperationDefinition.synchronicity"`, `"synchronicity-control"`, and `async pattern OperationDefinition`.
- Searched/snapshotted Zulip:
  - `bun run zulip:search fts '"FHIR-35936"' --limit 20`
  - `bun run zulip:search fts '"FHIR-41202"' --limit 20`
  - `bun run zulip:search snapshot fhir/infrastructure-wg "Async FMM for FHIR R5"`
  - `bun run zulip:search snapshot implementers "Async use cases: delay vs data deluge"`
  - `bun run zulip:search snapshot fhir/infrastructure-wg "Operation synchronicity (FHIR-41202)"`
  - `bun run zulip:search snapshot implementers "Optional Asynchronous Interaction Request Pattern"`
- Searched/snapshotted Confluence:
  - `bun run confluence:search refs jira FHIR-35936`
  - `bun run confluence:search refs jira FHIR-41202`
  - `bun run confluence:search snapshot 90345037`
  - `bun run confluence:search snapshot 212731099`
- Checked live link status:
  - `https://build.fhir.org/ig/HL7/api-incubator/async-bulk.html` returned `404`.
  - `https://build.fhir.org/ig/HL7/api-incubator/async-bundle.html` returned `404`.
  - `https://build.fhir.org/ig/HL7/fhir-extensions/StructureDefinition-synchronicity-control.html` returned `200`.

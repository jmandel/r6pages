# async page change review

## Metadata

- Page path: `source/async.html`
- Page label: `async`
- Page status: modified and present in both source trees; R6 ballot4 page is an Informative hub page.
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Output file: `todo/async.md`
- Review confidence: high for source diff/history and FHIR-35936/FHIR-41202 causality; medium for the final R6 page-move intent because it is evidenced mainly by FHIR-I minutes/PR context rather than an explicit Jira key in the final commit.

## Investigation coverage

Checked file presence in both trees, rename-aware old/new diff, seven commits touching `source/async.html`, patches for each page-touching commit, pickaxe history for changed phrases, full newer page read, and line-numbered current/old source excerpts.

Explicit Jira keys found in source history: `FHIR-35936`, `FHIR-41202`. Jira snapshots read for `FHIR-35936`, `FHIR-41202`, `FHIR-24882`, `FHIR-32140`, `FHIR-32146`, `FHIR-29212`, `FHIR-46141`, `FHIR-46199`, `FHIR-50861`, `FHIR-52426`, `FHIR-53868`, `FHIR-56860`. Zulip snapshots read for key async/FHIR-35936/FHIR-41202/FHIR-50861 threads. Confluence snapshots/refs read for FHIR-I minutes pages `90345037`, `212731099`, `358879196`, `389679504`, `391651167`, `358879917`, and targeted excerpts from `404095980`.

Noisy/inconclusive items: unquoted Jira/Zulip FTS issue-key searches like `FHIR-35936` failed because FTS parsed the hyphen; direct snapshots and quoted searches were used. Some Confluence pages render as one long text line, so targeted SQL excerpts were used. No Confluence refs were found for `FHIR-53868` or `FHIR-56860`.

## Executive summary

R4's `async.html` was a detailed Draft/FMM2 operational page for the bulk-data-style async pattern: kickoff headers, `_outputFormat`, polling, delete, completion manifest, and file downloads. R6 ballot4 reduces this to a short Informative hub that says FHIR has two async patterns, links the details out, and adds a conformance paragraph for `OperationDefinition.synchronicity` and CapabilityStatement synchronicity declarations.

The main well-evidenced cause is `FHIR-35936`: FHIR-I agreed in February 2022 to split/update the async page for R5, separating bulk-data experience from less-mature arbitrary interaction async. `FHIR-41202` later caused the conformance paragraph and `OperationDefinition.synchronicity` linkage.

The final R6 move is less clean: commit `270e0ceb7b02`/PR `HL7/fhir#3901` removed local `async-bulk.html` and `async-bundle.html` and pointed the hub to the API Incubator, but FHIR-I minutes said Async Bulk should move to the Bulk Data IG and current links 404. Later Jira/Zulip/Confluence evidence shows the async interaction pattern remains unsettled.

## Current R6 ballot4 page state

The current page has these sections:

- Metadata/status table: Responsible Owner FHIR WG; Standards Status Informative (`source/async.html` lines 14-23).
- Use Case: synchronous REST operations are not always suitable for significant server-side processing or large data returns; `$export` is given as an example; the patterns are based on RFC 7240 and can be used for FHIR defined interactions and operations (lines 25-35).
- Patterns: two patterns are named: Asynchronous Bulk Data Request, returning a manifest with links to resource files; and Asynchronous Interaction Request, returning a Bundle Resource (lines 37-49).
- Incubator notice: says the patterns are defined in the API Incubator while details are finalized through implementation testing (lines 50-53).
- Conformance: says operations can declare synchronicity via `OperationDefinition.synchronicity`, and systems can declare synchronicity for operations/interactions using CapabilityStatement extensions (lines 55-64).

Current concerns found while reading end-to-end:

- The page has duplicate section anchors: both “Patterns” and “Conformance” use `id="patterns"` (lines 37 and 55).
- The sentence ending “in their CapabilityStatements.)” has an extra close parenthesis (line 63).
- The API Incubator links at lines 40, 44, and 51 currently return HTTP 404 by `curl -L -I`.
- Line 48 says the interaction pattern returns a Bundle Resource, but `FHIR-50861` and 2025 FHIR-I discussions identify this as a problematic/stale constraint.
- The page says both patterns are in API Incubator, while FHIR-I minutes `389679504` said Async Bulk should move to the Bulk Data IG and Async Interactions to API Incubator.

## Major change clusters

### 1. Page status/template and page shape

- What changed: title became plural; old `col-12` wrapper was removed; status changed from Draft/FMM2 in R4 to Informative/no FMM in R6; R6 table now says “Responsible Owner”.
- Type: structure/template/status/editorial.
- Commits/evidence: `d7b8dadc6213` removed the wrapper; `c3da43d4d906` changed `colsd` to `colsi`; `270e0ceb7b02` removed FMM and changed owner wording.
- Intent: mostly mechanical/status churn; final Informative status aligns with the R6 move-out strategy.

### 2. R4 detailed bulk async content removed/split

- What changed: the detailed R4 sections for kickoff, delete, status polling, completion manifest, file requests, `_outputFormat`, `Content-Location`, `X-Progress`, and ndjson output were removed from `async.html`.
- Type: semantic/structural/reference/example removal.
- Commits/Jira: `440a91ad3fc9` / PR `HL7/fhir#1668`, subject “split and update async page per FHIR-35936”. `FHIR-35936` was Published, Persuasive with Modification, Applied for R5, vote Josh Mandel/Daniel Gottlieb 21-0-0, and explicitly proposed splitting bulk export from async interactions.
- Intent: intentional. The old details moved into child pages `async-bulk.html` and `async-bundle.html` in R5-era source.
- Final application: partly superseded. R6 commit `270e0ceb7b02` later deleted the child pages and left only external links.

### 3. Async pattern summary and externalization

- What changed: R6 page now summarizes two patterns and links them to `https://build.fhir.org/ig/HL7/api-incubator/async-bulk.html` and `.../async-bundle.html`; local child pages were removed from `publish.ini`/`hierarchy.xml`.
- Type: semantic/reference/navigation.
- Commits/evidence: `270e0ceb7b02` / PR `HL7/fhir#3901` deleted `source/async-bulk.html` and `source/async-bundle.html`, removed them from publishing/nav, and changed links in `source/async.html`.
- Intent: intentional R6 extraction of less-stable content from core, supported by FHIR-I minutes `389679504` (2025-09-22).
- Final application: incomplete or mis-targeted. Minutes `389679504` say Async Bulk moves to Bulk Data IG, while the page links Async Bulk to API Incubator. Current API Incubator URLs 404.

### 4. Conformance text for synchronicity declarations

- What changed: added a Conformance section pointing to `OperationDefinition.synchronicity` and CapabilityStatement synchronicity extensions.
- Type: semantic/normative-adjacent conformance guidance.
- Commits/Jira: `3512b7ea6d43` / PR `HL7/fhir#3340`, subject `FHIR-41202 Define a way for an OperationDefinition to indicate that the operation follows the async pattern.` `FHIR-41202` was Applied for R6, Persuasive with Modification, vote Rick Geimer/Gino Canessa 7-0-0.
- Community evidence: Zulip `#fhir/infrastructure-wg > Operation synchronicity (FHIR-41202)` added the `either` option and refined server/client wording.
- Final application: mostly applied; editorial defects remain in the page anchor/parenthesis. Related source shows `OperationDefinition.synchronicity` has `synchronous | asynchronous | either`.

### 5. Later unresolved semantics around interaction async

- What changed: the final page still says the interaction pattern returns a Bundle Resource.
- Type: semantic/current-guidance risk.
- Relevant issues: `FHIR-46141` ($merge differs from core async), `FHIR-50861` (return type not always a bundle), Zulip `#implementers > Async interaction pattern`, and Confluence `404095980`.
- Intent/mechanical/unclear: unresolved; current text reflects the R5/R6 ballot pattern, but FHIR-I discussion in late 2025 indicates a replacement pattern is expected in API Incubator.
- Final application: not fully aligned with known follow-up intent.

## Source history

| Date | Commit | Subject | Explicit Jira/PR refs | Relevance |
|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213` | update html template | PR `HL7/fhir#1295`; no Jira | Mechanical wrapper removal. |
| 2022-02-09 | `440a91ad3fc9` | split and update async page per FHIR-35936 | `FHIR-35936`; PR `HL7/fhir#1668` | Main split: old operational content replaced by two-pattern summary and child pages. |
| 2022-09-05 | `c3da43d4d906` | tidy up status codes on pages, and set version for ballot | PR `HL7/fhir#2403`; no page Jira | Mechanical status-table class change. |
| 2022-12-13 | `d382fc3af52a` | fixing up broken links etc (links to build.fhir.org) | PR `HL7/fhir#2499`; no page Jira | Link churn: bulkdata URL `https` to `http`. |
| 2024-09-11 | `5d721b40c9f2` | Technical corrections on async pattern files. | PR `HL7/fhir#3163`; no Jira in subject | Adds “FHIR supports two asynchronous patterns”; minor clarification. |
| 2025-03-02 | `3512b7ea6d43` | FHIR-41202 Define a way for an OperationDefinition to indicate that the operation follows the async pattern. | `FHIR-41202`; PR `HL7/fhir#3340` | Adds Conformance section and supporting synchronicity artifacts. |
| 2025-10-31 | `270e0ceb7b02` | normative changes for R6 | PR `HL7/fhir#3901`; no page Jira in subject | Removes local child pages, points links to API Incubator, updates status wording. |

Mechanical/minor commits: `d7b8dadc6213`, `c3da43d4d906`, `d382fc3af52a`, and most of `5d721b40c9f2`. Meaningful content commits: `440a91ad3fc9`, `3512b7ea6d43`, `270e0ceb7b02`.

Pickaxe checks confirmed: `Asynchronous Interaction Request` and `Asynchronous Bulk Data Request` first appear in this page at `440a91ad3fc9`; `OperationDefinition.synchronicity` at `3512b7ea6d43`; API Incubator links and “FHIR defines two asynchronous patterns” at `270e0ceb7b02`.

## Jira evidence

### Explicitly referenced Jira issues

| Key | Status/resolution | Vote/applied version | Evidence and relevance |
|---|---|---|---|
| `FHIR-35936` | Published; Persuasive with Modification; Non-substantive clarification | Josh Mandel/Daniel Gottlieb 21-0-0; vote 2022-02-07; Applied for R5 | Direct source-history cause. Description says FHIR-I agreed to update async page with Bulk IG content and split into FMM4 bulk export and FMM0/FMM1 async interaction pages. Resolution agreed to the split. |
| `FHIR-41202` | Applied; Persuasive with Modification; Compatible, substantive enhancement | Rick Geimer/Gino Canessa 7-0-0; vote 2023-12-18; Applied for R6 | Direct source-history cause for Conformance section. Resolution text matches the page: add `OperationDefinition.synchronicity` and CapabilityStatement synchronicity extension guidance. |

### Other relevant Jira issues

| Key | Status/resolution | Relevance |
|---|---|---|
| `FHIR-24882` | Published; Persuasive; Applied for R5 | Earlier request to clarify async for PUT/POST; comment says R5 updates describe “Asynchronous Interaction Request”. |
| `FHIR-32140` | Published; Persuasive with Modification | Bulk Data IG duplicate-async issue; resolution says Bulk IG builds on FHIR async pattern and may extend it. Context for split/externalization. |
| `FHIR-32146` | Published; Persuasive with Modification | Bulk delete request duplicates base async; records ambiguity over spec precedence. |
| `FHIR-29212` | Triaged; unresolved after 2025 reopen | CapabilityStatement support/discovery of async. 2025 comments expect async discovery features in API Incubator after App Feature IG is clearer. |
| `FHIR-46141` | Waiting for Input; Not Persuasive with Modification resolution text | $merge async behavior differs from general async; comments note async page is informative and “can be used”, not “must”. Led to `FHIR-50861`. |
| `FHIR-46199` | Resolved - change required; Persuasive with Modification | Asked to add Task as another architectural async approach; not visibly applied to current hub page. |
| `FHIR-50861` | Waiting for Input; unresolved | Challenges “interaction pattern returns Bundle” and proposes a third/simplified pattern; comments point to API Incubator. Current page line 48 remains at risk. |
| `FHIR-52426` | Applied; Persuasive; Applied for R6 | Required binding for `OperationDefinition.synchronicity` should not point to external content; resolution moved CodeSystem/ValueSet into core. |
| `FHIR-53868` | Triaged; unresolved ballot issue | Reports broken links to `https://build.fhir.org/ig/HL7/api-incubator/async-bundle.html`, matching current page link target. |
| `FHIR-56860` | Waiting for Input; unresolved | Says async request patterns have been removed from current core build and proposes adding Async Bulk to the Bulk Data IG. Supports the move-out story and the bulk-target mismatch. |

## Community and workgroup evidence

### Zulip threads

| Date(s) | Stream/topic | Evidence |
|---|---|---|
| 2022-02-07 | `#fhir/infrastructure-wg > Agenda for Feb 7` | Dan Gottlieb asked to discuss R5 async updates and linked `FHIR-35936`, PR `HL7/fhir#1668`, and the branch build. Formal agenda support, not a disposition by itself. |
| 2022-01-18 | `#fhir/infrastructure-wg > Async FMM for FHIR R5` | Josh Mandel distinguishes mature Bulk Data async (FMM4) from less-experienced arbitrary FHIR interactions; rationale for split and status differences. |
| 2021-06-30 to 2022-02-08 | `#implementers > Async use cases: delay vs data deluge` | Community use cases for non-bulk async; discussion of queueing, validation, slow backends, and why the async interaction pattern wrapped response semantics in a Bundle. Informal rationale feeding FHIR-35936. |
| 2025-03-01 to 2025-03-03 | `#fhir/infrastructure-wg > Operation synchronicity (FHIR-41202)` | Grahame/Lloyd add `either`, adjust meaningWhenMissing/server-client wording, and discuss derived operations. Informal implementation refinement after formal Jira vote. |
| 2024-06-06 to 2024-06-07 | `#implementers > Optional Asynchronous Interaction Request Pattern` | Clarifies practical expectations for `Prefer: respond-async`; Josh cautions against adding rules without more experience. |
| 2024-06-12 to 2025-05-13 | `#implementers > Async Patient Merge` | Identifies mismatch between $merge and core async; leads to `FHIR-46141`/`FHIR-50861`. |
| 2025-08-04 to 2025-11-27 | `#implementers > Async interaction pattern` | Josh proposes simpler pattern avoiding Bundle wrapping; discussion includes 303 redirect and response semantics. Informal rationale for future API Incubator work, not yet applied to ballot4 page. |
| 2022-08-24 to 2022-08-25 | `#fhir/infrastructure-wg > CapabilityStatement state support of async` | Mentions `FHIR-29212` and whether to revisit or leave to future CapabilityStatement2/feature work. |

### Confluence pages

| Page ID | Date/title | Evidence |
|---|---|---|
| `90345037` | 2022-02-07 FHIR Infrastructure Minutes CC | Agenda includes “updates to the async page for R5”; `FHIR-35936` passed Persuasive 21-0-0. Formal WG disposition. |
| `212731099` | 2023-12-18 FHIR Infrastructure Minutes CC | `FHIR-41202` passed Persuasive with Mod 7-0-0. Formal WG disposition. |
| `358879196` | 2025-06-30 FHIR Infrastructure Minutes CC | Discusses whether OperationDefinition should indicate which async pattern is used; suggests extension/synchronicity discussion. |
| `389679504` | 2025-09-22 FHIR Infrastructure Minutes CC | R6 move-out plan approved 10-0-0: Async Request moves to informative; Async Bulk moves to Bulk Data IG; Async Interactions moves to API Incubator. Also resolves `FHIR-52426`. |
| `358879917` | 2025-09 WGM Pittsburgh minutes | `FHIR-50861` noted with Zulip discussion and Josh’s simplified async proposal; “take up in another meeting.” |
| `391651167` | 2025-10-27 FHIR Infrastructure Minutes CC | Reopens `FHIR-29212` for async discovery features in API Incubator; says `FHIR-50861` should go into new API Incubator IG. |
| `404095980` | 2025-11-03 FHIR Infrastructure Minutes CC | Detailed discussion of simplified async interaction pattern; no vote; deferred pending PA review and API Incubator landing. |

## Highest-priority investigation items

- H-1: Resolve broken/mis-targeted external async links. Current source lines 40, 44, and 51 point to API Incubator URLs that now 404; FHIR-I minutes `389679504` say Async Bulk should move to Bulk Data IG, not API Incubator.
- H-2: Reconcile line 48 “This pattern returns a Bundle Resource” with `FHIR-50861`, `FHIR-46141`, and late-2025 FHIR-I/Zulip discussions proposing a non-Bundle simplified async interaction pattern.
- H-3: Verify the CapabilityStatement “synchronicity extensions” link/implementation expected by line 62. `FHIR-41202` intended such an extension, but `FHIR-29212` was later reopened for async discovery features in API Incubator, so page wording may overstate settled discovery behavior.

## Confirmed editorial/rendering defects

- E-1: Duplicate HTML anchor `id="patterns"` for both “Patterns” and “Conformance” (`source/async.html` lines 37 and 55).
- E-2: Extra close parenthesis in “in their CapabilityStatements.)” (`source/async.html` line 63).
- E-3: Current API Incubator links from the page return HTTP 404 (`async-bulk.html`, `async-bundle.html`, and the API Incubator root checked with `curl -L -I`).
- E-4: Related referenced artifact typo: `operationdefinition/codesystem-synchronicity-control.xml` has code `either` with display `System` (lines 47-49), which looks inconsistent with the page’s “either” wording.

## Timeline

| Date | Event type | Evidence | Notes |
|---|---|---|---|
| 2019-10-01 / 2020-03-23 | Jira created/resolved | `FHIR-24882` | Asked to support async PUT/POST; later comment says R5 async interaction pattern addresses this. |
| 2021-06 to 2022-02 | Zulip rationale | `#implementers > Async use cases: delay vs data deluge` | Non-bulk async use cases and Bundle wrapper rationale discussed. |
| 2022-01-18 | Zulip rationale | `#fhir/infrastructure-wg > Async FMM for FHIR R5` | Rationale for different maturity between bulk and arbitrary interaction async. |
| 2022-02-07 | WG vote | Confluence `90345037`; `FHIR-35936` | Async page split approved 21-0-0. |
| 2022-02-09 | Source commit/PR | `440a91ad3fc9`; PR `#1668` | Implements split/update in `source/async.html` and adds child pages. |
| 2023-12-18 | WG vote | Confluence `212731099`; `FHIR-41202` | OperationDefinition synchronicity proposal approved 7-0-0. |
| 2024-06 | Zulip/Jira | Optional async, Patient Merge threads; `FHIR-46141` | Reveals ambiguity over async interaction behavior and $merge mismatch. |
| 2024-09-11 | Source commit | `5d721b40c9f2`; PR `#3163` | Technical correction adds “FHIR supports two asynchronous patterns.” |
| 2025-03-01 to 2025-03-03 | Zulip refinement | `Operation synchronicity (FHIR-41202)` | Adds `either`; adjusts wording. |
| 2025-03-02 | Source commit/PR | `3512b7ea6d43`; PR `#3340` | Adds Conformance section to page and synchronicity artifacts. |
| 2025-06-30 | WG discussion | Confluence `358879196` | Discusses indicating which async pattern an operation uses. |
| 2025-09-22 | WG move-out plan | Confluence `389679504` | Async Request informative; Async Bulk to Bulk Data IG; Async Interaction to API Incubator. |
| 2025-10-27 | WG follow-up | Confluence `391651167` | Reopens async discovery issue; sends `FHIR-50861` to API Incubator. |
| 2025-10-31 / 2025-11-02 | Source commit/PR merge | `270e0ceb7b02`; PR `#3901` | Removes local async child pages and points hub page externally. |
| 2025-11-03 | WG discussion | Confluence `404095980` | Simplified async interaction pattern discussed; no vote; deferred. |
| 2026-01-08 | Jira ballot issue | `FHIR-53868` | Broken API Incubator async-bundle link reported. |
| 2026-05-05 | Jira follow-up | `FHIR-56860` | Bulk Data IG issue says core async patterns were removed and async bulk should be added to Bulk IG. |

## Gaps between intent and applied text

- The `FHIR-35936` split was applied in 2022, but the final R6 page no longer includes local child pages; this is intentional R6 move-out, not a simple continuation of the R5 split.
- FHIR-I minutes `389679504` said Async Bulk should move to the Bulk Data IG; final page instead links Async Bulk to API Incubator, and that link 404s.
- `FHIR-41202` conformance text is substantially applied, including the post-vote `either` option, but the page introduced duplicate anchors and a punctuation typo.
- `FHIR-50861`/late-2025 discussions show the async interaction pattern is expected to change; current line 48 still states the older Bundle-return model.

## Source/history context to preserve

- R4 `source/async.html` was detailed bulk async mechanics; R6 `source/async.html` is only a hub.
- Main content replacement: `440a91ad3fc9` (`FHIR-35936`, PR `#1668`).
- Main conformance addition: `3512b7ea6d43` (`FHIR-41202`, PR `#3340`).
- Main R6 extraction: `270e0ceb7b02` (PR `#3901`), which deleted `source/async-bulk.html` and `source/async-bundle.html` and removed them from publishing/nav.
- The page’s current external-link state is likely transient/stale relative to ongoing API Incubator/Bulk Data IG work.

## Suggested investigation order

1. Confirm intended final destinations for `async-bulk.html`, `async-bundle.html`, and the API Incubator root for the R6 publication branch.
2. Resolve `FHIR-50861`/API Incubator simplified async pattern before asserting “returns a Bundle Resource” in core.
3. Verify `FHIR-41202` CapabilityStatement extension rendering and whether `FHIR-29212` changes require softer wording.
4. Fix low-risk editorial issues: duplicate anchor, stray parenthesis, and related `either` display typo.
5. Re-run generated link checks on the rendered ballot/site, not just source.

## Evidence log

- `test -f` confirmed `source/async.html` exists in both old and new trees.
- `git diff --find-renames old..new -- source/async.html` showed 56 insertions/139 deletions and the detailed-to-hub rewrite.
- `git log --reverse old..new -- source/async.html` found seven page-touching commits.
- `git show --stat --patch <commit> -- source/async.html` inspected all seven page patches.
- `git log -S` for `OperationDefinition.synchronicity`, `Asynchronous Interaction Request`, `Asynchronous Bulk Data Request`, and API Incubator phrases tied text to commits `3512b7ea6d43`, `440a91ad3fc9`, and `270e0ceb7b02`.
- `gh api /repos/HL7/fhir/commits/<sha>/pulls` found PRs `#1295`, `#1668`, `#2403`, `#2499`, `#3163`, `#3340`, and `#3901`.
- Jira snapshots established formal dispositions for `FHIR-35936` and `FHIR-41202` and relevant unresolved follow-ups.
- Zulip snapshots established informal rationale and later disagreement; these were not treated as formal disposition.
- Confluence snapshots/refs established FHIR-I votes and the 2025 move-out plan.
- `curl -L -I` established current API Incubator URLs from the page return 404.
- Failed/noisy: unquoted FTS issue-key searches errored on hyphenated keys; quoted FTS/direct snapshots succeeded.

## Problems discovered and follow-up items

| ID | Priority | Type | Item | Evidence |
|---|---:|---|---|---|
| H-1 | P1 | Link/intent gap | Fix or retarget API Incubator async links; Async Bulk likely belongs in Bulk Data IG, and current links 404. | `source/async.html` lines 40, 44, 51; Confluence `389679504`; Jira `FHIR-53868`, `FHIR-56860`; `curl -L -I`. |
| H-2 | P1 | Semantic/staleness | Reconcile “Asynchronous Interaction Request returns a Bundle Resource” with unresolved `FHIR-50861` simplified pattern work. | `source/async.html` line 48; Jira `FHIR-50861`; Zulip `Async interaction pattern`; Confluence `404095980`. |
| H-3 | P2 | Conformance/discovery | Verify CapabilityStatement synchronicity extension wording/link against `FHIR-41202` implementation and reopened `FHIR-29212` discovery-feature work. | `source/async.html` lines 61-63; Jira `FHIR-41202`, `FHIR-29212`; Confluence `391651167`. |
| E-1 | P2 | Editorial/rendering | Duplicate `id="patterns"` anchors. | `source/async.html` lines 37 and 55. |
| E-2 | P3 | Editorial | Extra close parenthesis in CapabilityStatement sentence. | `source/async.html` line 63. |
| E-3 | P2 | Rendering/link | API Incubator root and async child links return 404. | `curl -L -I` results; Jira `FHIR-53868`. |
| E-4 | P3 | Related artifact typo | `either` code displays as `System` in synchronicity code system. | `operationdefinition/codesystem-synchronicity-control.xml` lines 47-49. |
| G-1 | P2 | Evidence gap | No explicit Jira key found in commit `270e0ceb7b02`; R6 move-out causality relies on PR `#3901` plus FHIR-I minutes. | Git history; Confluence `389679504`. |

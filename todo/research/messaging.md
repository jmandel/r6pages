# messaging research appendix

## Scope and coverage

- Page path: `source/messaging.html`
- Older version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- Older source tree: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- Newer version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Newer source tree: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: `source/messaging.html` exists in both source trees; detected status is modified, not added/deleted/renamed.
- Full newer page read end-to-end: yes, 654 lines.
- Direct source history: 43 commits touched `source/messaging.html` between the two commits.
- Explicit Jira keys found in commit subjects/patch history and snapshotted: `FHIR-26933`, `FHIR-25257`, `FHIR-23723`, `FHIR-25931`, `FHIR-26890`, `FHIR-36098`, `FHIR-23722`, `FHIR-25465`, `FHIR-25460`, `FHIR-37416`, `FHIR-25431`, `FHIR-38906`, `FHIR-24644`, `FHIR-38685`, `FHIR-38923`, `FHIR-39096`, `FHIR-40518`, `FHIR-40519`, `FHIR-40501`, `FHIR-40294`, `FHIR-42716`, `FHIR-41271`, `FHIR-43942`, `FHIR-43295`, `FHIR-44047`, `FHIR-45507`.
- Jira/Zulip/Confluence searches: explicit keys first; then changed phrases around `Bundle.identifier`, `fully-interconnected graph`, `MessageHeader.focus`, `Search in Messaging`, `Statement about interpreting Message Content`, and stale graph wording.
- Caveats: Zulip searches for most individual Jira keys had no human-thread hits. Confluence exact-phrase searches for `"fully-interconnected graph"` and `"Graph-connected Bundles"` did not find minutes beyond Jira-linked pages. I did not rebuild/render the spec; rendering findings are based on the HTML source page and the source preprocessor context.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New page, graph rules | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/messaging.html:25-47` | Current graph-connected rules plus raw Markdown placeholder. |
| Source | New page, stale basic rule | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/messaging.html:72-75` | Narrow "referenced from MessageHeader" wording remains after later graph-connected changes. |
| Source | New page, identifier text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/messaging.html:204-214` | Says each sent message should change `Bundle.identifier`. |
| Source | New page, reliable messaging table | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/messaging.html:237-249` | Category-specific resend rules sometimes keep the same `Bundle.identifier`. |
| Source | New page, operation instructions/example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/messaging.html:462-518` | Text requires `MessageHeader.focus` to Parameters, but the active example omits the focus reference. |
| Source | Bundle graph-connected notes | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/bundle/bundle-notes.xml:336-347` | Linked section says graph connections can include Reference, canonical, url, href, and reverse references. |
| Git | Full direct diff command | `git -C "$NEW_TREE" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/messaging.html` | Reopens the R4 -> R6 ballot4 page diff. |
| Git | `FHIR-39096` implementation | `87b1af3c094d4dd726733409d815683ceeab15c7` / https://github.com/HL7/fhir/commit/87b1af3c094d4dd726733409d815683ceeab15c7 | Replaced id-based identity/reliable messaging text with `Bundle.identifier`-based text. |
| Git | Operation example cleanup | `472644928c6d9df6d0cbc44736a1697fa8ef6ac2` / https://github.com/HL7/fhir/commit/472644928c6d9df6d0cbc44736a1697fa8ef6ac2 | Removed obsolete `MessageHeader.data` entries from examples. |
| Git | DSTU2 example correction | `307c3216b45f4fc4ba59d6026605cad823d47daf` / https://github.com/HL7/fhir/commit/307c3216b45f4fc4ba59d6026605cad823d47daf | Changed prose from `MessageHeader.data` to `MessageHeader.focus` but did not add focus elements to the example. |
| Git | `FHIR-43295` graph wording | `736523cda3b02579e307112bf1db369f79ec00cd` / https://github.com/HL7/fhir/commit/736523cda3b02579e307112bf1db369f79ec00cd | Changed message-bundle inclusion rule to connected RESTful reference graph. |
| Git | `FHIR-45507` graph link addition | `e3fe9fdef25099c995e905af26b84a15734f81c4` / https://github.com/HL7/fhir/commit/e3fe9fdef25099c995e905af26b84a15734f81c4 | Added `Graph-connected Bundles` link and raw placeholder line. |
| Git | R6 normative status | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changed page header from Trial Use/FMM to Normative. |
| Jira | `FHIR-39096` | https://jira.hl7.org/browse/FHIR-39096 / `bun run jira:search snapshot FHIR-39096` | Formal disposition for moving message identity to `Bundle.identifier`. |
| Jira | `FHIR-45507` | https://jira.hl7.org/browse/FHIR-45507 / `bun run jira:search snapshot FHIR-45507` | Formal disposition for `Graph-connected Bundles` and the exact placeholder text that remains in source. |
| Jira | `FHIR-43295` | https://jira.hl7.org/browse/FHIR-43295 / `bun run jira:search snapshot FHIR-43295` | Clarified document/message "must link" rule via RESTful references. |
| Jira | `FHIR-37416` | https://jira.hl7.org/browse/FHIR-37416 / `bun run jira:search snapshot FHIR-37416` | Tracks examples based on old `MessageHeader.data`/`event`; relevant to missing `focus` in active example. |
| Jira | `FHIR-36098` | https://jira.hl7.org/browse/FHIR-36098 / `bun run jira:search snapshot FHIR-36098` | Explains search-via-messaging change from typed Parameters to `url` parameter. |
| Zulip | Search in Messaging | https://chat.fhir.org/#narrow/stream/implementers/topic/Search%20in%20Messaging / `bun run zulip:search snapshot implementers "Search in Messaging"` | Origin discussion for `FHIR-36098`. |
| Zulip | Message identifier proposal | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Proposal%20for%20message%20identifier%20issues / `bun run zulip:search snapshot fhir/infrastructure-wg "Proposal for message identifier issues"` | Debate that led to the `Bundle.identifier`-only approach. |
| Zulip | MessageHeader/REST statement | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Statement%20about%20interpreting%20Message%20Content / `bun run zulip:search snapshot fhir/infrastructure-wg "Statement about interpreting Message Content"` | Rationale for `FHIR-41271` and the `SHALL NOT be relevant` text. |
| Confluence | FHIR SDC Minutes 20230223 | https://confluence.hl7.org/spaces/FHIRI/pages/156544639/FHIR+SDC+Minutes+CC+20230223 / `bun run confluence:search snapshot 156544639` | Meeting disposition for `FHIR-39096`, `FHIR-40518`, `FHIR-40519`. |
| Confluence | InM 2023-02-21 minutes | https://confluence.hl7.org/spaces/INM/pages/156542179/2023-02-21+InM+WG+Agenda+Minutes / `bun run confluence:search snapshot 156542179` | InM discussion says "We only need bundle.identifier." |
| Confluence | FHIR-I 2024-05-06 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/239211981/FHIR+Infrastructure+Minutes+CC+2024-05-06 / `bun run confluence:search snapshot 239211981` | Disposition for `FHIR-43295`. |
| Confluence | FHIR-I 2024-06-03 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/248710301/FHIR+Infrastructure+Minutes+CC+2024-06-03 / `bun run confluence:search snapshot 248710301` | Disposition for `FHIR-45507`. |

## Change summary

### Page status and template/navigation

- **Metadata/template/navigation:** Header changed from Trial Use/FMM 3 (`colstu`) to Normative (`colsn`) in `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`.
- **Mechanical/noise:** HTML wrapper `<div class="col-12">` removed by template update commits; whitespace, fragment parsing, and punctuation cleanup occurred across several commits.

### Message bundle contents and graph-connected requirements

- **Substantive/normative:** R4 text did not contain a strong connected-graph rule at the top of the page. R6 ballot4 says message Bundles are Bundle resources with SHALL rules: type `message`, first entry `MessageHeader`, include resources referenced by `MessageHeader.focus`/`MessageHeader.response.details`, include needed additional resources, and exclude resources outside a connected graph of RESTful references including the `MessageHeader` (`source/messaging.html:25-43`).
- **Substantive/normative:** `FHIR-25257` and `FHIR-23722` supplied the earlier need for all resources in a message Bundle to be linked to the MessageHeader. `FHIR-43295` later clarified that the linkage requirement is met using RESTful references. `FHIR-45507` added a shared Bundle section for graph-connected Bundles.
- **Current issue:** The current page still contains older narrow text under "Basic Messaging Assumptions": "The message bundle SHALL include only the MessageHeader resource, and any resources directly or indirectly ... referenced from it" (`source/messaging.html:72-75`). This is narrower than the newer graph-connected Bundle rule and the Bundle notes that include reverse/url/href references.
- **Current issue:** The source contains a raw Markdown placeholder: `All message Bundles SHALL be a [fully-interconnected graph](link to above).` (`source/messaging.html:46`). This came from the `FHIR-45507` resolution text and was not converted to HTML.

### Message exchange patterns and responses

- **Substantive/normative:** R4's "one or more response messages" became "zero or more response messages" for destination processing (`FHIR-40518`, commit `87b1af3...`; current `source/messaging.html:58-64`). This recognizes acknowledgments, notifications, reliable transport, and other cases where no message-level response is expected.
- **Semantic guidance:** Message exchange patterns now say responses are "typically" one or more and allow notification scenarios with only an HTTP response or OperationOutcome (`FHIR-25465`, `source/messaging.html:135-141`).
- **Semantic guidance:** Transfer mechanisms now explicitly include Apache Kafka and say additional mechanisms are expected to define their own implementation guides (`FHIR-40501`, `source/messaging.html:77-87`).

### Message identity and reliable messaging

- **Substantive/normative:** The identity section changed from two identifiers (`Bundle.id` and `MessageHeader.id`) to exactly one `Bundle.identifier` identifying the message (`FHIR-39096`, current `source/messaging.html:204-214`).
- **Substantive/normative:** Reliable-messaging resend behavior changed from combinations of `MessageHeader.id` and `Bundle.id` to `Bundle.identifier` only (`source/messaging.html:237-249`).
- **Semantic guidance:** A new implementation note says previous releases used `Bundle.id` and `MessageHeader.id`, but R6 uses `Bundle.identifier` exclusively (`source/messaging.html:187-189`).
- **Current issue:** The identifier section still says each time a message is sent, `Bundle.identifier` "should be changed to a new value" (`source/messaging.html:208-209`), while the reliable-messaging rules require/suggest retaining the same `Bundle.identifier` for consequence and many notification resends (`source/messaging.html:237-240`). This should be qualified as "new/re-triggered messages" or made explicitly subject to the reliable-messaging rules.

### Relationship between Messaging and REST

- **Substantive/normative:** New text says the RESTful representation of a message is the complete Bundle and that MessageHeader within the Bundle does not have reliable identity (`FHIR-39096`, current `source/messaging.html:377`).
- **Substantive/normative:** `FHIR-41271` added "MessageHeader and REST": after resources are removed from the message Bundle and processed elsewhere, the MessageHeader SHALL NOT be relevant for interpreting the resource (`source/messaging.html:436-441`).
- **Rationale evidence:** Zulip thread `fhir/infrastructure-wg > Statement about interpreting Message Content` records the rationale for using `SHALL not be relevant` rather than softer guidance; Lloyd summarized that a design requiring MessageHeader knowledge after processing is non-conformant.

### Events, operations, and search via messages

- **Substantive/normative:** Event wording now points to `MessageHeader.event[x]` rather than old `message.code` (`FHIR-26890`, `source/messaging.html:447-452`).
- **Example/semantic guidance:** Operation invocation prose now uses `MessageHeader.focus` rather than obsolete `MessageHeader.data` (`FHIR-37416`, current `source/messaging.html:462-478`).
- **Current issue:** The active operation example includes a Parameters entry but no `MessageHeader.focus` reference to it (`source/messaging.html:483-518`). This makes the example inconsistent with the immediately preceding operation rules and with graph-connected message-bundle rules.
- **Substantive/normative:** Search via messages was simplified to use a Parameters parameter named `url` with the REST search string, instead of mapping every search parameter to typed Parameters entries (`FHIR-36098`, `source/messaging.html:526-546`). The old detailed typed-parameter example is commented out.
- **Example correction:** `_lastUpdated=>...` examples were changed to `_lastUpdated=gt...` (`FHIR-38685`, current `source/messaging.html:413-428`).

### Editorial-only or mechanical changes

- `FHIR-26933`: fixed "message of currency" typo in Notification row.
- `FHIR-25431`: changed "data type" to "datatype" in now-commented search example.
- `FHIR-42716`: removed erroneous `code>` text from the search example sentence.
- `FHIR-44047`: punctuation cleanup for `e.g.,` and `i.e.,`.
- QA commits changed `HL7 v2` to `HL7 V2`, `real world` to `real-world`, and other editorial details.

## Source history

| Commit | Date | Subject | Page-specific meaning |
|---|---:|---|---|
| `151472ad069d` | 2020-04-27 | Approved in FHIR-26933 | Editorial correction: Notification row says "message of notification." |
| `0b7a4055d444` | 2020-05-13 | Add language according to JIRA 25257 | Added initial "message bundle SHALL include only MessageHeader and resources referenced from it" rule. |
| `f5a167861326` | 2020-10-30 | Fix self-closing id tag | Example XML syntax fix. |
| `d7b8dadc6213` | 2021-06-27 | update html template | Mechanical template wrapper removal. |
| `8290dd11762a` | 2021-12-17 | Merge branch 'master' into patch-1 | Merge/mechanical. |
| `472644928c6d` | 2022-03-09 | Update messaging.html FHIR-23723 | Removed obsolete `<data>` elements from operation/search examples. |
| `562c10683163` | 2022-03-17 | Apply FHIR-25931 | Changed "request message" to "message." |
| `5e6f868d95b8` | 2022-08-15 | Merge branch 'master' into patch-1 | Merge/mechanical. |
| `d64b767e8c3f` | 2022-08-19 | FHIR-26890 fix statement about defining Event... | Changed event wording to `MessageHeader.event[x]`. |
| `f3dfec64462a` | 2022-08-25 | FHIR-36098 Search in Messaging limits functionality | Replaced detailed typed search-parameter mapping with `url` parameter guidance; commented old example. |
| `5f469dee282a` | 2022-08-25 | FHIR-23722 Messaging needs clarity about what can go in the message | Added top-level message Bundle content rules. Initial wording was rough and later refined. |
| `6fc70e07455b` | 2022-08-29 | FHIR-25465 Correct Documentation on expectation for response messages | Changed response expectations from mandatory to typical; added notification exception. |
| `6f083998e35e` | 2022-08-30 | add stu note to messaging | Added note soliciting feedback on id vs identifier rewrite. |
| `5e623b7da82f` | 2022-08-29 | FHIR-25460 | Clarified "Absence of Reliable Messaging" intro and sender wording. |
| `f6fc22afd5de` | 2022-08-31 | merge | Merge. |
| `307c3216b45f` | 2022-08-31 | FHIR-37416 Messaging examples based on DSTU2 MessageHeader | Changed operation/search prose from `data` to `focus` and `event` to `eventCoding`. |
| `8592e1207273` | 2022-08-31 | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Editorial terminology cleanup in search example. |
| `23a31a590b7b` | 2022-09-06 | update all ballot and stu notes | Converted STU note to ballot note. |
| `b924223d646f` | 2023-01-18 | #38906 clarify 3.5.1.5 messaging | Clarified reliable table wording and fixed "opreation." |
| `4aa5f54b169a` | 2023-01-19 | #24644 fix to messaging and messageDefinition | Changed GraphDefinition reference to MessageDefinition in content rule. |
| `4baa8f22bae6` | 2023-02-14 | fix character references for fragment parsing | Mechanical XML entity quote cleanup in examples. |
| `3116d5b45db6` | 2023-02-15 | FHIR-38685 Asynchronous Messaging example requests use wrong parameter value prefix | Changed search examples from `>` prefix to `gt`. |
| `dad7cf37c758` | 2023-02-21 | QA related changes | Editorial QA: HL7 V2, real-world, punctuation. |
| `9f780149387d` | 2023-02-21 | more QA | Editorial punctuation. |
| `9510c3ae69f5` | 2023-02-21 | FHIR-38923 ... remove notes for balloters | Removed ballot note asking for feedback on identifiers. |
| `60e98c41f6c5` | 2023-02-24 | more QA | Reliable table wording "server" -> "receiver." |
| `5e04fe1f02da` | 2023-02-24 | #FHIR-39096 ... #FHIR-40518 ... #FHIR-40519 | Minor cleanup before main identifier response changes. |
| `87b1af3c094d` | 2023-02-24 | FHIR-39096 FHIR-40518 FHIR-40519 | Main Bundle.identifier rewrite, zero-or-more response text, protocol wording, REST identity sentence. |
| `c8fa06a62c66` | 2023-02-24 | messaging wording | Refined message Bundle rules and moved anchor. |
| `f439bcf868fb` | 2023-02-26 | messaging example text | Updated consequence example to Bundle.identifier. |
| `dbfb0972c216` | 2023-02-26 | messaging example text | Updated currency example to Bundle.identifier. |
| `b667d192f3c4` | 2023-02-26 | messaging rest interaction | Added MessageHeader staging guidance and clarified RESTful message representation. |
| `754bde26858c` | 2023-02-26 | messaging operation example | Added Bundle.identifier/type to operation example and adjusted ids. |
| `11ae68a1d884` | 2023-02-26 | messaging operation example | Indentation cleanup. |
| `749bbcaef2a7` | 2023-03-11 | add implementers note | Added implementation note about `Bundle.identifier` replacing old ids. |
| `7ea88319c0e0` | 2023-03-20 | https://jira.hl7.org/browse/FHIR-40501 - Added Apache Kafka... | Added Apache Kafka to transport examples. |
| `48603ec9f67f` | 2025-01-31 | appled JIRA FHIR-40294,FHIR-42716,FHIR-41271,FHIR-43942 | Applied computable definition wording, MessageHeader/REST section, and search typo fix. |
| `c29dd25e3dba` | 2025-01-31 | Removed superflous text meant as explanation" | Removed explanatory detail from message Bundle content rule. |
| `736523cda3b0` | 2025-03-04 | FHIR-43295 Clarify ... "must link" requirements... | Changed rule to connected graph of RESTful references. |
| `270e0ceb7b02` | 2025-10-31 | normative changes for R6 | Changed page standards status to Normative. |
| `887bc2383fb7` | 2025-11-03 | FHIR-44047 | Punctuation cleanup. |
| `e3fe9fdef250` | 2025-11-04 | FHIR-45507 Need more clarification around how 'url' references are handled | Added link to `Graph-connected Bundles` and raw placeholder sentence. |
| `87f87a8a0389` | 2025-11-06 | Merge branch 'master' into i.e.-e.g- | Merge kept `FHIR-45507` placeholder and punctuation branch changes. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-26933` - Published, persuasive technical correction. Directly explains the Notification row typo fixed in `151472ad...`.
- `FHIR-25257` - Published, persuasive. Requested document-like rule that all message Bundle resources be connected to MessageHeader. Implemented first as the current stale `source/messaging.html:74` wording.
- `FHIR-23723` - Published, persuasive with modification. MessageDefinition graph cardinality; commit removed old `<data>` example references.
- `FHIR-25931` - Published, persuasive. Changed "request message" to "message."
- `FHIR-26890` - Published, persuasive with modification. Changed event wording to `MessageHeader.event[x]` and related event type terminology.
- `FHIR-36098` - Published, persuasive with modification. Search in Messaging typed-Parameters mapping was too limiting; resolution replaced it with a Parameters parameter named `url`.
- `FHIR-23722` - Published, persuasive with modification. Requested message Bundle content rules comparable to document Bundle content rules.
- `FHIR-25465` - Published, persuasive with modification. Response messages are typical, not guaranteed; notification scenarios may have only HTTP/OperationOutcome response.
- `FHIR-25460` - Published, persuasive with modification. Clarified unreliable messaging section and said table/examples should refer to `Bundle.identifier`; also requested an STU note.
- `FHIR-37416` - Published, persuasive. Examples used DSTU2 `MessageHeader.data` and old `event`; current operation prose was fixed to `focus`, but active example still lacks a focus reference.
- `FHIR-25431` - Published, persuasive. Editorial "datatype" cleanup.
- `FHIR-38906` - Published, persuasive. Clarified "envelope and message" wording in reliable table; later superseded by `Bundle.identifier` rewrite.
- `FHIR-24644` - Published, persuasive. MessageDefinition.url/identifier definitions; touched messaging page only through MessageDefinition wording.
- `FHIR-38685` - Published, persuasive. `_lastUpdated` search prefixes should be `gt`.
- `FHIR-38923` - Published, persuasive with modification. Mostly unrelated Operations for Large Resources issue; commit removed ballot notes from this page.
- `FHIR-39096` - Published, persuasive with modification. Core source of `Bundle.identifier` identity/reliable-messaging rewrite. Resolution specifically changed resend table to category-specific `Bundle.identifier` behavior and added the REST identity paragraph.
- `FHIR-40518` - Published, persuasive. Destination can return zero or more response messages.
- `FHIR-40519` - Published, persuasive. Transfer mechanism wording should note direct delivery plus other protocol-specific IGs.
- `FHIR-40501` - Published, persuasive. Add Apache Kafka as a transport example.
- `FHIR-40294` - Applied, persuasive with modification. Clarified computable definition source for message contents: MessageDefinition or OperationDefinition, not GraphDefinition/EventDefinition directly.
- `FHIR-42716` - Applied, persuasive. Fixed stray `code>` in search example.
- `FHIR-41271` - Applied, persuasive with modification. Added MessageHeader/REST section and implementation note.
- `FHIR-43942` - Applied, persuasive. Noted `FHIR-40294` had not been applied.
- `FHIR-43295` - Applied, persuasive with modification. Clarified document/message "must link" via RESTful references; comments clarify that resources outside the Bundle can be referenced by other mechanisms, and business identifier references inside the Bundle may exist in addition.
- `FHIR-44047` - Resolved - change required, persuasive. Punctuation cleanup.
- `FHIR-45507` - Applied, persuasive with modification. Created Bundle "Graph-connected Bundles" section and directed messaging/documents pages to add "All message Bundles SHALL be a [fully-interconnected graph](link to above)." Current messaging source retains the placeholder/Markdown text.

### Other Jira issues found by phrase searches

- `FHIR-26368` and `FHIR-26390` appeared in an extra Jira search for `"MessageHeader.focus" Parameters messaging`. They are broader Parameters-in-Bundle/messaging context and were not a direct source commit for `source/messaging.html` in this R4 -> R6 ballot4 page diff, so they were not elevated to action findings.
- `FHIR-29690` appeared in searches for `"Each time a message is sent" "Bundle.identifier"` and in Zulip background about `MessageHeader.response.identifier`. It is relevant background for why the community debated Bundle vs MessageHeader identifiers, but the page change itself is represented by `FHIR-39096`.

### Context-only Jira hits that should not drive action

- `FHIR-38923` is in the source history because a commit removed ballot notes from this page while applying another issue. It does not explain a current messaging semantic change.
- `FHIR-25431`, `FHIR-42716`, and `FHIR-44047` are editorial/mechanical in this page context unless a reviewer is specifically auditing style cleanup.

## Zulip evidence

- `implementers > Search in Messaging` (snapshot command: `bun run zulip:search snapshot implementers "Search in Messaging"`, URL: https://chat.fhir.org/#narrow/stream/implementers/topic/Search%20in%20Messaging) is the origin discussion for `FHIR-36098`. Gino Canessa asked whether anyone used Search in Messaging and identified typed Parameter mapping limitations, including prefixes and modifiers.
- `fhir/infrastructure-wg > Proposal for message identifier issues` (snapshot command: `bun run zulip:search snapshot fhir/infrastructure-wg "Proposal for message identifier issues"`, URL: https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Proposal%20for%20message%20identifier%20issues) captures the major identifier debate. Key points:
  - Vassil argued for using only `Bundle.identifier` and avoiding a separate `MessageHeader.identifier`.
  - Lloyd initially favored separate identifiers for event identity vs Bundle/retry identity.
  - InM minutes later recorded "We only need bundle.identifier."
  - After the vote, Vassil noted that example messages and examples in text still needed updates; Grahame said he could make them.
- `fhir/infrastructure-wg > Messaging and Identifiers` (snapshot command: `bun run zulip:search snapshot fhir/infrastructure-wg "Messaging and Identifiers"`) is earlier context from 2022-08-25 showing confusion over `Bundle.identifier`, `MessageHeader.id`, and reliable messaging.
- `implementers > MessageHeader.response.identifier` (snapshot command: `bun run zulip:search snapshot implementers "MessageHeader.response.identifier"`) is older 2019-2020 background. It shows that implementers were already confused about whether responses point to MessageHeader.id, Bundle.id, or Bundle.identifier; this supports why `FHIR-39096` mattered but is not itself an action item.
- `fhir/infrastructure-wg > Statement about interpreting Message Content` (snapshot command: `bun run zulip:search snapshot fhir/infrastructure-wg "Statement about interpreting Message Content"`, URL: https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/Statement%20about%20interpreting%20Message%20Content) supports `FHIR-41271`. Grahame, Lloyd, Eric, and Vassil discussed the strength of "SHALL not be relevant"; Lloyd summarized that systems requiring MessageHeader context after message processing are non-conformant.

## Confluence evidence

- `156544639` - FHIR SDC Minutes CC 20230223, https://confluence.hl7.org/spaces/FHIRI/pages/156544639/FHIR+SDC+Minutes+CC+20230223. Records messaging discussion dispositions: `FHIR-39096` persuasive with modification; `FHIR-40518` and `FHIR-40519` created/found persuasive.
- `156542179` - 2023-02-21 InM WG Agenda/Minutes, https://confluence.hl7.org/spaces/INM/pages/156542179/2023-02-21+InM+WG+Agenda+Minutes. Records InM discussion: "So we should support the bundle.identifier, but no need for a messageHeader.identifier" and "We only need bundle.identifier."
- `156543147` - FHIR Infrastructure Minutes CC 2023-02-20, https://confluence.hl7.org/spaces/FHIRI/pages/156543147/FHIR+Infrastructure+Minutes+CC+2023-02-20. Records pre-vote discussion of MessageHeader Identifier and the Zulip thread; notes many opinions against using Message.id and that reliable message protocol requires `Bundle.identifier` to change for certain types of messages.
- `175604272` and `175606781` - FHIR-I minutes 2023-06-19 and 2023-06-26. Record `FHIR-41271` moving to Zulip wording, then persuasive with modification after Zulip input.
- `239211981` - FHIR Infrastructure Minutes CC 2024-05-06. Records `FHIR-43295`: clarify the messaging sentence and document page; references SHALL use Reference.reference, canonical, or URI.
- `248710301` - FHIR Infrastructure Minutes CC 2024-06-03. Records `FHIR-45507` as persuasive, 8-0-0.
- `80121637` - FHIR Infrastructure Minutes CC 20200413. Records `FHIR-25257` persuasive, 10-0-0.

## Timeline

| Date | Kind | Evidence | What happened |
|---:|---|---|---|
| 2019-08 to 2019-11 | Jira/vote | `FHIR-23722`, `FHIR-23723` | Early work to clarify what can go in a message and MessageDefinition graph cardinality. |
| 2020-04-13 | Confluence/Jira | `FHIR-25257`, page `80121637` | FHIR-I approved connected MessageHeader rule. |
| 2020-04 to 2020-08 | Jira/source | `FHIR-25931`, `FHIR-26890`, commits `151472ad`, `0b7a405`, `562c106`, `d64b767` | Corrected message/request and event wording. |
| 2022-02-25/26 | Zulip | `implementers > Search in Messaging` | Gino identified search-via-messaging limitations. |
| 2022-03-28 | Jira | `FHIR-36098` | Search via messaging changed to URL-style parameter guidance. |
| 2022-08-25 to 2022-08-31 | Source | commits `f3dfec`, `5f469d`, `6fc70e`, `307c321`, etc. | Added search guidance, message Bundle rules, response exception, and example/prose updates. |
| 2023-02-10 to 2023-02-27 | Zulip | `Proposal for message identifier issues` | Major identifier debate; eventual direction was `Bundle.identifier` only. |
| 2023-02-20/21/23 | Confluence | pages `156543147`, `156542179`, `156544639` | FHIR-I/InM/SDC discussions and votes for identifier and response/protocol changes. |
| 2023-02-24 to 2023-03-11 | Source | `87b1af3`, `f439bcf`, `dbfb097`, `b667d1`, `749bbca` | Applied `Bundle.identifier` rewrite, REST relationship text, examples, and implementer note. |
| 2023-06-19 to 2023-06-26 | Zulip/Confluence/Jira | `FHIR-41271`, pages `175604272`, `175606781` | MessageHeader/REST interpretation rule discussed and approved. |
| 2024-05-06 | Confluence/Jira | `FHIR-43295`, page `239211981` | Clarified message/document "must link" using RESTful references. |
| 2024-06-03 | Confluence/Jira | `FHIR-45507`, page `248710301` | Approved graph-connected Bundle language and links. |
| 2025-01-31 | Source | `48603ec`, `c29dd25` | Applied several R6 Jira resolutions, including MessageHeader/REST and search typo. |
| 2025-03-04 | Source | `736523c` | Applied RESTful connected-graph language. |
| 2025-10-31 | Source | `270e0c` | Marked page Normative for R6. |
| 2025-11-04/06 | Source | `e3fe9f`, `87f87a` | Added Bundle graph link and left raw placeholder Markdown in messaging page. |

## Evidence log

- Confirmed page boundary:
  - `test -f "$OLD_TREE/source/messaging.html" && echo "old exists"`
  - `test -f "$NEW_TREE/source/messaging.html" && echo "new exists"`
- Direct diff:
  - `git -C "$NEW_TREE" --no-pager diff --find-renames --unified=5 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/messaging.html`
- Source history:
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/messaging.html`
  - `git -C "$NEW_TREE" --no-pager show --stat --patch <commit> -- source/messaging.html` for the meaningful page commits listed above.
- Jira:
  - Snapshotted all explicit keys listed in Scope, with no failed snapshots.
  - Extra phrase searches included `"MessageHeader.focus" Parameters messaging`, `"fully-interconnected graph"`, `"Each time a message is sent" "Bundle.identifier"`, `"message bundle SHALL include only" "MessageHeader" "referenced from it"`, and the Parameters example UUID. These mostly confirmed `FHIR-37416`, `FHIR-45507`, `FHIR-39096`, and `FHIR-23722`; no stronger separate Jira issue was found for the missing `MessageHeader.focus` example.
- Zulip:
  - Searched all explicit Jira keys and changed phrases.
  - Snapshotted `implementers > Search in Messaging`, `fhir/infrastructure-wg > Statement about interpreting Message Content`, `fhir/infrastructure-wg > Proposal for message identifier issues`, `fhir/infrastructure-wg > Messaging and Identifiers`, and `implementers > MessageHeader.response.identifier`.
- Confluence:
  - Ran `refs jira` and `fts` for all explicit Jira keys.
  - Snapshotted pages `156544639`, `248710301`, `239211981`, `175606781`, `175604272`, `156542179`, `156543147`, and `80121637`.
  - Exact Confluence phrase searches for `"fully-interconnected graph"` and `"Graph-connected Bundles"` found no high-signal minutes beyond the Jira-linked evidence.
- Full newer page read:
  - `wc -l "$NEW_TREE/source/messaging.html"` -> 654 lines.
  - Read `source/messaging.html:1-654` in chunks after diff/history/community investigation.

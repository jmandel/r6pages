# http research appendix

## Scope and coverage

- Page path: `source/http.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Boundary check: page exists in both source trees.
- Page read end-to-end: yes, R6 source lines 1-2551 were read in chunks.
- Direct diff: `source/http.html` changed by 1127 insertions and 385 deletions.
- Source history: 120 commits touched `source/http.html` between the two commits; 70 unique Jira keys appeared in commit subjects.
- Jira searches: snapshotted selected high-signal Jira issues tied to semantic changes or current defects: `FHIR-27113`, `FHIR-31715`, `FHIR-26067`, `FHIR-35168`, `FHIR-38991`, `FHIR-39137`, `FHIR-38994`, `FHIR-16198`, `FHIR-49646`, `FHIR-40496`, `FHIR-49707`, `FHIR-53546`, `FHIR-51608`, `FHIR-25200`, `FHIR-50847`, `FHIR-51428`, `FHIR-40957`, plus R6-version hits `FHIR-47208`, `FHIR-47216`, `FHIR-35172`, and `FHIR-54571`.
- Zulip searches: quoted-key searches for the same selected Jira keys and distinctive phrases; snapshots taken for the relevant trailing-slash, delete-history, conditional-patch, and compartment threads.
- Confluence searches: `refs jira` and FTS for the same selected Jira keys; snapshots taken for relevant FHIR-I minutes.
- Caveats: the commit history has many editorial/mechanical changes, so community search was bounded to distinctive page changes and actionable/current defects. Initial Zulip FTS searches for unquoted keys failed because hyphenated keys were parsed incorrectly; they were retried with quoted keys.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/http.html` | R4 baseline source |
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/http.html` | R6 ballot4 source under review |
| Source | Trailing slash rule | New page lines 173-178 | Normative SHALL added for `[base]/[type]/`, but example text has `[base]/type]` typo |
| Source | fhirVersion table | New page lines 482-528, especially 514-515 | Current R6 page still labels R5 as "this version" and lists no R6 row |
| Source | Conditional update/patch endpoints | New page lines 844-852 and 978-982 | Body text says conditional endpoints are `[base]/[type]?[search parameters]` |
| Source | Summary table conditional paths | New page lines 2469-2471 | Summary table says `update-conditional` and `patch-conditional` use `/[type]/[id]?` |
| Source | Capabilities 404 text | New page lines 1664-1672 | Current implementation of FHIR-40496 leaves the 404 sentence incomplete |
| Source | Markup defects | New page lines 358, 1859, 2479-2480, 2529 | Concrete reader/rendering defects |
| Commit | FHIR-27113 | `819e92b2ed43d416fd6f01342543e90fc4eb3245`, https://github.com/HL7/fhir/commit/819e92b2ed43d416fd6f01342543e90fc4eb3245 | Added trailing-slash equivalence rule |
| Commit | FHIR-31715 | `573d656f8bf90b62e39739538ea6c7b6c6397ace`, https://github.com/HL7/fhir/commit/573d656f8bf90b62e39739538ea6c7b6c6397ace | Added R4B/R5 fhirVersion rows |
| Commit | Version info updates | `f752cd7c77d81b962b0efef17c9b9967eb74c2a5`, https://github.com/HL7/fhir/commit/f752cd7c77d81b962b0efef17c9b9967eb74c2a5 | Left current table with R5 "this version" |
| Commit | FHIR-38991 | `d1399f74f158a7e810db07f8f79052c9b3ecd721`, https://github.com/HL7/fhir/commit/d1399f74f158a7e810db07f8f79052c9b3ecd721 | Added HTTP header table entries |
| Commit | FHIR-39137 | `e441170220c19e992f803667b245e63dcdd508cf`, https://github.com/HL7/fhir/commit/e441170220c19e992f803667b245e63dcdd508cf | Moved HTTP search protocol content from Search to HTTP |
| Commit | FHIR-38994 | `f47290bddbd45abf5ead98478c1796e50bb8ea83`, https://github.com/HL7/fhir/commit/f47290bddbd45abf5ead98478c1796e50bb8ea83 | Added GET/POST method guidance for search |
| Commit | FHIR-16198 | `c2724e8a568d816e87921a1f278bb7e42f771d77`, https://github.com/HL7/fhir/commit/c2724e8a568d816e87921a1f278bb7e42f771d77 | Added delete-history/delete-history-version and updated summary tables |
| Commit | FHIR-49646 | `68075d29992110bcc0fa953b73b2390595467f1c`, https://github.com/HL7/fhir/commit/68075d29992110bcc0fa953b73b2390595467f1c | Added missing conditional patch URL in the body |
| Commit | FHIR-40496 | `08e2ca9544ccdc4e19a042aa50bc35239a927da0`, https://github.com/HL7/fhir/commit/08e2ca9544ccdc4e19a042aa50bc35239a927da0 | Implemented capabilities clarification but left an incomplete sentence |
| Commit | FHIR-49707 | `ea1500d5ce880de53acbc24115e8f09fe666a66f`, https://github.com/HL7/fhir/commit/ea1500d5ce880de53acbc24115e8f09fe666a66f | Added dragon note for transaction URL replacement |
| Commit | FHIR-51608 | `7737bfeea16cc151563f253dfa404f58eacc9a5f`, https://github.com/HL7/fhir/commit/7737bfeea16cc151563f253dfa404f58eacc9a5f | Added compartment-interaction/search clarifications |
| Commit | FHIR-53546 | `ee0c7145162a37e8e7b66727df796b9f2caf028a`, https://github.com/HL7/fhir/commit/ee0c7145162a37e8e7b66727df796b9f2caf028a | Added conditional-create transactional-integrity warning |
| Jira | FHIR-27113 | https://jira.hl7.org/browse/FHIR-27113; reopen with `bun run jira:search snapshot FHIR-27113` | Formal trailing-slash resolution and PR #1124 |
| Jira | FHIR-40496 | https://jira.hl7.org/browse/FHIR-40496; reopen with `bun run jira:search snapshot FHIR-40496` | Resolution text includes the missing "nominated service URL" sentence |
| Jira | FHIR-49646 | https://jira.hl7.org/browse/FHIR-49646; reopen with `bun run jira:search snapshot FHIR-49646` | Confirms conditional patch URL should be `[base]/[type]?[search parameters]` |
| Jira | FHIR-47208/FHIR-47216 | https://jira.hl7.org/browse/FHIR-47208 and https://jira.hl7.org/browse/FHIR-47216 | Related R6 version-management omissions; not directly scoped to `http.html` but same stale R5 pattern |
| Zulip | Trailing slash | `bun run zulip:search snapshot implementers "Trailing slash at resource endpoints"` | Rationale and later concerns about placement/identity |
| Zulip | FHIR-27113 WG topic | `bun run zulip:search snapshot fhir/infrastructure-wg "FHIR-27113"` | Later note that the applied sentence was confusing |
| Zulip | Delete history | `bun run zulip:search snapshot implementers "Purge and Delete History Operations (FHIR-16198)"` | Detailed implementer discussion about delete-history semantics |
| Zulip | Conditional patch | `bun run zulip:search snapshot hapi "configuring core search"` | Origin of FHIR-49646; Gino gave the intended URL |
| Zulip | Compartments | `bun run zulip:search snapshot implementers "Compartment definitions"` | Background for FHIR-51608 |
| Confluence | FHIR-27113 vote | Page 91982712, https://confluence.hl7.org/spaces/FHIRI/pages/91982712/FHIR+Infrastructure+Minutes+CC+20200817 | FHIR-I vote for FHIR-27113 |
| Confluence | FHIR-40496 vote | Page 288072268, https://confluence.hl7.org/spaces/FHIRI/pages/288072268/FHIR+Infrastructure+Minutes+CC+2024-12-09 | FHIR-I minutes for capabilities MIME-version clarification |
| Confluence | FHIR-16198 discussion | Pages 161066557 and 204276814 | Delete-history/purge discussion and later Zulip links |
| Confluence | FHIR-49646 vote | Page 324962142, https://confluence.hl7.org/spaces/FHIRI/pages/324962142/FHIR+Infrastructure+Minutes+CC+2025-03-10 | Conditional patch URL vote |
| Confluence | FHIR-51608 discussion | Pages 358886991 and 358888992 | Compartment URL behavior discussion |

## Change summary

### Page structure and metadata - metadata/template/navigation

- Removed old wrapper/template content and changed the status row to "Responsible Owner" plus Normative standards status.
- Interaction overview table grew substantially: conditional update, conditional patch, delete-history, delete-history-version, conditional create, conditional delete single/multiple, system conditional delete, and compartment search are now listed.

### Service base URL and identity - substantive/normative plus editorial

- Added a SHALL that servers supporting either `[base]/[type]` or `[base]/[type]/` must support both and should not redirect just to canonicalize a query URL (`FHIR-27113`).
- The applied example has a typo: `ex:<code>[base]/type]</code>` should presumably be `[base]/[type]`.
- Zulip had later concern that the rule is confusingly placed under Service Base URL and may have identity implications, but no later source reversal was found.

### HTTP headers, return content, MIME types, and version parameter - semantic guidance and editorial

- Added a new HTTP Headers table covering Accept, ETag, If-Match, If-Modified-Since, If-None-Exist, If-None-Match, Last-Modified, Prefer, Location, and Content-Location (`FHIR-38991`).
- Added/clarified Last-Modified formatting, Return preference links, generic MIME type handling, and `_format` guidance.
- Replaced invalid `text/json` with `text/xml` (`FHIR-25200`).
- Added R4B/R5 fhirVersion rows in earlier R5 work, but the R6 ballot4 page still has no R6 row and says R5 is "this version".

### Read/vread/update/create/delete/patch - substantive/normative and examples

- Read/vread gained HEAD-related notes and clearer status-code formatting.
- Update/create sections gained stronger Location/ETag/Last-Modified and 200/201/202 response guidance, plus SUBSETTED handling and duplicate-create guidance.
- Conditional update details were expanded for id/no-id cases and If-None-Match.
- Conditional patch gained the missing URL pattern (`FHIR-49646`).
- JSON Patch in batch/transaction via Binary was added (`FHIR-33945`).
- Delete now discusses delete-history/delete-history-version and `$purge` (`FHIR-16198`) and conditional delete single/multiple behavior, including If-Match support (`FHIR-40772`, `FHIR-42728`).

### Search - substantive/normative and moved guidance

- Search protocol guidance was moved/expanded from `search.html` into the HTTP page (`FHIR-39137`, `FHIR-38994`), including GET/POST search modes, 405 guidance, security/logging considerations, and compartment/system/type search examples.
- R6 work added compartment-interaction framing and links to Search Contexts/Compartments (`FHIR-51608`).

### Capabilities - semantic guidance plus implementation defect

- Added guidance that servers should check the `fhirVersion` MIME-type parameter when processing capabilities requests and should return ETag information (`FHIR-40496`).
- The implementation left the 404 sentence incomplete: "FHIR (or the specified version) is not supported on the".

### Batch/transaction/history/transactional integrity/paging - substantive/normative and examples

- Batch rules now explicitly prohibit interdependencies among changes and references to resources being created within a batch (`FHIR-41313`).
- Transaction processing order, conditional-reference resolution, version-specific reference behavior, and URL/link replacement rules were clarified (`FHIR-34344`, `FHIR-36032`, `FHIR-34060`, `FHIR-43600`, `FHIR-49707`).
- History examples were fixed and history parameters clarified (`FHIR-23013`, `FHIR-35781`, `FHIR-17630`).
- Transactional integrity guidance was expanded and conditional-create race-condition warning added (`FHIR-53546`).
- Paging got explicit best practices for previous/next links and robustness to short/empty pages (`FHIR-51428`).

### Summary tables - substantive summaries plus defects

- Summary tables were expanded for delete-history, delete-history-version, conditional interactions, search variants, and 202 status codes.
- Current table rows for `update-conditional` and `patch-conditional` show `/[type]/[id]?`, contradicting the body sections that use `/[type]?[search parameters]`.
- Current table also has nested `<code>` tags for create/create-conditional and a misplaced dagger marker in the capabilities response row.

## Source history

Full command to reproduce the chronological log:

```bash
git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short \
  --format='%H%x09%ad%x09%s' "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/http.html"
```

| Date | Commit | Subject | Relevance |
|---|---|---|---|
| 2020-08-14 | `021fdd52eec1` | update core dependency | Mechanical/background |
| 2020-08-14 | `e4bf792d2ca2` | FHIR#25928: Changed references to subscriptions framework page instead of resource | Subscription link update |
| 2021-02-26 | `f03ddacb16c1` | Fix FHIR-26688 | HTTP page correction |
| 2021-02-26 | `819e92b2ed43` | Fix FHIR-27113 | Adds trailing-slash SHALL |
| 2021-03-15 | `cd6ef689762e` | Fix invalid HTML in http.html example | Editorial/rendering |
| 2021-05-30 | `142ad7624ca7` | Fix FHIR-19523,22702,23809 | Multi-issue page corrections |
| 2021-06-27 | `d7b8dadc6213` | update html template | Mechanical/template |
| 2022-01-20 | `573d656f8bf9` | FHIR-31715 for R5: Adding mimetype for R4B and R5 | fhirVersion table |
| 2022-02-24 | `f752cd7c77d8` | Version info updates | fhirVersion table wording |
| 2022-05-10 | `0b7c3cc5af76` | FHIR-20654 link to MHD | Transaction example/link |
| 2022-05-11 | `a7810f9b2cfc` | FHIR-34344 Clarify version-specific references | Transaction version-specific references; also whitespace in earlier sections |
| 2022-05-11 | `3f1c17258f4e` | FHIR-36032 Clarify transaction behavior for update of non-ref fields | Transaction semantics |
| 2022-05-11 | `e76c0dd6aa05` | FHIR-36859 Clarify conditional update when resource has id | Conditional update semantics |
| 2022-05-11 | `4ccbcfe84ecf` | FHIR-35811 Clarify application/fhir is not a valid mime type | MIME guidance |
| 2022-05-11 | `faaaefb02fd5` | FHIR-34060 Transaction rules should use FHIR interactions | Transaction language |
| 2022-05-11 | `8f9d801b4200` | FHIR-21282 Update Summary Interaction table with 202 | Summary/status codes |
| 2022-05-11 | `5de04e669702` | FHIR-22770 Create response when duplicate found | Create semantics |
| 2022-05-11 | `52b757fe6c4d` | FHIR-24914 Transaction integrity expectations | Transactional integrity |
| 2022-05-11 | `c32a2adb0774` | FHIR-26358 Conditional create, update location header | Conditional create/update responses |
| 2022-05-11 | `45aaf5e3a78a` | FHIR-26646 Define system-level conditional delete | Conditional delete |
| 2022-05-11 | `22e27816418f` | FHIR-28495 Support If-None-Match for update | Conditional update |
| 2022-05-11 | `0a1dbe19f615` / `7b129e228847` | FHIR-20211 Clarify Last-Modified header format | HTTP metadata headers |
| 2022-05-13 | `6f6a8881881a` | FHIR-26067, FHIR-35168 FHIR version updates | Version parameter/compatibility |
| 2022-05-16 | `639dbcd28487` | Multiple RESTful API (HTTP) page updates | Broad page-specific edits |
| 2022-05-16 | `f656fee32c8a` | FHIR-33945 Support JSON patch in bundle using Binary | Patch example |
| 2022-08-20 | `5d2debd663eb` | FHIR-9029 Clarify Content-type for Accept and _format | MIME negotiation |
| 2022-08-25 | `aa8e2ccd33ac` | FHIR-32757 Provide normative guidance for variability in create operation | Create behavior |
| 2022-08-31 | `c783e76c54e9` | FHIR-34193 Clarification on versioned vs versioned-update | Capability/versioning semantics |
| 2022-09-01 | `7415a1eb0824` | FHIR-37822/FHIR-35859 Define/list HTTP Headers and POST-based search | Headers and search |
| 2022-09-01 | `d16636ba8132` | FHIR-36347 Clarify parameter guidance for base searches | Search guidance |
| 2022-09-01 | `63e93849ff0e` | Align summary tables with restful interaction CS | Summary table |
| 2023-02-15 | `f63bcf4e2972` | FHIR-39126 search timing | Search semantics |
| 2023-02-15 | `d1399f74f158` | FHIR-38991 Missing some HTTP Headers | Header table |
| 2023-02-21 | `8403a96b3ade` | FHIR-39135 Editorial and structural issues related to http.html | Broad editorial/structural |
| 2023-02-21 | `e206a7d26762` | FHIR-39117 Summary indicates ETag is mandatory | Summary table correction |
| 2023-03-19 | `f47290bddbd4` | FHIR-38994 - HTTP Page Search Method Guidance | GET/POST search guidance |
| 2023-03-19 | `e441170220c1` | FHIR-39137 - Moving protocol content from Search to HTTP | Search protocol restructuring |
| 2023-03-19 | `0dadd56be4ee` | FHIR-23013 - fixed history examples | History examples |
| 2023-11-30 / 2023-12-07 | `cf780ee831a0`, `4092e6670d43`, `7a0dc065da24`, `582318c880c1`, `b811010c8b85`, `551ff0075be6`, `8e74a757dd49`, `d69932573d63`, `c1b29d509424` | FHIR-42971, FHIR-42769, FHIR-40772, FHIR-42728/FHIR-16198 | Date header, 202 create, If-Match conditional delete, purge/delete-history partial work |
| 2023-12-11 | `c2724e8a568d` | FHIR-16198 - Add delete/purge REST operation. Added missing interactions in HTTP page tables | Delete-history/version, summary table rows |
| 2025-03-04 | `50431f3b5f06` | FHIR-43600 Need example of Provenance use of resolve-as-version-specific | Transaction reference example |
| 2025-03-19 | `ea1500d5ce88` | FHIR-49707 - add dragon note to Replacing hyperlinks and full-urls | Transaction warning; stray colon remains |
| 2025-03-19 | `08e2ca9544cc` | FHIR-40496 - Clarifications in Capabilities interaction | Capabilities fhirVersion/ETag/404 text |
| 2025-03-19 | `3acb6e19b20a` | FHIR-40497 - Additional text around vread and HEAD requests | HEAD/vread |
| 2025-03-20 | `668f78604394` | FHIR-41313 - examples of interdependencies in batch processing | Batch semantics |
| 2025-10-31 | `270e0ceb7b02`, `605a6ffefb83` | normative changes for R6 / more normative changes | Broad R6 normative/template changes |
| 2025-11-02 | `68075d299921` | FHIR-49646 HTTP Conditional Patch is missing URL | Conditional patch URL added |
| 2025-11-03 | `a1b0f9752317` | FHIR-40957 operation -> interaction | Terminology cleanup |
| 2025-10-31 | `7737bfeea16c` | FHIR-51608 Clarify compartment search URL behavior and supported interactions | Compartment interactions/search |
| 2025-10-31 | `6a2ba7382012` | FHIR-50847 Clarify underscore wording | Style guide wording |
| 2025-10-31 | `51bcf198efec` | FHIR-25200 text/json -> text/xml | MIME typo correction |
| 2025-11-06 | `798188a32dfd` | FHIR-51428 - paging best practices | Paging guidance |
| 2025-12-15 | `ee0c7145162a` | FHIR-53546 Conditional Create race condition warning | Conditional create transactional integrity |

## Jira evidence

### Explicit Jira keys from commits/patches used as primary evidence

- `FHIR-27113` resolved the trailing-slash issue as Persuasive with Modification. Resolution says servers should support both with and without a trailing slash and be discouraged from redirecting solely to canonicalize. It references PR #1124.
- `FHIR-31715` added R4B to the fhirVersion MIME-type parameter table and also added R5 on master via PR #1621/#1731. This explains why the current R6 page still has an R5 row from R5 work.
- `FHIR-26067` and `FHIR-35168` support the broader version-terminology cleanup around two-part `major.minor` FHIR versions and fhirVersion definitions.
- `FHIR-38991` requested Location, Content-Location, and custom headers in the HTTP Headers tables; the applied page has the table, but the Location RFC label says `RFC-7231 section 37.1.2` while linking to section 7.1.2.
- `FHIR-39137` and `FHIR-38994` explain the move/expansion of GET/POST search guidance onto the HTTP page.
- `FHIR-16198` requested delete-history, delete-history-version, and `$purge` support. Resolution specifically lists `DELETE /:type/:id/_history`, `DELETE /:type/:id/_history/:vid`, and patient/group `$purge`.
- `FHIR-49646` says Conditional Patch was missing a URL and suggests `PATCH [base]/[type]?[search parameters]`. The body now has that URL, but the summary table still has `/[type]/[id]?`.
- `FHIR-40496` resolution says the capabilities 404 sentence should be "FHIR (or the specified version) is not supported on the nominated service URL." Current source omits "nominated service URL."
- `FHIR-49707` explains the dragon note warning that transaction URL replacement must not be implemented by raw string replacement.
- `FHIR-53546` explains the new warning that `If-None-Exist` cannot be transactionally enforced for arbitrary searches.
- `FHIR-51608` explains compartment search URL clarifications and says only search is defined for compartments.
- `FHIR-25200`, `FHIR-50847`, `FHIR-51428`, and `FHIR-40957` explain R6 corrections for MIME type, underscore wording, paging best practices, and operation/interaction terminology.

### Related Jira issues that inform current defects

- `FHIR-35172` flagged that version-management tables including `http.html#version-parameter` were incomplete/out-of-date, and comments recommended aligning wording and reducing release-specific churn.
- `FHIR-47208` and `FHIR-47216` are R6 technical corrections for missing R6/stale R5 references in version-management policy pages. They are not directly scoped to `http.html`, but they show the same current-version omission pattern visible in the HTTP page's fhirVersion table.

### Context-only Jira hits not driving action

- `FHIR-54571` appeared in an FTS search for `"fhirVersion" "R6"` but concerns Condition version diff output, not `source/http.html`.
- Numerous explicit commit keys were not snapshotted because their changes were mechanical, purely editorial, or not tied to current actionable findings.

## Zulip evidence

- `#implementers > Trailing slash at resource endpoints` (snapshot command above) led to `FHIR-27113`. Participants discussed whether `[base]/[type]/` should be treated as `[base]/[type]`, rejected by production servers, or handled with an error. Grahame said dropping the slash was "the least unreasonable behavior"; Lloyd said it was preferred but was unsure it could be a SHALL. Later, Alexander Kiel raised concerns about redirects, identity, and placement.
- `#fhir/infrastructure-wg > FHIR-27113` has a later single-message concern that the applied sentence is confusing because it starts "Servers SHALL support both forms" without first introducing the two forms.
- `#implementers > Purge and Delete History Operations (FHIR-16198)` provides detailed implementer discussion of delete-history/delete-history-version, 410 vs 404, whether DELETE is the right method, and policy choices. Gino confirmed that the goal was to standardize request shapes while leaving implementation policy open.
- `#hapi > configuring core search` contains the immediate context for `FHIR-49646`: Gino said conditional patch would be `PATCH [base]/SearchParameter?name=clinical-code` and filed the Jira because the section lacked the URL.
- `#implementers > Compartment definitions` is background for `FHIR-51608`; it shows uncertainty about compartment definitions, whether compartments are optional, and expectations for supported resources.
- Searches for quoted `FHIR-40496`, `FHIR-49707`, `FHIR-53546`, and exact "R6 missing" + "fhirVersion" did not find direct Zulip rationale in the local public Zulip snapshot.

## Confluence evidence

- Page 91982712, FHIR Infrastructure Minutes CC 20200817, records `FHIR-27113` Persuasive with Mod, Grahame Grieve/Rick Geimer 8-0-0.
- Page 113673765, FHIR Infrastructure Minutes WGM 202105, records `FHIR-31715` Persuasive, Rick Geimer/Alexander Zautke 23-0-0.
- Page 139675058, FHIR Infrastructure Minutes CC 2022-10-24, records `FHIR-38991` Persuasive with Mod, Brian Postlethwaite/Richard Ettema 9-0-0.
- Page 144966651, FHIR Infrastructure Minutes CC 2022-10-31, records `FHIR-38994` Persuasive with Mod, Gino Canessa/Rick Geimer 11-0-0.
- Pages 161066557, 156544802, 202408310, and 204276814 record multi-meeting discussion of `FHIR-16198` and later links to the Zulip purge/delete-history thread.
- Page 324962142, FHIR Infrastructure Minutes CC 2025-03-10, records `FHIR-49646` Persuasive, Ilya Beda/Bas van den Heuvel 11-0-0.
- Page 288072268, FHIR Infrastructure Minutes CC 2024-12-09, records `FHIR-40496`, including that MIME type checking should be general to the capabilities request.
- Page 281219681, FHIR Infrastructure Minutes WGM 202501, records `FHIR-49707` Persuasive with Mod and the warning about string replacement.
- Page 404100067, FHIR Infrastructure Minutes CC 2025-12-01, records `FHIR-53546` discussion and Persuasive with Mod vote.
- Pages 358886991 and 358888992 record `FHIR-51608` compartment discussion continuing across 2025-08-11 and 2025-08-18.
- Page 358880363 records both `FHIR-25200` and `FHIR-50847`; page 358883031 records `FHIR-51428`; page 171449236 records `FHIR-40957`.

## Timeline

| Date | Event |
|---|---|
| 2020-05-08 to 2020-05-13 | Zulip trailing-slash discussion leads to `FHIR-27113` |
| 2020-08-17 | FHIR-I votes `FHIR-27113` Persuasive with Mod |
| 2021-02-26 | Commit `819e92b2ed43` applies the trailing-slash rule to `http.html` |
| 2021-05-24 | FHIR-I votes `FHIR-31715` for R4B/R5 fhirVersion table additions |
| 2022-01-20 / 2022-02-24 | Commits `573d656f8bf9` and `f752cd7c77d8` add/update R4B/R5 version rows |
| 2022-05-11 to 2022-05-16 | Many R5 HTTP clarifications land, including version-specific references, conditional update/delete, MIME, transaction, and patch changes |
| 2022-10-24 to 2022-10-31 | FHIR-I votes on HTTP headers and GET/POST search guidance (`FHIR-38991`, `FHIR-38994`) |
| 2023-02 to 2023-03 | Search protocol content is moved/expanded on `http.html`; HTTP page structural edits land |
| 2023-04 to 2023-12 | `FHIR-16198` delete-history/purge decisions are discussed, voted, and applied |
| 2024-09-16 | `FHIR-47208`/`FHIR-47216` are resolved change-required for R6 missing/stale version-management policy text |
| 2024-12-09 | `FHIR-40496` is resolved for capabilities MIME-version/ETag/404 wording |
| 2025-01 to 2025-03 | Conditional patch URL and transaction replacement warning are discussed/resolved (`FHIR-49646`, `FHIR-49707`) |
| 2025-07 to 2025-08 | R6 corrections for MIME typo, underscore wording, paging, and compartments are resolved |
| 2025-10 to 2025-11 | R6-related commits apply compartment/search, MIME, underscore, paging, and conditional patch changes |
| 2025-12-01 to 2025-12-15 | `FHIR-53546` is resolved and applied as conditional-create race-condition warning |
| R6 ballot4 source | Current page still contains stale fhirVersion table, summary-table path mismatch, and several concrete markup/text defects |

## Evidence log

- Confirmed old/new page existence with `test -f` for both source tree paths.
- Ran direct diff:
  ```bash
  git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames \
    "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26" "5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/http.html"
  ```
- Counted lines: R6 page has 2551 lines; R4 page has 1809 lines.
- Ran chronological log and extracted 120 commits and 70 unique Jira keys.
- Used `git show --stat --patch` on selected commits: `819e92b2ed43`, `573d656f8bf9`, `f752cd7c77d8`, `d1399f74f158`, `e441170220c1`, `f47290bddbd4`, `c2724e8a568d`, `68075d299921`, `08e2ca9544cc`, `ea1500d5ce88`, `ee0c7145162a`, `7737bfeea16c`, and `51bcf198efec`.
- Used `git blame` on current line ranges for trailing-slash text, version table, conditional endpoints, delete/create fallback text, search, capabilities, URL replacement, and summary tables.
- Used `git log -S` for distinctive phrases including `Servers SHALL support both forms`, `R5</a> (this version`, `RFC-7231 section 37.1.2`, `update-conditional`, `PATCH [base]/[type]?[search parameters]`, `POST [base]/_search?{?`, and `it is unsafe to simply perform`.
- Snapshotted selected Jira keys with `bun run jira:search snapshot <KEY>`. FTS searches for `"fhirVersion" "R6"` and `"FHIR R5" "this version"` found related R6 version issues but no issue specifically fixing the HTTP table.
- Initial Zulip `bun run zulip:search fts FHIR-XXXXX` failed for hyphenated keys with SQLite "no such column" errors; retried as `bun run zulip:search fts "\"FHIR-XXXXX\""`.
- Snapshotted relevant Zulip topics listed in Quick links.
- Ran Confluence `refs jira` and FTS searches for selected keys, then snapshotted the relevant minutes pages listed above.

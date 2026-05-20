# fhirpatch research appendix

## Scope and coverage

- Page path: `source/fhirpatch.html`.
- Compared `R4 4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to `R6 ballot4 6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Old tree: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New tree: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: `source/fhirpatch.html` exists in both trees; this is a modified-page review, not an added/deleted/renamed page.
- The newer page was read end-to-end: 375 lines, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpatch.html:1-375`.
- Direct diff size: 176 changed lines, 159 insertions and 17 deletions.
- Source history between the two commits has 9 page-touching commits. Explicit Jira keys found in page commits: `FHIR-34214`, `FHIR-25431`, `FHIR-33232`, `FHIR-33256`, `FHIR-46086`, `FHIR-43079`, `FHIR-44047`.
- Additional Jira issues checked because they plausibly affect the current page: `FHIR-53791` and `FHIR-48393`.
- Jira, Zulip, and Confluence searches were bounded to explicit keys and distinctive changed phrases. Unquoted Zulip FTS searches for hyphenated Jira keys failed as FTS syntax; corrected quoted searches were run and are noted below.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | New R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpatch.html:13-17` | Current normative status and revised intro. |
| Source | Base rules | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpatch.html:93-101` | Current `SHALL` rules, including the grammar typo noted by `FHIR-53791`. |
| Source | Parameters/profile link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpatch.html:105-117` | `FHIR-46086` added a link to the formal FHIRPath Patch profile. |
| Source | FHIRPath Patch profile binding | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/parameters/structuredefinition-profile-fhirpath-patch.xml:65-90` | Shows the `type` part requires `valueCode` bound to `ValueSet/patch-operation`; the extension example uses `valueString`. |
| Source | Choice-elements example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpatch.html:227-261` | `FHIR-33232` clarification; JSON parses successfully. |
| Source | Extension example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpatch.html:263-329` | `FHIR-33256` example; current XML is marked as JSON and does not parse as XML. |
| Source | Complex path example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpatch.html:332-368` | `FHIR-43079` clarification that `path` can be a full FHIRPath expression. |
| Commit | Template cleanup | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / `https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | Removed obsolete wrapping `<div>`; mechanical. |
| Commit | `FHIR-34214` intro/section clarification | `fcb28e15961b84dff621369342bf39425b0e4cc5` / `https://github.com/HL7/fhir/commit/fcb28e15961b84dff621369342bf39425b0e4cc5` | Reworded intro, renamed section to "Operations", linked HTTP patch. |
| Commit | `FHIR-25431` datatype spelling | `8592e1207273b786db340efb927bb6d1dc9756c9` / `https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9` | Editorial terminology consistency. |
| Commit | `FHIR-33232` choice element example | `ccc2f1bc607deb41208efc01f710a42d5f44c68e` / `https://github.com/HL7/fhir/commit/ccc2f1bc607deb41208efc01f710a42d5f44c68e` | Added choice-element guidance and test-case link update. |
| Commit | `FHIR-33256` extension example | `147147842e3fd0e1fce396e212dead752d91869c` / `https://github.com/HL7/fhir/commit/147147842e3fd0e1fce396e212dead752d91869c` | Added extension example; source of the main actionable issue. |
| Commit | `FHIR-46086` profile link | `3f6c131b0b12db47ebcc0e069f9ea64666d82f74` / `https://github.com/HL7/fhir/commit/3f6c131b0b12db47ebcc0e069f9ea64666d82f74` | Linked the new FHIRPath Patch Parameters profile. |
| Commit | `FHIR-43079` complex path example | `5eb18f8e0b33bade0940842fa53d6202921e21a1` / `https://github.com/HL7/fhir/commit/5eb18f8e0b33bade0940842fa53d6202921e21a1` | Added non-trivial FHIRPath `path` example; Jira comment links PR `HL7/fhir#3442`. |
| PR | `FHIR-43079` implementation PR | `https://github.com/HL7/fhir/pull/3442` | Jira `FHIR-43079` comment says the change was merged here. |
| Commit | Normative status | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / `https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Changed page status from Trial Use/FMM 2 to Normative. |
| Commit | `FHIR-44047` punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` / `https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | Added commas after `e.g.` in this page. |
| Jira | `FHIR-34214` | `https://jira.hl7.org/browse/FHIR-34214`; reopen with `bun run jira:search snapshot FHIR-34214` | Formal resolution for intro/section title clarification. |
| Jira | `FHIR-33232` | `https://jira.hl7.org/browse/FHIR-33232`; reopen with `bun run jira:search snapshot FHIR-33232` | Formal resolution that choice element part name should be `time`, not `time[x]` or `timeDateTime`. |
| Jira | `FHIR-33256` | `https://jira.hl7.org/browse/FHIR-33256`; reopen with `bun run jira:search snapshot FHIR-33256` | Formal request for extension examples; current implementation has malformed XML. |
| Jira | `FHIR-46086` | `https://jira.hl7.org/browse/FHIR-46086`; reopen with `bun run jira:search snapshot FHIR-46086` | Formal resolution for code system, value set, and Parameters profile. |
| Jira | `FHIR-43079` | `https://jira.hl7.org/browse/FHIR-43079`; reopen with `bun run jira:search snapshot FHIR-43079` | Formal request to clarify `path` can be a full FHIRPath expression. |
| Jira | `FHIR-53791` | `https://jira.hl7.org/browse/FHIR-53791`; reopen with `bun run jira:search snapshot FHIR-53791` | Open current-page grammar defect: "a not a valid resource". |
| Jira | `FHIR-48393` | `https://jira.hl7.org/browse/FHIR-48393`; reopen with `bun run jira:search snapshot FHIR-48393` | Context check: profile-removal issue explicitly says FHIRPath Patch profile should stay in core. |
| Zulip | Choice values thread | `#implementers > FHIR PATCH interaction`, `https://chat.fhir.org/#narrow/stream/implementers/topic/FHIR%20PATCH%20interaction`; reopen with `bun run zulip:search snapshot implementers "FHIR PATCH interaction"` | Rationale for `FHIR-33232`; Lee Surprenant said use `time`, not `timeDateTime`. |
| Zulip | Extensions thread | `#implementers > Use Patch with extensions`, `https://chat.fhir.org/#narrow/stream/implementers/topic/Use%20Patch%20with%20extensions`; reopen with `bun run zulip:search snapshot implementers "Use Patch with extensions"` | Rationale for `FHIR-33256`; shows ambiguity and the example lineage. |
| Confluence | 2021-11-01 FHIR-I minutes | Page `130482885`, `https://confluence.hl7.org/spaces/FHIRI/pages/130482885/FHIR+Infrastructure+Minutes+CC+20211101`; reopen with `bun run confluence:search snapshot 130482885` | Vote evidence for `FHIR-34214`, `FHIR-33232`, and `FHIR-33256`. |
| Confluence | 2024-07-22 FHIR-I minutes | Page `256186604`, `https://confluence.hl7.org/spaces/FHIRI/pages/256186604/FHIR+Infrastructure+Minutes+CC+2024-07-22`; reopen with `bun run confluence:search snapshot 256186604` | Vote evidence for `FHIR-46086`: value set and standard profile on Parameters. |
| Confluence | 2023-12-18 FHIR-I minutes | Page `212731099`, `https://confluence.hl7.org/spaces/FHIRI/pages/212731099/FHIR+Infrastructure+Minutes+CC+2023-12-18`; reopen with `bun run confluence:search snapshot 212731099` | Vote evidence for `FHIR-43079`. |
| Confluence | 2025-09 WGM minutes | Page `358879917`, `https://confluence.hl7.org/spaces/FHIRI/pages/358879917/FHIR+Infrastructure+Minutes+WGM+202509+-+Pittsburgh`; reopen with `bun run confluence:search snapshot 358879917` | Process evidence for moving FHIRPath Patch to normative status. |
| Confluence | 2024-05 WGM minutes | Page `234784975`, `https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas`; reopen with `bun run confluence:search snapshot 234784975` | Process evidence for `FHIR-44047` "will fix". |

## Change summary

### Normative status and metadata

- **substantive/normative:** The page metadata changed from Trial Use/FMM 2 (`colstu`) to Normative (`colsi`) at `/source/fhirpatch.html:14`, implemented by `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`.
- Confluence page `358879917` records the WGM note: "FHIRPath Patch ... Has enough use for going normative" before the source commit.
- The linked FHIRPath Patch Parameters profile is also normative in source: `source/parameters/structuredefinition-profile-fhirpath-patch.xml:11-12`.

### Intro and operations framing

- **semantic guidance/editorial:** `FHIR-34214` replaced the old "documents how Parameters ... define a set of FHIRPath based patch operations" sentence with a clearer definition of a Parameters-based, syntax-agnostic patch mechanism and linked the HTTP `patch` interaction (`/source/fhirpatch.html:16-17`).
- **editorial/navigation:** The `concept` anchor became `operations`, and the section heading changed from "Conceptual FHIRPath Operations" to "Operations" (`/source/fhirpatch.html:20-24`).

### Operation table and base rules

- **editorial only:** `FHIR-25431` normalized "Data type" to "Datatype" in the operation table and anonymous-types text.
- **editorial only:** `FHIR-44047` added commas to `e.g.` examples (`/source/fhirpatch.html:95` and `:187`).
- **overlooked current issue:** The base rule still says "is a not a valid resource" at `/source/fhirpatch.html:99`; this is tracked by open Jira `FHIR-53791`.

### Parameters profile, operation-type value set, and conformance surface

- **substantive/reference guidance:** `FHIR-46086` resolved to define a code system/value set for FHIRPatch action types and a core Parameters profile. The page change itself adds only the profile link at `/source/fhirpatch.html:115-117`.
- The profile constrains the `type` part to `valueCode` and binds it to `http://hl7.org/fhir/ValueSet/patch-operation` (`source/parameters/structuredefinition-profile-fhirpath-patch.xml:79-90`).
- `FHIR-48393` was checked because it concerned removing profiles from the base specification. It is context only here: a Jira comment explicitly says FHIRPath Patch should stay in core because it is a Parameters profile used in the Patch operation.

### Choice element guidance

- **semantic guidance/example change:** `FHIR-33232` added the Choice Elements section (`/source/fhirpatch.html:227-261`).
- Formal Jira resolution says the correct part name is `"time"` rather than `"time[x]"` or `"timeDateTime"`.
- Zulip `#implementers > FHIR PATCH interaction` shows the original question and the answer that `time` is consistent with FHIRPath polymorphism.
- The current JSON example parses successfully.

### Extension example

- **example change with actionable defect:** `FHIR-33256` added the Extension Example (`/source/fhirpatch.html:263-329`).
- The example is currently marked `<pre class="json">` but contains XML. More importantly, the XML examples do not parse because the nested Reference is represented as `<reference reference="Device/1">` with no closing tag at `/source/fhirpatch.html:303` and `:320`.
- The patch example also uses `<valueString value="add"/>` for the operation `type` at `/source/fhirpatch.html:274`, conflicting with both the page's own parameter table (`type` is `code`, `/source/fhirpatch.html:123-126`) and the FHIRPath Patch profile (`valueCode` required, profile lines `79-90`).
- Validation command in the evidence log parsed all code blocks: blocks 4 and 5, the extension examples, fail XML parsing.

### Complex path example

- **semantic guidance/example change:** `FHIR-43079` added a Complex Path Example (`/source/fhirpatch.html:332-368`) to show that `path` can be a full FHIRPath expression rather than a simple dot path.
- Jira requested an example using a non-trivial expression and later commented that PR `https://github.com/HL7/fhir/pull/3442` merged the work.

### Mechanical/template/noise

- **mechanical/noise:** `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed an obsolete wrapper `<div class="col-12">` and its closing tag.
- Some whitespace and punctuation-only churn appears in the direct diff and does not carry page-specific meaning.

## Source history

| Commit | Date | Subject | Classification | Notes |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | mechanical/noise | Removed page wrapper `<div>` only. |
| `fcb28e15961b84dff621369342bf39425b0e4cc5` | 2022-05-16 | `FHIR-34214` Clarifications to FHIRpatch page | semantic guidance/editorial | Applied the Jira resolution: HTTP patch link, intro rewrite, "Operations" heading. |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | `FHIR-25431` Inconsistent use of "datatype" vs. "data type" | editorial only | Terminology spelling only. |
| `ccc2f1bc607deb41208efc01f710a42d5f44c68e` | 2023-02-16 | `FHIR-33232` FhirPatch: Clarify how to reference choice values | semantic guidance/example | Added Choice Elements section and changed test-case link. |
| `147147842e3fd0e1fce396e212dead752d91869c` | 2023-02-16 | `FHIR-33256` Clarity of how to use extensions with fhirPatch | example change | Added extension example; current example has malformed XML and profile conflict. |
| `3f6c131b0b12db47ebcc0e069f9ea64666d82f74` | 2025-03-04 | `FHIR-46086` Define a ValueSet containing operation typs för FHIRPath Patch | reference/conformance guidance | Added profile link; broader issue created ValueSet/profile elsewhere. |
| `5eb18f8e0b33bade0940842fa53d6202921e21a1` | 2025-03-20 | `FHIR-43079` - Added example showing a complex path in a FHIRPath patch. | semantic guidance/example | Added complex path example. Jira comment later says PR `HL7/fhir#3442` merged the work. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | substantive/normative | Changed status table to Normative. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | editorial only | Added commas after `e.g.`. |

## Jira evidence

### Explicit Jira keys from commits/patches

| Key | Status | Resolution | Evidence and relevance |
|---|---|---|---|
| `FHIR-34214` | Published | Persuasive with Modification | Requested an HTTP patch reference and renaming "Conceptual FHIRPath Operations" to "Operations"; resolution text matches commit `fcb28e159...`. |
| `FHIR-25431` | Published | Persuasive | Global terminology correction to use "datatype" consistently; commit `8592e120...` applies this page's instances. |
| `FHIR-33232` | Published | Persuasive with Modification | Asked how to reference choice values; resolution says use part name `time`, not `time[x]` or `timeDateTime`, and add tests/spec example. Commit `ccc2f1bc...` implements this. |
| `FHIR-33256` | Published | Persuasive | Asked for extension examples. Resolution: create test cases and update spec examples. Commit `147147842...` implements, but current example contains malformed XML and a `valueString`/`valueCode` conflict. |
| `FHIR-46086` | Applied | Persuasive with Modification | Requested a ValueSet for operation types; resolution says define code system, value set, and a core Parameters profile. Commit `3f6c131b...` adds the page link to the profile. |
| `FHIR-43079` | Applied | Persuasive | Requested clarity that `path` can be a full FHIRPath expression and suggested a non-trivial example. Commit `5eb18f8e...` adds the example; Jira comment says `https://github.com/HL7/fhir/pull/3442` merged it. |
| `FHIR-44047` | Resolved - change required | Persuasive | Broad punctuation correction. Commit `887bc238...` applied two `e.g.,` fixes on this page, but Jira status remains "Resolved - change required"; that status cleanup is not page-actionable. |

### Other Jira issues that plausibly explain or affect current text

| Key | Status | Why checked | Result |
|---|---|---|---|
| `FHIR-53791` | Triaged | Search for "FHIRPath Patch" found an open issue against the current page. | It flags the exact grammar defect at `/source/fhirpatch.html:99`: "is a not a valid resource". Included as an actionable editorial finding. |
| `FHIR-48393` | Applied | Search for "FHIRPath Patch" found a profile-removal issue. | Context only. A comment says the FHIRPath Patch profile should remain in core because it is used by the Patch operation; current profile source is normative. |

### Context-only Jira hits not driving action

- `FHIR-18814`, `FHIR-18815`, and `FHIR-26324` appeared in broad `fhirpatch` searches, but they concern older FHIRPatch naming/rule/move-operation context and did not explain the R4-to-R6 page diff.
- `FHIR-37744` appeared in a "FHIRPath Patch" search about a PATCH request example but was not tied to this page's changed text.

## Zulip evidence

| Thread | Evidence | Relevance |
|---|---|---|
| `#implementers > FHIR PATCH interaction` | Snapshot command: `bun run zulip:search snapshot implementers "FHIR PATCH interaction"`. On 2021-08-18 Kenneth Myhra asked whether choice types should use `timeDateTime`; Lee Surprenant answered to use `time`, consistent with FHIRPath polymorphism. On 2021-08-23 Kenneth filed `FHIR-33232`. | Direct rationale for the Choice Elements section. |
| `#implementers > Use Patch with extensions` | Snapshot command: `bun run zulip:search snapshot implementers "Use Patch with extensions"`. Alexandr Shevchenko asked how to add extensions with FHIRPath Patch. Lloyd McKenzie said it should work, identified the extension URL as invalid, and later asked for a change request. Alexandr filed `FHIR-33256`. | Direct rationale for the Extension Example; also shows the current page inherited an example shape that still needs cleanup. |
| `#hapi > FhirPath PATCH Operation` and similar implementation threads | Search hit for `"FHIRPath Patch"` only. | Context-only implementation questions; not evidence for a spec change or page defect. |

Corrected issue-key FTS searches:

- `bun run zulip:search fts "\"FHIR-33232\"" --limit 12` found `#implementers > FHIR PATCH interaction`, `#fhir/infrastructure-wg > Call agenda`, and `#committers > Running the FHIR Test Cases`.
- `bun run zulip:search fts "\"FHIR-33256\"" --limit 12` found `#implementers > Use Patch with extensions`, `#fhir/infrastructure-wg > Call agenda`, and `#committers > Running the FHIR Test Cases`.
- Corrected searches for `FHIR-34214`, `FHIR-46086`, `FHIR-43079`, and `FHIR-44047` found no Zulip rationale.

## Confluence evidence

| Page | Evidence | Relevance |
|---|---|---|
| `130482885` FHIR Infrastructure Minutes CC 20211101 | References `FHIR-33256`, `FHIR-33232`, and `FHIR-34214`. Text records `FHIR-33232`: "Will clarify that using name of 'time' is correct", vote 17-0-1; `FHIR-33256`: create test case/reconcile content, vote 17-0-1; `FHIR-34214`: rename to "Operations", vote 13-0-0. | Workgroup vote evidence for three R5-era page clarifications. |
| `66940491` FHIR Infrastructure Minutes CC 20200113 | References `FHIR-25431` and says "Using 'data type' Will auto approve". | Context for datatype terminology cleanup. |
| `212731099` FHIR Infrastructure Minutes CC 2023-12-18 | Text records `FHIR-43079` as Persuasive, motion Grahame Grieve/Rick Geimer 7-0-0. | Vote evidence for adding the complex path example. |
| `256180581` FHIR Infrastructure Minutes CC 2024-07-08 | Text records `FHIR-46086` discussion: proposed ValueSet for FHIRPath function names/operation names, wait for in-person. | Process lead-up for `FHIR-46086`. |
| `256186604` FHIR Infrastructure Minutes CC 2024-07-22 | Text records `FHIR-46086`: "It reasonable to defined a valueset and standard profile on Parameters for FHIRPath patch", Persuasive with Mod, 9-0-0. | Vote evidence for profile/ValueSet resolution. |
| `234784975` FHIR Infrastructure Minutes WGM 202405 - Dallas | Text records `FHIR-44047 will fix`. | Process evidence for punctuation cleanup. |
| `358879917` FHIR Infrastructure Minutes WGM 202509 - Pittsburgh | Text records: "FHIRPath Patch ... Has enough use for going normative". | Process evidence for the normative-status commit. |

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2020-01-09 | Jira created | `FHIR-25431` opened for inconsistent "datatype" vs "data type". |
| 2021-08-18 | Zulip discussion | `#implementers > FHIR PATCH interaction`: choice type naming question; answer favors `time`. |
| 2021-08-18 to 2021-09-02 | Zulip discussion | `#implementers > Use Patch with extensions`: extension patch ambiguity discussed. |
| 2021-08-23 | Jira created | `FHIR-33232` opened from the choice-values Zulip thread. |
| 2021-08-27 | Jira created | `FHIR-33256` opened from the extension Zulip thread. |
| 2021-11-01 | Jira vote/resolution and Confluence minutes | `FHIR-34214`, `FHIR-33232`, and `FHIR-33256` resolved/voted in FHIR-I minutes. |
| 2022-05-16 | Source commit | `fcb28e159...` applies `FHIR-34214`. |
| 2022-08-31 | Source commit | `8592e120...` applies `FHIR-25431`. |
| 2023-02-16 | Source commits | `ccc2f1bc...` adds choice example; `147147842...` adds extension example. |
| 2023-12-18 | Jira vote/resolution and Confluence minutes | `FHIR-43079` voted persuasive, 7-0-0. |
| 2024-07-08 | Confluence minutes | `FHIR-46086` discussed, deferred for more discussion. |
| 2024-07-22 | Jira vote/resolution and Confluence minutes | `FHIR-46086` resolved persuasive with modification, 9-0-0. |
| 2025-03-04 | Source commit | `3f6c131b...` adds page link to FHIRPath Patch profile. |
| 2025-03-20 | Source commit | `5eb18f8e...` adds complex path example for `FHIR-43079`. |
| 2025-07-08 | Jira comment | `FHIR-43079` comment says PR `https://github.com/HL7/fhir/pull/3442` merged. |
| 2025-09-29 | Confluence minutes version | WGM minutes record FHIRPath Patch has enough use for normative status. |
| 2025-10-31 | Source commit | `270e0ceb...` changes this page to Normative. |
| 2025-11-03 | Source commit | `887bc238...` applies `FHIR-44047` punctuation changes on this page. |
| 2026-01-05 | Jira created | `FHIR-53791` opened for the "a not a valid resource" grammar defect in the current page. |

## Evidence log

Key source commands:

```bash
test -f "fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/fhirpatch.html" && echo "old exists"
test -f "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpatch.html" && echo "new exists"

git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames \
  "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26" "5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/fhirpatch.html"

git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short \
  --format='%H%x09%ad%x09%s' "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/fhirpatch.html"
```

Commit inspection:

```bash
git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager show --stat --patch <COMMIT> -- "source/fhirpatch.html"
```

Jira searches and snapshots:

```bash
bun run jira:search snapshot FHIR-34214
bun run jira:search snapshot FHIR-25431
bun run jira:search snapshot FHIR-33232
bun run jira:search snapshot FHIR-33256
bun run jira:search snapshot FHIR-46086
bun run jira:search snapshot FHIR-43079
bun run jira:search snapshot FHIR-44047
bun run jira:search snapshot FHIR-53791
bun run jira:search snapshot FHIR-48393
bun run jira:search fts "\"FHIRPath Patch\"" --limit 12
bun run jira:search fts fhirpatch --limit 12
bun run jira:search fts "\"syntax-agnostic patch mechanism\"" --limit 12
bun run jira:search fts "\"choice values\" FhirPatch" --limit 12
bun run jira:search fts "\"complex path\" FHIRPath patch" --limit 12
bun run jira:search fts "\"operation typs\" FHIRPath Patch" --limit 12
```

Zulip searches and snapshots:

```bash
bun run zulip:search fts "\"FHIR-33232\"" --limit 12
bun run zulip:search fts "\"FHIR-33256\"" --limit 12
bun run zulip:search fts "\"FHIRPath Patch\"" --limit 12
bun run zulip:search fts "\"Use Patch with extensions\"" --limit 12
bun run zulip:search snapshot implementers "FHIR PATCH interaction"
bun run zulip:search snapshot implementers "Use Patch with extensions"
```

Confluence searches and snapshots:

```bash
bun run confluence:search refs jira FHIR-34214
bun run confluence:search refs jira FHIR-33232
bun run confluence:search refs jira FHIR-33256
bun run confluence:search refs jira FHIR-46086
bun run confluence:search refs jira FHIR-43079
bun run confluence:search refs jira FHIR-44047
bun run confluence:search fts "\"FHIRPath Patch\"" --limit 8
bun run confluence:search fts fhirpatch --limit 8
bun run confluence:search snapshot 130482885
bun run confluence:search snapshot 256186604
bun run confluence:search snapshot 256180581
bun run confluence:search snapshot 212731099
bun run confluence:search snapshot 358879917
bun run confluence:search snapshot 234784975
bun run confluence:search snapshot 66940491
```

Example validation:

```bash
python3 - <<'PY'
from pathlib import Path
import re, html, xml.etree.ElementTree as ET, json
text = Path('fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/fhirpatch.html').read_text()
blocks = re.findall(r'<pre class="(json|xml)">\n(.*?)\n</pre>', text, re.S)
for i, (cls, body) in enumerate(blocks, 1):
    raw = html.unescape(body.strip())
    kind = 'xml' if raw.startswith('<') else 'json'
    try:
        ET.fromstring(raw) if kind == 'xml' else json.loads(raw)
        print(f'block {i}: class={cls}, kind={kind}, parse=ok')
    except Exception as e:
        print(f'block {i}: class={cls}, kind={kind}, parse=ERROR: {type(e).__name__}: {e}')
PY
```

Result: blocks 1, 2, 3, and 6 parse successfully. Blocks 4 and 5 are the `FHIR-33256` extension XML examples; both are labeled `class=json`, detected as XML, and fail XML parsing.

Failed or caveated searches:

- Initial Zulip FTS searches for unquoted keys such as `FHIR-33232` failed because FTS parsed the hyphenated key as syntax; corrected searches used quoted terms such as `bun run zulip:search fts "\"FHIR-33232\"" --limit 12`.
- Searches for escaped literal XML attribute text such as `"valueString value=\"add\""` produced FTS syntax errors in Jira/Zulip; the current source and profile were used instead for the example defect.
- Confluence snapshots often normalize whole meeting text into a single very long line; cited line numbers for those pages identify the local snapshot line but the quoted phrases are more precise than column positions.

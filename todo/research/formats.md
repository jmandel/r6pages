# formats research appendix

## Scope and coverage

- Page path: `source/formats.html`.
- Older version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`.
- Newer version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Page boundary: present in both trees.
- Newer page read end-to-end: 214 lines, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/formats.html:1-214`.
- Commits touching `source/formats.html` in the range: 15.
- Explicit Jira keys found in commit metadata/patches: `FHIR-26932`, `FHIR-18452`, `FHIR-18448`, `FHIR-19932`, `FHIR-31393`, `FHIR-22723`, `FHIR-21452`, `FHIR-25431`, `FHIR-44047`.
- Jira/Zulip/Confluence searches were performed for explicit keys and distinctive changed phrases including `flag NE`, `cannot have extensions`, `implementation obligations`, `UML Based Object-Oriented Definition`, `Resource Definitions formats`, and `Additional resources resource.html#additional`.
- Important caveat: the current R6 ballot4 source predates later `FHIR-50460` resolution work. That later evidence is still relevant because it confirms a current page defect already noticed by FHIR-I.
- Failed search note: initial Zulip FTS searches for unquoted keys such as `FHIR-26932` failed because FTS parsed the hyphenated key as an expression; the searches were rerun with quoted FTS queries such as `bun run zulip:search fts "\"FHIR-26932\"" --limit 20`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Older page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/formats.html` | R4 source baseline |
| Source | Newer page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/formats.html` | R6 ballot4 page under review |
| Source lines | Current intro/title | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/formats.html:13-23` | Page is now "Resource Definitions", not the serialization formats page |
| Source lines | Current flag key | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/formats.html:139-150` | Defines current table flags; no `NE` entry |
| Source lines | Current stale `NE` note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/formats.html:163` | Page still tells readers extensions may appear except where `NE` appears |
| Source lines | Current duplicate anchor | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/formats.html:192-194` | Consecutive duplicate `<a name="choice"></a>` anchor |
| Source lines | R4 `NE` key and note | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/formats.html:143-165` | R4 had both the `NE` definition and the note |
| Source lines | New serialization page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resource-formats.html:21-49` | Serialization requirements removed from `formats.html` are present on `resource-formats.html` |
| Source lines | New JSON/XML comparison and bulk section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/resource-formats.html:53-108` | Confirms diff removals from `formats.html` were mostly a page split, not pure deletion |
| Source lines | New UML page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/uml.html:19-127` | UML material was moved/expanded off `formats.html` |
| Commit | `080de8098cee5f70dc7e6bddab7e544c98da3e89` | https://github.com/HL7/fhir/commit/080de8098cee5f70dc7e6bddab7e544c98da3e89 | Changed page to Resource Definitions, removed `NE` key, added abstract/interface flag entries, removed UML section |
| PR | `HL7/fhir#766` | https://github.com/HL7/fhir/pull/766 | PR associated with `080de809...` |
| Commit | `fb6236f76aef7e34c5874572f098f3a646dcc983` | https://github.com/HL7/fhir/commit/fb6236f76aef7e34c5874572f098f3a646dcc983 | Removed serialization/comparison/bulk content from `formats.html`; introduced duplicate `choice` anchor |
| PR | `HL7/fhir#2202` | https://github.com/HL7/fhir/pull/2202 | PR associated with `FHIR-18452`/`FHIR-18448` changes |
| Commit | `1e1665b9352f33a691326fdf3079bc19865a8681` | https://github.com/HL7/fhir/commit/1e1665b9352f33a691326fdf3079bc19865a8681 | Changed `S` flag text to implementation obligations and added `T` translation flag |
| PR | `HL7/fhir#2462` | https://github.com/HL7/fhir/pull/2462 | PR associated with obligations/additional bindings updates |
| Commit | `931df6ae329dd3d7f44df8358b5affdd2b95e757` | https://github.com/HL7/fhir/commit/931df6ae329dd3d7f44df8358b5affdd2b95e757 | Added R6 "additional resources" paragraph |
| PR | `HL7/fhir#3384` | https://github.com/HL7/fhir/pull/3384 | PR associated with additional resources work |
| Jira | `FHIR-50460` | https://jira.hl7.org/browse/FHIR-50460 | Later formal issue: `"NE" flag mentioned but not defined`; directly matches current page |
| GitHub issue | IG Publisher `#1293` | https://github.com/HL7/fhir-ig-publisher/issues/1293 | Open implementation issue raised from `FHIR-50460` to actually display `NE` |
| Zulip | `#implementers > Cannot have extensions` | https://chat.fhir.org/#narrow/stream/implementers/topic/Cannot%20have%20extensions | 2022 thread where a reader asked for `NE` examples and Grahame noted the relevant cases were not marked |
| Confluence | FHIR-I 2026-04-13 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/453902815/FHIR+Infrastructure+Minutes+CC+2026-04-13 | FHIR-I disposition of `FHIR-50460`; says publisher issue was created and no StructureDefinition change is intended |
| Confluence | FHIR-I 2021-10-04 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/79504672/FHIR+Infrastructure+Minutes+CC+20211004 | Workgroup record for `FHIR-18452` JSON/XML example issue |
| Confluence | FHIR-I 2020-01-13 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113 | Workgroup record for `FHIR-25431` datatype/data type consistency |
| Local command | Reopen `FHIR-50460` | `bun run jira:search snapshot FHIR-50460` | Complete formal issue snapshot |
| Local command | Reopen NE Zulip thread | `bun run zulip:search snapshot implementers "Cannot have extensions"` | Complete informal discussion snapshot |
| Local command | Reopen 2026 FHIR-I minutes | `bun run confluence:search snapshot 453902815` | Complete workgroup minutes snapshot |

## Change summary

### Page identity and navigation: metadata/template/navigation

- `formats.html` changed from "Resource Formats" to "Resource Definitions" (`formats.html:13-19`).
- The page now points to XML, JSON, RDF (Turtle), and a separate UML page from the intro (`formats.html:16-23`).
- Normative metadata/table boilerplate changed: the newer page shows "Responsible Owner" and no longer includes the old maturity cell or `[%normative page infrastructure%]` include.

### Serialization/bulk format guidance split out: substantive/normative moved, not lost

- The direct diff removes the "Serialization Format Representations" section from `formats.html`, including:
  - `Systems SHALL declare which format(s) they support...`
  - `406 Not Acceptable` / `415 Unsupported Media Type` guidance.
  - `servers SHOULD support both the XML and JSON formats`.
  - bulk data draft text and ND-JSON/protobuf/parquet references.
- In the R6 ballot4 tree, this material exists on `source/resource-formats.html`, with current lines for serialization requirements at `resource-formats.html:21-49` and bulk/ND-JSON at `resource-formats.html:100-108`.
- The bulk section was narrowed: R4 listed ND-JSON, Google Protobuf under consideration, and Apache Parquet/Avro under consideration; R6 `resource-formats.html` documents ND-JSON for this usage and no longer lists protobuf/parquet/avro on this page.

### UML material split out: semantic guidance moved

- R4 `formats.html` embedded a UML section and diagram (`old formats.html:215-270` and following lines).
- R6 `formats.html` removes that section and links to `uml.html`; the R6 UML page contains expanded UML rules and anchors for abstract/interface definitions (`uml.html:19-127`).

### Logical table legend updates: semantic guidance

- `NE` flag definition was removed in `080de809...`, but the note at `formats.html:163` still references `NE`. This creates the main actionable defect.
- New abstract/interface flag entries were added in place of `NE` (`formats.html:146-147`).
- `S` now means "implementation obligations" and links to `obligations.html`, rather than "must be supported" linking to `conformance-rules.html#mustSupport` (`1e1665...`).
- `T` translation-candidate flag was added (`formats.html:145`).

### Choice/type prose updates: semantic/editorial guidance

- "data type" was normalized to "datatype" across this page (`FHIR-25431` / `8592e120...`).
- The sentence defining `Type` as a supertype of all datatypes was removed by `96372c4...` ("profile-mapping").
- The choice element note now links to `uml.html` for object-oriented implementations (`formats.html:205-209`).

### Examples/editorial changes: example/editorial only

- Example primitive type link changed from `TypeB` to `typeB`, matching primitive datatype lower-case naming (`FHIR-19932`, `8df9b379...`).
- RDF wording changed from `Turtle` to `RDF (Turtle)` (`8244937...`).
- `i.e.` punctuation was corrected in one sentence (`FHIR-44047`, `887bc238...`).
- There is a duplicate consecutive `<a name="choice"></a>` at `formats.html:192-193`. This is a concrete source cleanup item, but no evidence found that it affects rendered reader behavior; not elevated to the action file.

## Source history

| Commit | Date | Subject | PR | Effect on `source/formats.html` | Classification |
|---|---:|---|---|---|---|
| `080de8098cee5f70dc7e6bddab7e544c98da3e89` | 2019-12-19 | Define CanonicalResource | https://github.com/HL7/fhir/pull/766 | Renamed heading to Resource Definitions; added UML-page link; removed embedded UML content; removed `NE` flag key entry while leaving `NE` note; added abstract/interface flag entries. | substantive restructuring + latent defect |
| `3e8758b8aeb0bb394599b3b036fb6f53a484fc53` | 2020-04-27 | Preapply FHIR-26932 | https://github.com/HL7/fhir/pull/849 | Corrected "object-orientated" to "object-oriented". | editorial |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | https://github.com/HL7/fhir/pull/1295 | Removed wrapper `<div>` from template. | mechanical/template |
| `a7026edb074d5100e871d93a03aaa02231cb1218` | 2022-08-20 | FHIR-18452 Why XML in the JSON section? - N-Infra #140 | https://github.com/HL7/fhir/pull/2202 | Added JSON/XML comparison section to `formats.html`. | semantic guidance, later moved |
| `fb6236f76aef7e34c5874572f098f3a646dcc983` | 2022-08-20 | FHIR-18448 Comparisons not consistent - N-Infra #136 | https://github.com/HL7/fhir/pull/2202 | Removed serialization/comparison/bulk material from `formats.html`; added duplicate `choice` anchor. | restructuring + minor source defect |
| `8df9b37980c9dd473e0ebf48bef9cce830725162` | 2022-08-23 | FHIR-19932 FHIR-31393 FHIR-22723 | https://github.com/HL7/fhir/pull/2227 | Changed example primitive datatype link from `TypeB` to `typeB`. Other keys in subject are context-only for this page. | example correction |
| `dfb978d4cc307b814fb5a7a1680cad5c3bbcfb3e` | 2022-08-31 | FHIR-21452 Missing link and end parentheses - SDC #141 | https://github.com/HL7/fhir/pull/2312 | Removed ambiguous "Other representations..." sentence and bulk link sentence from intro. | editorial cleanup |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | https://github.com/HL7/fhir/pull/2312 | Normalized many "data type" occurrences to "datatype". | editorial terminology |
| `96372c4a02353c0a270e6f9ef032b9fd3f8e1228` | 2022-09-17 | profile-mapping | https://github.com/HL7/fhir/pull/2411 | Removed statement that `Type` is a supertype of all datatypes. | semantic guidance |
| `1e1665b9352f33a691326fdf3079bc19865a8681` | 2022-12-05 | ElementDefinition updates - add obligations and additional bindings... | https://github.com/HL7/fhir/pull/2462 | Changed `S` flag to implementation obligations and added `T` translation flag. | semantic guidance |
| `931df6ae329dd3d7f44df8358b5affdd2b95e757` | 2025-03-15 | draft support for additional types | https://github.com/HL7/fhir/pull/3384 | Added resource count token and paragraph linking to additional resources defined in other specifications. | substantive R6 feature context |
| `8244937cafb494f6c637de64b22982826c5533db` | 2025-10-22 | Fix extensibility example in RDF; Fix links; Editorial improvements & typos | https://github.com/HL7/fhir/pull/3852 | Changed `Turtle` to `RDF (Turtle)`. | editorial/terminology |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | https://github.com/HL7/fhir/pull/3901 | Changed page metadata table to "Responsible Owner" and removed maturity cell. | metadata/template |
| `605a6ffefb83e002264b0504348dea50144bb951` | 2025-10-31 | more normative. changes | https://github.com/HL7/fhir/pull/3901 | Removed `[%normative page infrastructure%]` include. | metadata/template |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | https://github.com/HL7/fhir/pull/3951 | Added commas after `i.e.`. | editorial |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-26932` (Published, Persuasive, Technical Correction): directly explains the object-oriented spelling correction on `formats.html`. Snapshot command: `bun run jira:search snapshot FHIR-26932`.
- `FHIR-18452` (Published, Not Persuasive with Modification): concerned XML examples on the JSON page and a note explaining XML/JSON comparison. The associated commit briefly added comparison content to `formats.html`; later restructuring moved this material to `resource-formats.html`. Snapshot: `bun run jira:search snapshot FHIR-18452`.
- `FHIR-18448` (Published, Persuasive): requested a differences tab/section across syntaxes. This plausibly explains the comparison/serialization restructuring. Snapshot: `bun run jira:search snapshot FHIR-18448`.
- `FHIR-19932` (Published, Persuasive): directly explains changing the example primitive type from `TypeB` to `typeB`. Snapshot: `bun run jira:search snapshot FHIR-19932`.
- `FHIR-31393` (Published, Persuasive): ValueSet expansion ordinal extension context. It appears in a multi-issue commit subject but is context-only for `formats.html`; the patch line for this page is the `TypeB`/`typeB` example from `FHIR-19932`. Snapshot: `bun run jira:search snapshot FHIR-31393`.
- `FHIR-22723` (Published, Persuasive with Modification): lifecycle page structure issue. It appears in the same multi-issue commit subject but is context-only for this page. Snapshot: `bun run jira:search snapshot FHIR-22723`.
- `FHIR-21452` (Published, Persuasive): directly matches removal of the broken/unclear intro sentence "Other representations are allowed..." from R4. Snapshot: `bun run jira:search snapshot FHIR-21452`.
- `FHIR-25431` (Published, Persuasive): explains `datatype` vs `data type` normalization. Snapshot: `bun run jira:search snapshot FHIR-25431`.
- `FHIR-44047` (Resolved - change required, Persuasive): broad punctuation correction; the patch changes `i.e.` punctuation on this page. Snapshot: `bun run jira:search snapshot FHIR-44047`.

### Other Jira issues that plausibly explain or flag page problems

- `FHIR-50460` (Resolved - change required, Persuasive): directly identifies the current page defect: `NE` is mentioned but not defined in Key to Flags. The resolution says `Raised https://github.com/HL7/fhir-ig-publisher/issues/1293`. Snapshot: `bun run jira:search snapshot FHIR-50460`.
- `FHIR-50203` and `FHIR-50204` were found by searching for the R6 "additional resources" phrase. They concern search-page wording and search behavior for additional resources, not `formats.html`. Useful context only. Snapshots: `bun run jira:search snapshot FHIR-50203`; `bun run jira:search snapshot FHIR-50204`.
- `FHIR-50572` concerns conformance language in `resource.html#additional`, not this page. Context only. Snapshot: `bun run jira:search snapshot FHIR-50572`.

### Context-only Jira hits that should not drive action

- `FHIR-31393` and its Zulip/Confluence trail are about `ordinalValue` and ValueSet expansions, not `formats.html`.
- `FHIR-22723` is about the lifecycle page, not `formats.html`.
- `FHIR-50203`, `FHIR-50204`, and `FHIR-50572` are about `additional resources` elsewhere; no mismatch was found in `formats.html` from those issues.

## Zulip evidence

- Explicit Jira key searches:
  - Quoted searches for `FHIR-26932`, `FHIR-18452`, `FHIR-18448`, `FHIR-19932`, `FHIR-22723`, `FHIR-21452`, `FHIR-25431`, and `FHIR-44047` found no direct Zulip results.
  - `FHIR-31393` found `#terminology > FHIR-31393 and FHIR-19970`, but that thread is about ordinal extensions and is not relevant to this page.
- NE-related phrase search:
  - `bun run zulip:search fts "\"cannot have extensions\"" --limit 20` found `#implementers > Cannot have extensions`.
  - Snapshot command: `bun run zulip:search snapshot implementers "Cannot have extensions"`.
  - In that 2022-01-10 thread, Adam Cole asked for an example of the `NE` flag from `formats.html#table`; Grahame Grieve replied that the relevant cases were `Element.id`, `Resource.id`, and `Extension.url`, but none were marked with that flag. This supports the later `FHIR-50460` concern.
- Other phrase searches (`implementation obligations formats`, `UML Based Object-Oriented Definition`, `Resource Definitions formats`, `Additional resources resource.html#additional`) produced no page-specific rationale or only broad context.

## Confluence evidence

- `FHIR-18452`: `bun run confluence:search refs jira FHIR-18452` found FHIR Infrastructure minutes `79504672` (2021-10-04). Snapshot command: `bun run confluence:search snapshot 79504672`. The minutes record reopening and resolving the XML/JSON examples issue as Not Persuasive with Modification.
- `FHIR-25431`: `bun run confluence:search refs jira FHIR-25431` found FHIR Infrastructure minutes `66940491` (2020-01-13). Snapshot command: `bun run confluence:search snapshot 66940491`. The minutes mention using "data type" and auto-approval, though the final applied source uses `datatype`.
- `FHIR-44047`: `bun run confluence:search refs jira FHIR-44047` found FHIR Infrastructure WGM minutes `234784975` (2024 Dallas). Snapshot command: `bun run confluence:search snapshot 234784975`. Context only for broad punctuation cleanup.
- `FHIR-50460`: `bun run confluence:search refs jira FHIR-50460` found FHIR Infrastructure minutes `453902815` (2026-04-13). Snapshot command: `bun run confluence:search snapshot 453902815`. The minutes state the question is whether rendering should have a flag for elements that cannot have extension or id (`Element.id`, `Resource.id`, `Extension.url`), that Lloyd created IG Publisher issue `HL7/fhir-ig-publisher#1293`, and that this is a rendering change, not a StructureDefinition change.
- `FHIR-50203`/`FHIR-50204`: FHIR-I WGM Madrid minutes `325460605` record votes and search-page resolution; context only for the phrase "additional resources".
- Broader additional-resource Confluence hits (`324975645`, `453913445`, `358878314`, etc.) discuss the R6 additional-resource feature but did not reveal a `formats.html` mismatch.

## Timeline

- 2015-09-15: `NE` code formatting appears historically in `formats.html` (`git log -S '<code>NE</code>'` found `2103362...`).
- 2019-12-19: `080de809...` / PR `HL7/fhir#766` changes the page identity to Resource Definitions, removes the embedded UML section, adds abstract/interface flag entries, and removes the `NE` key entry while leaving the `NE` note.
- 2020-01-13: FHIR-I minutes `66940491` discuss `FHIR-25431` datatype/data type consistency.
- 2020-04-23 to 2020-04-28: `FHIR-26932` created/resolved; `3e8758...` pre-applies object-oriented spelling correction.
- 2021-10-04: FHIR-I minutes `79504672` reopen and resolve `FHIR-18452`; Jira resolution says to add explanatory note about XML examples on the JSON page.
- 2022-08-20: PR `HL7/fhir#2202` merges commits `a7026ed...` and `fb6236...`, adding then removing/moving comparison and serialization material from `formats.html`.
- 2022-08-23: `8df9b379...` applies the `FHIR-19932` example correction.
- 2022-08-31: `dfb978...` removes the unclear "Other representations..." sentence; `8592e120...` normalizes `datatype` wording.
- 2022-09-17: `96372c4...` removes the `Type` supertype sentence.
- 2022-12-05: `1e1665...` changes the `S` flag explanation to implementation obligations and adds the translation flag.
- 2025-03-15/16: `931df6...` / PR `HL7/fhir#3384` adds R6 additional-resource context.
- 2025-10-22 to 2025-11-03: RDF/Turtle wording, normative metadata, and punctuation cleanup land through PRs `HL7/fhir#3852`, `HL7/fhir#3901`, and `HL7/fhir#3951`.
- 2026-04-13: `FHIR-50460` is resolved as Persuasive/Resolved - change required; FHIR-I minutes say IG Publisher issue `HL7/fhir-ig-publisher#1293` was created to render/display the `NE` flag.
- 2026-04-21: IG Publisher issue `#1293` remains open; Lloyd comments that the flag will be hard-coded for the relevant elements.

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/formats.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/formats.html" && echo "new exists"`
- Direct diff and history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/formats.html`
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/formats.html`
  - `git show --stat --patch <commit> -- source/formats.html` for all 15 commits.
- Pickaxe checks:
  - `git -C "$TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' -S '<code>NE</code>' -- source/formats.html`
  - `git -C "$TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' -S '<a name="choice"></a>' -- source/formats.html`
- Full newer page read:
  - `wc -l ".../source/formats.html"` returned 214 lines.
  - Read `formats.html:1-120` and `formats.html:121-214`.
- Cross-page movement checks:
  - `rg "Systems SHALL declare which format\\(s\\) they support|servers SHOULD support both the XML and JSON formats|Bulk Data Formats|New line delimited JSON" "$TREE/source" --glob "*.html"`
  - `rg "Comparison between JSON and XML|generic XML --&gt; JSON converters|resourceType</code>" "$TREE/source" --glob "*.html"`
  - Read `resource-formats.html:1-130` and `uml.html:1-150`.
- Jira:
  - Snapshotted all explicit keys with `bun run jira:search snapshot FHIR-...`.
  - Phrase searches included `bun run jira:search fts "\"flag NE\"" --limit 20`, which found `FHIR-50460`.
  - Snapshotted discovered issues: `FHIR-50460`, `FHIR-50203`, `FHIR-50204`, `FHIR-50572`.
- Zulip:
  - Reran quoted key searches such as `bun run zulip:search fts "\"FHIR-31393\"" --limit 20`.
  - Phrase search `bun run zulip:search fts "\"cannot have extensions\"" --limit 20` found the relevant `#implementers` thread.
  - Snapshot: `bun run zulip:search snapshot implementers "Cannot have extensions"`.
- Confluence:
  - Searched refs/FTS for explicit keys and discovered keys.
  - Snapshots used: `79504672`, `66940491`, `234784975`, `325460605`, `324975645`, `453913445`, and `453902815`.
- GitHub/PR:
  - Used `gh api /repos/HL7/fhir/commits/<sha>/pulls` to identify associated PRs for commits.
  - Used `gh issue view 1293 --repo HL7/fhir-ig-publisher` to confirm IG Publisher issue state and comment.

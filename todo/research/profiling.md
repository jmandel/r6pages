# profiling research appendix

## Scope and coverage

- Page path: `source/profiling.html`.
- Old version/source: R4 4.0.1 at `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, local tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- New version/source: R6 ballot4 6.0.0-ballot4 at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, local tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: page exists in both trees. Old file has 922 lines; new file has 1241 lines.
- Direct diff: 399 insertions and 80 deletions in `source/profiling.html`.
- New page read end-to-end: yes, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling.html:1-1241`.
- Source history: 46 commits touched the page between the two supplied commits.
- Explicit Jira keys found from commit subjects/bodies: `FHIR-18452`, `FHIR-20385`, `FHIR-20468`, `FHIR-23035`, `FHIR-23846`, `FHIR-24911`, `FHIR-25043`, `FHIR-25431`, `FHIR-25462`, `FHIR-26944`, `FHIR-27115`, `FHIR-28607`, `FHIR-31054`, `FHIR-31602`, `FHIR-31603`, `FHIR-33046`, `FHIR-34152`, `FHIR-34385`, `FHIR-34434`, `FHIR-38134`, `FHIR-38741`, `FHIR-39179`, `FHIR-39753`, `FHIR-40296`, `FHIR-43163`, `FHIR-44047`, `FHIR-46201`, `FHIR-46399`, `FHIR-50391`. Linked context issue also snapshotted: `FHIR-50390`.
- Jira snapshots: all explicit keys above were snapshotted; no snapshot failures. Local copies are under `.copilot/session-state/f9d8b711-864e-4515-a297-f4251166d901/files/profiling/jira/`.
- Zulip: explicit Jira-key FTS searches produced no non-empty key-search result files. Exact phrase searches found the two relevant threads described below.
- Confluence: `refs jira` searches found minutes for most explicit keys; the strongest evidence was snapshotted for `FHIR-50391`, `FHIR-43163`, and related votes.
- Caveats: this review used source HTML, not a full rendered build. Some Confluence hit snippets are compressed by the search tool; only the most relevant pages were snapshotted. I did not chase context-only Jira hits after they matched the commit evidence and did not indicate a current page issue.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/profiling.html` | R4 baseline |
| Source | New R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling.html` | Current reviewed page |
| Source lines | Malformed Obligations link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling.html:1104-1108` | Current link target is `obligations.html>` |
| Source lines | Duplicate Must Support child paragraph | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/profiling.html:1123-1134` | Same concept appears twice; second has old typo |
| Source lines | Related obligations page text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/obligations.html:77-82` | FHIR-50391 repeating-element ambiguity text was applied there |
| Source lines | Related ElementDefinition slicing note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/elementdefinition.html:421-430` | FHIR-50391 cross-page context |
| Commit | FHIR-50391 implementation | `3f3077a286d669ed69f2cb51540b8f3aef58a433`, https://github.com/HL7/fhir/commit/3f3077a286d669ed69f2cb51540b8f3aef58a433 | Added the duplicate paragraph to profiling and related text to other pages |
| Commit | Obligations link introduced | `1e1665b9352f33a691326fdf3079bc19865a8681`, https://github.com/HL7/fhir/commit/1e1665b9352f33a691326fdf3079bc19865a8681 | Introduced `<a href="obligations.html>">` |
| Commit | FHIR-46201 applied | `04ead72d848aa2bde4ad3795704df79d8ae76730`, https://github.com/HL7/fhir/commit/04ead72d848aa2bde4ad3795704df79d8ae76730 | Switched Must Support guidance from `ElementDefinition.definition` to `.comment` but left broken link |
| Commit | FHIR-28607 original MS child text | `d1251ef4a0028fd12949632bf3c2aaa2c54a24b7`, https://github.com/HL7/fhir/commit/d1251ef4a0028fd12949632bf3c2aaa2c54a24b7 | Added the earlier paragraph later duplicated |
| Commit | FHIR-43163 discriminator clarification | `6b95f8be5f24869703ddc1b1d77d1347f7e62ea9`, https://github.com/HL7/fhir/commit/6b95f8be5f24869703ddc1b1d77d1347f7e62ea9 | Applied slicing-by-referenced-profile clarification |
| Jira | FHIR-50391 | https://jira.hl7.org/browse/FHIR-50391; `bun run jira:search snapshot FHIR-50391` | Formal R6 resolution for Must Support/obligations on repeating and sliced elements |
| Jira | FHIR-50390 | https://jira.hl7.org/browse/FHIR-50390; `bun run jira:search snapshot FHIR-50390` | Linked applicable-number obligation context |
| Jira | FHIR-46201 | https://jira.hl7.org/browse/FHIR-46201; `bun run jira:search snapshot FHIR-46201` | Basis for `.comment` guidance; linked Zulip thread quotes the broken link |
| Jira | FHIR-28607 | https://jira.hl7.org/browse/FHIR-28607; `bun run jira:search snapshot FHIR-28607` | Original child/parent Must Support guidance |
| Jira | FHIR-43163 | https://jira.hl7.org/browse/FHIR-43163; `bun run jira:search snapshot FHIR-43163` | Current discriminator paragraph matches Jira resolution |
| Zulip | Slices/preferred bindings thread | #IG creation > `Slices not inheriting preferred bindings from root`, https://chat.fhir.org/#narrow/stream/IG%20creation/topic/Slices%20not%20inheriting%20preferred%20bindings%20from%20root; local snapshot `.copilot/session-state/f9d8b711-864e-4515-a297-f4251166d901/files/profiling/zulip/slices-preferred-snapshot.txt` | Rationale and disagreement behind FHIR-50391/FHIR-50390 |
| Zulip | ElementDefinition definition vs comment | #conformance > `Usage of ElementDefintion.definition vs .comment`, https://chat.fhir.org/#narrow/stream/conformance/topic/Usage%20of%20ElementDefintion.definition%20vs%20.comment; local snapshot `.copilot/session-state/f9d8b711-864e-4515-a297-f4251166d901/files/profiling/zulip/elementdefinition-comment-snapshot.txt` | Rationale for FHIR-46201 and evidence broken Obligations link was visible |
| Confluence | FHIR-50391 vote | Page 358880988, https://confluence.hl7.org/spaces/FHIRI/pages/358880988/FHIR+Infrastructure+Minutes+CC+2025-07-14; `bun run confluence:search snapshot 358880988` | Records approval as persuasive with modification, 6-0-1 |
| Confluence | FHIR-50391 held | Page 358880363, https://confluence.hl7.org/spaces/FHIRI/pages/358880363/FHIR+Infrastructure+Minutes+CC+2025-07-07; `bun run confluence:search snapshot 358880363` | Shows issue deferred until Lloyd returned |
| Confluence | FHIR-43163 vote | Page 239211981, https://confluence.hl7.org/spaces/FHIRI/pages/239211981/FHIR+Infrastructure+Minutes+CC+2024-05-06; `bun run confluence:search snapshot 239211981` | Confirms Elliot accepted the proposed wording |
| Confluence | FHIR-46201 vote | Page 302252492, https://confluence.hl7.org/spaces/FHIRI/pages/302252492/FHIR+Infrastructure+Minutes+CC+2025-01-06 | Confirms Persuasive vote, 8-0-0 |

## Change summary

### Substantive/normative or conformance-semantics changes

- `CapabilityStatement.rest.resource.profile`/`supportedProfile` guidance was changed by `FHIR-25462` from a producer SHALL/search obligation to a softer "may" plus a SHOULD to use the Declared Profile extension (`8fb57bffdc...`; current page `profiling.html:139-202`). Jira records this as a non-compatible R5 enhancement with the same profiling-page update.
- Slicing guidance gained several clarifications:
  - Slice cardinality text from `FHIR-31054` changed per-slice max guidance and added a SHOULD for sum of slice minimums (`9029921047...`; current `profiling.html:772-783`).
  - `FHIR-31603` added a SHALL limit of no more than two `exists` slices and describes min/max expectations (`c7b89199bb...`; current `profiling.html:644-653`).
  - `FHIR-34152` made discriminator type `pattern` a backwards-compatible alias of `value` and moved pattern examples into `value` (`5ec5900947...`; current `profiling.html:634-643`).
  - `FHIR-26944` added `position` discriminator semantics (`1740aadf7c...`; current `profiling.html:668-673`).
  - `FHIR-23035` and `FHIR-43163` clarified `resolve()` discriminator paths and constraints asserted in different profiles (`97dac7c066...`, `6b95f8be5f...`; current `profiling.html:623-629` and `761-769`).
- Must Support/Obligations guidance changed materially:
  - `FHIR-28607` added parent/child Must Support hierarchy guidance (`d1251ef4a0...`).
  - `FHIR-38134` clarified that inherited Must Support meanings apply from ancestor artifacts (`7199f208be...`).
  - `FHIR-46201` changed recommended location from `ElementDefinition.definition` to `ElementDefinition.comment` (`04ead72d84...`).
  - `FHIR-50391` added R6 repeating/slicing ambiguity guidance across `elementdefinition.html`, `obligations.html`, and `profiling.html` (`3f3077a286...`), but the profiling-page part appears incorrectly applied; see the action file.
- Additional binding guidance was added from `FHIR-46399`: matching `additionalBinding.key` permits constraining inherited additional bindings (`757595c1e9...`; current `profiling.html:1037-1041`).
- Recursive backbone element profiling guidance was added from `FHIR-39753` (`98c42a7603...`; current `profiling.html:458-472`).
- Profiling descriptive elements was added from `FHIR-20385` (`81f905995c...`; current `profiling.html:321-392`) to explain revising/removing descriptive ElementDefinition fields.
- Section/partial resource profile guidance was added in `d30af6ea06...` for the `profile-element` extension (`profiling.html:807-917`).
- Duplicate mapping replacement guidance was added by `FHIR-34434` (`d94012a939...`; current `profiling.html:414-416`).

### Semantic guidance and examples

- A new hierarchy/cascade of implementation guidance and IG guidance link were added (`1e1665b935...`, later link cleanup `80eecb02fa...`; current `profiling.html:40-72`).
- Managing Profile Complexity guidance was added with advice to derive from national base profiles, use abstract workflow profiles, and associate obligations with actors (`1e1665b935...`; current `profiling.html:1142-1156`).
- Supporting Multiple Profiles gained guidance to avoid unnecessary element prohibition and prefer extensible/preferred bindings when possible (`FHIR-27115`, `6616e51d37...`; current `profiling.html:1223-1233`).
- Examples and links were updated: US Core example links (`FHIR-33046`), EndPoint.header primitive slicing example (`FHIR-20468`), corrected discriminator examples (`FHIR-18452`, `FHIR-31602`), Guidance IG link cleanup, and `Full Structure` naming/inherited-constraint wording (`FHIR-24911`).

### Metadata/template/navigation and editorial-only changes

- HTML template wrapper changes removed the surrounding `div` (`d7b8dadc62...`, merge `bb3428390a...`).
- R6 normative header changes removed maturity display and the `[%normative page infrastructure%]` macro (`270e0ceb7b...`, `605a6ffefb...`).
- `datatype` terminology consistency came from `FHIR-25431`; `e.g.`/`i.e.` punctuation came from `FHIR-44047`; several QA/typo commits made mechanical punctuation/link cleanup.
- Reader-facing defects remain in the current page: malformed Obligations link at `profiling.html:1107`; duplicated Must Support paragraph at `profiling.html:1123-1134`; minor typos such as `Instution`, `publically`, `discrinator`, and `but it normally be necessary` are visible but lower priority than the actionable findings.

## Source history

| Date | Commit | Subject | Page effect |
|---|---|---|---|
| 2021-05-25 | `9029921047` | Add clarity on cardinality of sliced element | `FHIR-31054`; slice cardinality max/min clarification |
| 2021-06-27 | `d7b8dadc62` | update html template | Mechanical wrapper removal |
| 2021-06-27 | `bb3428390a` | merge | Merge-only page delta |
| 2022-02-25 | `d1251ef4a0` | Fix FHIR-28607 | Adds child/parent Must Support hierarchy paragraph |
| 2022-02-25 | `b849e88798` | Fix FHIR-25043 | Changes `kind = constraint` to `derivation = constraint` |
| 2022-02-25 | `a2f68f871d` | Fix FHIR-31602 | Corrects profile slicing example to use `.resolve()` |
| 2022-02-25 | `c29815f8e4` | Fix FHIR-23846 | Clarifies profiles cannot change element names |
| 2022-03-17 | `2d85e098fa` | Fix FHIR-34385 | Extensional value set phrase clarification |
| 2022-08-02 | `c4432fdb67` | Merge pull request #1741 from HL7/FHIR-28607 | Merge of minor profiling Jira fixes |
| 2022-08-12 | `d30af6ea06` | #13386 - document section level profiles | Adds `profile-element`/partial resource profiling section |
| 2022-08-18 | `d4d902c684` | Update language around comparing profiles | Replaces draft DAF/QICore comparison with Confluence link |
| 2022-08-18 | `4f55d2ef77` | FHIR-20468 Slicing on a list of primitives not documented | Adds EndPoint.header primitive slicing example |
| 2022-08-19 | `5ec5900947` | FHIR-34152 Provide a better explanation of 'pattern' | Makes `pattern` equivalent to `value` and moves example guidance |
| 2022-08-20 | `a7026edb07` | FHIR-18452 Why XML in the JSON section? - N-Infra #140 | Corrects "Extensions" to "Entries" in discriminator example |
| 2022-08-19 | `8fb57bffdc` | FHIR-25462 update definitions for .profile and .supportedProfile and add declared-profile-extension | Changes profile declaration obligations and adds Declared Profile extension guidance |
| 2022-08-21 | `7098afe8ce` | Merge pull request #2202 from HL7/gg-20220821-misc | Misc merge |
| 2022-08-21 | `c7b89199bb` | FHIR-31603 Description of exists slicing could use more explaination. | Adds `exists` slicing rules, including SHALL no more than two slices |
| 2022-08-23 | `6b7412b189` | FHIR-33046 broken link in Profiling | Updates US Core example links |
| 2022-08-22 | `6616e51d37` | FHIR-27115 add profiling guidance to minimize non-overlapping profiles | Adds compatibility/minimize non-overlap profile guidance |
| 2022-08-23 | `97dac7c066` | FHIR-23035 Clarify documentation of the behavior and meaning of the resolve() function in the slicing discriminator path | Adds notes for `resolve()` targetProfile semantics |
| 2022-08-23 | `fb164d3706` | Merge remote-tracking branch 'origin/master' | Merge-only page delta |
| 2022-08-24 | `ab57a6ec66` | FHIR-24911 Say that inherited invariants are not displayed in the snapshot tab. | Renames Snapshot Table to Full Structure and notes inherited constraints not presented |
| 2022-08-29 | `d94012a939` | FHIR-34434 clarify how duplicate mappings are handled | Adds same-identity mapping replacement rule |
| 2022-08-29 | `1740aadf7c` | FHIR-26944 Allow slicing based on element order | Adds `position` discriminator type guidance |
| 2022-08-31 | `8592e12072` | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Editorial terminology consistency |
| 2022-09-06 | `23a31a590b` | update all ballot and stu notes | Macro/mechanical STU note update |
| 2022-12-05 | `1e1665b935` | ElementDefinition updates - add obligations and additional bindings, and update associated documentation + improve CS / VS templates | Adds hierarchy, obligations, malformed Obligations link, profile complexity |
| 2022-12-07 | `11f4c1fd05` | FHIR-39179 FHIRPath should use "as" to select type (not "is") | Replaces XPath mention with FHIRPath |
| 2023-02-08 | `b3e373388f` | fix extension links | Converts extension links to extension-location macro |
| 2023-02-10 | `fa3b0bac14` | FHIR-40296 Obligation should be an extension | Clarifies actor obligations cannot be undone/loosened |
| 2023-02-15 | `55a127b7c9` | FHIR-38741 Diff page has incorrect title in breadcrumbs | Adds Guidance IG paragraph |
| 2023-02-15 | `7199f208be` | FHIR-38134 The "Must Support" section does not state specifically if the "meaning" of Must Support is inherited | Adds inherited Must Support meaning paragraph |
| 2023-02-21 | `dad7cf37c7` | QA related changes | Punctuation and editorial QA |
| 2023-02-21 | `9f78014938` | more QA | Punctuation and grammar QA |
| 2023-03-19 | `98c42a7603` | https://jira.hl7.org/browse/FHIR-39753 - Added guidance on profiling recursive backbone elements | Adds Recursive Elements section |
| 2023-03-19 | `81f905995c` | https://jira.hl7.org/browse/FHIR-20385 Add guidance on profile descriptive elements | Adds Profiling descriptive elements section |
| 2023-03-25 | `80eecb02fa` | clean up broken links and references to build.fhir.org | Replaces Guidance IG link with macro |
| 2025-02-26 | `04ead72d84` | FHIR-46201 Language around MustSupport should recomment ElementDefinition.comment | Changes guidance from `.definition` to `.comment` |
| 2025-02-27 | `757595c1e9` | FHIR-46399 Need a mechanism to constrain additional bindings | Adds Additional Bindings section |
| 2025-04-16 | `40a8880322` | Fixing typo | Fixes `elsehere` to `elsewhere` |
| 2025-10-31 | `270e0ceb7b` | normative changes for R6 | Header/standards-status change |
| 2025-10-31 | `605a6ffefb` | more normative. changes | Removes normative macro |
| 2025-10-31 | `3f3077a286` | FHIR-50391 | Adds related text to ElementDefinition/Obligations and duplicate paragraph to profiling |
| 2025-11-03 | `6b95f8be5f` | FHIR-43163 Clarification for slicing by referenced resource element value. | Adds paragraph on constraints asserted in different profiles |
| 2025-11-03 | `887bc2383f` | FHIR-44047 | Mechanical e.g./i.e. punctuation changes |
| 2025-11-04 | `32ee662cd8` | Merge branch 'master' into i.e.-e.g- | Merge-only page delta |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-25462`: Jira says resource.profile documents actual/expected system behavior, supportedProfile is for subsets, and a standard extension records recognized/declared profiles. The profiling page was explicitly named in the resolution. The current page reflects the softer `may`/Declared Profile extension wording.
- `FHIR-28607`: Resolution says if a child is MS and the parent is not, support of the child is required only if the parent is supported, and complex MS elements without MS children need further guidance. Current page has that text twice: corrected at `profiling.html:1123-1125`, old typo version at `profiling.html:1133-1134`.
- `FHIR-20385`: Resolution broadened mapping suppression to other descriptive ElementDefinition fields and said to update profiling. Current descriptive-elements table reflects that topic.
- `FHIR-39753`: Resolution says to update profiling to clarify recursive backbone constraints apply recursively. Current Recursive Elements section reflects that.
- `FHIR-43163`: Resolution proposed the exact paragraph now present at `profiling.html:623-629`; comments show Elliot Silver accepted the wording.
- `FHIR-46201`: Jira and linked Zulip agreed Must Support expectations belong in `ElementDefinition.comment`, not `.definition`. Current page has `.comment`, but the same list item still contains the malformed `obligations.html>` link introduced earlier.
- `FHIR-46399`: Resolution explicitly says to add the additionalBinding key/constraining paragraph to profiling. Current page matches the resolution.
- `FHIR-50391`: Resolution is compatible/substantive and covers ElementDefinition slicing, implementation obligations, profiling cross-reference, and publisher warnings. The related ElementDefinition and Obligations pages contain the expected new guidance. The profiling page appears to have received a duplicate of the `FHIR-28607` child/parent paragraph instead of the resolved cross-reference to the Implementation Obligations page.
- `FHIR-50390`: Linked by `FHIR-50391`; it adds `applicable-number` to obligations and clarifies that if declared on a slicing element, the count applies across all slices, not each individual slice.

Other explicit keys were snapshotted and either matched narrow editorial/semantic changes already visible in the page (`FHIR-23846`, `FHIR-25043`, `FHIR-31602`, `FHIR-31603`, `FHIR-33046`, `FHIR-34152`, `FHIR-34385`, `FHIR-34434`, `FHIR-38134`, `FHIR-39179`, `FHIR-40296`, `FHIR-44047`) or were broader/contextual but not independently actionable for this page (`FHIR-18452`, `FHIR-20468`, `FHIR-23035`, `FHIR-24911`, `FHIR-25431`, `FHIR-26944`, `FHIR-27115`, `FHIR-31054`, `FHIR-38741`).

### Other Jira issues found by phrase search

- Exact phrase search for `"When a child element is defined as Must Support"` returned `FHIR-50391`, not `FHIR-28607`, because the current wording was later incorporated into the 2025 repeating/slicing issue.
- Exact phrase search for `"Implementers should read the documentation on the Implementation Obligations Page"` also returned only `FHIR-50391`; that sentence was not found in current `profiling.html`.
- Search for `"obligations.html>"` returned unrelated Jira hits plus `FHIR-50580`, but none were evidence that the malformed `profiling.html` link was fixed or intentionally retained.

### Context-only Jira hits that should not drive action

- `FHIR-27115` title is about `event-basedOn` but the page commit uses it for general non-overlapping-profile guidance. The text is sensible and not independently actionable here.
- `FHIR-50580`, `FHIR-53720`, and later obligations discussions appeared in broader searches but are not direct evidence that `source/profiling.html` itself has a different tracked change, except as background that Must Support/obligation interpretation remains active.

## Zulip evidence

- #IG creation > `Slices not inheriting preferred bindings from root` (snapshot command: `bun run zulip:search snapshot "IG creation" "Slices not inheriting preferred bindings from root"`):
  - The thread began with preferred/additional binding inheritance concerns and broadened to Must Support on slicing entries.
  - Grahame noted the consequential change if binding propagation also changed Must Support (`slices-preferred-snapshot.txt:57-70`).
  - Lloyd argued that rules on the slicer apply to all slices, including bindings/maxLength/MustSupport (`slices-preferred-snapshot.txt:126-160`, `433-457`).
  - Grahame proposed the multi-part approach that became `FHIR-50391`, including the exact implementation-obligations cross-reference sentence for `profiling.html#obligations` (`slices-preferred-snapshot.txt:631`).
  - Later discussion narrowed obligations behavior and led to `FHIR-50390`/`FHIR-50391` (`slices-preferred-snapshot.txt:879-913`, `924-943`).
- #conformance > `Usage of ElementDefintion.definition vs .comment` (snapshot command: `bun run zulip:search snapshot conformance "Usage of ElementDefintion.definition vs .comment"`):
  - Simone Heckmann identified the conflict between ElementDefinition definitions and profiling Must Support guidance, and the quoted R5 text already displayed the broken `">Obligations` link (`elementdefinition-comment-snapshot.txt:6-8`).
  - Lloyd agreed the Must Support language should refer to `.comment`, not `.definition` (`elementdefinition-comment-snapshot.txt:12-19`, `27-28`).

Explicit Jira-key Zulip FTS searches for the page's keys produced no non-empty direct key-search result files. Exact phrases were more useful than issue keys for Zulip.

## Confluence evidence

- `FHIR-50391`:
  - Page 358880363, FHIR Infrastructure Minutes CC 2025-07-07: issue was held pending Lloyd's return.
  - Page 358880988, FHIR Infrastructure Minutes CC 2025-07-14: motion to approve as persuasive with modification, Grahame Grieve/Bryn Rhodes, 6-0-1. The same minutes also say `FHIR-51477` was addressed by `FHIR-50390` in a different way and note that `FHIR-50391` had called that out.
- `FHIR-43163`:
  - Page 239206536, FHIR Infrastructure Minutes CC 2024-04-22: initial discussion of profiling discriminator section.
  - Page 239211981, FHIR Infrastructure Minutes CC 2024-05-06: "Elliot is OK with the change"; persuasive with modification, Gino Canessa/Yunwei Wang, 11-0-0.
- `FHIR-46201`:
  - Page 302252492, FHIR Infrastructure Minutes CC 2025-01-06: persuasive, Gino Canessa/Alexander Zautke, 8-0-0.
- Many older Jira keys have single FHIR-I minutes references confirming vote/process but did not reveal a current mismatch.

## Timeline

| Date | Event |
|---|---|
| 2020-01 to 2020-02 | `FHIR-25462` discussed/resolved; resource.profile/supportedProfile guidance should be updated and Declared Profile extension added. |
| 2021-01-11 | `FHIR-28607` vote: child Must Support under non-MS parent requires support only if parent is supported. |
| 2022-02-25 | `FHIR-28607` and several minor profiling fixes implemented on the page. |
| 2022-08 | Large R5 profiling-page update wave: partial profiles, discriminator details, position slicing, mapping, supported profile guidance, US Core link fixes. |
| 2022-12-05 | Obligations/additional-binding documentation added; malformed `obligations.html>` link introduced in profiling. |
| 2023-02 to 2023-03 | Must Support inheritance, recursive elements, and descriptive-element guidance added; FHIR-I minutes record related votes. |
| 2024-04 to 2024-05 | `FHIR-43163` discriminator clarification accepted by reporter and approved by FHIR-I. |
| 2024-06-21 | Zulip thread identifies `.definition` vs `.comment` conflict and visible malformed Obligations link; `FHIR-46201` filed. |
| 2025-01-06 | `FHIR-46201` voted persuasive. |
| 2025-02-26 | `FHIR-46201` applied to profiling (`.definition` -> `.comment`). |
| 2025-04-10 to 2025-04-28 | Zulip slicing/binding/Must Support thread leads to `FHIR-50390` and `FHIR-50391`. |
| 2025-07-14 | Confluence records `FHIR-50391` persuasive-with-modification vote, 6-0-1. |
| 2025-10-31 | `FHIR-50391` implementation commit changes `elementdefinition.html`, `obligations.html`, and `profiling.html`; profiling receives a duplicate child/parent Must Support paragraph. |
| 2025-11-03 to 2025-11-04 | `FHIR-43163` and `FHIR-44047` final page changes land before R6 ballot4 source boundary. |

## Evidence log

- Confirmed page boundary and line counts:
  - `test -f "<old>/source/profiling.html" && echo "old exists"`
  - `test -f "<new>/source/profiling.html" && echo "new exists"`
  - `wc -l "<old>/source/profiling.html" "<new>/source/profiling.html"`
- Direct diff command:
  - `git -C "<new>" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/profiling.html`
  - Result: 399 insertions, 80 deletions.
- Source history command:
  - `git -C "<new>" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/profiling.html`
  - Result: 46 page-touching commits.
- Per-commit patch file was built locally at `/tmp/profiling-history.patch` using `git show --stat --patch --unified=1` for each page-touching commit.
- Jira snapshots:
  - All explicit page-history Jira keys were snapshotted with `bun run jira:search snapshot <KEY>`.
  - Linked `FHIR-50390` was also snapshotted because `FHIR-50391` depends on it.
- Zulip:
  - Explicit key searches: `bun run zulip:search fts "FHIR-XXXXX" --limit 20`; direct key searches produced empty output files.
  - Exact phrase searches found the `Slices not inheriting preferred bindings from root` and `Usage of ElementDefintion.definition vs .comment` threads; both were snapshotted.
- Confluence:
  - `bun run confluence:search refs jira <KEY>` found FHIR-I minutes for many explicit keys.
  - Snapshotted key pages: `358880988`, `358880363`, `239211981`.
- Current-page cross-checks:
  - `rg -n "Implementers should read the documentation|When a repeating element is labelled|slicing element for a set of slices|applicable-number|applicability of mustSupport" "<new>/source"` found the FHIR-50391 text in `elementdefinition.html` and `obligations.html`, but not the expected profiling-page cross-reference sentence.
  - `rg -n "obligations\\.html|support the parent|Instution|publically|re-useability|discrinator|normally be necessary|SHALL|SHOULD|MAY" "<new>/source/profiling.html"` found the concrete current-page defects and normative statements reviewed.

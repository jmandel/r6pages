# safety research appendix

## Scope and coverage

- Page path: `source/safety.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Page boundary: present in both trees; old file has 197 lines and new file has 219 lines.
- Full current page read: yes, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/safety.html:1-219`.
- Source history: 18 commits touched `source/safety.html` between the two commits.
- Explicit tracker-like keys in source history/patches: `FHIR-22721`, `FHIR#17462`, `FHIR-24572`, `FHIR-34041`, `FHIR-22649`, `FHIR-34155`, `FHIR-25265`, `FHIR-24571`, `FHIR-24867`, `FHIR-42989`, `FHIR-44047`.
- `FHIR#17462` is not the same as Jira `FHIR-17462`: Jira `FHIR-17462` is about marital status code systems and is unrelated to this page. The relevant evidence is PR `HL7/fhir#1717`, titled `FHIR#17462`.
- Jira snapshots were taken for all explicit Jira-looking keys, including the unrelated `FHIR-17462` to rule it out.
- Zulip searches were run for explicit keys, distinctive changed phrases, and known threads; direct Zulip FTS searches for hyphenated issue keys failed because FTS parsed the hyphen as an operator, so key searches were repeated with SQL `content LIKE`.
- Confluence `refs jira`, FTS, and snapshots were run for the explicit Jira keys and strongest phrase hits.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source page | Current R6 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/safety.html:1-219` | Current page read end-to-end. |
| Source page | CodeSystem claim | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/safety.html:40-44` | Says the checklist is available as a CodeSystem for formal references. |
| Source page | Current conformance checks | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/safety.html:54-67` | Contains current modifier, modifierExtension, implicitRules, MustSupport text. |
| Source page | Current search checks | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/safety.html:91-109` | Contains FHIR-34155, FHIR-25265, and `subsetted` text/anchors. |
| Source page | Current narrative/integrity checks | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/safety.html:170-188` | Contains FHIR-34041 narrative items and FHIR-22649 decimal item. |
| Source page | Current decision support checks | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/safety.html:191-198` | Contains FHIR-24867 additions and inconsistent URL-shaped anchors. |
| Related source | Safety CodeSystem | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/codesystem/codesystem-safety-entries.xml:37-200` | Machine-readable checklist is not synchronized with the page. |
| Commit | FHIR-22721 typo fix | `d41ec4be5bb664bf438fe6a54101c77f469069a0`, https://github.com/HL7/fhir/commit/d41ec4be5bb664bf438fe6a54101c77f469069a0, PR https://github.com/HL7/fhir/pull/1269 | Fixed missing closing parenthesis in default-filters item. |
| Commit | FHIR#17462 subsetted item | `7ad9e8aa04cfb006e56bbb40316234270869e91b`, `a741e3b1ad6d9f731c2ca1e659155cc533703174`, PR https://github.com/HL7/fhir/pull/1717 | Added/moved the `SUBSETTED` update safety item; anchor remained wrong. |
| Commit | FHIR-24572 clock AND | `f2b936fb4852f079278d452d0001aa4ee2e54654`, https://github.com/HL7/fhir/commit/f2b936fb4852f079278d452d0001aa4ee2e54654, PR https://github.com/HL7/fhir/pull/1784 | Changed "or" to "and" in clock check. |
| Commit | FHIR-34041 narrative checks | `c334df8913e061457af9bf5dfab60da075e36fa9`, https://github.com/HL7/fhir/commit/c334df8913e061457af9bf5dfab60da075e36fa9, PR https://github.com/HL7/fhir/pull/2202 | Added narrative/presentation checklist section. |
| Commit | FHIR-22649 decimal check | `319c9305544fe9cfc6e34a59742f10e5846d4f2e`, https://github.com/HL7/fhir/commit/319c9305544fe9cfc6e34a59742f10e5846d4f2e, PR https://github.com/HL7/fhir/pull/2202 | Added decimal precision checklist item. |
| Commit | FHIR-34155 SearchParameter guidance | `bacf6ea51e74b27baf81dad7a1e064fa6fee2f77`, https://github.com/HL7/fhir/commit/bacf6ea51e74b27baf81dad7a1e064fa6fee2f77, PR https://github.com/HL7/fhir/pull/2243 | Added search parameter naming item, but wording does not clearly match Jira intent. |
| Commit | FHIR-25265 paging guidance | `cd4d7e53daa7946439cdf2cb1f3e82d9c183aabb`, https://github.com/HL7/fhir/commit/cd4d7e53daa7946439cdf2cb1f3e82d9c183aabb, PR https://github.com/HL7/fhir/pull/2243 | Added client/server paging checks. |
| Commit | FHIR-24571 server terminology | `9ae342407271a74f8be031342cf385669c2a8a4e`, https://github.com/HL7/fhir/commit/9ae342407271a74f8be031342cf385669c2a8a4e, PR https://github.com/HL7/fhir/pull/2312 | Clarified "server" as "HTTP server" where appropriate. |
| Commit | FHIR-24867 decision support | `d0cd856afd919b36f213916cc1e9af5c7b0679e8`, https://github.com/HL7/fhir/commit/d0cd856afd919b36f213916cc1e9af5c7b0679e8, PR https://github.com/HL7/fhir/pull/2834 | Added decision support safety section. |
| Commit | FHIR-42989 implicitRules | `e963b596c7ad3585b2285ac64ae7f8ee16a644ac`, https://github.com/HL7/fhir/commit/e963b596c7ad3585b2285ac64ae7f8ee16a644ac, PR https://github.com/HL7/fhir/pull/3920 | Added implicitRules item but did not fully apply Jira/Confluence disposition. |
| Commit | FHIR-44047 e.g./i.e. punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627, PR https://github.com/HL7/fhir/pull/3951 | Editorial punctuation changes. |
| Jira | FHIR-34041 | https://jira.hl7.org/browse/FHIR-34041; reopen with `bun run jira:search snapshot FHIR-34041` | Formal narrative safety checklist resolution. |
| Jira | FHIR-42989 | https://jira.hl7.org/browse/FHIR-42989; reopen with `bun run jira:search snapshot FHIR-42989` | Formal modifier/modifierExtension/implicitRules resolution. |
| Jira | FHIR-34155 | https://jira.hl7.org/browse/FHIR-34155; reopen with `bun run jira:search snapshot FHIR-34155` | Formal SearchParameter definition safety rationale. |
| Jira | FHIR-25265 | https://jira.hl7.org/browse/FHIR-25265; reopen with `bun run jira:search snapshot FHIR-25265` | Formal paging safety rationale. |
| Zulip | Narrative rationale | `#conformance > Intended and allowed use of narrative`, https://chat.fhir.org/#narrow/stream/conformance/topic/Intended%20and%20allowed%20use%20of%20narrative; reopen with `bun run zulip:search snapshot conformance "Intended and allowed use of narrative"` | Rationale feeding FHIR-34041. |
| Zulip | JSON decimal rationale | `#implementers > JSON decimals`, https://chat.fhir.org/#narrow/stream/implementers/topic/JSON%20decimals; reopen with `bun run zulip:search snapshot implementers "JSON decimals"` | Rationale feeding FHIR-22649. |
| Zulip | Safety CodeSystem origin | `#implementers > Are search parameters like filters?`, https://chat.fhir.org/#narrow/stream/implementers/topic/Are%20search%20parameters%20like%20filters%3F; reopen with `bun run zulip:search snapshot implementers "Are search parameters like filters?"` | Grahame described `codesystem-safety-entries` as supporting formal computability around the checklist. |
| Confluence | FHIR-34041 minutes | page `101355607`, https://confluence.hl7.org/spaces/FHIRI/pages/101355607/FHIR+Infrastructure+Minutes+WGM+202205; reopen with `bun run confluence:search snapshot 101355607` | FHIR-I WGM vote for FHIR-34041. |
| Confluence | FHIR-42989 origin | page `197331139`, https://confluence.hl7.org/spaces/FHIRI/pages/197331139/FHIR+Infrastructure+Minutes+CC+2023-10-23; reopen with `bun run confluence:search snapshot 197331139` | Origin discussion for adding Resource.implicitRules to checklist. |
| Confluence | FHIR-42989 disposition | page `227220068`, https://confluence.hl7.org/spaces/FHIRI/pages/227220068/FHIR+Infrastructure+Minutes+CC+2024-04-08; reopen with `bun run confluence:search snapshot 227220068` | Workgroup settled on updating modifier, modifierExtension, and adding implicitRules guidance. |
| Confluence | FHIR-25265 minutes | page `80121637`, https://confluence.hl7.org/spaces/FHIRI/pages/80121637/FHIR+Infrastructure+Minutes+CC+20200413; reopen with `bun run confluence:search snapshot 80121637` | FHIR-I vote for paging safety item. |
| Confluence | FHIR-24572 minutes | page `66933824`, https://confluence.hl7.org/spaces/FHIRI/pages/66933824/FHIR+Infrastructure+Minutes+CC+20191125; reopen with `bun run confluence:search snapshot 66933824` | FHIR-I vote for clock "and" change. |

## Change summary

### Page metadata/template/navigation - metadata/template/navigation

- Removed the old wrapper `<div class="col-12">` through template updates.
- Changed the standards row from work group plus FMM plus status to `Responsible Owner` plus `Standards Status`.
- Converted the STU note from an anchor plus `[%stu-note%]` to `[%stu-note dstu0%]`.
- Many checklist anchors changed from full `http://hl7.org/fhir/safety-entries#...` names to local names. This looks partly mechanical, but it left several duplicate or wrong anchors.

### Conformance checklist - semantic guidance

- FHIR-42989 added an `implicitRules` checklist item at current line 58.
- The page's MustSupport item changed from "supports elements labeled as MustSupport" to conforming to documented obligations at current line 59.
- The FHIR-42989 Jira/Confluence disposition also required stronger modifier and modifierExtension guidance, but current lines 56-57 still use the older, shorter wording.

### Date/time checklist - editorial/semantic guidance

- The date/time list was renumbered because new checklist items were inserted earlier.
- "time zones" was changed to "timezones" in current line 77. This is editorial, not a safety semantics change.

### Search checklist - semantic guidance

- FHIR-34155 added the current search parameter/operation definitions item at line 93.
- FHIR-25265 added paging checks for clients and servers at lines 94-95.
- FHIR#17462/PR 1717 added the `SUBSETTED` update/create warning, now in the server search section at line 109.
- FHIR-22721 fixed the missing closing parenthesis in the default-filters item, currently lines 107-108.
- FHIR-24571 changed some uses of "server" to "HTTP server".

### Deletion/privacy/security checklist - semantic guidance/editorial

- Deletion and privacy items were mainly renumbered and anchor-normalized.
- FHIR-24572 changed the clock item from "or my server is robust..." to "and my server is robust..." at current line 144.
- FHIR-44047 applied comma punctuation for `e.g.,` in a few places; this is editorial.

### Narrative/presentation checklist - semantic guidance with editorial/rendering defects

- FHIR-34041 added a new `Narrative / Presentation Related Safety Checks` section at current lines 170-181.
- It added four list items and a SHOULD paragraph about `Narrative.status`.
- Current implementation has duplicated `render-narratives` anchors for all four narrative items, a stale numeric reference to `#38`, and several transcription defects ("safe failback", "do not recognized", extra closing parenthesis).

### Integrity checklist - semantic guidance with anchor defects

- FHIR-22649 added decimal precision guidance at current line 188.
- The current decimal item uses anchor `use-provenance`, duplicating the preceding Provenance item; CodeSystem also lacks a `decimal` concept.

### Decision support checklist - semantic guidance

- FHIR-24867 added a `Decision Support Related Safety Checks` section at current lines 191-198.
- It contains five checklist items around confirming source data validity, clinician judgment, minimum necessary information, secure channels, and appropriate use.
- Three of these items use full URL-shaped `name` anchors while most R6 anchors were normalized to local names.

### Safety CodeSystem - spec problem

- The page still says the checklist is available as `codesystem-safety-entries.html` to facilitate formal references, but `source/codesystem/codesystem-safety-entries.xml` has not been kept in sync with the current page.
- A direct comparison found 55 page checklist items but only 41 CodeSystem concepts.
- Current page item codes missing from the CodeSystem: `implicitRules`, `search-param-names`, `search-pages-client`, `search-pages-server`, `subsetted`, `sending-narratives`, `generating-narratives`, `showing-narratives`, `check-validation`, `decimal`, `confirm-data-validity`, `clinician-judgement`, `minimum-necessary`, `secure-access`, `appropriate-use`.
- CodeSystem still has old `check=validation` while the page uses `check-validation` as the `li` title.
- Several CodeSystem definitions are stale even where the concept exists, e.g. MustSupport, check-clocks, default-filters, and search section wording.

## Source history

| Commit | Date | Label | Page-specific interpretation |
|---|---:|---|---|
| `d41ec4be5bb664bf438fe6a54101c77f469069a0` | 2021-05-10 | Update missing closing bracket - FHIR-22721 | Meaningful editorial fix to default-filters item. PR #1269. |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Mechanical template wrapper cleanup. |
| `bb3428390ab6e94154659749bcf0ba4d0b4bafcf` | 2021-06-27 | merge | Merge-related; no separate page decision identified. |
| `7ad9e8aa04cfb006e56bbb40316234270869e91b` | 2022-02-21 | FHIR#17462 | Added `SUBSETTED` item, initially in conformance area. PR #1717. |
| `a741e3b1ad6d9f731c2ca1e659155cc533703174` | 2022-02-21 | FHIR#17462 | Moved `SUBSETTED` item to server search section. PR #1717. |
| `f2b936fb4852f079278d452d0001aa4ee2e54654` | 2022-03-17 | Apply FHIR-24572 | Changed clock item from "or" to "and". PR #1784. |
| `c334df8913e061457af9bf5dfab60da075e36fa9` | 2022-08-19 | FHIR-34041 narrative | Added narrative/presentation checks. PR #2202. |
| `319c9305544fe9cfc6e34a59742f10e5846d4f2e` | 2022-08-20 | FHIR-22649 decimal | Added JSON decimal precision check. PR #2202. |
| `bacf6ea51e74b27baf81dad7a1e064fa6fee2f77` | 2022-08-25 | FHIR-34155 SearchParameter definitions | Added current search parameter/operation definitions checklist item. PR #2243. |
| `cd4d7e53daa7946439cdf2cb1f3e82d9c183aabb` | 2022-08-25 | FHIR-25265 paging | Added paging checks. PR #2243. |
| `9ae342407271a74f8be031342cf385669c2a8a4e` | 2022-08-31 | FHIR-24571 server terminology | Changed selected "server" references to "HTTP server". PR #2312. |
| `23a31a590b7b03840e4f5946c17b6ec6e0e54665` | 2022-09-06 | update all ballot and stu notes | Mechanical STU note macro change. |
| `1e1665b9352f33a691326fdf3079bc19865a8681` | 2022-12-05 | ElementDefinition obligations | Changed MustSupport item to obligations wording. |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | QA related changes | Editorial QA fixes; changed narrative spelling to `recognized` but retained typo "failback" and extra parenthesis. |
| `9f780149387dc652bec02aa7744e52774acddbc9` | 2023-02-21 | more QA | Editorial QA cleanup. |
| `55017c7f96a4fe7e8a3f3d08718be0ba56799699` | 2023-02-24 | more qa | Anchor/wording cleanup including `checklist`; introduced/left `CheckList` capitalization. |
| `d0cd856afd919b36f213916cc1e9af5c7b0679e8` | 2023-03-12 | J#24867 decision support | Added decision support section. PR #2834. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Metadata row changed to `Responsible Owner`; no page-specific safety content change. |
| `e963b596c7ad3585b2285ac64ae7f8ee16a644ac` | 2025-11-03 | FHIR-42989 implicitRules | Added implicitRules item and normalized anchors, but only partially applied Jira disposition. PR #3920. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Editorial comma punctuation for e.g./i.e. PR #3951. |
| `32ee662cd81e588351a75de377307f9c4a5c1564` | 2025-11-04 | Merge branch `master` into `i.e.-e.g-` | Merge commit after FHIR-44047 branch work. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-22721` - "Typo in Safety page", Published, Persuasive, Applied for R5. Description says point 18 on `safety.html#search` had a missing closing bracket. Commit `d41ec4b` applied the fix.
- `FHIR-24572` - "And vs. or for clock checks", Published, Persuasive, Applied for R5. It explicitly asked to change the clock item from "or" to "and"; commit `f2b936f` matches this.
- `FHIR-34041` - "Extend documentation on safety of generating narratives & ignoring a narrative", Published, Persuasive with Modification, Applied for R5. The resolution text says to add three checklist concepts: sending systems considering narrative as safe fallback, generated narrative readability/safety, and consuming systems SHOULD inspect `Narrative.status`. Commit `c334df8` applies this but current source has several transcription/anchor defects.
- `FHIR-22649` - "Add a note about decimal precision to the safety page", Published, Persuasive, Applied for R5. It points to `#implementers > JSON decimals` and asks for a safety note referring to JSON primitive decimal guidance and precision extension. Commit `319c930` added the current decimal item.
- `FHIR-34155` - "add check SearchParameter definitions to Search Related Safety Checks", Published, Persuasive, Applied for R5. Description says clients cannot trust that the meaning of a search string is the same on every server and "must always check the CapabilityStatement and the SearchParameter definitions." Current source only says to check names of search parameters and operation definitions in the HTTP server's CapabilityStatement.
- `FHIR-25265` - "Add paging concerns to the safety checklist", Published, Persuasive, Applied for R5. Description says applications not checking paging links can miss the full clinical picture; commit `cd4d7e5` added client/server paging checks.
- `FHIR-24571` - "Replace server with endpoint where appropriate", Published, Persuasive with Modification, Applied for R5. Resolution says to clarify that "server" means "HTTP server"; commit `9ae3424` does this for search section wording.
- `FHIR-24867` - "Do Not Assume the Data in the EHR is correct", Published, Persuasive, Applied for R5. Resolution says to add clinical safety language for decision support to this page and link to it from decision support topics/resources. Commit `d0cd856` adds five decision support checklist items.
- `FHIR-42989` - "Add check for implicitRules to safety checklist", Applied, Persuasive with Modification, Applied for R6. Resolution required updating the modifier item, updating the modifierExtension item, and adding an implicitRules item. Current page only adds implicitRules and leaves the modifier/modifierExtension text largely unchanged.
- `FHIR-44047` - "Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout", Resolved - change required, Persuasive. Commit `887bc23` applied local punctuation corrections on this page, though Jira status still indicated not fully complete in the snapshot.

### Explicit non-Jira `FHIR#17462`

- Commit subjects and PR #1717 use `FHIR#17462`, not `FHIR-17462`.
- `bun run jira:search snapshot FHIR-17462` resolved to an unrelated Jira issue about removing marital status code systems.
- `gh issue view 17462 --repo HL7/fhir` failed because repository issues are disabled; `gh pr view 17462 --repo HL7/fhir` found no PR.
- The commit-to-PR lookup found https://github.com/HL7/fhir/pull/1717, whose body says "FHIR#17462 added text according to resolution" but does not identify a Jira key.

### Other Jira searches

- `bun run jira:search fts "safety entries CodeSystem" --limit 20` and `bun run jira:search fts "safety checklist CodeSystem" --limit 20` found no issue that explains the current page/CodeSystem mismatch.

### Context-only Jira hits not driving action

- Jira `FHIR-17462` is unrelated to `source/safety.html`; it should not be used as evidence for the `SUBSETTED` page change.
- `FHIR-44047` is broad editorial punctuation cleanup; it does not explain or justify safety semantics.

## Zulip evidence

- `#conformance > Intended and allowed use of narrative` (snapshot command: `bun run zulip:search snapshot conformance "Intended and allowed use of narrative"`) is the thread linked from `FHIR-34041`. It records the rationale: narrative may contain additional content, generated narrative is hard to make clinically safe, and the spec should flag Narrative.status and display considerations. Morten Ernebjerg later says he wrote this up as `FHIR-34041`.
- `#implementers > JSON decimals` (snapshot command: `bun run zulip:search snapshot implementers "JSON decimals"`) is the thread linked from `FHIR-22649`. It records concerns that common JSON parsers/languages can lose decimal precision or trailing zeros, motivating safety guidance for decimal precision.
- `#implementers > Are search parameters like filters?` (snapshot command: `bun run zulip:search snapshot implementers "Are search parameters like filters?"`) contains Grahame's 2019-05-26 note: he added `codesystem-safety-entries.html` "to support formal computability around the safety checklist" and expected the list to grow. This supports treating the stale CodeSystem as a real mismatch, not merely an optional side artifact.
- SQL key search found only one direct issue-key mention: `FHIR-34041` in `#conformance > Intended and allowed use of narrative` message `255532073`.
- Phrase search `safe failback` found no Zulip results, while `safe fallback` found relevant narrative discussion. This supports treating "failback" as a source typo/transcription problem.
- Phrase searches for `SUBSETTED`, `implicitRules safety checklist`, and decision-support terms were mostly broad/contextual and did not establish a stronger page-specific rationale than the Jira/Confluence evidence.

## Confluence evidence

- Page `66933824`, "FHIR Infrastructure Minutes CC 20191125", records `FHIR-24572` as Persuasive with motion Rick Geimer/Yunwei Wang 7-0-0.
- Page `80121637`, "FHIR Infrastructure Minutes CC 20200413", records `FHIR-25265` as Persuasive with motion Rick Geimer/Yunwei Wang 10-0-0.
- Page `78677754`, "FHIR Infrastructure Minutes CC 20200323", records `FHIR-24867` being assigned to Clinical Decision Support for review.
- Page `101355607`, "FHIR Infrastructure Minutes WGM 202205", records `FHIR-34041` as Persuasive with Modification with motion Rick Geimer/Richard Ettema 13-0-1 after earlier discussion.
- Page `197331139`, "FHIR Infrastructure Minutes CC 2023-10-23", records the origin of `FHIR-42989`: while discussing rendering-styleSensitive and modifierExtension vs Resource.implicitRules, FHIR-I added a task to add "check Resource.implicitRules" to the clinical safety checklist.
- Page `227220068`, "FHIR Infrastructure Minutes CC 2024-04-08", records the operative `FHIR-42989` disposition: update modifier elements to clarify behavior when encountering them, update modifier extensions similarly, and add a rule for checking implicitRules and what to do when encountering them. Motion Corey Spears/Josh Mandel 8-0-0.
- Page `234784975`, "FHIR Infrastructure Minutes WGM 202405 - Dallas", records `FHIR-44047 will fix`; useful only as process evidence for punctuation cleanup.
- Page `453905263`, "FHIR Infrastructure Minutes WGM 202605 - Rotterdam", later mentions the safety checklist implicitRules item while discussing implicitRules clarity. This is later context, not direct evidence that `source/safety.html` itself changed before R6 ballot4.

## Timeline

| Date | Clock | Evidence |
|---:|---|---|
| 2019-05-26 | Discussion/source intent | Zulip `#implementers > Are search parameters like filters?`: Grahame says `codesystem-safety-entries.html` was added to support formal computability around the checklist. |
| 2019-09-17 | Jira vote | `FHIR-22649` vote date for decimal precision safety note. |
| 2019-11-25 | WG minutes | Confluence `66933824` approves `FHIR-24572` clock "and" change. |
| 2020-03-23 | WG minutes | Confluence `78677754` assigns `FHIR-24867` to CDS. |
| 2020-04-13 | WG minutes/Jira vote | Confluence `80121637` and Jira `FHIR-25265` approve paging safety item. |
| 2021-09-22 to 2021-10-01 | Zulip discussion | Narrative thread leads to `FHIR-34041`. |
| 2022-02-21 to 2022-02-24 | Source/PR | PR #1717 (`FHIR#17462`) adds/moves `SUBSETTED` item. |
| 2022-03-17 to 2022-03-18 | Source/PR | Commit `f2b936f`, PR #1784 apply `FHIR-24572`. |
| 2022-05-11 | WG/Jira vote | `FHIR-34041` Persuasive with Modification. |
| 2022-08-19 to 2022-08-20 | Source/PR | Commit `c334df8`, PR #2202 add narrative checks; commit `319c930`, same PR, adds decimal check. |
| 2022-08-25 to 2022-08-26 | Source/PR | Commits `bacf6ea` and `cd4d7e5`, PR #2243 add search parameter and paging checks. |
| 2022-08-31 to 2022-09-01 | Source/PR | Commit `9ae3424`, PR #2312 applies `FHIR-24571` HTTP server wording. |
| 2023-03-12 to 2023-03-13 | Source/PR | Commit `d0cd856`, PR #2834 adds decision support checks for `FHIR-24867`. |
| 2023-10-23 | WG minutes | Confluence `197331139` creates task for `FHIR-42989`. |
| 2024-04-08 | WG minutes/Jira vote | Confluence `227220068` settles `FHIR-42989` details; Jira vote date. |
| 2025-11-03 | Source/PR | Commit `e963b596`, PR #3920 partially applies `FHIR-42989`; commit `887bc23` applies `FHIR-44047`. |
| 2025-11-04 | Source boundary | Merge commit `32ee662` after punctuation branch; R6 ballot4 source commit is later `5d67a34`. |
| 2026-05 | Later reassessment/context | Confluence `453905263` mentions implicitRules safety checklist item in later R6 context. |

## Evidence log

- Read `SKILL.md`, `jira/README.md`, `zulip/README.md`, `confluence/README.md`, and `spec/README.md`.
- Confirmed page boundary and direct diff:
  - `test -f "$OLD_TREE/source/safety.html" && echo "old exists"`
  - `test -f "$NEW_TREE/source/safety.html" && echo "new exists"`
  - `git -C "$NEW_TREE" --no-pager diff --find-renames "$OLD_COMMIT" "$NEW_COMMIT" -- source/safety.html`
- Listed page-touching commits:
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' "$OLD_COMMIT..$NEW_COMMIT" -- source/safety.html`
- Inspected likely meaningful commits with:
  - `git -C "$NEW_TREE" --no-pager show --stat --patch <COMMIT> -- source/safety.html`
- Read full newer page:
  - `wc -l "$NEW_TREE/source/safety.html"` showed 219 lines.
  - Read lines `1-120` and `121-219`.
- Searched/snapshotted Jira:
  - `bun run jira:search snapshot FHIR-22721 FHIR-17462 FHIR-24572 FHIR-34041 FHIR-22649 FHIR-34155 FHIR-25265 FHIR-24571 FHIR-24867 FHIR-42989 FHIR-44047` (run as a loop).
  - `bun run jira:search fts "safety entries CodeSystem" --limit 20` and `bun run jira:search fts "safety checklist CodeSystem" --limit 20` found no explanatory issue.
- Searched/snapshotted Zulip:
  - Initial `bun run zulip:search fts FHIR-XXXXX --limit 10` attempts failed on hyphenated keys with SQLite FTS parsing errors; this is noted as a search caveat.
  - Re-ran issue-key searches with SQL `content LIKE '%FHIR-XXXXX%'`.
  - Snapshots: `bun run zulip:search snapshot conformance "Intended and allowed use of narrative"`, `bun run zulip:search snapshot implementers "JSON decimals"`, `bun run zulip:search snapshot implementers "Are search parameters like filters?"`.
  - Distinctive phrase searches included `safe fallback`, `safe failback`, `search parameter definitions`, `implicitRules safety checklist`, `SUBSETTED`, `minimum necessary information decision support`.
- Searched/snapshotted Confluence:
  - `bun run confluence:search refs jira FHIR-XXXXX` and `bun run confluence:search fts FHIR-XXXXX --limit 10` for explicit keys.
  - Snapshots: `66933824`, `101355607`, `80121637`, `78677754`, `197331139`, `227220068`, `234784975`, `453905263`.
- Checked GitHub PRs:
  - `gh api "/repos/HL7/fhir/commits/<sha>/pulls"` found PRs #1269, #1717, #1784, #2202, #2243, #2312, #2834, #3920, #3951.
  - `gh issue view 17462 --repo HL7/fhir` failed because issues are disabled; `gh pr view 17462 --repo HL7/fhir` failed because there is no PR #17462.
- Compared current page anchors:
  - Duplicate anchors found: `conformance` at lines 47/69/112, `obs-focus` at lines 66/109, `render-narratives` at lines 173-176, `use-provenance` at lines 187-188.
  - Mismatched `li title` vs anchor names found for `subsetted`, `sending-narratives`, `generating-narratives`, `showing-narratives`, `check-validation`, `decimal`, and decision support URL-shaped anchors.
- Compared page checklist items to `codesystem-safety-entries.xml`:
  - Current page has 55 checklist items; CodeSystem has 41 concepts.
  - Missing CodeSystem concepts listed above under "Safety CodeSystem".

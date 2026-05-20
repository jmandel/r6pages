# usecases research appendix

## Scope and coverage
- Page path: `source/usecases.html`; label: `usecases`.
- Compared R4 4.0.1 commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` with R6 ballot4 `6.0.0-ballot4` commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Boundary confirmed: the page exists in both trees and is modified, not added/deleted/renamed.
- Newer page read end-to-end: yes, line-numbered `source/usecases.html` lines 1-178.
- Source history between boundary commits: 7 path-touching commits in the direct path log. Explicit Jira keys in boundary source history: `FHIR-36884`, `FHIR-44047`.
- Jira/Zulip/Confluence searches covered explicit keys, page path/label, changed phrases, XDS/MHD/MHDS terms, punctuation terms, PHR R5 note, and ImmunizationRecommendation/ImmunizationEvaluation additional-resource terms.
- Caveats: no full rendered-site build was run; external links added by the page were checked with `curl` only. Zulip issue-key FTS failed on hyphenated keys, so SQL `LIKE` checks were used. The local git mirror contains non-ancestor branches; branch-only hits are called out separately.

## Quick links and locators
| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source line | Current PHR note | New tree `source/usecases.html:30-35` | Current R6 ballot4 page still says significant consumer-centered work is expected in next release `(R5)`; see `FHIR-44051`. |
| Source line | Current XDS/Document Sharing section | New tree `source/usecases.html:72-100` | Main substantive page text changed by `FHIR-36884`. |
| Source line | Old XDS section | Old tree `source/usecases.html:72-105` | Baseline text about XDS.b equivalence, DocumentManifest, and future MHD work. |
| Source line | ImmunizationRecommendation link | New tree `source/usecases.html:160-167` | Core internal link changed to the immunization-incubator CI build after resources moved out of core. |
| Commit | Template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`; merge PR `#1295` | Removes page wrapper div; mechanical/template only. |
| Commit/PR | XDS use case update | `dea034e8088f566f7568fb8598907f3251887f84`, `fe019cdb7138a05467e08691d8d04b83bdc0d3e8`; merge `e121b8291f5094f85026cbc4b9b0aefa6ca01b80` / PR `#2074` | Applies `FHIR-36884`, then fixes malformed IHE/XCA links. |
| Commit/PR | Punctuation sweep | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`; merge `ac44d699460cc94d75024d58d938509e6e590289` / PR `#3951` | Applies `FHIR-44047` to one `e.g.,` occurrence on this page. |
| Commit | R6 normative metadata | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | Changes page metadata row to “Responsible Owner” and drops the N/A maturity column. |
| Commit | Immunization resource removal | `e073fb45ec6f5a738a9f674baf63406bfe90fb78` | Broadly removes ImmunizationRecommendation/Evaluation from core; updates this page to external incubator link. |
| Commit | Merge reconciliation | `26e92f62992049deb04d97c36677f38eb4d140af` | Merge combines punctuation and immunization-link branches for this file. |
| Branch-only commit | Unapplied R5 note fix | `aab383f7800e2dc08402d1d042d980d08968e14e` on branch `rhofstede-fixes-pharmacy`; not an ancestor of newer commit | Implements `FHIR-44051` by changing `(R5)` to `(R6)`, but current boundary still has `(R5)`. |
| Jira | `FHIR-36884` | `https://jira.hl7.org/browse/FHIR-36884`; local: `bun run jira:search snapshot FHIR-36884` | Formal rationale for XDS section rewrite; Published/Persuasive, applied for R5. |
| Jira | `FHIR-44047` | `https://jira.hl7.org/browse/FHIR-44047`; local snapshot command | Formal punctuation correction for `e.g.,`/`i.e.,`. |
| Jira | `FHIR-44051` | `https://jira.hl7.org/browse/FHIR-44051`; local snapshot command | Formal correction for stale `(R5)` note on `usecases.html#phr`; not applied in current boundary. |
| Jira | `FHIR-12472` | `https://jira.hl7.org/browse/FHIR-12472` | Older XDS context: added DocumentManifest bullet later superseded by `FHIR-36884`. |
| Zulip | Additional resources background | `https://chat.fhir.org/#narrow/stream/fmg/topic/Assessment%20of%20Resources%20for%20removal%20from%20R6` | FMG discussion of moving immature resources to additional-resource IGs. |
| Zulip | Immunization move request | `https://chat.fhir.org/#narrow/stream/fmg/topic/Wednesday%20Rant` | Craig Newman asks FMG to help PH move ImmunizationRecommendation/Evaluation into an Additional Resources IG. |
| Zulip | Incubator creation | `https://chat.fhir.org/#narrow/stream/fmg/topic/FHIR%20IG%20Incubator%20Creation` | Shows `immunization-incubator` repo/CI build became available immediately before source link change. |
| Confluence | FHIRI May 2022 WGM | `https://confluence.hl7.org/spaces/FHIRI/pages/101355607/FHIR+Infrastructure+Minutes+WGM+202205` | Records `FHIR-36884` persuasive motion 12-0-0. |
| Confluence | FHIRI May 2024 WGM | `https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas` | Records `FHIR-44047 will fix`. |
| Confluence | PHWG 2025-10-02 | `https://confluence.hl7.org/spaces/PHWG/pages/358283945/2025-10-02+Public+Health+Work+Group+Call+Minutes` | Records PHWG vote to make ImmunizationRecommendation and ImmunizationEvaluation Additional Resources in R6. |
| Local command | Direct diff | `git -C <new-tree> diff --find-renames <old> <new> -- source/usecases.html` | Establishes 18 insertions/25 deletions and exact page-level changes. |

## Change summary
### Document Sharing / XDS refresh — semantic guidance, non-substantive Jira correction
- `FHIR-36884` replaces older XDS-centric prose with IHE Document Sharing terminology and links to the IHE HIE whitepaper, XDS, XCA, MHD, and MHDS.
- The page no longer says “FHIR provides equivalent functionality to XDS” or that IHE is merely “working with” FHIR for MHD; it now describes MHD as a standardized FHIR API and MHDS as a fuller Document Sharing service set.
- Resource list changed from `DocumentManifest` to `List` for SubmissionSet/Folder groupings and adds `Consent`.
- Jira marks this as non-substantive correction, but it is meaningful semantic guidance for implementers reading the page.
- The initial applying commit briefly introduced malformed `href` attributes for IHE/XCA; follow-up commit `fe019cdb...` repaired them before the PR merge.

### ImmunizationRecommendation reference — reference/link update driven by broader R6 resource removal
- The decision-support table still lists the immunization decision, but its response resource link now points to `https://build.fhir.org/ig/HL7/immunization-incubator/en/StructureDefinition-ImmunizationRecommendation.html` instead of core `immunizationrecommendation.html`.
- This aligns with broad commit `e073fb45...` removing ImmunizationRecommendation and ImmunizationEvaluation source files from core. PHWG minutes later/nearby evidence record a 20-0-3 decision to make both Additional Resources in R6.
- This is not a REST/search/operation semantics change on this page, but it changes where readers are directed for a formerly-core resource.

### Metadata/template/navigation — mechanical or publication boilerplate
- Template update removed the outer `<div class="col-12">` and closing `</div>`.
- R6 metadata update changes “FHIR Work Group” to “Responsible Owner: FHIR Work Group” and removes the `Maturity Level: N/A` cell.
- Final newline normalized. No page semantics identified.

### Editorial punctuation — editorial only
- `FHIR-44047` changes `(e.g. from patient monitoring devices)` to `(e.g., from patient monitoring devices)`.

### No observed change
- PHR REST/search/read/history guidance and decision-support interaction-pattern prose are otherwise unchanged.
- No new normative SHALL/SHOULD language, search parameter semantics, operation definitions, examples, terminology bindings, or anchors were added by the diff.

## Source history
| Date | Commit | Subject / PR | Page effect | Classification |
|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213` | `update html template`; merge PR `#1295` | Removes `col-12` wrapper div and closing tag. | Mechanical/template |
| 2022-08-04 | `dea034e8088f5` | `Apply FHIR-36884` | Rewrites XDS section to Document Sharing/MHD/MHDS, replaces DocumentManifest with List, adds Consent. | Semantic guidance / non-substantive Jira correction |
| 2022-08-04 | `fe019cdb7138` | `fix`; part of PR `#2074` merged by `e121b829...` | Repairs malformed IHE and XCA links introduced in previous commit. | Link fix |
| 2025-10-31 | `270e0ceb7b02` | `normative changes for R6` | Changes metadata row to Responsible Owner and removes N/A maturity cell. | Metadata/template |
| 2025-11-03 | `887bc2383fb7` | `FHIR-44047`; PR `#3951` merged 2025-11-06 | Adds comma after `e.g.` in PHR section. | Editorial |
| 2025-11-07 | `e073fb45ec6f` | `removing ImmunizationRecommendation and ImmunizationEvaluation` | Changes decision-support table link to immunization-incubator CI build. | Reference/link update from broader R6 resource move |
| 2025-11-07 | `26e92f629920` | `Merge remote-tracking branch 'origin/master'` | Merge reconciliation: relative to one parent brings punctuation; relative to other brings immunization link. | Mechanical merge |

Branch-only / not in boundary: `aab383f7800e` (`FHIR-44051`, 2025-02-20) changes the PHR note from `(R5)` to `(R6)` but `git merge-base --is-ancestor aab383... 5d67...` returned no. The current boundary still contains `(R5)`.

## Jira evidence
### Explicit Jira keys from source history
- `FHIR-36884` — “XDS discussion is out of date.” Published/Persuasive; Raised in R4; Applied for R5; Related Pages `FHIR-core-usecases`; vote Rick Geimer/Michael Donnelly 12-0-0 on 2022-05-11. Description supplies near-exact replacement text for the XDS section. Comment on 2022-08-04 says applied at commit/merge `e121b829...`.
- `FHIR-44047` — “Incorrect punctuation of exempli gratia and id est (e.g., & i.e.,) throughout.” Resolved - change required; R6 ballot; Related Pages `FHIR-core-many`. Source applies only the local `e.g.,` instance on this page. Jira status remains indeterminate in the local snapshot despite the page commit being present.

### Other plausible issues
- `FHIR-44051` — “Incorrect version of FHIR (R5) noted.” Resolved - change required; Related URL `https://hl7.org/fhir/6.0.0-ballot1/usecases.html#phr`; resolution says “Update to R6.” Current R6 ballot4 source line 34 still says `(R5)`. A source commit exists on non-ancestor branch `rhofstede-fixes-pharmacy`, so this is a real intent-vs-current-source gap.
- `FHIR-50372` — “Immunization resources need updated FMM.” Resolved - No Change on 2025-11-06 because R6 publication style changed: all R6 resources normative and additional resources in separate implementations. Context for the incubator/resource-removal change, not a direct usecases change.
- `FHIR-53486` — later medications-module issue (created 2025-11-20) says to move ImmunizationEvaluation and ImmunizationRecommendation to Additional Resources on the medications module page. Context-only for the same resource move; outside this page boundary.

### Context-only hits
- `FHIR-12472` — older “Use-cases page section on XDS” added the `DocumentManifest` bullet and MHD wiki link in 2017. `FHIR-36884` later supersedes this content by moving from DocumentManifest to `List` and from “working on MHD” to current IHE Document Sharing/MHD/MHDS links.
- Searches for `source/usecases.html`, exact `"XDS usecases"`, exact `"XDS usecases is out of date"`, `"SubmissionSet" Folder List DocumentManifest`, and exact immunization-removal commit wording did not reveal additional direct Jira causes.

## Zulip evidence
- No exact Zulip mentions were found for `FHIR-36884`, `FHIR-44047`, `FHIR-44051`, or `FHIR-12472` using SQL `content LIKE`; initial FTS key searches failed because hyphenated issue keys were parsed as operators/columns.
- XDS/MHD/MHDS phrase searches found background `#ihe` discussions by John Moehrke explaining MHD as a FHIR API to document sharing, including XDS/MHDS/XCA contexts, but no thread tied directly to `FHIR-36884` application.
- `#fmg > Assessment of Resources for removal from R6` (2025-08-28) records FMG’s additional-resources pathway for immature resources and notes that resources moved to additional resources can no longer be directly referenced from core resources/examples, though they can be referenced in narrative.
- `#fmg > Wednesday Rant` (2025-10-22) contains direct implementation context: Lloyd McKenzie says moving a resource means putting the StructureDefinition and related artifacts in an IG; Craig Newman asks FMG to help Public Health move ImmunizationEvaluation and ImmunizationRecommendation to an Additional Resources IG.
- `#fmg > FHIR IG Incubator Creation` (2025-11-05 to 2025-11-06) records Craig Newman proposing `uv/immunization-incubator`, Grahame Grieve creating `https://github.com/HL7/immunization-incubator`, and Craig reporting the CI build live at `https://build.fhir.org/ig/HL7/immunization-incubator/en/` just before the source link was changed.

## Confluence evidence
- FHIR Infrastructure WGM May 2022 minutes (`101355607`) list `FHIR-36884` as persuasive with motion Rick Geimer/Michael Donnelly, 12-0-0. This supports the Jira disposition and the 2022 source update.
- FHIR Infrastructure WGM May 2024 Dallas minutes (`234784975`) list `FHIR-44047 will fix` with vote context near the tracker backlog. Supports the punctuation sweep.
- No Confluence references were found for `FHIR-44051`; the unapplied stale-R5-note evidence is Jira plus branch-only source history.
- PHWG 2025-09-11 minutes (`345541706`) show early R6/additional-resource discussion: Immunization and ImmunizationRecommendation seemed reasonable for core; ImmunizationEvaluation had limited real-world implementation; WG planned to ask FMG/FHIR-I for advice.
- PHWG 2025-10-02 minutes (`358283945`) record the final PHWG decision: make both ImmunizationRecommendation and ImmunizationEvaluation “Additional Resources” in R6 until further maturity, approved 20-0-3, with Craig/Sarah to notify FMG. This supports the current page’s external incubator link.
- Confluence FTS for exact Document Sharing/MHD/MHDS terms did not find additional high-signal minutes or publication pages.

## Timeline
| Date | Event type | Evidence | Notes |
|---|---|---|---|
| 2017-02-13 / 2017-02-25 | Jira vote/application | `FHIR-12472`; svn revision comment | Older XDS usecase update added DocumentManifest/MHD context later superseded. |
| 2018-10-17 | Source text origin | Blame `5814ced8c08` lines 33-34 | PHR note saying next release `(R5)` introduced before R5. |
| 2022-04-27 | Jira created | `FHIR-36884` | XDS discussion reported out of date. |
| 2022-05-11 | Jira resolved/voted | `FHIR-36884`; Confluence `101355607` | Persuasive, 12-0-0; applied for R5. |
| 2022-08-04 | Source commits / PR merge | `dea034...`, `fe019...`, merge `e121...` PR `#2074` | XDS/Document Sharing rewrite and link repair land. |
| 2024-01-22 | Jira created | `FHIR-44047`, `FHIR-44051` | R6 ballot comments for punctuation and stale `(R5)` note. |
| 2024-05-23 | Jira disposition | `FHIR-44047`, `FHIR-44051`; Confluence `234784975` | `FHIR-44047` will fix; `FHIR-44051` resolution says update to R6. |
| 2025-02-20 | Branch-only source attempt | `aab383...` | Applies `FHIR-44051` on `rhofstede-fixes-pharmacy`, not ancestor of R6 ballot4 commit. |
| 2025-10-31 | Source metadata | `270e0c...` | R6 normative metadata row change. |
| 2025-11-03 / 2025-11-06 | Source + PR merge | `887bc...`, merge `ac44d...` PR `#3951` | Applies punctuation correction to this page. |
| 2025-09-11 to 2025-10-02 | WG reassessment | PHWG minutes `345541706`, `358283945` | Decision evolves to making ImmunizationRecommendation/Evaluation Additional Resources. |
| 2025-11-05 to 2025-11-06 | Zulip / infrastructure | `#fmg` incubator thread | Immunization incubator repo and CI build created. |
| 2025-11-07 | Source implementation | `e073fb...`, merge `26e92...` | Core removal and usecases external link update land. |
| 2025-12-18 | Publication boundary commit | `5d67a34...` | R6 ballot4 source commit still contains stale `(R5)` PHR note. |

## Evidence log
- File boundary: `test -f` confirmed old and new `source/usecases.html`; `git diff --find-renames --name-status` reported `M source/usecases.html`.
- Direct diff: `git diff --find-renames --stat` reported 43 changed lines (18 insertions, 25 deletions); full patch separated Document Sharing, metadata/template, punctuation, and immunization link changes.
- History: `git log --reverse --date=short --format='%H%x09%ad%x09%s' old..new -- source/usecases.html` produced 7 path commits; `git show --stat --patch` inspected each.
- Pickaxe/blame: `git log -S` confirmed changed phrases map to `FHIR-36884`, `FHIR-44047`, R6 metadata, and immunization removal commits. `git blame` located current XDS lines, immunization line, and stale PHR note origin.
- Ancestry check: `git merge-base --is-ancestor aab383... 5d67...` returned no; current line still has `(R5)`, so `FHIR-44051` is not applied in this boundary.
- Jira: snapshots read for `FHIR-36884`, `FHIR-44047`, `FHIR-44051`, `FHIR-12472`, `FHIR-50372`, `FHIR-53486`; FTS searches performed for page path/label and changed phrases.
- Zulip: FTS performed for changed phrases and immunization terms; exact issue-key FTS failed on hyphen parsing, then SQL `LIKE` found no key mentions. Snapshots/SQL contexts inspected for `#fmg` additional-resource and incubator threads.
- Confluence: FTS and refs searches performed for explicit keys and changed terms; snapshots/SQL contexts inspected for FHIRI and PHWG minutes. `FHIR-44051` Confluence refs: none.
- Link checks: changed external links to IHE HIE whitepaper, IHE TF XDS/XCA, MHD, MHDS, and immunization-incubator all returned HTTP 200 with `curl -L`.

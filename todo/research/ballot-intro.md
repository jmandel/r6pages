# ballot-intro research appendix

## Scope and coverage

- Page path: `source/ballot-intro.html`
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: `source/ballot-intro.html` exists in both trees; the page is modified, not added/deleted/renamed.
- The R6 ballot4 source page was read end-to-end: 174 lines.
- Source history count: 30 commits touched this page between the two commits. Explicit issue-like keys in commit subjects: `FHIR-31847`, `FHIR-32171`, `FHIR-32368`, `FHIR-25431`, `FHIR-39179`, `FHIR-49922`.
- Jira searches performed for explicit keys plus distinctive changed phrases. Promising/current issues snapshot: `FHIR-53852`, `FHIR-54976` through `FHIR-54984`.
- Zulip searches performed for explicit keys and distinctive phrases; unquoted key searches initially failed because FTS parsed hyphenated keys, then quoted key searches were rerun successfully. Relevant snapshots: `#fmg > ✔ FMM framework revisions?`, `#fmg > Overview of Incubating IGs`, `#financial > InsurancePlan / InsuranceProduct removal from R6 core`, and the broad `#fmg` R5/R6 timeline thread.
- Confluence searches performed for explicit keys and page phrases. Relevant snapshots: FMG 2026-02-04 minutes, FHIR-I 2026-01 WGM minutes, OO 2025-11-25 minutes.
- Caveat: the R6 ballot-intro page is explicitly treated by FMG as per-ballot text that is rewritten/replaced each ballot, so many proofreading Jira comments were resolved "No Change" on that basis rather than applied to this already-published ballot4 page.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/ballot-intro.html` | Old page boundary. |
| Source | R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ballot-intro.html` | New page boundary; read end-to-end. |
| Source lines | R6 normative ballot scope/process | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ballot-intro.html:19-37` | New guidance on full normative ballot, voting, THO movement, FMM caveat, and cross-version artifacts. |
| Source lines | R6 breaking-change notes | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ballot-intro.html:42-51` | States no future breaking changes after R6 and special attention to R4 normative content. |
| Source lines | Moved resources/artifacts list | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ballot-intro.html:69-113` | R6-specific change-summary list; contains visible defects and is later discussed as incomplete. |
| Source lines | Attention requests | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ballot-intro.html:117-134` | Lists resource-removal, medication, THO, Observation, SearchParameter/OperationDefinition, and CodeSystem comments. |
| Source line | Broken THO link | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ballot-intro.html:129` | Current page still points to `http://terminology.fhr.org`. |
| Source lines | Jira balloting process | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/ballot-intro.html:141-158` | Replaces R4 spreadsheet guidance with Jira-balloting guidance. |
| Commit | R6 full normative rewrite | `71567db3ee039ac6977be5f96a7e013896569a36` / `https://github.com/HL7/fhir/commit/71567db3ee039ac6977be5f96a7e013896569a36` | Rewrote draft-ballot notes into full R6 normative ballot guidance and added initial moved-artifact list. |
| Commit | Notes/resource list adjustments | `02f79b0a3ba639280ab7d0d92e364f0a2b676bea` / `https://github.com/HL7/fhir/commit/02f79b0a3ba639280ab7d0d92e364f0a2b676bea` | Introduced the current `</ul>4` artifact-list typo and broken THO URL; added several attention requests. |
| Commit | R6 clarification | `3bfb4a3a0bea81f82e7e71100893c1226d8fccdc` / `https://github.com/HL7/fhir/commit/3bfb4a3a0bea81f82e7e71100893c1226d8fccdc` | Added further ballot-process and breaking-change clarifications. |
| Commit | Final ballot-note corrections | `5a821238a5bd9dba7300c3d3b229c6bd8b558808` / `https://github.com/HL7/fhir/commit/5a821238a5bd9dba7300c3d3b229c6bd8b558808` | Last page-specific correction before the target commit; added non-voted comment warning and R6 Jira filter link. |
| Jira | Broken terminology link | `FHIR-53852` / `https://jira.hl7.org/browse/FHIR-53852`; reopen with `bun run jira:search snapshot FHIR-53852` | Ballot4 issue accepts changing `http://terminology.fhr.org/` to `https://terminology.hl7.org/`; current source still has the old link. |
| Jira | THO movement concern | `FHIR-54976` / `https://jira.hl7.org/browse/FHIR-54976`; reopen with `bun run jira:search snapshot FHIR-54976` | Challenges "moving valuesets ... is not itself a substantive change"; still Waiting for Input. |
| Jira | Ballot-intro proofreading cluster | `FHIR-54977`-`FHIR-54984`; e.g. `bun run jira:search snapshot FHIR-54980` | Later ballot comments against this page; most resolved No Change because the intro is replaced each ballot. |
| Zulip | FMM framework caveat | `#fmg > ✔ FMM framework revisions?`, `https://chat.fhir.org/#narrow/stream/fmg/topic/%E2%9C%94%20FMM%20framework%20revisions%3F`; reopen with `bun run zulip:search snapshot fmg "✔ FMM framework revisions?"` | A reader asked about the page's FMM caveat; Lloyd said no real work had happened yet and R6 timing was uncertain. |
| Zulip | Incubator overview | `#fmg > Overview of Incubating IGs`, `https://chat.fhir.org/#narrow/stream/fmg/topic/Overview%20of%20Incubating%20IGs`; reopen with `bun run zulip:search snapshot fmg "Overview of Incubating IGs"` | Later discussion says the ballot intro is the only overview found and is incomplete, e.g. missing `Encounter.$everything`. |
| Zulip | InsurancePlan/Product removal | `#financial > InsurancePlan / InsuranceProduct removal from R6 core`, `https://chat.fhir.org/#narrow/stream/financial/topic/InsurancePlan%20%2F%20InsuranceProduct%20removal%20from%20R6%20core`; reopen with `bun run zulip:search snapshot financial "InsurancePlan / InsuranceProduct removal from R6 core"` | Later implementer discussion and `FHIR-57325` challenge/clarify the page's "likely to be removed" note. |
| Confluence | FMG ballot-intro dispositions | Page `413252111`, `https://confluence.hl7.org/spaces/FMG/pages/413252111/2026-02-04+FMG+Agenda+Minutes`; reopen with `bun run confluence:search snapshot 413252111` | FMG resolved the `FHIR-54977`-`FHIR-54984` ballot-intro comments No Change and discussed proofreading next ballot. |
| Confluence | FHIR-I WGM routing | Page `404100072`, `https://confluence.hl7.org/spaces/FHIRI/pages/404100072/FHIR+Infrastructure+Minutes+WGM+202601+-+Virtual`; reopen with `bun run confluence:search snapshot 404100072` | FHIR-I moved several ballot-intro comments, including `FHIR-54976`-`FHIR-54979`, to FMG. |
| Confluence | Observation organizer context | Page `404100187`, `https://confluence.hl7.org/spaces/OO/pages/404100187/2025-11-25+OO+on+FHIR`; reopen with `bun run confluence:search snapshot 404100187` | Mentions Observation normative-candidate elements including `Observation.organizer`. |

## Change summary

### R4-specific roadmap replaced with R6 full normative ballot instructions

Classification: semantic guidance / ballot-process guidance.

The R4 page was a "R4 Ballot Roadmap" for a follow-up R4 ballot, with detailed R4 normative package tables, R4 round-2 scope rules, and spreadsheet/tracker submission guidance. The R6 page is a much shorter "R6 Ballot Roadmap" for the first full R6 normative ballot. It states that all of the specification is being balloted as a full Normative ANSI Standard, that substantive implementation-impacting changes require ballot approval/reballot, that balloters must sign up for the first ballot to participate later, and that submitting a Jira comment is not the same as voting.

### New scope guidance for THO movement, FMM status, and comparison artifacts

Classification: semantic guidance.

R6 adds guidance that moving ValueSets from core to THO is not in itself substantive, and that moving CodeSystems is substantive only under stated conditions. It also says current standards/status values are Normative or Informative and active, but FMM status has not been consistently updated pending FMM framework revisions. Cross-version comparisons, difference analysis, structure maps, and transforms are noted as not consistently updated for this ballot and not counted as substantive changes. `FHIR-54976` later challenged the THO-impact wording and remains Waiting for Input.

### New breaking-change framing

Classification: substantive/normative-context guidance.

R6 adds that, once the ballot is complete, no breaking changes are allowed in future publications; technically this is forward compatibility, but implementation choices matter; R4 normative content cannot contain breaking changes under the rules in the R6 page; R5 was not normative, so R5 breaking changes are allowed, including in R4 normative areas.

### R6 moved resources and artifacts list

Classification: semantic guidance / change-summary list; contains reader-facing defects.

R6 adds a "Details of Changes" section describing resources and other artifacts moved out of core into incubator or other IGs. The current source contains a stray `4` after a closing `</ul>`, a corrupted label `DocumentReCapabilityStatementference.$conforms` for a `CapabilityStatement.$conforms` URL, and a likely wrong `ChargeDefinition.$apply` label for a `ChargeItemDefinition.$apply` URL. Later Zulip discussion says the ballot intro was the only overview of incubator content found and that it was incomplete, with `Encounter.$everything` cited as an omitted example.

### Attention requests for likely removals and high-risk areas

Classification: semantic guidance / solicitation of ballot feedback.

R6 adds notes asking balloters to focus on possible removal/demotion of Invoice, InsuranceProduct, and InsurancePlan; medication dosage reorganization and no-known-medications representation; medication statement category and NutritionIntake statusReason terminology movement; new Observation `organizer`; SearchParameter/OperationDefinition usability assertions; and implicit CodeSystems. Later Zulip discussion around InsurancePlan/InsuranceProduct (`FHIR-57325`) clarifies the incubator/additional-resource tooling and versioning story is still being worked out.

### Jira balloting process replaces spreadsheet guidance

Classification: semantic guidance / process.

R4 described ballot spreadsheets and tracker references. R6 says the ballot uses HL7's Jira balloting process, ballot spreadsheets generally will not be used, organizational/affiliate balloters may have import responsibility, ballot desktop is for registration but not vote submission, and voters should view training materials and use the Jira/Confluence stream for questions.

### Mechanical/template/navigation/editorial

Classification: metadata/template/navigation and editorial.

The title changes from `FHIR STU3 Ballot Welcome` to `FHIR STU6 Ballot Welcome`; the h2 changes from R4 to R6; the table loses the FMM cell and adds "Responsible Owner". Several old R4-specific anchors and normative package macros are removed. The page also includes unresolved editorial/rendering issues that are not direct semantic changes, including `weill`/`substantative`, `An addition...`, missing punctuation, and the corrupted artifact list noted above.

## Source history

| Commit | Date | Subject | Review note |
|---|---:|---|---|
| `9b58de526d0a` | 2021-04-13 | R5 version upgrade preparing for release of ballot draft | Broad R5 ballot-intro rewrite. |
| `22e289ed3bfc` | 2021-04-13 | more R5 ballot clean up | R5 ballot cleanup. |
| `d7b8dadc6213` | 2021-06-27 | update html template | Mechanical/template. |
| `b749d029049d` | 2021-07-16 | adding a new copy of ClinicalUseIssue so the build works during the rename FHIR#31847 R4B and R5 | Contextual source touch from ClinicalUseIssue rename; not current page-specific intent. |
| `cf93ac403d6a` | 2022-03-31 | Apply FHIR-32171 | R5 ballot-intro typo/minor correction; Jira related URL was R5 `ballot-intro.html`. |
| `68f11dd5c0da` | 2022-05-10 | FHIR-32368 - Add new data types to the ballot intro. (And fixed a few typos too) | R5 ballot-intro page-specific Jira; superseded by later R6 rewrite. |
| `8592e1207273` | 2022-08-31 | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Broad terminology/editorial consistency. |
| `23a31a590b7b` | 2022-09-06 | update all ballot and stu notes | R5 ballot notes. |
| `861a93a44e55` | 2022-09-06 | fix | Small fix. |
| `21bc7e314436` | 2022-09-07 | final QA for R5 ballot | R5 QA. |
| `a41e7958c85a` | 2022-09-08 | ballot QA | R5 QA. |
| `11f4c1fd0521` | 2022-12-07 | FHIR-39179 FHIRPath should use "as" to select type (not "is") | Broad FHIRPath correction; not current ballot-intro-specific. |
| `ea9417370766` | 2023-01-23 | Remove DocumentManifest | Contextual/broad source change. |
| `dad7cf37c758` | 2023-02-21 | QA related changes | QA. |
| `9e40b631950f` | 2023-12-16 | R6 ballot1 prep | R6 ballot1 prep. |
| `8e99b1089580` | 2023-12-16 | ballot prep | R6 ballot prep. |
| `21109129b7b9` | 2024-09-23 | get build completing | Build-oriented. |
| `0397b7bfc0df` | 2025-03-20 | QA fixes, and ballot intro | R6 ballot3/QA content. |
| `422436ae9b5c` | 2025-03-20 | finish sentence | Editorial completion. |
| `df551cf0ec5b` | 2025-03-30 | J#49922: Deprecated calculation elements at the root in favor of group-level specification as part of ballot question | R6 ballot3 quality-reporting/Measure note; Jira `FHIR-49922` has PR `HL7/fhir#3445`. |
| `f080f6e6235f` | 2025-03-31 | update ballot intro | R6 ballot3 update. |
| `4031fd085974` | 2025-03-31 | fix errors in ballot intro | R6 ballot3 fix. |
| `270e0ceb7b02` | 2025-10-31 | normative changes for R6 | Changed metadata row to "Responsible Owner"; pre-full-ballot context. |
| `3b38b80cf23f` | 2025-11-05 | Remove OO resources and point to new incubator | Updated OO resource links to incubator IGs. |
| `01706a920f4e` | 2025-11-05 | fix oo links | Corrected OO incubator URL paths. |
| `71567db3ee03` | 2025-11-07 | ballot notes part #1, and remove Citation, VerificationResult, ChargeItem, ChargeItemDefinition, EncounterHistory, PersonalRelationship, and some QA | Major R6 full-ballot rewrite; added moved-artifact list and process text. |
| `fad1b9cf84ef` | 2025-11-12 | remove additional resources | Added more moved resources and changed list formatting. |
| `02f79b0a3ba6` | 2025-11-14 | fix up notes to balloters | Added attention-request section and introduced current visible defects (`</ul>4`, broken `terminology.fhr.org` link). |
| `3bfb4a3a0bea` | 2025-11-16 | R6 packages, and ballot intro clarifications | Clarified later ballot expectations, R4 normative areas, and R5 breaking-change allowance. |
| `5a821238a5bd` | 2025-12-17 | Corrections to ballot notes | Added non-voted comment warning, R6 Jira filter link, and fixed some empty anchor labels; did not fix broken THO URL or artifact-list corruption. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-31847`: ClinicalUseIssue rename to ClinicalUseDefinition; `b749d029049d` touched the page while handling build/source consequences. Jira is BRR/ClinicalUseIssue, R5, published. Confluence has BRR minutes for 2021-07-06. This is contextual and not an actionable current ballot-intro issue.
- `FHIR-32171`: R5 ballot-intro typo/minor corrections. Related URL `http://hl7.org/fhir/2021May/ballot-intro.html`; fixed in commit `1290c62083da5a2e6a587166e4bb3259eae70a63` per Jira comment. Context only for R5.
- `FHIR-32368`: Add new data types to the R5 ballot-intro list. Jira points to the 2021May ballot intro and records commit `68f11dd5c0da6163937c5eec972c5aa4f284fed4`. Context only because the R5 list was later replaced.
- `FHIR-25431`: "datatype" vs "data type"; broad editorial terminology correction, not page-specific for current R6 ballot4.
- `FHIR-39179`: FHIRPath `as` vs `is`; broad FHIRPath correction, not current page-specific.
- `FHIR-49922`: Measure/MeasureReport structure simplification; R6 applied issue, PR `https://github.com/HL7/fhir/pull/3445`; affected earlier R6 ballot note but not the current ballot4 page's actionable defects.

### Other Jira issues that plausibly explain current page text or defects

- `FHIR-53852` is directly actionable. It reports the `terminology.hl7.org` link on `https://hl7.org/fhir/6.0.0-ballot4/ballot-intro.html` is broken. Resolution says to change `http://terminology.fhr.org/` to `https://terminology.hl7.org/`. The R6 ballot4 source still has `http://terminology.fhr.org` at line 129.
- `FHIR-54976` challenges the page wording that moving ValueSets to THO is not itself substantive; status Waiting for Input and Lloyd asked what change was requested. This is relevant context, not yet a formal mismatch.
- `FHIR-54977` through `FHIR-54984` are a cluster of later ballot-intro comments. Examples:
  - `FHIR-54977`: balloters lack practical way to identify R4-normative content.
  - `FHIR-54978`: medication restructuring has high implementation risk.
  - `FHIR-54979`: Observation `organizer` wording risks conformance misinterpretation.
  - `FHIR-54980`: spelling: "These weill also not count as substantative changes" -> "These will also not count as substantive changes."
  - `FHIR-54981`/`54982`: grammar/plural "Balloter's attention".
  - `FHIR-54983`: ValueSet/CodeSystem casing/plurality.
  - `FHIR-54984`: difficult-to-understand non-voted-comments wording.
  Most were resolved Not Persuasive/No Change with the rationale that the whole ballot intro is replaced next ballot.

### Context-only Jira hits that should not drive action

- Old R4/R5 page issues (`FHIR-32171`, `FHIR-32368`) explain historical ballot-intro edits but do not apply to the current R6 text after the full rewrite.
- Broad artifact issues (`FHIR-31847`, `FHIR-25431`, `FHIR-39179`, `FHIR-49922`) touched the page or appeared in commit messages but do not explain the current R6 ballot4 defects.

## Zulip evidence

- `#fmg > Planned wording for R5/R6 timeline` (snapshot command used: `bun run zulip:search snapshot fmg "R6"`, which returned a broad R5/R6 timeline topic) provides background for R6 ballot strategy. Sarah Gaunt stated on 2024-05-28 that draft ballots should reduce final normative ballot load, changes after draft reconciliation should be carefully tracked and declared to balloters, R6 aims for stability, and post-R6 breaking changes should not occur.
- The same broad `#fmg` thread includes a 2024-09 discussion about "de facto normative" and FMM. Cooper Thompson pushed back that maturity and no-breaking-changes are independent concepts; Gino Canessa said R6 would likely be the version used in regulation for a long time.
- `#fmg > ✔ FMM framework revisions?`: Max Masnick asked about the page's sentence that FMM updates are pending FMM framework revisions. Lloyd McKenzie answered on 2026-03-21 that there was "No real work thus far" and that he was not sure it would happen as part of R6. This suggests the page's FMM caveat is real context but not a completed plan.
- `#fmg > Overview of Incubating IGs`: Patrick Werner and Vadim Peretokin noted on 2026-03-25 that the ballot intro appeared to be the only overview of incubator IG contents and was incomplete, e.g. it did not link/mention `Encounter.$everything`. The thread moved toward maintaining a separate Confluence overview.
- `#financial > InsurancePlan / InsuranceProduct removal from R6 core`: Diego Orofino filed/mentioned `FHIR-57325` opposing InsurancePlan/InsuranceProduct demotion; Jeff Brown framed the issue as maturity and incubator publication cadence; Cooper Thompson, Grahame Grieve, and Lloyd McKenzie discussed unresolved Additional Resource tooling/versioning details. This is useful later-context evidence but not a direct page wording contradiction.
- Quoted key Zulip FTS found only one explicit-key hit among the commit keys (`FHIR-31847` in `#implementers > R4B questions / issues`) and no hits for `FHIR-53852`, `FHIR-54976`, or `FHIR-54980`.

## Confluence evidence

- FMG 2026-02-04 minutes (page `413252111`) explicitly discuss `FHIR-54984` and related ballot-intro tickets. The minutes say these note perceived problems in the ballot intro, which is rewritten and replaced each ballot; FMG discussed proofreading options for the next one, rejected `FHIR-54984`, and extended the vote to cover `FHIR-54983`, `FHIR-54982`, `FHIR-54981`, `FHIR-54980`, `FHIR-54979`, `FHIR-54978`, `FHIR-54977`, `FHIR-54976`, and `FHIR-54975`.
- FHIR-I 2026-01 WGM minutes (page `404100072`) include references to `FHIR-54975` through `FHIR-54979` and moved them to FMG, supporting that those comments were governance/process issues for FMG, not FHIR-I technical tracker items.
- OO 2025-11-25 minutes (page `404100187`) mention Observation normative-candidate elements including `Observation.organizer`, which supports why the R6 ballot intro asks for attention to the new Observation organizer element.
- Confluence searches for `FHIR-53852` and `terminology.fhr.org` did not find relevant minutes/pages.

## Timeline

| Date | Evidence type | Event |
|---:|---|---|
| 2018-09/2018-12 | R4 page content | Old page described the R4 follow-up normative ballot, R4 package lists, R4 round-2 scope, and spreadsheet/tracker feedback process. |
| 2021-04 to 2023-02 | Source commits | R5/R5-ballot era changes repeatedly rewrote/cleaned the page; several explicit Jira keys were R5 or broad artifact issues. |
| 2024-05-28 | Zulip discussion | FMG R6 planning message says draft ballots should reduce final normative ballot load and R6 aims for post-release stability/no breaking changes. |
| 2024-09 | Zulip discussion | FMG discussed tension between FMM/maturity and "de facto normative" stability expectations. |
| 2025-08-28 | Zulip discussion | FMG drafted committee communication on moving immature resources to Additional Resources/incubator IGs before R6 balloting. |
| 2025-10-31 | Source commit | `270e0ceb7b02` started final R6 normative metadata updates. |
| 2025-11-05 | Source commits | `3b38b80cf23f` and `01706a920f4e` updated OO incubator links. |
| 2025-11-07 | Source commit | `71567db3ee03` rewrote the page for the first full R6 normative ballot. |
| 2025-11-12 | Source commit | `fad1b9cf84ef` expanded moved/additional-resource list. |
| 2025-11-14 | Source commit | `02f79b0a3ba6` added attention requests and introduced current broken THO URL and `</ul>4` artifact-list typo. |
| 2025-11-16 | Source commit | `3bfb4a3a0bea` clarified R6/R4/R5 breaking-change guidance. |
| 2025-12-17 | Source commit | `5a821238a5bd` made final ballot-note corrections but left key defects. |
| 2026-01-07 | Jira | `FHIR-53852` reported the broken `terminology.fhr.org` link on R6 ballot4. |
| 2026-01-20 to 2026-02-04 | Jira/FM G minutes | `FHIR-54976`-`FHIR-54984` raised ballot-intro issues; most were rejected/no-change because the intro would be replaced in the next ballot. |
| 2026-03-21 | Zulip | FMM framework caveat prompted reader question; Lloyd said no real work yet and R6 timing uncertain. |
| 2026-03-25 to 2026-05-18 | Zulip | Incubator-overview thread said ballot intro overview was incomplete and moved toward external/Confluence inventory. |
| 2026-05-18 to 2026-05-19 | Zulip/Jira | InsurancePlan/InsuranceProduct removal was challenged in `FHIR-57325`; discussion clarified Additional Resource implementation/versioning details remain important. |

## Evidence log

- Confirmed page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/ballot-intro.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/ballot-intro.html" && echo "new exists"`
- Reviewed direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/ballot-intro.html`
- Traced page history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/ballot-intro.html`
  - Selected `git show --stat --patch` for `270e0ceb`, `3b38b80`, `01706a9`, `71567db`, `fad1b9c`, `02f79b0`, `3bfb4a3`, and `5a82123`.
- Read full R6 page:
  - `wc -l .../source/ballot-intro.html` returned `174`.
  - Read all lines 1-174.
- Searched current page for visible defects:
  - `rg -n 'DocumentReCapabilityStatementference|terminology\.fhr\.org|</ul>4|ChargeDefinition\.\$apply|weill|substantative' .../source/ballot-intro.html`
- Jira:
  - Snapshotted explicit keys: `FHIR-31847`, `FHIR-32171`, `FHIR-32368`, `FHIR-25431`, `FHIR-39179`, `FHIR-49922`.
  - Searched phrases including `"ballot-intro"`, `"ballot intro" R6`, `"first full ballot of FHIR Release 6"`, `"moving valuesets" THO substantive`, `"cross version comparisons" "substantive changes"`, `"DocumentReCapabilityStatementference"`, `"terminology.fhr.org"`, `"strength of useability assertions"`, `"Medication dosage regimes"`, and `"organizer" "normative Observation" ballot`.
  - Snapshotted `FHIR-53852` and `FHIR-54976` through `FHIR-54984`.
- Zulip:
  - Initial unquoted key searches such as `bun run zulip:search fts "FHIR-53852"` failed because FTS parsed the hyphenated key; reran as `bun run zulip:search fts "\"FHIR-53852\""`.
  - Searched exact page phrases and topic terms; no hits for `DocumentReCapabilityStatementference`, `terminology.fhr.org`, `Medication dosage regimes`, or exact `organizer`/`normative Observation`.
  - Snapshotted relevant topics listed in Quick links.
- Confluence:
  - Ran `refs jira` and `fts` for explicit keys, plus phrase searches.
  - Snapshotted pages `413252111`, `404100072`, and `404100187`.

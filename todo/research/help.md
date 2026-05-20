# help research appendix

## Scope and coverage

- Page path: `source/help.html`
- Versions compared: R4 `4.0.1` at `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` to R6 ballot4 `6.0.0-ballot4` at `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Page boundary: present in both source trees. The R4 page was a placeholder; the R6 ballot4 page is a full glossary.
- Newer page read end-to-end: yes, all of `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/help.html` was reviewed.
- Source commits touching the page in range: 13. Explicit Jira keys found in commit subjects: `FHIR-24666`, `FHIR-24866`, `FHIR-25431`, `FHIR-43472`, `FHIR-44047`, `FHIR-47280`.
- Important caveat: `FHIR-24666` in the first glossary commit/PR title is a wrong tracker reference; Jira and Zulip show that issue is about Medication `basedOn`, not the glossary. The thread immediately corrected the work to `FHIR-24866`.
- Searches performed: direct diff, chronological `git log`, path-limited `git show`, pickaxe for distinctive phrases, Jira snapshots/searches, Zulip key/phrase searches and snapshots, Confluence refs/FTS searches and snapshots.
- Failed/low-value searches: initial unquoted Zulip issue-key searches failed because FTS parsed hyphenated Jira keys as operators; corrected quoted searches were run. Exact phrase searches for `Codeable is a long standing spelling`, `Subscription Provider` + `Subscription Framework`, and `FHIR Glossary` in Zulip found no additional discussion beyond the issue-key threads noted below.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R4 placeholder | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/help.html:18` | R4 only said the glossary had not yet been created. |
| Source | R6 current title/header | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/help.html:3` and `:20-23` | Current source still declares `[%settitle Version History%]` and `<a name="history">` while the visible page is `Glossary`. |
| Source | R6 generated glossary note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/help.html:26-30` | Documents that the HTML was generated from `images/source/FHIR Glossary.docx`. |
| Source | Codeable glossary terms | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/help.html:359-369` | Applied `FHIR-43472` note and added `CodeableReference`. |
| Source | Subscription glossary terms | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/help.html:1453-1464` | Applied `FHIR-47280` by adding subscription-related glossary entries. |
| Source | Editorial typos | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/help.html:68`, `:142`, `:1371` | Concrete current-page typos/import artifacts. |
| Commit | Add glossary | `14e29ceceeb692215cc34679fdf226baba1c6ad7`, https://github.com/HL7/fhir/commit/14e29ceceeb692215cc34679fdf226baba1c6ad7 | Replaced placeholder with glossary content; commit title used wrong Jira key. |
| Commit | Format glossary | `9ba2d11cb4902ff076f28dbdd23b4e2c8507456b`, https://github.com/HL7/fhir/commit/9ba2d11cb4902ff076f28dbdd23b4e2c8507456b | Converted imported paragraph markup to definition-list formatting. |
| Commit | Datatype consistency | `8592e1207273b786db340efb927bb6d1dc9756c9`, https://github.com/HL7/fhir/commit/8592e1207273b786db340efb927bb6d1dc9756c9 | Applied `FHIR-25431` wording consistency in help glossary. |
| Commit | Codeable note | `d18b13713fa779e95b4c8886c4cc88925695af8c`, https://github.com/HL7/fhir/commit/d18b13713fa779e95b4c8886c4cc88925695af8c | Added `FHIR-43472` CodeableConcept/CodeableReference note. |
| Commit | Subscription terms | `fc659be95edf49f9c1bcc4dfb2f9a631ea45e06a`, https://github.com/HL7/fhir/commit/fc659be95edf49f9c1bcc4dfb2f9a631ea45e06a | Added subscription-related glossary terms for `FHIR-47280`. |
| PR | Glossary PR | https://github.com/HL7/fhir/pull/2214 | Merged 2022-08-23; includes initial glossary commits and footer-link commit. |
| PR | R6 tickets PR | https://github.com/HL7/fhir/pull/3967 | Merged 2025-11-09; includes `fc659be...` for `FHIR-47280`. |
| Jira | Actual glossary issue | https://jira.hl7.org/browse/FHIR-24866 | Formal decision to add submitted glossary to `help.html`. Reopen with `bun run jira:search snapshot FHIR-24866`. |
| Jira | Wrong key in first commit title | https://jira.hl7.org/browse/FHIR-24666 | Medication issue, not glossary; explains why this key should not drive causality. |
| Jira | Datatype consistency | https://jira.hl7.org/browse/FHIR-25431 | Consistency issue applied to glossary wording. |
| Jira | Codeable spelling | https://jira.hl7.org/browse/FHIR-43472 | Decision not to rename Codeable*, but to add explanation note. |
| Jira | e.g./i.e. punctuation | https://jira.hl7.org/browse/FHIR-44047 | Minor punctuation cleanup; touched one glossary line. |
| Jira | Subscription terminology | https://jira.hl7.org/browse/FHIR-47280 | Requested clearer subscription terminology and glossary terms. |
| Zulip | FHIR-24866 thread | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/FHIR-24866 | Confirms wrong tracker concern, review, PR 2214, and footer-link discussion. Reopen with `bun run zulip:search snapshot "fhir/infrastructure-wg" "FHIR-24866"`. |
| Zulip | Subscription block vote | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/R6%20Subscription%20Block%20Vote | Lists `FHIR-47280` in R6 subscription block vote. Reopen with `bun run zulip:search snapshot "fhir/infrastructure-wg" "R6 Subscription Block Vote"`. |
| Confluence | 2020 glossary vote | https://confluence.hl7.org/spaces/FHIRI/pages/78677754/FHIR+Infrastructure+Minutes+CC+20200323 | FHIR-I voted to add the glossary to `help.html`. Snapshot: `bun run confluence:search snapshot 78677754`. |
| Confluence | datatype minutes | https://confluence.hl7.org/spaces/FHIRI/pages/66940491/FHIR+Infrastructure+Minutes+CC+20200113 | Mentions `FHIR-25431`; note wording caveat below. Snapshot: `bun run confluence:search snapshot 66940491`. |
| Confluence | Codeable vote | https://confluence.hl7.org/spaces/FHIRI/pages/210078303/FHIR+Infrastructure+Minutes+WGM+202401+-+Virtual | Vote for `FHIR-43472`. Snapshot: `bun run confluence:search snapshot 210078303`. |
| Confluence | e.g./i.e. vote | https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas | `FHIR-44047 will fix`. Snapshot: `bun run confluence:search snapshot 234784975`. |
| Confluence | subscription block vote | https://confluence.hl7.org/spaces/FHIRI/pages/325460673/FHIR+Infrastructure+Minutes+CC+2025-03-31 | Motion approving the subscription block vote containing `FHIR-47280`. Snapshot: `bun run confluence:search snapshot 325460673`. |

## Change summary

- **Semantic guidance / editorial page creation:** R4 `help.html` was a placeholder asking for volunteers; R6 ballot4 contains a generated glossary with about 300 `<dt>` entries. This is the dominant change and is informative glossary content, not a new conformance rule.
- **Metadata/template/navigation:** Header table changed from FHIR Infrastructure Work Group + Maturity Level N/A + Standards Status to `Responsible Owner` + Standards Status only. This came from broad R6 normative/template cleanup, not a page-specific glossary decision.
- **Formatting/mechanical:** The initial glossary import used paragraph/strong markup; the follow-up commit converted it to `<dl>/<dt>/<dd>` definition-list markup and added local `.tab` indentation styling.
- **Terminology consistency:** `FHIR-25431` changed glossary references from `data type`/`Data Type` to `datatype`/`Datatype` in this page. Current `help.html` is internally consistent for these edited terms.
- **Applied Codeable note:** `FHIR-43472` added a `CodeableReference` glossary entry and explanatory notes that `Codeable` is a long-standing FHIR spelling accepted by the community.
- **Applied punctuation cleanup:** `FHIR-44047` added commas after `e.g.` in three glossary locations. It did not otherwise alter semantics.
- **Applied subscription glossary terms:** `FHIR-47280` added `Subscription Framework`, `Subscriber`, and `Subscription Provider` definitions.
- **No new normative requirements found:** The page is Standards Status Informative. It includes definitions of conformance verbs (`SHALL`, `SHOULD`, `MAY`), but these glossary entries do not themselves change conformance behavior.
- **Current-page defects noticed:** stale `Version History` title/`history` anchor and several obvious glossary typos remain; these are captured in the action file.

## Source history

| Commit | Date | Subject | Page-specific interpretation |
|---|---:|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Mechanical/template update before glossary content. |
| `14e29ceceeb692215cc34679fdf226baba1c6ad7` | 2022-08-23 | FHIR-24666 add Glossary to help.html (partially applied) | Major content addition; Jira key in subject was wrong. Pickaxe for `FHIR Glossary.docx` finds this commit. |
| `9ba2d11cb4902ff076f28dbdd23b4e2c8507456b` | 2022-08-23 | FHIR-24866 - update glossary formatting | Reformatted glossary into definition lists. This is the actual glossary Jira key. |
| `8592e1207273b786db340efb927bb6d1dc9756c9` | 2022-08-31 | FHIR-25431 Inconsistent use of "datatype" vs. "data type" | Changed this page to `datatype`/`Datatype`. |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | QA related changes | Mixed QA edits; one useful fix (`an description` to `a description`) plus temporary double-period changes. |
| `9f780149387dc652bec02aa7744e52774acddbc9` | 2023-02-21 | more QA | Reverted double-period artifacts from the prior QA pass. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Header/table metadata change: add `Responsible Owner`, remove Maturity Level cell. |
| `d18b13713fa779e95b4c8886c4cc88925695af8c` | 2025-11-03 | FHIR-43472 Typo in CodeableConcept, CodeableReference - there's an extra "e" in "codable" | Added Codeable note and CodeableReference entry; introduced `accpeted` typo later fixed. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Added comma after `e.g.` in three glossary examples. |
| `1cae470f39302924f272fc1b8997e71ab5123218` | 2025-11-04 | fix typos | Fixed `accpeted` to `accepted` in the Codeable notes. |
| `32ee662cd81e588351a75de377307f9c4a5c1564` | 2025-11-04 | Merge branch 'master' into i.e.-e.g- | Merge bookkeeping around the punctuation branch; no independent page rationale found. |
| `87f87a8a0389df053a5217de019d2596933da10f` | 2025-11-06 | Merge branch 'master' into i.e.-e.g- | Merge bookkeeping around the punctuation branch; no independent page rationale found. |
| `fc659be95edf49f9c1bcc4dfb2f9a631ea45e06a` | 2025-11-07 | FHIR-47280 - subscription-related definitions, clarifications, and disambiguation | Added three subscription glossary terms. Pickaxe for `Subscription Framework` finds this commit. |

Pickaxe checks:

- `git log -S "FHIR Glossary.docx" -- source/help.html` -> `14e29ce...`
- `git log -S "Codeable is a long standing spelling" -- source/help.html` -> `d18b137...`
- `git log -S "Subscription Framework" -- source/help.html` -> `fc659be...`
- `git log -S "FHIR specification defines an Attachment datatype" -- source/help.html` -> `8592e120...`
- `git log -S "StructureDefintion that may occur more than once" -- source/help.html` -> `14e29ce...`

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-24666` is not the glossary issue. Snapshot shows it is "Add a `basedOn` attribute to MedicationStatement, MedicationDispense, and MedicationAdministration" with Pharmacy artifacts. Treat it only as evidence of a wrong commit/PR title.
- `FHIR-24866` is the actual glossary issue. It says the current spec glossary was TBD, the submitter attached `FHIR Glossary.docx`, and the resolution was to place the content on `help.html` and add a footer glossary link. Status Published, Resolution Persuasive, Applied for Version R5.
- `FHIR-25431` asks the spec to pick either `data type` or `datatype` and be consistent. The help page application chose `datatype`. Caveat: Confluence minutes for 2020-01-13 contain the phrase `Lloyd: Using "data type" Will auto approve`, but the later source application consistently uses `datatype`; I did not find enough evidence to treat this as an actionable mismatch for `help.html`.
- `FHIR-43472` rejected renaming Codeable* as too disruptive/normative, but proposed adding an explanatory note to `CodeableConcept` and `CodeableReference`. Current help text matches the note after the later typo fix.
- `FHIR-44047` requests fixing `e.g.`/`i.e.` punctuation throughout R6. The help page received three comma edits; Jira remains `Resolved - change required`, so broader application status is outside this page.
- `FHIR-47280` asks to reduce ambiguity in subscription terminology, including adding relevant terms to the FHIR Glossary. Current help text adds `Subscription Framework`, `Subscriber`, and `Subscription Provider`.

### Other Jira searches

- `bun run jira:search fts "\"FHIR Glossary\""` and `bun run jira:search fts "\"help.html\" Glossary"` found `FHIR-24866` and `FHIR-47280`, plus `FHIR-43779` in a US Quality Measures context only.
- `bun run jira:search fts "\"Codeable is a long standing spelling\""` found only `FHIR-43472`.
- `bun run jira:search fts "\"Subscription Framework\" \"Subscription Provider\" Subscriber"` found only `FHIR-47280`.
- `bun run jira:search fts "\"StructureDefintion\""` found broad/context-only results such as old `FHIR-6151` and IG-specific issues. No hit clearly covers the current `help.html` typo.

## Zulip evidence

- `#fhir/infrastructure-wg > FHIR-24866` (2022-08-23, https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/FHIR-24866) is the main glossary implementation discussion. It records:
  - Eric Haas said the page was partially applied and the footer change remained.
  - Lloyd McKenzie noticed the wrong tracker number: "The one mentioned is for pharmacy and doesn't talk about a page."
  - Eric updated to `FHIR-24866`.
  - Lloyd reviewed the preview and said it looked reasonable.
  - Eric linked PR `https://github.com/HL7/fhir/pull/2214`.
  - Lloyd identified `tools/templates/newfooter.html` and suggested shortening footer labels to fit `Glossary`.
- `#fhir/infrastructure-wg > R6 Subscription Block Vote` (2025-03-24, https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/R6%20Subscription%20Block%20Vote) lists `FHIR-47280` in the subscription block vote announcement. It provides process context but no detailed help-page wording rationale.
- Quoted issue-key searches found no Zulip hits for `FHIR-25431`, `FHIR-43472`, or `FHIR-44047`.
- Exact phrase searches found no Zulip hits for `FHIR Glossary`, `Codeable is a long standing spelling`, or `Subscription Provider` + `Subscription Framework`.

## Confluence evidence

- `FHIR Infrastructure Minutes CC 20200323`, page `78677754`, records `FHIR-24866`: "Current spec has the glossary as TBD. Submitter created a nice one for us. Thanks! Will add to the help.html page" with a persuasive motion `Rick Geimer/Rob Hausam: 7-0-0`.
- `FHIR Infrastructure Minutes CC 20200113`, page `66940491`, records `FHIR-25431`: `Lloyd: Using "data type" Will auto approve`. This is a caveat because the later source patch chose `datatype`; the current page is at least internally consistent.
- `FHIR Infrastructure Minutes WGM 202401 - Virtual`, page `210078303`, records `FHIR-43472 Not Persuasive with Mod` with motion `Rick Geimer/Jeff Brown: 19-0-0`.
- `FHIR Infrastructure Minutes WGM 202405 - Dallas`, page `234784975`, records `FHIR-44047 will fix`.
- `FHIR Infrastructure Minutes CC 2025-03-31`, page `325460673`, records the subscription block vote including `FHIR-47280 (Persuasive with Modification): Subscriptions - overlap in terminology makes text harder to parse` and motion `Gino Canessa / Bas van den Heuvel: 17-0-0`.

## Timeline

| Date | Clock | Evidence |
|---:|---|---|
| 2019-09-26 | Jira created | `FHIR-24866` glossary draft created. |
| 2020-01-09 | Jira created | `FHIR-25431` datatype consistency created. |
| 2020-01-13 | WG minutes | Confluence page `66940491` discusses `FHIR-25431`. |
| 2020-03-23 | WG vote/Jira resolution | Confluence page `78677754` and Jira `FHIR-24866` approve adding glossary to `help.html`. |
| 2021-10-27 | Jira resolution | `FHIR-25431` resolved/published workflow; Jira comment notes reopen/reclose due Jira status bug. |
| 2022-08-23 | Zulip/PR/source | `FHIR-24866` Zulip thread; PR 2214; commits `14e29ce...` and `9ba2d11...`; PR merged at `2022-08-23T22:10:31Z`. |
| 2022-08-31 | Source | Commit `8592e120...` standardizes this page to `datatype`. |
| 2024-01-03 | Jira created | `FHIR-43472` Codeable spelling issue created. |
| 2024-02-01 | WG vote/Jira resolution | `FHIR-43472` Not Persuasive with Modification, 19-0-0. |
| 2024-01-22 to 2024-05-23 | Jira/WG | `FHIR-44047` created and resolved; Confluence Dallas WGM says it will fix punctuation. |
| 2024-09-10 | Jira created | `FHIR-47280` subscription terminology issue created. |
| 2025-03-24 | Zulip | R6 Subscription Block Vote announcement lists `FHIR-47280`. |
| 2025-03-31 | WG vote | Confluence page `325460673`: subscription block vote passed 17-0-0. |
| 2025-10-31 | Source | Commit `270e0ceb...` updates R6 metadata/header presentation. |
| 2025-11-03 to 2025-11-04 | Source | Commits `d18b137...`, `887bc238...`, and `1cae470...` apply Codeable note, punctuation, and typo fix. |
| 2025-11-07 to 2025-11-10 | Source/PR/Jira | Commit `fc659be...`; PR 3967 merged 2025-11-09; Jira `FHIR-47280` updated with PR link and status Applied 2025-11-10. |

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/help.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/help.html" && echo "new exists"`
  - Result: both exist.
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/help.html`
  - Result: `1 file changed, 1676 insertions(+), 9 deletions(-)`.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/help.html`
  - Result: 13 commits listed in the table above.
- Commit patches:
  - Path-limited `git show --stat --patch` was run for each commit touching `source/help.html`; meaningful patches are summarized above.
- PR metadata:
  - `gh pr view 2214 --repo HL7/fhir --json number,title,url,state,author,createdAt,mergedAt,mergeCommit,commits,body`
  - `gh pr view 3967 --repo HL7/fhir --json number,title,url,state,author,createdAt,mergedAt,mergeCommit,commits,body`
- Jira:
  - Snapshots: `bun run jira:search snapshot FHIR-24666`, `FHIR-24866`, `FHIR-25431`, `FHIR-43472`, `FHIR-44047`, `FHIR-47280`.
  - Phrase searches: `"FHIR Glossary"`, `"help.html" Glossary`, `"source Word" "FHIR Glossary"`, `"Codeable is a long standing spelling"`, `"Subscription Framework" "Subscription Provider" Subscriber`, `"Subscription Provider" "FHIR Glossary"`, `"StructureDefintion"`, `"Glossary" "Subscription Framework"`.
- Zulip:
  - Corrected quoted key searches: `bun run zulip:search fts "\"FHIR-24866\"" --limit 20` and equivalent for other explicit keys.
  - Snapshots: `bun run zulip:search snapshot "fhir/infrastructure-wg" "FHIR-24866"` and `bun run zulip:search snapshot "fhir/infrastructure-wg" "R6 Subscription Block Vote"`.
  - Initial unquoted key searches failed for hyphenated Jira keys; this affected search mechanics only and was corrected.
- Confluence:
  - Refs/FTS searches for each explicit key, plus phrase searches for `FHIR Glossary`, `Subscription Framework` + `Subscription Provider`, and `Codeable is a long standing spelling`.
  - Snapshots: `bun run confluence:search snapshot 78677754`, `66940491`, `210078303`, `234784975`, and `325460673`.
- Full current page:
  - `wc -l ".../source/help.html"` and full chunked reads through line `1699`.
  - `rg -n "StructureDefintion|establishe|an an insurer|FHIR Glossary.docx|Subscription Framework" ".../source/help.html"` found the current-page observations used in the action file.

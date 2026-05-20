# overview-dev research appendix

## Scope and coverage

- Page path: `source/overview-dev.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- Page boundary: confirmed present in both trees.
- Newer page read end-to-end: yes, 644 source lines.
- Direct diff size: 1 file changed, 26 insertions and 29 deletions.
- Commits touching this page between the two source commits: 13.
- Explicit Jira keys found in commit subjects/patch context: `FHIR-19667`, `FHIR-33979`, `FHIR-34768`, `FHIR-25281`, `FHIR-38912`, `FHIR-38768`, `FHIR-44047`.
- Jira searches performed: snapshots for all explicit keys; exact/phrase searches for changed text and for the current `f001`/`347` and content-type defects.
- Zulip searches performed: quoted explicit-key searches, changed-phrase searches, and defect-phrase searches. An initial unquoted issue-key search failed because FTS parsed hyphens as operators; quoted retries are the evidence used below.
- Confluence searches performed: `refs jira` and `fts` for all explicit keys, snapshots for the two relevant FHIR-I minutes pages, and defect-phrase searches.
- Caveats: no PR numbers were discovered from local commit metadata or issue snapshots. No Jira/Zulip/Confluence evidence was found explaining the current `f001`/`347` example mismatch.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/overview-dev.html` | R4 baseline |
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html` | R6 ballot4 text under review |
| Source lines | Resource identifier wording | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html:49` | Applied `FHIR-33979` clarification |
| Source lines | RDF label | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html:56` | Editorial/terminology update to `RDF (Turtle)` |
| Source lines | HumanName family example | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html:96-104` | Applied `FHIR-34768` example correction |
| Source lines | REST interaction list | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html:153-162` | Includes added Patch interaction |
| Source lines | Create request path/note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html:243-269` | Current example path/note mismatch |
| Source lines | Read request/response IDs | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html:360-409` | Current `f001` vs `347` mismatch |
| Source lines | Search response content type | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html:447-455` | Current example declares XML but shows JSON |
| Source lines | Bundle entry ID uniqueness note | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html:490-498` | Applied `FHIR-25281` and `FHIR-38768` |
| Source lines | Update request IDs | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html:514-540` | Current URL/body/note ID mismatch |
| Commit | Template div removal | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`; https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Mechanical template update |
| Commit | Use full path in examples | `6eccb56d130bc6ae7f4dc255b1091a310f860ba9`; https://github.com/HL7/fhir/commit/6eccb56d130bc6ae7f4dc255b1091a310f860ba9 | Began `/path` request example normalization |
| Commit | Use `/base` consistently | `ea971f96c13efe5478ed1fefffc845eeb80ed881`; https://github.com/HL7/fhir/commit/ea971f96c13efe5478ed1fefffc845eeb80ed881 | Normalized many example URLs from `/path` to `/base` |
| Commit | Add Patch interaction | `be1b15d8c7163629d535933cf159d91ce35c30a5`; https://github.com/HL7/fhir/commit/be1b15d8c7163629d535933cf159d91ce35c30a5 | Applies `FHIR-19667` |
| Commit | Resource identifier wording | `4a1befe248ccd6504c35025fb1f4fd4779ad1801`; https://github.com/HL7/fhir/commit/4a1befe248ccd6504c35025fb1f4fd4779ad1801 | Applies `FHIR-33979` |
| Commit | HumanName family scalar | `36d6d3ab7a55c52040de3edc45e62de2111b9b0d`; https://github.com/HL7/fhir/commit/36d6d3ab7a55c52040de3edc45e62de2111b9b0d | Applies `FHIR-34768` |
| Commit | Bundle uniqueness wording | `d04313e9e9e7d5d8b263d4127d3a496fe87e259b`; https://github.com/HL7/fhir/commit/d04313e9e9e7d5d8b263d4127d3a496fe87e259b | Applies `FHIR-25281`, but introduced typo later fixed |
| Commit | Resource example line number | `3a6fe7320285b2bb2e741867ff4f6bce4c468002`; https://github.com/HL7/fhir/commit/3a6fe7320285b2bb2e741867ff4f6bce4c468002 | Applies `FHIR-38912` |
| Commit | Search response line number/typo | `134c4ff1feec07b86271c18599ebd59ae6c95b2d`; https://github.com/HL7/fhir/commit/134c4ff1feec07b86271c18599ebd59ae6c95b2d | Applies `FHIR-38768`; fixes `compination` |
| Commit | Example ID/link edits | `75eef0f2911084cd87c3e1326c0b0360df8c0a5c`; https://github.com/HL7/fhir/commit/75eef0f2911084cd87c3e1326c0b0360df8c0a5c | Changes several `347` URL references to `f001`; appears to introduce current mismatch |
| Commit | RDF label | `8244937cafb494f6c637de64b22982826c5533db`; https://github.com/HL7/fhir/commit/8244937cafb494f6c637de64b22982826c5533db | Editorial RDF wording |
| Commit | R6 status table template | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`; https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Removes maturity cell, adds Responsible Owner label |
| Commit | `e.g.,` punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`; https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Applies one instance of `FHIR-44047` punctuation cleanup |
| Jira | `FHIR-19667` | https://jira.hl7.org/browse/FHIR-19667; `bun run jira:search snapshot FHIR-19667` | Formal request to add Patch to developer interaction list |
| Jira | `FHIR-33979` | https://jira.hl7.org/browse/FHIR-33979; `bun run jira:search snapshot FHIR-33979` | Formal rationale for avoiding "URL required" wording |
| Jira | `FHIR-34768` | https://jira.hl7.org/browse/FHIR-34768; `bun run jira:search snapshot FHIR-34768` | Formal rationale for `HumanName.family` scalar example |
| Jira | `FHIR-25281` | https://jira.hl7.org/browse/FHIR-25281; `bun run jira:search snapshot FHIR-25281` | Formal rationale for type+id uniqueness wording |
| Jira | `FHIR-38912` | https://jira.hl7.org/browse/FHIR-38912; `bun run jira:search snapshot FHIR-38912` | Corrects resource example line number |
| Jira | `FHIR-38768` | https://jira.hl7.org/browse/FHIR-38768; `bun run jira:search snapshot FHIR-38768` | Corrects search response line number |
| Jira | `FHIR-44047` | https://jira.hl7.org/browse/FHIR-44047; `bun run jira:search snapshot FHIR-44047` | General R6 punctuation cleanup; not overview-specific |
| Confluence | FHIR-I WGM 202001 minutes | Page `76153514`; https://confluence.hl7.org/spaces/FHIRI/pages/76153514/FHIR+Infrastructure+Minutes+WGM+202001; `bun run confluence:search snapshot 76153514` | Records `FHIR-25281 Agreed to clarify` |
| Confluence | FHIR-I WGM 202405 minutes | Page `234784975`; https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas; `bun run confluence:search snapshot 234784975` | Records `FHIR-44047 will fix` in a broad tracker block |

## Change summary

### Metadata/template/navigation

- Mechanical/noise: `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the wrapping `<div class="col-12">` and closing `</div>`.
- Metadata/template/navigation: `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the page metadata table from WG + maturity + standards status to `Responsible Owner` + standards status only. No page-specific Jira rationale was found.

### Resource identity wording

- Semantic guidance: `4a1befe248ccd6504c35025fb1f4fd4779ad1801` changed the framework bullet from `A URL that identifies the resource` to `An identifier for the resource - typically a URL that defines where the resource is found`.
- Jira `FHIR-33979` matches the change: the reporter objected that non-REST resources may not have a URL and that the URL is not inside the resource; the resolution says to change to `identifier for the resource - typically a URL`.
- No Zulip or Confluence evidence was found for this key beyond Jira.

### REST interactions and REST examples

- Semantic/example change: `be1b15d8c7163629d535933cf159d91ce35c30a5` added `Patch = PATCH https://example.com/base/{resourceType}/{id}` to the interaction list, matching Jira `FHIR-19667`.
- Example/editorial change: `6eccb56d130bc6ae7f4dc255b1091a310f860ba9` changed example request/Location URLs from bare resource paths to include `/path`; `ea971f96c13efe5478ed1fefffc845eeb80ed881` then normalized `/path` to `/base`.
- Example/editorial change: `75eef0f2911084cd87c3e1326c0b0360df8c0a5c` changed several REST example IDs in URLs/Locations from `347` to `f001`.
- Current issue: the `f001` change was not applied consistently to notes or resource bodies. See the action file for the concrete mismatches.

### Patient JSON example and line numbering

- Example correction: `36d6d3ab7a55c52040de3edc45e62de2111b9b0d` changed `HumanName.family` from an array to a scalar string, matching `FHIR-34768`.
- Editorial line-number correction: `3a6fe7320285b2bb2e741867ff4f6bce4c468002` changed `data` line coverage from `18 - 43` to `18 - 42`, matching `FHIR-38912`.
- Current caveat: the broader Patient JSON example still appears illustrative rather than strict JSON; for example, the `meta` object is not followed by a comma before `text`. This was already present in the old page and was not elevated to the action file because it was not introduced by the reviewed diff and the page contains several deliberately abbreviated examples.

### Search response and Bundle entry uniqueness

- Substantive clarification: `d04313e9e9e7d5d8b263d4127d3a496fe87e259b` changed the search response note from saying `entry.resource.id` must be unique in some bundles to saying the combination of resource type and `entry.resource.id` must be unique. Jira `FHIR-25281` directly requests this clarification and has compatible, substantive impact.
- Editorial correction: the same commit misspelled `combination` as `compination`; `134c4ff1feec07b86271c18599ebd59ae6c95b2d` fixed the typo and changed the cited line number from 27 to 25, matching `FHIR-38768`.
- Current issue: the search response example is wrapped in `pre class="json"` and contains a JSON Bundle, but the HTTP header says `Content-Type: application/fhir+xml`. This mismatch is pre-existing in R4 and was not explained by the tracked Jira issues. It is included in the action file as a concrete current-page defect.

### RDF label

- Editorial/terminology: `8244937cafb494f6c637de64b22982826c5533db` changed the serialization label from `RDF` to `RDF (Turtle)`.
- Jira phrase search for `RDF (Turtle)` returned broad RDF issues including `FHIR-39077`, `FHIR-39078`, `FHIR-37937`-`FHIR-37941`, and `FHIR-53178`, but no hit clearly explained this page-specific label edit. These are context-only for this page.

### Punctuation

- Editorial only: `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` changed `e.g. XSLT transforms` to `e.g., XSLT transforms`.
- Jira `FHIR-44047` is a broad R6 ballot technical correction about `e.g.,`/`i.e.,` punctuation throughout the spec. Confluence FHIR-I WGM 202405 minutes record `FHIR-44047 will fix`. The Jira remained `Resolved - change required` in the local snapshot, but the page-specific edit itself is straightforward.

## Source history

| Commit | Date | Category | Page-specific change |
|---|---:|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | mechanical/noise | Removes obsolete wrapper div around page content. |
| `6eccb56d130bc6ae7f4dc255b1091a310f860ba9` | 2022-05-13 | example change | Changes selected example URLs from bare resource paths to include the whole path. |
| `ea971f96c13efe5478ed1fefffc845eeb80ed881` | 2022-05-13 | example/editorial | Normalizes example URLs from `example.com/path` to `example.com/base`; commit body says some examples used `/base` and some `/path`. |
| `be1b15d8c7163629d535933cf159d91ce35c30a5` | 2022-08-25 | semantic guidance/example | Adds Patch to REST interaction list for `FHIR-19667`. |
| `4a1befe248ccd6504c35025fb1f4fd4779ad1801` | 2022-08-27 | semantic guidance | Changes resource feature bullet from URL to identifier/typical URL for `FHIR-33979`. |
| `36d6d3ab7a55c52040de3edc45e62de2111b9b0d` | 2022-08-31 | example correction | Changes Patient `HumanName.family` JSON from array to string for `FHIR-34768`. |
| `d04313e9e9e7d5d8b263d4127d3a496fe87e259b` | 2022-09-03 | substantive clarification | Adds type+id uniqueness wording for `FHIR-25281`; introduced typo `compination`. |
| `3a6fe7320285b2bb2e741867ff4f6bce4c468002` | 2023-02-14 | editorial | Corrects resource example data line range for `FHIR-38912`. |
| `134c4ff1feec07b86271c18599ebd59ae6c95b2d` | 2023-02-15 | editorial | Corrects search response line number and fixes `compination` typo for `FHIR-38768`. |
| `75eef0f2911084cd87c3e1326c0b0360df8c0a5c` | 2024-08-03 | example/editorial | Changes several REST example URLs/Locations from `347` to `f001`; current page indicates this was incomplete. |
| `8244937cafb494f6c637de64b22982826c5533db` | 2025-10-22 | editorial/terminology | Changes `RDF` link text to `RDF (Turtle)`. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | metadata/template | Changes page metadata table for R6 normative/status presentation. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | editorial | Applies `e.g.,` punctuation cleanup for `FHIR-44047`. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-19667` (`Published`, `Persuasive`, `Non-substantive`, applied for R5): explicitly requests adding `Patch = PATCH .../{resourceType}/{id}` to the developer overview interaction list. The source commit matches this request.
- `FHIR-33979` (`Published`, `Persuasive with Modification`, `Non-substantive`, applied for R5): reports that `A URL that identifies the resource` implies every resource has a URL. Resolution says to change to `identifier for the resource - typically a URL`. The source commit matches the intent.
- `FHIR-34768` (`Published`, `Persuasive`, `Correction`, applied for R5): reports that the page's Patient example represents `HumanName.family` as an array even though R4 JSON uses a single string. The source commit matches the issue.
- `FHIR-25281` (`Published`, `Persuasive with Modification`, `Compatible, substantive`, applied for R5): reports that the search response note should say type+id must be unique, not id alone. The source commit matches the issue; Confluence also records agreement to clarify.
- `FHIR-38912` (`Published`, `Persuasive`, `Correction`, applied for R5): reports that the example line range should end at 42, not 43. The source commit matches the issue.
- `FHIR-38768` (`Published`, `Persuasive`, `Correction`, applied for R5): reports that the search response `entry.resource.id` line number should be 25, not 27. The source commit matches the issue and also fixes the typo left by `FHIR-25281`.
- `FHIR-44047` (`Resolved - change required`, `Persuasive`, R6 ballot): broad punctuation issue for `e.g.,` and `i.e.,` throughout. Commit `887bc2383...` applies this page's `e.g.,` instance, but the local Jira status suggests the broader cleanup was not fully marked applied/published.

### Other Jira hits that plausibly explain changed text

- `RDF (Turtle)` phrase search returned several RDF-related issues (`FHIR-39077`, `FHIR-39078`, `FHIR-37937`-`FHIR-37941`, `FHIR-53178`), but none was clearly tied to this overview-dev wording change. Treated as context-only.
- `Patch = PATCH` phrase search also returned unrelated hits (`FHIR-38923`, `FHIR-52046`) that mention patch operations but do not explain this page change. Treated as context-only.
- `HumanName.family` phrase search returned unrelated later/context issues such as `FHIR-55766`, `FHIR-36963`, and older `FHIR-12351`; `FHIR-34768` is the direct page issue.

### Context-only or failed Jira searches

- SQL/FTS searches for current defects found no issue matching `overview-dev` plus `f001`, `Patient/347`, `/base/Patient`, or `Content-Type: application/fhir+xml`.
- Exact defect queries run:
  - `bun run jira:search fts '"overview-dev" f001 347' --limit 20`
  - `bun run jira:search fts '"overview-dev" "Patient/347"' --limit 20`
  - `bun run jira:search fts '"overview-dev" "application/fhir+xml" Bundle' --limit 20`
- All three returned no results.

## Zulip evidence

- Quoted explicit-key searches found no substantive discussion for `FHIR-19667`, `FHIR-33979`, `FHIR-25281`, `FHIR-38912`, `FHIR-38768`, or `FHIR-44047`.
- Quoted `FHIR-34768` search found only a bot-driven `#fhir/infrastructure-wg > Ticket clean-up` mention around 2021-12-30, not a rationale thread.
- Changed-phrase searches:
  - `Patch = PATCH` returned general implementer discussion of patch, not the overview-dev page.
  - `HumanName.family` returned general HumanName discussions, not `FHIR-34768` or this page.
  - `RDF (Turtle)` returned older RDF/Turtle implementation discussions, not this page edit.
- Defect-phrase searches for `overview-dev` plus `f001`, `Patient/347`, or `application/fhir+xml` returned no relevant threads.

## Confluence evidence

- `FHIR-25281`: `bun run confluence:search refs jira FHIR-25281` found FHIR-I WGM 202001 minutes, page `76153514`. Snapshot text includes `jira:FHIR-25281 Agreed to clarify`, supporting the Jira disposition for the type+id uniqueness change.
- `FHIR-44047`: `bun run confluence:search refs jira FHIR-44047` found FHIR-I WGM 202405 Dallas minutes, page `234784975`. Snapshot text includes `jira:FHIR-44047 will fix`, supporting broad punctuation cleanup.
- No Confluence references or FTS hits were found for `FHIR-19667`, `FHIR-33979`, `FHIR-34768`, `FHIR-38912`, or `FHIR-38768`.
- `HumanName.family` phrase search found PA minutes for `FHIR-36963` about Patient `$match`, not this page. Treated as context-only.
- Defect-phrase Confluence searches for `"overview-dev" f001`, `"overview-dev" "Patient/347"`, and `"overview-dev" "application/fhir+xml" Bundle` returned no results.

## Timeline

| Date | Clock | Evidence |
|---:|---|---|
| 2018-11-18 | Jira created | `FHIR-19667` opened to add Patch to the overview interaction list. |
| 2019-04-29 | Jira resolved/voted | `FHIR-19667` resolved persuasive, vote Rick Geimer/Rob Hausam 7-0-0. |
| 2019-12-05 | Jira created | `FHIR-25281` opened about Bundle entry id uniqueness wording. |
| 2020-02-04 | Jira resolved/voted | `FHIR-25281` resolved persuasive with modification, vote Lloyd McKenzie/Ron Shapiro 8-0-1. |
| 2020-01 WGM | Confluence minutes | FHIR-I page `76153514` records `FHIR-25281 Agreed to clarify`. |
| 2021-09 | Jira created | `FHIR-33979` and `FHIR-34768` opened against the overview page. |
| 2022-01-22 / 2022-02-28 | Jira resolved/voted | `FHIR-33979` resolved with modification; `FHIR-34768` resolved as a correction. |
| 2022-05-13 | Source commits | `6eccb56...` and `ea971f9...` normalize REST example paths. |
| 2022-08-25 | Source commit | `be1b15d...` adds Patch for `FHIR-19667`. |
| 2022-08-27 | Source commit | `4a1befe...` changes resource URL wording for `FHIR-33979`. |
| 2022-08-31 | Source commit | `36d6d3a...` fixes `HumanName.family` for `FHIR-34768`. |
| 2022-09-03 | Source commit | `d04313e...` adds type+id uniqueness wording for `FHIR-25281`. |
| 2022-09/10 | Jira created/resolved | `FHIR-38768` and `FHIR-38912` line-number correction issues opened/resolved. |
| 2023-02-14/15 | Source commits | `3a6fe73...` and `134c4ff...` apply line number/typo fixes. |
| 2024-01-22 / 2024-05-23 | Jira created/resolved | `FHIR-44047` broad punctuation issue created and resolved as change required. |
| 2024-05 WGM | Confluence minutes | FHIR-I page `234784975` records `FHIR-44047 will fix`. |
| 2024-08-03 | Source commit | `75eef0f...` changes REST example IDs in URLs to `f001`; current source suggests incomplete propagation. |
| 2025-10/11 | Source commits | RDF label, R6 metadata table, and punctuation edits applied. |
| R6 ballot4 boundary | Publication/version comparison | New page under `6.0.0-ballot4-5d67a34a13a5` contains all changes above. |

## Evidence log

- Confirmed page boundary with:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/overview-dev.html"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html"`
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/overview-dev.html`
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/overview-dev.html`
  - `git show --stat --patch <commit> -- source/overview-dev.html` for all 13 page-touching commits.
- Full newer page read:
  - `wc -l ".../6.0.0-ballot4-5d67a34a13a5/source/overview-dev.html"` returned 644.
  - Read line ranges `1-220`, `221-440`, and `441-644`.
- Jira snapshots:
  - `bun run jira:search snapshot FHIR-19667`
  - `bun run jira:search snapshot FHIR-33979`
  - `bun run jira:search snapshot FHIR-34768`
  - `bun run jira:search snapshot FHIR-25281`
  - `bun run jira:search snapshot FHIR-38912`
  - `bun run jira:search snapshot FHIR-38768`
  - `bun run jira:search snapshot FHIR-44047`
- Jira changed-phrase searches:
  - `bun run jira:search fts '"An identifier for the resource"' --limit 10`
  - `bun run jira:search fts '"Patch = PATCH"' --limit 10`
  - `bun run jira:search fts '"combination of the resource type"' --limit 10`
  - `bun run jira:search fts '"HumanName.family"' --limit 10`
  - `bun run jira:search fts '"RDF (Turtle)"' --limit 10`
- Zulip searches:
  - Quoted key pattern: `bun run zulip:search fts '"FHIR-XXXXX"' --limit 20`
  - Defect searches: `bun run zulip:search fts '"overview-dev" f001' --limit 20`, `bun run zulip:search fts '"overview-dev" "Patient/347"' --limit 20`, and `bun run zulip:search fts '"overview-dev" "application/fhir+xml" Bundle' --limit 20`
- Confluence searches:
  - `bun run confluence:search refs jira FHIR-XXXXX`
  - `bun run confluence:search fts "FHIR-XXXXX" --limit 20`
  - `bun run confluence:search snapshot 76153514`
  - `bun run confluence:search snapshot 234784975`

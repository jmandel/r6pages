# credits research appendix

## Scope and coverage

- Page path: `source/credits.html`
- Old version/commit/tree: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/commit/tree: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Boundary: page exists in both trees; detected status is modified, not added/deleted/renamed.
- New page read end-to-end: 153 lines, `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/credits.html:1-153`.
- Direct diff size: 199 lines.
- Source commits touching this page in range: 15.
- Explicit Jira keys found in source history/patches: `FHIR-22641`, `FHIR-38694`, `FHIR-44047`.
- Additional related Jira reviewed: `FHIR-43350` because FMG minutes and Jira mention possible credits updates for a later publication.
- Jira/Zulip/Confluence searched for explicit keys and distinctive changed phrases: `Code of Conduct`, `Tooling providers`, `United States Office of the Assistant Secretary`, `FHIR Management Group`/`Sarah Gaunt`, `Google`/`credits`, `Zulip team`, `healthit.gov`.
- Caveats:
  - Initial Zulip FTS searches for unquoted hyphenated Jira keys failed with FTS parsing errors; corrected quoted searches were run afterward.
  - Initial Jira FTS search for `credits.html` failed because `.` was parsed by FTS; reran as `credits html`.
  - No Jira/Zulip/Confluence evidence was found for the exact 2025 gratitude sentence added in `71567db3ee039ac6977be5f96a7e013896569a36`; Confluence has older contextual evidence that Google funding supported FHIR infrastructure.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/credits.html` | R4 baseline, page exists |
| Source | New page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/credits.html:1-153` | R6 ballot4 page read end-to-end |
| Source lines | Header/status | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/credits.html:10-11` | Current owner/status table |
| Source lines | Community text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/credits.html:15-40` | Current community infrastructure, Code of Conduct, sponsor thanks |
| Source lines | Contributor roles | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/credits.html:49-55` | Current roles list; tooling providers added in R6 refresh |
| Source lines | Credits/roster | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/credits.html:61-139` | Current contributor and FMG lists |
| Finding locator | Missing separator | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/credits.html:139` | Reads `John Quinn Josh Mandel` in former FMG member list |
| Commit | Template wrapper/footer | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Mechanical HTML template update |
| Commit | Code of Conduct | `359bdeb3d0d094b309cca6bf95b6e00244849ede`, https://github.com/HL7/fhir/commit/359bdeb3d0d094b309cca6bf95b6e00244849ede | Implements `FHIR-22641` on this page |
| Commit | FHIR-38694 original | `555ae09245f5ff4533e7ab4ca0d341317dd0f5d3`, https://github.com/HL7/fhir/commit/555ae09245f5ff4533e7ab4ca0d341317dd0f5d3 | Jira comment cites this as `Git master 555ae09245`; included malformed leftover entries later fixed |
| Commit | FHIR-38694 re-applied | `9bf61223e847fb5c03b71b3169e496baeccd4826`, https://github.com/HL7/fhir/commit/9bf61223e847fb5c03b71b3169e496baeccd4826 | Main R5 credits/affiliation refresh in direct history |
| Commit | R6 broad credits refresh | `71567db3ee039ac6977be5f96a7e013896569a36`, https://github.com/HL7/fhir/commit/71567db3ee039ac6977be5f96a7e013896569a36 | Adds sponsor thanks, tooling-provider role, and updated contributor/FMG lists |
| Commit | e.g. punctuation | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | Implements `FHIR-44047` for this page |
| Commit | Merge preserving punctuation | `26e92f62992049deb04d97c36677f38eb4d140af`, https://github.com/HL7/fhir/commit/26e92f62992049deb04d97c36677f38eb4d140af | Merge conflict resolution keeps both R6 refresh and comma after `e.g.` |
| Jira | FHIR-22641 | https://jira.hl7.org/browse/FHIR-22641; reopen with `bun run jira:search snapshot FHIR-22641` | Formal request to add community Code of Conduct/community guidelines link |
| Jira | FHIR-38694 | https://jira.hl7.org/browse/FHIR-38694; reopen with `bun run jira:search snapshot FHIR-38694` | Formal affiliation/credits update; resolution says update committers since R4 and seek community review |
| Jira | FHIR-44047 | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Spec-wide `e.g.,`/`i.e.,` punctuation correction |
| Jira | FHIR-43350 | https://jira.hl7.org/browse/FHIR-43350; reopen with `bun run jira:search snapshot FHIR-43350` | Context-only credits request for Conformance contributors; resolved no change |
| Confluence | FHIR-38694 vote | Page `139675058`, https://confluence.hl7.org/spaces/FHIRI/pages/139675058/FHIR+Infrastructure+Minutes+CC+2022-10-24; `bun run confluence:search snapshot 139675058` | Records `FHIR-38694` as Persuasive with Mod, Josh Mandel/Bryn Rhodes 11-0-1 |
| Confluence | FHIR-44047 vote/context | Page `234784975`, https://confluence.hl7.org/spaces/FHIRI/pages/234784975/FHIR+Infrastructure+Minutes+WGM+202405+-+Dallas; `bun run confluence:search snapshot 234784975` | Records `FHIR-44047 will fix` among prior ballot issues |
| Confluence | Google funding context | Page `118982227`, https://confluence.hl7.org/spaces/FMG/pages/118982227/2021-07-21+FMG+Agenda+Minutes; `bun run confluence:search snapshot 118982227` | 2021 FMG minutes mention Google funding FHIR infrastructure "via credits" |
| Confluence | FHIR-43350 context | Page `225707788`, https://confluence.hl7.org/spaces/FMG/pages/225707788/2024-03-13+FMG+Agenda+Minutes; `bun run confluence:search snapshot 225707788` | FMG notes say `FHIR-43350` credits could be considered for next publication |
| Confluence | FMG roster context | Page `307302458`, https://confluence.hl7.org/spaces/FMG/pages/307302458/2025-01-27+FMG+Tooling+WGM+Agenda+Minutes; `bun run confluence:search snapshot 307302458` | Shows R6-era FMG names such as Sarah Gaunt, Bryn Rhodes, Dan Vreeman, Jeff Brown, Grahame Grieve, Ewout Kramer, Ward Weistra, Gino Canessa, Rob Hausam, Lloyd McKenzie, Gay Dolin |
| Local artifact | Direct diff | `.copilot/session-state/e87c4717-62fe-43a5-b94a-73aa77afca12/files/credits.diff` | Saved 199-line direct diff |
| Local artifact | Commit patches | `.copilot/session-state/e87c4717-62fe-43a5-b94a-73aa77afca12/files/credits-commits.patch` | Saved per-commit patches for all 15 commits |

## Change summary

### Metadata/template/navigation

- **Mechanical/noise:** `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removes the wrapping `<div class="col-12">` and adjusts footer placement as part of an HTML template update.
- **Metadata/template/navigation:** `c3da43d4d906bc8ef71d67923be5e5db976665be` changes the status table to include a FHIR Management Group work group cell and keeps maturity/status metadata.
- **Metadata/template/navigation:** `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changes the status table to say `Responsible Owner: FHIR Management Group Work Group` and removes the maturity-level cell.
- No conformance, REST, search, operation, resource, example, or normative requirement semantics were found in these metadata/template changes.

### Community infrastructure text

- **Editorial / semantic guidance:** `FHIR-22641` adds the Code of Conduct sentence to the community paragraph. Jira explicitly requested surfacing community guidelines on the Community & Credits page and was resolved persuasive/non-substantive.
- **Editorial/reference update:** The community infrastructure list changed from R4's broader list (`chat.fhir.org`, issue tracker, `community.fhir.org`, email list, Confluence, GitHub) to the current R6 ballot4 list (`chat.fhir.org` as Zulip, issue tracker, Confluence, GitHub). The current text removes the general forum and email-list bullets and updates connectathon/WGM links.
- **Editorial/contextual acknowledgement:** `71567db3ee039ac6977be5f96a7e013896569a36` adds thanks to the United States Office of the Assistant Secretary of Health (Technology and Policy), Google, and the Zulip team. I found no direct Jira/Zulip/Confluence item for this exact sentence. Older FMG minutes from 2021-07-21 discuss Google funding FHIR infrastructure "via credits", which is supportive context but not proof of the 2025 wording decision.

### Credits and contributor lists

- **Editorial only:** The credits section was substantially refreshed, especially in `9bf61223e847fb5c03b71b3169e496baeccd4826` (`FHIR-38694`) and `71567db3ee039ac6977be5f96a7e013896569a36`. Changes include updated affiliations, new contributor names, moved past contributors, updated FMG membership, and a new role for tooling providers.
- **Jira-backed editorial update:** `FHIR-38694` is directly on point for affiliation changes and says the credits should reflect committers since R4 while also seeking community review for affiliations. Confluence records the FHIR-I vote as Persuasive with Modification.
- **Context-only:** `FHIR-43350` requested named credit for Conformance contributors. It was resolved "Considered - No action required"; FMG minutes say it could be considered for a next publication. I did not treat it as an unapplied required change.

### Punctuation and typo cleanup

- **Editorial only:** `dad7cf37c75822c352509e1c2e8d050408d0be18` fixes `contributers` to `contributors`.
- **Editorial only:** `4118eb9ddb6eabe52c56c903b3932f27c2c42e38`, `fa9785bab310485b992395fdfcc8d75d9003f006`, `206a230f02b8ec31c3009469a9f99d4ddb5d8930`, `607faf600bd039f304086842fac52b1f426d200c`, `60a8a667a3dc1912e0e12079da2a41c36ac9467b`, and `db03eef19fc89f82792e4ed0d8a17aefa43b8a88` make individual name/affiliation/capitalization fixes.
- **Editorial only:** `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` changes `e.g. Social Media` to `e.g., Social Media` as part of `FHIR-44047`.
- **Concrete current-page defect:** line 139 currently reads `John Quinn Josh Mandel`, missing a separator between two former FMG members. Pickaxe shows the phrase was introduced by `71567db3ee039ac6977be5f96a7e013896569a36`.

## Source history

| Commit | Date | Subject | Page-specific effect | Classification |
|---|---:|---|---|---|
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | update html template | Removes `col-12` wrapper and adjusts footer placement | mechanical/noise |
| `359bdeb3d0d094b309cca6bf95b6e00244849ede` | 2022-08-27 | FHIR-22641 Add reference to our community guidelines on the FHIR community page | Adds Code of Conduct sentence/link | editorial/Jira-backed |
| `c3da43d4d906bc8ef71d67923be5e5db976665be` | 2022-09-05 | tidy up status codes on pages, and set version for ballot | Adds work group cell and status-table structure | metadata/template |
| `dad7cf37c75822c352509e1c2e8d050408d0be18` | 2023-02-21 | QA related changes | `contributers` -> `contributors` | editorial only |
| `4118eb9ddb6eabe52c56c903b3932f27c2c42e38` | 2023-03-14 | remove content now moved to extensions IG, and fix broken links | `Aegis` -> `AEGIS` | editorial only |
| `fa9785bab310485b992395fdfcc8d75d9003f006` | 2023-03-16 | Update credits.html | Jose Costa Teixeira name spelling adjustment | editorial only |
| `9bf61223e847fb5c03b71b3169e496baeccd4826` | 2023-03-19 | Re-applied Updated credits, https://jira.hl7.org/browse/FHIR-38694 and merged in Jose's fix | Major affiliation/contributor/FMG refresh after `FHIR-38694` | editorial/Jira-backed |
| `206a230f02b8ec31c3009469a9f99d4ddb5d8930` | 2023-03-19 | Fixes to credits | Removes one name and revises Jose affiliation | editorial only |
| `607faf600bd039f304086842fac52b1f426d200c` | 2023-03-20 | Update credits.html | Revises Jose affiliation again | editorial only |
| `60a8a667a3dc1912e0e12079da2a41c36ac9467b` | 2023-06-27 | Fixed typo in comapny name in credits | `Phillips` -> `Philips` | editorial only |
| `db03eef19fc89f82792e4ed0d8a17aefa43b8a88` | 2025-08-17 | upgrade kindling to fix bug | John Moehrke affiliation changed to Moehrke Research | editorial only despite broad subject |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | normative changes for R6 | Status table changed to `Responsible Owner`; maturity cell removed | metadata/template |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | FHIR-44047 | Adds comma after `e.g.` | editorial/Jira-backed |
| `71567db3ee039ac6977be5f96a7e013896569a36` | 2025-11-07 | ballot notes part #1, and remove Citation, VerificationResult, ChargeItem, ChargeItemDefinition, EncounterHistory, PersonalRelationship, and some QA | Broad R6 refresh: community wording, sponsor thanks, tooling-provider role, contributor/FMG lists | editorial/template, with no page-specific Jira found |
| `26e92f62992049deb04d97c36677f38eb4d140af` | 2025-11-07 | Merge remote-tracking branch 'origin/master' | Merge keeps `e.g.,` punctuation while preserving broad R6 refresh | mechanical merge |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-22641` - "Add reference to our community guidelines on the FHIR community page"
  - Snapshot command: `bun run jira:search snapshot FHIR-22641`
  - Status: Published; resolution Persuasive; work group fhir-i; raised in STU3; applied for R5; change impact non-substantive.
  - Description asks to surface the FHIR community code of conduct/community guidelines on the Community & Credits page.
  - Resolution: "Add the link as requested."
  - Comment says this was resolved in a 2019-05-28 bulk vote but status was not updated, with a Confluence minutes link.
  - Source commit `359bdeb3d0d094b309cca6bf95b6e00244849ede` implements the Code of Conduct sentence on this page.

- `FHIR-38694` - "Several affiliation (organization) changes needed within credits"
  - Snapshot command: `bun run jira:search snapshot FHIR-38694`
  - Status: Published; resolution Persuasive with Modification; priority Highest; ballot `BALLOT-41348`; work group fhir-i; applied for R5; change impact non-substantive.
  - Description names affiliation changes for Michelle Miller, Kevin Power, and Brian Postlethwaite, and says there may be others.
  - Resolution: "We will update the credits to reflect committers since R4 and will also seek review from the community to make sure organizational affiliations are correct. (We will make the identified changes as part of that.)"
  - Comment: "Git master 555ae09245".
  - Source history includes original implementation commit `555ae09245f5ff4533e7ab4ca0d341317dd0f5d3` and direct-range re-application commit `9bf61223e847fb5c03b71b3169e496baeccd4826`, followed by smaller fixes.
  - Confluence `139675058` records the tracker as Persuasive with Mod, Josh Mandel/Bryn Rhodes 11-0-1.

- `FHIR-44047` - "Incorrect punctuation of exempli gtatia and id est (e.g., & i.e.,) throughout"
  - Snapshot command: `bun run jira:search snapshot FHIR-44047`
  - Status in Jira snapshot: Resolved - change required; status category indeterminate; resolution Persuasive; raised in R6; ballot `BALLOT-56530`.
  - Description asks for spec-wide punctuation correction from `e.g.`/`i.e.` to `e.g.,`/`i.e.,`.
  - Source commit `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` changes this page's `e.g. Social Media` to `e.g., Social Media`; merge commit `26e92f62992049deb04d97c36677f38eb4d140af` preserves it.
  - Confluence `234784975` records `FHIR-44047 will fix`.
  - I did not treat Jira's still-indeterminate status as an actionable page issue; the page-specific punctuation change is present.

### Other Jira issues plausibly related to changed text

- `FHIR-43350` - "Credits for Conformance"
  - Snapshot command: `bun run jira:search snapshot FHIR-43350`
  - Request asks to acknowledge Conformance WG-related contributors in credits.
  - Status: Resolved - No Change; resolution "Considered - No action required"; FMG work group.
  - Resolution says FMG will pass the request to Grahame; a comment says "To be considered at time of next publication."
  - Confluence `225707788` says `FHIR-43350 We could consider adding credits to the next publication`.
  - Context-only for this review: there was no formal required source-text change, and I found no direct mismatch between a decision and the R6 page.

### Context-only Jira hits that should not drive action

- `credits html` search returned unrelated IG and historical issues plus `FHIR-40466`/`FHIR-10677`; none explained the current page changes beyond the explicit keys above.
- Searches for `"Tooling providers"`, `"United States Office of the Assistant Secretary"`, `"healthit.gov" credits`, `"FHIR community uses"`, and `"Sarah Gaunt" "Ward Weistra"` found no directly explanatory Jira issue.
- Search for `"Zulip team"` returned `FHIR-17705`, a broken-link issue unrelated to this page.

## Zulip evidence

- Corrected exact-key searches:
  - `bun run zulip:search fts "\"FHIR-22641\"" --limit 20`: no results.
  - `bun run zulip:search fts "\"FHIR-38694\"" --limit 20`: one `#fhir/infrastructure-wg > Status Report` result listing many FHIR-I tasks; context-only, no rationale for credits wording.
  - `bun run zulip:search fts "\"FHIR-44047\"" --limit 20`: no results.
  - `bun run zulip:search fts "\"FHIR-43350\"" --limit 20`: no results.
- Distinctive phrase searches:
  - `"Code of Conduct" credits`: no results.
  - `"Tooling providers"`: one 2019 `#genomics/committers > Branches` mention about commercial tooling environment; context-only and not this page.
  - `"United States Office of the Assistant Secretary"`: no results.
  - `"Google" "credits"`: no results.
  - `"Zulip team"`: many social/platform-support results, including thanks to the Zulip team, but no thread connected to the page change.
  - `"Sarah Gaunt" "Ward Weistra"`: a few FMG-related mentions, but no credits-page decision.
- Conclusion: Zulip did not provide meaningful page-specific rationale for the applied changes.

## Confluence evidence

- `FHIR-38694`:
  - `bun run confluence:search refs jira FHIR-38694` and `fts FHIR-38694` found page `139675058`, FHIR Infrastructure Minutes CC 2022-10-24.
  - Snapshot text records: `Tracker jira:FHIR-38694 Persuasive with Mod Josh Mandel / Bryn Rhodes: 11-0-1`.
  - This aligns with the Jira resolution and source changes for the R5 affiliation/credits refresh.

- `FHIR-44047`:
  - `bun run confluence:search refs jira FHIR-44047` and `fts FHIR-44047` found page `234784975`, FHIR Infrastructure Minutes WGM 202405 - Dallas.
  - Snapshot context records: `FHIR-44047 will fix` among prior for-comment ballot issues.
  - This supports the later source punctuation change in `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`.

- Google/infrastructure support:
  - `bun run confluence:search fts "\"Google\" \"credits\""` found FMG page `118982227`, 2021-07-21 FMG Agenda/Minutes.
  - Snapshot text discusses terminology server/infrastructure dependency and says: `Google is funding this (via credits) - and lots of other stuff`.
  - This is useful background for later sponsor thanks but is not direct evidence for the exact 2025 R6 sentence.

- `FHIR-43350`:
  - `bun run confluence:search snapshot 225707788` shows FMG 2024-03-13 minutes with `jira:FHIR-43350 We could consider adding credits to the next publication`.
  - Jira later resolves the issue as no action required, so this remains context-only.

- FMG roster context:
  - Searches for `"FHIR Management Group" "Sarah Gaunt"` and `"Sarah Gaunt" "Ward Weistra"` found numerous FMG minutes.
  - `bun run confluence:search snapshot 307302458` (2025-01-27 FMG Tooling WGM) includes names overlapping the R6 page's current FMG list. This supports the broad R6 roster refresh direction but not every exact line on the page.

## Timeline

| Date | Clock | Event |
|---:|---|---|
| 2019-05-28 | Jira vote | `FHIR-22641` bulk vote recorded in Jira comment; request to add community guidelines/Code of Conduct link |
| 2019-05-31 | Jira created | `FHIR-22641` created |
| 2019-07-29 | Jira resolved | `FHIR-22641` resolved Persuasive |
| 2021-06-27 | Source commit | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` template update touches page |
| 2021-07-21 | Confluence discussion | FMG minutes discuss Google funding FHIR infrastructure "via credits" |
| 2022-08-27 | Source commit | `359bdeb3d0d094b309cca6bf95b6e00244849ede` adds Code of Conduct sentence for `FHIR-22641` |
| 2022-09-22 | Jira created | `FHIR-38694` created for affiliation/organization changes within credits |
| 2022-10-24 | Jira/Confluence vote | `FHIR-38694` resolved/voted Persuasive with Modification, Josh Mandel/Bryn Rhodes 11-0-1 |
| 2023-03-17 | Source commit | `555ae09245f5ff4533e7ab4ca0d341317dd0f5d3` original `FHIR-38694` credits update cited by Jira |
| 2023-03-19 | Source commit | `9bf61223e847fb5c03b71b3169e496baeccd4826` re-applies updated credits and merges Jose's fix |
| 2023-03-19 to 2025-08-17 | Source commits | Follow-up name/affiliation typo fixes (`206a230`, `607faf`, `60a8a6`, `db03ee`) |
| 2024-01-22 | Jira created | `FHIR-44047` created for `e.g.,`/`i.e.,` punctuation throughout R6 |
| 2024-03-13 | Confluence discussion | FMG minutes note `FHIR-43350` credits could be considered for next publication |
| 2024-05-23 | Jira resolved | `FHIR-44047` resolved Persuasive, still in `Resolved - change required` state in snapshot |
| 2024-05-29 | Jira resolved | `FHIR-43350` resolved no change/no action required |
| 2025-10-31 | Source commit | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` R6 metadata/status table change |
| 2025-11-03 | Source commit | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` applies `FHIR-44047` punctuation on this page |
| 2025-11-07 | Source commit | `71567db3ee039ac6977be5f96a7e013896569a36` broad R6 community/credits refresh |
| 2025-11-07 | Source merge | `26e92f62992049deb04d97c36677f38eb4d140af` merges broad refresh and punctuation change |

## Evidence log

- Page boundary:
  - `test -f ".../4.0.1-0da2a0a84dc1/source/credits.html" && echo "old exists"`
  - `test -f ".../6.0.0-ballot4-5d67a34a13a5/source/credits.html" && echo "new exists"`
  - Established: page exists in both trees.
- Direct diff:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/credits.html`
  - Saved to `.copilot/session-state/e87c4717-62fe-43a5-b94a-73aa77afca12/files/credits.diff`.
  - Established: no normative/conformance changes; mostly community/credits text, metadata, and editorial updates.
- Source history:
  - `git -C ".../6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/credits.html`
  - Established: 15 commits touching the page.
  - Per-commit patches saved to `.copilot/session-state/e87c4717-62fe-43a5-b94a-73aa77afca12/files/credits-commits.patch`.
- Pickaxe checks:
  - `git log -S "Code of Conduct" ... -- source/credits.html` -> `359bdeb3d0d094b309cca6bf95b6e00244849ede`.
  - `git log -S "United States Office of the Assistant Secretary" ... -- source/credits.html` -> `71567db3ee039ac6977be5f96a7e013896569a36`.
  - `git log -S "Tooling providers - servers" ... -- source/credits.html` -> `71567db3ee039ac6977be5f96a7e013896569a36`.
  - `git log -S "Sarah Gaunt" ... -- source/credits.html` -> `71567db3ee039ac6977be5f96a7e013896569a36`.
  - `git log -S "John Quinn Josh Mandel" ... -- source/credits.html` -> `71567db3ee039ac6977be5f96a7e013896569a36`.
- Jira:
  - Snapshotted `FHIR-22641`, `FHIR-38694`, `FHIR-44047`, `FHIR-43350`.
  - Searched FTS for `credits html`, `"Code of Conduct" credits`, `"Tooling providers"`, `"United States Office of the Assistant Secretary"`, `"Management group" credits`, `"FHIR Management Group" "Sarah Gaunt"`, `"Google" "credits"`, `"Zulip team"`, `"healthit.gov" credits`, `"FHIR community uses"`, `"Sarah Gaunt" "Ward Weistra"`.
  - Failed search: `bun run jira:search fts credits.html --limit 20` failed due FTS syntax near `.`; rerun as `credits html`.
- Zulip:
  - Initial unquoted key searches for `FHIR-22641`, `FHIR-38694`, `FHIR-44047` failed because FTS parsed hyphenated keys as expressions.
  - Corrected searches: `bun run zulip:search fts "\"FHIR-22641\"" --limit 20`, and similarly for `FHIR-38694`, `FHIR-44047`, `FHIR-43350`.
  - Phrase searches: `"Code of Conduct" credits`, `"Tooling providers"`, `"United States Office of the Assistant Secretary"`, `"Google" "credits"`, `"Zulip team"`, `"healthit.gov" credits`, `"FHIR community uses"`, `"Sarah Gaunt" "Ward Weistra"`.
  - Established: no meaningful page-specific rationale in Zulip.
- Confluence:
  - Ran `refs jira` and `fts` for `FHIR-22641`, `FHIR-38694`, `FHIR-44047`.
  - Snapshotted `139675058`, `234784975`, `118982227`, `225707788`, `307302458`.
  - Phrase searches: `"Code of Conduct" credits`, `"Tooling providers"`, `"United States Office of the Assistant Secretary"`, `"FHIR Management Group" "Sarah Gaunt"`, `"Management group" credits`, `"Google" "credits"`, `"Zulip team"`, `"healthit.gov" credits`, `"FHIR community uses"`, `"Sarah Gaunt" "Ward Weistra"`.
  - Established: formal/supporting minutes exist for `FHIR-38694` and `FHIR-44047`; Google funding context exists; no direct minutes found for the exact R6 gratitude sentence.

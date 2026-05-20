# license research appendix

## Scope and coverage

- Page path: `source/license.html`
- Old version/commit: R4 4.0.1, `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`
- Old source tree: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New version/commit: R6 ballot4 6.0.0-ballot4, `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`
- New source tree: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Page boundary: present in both trees (`old exists`, `new exists`).
- Page read-through: full newer page read end-to-end, 126 lines; full old page also read, 111 lines.
- Source history: 12 commits touched `source/license.html` in the requested range. Explicit Jira keys found in source commit metadata: `FHIR-28295`, `FHIR-29954`, `FHIR-25089`, `FHIR-44047`, plus bare `#34528`/`34528` which maps to `FHIR-34528`.
- Additional later issue found from Zulip/Jira search: `FHIR-44925`, a resolved R6 request to add trademark examples to this same page.
- Jira/Zulip/Confluence searches were run for explicit issue keys and distinctive changed phrases: license page/CC0, GOM section, LOINC copyright/license, FHIR trademark/trademark examples, and the obvious current phrase `FHIR always include`.
- Caveats: unquoted Zulip FTS searches for `FHIR-#####` produced SQLite FTS parse errors because hyphens were interpreted as operators; quoted searches for the explicit Jira keys returned no Zulip hits. No Confluence page was found for `FHIR-34528`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Old R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/license.html:1-111` | Baseline page. |
| Source | New R6 ballot4 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/license.html:1-126` | Current reviewed page. |
| Source | Current FHIR license/GOM text | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/license.html:44-68` | Shows downloads link, GOM Section 09 wording, CC0 statement, and patent/GOM note. |
| Source | Current trademark section | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/license.html:70-96` | Contains the expanded trademark guidance and current editorial defects. |
| Source | Current LOINC notice | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/license.html:110-117` | Still hard-codes the LOINC copyright/date/license statement. |
| Commit | LOINC text update | `8cd675bf1d83dc4d58f66a7f54c5bad6c838c083`, https://github.com/HL7/fhir/commit/8cd675bf1d83dc4d58f66a7f54c5bad6c838c083 | Applied `FHIR-28295`-related LOINC notice text to this page. |
| Commit | HTML template update | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a`, https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Mechanical wrapper removal. |
| Commit | GOM section preapply | `f2c2aab8ea982d76da18209751a8c2e316fe14d0`, https://github.com/HL7/fhir/commit/f2c2aab8ea982d76da18209751a8c2e316fe14d0 | `#34528` changed GOM section references from 16 to 09. |
| Commit | GOM patent wording | `11717b17f95e012b393c61e93438e175b7d9dfde`, https://github.com/HL7/fhir/commit/11717b17f95e012b393c61e93438e175b7d9dfde | `#34528` adjusted patent/GOM wording. |
| Commit | GOM publication caveat | `c92dc70b2bca517ed796831fdd4ad0043401166b`, https://github.com/HL7/fhir/commit/c92dc70b2bca517ed796831fdd4ad0043401166b | `#34528` added "at the time this specification was published". |
| Commit | License clarifications | `6279cde4bba72f2cdf49adf9bbb12b98fa4b71d7`, https://github.com/HL7/fhir/commit/6279cde4bba72f2cdf49adf9bbb12b98fa4b71d7 | `FHIR-29954` linked downloads and clarified document/specification wording. |
| Commit | Merge of GOM/license fixes | `5b925c14c27cb5ae1a695ad48e6191eb3f4eaa00`, https://github.com/HL7/fhir/commit/5b925c14c27cb5ae1a695ad48e6191eb3f4eaa00 | Combined parallel `FHIR-29954` and `FHIR-34528` edits. |
| Commit | Promoting Interoperability | `d4a14dd4e859f769c94ba9154b2be7255bc3c6f4`, https://github.com/HL7/fhir/commit/d4a14dd4e859f769c94ba9154b2be7255bc3c6f4 | Added the new CC0/open-license spirit section for `FHIR-25089`. |
| PR | Promoting Interoperability PR | https://github.com/HL7/fhir/pull/2417 | Merged 2022-09-22; body links `FHIR-25089`. |
| Commit | Disclaimer section placement/formatting | `6521f07bd26637710cf04cc8753d5e5e7c0d7e7b`, https://github.com/HL7/fhir/commit/6521f07bd26637710cf04cc8753d5e5e7c0d7e7b | Moved the STU warning before the new section and normalized whitespace. |
| Commit | Trademark/license clarification rewrite | `56a635cea5e5fd1271db44961429a40dea50b3e2`, https://github.com/HL7/fhir/commit/56a635cea5e5fd1271db44961429a40dea50b3e2 | Expanded trademark section; introduced/preserved several current reader-facing defects. |
| Commit | R6 normative/template changes | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`, https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changed metadata header and removed old STU warning. |
| Commit | e.g. punctuation cleanup | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627`, https://github.com/HL7/fhir/commit/887bc2383fb7b429cfafd64a46bdfc0c40c5b627 | `FHIR-44047` punctuation cleanup in trademark text. |
| Jira | `FHIR-28295` | https://jira.hl7.org/browse/FHIR-28295; reopen with `bun run jira:search snapshot FHIR-28295` | LOINC copyright details; comments explicitly call out `license.html#loinc`. |
| Jira | `FHIR-34528` | https://jira.hl7.org/browse/FHIR-34528; reopen with `bun run jira:search snapshot FHIR-34528` | Formal GOM section correction. |
| Jira | `FHIR-29954` | https://jira.hl7.org/browse/FHIR-29954; reopen with `bun run jira:search snapshot FHIR-29954` | Formal license page clarification. |
| Jira | `FHIR-25089` | https://jira.hl7.org/browse/FHIR-25089; reopen with `bun run jira:search snapshot FHIR-25089` | Formal request and resolution for the "Promoting Interoperability" addition. |
| Jira | `FHIR-44047` | https://jira.hl7.org/browse/FHIR-44047; reopen with `bun run jira:search snapshot FHIR-44047` | Broad `e.g.`/`i.e.` punctuation cleanup. |
| Jira | `FHIR-44925` | https://jira.hl7.org/browse/FHIR-44925; reopen with `bun run jira:search snapshot FHIR-44925` | Later resolved R6 request to add trademark examples to `license.html#trademark`; not in current page. |
| Zulip | Improving license page | https://chat.fhir.org/#narrow/stream/social/topic/Improving%20license%20page; reopen with `bun run zulip:search snapshot social "Improving license page"` | Community rationale for `FHIR-25089`. |
| Zulip | Trademark question about text to include | https://chat.fhir.org/#narrow/stream/implementers/topic/Trademark%20question%20about%20text%20to%20include; reopen with `bun run zulip:search snapshot implementers "Trademark question about text to include"` | Later discussion that led to `FHIR-44925`. |
| Confluence | Vocab minutes for `FHIR-28295` | https://confluence.hl7.org/spaces/VOC/pages/120756184/FHIR+Tracker+Issues+2021-08-11+Call+Agenda+and+Minutes; reopen with `bun run confluence:search snapshot 120756184` | Records "removing specific copyright information from page" for LOINC. |
| Confluence | FHIR-I WGM 202105 for `FHIR-29954` | https://confluence.hl7.org/spaces/FHIRI/pages/113673765/FHIR+Infrastructure+Minutes+WGM+202105; reopen with `bun run confluence:search snapshot 113673765` | Confirms hyperlink and "document" to "specification" decision. |
| Confluence | FHIR-I WGM 202209 for `FHIR-25089` | https://confluence.hl7.org/spaces/FHIRI/pages/108316158/FHIR+Infrastructure+Minutes+WGM+202209+-+Baltimore; reopen with `bun run confluence:search snapshot 108316158` | Confirms proposed language and vote for Promoting Interoperability. |
| Confluence | FHIR-I 2025-12-15 for `FHIR-44925` | https://confluence.hl7.org/spaces/FHIRI/pages/413043627/FHIR+Infrastructure+Minutes+CC+2025-12-15; reopen with `bun run confluence:search snapshot 413043627` | Confirms persuasive vote to add trademark examples. |
| Confluence | FHIR Trademark Policy | https://confluence.hl7.org/spaces/FHIR/pages/82906463/FHIR+Trademark+Policy; reopen with `bun run confluence:search snapshot 82906463` | Background policy text; Zulip notes it differs from the license page notice. |

## Change summary

### Metadata/template/navigation

- **Metadata/template/navigation:** `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` removed the old `<div class="col-12">` wrapper as part of template churn.
- **Metadata/template/navigation:** `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` changed the page header from a work group/maturity/status row to "Responsible Owner" plus standards status, and removed the old `todo.html` STU warning paragraph. This appears template/release-state related rather than page-specific legal substance.

### FHIR license/GOM wording

- **Semantic guidance / legal clarification:** `FHIR-29954` and `FHIR-34528` account for the meaningful license section edits:
  - "Downloads page" became an actual `downloads.html` link.
  - "This document is licensed..." became "This specification is licensed..."
  - GOM IP references moved from Section 16 to Section 09, with "at the time this specification was published" language.
  - The CC0 sentence is now bolded.
- No implementation mismatch found for `FHIR-29954`/`FHIR-34528`; current lines 44-53 match the Jira intent.

### Promoting Interoperability section

- **Semantic guidance / editorial rationale:** `FHIR-25089` added a new "Promoting Interoperability" section at current lines 27-35.
- Jira, Zulip, Confluence, and PR evidence line up: the change was intended to make the license page communicate the open CC0 spirit of FHIR, not to change conformance or licensing mechanics.
- Minor wording evolved from the first Zulip draft; the final text matches the Jira resolution closely enough. No actionable mismatch found.

### Trademark section

- **Semantic guidance:** `56a635cea5e5fd1271db44961429a40dea50b3e2` added an explicit `FHIR Trademark` heading/anchor and expanded the use guidance around FHIR/FHIR icon marks, written permission, event/product forms, and trademarks inside other trademarks.
- **Editorial/rendering defect:** this rewrite left visible defects in current lines 73-83: `it's affiliates`, a missing closing parenthesis in the fair-use parenthetical, and "FHIR always include the registered symbol". Line 67 also retains an extra trailing quote after the patent/GOM list item.
- **Later reassessment:** `FHIR-44925` was created from a 2024 Zulip thread, resolved on 2025-12-15, and says the page should add examples explaining trademark-use vs non-trademark-use cases. The R6 ballot4 source commit is 2025-12-18 and `source/license.html` has no commits after 2025-11-03, so that resolved request is not reflected in this page.

### Third-party artifacts and terminologies

- **Semantic guidance / legal notice:** `8cd675bf1d83dc4d58f66a7f54c5bad6c838c083` updated the LOINC notice to `1995-2020`, changed the link to `loinc.org/license`, and added the LOINC registered-trademark sentence.
- **Potential intent mismatch / stale legal text:** the current R6 ballot4 page still hard-codes the same `1995-2020` LOINC copyright statement at lines 115-117. `FHIR-28295` was later resolved with text saying to remove that specific copyright information and refer to THO/terminology.hl7.org; Jira comments explicitly mention that `license.html#loinc` likely also needed the same treatment. A source search in the current R6 tree found this hard-coded LOINC copyright phrase only in `source/license.html`.

### Mechanical/noise

- **Mechanical/noise:** `6521f07bd26637710cf04cc8753d5e5e7c0d7e7b` mostly moved the STU warning relative to the new section and normalized whitespace/line endings.
- **Editorial only:** `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` changed `e.g. as` to `e.g., as` for `FHIR-44047`.

## Source history

| Commit | Date | Subject | Category | Page-specific note |
|---|---:|---|---|---|
| `8cd675bf1d83dc4d58f66a7f54c5bad6c838c083` | 2020-08-19 | `FHIR-28295 - Update copyright and other details on "Using LOINC with FHIR" page.` | substantive/legal notice | Updated the license page LOINC row to the hard-coded 1995-2020/license URL/trademark statement. |
| `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | 2021-06-27 | `update html template` | mechanical/template | Removed wrapper `<div class="col-12">` and closing `</div>`. |
| `f2c2aab8ea982d76da18209751a8c2e316fe14d0` | 2021-12-20 | `Preapply #34528` | legal clarification | Changed GOM Section 16 to Section 09 and patent section 16.03.04 to 09.03.04. |
| `11717b17f95e012b393c61e93438e175b7d9dfde` | 2022-08-15 | `fix #34528` | legal clarification | Moved the patent section reference into the GOM link and added "as of the time this release was published". |
| `c92dc70b2bca517ed796831fdd4ad0043401166b` | 2022-08-27 | `34528` | legal clarification | Added "at the time this specification was published" to the main GOM Section 09 reference. |
| `6279cde4bba72f2cdf49adf9bbb12b98fa4b71d7` | 2022-08-28 | `FHIR-29954 Out of date / ambiguous licence information` | legal clarification | Linked downloads page and changed "document" to "specification"; parallel GOM wording was later merged. |
| `5b925c14c27cb5ae1a695ad48e6191eb3f4eaa00` | 2022-08-29 | `Merge remote-tracking branch 'origin/master'` | merge | Combined the `FHIR-29954` downloads/specification change with the `FHIR-34528` GOM Section 09/publication caveat. |
| `d4a14dd4e859f769c94ba9154b2be7255bc3c6f4` | 2022-09-22 | `Add section Promoting Interoperability (FHIR-25089)` | semantic guidance | Added the new CC0/public-domain mission paragraph. |
| `6521f07bd26637710cf04cc8753d5e5e7c0d7e7b` | 2022-09-22 | `Fix TODO warnings to show up in Disclaimers section` | mechanical/editorial | Moved the STU warning before "Promoting Interoperability" and normalized whitespace/line endings. |
| `56a635cea5e5fd1271db44961429a40dea50b3e2` | 2023-03-14 | `license clarifications` | semantic guidance/editorial | Bolded CC0 and substantially rewrote trademark guidance; introduced/preserved current editorial defects. |
| `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | 2025-10-31 | `normative changes for R6` | metadata/template | Changed page header and removed the old STU-warning paragraph. |
| `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | 2025-11-03 | `FHIR-44047` | editorial only | Added comma in `e.g., as part of the product name`. |

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-28295` - "Update copyright and other details on 'Using LOINC with FHIR' page"; Published, Persuasive with Modification, Vocab, applied for R5. Resolution says to remove `LOINC is copyright 1995-2020...` and replace with a reference to `terminology.hl7.org/CodeSystem-v3-loinc.html`. Comments note that the text for the LOINC copyright value comes from `license.html#loinc` and "presumably we'd also want to change that text to match." This is the strongest evidence for a current license-page problem because the R6 page still has the hard-coded 1995-2020 text.
- `FHIR-34528` - "Reference to GOM - wrong section?"; Published, Persuasive, FHIR-I, applied for R5. Description says the license page points to GOM Section 16, but IP-related content is Section 09; resolution says to change to "Section 9, as of the time this release was published." Current lines 44-48 and 67 reflect this.
- `FHIR-29954` - "Out of date / ambiguous licence information"; Published, Persuasive, FHIR-I, applied for R5. Resolution: add the Downloads hyperlink, change section number, and change "the document" to "the specification." Current lines 44-53 reflect the intended clarification.
- `FHIR-25089` - "License page doesn't convey the spirit of the open FHIR license"; Published, Persuasive, FHIR-I, applied for R5. Resolution text matches the current "Promoting Interoperability" section at lines 27-35. Jira comment links PR `HL7/fhir#2417`.
- `FHIR-44047` - "Incorrect punctuation of exempli gratia and id est (e.g., & i.e.,) throughout"; Resolved - change required, FHIR-I, R6 ballot. The only page-specific effect in the requested diff is `e.g. as` -> `e.g., as`, which is editorial.

### Other Jira issues that plausibly explain the same page concept

- `FHIR-44925` - "Add some clarifications to the trademark license information"; Resolved - change required, Persuasive, vote 2025-12-15, related URL `https://www.hl7.org/fhir/license.html#trademark`, related page `FHIR-core-license`. Description cites the 2024 Zulip trademark thread and asks for examples explaining "trademark use" vs "non-trademark use"; resolution says, "We will add a section with some examples with an explanation of usage." No `source/license.html` commit after 2025-11-03 implements this in the R6 ballot4 tree.

### Context-only Jira hits that should not drive action

- `FHIR-3385` appeared in a broad `LOINC copyright license page` Jira search as an old FHIR license context issue. It does not explain the R4 -> R6 ballot4 page changes reviewed here.
- `FHIR-47124`, `FHIR-47125`, and `FHIR-47126` appeared in the same broad search, but they are AU IG issues and not evidence for the FHIR core license page.

## Zulip evidence

- `#social > Improving license page` (2022-09-13, https://chat.fhir.org/#narrow/stream/social/topic/Improving%20license%20page) is the informal rationale for `FHIR-25089`. Vadim proposed making the page less legalistic and more explicit about FHIR's CC0/open-license spirit. Josh suggested wording close to the final text and noted the "Promoting Interoperability" heading could be confused with a CMS program, but the thread still treated it as an additional paragraph. The applied page text is consistent with this thread.
- `#implementers > Trademark question about text to include` (2024-03-04 to 2024-03-08, https://chat.fhir.org/#narrow/stream/implementers/topic/Trademark%20question%20about%20text%20to%20include) is later evidence about the trademark section. Paul Lynch pointed out that the current license page and the Confluence FHIR Trademark Policy did not agree on the exact notice text. Grahame answered that the license page text should be used, then clarified what he meant by trademark vs non-trademark use. Paul suggested examples; Grahame agreed examples would be useful; Paul then filed `FHIR-44925`.
- Quoted Zulip FTS searches for `FHIR-25089`, `FHIR-29954`, `FHIR-34528`, `FHIR-28295`, and `FHIR-44047` returned no results. The unquoted forms failed with SQLite FTS parse errors because of the hyphen in Jira keys.

## Confluence evidence

- VOC minutes `120756184` (2021-08-11) reference `FHIR-28295` and record "Agree - resolved change required - removing specific copyright information from page." This supports the Jira resolution away from hard-coded LOINC copyright details, though the meeting was for the LOINC page; Jira comments bridge this to `license.html#loinc`.
- FHIR-I WGM minutes `113673765` (2021-05) reference `FHIR-29954` and record that the hyperlink can be fixed and wording should change from "document" to "specification"; the current page implements this.
- FHIR-I WGM minutes `108316158` (2022-09 Baltimore) reference `FHIR-25089`, noting that Vadim added proposed language for the license page and the group would change "healthcare" to "health care"; the current first occurrence uses "health care interoperability" and the section otherwise follows the voted text.
- FHIR-I minutes `413043627` (2025-12-15) reference `FHIR-44925` and record a persuasive 10-0-0 vote. This is direct meeting evidence for adding trademark examples, not yet reflected in the current source page.
- Confluence page `82906463` "FHIR Trademark Policy" is a background policy page. It states it is a copy of a master document stored elsewhere and only editable by the HL7 CTO or FHIR Product Director. It has notice text that differs from the license page; the later Zulip thread says the license page text is the one to use, so this is context rather than a direct action against `license.html`.

## Timeline

| Date | Clock | Evidence |
|---:|---|---|
| 2019-10-30 | Jira created | `FHIR-25089` created against STU3 license page. |
| 2020-04-06 | Confluence/FHIR-I | FHIR-I initially noted the license page already links to CC0 and assigned `FHIR-25089` to Vadim for clarification. |
| 2020-08-19 | Source commit/Jira created | `8cd675bf1d83dc4d58f66a7f54c5bad6c838c083` updated LOINC notice; `FHIR-28295` was created the same day. |
| 2021-05-24 | Jira/Confluence vote | `FHIR-29954` resolved persuasive, vote 30-0-0; FHIR-I minutes support hyperlink/specification wording. |
| 2021-08-11 | Jira/Confluence vote | `FHIR-28295` resolved persuasive with modification, vote 3-0-0; VOC minutes say to remove specific LOINC copyright information. |
| 2021-12-20 to 2022-08-27 | Source commits | `f2c2aab`, `11717b1`, and `c92dc70` implemented `FHIR-34528`/GOM Section 09 wording. |
| 2022-08-28 to 2022-08-29 | Source commits | `6279cde` and merge `5b925c1` implemented `FHIR-29954` alongside `FHIR-34528`. |
| 2022-09-13 | Zulip discussion | `#social > Improving license page` produced wording for `FHIR-25089`. |
| 2022-09-20 | Jira/Confluence vote | `FHIR-25089` resolved persuasive, vote 14-0-0. |
| 2022-09-22 | Source/PR merge | `d4a14dd` added Promoting Interoperability; PR https://github.com/HL7/fhir/pull/2417 merged the same day. |
| 2023-03-14 | Source commit | `56a635c` rewrote trademark guidance and introduced/preserved current editorial defects. |
| 2024-03-04 to 2024-03-08 | Zulip discussion | `#implementers > Trademark question about text to include` identified need for clarifying examples. |
| 2024-03-08 | Jira created | `FHIR-44925` filed for trademark examples. |
| 2025-10-31 | Source commit | `270e0ce` made R6 metadata/template changes and removed STU warning. |
| 2025-11-03 | Source commit | `887bc23` applied `FHIR-44047` punctuation tweak. |
| 2025-12-15 | Jira/Confluence vote | `FHIR-44925` resolved persuasive, vote 10-0-0. |
| 2025-12-18 | Publication/source boundary | Newer source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd` is "bump version for publication"; no `source/license.html` commit after the `FHIR-44925` vote was found. |

## Evidence log

- Read required methodology: `SKILL.md`; read relevant command guidance from `jira/README.md`, `zulip/README.md`, `confluence/README.md`, and `spec/README.md`.
- Page boundary:
  - `test -f "$OLD_TREE/source/license.html" && echo "old exists"`
  - `test -f "$NEW_TREE/source/license.html" && echo "new exists"`
- Direct diff:
  - `git -C "$NEW_TREE" --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/license.html`
- Source history:
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/license.html`
  - `git -C "$NEW_TREE" --no-pager show --stat --patch <commit> -- source/license.html`
  - `git -C "$NEW_TREE" --no-pager blame -L 67,92 -- source/license.html`
  - `git -C "$NEW_TREE" --no-pager log --all --date=short --format='%H%x09%ad%x09%s' --grep='FHIR-44925' -- source/license.html` returned no implementation commit.
- Full page read:
  - `wc -l "$NEW_TREE/source/license.html" "$OLD_TREE/source/license.html"` returned 126 and 111 lines.
  - New page read at `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/license.html:1-126`.
- Jira snapshots:
  - `bun run jira:search snapshot FHIR-28295`
  - `bun run jira:search snapshot FHIR-34528`
  - `bun run jira:search snapshot FHIR-29954`
  - `bun run jira:search snapshot FHIR-25089`
  - `bun run jira:search snapshot FHIR-44047`
  - `bun run jira:search snapshot FHIR-44925`
- Jira searches:
  - `bun run jira:search fts "\"FHIR always include\"" --limit 10` returned no results.
  - `bun run jira:search fts "\"trademark use\" examples license" --limit 10` found `FHIR-44925`.
  - `bun run jira:search fts "LOINC copyright license page" --limit 20` found `FHIR-28295` plus unrelated/context-only IG issues.
- Zulip searches/snapshots:
  - `bun run zulip:search fts "\"Improving license page\"" --limit 20` found `#social > Improving license page`.
  - `bun run zulip:search snapshot social "Improving license page"`
  - `bun run zulip:search fts "\"FHIR Trademark\"" --limit 20` found `#implementers > Trademark question about text to include`.
  - `bun run zulip:search snapshot implementers "Trademark question about text to include"`
  - Quoted Jira-key searches returned no results; unquoted key searches failed due FTS parsing.
- Confluence searches/snapshots:
  - `bun run confluence:search refs jira FHIR-28295`, `FHIR-29954`, `FHIR-25089`, `FHIR-44047`, `FHIR-44925`
  - `bun run confluence:search fts "\"FHIR Trademark Policy\"" --kind any --limit 20`
  - `bun run confluence:search snapshot 120756184`
  - `bun run confluence:search snapshot 113673765`
  - `bun run confluence:search snapshot 108316158`
  - `bun run confluence:search snapshot 413043627`
  - `bun run confluence:search snapshot 82906463`
- Current-tree cross-checks:
  - `rg -n "LOINC is copyright|terminology.hl7.org/CodeSystem-v3-loinc|loinc.org/license|LOINC.*registered" "$NEW_TREE/source"` found the hard-coded LOINC statement only in `source/license.html` and an unrelated RDF link to the THO LOINC CodeSystem.

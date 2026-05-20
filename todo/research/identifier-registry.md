# identifier-registry research appendix

## Scope and coverage

- Page path: `source/identifier-registry.html`
- Compared `R4 4.0.1` source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` with `R6 ballot4 6.0.0-ballot4` source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Old tree: `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`
- New tree: `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`
- Page boundary: present in both trees; old page has 74 lines, new page has 45 lines.
- The newer R6 ballot4 source page was read end-to-end.
- Direct diff: 69 changed lines, with 20 insertions and 49 deletions. The substantive change is removal of the inline identifier registry table and replacement with guidance pointing to HL7 Terminology/TSMG.
- Source history: 9 commits touched the page in the requested range. Explicit Jira keys found in page-specific commits: `FHIR-37494`, `FHIR-25431`, `FHIR-35932`, `FHIR-44047`.
- Jira/Zulip/Confluence searched by explicit Jira keys and distinctive phrases from the changed text. Promising snapshots were taken for `FHIR-35932`, `FHIR-37494`, `FHIR-25431`, `FHIR-44047`, the Zulip NAIC Identifier.system thread, and relevant Confluence minutes/policy pages.
- Caveats: the R6 standards-status commit `270e0ceb...` and TSMG-link commit `71f5602...` have no Jira key in the commit/PR body. Exact Confluence search for the link text `Terminology Expectations in FHIR` returned no page title, but the source shortlink `https://confluence.hl7.org/x/LKOZCQ` resolves to Confluence page `161063724`, currently titled `Terminology Expectations for IG Developers`.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | Current R6 page metadata | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/identifier-registry.html:16-17` | Page is now owned by Vocab and marked Informative. |
| Source | Current THO preference rule | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/identifier-registry.html:20-27` | Replaces the old local registry rule with THO SHOULD/SHALL guidance and a hard-coded FHIR R5 example. |
| Source | Current shared identifier guidance | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/identifier-registry.html:29-40` | Adds local/shared identifier distinction and points to TSMG policy. |
| Source | Old R4 registry table | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/identifier-registry.html:19-66` | Shows the removed fallback list, implementation note, RFC 3986 row, and generated `<%identifierlist%>` table. |
| Commit | Main migration commit | `f40fc710c34b0106cdc391d3ef696f746e83749c`; https://github.com/HL7/fhir/commit/f40fc710c34b0106cdc391d3ef696f746e83749c | Implements `FHIR-35932`; removes the table and adds THO/HTA guidance. |
| PR | Main migration PR | https://github.com/HL7/fhir/pull/2347 | PR containing `f40fc710...`; merged 2022-09-04. PR body lists unrelated keys, so the commit/Jira are better evidence for this page. |
| Jira | `FHIR-35932` | https://jira.hl7.org/browse/FHIR-35932; local snapshot command: `bun run jira:search snapshot FHIR-35932` | Formal rationale: identifier registry content migrated to HL7 Terminology; table removed after cross-checking. |
| Commit | R6 standards status change | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`; https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Broad R6 normative-status commit changes page from Trial Use/FHIR-I/FMM3 to Informative/Vocab. |
| PR | R6 standards status PR | https://github.com/HL7/fhir/pull/3901 | Contains broad `normative changes for R6`; no page-specific Jira found. |
| Commit | TSMG policy link update | `71f5602acf06ad7fe0f46052ca1c6b477311c1ae`; https://github.com/HL7/fhir/commit/71f5602acf06ad7fe0f46052ca1c6b477311c1ae | Replaces HTA reference/link with TSMG and `Terminology Expectations...` link. |
| PR | TSMG policy link PR | https://github.com/HL7/fhir/pull/4001 | Merged 2025-12-16; title says it applies the 2025-12-15 TSMG Main Call changes. |
| Confluence | 2025-12-15 TSMG minutes | https://confluence.hl7.org/spaces/TSMG/pages/413241175/2025-12-15+TSMG+Agenda+and+Minutes; local snapshot command: `bun run confluence:search snapshot 413241175` | Records vote to change Known Identifier Systems references from HTA to TSMG and to reference Terminology Expectations policy. Also notes policy should be broadened to all implementers. |
| Confluence | Terminology Expectations target page | https://confluence.hl7.org/spaces/TSMG/pages/161063724/Terminology+Expectations+for+IG+Developers; source shortlink `https://confluence.hl7.org/x/LKOZCQ` | The current source link resolves here, despite the page text labeling it `Terminology Expectations in FHIR`. |
| Confluence | External identifier process page | https://confluence.hl7.org/spaces/TA/pages/111123488/Validating+and+Requesting+Identifiers+for+External+Code+Systems+and+Identifier+Systems; local snapshot command: `bun run confluence:search snapshot 111123488` | Current TSMG/HTA process evidence for external code/identifier system URI requests. |
| Zulip | NAIC Identifier.system thread | https://chat.fhir.org/#narrow/stream/implementers/topic/Identifier.system%20for%20NAIC%20code%3F; local snapshot command: `bun run zulip:search snapshot implementers "Identifier.system for NAIC code?"` | Later discussion shows real implementer confusion about THO identifier requirements, IG scope, and release timing. |
| Zulip | Lloyd quotes page rule | message id `445447512`; likely URL `https://chat.fhir.org/#narrow/stream/179166-implementers/topic/Identifier.2Esystem.20for.20NAIC.20code.3F/near/445447512` | Says the requirement to use assigned URI is not limited to HL7-published guides and quotes the page wording. |
| Zulip | Ambiguity raised | message id `445468856`; likely URL `https://chat.fhir.org/#narrow/stream/179166-implementers/topic/Identifier.2Esystem.20for.20NAIC.20code.3F/near/445468856` | Asks whether the page says anything about IGs or which core release controls required THO identifiers. |
| Zulip | Lloyd clarification | message id `445497849`; likely URL `https://chat.fhir.org/#narrow/stream/179166-implementers/topic/Identifier.2Esystem.20for.20NAIC.20code.3F/near/445497849` | Clarifies R4 implementers only require identifiers published by that time, but IGs should not use identifiers absent from THO. |
| Confluence | FHIR-I vote on `FHIR-35932` | https://confluence.hl7.org/spaces/FHIRI/pages/90345037/FHIR+Infrastructure+Minutes+CC+2022-02-07; `bun run confluence:search snapshot 90345037` | Records `FHIR-35932` persuasive-with-modification vote 22-0-0. |
| Confluence | Vocab support for `FHIR-35932` | https://confluence.hl7.org/spaces/VOC/pages/90344804/2022-02-03+Vocab+WG+Call+Agenda+Minutes; `bun run confluence:search snapshot 90344804` | Vocab supported moving identifier systems to THO and noted each entry needed to become a NamingSystem. |

## Change summary

### Substantive/normative

- The R4 page was a Trial Use FHIR-I registry page with FMM 3 and an inline table. The R6 page is an Informative Vocab-owned page with no FMM row.
- The old R4 rule said that names/URIs listed on this page `SHALL` be used in preference to other identifiers and gave a fallback list for unlisted systems: HL7 OID Registry, identifier documentation, owner consultation, and HL7 vocabulary mailing list.
- The R6 page says THO provides the active registry. It changes the rule to: THO URIs `SHOULD` be preferred generally, while URIs defined in THO before an official FHIR core release `SHALL` be used. The concrete example remains FHIR R5-specific.
- The R6 page adds a new local/shared identifier distinction. Local identifiers are generally managed by the issuing system; shared identifiers not in THO should follow the TSMG process, with a `SHALL` for HL7 international published specifications.
- The inline known-identifier table and generated `<%identifierlist%>` were removed. This also removed the R4 visible `urn:ietf:rfc:3986` row and the generated identifier entries.

### Semantic guidance

- R6 redirects authoritative identifier-system maintenance to HL7 Terminology (`terminology.hl7.org/identifiers.html`) instead of the core FHIR page.
- The fallback process moved from informal sources (OID registry/docs/owner/mailing list) to TSMG policy.
- The page now distinguishes local identifiers from shared identifiers and states that shared identifiers need consistent URIs.

### Example/table change

- `FHIR-37494` added a sentence defining the table `Type` column, but this has no current R6 page effect because `FHIR-35932` later removed the whole table.

### Metadata/template/navigation

- `d7b8dad...` removed the outer `div.col-12` wrapper and normalized the footer include.
- `270e0ceb...` changed the status table from Trial Use/FHIR-I/FMM3 to Informative/Vocab.
- `55017c7...` changed the THO link target from the THO root to `http://terminology.hl7.org/identifiers.html`.
- `71f5602...` replaced the old HTA process link with TSMG and the Confluence shortlink for Terminology Expectations.

### Editorial/mechanical

- `FHIR-25431` changed `data type` to `datatype`.
- `FHIR-44047` changed `I.e.` to `i.e.,`.
- Several changes are broad template/status/punctuation churn rather than page-specific policy decisions.

## Source history

| Date | Commit | Subject | Classification | Notes |
|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | `update html template` | mechanical/template | Removed wrapper div and adjusted footer include. |
| 2022-08-18 | `423ca82214db3fb202981dea37a93eda930d8274` | `FHIR-37494 Define known identifier table Type column` | substantive clarification, later superseded | Added a `Type` column explanation for the old table. PR https://github.com/HL7/fhir/pull/2202. |
| 2022-08-18 | `2164932efc3e1210494f88c1ee70c46423093434` | `FHIR-37494 Define known identifier table Type column` | editorial fix | Fixed `hef` to `href` in the added sentence. PR https://github.com/HL7/fhir/pull/2202. |
| 2022-08-31 | `8592e1207273b786db340efb927bb6d1dc9756c9` | `FHIR-25431 Inconsistent use of "datatype" vs. "data type"` | editorial | Changed two occurrences of `data type` to `datatype`. |
| 2022-09-03 | `f40fc710c34b0106cdc391d3ef696f746e83749c` | `FHIR-35932 - Updated identifier registry to point to UTG` | substantive | Removed inline registry/table and replaced it with THO/HTA policy guidance. PR https://github.com/HL7/fhir/pull/2347. |
| 2023-02-24 | `55017c7f96a4fe7e8a3f3d08718be0ba56799699` | `more qa` | link fix | Pointed THO link to `/identifiers.html`. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | `normative changes for R6` | metadata/standards status | Changed page status to Informative and responsible owner to Vocab. PR https://github.com/HL7/fhir/pull/3901. |
| 2025-11-03 | `887bc2383fb7b429cfafd64a46bdfc0c40c5b627` | `FHIR-44047` | editorial | Changed `I.e.` to `i.e.,`. PR https://github.com/HL7/fhir/pull/3951. |
| 2025-12-16 | `71f5602acf06ad7fe0f46052ca1c6b477311c1ae` | `... Replaced references to the former HL7 Terminology Authority (HTA) with the HL7 Terminology Services Management Group (TSMG).` | policy-link update | Replaced HTA wording/link with TSMG and the Terminology Expectations link. PR https://github.com/HL7/fhir/pull/4001. |

Pickaxe checks:

- `git log -S "registered URIs approved for use" -- source/identifier-registry.html` points to `f40fc710...`.
- `git log -S "release of FHIR R5" -- source/identifier-registry.html` points to `f40fc710...`.
- `git log -S "Identifier Type" -- source/identifier-registry.html` points to `423ca822...` and its removal in `f40fc710...`.
- `git log -S "HL7 Terminology Authority" -- source/identifier-registry.html` points to `f40fc710...` and replacement in `71f5602...`.

## Jira evidence

### Explicit Jira keys from commits/patches

- `FHIR-35932` (`Published`, `Persuasive with Modification`, Applied for R5) is the main rationale. The description says THO release 3.0.0 supports Identifier System records and the identifier table content should be removed from core FHIR. The resolution changes the text to THO SHOULD/SHALL preference language and says the table should be removed after the previous identifiers are cross-checked. Comments record Vocab support, THO cross-checking, and Lloyd's final source commit `f40fc710c3`.
- `FHIR-37494` (`Published`, `Persuasive with Modification`, Applied for R5) asked to define the old table `Type` column. The requested sentence was added in August 2022 but was removed less than three weeks later when `FHIR-35932` removed the table.
- `FHIR-25431` (`Published`, `Persuasive`) is a broad wording consistency issue for `datatype` vs `data type`; no substantive page consequence.
- `FHIR-44047` (`Resolved - change required`, `Persuasive`) is a broad punctuation correction for `e.g.,`/`i.e.,`; the page-specific change is editorial only.

### Other Jira issues that plausibly explain or contextualize the same changed text

- `FHIR-46185` is not a core page issue, but it documents a later real-world consequence of the identifier-system policy. It was created from the Zulip NAIC thread and says a US Core `Identifier.system` was not listed in THO External Identifier Systems. Resolution: create entry in THO and use as proposed; later comments say THO defined the same OID, so no net guide change.

### Context-only Jira hits not used as action drivers

- Jira FTS for `"identifier registry" UTG` also found `FHIR-27035`, `FHIR-15512`, and `FHIR-26437`. They are about identifier registry entries or related terminology but did not explain this page's R4-to-R6 change.
- Exact phrase searches for `"registered URIs approved for use"` and `"HL7 Terminology Authority" "shared" "identifier"` did not find additional Jira evidence.

## Zulip evidence

- No Zulip hits were found for exact quoted Jira keys `FHIR-35932`, `FHIR-37494`, `FHIR-25431`, or `FHIR-44047`.
- Exact phrase search for `"registered URIs approved for use"` found no Zulip results.
- Search for `"systems claiming conformance to FHIR R5"` found the 2024-06 `#implementers > Identifier.system for NAIC code?` thread. Snapshot: `bun run zulip:search snapshot implementers "Identifier.system for NAIC code?"`.
- In that thread:
  - Lloyd McKenzie said an OID in the HL7 OID registry is not automatically the correct `Identifier.system`; TSMG/THO should decide the FHIR URI.
  - Nick Radov asked whether the Identifier.system documentation should be updated to make the requirement clear.
  - Lloyd said the THO-assigned URI requirement is not limited to HL7-published guides and quoted the current page's THO SHOULD/SHALL text (message id `445447512`).
  - Elliot Silver then noted the quoted text "says nothing about IGs, or about which release of the core spec" and asked how to read it for a current US Core release based on R4 (message id `445468856`).
  - Lloyd clarified that R4 implementers are only required to use identifiers published at that time, though they should use current THO identifiers; IGs should not use anything absent from THO (message id `445497849`).
- This thread is later than the original R5 migration and does not prove a formal unresolved core Jira, but it is strong evidence that the current page wording is confusing in practice.

## Confluence evidence

- `90344804` (`2022-02-03 Vocab WG Call Agenda/Minutes`) records Vocab discussion of `FHIR-35932`: the identifier registry should be removed and migrated to HL7 Terminology; each entry needed a new NamingSystem; Vocab wanted FHIR-I approval before R5 freeze.
- `90345037` (`FHIR Infrastructure Minutes CC 2022-02-07`) records the formal `FHIR-35932` persuasive-with-modification motion: Grahame Grieve/Reuben Daniels, 22-0-0.
- `101353610` (`Teleconference 2022-05-05`, Terminology Authority) records the proposed policy for identifier systems from Lloyd via `FHIR-35932`, including international/US-realm identifiers going through HTA and HL7 International specifications treating the process as SHALL.
- `111123488` (`Validating and Requesting Identifiers for External Code Systems and Identifier Systems`) is the policy/process page for validating/requesting external code system and identifier system identifiers. The snapshot says the process was approved by Vocab/TSMG at the May WGM and by TSC e-vote on 2022-06-20.
- `413241175` (`2025-12-15 TSMG Agenda and Minutes`) records the decision behind PR 4001/commit `71f5602...`: for `Known Identifier Systems`, change HTA references to TSMG and reference the Terminology Expectations policy for Identifier Systems. The same minutes also say the Terminology Expectations policy's "first part" is the same for all audiences and "needs to be broadened to all implementers", with target audiences including all implementers, IG publishers, and HL7 IG authors.
- `161063724` is the current Confluence target for the shortlink used in the source page. It is titled `Terminology Expectations for IG Developers` and says all product families are assumed to be covered, but its framing is still IG-development oriented.
- `441126104` (`Process to Request External Code System or Identifier System Identifiers and Metadata Records in THO`) documents how to initiate UP Jira requests for external content records, including identifiers, and says the IG Publisher can validate the identifier once the THO proposal is implemented.

## Timeline

- 2020-01-09: `FHIR-25431` created for `datatype`/`data type` consistency.
- 2022-02-03: Vocab minutes support migrating identifier registry content to THO and request FHIR-I approval (`FHIR-35932`).
- 2022-02-07: FHIR-I votes `FHIR-35932` persuasive with modification, 22-0-0.
- 2022-05-05: Terminology Authority minutes record initial identifier-system policy language derived from `FHIR-35932`.
- 2022-08-18: `FHIR-37494` table Type-column explanation added, then link typo fixed.
- 2022-09-03/04: `f40fc710...` removes the table and adds THO/HTA guidance; PR 2347 merges 2022-09-04.
- 2023-02-24: THO link target adjusted to `/identifiers.html`.
- 2024-06-17 to 2024-06-20: Zulip NAIC thread exposes confusion around THO identifier requirements, release timing, and IG scope.
- 2024-06-20: `FHIR-46185` created for US Core NAIC Identifier.system not registered in THO.
- 2025-10-31/2025-11-02: R6 normative-status commit/PR changes this page to Informative/Vocab.
- 2025-12-15: TSMG minutes approve changing Known Identifier Systems references from HTA to TSMG and referencing Terminology Expectations policy; minutes also note policy should be broadened to all implementers.
- 2025-12-16: `71f5602...` and PR 4001 apply the TSMG wording/link update to this page and `terminologies.html`.

## Evidence log

- Boundary check:
  - `test -f "$OLD_TREE/source/identifier-registry.html"` -> old exists.
  - `test -f "$NEW_TREE/source/identifier-registry.html"` -> new exists.
  - `wc -l` -> 74 old lines, 45 new lines.
- Direct diff:
  - `git -C "$NEW_TREE" --no-pager diff --find-renames "$OLD_COMMIT" "$NEW_COMMIT" -- source/identifier-registry.html`
  - Established table removal, THO/TSMG guidance addition, status table change, and editorial churn.
- History:
  - `git -C "$NEW_TREE" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' "$OLD_COMMIT..$NEW_COMMIT" -- source/identifier-registry.html`
  - Established 9 page-touching commits.
  - `git show --stat --patch <commit> -- source/identifier-registry.html` inspected each relevant commit patch.
- PR lookup:
  - `gh api /repos/HL7/fhir/commits/<sha>/pulls` found PRs 2202, 2347, 3901, 3951, and 4001.
  - `gh pr view <pr> --repo HL7/fhir --json ...` checked titles, bodies, and merge dates.
- Jira:
  - `bun run jira:search snapshot FHIR-35932`, `FHIR-37494`, `FHIR-25431`, `FHIR-44047`; later `FHIR-46185`.
  - Focused FTS searched exact changed phrases and THO/TSMG terms. One Jira FTS query containing `Identifier.system` failed with an FTS syntax error near `.`, so it was not used as evidence.
- Zulip:
  - Initial unquoted `FHIR-35932` style FTS searches failed due FTS parsing of hyphenated keys; quoted key searches returned no results.
  - `bun run zulip:search fts '"systems claiming conformance to FHIR R5"' --limit 20` found the NAIC thread.
  - `bun run zulip:search snapshot implementers "Identifier.system for NAIC code?"` captured the full thread.
  - `bun run zulip:search sql ...` retrieved message IDs `445447512`, `445468856`, and `445497849`.
- Confluence:
  - `bun run confluence:search refs jira FHIR-35932` and FTS found Vocab, FHIR-I, and TA pages.
  - `bun run confluence:search snapshot 90344804`, `90345037`, `101353610`, `111123488`, `413241175`, `441126104`, and `161063724` captured policy/minutes pages.
  - `curl -sSIL https://confluence.hl7.org/x/LKOZCQ | grep -i '^location:'` confirmed the source shortlink resolves to `/spaces/TSMG/pages/161063724/Terminology+Expectations+for+IG+Developers`.

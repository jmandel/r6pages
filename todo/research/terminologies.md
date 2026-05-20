# terminologies research appendix

## Scope and coverage

- Page path: `source/terminologies.html`.
- Older version/source: R4 4.0.1, commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26`, tree `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1`.
- Newer version/source: R6 ballot4 6.0.0-ballot4, commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`, tree `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5`.
- Boundary: page exists in both trees; detected status is modified, not added/deleted/renamed.
- Page read: the R6 ballot4 page was read end-to-end. The new page has 810 lines; the old page has 618 lines.
- Source history: 56 commits touched this page between the two commits. Commit metadata for those commits contained 70 unique `FHIR-#####` keys.
- Jira coverage: every explicit Jira key found in the page-touching commit metadata was snapshotted to `/tmp/terminologies-jira-snapshots.txt`; the most relevant keys are summarized below.
- Zulip coverage: searched explicit Jira keys first, then distinctive changed phrases such as additional bindings, required binding meaning, legacy data, `FHIR-39056`, and `FHIR-40249`. Useful snapshots are in `/tmp/terminologies-zulip-searches.txt`, `/tmp/terminologies-zulip-key-redo.txt`, and `/tmp/terminologies-zulip-extra-snapshots.txt`.
- Confluence coverage: searched explicit Jira keys and terminology/TSMG phrases. Useful output is in `/tmp/terminologies-confluence-searches.txt` and `/tmp/terminologies-confluence-snapshots.txt`.
- Caveats: this was bounded review, not an exhaustive audit of all terminology-related Jira issues. Some early Zulip full-text searches using unquoted Jira keys failed because hyphens were parsed by SQLite FTS; the key searches were rerun quoted. Exact Confluence FTS for `"Terminology Expectations in FHIR"` found no result, but related TSMG pages were found by TSMG/canonical-CodeSystem terms.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source | R6 page | `fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies.html` | Current text reviewed end-to-end. |
| Source | R4 page | `fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/terminologies.html` | Comparison baseline. |
| Source lines | Datatype list and `#strings` link | R6 `source/terminologies.html:76-94` | Contains CodeableReference typo and a link to a non-rendering `#strings` anchor. |
| Source lines | TSMG/THO choosing-system rule | R6 `source/terminologies.html:152-155` | R6 now says THO canonical CodeSystem URL SHALL be used, otherwise follow TSMG process. |
| Source lines | Binding and additional binding properties | R6 `source/terminologies.html:203-249` | New combined binding/additional-binding overview; also contains grammar defect in multiple-required-bindings note. |
| Source lines | Binding strengths/additional purposes table | R6 `source/terminologies.html:400-489` | Main semantic change: required/extensible/preferred plus additional-only purposes are now in one table. |
| Source lines | Required binding rule for `code` | R6 `source/terminologies.html:517-522` | Implements FHIR-39056/FHIR-46350 direction for required binding on `code` with discouraged maximum exception. |
| Source lines | Extensible binding rules | R6 `source/terminologies.html:568-667` | Major rewritten guidance for extensible binding; includes repeated `inexpressable` typo and extension-related rules. |
| Source lines | Preferred/example binding rules for `code` | R6 `source/terminologies.html:688-714` | Implements FHIR-40248/FHIR-40249/FHIR-40431 direction. |
| Source lines | Conformance expectations and legacy data | R6 `source/terminologies.html:733-773` | Captures FHIR-23707/FHIR-25183/FHIR-50652 themes. |
| Source lines | Commented-out string section | R6 `source/terminologies.html:790-800` | The `name="strings"` anchor is inside an HTML comment, so the earlier `#strings` link is broken. |
| Commit | `b0172dd266bc5061422826c714e77a6d3c559296` | https://github.com/HL7/fhir/commit/b0172dd266bc5061422826c714e77a6d3c559296 | R5 vocabulary batch including several non-VSDP terminology page changes. |
| Commit | `9500b398d1d850a06cd180c82ce330e4809a2b49` | https://github.com/HL7/fhir/commit/9500b398d1d850a06cd180c82ce330e4809a2b49 | R5 vocab batch; added support/minValueSet guidance reflected later in current expectations. |
| Commit | `2d9feb5dd157d4192cc025587141fe1ba677128a` | https://github.com/HL7/fhir/commit/2d9feb5dd157d4192cc025587141fe1ba677128a | FHIR-16485 code system version/code component clarification. |
| Commit | `25395f9580db54e0300d46d1daeeb13852bd5284` | https://github.com/HL7/fhir/commit/25395f9580db54e0300d46d1daeeb13852bd5284 | FHIR-29968 extensible-binding rewrite. |
| Commit | `3946ca05fe4e7e6dc76c35ed333f46f9fe23dece` | https://github.com/HL7/fhir/commit/3946ca05fe4e7e6dc76c35ed333f46f9fe23dece | Added part of FHIR-31385 required-binding extension-bypass clarification. |
| Commit | `d7b4a4ab88bf349b2676663058b2feac97292280` | https://github.com/HL7/fhir/commit/d7b4a4ab88bf349b2676663058b2feac97292280 | Added FHIR-35891 multi-type binding clarification. |
| Commit | `ab0ada522243d1ecd280228fc660c8628115a383` | https://github.com/HL7/fhir/commit/ab0ada522243d1ecd280228fc660c8628115a383 | Removed the just-added FHIR-31385 and FHIR-35891 paragraphs while applying other tickets. |
| Commit | `20773ceb3e13dbd52890f695c523c2b7e6cddada` | https://github.com/HL7/fhir/commit/20773ceb3e13dbd52890f695c523c2b7e6cddada | FHIR-25183 legacy data guidance. |
| Commit | `d917880aaa526463777455d7f4e1c55ccb8b7217` | https://github.com/HL7/fhir/commit/d917880aaa526463777455d7f4e1c55ccb8b7217 | FHIR-39056 first required-binding/code wording and invariant attempt. |
| Commit | `f685fbdd61c050ebcd97fd7542e63ea27da4d3a6` | https://github.com/HL7/fhir/commit/f685fbdd61c050ebcd97fd7542e63ea27da4d3a6 | FHIR-39056 follow-up wording after invariant problems. |
| Commit | `925343cccb699b2f591da39ec4476733b4b85ee8` | https://github.com/HL7/fhir/commit/925343cccb699b2f591da39ec4476733b4b85ee8 | FHIR-40248 example binding guidance for `code`. |
| Commit | `4733fa461f609c5e24ffcf5ec3f63036d78e4f2a` | https://github.com/HL7/fhir/commit/4733fa461f609c5e24ffcf5ec3f63036d78e4f2a | FHIR-40249 preferred binding guidance for `code`. |
| Commit | `39f96b21ce99bacf7b3e31f80a12ef5791172147` | https://github.com/HL7/fhir/commit/39f96b21ce99bacf7b3e31f80a12ef5791172147 | FHIR-40431 and other tickets; changed preferred wording from SHOULD to "encouraged". |
| Commit | `8e42147627e60f1a7ffea32bc4c6d0c319cf5234` | https://github.com/HL7/fhir/commit/8e42147627e60f1a7ffea32bc4c6d0c319cf5234 | FHIR-46626/FHIR-46350 alignment for min/max/additional binding text. |
| Commit | `887db9c2c12efdd27eebcb6a9726df8d931fe75d` | https://github.com/HL7/fhir/commit/887db9c2c12efdd27eebcb6a9726df8d931fe75d | FHIR-46606 removed the visible "Unbound" section. |
| Commit | `6020c64093feff8e901f22dcfbbdf4a587f48428` | https://github.com/HL7/fhir/commit/6020c64093feff8e901f22dcfbbdf4a587f48428 | FHIR-48479 combined binding and additional-binding descriptions. |
| Commit | `d0e80632fe9e21d7ffb13eabdbb70a2d1ddd68c1` | https://github.com/HL7/fhir/commit/d0e80632fe9e21d7ffb13eabdbb70a2d1ddd68c1 | FHIR-50652 replaced deprecated minValueSet-extension guidance with additional binding purpose `minimum`. |
| Commit | `71f5602acf2b96a45e581f8172a05963c9eb00aa` | https://github.com/HL7/fhir/commit/71f5602acf2b96a45e581f8172a05963c9eb00aa | TSMG/Choosing-a-system rewrite. |
| Jira | FHIR-31385 | https://jira.hl7.org/browse/FHIR-31385; reopen with `bun run jira:search snapshot FHIR-31385` | Resolved decision to add required and extensible extension-bypass clarification. Current page does not retain it generally. |
| Jira | FHIR-35891 | https://jira.hl7.org/browse/FHIR-35891; reopen with `bun run jira:search snapshot FHIR-35891` | Resolved decision to document bindings on choice/multiple-type elements. Current page no longer contains that paragraph. |
| Jira | FHIR-23707 | https://jira.hl7.org/browse/FHIR-23707; reopen with `bun run jira:search snapshot FHIR-23707` | Explains that required/extensible binding does not mean all codes in the value set are supported. |
| Jira | FHIR-25183 | https://jira.hl7.org/browse/FHIR-25183; reopen with `bun run jira:search snapshot FHIR-25183` | Basis for legacy/external data guidance. |
| Jira | FHIR-27144 | https://jira.hl7.org/browse/FHIR-27144; reopen with `bun run jira:search snapshot FHIR-27144` | Required-binding expansion mutability; current page has related note at lines 782-786. |
| Jira | FHIR-29948 | https://jira.hl7.org/browse/FHIR-29948; reopen with `bun run jira:search snapshot FHIR-29948` | Code-system selection guidance later superseded/simplified by TSMG wording. |
| Jira | FHIR-29968 | https://jira.hl7.org/browse/FHIR-29968; reopen with `bun run jira:search snapshot FHIR-29968` | Main extensible-binding rewrite rationale. |
| Jira | FHIR-39056 | https://jira.hl7.org/browse/FHIR-39056; reopen with `bun run jira:search snapshot FHIR-39056` | Required binding on `code` and invariant history. |
| Jira | FHIR-40248 / FHIR-40249 / FHIR-40431 | https://jira.hl7.org/browse/FHIR-40248, https://jira.hl7.org/browse/FHIR-40249, https://jira.hl7.org/browse/FHIR-40431 | Example/preferred binding guidance for `code`; current page appears aligned. |
| Jira | FHIR-46350 | https://jira.hl7.org/browse/FHIR-46350; reopen with `bun run jira:search snapshot FHIR-46350` | Align required/maximum/additional bindings; current page applies concept but has grammar defects. |
| Jira | FHIR-46606 | https://jira.hl7.org/browse/FHIR-46606; reopen with `bun run jira:search snapshot FHIR-46606` | Removed "Unbound" section. |
| Jira | FHIR-48479 | https://jira.hl7.org/browse/FHIR-48479; reopen with `bun run jira:search snapshot FHIR-48479` | Combined bindings and additional bindings in one section. |
| Jira | FHIR-50652 | https://jira.hl7.org/browse/FHIR-50652; reopen with `bun run jira:search snapshot FHIR-50652` | Replaces minValueSet-extension text with additional binding purpose `minimum`. |
| Zulip | Required binding meaning | https://chat.fhir.org/#narrow/stream/terminology/topic/required%20binding%20meaning%20for%20source%20system | Rationale for FHIR-23707/minimum-value-set expectations. Reopen with `bun run zulip:search snapshot terminology "required binding meaning for source system"`. |
| Zulip | Additional binding guidance | https://chat.fhir.org/#narrow/stream/terminology/topic/Additional%20binding%20guidance | Lloyd noted FHIR-25183 text was being placed on `terminologies.html` rather than Best Practices. |
| Zulip | Choice/multiple-type binding | https://chat.fhir.org/#narrow/stream/implementers/topic/Binding%20element%20with%20a%20choice%20of%20types | Background for FHIR-35891. Reopen with `bun run zulip:search snapshot implementers "Binding element with a choice of types"`. |
| Zulip | FHIR-39056 | https://chat.fhir.org/#narrow/stream/fhir%2Finfrastructure-wg/topic/FHIR-39056 | Shows invariant was removed because corner cases produced many errors. |
| Zulip | FHIR-40249 | https://chat.fhir.org/#narrow/stream/terminology/topic/FHIR-40249 | Notes FHIR-40249 led to FHIR-40431 language consistency fix. |
| Confluence | Choosing system text | https://confluence.hl7.org/spaces/TSMG/pages/144994679/Terminology+Expectations+for+IG+Developers+Draft+For+TSC+Consideration | Related TSMG policy source for current THO/TSMG rules. Found via TSMG/canonical-CodeSystem search. |
| Confluence | FHIR-29948 draft text | https://confluence.hl7.org/spaces/VOC/pages/97471061/Updated+text+for+Using+Codes+Selecting+a+Code+System+Identifier | Detailed R5 draft for code-system identifier selection. Reopen with `bun run confluence:search snapshot 97471061`. |
| Confluence | FHIR-29968 minutes | https://confluence.hl7.org/spaces/VOC/pages/90351067/May+2022+-+HL7+WGM+-+Wednesday+Q5+Minutes | Vocab WGM discussion on extensible binding semantics. |
| Confluence | FHIR-25183 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/101362827/FHIR+Infrastructure+Minutes+CC+2022-05-16 | FHIR-I discussion of legacy/current data and additional bindings. |
| Confluence | FHIR-35891 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/134942010/FHIR+Infrastructure+Minutes+CC+2022-07-18 | Meeting evidence for multi-type binding decision. |
| Confluence | FHIR-46350 minutes | https://confluence.hl7.org/spaces/FHIRI/pages/256518372/FHIR+Infrastructure+Minutes+CC+2024-08-05 | Required/additional binding alignment; later reopened in Jan 2025 WGM page 281219681. |
| Confluence | FHIR-48479/FHIR-46606 minutes | `bun run confluence:search snapshot 358264274` and `bun run confluence:search snapshot 358265833` | Vocab 2025 minutes for combined binding section and removing "Unbound". |

## Change summary

### Code-system identifiers and terminology governance

- Category: substantive/normative and semantic guidance.
- R6 now says that if a code system is listed in THO, the canonical CodeSystem URL SHALL be used, and otherwise the TSMG process described in "Terminology Expectations in FHIR" SHALL be followed (`source/terminologies.html:152-155`). This is a significant simplification/replacement of earlier HTA/UTG-oriented wording and is tied to commit `71f5602acf2b96a45e581f8172a05963c9eb00aa`.
- FHIR-16485 clarified that a code is a full tuple including code, system, and sometimes version. Related wording appears in the code-system/value-set discussion and was applied by `2d9feb5dd157d4192cc025587141fe1ba677128a`.
- FHIR-35963 changed SNOMED CT expression display guidance; the current page retains explicit SNOMED-expression/display guidance.

### Binding model and additional bindings

- Category: substantive/normative and semantic guidance.
- The R6 page substantially restructures "Controlling the use of Coded Values" around `ElementDefinition.binding` and `ElementDefinition.binding.additional` (`source/terminologies.html:203-249`).
- Binding strengths and additional-binding purposes now appear in one table (`source/terminologies.html:400-489`). This implements the FHIR-48479 direction to describe bindings and additional bindings together.
- Additional binding purposes now include `required`, `extensible`, `preferred`, `component`, deprecated `maximum`, `minimum`, `candidate`, `current`, `ui`, and `starter`.
- FHIR-46350 alignment is visible in the note about multiple applicable required bindings (`source/terminologies.html:246-249`) and the discouraged maximum exception for `code` (`source/terminologies.html:517-522`), though the note has grammar/punctuation defects.
- FHIR-50652 replaced deprecated minValueSet-extension text with additional binding purpose `minimum` guidance (`source/terminologies.html:733-743`, `source/terminologies.html:788`).

### Required and extensible binding conformance

- Category: substantive/normative and semantic guidance.
- The R6 page has detailed current rules for required binding and required use with `code` (`source/terminologies.html:514-564`), with the FHIR-39056/46350 maximum-binding exception at lines 517-522.
- The extensible-binding section was heavily rewritten, including human-review language, more-general concept handling, data-type-specific summary rules, CodeableReference concept handling, profiling constraints, and valueSet-reference extension guidance (`source/terminologies.html:568-667`).
- FHIR-31385 is a notable intent/application gap: Jira resolved to add explicit extension-bypass paragraphs to both required and extensible sections. Commit `3946ca05fe4e7e6dc76c35ed333f46f9fe23dece` added only the required paragraph, and commit `ab0ada522243d1ecd280228fc660c8628115a383` removed it the next day while applying other tickets. The current page only has a narrower legacy-data note saying a required-bound element cannot be sent "not even with an extension" if no mapping is possible (`source/terminologies.html:749-756`), not the general data-absent-reason clarification requested by FHIR-31385.
- FHIR-35891 is another notable intent/application gap: Jira resolved to document that a binding on an element with multiple types applies to all bindable types and that type-specific bindings can use the alternate-bindings extension. Commit `d7b4a4ab88bf349b2676663058b2feac97292280` added that paragraph; `ab0ada522243d1ecd280228fc660c8628115a383` removed it the next day. The current page no longer mentions multiple-type bindings or alternate-bindings.

### Preferred and example binding guidance

- Category: substantive/normative and semantic guidance.
- FHIR-40248 and FHIR-40249 added guidance that example and preferred binding strengths SHALL NOT be used with the `code` datatype because a `code` instance cannot specify the system URL for a value outside the bound value set.
- FHIR-40431 adjusted preferred wording away from SHOULD and toward "encouraged". The current page appears aligned (`source/terminologies.html:688-714`).

### Legacy data and conformance support

- Category: semantic guidance.
- FHIR-23707 explains that required/extensible bindings constrain allowed shared codes but do not mean every code in the value set must be supported. Current text says a minimum additional binding should identify the subset implementers must support (`source/terminologies.html:733-743`).
- FHIR-25183 added guidance for legacy/external data that cannot be mapped to bound value sets (`source/terminologies.html:746-773`). Zulip evidence shows the text was intentionally placed on `terminologies.html` after the original proposal targeted Best Practices.
- Current text distinguishes required versus extensible behavior for legacy data and suggests additional binding purpose `current` for requirements that apply only to newly captured/current data.

### Removed/restructured sections, links, and editorial churn

- Category: metadata/template/navigation, editorial, and rendering.
- FHIR-46606 removed the "Unbound" section after Vocab discussion. No visible current `#unbound` section remains.
- The page still links to `#strings` at line 94, but the `name="strings"` section is inside an HTML comment at lines 790-800. This is a concrete current-page rendering/navigation defect.
- Several visible text defects remain: "or a to a concept" in the CodeableReference row (`source/terminologies.html:82`), missing period and "in way or another" in the multiple-required-bindings paragraph (`source/terminologies.html:246-249`), repeated "inexpressable" and grammar/list defects in the extensible data-type table (`source/terminologies.html:618-647`).
- Many commits between R4 and R6 are QA, merge, template, link, or editorial commits and should not be interpreted as page-specific terminology decisions without a tied Jira/patch.

## Source history

Full page-touching history was obtained with:

```bash
git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/terminologies.html"
```

There were 56 page-touching commits. The table below keeps commits that explain meaningful current text or important churn/removals.

| Date | Commit | Label | What changed |
|---|---|---|---|
| 2019-12-19 | `080de8098c` | mechanical/structural | Defined `CanonicalResource`; page impact not a page-specific terminology decision. |
| 2019-12-31 | `4609744022` | mechanical/editorial | Removed reference implementations and tidied IG documentation. |
| 2021-03-26 | `b0172dd266bc5061422826c714e77a6d3c559296` | substantive batch | R5 vocab non-VSDP changes; includes FHIR-29948 and related terminology updates. |
| 2021-03-26 | `a160951bf0` | editorial | Fixed missing `</li>` and grammar in `terminologies.html`. |
| 2021-03-30 | `633035c38a681771dd842aabf6a90f9321529267` | substantive batch | VSD profile and vocab tickets including FHIR-26028/FHIR-30099/FHIR-29948 follow-up. |
| 2021-06-27 | `d7b8dadc62` | mechanical/template | HTML template update. |
| 2022-02-09 | `9500b398d1d850a06cd180c82ce330e4809a2b49` | substantive batch | R5 vocabulary ticket batch; support/minValueSet guidance appears in later evolved form. |
| 2022-05-20 | `f6696ef7b9` | substantive | FHIR-35963 updated SNOMED CT expression display text. |
| 2022-05-20 | `2d9feb5dd157d4192cc025587141fe1ba677128a` | substantive | FHIR-16485 code system version and code component clarification. |
| 2022-05-27 | `25395f9580db54e0300d46d1daeeb13852bd5284` | substantive | FHIR-29968 extensible binding usage notes and data-type rules. |
| 2022-08-21 | `3946ca05fe4e7e6dc76c35ed333f46f9fe23dece` | substantive/apply | FHIR-31385 added required-binding extension-bypass clarification only. |
| 2022-08-21 | `d7b4a4ab88bf349b2676663058b2feac97292280` | substantive/apply | FHIR-35891 added multiple-type binding clarification. |
| 2022-08-22 | `ab0ada522243d1ecd280228fc660c8628115a383` | problematic churn | Removed the just-added FHIR-31385 and FHIR-35891 paragraphs while applying other tickets. This drives two action findings. |
| 2022-08-31 | `8592e12072` | editorial | FHIR-25431 "datatype" versus "data type" consistency. |
| 2022-09-04 | `20773ceb3e13dbd52890f695c523c2b7e6cddada` | substantive/guidance | FHIR-25183 legacy data guidance. |
| 2022-12-05 | `1e1665b9352f33a691326fdf3079bc19865a8681` | substantive/structural | Added obligations and additional binding documentation. |
| 2022-12-08 | `a512331f23d8fd3278b3c54e4e494346d5cb90c3` | substantive/editorial | FHIR-22670 and extensibility table; commented out visible `#strings` section. |
| 2022-12-13 | `d382fc3af5` | link churn | Fixed links to build.fhir.org. |
| 2023-02-12 | `d917880aaa526463777455d7f4e1c55ccb8b7217` | substantive | FHIR-39056 required binding/code wording and invariant attempt. |
| 2023-02-13 | `925343cccb699b2f591da39ec4476733b4b85ee8` | substantive | FHIR-40248 example binding guidance for `code`. |
| 2023-02-13 | `4733fa461f609c5e24ffcf5ec3f63036d78e4f2a` | substantive | FHIR-40249 preferred binding guidance for `code`. |
| 2023-02-13 | `2050764df0` | substantive follow-up | FHIR-40249 follow-up. |
| 2023-02-13 | `0bb0f8f90b` | substantive | FHIR-27144 clarified that required-binding expansion may change. |
| 2023-02-13 to 2023-02-28 | `1bebf4b9f8`, `dad7cf37c7`, `9f78014938`, `75b928a4a5` | QA/editorial | QA wording/link adjustments, including alignment with additional-binding code system. |
| 2023-03-21 | `f685fbdd61c050ebcd97fd7542e63ea27da4d3a6` | substantive follow-up | FHIR-39056 binding language after invariant was removed. |
| 2024-07-26 | `39f96b21ce99bacf7b3e31f80a12ef5791172147` | substantive batch | FHIR-40431 and other tickets; preferred wording became "encouraged". |
| 2025-03-03 | `8e42147627e60f1a7ffea32bc4c6d0c319cf5234` | substantive | FHIR-46626 and FHIR-46350 min/max/additional binding alignment. |
| 2025-10-22 | `8244937caf` | editorial/link | Extensibility example, links, editorial improvements and typos. |
| 2025-10-31 | `270e0ceb7b`, `605a6ffefb` | normative-mechanical | Normative changes for R6; page impact should be interpreted through actual diff. |
| 2025-11-03 | `887bc2383f` | mixed | FHIR-44047; page touched, not a main driver for current action findings. |
| 2025-11-04 | `887db9c2c12efdd27eebcb6a9726df8d931fe75d` | substantive/removal | FHIR-46606 removed "Unbound" section. |
| 2025-11-04 | `6020c64093feff8e901f22dcfbbdf4a587f48428` | substantive/restructure | FHIR-48479 combined bindings and additional bindings in one section/table. |
| 2025-11-04 | `d0e80632fe9e21d7ffb13eabdbb70a2d1ddd68c1` | substantive | FHIR-50652 changed minimum conformance guidance away from deprecated minValueSet extension. |
| 2025-11-06 | `0b229b9f09` and merges | editorial/merge | Typo/merge churn. |
| 2025-12-16 | `71f5602acf2b96a45e581f8172a05963c9eb00aa` | substantive/governance | TSMG/Choosing-a-system rewrite and HTA-to-TSMG replacement. |

## Jira evidence

### Explicit Jira keys from commits/patches

The page-touching commit metadata included 70 unique FHIR keys. Most were batch-ticket context. The keys that plausibly explain meaningful `source/terminologies.html` changes are:

- FHIR-16485: clarified code system version/code component language; applied by `2d9feb5dd157d4192cc025587141fe1ba677128a`.
- FHIR-23707: required/extensible binding does not imply support for all codes; current lines 733-743 match the concept using additional binding purpose `minimum`.
- FHIR-25183: legacy/historical/external data guidance; applied by `20773ceb3e13dbd52890f695c523c2b7e6cddada`. Jira originally referenced Best Practices, but the page placement is explained by Zulip.
- FHIR-27144: required binding expansion mutability. Current "Other notes" lines 782-786 cover that valid concepts may change over time when the value set includes codes by properties and non-version-specific code-system references.
- FHIR-29948: code system selection/identifier guidance. Later TSMG text is much shorter than the original R5 draft; no direct defect found, but it should be read as updated policy rather than a literal carry-forward of the R5 draft.
- FHIR-29968: extensive extensible-binding rewrite; supported by Vocab WGM minutes and reflected in current lines 568-667.
- FHIR-31385: resolved to add both required and extensible extension-bypass paragraphs. Only the required paragraph appears to have been briefly added, then removed the next day. This is actionable.
- FHIR-35891: resolved to document bindings on elements with multiple types. Added, then removed next day. This is actionable.
- FHIR-35963: SNOMED CT expression display guidance; current page appears aligned.
- FHIR-39056: corrected required binding/code rule and invariant. Zulip shows invariant was too hard; current text documents the rule and exception rather than an invariant.
- FHIR-40248, FHIR-40249, FHIR-40431: preferred/example binding guidance for `code`; current text appears aligned.
- FHIR-46350: required/additional/maximum binding alignment. Current text is semantically present, but has visible editorial defects.
- FHIR-46606: removed "Unbound" section; no current problem found beyond history.
- FHIR-48479: combined primary/additional binding section; current page implements it.
- FHIR-50652: replace minValueSet extension references with additional binding purpose `minimum`; current page implements it.

### Other Jira issues that plausibly explain the same changed text

- FHIR-48333 appears in later Zulip context around `languages`/`all-languages`, but it is about Citation and not a direct `terminologies.html` page-change driver.
- FHIR-41000 appears in Confluence context as effectively covered by FHIR-46350; no independent page action found here.

### Context-only Jira hits not used for action

- Many commit-batch keys touch adjacent terminology resources, examples, templates, or generated output but do not explain a current `terminologies.html` issue. These were not elevated to the action file.
- Jira workflow/status cleanup and publication metadata were not treated as actionable unless the page text itself showed an implementation problem.

## Zulip evidence

- `#terminology > required binding meaning for source system`: relevant to FHIR-23707 and the distinction between allowed codes and supported codes. Current lines 733-743 reflect this direction.
- `#argonaut > US Core:Extensible and Required bindings for historical data`: background for FHIR-25183 and why legacy/historical data guidance matters.
- `#terminology > Additional binding guidance`: Lloyd McKenzie said FHIR-25183 was agreed for Best Practices but "doesn't really fit there", so he placed proposed text at `terminologies.html#legacy` and alerted Vocab. This supports the page placement of current legacy guidance.
- `#implementers > Binding element with a choice of types`: background for FHIR-35891; supports that the missing current text was responding to a real implementer ambiguity.
- `#fhir/infrastructure-wg > FHIR-39056`: Grahame Grieve said the invariant caused hundreds of validation errors and was removed; this explains why current page has wording but not necessarily an invariant.
- `#terminology > FHIR-40249`: one message notes FHIR-40249 revealed a language inconsistency, leading to FHIR-40431.
- Later `additional bindings` discussion in 2026 suggests ongoing questions about multiple additional bindings and `usageContext`, but it is after the R6 ballot4 boundary and was treated as background only.

## Confluence evidence

- TSMG pages found by TSMG/canonical-CodeSystem terms include "Terminology Expectations for IG Developers" variants such as page 144994679 and current page 161063724. Exact FTS for `"Terminology Expectations in FHIR"` found no result, but the current source link `https://confluence.hl7.org/x/LKOZCQ` likely targets one of these short-link pages.
- Page 97471061, "Updated text for Using Codes / Selecting a Code System Identifier", preserves detailed draft text associated with FHIR-29948.
- Page 90351067, May 2022 Vocab WGM Wednesday Q5, discusses FHIR-29968 and extensible-binding semantics, including CLD/evaluation, general versus specific concepts, and datatype-specific rules.
- Page 101362827, FHIR-I CC 2022-05-16, discusses FHIR-25183: additional-binding/current-data approaches and the "conformance theater" concern around over-specification.
- Page 134942010, FHIR-I CC 2022-07-18, references FHIR-35891 and supports the multi-type binding clarification.
- Page 256518372, FHIR-I CC 2024-08-05, discusses FHIR-46350 and aligning the strongest binding in the main binding with weaker/equivalent constraints in additional bindings. Page 281219681 records the January 2025 reopen/history and notes "Required binding SHOULD appears as primary binding" because a SHALL would be normative.
- Vocab pages 358264274 and 358265833 include FHIR-48479/FHIR-46606 discussions: combining binding sections and deciding to remove "Unbound".

## Timeline

| Date | Clock | Evidence | Meaning |
|---|---|---|---|
| 2021-05-27 | Jira vote/resolution | FHIR-31385 | FHIR-I resolved to add extension-bypass clarification for required and extensible bindings. |
| 2022-07-18 | Jira vote/resolution | FHIR-35891 | FHIR-I resolved to document bindings on multiple-type elements. |
| 2022-08-21 | Source commit | `3946ca05fe4e7e6dc76c35ed333f46f9fe23dece` | Added only the required-binding part of FHIR-31385. |
| 2022-08-21 | Source commit | `d7b4a4ab88bf349b2676663058b2feac97292280` | Added FHIR-35891 multi-type binding paragraph. |
| 2022-08-22 | Source commit | `ab0ada522243d1ecd280228fc660c8628115a383` | Removed the newly added FHIR-31385 and FHIR-35891 text while applying other tickets. |
| 2022-09-04 | Source/Zulip | `20773ceb3e13dbd52890f695c523c2b7e6cddada`; `#terminology > Additional binding guidance` | FHIR-25183 legacy data text added to terminology page; Zulip explains page-placement choice. |
| 2023-02-12 to 2023-03-21 | Source/Zulip | FHIR-39056 commits and `#fhir/infrastructure-wg > FHIR-39056` | Required binding/code wording evolved; invariant removed due validator corner cases. |
| 2023-02-13 | Source | FHIR-40248/FHIR-40249/FHIR-40431 commits | Preferred/example binding rules for `code` added and wording corrected. |
| 2024-08-05 | Confluence/Jira | FHIR-46350, page 256518372 | Required/additional binding alignment accepted. |
| 2025-01 WGM | Confluence/Jira | FHIR-46350, page 281219681 | FHIR-46350 reopened/updated; retained SHOULD/encouraged direction because normative content constrained stronger language. |
| 2025-11-04 | Source | `887db9c2c12efdd27eebcb6a9726df8d931fe75d` | "Unbound" section removed. |
| 2025-11-04 | Source | `6020c64093feff8e901f22dcfbbdf4a587f48428` | Binding and additional binding descriptions combined. |
| 2025-11-04 | Source | `d0e80632fe9e21d7ffb13eabdbb70a2d1ddd68c1` | Deprecated minValueSet-extension guidance replaced. |
| 2025-12-16 | Source | `71f5602acf2b96a45e581f8172a05963c9eb00aa` | Current THO/TSMG choosing-system language added. |

## Evidence log

- Boundary check:

```bash
test -f "fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/terminologies.html" && echo "old exists"
test -f "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/terminologies.html" && echo "new exists"
```

- Direct diff:

```bash
git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager diff --find-renames "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26" "5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/terminologies.html"
```

- Source history and commit count:

```bash
git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/terminologies.html"
git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" rev-list --count "0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26..5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/terminologies.html"
```

- Selected commit patch bundle saved at `/tmp/terminologies-selected-shows.txt`.
- Removal of FHIR-31385/FHIR-35891 checked with:

```bash
git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager show --stat --patch ab0ada522243d1ecd280228fc660c8628115a383 -- "source/terminologies.html"
git -C "fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5" --no-pager grep -n "If a binding is present on an element with multiple types" "5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd" -- "source/terminologies.html"
```

- Jira snapshots: `/tmp/terminologies-jira-snapshots.txt`; representative reopen commands:

```bash
bun run jira:search snapshot FHIR-31385
bun run jira:search snapshot FHIR-35891
bun run jira:search snapshot FHIR-25183
bun run jira:search snapshot FHIR-29968
bun run jira:search snapshot FHIR-39056
bun run jira:search snapshot FHIR-46350
bun run jira:search snapshot FHIR-48479
bun run jira:search snapshot FHIR-50652
```

- Zulip searches/snapshots: `/tmp/terminologies-zulip-searches.txt`, `/tmp/terminologies-zulip-key-redo.txt`, `/tmp/terminologies-zulip-extra-snapshots.txt`. Important failed search note: unquoted `FHIR-#####` FTS searches failed with SQLite "no such column" errors; quoted forms succeeded.

```bash
bun run zulip:search fts "\"FHIR-35891\"" --limit 20
bun run zulip:search snapshot implementers "Binding element with a choice of types"
bun run zulip:search snapshot terminology "required binding meaning for source system"
bun run zulip:search snapshot terminology "Additional binding guidance"
bun run zulip:search snapshot "fhir/infrastructure-wg" "FHIR-39056"
```

- Confluence searches/snapshots: `/tmp/terminologies-confluence-searches.txt`, `/tmp/terminologies-confluence-snapshots.txt`.

```bash
bun run confluence:search refs jira FHIR-29968
bun run confluence:search snapshot 90351067
bun run confluence:search snapshot 101362827
bun run confluence:search snapshot 134942010
bun run confluence:search snapshot 256518372
bun run confluence:search fts "\"Terminology Expectations in FHIR\"" --kind any --limit 20
bun run confluence:search fts "TSMG process canonical CodeSystem URL" --kind any --limit 20
```

- Full R6 page read in chunks with `wc -l` and `sed -n` over the entire file. The source locators in this appendix point to the final read.

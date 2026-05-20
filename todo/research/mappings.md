# mappings research appendix

## Scope and coverage
- Page path: `source/mappings.html` (`mappings`). Compared R4 4.0.1 source commit `0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26` with R6 ballot4 6.0.0-ballot4 source commit `5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd`.
- Page boundary confirmed: `source/mappings.html` exists in both local source trees:
  - old: `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/mappings.html`
  - new: `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mappings.html`
- The newer R6 ballot4 source page was read end-to-end after diff/history/community checks; it is 39 lines. The mapping guidance prose and `[%mappings-table%]` placeholder are unchanged from R4.
- Direct diff size: 6 changed lines (`2 insertions(+), 4 deletions(-)`). Source-history commits touching this page between the two commits: 2. Explicit Jira keys in the page-touching commit subjects/bodies: none.
- Jira searches performed for exact changed/header phrases and mapping-page phrases. Snapshotted context candidates `FHIR-55949` and `FHIR-39289`; neither explains a `source/mappings.html` change.
- Zulip searches performed for candidate Jira keys, PR URLs, exact changed phrases, and mapping-page terms. Snapshotted `#committers > Mappings to other standards`, `#IG creation > IG Publisher uses HAPI to retrieve old workgroup names`, and context-only `#conformance > Context for Normative Version`.
- Confluence searches performed for candidate Jira keys, exact changed phrases, PR URLs, and mapping-page terms. Snapshotted relevant Jira-key minutes pages `453908693` and `161061640`. Exact mapping-page phrase searches found no Confluence evidence.
- Caveats: PR bodies for `HL7/fhir#1295` and `HL7/fhir#3901` used the default template and did not list Jira tracker numbers. `bun run zulip:search fts FHIR-55949` and `FHIR-39289` failed when unquoted because FTS parsed the hyphenated key; quoted retries succeeded. A broad Confluence snapshot for one `Responsible Owner` hit was too large to use as evidence; it was not relied on.

## Quick links and locators

| Kind | Label | Locator/link | Why it matters |
|---|---|---|---|
| Source file | R4 page | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/4.0.1-0da2a0a84dc1/source/mappings.html` lines 13-37 | Old page has `col-12` wrapper, `Maturity Level: n/a`, and original WG label. |
| Source file | R6 ballot4 page | `.cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5/source/mappings.html` lines 15-35 | New page has the updated owner/status header; mapping prose/table are unchanged. |
| Diff command | Direct page diff | `git -C .cache/fhir-spec-search/trees/source/hl7.fhir.core/6.0.0-ballot4-5d67a34a13a5 --no-pager diff --find-renames 0da2a0a84dc1493b0605f2a987aaeaa8cb4a3c26 5d67a34a13a58961296ccac9dd9d63e1fe4fdbdd -- source/mappings.html` | Establishes only header/template changes in this page. |
| Commit | Template wrapper removal | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` / https://github.com/HL7/fhir/commit/d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a | Removes the page-level `col-12` wrapper as part of a broad HTML template update. |
| PR | HTML template PR | https://github.com/HL7/fhir/pull/1295 | Associated PR for `d7b8dad`; merged 2021-06-26, default PR body, no Jira key. |
| Commit | R6 metadata/header update | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` / https://github.com/HL7/fhir/commit/270e0ceb7b029dad4ca0fc5ccf5296ff370888cd | Changes header row to `Responsible Owner` and removes `Maturity Level: n/a` for this page. |
| PR | R6 normative batch PR | https://github.com/HL7/fhir/pull/3901 | Associated PR for `270e0c`; merged 2025-11-02, broad 63-commit batch, default PR body, no page-specific Jira key. |
| Jira | `FHIR-55949` snapshot | `bun run jira:search snapshot FHIR-55949` / https://jira.hl7.org/browse/FHIR-55949 | Exact `Responsible Owner` wording hit, but about Devices workgroup name in 2026, after R6 ballot4; context-only. |
| Jira | `FHIR-39289` snapshot | `bun run jira:search snapshot FHIR-39289` / https://jira.hl7.org/browse/FHIR-39289 | Maturity-level context hit; retracted profile-overview issue, not this page. |
| Zulip | Mapping-policy discussion | `bun run zulip:search snapshot committers "Mappings to other standards"` / https://chat.fhir.org/#narrow/stream/committers/topic/Mappings%20to%20other%20standards | 2025 discussion confirms core mappings are conceptual/definitional, not operational conversion guidance. |
| Zulip | Workgroup-name context | `bun run zulip:search snapshot "IG creation" "IG Publisher uses HAPI to retrieve old workgroup names"` | Mentions `FHIR-55949`; context for workgroup display/name cleanup, not the mappings page. |
| Confluence | Devices minutes for `FHIR-55949` | `bun run confluence:search snapshot 453908693` | Confirms `FHIR-55949` needed a FHIR Core workgroup-name update after R6 ballot4; not causal for this page diff. |
| Confluence | FHIR-I minutes for `FHIR-39289` | `bun run confluence:search snapshot 161061640` | Confirms `FHIR-39289` was proposed for retraction; not a mappings-page driver. |
| Spec metadata | Version dates | `bun run spec:resolve hl7.fhir.core 4.0.1`; `bun run spec:resolve hl7.fhir.core 6.0.0-ballot4` | R4 package date 2019-10-30; R6 ballot4 package date 2025-12-18. |

## Change summary

### Page-level mapping guidance and table placeholder — no substantive change
- Category: mechanical/noise for this review; not substantive/normative, not semantic guidance, not an example change.
- The three visible mapping-guidance paragraphs and `[%mappings-table%]` are textually unchanged. The page still says mappings are informative, not authoritative/normative, and require local validation before production use.

### HTML wrapper removal — metadata/template/navigation
- Category: mechanical/template churn.
- R4 had an outer `<div class="col-12">` around the page body. Commit `d7b8dad` removed that wrapper and closing tag in this and 211 other files as part of `update html template` / PR `#1295`.
- No mapping semantics changed.

### Header/status row update — metadata/template/navigation
- Category: metadata/template/navigation; not a mapping-content change.
- R4 header: `FHIR Work Group`, `Maturity Level: n/a`, `Standards Status: Informative`.
- R6 ballot4 header: `Responsible Owner: FHIR Work Group`, `Standards Status: Informative`.
- Commit `270e0c` made this one-line change as part of a broad R6 batch (`normative changes for R6` / PR `#3901`). The page remains Informative. No evidence found that the omission of `Maturity Level: n/a` was page-specific or intended to change mapping maturity/status semantics.

## Source history

| Date | Commit | Subject | Page change | Classification | Keys / PRs / notes |
|---|---|---|---|---|---|
| 2021-06-27 | `d7b8dadc6213c055f4daa62a9f6f5de3eeaa7f7a` | `update html template` | Removes `<div class="col-12">` and closing `</div>` from `source/mappings.html`. | Mechanical/template; broad churn. | 212 files touched. Associated PR `HL7/fhir#1295` merged 2021-06-26; PR body lists no Jira key. |
| 2025-10-31 | `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd` | `normative changes for R6` | Changes the page metadata row to `Responsible Owner: ... Work Group` and drops the `Maturity Level: n/a` cell. | Metadata/template/navigation; broad R6 batch, not mapping prose. | 351 files touched. Associated PR `HL7/fhir#3901` merged 2025-11-02; PR body lists no page-specific Jira key. |

## Jira evidence

### Explicit keys
- None found in the direct page diff, the two page-touching commit subjects/bodies, or the associated PR bodies for the page-touching commits.

### Plausible issues checked
- No Jira issue was found that plausibly caused a substantive `source/mappings.html` change. The only page diff is template/header metadata.

### Context-only hits
- `FHIR-55949` (`The name used for the Devices workgroup is incorrect`) matched `Responsible Owner`. Snapshot shows it concerns old/new Devices workgroup names for DeviceMetric/DeviceAlert and related resource-list display, created 2026-02-24 and resolved 2026-04-22. It post-dates R6 ballot4 and does not touch/explain `source/mappings.html`.
- `FHIR-39289` (`Differentiate between normative/spec and informative profiles`) matched maturity-level terms. Snapshot shows it was retracted and concerned profile overviews, not the mappings page.
- Searches for `"Mappings to Other Standards"` returned resource-specific mapping issues such as DeviceMetric/DeviceAlert/ImagingStudy mapping corrections. They did not indicate a change to this page's source prose or header.
- Searches for `"source/mappings.html"`, `"none of the mappings are authoritative"`, `"other standards" mappings authoritative normative`, `"Mappings to Other Standards" R6`, and `"mappings" "Responsible Owner"` found no Jira issue explaining this page diff.

## Zulip evidence

- `#committers > Mappings to other standards` (2025-07-23) is relevant background, not source-change causality. Participants discussed whether mappings to third-party standards belong in core. Lloyd McKenzie described core mappings as less precise than formal IG mappings; Grahame Grieve described them as definitional rather than operational; Elliot Silver summarized that mappings are still added/maintained at a conceptual or high level. This supports the current page's cautionary/informative framing and does not contradict the unchanged prose.
- `#IG creation > IG Publisher uses HAPI to retrieve old workgroup names` (2026-02-19 to 2026-02-26) mentions `FHIR-55949`; it is context for workgroup-name display problems, not a mappings-page issue.
- `#conformance > Context for Normative Version` (2020-03-25 to 2020-05-20) mentions `Maturity Level: N/A` for CodeSystem `$lookup` metadata and led to other technical-correction keys; it is context-only and not about `source/mappings.html`.
- Quoted searches for `"FHIR-39289"`, `"source/mappings.html"`, `"mappings are informative"`, `"none of the mappings are authoritative"`, `"HL7/fhir/pull/1295"`, and `"HL7/fhir/pull/3901"` produced no useful page-specific hits.

## Confluence evidence

- `FHIR-55949` references were found in Devices minutes. Snapshot `453908693` (2026-04-22 Devices Main Call) says `FHIR-55949` needs an update in FHIR Core and separately mentions ongoing discussion involving display of workgroups, affiliates, and other parties in IG Publisher and other locations. This supports that `Responsible Owner`/workgroup display has broader context, but it is after the R6 ballot4 package date and does not explain this page diff.
- `FHIR-39289` references were found in FHIR-I minutes. Snapshot `161061640` (2023-03-27) says the issue was proposed to be retracted but Jira workflow did not allow it. This reinforces that the maturity-level search hit is context-only.
- Confluence FTS for `"Mappings to Other Standards"`, `"mappings are informative"`, `"none of the mappings are authoritative"`, `"source/mappings.html"`, `"HL7/fhir/pull/1295"`, and `"HL7/fhir/pull/3901"` found no page-specific minutes, agendas, or publication requests.

## Timeline

| Date | Clock | Event | Evidence / relevance |
|---|---|---|---|
| 2019-10-30 | Publication boundary | R4 4.0.1 package date. | `bun run spec:resolve hl7.fhir.core 4.0.1`; old page has wrapper, `Maturity Level: n/a`, original WG label. |
| 2021-06-26 | PR merge | `HL7/fhir#1295` merged. | Associated with `d7b8dad`; default PR body, no Jira key. |
| 2021-06-27 | Source commit | `d7b8dad` removes page wrapper. | Broad HTML template commit touching 212 files. |
| 2022-10-17 / 2023-01-26 / 2023-03-27 | Jira/context | `FHIR-39289` created, resolved/retracted, and discussed in FHIR-I minutes. | Context-only maturity-level hit; not mappings page. |
| 2025-07-23 | Zulip discussion | `#committers > Mappings to other standards`. | Background discussion supports conceptual/informative mapping framing; no source commit linkage found. |
| 2025-10-31 | Source commit | `270e0c` updates page header metadata row. | Broad R6 batch touching 351 files; no explicit page Jira key. |
| 2025-11-02 | PR merge | `HL7/fhir#3901` merged. | Associated PR for `270e0c`; default PR body, many commits, no page-specific rationale. |
| 2025-12-18 | Publication boundary | R6 ballot4 package date. | `bun run spec:resolve hl7.fhir.core 6.0.0-ballot4`; new page retains unchanged mapping prose. |
| 2026-02-24 / 2026-04-22 | Later Jira/context | `FHIR-55949` created/resolved for Devices workgroup name display. | Exact `Responsible Owner` wording hit, but later and unrelated to mappings page. |

## Evidence log

- Read `SKILL.md` and relevant READMEs: `jira/README.md`, `zulip/README.md`, `confluence/README.md`, `spec/README.md` to follow the required search/snapshot methodology and FTS caveats.
- Confirmed page boundary with `test -f` for both old/new paths; both exist.
- Counted file lengths with `wc -l`: old 41 lines, new 39 lines.
- Ran direct diff: `git -C <newtree> --no-pager diff --find-renames <old> <new> -- source/mappings.html`; established 2 insertions/4 deletions limited to wrapper and header row.
- Ran source history: `git -C <newtree> --no-pager log --reverse --date=short --format='%H%x09%ad%x09%s' <old>..<new> -- source/mappings.html`; found exactly two page-touching commits.
- Inspected both page-touching commits with `git show --stat --patch`; established broad mechanical/template character and exact page hunks.
- Queried GitHub associated PRs with `gh api repos/HL7/fhir/commits/<sha>/pulls` and `gh pr view -R HL7/fhir`; found PR `#1295` and PR `#3901`, both with default bodies and no page-specific Jira key.
- Ran Jira FTS searches: `"Responsible Owner"`, `"Maturity Level" "n/a"`, `"Mappings to Other Standards"`, `"mappings are informative"`, `"mappings table"`, `"source/mappings.html"`, `"none of the mappings are authoritative"`, `"other standards" mappings authoritative normative`, `"Mappings to Other Standards" R6`, and `"mappings" "Responsible Owner"`.
- Snapshotted Jira candidates `FHIR-55949` and `FHIR-39289`; both were context-only and not causal for this page.
- Ran Zulip FTS searches for exact page phrases, candidate keys, and PR URLs. Unquoted `FHIR-55949`/`FHIR-39289` failed due FTS hyphen parsing; quoted retries succeeded (`FHIR-55949` found one IG-creation context thread; `FHIR-39289` found none).
- Snapshotted Zulip threads: `committers / Mappings to other standards`, `IG creation / IG Publisher uses HAPI to retrieve old workgroup names`, and `conformance / Context for Normative Version`.
- Ran Confluence FTS and refs searches for exact page phrases, candidate keys, and PR URLs; snapshotted pages `453908693` and `161061640` for context. Mapping-page phrase searches found no direct Confluence evidence.
- Resolved version metadata with `bun run spec:resolve hl7.fhir.core 4.0.1` and `bun run spec:resolve hl7.fhir.core 6.0.0-ballot4`.
- Re-read the full newer `source/mappings.html` after community searches; confirmed no reader-facing mapping prose/table change.

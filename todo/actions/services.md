# services actionable findings

## Summary

The page has 2 actionable findings: one status/conformance cleanup gap after the R6 Informative change, and one set of concrete pre-existing editorial defects noticed during the full-page read.

## High-signal findings

### H-001: Informative page still has uppercase MAY conformance language

- Priority: P2
- Category: overlooked-problem
- Evidence: newer `source/services.html:18` marks the page `Informative`; newer `source/services.html:390-391` says `Services that exchange resources MAY choose...`; commit `270e0ceb7b029dad4ca0fc5ccf5296ff370888cd`; Confluence page `358879917` says `services.html` should be made informative and remove/reframe the `SHOULD maintain resource identity` conformance-language sentence.
- Problem: The R6 change removes the uppercase `SHOULD` sentence but leaves an uppercase `MAY` in the same area. Searches found no Jira/Zulip/Confluence evidence that this remaining conformance keyword was consciously reviewed.
- Why it matters: Readers may still interpret the Informative services page as carrying conformance permissions, undercutting the stated reason for the status/wording change.
- Recommended next step: Ask FHIR-I/editorial owners to either lower-case/reword this sentence or document why this particular uppercase `MAY` is intentional on an Informative page.

### E-001: Pre-existing reader-facing typos and incomplete sentence remain

- Priority: P3
- Category: editorial
- Evidence: newer `source/services.html:54-55` (`that can be deployed that can be used`), `:306` (`error handing`), and `:346` (`event processing needed in complex.`).
- Problem: The current page contains obvious wording defects, including an incomplete sentence in the Orchestration section.
- Why it matters: These defects reduce readability on a guidance page that was otherwise touched for R6 cleanup.
- Recommended next step: File or bundle an editorial correction to remove the duplicated phrase, fix `error handling`, and complete/reword the line-346 sentence.

## Intent-vs-implementation mismatches

- H-001 is a possible mismatch/gap: the recorded intent was to make the page Informative and remove/reframe conformance language, but an uppercase `MAY` remains without found rationale.

## Overlooked or newly noticed problems

- E-001 lists concrete pre-existing editorial defects visible in the current page and not covered by the tracked changes.

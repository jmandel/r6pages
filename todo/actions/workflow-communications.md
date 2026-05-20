# workflow-communications actionable findings

## Summary
One actionable finding: the R6 ballot4 pattern list in `workflow-communications.html` reflects the intended Option I removal/renumbering, but the target `workflow-management.html` anchors/headings do not. This creates wrong or broken navigation and exposes obsolete workflow guidance.

## High-signal findings

### H-001 Pattern list links I/J/K do not match workflow-management targets
- **Priority:** P1
- **Category:** Intent-vs-implementation mismatch; semantic guidance/navigation
- **Evidence:** `workflow-communications.html` lines 561-573 list Option I = Messaging (`#optioni`), Option J = Service request (`#optionj`), and Option K = Combining (`#optionk`). Current `workflow-management.html` has duplicate `#optioni` anchors, no `#optionj`, `#optionk` = Service request, and `#optionl` = Combining. Commit `d6445217`/PR #3363 intended to remove old Option I and renumber later options.
- **Problem:** Following the communications-page list can land on the obsolete sub-Task Option I, a missing Option J anchor, or the wrong Option K content.
- **Why it matters:** Implementers can be sent to the wrong workflow pattern, and the “remove option which abuses the meaning of Task” change is only partially realized.
- **Recommended next step:** Reconcile `workflow-management.html` with the `d6445217` intended state (remove old sub-Task Option I; unique `optioni/optionj/optionk` anchors for Messaging/Service/Combining), or explicitly revert the communications-page list if the WG decides to retain old I-L numbering. Also review external Workflow Pattern Examples links if renumbering is retained.

## Intent-vs-implementation mismatches
H-001 covers the material mismatch found.

## Overlooked or newly noticed problems
None found beyond H-001.

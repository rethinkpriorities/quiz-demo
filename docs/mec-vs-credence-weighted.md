# MEC vs Credence-Weighted Parliament

These are two distinct calculation methods in the codebase. Both use the same underlying worldview scores (from `_computeWorldviewMarginalValues`) and the same iterative budget allocation loop, but they differ in **how each increment of budget is assigned**.

## Credence-Weighted Parliament

**Code:** `voteCredenceWeightedCustom` in `marcusCalculation.js`

Each worldview independently picks its favorite project. The increment is then **split proportionally** across worldviews based on credence.

```
For each increment:
  For each worldview:
    Find that worldview's best project
    Give it (credence × increment) dollars
```

Key properties:
- Each worldview controls its own share of the budget — a worldview with 60% credence directs 60% of each increment
- **Naturally diversifies**, because different worldviews can send their share to different projects
- The magnitude of utility scores doesn't matter — only the rank order within each worldview (which project is best)

## Maximum Expected Choiceworthiness (MEC)

**Code:** `voteMec` in `marcusCalculation.js`

Computes a single weighted sum of utility scores across all worldviews for each project. The **entire increment** goes to the one project with the highest expected score.

```
For each increment:
  For each project:
    expectedScore = sum(credence[i] × score[i][project]) across all worldviews
  Give the full increment to the project with the highest expectedScore
```

Key properties:
- Winner-take-all per round — no splitting
- Raw utility magnitudes matter — a worldview producing scores of 1000 will outweigh one producing scores of 10, even with equal credence
- Treats utilities for all worldviews as if they fall on the same scale
- Tends to concentrate funding in a single project

## When they diverge: an example

Suppose two worldviews and three projects:

| Project | Worldview A (60% credence) | Worldview B (40% credence) |
|---------|---------------------------|---------------------------|
| Animal Welfare | 100 | 5 |
| Malaria | 80 | 50 |
| AI Safety | 10 | 500 |

Worldview B produces much larger numbers for its top pick (AI Safety = 500) because it sees enormous potential value in reducing existential risk.

### Credence-Weighted result

Each worldview picks its best and gets its proportional share:
- Worldview A (60%) → best is Animal Welfare → gets 60% of the increment
- Worldview B (40%) → best is AI Safety → gets 40% of the increment

**Result: Animal Welfare 60%, AI Safety 40%.** The majority worldview's preference wins the plurality.

### MEC result

Expected scores are pooled:
- Animal Welfare: 0.6 × 100 + 0.4 × 5 = **62**
- Malaria: 0.6 × 80 + 0.4 × 50 = **68**
- AI Safety: 0.6 × 10 + 0.4 × 500 = **206**

**Result: AI Safety 100%.** Despite only 40% credence, Worldview B's much larger utility numbers dominate the weighted sum, and the entire increment goes to a single winner.

### Why they differ

The Credence-Weighted method treats each worldview as a separate voter that controls its own slice of the budget — utility magnitudes are irrelevant, only rank order matters within each worldview. MEC pools all the raw numbers together, so a worldview with larger utility scales can dominate even with minority credence.

This is by design: MEC maximizes total expected value assuming all worldviews measure value on the same scale. The Credence-Weighted method makes no such assumption.

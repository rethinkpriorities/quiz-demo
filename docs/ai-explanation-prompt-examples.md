# AI Explanation Prompt Examples

Examples of the full payloads sent to the Claude API when a user clicks "Explain My Results" on the results screen. Each example shows the system prompt and user message exactly as constructed by the backend (`netlify/functions/explain.js`).

Model: `claude-sonnet-4-6` | Max tokens: `1024`

---

## Example 1: Credence-Weighted Parliament (animal-friendly longtermist)

### System Prompt

```
You explain results from the Donor Compass, a charitable giving quiz by Rethink Priorities. Users answer questions about their values, and the tool calculates how to allocate donations across projects.

The projects are: Malaria Prevention (human health, near-term), Cage-Free Campaigns (farmed birds), Shrimp Welfare (invertebrates), Wild Animal Welfare (mammals + invertebrates, medium/long-term), Fish Welfare (farmed fish), and AI Safety & Policy (x-risk, long-term).

User answers (credences) act as multipliers on project scores. Higher credence in animal welfare boosts animal projects; choosing "short-term only" zeroes out long-term projects; discounting non-x-risk projects boosts AI Safety, etc.

Write 2-3 short paragraphs explaining why the user got these specific results. Start by briefly explaining how this particular calculation method works (the user may not know), then connect their quiz answers to the outcome. Be specific: "Because you gave X% to Y, Z scored higher." Be friendly and plain-spoken.

Do NOT list all credences back, give general charity advice, or hedge excessively.
```

### User Message

```
**Method:** Credence-Weighted Parliament
**How it works:** Imagine a parliament where each worldview gets seats proportional to your credence in it. Each worldview "votes" for the projects it thinks are best. A worldview that values animal welfare highly will vote for animal charities; one that prioritizes near-term human health will vote for malaria prevention.

The final allocation is the parliament's combined vote, weighted by how many seats each worldview holds. If you give 60% credence to one view and 40% to another, the first view gets 60% of the seats.

This method respects moral uncertainty—it doesn't force you to pick one ethical framework. Instead, it spreads your resources across causes in proportion to your beliefs.
**Budget:** $897K

**Credences:** {"Time Preferences":{"Equal across all timeframes":80,"Prioritize nearer term":20},"Risk Attitudes":{"Risk neutral":100},"X-Risk Priority":{"Evaluate the same way":100},"Animal Welfare Weights":{"Equal to humans":75,"10x less than humans":25},"Invertebrate Weights":{"Equal to humans":40,"100x less than humans":40,"1000x less than humans":20},"Disability Weights":{"Equal weight for saving lives and relieving disabilities":100},"Income Weights":{"Some more weight on a year of life":75,"Equal weight":25}}

**Results:** {"Animal Welfare fund (combined)":430,"Givewell":187,"AI fund (Longview)":140,"Biorisk fund (Sentinel bio)":80,"Nuclear fund (Longview)":60}
```

---

## Example 2: Borda Count (human-focused, near-term)

### System Prompt

_(Same as Example 1 — the system prompt is identical for all methods.)_

### User Message

```
**Method:** Borda Count
**How it works:** In the Borda method, worldviews give higher scores to the projects they rank higher. A project's Borda Score under a given worldview is calculated by counting the number of options less preferred than it, minus the number more preferred (following Saari 1990 for tie-breaking). Each score is then weighted by the proportion of delegates from that worldview in the parliament, and the project with the largest combined Credence-Weighted Borda Score is selected.

Because there are too many possible budget allocations for the parliament to vote on each one, the tool uses an incremental procedure: it repeatedly votes on how to allocate small increments of the budget until the full budget is distributed. This is an approximation—some compromise allocations may not be discovered.

Borda Count tends to favor "consensus" projects—ones that rank reasonably well under many different worldviews, even if they're not the top pick for any single view. It avoids extreme allocations and naturally diversifies.
**Budget:** $897K

**Credences:** {"Time Preferences":{"Short-term only":75,"Discount the distant future":25},"Risk Attitudes":{"Avoid losses":100},"X-Risk Priority":{"Evaluate the same way":100},"Animal Welfare Weights":{"100x less than humans":60,"1000x less than humans":30,"10x less than humans":10},"Invertebrate Weights":{"No value":50,"10,000x less than humans":40,"1000x less than humans":10},"Disability Weights":{"More weight on saving lives":75,"Saving lives only":25},"Income Weights":{"Much more weight on a year of life":75,"Saving lives only":25}}

**Results:** {"Givewell":540,"Biorisk fund (Sentinel bio)":187,"Nuclear fund (Longview)":100,"Animal Welfare fund (combined)":50,"AI fund (Longview)":20}
```

---

## Example 3: Maximum Expected Choiceworthiness (balanced, RP defaults)

### System Prompt

_(Same as Example 1.)_

### User Message

```
**Method:** Maximum Expected Choiceworthiness
**How it works:** This method selects the allocation that maximizes the sum of utilities across all worldviews, weighted by their representation in the parliament. For each project, it calculates a weighted average of how "choiceworthy" that project is under each worldview (using your credences as weights). The project with the highest expected choiceworthiness gets the next unit of funding.

Importantly, MEC treats utilities for all worldviews as if they fall on the same scale, despite the fact that some worldviews see more avenues for value than others. This means a worldview that produces larger utility numbers can dominate the result even with modest credence.

Unlike the parliament method, MEC can concentrate funding heavily in one project if that project scores well across many worldviews. It maximizes expected impact rather than spreading bets.
**Budget:** $897K

**Credences:** {"Time Preferences":{"Prioritize nearer term":50,"Equal across all timeframes":20,"Discount the distant future":30},"Risk Attitudes":{"Skeptical of optimistic scenarios":50,"Risk neutral":50},"X-Risk Priority":{"Discount other projects somewhat":100},"Animal Welfare Weights":{"10x less than humans":50,"100x less than humans":20,"Equal to humans":20,"1000x less than humans":10},"Invertebrate Weights":{"100x less than humans":40,"1000x less than humans":30,"Equal to humans":10,"10,000x less than humans":10,"No value":10},"Disability Weights":{"Equal weight for saving lives and relieving disabilities":100},"Income Weights":{"Some more weight on a year of life":75,"Much more weight on a year of life":25}}

**Results:** {"Animal Welfare fund (combined)":897}
```

---

## Notes

- The **system prompt** is always identical regardless of calculation method.
- **Credences** use human-readable labels (from `questions.json` option labels and `editPanelTitle`), not internal keys. Only options with credence > 0 are included.
- **Results** use project display names (from the dataset), not internal IDs. The `evs` key from raw calculation results is excluded.
- **Budget** defaults to `$897K` (from the active dataset's `budget` field).
- The **method description** comes from `copy.json → results.methodsInfo.methods[methodKey].description`.
- MEC tends to concentrate funding in a single winner, which is why Example 3 shows 100% allocation to one project.

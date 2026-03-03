---
call_date: YYYY-MM-DD
call_type: discovery | demo | expansion | win | loss | customer-interview | advisory | other
source: gong | apollo | salesforce | chorus | otter | fireflies | pasted | other
segment: "[maps to 01-segment-context/ folder name]"
participants:
  prospect_customer: "Name, Title, Company"
  sales_rep: "Name"
deal_stage: early | mid | late | closed-won | closed-lost | n/a
deal_outcome: "[optional — for win/loss calls: why they bought, why they didn't]"
---

# Call Debrief — [Company Name] — [Call Type] — [Date]

> **Agent instructions:** Fill every section from the raw transcript. Use exact customer language for quotes — do not paraphrase or improve their wording. Leave sections blank with "Nothing surfaced" if not applicable. Do not update any knowledge base file until the user reviews and approves the recommendations below.

---

## Exact Customer Language

*Verbatim phrases worth preserving — how customers describe their pain in their own words, not how we describe it for them. These are candidates for persona language and messaging refinement.*

| Quote | Context | Speaker Role |
|-------|---------|--------------|
| | | |

---

## Pain Points Surfaced

*What problems did the customer express? What situation are they trying to escape or avoid?*

-

---

## Competitive Alternatives Mentioned

*Every competitor, tool, or approach that came up — including "we built it ourselves," "we use spreadsheets," or status quo inertia.*

| Alternative | How It Was Framed | Outcome |
|-------------|-------------------|---------|
| | | |

---

## Objections Raised

*What pushback came up? How was it handled? What's still unresolved?*

| Objection | Response Given | Resolved? |
|-----------|----------------|-----------|
| | | |

---

## Buying Committee Signals

*What roles were present or mentioned? Who influences the decision? What do we know about the internal buying process for this deal?*

-

---

## Proof Points Deployed + Reaction

*What case studies, stats, or customer quotes did the sales rep reference? How did the prospect react? This tells us what's landing and what isn't.*

| Proof Point Used | Prospect Reaction | Resonated? |
|------------------|-------------------|------------|
| | | |

---

## Candidate Proof Points

*Things the customer said that could become a proof point, data claim, or case study quote. These are CANDIDATES ONLY — not approved for use. Needs explicit customer sign-off before adding to `07-proof-points/`.*

| Candidate Quote or Stat | Type | Approval Status |
|-------------------------|------|-----------------|
| | Quote / Metric / Outcome | Needs approval |

---

## Knowledge Base Update Recommendations

*Agent: For each section, propose specific additions or changes. Be precise — reference the file path and the exact field or section to update. Do not write to these files until the user confirms.*

### Personas (`01-segment-context/[segment]/buyer-persona-overview.md`)
*New language, updated pain points, role dynamics observed*

-

### Messaging Pillars (`01-segment-context/[segment]/messaging-pillars.md`)
*Language that resonated, language that fell flat, new angles to test*

-

### Narrative & Positioning (`01-segment-context/[segment]/narrative-and-positioning.md`)
*Competitive positioning signals, positioning gaps, new differentiation angles*

-

### Competitive Intel (`05-sales-enablement/[competitor]/`)
*New objections, updated FUD tactics, competitor claims that came up*

-

### Proof Points (`07-proof-points/`)
*Candidate quotes or metrics to submit for approval — flag file and section*

-

---

## Summary

**What we learned:** [2–3 sentences. The highest-signal PMM insight from this call — what would you tell the team at the next sync?]

**Priority update:** [The single most important knowledge base file to update based on this call, and why.]

**Pattern flag:** [Optional. If this is the 2nd or 3rd time you've seen this theme across debriefs, flag it here.]

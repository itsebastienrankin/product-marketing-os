# Transcripts

Raw call recordings and notes from customer conversations, sales calls, and win/loss interviews. The source format doesn't matter — Gong exports, Apollo summaries, Salesforce notes, Chorus transcripts, Otter.ai, pasted copy. Drop anything here.

What gets templatized is not the transcript — it's the **extraction schema**. The Knowledge Architect reads whatever you provide, fills out the debrief template, and surfaces recommended updates to your knowledge base. Nothing updates automatically — you review and approve first.

---

## Supported Input Formats

| Source | How to Share |
|--------|-------------|
| **Gong** | Export transcript as text, paste or drag into chat |
| **Apollo.ai** | Copy call notes or AI summary, paste into chat |
| **Salesforce** | Copy call log or activity notes, paste into chat |
| **Chorus / Clari** | Export transcript, paste or share file |
| **Otter.ai / Fireflies** | Copy transcript text, paste into chat |
| **Manual notes** | Paste directly — partial notes are fine |

You don't need a full verbatim transcript. A detailed call summary is enough to run the extraction workflow.

---

## What the Workflow Produces

For each transcript, the Knowledge Architect fills out `_debrief-template.md` and surfaces:

- **Exact customer language** — verbatim phrases worth preserving, in the customer's own words
- **Pain points** — problems surfaced, mapped to segment and persona
- **Competitive signals** — every alternative mentioned, with context
- **Objections** — what came up, how it was handled or left unresolved
- **Buying committee signals** — roles present, decision dynamics observed
- **Proof point candidates** — things the customer said that could become quotes or data claims (flagged as candidates only — needs explicit approval before use)
- **Knowledge base update recommendations** — specific files to update, with proposed additions

---

## How to Use

**Drop a transcript:**
> "Here's a sales call transcript from last week. Process it and tell me what to update in the knowledge base."

**Batch processing:**
> "Here are 5 discovery call transcripts from our enterprise segment. Extract common themes and surface knowledge base updates."

**Win/loss focus:**
> "This is a loss call with a prospect who chose [Competitor]. Extract every competitive signal and objection for the battlecard."

**Persona refinement:**
> "Run this customer interview transcript through the debrief. I want to update our buyer persona language."

---

## Saved Debriefs

Completed debriefs are saved in this folder as:
`[YYYY-MM-DD]-[company-name]-[call-type].md`

Example: `2026-03-03-acme-corp-discovery.md`

Over time, this folder becomes a searchable archive of customer intelligence. When a theme appears across 5 debriefs — that's a signal to update your positioning.

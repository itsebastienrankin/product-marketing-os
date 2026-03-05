# Briefs

Templates for campaign and creative briefs. These are the starting point for any coordinated marketing effort — they define what you're doing, who it's for, and how you'll measure success before any content gets created.

---

## File Structure

```
02-briefs/
├── campaign-brief-template.md    # Strategic brief — goals, audience, channels, budget, timeline
└── creative-brief-template.md    # Execution brief — messaging, tone, deliverables, specs
```

---

## The 2 Files

**`campaign-brief-template.md`** — The strategic layer. Defines campaign objectives, target segment, channels, budget, success metrics, and workback schedule. Start here when planning a new campaign.

**`creative-brief-template.md`** — The execution layer. Translates the campaign brief into creative direction — messaging angle, tone, deliverables, format specs, and design references. Hand this to anyone producing content or creative.

---

## How to Use

1. Copy the template file into a project folder (don't overwrite the template)
2. Fill in the bracketed placeholders with your campaign details
3. Reference your segment context (`01-segment-context/`) for positioning and personas

The **Content Generator** agent can draft briefs from your segment context and campaign goals. The **PMM Orchestrator** uses briefs as input for full content pipelines.

---

## Cross-References

- `01-segment-context/` — Positioning, messaging, and personas that inform brief strategy
- `03-prompts/` — Content generators that execute against completed briefs
- `04-style-guides/` — Voice and tone guidelines referenced during execution
- `07-proof-points/` — Case studies and data claims for the social proof sections

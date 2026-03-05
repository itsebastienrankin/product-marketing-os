# Campaigns

Campaign home base. Each campaign gets its own folder with a populated campaign brief, creative brief, and generated assets. Templates live in `_templates/`.

---

## Folder Structure

```
02-campaigns/
├── _templates/
│   ├── campaign-brief-template.md    # Strategic brief — goals, audience, channels, budget, timeline
│   └── creative-brief-template.md    # Execution brief — messaging, tone, deliverables, specs
├── [campaign-name]/                  # One folder per campaign
│   ├── campaign-brief.md             # Populated strategic brief
│   ├── creative-brief.md             # Populated execution brief
│   └── assets/                       # Generated content for this campaign
│       ├── [ad-variants].md
│       ├── [email-sequence].md
│       └── ...
└── ...
```

---

## How to Use

### Starting a New Campaign

1. Create a new folder under `02-campaigns/` named for the campaign (e.g., `q2-2026-enterprise-launch/`)
2. Copy the templates from `_templates/` into the campaign folder (drop the `-template` suffix)
3. Fill in the bracketed placeholders with your campaign details
4. Reference your segment context (`01-segment-context/`) for positioning and personas
5. Store all generated assets in an `assets/` subfolder within the campaign

### AI-Assisted Campaign Setup

The **Content Generator** agent can draft both briefs from your segment context and campaign goals. The **PMM Orchestrator** uses briefs as input for full content pipelines — it will create the campaign folder, populate briefs, generate assets, and run quality review.

---

## Templates

**`_templates/campaign-brief-template.md`** — The strategic layer. Defines campaign objectives, target segment, channels, budget, success metrics, and workback schedule. Start here when planning a new campaign.

**`_templates/creative-brief-template.md`** — The execution layer. Translates the campaign brief into creative direction — messaging angle, tone, deliverables, format specs, and design references. Hand this to anyone producing content or creative.

---

## Cross-References

- `01-segment-context/` — Positioning, messaging, and personas that inform brief strategy
- `03-prompts/` — Content generators that execute against completed briefs
- `04-style-guides/` — Voice and tone guidelines referenced during execution
- `07-proof-points/` — Case studies and data claims for the social proof sections

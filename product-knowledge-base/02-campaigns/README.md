# Campaigns

Campaign home base. Each campaign gets its own folder with a campaign brief, creative brief, and generated assets. Copy the `{{campaign-template}}/` folder, rename it for your campaign, and fill it in.

---

## Folder Structure

```
02-campaigns/
├── {{campaign-template}}/               # Copy this folder for each new campaign
│   ├── campaign-brief.md                # Strategic brief — goals, audience, channels, budget, timeline
│   └── creative-brief.md               # Execution brief — messaging, tone, deliverables, specs
├── [campaign-name]/                     # One folder per campaign (e.g., q2-2026-enterprise-launch/)
│   ├── campaign-brief.md               # Populated strategic brief
│   ├── creative-brief.md               # Populated execution brief
│   └── assets/                          # Generated content for this campaign
│       ├── [ad-variants].md
│       ├── [email-sequence].md
│       └── ...
└── ...
```

---

## How to Use

### Starting a New Campaign

1. Copy the `{{campaign-template}}/` folder and rename it for your campaign (e.g., `q2-2026-enterprise-launch/`)
2. Fill in the bracketed placeholders in both briefs with your campaign details
3. Reference your segment context (`01-segment-context/`) for positioning and personas
4. Store all generated assets in an `assets/` subfolder within the campaign

### AI-Assisted Campaign Setup

The **Content Generator** agent can draft both briefs from your segment context and campaign goals. The **PMM Orchestrator** uses briefs as input for full content pipelines — it will create the campaign folder, populate briefs, generate assets, and run quality review.

---

## The 2 Files (per campaign)

**`campaign-brief.md`** — The strategic layer. Defines campaign objectives, target segment, channels, budget, success metrics, and workback schedule. Start here when planning a new campaign.

**`creative-brief.md`** — The execution layer. Translates the campaign brief into creative direction — messaging angle, tone, deliverables, format specs, and design references. Hand this to anyone producing content or creative.

---

## Cross-References

- `01-segment-context/` — Positioning, messaging, and personas that inform brief strategy
- `03-prompts/` — Content generators that execute against completed briefs
- `04-style-guides/` — Voice and tone guidelines referenced during execution
- `07-proof-points/` — Case studies and data claims for the social proof sections

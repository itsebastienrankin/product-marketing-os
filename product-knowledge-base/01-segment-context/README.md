# Segment Context

Your product doesn't have one market — it has several. Each one has different buyers, different pain points, different competitors, and different reasons to choose you. This folder is where you codify that context, segment by segment.

Each segment gets its own folder with 4 files that together capture how you position, message, and sell to that audience. Once filled in, these become the source of truth that prompts, briefs, sales enablement, and content generation all reference.

---

## File Structure

```
01-segment-context/
├── {{segment-1}}/                         # Template folder — copy for each segment
│   ├── narrative-and-positioning-template.md
│   ├── messaging-pillars-template.md
│   ├── buyer-persona-overview-template.md
│   └── market-segment-overview-template.md
│
├── smb/                                   # Example: first segment
│   ├── narrative-and-positioning.md
│   ├── messaging-pillars.md
│   ├── buyer-persona-overview.md
│   └── market-segment-overview.md
│
└── enterprise/                            # Example: second segment
    └── ...
```

Each segment is completely independent. They share a product, but everything else — positioning, personas, messaging — is segment-specific.

---

## The 4 Files

**`narrative-and-positioning.md`** — The strategic source of truth. Your positioning strategy, competitive alternatives, differentiators, proof points, and narrative all live here. Every other file in the folder references this one. Start here. For codified proof points (case studies and data claims), see `07-proof-points/`.

**`messaging-pillars.md`** — The copy execution layer. Translates your positioning into 3 messaging pillars with ready-to-use copy blocks: headlines, body copy, CTAs, email subject lines, and social posts.

**`buyer-persona-overview.md`** — The people layer. Maps the buying committee — who holds budget, who drives adoption internally, who can kill the deal on technical grounds — with role-specific pain points and messaging.

**`market-segment-overview.md`** — The operational layer. How deals actually progress, what kills them, GTM motion, channel strategy, and success metrics for this segment.

---

## How to Create a New Segment

Copy the `{{segment-1}}/` template folder, rename it (e.g., `smb/`, `enterprise/`), and populate the files. The fastest path is using the **Knowledge Architect** agent (if you've set up `06-agents/`) or AI-assisted prompts — see the [Setup Guide](../../SETUP-GUIDE.md) for the exact approach.

If working manually, fill in this order:
1. `narrative-and-positioning.md` — strategic foundation
2. `buyer-persona-overview.md` — buying committee
3. `messaging-pillars.md` — copy blocks
4. `market-segment-overview.md` — deal mechanics and GTM

Each template includes a **Quick Start Mode** (10-20 min) that captures the minimum viable context. Expand later.

**When to create a segment:** When buying behavior is meaningfully different — different personas, pain points, competitors, or GTM motion. Most products have 2-4 segments.

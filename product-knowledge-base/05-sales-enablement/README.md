# Sales Enablement

Competitive intelligence organized by competitor. Each competitor gets its own folder with 4 documents that help sales teams win deals.

The files here complement segment context (`01-segment-context/`). Segment context defines how you position and message for a market. Sales enablement defines how you win against a specific competitor in that market.

---

## File Structure

```
05-sales-enablement/
├── {{competitor 1}}/                      # Template folder — copy for each competitor
│   ├── competitor-overview.md
│   ├── battlecard.md
│   ├── objection-handling.md
│   └── FUD-playbook.md
│
├── [competitor-name]/                     # Example: a real competitor
│   ├── competitor-overview
│   ├── battlecard
│   ├── objection-handling
│   └── FUD-playbook
│
└── [another-competitor]/
    └── ...
```

---

## The 4 Files

**`competitor-overview`** — The deep reference. Company profile, product strengths/weaknesses, win/loss intelligence, pricing, and market trends. Use for deal planning and competitive strategy. *(15-20 min read, update quarterly)*

**`battlecard`** — The quick reference you pull up during a call. Head-to-head comparison by messaging pillar, trap-setting questions, counter strategies, and a 30-second competitive talk track. *(5-10 min scan, update monthly)*

**`objection-handling`** — Detailed scripts using the A-R-P-C framework (Acknowledge, Reframe, Proof, Check). Organized by deal stage, buyer role, and alternative type. *(Search for specific objection, update as new ones emerge)*

**`FUD-playbook`** — Tracks what they say about you (true or not), how to counter it, and what legitimate concerns you can raise about them. Includes ethical boundaries. *(10-15 min read, update ongoing)*

---

## Quick Lookup

| Situation | Go to |
|---|---|
| "Why should I choose you over them?" | battlecard → 30-second talk track |
| "They have a feature you don't" | objection-handling → feature parity |
| "They're cheaper" | objection-handling → price objections |
| "They said you're not secure" | FUD-playbook → counter-strategies |
| "We already use them" | objection-handling → status quo |
| Need trap-setting questions | battlecard → trap-setting questions |
| Planning a demo against them | competitor-overview → product weaknesses |

---

## How to Create a New Competitor Folder

Copy `{{competitor 1}}/`, rename it to the competitor's name, and populate. The fastest path is using the **Knowledge Architect** agent (if you've set up `06-agents/`) or AI-assisted prompts — see the [Setup Guide](../../SETUP-GUIDE.md) for the exact approach.

Start with the competitors you encounter most often in deals. Most teams need 2-3 competitor folders to cover 80% of competitive situations.

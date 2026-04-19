# Sales Enablement

Competitive intelligence organized by competitor. Each competitor gets its own folder with 4 documents that help sales teams win deals.

The files here complement segment context (`01-segment-context/`). Segment context defines how you position and message for a market. Sales enablement defines how you win against a specific competitor in that market.

---

## File Structure

```
05-sales-enablement/
├── {{competitor-1}}/                      # Template folder — copy for each competitor
│   ├── competitor-overview.md
│   ├── battlecard.md
│   ├── objection-handling.md
│   ├── FUD-playbook.md
│   └── competitive-intel-log.md          # Auto-created on first research run
│
├── [competitor-name]/                     # Example: a real competitor
│   ├── competitor-overview.md
│   ├── battlecard.md
│   ├── objection-handling.md
│   ├── FUD-playbook.md
│   └── competitive-intel-log.md
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

## Keeping Intel Fresh — Automated Research Loop

The **Competitive Intel Researcher** agent monitors your competitors and keeps these files current. It researches across Reddit, G2/Capterra, company blogs, pricing pages, Crunchbase, LinkedIn job postings, exec moves, and tech press — then detects what has changed and updates only what is positioning-relevant.

**Competitors are auto-discovered** from the folders in this directory. No configuration needed — just have your competitor folders set up and the agent does the rest.

### On-demand (manual)

Run in your Claude chat at any time:

```
/competitive-intel
```

To research a specific competitor only:

```
/competitive-intel [competitor-name]
```

The agent presents a summary of what changed and asks for approval before updating any files.

### Automated (monthly PR)

The GitHub Actions workflow in `.github/workflows/competitive-intel.yml` runs automatically on the 1st of every month. It researches all competitors, applies updates, and opens a pull request in your repo. You get a GitHub email notification with a summary of what changed — review the PR, merge what is accurate, close it if nothing is relevant.

**One-time setup required:** Add your Anthropic API key to GitHub Secrets:
1. Go to your repo on GitHub → **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Name: `ANTHROPIC_API_KEY`, Value: your key from [console.anthropic.com](https://console.anthropic.com)

You can also trigger a manual run anytime: **Actions → Competitive Intel Research → Run workflow**.

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

Copy `{{competitor-1}}/`, rename it to the competitor's name, and populate. The fastest path is using the **Knowledge Architect** agent (if you've set up `06-agents/`) or AI-assisted prompts — see the [Setup Guide](../../SETUP-GUIDE.md) for the exact approach.

Start with the competitors you encounter most often in deals. Most teams need 2-3 competitor folders to cover 80% of competitive situations.

Once a competitor folder exists, the Competitive Intel Researcher will automatically include it in future research runs.

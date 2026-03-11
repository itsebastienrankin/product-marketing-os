# Product Marketing OS
*Turn your marketing strategy into a structured knowledge base so every AI tool your team uses understands your product, your buyers, and your brand.*

---

## The Problem

Most marketing teams have already invested serious effort in their strategy, but it's scattered across Google Docs, slide decks, Slack threads, and living in people’s heads. That fragmentation was manageable before, but AI changes the equation. Without a shared, structured foundation, every AI session starts from a blank slate, and the output is only as good as what each person remembers to include.

The Product Marketing OS turns your marketing strategy into proper infrastructure: a version-controlled GitHub repository that underpins every AI tool your team uses. Your whole team operates from the same foundation, and every AI interaction is grounded in the full depth of your marketing strategy.

---

## What You Get

Share your messy positioning doc, persona deck, and competitive research with the AI. Within the hour, you have:
- Structured messaging pillars with ready-to-use headlines, body copy, and CTAs
- Buyer personas mapped to the actual buying committee, with role-specific pain points
- Competitive battlecards your sales team can use tomorrow
- A gap report telling you exactly what's missing and who on your team has it

From there, any AI tool your team uses can reference your actual positioning, real customer quotes, and brand voice guidelines because the context is structured and persistent. You never re-explain your product again.

Everything is plain text files you own and control. Change the templates, swap the prompt structures, adapt the folder layout. The system codifies your marketing context into a format AI can read. What you build on top of it is up to you.

---

## How It Works

**1. Gather your docs.** Positioning, personas, competitive research, case studies, data claims, brand guidelines, rough notes. Whatever you've got. Don't worry about formatting or organization; the AI handles that.

**2. Dump everything in.** Share your docs with the AI and say "Set up my knowledge base." It reads everything, classifies it, and builds a structured knowledge base, complete with a gap report showing exactly what's missing.

**3. Review and refine.** The AI structures your strategy, but no template captures every nuance of your brand and product. Review the output, adjust what needs adjusting, and fill gaps from the gap report. This is what your entire team builds on, so make sure it actually reflects your strategy.

**4. Connect your team.** Get your team's AI tools pointed at the GitHub repo. Upload files to a Claude Project, connect Claude to GitHub directly, or have teammates clone the repo. Once connected, everyone's AI pulls from the same strategic foundation automatically.

**5. Build on it.** Ask for campaign briefs, ad copy, emails, landing pages, battlecards, or one-pagers. The AI grounds everything in your actual positioning, real proof points, and brand voice instead of generating generic filler your team has to rewrite.

---

## Choose Your Tool

Two AI tools are fully supported with the complete agent system (auto-routing, multi-agent workflows, and review pipelines):

| | **Claude Code** *(recommended)* | **Cursor** |
|---|---|---|
| **Best for** | Most people. Chat-based, no coding experience needed. | People who want to see the file tree and edit alongside the AI. |
| **Setup** | Fork the repo, open it in Claude, start chatting. | Download the app, clone the repo, run one activation command. |
| **Get it** | [Open Claude →](https://claude.ai) / [Download Desktop →](https://claude.ai/download) | [Download Cursor →](https://cursor.sh) |

You only need one of these tools to *build* the knowledge base. Once it's built, your team can use it with any AI tool: Claude, ChatGPT, Copilot, Gemini, whatever they prefer. The knowledge base is just files. It works everywhere.

---

## Quick Start

1. **Fork the repo.** Go to the [Product Marketing OS on GitHub](https://github.com/itsebastienrankin/product-marketing-os) and click **Fork**. This creates your own copy. Your knowledge base will live here.
2. **Gather your docs.** See the [preparation checklist](./SETUP-GUIDE.md#before-you-start-gather-your-docs) for exactly what to collect
3. **Set up your tool.** Follow the [Setup Guide](./SETUP-GUIDE.md) for Cursor or Claude Code (~10 minutes)
4. **Dump your context.** Share your docs and say "Set up my knowledge base with everything I've shared here"
5. **Review and refine.** Check the output, adjust what doesn't match your strategy, fill gaps from the gap report
6. **Connect your team.** Point your team's AI tools at the repo so everyone works from the same foundation
7. **Start building.** Ask for campaign briefs, ad copy, emails, landing pages, or battlecards

**[Read the full Setup Guide →](./SETUP-GUIDE.md)**

---

## What's Inside

```
product-knowledge-base/
│
├── 00-projects/                           # Your local workspace. Never pushed to GitHub.
│   └── (your working files)               # Campaign drafts, quarterly plans, brainstorms.
│                                          #   anything not ready to share yet.
│
├── 01-segment-context/                    # Everything you know about each audience segment.
│   └── {{segment}}/                       # One folder per segment (e.g., enterprise/, smb/).
│       ├── narrative-and-positioning.md   #   How you win: differentiation, value props, proof points
│       ├── messaging-pillars.md           #   Headlines, body copy, CTAs (ready to use)
│       ├── buyer-persona-overview.md      #   The buying committee, mapped by role
│       └── market-segment-overview.md     #   Market size, dynamics, trends for this segment
│
├── 02-campaigns/                          # One folder per campaign.
│   └── {{campaign}}/                      # Copy the template, rename, fill it in.
│       ├── campaign-brief.md              #   Strategy: goals, audience, channels, timeline
│       └── creative-brief.md              #   Execution: messaging angle, tone, deliverables
│
├── 03-prompts/                            # Content generation prompts, one per format.
│   ├── meta-ads-generator.md              #   Meta ad copy
│   ├── linkedin-ads-generator.md          #   LinkedIn ad copy
│   ├── google-sem-ads-generator.md        #   Google search ads
│   ├── google-display-ads-generator.md    #   Google display ads
│   ├── sales-email-generator.md           #   Sales email sequences
│   ├── solution-lander-generator.md       #   Landing pages
│   ├── one-pager-generator.md             #   One-pagers and sell sheets
│   ├── case-study-generator.md            #   Customer case studies
│   └── ad-copy-generator.md               #   General ad copy
│
├── 04-style-guides/                       # How your brand writes.
│   └── writing-principles.md              #   Voice, tone, and style rules the AI follows
│
├── 05-sales-enablement/                   # Competitive intelligence. One folder per competitor.
│   └── {{competitor}}/
│       ├── competitor-overview.md         #   Who they are, what they sell, where they win
│       ├── battlecard.md                  #   Side-by-side comparison for sales conversations
│       ├── objection-handling.md          #   Common objections and how to respond
│       └── FUD-playbook.md               #   Fear, uncertainty, doubt (and your counters)
│
├── 06-agents/                             # The AI agents that power the system.
│   └── skills/
│       ├── knowledge-architect/           #   Reads raw docs, structures the knowledge base
│       ├── content-generator/             #   Creates ads, emails, briefs, landing pages
│       ├── advisory-board/                #   Simulates buyer feedback on your work
│       ├── consistency-guardian/           #   Checks brand and positioning alignment
│       └── pmm-orchestrator/              #   Coordinates agents, runs multi-step pipelines
│
├── 07-proof-points/                       # Evidence the AI can cite.
│   ├── case-studies/                      #   Customer stories, structured for reuse
│   └── data-claims/                       #   Verified stats: sourced, dated, ready to use
│
└── 08-transcripts/                        # Call intelligence from any source.
    └── (Gong, Apollo, etc.)               #   AI extracts personas, objections, competitive signals
```

You don't need to understand this structure to get started. The agents build it for you from whatever docs you share. Two segments and three competitors? Two segment folders, three competitor folders. It scales to whatever you have.

---

## FAQ

**Do I need to be technical?**
No. Claude Code works in your browser (just chat). Cursor is a desktop app if you prefer seeing files. Neither requires coding experience.

**What do I need to prepare?**
Whatever marketing docs you have. The [Setup Guide](./SETUP-GUIDE.md#before-you-start-gather-your-docs) has a checklist. Messy and incomplete is fine. The system tells you exactly what's missing.

**Can my whole team use this?**
Yes. The knowledge base lives in GitHub with full version history. When you update competitive positioning, everyone's AI gets it immediately. Three ways to connect teammates:
- **Claude Projects** (easiest): Upload files and invite your team
- **Connect Claude to GitHub**: Live-synced, no manual uploads. See the [Setup Guide](./SETUP-GUIDE.md#option-b-github-mcp-live-sync--knowledge-base-updates-automatically)
- **Clone the repo**: Full agent system, same as you

**What if my team uses different AI tools?**
The knowledge base is plain text files. Any AI that can read files gets the same context. The agent system (auto-routing, workflows, review pipelines) is built for Cursor and Claude Code, but the knowledge base works everywhere.

**What are the agents?**
Five AI agents that run behind the scenes: Knowledge Architect (structures raw docs), Content Generator (creates ads, emails, briefs), Consistency Guardian (checks brand alignment), Advisory Board (simulates buyer feedback), and PMM Orchestrator (coordinates multi-step pipelines). You don't manage them. Just ask for what you need.

---

## License

[MIT License](./LICENSE). Free to use, adapt, and extend.

Created by [Sebastien Rankin](https://github.com/itsebastienrankin)

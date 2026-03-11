# Product Marketing OS
*Turn your marketing strategy into a structured knowledge base so every AI tool your team uses understands your product, your buyers, and your brand.*

---

## Why This Exists

Your marketing context is scattered across docs, decks, Slack threads, and your own head. Every time you use AI, you re-explain your product, your buyers, your positioning. Your teammate does the same in their session with different context. There's no shared memory, no version history, no single source of truth.

The result: AI produces the same generic output for everyone. "Save time and boost productivity." That's not your positioning. That's not how your buyers talk.

**The fix isn't better prompts. It's better context.**

The Product Marketing OS gives you a structured, version-controlled knowledge base for everything you know — positioning, messaging, personas, competitive intelligence, proof points, brand voice — that lives in GitHub and works with any AI tool.

This is not an AI content machine. It's marketing infrastructure. The same shift [happening across marketing teams](https://www.linkedin.com/feed/update/urn:li:activity:7437157841158729728): your ICP definitions, messaging frameworks, and competitive intel are becoming structured context files that tell AI how you write, who your customers are, and what "good" looks like. Version history on every change. A shared foundation your whole team works from.

**When you control the context AI ingests, you control the quality of what it produces.** That's the entire premise.

---

## What This Looks Like

Share your messy positioning doc, persona deck, and competitive research with the AI. Within the hour, you have:
- Structured messaging pillars with ready-to-use headlines, body copy, and CTAs
- Buyer personas mapped to the actual buying committee, with role-specific pain points
- Competitive battlecards your sales team can use tomorrow
- A gap report telling you exactly what's missing and who on your team has it

From there, any AI tool your team uses can reference your actual positioning, real customer quotes, and brand voice guidelines — because the context is structured and persistent. You never re-explain your product again.

**And everything is yours to customize.** Don't like the content generation briefs? Change them. Want different prompt structures? Swap them out. The knowledge base and every template in it are plain text files you own and control. The most important thing this system does is codify your marketing context into a machine-readable format. What you build on top of that is up to you.

---

## How It Works

**1. Gather your docs.** Positioning, personas, competitive research, case studies, data claims, brand guidelines, rough notes. Whatever you've got. Don't worry about formatting or organization; the AI handles that.

**2. Dump everything in.** Share your docs with the AI and say "Set up my knowledge base." It reads everything, classifies it, and builds a structured knowledge base — complete with a gap report showing exactly what's missing.

**3. Use it.** Your knowledge base now works as persistent context for any AI tool. Ask for ads, emails, briefs, or battlecards and the AI pulls from your actual positioning, not generic filler. Share it with your team and they get the same context, automatically.

---

## Choose Your Tool

You need an AI tool to build and maintain the knowledge base. Two are fully supported, agents and review pipelines included:

| | **Claude Code** *(recommended)* | **Cursor** |
|---|---|---|
| **What it is** | Chat with Claude directly — in your browser, the desktop app, or the terminal. | A desktop app where you see the file tree, watch files get written in real time, and edit alongside the AI. |
| **Best for** | Most people. No coding experience needed. Just open, chat, and go. | People who want to see exactly what's changing and make edits on the fly. |
| **Setup** | Fork the repo, open it in Claude, start chatting. ~10 minutes. | Download the app, clone the repo, run one activation command. ~10 minutes. |
| **Agent activation** | Agents activate automatically. Nothing to configure. | One-time terminal command, then never touch the terminal again. |
| **How you share docs** | Drag files into the chat, paste content, or point to files in your repo. | Drag files into the chat window. |
| **Get it** | [Open Claude →](https://claude.ai) / [Download Desktop →](https://claude.ai/download) | [Download Cursor →](https://cursor.sh) |

**Not sure?** Start with Claude Code in your browser — there's nothing to install.

**Important:** You only need a tool to *build* the knowledge base. Once it's built, your team can use the same knowledge base with any AI tool: Claude, ChatGPT, Copilot, Gemini, whatever they prefer. The knowledge base is just files. It works everywhere.

---

## Quick Start

1. **Fork the repo.** Go to the [Product Marketing OS on GitHub](https://github.com/itsebastienrankin/product-marketing-os) and click **Fork**. This creates your own copy — your knowledge base will live here.
2. **Gather your docs.** See the [preparation checklist](./SETUP-GUIDE.md#before-you-start-gather-your-docs) for exactly what to collect
3. **Set up your tool.** Follow the [Setup Guide](./SETUP-GUIDE.md) for Cursor or Claude Code (~10 minutes)
4. **Dump your context.** Share your docs and say "Set up my knowledge base with everything I've shared here"
5. **Fill gaps.** Review the gap report, gather what's missing, bring it back
6. **Create content.** Ask for ads, emails, landing pages, briefs, grounded in your actual positioning

**[Read the full Setup Guide →](./SETUP-GUIDE.md)**

---

## What's Inside

```
product-knowledge-base/
│
├── 00-projects/              # Your local workspace. Never pushed, never shared.
│   └── (your working files)  # Drafts, brainstorms, deal rooms — anything in progress.
│
├── 01-segment-context/       # What you know about each audience.
│   ├── {{segment-1}}/        # One folder per segment (e.g., enterprise/, smb/).
│   │   ├── positioning.md    # How you win — differentiation, value props, proof points
│   │   ├── messaging.md      # Pillars, headlines, body copy, CTAs — ready to use
│   │   ├── personas.md       # The buying committee, mapped by role
│   │   └── market-overview.md
│   └── ...
│
├── 02-campaigns/             # Campaign HQ. One folder per campaign.
│   ├── {{campaign}}/         # Copy the template folder, rename, fill it in.
│   │   ├── campaign-brief.md # Strategy — goals, audience, channels, budget, timeline
│   │   ├── creative-brief.md # Execution — messaging angle, tone, deliverables, specs
│   │   └── assets/           # Generated ads, emails, landing pages, etc.
│   └── ...
│
├── 03-prompts/               # Platform-specific content generators.
│   ├── meta-ads.md           # Meta ad copy prompt
│   ├── linkedin-ads.md       # LinkedIn ad copy prompt
│   ├── google-sem.md         # Search ad prompt
│   └── ...
│
├── 04-style-guides/          # How your brand sounds.
│   └── voice-and-tone.md     # Writing principles the AI follows for every output
│
├── 05-sales-enablement/      # Competitive intelligence. One folder per competitor.
│   ├── {{competitor-1}}/     # Battlecard, objection handling, FUD playbook
│   └── ...
│
├── 06-agents/                # The AI team that runs behind the scenes.
│   ├── Knowledge Architect   # Reads your raw docs, structures the knowledge base
│   ├── Content Generator     # Creates ads, emails, briefs, landing pages
│   ├── Advisory Board        # Simulates buyer feedback on your work
│   ├── Consistency Guardian  # Checks brand and positioning alignment
│   └── PMM Orchestrator      # Coordinates the team, runs multi-step pipelines
│
├── 07-proof-points/          # Evidence the AI can actually cite.
│   ├── case-studies/         # Published customer stories, structured for reuse
│   └── data-claims.md        # Verified stats — sourced, dated, ready to drop in
│
└── 08-transcripts/           # Call intelligence. Drop any transcript, any source.
    └── (Gong, Apollo, etc.)  # AI extracts personas, objections, competitive signals
```

You don't need to understand this structure to get started. The agents build it for you from whatever you give them. If you have 2 segments and 3 competitors, you'll get 2 segment folders and 3 competitor folders. If you have 12 segments and 20 competitors, same thing. It scales.

---

## FAQ

**Do I need to be technical?**
No. Claude Code works in your browser — just chat. Cursor is a desktop app if you prefer seeing the file tree. There's one terminal command during Cursor setup that you copy-paste once and never touch again.

**What do I need to prepare?**
Whatever marketing docs you have — positioning, personas, competitive research, case studies, brand guidelines. The [Setup Guide](./SETUP-GUIDE.md#before-you-start-gather-your-docs) has a checklist. Messy and incomplete is fine; the system tells you exactly what's missing.

**How long until I see value?**
Within an hour you'll have a structured knowledge base populated from your existing docs. Even a rough first pass is dramatically better than what AI produces without any context.

**Can my whole team use this?**
That's the point. The knowledge base lives in GitHub — one place, always current, full version history. When you update your competitive positioning, everyone's AI gets it immediately.

Three ways to connect teammates:
- **Claude Projects** (easiest): Upload the knowledge base files and invite your team
- **Connect Claude to GitHub**: Live-synced, no manual uploads. See the [Setup Guide](./SETUP-GUIDE.md#option-b-github-mcp-live-sync--knowledge-base-updates-automatically)
- **Clone the repo**: Full agent system, same as you

**What if my team uses different AI tools?**
The **knowledge base** is plain text files — any AI that can read files gets the same context. Portable by design. The **agent system** (auto-routing, multi-agent workflows, review pipelines) is built for Cursor and Claude Code. Other tools can read your knowledge base; they just won't have the agents. That said, AI that knows your actual strategy is most of the value.

**What are the agents?**
Five AI agents that work behind the scenes: one structures your raw docs (Knowledge Architect), one generates content (Content Generator), one checks brand alignment (Consistency Guardian), one simulates buyer feedback (Advisory Board), and one coordinates the team (PMM Orchestrator). You don't manage them — just ask for what you need.

---

## License

[MIT License](./LICENSE). Free to use, adapt, and extend.

Created by [Sebastien Rankin](https://github.com/itsebastienrankin)

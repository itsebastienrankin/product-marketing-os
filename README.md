# Product Marketing OS
*Turn your marketing strategy into a system that scales, so everyone at your company creates on-brand, on-strategy work with AI, without waiting on you.*

---

## The Problem

You know your product better than anyone. But that knowledge lives in your head, scattered across a dozen docs, decks, and Slack threads. Every time someone on your team needs to create something (an ad, an email, a sales deck, a campaign brief), they either loop you in or wing it. You become the bottleneck, or the work goes out off-brand.

AI was supposed to fix this. But without structured context about your product, AI generates the same generic content it generates for everyone else. "Save time and boost productivity." That's not your positioning. That's not how your buyers talk. That's not what makes you different.

## The Fix

The Product Marketing OS gives you a way to codify everything you know (positioning, messaging, personas, competitive intelligence, proof points) into a structured knowledge base that AI can actually reference.

Once it's built, something changes: **anyone at your company, using any AI tool, can produce work that sounds like it came from you.** Sales writes emails grounded in your competitive positioning. Demand gen creates ads using your actual messaging pillars. Creative pulls from approved customer quotes instead of making them up. Your product launch brief references the right personas and proof points, without you writing it.

You stop being the bottleneck. You become the architect of a system that scales your expertise across the entire org.

---

## What This Looks Like in Practice

Share your messy positioning doc, persona deck, and competitive research with the AI. Within the hour, you have:
- Structured messaging pillars with ready-to-use headlines, body copy, and CTAs
- Buyer personas mapped to the actual buying committee, with role-specific pain points
- Competitive battlecards your sales team can use tomorrow
- A gap report telling you exactly what's missing and who on your team has it

Then ask: *"Write 3 LinkedIn ads for our mid-market segment targeting ops leaders."* The AI creates copy that uses your actual position, references a real customer quote from your case study library, and follows your brand voice guidelines. First draft. No review cycle.

Your demand gen lead asks their AI for campaign copy and gets the same quality, because the knowledge base is the shared foundation. They don't need you in the room. The AI already knows your product, your positioning, your buyers, and your proof points.

---

## How It Works

**1. Gather your docs.** Positioning, personas, competitive research, case studies, data claims, brand guidelines, rough notes. Whatever you've got. Don't worry about formatting or organization; the AI handles that.

**2. Dump everything in.** Share your docs with the AI and say "Set up my knowledge base." It reads everything, classifies it, and builds a structured knowledge base, complete with a gap report showing exactly what's missing.

**3. Start creating.** Ask for whatever you need. The AI references your actual positioning, messaging, proof points, and competitive intelligence, not generic filler. And so can anyone else on your team.

---

## Choose Your Tool

You need an AI tool to build and maintain the knowledge base. Two are fully supported, agents and review pipelines included:

| | **Cursor** | **Claude Code** |
|---|---|---|
| **What it is** | A desktop app with AI built in. You drag files into the chat window. | A terminal-based AI tool from Anthropic. You type commands and chat. |
| **Best for** | Most marketers and non-technical teams. No coding experience needed. | Anyone willing to copy-paste a few terminal commands during setup. Daily use is just chat, nothing technical. |
| **Setup** | Download the app, clone the repo, run one activation command. ~10 minutes. | Install via npm (requires Node.js), clone the repo, run `claude`. ~10 minutes. |
| **Agent activation** | One-time terminal command to activate agents, then never touch the terminal again. | Agents load from `CLAUDE.md` when you open the repo. Zero activation needed. |
| **How you share docs** | Drag files directly into the chat window. | Paste content, or point to files/folders on your computer. |
| **Get it** | [Download Cursor →](https://cursor.sh) | [Get Claude Code →](https://docs.anthropic.com/en/docs/claude-code/overview) |

**Not sure?** Start with Cursor. It's the most visual and requires the least technical comfort.

**Important:** You only need a tool to *build* the knowledge base. Once it's built, your team can use the same knowledge base with any AI tool: Claude, ChatGPT, Copilot, Gemini, whatever they prefer. The knowledge base is just files. It works everywhere.

---

## Quick Start

1. **Fork the repo.** Go to the [Product Marketing OS on GitHub](https://github.com/sebastienrankin/product-marketing-os) and click **Fork**. This creates your own copy — your knowledge base will live here.
2. **Gather your docs.** See the [preparation checklist](./SETUP-GUIDE.md#before-you-start-gather-your-docs) for exactly what to collect
3. **Set up your tool.** Follow the [Setup Guide](./SETUP-GUIDE.md) for Cursor or Claude Code (~10 minutes)
4. **Dump your context.** Share your docs and say "Set up my knowledge base with everything I've shared here"
5. **Fill gaps.** Review the gap report, gather what's missing, bring it back
6. **Create content.** Ask for ads, emails, landing pages, briefs, grounded in your actual positioning

**[Read the full Setup Guide →](./SETUP-GUIDE.md)**

---

## What's Inside

Your knowledge base is organized into sections that build on each other:

| Section | What It Does For You |
|---------|---------------------|
| **Segment Context** | Your positioning, messaging, personas, and market overview, organized per segment (e.g., SMB, Enterprise). So the AI knows exactly how you talk to each audience. |
| **Briefs & Prompts** | Templates for campaign briefs and platform-specific content generators (Meta ads, LinkedIn ads, Google SEM, emails, landing pages). So the AI follows your formats. |
| **Style Guides** | Your brand voice and writing principles. So everything the AI creates sounds like your brand, not generic AI output. |
| **Sales Enablement** | Competitive intelligence (battlecards, objection handling, FUD playbooks) per competitor. So sales has the latest intel without asking you. |
| **Proof Points** | Your published case studies and verified data claims, structured so the AI references real evidence, not invented stats. |
| **Agents** | AI team members that automate the work: one codifies your knowledge, one generates content, one checks brand alignment, one gives buyer feedback, and one coordinates the team. |

You don't need to understand this structure to get started. The agents build it for you from whatever you give them. If you have 2 segments and 3 competitors, you'll get 2 segment folders and 3 competitor folders. If you have 12 segments and 20 competitors, same thing. It scales.

---

## FAQ

**Do I need to be technical?**
Not particularly. Cursor is a desktop app: you download it, click through setup, and then chat with AI. There's one terminal command during Cursor setup that you copy-paste once and never touch again. Claude Code runs in your terminal, but the experience is still just chat: you type messages and read responses. The setup takes a few commands; the daily use doesn't. Non-technical teams (marketing, ops, content) use both tools regularly.

**How long until I see value?**
Within an hour of sharing your docs, you'll have a structured knowledge base with messaging pillars, buyer personas, and competitive intelligence, populated from your existing context. Even a rough first pass is dramatically better than what AI produces without any context.

**Does this work for complex orgs?**
Yes. If you have multiple products, segments, or business units, you create a segment folder for each. The knowledge base scales with you. It's just folders and files, not a SaaS tool with user limits.

**Can my whole team use this?**
That's the point. Once the knowledge base is built, there are three ways to share it with teammates:

- **Claude Projects** (easiest): Upload the knowledge base files to a Claude.ai Project and invite your team. They open it and start asking questions, no setup on their end.
- **GitHub MCP**: Connect Claude to your GitHub repo directly so the knowledge base stays live-synced. Works with Claude Code, Claude Desktop, and Claude.ai. See the [Setup Guide](./SETUP-GUIDE.md#option-b-github-mcp-live-sync--knowledge-base-updates-automatically) for instructions.
- **Clone the repo**: Teammates who use Cursor or VS Code can clone the repo and get the full agent system, just like you.

Everyone works from the same positioning, proof points, and competitive intelligence, without waiting on you.

**What if different people on my team use different AI tools?**
That's fine. Cursor and Claude Code are both fully supported with the complete agent system. And the underlying knowledge base is plain text files; any AI tool that can read a GitHub repo (ChatGPT, Gemini, Copilot, or whatever comes next) gets the same structured context, even without the agent system.

**What are the agents?**
AI team members that work together behind the scenes. One reads your raw docs and structures them (Knowledge Architect). One generates content (Content Generator). One checks that everything aligns with your positioning (Consistency Guardian). One gives you buyer feedback as if your actual buyers were reviewing the work (Advisory Board). And one coordinates the team (PMM Orchestrator). You don't manage them. Just ask for what you need and they figure out who does what.

**What do I need to prepare?**
Gather whatever marketing docs you have: positioning, personas, competitive research, case studies, brand guidelines. The [Setup Guide](./SETUP-GUIDE.md#before-you-start-gather-your-docs) has a specific checklist. Don't worry if it's messy or incomplete; the system tells you exactly what's missing and who to ask for it.

---

## License

MIT License. Free to use, adapt, and extend.

Created by [Sebastien Rankin](https://github.com/sebastienrankin)

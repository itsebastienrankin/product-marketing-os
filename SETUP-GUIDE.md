# Setup Guide

By the end of this guide, you'll have an AI system that knows your product as well as you do — and you'll be able to ask it for anything.

**Time:** About 10 minutes for setup, plus however long you spend sharing your docs (most people take 30–60 minutes for the first pass).

---

## Before You Start: Gather Your Docs

Before touching any tools, spend 15 minutes collecting your marketing context. You don't need all of this — even 2–3 documents is enough to start. But the more you share, the better the output.

### The essentials (start here)

- [ ] **Positioning or messaging doc** — Your core positioning, value prop, or messaging framework. Even a rough draft or strategy deck works.
- [ ] **Buyer/persona info** — Who you sell to, their pain points, how they buy. Could be a persona deck, customer interview notes, or even bullet points from your sales team.
- [ ] **Competitive landscape** — Who you compete against and how you're different. Win/loss notes, competitor research, sales battle notes — anything.

### Bonus (adds depth fast)

- [ ] **Case study URL** — The page on your website where customer stories are published (e.g., `yoursite.com/customers`). The AI will find every story on that page and structure them automatically.
- [ ] **Data claims** — Stats you use in marketing (e.g., "87% of customers saw X in 90 days"). Include the source if you have it.
- [ ] **Brand voice or style guide** — Tone of voice docs, brand guidelines, writing principles. Even rough notes from a brand workshop work.
- [ ] **Sales feedback** — Win/loss reports, competitive notes from your sales team, objection patterns, deal stage insights.

### Don't worry about

- **Format** — Google Docs, PDFs, slide decks, text files, pasted Slack threads. All fine.
- **Organization** — Messy is fine. The AI classifies and structures everything for you.
- **Completeness** — A rough first pass is dramatically better than no context at all. The system generates a gap report that tells you exactly what's missing and who on your team probably has it.

---

## Step 1: Choose Your Tool

Two AI tools are fully supported. Choose one:

### Cursor *(recommended for most people)*

Cursor is a desktop app with AI built in. Think of it as a smarter Google Docs — you drag in files, chat with AI, and review what it creates. Many non-technical teams (marketing, operations, content) use Cursor as their primary AI tool.

**Good for:** Anyone who prefers a visual, point-and-click interface. No coding or technical experience needed.

**One heads-up:** There's a single terminal command during setup (you copy-paste it). After that, you never touch the terminal again.

[Download Cursor →](https://cursor.sh) — then continue to [Setting Up with Cursor](#setting-up-with-cursor).

### Claude Code *(setup takes a few terminal commands — then it's just chat)*

Claude Code is an AI tool from Anthropic that runs in your terminal. You type messages and read responses — it looks like a terminal, but you're just having a conversation.

**Good for:** Anyone willing to copy-paste a few setup commands. The installation involves the terminal; the daily experience doesn't. Once it's running, you're just chatting. No coding required.

**Prerequisite:** You'll need [Node.js](https://nodejs.org) installed (version 18+). If you're not sure whether you have it, open your terminal and type `node --version`. If you see a number, you're good. If not, [download Node.js here](https://nodejs.org).

[Get Claude Code →](https://docs.anthropic.com/en/docs/claude-code/overview) — then continue to [Setting Up with Claude Code](#setting-up-with-claude-code).

---

## Setting Up with Cursor

### Step 2: Download and Install Cursor

1. Go to [cursor.sh](https://cursor.sh) and download the app for your computer
2. Install it like any other app (drag to Applications on Mac, or run the installer on Windows)
3. Open Cursor

### Step 3: Get the Knowledge Base from GitHub

GitHub is where your knowledge base lives — think of it as shared cloud storage with version history built in. If you don't have a GitHub account, [sign up here](https://github.com/signup) (free).

**If you're setting this up for your team:**

1. Go to the [Product Marketing OS on GitHub](https://github.com/sebastienrankin/product-marketing-os)
2. Click the green **Fork** button in the top right — this creates your team's own copy
3. You'll land on your copy's page. Click the green **Code** button, then copy the URL
4. Back in Cursor: press `Cmd + Shift + P` (Mac) or `Ctrl + Shift + P` (Windows) to open the command bar
5. Type `Git: Clone` and select it
6. Paste the URL you copied and press Enter
7. Choose a folder on your computer (Desktop works fine) and click **Select Repository Location**
8. When it asks "Would you like to open the cloned repository?" — click **Open**

**If it's just you:**

1. In Cursor: press `Cmd + Shift + P` (Mac) or `Ctrl + Shift + P` (Windows)
2. Type `Git: Clone` and select it
3. Paste this URL: `https://github.com/sebastienrankin/product-marketing-os.git`
4. Choose a folder on your computer and press Enter
5. Click **Open** when prompted

You should now see a sidebar on the left with a `product-knowledge-base` folder. You're in.

### Step 4: Activate the Agents

The knowledge base comes with AI agents — specialized assistants that each handle a different part of the work. You need to activate them once.

1. In Cursor, open the built-in terminal:
   - Mac: `Ctrl + ~` (that's the key above Tab)
   - Windows: `` Ctrl + ` ``
   - Or go to the menu: **Terminal → New Terminal**
2. A panel will appear at the bottom of the screen. Click inside it and paste this entire block, then press Enter:

```bash
mkdir -p .cursor/skills && cd .cursor/skills && for name in knowledge-architect content-generator consistency-guardian advisory-board pmm-orchestrator; do ln -sf "../../product-knowledge-base/06-agents/skills/$name" "$name"; done && echo "Agents activated!"
```

3. You should see `Agents activated!` — that means it worked
4. Quit Cursor completely (`Cmd + Q` on Mac, close the window on Windows) and reopen it — this loads the agents

**This is the only time you'll need to touch the terminal.** From here on, everything happens through chat.

If you see an error, just copy the command again, make sure you're pasting the whole thing, and try once more.

### Step 5: Share Your Docs

This is where the magic happens. Pull out the docs you gathered in the [preparation checklist](#before-you-start-gather-your-docs).

1. Open Cursor's chat panel — click the chat icon in the top right, or press `Cmd + L` (Mac) / `Ctrl + L` (Windows)
2. Drag your files directly into the chat window (you can drag multiple files at once)
3. Type this message and press Enter:

```
Set up my knowledge base with everything I've shared here
```

**That's it.** The agents will read everything, ask you a few questions to confirm what they found, and start building.

**What happens next:**

1. You'll see a **triage plan** showing what the agents found in your docs — segments, competitors, case studies. Confirm it looks right or adjust.
2. The agents will **build** your entire knowledge base — structured files for every segment, competitor, persona, and proof point
3. Two reviewers will **check the work** — one from your buyers' perspective, one for brand consistency
4. You'll get a **gap report** showing exactly what's missing, ranked by importance, with suggestions for who on your team has it

> **This is the aha moment.** You just dragged in a pile of messy docs, and now you have a structured marketing foundation that AI can reference for everything it creates. Even a rough first pass is a completely different experience from starting with a blank prompt.

**Case studies:** The agents will ask you for the URL where your case studies are published (e.g., `yoursite.com/customers`). Share the link — they'll find every published story on that page and create a structured file for each one automatically.

**Now continue to [Fill the Gaps →](#fill-the-gaps)**

---

## Setting Up with Claude Code

### Step 2: Install Claude Code

Make sure you have [Node.js](https://nodejs.org) (version 18+) installed. Then open your terminal and run:

```bash
npm install -g @anthropic-ai/claude-code
```

Then run `claude` once and follow the login prompt to authenticate with your Anthropic account.

### Step 3: Get the Knowledge Base from GitHub

If you don't have a GitHub account, [sign up here](https://github.com/signup) (free).

**If you're setting this up for your team:**

1. Go to the [Product Marketing OS on GitHub](https://github.com/sebastienrankin/product-marketing-os)
2. Click the green **Fork** button in the top right — this creates your team's own copy
3. Clone your fork:

```bash
git clone https://github.com/YOUR-USERNAME/product-marketing-os.git
```

**If it's just you:**

```bash
git clone https://github.com/sebastienrankin/product-marketing-os.git
```

### Step 4: Open the Repo (Agents Load Automatically)

```bash
cd product-marketing-os
claude
```

That's it. No activation command, no configuration. The `CLAUDE.md` file in the repo is loaded automatically and gives Claude Code the full agent system. The agents are ready to use immediately.

### Step 5: Share Your Docs

Pull out the docs you gathered in the [preparation checklist](#before-you-start-gather-your-docs). You have a few ways to share them:

**Option A — Paste content directly into chat:**
Copy the contents of each document and paste them into the chat, then say:

```
Set up my knowledge base with everything I've shared here
```

**Option B — Point to files on your computer:**
If your docs are saved as files, tell Claude Code where to find them:

```
Set up my knowledge base using these files:
- ~/Documents/positioning-doc.pdf
- ~/Downloads/persona-deck-notes.txt
- ~/Desktop/competitive-research.md
```

**Option C — Point to a folder:**
If all your docs are in one place:

```
Set up my knowledge base using all the files in ~/Documents/marketing-context/
```

**What happens next:**

1. You'll see a **triage plan** showing what the agents found — segments, competitors, case studies. Confirm it looks right or adjust.
2. The agents will **build** your knowledge base — structured files for every segment, competitor, persona, and proof point
3. Two reviewers will **check the work** — one from your buyers' perspective, one for brand consistency
4. You'll get a **gap report** (`_gap-report.md`) showing exactly what's missing, ranked by importance

> **This is the aha moment.** You just shared a pile of messy docs, and now you have a structured marketing foundation that AI references for everything it creates.

**Case studies:** The agents will ask for the URL where your case studies are published. Share the link — they'll find every story and create a structured file for each one.

**Claude Code tip:** You can also invoke agents directly with slash commands:
- `/knowledge-architect populate my SMB segment from this doc`
- `/content-generator write 3 LinkedIn ads for our mid-market segment`
- `/pmm-orchestrator run a full content pipeline for our enterprise segment`

**Now continue to [Fill the Gaps →](#fill-the-gaps)**

---

## Sharing the Knowledge Base with Your Team

You set up the knowledge base — now your teammates want to use it. Here's how to give everyone access, depending on how technical they are.

### Option A: Claude Projects *(easiest — zero setup for teammates)*

Claude Projects let you upload files into a shared AI workspace. Anyone you invite can open the Project in Claude.ai and start asking questions immediately — no GitHub account, no installation, nothing.

**How to set it up (you do this once):**

1. Go to [claude.ai](https://claude.ai) and open the Projects tab
2. Create a new Project and give it a name (e.g., "Product Marketing Knowledge Base")
3. Upload the key files from your `product-knowledge-base/` folder — at minimum, the segment context files, style guide, and proof points
4. Invite your teammates to the Project

**What teammates get:**
They open Claude.ai → Projects → your project → and start asking. The AI already knows your positioning, your personas, your brand voice, your proof points. No setup on their end.

**Limitation:** The Project's files don't update automatically. When you update the knowledge base in GitHub, you'll need to re-upload the changed files to the Project. For a small team that updates the KB infrequently, this is fine.

---

### Option B: GitHub MCP *(live sync — knowledge base updates automatically)*

If you want Claude to read directly from your GitHub repo — so updates sync automatically — you can connect Claude to GitHub via the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/). This is more technical but requires no manual re-uploading.

**Who this makes sense for:** Teams that update the knowledge base frequently and want every Claude session to reflect the latest version automatically.

#### For Claude Code users

Claude Code has built-in MCP support. To connect it to your GitHub repo:

1. Create a GitHub Personal Access Token at [github.com/settings/tokens](https://github.com/settings/tokens) with `repo` scope (or `contents: read` for fine-grained tokens)
2. Add the token to your environment:

```bash
export GITHUB_PERSONAL_ACCESS_TOKEN=ghp_yourtokenhere
```

3. Add the GitHub MCP server:

```bash
claude mcp add github-kb -s user -- npx -y @modelcontextprotocol/server-github
```

4. Now Claude Code can read your GitHub repo directly. Ask it: *"Read the files in the product-knowledge-base/ folder of [your-repo-url]"*

#### For Claude Desktop users

Claude Desktop supports MCP through a config file. Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "github-kb": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_yourtokenhere"
      }
    }
  }
}
```

Restart Claude Desktop and it will have access to your GitHub repos.

#### For Claude.ai (web) users

Claude.ai supports GitHub as a connected integration. Go to **Settings → Integrations** and connect your GitHub account. Once connected, you can reference your repo in any conversation.

---

### Option C: Clone the repo *(for teammates using Cursor or VS Code)*

If teammates use Cursor, VS Code, or any similar editor with AI built in, they can just clone your GitHub repo and open it. They get the full knowledge base as local files, and Cursor/Copilot/etc. can reference them directly.

For Cursor users, share the [Cursor setup steps](#setting-up-with-cursor) from this guide — it's the same process.

---

**Now continue to [Fill the Gaps →](#fill-the-gaps)**

---

## Fill the Gaps

The gap report is your to-do list. It tells you what's missing, why it matters, and who to ask for it.

You don't have to fill everything at once. Even a partial knowledge base produces dramatically better AI outputs than starting from scratch. Work through it at your own pace:

1. Get the missing information from whoever has it (the report suggests who to ask)
2. Share the new content with the AI — drag it into Cursor's chat or paste it into Claude Code
3. Say something like:

```
Here's the missing buyer persona research — update my knowledge base
```

The agents will fill in the gaps and update the report. Every time you add more context, everything the AI creates gets better.

---

## Start Creating

With your knowledge base populated, ask for whatever you need:

```
Generate 3 LinkedIn ad variants for our SMB segment targeting CFOs
```

```
Write a sales email sequence for enterprise prospects switching from Salesforce
```

```
Create a campaign brief for our product launch targeting mid-market ops leaders
```

The AI references your actual positioning, messaging, proof points, and competitive intelligence. First drafts that sound like they came from someone who deeply understands your product — because the AI does now.

**Share the knowledge base with your team** — anyone who connects their AI tool to the same GitHub repo gets the same structured context. Your demand gen lead generates ad copy grounded in your positioning. Your content writer pulls from approved customer quotes. Your sales team gets battlecards that reflect your actual competitive intelligence. Everyone works from the same source of truth, without waiting on you to review every draft.

---

## Troubleshooting

### Cursor

**The agent activation command didn't work**
- Make sure you copied the entire command (it's long — scroll to get all of it)
- Make sure you're in the terminal panel at the bottom of Cursor, not in the chat
- Try closing and reopening the terminal (`Ctrl + ~`), then pasting again

**Cursor isn't recognizing the agents**
- Did you quit and reopen Cursor after the activation step? The agents only load on startup.
- Check that you see a `.cursor/skills` folder in your sidebar (you may need to toggle hidden files: `Cmd + Shift + .` on Mac)

**The agents aren't responding to my messages**
- Make sure you're in the chat panel (click the chat icon or press `Cmd + L`)
- Try being more explicit: "Using the Knowledge Architect agent, set up my knowledge base with these files"

### Claude Code

**`npm install` failed or `claude` isn't recognized**
- Make sure you have Node.js 18+ installed: run `node --version` in your terminal
- If Node.js isn't installed, download it from [nodejs.org](https://nodejs.org)
- On Mac, you may need to restart your terminal after installing Node.js

**Agents aren't activating**
- Make sure you're running `claude` from inside the `product-marketing-os` folder (run `cd product-marketing-os` first)
- The agents load from the `CLAUDE.md` file at the root of the repo — make sure it exists

### Both

**I'm stuck and nothing is working**
- Take a breath. This is new tooling and it's normal to hit bumps.
- Check the [Agents README](./product-knowledge-base/06-agents/README.md) for more detailed instructions
- Open an issue on [GitHub](https://github.com/sebastienrankin/product-marketing-os/issues) and we'll help you out

---

## Tips

- **Don't worry about being organized.** The agents handle classification and structuring. Messy is fine.
- **Start with what you have.** A rough first pass is dramatically better than no context at all.
- **Use the gap report as your to-do list.** It tells you exactly what to prioritize and who to ask.
- **Share the repo with your team.** Once the knowledge base is populated, anyone connected to it has a PMM expert in their pocket — through any AI tool they prefer.
- **The knowledge base gets better over time.** Every time you add context, update competitive intel, or codify a new case study, every piece of content the AI creates gets better.

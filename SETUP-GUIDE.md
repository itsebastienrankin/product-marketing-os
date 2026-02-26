# Setup Guide

You'll need about 10 minutes and zero technical experience. This guide walks you through every click.

By the end, you'll have an AI system that knows your product as well as you do — and you'll be able to ask it for anything.

**Two supported tools:** Choose your setup path below — both give you the full agent system.
- [Setting up with Cursor](#setting-up-with-cursor) *(recommended if you don't have a preference)*
- [Setting up with Claude Code](#setting-up-with-claude-code) *(zero terminal setup required)*

---

## Setting Up with Cursor

### Step 1: Download Cursor

Cursor is an editor with AI built in. You'll use it mostly for chatting with AI and reviewing files — think of it as a smarter Google Docs.

1. Go to [cursor.sh](https://cursor.sh) and download the app for your computer
2. Install it like any other app (drag to Applications on Mac, or run the installer on Windows)
3. Open Cursor

That's it for this step. You'll come back to Cursor in a moment.

---

### Step 2: Get the Knowledge Base from GitHub

GitHub is where your knowledge base lives. You're going to make your own copy of it.

**If you're setting this up for your team:**

1. Go to the [Product Marketing OS on GitHub](https://github.com/sebastienrankin/product-marketing-os)
2. Click the green **Fork** button in the top right — this creates your team's own copy
3. You'll land on your fork's page. Click the green **Code** button, then copy the URL
4. Back in Cursor: press `Cmd + Shift + P` (Mac) or `Ctrl + Shift + P` (Windows) to open the command bar
5. Type `Git: Clone` and select it
6. Paste the URL you copied and press Enter
7. Choose a folder on your computer where you want to save it (Desktop works fine)
8. When it asks "Would you like to open the cloned repository?" — click **Open**

**If it's just you:**

1. In Cursor: press `Cmd + Shift + P` (Mac) or `Ctrl + Shift + P` (Windows)
2. Type `Git: Clone` and select it
3. Paste this URL: `https://github.com/sebastienrankin/product-marketing-os.git`
4. Choose a folder on your computer and press Enter
5. Click **Open** when prompted

You should now see a sidebar on the left with a `product-knowledge-base` folder. You're in.

---

### Step 3: Activate the Agents

The knowledge base comes with AI agents — think of them as specialized assistants that each handle a different part of the work. You need to activate them once.

1. In Cursor, open the built-in terminal:
   - Mac: `Ctrl + ~` (that's the key above Tab)
   - Windows: `` Ctrl + ` ``
   - Or go to the menu: **Terminal → New Terminal**
2. A panel will appear at the bottom of the screen. Click inside it and paste this entire block, then press Enter:

```bash
mkdir -p .cursor/skills && cd .cursor/skills && for name in knowledge-architect content-generator consistency-guardian advisory-board pmm-orchestrator; do ln -sf "../../product-knowledge-base/06-agents/skills/$name" "$name"; done && echo "Agents activated!"
```

3. You should see `Agents activated!` — that means it worked. (This creates shortcuts so Cursor can find the agents — you'll never need to do this again.)
4. Quit Cursor completely (`Cmd + Q` on Mac, close the window on Windows) and reopen it — this loads the agents

**This is the only time you'll need to touch the terminal.** From here on, everything happens through chat.

If you see an error, don't worry — just copy the command again, make sure you're pasting the whole thing, and try once more. If it still doesn't work, see [Troubleshooting](#troubleshooting) below.

---

### Step 4: Dump Everything You Have

This is where the magic happens. Gather every piece of marketing context you have and hand it to the agents. They'll read everything, figure out what it is, and build your entire knowledge base from it.

**What to include** — anything and everything:
- Positioning docs, messaging frameworks, value prop decks
- Persona decks, buyer research, customer interview notes
- Competitive research, win/loss data, sales feedback
- Data claims, benchmark stats, research findings
- Brand guidelines, tone of voice docs
- Meeting notes, strategy decks, internal wikis

Rough, unfinished, disorganized — all fine. The messier it is, the more impressive the output.

**How to do it:**

1. Open Cursor's chat panel — click the chat icon in the top right, or press `Cmd + L` (Mac) / `Ctrl + L` (Windows)
2. Drag your files directly into the chat window (you can drag multiple files at once)
3. Type this message and press Enter:

```
Set up my knowledge base with everything I've shared here
```

That's it. The agents will read everything, ask you a few questions to confirm what they found, and start building.

**Case studies:** The agents will ask you for the URL where your case studies are published (e.g., `yoursite.com/customers` or `yoursite.com/case-studies`). Just share the link — they'll find every published story on that page and create a structured file for each one automatically. You don't need to copy-paste anything.

**What happens next:**

1. You'll see a **plan** showing what the agents found in your docs — segments, competitors, case studies. Confirm it looks right or adjust.
2. The agents will **build** your entire knowledge base — structured files for every segment, competitor, persona, proof point
3. You'll get a **gap report** showing exactly what's missing, ranked by importance, with suggestions for who on your team has the information

> **This is the aha moment.** You just dragged in a pile of messy docs, and now you have a structured marketing foundation that AI can reference for everything it creates — ads, emails, landing pages, briefs. The more docs you give it, the longer it takes — but even a rough first pass is a completely different experience from starting with a blank prompt.

---

### Step 5: Fill the Gaps

The gap report is your to-do list. It tells you what's missing, why it matters, and who to ask for it.

You don't have to fill everything at once. Even a partial knowledge base produces dramatically better AI outputs than starting from scratch every time. Work through it at your own pace:

1. Get the missing information from whoever has it (the report suggests who to ask)
2. Drag the new docs into Cursor's chat
3. Say something like:

```
Here's the missing buyer persona research — update my knowledge base
```

The agents will fill in the gaps and update the report. Every time you add more context, everything the AI creates gets better.

---

### Step 6: Start Creating

With your knowledge base populated, ask for whatever you need. Open Cursor's chat and type:

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

**Share the knowledge base with your team** — anyone who connects their AI tool to the same repo gets the same structured context. Your demand gen lead generates ad copy grounded in your positioning. Your content writer pulls from approved customer quotes. Your sales team gets battlecards that reflect your actual competitive intelligence. Everyone works from the same source of truth, without waiting on you to review every draft.

---

## Setting Up with Claude Code

Claude Code is a terminal-based AI tool from Anthropic. The key difference from Cursor: **no agent activation step required** — the agents load automatically when you open the repo. Zero terminal commands.

### Step 1: Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

Then authenticate by running `claude` and following the login prompt.

### Step 2: Get the Knowledge Base from GitHub

**If you're setting this up for your team:**

1. Go to the [Product Marketing OS on GitHub](https://github.com/sebastienrankin/product-marketing-os)
2. Click the green **Fork** button in the top right — this creates your team's own copy
3. Clone your fork: `git clone https://github.com/[your-username]/product-marketing-os.git`

**If it's just you:**

```bash
git clone https://github.com/sebastienrankin/product-marketing-os.git
```

### Step 3: Open with Claude Code (agents load automatically)

```bash
cd product-marketing-os
claude
```

That's it. No activation command needed. The `CLAUDE.md` file in the repo loads automatically and gives Claude Code the full agent routing system. The agents are ready to use immediately.

### Step 4: Share Your Marketing Context

This is where the magic happens. Claude Code reads files you have on your computer — give it everything you have.

**Option A — Paste content directly into chat:**
Copy and paste the contents of each document into the Claude Code chat, one at a time or all at once. Then say:

```
Set up my knowledge base with everything I've shared here
```

**Option B — Point Claude Code at files on your computer:**
If your docs are already on your machine, tell Claude Code where to find them:

```
Set up my knowledge base using these files:
- ~/Documents/positioning-doc.pdf
- ~/Downloads/persona-deck-notes.txt
- ~/Desktop/competitive-research.md
```

Claude Code will read each file and build your knowledge base from them.

**Option C — Share a folder:**
If all your docs are in one folder:

```
Set up my knowledge base using all the files in ~/Documents/marketing-context/
```

**What to include** — anything and everything:
- Positioning docs, messaging frameworks, value prop decks
- Persona decks, buyer research, customer interview notes
- Competitive research, win/loss data, sales feedback
- Data claims, benchmark stats, research findings
- Brand guidelines, tone of voice docs
- Meeting notes, strategy decks, internal wikis

Rough, unfinished, disorganized — all fine. The messier it is, the more impressive the output.

**What happens next:**

1. You'll see a **plan** showing what the agents found — segments, competitors, case studies. Confirm it looks right or adjust.
2. The agents **build** your knowledge base — structured files for every segment, competitor, persona, proof point
3. You'll get a **gap report** (`_gap-report.md`) showing exactly what's missing, ranked by importance

> **This is the aha moment.** You just handed over a pile of messy docs, and now you have a structured marketing foundation that AI can reference for everything it creates. The more you give it, the longer it takes — but even a rough first pass is a completely different experience from starting with a blank prompt.

### Step 5: Fill the Gaps

The gap report is your to-do list. It tells you what's missing, why it matters, and who to ask for it.

You don't have to fill everything at once. Even a partial knowledge base produces dramatically better AI outputs than starting from scratch every time:

1. Get the missing information from whoever has it (the report suggests who to ask)
2. Share the new content with Claude Code (paste it or point to the file)
3. Say something like:

```
Here's the missing buyer persona research — update my knowledge base
```

### Step 6: Start Creating

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

Or use slash commands for explicit agent invocation:
- `/content-generator generate 3 LinkedIn ads for our SMB segment targeting CFOs`
- `/advisory-board review these ads for buyer resonance`
- `/pmm-orchestrator run a full content creation pipeline for our enterprise campaign`

**Share the knowledge base with your team** — anyone who connects their AI tool to the same repo gets the same structured context. Everyone works from the same source of truth, without waiting on you to review every draft.

---

## Troubleshooting

**The agent activation command didn't work**
- Make sure you copied the entire command (it's long — scroll to get all of it)
- Make sure you're in the terminal panel at the bottom of Cursor, not in the chat
- Try closing and reopening the terminal (`Ctrl + ~`), then pasting again

**Cursor isn't recognizing the agents**
- Did you quit and reopen Cursor after Step 3? The agents only load on startup.
- Check that you see a `.cursor/skills` folder in your sidebar (you may need to toggle hidden files: `Cmd + Shift + .` on Mac)

**The agents aren't responding to my messages**
- Make sure you're in the chat panel (click the chat icon or press `Cmd + L`)
- Try being more explicit: "Using the Knowledge Architect agent, set up my knowledge base with these files"

**I'm stuck and nothing is working**
- Take a breath. This is new tooling and it's normal to hit bumps.
- Check the [Agents README](./product-knowledge-base/06-agents/README.md) for more detailed instructions
- Open an issue on GitHub and we'll help you out

---

## Tips

- **Don't worry about being organized.** The agents handle classification and structuring. Messy is fine.
- **Start with what you have.** A rough first pass is dramatically better than no context at all.
- **Use the gap report as your to-do list.** It tells you exactly what to prioritize.
- **Share the repo with your team.** Once the knowledge base is populated, anyone connected to it has a PMM expert in their pocket — through any AI tool.

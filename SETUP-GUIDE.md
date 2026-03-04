# Setup Guide

By the end of this guide, you'll have an AI system that knows your product as well as you do, and you'll be able to ask it for anything.

**Time:** About 10 minutes for tool setup, plus however long you spend sharing your docs (most people take 30–60 minutes for the first pass).

---

## Before You Start: Gather Your Docs

Spend 15 minutes collecting your marketing context. You don't need all of this; even 2–3 documents is enough to start.

### The essentials

- [ ] **Positioning or messaging doc:** Your core positioning, value prop, or messaging framework. Even a rough draft or strategy deck works.
- [ ] **Buyer/persona info:** Who you sell to, their pain points, how they buy. A persona deck, customer interview notes, or bullet points from your sales team all work.
- [ ] **Competitive landscape:** Who you compete against and how you're different. Win/loss notes, competitor research, sales battle notes, anything.

### Bonus (adds depth fast)

- [ ] **Case study URL:** The page on your website where customer stories are published (e.g., `yoursite.com/customers`). The AI will find every story on that page and structure them automatically.
- [ ] **Data claims:** Stats you use in marketing (e.g., "87% of customers saw X in 90 days"). Include the source if you have it.
- [ ] **Brand voice or style guide:** Tone of voice docs, brand guidelines, writing principles. Even rough notes from a brand workshop work.
- [ ] **Sales feedback:** Win/loss reports, competitive notes from your sales team, objection patterns, deal stage insights.

### Don't worry about

- **Format:** Google Docs, PDFs, slide decks, text files, pasted Slack threads. All fine.
- **Organization:** Messy is fine. The AI classifies and structures everything for you.
- **Completeness:** A rough first pass is dramatically better than no context. The gap report tells you exactly what's missing and who on your team has it.

---

## Step 1: Choose Your Tool

### Cursor *(recommended for most people)*

A visual desktop app. Drag files into chat, review what the AI creates. No coding experience needed. One terminal command during setup, then never touch the terminal again.

[Download Cursor →](https://cursor.sh), then continue to [Setting Up with Cursor](#setting-up-with-cursor).

### Claude Code

Runs in your terminal. You type messages and read responses — it's a conversation, not a coding environment. **Requires [Node.js 18+](https://nodejs.org)** — run `node --version` to check.

[Get Claude Code →](https://docs.anthropic.com/en/docs/claude-code/overview), then continue to [Setting Up with Claude Code](#setting-up-with-claude-code).

---

## Setting Up with Cursor

### Step 2: Install Cursor

1. Go to [cursor.sh](https://cursor.sh) and download the app
2. Install it (drag to Applications on Mac, run the installer on Windows)
3. Open Cursor

### Step 3: Fork and Clone the Repo

GitHub is where your knowledge base lives — forking creates your own copy. That's where your knowledge base will actually live. You're not working in the original repo.

If you don't have a GitHub account, [sign up here](https://github.com/signup) (free).

1. Go to the [Product Marketing OS on GitHub](https://github.com/sebastienrankin/product-marketing-os) and click **Fork** → **Create fork**. You'll land on your own copy at `github.com/YOUR-USERNAME/product-marketing-os`.
2. Click the green **Code** button and copy the HTTPS URL
3. In Cursor: press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows), type `Git: Clone`, select it
4. Paste the URL, choose a folder (Desktop works fine), click **Select Repository Location**
5. Click **Open** when prompted

You should now see a sidebar with a `product-knowledge-base` folder.

### Step 4: Activate the Agents

1. Open the terminal: `` Ctrl+` `` (backtick key, above Tab) or **Terminal → New Terminal**

   **Windows:** If the terminal shows PowerShell or CMD, switch to Git Bash: click the dropdown next to `+` in the terminal panel and select **Git Bash**.

2. Click inside the terminal, paste this entire block, and press Enter:

```bash
mkdir -p .cursor/skills && cd .cursor/skills && for name in knowledge-architect content-generator consistency-guardian advisory-board pmm-orchestrator; do ln -sf "../../product-knowledge-base/06-agents/skills/$name" "$name"; done && echo "Agents activated!"
```

3. You should see `Agents activated!`. Quit Cursor completely (`Cmd+Q` on Mac, close on Windows) and reopen it.

**That's the only time you'll need the terminal.** Everything from here is chat.

### Step 5: Share Your Docs

1. Open the chat panel: `Cmd+L` (Mac) / `Ctrl+L` (Windows), or click the chat icon
2. Drag your files into the chat (you can drag multiple at once)
3. Type this and press Enter:

```
Set up my knowledge base with everything I've shared here
```

**Continue to [What Happens Next →](#what-happens-next)**

---

## Setting Up with Claude Code

### Step 2: Install Claude Code

Check that you have Node.js 18+:

```bash
node --version
```

If missing or below 18, download from [nodejs.org](https://nodejs.org) and restart your terminal.

Then install Claude Code:

```bash
npm install -g @anthropic-ai/claude-code
```

Run `claude` once and follow the login prompt.

### Step 3: Fork and Clone the Repo

Forking creates your own copy on GitHub — that's where your knowledge base will live. You're not working in the original repo.

If you don't have a GitHub account, [sign up here](https://github.com/signup) (free).

1. Go to the [Product Marketing OS on GitHub](https://github.com/sebastienrankin/product-marketing-os) and click **Fork** → **Create fork**
2. Clone your fork:

```bash
git clone https://github.com/YOUR-USERNAME/product-marketing-os.git
```

### Step 4: Open the Repo

```bash
cd product-marketing-os
claude
```

The `CLAUDE.md` file loads automatically and activates the full agent system. No configuration needed.

### Step 5: Share Your Docs

**Point to files (recommended):**

```
Set up my knowledge base using these files:
- ~/Documents/positioning-doc.pdf
- ~/Downloads/persona-deck-notes.txt
- ~/Desktop/competitive-research.md
```

**Point to a folder:**

```
Set up my knowledge base using all the files in ~/Documents/marketing-context/
```

**Add files to context directly:**

You can also use the `/add` command to attach files before sending your message:

```
/add ~/Documents/positioning-doc.pdf
/add ~/Downloads/persona-deck-notes.txt
```

Then type: `Set up my knowledge base with everything I've shared here`

**Paste content directly:**

If your context is short (bullet points, a few paragraphs), you can paste it into the chat:

```
Set up my knowledge base with everything I've shared here
```

You can also invoke agents directly with slash commands:
- `/knowledge-architect populate my SMB segment from this doc`
- `/content-generator write 3 LinkedIn ads for our mid-market segment`
- `/pmm-orchestrator run a full content pipeline for our enterprise segment`

**Continue to [What Happens Next →](#what-happens-next)**

---

## What Happens Next

After you share your docs, the agents will:

1. Show you a **triage plan** — what they found: segments, competitors, case studies. Confirm it looks right or adjust before they build.
2. **Build your knowledge base** — structured files for every segment, competitor, persona, and proof point
3. **Run two reviews** — one checking buyer resonance, one checking brand alignment
4. Deliver a **gap report** — saved as `_gap-report.md` in your repo root. It tells you what's missing, why it matters, who on your team has it, and what you can generate right now

**Case studies:** If you have a case study URL, share it. The agents will visit every story on that page and create a structured file for each one automatically.

> You just shared a pile of messy docs, and now you have a structured marketing foundation. Even a rough first pass is a completely different experience from starting with a blank prompt.

**Adding context over time:** When you have new material to add, share it and say something like:

```
Here's the missing buyer persona research, please update my knowledge base
```

Every time you add context, everything the AI creates gets better.

---

## Share with Your Team

### Option A: Claude Projects *(easiest)*

Upload your `product-knowledge-base/` files to a [Claude.ai](https://claude.ai) Project and invite teammates. They open the Project and start chatting — no setup on their end.

**Limitation:** Files don't sync automatically. Re-upload changed files when you update the knowledge base.

---

### Option B: GitHub MCP *(live sync)*

Connects Claude directly to your GitHub repo so updates sync automatically. More setup, but no manual re-uploading.

**Best for:** Teams that update the knowledge base frequently.

#### Claude Code

1. Create a GitHub Personal Access Token at [github.com/settings/tokens](https://github.com/settings/tokens) with `repo` scope (or `contents: read` for fine-grained tokens)
2. Add the token and connect the MCP server:

```bash
export GITHUB_PERSONAL_ACCESS_TOKEN=ghp_yourtokenhere
claude mcp add github-kb -s user -- npx -y @modelcontextprotocol/server-github
```

#### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

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

Restart Claude Desktop after saving.

#### Claude.ai (web)

Go to **Settings → Integrations** and connect your GitHub account.

---

### Option C: Clone the repo

For teammates using Cursor or VS Code — have them clone your fork's URL and follow the [Cursor setup steps](#setting-up-with-cursor). They skip the fork step and use your repo URL instead.

---

## Troubleshooting

### Cursor

**Activation command failed**
- Copy the entire command (it's long; scroll right to make sure you got all of it)
- Make sure you're in the terminal panel at the bottom, not the chat
- Windows: make sure you're in Git Bash, not PowerShell or CMD

**Agents not responding**
- Quit and reopen Cursor after activation — agents only load on startup
- Check that `.cursor/skills` exists in your sidebar (toggle hidden files: `Cmd+Shift+.` on Mac)
- Be explicit: "Using the Knowledge Architect, set up my knowledge base with these files"

### Claude Code

**`npm install` failed or `claude` not found**
- Check Node.js: `node --version` — needs 18+. Download from [nodejs.org](https://nodejs.org).
- On Mac: restart your terminal after installing Node.js

**Agents not activating**
- Run `claude` from inside the repo: `cd product-marketing-os` first
- Check that `CLAUDE.md` exists at the root of the repo

### Still stuck?

Open an issue on [GitHub](https://github.com/sebastienrankin/product-marketing-os/issues) and we'll help you out.

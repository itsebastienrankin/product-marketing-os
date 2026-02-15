# Setup Guide

Get your Product Marketing OS running in 10 minutes.

---

## Prerequisites

- A **GitHub account** ([sign up here](https://github.com/signup))
- **Cursor IDE** ([download here](https://cursor.sh)) — recommended, but any Markdown editor works
- Your existing product marketing context — positioning docs, persona decks, competitive research, messaging frameworks, even rough notes

---

## Step 1: Clone the Repo

**For teams** (recommended): Fork first, then clone your fork.

1. Go to the [Product Marketing OS repo](https://github.com/sebastienrankin/product-marketing-os) on GitHub
2. Click **Fork** → choose your account or company org
3. Open Cursor → Command Palette (`Cmd + Shift + P`) → `Git: Clone` → paste your fork URL

**For solo use**: Clone directly.

```bash
git clone https://github.com/sebastienrankin/product-marketing-os.git
```

Then open the folder in Cursor. You should see `product-knowledge-base/` with 5 subfolders in the sidebar.

---

## Step 2: Build Your First Segment

This is the foundation. Open Cursor and paste your existing context:

```
I want to create my first segment context folder using the templates in
01-segment-context/{{segment-1}}/.

Here's my product marketing context:
[Paste your existing positioning doc, messaging framework, persona deck,
or any raw context you have — even rough notes work]

My segment:
- Segment name: [e.g., "SMB", "Mid-Market SaaS", "Enterprise Retail"]
- Who they are: [e.g., "Teams of 10-50, $1M-$10M revenue"]
- Main pain points: [Top 3 problems they face]
- What they'd use without us: [Status quo, alternative tools, competitors]
- Our primary position: [One thing we want to own in their mind]

Create a new folder called [segment-name]/ with all 4 files populated from my context.
```

Cursor will create the folder, populate all 4 templates, and ask clarifying questions if needed. Each template also has a **Quick Start Mode** if you prefer to fill them in manually.

Repeat for each segment your product serves (most companies have 2-4).

---

## Step 3: Add Competitive Intelligence

Same approach — paste what you know and let AI structure it:

```
Create a competitive intelligence folder for [COMPETITOR NAME] using the
templates in 05-sales-enablement/{{competitor 1}}/.

Here's what I know about this competitor:
[Paste competitive research, win/loss notes, product comparisons,
or sales team feedback]

Create a new folder called [competitor-name]/ with all 4 files populated.
```

Start with the 1-2 competitors you see most often in deals.

---

## Step 4: Start Using It

With your knowledge base populated, reference it whenever you're generating content:

```
Using the segment context in 01-segment-context/smb/ and the ad copy generator
in 03-prompts/ad-copy-generator.md, generate LinkedIn ad copy targeting SMB teams.
```

The prompts in `03-prompts/` are designed to pull from your segment context. The briefs in `02-briefs/` work the same way. Any time you point AI at your knowledge base files, the output reflects your actual positioning.

---

## Tips

- **Start with one segment.** Get it right, then expand.
- **Imperfect context > no context.** A rough first pass still beats generic AI output.
- **Let AI do the heavy lifting.** Paste in your raw docs and let Cursor structure them into the templates.
- **Use branches and PRs** for significant updates so your team can review before changes go live.

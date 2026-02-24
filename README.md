# Product Marketing OS
*Codify your product marketing foundations so anyone at your company can create on-brand, on-strategy work with AI*

---

## What Is This?

The Product Marketing OS is a knowledge base that codifies everything you know about your product — positioning, messaging, personas, competitive intelligence — into one centralized repository.

**Why it matters:** The biggest blocker to making AI useful isn't the tool itself - it's the context it references. Without structured context about your product, AI generates generic content, hallucinates, and misrepresents what makes your product special. Most of that context lives in your head and is scattered across a dozen docs, which makes it hard for people at your company to create assets relevant to their role without looping you in for reviews. You become a bottleneck.  

When you codify it into a shared knowledge base AI tools can reference, you change the way your entire company works: everyone (sales, demand gen, creative, partnerships) can produce on-brand, on-strategy work with AI, independently. They don't need PMM in the room for every brief, every draft, every review. The AI already knows what makes your product special, because you built the foundation it works from.

---

## How It Works

**1. Codify Your Knowledge** → Fill in the structured templates with your positioning, messaging, personas, and competitive intel — per segment, per competitor. The **Knowledge Architect** agent converts your existing docs into structured templates automatically.

**2. Connect Your Tools** → AI references your knowledge base directly. Teams don't have to assemble context ad-hoc from 6 different places and hope it's up to date. The **PMM OS agent team** works together to get work done and keep you in the loop every step of the way. 

**3. Scale Execution** → When AI and teams are referencing the knowledge base, efficiency improves — consistent positioning, stronger briefs, more resonant creative, fewer review cycles, and faster launches. The **PMM OS agent team** works together to create, review, and refine content. 

**Result:** You've operationalized your product marketing expertise into a system that scales impact across the entire organization. Instead of supporting a few projects, you're building the foundation that supports everyone. This is the future of how Product Marketers bring Sales, Product, and Marketing teams together.  

---

## The Impact

| Before (Fragmented) | After (Structured) |
|---|---|
| Positioning scattered across docs | One centralized knowledge base |
| AI generates generic content | Structured inputs = on-brand outputs |
| Endless review cycles | Pre-aligned content accelerates reviews |
| PMMs in reactive mode | System architects who scale impact |
| Knowledge leaves with people | Codified knowledge persists |

---

## What's Inside

```
product-knowledge-base/
├── 01-segment-context/        # Positioning, messaging, personas, deal mechanics — per segment
├── 02-briefs/                 # Campaign and creative brief templates
├── 03-prompts/                # AI generators for ads, emails, landing pages, case studies
├── 04-style-guides/           # Writing principles for voice and tone consistency
├── 05-sales-enablement/       # Competitive intelligence — per competitor
├── 06-agents/                 # PMM OS agent system (Cursor skills + docs)
└── 07-proof-points/           # Case studies and data claims — substantiated evidence
```

**Segment Context** (`01-segment-context/`) — One folder per market segment, each with 4 files: positioning & narrative, messaging pillars, buyer personas, and market overview. This is the strategic foundation everything else references. [Segment context guide →](./product-knowledge-base/01-segment-context/README.md)

**Sales Enablement** (`05-sales-enablement/`) — One folder per competitor, each with 4 files: competitive overview, battlecard, objection scripts, and FUD playbook. Designed for sales teams to use in active deals. [Sales enablement guide →](./product-knowledge-base/05-sales-enablement/README.md)

**Briefs, Prompts & Style Guides** — Templates and AI prompt generators that pull from your segment context. Outputs reflect your actual positioning, proof points, and customer language — not generic copy.

**Agents** (`06-agents/`) — Cursor skills that act as a PMM agent team: Knowledge Architect, Content Generator, Consistency Guardian, Advisory Board, and Orchestrator. Copy or symlink `06-agents/skills/` into `.cursor/skills/` to use them in Cursor. [Agents guide →](./product-knowledge-base/06-agents/README.md)

**Proof Points** (`07-proof-points/`) — Codified evidence that backs your marketing claims. One file per customer case study (approved quotes, metrics, competitive switch context) and a consolidated data claims repository (sourced stats with strength ratings and status tracking). Content Generator pulls from these automatically; Consistency Guardian verifies claims against them. [Proof points guide →](./product-knowledge-base/07-proof-points/README.md)

---

## Quick Start

1. **Clone this repo** → [Setup Guide](./SETUP-GUIDE.md)
2. **Set up agents** (optional but recommended) → Copy or symlink `06-agents/skills/` into `.cursor/skills/` to activate the PMM agent team
3. **Build your first segment** → Use the **Knowledge Architect** agent or templates in `01-segment-context/` ([guide](./product-knowledge-base/01-segment-context/README.md))
4. **Add your first competitor** → Use the **Knowledge Architect** agent or templates in `05-sales-enablement/` ([guide](./product-knowledge-base/05-sales-enablement/README.md))
5. **Add proof points** → Use the **Knowledge Architect** agent to codify case studies from URLs and organize data claims in `07-proof-points/` ([guide](./product-knowledge-base/07-proof-points/README.md))
6. **Generate content** → Use the **Content Generator** agent or prompts in `03-prompts/` with your segment context as input

**[Read the Setup Guide →](./SETUP-GUIDE.md)**

---

## FAQ

**Do I need to be technical?**
No. Everything is Markdown files. If you can edit a document, you can use this.

**How long does it take?**
Cloning the repo: 10 minutes. Building your first segment: 2-4 hours with AI assistance.

**Can my team use this?**
Yes. Share via GitHub and everyone accesses the same knowledge base.

**What if I don't use Cursor?**
The knowledge base works with any tool that reads files — Cursor, Claude, ChatGPT, or whatever comes next. The agent system (`06-agents/`) is specifically designed for Cursor, but you can still use the templates, prompts, and briefs with any AI tool.

**What are the agents?**
The PMM OS includes a team of specialized AI agents that work together: **Knowledge Architect** (codifies your knowledge), **Content Generator** (creates marketing content), **Consistency Guardian** (ensures alignment), **Advisory Board** (provides buyer feedback), and **Orchestrator** (coordinates the team). They automatically hand off work, review and refine content, and ensure quality before delivering results. [Agents guide →](./product-knowledge-base/06-agents/README.md)

---

## License

MIT License — free to use, adapt, and extend.

Created by [Sebastien Rankin](https://github.com/sebastienrankin)

# Product Marketing OS

This is a Product Marketing OS: a structured knowledge base for codifying product marketing strategy, with AI agents that automate knowledge codification, content generation, and quality review. All marketing context lives in `product-knowledge-base/`.

---

## Agent Auto-Routing

Before responding to any PMM request, identify the right agent from the table below, read that agent's SKILL.md, then execute following those instructions.

| Intent | Agent | Read this file |
|--------|-------|----------------|
| Set up knowledge base, codify docs or notes, populate segment or competitor folders, codify case studies from URLs, fill gaps from gap report | **Knowledge Architect** | `product-knowledge-base/06-agents/skills/knowledge-architect/SKILL.md` |
| Generate ads, emails, landing pages, case studies, campaign briefs, content variants | **Content Generator** | `product-knowledge-base/06-agents/skills/content-generator/SKILL.md` |
| Review for buyer resonance — simulate buying committee reaction, get persona-grounded feedback | **Advisory Board** | `product-knowledge-base/06-agents/skills/advisory-board/SKILL.md` |
| Review for brand and positioning alignment — check consistency against PMM OS standards | **Consistency Guardian** | `product-knowledge-base/06-agents/skills/consistency-guardian/SKILL.md` |
| Full pipeline, multi-agent workflow, quality-gated output, or any goal that spans multiple agents | **PMM Orchestrator** | `product-knowledge-base/06-agents/skills/pmm-orchestrator/SKILL.md` |

**Always read the full SKILL.md before proceeding.** Do not skip this step. Do not ask for permission — read it, then execute.

When a request clearly spans multiple agents (e.g., "codify this and create campaign assets"), invoke the PMM Orchestrator — it defines all pipeline sequences, handoff logic, and quality gates.

**On parallel review:** The Orchestrator pipelines call for Advisory Board and Consistency Guardian to review simultaneously. In Claude Code, run them sequentially in the same session, then merge feedback per the Orchestrator's merging rules. The output is equivalent.

---

## Knowledge Base Structure

```
product-knowledge-base/
├── 01-segment-context/    # positioning, messaging, personas per segment
├── 02-briefs/             # campaign & creative brief templates
├── 03-prompts/            # platform-specific content generators
├── 04-style-guides/       # brand voice & writing principles
├── 05-sales-enablement/   # competitive intelligence per competitor
├── 06-agents/             # agent specifications and Cursor Skills
└── 07-proof-points/       # case studies and data claims
```

When generating content, always check `01-segment-context/`, `07-proof-points/`, and `04-style-guides/` for the relevant segment before creating anything.

---

## Slash Commands

Agents can also be invoked explicitly:

- `/knowledge-architect` — knowledge codification
- `/content-generator` — content creation
- `/advisory-board` — buyer resonance review
- `/consistency-guardian` — brand alignment review
- `/pmm-orchestrator` — full pipeline coordination

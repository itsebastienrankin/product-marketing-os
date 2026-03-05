# PMM OS Agent System

A team of specialized AI agents that amplify PMM work by automating knowledge codification, content generation, quality assurance, and strategic support.

## Quick Start

The agents are supported in both **Cursor** and **Claude Code**. See the relevant setup section below, then use the example prompts to get started.

### Example Usage

**Knowledge Base Onboarding (new users):**
```
"Set up my knowledge base with everything I've shared here"
```

**Knowledge Codification:**
```
"I have a positioning doc and persona deck — populate my SMB segment folder"
```

**Content Generation:**
```
"Generate 3 Meta ad variants for our Q1 SMB campaign targeting CFOs"
```

**Gap Filling:**
```
"Here's the missing persona research — update my knowledge base"
```

**Full Pipeline:**
```
"Here are my notes on the mid-market segment — codify it and create campaign assets"
```

## Available Agents

### Knowledge Architect (Builder)
**Purpose:** Converts unstructured PMM knowledge into structured PMM OS templates

**Use When:**
- You're setting up your knowledge base for the first time (onboarding — dump everything)
- You have positioning docs, persona decks, or research to codify
- You need to populate segment context folders
- You want to create competitive intelligence files
- You have meeting notes or transcripts to structure
- You want to codify published case studies from a URL into structured proof point files
- You need to organize data claims with sources, strength ratings, and status tracking
- You're filling gaps identified in your gap report

### Content Generator (Builder)
**Purpose:** Creates marketing content and briefs using PMM OS knowledge base as context

**Use When:**
- You need ads, emails, landing pages, or case studies
- You want to create campaign or creative briefs
- You want content aligned with segment positioning
- You need platform-specific content (Meta, LinkedIn, Google SEM)
- You need multiple variants for A/B testing

### Advisory Board (Reviewer)
**Purpose:** Acts as a brutally honest buying committee to validate that content AND codified knowledge resonate with real buyers

**Use When:**
- You want to know if content will resonate before going to market
- You need buyer perspective on campaign briefs or creative assets
- You want to validate that personas, positioning, or messaging match buyer reality
- You need proxy user testing before spending budget

### Consistency Guardian (Reviewer)
**Purpose:** Reviews content and knowledge for alignment with PMM OS positioning, messaging, and style guidelines

**Use When:**
- You want to check content alignment before publishing
- You need to validate brand consistency
- You want to audit segment context for completeness
- You're reviewing content from other team members

### PMM Orchestrator (Coordinator)
**Purpose:** Coordinates the agent team into pipelines with parallel review, feedback merging, and quality gates

**Use When:**
- You have a higher-level goal that involves multiple agents
- You want quality-gated outputs (reviewed, revised, scored)
- You're running a full campaign workflow

## How Agents Work Together

The Orchestrator coordinates all handoffs. Individual agents focus on their craft.

### Content Creation Pipeline
1. **(Optional) Knowledge Architect** — Codifies raw context if needed
2. **Content Generator** — Creates draft assets
3. **Advisory Board + Consistency Guardian** — Review the same draft simultaneously (parallel)
4. **Orchestrator** — Merges feedback into unified constraint list
5. **Content Generator** — Revises with merged constraints
6. **Quality Gate** — Ship when resonance ≥ 85 AND alignment ≥ 90

### Knowledge Codification Pipeline
1. **Knowledge Architect** — Populates templates from raw inputs
2. **Advisory Board + Consistency Guardian** — Review simultaneously (parallel)
3. **Orchestrator** — Merges feedback
4. **Knowledge Architect** — Refines based on merged feedback
5. **Quality Gate** — Ship when thresholds met

### Full Campaign Pipeline
1. Run Knowledge Codification to completion
2. Run Content Creation using the codified context

### Knowledge Base Onboarding Pipeline
1. **Knowledge Architect** — Triages all shared context (classifies content, identifies segments/competitors)
2. **Orchestrator** — Presents triage plan to user for confirmation
3. **Knowledge Architect** — Populates all templates in one pass
4. **Advisory Board + Consistency Guardian** — Review simultaneously (parallel)
5. **Orchestrator** — Merges feedback
6. **Knowledge Architect** — Refines, then cleans up placeholder template files
7. **Quality Gate** — Ship when thresholds met
8. **Knowledge Architect** — Produces comprehensive gap report (`_gap-report.md`)

### Gap-Filling Follow-up
When user returns with missing context referenced in the gap report:
1. **Knowledge Architect** — Fills specific gaps with new context
2. **Advisory Board + Consistency Guardian** — Targeted review of updated sections only
3. **Knowledge Architect** — Updates `_gap-report.md` (marks resolved, surfaces remaining)

### Proof Points Integration
Content Generator automatically checks `07-proof-points/case-studies/` for approved quotes and `07-proof-points/data-claims/data-claims.md` for substantiated claims when generating content. Consistency Guardian verifies that any claims or quotes in generated content trace back to these files.

### Why Parallel Review?
Advisory Board and Consistency Guardian evaluate on different axes — buyer resonance vs. PMM OS alignment. Running them in parallel and merging their feedback means the builder agent gets the full picture in one pass, preventing the oscillation that happens with sequential review.

## Agent Specifications

For detailed specifications, see:
- [Agent System Design](./AGENT-SYSTEM-DESIGN.md) — Complete system architecture
- [PMM Orchestrator Skill](./skills/pmm-orchestrator/SKILL.md) — Pipeline definitions and coordination
- [Knowledge Architect Skill](./skills/knowledge-architect/SKILL.md) — Knowledge codification
- [Content Generator Skill](./skills/content-generator/SKILL.md) — Content and brief creation
- [Advisory Board Skill](./skills/advisory-board/SKILL.md) — Buyer resonance review
- [Consistency Guardian Skill](./skills/consistency-guardian/SKILL.md) — PMM OS alignment review

## Using with Claude Code

Agents load automatically — no setup required beyond cloning the repo.

1. Install Claude Code: `npm install -g @anthropic-ai/claude-code`
2. Open the repo: `cd product-marketing-os && claude`
3. Start using it. The `CLAUDE.md` at the repo root is loaded automatically and routes your requests to the right agent.

**How auto-routing works:** When you make a request, Claude Code reads `CLAUDE.md`, identifies the appropriate agent, reads that agent's `SKILL.md`, and executes. No manual configuration needed.

**Explicit invocation with slash commands:**
```
/knowledge-architect set up my knowledge base with everything I've shared here
/content-generator generate 3 Meta ad variants for our SMB segment targeting CFOs
/advisory-board review these LinkedIn ads for buyer resonance
/consistency-guardian check this landing page for brand alignment
/pmm-orchestrator run a full content creation pipeline for our enterprise campaign
```

**On parallel review:** Orchestrator pipelines call for Advisory Board and Consistency Guardian to run simultaneously. In Claude Code, they run sequentially in the same session — the feedback merging and quality gating work identically.

---

## Using with Cursor

Agents are Cursor Skills. To activate them in your project:

1. Ensure you have a `.cursor` folder in your project root.
2. Copy or symlink each folder from `product-knowledge-base/06-agents/skills/` into `.cursor/skills/`:
   - `knowledge-architect`
   - `content-generator`
   - `advisory-board`
   - `consistency-guardian`
   - `pmm-orchestrator`

**Example (macOS/Linux):** From project root:
```bash
mkdir -p .cursor/skills && cd .cursor/skills && for name in knowledge-architect content-generator consistency-guardian advisory-board pmm-orchestrator; do ln -sf "../../product-knowledge-base/06-agents/skills/$name" "$name"; done && cd ../..
```

## Tips for Best Results

1. **Be Specific:** Include segment name, persona, campaign context
2. **Provide Context:** Share campaign briefs, segment context, or relevant docs
3. **Reference PMM OS:** Agents work best when the knowledge base is populated
4. **Trust the Pipeline:** The orchestrated pipeline ensures both buyer resonance AND PMM OS alignment
5. **Populate Knowledge First:** Content quality is only as good as the underlying segment context

## Troubleshooting

**Agent not activating?**
- Be explicit about what you want (e.g., "populate segment context" vs. "help with segment")
- Check that skills are copied/linked into `.cursor/skills/`
- Check that relevant PMM OS files exist

**Content not aligned?**
- Ensure segment context files are populated
- Use Consistency Guardian to identify specific alignment issues

**Content doesn't resonate?**
- Use Advisory Board to get buyer perspective
- Review buyer-persona-overview.md — personas may need updating

**First draft not hitting quality bar?**
- Ensure the knowledge base is well-populated before generating content
- The pipeline quality depends on the foundation — garbage in, garbage out

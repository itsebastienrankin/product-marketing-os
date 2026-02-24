# PMM OS Agent System

A team of specialized AI agents that amplify PMM work by automating knowledge codification, content generation, quality assurance, and strategic support.

## Quick Start

The agents are implemented as **Cursor Skills**. To use them in Cursor:

1. **Copy or symlink** the contents of `product-knowledge-base/06-agents/skills/` into your project's `.cursor/skills/` folder so Cursor can load them.
2. Then ask for help with PMM tasks and the agents will activate based on your request.

### Example Usage

**Knowledge Codification:**
```
"I have a positioning doc and persona deck — populate my SMB segment folder"
```

**Content Generation:**
```
"Generate 3 Meta ad variants for our Q1 SMB campaign targeting CFOs"
```

**Campaign Brief:**
```
"Create a campaign brief for our Q2 product launch targeting enterprise"
```

**Quality Assurance:**
```
"Review this ad copy for alignment with our SMB positioning"
```

**Full Pipeline:**
```
"Here are my notes on the mid-market segment — codify it and create campaign assets"
```

## Available Agents

### Knowledge Architect (Builder)
**Purpose:** Converts unstructured PMM knowledge into structured PMM OS templates

**Use When:**
- You have positioning docs, persona decks, or research to codify
- You need to populate segment context folders
- You want to create competitive intelligence files
- You have meeting notes or transcripts to structure
- You want to codify published case studies from a URL into structured proof point files
- You need to organize data claims with sources, strength ratings, and status tracking

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
mkdir -p .cursor/skills
for name in knowledge-architect content-generator consistency-guardian advisory-board pmm-orchestrator; do
  ln -sf "../../product-knowledge-base/06-agents/skills/$name" ".cursor/skills/$name"
done
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

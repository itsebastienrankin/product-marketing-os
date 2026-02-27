# PMM OS Agent System Design

**Purpose:** A team of specialized AI agents that amplify PMM work by automating knowledge codification, content generation, quality assurance, and strategic support.

---

## Architecture Principles

1. **Single Responsibility** — Each agent does ONE thing well. Builders build. Reviewers review. The Orchestrator coordinates.
2. **Handoff logic lives in the Orchestrator only** — Individual agents describe what they accept and produce. They never decide who to call next.
3. **Parallel review** — Advisory Board (resonance) and Consistency Guardian (alignment) review the same draft simultaneously. Their feedback is merged into one revision pass.
4. **Clear I/O contracts** — Every agent has well-defined inputs and outputs so handoffs are clean and predictable.
5. **Quality-gated outputs** — Nothing ships until it passes both resonance (≥ 85) and alignment (≥ 90) thresholds, or the iteration limit is reached with explicit caveats.

---

## Agent Overview

| Agent | Category | Primary Function | Key Value |
|-------|----------|-----------------|-----------|
| **PMM Orchestrator** | Coordinator | Selects pipelines, orchestrates handoffs, merges feedback, gates quality | Ensures agents work as a cohesive system |
| **Knowledge Architect** | Builder | Codifies unstructured knowledge into PMM OS templates | Eliminates manual template filling, preserves institutional knowledge |
| **Content Generator** | Builder | Creates marketing content and briefs using knowledge base context | Scales content production while maintaining brand consistency |
| **Advisory Board** | Reviewer | Reviews from buyer persona perspectives (brutally honest feedback) | Proxy user testing — ensures outputs resonate before launch |
| **Consistency Guardian** | Reviewer | Reviews for alignment with positioning, messaging, and style | Prevents brand drift, ensures on-strategy outputs |

---

## Detailed Agent Specifications

### PMM Orchestrator

**Role:** Coordinates the agent team. Selects pipelines, orchestrates handoffs, runs parallel review cycles, merges feedback, and gates quality.

**Key Capability:** The ONLY agent that contains pipeline definitions and handoff logic. All other agents focus purely on their craft.

**When Activated:** Default for higher-level goals. For single-step tasks, individual agents can be used directly.

**Key Principle:** Bias toward fewer, higher-quality outputs over many unreviewed drafts.

---

### Knowledge Architect

**Role:** Converts unstructured PMM knowledge into structured PMM OS templates.

**Accepts:** Bulk dumps of mixed marketing context, unstructured documents, notes, transcripts, research, case study URLs, data claims docs, revision constraints
**Produces:** Triage report (onboarding), populated PMM OS template files (segment context, competitive intelligence, case studies, data claims), comprehensive gap report

**Use Cases:**
- "Set up my knowledge base with everything I've shared here" (onboarding)
- "I have a positioning doc and persona deck — populate my SMB segment folder"
- "Convert these competitive research notes into a battlecard for Competitor X"
- "Codify all the case studies from [URL] into our proof points library"
- "Here's the missing persona research — update my knowledge base" (gap-filling)

---

### Content Generator

**Role:** Creates marketing content and briefs using PMM OS knowledge base as context.

**Accepts:** Segment context, campaign brief/requirements, style guide, prompt templates, brief templates, revision constraints
**Produces:** Marketing assets (ads, emails, landing pages, case studies), campaign briefs, creative briefs

**Use Cases:**
- "Generate 3 Meta ad variants for our Q1 SMB campaign targeting CFOs"
- "Create a sales email sequence for enterprise prospects"
- "Build a campaign brief for our Q2 product launch"

---

### Advisory Board

**Role:** Acts as a brutally honest buying committee to provide persona-grounded feedback on content AND codified knowledge.

**Accepts:** Content or codified knowledge to review, segment personas
**Produces:** Per-persona resonance scores (0-100), prioritized feedback, actionable recommendations

**Use Cases:**
- "Review this campaign brief from our SMB buyer personas' perspective"
- "Get Advisory Board feedback on these 3 Meta ads for CFOs"
- "Do these personas and pain points actually match what buyers care about?"

**Key Value:** Catches resonance problems at the source — whether in the knowledge base itself or in downstream content built from it.

---

### Consistency Guardian

**Role:** Reviews content and codified knowledge for alignment with PMM OS positioning, messaging, and style guidelines.

**Accepts:** Content or codified knowledge to review, PMM OS knowledge base
**Produces:** Alignment score (0-100) with sub-scores, issue list by severity, paste-ready rewrite constraints

**Use Cases:**
- "Review this ad copy for alignment with our SMB positioning"
- "Check this email against our messaging pillars"
- "Audit this segment context for completeness and internal consistency"

---

## Pipelines

All pipeline definitions live in the **PMM Orchestrator** skill. Summary:

### Pipeline 1: Content Creation

```
[Optional] Knowledge Architect → Content Generator → Advisory Board + Consistency Guardian (parallel) → Merge Feedback → Content Generator (revise) → Quality Gate
```

### Pipeline 2: Knowledge Codification

```
Knowledge Architect → Advisory Board + Consistency Guardian (parallel) → Merge Feedback → Knowledge Architect (revise) → Quality Gate
```

### Pipeline 3: Full Campaign (Codify + Create)

```
Pipeline 2 (to completion) → Pipeline 1 (using codified context)
```

### Pipeline 4: Knowledge Base Onboarding

```
Knowledge Architect (triage) → User confirms plan → Knowledge Architect (populate all) → Advisory Board + Consistency Guardian (parallel) → Merge Feedback → Knowledge Architect (revise) → Quality Gate → Knowledge Architect (template cleanup + gap report)
```

Use when a new user dumps all their raw marketing context and wants the entire knowledge base set up from scratch. Includes content triage, user confirmation, template cleanup (removes placeholder files), and a comprehensive gap report saved as `_gap-report.md`.

### Key Design Decisions

**Parallel Review:** Advisory Board and Consistency Guardian evaluate on orthogonal axes (resonance vs. alignment). Running them simultaneously and merging feedback into a single revision pass:
- Gives the builder agent the full picture at once
- Prevents oscillation between resonance and alignment fixes
- Cuts review cycles in half vs. sequential review

**Advisory Board Reviews Knowledge:** Codified knowledge is the foundation for all downstream content. If positioning or personas don't resonate with real buyers, everything built on top will miss. Advisory Board validates this at the source.

**Feedback Merging:** The Orchestrator combines both reviewer reports into a unified constraint list, deduplicates overlapping feedback, resolves conflicts, and formats constraints as paste-ready instructions for the builder agent.

**Onboarding Pipeline:** New users can dump all their raw marketing context at once. The Knowledge Architect triages inputs, identifies segments and competitors, presents a plan for user confirmation, populates everything in one pass, cleans up placeholder templates, and produces a comprehensive gap report. This removes the need for users to understand PMM OS structure before getting started.

**Templates are Disposable:** After onboarding, placeholder template folders and files are deleted. The Knowledge Architect's skill definition contains all structural knowledge needed to create new segments, competitors, and proof points in the future — it can also reference existing populated files as examples.

---

## Quality Scoring

### Thresholds

| Metric | Source | Ship | Iterate |
|--------|--------|------|---------|
| Resonance | Advisory Board | ≥ 85 | < 85 |
| Alignment | Consistency Guardian | ≥ 90 | < 90 |

Both must be met to ship without caveats.

### Alignment Score Dimensions (Consistency Guardian)

- Positioning Alignment (0-20)
- Messaging Pillar Alignment (0-20)
- Persona Fit (0-15)
- Style & Voice Compliance (0-15)
- Claim Substantiation (0-15)
- Format & Technical Compliance (0-15)

### Iteration Limits

- Content Creation: max 3 review cycles
- Knowledge Codification: max 2 review cycles
- Knowledge Base Onboarding: max 2 review cycles

---

## Consolidated vs. Dropped Agents

The following agents from earlier designs have been consolidated into existing agents:

| Former Agent | Absorbed By | Rationale |
|-------------|-------------|-----------|
| Template Populator | Knowledge Architect | Identical function — extracting from unstructured sources and populating templates |
| Competitive Intelligence Analyst | Knowledge Architect | KA already handles all competitive intel templates (overview, battlecard, objection handling, FUD) |
| Content Optimizer | Content Generator | CG already includes optimization, variant generation, and revision loops |
| Brief Builder | Content Generator | CG now handles campaign brief and creative brief generation using `02-briefs/` templates |

### Future Consideration

- **Segment Strategist** — Strategic advisory for net-new segment identification and positioning differentiation. Partially covered by Knowledge Architect (gap identification) + Consistency Guardian (alignment review), but the pure strategy advisory function could warrant a dedicated agent if the use case is frequent enough.

---

## Technical Architecture

### Agent Structure

Each agent is implemented as a Cursor Skill in `product-knowledge-base/06-agents/skills/` with:
- Clear I/O contract (what it accepts and produces)
- Role definition and capabilities
- Workflow and methodology
- Quality checklist
- NO handoff logic (that lives only in the Orchestrator)

### Knowledge Base Integration

Agents reference the `product-knowledge-base/` structure:
- `01-segment-context/` — Segment positioning, messaging, personas, market overview
- `02-briefs/` — Campaign brief and creative brief templates
- `03-prompts/` — Platform-specific content generators
- `04-style-guides/` — Writing principles and voice guidelines
- `05-sales-enablement/` — Competitive intelligence templates
- `07-proof-points/` — Case studies (approved quotes, metrics, competitive switch context) and data claims (substantiated proof points with sources and status)

---

## Success Metrics

- **Time Saved:** Reduction in manual template filling and content creation
- **Resonance:** Advisory Board scores (buyer perspective) per persona
- **Alignment:** Consistency Guardian scores (PMM OS alignment)
- **First-Draft Quality:** Percentage of outputs that pass quality gate on first review cycle
- **Coverage:** Percentage of PMM OS templates populated

# PMM OS Agent System Design

**Purpose:** A team of specialized AI agents that amplify PMM work by automating knowledge codification, content generation, quality assurance, and strategic support.

---

## Agent Overview

| Agent | Primary Function | Key Value |
|-------|-----------------|-----------|
| **PMM Orchestrator** | Coordinates the agent team, selects pipelines, runs review loops | Ensures agents work together efficiently for best outcomes |
| **Knowledge Architect** | Codifies unstructured knowledge into PMM OS templates | Eliminates manual template filling, preserves institutional knowledge |
| **Content Generator** | Creates marketing content using knowledge base context | Scales content production while maintaining brand consistency |
| **Advisory Board** | Reviews content from buyer persona perspectives (brutally honest feedback) | Proxy user testing—ensures content resonates before launch |
| **Consistency Guardian** | Reviews content for alignment with positioning/messaging | Prevents brand drift, ensures on-strategy outputs |
| **Brief Builder** | Generates campaign and creative briefs | Accelerates campaign kickoff, ensures completeness |
| **Competitive Intelligence Analyst** | Builds competitive battlecards and objection handling | Turns competitive research into actionable sales enablement |
| **Template Populator** | Fills templates from various input sources | Converts meetings, docs, research into structured knowledge |
| **Segment Strategist** | Develops and refines segment context | Helps PMMs think strategically about market segmentation |
| **Content Optimizer** | Refines existing content for performance | Improves conversion rates, maintains brand voice |

---

## Detailed Agent Specifications

### 0. PMM Orchestrator Agent

**Role:** Coordinates the agent team so they work as a cohesive system. Selects pipelines, orchestrates handoffs, runs review and revision loops, and ensures quality thresholds are met before returning results to the user.

**Capabilities:**
- Classifies user requests and selects the appropriate pipeline
- Coordinates handoffs between agents (e.g., Content Generator → Advisory Board → Content Generator → Consistency Guardian)
- Runs revision loops until quality thresholds are met (Advisory Board resonance ≥ 85, Consistency Guardian alignment ≥ 90)
- Combines feedback from multiple agents into explicit constraints for revision
- Returns final outputs with quality scores and rationale

**When Activated:** Default for higher-level goals (e.g., "Create campaign assets for SMB CFOs"). For single-step tasks, individual agents can be used directly.

**Key Principle:** Bias toward fewer, higher-quality outputs over many unreviewed drafts.

---

### 1. Knowledge Architect Agent

**Role:** Converts unstructured PMM knowledge (positioning docs, persona decks, competitive research, meeting notes) into structured PMM OS templates.

**Capabilities:**
- Extracts key information from unstructured sources
- Maps information to appropriate PMM OS templates
- Populates segment context files (positioning, messaging, personas, market overview)
- Populates competitive intelligence files (overview, battlecard, objection handling, FUD)
- Identifies gaps and asks clarifying questions
- Maintains consistency across related templates

**Use Cases:**
- "I have a positioning doc and persona deck - populate my SMB segment folder"
- "Convert these competitive research notes into a battlecard for Competitor X"
- "I just had a customer interview - update the buyer persona with new insights"

**Input:** Unstructured documents, notes, research, existing PMM materials
**Output:** Populated PMM OS template files

---

### 2. Content Generator Agent

**Role:** Creates marketing content (ads, emails, landing pages, case studies) using PMM OS knowledge base as context.

**Capabilities:**
- References segment context for positioning and messaging
- Applies style guide principles automatically
- Generates platform-specific content (Meta ads, LinkedIn ads, Google SEM, etc.)
- Ensures character limits and format requirements
- Incorporates proof points and social proof appropriately
- Creates multiple variants for A/B testing

**Use Cases:**
- "Generate 3 Meta ad variants for our Q1 SMB campaign targeting CFOs"
- "Create a sales email sequence for enterprise prospects"
- "Build a solution landing page for mid-market segment"

**Input:** Campaign brief, segment context, content type, format requirements
**Output:** Ready-to-use marketing content

---

### 3. Brief Builder Agent

**Role:** Generates comprehensive campaign and creative briefs from high-level requirements.

**Capabilities:**
- Extracts requirements from conversations or documents
- Populates campaign brief template with structured information
- Populates creative brief template with design requirements
- References segment context for audience and messaging
- Identifies missing information and requests clarification
- Ensures RACI matrix and stakeholder alignment

**Use Cases:**
- "Create a campaign brief for our Q2 product launch targeting enterprise"
- "Build a creative brief for our holiday campaign"
- "Generate a brief from this Slack conversation about the new feature launch"

**Input:** Campaign requirements, objectives, stakeholders, timeline
**Output:** Complete campaign or creative brief

---

### 4. Competitive Intelligence Analyst Agent

**Role:** Transforms competitive research into structured sales enablement materials.

**Capabilities:**
- Analyzes competitive research and win/loss data
- Populates competitor overview files
- Creates battlecards with head-to-head comparisons
- Develops objection handling scripts using A-R-P-C framework
- Builds FUD playbooks with counter-strategies
- Updates competitive materials as new intel emerges

**Use Cases:**
- "Create a battlecard for Competitor X based on this win/loss analysis"
- "Update our objection handling for Competitor Y's new pricing"
- "Build a FUD playbook from sales team feedback"

**Input:** Competitive research, win/loss data, sales feedback, competitor updates
**Output:** Competitive intelligence files (overview, battlecard, objection handling, FUD)

---

### 5. Advisory Board Agent

**Role:** Acts as a brutally honest "advisory board" of personas from the target segment. Reviews marketing materials (briefs, creative assets, sales enablement) from buyer perspectives and provides proxy feedback on what resonates—or doesn't.

**Capabilities:**
- Reads buyer personas from segment context (`buyer-persona-overview.md`)
- "Becomes" each persona (Economic Buyer, Champion, Technical Buyer)
- Reviews content from each persona's perspective
- Provides brutally honest feedback about what doesn't resonate and why
- Gives actionable recommendations prioritized by impact
- Scores resonance (0–100) per persona

**Use Cases:**
- "Review this campaign brief from our SMB buyer personas' perspective"
- "Get Advisory Board feedback on these 3 Meta ads for CFOs"
- "What would our Economic Buyer think about this landing page?"

**Input:** Content to review (briefs, ads, emails, landing pages, sales enablement), segment context, personas to evaluate from
**Output:** Advisory Board report with persona-specific feedback, resonance scores, and prioritized recommendations

**When Activated:** Automatically receives work from Content Generator and Brief Builder—or when user explicitly asks for buyer perspective. Always runs before Consistency Guardian on content pipelines.

---

### 6. Consistency Guardian Agent

**Role:** Reviews content for alignment with PMM OS positioning, messaging, and style guidelines.

**Capabilities:**
- Checks content against segment positioning
- Validates messaging pillar alignment
- Enforces style guide principles
- Identifies brand voice inconsistencies
- Flags unsubstantiated claims
- Suggests improvements for better alignment
- Reviews character limits and format compliance

**Use Cases:**
- "Review this ad copy for alignment with our SMB positioning"
- "Check this email against our messaging pillars"
- "Audit this landing page for style guide compliance"

**Input:** Content to review, segment context, style guide
**Output:** Review report with alignment issues and recommendations

---

### 7. Template Populator Agent

**Role:** Fills PMM OS templates from various input sources (meetings, documents, research).

**Capabilities:**
- Extracts information from meeting transcripts
- Processes research documents
- Converts notes into structured templates
- Handles multiple input formats (text, markdown, PDFs)
- Asks clarifying questions for missing information
- Maintains template structure and formatting

**Use Cases:**
- "Populate a segment context folder from this customer interview transcript"
- "Fill the campaign brief template from this project kickoff meeting notes"
- "Convert this competitive analysis PDF into a competitor overview"

**Input:** Meeting transcripts, documents, notes, research files
**Output:** Populated PMM OS templates

---

### 8. Segment Strategist Agent

**Role:** Helps PMMs develop and refine segment context strategically.

**Capabilities:**
- Analyzes existing segment context for gaps
- Suggests improvements to positioning and messaging
- Identifies opportunities for new segments
- Recommends messaging pillar refinements
- Validates persona completeness
- Ensures segment differentiation

**Use Cases:**
- "Review my SMB segment context and suggest improvements"
- "Help me refine my messaging pillars for enterprise"
- "Identify gaps in my buyer persona documentation"

**Input:** Existing segment context files
**Output:** Strategic recommendations and refinements

---

### 9. Content Optimizer Agent

**Role:** Refines existing content for better performance while maintaining brand consistency.

**Capabilities:**
- Analyzes content for conversion optimization
- Suggests improvements while maintaining brand voice
- Ensures alignment with positioning
- Optimizes for platform-specific best practices
- Creates performance-focused variants
- Maintains style guide compliance

**Use Cases:**
- "Optimize this landing page copy for better conversion"
- "Improve this ad copy while keeping our brand voice"
- "Refine this email sequence for better engagement"

**Input:** Existing content, performance data (optional), segment context
**Output:** Optimized content variants

---

## Agent Interaction Patterns

All agents work as a team. The Orchestrator coordinates pipelines; individual agents hand off work automatically when their outputs should be reviewed or refined by another agent.

### Content Creation Pipeline (Primary)

1. **(Optional) Knowledge Architect** → Codifies raw context if user provides unstructured inputs
2. **Content Generator** → Creates draft content (ads, emails, landing pages, case studies)
3. **Advisory Board** → Reviews content from buyer persona perspectives; provides brutally honest feedback and resonance scores
4. **Content Generator** → Revises content based on Advisory Board feedback
5. **Consistency Guardian** → Reviews revised content for PMM OS alignment; scores and identifies remaining issues
6. **Revision Loop** → If Advisory Board resonance < 85 or Consistency Guardian alignment < 90: combine feedback, revise with Content Generator, re-run both reviewers (max 3 cycles)
7. **Final Output** → Return content with resonance + alignment scores

### Brief Creation Pipeline

1. **Brief Builder** → Creates campaign or creative brief
2. **Advisory Board** → Reviews brief from buyer persona perspectives (Will this campaign resonate?)
3. **Consistency Guardian** → Reviews for alignment and completeness
4. **Revision Loop** → If needed, Brief Builder revises based on combined feedback

### New Segment Setup

1. **Knowledge Architect** → Populates segment context templates
2. **Consistency Guardian** → Reviews for completeness and alignment
3. **Revision Loop** → Knowledge Architect refines based on feedback

### Competitive Research

1. **Template Populator** or **Knowledge Architect** → Structures competitive intelligence
2. **Competitive Intelligence Analyst** → Builds battlecard, objection handling, FUD playbook
3. **Consistency Guardian** → Reviews for completeness

### When Advisory Board Activates

- **Automatic:** Receives all content from Content Generator and Brief Builder before Consistency Guardian runs
- **Manual:** User asks for buyer perspective (e.g., "Get Advisory Board feedback on this landing page")
- **Scope:** Briefs, creative assets (ads, emails, landing pages), sales enablement (battlecards, talk tracks)

### Feedback Loops

- **Advisory Board → Content Generator:** Persona-specific constraints for revision (resonance issues)
- **Consistency Guardian → Content Generator / Knowledge Architect:** Alignment constraints for revision
- **Segment Strategist → Knowledge Architect:** Strategic updates to templates

---

## Implementation Strategy

### Phase 1: Core Agents (Implemented)
1. **PMM Orchestrator** - Coordinates the team; runs pipelines and revision loops
2. **Knowledge Architect** - Highest value, addresses main PMM pain point
3. **Content Generator** - Immediate productivity gains
4. **Advisory Board** - Buyer resonance feedback; runs before Consistency Guardian on content
5. **Consistency Guardian** - Quality assurance foundation

### Phase 2: Strategic Agents
6. **Brief Builder** - Accelerates campaign kickoff (Advisory Board reviews briefs)
7. **Competitive Intelligence Analyst** - Sales enablement focus

### Phase 3: Enhancement Agents
8. **Template Populator** - Workflow automation
9. **Segment Strategist** - Strategic support
10. **Content Optimizer** - Performance optimization

---

## Technical Architecture

### Agent Structure
Each agent is implemented as a Cursor Skill in `product-knowledge-base/06-agents/skills/` with:
- Clear role definition and capabilities
- Input/output specifications
- Reference to PMM OS knowledge base structure
- Integration with existing templates and prompts

### Knowledge Base Integration
- Agents reference `product-knowledge-base/` structure
- Read segment context files for positioning/messaging
- Read style guides for voice/tone
- Write to appropriate template locations
- Maintain template structure and formatting

### Agent Communication & Handoffs

- **Orchestrator** coordinates pipelines and revision loops; decides when to iterate.
- **Content Generator** always sends output to **Advisory Board** first (buyer resonance), then to **Consistency Guardian** (PMM OS alignment).
- **Brief Builder** sends briefs to **Advisory Board** for buyer perspective, then **Consistency Guardian** for alignment.
- **Advisory Board** sends feedback to Content Generator / Brief Builder as persona-specific constraints for revision.
- **Consistency Guardian** sends feedback to Content Generator, Knowledge Architect, and Brief Builder as alignment constraints.
- **Knowledge Architect** feeds Segment Strategist; passes codified context to Content Generator when user goal is content creation.

---

## Success Metrics

- **Time Saved:** Reduction in manual template filling and content creation
- **Resonance:** Advisory Board scores (buyer perspective) per persona
- **Alignment:** Consistency Guardian scores (PMM OS alignment)
- **Quality:** Reduction in review cycles and revisions
- **Coverage:** Percentage of PMM OS templates populated
- **Adoption:** Usage frequency across PMM team

---

## Next Steps

1. **Design Review:** Validate agent specifications with PMM workflows
2. **Implementation:** Build agents as Cursor Skills in `06-agents/skills/`
3. **Testing:** Validate agents with real PMM OS use cases
4. **Documentation:** Create usage guides for each agent
5. **Iteration:** Refine based on user feedback

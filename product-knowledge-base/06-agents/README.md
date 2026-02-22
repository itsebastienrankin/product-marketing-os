# PMM OS Agent System

A team of specialized AI agents that amplify PMM work by automating knowledge codification, content generation, quality assurance, and strategic support.

## Quick Start

The agents are implemented as **Cursor Skills**. To use them in Cursor:

1. **Copy or symlink** the contents of `product-knowledge-base/06-agents/skills/` into your project's `.cursor/skills/` folder so Cursor can load them.
2. Then ask for help with PMM tasks and the agents will activate based on your request.

### Example Usage

**Knowledge Codification:**
```
"I have a positioning doc and persona deck - populate my SMB segment folder"
```

**Content Generation:**
```
"Generate 3 Meta ad variants for our Q1 SMB campaign targeting CFOs"
```

**Quality Assurance:**
```
"Review this ad copy for alignment with our SMB positioning"
```

## Available Agents

### 🏗️ Knowledge Architect
**Purpose:** Converts unstructured PMM knowledge into structured PMM OS templates

**Use When:**
- You have positioning docs, persona decks, or research to codify
- You need to populate segment context folders
- You want to create competitive intelligence files
- You have meeting notes or transcripts to structure

**Example Requests:**
- "Convert these competitive research notes into a battlecard for Competitor X"
- "I just had a customer interview - update the buyer persona with new insights"
- "Populate my enterprise segment folder from this positioning doc"

---

### ✍️ Content Generator
**Purpose:** Creates marketing content using PMM OS knowledge base as context

**Use When:**
- You need to generate ads, emails, landing pages, or case studies
- You want content that aligns with your segment positioning
- You need platform-specific content (Meta ads, LinkedIn ads, Google SEM)
- You want multiple variants for A/B testing

**Example Requests:**
- "Generate 3 Meta ad variants for our Q1 SMB campaign targeting CFOs"
- "Create a sales email sequence for enterprise prospects"
- "Build a solution landing page for mid-market segment"

---

### 🛡️ Consistency Guardian
**Purpose:** Reviews content for alignment with PMM OS positioning, messaging, and style guidelines

**Use When:**
- You want to check content alignment before publishing
- You need to validate brand consistency
- You want to ensure content follows PMM OS standards
- You're reviewing content from other team members

**Example Requests:**
- "Review this ad copy for alignment with our SMB positioning"
- "Check this email against our messaging pillars"
- "Audit this landing page for style guide compliance"

---

### 👥 Advisory Board
**Purpose:** Acts as a brutally honest "advisory board" of personas from your target segment to review marketing materials and provide proxy feedback from buyers

**Use When:**
- You want to know if content will resonate with buyers before going to market
- You need buyer perspective on campaign briefs, creative assets, or sales enablement
- You want proxy user testing before spending budget
- You need persona-specific feedback on messaging and positioning

**Example Requests:**
- "Review this campaign brief from our SMB buyer personas' perspective"
- "Get Advisory Board feedback on these 3 Meta ads for CFOs"
- "What would our Economic Buyer think about this landing page?"

**Key Value:** Get brutally honest feedback from your target audience before launching campaigns or finalizing content.

---

## How Agents Work Together

### Typical Workflows

**New Segment Setup:**
1. **Knowledge Architect** → Populates segment context templates
2. **Consistency Guardian** → Reviews for completeness and alignment

**Campaign Creation (Full Pipeline):**
1. **(Optional) Knowledge Architect** → Codifies raw context if needed
2. **Content Generator** → Creates campaign content
3. **Advisory Board** → Reviews for buyer resonance (persona perspective)
4. **Content Generator** → Revises based on Advisory Board feedback
5. **Consistency Guardian** → Reviews for PMM OS alignment
6. **Iteration Loop** → Revises until both resonance and alignment scores meet thresholds

**Competitive Research:**
1. **Knowledge Architect** → Structures competitive intelligence
2. **Consistency Guardian** → Validates completeness

### Agent Interaction

Agents automatically reference the PMM OS knowledge base:
- Segment context files (`01-segment-context/`)
- Style guides (`04-style-guides/`)
- Content prompts (`03-prompts/`)
- Competitive intelligence (`05-sales-enablement/`)

They maintain consistency by:
- Cross-referencing related files
- Using established positioning and messaging
- Applying style guide principles
- Ensuring template structure compliance
- Getting buyer feedback before finalizing

## Agent Specifications

For detailed specifications, see:
- [Agent System Design](./AGENT-SYSTEM-DESIGN.md) - Complete system architecture
- [Knowledge Architect Skill](./skills/knowledge-architect/SKILL.md) - Detailed capabilities
- [Content Generator Skill](./skills/content-generator/SKILL.md) - Content creation guide
- [Consistency Guardian Skill](./skills/consistency-guardian/SKILL.md) - Review framework
- [Advisory Board Skill](./skills/advisory-board/SKILL.md) - Persona feedback system
- [PMM Orchestrator Skill](./skills/pmm-orchestrator/SKILL.md) - Pipeline coordination

## Using with Cursor

Agents are Cursor Skills. To activate them in your project:

1. Ensure you have a `.cursor` folder in your project root.
2. Copy or symlink each folder from `product-knowledge-base/06-agents/skills/` into `.cursor/skills/`:
   - `knowledge-architect`
   - `content-generator`
   - `consistency-guardian`
   - `advisory-board`
   - `pmm-orchestrator`

**Example (macOS/Linux):** From project root:
```bash
mkdir -p .cursor/skills
for name in knowledge-architect content-generator consistency-guardian advisory-board pmm-orchestrator; do
  ln -sf "../../product-knowledge-base/06-agents/skills/$name" ".cursor/skills/$name"
done
```

After that, Cursor will load the skills and the agents will be available.

## Future Agents (Planned)

- **Brief Builder** - Generates campaign and creative briefs
- **Competitive Intelligence Analyst** - Builds battlecards and objection handling
- **Template Populator** - Fills templates from various input sources
- **Segment Strategist** - Develops and refines segment context
- **Content Optimizer** - Refines existing content for performance

## Tips for Best Results

1. **Be Specific:** Include segment name, persona, campaign context
2. **Provide Context:** Share campaign briefs, segment context, or relevant docs
3. **Reference PMM OS:** Agents work best when PMM OS knowledge base is populated
4. **Iterate:** Agents automatically iterate between Advisory Board, Content Generator, and Consistency Guardian
5. **Combine Agents:** Use multiple agents in sequence for complex workflows
6. **Trust the Process:** The orchestrated pipeline ensures both buyer resonance AND PMM OS alignment

## Troubleshooting

**Agent not activating?**
- Be explicit about what you want (e.g., "populate segment context" vs. "help with segment")
- Reference PMM OS structure in your request
- Check that skills are copied/linked into `.cursor/skills/`
- Check that relevant PMM OS files exist

**Content not aligned?**
- Ensure segment context files are populated
- Use Consistency Guardian to identify issues
- Reference specific PMM OS files in your request

**Content doesn't resonate?**
- Use Advisory Board to get buyer perspective
- Review buyer-persona-overview.md to understand personas
- Ensure content addresses persona pain points and priorities

**Missing information?**
- Agents will ask for clarification when needed
- Provide additional context or documents
- Reference existing PMM OS files for consistency

## Contributing

To add new agents or improve existing ones:
1. Review [Agent System Design](./AGENT-SYSTEM-DESIGN.md)
2. Add or edit skills in `product-knowledge-base/06-agents/skills/`
3. Reference PMM OS structure and templates
4. Test with real PMM workflows
5. Open a PR so changes are included in the repo

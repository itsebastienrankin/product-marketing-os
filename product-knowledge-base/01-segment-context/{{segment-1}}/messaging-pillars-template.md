# [PRODUCT NAME] [SEGMENT NAME] Messaging Pillars
**Last Updated:** [February 16, 2026]

## AI-Readable Metadata
```yaml
product_name: "[PRODUCT NAME]"
segment: "[SEGMENT NAME]"
segment_type: "demographic"  # or "problem_based"
gmv_range: "[GMV RANGE]"  # if demographic
problem_definition: "[PROBLEM DESCRIPTION]"  # if problem_based
# Positioning context — must match narrative-and-positioning.md
primary_position: "[ONE POSITION YOU OWN - e.g., 'fastest to implement']"
positioning_strategy: "[Al Ries strategy - e.g., 'attribute_ownership']"
competitive_alternatives:
  status_quo: "[What they do now]"
  different_category: "[Alternative solution type]"
  direct_competitor: "[Competitor name]"
market_context: "[Category this segment sees you in]"
messaging_pillars:
  - name: "[PILLAR 1 NAME]"
    position: "primary"
    benefit: "[Main benefit]"
    metric: "[Key metric]"
    supports_strategy: "[How this supports your positioning strategy]"
  - name: "[PILLAR 2 NAME]"
    position: "supporting"
    benefit: "[Main benefit]"
    metric: "[Key metric]"
    supports_strategy: "[How this reinforces primary]"
  - name: "[PILLAR 3 NAME]"
    position: "supporting"
    benefit: "[Main benefit]"
    metric: "[Key metric]"
    supports_strategy: "[How this reinforces primary]"
```

## Overview
This document defines the 3 core messaging pillars for [PRODUCT NAME] targeting the [SEGMENT NAME] segment ([GMV RANGE or PROBLEM DEFINITION]). These pillars provide:
- **Tactical execution** (ready-to-use copy for all channels)
- **Sales enablement** (how to talk about this in conversations)
- **Consistent messaging** (all pillars reinforce your ONE position)

**Key Frameworks Applied:**
- **Al Ries Positioning:** Each pillar supports your ONE position (don't dilute)
- **Customer Voice:** "Why Customers Care" sections use actual customer language

**Limit to 3 pillars.** More = diluted message. Each pillar must support your primary position.

**Cross-References:**
- **Positioning, competitive context & proof points** → `narrative-and-positioning.md`
- **Buyer committee & role-specific messaging** → `buyer-personas.md`
- **Market overview & deal mechanics** → `market-segment-overview.md`
- **Landing page content generation** → `03-prompts/solution-lander-generator.md`

---

## Quick Start Mode (20 minutes)

**Minimum viable version to start generating content:**

1. **Ensure narrative-and-positioning.md is complete** (positioning strategy, competitive alternatives, proof points)

2. **Fill YAML metadata** (5 mins)
   - Pillar names, benefits, metrics
   - Positioning context fields should match `narrative-and-positioning.md`

3. **Write 1 paragraph per pillar under "Why Customers Care"** (10 mins)
   - What pain does this solve?
   - Customer quote (can be paraphrased initially)

4. **Add 2-3 ready-to-use headlines per pillar** (5 mins)
   - Pull from examples or write fresh

**This minimum gives AI enough to generate segment-specific content. Expand later.**

---

## Instructions for Completion

### Research Questions:
1. **3 Pillars:** What are the 3 most important benefits that support your primary position?
2. **Customer Voice:** How do actual customers describe their pain and your solution?
3. **Copy Blocks:** What are the best headlines, CTAs, and body copy for each pillar?

> **Note:** Positioning strategy, competitive alternatives, market context, and proof points are defined in `narrative-and-positioning.md`. Ensure your pillars align with and reinforce the primary position established there.

### Pillar Selection Criteria:
- Each pillar must support your ONE primary position
- Benefits must differentiate vs. ALL competitive alternatives (not just direct competitors)
- Must have proof points (data, customer stories)
- Should map to different buyer concerns (economic buyer, champion, technical buyer)

---

## Pillar Summary Table

| Pillar | Summary | Key Benefit | Primary Metric | Key Claim |
|--------|---------|-------------|----------------|-----------|
| **PILLAR 1** | [One sentence] | [Main benefit] | [Key metric] | [Claim with data] |
| **PILLAR 2** | [One sentence] | [Main benefit] | [Key metric] | [Claim with data] |
| **PILLAR 3** | [One sentence] | [Main benefit] | [Key metric] | [Claim with data] |

**Example (Notion SMB):**

| Pillar | Summary | Key Benefit | Primary Metric | Key Claim |
|--------|---------|-------------|----------------|-----------|
| **Fast Setup** | Live in hours, not weeks | Speed to productivity | 2 hours avg setup time | "85% of teams actively using within 1 week" (internal data) |
| **Everything Connected** | Docs + wikis + projects in one place | Eliminate context switching | 5 tools → 1 tool | "Teams save 10 hrs/week on search" (customer survey) |
| **Simple to Use** | Familiar interface, no training | High adoption rates | 85% team adoption | "#1 rated for ease of use on G2" (4.7/5, 5K+ reviews) |

---

## Target Audience

**Primary Audience:** [SEGMENT NAME] ([GMV RANGE or PROBLEM DEFINITION])

**Business Profiles:**
- [Profile 1]: [Description]
- [Profile 2]: [Description]

**Example (Notion SMB):**
- Teams 20-50 people with tool sprawl (5+ disconnected tools)
- Fast-growing startups hiring 5-10 people per quarter (onboarding chaos)
- Service companies without dedicated ops/IT (need self-serve setup)

---

## Pillar 1: [PILLAR 1 NAME] (PRIMARY)

### Summary
[One sentence: what this pillar delivers for this segment]

**Example (Notion SMB - Fast Setup):** "Get your team organized in 2 hours, not 2 weeks - no IT required"

---

### Why Customers Care (Customer Voice)

**In their words:**
> "[Actual customer quote about the pain this pillar solves. Use real language, not marketing speak. 2-4 sentences describing their frustration before using your product.]"
> 
> — [Name], [Title], [Company description]

**Example (Notion SMB - Fast Setup):**
> "We tried to set up Confluence for our 30-person team. Three months later, IT was still configuring permissions and our team was still lost. When someone asked 'where's the product roadmap?' we'd send a Drive link. Total chaos. We needed something that worked TODAY, not next quarter."
> 
> — Sarah Chen, VP Operations, 45-person SaaS startup

**The actual problem:**
- [Specific pain 1 with numbers]: "Confluence setup took 3+ months, team never adopted it"
- [Specific pain 2 with impact]: "Lost 10+ hours/week with team asking 'where's X?' in Slack"
- [Specific pain 3 with cost]: "New hires spent first week just figuring out where docs lived"

**What this pillar solves:**
[One sentence: the specific capability]

**Example:** "Live in 2 hours - import docs from Drive, set up workspace, team starts using it same day"

**Customer outcome:**
- [Metric 1]: "Team went from 3-month Confluence failure to productive in 2 hours"
- [Metric 2]: "Onboarding time for new hires: 2 days vs 1 week previously"
- [Metric 3]: "Slack 'where's that doc?' messages dropped from 20/day to near zero"

**Why this matters to [SEGMENT]:**
[Segment-specific context - why THIS segment cares MORE than others]

**Example (Notion SMB):** "Teams under 50 don't have dedicated IT for multi-month implementations. They need tools that work TODAY so the team can stay productive while growing."

---

### Key Details

| Aspect | Details |
|--------|---------|
| **Key Benefits** | **[Benefit 1]:** [Description and value]<br>**[Benefit 2]:** [Description and value]<br>**[Benefit 3]:** [Description and value] |
| **Key Claims** | [Claim 1 with data source]<br>[Claim 2 with data source]<br>[Claim 3 with data source] |

**Example (Notion SMB - Fast Setup):**

| Aspect | Details |
|--------|---------|
| **Key Benefits** | **No IT Required:** Self-serve setup in 2 hours vs weeks of IT involvement<br>**Instant Value:** Team productive same day, not waiting months<br>**Easy Migration:** Import from Drive/Confluence in minutes, not manual copy/paste |
| **Key Claims** | Average setup time: 2 hours (G2 reviews, n=500+)<br>85% of teams actively using within first week (internal data)<br>Confluence avg setup: 2+ weeks (G2 competitor reviews) |

---

### Ready-to-Use Copy Blocks

**Headlines (7-10 words):**

| Example | Why It Works | Your Version |
|---------|--------------|--------------|
| "Live in 2 hours, not 2 weeks" | Specific time contrast, clear benefit | [Your headline] |
| "No IT required. Start today." | Removes objection, creates urgency | [Your headline] |
| "From chaos to organized this afternoon" | Emotional (chaos), specific timeframe | [Your headline] |

**Subheadlines (15-20 words):**

| Example | Why It Works | Your Version |
|---------|--------------|--------------|
| "Import from Drive in minutes. Organize with drag-and-drop. Your team starts using it today." | Specific steps, concrete outcome | [Your subheadline] |
| "While Confluence takes weeks to set up, your team can be productive on Notion this afternoon." | Direct comparison, time contrast | [Your subheadline] |

**Body Copy (40-60 words):**

**Example 1 (Problem → Solution):**
"Your team tried Confluence. IT spent 3 months configuring it. Your team never adopted it. Notion is different: import your docs from Drive in 10 minutes, organize with drag-and-drop, and your team is using it the same day. No IT. No training. Just results."

**Why it works:** Specific scenario (Confluence failure), concrete timeline (10 minutes, same day), removes objections (no IT, no training)

**Example 2 (Customer Story):**
"Acme Corp abandoned Confluence after 3 months of failed setup. They switched to Notion on Monday. By Friday, their entire 40-person team was organized and productive. Setup time: 2 hours, not 3 months."

**Why it works:** Real company scenario, specific timeline, dramatic contrast

**Your body copy:**
[Write yours here - follow one of the structures above]

---

**CTAs (Call to Action):**

| Example | Type | When to Use |
|---------|------|-------------|
| "Get your workspace in 2 minutes" | Specific timeframe | High intent, ready to try |
| "See how fast teams get organized" | Outcome-focused | Top of funnel, awareness |
| "Start organizing today - no IT" | Benefit + remove objection | Mid-funnel, consideration |

**Email Subject Lines (3-6 words):**

| Example | Open Rate Style | When to Use |
|---------|-----------------|-------------|
| "2 hours vs 2 weeks" | Contrast/curiosity | Cold outreach, comparison |
| "No IT required" | Benefit-direct | Nurture, objection removal |
| "Live today, not next quarter" | Urgency/contrast | Trial conversion, decision stage |

**Social Posts (125 chars max - LinkedIn/Meta):**

| Example (with character count) | Format | Your Version |
|--------------------------------|--------|--------------|
| "Confluence: 3 months of IT setup. Notion: 2 hours, no IT. Which would you choose?" (88 chars) | Contrast + question | [Your post] |
| "Your team productive today, not waiting for IT. See how Notion works in 2 hours." (82 chars) | Benefit + CTA | [Your post] |

---

## Pillar 2: [PILLAR 2 NAME] (SUPPORTING)

### Summary
[One sentence: what this pillar delivers for this segment]

**Example (Notion SMB - Everything Connected):** "Docs, wikis, and projects in one searchable workspace - stop juggling 5 tools"

---

### Why Customers Care (Customer Voice)

**In their words:**
> "[Customer quote about this pain]"
> 
> — [Name], [Title], [Company]

**Example (Notion SMB - Everything Connected):**
> "We had Google Drive for docs, Trello for projects, Confluence for wikis, Slack for everything else, plus spreadsheets for tracking. Every morning I'd open 12 tabs just to see what my team was working on. It was insane. I spent more time FINDING information than USING information."
> 
> — Marcus Rodriguez, Product Manager, 35-person product team

**The actual problem:**
- [Pain 1 with numbers]
- [Pain 2 with impact]
- [Pain 3 with cost]

**What this pillar solves:**
[One sentence capability]

**Customer outcome:**
- [Metric 1]
- [Metric 2]
- [Metric 3]

**Why this matters to [SEGMENT]:**
[Segment-specific reason]

---

[Use same structure as Pillar 1 for Key Details and Ready-to-Use Copy Blocks]

---

## Pillar 3: [PILLAR 3 NAME] (SUPPORTING)

[Use same structure as Pillar 1 and 2]

---

## Implementation Guidelines

### Messaging Hierarchy
- **Lead with [PILLAR 1 - PRIMARY]:** [How this directly supports your one position]
- **Support with [PILLAR 2]:** [How this reinforces Pillar 1 and primary position]
- **Reinforce with [PILLAR 3]:** [How this reinforces Pillar 1 and primary position]

**Critical Rule:** Always lead with your ONE primary position. Pillars 2 and 3 exist only to reinforce it, never to compete with it.

**Example (Notion SMB):**
- Lead with "Fast Setup" (supports "fastest to implement" position)
- Support with "Everything Connected" (shows what you get fast)
- Reinforce with "Simple to Use" (explains why adoption is fast)

All three pillars support the single position: "Fastest to implement"

---

### Target Stakeholders (Maps to Buying Committee)

| Stakeholder | Primary Pillar | Secondary Pillar | Why This Matters to Them |
|-------------|----------------|------------------|--------------------------|
| **Economic Buyer** | [Pillar name] | [Pillar name] | [What they care about] |
| **Champion** | [Pillar name] | [Pillar name] | [What they care about] |
| **Technical Buyer** | [Pillar name] | [Pillar name] | [What they care about] |

**Example (Notion SMB):**

| Stakeholder | Primary Pillar | Secondary Pillar | Why This Matters to Them |
|-------------|----------------|------------------|--------------------------|
| **Economic Buyer (VP Ops)** | Fast Setup | Everything Connected | ROI in first month, not waiting quarters for implementation |
| **Champion (Product Manager)** | Everything Connected | Simple to Use | Daily workflow improved, stop being human search engine |
| **Technical Buyer (CTO)** | Fast Setup | Simple to Use | No IT project, no ongoing maintenance burden |

> **For detailed buyer committee profiles**, see `buyer-personas.md` in this segment folder.

---

### Key Messaging Principles for This Segment

- **[Principle 1]:** [Description with example]
- **[Principle 2]:** [Description with example]
- **[Principle 3]:** [Description with example]

**Example (Notion SMB):**
- **Speed over features:** SMBs care about "live today" more than "100 integrations"
- **No-BS language:** Say "2 hours" not "rapid time-to-value"
- **Show, don't tell:** "Import 100 docs in 5 minutes" not "easy migration"

---

## Context for AI Tools

**How AI should use this document when generating content:**

1. **Extract Ready-to-Use Copy Blocks**
   - Use headlines, subheadlines, body copy examples directly
   - Adapt for platform (character limits, tone)
   - Combine blocks across pillars as needed

2. **Follow Messaging Hierarchy**
   - ALWAYS lead with PRIMARY pillar
   - Supporting pillars reinforce, never compete
   - Reference Implementation Guidelines for stakeholder mapping

3. **Apply Customer Voice**
   - Use "Why Customers Care" quotes for authenticity
   - Reference actual problems with numbers
   - Show customer outcomes, not features

4. **Cross-Reference Other Documents**
   - **Positioning & competitive context** → `narrative-and-positioning.md`
   - **Buyer committee profiles** → `buyer-personas.md`
   - **Market overview & deal mechanics** → `market-segment-overview.md`
   - **Proof points & evidence** → `narrative-and-positioning.md`
   - **Landing page generation** → `03-prompts/solution-lander-generator.md`

5. **Map to Stakeholders**
   - Economic Buyer → ROI, speed, risk
   - Champion → Daily workflow, ease, adoption
   - Technical Buyer → Security, integration, scalability

**When generating content:**
- Start with segment metadata (positioning strategy, primary position)
- Use Ready-to-Use Copy Blocks as templates
- Reference "Why Customers Care" for authentic voice
- Pull proof points from `narrative-and-positioning.md`
- Map messaging to appropriate stakeholder (see `buyer-personas.md`)

---

## Template Completion Checklist

- [ ] **Ensure narrative-and-positioning.md is complete** (positioning, competitive alternatives, proof points)
- [ ] **Fill AI-Readable Metadata** (pillar names, benefits, metrics)
- [ ] **Define PRIMARY pillar** (directly supports your one position)
- [ ] **Write "Why Customers Care"** (customer voice with quotes)
- [ ] **Add Ready-to-Use Copy Blocks** (3-5 real examples per section)
- [ ] **Map to stakeholders** (economic buyer, champion, technical buyer)
- [ ] **Validate messaging hierarchy** (all pillars support ONE position)
- [ ] **Review with sales/marketing** (does this match how we actually talk?)
- [ ] **Update last modified date**

# [PRODUCT NAME] [SEGMENT NAME] Market Overview
**Last Updated:** [February 15, 2026]

## AI-Readable Metadata
```yaml
product_name: "[PRODUCT NAME]"
segment: "[SEGMENT NAME]"
segment_type: "demographic"  # or "problem_based" - choose your approach
gmv_range: "[$250K – $5M]"  # if demographic
problem_definition: "[Teams drowning in tool sprawl with 5+ tools]"  # if problem_based
primary_position: "[ONE position for this segment - e.g., 'fastest to implement']"
positioning_strategy: "[Al Ries strategy - e.g., 'attribute_ownership' or 'against_the_leader']"
decision_makers: 
  economic_buyer: "[VP Operations]"
  champion: "[Product Manager]"
  technical_buyer: "[CTO - optional]"
competitive_alternatives:
  status_quo: "[Manual process in spreadsheets/docs]"
  different_category: "[Project management tools like Asana]"
  direct_competitor: "[Confluence]"
sales_cycle_length: "[6-8 weeks]"
avg_deal_size: "[$10K-25K annual]"
win_rate: "[60% when competing against status quo, 40% vs Confluence]"
```

## Overview
This document provides the operational foundation for selling to the [SEGMENT NAME] segment ([GMV RANGE or PROBLEM DEFINITION]). It defines:
- **Segmentation approach** (demographic vs. problem-based)
- **Competitive alternatives** (how alternatives show up in deals)
- **Deal mechanics** (how deals progress, what kills them)
- **Go-to-market approach** (channels, content, motion for this segment)
- **Success metrics** (leading and lagging indicators)

**Cross-References:**
- **Positioning strategy & framework** → `narrative-and-positioning.md`
- **Buyer committee profiles** → `buyer-personas.md`
- **Messaging pillars & copy blocks** → `messaging-pillars.md`
- **Landing page generation** → `03-prompts/solution-lander-generator.md`

---

## Quick Start Mode (15 minutes)

**Fill out essentials to get started:**

1. **Segmentation Choice** (2 mins)
   - [ ] Demographic (GMV range)
   - [ ] Problem-based (pain intensity)

2. **Primary Position** (3 mins)
   - One word/phrase you own for this segment
   - Reference positioning strategy from `narrative-and-positioning.md`

3. **Competitive Alternatives** (5 mins)
   - How status quo, different category, and direct competitors show up in deals
   - Reference `narrative-and-positioning.md` for strategic competitive analysis

4. **Typical Deal Flow** (5 mins)
   - How long does sales cycle take?
   - Who gets involved when?
   - What kills deals?

**This minimum is enough for AI to generate segment-specific content. Expand later.**

---

## Segmentation Approach: Demographic vs. Problem-Based

### Choose Your Segmentation Strategy

**Option 1: Demographic Segmentation**
- Segment by: GMV/revenue, company size, industry
- Use when: Established category, clear market segments
- Example: "SMB ($250K-$5M)", "Mid-Market ($5M-$50M)", "Enterprise ($50M+)"
- Pro: Easy to target with ads, sales can qualify quickly
- Con: Customers don't self-identify this way

**Option 2: Problem-Based Segmentation**
- Segment by: Problem intensity, pain severity, current workaround
- Use when: New category, customers don't know they need you yet
- Example: "Teams drowning in tool sprawl (5+ tools)", "Teams scaling fast (10+ hires/quarter)"
- Pro: Resonates immediately ("That's me!"), clear pain point
- Con: Harder to target with ads (no firmographic filter)

**Insight:** Customers self-identify by problem, not demographics. "I'm drowning in 5 tools" hits harder than "I'm an SMB with $2M revenue."

**Your Choice:**
- [ ] Demographic → Fill out GMV range below
- [ ] Problem-based → Fill out problem definition below

**If Demographic:**
- GMV Range: [e.g., $250K-$5M]
- Company Size: [e.g., 20-50 employees]
- Industry: [e.g., SaaS, E-commerce, Services]

**If Problem-Based:**
- Problem Definition: [e.g., "Teams drowning in tool sprawl - 5+ disconnected tools, constant context switching"]
- Problem Intensity: [High/Medium/Low - how acute is the pain?]
- Current Workaround: [What they do today to cope with problem]

**Example (Notion SMB - Problem-Based):**
- Problem: "Teams drowning in tool sprawl - documents in Drive, tasks in Trello, communication in Slack, wiki in Confluence"
- Intensity: High - waste 10+ hours/week searching, new hires overwhelmed
- Workaround: Copy/paste between tools, ask in Slack "where's that doc?", manual organization

---

## Market Context & Positioning Strategy

### Market Context
**Current Context:** [What category does this segment see you competing in?]

**Example (Notion SMB):** "They see us competing in 'team collaboration tools' alongside Confluence (wikis), Asana (project management), and Google Drive (docs)"

**Context Gap:** [Is there a gap between how they see you and how you want to be positioned?]

**Example (Notion SMB):** "Gap: They think we're 'another wiki tool' but we actually replace 3-5 separate tools. Need to reposition as 'all-in-one workspace' not 'better Confluence'"

### Positioning Strategy

> **Source of truth:** See `narrative-and-positioning.md` for the full positioning framework selection (7 classic strategies + problem-focused), competitive alternatives analysis, and proof points catalog.

**Strategy Used:** [Which positioning strategy — as defined in narrative-and-positioning.md]

**Your Choice:** [e.g., "Against-the-Leader + Attribute Ownership"]

**Primary Position:** [ONE position you own in this segment's mind]

**Example (Notion SMB):** 
- Strategy: Against-the-Leader (vs Confluence) + Attribute Ownership (fastest setup)
- Position: "Fastest to implement - live in 2 hours, not 2 weeks"

**Why This Position Works for This Segment:**
[Explain why this segment cares about this position more than other segments]

**Example (Notion SMB):** "SMBs don't have dedicated IT for 3-month implementations. They need teams productive TODAY. Speed is more important than enterprise features."

---

## Competitive Alternatives (Your REAL Competition)

**Framework:** Your real competition is what customers would use/do if your product didn't exist. Often NOT direct competitors.

### Primary Competitive Alternative (What Most Would Do)

**Alternative:** [Status quo, DIY, or different category - what's most common?]

**Example (Notion SMB):** "Status quo: Google Drive for docs + Trello for tasks + Slack for comms"

| Aspect | Their Alternative | Why They Stick With It | How We're Different | Our Proof Point |
|--------|-------------------|------------------------|---------------------|-----------------|
| **Setup** | [How they do it] | [Why they tolerate it] | [Your advantage] | [Data] |
| **Daily Use** | [How they do it] | [Why they tolerate it] | [Your advantage] | [Data] |
| **Cost** | [What they pay] | [Why this seems ok] | [Your advantage] | [Data] |
| **Adoption** | [How team uses it] | [Why they accept this] | [Your advantage] | [Data] |

**Example (Notion SMB vs Status Quo):**

| Aspect | Their Alternative | Why They Stick With It | How We're Different | Our Proof Point |
|--------|-------------------|------------------------|---------------------|-----------------|
| **Setup** | Each tool requires separate setup, integration config | "Free tools, just sign up" | Everything in one workspace - 1 setup, not 5 | 2 hours vs 2 weeks (G2) |
| **Daily Use** | Context switch between 5+ tools, copy/paste content | "It's just how we work" | Everything connected - no copy/paste needed | 10 hrs/week saved (survey) |
| **Cost** | $0 per tool (freemium) but hidden productivity cost | "Free is free" | ROI in first month from productivity gains | $4K/mo saved in search time |
| **Adoption** | Different tools, different workflows, chaos | "Everyone knows how to use [Drive/Slack]" | Single consistent workflow | 85% adoption week 1 vs 40% for multi-tool setups |

### Secondary Alternative: Different Category

**Alternative:** [Different type of solution they might consider]

**Example (Notion SMB):** "Project management tools (Asana, Monday.com) - can handle tasks but not docs/wikis"

| What It Does Well | What It Lacks | When They Choose It | How We Position |
|-------------------|---------------|---------------------|-----------------|
| [Strength] | [Gap] | [Scenario] | [Our message] |

**Example (Notion SMB vs Asana):**

| What It Does Well | What It Lacks | When They Choose It | How We Position |
|-------------------|---------------|---------------------|-----------------|
| Task/project management, visual workflows | Docs, wikis, knowledge management | Team focused on project tracking | "Unlike Asana, we're not just tasks - docs, wikis, and projects in one place" |

### Tertiary Alternative: Direct Competitor

**Alternative:** [Traditional competitor in your category]

**Example (Notion SMB):** "Confluence - enterprise wiki tool"

| Their Strength | Their Weakness | When They Win | When We Win |
|----------------|----------------|---------------|-------------|
| [What they're known for] | [Where they fall short] | [Scenario] | [Scenario] |

**Example (Notion SMB vs Confluence):**

| Their Strength | Their Weakness | When They Win | When We Win |
|----------------|----------------|---------------|-------------|
| Enterprise standard, IT approved, integrations | Requires IT setup (weeks), complex permissions, wiki-only | Large enterprise with dedicated IT, Atlassian stack | Teams <100 who need speed, teams wanting docs+tasks+wiki, no IT resources |

---

## Market Characteristics

### If Demographic Segmentation:

**GMV/Revenue Range:** [e.g., $250K-$5M annual]
**Company Size:** [e.g., 20-50 employees]
**Typical Profiles:**
- [Profile 1]: [Description - e.g., "Fast-growing SaaS startup"]
- [Profile 2]: [Description - e.g., "Services company expanding nationally"]
- [Profile 3]: [Description - e.g., "E-commerce hitting scaling challenges"]

### If Problem-Based Segmentation:

**Problem Profile:** [Describe the problem and who experiences it]

**Example (Notion SMB - Problem):**
- **The Problem:** Tool sprawl chaos - 5+ disconnected tools, constant context switching, documents lost
- **Who Has It:** Any team 20-50 people without dedicated ops/IT person
- **Problem Indicators:** 
  - Team asks "where's that doc?" 10+ times/day in Slack
  - New hires spend first week asking where everything is
  - Multiple versions of same doc across Drive/Slack/Email
  - Leaders can't find information fast enough for decisions

**Pain Intensity:** [High/Medium/Low - how acute is this problem?]

**Example (Notion SMB):** HIGH - waste 10+ hours/week searching, directly impacts team velocity

**Urgency Triggers:** [What makes them want to solve this NOW?]
- [Trigger 1]: [e.g., "New VP hired, wants to fix chaos"]
- [Trigger 2]: [e.g., "Company growing fast, onboarding breaking down"]
- [Trigger 3]: [e.g., "Audit/compliance requires better documentation"]

---

## Typical Deal Flow

### Sales Cycle Overview
**Avg Length:** [e.g., 6-8 weeks from first touch to close]
**Avg Deal Size:** [e.g., $10K-25K annual contract]
**Win Rate:** [e.g., 60% when competing vs status quo, 40% vs Confluence]

### Stage-by-Stage Progression

**Stage 1: Discovery (Week 1-2)**
- **Who:** Champion discovers solution (product-led, inbound, or outbound)
- **Activity:** Self-serve trial OR demo request
- **Goal:** Champion validates "does this solve my daily pain?"
- **Success Indicator:** Champion creates 10+ pages, invites 2-3 teammates
- **Red Flag:** No usage after 3 days - not feeling pain enough

**Stage 2: Team Validation (Week 2-4)**
- **Who:** Champion + 5-10 teammates
- **Activity:** Team uses in real workflows (not toy data)
- **Goal:** Team sees value, starts asking for more access
- **Success Indicator:** Team creates 50+ pages, daily active usage
- **Red Flag:** Usage drops after week 1 - not sticky enough

**Stage 3: Economic Buyer Engagement (Week 4-6)**
- **Who:** VP/budget holder gets involved
- **Activity:** Champion shows results, economic buyer reviews ROI
- **Goal:** Budget approval for team-wide rollout
- **Success Indicator:** Economic buyer asks for pricing, contract terms
- **Red Flag:** Economic buyer not engaged by week 4 - no budget allocated

**Stage 4: Technical Review (Week 5-7, if needed)**
- **Who:** CTO/IT reviews (if deal >$10K or regulated industry)
- **Activity:** Security questionnaire, integration requirements
- **Goal:** Technical sign-off (no security/integration blockers)
- **Success Indicator:** Security questionnaire completed, SSO tested
- **Red Flag:** Security concerns raised with no resolution path

**Stage 5: Negotiation & Close (Week 6-8)**
- **Who:** Economic buyer, legal, procurement
- **Activity:** Contract review, pricing negotiation
- **Goal:** Signed contract
- **Success Indicator:** Redlines resolved, purchase order issued
- **Red Flag:** "We'll decide after Q[next]" - no budget urgency

### What Kills Deals (Critical)

**Early-Stage Killers (Week 1-4):**
- [ ] No champion adoption after 2 weeks → Not solving real pain
- [ ] Team tries it but doesn't stick → UI/workflow doesn't fit
- [ ] Competitor POC launched in parallel → Split attention, longer cycle

**Mid-Stage Killers (Week 4-6):**
- [ ] Economic buyer not engaged by week 4 → No budget conversation happening
- [ ] "Let's revisit next quarter" → No urgency, deal dies
- [ ] Price objection with no ROI conversation → Haven't shown value

**Late-Stage Killers (Week 6-8):**
- [ ] Security concerns with no resolution → Technical veto
- [ ] Legal review stalls (contract terms) → Procurement friction
- [ ] Budget cut/frozen → External factor (market downturn, hiring freeze)

**How to Prevent:**
- **Early:** Ensure champion sees value in first 3 days (onboarding critical)
- **Mid:** Get economic buyer involved by week 3-4 (don't wait)
- **Late:** Start security/legal review early (week 4-5, not week 7)

---

## Decision Makers

> **Detailed profiles:** See `buyer-personas.md` in this segment folder for complete buying committee profiles, including:
> - Economic Buyer (budget holder) — evaluation criteria, decision factors, role-specific messaging
> - Champion (internal advocate) — daily pain points, adoption concerns, winning messages
> - Technical Buyer (optional) — security, integration, and scalability requirements
>
> Each profile includes role-specific pain points, competitive alternatives per role, and objection handling.

---

## Go-to-Market Approach

### Primary GTM Motion

**Motion:** [Product-led, Sales-led, or Hybrid]

**Example (Notion SMB):** "Hybrid - product-led acquisition (free trial), sales-assist for expansion (>$10K deals)"

**Why This Motion:**
[Explain why this approach works for this segment]

**Example (Notion SMB):** "SMBs want to try before committing. Champion needs to validate with team before getting VP involved. Product-led lets them test, sales-assist helps close larger deals."

### Channel Strategy

| Channel | Purpose | Target Audience | Content Type | Success Metric |
|---------|---------|-----------------|--------------|----------------|
| [Channel 1] | [Goal] | [Who] | [What content] | [How measured] |

**Example (Notion SMB):**

| Channel | Purpose | Target Audience | Content Type | Success Metric |
|---------|---------|-----------------|--------------|----------------|
| **Organic Search** | Capture high-intent ("alternatives to Confluence") | Champions researching solutions | Comparison pages, "vs" content | 40% of signups |
| **Product-Led** | Let champions self-serve trial | Champions discovering product | In-app onboarding, templates | 60% of signups, 30% activate |
| **LinkedIn/Meta Ads** | Reach VPs with ROI message | Economic buyers | Problem-focused ads, case studies | 15% of pipeline |
| **Outbound (SDR)** | Engage high-fit accounts | Both champion + economic buyer | Personalized problem-focused emails | 20% of pipeline |

### Content Priorities by Stage

**Stage 1 - Discovery (Champion):**
- [ ] Problem-focused blog posts ("5 signs your team has tool sprawl")
- [ ] Comparison content ("Notion vs Confluence for SMBs")
- [ ] Quick-start templates (show value fast)

**Stage 2 - Evaluation (Economic Buyer):**
- [ ] ROI calculator (show productivity savings)
- [ ] Case studies with metrics (proof of value)
- [ ] Implementation guides (de-risk adoption)

**Stage 3 - Technical Review (Technical Buyer):**
- [ ] Security documentation (SOC2, GDPR)
- [ ] Integration guides (API docs, Zapier)
- [ ] Architecture overview (how it scales)

---

---

## Success Metrics for This Segment

### Leading Indicators (Predict Success)
- [Indicator 1]: [Threshold - e.g., "Champion creates 10+ pages in first week"]
- [Indicator 2]: [Threshold]
- [Indicator 3]: [Threshold]

### Lagging Indicators (Measure Results)
- [Metric 1]: [Target - e.g., "85% of trials convert to paid"]
- [Metric 2]: [Target]
- [Metric 3]: [Target]

**Example (Notion SMB):**

**Leading:**
- Pages created in first week: >10 = strong, <5 = weak
- Team members invited: >3 = expanding, <2 = solo usage
- Daily active usage: >5 days/week = sticky

**Lagging:**
- Trial-to-paid conversion: 30% (industry: 15-20%)
- Time-to-close: 6-8 weeks (Confluence: 12-16 weeks)
- Customer LTV: $15K over 3 years

---

## Context for AI Tools

**How AI should use this document:**

1. **Apply Segmentation Strategy**
   - If demographic → Use GMV/size in targeting
   - If problem-based → Lead with pain in messaging

2. **Address Competitive Alternatives**
   - Differentiate vs status quo FIRST (most common alternative)
   - Then different category, then direct competitor
   - Use "How We're Different" language from tables

3. **Map to Deal Stage**
   - Week 1-4 content → Champion-focused
   - Week 4-6 content → Economic buyer-focused
   - Week 5-7 content → Technical buyer (if needed)

4. **Use Deal Killers**
   - Address common objections that kill deals
   - Prevent with proactive content at each stage

5. **Cross-Reference Other Documents**
   - **Positioning strategy & proof points** → `narrative-and-positioning.md`
   - **Buyer committee profiles** → `buyer-personas.md`
   - **Messaging pillars & copy blocks** → `messaging-pillars.md`
   - **Landing page generation** → `03-prompts/solution-lander-generator.md`

**When generating segment-specific content:**
- Start with positioning strategy and primary position (from narrative-and-positioning.md)
- Reference competitive alternatives (all 3 types, from this document)
- Map content to buyer journey stage
- Use deal killer insights to address objections

---

## Template Completion Checklist

- [ ] **Choose segmentation approach** (demographic or problem-based)
- [ ] **Ensure narrative-and-positioning.md is complete** (positioning strategy, proof points)
- [ ] **Map competitive alternatives** (how they show up in deals)
- [ ] **Document deal flow** (stage-by-stage with timelines)
- [ ] **Identify deal killers** (what causes deals to die)
- [ ] **Define GTM motion** (product-led, sales-led, hybrid)
- [ ] **Set success metrics** (leading and lagging indicators)
- [ ] **Validate with sales team** (does this match reality?)
- [ ] **Update last modified date**


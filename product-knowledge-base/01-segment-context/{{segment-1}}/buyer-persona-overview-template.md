# [PRODUCT NAME] [SEGMENT NAME] Buyer Committee
**Last Updated:** [February 15, 2026]

## AI-Readable Metadata
```yaml
product_name: "[PRODUCT NAME]"
segment: "[SEGMENT NAME]"
segment_type: "demographic"  # or "problem_based" - see segmentation guide below
gmv_range: "[GMV RANGE]"  # if demographic
problem_intensity: "[PROBLEM DESCRIPTION]"  # if problem_based
product_category: "[PRODUCT CATEGORY]"

# Buying Committee Structure
buying_committee:
  economic_buyer:
    title: "[Job Title - e.g., VP Operations]"
    role: "economic_buyer"
    authority: "Budget holder - signs the contract"
    veto_power: true
    decision_timeline: "[When they get involved - e.g., Weeks 4-8]"
    typical_involvement: "[Early/Mid/Late in sales cycle]"
    cares_about: ["ROI", "Team productivity", "Risk mitigation"]
    competitive_alternatives:
      - type: "status_quo"
        name: "[What they use now - e.g., 'Manual process in spreadsheets']"
        why_they_use: "[Why they tolerate it - e.g., 'Free, familiar, no change management']"
        our_advantage: "[How you're different - e.g., 'Automated in minutes, not hours']"
    key_pain_points: ["[Pain 1]", "[Pain 2]", "[Pain 3]"]
    success_metrics: ["[Metric 1]", "[Metric 2]", "[Metric 3]"]
    
  champion:
    title: "[Job Title - e.g., Product Manager]"
    role: "champion"
    authority: "Internal advocate - influences buyer, no budget authority"
    veto_power: false
    decision_timeline: "[When they get involved - e.g., Weeks 1-8]"
    typical_involvement: "[Discovery through close - they drive the deal]"
    cares_about: ["Daily workflow", "Ease of use", "Team adoption"]
    competitive_alternatives:
      - type: "status_quo"
        name: "[What they use daily - e.g., 'Copy/paste between 5 tools']"
        why_they_use: "[Why they tolerate it - e.g., 'Only way to get work done']"
        our_advantage: "[How you're different - e.g., 'Everything in one place']"
    key_pain_points: ["[Pain 1]", "[Pain 2]", "[Pain 3]"]
    success_metrics: ["[Metric 1]", "[Metric 2]", "[Metric 3]"]
    
  technical_buyer:
    title: "[Job Title - e.g., CTO, Head of Engineering]"
    role: "technical_evaluator"
    authority: "Technical veto - can kill deal on security/integration/scalability grounds"
    veto_power: true
    decision_timeline: "[When they get involved - e.g., Weeks 5-7]"
    typical_involvement: "[Mid-to-late - technical evaluation phase]"
    cares_about: ["Security", "Integrations", "Scalability", "Maintenance"]
    competitive_alternatives:
      - type: "build_internal"
        name: "[Custom solution - e.g., 'Build it ourselves']"
        why_they_use: "[Why they prefer building - e.g., 'Full control, customization']"
        our_advantage: "[How you're different - e.g., 'Live in days, not months of dev time']"
    key_pain_points: ["[Pain 1]", "[Pain 2]", "[Pain 3]"]
    success_metrics: ["[Metric 1]", "[Metric 2]", "[Metric 3]"]
```

---

## Overview
This document maps the **buying committee** for [SEGMENT NAME] ([GMV RANGE or PROBLEM DESCRIPTION]). Unlike traditional personas, this framework identifies who holds budget authority, veto power, and when each stakeholder enters the buying process.

**Key Framework Applied: Buying Committee Model**
- Economic Buyer: Signs the contract (budget holder)
- Champion: Drives adoption internally (no veto)
- Technical Buyer: Can kill deal on technical grounds (veto power)

**Limit to MAX 3 roles.** If you have more, you're trying to sell to too many people.

**Cross-References:**
- **Positioning & competitive context** → `narrative-and-positioning.md`
- **Deal flow & buying stages** → `market-segment-overview.md`
- **Messaging pillars & copy blocks** → `messaging-pillars.md`
- **Objection handling scripts** → `05-sales-enablement/` (relevant competitor folder)

---

## Quick Start Mode (10 minutes)

**Skip detailed research and fill out essentials:**

1. **Economic Buyer Only** (5 mins)
   - Title, authority level, what they care about
   - Their current alternative (status quo)
   - Top 3 pain points

2. **Decision Timeline** (2 mins)
   - When does economic buyer get involved?
   - How long is typical sales cycle?

3. **Champion** (3 mins)
   - Who advocates internally?
   - What's their daily pain?

**This minimum context is enough for AI to generate targeted content. Expand later.**

---

## Segmentation Approach

> **Detailed guidance:** See `market-segment-overview.md` for the full demographic vs. problem-based segmentation framework, including selection criteria and examples.

**Your choice** (as defined in market-segment-overview.md):
- [ ] Demographic (use GMV range in YAML)
- [ ] Problem-based (use problem_intensity in YAML)

---

## Instructions for Completion

### Research Questions:
1. **Who signs the contract?** (Economic buyer - this is your PRIMARY focus)
2. **Who drives the deal internally?** (Champion)
3. **Who can kill the deal?** (Technical buyer - optional if no technical veto)
4. **When does each person get involved?** (Decision timeline)
5. **What does each person care about most?** (Different priorities per role)
6. **What would each use without your product?** (Competitive alternatives per role)

### Buying Committee Priority:
1. **MUST HAVE:** Economic Buyer (budget holder)
2. **HIGHLY RECOMMENDED:** Champion (internal advocate)
3. **OPTIONAL:** Technical Buyer (only if technical veto is common)

**Rule:** If you need more than 3 roles to close deals, your sales process is broken. Simplify.

---

## Buying Committee Structure (Map First, Then Fill Details)

### Economic Buyer (PRIMARY - Budget Holder)
**Title:** [Job title - e.g., VP Operations, Director of Sales]
**Authority:** Signs contract, holds budget
**Veto Power:** Yes
**Involvement:** [When they enter - e.g., Week 4-8 after champion validates]

**Example (Notion SMB):**
- Title: VP Operations, Head of Ops
- Authority: Signs contract after team validates
- Involvement: Week 4-6 (after 2-3 weeks of champion usage)
- Cares about: ROI, team productivity, minimal disruption

---

### Champion (Internal Advocate)
**Title:** [Job title - e.g., Product Manager, Operations Manager]
**Authority:** Influences buyer, no budget
**Veto Power:** No
**Involvement:** [When they enter - e.g., Week 1-8, drives entire process]

**Example (Notion SMB):**
- Title: Product Manager, Ops Manager
- Authority: Influences VP, no budget
- Involvement: Week 1-8 (discovery through close)
- Cares about: Daily workflow, ease of use, team adoption

---

### Technical Buyer (Optional - Technical Veto)
**Title:** [Job title - e.g., CTO, Head of Engineering]
**Authority:** Can veto on technical grounds
**Veto Power:** Yes
**Involvement:** [When they enter - e.g., Week 5-7 for technical evaluation]

**Example (Notion SMB):**
- Title: CTO, Head of Engineering
- Authority: Can veto on security/integration
- Involvement: Week 5-7 (if deal size >$10K)
- Cares about: Security, APIs, data governance

**Note:** Only include Technical Buyer if technical evaluation is a common deal blocker. Otherwise, stop at 2 roles.

---

## Buying Committee Comparison Table

| Role | Authority | Veto Power | Involvement Timeline | Cares About | Measured By |
|------|-----------|------------|----------------------|-------------|-------------|
| **Economic Buyer** | Budget holder, signs contract | ✅ Yes | [Timeline] | [Priorities] | [Success metrics] |
| **Champion** | Internal advocate, influences | ❌ No | [Timeline] | [Priorities] | [Success metrics] |
| **Technical Buyer** | Technical veto only | ✅ Yes | [Timeline] | [Priorities] | [Success metrics] |

---

## Economic Buyer (PRIMARY - This is your focus)

### Title
[List 3-5 common job titles]

**Example (Notion SMB):** VP Operations, Head of Operations, COO

### Role
[One sentence: primary responsibility and budget authority]

**Example (Notion SMB):** "Owns operational efficiency for 20-50 person team. Signs contracts for tools that affect team productivity."

### Market Context & Competitive Alternatives

**Current Market Context:** [What category do they see you in?]

**Example (Notion SMB):** "They see us competing in 'team collaboration tools' alongside Confluence, Asana, Monday.com"

**Competitive Alternatives:** [What would they use/do without you?]

**Example (Notion SMB):**
| Alternative | Why They Use It | Our Advantage |
|-------------|-----------------|---------------|
| **Status Quo: Google Docs + Trello + Slack** | Free, familiar, no change management | Everything in one place - no context switching |
| **Confluence** | IT approved, enterprise features | 10x faster setup (2 hours vs 2 weeks) |
| **Spreadsheets + manual process** | No cost, full control | Automated in minutes, not manual hours |

**Primary Position for This Role:** [One position you own for economic buyer decisions]

**Example (Notion SMB):** "Fastest to implement - live in 2 hours, not 2 weeks"

### Key Details

| Aspect | Details |
|--------|---------|
| **Key Responsibilities** | **[Responsibility 1]:** [Description]<br>**[Responsibility 2]:** [Description]<br>**[Responsibility 3]:** [Description] |
| **Key Pain Points** | **[Pain 1]:** [Specific problem with quantified impact]<br>**[Pain 2]:** [Specific problem]<br>**[Pain 3]:** [Specific problem] |
| **Cares About** | **[Priority 1]:** [Why this matters to their role]<br>**[Priority 2]:** [Why this matters]<br>**[Priority 3]:** [Why this matters] |
| **Measured By** | [Metric 1], [Metric 2], [Metric 3] |
| **Fears** | **[Fear 1]:** [What keeps them up at night]<br>**[Fear 2]:** [Risk they want to avoid] |
| **Emotional Drivers** | **[Driver 1]:** [What motivates them personally]<br>**[Driver 2]:** [What they want to achieve] |

**Example (Notion SMB Economic Buyer):**

| Aspect | Details |
|--------|---------|
| **Key Responsibilities** | **Team Productivity:** Ensure 20-50 person team operates efficiently<br>**Tool Stack:** Evaluate and purchase software that affects workflows<br>**Onboarding:** Get new hires productive quickly |
| **Key Pain Points** | **Tool Sprawl:** Team uses 5+ tools (Drive, Confluence, Trello, Slack) - constant context switching<br>**Search Time:** Team wastes 10+ hours/week searching for documents<br>**Onboarding Chaos:** New hires spend first week asking "where's X?" |
| **Cares About** | **ROI:** Need to see productivity gains within first month<br>**Minimal Disruption:** Can't afford long implementation or training<br>**Team Adoption:** Need team to actually use it, not abandon after 2 weeks |
| **Measured By** | Team NPS, Time-to-productivity for new hires, Tool consolidation (fewer subscriptions) |
| **Fears** | **Another Failed Tool:** Spending $10K+ on tool that team abandons<br>**Implementation Hell:** 3-month implementation that derails team |
| **Emotional Drivers** | **Simplification:** Want to reduce complexity, not add to it<br>**Team Wins:** Want team to feel productive, not frustrated |

### Decision Factors

| Factor | Details |
|--------|---------|
| **Primary Position Message** | **[One focused message that maps to your position]** |
| **Reasons They Choose You** | **[Reason 1]:** [Tied to position - with proof]<br>**[Reason 2]:** [Tied to position - with proof]<br>**[Reason 3]:** [Tied to position - with proof] |
| **Reasons They Don't Choose You** | **[Objection 1]:** [Common concern - how to address]<br>**[Objection 2]:** [Common concern]<br>**[Objection 3]:** [Common concern] |
| **Winning Messages** | **[Message 1 - PRIMARY]:** [Supports your position]<br>**[Message 2]:** [Reinforces primary]<br>**[Message 3]:** [Reinforces primary] |

**Example (Notion SMB Economic Buyer):**

| Factor | Details |
|--------|---------|
| **Primary Position Message** | **"Get your team organized in 2 hours, not 2 weeks"** |
| **Reasons They Choose You** | **Fast Setup:** Live in 2 hours vs Confluence (2 weeks) - G2 data<br>**Team Adoption:** 85% of teams actively using within 1 week (vs 40% for Confluence)<br>**Consolidation:** Replaces 3-5 tools - reduces monthly SaaS spend |
| **Reasons They Don't Choose You** | **"We already have Confluence":** Most teams have Confluence but still use 3-4 other tools for docs that don't fit<br>**"Change management risk":** Team can start with 1 use case, expand organically - no big bang migration<br>**"Too expensive":** ROI in first month from reduced search time ($5K/month in productivity @ 10 hrs/week saved) |
| **Winning Messages** | **"From chaos to organized in one afternoon":** Show before/after of team workspace<br>**"Your team finds what they need, when they need it":** No more Slack "where's that doc?" messages<br>**"Start small, grow naturally":** Begin with team wiki, expand to docs and projects |

---

## Champion (Internal Advocate - Drives the Deal)

### Title
[List 3-5 common job titles]

**Example (Notion SMB):** Product Manager, Operations Manager, Team Lead

### Role
[One sentence: day-to-day responsibilities and why they care]

**Example (Notion SMB):** "Manages day-to-day team operations. Feels pain of tool sprawl directly. Advocates for solutions to VP."

### Market Context & Competitive Alternatives

**Current Market Context:** [What category do they see you in?]

**Example (Notion SMB):** "They see us as 'productivity tool' that could replace 3-4 tools they currently juggle"

**Competitive Alternatives:** [What would they use/do without you?]

**Example (Notion SMB):**
| Alternative | Why They Use It | Our Advantage |
|-------------|-----------------|---------------|
| **Copy/paste between Drive/Trello/Slack** | Only way to get work done today | Everything connected in one workspace |
| **Asana for tasks only** | Team already uses it for projects | Docs + tasks + wiki in one place |
| **Manual organization in folders** | Free, simple | Powerful search finds everything instantly |

**Primary Position for This Role:** [One position you own for champion's daily workflow]

**Example (Notion SMB):** "Easiest to organize everything - drag/drop simplicity"

### Key Details

| Aspect | Details |
|--------|---------|
| **Key Responsibilities** | **[Responsibility 1]:** [Daily task]<br>**[Responsibility 2]:** [Daily task]<br>**[Responsibility 3]:** [Daily task] |
| **Key Pain Points** | **[Pain 1]:** [Specific daily frustration]<br>**[Pain 2]:** [Specific daily frustration]<br>**[Pain 3]:** [Specific daily frustration] |
| **Cares About** | **[Priority 1]:** [What makes their day easier]<br>**[Priority 2]:** [What makes their day easier]<br>**[Priority 3]:** [What makes their day easier] |
| **Measured By** | [Metric 1], [Metric 2], [Metric 3] |
| **Fears** | **[Fear 1]:** [What would make their life harder]<br>**[Fear 2]:** [What they want to avoid] |
| **Emotional Drivers** | **[Driver 1]:** [What motivates them]<br>**[Driver 2]:** [What they want to achieve] |

**Example (Notion SMB Champion):**

| Aspect | Details |
|--------|---------|
| **Key Responsibilities** | **Coordinate Team Work:** Ensure everyone knows what's happening<br>**Document Processes:** Create and maintain team documentation<br>**Onboard New Hires:** Get new people up to speed quickly |
| **Key Pain Points** | **Human Search Engine:** Team asks them "where's X?" 20+ times per day in Slack<br>**Context Switching:** Jump between 5 tools constantly - lose train of thought<br>**Outdated Docs:** Can't find current version - multiple copies in Drive |
| **Cares About** | **Daily Workflow:** Tool needs to fit how they actually work<br>**Team Adoption:** If team doesn't use it, more work for them<br>**Ease of Use:** No time to learn complex systems |
| **Measured By** | Team asks for help less often, Documents stay up-to-date, New hires productive faster |
| **Fears** | **Another Tool to Manage:** Don't want one more thing to maintain<br>**Team Resistance:** Team refuses to adopt, they're stuck managing multiple tools |
| **Emotional Drivers** | **Stop Being Human Search Engine:** Want team to find things themselves<br>**Simplify Life:** Reduce number of tools and tabs open |

### Decision Factors

| Factor | Details |
|--------|---------|
| **Primary Position Message** | **[One focused message for champion's daily pain]** |
| **Reasons They Choose You** | **[Reason 1]:** [Solves daily pain]<br>**[Reason 2]:** [Solves daily pain]<br>**[Reason 3]:** [Makes their life easier] |
| **Reasons They Don't Choose You** | **[Objection 1]:** [Daily workflow concern]<br>**[Objection 2]:** [Adoption concern]<br>**[Objection 3]:** [Learning curve concern] |
| **Winning Messages** | **[Message 1 - PRIMARY]:** [Addresses daily pain]<br>**[Message 2]:** [Shows ease]<br>**[Message 3]:** [Proves adoption] |

**Example (Notion SMB Champion):**

| Factor | Details |
|--------|---------|
| **Primary Position Message** | **"Stop being the human search engine - your team finds everything themselves"** |
| **Reasons They Choose You** | **Powerful Search:** Find any doc in <10 seconds across all content<br>**Simple Organization:** Drag-and-drop pages - no complex folder structures<br>**Team Adoption:** Intuitive enough that team uses it without training |
| **Reasons They Don't Choose You** | **"Team won't learn new tool":** Familiar patterns (like Google Docs), not alien interface<br>**"Too many features, too complex":** Start with basic pages, discover features as needed<br>**"What if it's another abandoned tool?":** Free trial - validate adoption before paying |
| **Winning Messages** | **"Your team finds what they need without asking you":** Show search finding doc instantly<br>**"Organize it your way, in minutes":** Demo drag-and-drop simplicity<br>**"If your team doesn't love it, don't pay":** Low-risk trial approach |

---

## Technical Buyer (Optional - Include Only If Technical Veto Is Common)

**When to include:** Only if technical evaluation is a regular part of your sales process and CTOs/technical leaders can kill deals.

**When to skip:** If deals close without deep technical review, or if technical concerns are minor. Don't create this section just to have 3 personas.

### Title
[List 3-5 common job titles]

**Example (Notion SMB):** CTO, Head of Engineering, VP Engineering (only on deals >$10K/year)

### Role
[One sentence: technical oversight and veto authority]

**Example (Notion SMB):** "Evaluates tools for security, scalability, and integration requirements. Has veto power on technical grounds."

### Market Context & Competitive Alternatives

**Current Market Context:** [What category do they see you in?]

**Example (Notion SMB):** "They see us as 'SaaS collaboration tool' that needs security/compliance review"

**Competitive Alternatives:** [What would they prefer?]

**Example (Notion SMB):**
| Alternative | Why They Prefer It | Our Advantage |
|-------------|---------------------|---------------|
| **Build internally** | Full control, custom features | Live in days vs months of dev time |
| **Self-hosted open source** | Data stays on-premises | Enterprise plan with SSO, audit logs, data residency |
| **Incumbent (Confluence)** | Already approved, IT comfortable | Modern APIs, easier integration, better developer experience |

**Primary Position for This Role:** [One position for technical evaluation]

**Example (Notion SMB):** "Enterprise-grade security without enterprise complexity"

### Key Details

[Use same table structure as Economic Buyer and Champion - focus on technical concerns]

**Example (Notion SMB Technical Buyer):**

| Aspect | Details |
|--------|---------|
| **Key Responsibilities** | **Security & Compliance:** Ensure tools meet security standards<br>**Integration:** Evaluate how tools connect to existing stack<br>**Scalability:** Assess if tool grows with company |
| **Key Pain Points** | **Security Reviews Take Weeks:** Slow down team while reviewing tools<br>**Integration Complexity:** Poorly documented APIs waste engineering time<br>**Vendor Lock-in:** Hard to migrate data if tool doesn't work out |
| **Cares About** | **Security:** SOC2, GDPR, data encryption<br>**APIs:** Well-documented, reliable integrations<br>**Data Portability:** Can export data if needed |
| **Measured By** | Security incident rate, Integration stability, Time spent on vendor reviews |
| **Fears** | **Data Breach:** Tool becomes security vulnerability<br>**Engineering Distraction:** Team spends weeks building integrations |
| **Emotional Drivers** | **Enable Team Safely:** Want to say "yes" to team requests without security risk<br>**Reduce Vendor Overhead:** Fewer tools to manage and integrate |

---

## [SEGMENT] Buying Patterns

> **Detailed deal flow:** See `market-segment-overview.md` for the complete stage-by-stage deal progression (Discovery → Team Validation → Economic Buyer → Technical Review → Close), including timelines, red flags, deal killers, buying triggers, and GTM motion.

### Key Concerns by Role

**Economic Buyer:**
- Primary concern: ROI and implementation risk
- Key question: "How much does this save us, and what's the risk of switching?"

**Champion:**
- Primary concern: Team adoption and daily workflow fit
- Key question: "Will my team actually use this, or is it one more tool to manage?"

**Technical Buyer:**
- Primary concern: Security, integrations, and scalability
- Key question: "Does this meet our security requirements and integrate with our stack?"

> **For full objection handling scripts** (Acknowledge → Reframe → Proof → Check), see the relevant competitor folder in `05-sales-enablement/`. For proof points by role, see the evidence section in `narrative-and-positioning.md`.

---

## Context for AI Tools

**How AI should use this document when generating content:**

1. **Prioritize Economic Buyer**
   - Lead with content that addresses budget holder concerns (ROI, risk, speed)
   - Secondary content for champion (daily workflow, ease)
   - Tertiary content for technical buyer (only if deal requires technical review)

2. **Use Role-Specific Language**
   - Economic Buyer: Business outcomes, ROI, risk mitigation
   - Champion: Daily workflow, ease of use, team adoption
   - Technical Buyer: Security, integrations, scalability

3. **Follow Buying Committee Structure**
   - Always identify which role you're targeting
   - Use appropriate authority language (signs contract, influences, can veto)
   - Reference decision timeline for timing content

4. **Cross-Reference Other Documents**
   - **Deal flow & buying stages** → `market-segment-overview.md`
   - **Positioning & proof points** → `narrative-and-positioning.md`
   - **Messaging pillars & copy blocks** → `messaging-pillars.md`
   - **Objection handling scripts** → `05-sales-enablement/` (relevant competitor folder)

**When generating sales content, emails, or enablement:**
- Start with Economic Buyer (they sign the deal)
- Support with Champion content (they drive adoption)
- Add Technical Buyer content only when needed (deal-specific)
- Reference deal flow and buying triggers from `market-segment-overview.md`
- Pull proof points from `narrative-and-positioning.md`
- Use objection handling scripts from `05-sales-enablement/`

---

## Template Completion Checklist

- [ ] **Limit to MAX 3 roles** (Economic Buyer + Champion + optional Technical Buyer)
- [ ] **Identify PRIMARY buyer** (who signs contract - focus 80% of effort here)
- [ ] **Map authority levels** (budget holder, veto power, decision timeline)
- [ ] **Complete role-specific details** (pain points, competitive alternatives, decision factors per role)
- [ ] **Ensure market-segment-overview.md has deal flow** (stage-by-stage progression)
- [ ] **Ensure narrative-and-positioning.md has proof points** (evidence catalog)
- [ ] **Validate with sales team** (do deals actually work this way?)
- [ ] **Update last modified date**


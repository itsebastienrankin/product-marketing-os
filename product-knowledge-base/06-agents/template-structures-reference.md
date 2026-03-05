# Template Structures Reference

Compact reference for all PMM OS template structures. **Agents: read this file instead of reading individual template files.** Only open individual files when writing populated versions.

---

## Segment Context (`01-segment-context/[segment]/`)

Each segment gets a folder with 4 files. Populated filenames drop the `-template` suffix.

### narrative-and-positioning.md

YAML metadata: `product_name`, `segment`, `segment_type` (demographic|problem_based), `positioning_strategy` (leadership|attribute|specialization|heritage|against_leader|repositioning|category_creation), `primary_position`, `market_context`, `context_gap`, `competitive_alternatives` (status_quo, different_category, direct_competitor), `category_strategy` (fit_existing|create_new)

Sections:
1. **Positioning Framework Selection** — Classic (7 strategies) or Problem-First ("When you're [problem], [product] [solution] so [outcome]") or Combined
2. **Market Context** — Current category buyers place you in, desired category, gap between them
3. **Competitive Alternatives** — Table: Alternative Type | Specific Alternative | Why They Choose It | How You're Different | Proof Point. Cover: status quo, different category, direct competitor, build internally
4. **Positioning Statement** — "For [segment], [product] is the [one position] solution for [outcome]"
5. **Category Strategy** — Fit existing category or create new one
6. **The Challenge** — Current approaches table with limitations per segment
7. **Unique Differentiators** — Table comparing your advantage vs ALL alternatives (not just direct competitors)
8. **Narrative** — Three acts: Problem (buyer's pain) → Solution (how you change it) → Outcome (what happens after)
9. **Value Proposition Summary** — Table: Value Driver | Traditional Approach | Your Approach | What Segment Gains
10. **Proof Points** — Quantitative evidence, qualitative evidence, customer success stories
11. **Messaging Framework** — Primary message + supporting messages (all reinforce ONE position)

### messaging-pillars.md

YAML metadata: `product_name`, `segment`, `primary_position`, `positioning_strategy`, `competitive_alternatives`, `messaging_pillars` (array of name, position primary|supporting, benefit, metric, supports_strategy)

Sections:
1. **Pillar Summary Table** — Pillar | Summary | Key Benefit | Primary Metric | Key Claim
2. **For each of 3 pillars:**
   - Summary (one sentence)
   - Why Customers Care — Customer quote about the pain, actual problems with numbers, what this solves, customer outcomes with metrics, why this segment cares more than others
   - Key Details — Table of benefits and claims with data sources
   - Ready-to-Use Copy Blocks — Headlines (7-10 words), Subheadlines (15-20 words), Body Copy (40-60 words with PAS/customer story structure), CTAs, Email Subject Lines, Social Posts (125 chars max)
3. **Messaging Hierarchy** — Always lead with primary pillar; supporting pillars reinforce, never compete
4. **Target Stakeholders** — Maps pillars to buying committee roles (Economic Buyer, Champion, Technical Buyer)

### buyer-persona-overview.md

YAML metadata: `product_name`, `segment`, per role (economic_buyer, champion, technical_buyer): `title`, `authority`, `veto_power`, `decision_timeline`, `cares_about`, `competitive_alternatives`, `key_pain_points`, `success_metrics`

Sections — for each role (max 3 roles):
1. **Role Profile** — Title, team size, reports to, KPIs, typical day
2. **Pain Points** — Daily frustrations with current approaches (use their language, not corporate-speak)
3. **Competitive Alternatives** — What they specifically use now, why they tolerate it, your advantage
4. **Decision Factors** — What they evaluate, deal-breakers, must-haves
5. **Messaging** — Primary pillar for this role, key phrases that resonate, phrases to avoid
6. **Objection Patterns** — Common pushback and how to handle it
7. **Buying Process** — When they enter, what they evaluate, what blocks them

### market-segment-overview.md

YAML metadata: `product_name`, `segment`, `segment_type`, `primary_position`, `positioning_strategy`, `decision_makers`, `competitive_alternatives`, `sales_cycle_length`, `avg_deal_size`, `win_rate`

Sections:
1. **Segmentation Approach** — Demographic (by revenue/size) or Problem-based (by pain intensity)
2. **Competitive Alternatives in Deals** — How status quo, different category, and direct competitors actually show up during sales process
3. **Deal Mechanics** — Typical deal flow stages, timeline, what kills deals, what accelerates them
4. **Deal Economics** — Pricing, negotiation dynamics, discount patterns
5. **GTM Motion** — Channel mix, content that works, events, partnerships
6. **Win/Loss Patterns** — Table of common scenarios with outcomes and key factors
7. **Success Metrics** — Leading indicators (pipeline, conversion) and lagging indicators (revenue, retention)

---

## Competitive Intelligence (`05-sales-enablement/[competitor]/`)

Each competitor gets a folder with 4 files.

### competitor-overview.md

Comprehensive reference (~15-20 min read). Sections:
1. **Company Profile** — Name, founded, size, market position, their positioning strategy
2. **Product Overview** — Description, pricing tiers, key features
3. **Strengths** — What they're genuinely good at, who cares, how to counter (Reframe → Proof → Flip)
4. **Weaknesses** — What they're bad at, who feels it, how to exploit (Discovery question → Demo contrast → Proof)
5. **Win/Loss Intelligence** — Win rates by scenario, with percentages and context. Wins: what drove it, how to amplify. Losses: what caused it, how to mitigate.
6. **Market Perception** — How buyers/analysts/market see them
7. **Their Sales Tactics** — Discounting behavior, FUD they spread, quarter-end patterns

### battlecard.md

Quick reference for live sales calls (~5-10 min scan). Sections:
1. **Quick Reference** — When to use, win rate, quick positioning sentence
2. **By Buyer Role** — For each role: their strength, your counter-message, proof points
3. **Head-to-Head by Pillar** — Table per pillar: Aspect | Us | Them | Winner | Notes
4. **Strengths & How to Counter** — Their strengths with Reframe/Proof/Flip counters
5. **Weaknesses & How to Exploit** — Discovery questions, demo contrasts, trap-setting questions
6. **Common Objections** — Acknowledge → Reframe → Proof → Check framework
7. **Trap-Setting Questions** — Questions that expose their weaknesses
8. **30-Second Talk Track** — Elevator pitch when competing against them

### objection-handling.md

A-R-P-C framework scripts organized by deal stage and buyer role. Sections:
1. **Objections by Deal Stage** — Discovery, Evaluation, Negotiation, Close
2. **Objections by Buyer Role** — Economic Buyer, Champion, Technical Buyer
3. **Each objection follows:** Acknowledge → Reframe → Proof → Check structure
4. **Escalation paths** — When to bring in SE, leadership, or customer references

### FUD-playbook.md

Counter-strategies for competitor claims. Sections:
1. **FUD They Spread About You** — Each claim with truth level (true/partial/false), full counter-script, supporting materials
2. **Legitimate Concerns About Them** — Verified weaknesses you can ethically raise
3. **Proactive Inoculation** — How to address FUD before it comes up
4. **Ethical Guidelines** — What's fair game vs. what crosses the line

---

## Proof Points (`07-proof-points/`)

### case-studies/[customer-name].md

One file per customer, named after company (use URL slug: `/customers/acme` → `acme.md`).

YAML metadata: `customer`, `vertical`, `segment`, `region`, `company_size`, `switched_from`, `switch_reason`, `source_url`, `published_date`, `approved_for`, `products_used`, `messaging_pillars_supported` (array of pillar + how), `key_metrics` (array of metric + value), `tags`

Sections:
1. **Overview** — One-paragraph summary of story
2. **The Challenge** — What they struggled with before (use their words)
3. **The Solution** — What they implemented and how
4. **The Results** — Specific metrics and outcomes
5. **Quick Reference: Approved Quotes** — Table: Quote | Speaker | Title | Approved For | Best Used For
6. **Quick Reference: Metrics** — Table: Metric | Before | After | Timeframe
7. **Competitive Switch Context** — What they used before, why they switched, what sealed the decision

### data-claims/data-claims.md

Single consolidated file for all externally-approved claims.

YAML metadata: `company`, `product`, `last_reviewed`, `next_review_due`, `owner`, counts (total/active/expired/under-review)

Structure:
- Organized by **theme** (aligned to messaging pillars), then **subtheme**
- Each claim row: Claim (exact text) | Strength (verified-metric/customer-reported/internal-data/analyst-cited/directional) | Source | Status (active/under-review/expired) | Valid Until | Approved For | Contact
- Staleness rules at bottom: review dates, escalation process

---

## Campaigns (`02-campaigns/`)

Each campaign gets a folder under `02-campaigns/` with populated briefs and generated assets. Templates live in `02-campaigns/_templates/`.

### _templates/campaign-brief-template.md

Sections: Campaign Overview, Target Audience, Messaging (table mapping pillars to audience), Data Claims (substantiated proof points), Channel Strategy, Asset Requirements, RACI, Timeline/Milestones, Measurement, Budget

### _templates/creative-brief-template.md

Sections: Project Overview, Strategic Context (from campaign brief), Creative Strategy, Visual Direction (mood, mandatory elements, no-gos), Copy Direction (tone, key messages, mandatories), Technical Specs (per asset type), Review/Approval Process

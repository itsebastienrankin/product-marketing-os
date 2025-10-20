# PMM Knowledge Base

Welcome to your Product Marketing knowledge base — organized from **broad to specific**, helping you (and AI agents) navigate naturally from company overview to execution tools.

---

## 📁 Structure (Broad → Specific → Tools)

### 1. [`/00-overview`](./00-overview/) — **START HERE: Company Foundation**
> Who are we? What do we sell? How do we show up?

The broad foundation that applies across all segments, verticals, and regions:
- **`company-overview.md`** — Mission, vision, market position
- **`product-portfolio.md`** — Products you sell and how they relate
- **`brand-positioning.md`** — Brand voice, values, personality

**When to use**: Setting context for anyone new to the company or when creating brand-level content.

---

### 2. [`/01-product-context`](./01-product-context/) — **THEN GO SPECIFIC: How You Go to Market**
> How does positioning change by segment, vertical, and region?

Your product knowledge organized by go-to-market dimension:

#### [`/01-product-context/segments/`](./01-product-context/segments/)
Market segments defined by buying behavior and company characteristics
- Example: `segments/smb/`, `segments/enterprise/`, `segments/mid-market/`
- Contains: buyer personas, positioning, messaging pillars, market overview

#### [`/01-product-context/verticals/`](./01-product-context/verticals/)
Industry-specific positioning and value
- Example: `verticals/healthcare/`, `verticals/financial-services/`
- Contains: industry overview, pain points, value prop, competitive landscape, customer stories

#### [`/01-product-context/regions/`](./01-product-context/regions/)
Geographic market adaptations
- Example: `regions/north-america/`, `regions/emea/`, `regions/apac/`
- Contains: regional trends, localization, key accounts, regional messaging

**When to use**: Creating campaigns, sales materials, or content for a specific audience. Often combine: "Enterprise segment" + "Healthcare vertical" + "EMEA region"

---

### 3. [`/04-templates`](./04-templates/) — **TOOLS TO CREATE**
> Reusable document templates for campaigns, briefs, and frameworks

Ready-to-use templates for common PMM deliverables:
- Campaign briefs
- Creative briefs
- Messaging frameworks
- Product GTM plans
- Battlecards
- Launch checklists
- And more...

**When to use**: Starting a new campaign, launch, or sales enablement project.

---

### 4. [`/05-prompts`](./05-prompts/) — **TOOLS TO GENERATE**
> AI prompts that pull from your knowledge base to create content

Pre-built prompts for AI content generation:
- Ad copy
- Email campaigns and nurture sequences
- Case studies
- Landing pages
- Webinars
- Press releases
- Sales outreach

**When to use**: Generating content quickly while maintaining brand and positioning consistency. These prompts automatically reference your product context.

---

### 5. [`/04-strategy`](./04-strategy/) — **STRATEGIC PLANNING**
> Annual plans, competitive intelligence, and GTM strategy

Strategic planning documents:
- Annual marketing plan
- Go-to-market strategy
- Competitive intelligence
- Pricing and packaging
- Launch calendar

**When to use**: Strategic planning cycles, QBRs, board updates, or competitive analysis.

---

### 6. [`/06-config`](./06-config/) — **SYSTEM CONFIGURATION**
> Behind-the-scenes files and utilities

Technical configuration and automation:
- CLI tools for automation
- Metadata and tagging system
- Glossary of terms
- Configuration files

**When to use**: Rarely. These are system files that power automation. Most users won't need to edit these.

---

## 🗺️ Navigation Paths

### Path 1: Understanding the Company (Broad → Specific)
```
00-overview/company-overview.md
    ↓
00-overview/product-portfolio.md
    ↓
01-product-context/segments/[segment]/positioning.md
    ↓
01-product-context/verticals/[vertical]/value-proposition.md
```

### Path 2: Creating a Campaign
```
01-product-context/segments/[segment]/buyer-personas.md
    ↓
01-product-context/segments/[segment]/messaging-pillars.md
    ↓
02-templates/campaign-brief-template.md
    ↓
03-prompts/ad-copy-prompt.md
```

### Path 3: Sales Enablement
```
01-product-context/segments/[segment]/positioning.md
    ↓
02-templates/battlecard-template.md
    ↓
01-product-context/verticals/[vertical]/competitive-landscape.md
```

---

## 🚀 Quick Start Guide

### For New Team Members
1. **Read** `/00-overview/` — Understand the company and products
2. **Explore** `/01-product-context/segments/` — Learn how we position by audience
3. **Review** example content in `/01-product-context/verticals/` or `/regions/`
4. **Use** `/02-templates/` when creating new deliverables

### For Creating Content
1. **Identify** your audience: Which segment? Which vertical? Which region?
2. **Reference** the relevant folders in `/01-product-context/`
3. **Use** a template from `/02-templates/` OR a prompt from `/03-prompts/`
4. **Ensure** messaging aligns with positioning and messaging pillars

### For AI Content Generation
Provide context in this order:
```
1. Company overview (from /00-overview/)
2. Segment positioning (from /01-product-context/segments/)
3. Vertical value prop (from /01-product-context/verticals/ if relevant)
4. Regional considerations (from /01-product-context/regions/ if relevant)
5. Use prompt from /03-prompts/ to generate
```

---

## 📊 Content Matrix Approach

Cross-reference your context for targeted content:

| Segment | Vertical | Region | Key Message | Content Type |
|---------|----------|--------|-------------|--------------|
| Enterprise | Healthcare | North America | Security & compliance | Case study |
| SMB | Retail | EMEA | Quick setup & ROI | Landing page |
| Mid-Market | Financial Services | APAC | Scalability & support | Webinar |

---

## 💡 Key Principles

### 1. **Single Source of Truth**
Update once, use everywhere. When positioning changes, update `/01-product-context/`, and all content stays aligned.

### 2. **Composable Context**
Mix and match: `segment` + `vertical` + `region` = targeted messaging

### 3. **Human & AI Friendly**
Structured for humans to read and navigate, formatted for AI to extract and use.

### 4. **Broad to Specific**
Start with company overview, drill into specific audiences, then use tools to create.

---

## 🏷️ Tagging & Findability

All content can be tagged by:
- **Stage**: awareness, consideration, decision, retention
- **Channel**: email, social, paid, content, events, sales
- **Type**: template, prompt, framework, playbook, battlecard
- **Segment**: smb, enterprise, mid-market
- **Vertical**: healthcare, finance, retail, etc.

See [`/06-config/tag-index.md`](./06-config/tag-index.md) for the complete tagging system.

---

## 📝 Maintenance

### Update Frequency
- **00-overview**: Annually or when company strategy shifts
- **01-product-context**: Quarterly or after major wins/losses
- **02-templates**: When adding new deliverable types
- **03-prompts**: When messaging or positioning changes
- **04-strategy**: Quarterly for plans, ongoing for competitive intel
- **05-config**: As needed for system changes

### Signs You Need to Update
- Win rate changes in a segment
- New competitor emerges
- Product launches
- Customer feedback reveals new patterns
- Market trends shift

---

## 🎯 Best Practices

### Do's
- ✅ Start with `/00-overview/` before drilling into specifics
- ✅ Keep `/01-product-context/` updated — it's your foundation
- ✅ Combine segment + vertical + region for targeted messaging
- ✅ Use templates and prompts to maintain consistency
- ✅ Link between related documents
- ✅ Update after major wins, losses, or market changes

### Don'ts
- ❌ Skip `/00-overview/` — it sets the foundation
- ❌ Create segment/vertical/region folders "just in case"
- ❌ Duplicate content across folders
- ❌ Let positioning and messaging get stale
- ❌ Create content without referencing product context

---

## 🆘 Need Help?

### Finding Content
- **Can't find something?**: Check [`/05-config/tag-index.md`](./05-config/tag-index.md)
- **What's a term?**: See [`/05-config/glossary.md`](./05-config/glossary.md)

### Creating Content
- **Starting a campaign?**: Use [`/02-templates/campaign-brief-template.md`](./02-templates/campaign-brief-template.md)
- **Need AI-generated content?**: Use prompts in [`/03-prompts/`](./03-prompts/)
- **Competitive situation?**: Check [`/04-strategy/competitive-intelligence.md`](./04-strategy/competitive-intelligence.md)

### Understanding Structure
- **New to PMM?**: Read this README + [`/01-product-context/README.md`](./01-product-context/README.md)
- **Need technical help?**: See [`/05-config/CLI/SETUP-GUIDE.md`](./05-config/CLI/SETUP-GUIDE.md)

---

## 📈 Measuring Success

This knowledge base is working when:
- ✅ New team members ramp in days, not weeks
- ✅ Content creation is faster and more consistent
- ✅ Sales can find positioning and battlecards instantly
- ✅ Win rates improve as messaging tightens
- ✅ Everyone knows where to find (and update) truth

---

**Version**: 2.0 (Optimized Structure)  
**Last Updated**: October 2025  
**Owner**: Product Marketing Team

---

## Structure Changelog

**v2.0** - October 2025
- Reorganized from numbered silos to logical flow (broad → specific → tools)
- Nested segments/verticals/regions under `/01-product-context/`
- Renumbered templates, prompts, strategy, and config for natural progression
- Added comprehensive navigation guides and README files

**v1.0** - October 2025
- Initial numbered structure with separate top-level folders

# Regional Context

> **Purpose**: Everything PMMs need to launch campaigns and products in new geographies. One playbook per region with market dynamics, cultural nuances, competitors, and localization.

---

## 📁 Structure

```
03-regional-context/
├── _templates/
│   └── regional-playbook.md        ← Copy this to start
│
├── {{region-1}}/                   ← e.g., "north-america"
│   └── regional-playbook.md        ← Everything for this region
│
├── {{region-2}}/                   ← e.g., "emea"
│   └── regional-playbook.md
│
├── {{region-3}}/                   ← e.g., "apac"
│   └── regional-playbook.md
│
└── README.md                       ← This file
```

---

## 🎯 What's in the Regional Playbook

### One strategic document with 7 essential sections:

#### 1. **Market Dynamics**
- Market size, growth, and maturity
- Economic climate and business trends
- Technology adoption and digital maturity

**For PMM**: Size the opportunity, understand market timing

---

#### 2. **Regional Competitive Landscape**
- Local/regional competitors
- How global competitors perform here
- Win/loss patterns by region
- Competitive positioning

**For PMM**: Know who you're up against, how to win

---

#### 3. **Cultural & Messaging Adaptations**
- Business culture and communication style
- How to adapt your value proposition
- Message prioritization for the region
- Language and tone guidelines
- Words that resonate vs. words to avoid

**For PMM**: Ensure campaigns resonate culturally

---

#### 4. **Localization Essentials**
- Language and translation requirements
- Visual and design preferences
- Legal and compliance requirements
- Privacy and data regulations

**For PMM**: Ensure content is appropriate and compliant

---

#### 5. **Pricing & Buying Preferences**
- Currency and pricing display
- Regional pricing strategy
- Payment preferences and procurement
- Discount expectations

**For PMM**: Price appropriately, structure offers correctly

---

#### 6. **Regional Proof Points**
- Featured customers in region
- Local partnerships and integrations
- Regional awards and recognition
- Customer quotes and metrics

**For PMM**: Build credibility with local proof

---

#### 7. **Regional GTM Strategy**
- Go-to-market approach (direct/partner/hybrid)
- Channel effectiveness by region
- Target accounts and priorities
- Team and resources

**For PMM**: Execute regional strategy effectively

---

## 💡 Key Philosophy

### Why One Playbook per Region?

**PMM Reality**:
When launching in a new geography, you need:
- ✅ All context in one place
- ✅ Quick reference for creative teams
- ✅ Easy for AI to ingest
- ✅ Actionable guidance, not academic research

**One regional playbook gives you**:
- Market dynamics (context)
- Cultural nuances (how to adapt)
- Competitive landscape (who to beat)
- Proof points (credibility)
- GTM strategy (how to execute)

**Everything needed to launch. One document.**

---

## 🌍 Example: Regional Differences

### North America
**Culture**: Direct, transactional, move fast  
**Messaging**: Lead with ROI and speed  
**Proof**: Innovation focus, early adopters  
**Competition**: Crowded, need clear differentiation

### EMEA
**Culture**: Relationship-focused, risk-averse, formal  
**Messaging**: Lead with stability and security  
**Proof**: Compliance certifications, European logos  
**Competition**: Local champions, data residency matters

### APAC
**Culture**: Hierarchical, relationship-driven, detail-oriented  
**Messaging**: Lead with partnership and long-term value  
**Proof**: Regional references critical  
**Competition**: Local vendors strong, need local presence

---

## 🚀 When to Create a Regional Playbook

### DO create when:
- ✅ Actively selling in the region (not just exploring)
- ✅ Have 5+ customers or serious prospects
- ✅ Different messaging or positioning needed
- ✅ Localization required (language, cultural, legal)
- ✅ Regional competitive dynamics differ
- ✅ Local GTM motion (team, partners)

### DON'T create when:
- ❌ Only 1-2 customers
- ❌ No localization needed
- ❌ Same messaging works everywhere
- ❌ No regional team or motion
- ❌ Just testing the market

**Rule of thumb**: If you can't fill out cultural adaptations and regional proof points, you're not ready for a regional playbook yet.

---

## 📝 How to Create a Regional Playbook

### Step 1: Qualify the Region
- Active sales motion? {{Yes/No}}
- Local customers? {{Count}}
- Localization needed? {{Yes/No}}
- Regional team? {{Yes/No}}

### Step 2: Create Playbook
```bash
cd 03-regional-context/
mkdir emea  # or your region name
cp _templates/regional-playbook.md emea/
```

### Step 3: Research & Fill Out
1. **Market Dynamics** - Size the opportunity, understand trends
2. **Competitive Landscape** - Research local competitors
3. **Cultural Adaptations** - Interview local team, review lost deals
4. **Localization** - Document language and legal requirements
5. **Proof Points** - Gather regional customers and metrics
6. **GTM Strategy** - Define approach and channels

**Time investment**: 3-4 hours for initial playbook, ongoing updates

---

## 🎨 Using Regional Playbooks

### Example: Launching Campaign in EMEA

```
1. Open: emea/regional-playbook.md

2. Scan market dynamics:
   → "GDPR compliance is top concern"
   → "Market mature, relationship-driven buying"

3. Check cultural adaptations:
   → "Use formal tone, emphasize security over speed"
   → "Lead with data privacy and compliance"

4. Get proof points:
   → "Deutsche Bank case study"
   → "GDPR certified badge"

5. Review localization:
   → "Translate to German and French"
   → "Show €pricing, not $"

6. Create campaign:
   → Formal tone ✓
   → GDPR messaging ✓
   → European customer logos ✓
   → Localized pricing ✓
```

**Result**: Campaign that resonates culturally and performs in region.

---

### For Creative Teams

**Give them**:
- Regional playbook
- Specific sections to reference:
  - Cultural & Messaging Adaptations (tone, language)
  - Localization Essentials (design preferences)
  - Regional Proof Points (customer logos, quotes)

**They get**:
- What resonates in this region
- Cultural do's and don'ts
- Visual preferences
- Proof points to feature

**No back-and-forth needed.**

---

### For AI Content Generation

**Prompt example**:
```
Using the EMEA regional playbook, create a landing page for 
enterprise healthcare customers. Follow the cultural messaging 
guidelines (formal tone, lead with compliance). Use the Deutsche 
Bank customer proof point. Adapt the value proposition per the 
regional messaging section. Include GDPR compliance messaging.
```

**AI has everything it needs in one document.**

---

## 🔗 Combining Regions with Segments & Verticals

### The Matrix Approach

| Segment | Vertical | Region | Context Needed |
|---------|----------|--------|----------------|
| Enterprise | Healthcare | EMEA | 3 playbooks: Enterprise + Healthcare + EMEA |
| SMB | Retail | North America | 3 playbooks: SMB + Retail + North America |
| Mid-Market | Financial Services | APAC | 3 playbooks: Mid-Market + FinServ + APAC |

### Example: "Enterprise Healthcare in EMEA"

**Pull from 3 playbooks**:

```
1. /01-segment-context/enterprise/
   Files: positioning, personas, messaging
   Use: Enterprise buying process, security focus, long sales cycle

2. /02-vertical-context/healthcare/
   File: vertical-playbook.md
   Use: Healthcare pain points, HIPAA compliance, hospital customers

3. /03-regional-context/emea/
   File: regional-playbook.md  ← THIS
   Use: GDPR messaging, formal tone, European proof, localization

Result: Content that speaks to:
- Enterprise buyers (from segment)
- Healthcare needs (from vertical)
- European market (from region)
```

---

## 📋 Regional vs. Segment vs. Vertical

### When to Use What

**Segment** (`/01-segment-context/`):
- **Defined by**: How customers buy (company size, buying behavior)
- **Different**: Buyer personas, buying process, deal size, GTM motion
- **Use when**: Audience differs by buying behavior

**Vertical** (`/02-vertical-context/`):
- **Defined by**: Industry domain (healthcare, finance, retail)
- **Different**: Pain points, workflows, regulations, use cases
- **Use when**: Industry-specific needs or competition

**Region** (`/03-regional-context/`):
- **Defined by**: Geography (EMEA, APAC, North America)
- **Different**: Language, culture, local competition, market maturity
- **Use when**: Cultural adaptation or localization needed

### Combine for Precision
Most campaigns will use 2-3 playbooks:
- **Segment** (always) + **Region** (if regional)
- **Segment** + **Vertical** (if industry-specific)
- **Segment** + **Vertical** + **Region** (hyper-targeted)

---

## ✅ Quick Start Checklist

### Setting Up Your First Region

- [ ] Identify region with 5+ customers or active GTM
- [ ] Create folder: `mkdir [region-name]`
- [ ] Copy template: `cp _templates/regional-playbook.md [region-name]/`
- [ ] Research market dynamics and trends
- [ ] Document cultural nuances (interview local team)
- [ ] Identify regional competitors
- [ ] Gather local customer proof points
- [ ] Define localization requirements
- [ ] Set regional pricing strategy
- [ ] Document GTM approach
- [ ] Use for all regional campaigns and content

---

## 🎯 Common Regions

### By Geography
- `north-america/` - US and Canada
- `emea/` - Europe, Middle East, Africa
- `apac/` - Asia-Pacific
- `latam/` - Latin America
- `anz/` - Australia and New Zealand

### By Country (If Significantly Different)
- `uk/` - United Kingdom
- `germany/` - Germany
- `france/` - France
- `japan/` - Japan
- `india/` - India

**When to split**: Create country-specific playbook when market dynamics, culture, or language differ significantly from broader region.

---

## 💼 For Product Marketers

### Use Regional Playbooks To:

**Launch regional campaigns**:
- Adapt messaging for cultural fit
- Use regional proof points
- Follow localization guidelines
- Emphasize regional competitive advantages

**Enable regional sales**:
- Regional discovery questions
- Local objection handling
- Regional customer references
- Market-specific pitch angles

**Create regional content**:
- Landing pages with regional messaging
- Case studies with local customers
- Emails with cultural tone
- Ads with regional language

**Partner with creative**:
- One document with all context needed
- Cultural do's and don'ts
- Visual preferences
- Proof points to feature

---

## 🌟 Success Indicators

### A Good Regional Playbook Has:
- [ ] Clear cultural messaging adaptations (not just translation)
- [ ] 2-3 regional customer stories with metrics
- [ ] Regional competitive positioning (local competitors identified)
- [ ] Specific localization guidance (not just "translate it")
- [ ] Regional proof that resonates locally
- [ ] GTM strategy specific to region
- [ ] Quick reference for teams

---

**Owner**: Product Marketing + Regional Leads  
**Last Updated**: October 2025

---

## 🎓 Pro Tips

### Building Regional Playbooks
1. **Talk to local team first** - They know cultural nuances
2. **Interview regional customers** - Use THEIR language
3. **Research local competitors** - Don't assume global landscape applies
4. **Test messaging** - What works in US may not work in Germany
5. **Get local proof early** - Regional references close deals

### Common Mistakes to Avoid
- ❌ Just translating content (not adapting for culture)
- ❌ Ignoring local competitors
- ❌ Using only global customer proof
- ❌ Assuming buying behavior is universal
- ❌ One-size-fits-all pricing

### Making Playbooks Actionable
- ✅ Include specific examples, not general guidance
- ✅ Provide ready-to-use discovery questions
- ✅ Document what actually works (test and update)
- ✅ Make it easy to hand off to creative/sales
- ✅ Keep it current (stale playbooks aren't used)

---

**One playbook. Complete regional context. Ready to launch.** 🌍


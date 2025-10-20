# Vertical Context

> **Purpose**: Everything you need to launch campaigns and products in each vertical — market intel, customer insights, positioning, proof, and competitive strategy.

---

## 📁 Optimized Structure

```
02-vertical-context/
├── _templates/
│   └── vertical-playbook.md        ← ONE strategic playbook per vertical
│
├── {{vertical-1}}/                 ← e.g., "healthcare"
│   └── vertical-playbook.md        ← Everything you need in one file
│
├── {{vertical-2}}/                 ← e.g., "financial-services"
│   └── vertical-playbook.md
│
├── {{vertical-3}}/                 ← e.g., "retail"
│   └── vertical-playbook.md
│
└── README.md                       ← This file
```

---

## 💡 Design Philosophy

### Why One Playbook vs. 5 Separate Files?

**PMM Reality**:
- ✅ When building a campaign, you need ALL the context at once
- ✅ Easier to reference one strategic doc than jump between 5 files
- ✅ Faster for AI to ingest and use
- ✅ Less maintenance burden (one file to update)

**The Playbook Contains**:
1. **Market Context** - Trends, regulations, market size
2. **Customer Pain Points** - Workflows, where they break, business impact
3. **Value Proposition** - How you solve it, feature-to-value mapping
4. **Customer Proof** - Case studies, metrics, quotes, logos
5. **Competitive Intel** - Who you compete against, how to win
6. **GTM Playbook** - Discovery questions, messaging, objections
7. **Quick Reference** - Elevator pitch, top proof points

**Result**: Everything in one strategic, actionable document.

---

## 🎯 What Goes in a Vertical Playbook

### Essential Sections

#### 1. Market Context (The "Why")
- Industry definition and size
- Key trends creating opportunity
- Regulations and compliance requirements

*For PMM*: Sets context for campaigns, explains urgency

---

#### 2. Customer Pain Points (The "What")
- 3-5 critical pain points
- Current workflows and where they break
- Business and personal impact

*For PMM*: Drives messaging, content themes, campaign angles

---

#### 3. Value Proposition Mapping (The "How")
- Vertical-specific positioning statement
- Feature-to-value mapping
- ROI calculator template
- Messaging by persona in vertical

*For PMM*: Core messaging for all content and campaigns

---

#### 4. Customer Proof Points (The "Evidence")
- 2-3 featured case studies
- Customer quotes by theme
- Approved logos
- Key metrics and outcomes

*For PMM*: Credibility for campaigns, sales enablement, content

---

#### 5. Competitive Positioning (The "Why Us")
- Vertical-specific competitors
- Win/loss patterns
- How to win in this vertical
- Discovery questions and objection handling

*For PMM*: Sales enablement, battlecards, competitive content

---

#### 6. GTM Playbook (The "How To")
- Target personas in vertical
- Discovery questions
- Messaging guidelines
- Essential assets needed

*For PMM*: Executable strategy for vertical launch

---

## 🚀 How to Use This

### For Campaign Development
```
1. Open: healthcare/vertical-playbook.md
2. Scan: Market context (what's trending?)
3. Use: Pain point #2 (primary campaign angle)
4. Message: Value prop for that pain
5. Prove: Customer story + metric
6. Create: Campaign brief with vertical-specific context
```

**Time savings**: One file to reference vs. jumping between 5.

---

### For Sales Enablement
```
1. Open: financial-services/vertical-playbook.md
2. Reference: Discovery questions section
3. Use: Competitive positioning against incumbent
4. Prove: Case study with bank logo
5. Handle: Vertical-specific objections
```

---

### For AI Content Generation
```
Prompt: "Using the healthcare vertical playbook, create an email 
campaign targeting CIOs. Focus on pain point #1 (patient data security), 
use the value prop for HIPAA compliance, and include the hospital customer 
proof point. Match the language guidelines in the messaging section."
```

**AI Benefit**: Everything needed in one structured document.

---

## 📝 Creating a Vertical

### Step 1: Qualify the Vertical
Do you have:
- [ ] 5+ customers in this industry?
- [ ] Unique pain points vs. other verticals?
- [ ] Vertical-specific value proposition?
- [ ] Industry-specific proof points?

If NO to any → Track in CRM, create vertical when qualified.

### Step 2: Create and Populate
```bash
cd 02-vertical-context/
mkdir healthcare
cp _templates/vertical-playbook.md healthcare/
cd healthcare/
# Fill out the playbook
```

### Step 3: Fill Out in Order
1. **Market Context** - Research trends, regulations
2. **Pain Points** - Interview customers, document workflows
3. **Value Mapping** - Map features to vertical needs
4. **Proof Points** - Document customer stories
5. **Competitive Intel** - Research vertical competitors
6. **GTM Playbook** - Create discovery questions, messaging

**Time investment**: 4-6 hours for a solid vertical playbook

---

## 💡 When to Use

### Use vertical playbooks when:
- ✅ Launching vertical-specific campaign
- ✅ Creating industry landing page
- ✅ Enabling sales for vertical opportunity
- ✅ Writing vertical case study
- ✅ Building vertical pitch deck
- ✅ Attending industry conference
- ✅ Creating vertical-specific content

### Don't need vertical playbook when:
- ❌ Horizontal campaign (use segment context instead)
- ❌ Generic product updates
- ❌ Brand-level content

---

## 🔗 Combining with Segments & Regions

### Example: "Enterprise Healthcare in North America"

**Context needed**:
```
Segment: /01-segment-context/enterprise/
→ Enterprise buying process (120+ days, complex committee)
→ Enterprise personas (CIO, CISO, CFO)
→ Enterprise positioning (risk mitigation, security)

Vertical: /02-vertical-context/healthcare/
→ Healthcare pain points (patient data, HIPAA)
→ Healthcare value props (compliance, audit trails)
→ Healthcare proof (hospital customers)

Region: /03-regional-context/north-america/
→ US healthcare regulations
→ North American messaging
→ Local customer examples
```

**Campaign approach**:
- Lead with: Healthcare pain (from vertical playbook)
- Position for: Enterprise buyers (from segment context)
- Localize for: North American market (from regional context)
- Prove with: US hospital customer (vertical playbook + region)

---

## 📚 Example Verticals

### Healthcare
**Pain points**: Patient data security, HIPAA compliance, interoperability  
**Value**: Secure data handling, audit trails, privacy controls  
**Competitors**: Healthcare-specific vendors, legacy EMR systems  
**Proof needed**: Hospital/clinic logos, compliance certifications

### Financial Services
**Pain points**: Fraud prevention, regulatory reporting, real-time processing  
**Value**: SOC 2, encryption, uptime SLAs, audit logs  
**Competitors**: Finance-specific platforms, legacy banking systems  
**Proof needed**: Bank/fintech logos, security certifications

### Retail
**Pain points**: Seasonal demand, inventory, omnichannel experience  
**Value**: Scalability, real-time data, customer analytics  
**Competitors**: Retail-specific platforms, custom-built systems  
**Proof needed**: E-commerce/retail logos, peak performance metrics

---

## ✅ Quality Checklist

A good vertical playbook has:
- [ ] 3-5 specific pain points (not generic)
- [ ] Clear value mapping (features → vertical needs → outcomes)
- [ ] 2-3 customer stories with metrics
- [ ] Vertical-specific competitors identified
- [ ] Discovery questions that work in this vertical
- [ ] Vertical-appropriate language and terminology
- [ ] ROI model with vertical-specific metrics
- [ ] Approved customer logos for social proof

---

## 🔄 Maintenance

### Update When
- [ ] Win 5 new customers in vertical
- [ ] New regulation announced
- [ ] Competitor launches vertical solution
- [ ] Win/loss rate changes
- [ ] Customer interviews reveal new patterns
- [ ] Industry trends shift

### Review Frequency
**Quarterly** - Update metrics, add new customers, refresh competitive intel

---

## 🎯 Success Metrics

### Track Per Vertical
- **Revenue**: ${{Amount}}
- **Customer count**: {{Number}}
- **Win rate**: {{%}}
- **Average deal size**: ${{Amount}}
- **Sales cycle**: {{Days}}
- **Content engagement**: {{Metrics}}

---

**Owner**: Product Marketing  
**Last Updated**: October 2025

---

## 💼 Pro Tips for PMMs

### Building Your First Vertical Playbook
1. **Start with customers** - Interview 3-5 customers in the vertical
2. **Document their language** - Use THEIR words for pain points
3. **Map value explicitly** - Don't assume they see the connection
4. **Get proof early** - Case studies close deals
5. **Test messaging** - Run discovery calls using playbook questions

### Maintaining Playbooks
- **Quarterly review** with sales team
- **Add wins** as you close vertical deals
- **Update competition** when landscape shifts
- **Refresh metrics** with current data
- **Iterate messaging** based on what works

### Using with Cross-Functional Teams
- **Sales**: Give them discovery questions + objection handling
- **Creative**: Give them pain points + customer quotes + language guidelines
- **Content**: Give them industry trends + customer stories
- **Product**: Give them pain points + feature requests
- **CS**: Give them customer examples + best practices

**One playbook serves everyone.** 🎯

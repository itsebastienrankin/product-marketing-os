# Segment Context

> **Purpose**: Each market segment gets its own folder with complete positioning, personas, messaging, and GTM strategy.

---

## 📁 Structure

```
01-segment-context/
├── _templates/                   ← Copy these to create new segments
│   ├── buyer-personas.md
│   ├── market-segment-overview.md
│   ├── messaging-pillars.md
│   └── narrative-and-positioning.md
│
├── {{SEGMENT-1}}/               ← Your first segment (e.g., "smb")
│   ├── buyer-personas.md
│   ├── market-segment-overview.md
│   ├── messaging-pillars.md
│   └── narrative-and-positioning.md
│
├── {{SEGMENT-2}}/               ← Your second segment (e.g., "mid-market")
│   ├── buyer-personas.md        ← Different personas than SEGMENT-1
│   ├── market-segment-overview.md
│   ├── messaging-pillars.md     ← Different messages than SEGMENT-1
│   └── narrative-and-positioning.md ← Different positioning than SEGMENT-1
│
├── {{SEGMENT-3}}/               ← Your third segment (e.g., "enterprise")
│   └── ...
│
└── README.md                    ← This file
```

---

## 🎯 Key Concept

**Each segment is completely independent.**

- SMB has its own buyer-personas.md (different from Enterprise)
- SMB has its own narrative-and-positioning.md (different from Mid-Market)
- SMB has its own messaging-pillars.md (different messages for different buyers)

**Why?** Because SMB, Mid-Market, and Enterprise aren't just "different sized companies" — they're different markets with:
- ✅ Different buyer personas
- ✅ Different pain points
- ✅ Different competitors
- ✅ Different buying processes
- ✅ Different positioning
- ✅ Different messaging

---

## 📝 The Four Files Per Segment

### 1. `narrative-and-positioning.md`
**Start here first.** This is your strategic foundation.

**Contains**:
- Competitive alternatives (what they'd use instead)
- Unique attributes (what only you can do)
- Value delivered (outcomes from your attributes)
- Target customer characteristics
- Market category
- Relevant trends
- Positioning statement
- Strategic narrative
- Competitive counter-positioning

**Based on**: April Dunford's positioning framework

---

### 2. `buyer-personas.md`
**Who buys in this segment?**

**Contains**:
- Persona profiles (roles, titles, company context)
- Jobs to be done (what they're trying to accomplish)
- Pain points (operational, strategic, emotional)
- Buying journey (triggers, timeline, process)
- Decision criteria (ranked)
- Best alternatives they consider
- How to reach them (channels, content)
- Messaging per persona
- Objections and responses

---

### 3. `messaging-pillars.md`
**The 3 core messages that resonate with this segment.**

**Contains**:
- 3 value themes from positioning
- Headline + elaboration for each
- Supporting evidence (customer proof, capabilities, validation)
- Competitive contrast
- Language guidelines (what resonates, what to avoid)
- Execution by channel, persona, and stage
- Message orchestration (when to use which)

---

### 4. `market-segment-overview.md`
**Market opportunity and GTM strategy.**

**Contains**:
- Segment definition (firmographic, behavioral, need-based)
- Market size (TAM, SAM, SOM)
- Customer economics (ACV, LTV, CAC)
- Buying behavior (process, timeline, committee)
- Competitive landscape (alternatives + win/loss)
- GTM strategy (model, channels, sales approach)
- Success metrics

---

## 🚀 How to Create a Segment

### Step 1: Create Folder
```bash
cd 01-segment-context/
mkdir smb  # or "mid-market" or "enterprise" etc.
```

### Step 2: Copy Templates
```bash
cp _templates/*.md smb/
cd smb/
```

### Step 3: Fill Out (In This Order)

1. **narrative-and-positioning.md** first
   - Define alternatives (not just competitors!)
   - Identify unique attributes
   - Map to value delivered
   
2. **buyer-personas.md** second
   - Who cares about your positioning?
   - What are their jobs to be done?
   - How do they buy?
   
3. **messaging-pillars.md** third
   - Translate positioning into 3 messages
   - Language that resonates
   - Proof points
   
4. **market-segment-overview.md** last
   - Market size and opportunity
   - GTM strategy and metrics

---

## 💡 Examples: How Segments Differ

| Dimension | SMB | Mid-Market | Enterprise |
|-----------|-----|------------|------------|
| **Buyer** | Founder/CEO | VP/Director | CIO/CTO |
| **Pain** | No time/budget | Scaling | Risk/security |
| **Alternative** | DIY/spreadsheets | Point solutions | Legacy vendors |
| **Cycle** | 30-45 days | 60-90 days | 120-180 days |
| **Deal size** | $15K-$30K | $75K-$125K | $250K+ |
| **Message** | "Fast ROI" | "Scale easily" | "Enterprise-grade" |

**Every dimension is different → Every segment gets its own folder.**

---

## 🎨 Using Segments for Content

### Example: Creating SMB Email Campaign

```
1. Open: smb/narrative-and-positioning.md
   → Get: Positioning vs. DIY/spreadsheets

2. Open: smb/buyer-personas.md
   → Target: Founder persona
   → Pain: "No time, limited budget"

3. Open: smb/messaging-pillars.md
   → Lead with: Pillar #1 "Get results in days"

4. Open: smb/market-segment-overview.md
   → Proof: SMB customer stories

5. Create: Email using SMB-specific context
```

**Result**: Email is perfectly targeted, consistent, on-brand.

---

## 🔗 Cross-Referencing with Verticals & Regions

**Example**: "Enterprise Healthcare in EMEA"

Pull from THREE places:
```
/01-segment-context/enterprise/
→ Enterprise buying process, personas, positioning

/02-vertical-context/healthcare/
→ Healthcare pain points, compliance, stories

/03-regional-context/emea/
→ EMEA localization, regional messaging
```

**Result**: Hyper-targeted content that speaks to all three dimensions.

---

## 🛠️ Template Variables

Templates use `{{VARIABLE}}` placeholders:

- `{{SEGMENT_NAME}}` - Replace with your segment name
- `{{PERSONA_NAME}}` - Replace with persona title
- `{{VALUE_THEME_NAME}}` - Name of messaging pillar
- `{{Date}}` - When last updated
- `{{Name}}` - Owner
- etc.

**Find and replace these as you fill out templates.**

---

## ✅ Quick Start Checklist

- [ ] Identify 2-3 primary segments
- [ ] Create folder for each (e.g., `mkdir smb`)
- [ ] Copy templates (`cp _templates/*.md smb/`)
- [ ] Fill out narrative-and-positioning.md first
- [ ] Then buyer-personas.md
- [ ] Then messaging-pillars.md
- [ ] Finally market-segment-overview.md
- [ ] Use these for ALL content targeting this segment

---

## 📊 When to Create a Segment

**DO create when**:
- ✅ You have 5+ customers in the segment
- ✅ Buying behavior is clearly different
- ✅ Different personas/pain points
- ✅ Different positioning needed
- ✅ Different GTM motion

**DON'T create when**:
- ❌ Only 1-2 customers
- ❌ Minor variations only
- ❌ Hypothetical segment
- ❌ Too granular

---

## 🔄 Maintenance

**Update frequency**: Quarterly or after 10+ wins/losses

**Update when**:
- Win rate changes
- New competitor emerges
- Customer feedback reveals new patterns
- Product changes affect positioning
- Market trends shift

---

**Owner**: Product Marketing  
**Last Updated**: October 2025

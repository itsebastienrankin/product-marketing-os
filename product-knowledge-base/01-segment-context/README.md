# Segment Context

> **Purpose**: Each market segment gets its own folder with complete positioning, personas, messaging, and GTM strategy.

---

## 🤖 AI-Assisted Setup

### How to Use AI to Create Your Segment Folders

**You can provide AI with your product/market context, and it will create the complete folder/file structure using these templates.**

#### Step 1: Prepare Your Context
Provide AI with this information:

```
PRODUCT INFORMATION:
- Product Name: [Your product name]
- Product Category: [e.g., SaaS, B2B Software, Hardware]
- Core Value Proposition: [What problem you solve]
- Unique Differentiators: [What makes you unique]

MARKET SEGMENTS YOU SERVE:
Segment 1: [Name] (e.g., "SMB", "Mid-Market", "Enterprise")
- GMV/Revenue Range: [e.g., $250K-$5M]
- Key Characteristics: [What defines this segment]
- Primary Decision Makers: [Job titles/roles]
- Main Pain Points: [Top 3 challenges]
- Competitive Alternatives: [What they'd use without you]

Segment 2: [Name]
- [Same structure]

Segment 3: [Name]
- [Same structure]

COMPETITIVE LANDSCAPE:
- Direct Competitors: [List competitors]
- Alternative Solutions: [Status quo, DIY, different categories]
- Your Unique Position: [One position you own per segment]

PROOF POINTS:
- Customer Success Stories: [Brief summaries]
- Key Metrics: [Quantitative proof]
- Testimonials: [Brief quotes]
```

#### Step 2: AI Instructions
Give AI this prompt:

```
Create a complete segment context folder structure for [PRODUCT NAME] using the templates in 01-segment-context/{{segment-1}}/.

IMPORTANT: Create ONE folder per segment. Each segment gets its own complete folder with all 4 files.

For each segment ([SEGMENT 1], [SEGMENT 2], [SEGMENT 3]):
1. Create a new folder named [segment-name]/ (e.g., "smb/", "mid-market/", "enterprise/")
2. Copy ALL 4 template files from {{segment-1}}/ into that segment's folder:
   - market-segment-overview-template.md → market-segment-overview.md
   - narrative-and-positioning.md → narrative-and-positioning.md
   - messaging-pillars-template.md → messaging-pillars.md
   - buyer-personas-template.md → buyer-personas.md
3. Populate each file with segment-specific content using the product context provided above
4. Replace ALL [BRACKETED PLACEHOLDERS] with specific information for THAT segment
5. Fill in the AI-Readable Metadata sections at the top of each file with segment-specific data
6. Complete Ready-to-Use Copy Blocks in messaging pillars for that segment
7. Each file should contain information specific to ONLY that segment

Result: You should have folders like:
- smb/
  - market-segment-overview.md (SMB-specific)
  - narrative-and-positioning.md (SMB-specific)
  - messaging-pillars.md (SMB-specific - 3 pillars for SMB only)
  - buyer-personas.md (SMB-specific personas)
- mid-market/
  - market-segment-overview.md (Mid-market-specific)
  - narrative-and-positioning.md (Mid-market-specific)
  - messaging-pillars.md (Mid-market-specific - 3 pillars for mid-market only)
  - buyer-personas.md (Mid-market-specific personas)
- enterprise/
  - (same structure, enterprise-specific content)

Ensure:
- Each segment folder contains distinct positioning, personas, and messaging
- All competitive alternatives are identified (not just direct competitors)
- Primary position is clear and ownable for each segment
- Proof points and metrics are included where available
- Ready-to-use copy blocks are actionable and specific
- Each messaging-pillars.md file contains only 3 pillars for THAT segment (not multiple segments)
```

#### Step 3: Review and Refine
AI will create the structure. Then:
- Review each file for accuracy
- Validate positioning statements with sales team
- Add missing proof points or customer stories
- Refine ready-to-use copy for brand voice
- Update metadata sections with final values

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

Each segment folder contains four template files:

1. **`narrative-and-positioning.md`** - Strategic positioning and competitive alternatives
2. **`buyer-personas.md`** - Persona profiles, pain points, and decision factors
3. **`messaging-pillars.md`** - Core messaging with ready-to-use copy blocks
4. **`market-segment-overview.md`** - Market analysis and GTM strategy

**Each template includes specific instructions and research questions.** Follow the AI-assisted setup above to populate all files automatically.

---

## 🚀 How to Create a Segment

Follow the **AI-Assisted Setup** instructions above. AI will automatically:
1. Create folder structure for each segment
2. Copy and rename template files correctly
3. Populate templates with your product/market context
4. Fill in metadata sections and ready-to-use copy blocks
5. Maintain consistency across all files

**Each template includes detailed completion instructions and research questions.** Review and refine the AI-generated content as needed.

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

### For AI Tools (e.g., Ad Generators, Email Writers)

**Provide AI with these files in context:**
```
Provide these files as context:
1. [segment-name]/messaging-pillars.md
   → Use ready-to-use copy blocks from relevant pillar
   → Reference primary position and competitive alternatives

2. [segment-name]/buyer-personas.md  
   → Target specific persona's pain points and messaging
   → Use primary position message for that persona

3. [segment-name]/narrative-and-positioning.md
   → Reference positioning statement and unique differentiators
   → Use competitive positioning matrix

4. [segment-name]/market-segment-overview.md
   → Include segment-specific proof points and customer stories
```

**AI can then:**
- Generate ad copy using ready-to-use headlines and CTAs
- Create emails using persona-specific messaging
- Write social posts using pillar social copy blocks
- Develop campaign briefs using segment context
- Build sales enablement using positioning and personas

### Example: Creating SMB Email Campaign

**Manual Process:**
```
1. Open: smb/narrative-and-positioning.md
   → Get: Positioning vs. DIY/spreadsheets

2. Open: smb/buyer-personas.md
   → Target: Founder persona
   → Pain: "No time, limited budget"

3. Open: smb/messaging-pillars.md
   → Lead with: Pillar #1 "Get results in days"
   → Use ready-to-use email subject line and body copy

4. Open: smb/market-segment-overview.md
   → Proof: SMB customer stories

5. Create: Email using SMB-specific context
```

**AI-Assisted Process:**
```
Prompt AI: "Create an email campaign for SMB segment targeting Founder persona using ready-to-use copy from Pillar 1. Include proof points from market-segment-overview."

AI receives: messaging-pillars.md + buyer-personas.md + market-segment-overview.md

AI outputs: Complete email with subject, body, CTA using segment-specific messaging
```

**Result**: Email is perfectly targeted, consistent, on-brand, and ready to use.

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

- [ ] Prepare product/market context (see AI-Assisted Setup above)
- [ ] Provide AI with context and follow AI instructions
- [ ] Review AI-generated segment folders and files
- [ ] Validate positioning statements with sales team
- [ ] Refine ready-to-use copy blocks for brand voice
- [ ] Add any missing proof points or customer stories
- [ ] Use these files for ALL content targeting this segment

---

## 📊 When to Create a Segment

**DO create when**:
- ✅ You have many customers in the segment
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

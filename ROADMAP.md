# Product Marketing OS — Roadmap

Prioritized backlog of improvements. Each item is evaluated against the three design lenses: **User** (easier to use, better outputs), **System** (actually wired end-to-end), **Builder** (efficient, respects context window).

---

## Tier 1 — High Priority

### 1. `08-vertical-context/` folder + template
**What:** A new top-level folder for industry-vertical context. One subfolder per vertical (e.g., `clothing-and-apparel/`, `sporting-goods/`, `food-and-beverage/`, `home-goods/`, `beauty/`). Each vertical gets a single `vertical-overview.md` file.

**Template sections:**
- Vertical overview (market size, key players, dynamics)
- Seasonality calendar (peak periods, slow periods, major events)
- Key pain points specific to this vertical
- Vertical buyer profile (who's the champion, what title, what they care about)
- Language & terminology they use (words that resonate, jargon to avoid)
- Messaging angles that work for this vertical
- Top proof points / case studies from this vertical
- Competitive alternatives common in this vertical

**Why it matters:** Segment context (01) answers "who buys" (SMB, Enterprise). Vertical context answers "what industry are they in." For a SaaS selling to retailers, a clothing brand and a sporting goods brand have different seasonality, terminology, and pain. Without vertical context, agents generate generic content. With it, agents can speak specifically to each vertical.

**Files to create:**
- `product-knowledge-base/08-vertical-context/README.md`
- `product-knowledge-base/08-vertical-context/{{vertical-1}}/vertical-overview-template.md`

**Files to update:**
- `product-knowledge-base/06-agents/template-structures-reference.md` — add vertical context section
- `product-knowledge-base/06-agents/skills/knowledge-architect/SKILL.md` — add vertical context as a codification target
- `product-knowledge-base/06-agents/skills/content-generator/SKILL.md` — add vertical context to context loading (check if vertical matches, load if present)
- `CLAUDE.md` — add routing row: "Codify vertical context, populate a vertical folder" → Knowledge Architect

---

### 2. `00-product-context/` folder
**What:** A canonical home for what the product actually is — features, use cases, pricing, integrations, what it is NOT. Sits at `00-product-context/` so it loads before everything else conceptually.

**Template sections:**
- Product overview (one-paragraph pitch, category, stage)
- Core capabilities (organized by use case, not feature name)
- Pricing tiers (what's in each tier, relevant to which segment)
- Integration ecosystem (key integrations, organized by category)
- What we are NOT (explicit anti-positioning — critical for agents to avoid wrong claims)
- Roadmap highlights (if shareable — what's coming that PMM can reference)

**Why it matters:** The biggest gap in the system. Agents currently have no shared, canonical reference for what the product does. Without this, every piece of generated content risks inventing or omitting product capabilities. Segment context assumes product knowledge — this is where it lives.

**Files to create:**
- `product-knowledge-base/00-product-context/product-overview-template.md`

**Files to update:**
- `product-knowledge-base/06-agents/template-structures-reference.md` — add product context section
- `product-knowledge-base/06-agents/skills/content-generator/SKILL.md` — add to context loading (load product overview before generating)
- `product-knowledge-base/06-agents/skills/knowledge-architect/SKILL.md` — add as codification target

---

### 3. Update `template-structures-reference.md` for new folders
**What:** Every time a new folder is added (vertical context, product context), the reference doc must be updated. It's the agent's map of the entire knowledge base — if it's stale, agents get lost.

**Why it matters:** This file is explicitly how agents navigate the KB efficiently without reading every file. An outdated reference is worse than no reference.

**Files to update:**
- `product-knowledge-base/06-agents/template-structures-reference.md`

*(Do this as part of Items 1 and 2 above — not a standalone task.)*

---

### 4. Update CLAUDE.md routing table for vertical context
**What:** Add a row to the intent → agent routing table so requests like "codify our vertical context for clothing & apparel" route correctly to Knowledge Architect.

**Files to update:**
- `CLAUDE.md`

---

## Tier 2 — Medium Priority

### 5. `02-briefs/launch-brief-template.md`
**What:** A product launch brief template. Different from a campaign brief — a launch brief covers: announcement channels, internal enablement plan, press/analyst outreach, partner comms, go-live timeline with owners, and post-launch measurement.

**Why it matters:** Product launches are one of the most common PMM deliverables, but there's no template for them. Campaign brief and creative brief cover ongoing campaigns; they don't capture the cross-functional coordination a launch requires. Content Generator already reads `02-briefs/` — adding this file makes it instantly available.

**Files to create:**
- `product-knowledge-base/02-briefs/launch-brief-template.md`

**Files to update:**
- `product-knowledge-base/06-agents/template-structures-reference.md` — add launch brief to briefs section

---

### 6. `05-sales-enablement/objection-handling-master.md`
**What:** A cross-segment, non-competitive objection bank. Covers universal objections that aren't tied to a specific competitor: pricing ("too expensive"), timing ("not the right time"), prioritization ("we have bigger fish to fry"), procurement ("legal won't approve this"), build vs. buy ("we'll build this internally"), and executive veto.

**Why it matters:** Objection handling today only exists inside competitor folders. But most sales objections aren't about competitors — they're about budget, timing, and internal politics. Sales reps need a fast reference that isn't buried inside a battlecard.

**Template structure:** Organized by deal stage (Discovery / Evaluation / Negotiation / Close), each objection follows the Acknowledge → Reframe → Proof → Check framework already established in the system.

**Files to create:**
- `product-knowledge-base/05-sales-enablement/objection-handling-master.md`

**Files to update:**
- `product-knowledge-base/06-agents/template-structures-reference.md`
- `product-knowledge-base/06-agents/skills/knowledge-architect/SKILL.md` — add as codification target
- `product-knowledge-base/05-sales-enablement/README.md` — reference the master file

---

### 7. `03-prompts/email-sequence-generator.md`
**What:** A multi-touch outbound sequence generator. The existing `sales-email-generator.md` generates individual emails. Sequences are different: a 5-email cadence where each touch has a different angle, increasing urgency, and different CTA. Template should define: touch count, spacing, angle per touch (problem → social proof → ROI → urgency → breakup), subject line formulas, and segment-specific variations.

**Why it matters:** Outbound sequences are the most common SDR/AE request. Generating one email at a time loses the strategic arc. A sequence generator produces the whole cadence as one output.

**Files to create:**
- `product-knowledge-base/03-prompts/email-sequence-generator.md`

**Files to update:**
- `product-knowledge-base/06-agents/template-structures-reference.md`

---

## Tier 3 — Nice to Have

### 8. `04-style-guides/channel-persona-guide.md`
**What:** A reference that maps buying committee roles to channels. Example: LinkedIn targets Economic Buyers (title targeting, ROI messaging), Meta targets Champions (problem-focused, visual proof), cold email targets both, Google SEM captures high-intent Champions.

**Why it matters:** Content Generator checks buying committee coverage by content type, but has no structured guidance on which channel is most likely to reach which persona. This guide makes channel strategy explicit and prevents Economic Buyer content from running on Meta where it won't convert.

**Files to create:**
- `product-knowledge-base/04-style-guides/channel-persona-guide.md`

**Files to update:**
- `product-knowledge-base/06-agents/skills/content-generator/SKILL.md` — add reference to guide in context loading

---

### 9. Vertical-aware updates to existing `03-prompts/` generators
**What:** Update existing prompt files (Meta ads, LinkedIn ads, sales email) to optionally reference vertical context. When vertical context is present for the target customer, generators should pull vertical-specific terminology, seasonality cues, and pain points into the output.

**Why it matters:** Once Item 1 (vertical context) is populated, the generators need to know to use it. Right now they only reference segment context.

**Files to update:**
- `product-knowledge-base/03-prompts/meta-ads-generator.md`
- `product-knowledge-base/03-prompts/linkedin-ads-generator.md`
- `product-knowledge-base/03-prompts/sales-email-generator.md`
- `product-knowledge-base/03-prompts/solution-lander-generator.md`

*(Do after Item 1 is populated with real vertical data — no point updating generators before there's context to reference.)*

---

### 10. Segment Strategist agent
**What:** A new agent for strategic advisory on net-new segment identification and positioning differentiation. Partially covered today by Knowledge Architect (gap identification) and Consistency Guardian (alignment review), but the pure strategy function — "should we enter this segment, what's our angle, how do we differentiate from how we positioned in Segment X" — has no dedicated home.

**Why it matters:** As the knowledge base grows across multiple segments and verticals, the question shifts from "how do I describe this segment" to "how should I prioritize and differentiate across segments." That's a strategy question, not a codification or content question.

**Note:** Build this after Segments + Verticals are populated. The agent needs real data to be useful — it's not worth building the agent before the knowledge base has enough content to reason over.

**Files to create:**
- `product-knowledge-base/06-agents/skills/segment-strategist/SKILL.md`

**Files to update:**
- `product-knowledge-base/06-agents/AGENT-SYSTEM-DESIGN.md` — move from "Future Consideration" to active agent
- `CLAUDE.md` — add routing row
- `product-knowledge-base/06-agents/skills/pmm-orchestrator/SKILL.md` — add as available agent

---

## Sequence Recommendation

```
Week 1: Items 1 + 2 + 3 + 4  (foundation — vertical + product context)
Week 2: Items 5 + 6 + 7      (content + sales enablement expansion)
Week 3: Items 8 + 9          (polish — once base context is populated)
Later:  Item 10              (strategy layer — needs populated KB first)
```

The vertical and product context folders (Items 1–2) unlock the most downstream value because every agent benefits from them. Build those first, then expand the content templates and sales enablement, then polish the generators.

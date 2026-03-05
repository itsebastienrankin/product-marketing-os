# Proof Points — Case Studies & Data Claims

Evidence that substantiates your positioning, messaging, and content. This folder is referenced by all agents when they need customer proof, testimonials, competitive switch stories, or data-backed claims.

## Folder Structure

```
07-proof-points/
├── README.md                              ← You are here
├── case-studies/
│   ├── {{case-study-template}}.md         ← Template for new case studies
│   ├── [customer-name].md                 ← One file per case study
│   └── ...
└── data-claims/
    ├── {{data-claims-template}}.md        ← Template for data claims file
    └── data-claims.md                     ← Single consolidated claims file
```

## Case Studies

### What Goes Here

Published case studies codified into structured markdown files. Each file captures:
- Customer overview, challenge, solution, and results
- Approved quotes with attribution (ready to paste into ads, emails, landing pages)
- Key metrics and proof points (with approval scope)
- Competitive switch context (what they moved from and why)
- Messaging pillar alignment (which pillars this case study supports)
- Tags for searchability (vertical, segment, themes, use cases)

### How to Populate

**Option 1: From a case study URL**
Ask Knowledge Architect to codify it:
```
"Codify this case study into our proof points library: [URL]"
```

**Option 2: From a customer stories page**
Give Knowledge Architect the URL where all case studies are listed:
```
"Codify all the case studies from [URL] into our proof points library"
```

**Option 3: From a document or notes**
Paste or attach the case study content and ask Knowledge Architect to structure it.

### How Other Agents Use Case Studies

- **Content Generator** checks case studies for approved quotes and testimonials when generating ads, emails, landing pages, and briefs
- **Consistency Guardian** verifies that customer quotes used in content come from approved case studies
- **Advisory Board** references case study outcomes when evaluating whether content claims are grounded in real customer results

### Quick Search Guide

Find relevant case studies by searching YAML metadata:
- **By vertical:** Search for `vertical: "SaaS"` or `vertical: "Retail"`
- **By competitive switch:** Search for `switched_from: "Confluence"` or `switched_from: "Salesforce"`
- **By segment:** Search for `segment: "SMB"` or `segment: "Enterprise"`
- **By messaging pillar:** Search for `pillar: "Fast Setup"`
- **By tag:** Search for themes like `migration`, `consolidation`, `adoption`

---

## Data Claims

### What Goes Here

A single consolidated file of all externally-approved data claims, organized by theme. Each claim includes:
- Exact approved claim text (use as-is, do not paraphrase)
- Source (URL or document)
- Claim strength (verified-metric, customer-reported, internal-data, analyst-cited, directional)
- Status (active, under-review, expired, retired)
- Valid-until date (for staleness tracking)
- Approved channels (all, ads, email, sales, website)
- Owner/contact

### How to Populate

**From a document of existing claims:**
Ask Knowledge Architect to codify them:
```
"Codify these data claims into our proof points library: [paste or attach doc]"
```

**Adding individual claims:**
Add rows to the appropriate theme/subtheme table in `data-claims/data-claims.md`.

### How Other Agents Use Data Claims

- **Content Generator** checks data claims for substantiated proof points before using any quantitative claim in content
- **Consistency Guardian** verifies that any data claim in generated content exists in the data claims file and is `active`
- **Knowledge Architect** adds new claims when codifying case studies (metrics from case studies become data claims)

### Staleness Management

Claims get stale. The data claims file includes:
- `valid_until` per claim — set a review date
- `status` — mark as `expired` when outdated, `under-review` when being refreshed
- `last_reviewed` in the file metadata — tracks when the whole file was last audited

**Recommendation:** Review all claims quarterly. Set `next_review_due` in the YAML metadata.

---

## Cross-References

This folder is referenced by:
- `01-segment-context/[segment]/narrative-and-positioning.md` — Proof points and evidence section
- `01-segment-context/[segment]/messaging-pillars.md` — Copy blocks and claims
- `02-campaigns/[campaign]/campaign-brief.md` — Data claims and social proof sections
- `03-prompts/*.md` — All content generators reference proof points
- `04-style-guides/writing-principles.md` — Claim substantiation rules
- `05-sales-enablement/` — Battlecards and objection handling reference case study evidence

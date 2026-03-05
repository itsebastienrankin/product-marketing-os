# Prompts

Platform-specific content generators. Each file is a self-contained prompt that produces ready-to-use marketing content grounded in your knowledge base.

---

## File Structure

```
03-prompts/
├── ad-copy-generator.md              # General ad copy (any platform)
├── case-study-generator.md           # Structured case study from raw input
├── google-display-ads-generator.md   # Google Display Network ads
├── google-sem-ads-generator.md       # Google Search (SEM) ads
├── linkedin-ads-generator.md         # LinkedIn sponsored content
├── meta-ads-generator.md             # Meta (Facebook/Instagram) ads
├── one-pager-generator.md            # Sales one-pagers / leave-behinds
├── sales-email-generator.md          # Outbound sales emails
└── solution-lander-generator.md      # Solution landing pages
```

---

## How They Work

Each generator follows the same pattern:
1. Loads the relevant segment context from `01-segment-context/`
2. References `04-style-guides/writing-principles.md` for voice and tone
3. Pulls proof points from `07-proof-points/` for claims and testimonials
4. Applies platform-specific constraints (character limits, format rules, best practices)
5. Produces multiple variants for testing

You don't need to use these directly — the **Content Generator** agent reads them automatically when you ask for content. But you can also use them as standalone prompts in any AI tool.

---

## Quick Reference

| Content Type | Generator | Typical Ask |
|---|---|---|
| LinkedIn ads | `linkedin-ads-generator.md` | "Write 3 LinkedIn ads for our SMB segment" |
| Google Search ads | `google-sem-ads-generator.md` | "Create Google Search ads targeting our enterprise segment" |
| Meta ads | `meta-ads-generator.md` | "Generate Meta ads for our mid-market campaign" |
| Sales emails | `sales-email-generator.md` | "Write a 3-email outbound sequence for CTOs" |
| Landing page | `solution-lander-generator.md` | "Draft a solution landing page for our security use case" |
| One-pager | `one-pager-generator.md` | "Create a one-pager for our enterprise segment" |
| Case study | `case-study-generator.md` | "Turn this customer story into a structured case study" |

---

## Cross-References

- `01-segment-context/` — Positioning and messaging that generators reference
- `02-briefs/` — Campaign briefs that define what content to generate
- `04-style-guides/` — Writing principles applied to all generated content
- `07-proof-points/` — Case studies and data claims used for substantiation

# Style Guides

Brand voice and writing principles that govern all generated content. This is the quality bar — it defines what good sounds like, what to avoid, and where human judgment still matters.

---

## File Structure

```
04-style-guides/
└── writing-principles.md    # Core writing style, voice, tone, and compliance rules
```

---

## What's in writing-principles.md

- **Voice** — Your brand's 3 voice attributes (confident, precise, approachable) with do/don't examples
- **Tone Calibration** — How tone shifts across content types (ads vs. emails vs. landing pages)
- **AI-Speak Patterns to Avoid** — Specific phrases and patterns that make content sound generic
- **Claim Substantiation** — Rules for using data claims, case study quotes, and proof points
- **Style Compliance** — Formatting, capitalization, punctuation, and terminology standards

---

## How to Populate

During onboarding, the **Knowledge Architect** agent populates this file from your brand voice notes, positioning docs, and messaging context. If you don't have explicit brand guidelines, the agent infers voice and tone from whatever you share — every brand has a voice even if it's not documented.

All `[BRACKETED PLACEHOLDERS]` need to be replaced with your company-specific content before this file is production-ready.

---

## How Other Agents Use This

- **Content Generator** — References writing principles for every piece of content it creates
- **Consistency Guardian** — Scores content against the Style & Voice dimension (0-15 points) using this file
- **Knowledge Architect** — Populates this file during onboarding and updates it when new brand context is shared

---

## Cross-References

- `01-segment-context/` — Positioning that informs voice and messaging choices
- `03-prompts/` — All content generators reference these writing principles
- `07-proof-points/` — Data claims and case studies governed by claim substantiation rules

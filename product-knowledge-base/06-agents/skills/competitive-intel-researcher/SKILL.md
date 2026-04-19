---
name: competitive-intel-researcher
description: Autonomously researches competitors across live web sources, detects what has materially changed, and updates competitor files in 05-sales-enablement/. Competitors are auto-discovered from folder structure — no configuration needed. Works in manual mode (proposes changes for approval) and automated mode (applies changes directly, used by GitHub Actions).
---

# Competitive Intel Researcher Agent

Keeps competitor files in `05-sales-enablement/` current by researching live sources, detecting positioning-relevant changes, and updating files with approval (manual) or automatically (CI).

## What This Agent Does

1. **Auto-discovers competitors** — reads folder names from `05-sales-enablement/`. No config file needed.
2. **Reads existing files** for each competitor before researching — establishes baseline
3. **Researches each competitor** across multiple live web sources
4. **Detects what changed** — only what is positioning-relevant, not every news item
5. **Proposes updates** (manual mode) or **applies directly** (automated mode)
6. **Logs each run** to `competitive-intel-log.md` inside each competitor folder

---

## Detect Mode First

Before doing anything else, determine how you were invoked:

**Manual mode** — user typed `/competitive-intel` or similar:
- Present findings and proposed changes first
- Ask "Should I apply these updates?" — wait for confirmation before writing

**Automated mode** — prompt contains "automated run", "auto-approve", or "CI":
- Apply all updates directly without asking
- Write a structured summary at the end (used as the PR description)

---

## Context Management

Read existing files BEFORE researching. You need the baseline to know what changed.

Process one competitor at a time: read their files → research → detect delta → propose or apply → move to next. Never load all competitors at once.

---

## Workflow

### Step 1: Discover Competitors

List all folders in `product-knowledge-base/05-sales-enablement/`.

**Exclude:**
- Folders whose name contains `{{` and `}}` (template folders)
- Any files (e.g., `README.md`)

If `$ARGUMENTS` specifies a competitor name, only research that one. Otherwise research all.

If no real competitor folders exist yet, stop and say: *"No competitor folders found. Complete your knowledge base setup first using the Knowledge Architect or PMM Orchestrator, then run this again."*

---

### Step 2: For Each Competitor

#### 2a. Read existing files

Read all files in the competitor folder:
- `competitor-overview.md`
- `battlecard.md`
- `objection-handling.md`
- `FUD-playbook.md`
- `competitive-intel-log.md` — note the date of the last run if it exists

This is your baseline. Note what is already documented.

#### 2b. Research across sources

| Source | What to look for |
|--------|-----------------|
| Company blog / newsroom | Product launches, feature announcements, messaging changes |
| Pricing page | Price changes, new tiers, packaging changes |
| G2 reviews (last 90 days) | Customer sentiment shifts, recurring complaints, praised features |
| Capterra / TrustRadius | Cross-reference customer sentiment |
| Crunchbase | Funding rounds, acquisitions |
| Tech press | Major announcements, partnerships, layoffs |
| Reddit | Customer discussions, complaints, feature requests |
| LinkedIn job postings | Infer product direction from hiring (AI, enterprise, platform teams) |
| Exec moves | CEO, CPO, CRO exits or hires |

**Priority order** if research time is limited:
1. Pricing page — changes here directly affect deals
2. Company blog — most likely source of product news
3. G2 — customer sentiment shifts here first
4. Tech press + Crunchbase — funding and leadership

#### 2c. Extract positioning-relevant signals

Only flag signals that change how you sell against this competitor.

**Counts as positioning-relevant:**

| Signal | Why it matters |
|--------|---------------|
| Price increase or decrease | Changes your pricing comparison |
| New product feature or capability | May close a gap you are exploiting, or open a new one |
| Feature removed or deprecated | May create a new exploitable gap |
| New product tier or packaging | Changes competitive landscape |
| Funding round (Series B+) | Signals resources and feature velocity |
| Acquisition | May add capabilities you did not account for |
| Exec exit (CPO, CRO, CEO) | Signals instability — usable in deals |
| Messaging change | They may be repositioning — your battlecard may be stale |
| Customer sentiment shift (G2 score change, recurring new complaint) | New objections or new ammunition |
| Layoffs | Signals instability |
| New customer segment they are targeting | They may be entering your market |

**Does NOT count — ignore these:**
- Generic thought leadership blog posts
- Minor UI or UX updates
- Award wins or analyst rankings
- Conference appearances or webinars

#### 2d. Compare to baseline

For each signal, check: is it already documented in the existing files?
- **Yes** → skip, no update needed
- **No, and it is positioning-relevant** → flag as update candidate

#### 2e. Map signals to files

| Signal | Update these files |
|--------|-------------------|
| Pricing change | `competitor-overview.md` (pricing section) + `battlecard.md` (pricing row) |
| New feature or capability | `competitor-overview.md` (product strengths) + `battlecard.md` (head-to-head rows) |
| Removed feature | `competitor-overview.md` (product weaknesses) + `battlecard.md` |
| Exec exit or hire | `competitor-overview.md` (company profile / risk signals) |
| Funding or acquisition | `competitor-overview.md` (company profile, market position) |
| Messaging change | `FUD-playbook.md` (what they say, how to counter) + `battlecard.md` (their positioning) |
| Customer sentiment shift | `objection-handling.md` (new objections) + `battlecard.md` (weaknesses) |
| Layoffs / instability | `competitor-overview.md` (risk signals) + `FUD-playbook.md` |

---

### Step 3: Present or Apply

**Manual mode** — present this format before writing anything:

```
## [Competitor Name] — Research Findings

**Sources checked:** blog, pricing, G2, Crunchbase, tech press, Reddit
**Last researched:** [date from log, or "first run"]

### Signals Found
| Signal | Source | Positioning-relevant? |
|--------|--------|----------------------|
| Raised $50M Series C | Crunchbase | Yes |
| Launched AI summarization | Company blog | Yes |
| Won G2 Best Usability award | G2 | No — ignored |

### Proposed Updates

**competitor-overview.md — Company Profile section**
Add: "Raised $50M Series C in [Month YYYY] (Crunchbase). Signals accelerated product investment."

**battlecard.md — Head-to-Head: AI/Automation row**
Update: They now have AI summarization. Suggested counter: [your differentiation].
```

Then ask: *"Should I apply these updates? You can approve all, approve specific ones, or skip any."*

**Automated mode** — apply all updates directly and build the PR summary as you go.

---

### Step 4: Apply Updates

For each approved (or auto-approved) update:
- Open the specific file
- Locate the specific section
- Update only that section — do not touch surrounding content
- Append a datestamp note inline: `*Updated [YYYY-MM-DD] via competitive-intel-researcher — [one-line summary].*`

---

### Step 5: Log the Run

Append to `competitive-intel-log.md` in the competitor folder after each run. Create it if it does not exist.

**If creating for the first time:**
```markdown
# Competitive Intel Log — [Competitor Name]

Tracks research runs for this competitor. Each entry records what was checked, what changed, and when to check next.

- **Manual:** `/competitive-intel [competitor-name]`
- **Automated:** Runs monthly via `.github/workflows/competitive-intel.yml`

---
```

**Each run entry:**
```markdown
## [YYYY-MM-DD]
**Sources checked:** blog, pricing, G2, Crunchbase, tech press, Reddit, LinkedIn jobs, exec moves
**Signals found:** [n] total, [n] positioning-relevant
**Updates applied:** [list files updated, or "none — no material changes"]
**Next recommended check:** [1 month if active, 3 months if quiet]
```

---

### Step 6: Deliver Summary

End every run — manual or automated — with this brief:

```
## Competitive Intel Summary — [Date]

| Competitor | Signals Found | Updates Applied | Next Check |
|------------|--------------|-----------------|------------|
| [Name] | 3 relevant | 2 files updated | 1 month |
| [Name] | 0 relevant | No changes needed | 3 months |

**What changed most:** [1-2 sentence synthesis]

**Recommended actions:**
- [Specific and actionable — e.g., "Share Competitor A new pricing with sales — it changes your price comparison"]
- [e.g., "Competitor B G2 score dropped — new onboarding complaints are usable in deals"]
```

In automated mode, this summary becomes the pull request description.

---

## Writing Rules

- Update specific sections only — never rewrite entire files
- Never invent or extrapolate — only document what sources confirm
- Cite sources inline (e.g., "per G2 reviews, April 2025")
- Use exact customer language for quotes from reviews
- Flag uncertainty explicitly rather than forcing ambiguous intel into files
- Preserve existing file structure and formatting
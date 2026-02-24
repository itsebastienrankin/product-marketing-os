---
name: pmm-orchestrator
description: Coordinates the PMM OS agent team (Knowledge Architect, Content Generator, Advisory Board, Consistency Guardian) to work as a pipeline. Use when the user gives a higher-level goal (e.g., launch campaign assets, codify a segment, create/adapt content) and the work should be decomposed, handed off between agents, iterated on, and quality-scored before returning a final result.
---

# PMM Orchestrator Agent

Coordinates the PMM OS agent team so they behave like a **cohesive, self-reviewing system** instead of independent tools. This is the **single source of truth** for all pipeline definitions, handoff sequences, and quality gates.

**The Orchestrator is the only agent that knows who calls whom.** Individual agents focus on their craft — they don't decide what happens next.

---

## When to Act as Orchestrator

Activate when:
- The user gives a **goal**, not a single atomic task
  - e.g., "Launch a campaign for X", "Create ads + email + landing page for Y", "Codify this segment and generate assets"
- Multiple agents are obviously relevant
- There is value in **review + refinement** before the user sees outputs

If the request is truly single-step (e.g., "quickly tighten this sentence"), use an individual agent directly.

---

## The Agent Team

| Agent | Role | Category |
|-------|------|----------|
| **Knowledge Architect** | Codifies unstructured knowledge into PMM OS templates | Builder |
| **Content Generator** | Creates marketing content and briefs using PMM OS context | Builder |
| **Advisory Board** | Reviews from buyer persona perspectives (resonance) | Reviewer |
| **Consistency Guardian** | Reviews for PMM OS alignment (positioning, messaging, style) | Reviewer |

**Rules:**
- Builders produce. They never review their own work.
- Reviewers judge. They never create or revise content.
- The Orchestrator coordinates. It merges feedback, gates quality, and decides when to iterate.

---

## Pipeline 1: Content Creation

Use when the user wants **ads, emails, landing pages, case studies, campaign briefs, or creative briefs**.

```
Step 1  [Optional] KNOWLEDGE ARCHITECT
        ↓ Only if user provides raw/unstructured inputs
        ↓ Output: populated segment context files
        
Step 2  CONTENT GENERATOR
        ↓ Input: segment context + brief + constraints
        ↓ Output: draft assets
        
Step 3  ADVISORY BOARD + CONSISTENCY GUARDIAN  ← parallel review
        ↓ Both review the SAME draft simultaneously
        ↓ Advisory Board output: resonance scores + persona feedback
        ↓ Consistency Guardian output: alignment scores + rewrite guidance
        
Step 4  ORCHESTRATOR merges feedback
        ↓ Combines both reports into unified constraint list
        ↓ (see "Feedback Merging Algorithm" below)
        
Step 5  CONTENT GENERATOR (revision pass)
        ↓ Input: original draft + merged constraint list
        ↓ Instruction: revise, don't regenerate
        
Step 6  QUALITY GATE
        ↓ If resonance ≥ 85 AND alignment ≥ 90 → ship
        ↓ If not → loop to Step 3 (max 2 more cycles)
        ↓ If stuck below threshold → ship with explicit caveats
```

### Why Parallel Review

Advisory Board evaluates **resonance** (will buyers care?) and Consistency Guardian evaluates **alignment** (does it match PMM OS?). These are orthogonal axes — neither reviewer needs the other's output. Running them in parallel:
- Gives Content Generator the full picture in one pass
- Prevents oscillation (fixing resonance issues won't break alignment, because both constraint sets are applied together)
- Cuts review cycles in half vs. sequential

---

## Pipeline 2: Knowledge Codification

Use when the user wants to **codify a segment or competitor** from unstructured inputs.

```
Step 1  KNOWLEDGE ARCHITECT
        ↓ Input: raw docs, notes, transcripts, research
        ↓ Output: populated PMM OS templates + gap report
        
Step 2  ADVISORY BOARD + CONSISTENCY GUARDIAN  ← parallel review
        ↓ Advisory Board: reviews codified knowledge for buyer resonance
        ↓   - Are these pain points real? Is positioning how buyers think?
        ↓   - Do messaging pillars match what would actually move buyers?
        ↓ Consistency Guardian: reviews for completeness and internal consistency
        ↓   - Are all template sections populated?
        ↓   - Is terminology consistent across files?
        ↓   - Do positioning and messaging align?
        
Step 3  ORCHESTRATOR merges feedback
        ↓ Combines both reports into unified refinement list
        
Step 4  KNOWLEDGE ARCHITECT (revision pass)
        ↓ Refines templates based on merged feedback
        ↓ Asks user only for truly missing information
        
Step 5  QUALITY GATE
        ↓ If resonance ≥ 85 AND alignment ≥ 90 → done
        ↓ If not → loop to Step 2 (max 1 more cycle)
        ↓ Output: updated files + summary of key decisions and gaps
```

### Why Advisory Board Reviews Knowledge

The codified knowledge is the foundation for all downstream content. If positioning doesn't resonate with buyers, or personas describe corporate abstractions instead of real daily pain, everything built on top — briefs, ads, emails, landing pages — will miss. Advisory Board catches this at the source.

---

## Pipeline 3: Full Campaign (Codify + Create)

Use when the user provides raw inputs AND wants finished assets.

```
Step 1  Run Pipeline 2 (Knowledge Codification) to completion
        ↓ Output: quality-gated segment context
        
Step 2  Run Pipeline 1 (Content Creation) using the codified context
        ↓ Output: quality-gated marketing assets
```

---

## Feedback Merging Algorithm

After parallel review, combine Advisory Board and Consistency Guardian reports into a single, unified constraint list for the builder agent.

### Process

1. **Collect all issues** from both reviewers, tagged by source:
   - `[AB]` = Advisory Board (resonance)
   - `[CG]` = Consistency Guardian (alignment)

2. **Deduplicate** — if both reviewers flag the same element (e.g., both say "headline is too generic"), merge into one constraint with reasoning from both.

3. **Prioritize by severity:**
   - 🔴 Critical from either reviewer = must-fix
   - 🟡 Important from either reviewer = should-fix
   - 🟢 Minor = include if space allows

4. **Resolve conflicts** — if reviewers disagree (rare but possible):
   - Resonance wins for buyer-facing copy (ads, emails, landing pages)
   - Alignment wins for internal strategy docs (positioning, messaging pillars)
   - Note the conflict in the constraint list so the builder agent can make a judgment call

5. **Format as paste-ready constraints** for the builder agent:

```
## Merged Revision Constraints

### 🔴 Must Fix
1. [AB] Headline doesn't address Economic Buyer's #1 fear (implementation risk) — rewrite to lead with risk mitigation
2. [CG] Primary text exceeds 125 char limit — cut to fit
3. [AB+CG] Value prop is generic ("save time") — replace with segment-specific outcome from messaging pillar 2

### 🟡 Should Fix
4. [CG] CTA doesn't match messaging pillar recommendation — use "[approved CTA]" instead
5. [AB] Champion persona needs daily workflow proof — add concrete example

### 🟢 Minor
6. [CG] Consider using approved terminology "[term]" instead of "[current term]"
```

---

## Quality Gate Rules

### Thresholds

| Metric | Source | Ship Threshold | Iterate Threshold |
|--------|--------|---------------|-------------------|
| Resonance Score | Advisory Board | ≥ 85 | < 85 |
| Alignment Score | Consistency Guardian | ≥ 90 | < 90 |

Both thresholds must be met to ship.

### Iteration Limits

- **Content Creation:** Max 3 total review cycles (initial + 2 revisions)
- **Knowledge Codification:** Max 2 total review cycles (initial + 1 revision)

### When to Stop Below Threshold

If you reach the iteration limit and scores are still below threshold:
1. Ship the best version produced
2. Explicitly state:
   - Current scores and what's missing
   - What would be needed to reach threshold (e.g., more data, product constraints, user input)
   - Which issues remain unresolved and why
3. Let the user decide whether to iterate further or accept

---

## Orchestrator Algorithm

When the user makes a request:

1. **Classify the request**
   - Is this: codification, content creation, full campaign, or a single-step task?

2. **Select pipeline**
   - Map to Pipeline 1, 2, or 3 (or skip orchestration for single-step tasks)

3. **Plan the steps**
   - List the sequence of agents, inputs, and expected outputs
   - Tell the user the plan briefly before executing

4. **Execute with parallel review**
   - Run builder agents first
   - Run both reviewer agents on the same output simultaneously
   - Merge feedback into unified constraint list
   - Run revision pass if needed

5. **Gate quality**
   - Check scores against thresholds
   - Iterate or ship based on rules above

6. **Deliver final output**
   - Final content/templates
   - Quality scores (resonance + alignment) with brief rationale
   - Unresolved issues or trade-offs (if any)
   - Optional "next improvements" list

Always bias toward **fewer, higher-quality outputs** over many unreviewed drafts.

---

## Self-Improvement Log

The system can learn over time by maintaining an append-only operational log.

### Log File

`product-knowledge-base/06-agents/pmm-agent-lessons.md` (append-only)

For each substantial run, append a short entry:
- Date / scenario
- What went wrong or almost went wrong
- What heuristic would have prevented it
- Reusable patterns that worked particularly well

Next time you run a similar pipeline:
- Skim relevant recent entries
- Apply lessons proactively (e.g., stricter claim checks, wording patterns that outperformed)

> Do **not** auto-edit SKILL.md files. Treat `pmm-agent-lessons.md` as operational heuristics alongside stable skill definitions.

---

## Example Scenarios

### Example 1 — "Create campaign assets for SMB CFOs"

1. **Classify:** Content creation pipeline.
2. **Check context:** SMB segment context exists? Yes → proceed. No → ask user for inputs, run knowledge codification first.
3. **Content Generator:** Create draft assets (Meta ads × 3, email sequence, landing page hero).
4. **Parallel review:**
   - Advisory Board reviews from CFO (Economic Buyer) + Champion perspectives
   - Consistency Guardian checks against SMB positioning, messaging pillars, style guide
5. **Merge feedback:** Combine into unified constraint list.
6. **Content Generator:** Revise with merged constraints.
7. **Quality gate:** Both scores ≥ thresholds? Ship. Otherwise iterate.
8. **Deliver:** Final assets + scores + rationale.

### Example 2 — "Codify this segment from messy notes"

1. **Classify:** Knowledge codification pipeline.
2. **Knowledge Architect:** Populate all 4 segment context templates from raw inputs.
3. **Parallel review:**
   - Advisory Board: Are these personas real? Does positioning match how buyers think?
   - Consistency Guardian: Are templates complete? Is terminology consistent?
4. **Merge feedback:** Combine into unified refinement list.
5. **Knowledge Architect:** Refine templates, ask user for truly missing info.
6. **Quality gate:** Ship when thresholds met or iteration limit reached.

### Example 3 — "Here are my notes on a new segment — codify it and create a campaign"

1. **Classify:** Full campaign pipeline (Pipeline 3).
2. **Run Pipeline 2:** Codify the segment to completion.
3. **Run Pipeline 1:** Create campaign assets using the newly codified context.
4. **Deliver:** Codified segment files + campaign assets + quality scores.

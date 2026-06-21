# Product Route · Product Idea Routing Skill

> **A decision-routing framework that maps product ideas to the right execution mode.**
>
> Most product failures come from wrong execution mode, not bad ideas.

[中文](README.zh-CN.md) | [Main README](README.md)

---

## What This Is

Product Route answers one question:

> Given current evidence, what mode should this idea be executed in?

It does **not** tell you whether an idea is good. It tells you which execution mode fits.

| If your idea is... | Product Route tells you... |
|---|---|
| A QR code generator | Don't build a SaaS. Build an entry tool. |
| A video hosting platform | Don't build infrastructure. Wrap Mux/Vimeo. |
| A privacy policy tool | Don't build a free tool. Build a shelf service. |
| An AI Twitter summarizer | Don't build a tool. Build content + automation. |

## What This Is NOT

- ❌ An idea scoring tool ("your idea is 7.3/10")
- ❌ A business plan generator
- ❌ A startup validator
- ❌ Investment advice

## The Problem

**Traditional product thinking asks the wrong question.**

Asking "is this a good idea?" is useless because:
- Most ideas are neither good nor bad — they're unvalidated
- The same idea succeeds or fails based on execution mode
- "Good idea + wrong mode" kills more projects than "bad idea"

**Example:** A privacy policy generator.
- SaaS mode → hard to differentiate, weak willingness to pay → likely fails
- Shelf service mode → low maintenance, clear trigger (app review) → sustainable
- *Same idea, different execution mode, opposite outcomes.*

**The execution mode is the idea.** Not an afterthought — it's the core decision.

## How It Works

```
INPUT                    PROCESSING                     OUTPUT
┌──────────────┐         ┌───────────────────┐         ┌───────────────────┐
│ idea         │         │ evidence check    │         │ route (R01-R09)   │
│ constraints  │  ──▶    │ risk gate filter  │  ──▶   │ MVP boundary      │
│ context      │         │ execution routing │         │ validation action │
└──────────────┘         └───────────────────┘         └───────────────────┘
```

**Input:** idea description, known constraints, context signals (user data, competitor info, market signals)

**Processing:**
1. Evidence extraction — what do we actually know?
2. 12-dimension scoring — S01 trigger clarity through S12 stage fit
3. Confidence penalty — weak evidence → capped scores
4. Risk gate check — G01 payment through G08 infrastructure
5. Execution routing — hard rules map scores to execution mode

**Output:**
- Execution mode (one of R01–R09)
- MVP boundary (what to build, what NOT to build)
- Minimum-cost validation action (1–3 days, concrete steps)

## 9 Execution Modes

| Route | Name | 1-line Meaning | Real Example |
|---|---|---|---|
| R01 | Entry Tool | Free, low-barrier tool that acquires via distribution | QR code generator |
| R02 | Shelf Service | Standardized SaaS; users buy, it sits on the shelf | Privacy policy hosting |
| R03 | Internal Infrastructure | Build for yourself; reuse value > external demand | Internal CI/CD dashboard |
| R04 | Third-party Wrapper | Simplify a complex underlying service | Stripe payment dashboard |
| R05 | Sales-led Service | Custom integration, high-touch, per-client revenue | Enterprise SSO integration |
| R06 | Content / Community | Distribution-dependent; content is the product | AI Twitter summarizer |
| R07 | High-risk, Defer | Narrow scope; don't build infrastructure from scratch | Video hosting platform |
| R08 | Feature, Not Standalone | Belongs inside an existing product | "Export PDF" button |
| R09 | Research First | Not enough evidence; do 3 validation actions first | "Something for developers" |

---

## Full Example

### Input
> "An AI tool that summarizes Twitter content — threads, lists, bookmarks."

### What Product Route produces:

**Route: R06 — Content / Community Product**

Why not SaaS? The core value is the summary content itself. Users come for the output, not the tool. Without a content distribution loop, retention dies. The right execution mode is content-first: publish summaries, build audience, then add tooling.

Why not R01 Entry Tool? An entry tool implies the tool IS the product. Here the tool is secondary to the content it produces.

**MVP boundary:**
- Build: automated summary generation pipeline + scheduled posting
- Don't build: user accounts, paid tiers, custom AI models, dashboard

**Validation action (1 day):**
1. Manually summarize 10 viral Twitter threads
2. Post as a thread with "summarized by AI" label
3. Measure engagement vs. your normal posts

---

## Anti-Patterns

Common execution-mode mistakes that kill products:

| Anti-Pattern | Wrong Mode | Right Mode | Why |
|---|---|---|---|
| Building SaaS when it should be content | R02 | R06 | Distribution problem, not tool problem |
| Building infrastructure when it should be a feature | R07 | R08/R04 | Solo dev can't maintain video hosting |
| Overbuilding a wrapper into a platform | R04 | R02 | Wrapping Stripe ≠ building a payment platform |
| Monetizing what should be free | R02 | R01 | QR codes will never be a subscription business |
| Building without evidence | R01–R08 | R09 | "Someone probably needs this" is not evidence |

---

## Quick Start

### Usage A: Install as Skill Package (Recommended)

Install `skills/product-route.en/` as a Skill package. The agent auto-triggers on product idea evaluation, positioning, MVP boundaries, execution modes, risk classification, etc.

### Usage B: Single-File Prompt Bundle

Inject `dist/product-route.en.bundle.md` as a System Prompt or one-shot prompt.

### Usage C: Programmatic

Reference `schemas/result.schema.json` to integrate the output JSON into your decision pipeline.

---

## Language Rules

| Rule | Description |
|---|---|
| Repository bilingual | Docs and Skill packages coexist in zh-CN and en |
| Runtime monolingual | Chinese Skill loads only Chinese rules; English Skill loads only English rules |
| No mixing | Never install both zh-CN and en runtime packages in the same context |

---

## Project Structure

| Directory | Purpose |
|---|---|
| `skills/` | Runtime packages (zh-CN + en) |
| `dist/` | Single-file bundles |
| `schemas/` | JSON Schema |
| `tests/` | Regression cases |
| `extensions/` | MCP / Provider extensions (optional) |
| `src/` | Build and validation scripts |

---

## License

MIT

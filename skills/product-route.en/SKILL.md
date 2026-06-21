---
name: product-route.en
description: >
  Product Route — evidence-based product idea routing skill. Use when a user
  discusses what to do with a product idea, how to execute it, what mode fits,
  what the MVP should look like, or what the risks are. Trigger even when the
  user doesn't explicitly say "evaluate" — discussions about product direction,
  execution strategy, tech choices, indie dev feasibility, or "should I build
  this" all warrant this skill. Covers casual phrasing like "is this idea any
  good", "can I build this solo", "does this have a market", "help me think
  through this direction". Not a startup idea scorer or business plan generator —
  it's a decision framework that routes product ideas to the right execution
  mode. Routes: entry tool, shelf service, internal infrastructure, third-party
  wrapper, sales-led service, content/community product, high-risk defer,
  feature-only not standalone, research first.
runtime_language: en
compatibility: no_external_dependencies
---

# Product Route Skill · English Runtime

> runtime_language: en
>
> **Language isolation:** This runtime loads English rules only. Do NOT install `product-route.zh-CN` in the same agent context. Repository is bilingual — runtime is monolingual.

## When to Use

Use this skill when a user discusses a product idea. Key signal — the user is asking "how should I do this" rather than "is this good":

**Clear triggers:**
- Evaluating a product idea, product positioning, or product direction
- Determining execution mode (tool / SaaS / internal / content / sales-led, etc.)
- Defining MVP boundaries
- Identifying high-risk infrastructure
- Deciding standalone product vs. feature module

**Colloquial triggers (easy to miss — pay attention):**
- "Is this idea any good?" "Can I build this?" "Should I do this?"
- "Help me think through this direction" "Analyze this product for me"
- "I'm a solo dev, can I build this?"
- "Does this have a market?" "Would anyone pay for this?"
- "How does this compare to X?" "Why hasn't anyone built this?"
- "I want to build X, what do you think?"

## When NOT to Use

- Legal advice, compliance review
- Financial advice, investment decisions
- Precise market size forecasting
- Writing a business plan
- Encouraging immediate full-scale development without evidence
- Making the final decision for the user

## Required Process

Every evaluation must follow these steps in order. No step may be skipped:

1. **Restate the idea** — Confirm understanding in one sentence
2. **Build Evidence Table** — List all known evidence with type and source
3. **Build Counter Evidence** — Actively seek negative signals
4. **12-Dimension Scoring** — Read `references/scoring-rules.md`, score each dimension
5. **Confidence Penalties** — Read `references/evidence-rules.md`, apply penalties for weak evidence
6. **Risk Gate Check** — Read `references/risk-gates.md`, check G01-G08 triggers
7. **Route Decision** — Read `references/routing-rules.md`, determine main and secondary route
8. **Output Report** — Follow `references/report-template.md` format

## Required References

These files must be read during evaluation:

- `references/scoring-rules.md` — 12-dimension scoring system (S01-S12)
- `references/routing-rules.md` — 9 route types (R01-R09) with hard routing rules
- `references/evidence-rules.md` — Evidence levels (A-D) + penalties + MCP/Provider degradation
- `references/risk-gates.md` — 8 risk gates (G01-G08)
- `references/report-template.md` — 14-section fixed output template

## Hard Rules

1. **Evidence before scoring.** People almost always overestimate pain strength and willingness to pay when evaluating their own ideas. "I think someone would pay" without external validation turns a should-be-R09 idea into a false R02. Evidence-first is a guard against confirmation bias.

2. **No high scores without evidence.** Any dimension without A/B-level evidence is capped at 3; D-level (pure inspiration) is capped at 2. This prevents decision-making in an information vacuum.

3. **No total-score-only decisions.** A QR code generator and a video hosting platform might score similarly on some dimensions, but their execution modes are fundamentally different. Routing must be based on dimension combinations and hard rule matching, not summation.

4. **High-risk infrastructure must pass risk gates first.** When S09 >= 4 AND S08 >= 4, must route to R07 or R04. A solo dev building a payment system, video platform, or email infrastructure from scratch isn't "hard" — it's dangerous.

5. **One main route, at most one secondary route per evaluation.** Giving 3+ routes is the same as giving no advice.

6. **Natural language output in English.**

7. **JSON keys in English.**

8. **Do not mix with zh-CN rule files.** This session loads English rules only. Repository is bilingual — runtime is monolingual.

## Output Must Include

Every evaluation report must contain these 14 sections:

1. Idea Restatement
2. Target User
3. Trigger Scenario
4. Evidence Table
5. Counter Evidence
6. 12-Dimension Scoring Table
7. Confidence Penalties
8. Risk Gates (triggered + untriggered)
9. Route Decision (main + secondary + matched rules + why-not-others)
10. MVP Boundary (what to build + what NOT to build + dependencies + non-commitments)
11. Do Not Build (at least 5 items)
12. Minimum-Cost Validation Actions (3 specific actions, 1-3 days each)
13. External Evidence Gaps
14. JSON Result (keys in English)

---

## Example Reference

See `examples/` directory:

- `policy-page-hosting.md` — Policy page hosting (R02 Shelf Service)
- `full-video-hosting-risk.md` — Full video hosting platform (R07 High-risk Defer)
- `qr-code-generator.md` — QR code generator (R01 Entry Tool)
- `ai-twitter-summarizer.md` — AI Twitter summarizer (R06 Content/Community)

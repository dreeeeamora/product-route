---
name: product-route.en
description: >
  Product Route — an evidence-based product idea routing skill. Use when evaluating
  product ideas, product positioning, MVP boundaries, go-to-market modes, risk
  classification, or determining which product route a product idea should follow
  (entry tool, shelf service, internal infrastructure, third-party wrapper, sales-led
  service, content/community product, high-risk defer, feature-only, research-first).
  Triggers on phrases like "evaluate this product idea", "what should I build",
  "product positioning", "MVP scope", "is this a standalone product", "go-to-market
  strategy". Not a startup idea scorer or business plan generator — it's an
  evidence-based product idea routing framework.
runtime_language: en
compatibility: no_external_dependencies
---

# Product Route Skill · English Runtime

> runtime_language: en

## When to Use

Use this skill when a user presents a product idea and needs to determine:

- What mode should this product be delivered in (tool / SaaS / internal / content, etc.)
- Where to draw the MVP boundary
- Whether the idea involves high-risk infrastructure
- Whether the idea works as a standalone product or only as a feature
- What to research next when evidence is insufficient

Trigger phrases:
- "Evaluate this product idea"
- "What route should I take with this"
- "Is this a standalone product"
- "What should the MVP look like"
- "What are the risks of this idea"

## When NOT to Use

This skill is not for:

- Legal advice, compliance review
- Financial advice, investment decisions
- Precise market size forecasting
- Writing a business plan
- Encouraging immediate full-scale development without evidence
- Making the final decision for the user

## Required Process

Every evaluation must follow these steps in order. No step may be skipped:

1. **Restate the Idea** — Confirm understanding in one sentence
2. **Build Evidence Table** — List all known evidence with type and source
3. **Build Counter Evidence Table** — Actively seek negative signals
4. **12-Dimension Scoring** — Read `references/scoring-rules.md`, score each dimension
5. **Confidence Penalties** — Read `references/evidence-rules.md`, apply penalties for weak evidence
6. **Risk Gate Check** — Read `references/risk-gates.md`, check G01-G08 triggers
7. **Route Decision** — Read `references/routing-rules.md`, determine main and secondary route
8. **Output Report** — Follow `references/report-template.md` format

## Required References

These files contain the core rules and must be read during evaluation:

- `references/scoring-rules.md` — 12-dimension scoring system
- `references/routing-rules.md` — 9 route types and hard routing rules
- `references/evidence-rules.md` — Evidence levels, penalties, MCP/Provider rules
- `references/risk-gates.md` — 8 risk gates
- `references/report-template.md` — Fixed output template

## Hard Rules

These rules must never be violated:

1. **Evidence before scoring** — Never give high scores without evidence
2. **No high score without evidence** — Any dimension without A/B-level evidence is capped at 3
3. **No total-score-only decisions** — Must use dimension combinations and rule matching
4. **High-risk infrastructure must pass risk gates** — S09 >= 4 AND S08 >= 4 → R07 or R04
5. **One main route, at most one secondary route** per evaluation
6. **Natural language output in English**
7. **JSON keys in English**
8. **Do not mix with zh-CN rule files** — this session loads English rules only

## Output Must Include

Every evaluation report must contain these 14 sections:

1. Idea Restatement
2. Target User
3. Trigger Scenario
4. Evidence Table
5. Counter Evidence
6. Scores (12-dimension table)
7. Confidence Penalties
8. Risk Gates
9. Route Decision
10. MVP Boundary
11. Do Not Build (at least 5 items)
12. Validation Actions (3 specific actions)
13. External Evidence Gaps
14. JSON Result (keys in English)

---

## Example Reference

See `examples/` directory:

- `policy-page-hosting.md` — R02 Shelf Service
- `full-video-hosting-risk.md` — R07 High-risk Infrastructure, Defer
- `qr-code-generator.md` — R01 Entry Tool

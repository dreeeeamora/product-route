# Product Route Report Output Template

> The following template is a fixed output format. Every evaluation report must include all sections without omission.

---

# Product Route Report

## 1. Idea Restatement

> Restate the product idea in one sentence to confirm understanding.

**Idea:** [One-sentence description]

---

## 2. Target User

> Describe the target user persona.

---

## 3. Trigger Scenario

> Describe the specific scenario(s) in which users would think to use this product.

---

## 4. Evidence Table

| ID | Type | Source Type | Content | Confidence | Dimensions Supported |
|---|---|---|---|---|---|
| E001 | Supporting | web_research | ... | B | S01, S04 |
| E002 | Supporting | competitor_observation | ... | B | S05 |

---

## 5. Counter Evidence

| ID | Counter Evidence / Risk | Impact | Confidence |
|---|---|---|---|
| CE001 | ... | ... | ... |

---

## 6. Scores

| Dimension ID | Dimension | Score | Basis | Anchor Hit | Confidence |
|---|---|---|---|---|---|
| S01 | Trigger Clarity | | | | |
| S02 | Pain Strength | | | | |
| S03 | Usage Frequency | | | | |
| S04 | Alternative Maturity | | | | |
| S05 | Payment Evidence | | | | |
| S06 | User Clarity | | | | |
| S07 | Acquisition Clarity | | | | |
| S08 | Delivery Complexity | | | | |
| S09 | Liability Risk | | | | |
| S10 | Maintenance Cost | | | | |
| S11 | Reuse Value | | | | |
| S12 | Stage Fit | | | | |

---

## 7. Confidence Penalties

> List which dimensions had scores capped due to insufficient evidence.

| Dimension | Raw Score | Capped Score | Reason | Evidence Level |
|---|---|---|---|---|

**Overall Confidence Rating:** [A / B / C / D]

---

## 8. Risk Gates

### Triggered Risk Gates

| Gate ID | Name | Trigger Reason | Narrowing Suggestion |
|---|---|---|---|

### Untriggered Risk Gates

| Gate ID | Name | Why Not Triggered |
|---|---|---|

---

## 9. Route Decision

**Main Route:** R0X — [Route Name]

**Secondary Route:** R0X — [Route Name] (optional, at most one)

**Matched Routing Rules:**
- [List the specific hard routing rules that were matched]

**Why Not Other Routes:**
- R01: [Brief reason]
- R02: [Brief reason]
- ...
- R09: [Brief reason]

---

## 10. MVP Boundary

**What the first version ONLY does:**

1. ...
2. ...
3. ...

**What it explicitly does NOT do:**

1. ...
2. ...
3. ...

**Third-party service dependencies:**

| Service | Purpose | Alternative |
|---|---|---|

**Responsibilities NOT committed to:**

1. ...
2. ...

---

## 11. Do Not Build

> At least 5 items that should NOT be built at the current stage.

1. ❌ ...
2. ❌ ...
3. ❌ ...
4. ❌ ...
5. ❌ ...

---

## 12. Minimum-Cost Validation Actions

> 3 specific actions, each completable in 1-3 days. No generic advice like "do market research."

### Action 1: [Name]

**Goal:** [What to validate]

**Specific steps:**
1. ...
2. ...
3. ...

**Estimated time:** [X days]

---

### Action 2: [Name]

**Goal:** [What to validate]

**Specific steps:**
1. ...
2. ...
3. ...

**Estimated time:** [X days]

---

### Action 3: [Name]

**Goal:** [What to validate]

**Specific steps:**
1. ...
2. ...
3. ...

**Estimated time:** [X days]

---

## 13. External Evidence Gaps

### External Evidence Connection Status

| Source | Status | Notes |
|---|---|---|
| Case Library | not_connected | Similar case library not used |
| Competitor Research | not_connected | Automated competitor research not used |
| Keyword Research | not_connected | Keyword research not used |
| Pricing Lookup | not_connected | Pricing benchmark not used |
| Decision History | not_connected | Historical decision records not used |
| MCP Tools | not_connected | MCP tools not invoked |

### Current Gaps

- **Competitor information still needed:**
- **Search keywords still needed:**
- **User behavior evidence still needed:**
- **Similar cases still needed:**
- **Pricing benchmarks still needed:**
- **Historical review records still needed:**

### Manual Research Keywords

```
🔍 Manual Research Keywords:
- [Dimension] → search term 1, search term 2, search term 3
```

### Recommended External Tools

If MCP is connected in the future, these tools can be prioritized:

- `product_route.case_search` — Search similar cases
- `product_route.competitor_search` — Automated competitor research
- `product_route.keyword_search` — Keyword search volume query
- `product_route.pricing_lookup` — Pricing benchmark query
- `product_route.history_query` — Historical decision query

> **The core Skill runs without external services. External case libraries, competitor databases, keyword databases, and MCP tools only serve to improve evidence coverage and confidence.**

---

## 14. JSON Result

```json
{
  "schema_version": "0.1.0",
  "skill_version": "0.1.0",
  "runtime_language": "en",
  "evidence_mode": "manual_only",
  "mcp_enabled": false,
  "idea": "",
  "main_route": "",
  "main_route_label": "",
  "secondary_route": "",
  "secondary_route_label": "",
  "confidence": "",
  "scores": {
    "trigger_clarity": 0,
    "pain_strength": 0,
    "usage_frequency": 0,
    "alternative_maturity": 0,
    "payment_evidence": 0,
    "user_clarity": 0,
    "acquisition_clarity": 0,
    "delivery_complexity": 0,
    "liability_risk": 0,
    "maintenance_cost": 0,
    "reuse_value": 0,
    "stage_fit": 0
  },
  "risk_gates": [],
  "matched_rules": [],
  "blocked_by": [],
  "next_action": "",
  "do_not_build": [],
  "provider_status": {
    "case_library": "not_connected",
    "competitor_research": "not_connected",
    "keyword_research": "not_connected",
    "pricing_lookup": "not_connected",
    "decision_history": "not_connected"
  },
  "external_evidence": {
    "case_library": {
      "connected": false,
      "refs": []
    },
    "competitor_research": {
      "connected": false,
      "refs": []
    },
    "keyword_research": {
      "connected": false,
      "refs": []
    },
    "pricing_lookup": {
      "connected": false,
      "refs": []
    },
    "decision_history": {
      "connected": false,
      "refs": []
    },
    "mcp": {
      "connected": false,
      "resources": []
    }
  }
}
```

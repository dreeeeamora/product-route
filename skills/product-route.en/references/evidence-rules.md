# Evidence Rules

## Evidence Levels

| Level | Name | Definition | Examples |
|---|---|---|---|
| A | Direct Evidence | Real user behavior, real payments, user interviews, historical data, publicly verifiable data | User interview recordings, payment records, GA data, industry reports |
| B | Strong Indirect Evidence | Mature competitors, public pricing, community discussions, clear search terms, public case studies | Competitor pricing pages, Reddit/HN discussions, Google Trends, public case studies |
| C | Weak Indirect Evidence | Personal experience, reasonable inference, indirect evidence | "I've done something similar before," "it stands to reason someone would need this" |
| D | No Evidence | Only inspiration, no external evidence | "I think there might be a market," "I heard someone needs this" |

---

## Evidence Insufficiency Penalties

### Rule E01: Dimension Score Cap

If a scoring dimension lacks A-level or B-level evidence, the raw score for that dimension is capped at 3.

### Rule E02: D-level Evidence Cap

If a scoring dimension has only D-level evidence (no external evidence), the raw score for that dimension is capped at 2.

### Rule E03: Critical Dimensions Insufficient → R09

If 3 or more of the following 5 critical dimensions have evidence level D, the final route MUST be R09 (Research First):

- S01 Trigger Clarity
- S02 Pain Strength
- S05 Payment Evidence
- S06 User Clarity
- S07 Acquisition Clarity

### Rule E04: Overall Confidence Rating

Based on overall evidence quality, assign an evaluation confidence:

| Confidence | Condition |
|---|---|
| A (High) | All critical dimensions have A-level evidence, non-critical at least B-level |
| B (Medium-High) | Critical dimensions at least B-level, most non-critical B-level or above |
| C (Medium-Low) | Some critical dimensions only C-level evidence |
| D (Low) | Majority of critical dimensions C or D-level evidence |

---

## Evidence Source Types (source_type)

| source_type | Description |
|---|---|
| `manual` | Manually collected evidence |
| `web_research` | Evidence obtained through web search |
| `interview` | Evidence obtained through user interviews |
| `competitor_observation` | Evidence obtained through competitor observation |
| `case_library` | Evidence retrieved from case library |
| `mcp_tool` | Evidence obtained through MCP tools |
| `internal_history` | Evidence from internal decision history records |
| `external_provider` | Evidence obtained through external Provider |
| `unverified` | Source unverified |

---

## Evidence Table Format

Every evaluation report must use this format for the evidence table:

| ID | Type | Source Type | Content | Confidence | Dimensions Supported |

Where:
- **ID**: E001, E002, E003 ... sequential numbering
- **Type**: Supporting Evidence / Counter Evidence
- **Source Type**: One of the source_type values above
- **Content**: One-sentence description of the evidence
- **Confidence**: A / B / C / D
- **Dimensions Supported**: e.g., S01, S02, S05

---

## Counter Evidence Table Format

Counter evidence is proactively sought negative signals and must be included in the evaluation report:

| ID | Counter Evidence / Risk | Impact | Confidence |

Where:
- **ID**: CE001, CE002, CE003 ...
- **Counter Evidence / Risk**: Describe the negative signal or risk
- **Impact**: Explain which dimensions or routes are negatively affected
- **Confidence**: A / B / C / D

---

## MCP Evidence Integration Rules

### Core Principle

MCP tools are NOT a core dependency. The core Skill must function normally without MCP.

MCP tools may only provide external evidence. They may not directly determine scores, routes, or MVP boundaries.

MCP tool results must not bypass the following flow:

```
Evidence → Score → Confidence Penalty → Risk Gate → Route → MVP Boundary
```

### When MCP is NOT Connected

1. `external_evidence.mcp.connected` MUST be `false`
2. `mcp_enabled` MUST be `false`
3. Do NOT fabricate MCP return results
4. Do NOT claim to have queried case libraries, competitor databases, keyword databases, or decision history databases
5. Related evidence MUST be marked as `unverified`
6. If critical evidence is insufficient, prioritize routing to R09 Research First

### When MCP IS Connected

MCP-returned information MUST be converted into Evidence Table entries in this format:

| ID | Type | Source Type | Content | Confidence | Dimensions Supported |
|---|---|---|---|---|---|
| E0XX | Supporting | mcp_tool | ... | B | S04, S05 |

**MCP Evidence Default Confidence:**

| MCP Source | Default Confidence | Notes |
|---|---|---|
| Real user behavior history | A | Direct behavioral data |
| Internal decision history | A or B | Depends on completeness and recency |
| Case library match | B | Curated and validated cases |
| Competitor search | B | Auto-searched competitor info |
| Keyword suggestions | B or C | Depends on data source (search API = B, inference = C) |
| Trend scan | C | Trend data needs corroborating evidence |
| Unknown or unverifiable source | D | Must downgrade |

---

## Provider Evidence Integration Rules

### Core Principle

Providers are NOT a core dependency. Providers only serve to improve evidence coverage and confidence.

All Provider output MUST be converted into Evidence Table entries. They may not directly determine scores or routes.

### When Provider is NOT Connected

1. Corresponding Provider status in `provider_status` is `not_connected`
2. Do NOT fabricate Provider return data
3. Related evidence marked as `unverified`

### Provider Default Confidence

| Provider | source_type | Default Confidence |
|---|---|---|
| Case Library | case_library | B |
| Competitor Research | external_provider or competitor_observation | B |
| Keyword Research | external_provider | B or C |
| Pricing Lookup | external_provider | B |
| Decision History | internal_history | A or B |

---

## When No Internet, No MCP, No Provider

When the Skill runtime environment has no internet, MCP, or external Provider capabilities:

1. **Mark as unverified** — All unverifiable evidence uses source_type `unverified`
2. **External evidence connection status is `not_connected`** — All `connected` fields in `external_evidence` are `false`
3. **Do NOT fabricate competitors, cases, prices, keywords** — Do not use vague memories from training data as evidence
4. **Output manual research keywords** — Provide specific search keywords for each information gap
5. **Lower confidence** — Overall confidence should typically not exceed C, unless the user manually provides sufficient A/B-level evidence
6. **Do NOT recommend immediate full development** — Do not recommend "build the complete product now" before evidence is verified
7. **Prioritize R09 when critical evidence is missing** — If 3+ critical dimensions lack sufficient evidence, route to R09 Research First

### Manual Research Keywords Output Format

When offline, for each information gap output:

```
🔍 Manual Research Keywords:
- [Dimension] → search term 1, search term 2, search term 3
```

Example:
```
🔍 Manual Research Keywords:
- S05 Payment → "policy page generator pricing", "privacy policy tool subscription", "legal page SaaS pricing"
- S06 Users → "ios app store policy requirements", "who needs privacy policy hosting", "SaaS compliance checklist"
```

---

## evidence_mode and mcp_enabled Relationship

`evidence_mode` describes the evidence source mode of the current evaluation. `mcp_enabled` describes whether MCP tools are available. The two must be consistent.

| evidence_mode | mcp_enabled | Notes |
|---|---|---|
| `manual_only` | `false` | Pure manual evidence, no MCP, no Provider |
| `manual_plus_mcp` | `true` | Manual evidence + MCP tool assistance |
| `manual_plus_provider` | `false` (may be false) | Manual evidence + Provider (no MCP needed) |
| `automated_research` | `true` or `false` | Automated research, must specify tool sources |

Rules:

1. `manual_only` → `mcp_enabled` MUST be `false`
2. `manual_plus_mcp` → `mcp_enabled` MUST be `true`
3. `manual_plus_provider` → `mcp_enabled` MAY be `false`
4. `automated_research` → MUST specify the concrete tool source (MCP tool name, Provider name, or API name)
5. When `mcp_enabled = true`, the Evidence Table MUST contain at least one entry with `source_type = mcp_tool`

---

## X01 · External Evidence is Only Evidence

MCP, Provider, Case Library, Competitor Research, Keyword Research, Pricing Lookup, Decision History may only provide evidence. They may not directly determine scores, routes, MVP boundaries, or final recommendations.

All external results MUST first enter the Evidence Table, then pass through the complete flow:

```
Evidence → Score → Confidence Penalty → Risk Gate → Route → MVP Boundary
```

Violations of this rule include but are not limited to:

- "The case library shows similar products all route to R02, so this one should be R02 too" → Wrong, evidence must enter the scoring system
- "Competitor research shows a huge market, recommend building the full product immediately" → Wrong, must pass scoring and risk gates
- "Keyword search volume is high, so this product is worth doing" → Wrong, keywords are only evidence for S01/S07

The only legal uses of external evidence:

- As a row in the Evidence Table
- To improve the confidence of the corresponding scoring dimension
- Cannot skip scoring → cannot skip risk gates → cannot directly assign routes

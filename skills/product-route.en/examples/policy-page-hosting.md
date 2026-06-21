# Example Evaluation: Policy Page Hosting Tool

## Product Idea

Provide policy page (privacy policy, terms of service, cookie policy) hosting for indie developers, small SaaS, and app developers. Users fill in basic information, generate compliant pages, get a public URL, with version history and updates.

---

## Target Users

- Independent iOS / Android developers needing App Store / Google Play publishing
- Small SaaS products (1-3 person teams)
- Personal project authors with public-facing pages

---

## Trigger Scenarios

- App submission requires a public privacy policy URL for review
- SaaS launch requires terms of service page
- Third-party login (OAuth) review requires policy pages
- Product is asked by users or platforms to provide data processing documentation

---

## Evidence Table

| ID | Type | Source Type | Content | Confidence | Dimensions Supported |
|---|---|---|---|---|---|
| E001 | Supporting | competitor_observation | Multiple competitors (Termly, Iubenda, Termageddon, GetTerms) exist with paying users | B | S04, S05 |
| E002 | Supporting | web_research | App Store review requires a public privacy policy URL — a hard requirement | B | S01, S02 |
| E003 | Supporting | web_research | Many developers in forums (Reddit, Stack Overflow, V2EX) asking about policy page solutions | B | S02, S06 |
| E004 | Supporting | competitor_observation | Competitor pricing ranges $10-$100/month, indicating a paying market exists | B | S05 |
| E005 | Supporting | manual | Personal experience: every app launch requires a privacy policy page | C | S01, S03 |

---

## Counter Evidence

| ID | Counter Evidence / Risk | Impact | Confidence |
|---|---|---|---|
| CE001 | Most developers think privacy policy generators should be free | Negative impact on S05 willingness to pay | B |
| CE002 | Free alternatives (GitHub Pages + templates) exist | Reduces standalone product payment appeal | B |
| CE003 | Users use it infrequently (only during review or update) | S03 usage frequency is low | A |
| CE004 | Involves legal text, risk of being misunderstood as legal advice | S09 liability risk | B |

---

## Scores

| Dimension ID | Dimension | Score | Basis | Anchor Hit | Confidence |
|---|---|---|---|---|---|
| S01 | Trigger Clarity | 4 | App review, OAuth review, platform requirements — clear trigger events | Clear trigger events: launch, review | B |
| S02 | Pain Strength | 4 | Without a policy page, app publishing is blocked — directly impacts delivery | Impacts launch, delivery | B |
| S03 | Usage Frequency | 2 | Users only use during review/update, ~1-3 times per month | 1-3 times per month | A |
| S04 | Alternative Maturity | 4 | Termly, Iubenda and other mature competitors exist | Mature competitors exist | B |
| S05 | Payment Evidence | 3 | Competitors have paying users, but free alternatives exist | Moderate payment signals | B |
| S06 | User Clarity | 4 | App developers, small SaaS — clear user group | Specific persona with evidence | B |
| S07 | Acquisition Clarity | 3 | SEO, app store review docs, developer community recommendations | 1-2 verifiable paths | B |
| S08 | Delivery Complexity | 2 | Templates + CDN hosting + version management, 1 month solo deliverable | 1 month solo MVP | B |
| S09 | Liability Risk | 3 | Involves legal text, but can clearly label "not legal advice" | Moderate impact | B |
| S10 | Maintenance Cost | 2 | Occasional template updates, low maintenance | Occasional updates | B |
| S11 | Reuse Value | 5 | Can serve as a component of a product launch toolkit, reusable across scenarios | Natural platform properties | B |
| S12 | Stage Fit | 4 | Technically feasible, market demand exists, low development cost | Highly matched | C |

---

## Confidence Penalties

No dimensions triggered penalties. All critical dimensions (S01, S02, S05, S06, S07) have B-level evidence.

**Overall Confidence: B** (example evidence has no real traceable source URLs; max recommended is B)

---

## Risk Gates

### Triggered Risk Gates

None. S09 = 3 (< 4), S08 = 2 (< 4), does not meet high-risk gate trigger threshold.

### Untriggered Risk Gates

| Gate ID | Name | Why Not Triggered |
|---|---|---|
| G04 | Privacy / Compliance Risk | S09 = 3, moderate liability risk. Must clearly label "not legal advice" but does not trigger G04 hard gate |

---

## Route Decision

**Main Route:** R02 — Shelf Service

**Secondary Route:** R01 — Entry Tool

**Matched Routing Rules:**
- S02 >= 4 AND S03 <= 2 AND S09 <= 3 → R02 Shelf Service (Rule 2)
- S04 >= 4 AND S05 >= 3 AND S08 <= 3 → Consider R02 Shelf Service (Rule 8)

**Why Not Other Routes:**
- R01: Payment willingness is moderate (S05=3), not purely free entry → R01 as secondary
- R03: Users are clearly external, not internal tooling
- R04: Not wrapping third-party complex services
- R05: No sales involvement needed, self-serve
- R06: Core is a tool, not content/community
- R07: High-risk gates not triggered
- R08: Viable as standalone product
- R09: Critical dimension evidence is sufficient

---

## MVP Boundary

**What the first version ONLY does:**
1. Privacy policy / Terms of service / Cookie policy template filling
2. Public URL hosting (CDN)
3. Version history and update tracking

**What it explicitly does NOT do:**
1. No legal consultation or compliance guarantees
2. No automatic multi-language translation (first version: single language only)
3. No custom domain (first version)

**Third-party service dependencies:**
| Service | Purpose | Alternative |
|---|---|---|
| CDN (Cloudflare/Vercel) | Page hosting | Any static hosting |

**Responsibilities NOT committed to:**
1. No legal compliance indemnification
2. No 100% uptime SLA

---

## Do Not Build

1. ❌ Legal consulting services
2. ❌ Automated compliance checking (requires legal experts)
3. ❌ Multi-language automatic translation
4. ❌ Custom domain and brand customization
5. ❌ Enterprise private deployment
6. ❌ GDPR auto-scanning and compliance certification

---

## Minimum-Cost Validation Actions

### Action 1: Competitor Search and Pricing Validation

**Goal:** Confirm competitor pricing and user willingness to pay

**Specific steps:**
1. Search "privacy policy generator for apps pricing"
2. List pricing pages of Termly, Iubenda, GetTerms, Termageddon
3. Review each competitor's public pricing and feature comparison
4. Search "privacy policy generator reddit" for user discussions and complaints

**Estimated time:** 1 day

---

### Action 2: Developer Community Demand Validation

**Goal:** Confirm developer demand strength for policy pages

**Specific steps:**
1. Search "privacy policy" on Reddit r/iOSProgramming, r/androiddev, r/SaaS
2. Search equivalent terms on relevant developer forums
3. Document the pain expressed and shortcomings of current solutions
4. Post a question: "How do you handle the privacy policy URL required by App Store review?"

**Estimated time:** 1 day

---

### Action 3: Free Landing Page Validation

**Goal:** Test traffic with minimum cost

**Specific steps:**
1. Build a free privacy policy generator page using GitHub Pages
2. Only do the simplest form + generate + public URL
3. Share the link in relevant communities
4. Observe whether organic traffic and usage occur

**Estimated time:** 2 days

---

## External Evidence Gaps

- Missing competitor user count and revenue scale data
- Missing search volume data for "privacy policy generator"
- Missing direct evidence of target users' (indie developers') willingness to pay

> The core Skill runs without external services. External case libraries only serve to improve evidence coverage and confidence.

---

## JSON Result

```json
{
  "schema_version": "0.1.0",
  "skill_version": "0.1.0",
  "runtime_language": "en",
  "evidence_mode": "manual_only",
  "mcp_enabled": false,
  "idea": "Provide policy page (privacy policy, terms of service) hosting for indie developers and small SaaS",
  "main_route": "R02",
  "main_route_label": "Shelf Service",
  "secondary_route": "R01",
  "secondary_route_label": "Entry Tool",
  "confidence": "B",
  "scores": {
    "trigger_clarity": 4,
    "pain_strength": 4,
    "usage_frequency": 2,
    "alternative_maturity": 4,
    "payment_evidence": 3,
    "user_clarity": 4,
    "acquisition_clarity": 3,
    "delivery_complexity": 2,
    "liability_risk": 3,
    "maintenance_cost": 2,
    "reuse_value": 5,
    "stage_fit": 4
  },
  "risk_gates": [],
  "matched_rules": [
    "S02>=4 AND S03<=2 AND S09<=3 → R02",
    "S04>=4 AND S05>=3 AND S08<=3 → R02"
  ],
  "blocked_by": [],
  "next_action": "Competitor search + community demand validation + free landing page test",
  "do_not_build": [
    "Legal consulting services",
    "Automated compliance checking",
    "Multi-language automatic translation",
    "Custom domain and brand customization",
    "Enterprise private deployment"
  ],
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

# Example Evaluation: QR Code Generator

## Product Idea

Build a QR code generator where users can input text, URLs, contact information to generate customizable QR code images. Supports colors, logo embedding, different export formats (PNG, SVG, PDF).

---

## Target Users

- Marketers (generating event link QR codes)
- Small businesses (generating WiFi QR codes, menu QR codes)
- General users (sharing links, business cards)

---

## Trigger Scenarios

- Need to turn a URL into a QR code for posters/flyers
- Need to generate a WiFi login QR code for guests
- Need to encode business card info into a QR code
- QR code for event check-in

---

## Evidence Table

| ID | Type | Source Type | Content | Confidence | Dimensions Supported |
|---|---|---|---|---|---|
| E001 | Supporting | competitor_observation | Many free QR code generators exist with extremely high traffic (QR Code Monkey, QR Code Generator, etc.) | A | S04, S07 |
| E002 | Supporting | web_research | "qr code generator" is a high-search-volume keyword | B | S01, S07 |
| E003 | Supporting | competitor_observation | Free competitors are feature-complete, but most have ads or watermarks | A | S04 |
| E004 | Counter | competitor_observation | Most QR code generators are free; paid versions are hard to differentiate | A | S05 |
| E005 | Counter | web_research | Browsers natively support QR codes (Chrome share), OS built-in (iOS Camera) | B | S02, S04 |

---

## Counter Evidence

| ID | Counter Evidence / Risk | Impact | Confidence |
|---|---|---|---|
| CE001 | Users almost never willing to pay for QR code generation | S05 payment willingness extremely low | A |
| CE002 | Browser and OS built-in features are eating into standalone QR tool space | S02 pain strength declining | B |
| CE003 | Market competition is extremely fierce; SEO is very difficult | S07 acquisition path challenging | A |
| CE004 | As a single-function product, user retention is extremely low | S03 usage frequency low | A |

---

## Scores

| Dimension ID | Dimension | Score | Basis | Anchor Hit | Confidence |
|---|---|---|---|---|---|
| S01 | Trigger Clarity | 4 | Posters, WiFi, business cards — clear trigger events | Clear trigger events: share, download, print, event | A |
| S02 | Pain Strength | 2 | Free solutions are sufficient; independent tool not necessarily needed | Saves a little time | A |
| S03 | Usage Frequency | 2 | Occasional use, not daily high-frequency | 1-3 times per month | A |
| S04 | Alternative Maturity | 5 | Extremely many free competitors, browser and OS built-in | Multiple mature competitors | A |
| S05 | Payment Evidence | 1 | Almost no users willing to pay for QR code generation | No payment signals | A |
| S06 | User Clarity | 4 | Marketers, businesses, general users — group is clear | Specific persona | A |
| S07 | Acquisition Clarity | 4 | SEO search volume is high, but competition is intense | 3+ paths | A |
| S08 | Delivery Complexity | 1 | 1-2 weeks solo deliverable | 1-2 week MVP | A |
| S09 | Liability Risk | 1 | Essentially no risk | Essentially no risk | A |
| S10 | Maintenance Cost | 1 | Essentially no maintenance needed | Extremely simple | A |
| S11 | Reuse Value | 4 | Can serve as an entry component of a product toolbox | Reusable across scenarios | B |
| S12 | Stage Fit | 4 | Technically simple, quick to deliver | Highly matched | A |

---

## Confidence Penalties

Critical dimensions (S01, S02, S05, S06, S07) all have A-level evidence. No penalties triggered.

**Overall Confidence: B** (example evidence has no real traceable source URLs; max recommended is B)

---

## Risk Gates

### Triggered Risk Gates

None. S09 = 1, S08 = 1, far below trigger threshold.

### Untriggered Risk Gates

All G01-G08 untriggered — a QR code generator does not involve payments, auth, email, privacy, video, notifications, support, or infrastructure high-risk areas.

---

## Route Decision

**Main Route:** R01 — Entry Tool

**Secondary Route:** None

**Matched Routing Rules:**
- S05 <= 2 AND S07 >= 4 → R01 Entry Tool (Rule 7)

**Why Not Other Routes:**
- R02: Payment willingness too weak (S05=1); not suitable as paid SaaS
- R03: Users are clearly external, not internal tooling
- R04: No third-party services to wrap
- R05: No sales involvement needed
- R06: Core is a tool, not content
- R07: No high risk
- R08: While a single function, QR code generator has independent use scenarios — but could also be part of a toolbox
- R09: Evidence is sufficient; no need for more research

---

## MVP Boundary

**What the first version ONLY does:**
1. Text/URL/contact QR code generation
2. PNG and SVG export
3. Basic color customization
4. Responsive page, mobile-friendly

**What it explicitly does NOT do:**
1. No user registration or payment system
2. No batch generation
3. No analytics tracking
4. No API service

**Third-party service dependencies:**
| Service | Purpose | Alternative |
|---|---|---|
| Static hosting (Vercel/Cloudflare) | Page hosting | GitHub Pages |

**Responsibilities NOT committed to:**
1. No permanent storage guarantees
2. No high-availability SLA

---

## Do Not Build

1. ❌ User registration and login
2. ❌ Paid subscription
3. ❌ QR code scan analytics
4. ❌ Batch generation
5. ❌ API service
6. ❌ Team collaboration features

---

## Minimum-Cost Validation Actions

### Action 1: Build Free Landing Page

**Goal:** Validate QR code generator search traffic and usage

**Specific steps:**
1. Build a simple QR code generation web page in 2 days
2. Deploy to Vercel or Cloudflare Pages
3. Submit to Google Search Console
4. Observe organic search traffic
5. Add a "What other tools do you need?" feedback link at the bottom

**Estimated time:** 2 days

---

### Action 2: Search Keyword Research

**Goal:** Understand QR code related search demand and competition

**Specific steps:**
1. Use Google Keyword Planner or Ahrefs free tier to search "qr code generator"
2. Search long-tail keywords: "wifi qr code generator", "qr code with logo", "qr code svg"
3. Search equivalent terms in relevant languages
4. Record search volume and competition level

**Estimated time:** 1 day

---

### Action 3: Competitor Analysis

**Goal:** Understand competitor models and differentiation opportunities

**Specific steps:**
1. Use the top 5 search result QR code generators
2. Document each one's features, limitations, paid features, ad strategy
3. Check competitors' traffic sources (Similarweb free tier)
4. Determine whether differentiation space exists (e.g., better UX, watermark-free, open source)

**Estimated time:** 1 day

---

## External Evidence Gaps

- Missing precise search volume and CPC for "qr code generator"
- Missing competitor traffic and revenue data
- Missing direct evidence of user demand for "better QR code tools"

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
  "idea": "Build a QR code generator for users to input text, URLs, and generate customizable QR code images",
  "main_route": "R01",
  "main_route_label": "Entry Tool",
  "secondary_route": null,
  "secondary_route_label": null,
  "confidence": "B",
  "scores": {
    "trigger_clarity": 4,
    "pain_strength": 2,
    "usage_frequency": 2,
    "alternative_maturity": 5,
    "payment_evidence": 1,
    "user_clarity": 4,
    "acquisition_clarity": 4,
    "delivery_complexity": 1,
    "liability_risk": 1,
    "maintenance_cost": 1,
    "reuse_value": 4,
    "stage_fit": 4
  },
  "risk_gates": [],
  "matched_rules": [
    "S05<=2 AND S07>=4 → R01"
  ],
  "blocked_by": [],
  "next_action": "Build free landing page + search keyword research + competitor analysis",
  "do_not_build": [
    "User registration and login system",
    "Paid subscription system",
    "QR code scan analytics",
    "Batch generation",
    "API service",
    "Team collaboration features"
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

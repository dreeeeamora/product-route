# Example Evaluation: Full Video Hosting Platform

## Product Idea

Build a complete video hosting platform where creators can upload videos, auto-transcode, play, and embed/share — similar to YouTube or Vimeo. Targeting independent creators and small education content teams.

---

## Target Users

- Independent content creators
- Small online education teams
- SaaS products needing video embedding

---

## Trigger Scenarios

- Creators need a place to host videos and embed them on their own website
- Course platforms need video playback and management
- Don't want to depend on YouTube's branding and ads

---

## Evidence Table

| ID | Type | Source Type | Content | Confidence | Dimensions Supported |
|---|---|---|---|---|---|
| E001 | Supporting | competitor_observation | Vimeo, Wistia, Mux and other mature competitors have large numbers of paying users | A | S04, S05 |
| E002 | Supporting | web_research | Creator communities (Reddit r/VideoEditing, r/NewTubers) discuss video hosting alternatives | B | S02, S06 |
| E003 | Counter | competitor_observation | Video hosting competitors have extremely high infrastructure costs — Vimeo has hundreds of employees, Mux raised over $100M | A | S08, S10 |
| E004 | Counter | web_research | Video storage and bandwidth costs grow linearly with usage; must consider CDN, transcoding, storage layers | A | S08, S10 |
| E005 | Counter | web_research | Video platforms need content moderation systems (CSAM, copyright, DMCA) | B | S09, S10 |
| E006 | Counter | manual | Solo developers/small teams lack resources to handle video transcoding infrastructure, CDN configuration, and content moderation | C | S08 |

---

## Counter Evidence

| ID | Counter Evidence / Risk | Impact | Confidence |
|---|---|---|---|
| CE001 | Storage and bandwidth costs can spiral — free users consume massive resources | S08, S10 scores high | A |
| CE002 | Content moderation is a legal obligation; no moderation = legal risk, moderation = labor cost | S09 liability risk high | A |
| CE003 | Video transcoding requires GPU or professional transcoding services; high cost and technical barrier | S08 delivery complexity high | A |
| CE004 | Mux API already provides near-perfect video infrastructure | S04 mature alternatives; independent platform advantage limited | A |
| CE005 | Copyright complaints and DMCA processing are an operational burden | S10 maintenance cost | B |

---

## Scores

| Dimension ID | Dimension | Score | Basis | Anchor Hit | Confidence |
|---|---|---|---|---|---|
| S01 | Trigger Clarity | 4 | Creators need hosting, transcoding, embedding — scenario is clear | Clear trigger events: upload, share, embed | B |
| S02 | Pain Strength | 4 | Creators not using YouTube genuinely need alternatives | Impacts delivery | B |
| S03 | Usage Frequency | 3 | Creators upload regularly, but not daily | 1-3 times per week | B |
| S04 | Alternative Maturity | 5 | Vimeo, Wistia, Mux, Bunny.net etc. are very mature | Multiple mature competitors | A |
| S05 | Payment Evidence | 4 | Vimeo and other competitors prove a paying market exists | Clear payment signals | A |
| S06 | User Clarity | 4 | Independent creators, education teams — group is clear | Specific persona | B |
| S07 | Acquisition Clarity | 3 | Creator communities, search engines, course platform integrations | 1-2 paths | B |
| S08 | Delivery Complexity | 5 | Needs transcoding, storage, CDN, player, moderation system | 6+ months + specialized team | A |
| S09 | Liability Risk | 5 | Copyright, content moderation, data security | Catastrophic impact | A |
| S10 | Maintenance Cost | 5 | 24/7 monitoring, content moderation, cost management | Team maintenance + SLA | A |
| S11 | Reuse Value | 3 | Some components reusable (e.g., player) | Partial reusable | B |
| S12 | Stage Fit | 1 | Solo developer/small team resources completely insufficient for full video hosting | Completely mismatched | A |

---

## Confidence Penalties

No dimension triggered upper-limit penalties — S08, S09, S10 high scores are themselves danger signals, not capped.

**Overall Confidence: B** (example evidence has no real traceable source URLs; max recommended is B)

---

## Risk Gates

### Triggered Risk Gates

| Gate ID | Name | Trigger Reason | Narrowing Suggestion |
|---|---|---|---|
| G05 | Video / Storage / Bandwidth | Involves video hosting, transcoding, high bandwidth | Use Mux/Vimeo/Wistia API for management dashboard; do not build underlying hosting |
| G08 | Deployment / Infrastructure SLA | Requires high availability and CDN delivery | Use mature CDN and cloud platforms; do not manage infrastructure yourself |
| G04 | Privacy / Compliance | Involves user-uploaded content, may contain personal information | Clear content moderation policy; use compliant third-party storage |

### Untriggered Risk Gates

| Gate ID | Name | Why Not Triggered |
|---|---|---|
| G01 | Payment / Money Risk | Not involving payment processing |
| G02 | Auth / Identity | User auth can use mature solutions |
| G03 | Email Deliverability | Not core email sending |
| G06 | Core Notification | Not core notification dependency |
| G07 | Customer Support Reliability | Not a support system |

---

## Route Decision

**Main Route:** R07 — High-risk Infrastructure, Defer

**Secondary Route:** R04 — Third-party Wrapper / Integration Layer

**Matched Routing Rules:**
- S09 >= 4 AND S08 >= 4 → R07 High-risk Infrastructure, Defer (Rule 1)

**Why Not Other Routes:**
- R01: Delivery too complex, cannot be a lightweight entry tool
- R02: Liability and delivery risk too high for self-serve SaaS
- R04: If narrowed to Mux/Vimeo management dashboard, could be R04 → secondary route
- R05: Could be sales-led service, but doesn't solve core risks
- R08: Video hosting has standalone value, not "feature only"

---

## MVP Boundary

**If narrowed to R04 approach, what the first version ONLY does:**
1. Vimeo / Mux / Wistia embed management dashboard
2. Video course catalog and playlists
3. Embed code generator

**What it explicitly does NOT do:**
1. No video upload and transcoding
2. No CDN delivery management
3. No content moderation system

**Third-party service dependencies:**
| Service | Purpose | Alternative |
|---|---|---|
| Mux / Vimeo / Wistia | Video hosting and transcoding | Bunny.net Stream |
| Cloudflare | CDN | Fastly |

**Responsibilities NOT committed to:**
1. No video hosting SLA (third party's responsibility)
2. No content compliance (users manage their own uploaded content)

---

## Do Not Build

1. ❌ Video upload and transcoding system
2. ❌ CDN delivery infrastructure
3. ❌ Content moderation AI system
4. ❌ Live streaming
5. ❌ Ad serving system
6. ❌ Video analytics (provided by Mux and other underlying services)
7. ❌ Creator monetization and payments

---

## Minimum-Cost Validation Actions

### Action 1: Mux API Integration Test

**Goal:** Validate feasibility and cost of wrapping Mux API

**Specific steps:**
1. Sign up for Mux account, read API documentation
2. Upload 3 test videos using Mux API
3. Document API call flow, limitations, pricing
4. Evaluate wrapper layer development effort

**Estimated time:** 1 day

---

### Action 2: Competitor Research and Management Dashboard Demand Interview

**Goal:** Confirm whether "video management dashboard" has independent demand

**Specific steps:**
1. Search "video management dashboard for creators" "video course hosting"
2. Analyze video management features of Uscreen, Teachable, Kajabi, etc.
3. Post in creator communities: "Do you need a better video management dashboard, or is Vimeo/Wistia enough?"
4. Interview 3 content creators: How do you manage your videos now?

**Estimated time:** 2 days

---

### Action 3: No-Code Prototype Validation

**Goal:** Validate demand for video management dashboard with minimum cost

**Specific steps:**
1. Build a video management template in Notion / Airtable (embed Vimeo/Mux video links)
2. Include: video list, status, embed code, play statistics
3. Share with 3-5 potential users for trial
4. Observe their usage feedback

**Estimated time:** 1 day

---

## External Evidence Gaps

- Missing Mux API detailed pricing and cost simulation
- Missing content creators' specific video management pain points
- Missing search volume for video management dashboard related keywords

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
  "idea": "Build a complete video hosting platform for creators to upload, transcode, play, and embed/share videos",
  "main_route": "R07",
  "main_route_label": "High-risk Infrastructure, Defer",
  "secondary_route": "R04",
  "secondary_route_label": "Third-party Wrapper / Integration Layer",
  "confidence": "B",
  "scores": {
    "trigger_clarity": 4,
    "pain_strength": 4,
    "usage_frequency": 3,
    "alternative_maturity": 5,
    "payment_evidence": 4,
    "user_clarity": 4,
    "acquisition_clarity": 3,
    "delivery_complexity": 5,
    "liability_risk": 5,
    "maintenance_cost": 5,
    "reuse_value": 3,
    "stage_fit": 1
  },
  "risk_gates": ["G05", "G08", "G04"],
  "matched_rules": [
    "S09>=4 AND S08>=4 → R07"
  ],
  "blocked_by": [
    "Storage and bandwidth costs uncontrollable",
    "Content moderation system required",
    "Video transcoding infrastructure required"
  ],
  "next_action": "Narrow to Mux/Vimeo wrapper management dashboard; start with Mux API integration test",
  "do_not_build": [
    "Video upload and transcoding system",
    "CDN delivery infrastructure",
    "Content moderation AI system",
    "Live streaming",
    "Ad serving system",
    "Creator monetization and payments",
    "Video analytics engine"
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

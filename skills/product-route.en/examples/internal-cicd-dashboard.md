# Product Route Report

## 1. Product Idea Restated

> Restate the product idea in one sentence to confirm understanding.

**Idea:** Build an internal CI/CD unified dashboard for a small team of 3-5 people, aggregating GitHub Actions run status, Vercel/Railway deployment logs, and environment variable management in a single interface. Not for external sale.

---

## 2. Target Users

- 3-5 full-stack developers within the team, using GitHub Actions for CI, Vercel and Railway for deployment daily
- Tech stack spans frontend (Vercel) and backend/services (Railway), requiring switching between multiple platforms to check deployment status
- Capable of independently developing and maintaining internal tools; no need for external user management, multi-tenancy, or billing

---

## 3. Trigger Scenarios

- After pushing code to GitHub, want to see in one panel whether Actions passed and whether Vercel/Railway deployed successfully, rather than opening 3 separate tabs
- When a deployment fails or alerts, quickly identify whether the error is in the CI stage (GitHub Actions) or the deployment stage (Vercel/Railway)
- When needing to modify environment variables (e.g., API Key, database connection string), avoid logging into Vercel and Railway backends separately
- Before a release, check the deployment status and environment variable configuration consistency across all services

---

## 4. Evidence Table

| ID | Type | Source Type | Content | Confidence | Supported Scoring Dimensions |
|---|---|---|---|---|---|
| E001 | Positive Evidence | web_research | GitHub Actions, Vercel, and Railway all provide public REST APIs for fetching run status, deployment logs, and environment variables | B | S08 |
| E002 | Positive Evidence | web_research | Existing commercial CI/CD aggregation products (Sleuth, Codefresh, Buildkite Dashboard) validate market demand for unified dashboards | B | S01, S04 |
| E003 | Positive Evidence | web_research | Developer communities (Reddit r/devops, Hacker News, V2EX) have recurring discussions about "how to see all deployment status in one place" | B | S02, S06 |
| E004 | Positive Evidence | web_research | Commercial CI/CD aggregation tools are priced at $15-$50/month per seat, indicating a paying market exists (though this project does not plan to charge) | B | S05 |
| E005 | Positive Evidence | manual | Team's current deployment workflow: after pushing code, open GitHub / Vercel / Railway in 3 separate tabs to check status, taking 3-5 minutes each time | C | S02, S03 |
| E006 | Positive Evidence | web_research | Multiple small-team tech blogs (Dev.to, Medium) document practices for building internal deployment dashboards; architectural patterns are referenceable | B | S06, S11 |
| E007 | Positive Evidence | manual | The API aggregation + dashboard display architecture can be reused for monitoring aggregation, log aggregation, status pages, and various other internal tool scenarios | C | S11 |
| E008 | Positive Evidence | web_research | GitHub API v3/v4, Vercel REST API, and Railway GraphQL API all have stable versions and documentation; learning cost is manageable | B | S08, S10 |
| E009 | Positive Evidence | manual | All 3-5 team members have Node.js/TypeScript + React tech stack, matching the technical requirements of the API aggregation dashboard | C | S12 |

---

## 5. Counter-Evidence Table

| ID | Counter-Evidence / Risk | Impact | Confidence |
|---|---|---|---|
| CE001 | Team is only 3-5 people; the time cost of manually switching 3 tabs to check deployment status is limited (3-5 minutes each time). Developing the unified dashboard requires 1-2 months; ROI needs evaluation | Weakens S02 pain point strength | B |
| CE002 | GitHub Actions' own UI already includes run logs, status badges, and notifications; Vercel and Railway also have their own deployment dashboards and Slack notifications | Reduces the marginal incremental value of a unified dashboard | B |
| CE003 | Each platform's API iterates independently (e.g., GitHub Actions API breaking changes, Vercel API v2 migration); the dashboard needs ongoing API change tracking | Increases S10 maintenance cost | B |
| CE004 | No external sales means development and maintenance costs are entirely borne internally by the team, with no external revenue to offset them | Affects S12 stage fit assessment | C |
| CE005 | Open-source alternatives exist such as Concourse CI monitoring dashboard and Drone CI Dashboard, though they do not directly aggregate Vercel/Railway | Weakens S04 alternative scarcity | C |

---

## 6. Scoring Table

| Dimension ID | Dimension | Score | Basis | Anchor Hit | Confidence |
|---|---|---|---|---|---|
| S01 | Trigger Scenario Clarity | 4 | Code push, deployment start, environment variable change, pre-release check — all are clear trigger events | Clear trigger events, such as code push, deployment start, environment variable change, pre-release check | B |
| S02 | Pain Point Strength | 3 | Each deployment requires manually switching between 3 platforms to check status, causing noticeable inconvenience, but does not affect core deployment functionality itself | Causes noticeable trouble if not used; users would actively seek alternatives | B |
| S03 | Usage Frequency | 3 | Small team deploys 3-5 times per week (following agile iteration cadence); the dashboard is checked on every deployment | 1-3 times per week | B |
| S04 | Alternative Maturity | 2 | Currently solved by manually switching between GitHub/Vercel/Railway tabs; no direct competitor aggregates this specific combination of three platforms | Users solve it with fragmented manual methods | B |
| S05 | Payment Willingness Evidence | 1 | Team explicitly plans internal use only, no external sales; although a commercial aggregation market exists, this project does not consider a payment model | No payment signal at all; users generally believe this should be free | B |
| S06 | User Group Clarity | 4 | Users are 3-5 developers within the team, with clear tech stack (GitHub Actions + Vercel + Railway); similar team needs are documented in communities | Can describe a specific persona with evidence support | B |
| S07 | Acquisition Path Clarity | 1 | No external acquisition plan; team explicitly will not do external sales or promotion | Completely unknown where users would come from | B |
| S08 | Delivery Complexity | 3 | Integrating GitHub REST API + Vercel REST API + Railway GraphQL API + frontend dashboard; estimated 1-2 months for a single person to deliver MVP | 1-3 months, requires 1-2 people | B |
| S09 | Liability Risk | 2 | Primarily a read-only dashboard; environment variable writes can add a confirmation step; internal use means issues do not affect external customers | Minor impact (e.g., experience degradation, temporary unavailability) | B |
| S10 | Maintenance Cost | 3 | Occasional API version upgrades across platforms (e.g., Vercel API v2); requires periodic changelog monitoring and adaptation, but maintenance volume is manageable | Requires ongoing attention, with periodic maintenance needs | B |
| S11 | Reuse Value | 4 | The API aggregation + unified dashboard architecture can be reused for monitoring aggregation, log aggregation, status pages, multi-platform configuration management, and various other internal scenarios | Largely reusable across multiple scenarios, or can serve as a platform foundation | B |
| S12 | Current Stage Fit | 3 | Team has technical capability and a real need exists, but the 1-2 month development investment must be weighed against current business priorities | Basically aligns, but requires scope adjustment or learning new skills | C |

---

## 7. Confidence Penalty

> List which dimensions had their scores capped due to insufficient evidence.

| Dimension | Original Score | Capped Score | Reason | Evidence Level |
|---|---|---|---|---|
| S12 | 4 | 3 | Rule E01: S12 has only C-level evidence (personal assessment, no external validation); original score capped at 3 | C |

**Overall Confidence Rating:** B

> Explanation: All 5 key dimensions (S01, S02, S05, S06, S07) have B-level evidence support; 10 of 12 scoring dimensions have B-level evidence, 1 is C-level (S12), 1 is C-level but does not trigger penalty (S03 original score within C-level cap). Overall evidence quality meets B-level standard.

---

## 8. Risk Gates

### Triggered Risk Gates

None triggered. S09 = 2 (< 4), S08 = 3 (< 4), do not meet the high-risk infrastructure gate trigger condition (S09 >= 4 AND S08 >= 4).

### Untriggered Risk Gates

| Gate ID | Name | Why Not Triggered |
|---|---|---|
| G01 | Payment & Fund Risk | Product does not involve any payment processing, fund calculation, or account balance management |
| G02 | Authentication Risk | Internal tool; no user registration, login, or multi-tenant permission isolation needed; optionally integrate existing team GitHub OAuth for identity verification, but no need to build an auth system from scratch |
| G03 | Email Deliverability Risk | Product does not involve sending transactional or marketing emails |
| G04 | Privacy & Compliance Risk | S09 = 2; read-only dashboard for internal network use only; does not collect external user data or transmit data across regions |
| G05 | Video, Storage, Bandwidth Risk | Does not involve video hosting, large file storage, or high-bandwidth content delivery |
| G06 | Core Notification Risk | Does not depend on real-time Push/WebSocket as a core feature (optional polling refresh, but not core) |
| G07 | Customer Support Reliability Risk | Does not involve customer support systems, ticketing systems, or live chat |
| G08 | Deployment & Infrastructure SLA Risk | Internal tool; no need to commit to high-availability SLA, multi-region deployment, or auto-scaling |

---

## 9. Route Determination

**Main Route:** R03 — Internal Infrastructure

**Secondary Route:** None

**Matched Route Rules:**
- Hard Rule 4: S11 >= 4 (Reuse Value = 4) AND S07 <= 2 (Acquisition Path = 1) → R03 Internal Infrastructure

**Why Not Other Routes:**
- R01 (Entry Tool): S07 = 1 (far below R01 requirement of S07 >= 3); team has no external acquisition plan; S05 = 1, and the product is positioned for internal use rather than an external free entry point; R01 targets external user traffic acquisition, fundamentally conflicting with this product's internal positioning
- R02 (Shelf Service): S05 = 1 (no payment willingness), far below R02 requirement of S05 >= 3; product does not target external paying users, does not do standardized self-service purchasing; although low-frequency strong pain point is a possibility, Hard Rule 4 points more fittingly to R03
- R04 (Third-Party Wrapper): Core value is API aggregation and unified dashboard, not wrapping a complex underlying service to lower the usage barrier; GitHub/Vercel/Railway APIs themselves are not complex or difficult to use; aggregation value exceeds wrapping value
- R05 (Sales-Led Service): Completely no need for sales involvement, custom onboarding, or contract negotiation; no external paying customers; product is internal use only
- R06 (Content or Community Product): Core value is tool/dashboard functionality, not content, knowledge, or community relationships; no content creation or community operation plans
- R07 (High-Risk Infrastructure, Hold): S09 = 2 (< 4), S08 = 3 (< 4), do not trigger R07 gate; product is an API aggregation read-only dashboard, not building a CI/CD platform from scratch
- R08 (Better as a Feature): The cross-platform aggregation value (GitHub + Vercel + Railway combined) is sufficient to support an independent product form; as a feature module within any single platform, it cannot solve the core pain point of cross-platform aggregation
- R09 (Insufficient Information, Research First): All 5 key dimensions have B-level evidence; R09 trigger condition of 3 D-level evidence items is not met; S06 = 4 (> 2), S01 = 4 (> 2); both users and scenarios are clear

---

## 10. MVP Boundary

**What the first version does only:**

1. GitHub Actions run status read-only dashboard (latest 20 workflow runs, including status, duration, branch info)
2. Vercel + Railway latest deployment status read-only dashboard (deployment status, timestamp, commit hash)
3. Centralized environment variable viewing (read-only list of Vercel + Railway env vars, excluding values to reduce security risk)
4. Simple filtering and search (filter by project/branch/status)

**Explicitly out of scope:**

1. No online editing and write-back of environment variables (first version is read-only to avoid misoperation risk)
2. No real-time WebSocket push (scheduled polling is sufficient)
3. No historical data and trend charts
4. No multi-platform deployment triggering (no triggering GitHub Actions or Vercel/Railway deployments through the dashboard)

**Third-party service dependencies:**

| Service | Purpose | Alternative |
|---|---|---|
| GitHub REST API | Fetch Actions workflow runs status, log summary | None — core data source |
| Vercel REST API | Fetch deployment status and project list | None — core data source |
| Railway GraphQL API | Fetch deployment status and service list | None — core data source |
| SQLite / Local File | Cache API responses, reduce request frequency | Any lightweight storage |

**Responsibilities not committed:**

1. No commitment to data real-timeness (5-minute polling interval, not real-time push)
2. No commitment to external service availability (dashboard unavailability during GitHub/Vercel/Railway API outages is an upstream issue)

---

## 11. Do-Not-Build List

> At least 5 things that should not be built at the current stage.

1. X **No external commercialization** — No external website, no pricing, no billing system, no registration/login. Completely unnecessary during the internal tool stage
2. X **No multi-tenancy/multi-team support** — Dashboard is hardcoded to the current team's project list; no user management or permission system design
3. X **No building a CI/CD platform from scratch** — Do not attempt to replace any core functionality of GitHub Actions, Vercel, or Railway; only aggregate and display
4. X **No real-time notifications (Slack/DingTalk/Email)** — First version does not include Webhook push or messaging notification integration; team proactively checks via the dashboard
5. X **No public API** — Do not expose REST/GraphQL API externally; dashboard is for internal HTTP access only
6. X **No mobile adaptation** — No responsive design or mobile app; desktop browser only
7. X **No deployment approval workflow** — No deploy approval, release gate, or other enterprise DevOps features

---

## 12. Minimum-Cost Validation Actions

> 3 concrete actions, each completable within 1-3 days. Do not write generic statements like "do market research."

### Action 1: API Feasibility Quick Validation

**Goal:** Confirm whether GitHub Actions, Vercel, and Railway APIs can cover all data fields required by the dashboard

**Specific Steps:**
1. Use curl or Postman to call GitHub Actions API (`GET /repos/{owner}/{repo}/actions/runs`), Vercel API (`GET /v9/deployments`), and Railway API (`deployments` query) respectively
2. Check the returned JSON structure to confirm whether it includes: run status, duration, branch name, commit hash, trigger person
3. Check API rate limits (GitHub 5000 req/h authenticated, Vercel no public hard limit but has soft limits) to see if they meet the 5-minute polling frequency
4. Record missing fields (e.g., a platform does not return commit message, etc.) and decide whether to accept the gap or find alternative solutions

**Estimated Time:** 1 day

---

### Action 2: Team Deployment Workflow Mapping

**Goal:** Map the team's current complete deployment process, confirm the dashboard's core interactions and default view

**Specific Steps:**
1. Spend 15 minutes with each of the 3-5 team members to record the operational steps of their last 3 deployments (which pages they opened, what information they checked, what actions they performed)
2. Draw each person's process as a swimlane diagram, annotating time spent and pain points
3. Merge into a common process, determine what the dashboard's default view should display (e.g., "latest deployment status is most important" vs. "all-project status overview is most important")
4. Output a one-page "Dashboard Information Architecture Proposal," including a draft of the default homepage layout

**Estimated Time:** 2 days

---

### Action 3: Single-Platform Minimal Prototype

**Goal:** Build a single-panel page aggregating only GitHub Actions as quickly as possible to validate the technical approach and actual experience

**Specific Steps:**
1. Use a single HTML file + inline JavaScript to call the GitHub Actions API and display the latest 10 workflow runs
2. Authenticate with a GitHub Personal Access Token (no backend; pure frontend fetch)
3. Deploy the page to localhost; team members try it for one day
4. Collect feedback: How is this single-platform dashboard better than directly opening the GitHub Actions page? What is worse? What additional information is needed?

**Estimated Time:** 2 days

---

## 13. External Evidence Gaps

### External Evidence Connection Status

| Source | Status | Description |
|---|---|---|
| Case Library | not_connected | Not queried for similar product case library |
| Competitor Research | not_connected | Not used automatic competitor research tool |
| Keyword Research | not_connected | Not queried for keyword search volume data |
| Pricing Lookup | not_connected | Not queried for real-time pricing of commercial CI/CD aggregation tools |
| Decision History | not_connected | Not queried for internal historical decision records |
| MCP Tools | not_connected | No MCP tools invoked |

### Current Gaps

- **Missing competitor information:** Specific pricing pages, user counts, and CLI integration methods for Sleuth, Codefresh, Buildkite; feature comparison with open-source alternatives (e.g., Drone CI Dashboard)
- **Missing search keywords:** Search volume and trends for "CI/CD dashboard for small team," "GitHub Actions Vercel unified panel," "internal deployment dashboard"
- **Missing user behavior evidence:** Actual frequency and time distribution data of the team switching between 3 platforms (recordable via browser plugin), success/failure cases of similar-sized teams building internal tools
- **Missing similar cases:** Open-source projects of other small teams building CI/CD dashboards, implementation details and pitfalls documented in tech blog posts
- **Missing pricing benchmarks:** Accurate monthly fees for commercial aggregation tools, free tier limitations, per-seat vs. per-usage pricing model comparisons
- **Missing historical review records:** ROI reviews of previous internal tool projects built by the team (if any prior internal tool projects exist)

### Manual Research Keywords

```
🔍 Manual Research Keywords:
- S04 Alternatives → "CI/CD dashboard aggregator", "GitHub Actions Vercel Railway unified view", "multi-platform deployment monitoring"
- S05 Payment Willingness → "Sleuth CI/CD pricing", "Codefresh pricing per seat", "deployment dashboard SaaS pricing"
- S06 User Group → "small team CI/CD dashboard", "startup internal deployment tool", "internal deployment dashboard small team"
- S07 Acquisition Path → "developer tools distribution channels", "internal dev tools open source", "CI/CD tool marketplace"
- S11 Reuse Value → "internal platform engineering dashboard", "developer portal architecture", "API aggregator pattern"
```

### Recommended External Tools

If MCP is connected in the future, prioritize using:

- `product_route.case_search` — Search for similar internal infrastructure product cases
- `product_route.competitor_search` — Automatically research CI/CD aggregation dashboard competitors
- `product_route.keyword_search` — Query developer tool keyword search volume
- `product_route.pricing_lookup` — Query commercial CI/CD dashboard pricing benchmarks
- `product_route.history_query` — Query team historical internal tool project decision records

> **The core Skill does not depend on external services to run. External case libraries, competitor databases, keyword databases, and MCP tools are only used to improve evidence coverage and confidence.**

---

## 14. JSON Result

```json
{
  "schema_version": "0.1.0",
  "skill_version": "0.1.0",
  "runtime_language": "en",
  "evidence_mode": "manual_only",
  "mcp_enabled": false,
  "idea": "Build an internal CI/CD unified dashboard for a small team of 3-5 people, aggregating GitHub Actions run status, Vercel/Railway deployment logs, and environment variable management in a single interface. Not for external sale.",
  "main_route": "R03",
  "main_route_label": "Internal Infrastructure",
  "secondary_route": "",
  "secondary_route_label": "",
  "confidence": "B",
  "scores": {
    "trigger_clarity": 4,
    "pain_strength": 3,
    "usage_frequency": 3,
    "alternative_maturity": 2,
    "payment_evidence": 1,
    "user_clarity": 4,
    "acquisition_clarity": 1,
    "delivery_complexity": 3,
    "liability_risk": 2,
    "maintenance_cost": 3,
    "reuse_value": 4,
    "stage_fit": 3
  },
  "risk_gates": [],
  "matched_rules": [
    "S11>=4 AND S07<=2 → R03 Internal Infrastructure"
  ],
  "blocked_by": [],
  "next_action": "API feasibility quick validation + Team deployment workflow mapping + Single-platform minimal prototype",
  "do_not_build": [
    "External commercialization and billing system",
    "Multi-tenancy/multi-team permission management",
    "Real-time notification integration (Slack/DingTalk/Email)",
    "Public API external exposure",
    "Mobile adaptation",
    "Deployment approval workflow",
    "Building a CI/CD platform alternative from scratch"
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

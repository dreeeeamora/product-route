# Example Assessment: Online Mind Map Tool

## Product Idea

Build an online mind map tool supporting real-time collaboration, Markdown import/export, and AI-assisted node generation. Users can create, edit, and share mind maps in the browser, collaborate with multiple people editing simultaneously, automatically generate map structures from Markdown text, and leverage AI to auto-expand child nodes based on topics.

---

## 1. Product Idea Restatement

> Restate the product idea in one sentence to confirm aligned understanding.

**Idea:** Build a browser-based mind map tool whose core selling points are multi-person real-time collaborative editing, bidirectional Markdown conversion, and AI that auto-generates and expands mind map nodes based on user-input topics.

---

## 2. Target Users

- Knowledge workers: product managers doing requirements breakdown, technical solution design
- Students: course note organization, exam review outlines
- Project managers: project planning, WBS decomposition
- Content creators: article outlines, course structure design

Note: the above groups are already highly dispersed across existing tools like Miro, Notion, Obsidian, Xmind, etc., making precise targeted outreach difficult.

---

## 3. Trigger Scenarios

- Need to quickly organize scattered ideas into a structured mind map (e.g., post-meeting brainstorming organization)
- Team remote collaboration on project planning or solution discussions, requiring multiple people to edit the same map simultaneously
- Already have Markdown-formatted notes or outlines and want one-click conversion to a visual mind map
- Given a topic (e.g., "new product feature planning"), want AI to help break it down into a complete mind map framework

Common trigger thread: knowledge structuring needs. But trigger events lack external driving force (not audits, compliance, failures, etc. — strong triggers); they fall into "something users can do when they have time" rather than "must do right now" scenarios.

---

## 4. Evidence Table

| ID | Type | Source Type | Content | Confidence | Supported Scoring Dimensions |
|---|---|---|---|---|---|
| E001 | Positive Evidence | competitor_observation | Miro is valued at over $17 billion with 70M+ users, proving the online whiteboard/mind map market exists | A | S04 |
| E002 | Positive Evidence | competitor_observation | Xmind, as a mind-map-focused tool, has been operating for 15+ years with a stable paying user base | A | S04, S05 |
| E003 | Positive Evidence | competitor_observation | Notion, Obsidian, Logseq, and other note-taking tool users frequently request built-in mind map functionality | B | S02 |
| E004 | Negative Evidence | competitor_observation | FigJam (by Figma), Miro, Excalidraw, Lucidchart all have built-in mind map functionality, deeply integrated with their respective ecosystems | A | S04, S07 |
| E005 | Negative Evidence | competitor_observation | Mermaid, PlantUML, and other text-to-diagram tools already cover the Markdown → mind map "programmer path" | B | S04 |
| E006 | Negative Evidence | competitor_observation | Individual users almost never need to pay for a standalone mind map tool — Xmind's free version already meets 80% of personal needs | B | S05 |
| E007 | Negative Evidence | web_research | Search volume for "mindmap tool" is concentrated on Miro, Xmind, MindMeister brand terms; generic keyword competition is extremely fierce | B | S07 |
| E008 | Positive Evidence | competitor_observation | AI-assisted node generation is a differentiator — Miro AI was only launched in 2024, Xmind AI features are still relatively basic | B | S02 |
| E009 | Negative Evidence | competitor_observation | ChatGPT/Claude can directly generate Markdown outlines that users copy into Xmind; AI-generated mind maps are not an independent moat | B | S02, S05 |

---

## 5. Counter-Evidence Table

| ID | Counter-Evidence / Risk | Impact | Confidence |
|---|---|---|---|
| CE001 | Miro, FigJam, Excalidraw, and Xmind have formed a complete product matrix and ecosystem moat; new standalone products face extreme difficulty breaking through | S04 Alternatives extremely mature, S07 Acquisition path blocked | A |
| CE002 | Mind maps are essentially "another view for documents/notes"; users won't migrate their entire workflow just to switch views | S02 Pain point not strong enough, S05 Willingness to pay low | A |
| CE003 | Real-time collaboration is a core capability of Miro/Figma with high technical barriers (CRDT/OT); it's not a differentiator but a ticket to entry | S08 Delivery complexity high; no collaboration = no competitiveness, building collaboration = extremely high cost | B |
| CE004 | The AI node generation differentiation window is extremely short — any existing tool can integrate an LLM API in just 1-2 weeks | S02 Differentiation unsustainable, S05 Willingness to pay further weakened | B |
| CE005 | A mind map tool as a standalone product lacks entry-point properties — users won't enter your product ecosystem by searching "mind map" | Compare R01 Entry Tool: mind maps have no traffic distribution value | A |
| CE006 | Xmind free version + Miro free version + Excalidraw open-source version = users solve their needs at zero cost | S05 Willingness to pay <= 2 | A |

---

## 6. Scoring Table

| Dimension ID | Dimension | Score | Basis | Anchor Point Hit | Confidence |
|---|---|---|---|---|---|
| S01 | Trigger Scenario Clarity | 3 | Brainstorming, project planning, study notes — 3 scenarios with common threads (knowledge structuring), but trigger events are not externally-driven strong events | Can name 2-3 specific trigger scenarios with common threads between them | B |
| S02 | Pain Point Strength | 2 | Not using this product can be fully substituted by Miro free version or Xmind free version, no significant loss. AI node generation saves some time, but no pain from not using it | Saves a bit of time, but no significant loss from not using it | A |
| S03 | Usage Frequency | 2 | Mind maps are phase-based task tools; most users use them 1-3 times a month (project kickoff, exam review, article planning), not embedded in daily workflow | 1-3 times per month | A |
| S04 | Alternative Maturity | 5 | Miro ($17B valuation), FigJam (Figma ecosystem), Excalidraw (open source & free), Xmind (15 years focused on mind maps), Lucidchart, MindMeister — multiple mature competitors with complete features and transparent pricing | Multiple mature competitors, complete features, transparent pricing, low user migration cost | A |
| S05 | Willingness to Pay Evidence | 2 | Individual users generally expect free (Xmind free version, Excalidraw completely open source & free); Miro/Xmind paying users are mainly teams and enterprises, not paying for the "mind map" feature itself. Payment signals for a standalone mind map tool are weak | Weak payment signals (competitors have free alternatives, users have expressed dissatisfaction but haven't paid) | B |
| S06 | User Group Clarity | 3 | Can be described as "knowledge workers, students, project managers, content creators," but the groups are too broad and dispersed, making precise targeted outreach difficult. These users are already covered by products like Miro/Notion/Obsidian | Can describe a specific persona (e.g., "product managers needing requirements breakdown") | B |
| S07 | Acquisition Path Clarity | 2 | Generic search terms occupied by Miro/Xmind brands, long-tail keyword competition intense. No clear, unblocked acquisition path. Mind maps themselves don't have search distribution value | Roughly know channel direction (SEO, Product Hunt), but not validated | B |
| S08 | Delivery Complexity | 4 | Real-time collaboration requires CRDT/OT sync engine or WebSocket architecture, AI integration needs LLM API integration and prompt engineering, Markdown bidirectional conversion needs parser and rendering engine. At least 3-6 months, 2-4 people | 3-6 months, requires 2-4 people, involving multiple subsystems | C |
| S09 | Liability Risk | 2 | When the tool is unavailable, users can use other tools as substitutes; no involvement in payments, authentication, compliance, security, or other high-risk areas. Worst case: user data loss (mitigatable via auto-save) | Minor impact (e.g., degraded experience, temporary unavailability) | B |
| S10 | Maintenance Cost | 3 | Real-time collaboration infrastructure requires continuous monitoring and maintenance, AI API costs and availability need ongoing management, but no 7x24 on-call or SLA commitments required | Requires continuous attention, has regular maintenance needs | C |
| S11 | Reuse Value | 3 | Mind map rendering engine can be reused in other knowledge visualization scenarios (e.g., concept maps, flowcharts), Markdown parser can stand alone as a tool library. But overall reuse value as a standalone product is limited | Some modules can be reused, or can serve as a component for other products | C |
| S12 | Current Stage Fit | 2 | For a solo developer or small team, developing a complete mind map tool with real-time collaboration + AI as a standalone product is mismatched in resources and time. More suitable as a feature module within an existing product | One aspect matches (technically relevant direction), but overall does not fit | B |

---

## 7. Confidence Penalty

| Dimension | Original Score | Capped Score | Reason | Evidence Level |
|---|---|---|---|---|
| S08 | 4 | 3 | Delivery complexity estimate based on reasonable inference rather than concrete technical validation; evidence level is C, original score cannot exceed 3 | C |

**Explanation:** S08 was originally scored 4 (real-time collaboration + AI integration + rendering engine = 3-6 months/2-4 people), but since it only has C-level evidence (based on common-sense inference, no actual man-hour data from similar projects), according to evidence rule E01, dimensions without A/B-level evidence are capped at 3, so S08 is capped at 3.

No other scoring dimensions triggered confidence capping (S01-S07, S09 all have at least B-level evidence support; S10-S12 are C-level but scores are already within 3).

**Overall Confidence Rating:** B (Medium-High) — Key dimensions S02/S04 have A-level competitor observation evidence; S01/S05/S06/S07 have B-level indirect evidence. However, since the assessment environment has no internet and no MCP tools, competitor data is based on known market information rather than real-time research and cannot be traced to specific links; following the QR code example precedent, overall confidence is capped at B.

---

## 8. Risk Gates

### Risk Gates Triggered

None. S09 = 2 (low liability risk), S08 original = 4 but capped = 3. Even using original S08 = 4, it does not simultaneously meet the S09 >= 4 trigger condition. R07 High-Risk Infrastructure route is not triggered.

### Risk Gates Not Triggered

| Gate ID | Name | Why Not Triggered |
|---|---|---|
| G01 | Payment & Funds Risk | Product does not involve payment processing or fund storage; third-party payment can be used |
| G02 | Authentication Risk | Can use mature solutions like Auth0 / Clerk; no building authentication system from scratch |
| G03 | Email Delivery Risk | Product does not rely on email as a core function |
| G04 | Privacy & Compliance Risk | Does not collect sensitive personal data, does not involve regulated industries, can label "not a compliance guarantee" |
| G05 | Video, Storage, Bandwidth Risk | Mind map data volume is small (JSON/text format), no large files or video involved |
| G06 | Core Notification Risk | Does not rely on real-time push notifications as a core function |
| G07 | Customer Support Reliability Risk | Does not involve customer service/ticketing systems |
| G08 | Deployment & Infrastructure SLA Risk | Can use Vercel/Railway and other platform hosting; no high-availability SLA commitment |

---

## 9. Routing Decision

**Main Route:** R08 — Feature Only, Not Standalone

**Secondary Route:** None

**Triggered Route Rules:**

- **Manual Judgment (core logic):** S04 = 5 (dense mature competitors: Miro, FigJam, Excalidraw, Xmind, Lucidchart, MindMeister) + S05 <= 2 (users won't pay for a standalone mind map tool) → as a standalone product, perceived user value is insufficient, but as a built-in feature for note apps/knowledge bases/whiteboard tools, it is very valuable → R08
- Among hard rules, no rule directly hits R08 (R08 currently has no hard trigger condition, depends on comprehensive judgment)
- Hard rule exclusions: S09 < 4 and S08 capped = 3 → R07 not triggered; S05 <= 2 but S07 <= 2 → does not satisfy R01 "weak payment + strong acquisition" rule; S06 = 3 > 2 → R09 not triggered; S01 = 3 > 2 → R09 not triggered

**Why Not Other Routes:**

- **R01 Entry Tool:** The core difference lies in "distribution value." QR code generators are R01 because large numbers of users actively search "QR code generator" and enter your product, giving you the opportunity to showcase other tools, creating a traffic entry effect. A mind map tool lacks this characteristic — users won't discover your product ecosystem by searching "mind map," and after using a mind map, there is no naturally succeeding next product step. S07 = 2 (acquisition path unclear), hard rule "S05 <= 2 AND S07 >= 4 → R01" not satisfied (S07 = 2, far below 4). Mind maps are "destination products," not "entry products."

- **R02 Shelf Service:** S05 = 2 (weak willingness to pay), hard rule "S04 >= 4 AND S05 >= 3 AND S08 <= 3 → may consider R02" not satisfied (S05 does not meet threshold). Users won't self-service purchase a standalone mind map tool from a shelf — they already get this functionality for free within their Miro or Notion paid subscription. Low frequency (S03 = 2) and weak willingness to pay → not a shelf service.

- **R03 Internal Infrastructure:** S11 = 3 (moderate reuse value), hard rule "S11 >= 4 AND S07 <= 2 → R03" not satisfied. Although S07 is low, reuse value is insufficient to support being internal infrastructure. And S06 = 3 (clear user group), has clearly identifiable potential external users, not a pure internal tool.

- **R04 Third-party Wrapper:** There is no high-risk third-party service to wrap at the underlying level (S09 = 2). This product's core value (real-time collaboration, AI node generation) is precisely what needs to be built from scratch; there is no mature third party to wrap. It's not a "wrap the Miro API" or "wrap the Xmind API" scenario.

- **R05 Sales-led Service:** A mind map tool is a typical self-service product, requiring no sales involvement, custom integration, or contract negotiation. Low per-customer price, not suitable for a sales-driven model.

- **R06 Content or Community Product:** Core value is tool functionality (mind map editing, collaboration, AI generation), not content or community relationships. If built around a "mind map template community" or "learning methodology content," that would be R06, but the current idea is tool-centric.

- **R07 High-Risk Infrastructure, Defer:** S09 = 2 (low liability risk), hard rule "S09 >= 4 AND S08 >= 4 → R07" not satisfied. Does not involve payment, authentication, email, video, or other high infrastructure risk.

- **R09 Insufficient Information, Research First:** S01 = 3 > 2, S06 = 3 > 2, no D-level evidence among key dimensions. Information is sufficient to make a judgment (R08); no need to research first.

---

## 10. MVP Boundaries

> Note: Per R08 routing, building a standalone MVP is not recommended. The following boundary description covers the scope "if developed as a feature module within an existing product."

**What the first version will only do:**

1. Basic mind map node creation, editing, drag-and-drop arrangement
2. Auto-parse Markdown text pasted in into a mind map structure
3. Export as PNG/SVG image formats
4. Embed as a view mode within an existing product (e.g., a note-taking app)

**What will explicitly not be done:**

1. No independent user registration and login system
2. No independent website, independent domain, independent brand
3. No real-time multi-person collaboration (as a feature module, reuse the host product's collaboration infrastructure)
4. No AI auto-generation of nodes (consider for V2, as part of the host product's AI capabilities)
5. No paid subscription system

**Which third-party services are depended upon:**

| Service | Purpose | Alternatives |
|---|---|---|
| Host product's authentication system | User identity management | — |
| Host product's storage service | Mind map data persistence | — |
| Open-source mind map rendering library (e.g., markmap, mind-elixir) | Mind map rendering engine | D3.js self-drawn |

**Which responsibilities are not committed to:**

1. No commitment to providing services as a standalone product
2. No commitment to compatibility outside the host product

---

## 11. Do-Not-Build List

> Based on R08 routing: these are things that should explicitly not be done at the current stage.

1. ❌ Do not build an independent commercial website and independent brand promotion — as a standalone product, there is no market competitiveness; should be a feature module of an existing product
2. ❌ Do not build an independent user system (registration, login, payment, team management) — reuse the host product's user system
3. ❌ Do not build a real-time collaboration engine from scratch (CRDT/OT) — if collaboration is truly needed, reuse the host product's collaboration infrastructure or use mature services like Liveblocks/PartyKit
4. ❌ Do not build an independent AI node generation service — the AI differentiation window is extremely short, not worth independent development investment; should reuse the host product's existing AI capabilities
5. ❌ Do not build a native mobile app — a standalone mind map app competes head-to-head with Xmind mobile and has no chance of winning
6. ❌ Do not build a mind map template marketplace — belongs to R06 content community route, deviating from the core judgment
7. ❌ Do not expose an external API — a standalone mind map API has no paying user base

---

## 12. Minimum Cost Validation Actions

> 3 specific actions, each completable within 1-3 days.

### Action 1: Competitor Feature Matrix Comparison

**Goal:** Use data to confirm alternative maturity (S04 = 5) and find the entry point "as a feature"

**Specific Steps:**
1. List the mind-map-related feature matrix for Miro, FigJam, Excalidraw, Xmind, Notion, Obsidian (create/edit/collaborate/export/AI/templates)
2. Mark each competitor's free version limitations and paywall position
3. Search "mindmap" keyword in the user communities (Reddit, Discord, Product Hunt comments) of at least 2 competitors, collecting user complaints and feature requests
4. Output: What are competitors missing? Which gap can serve as the entry point for a "feature module"?

**Estimated Time:** 2 days

---

### Action 2: Validate the "Which Product Should It Embed Into" Hypothesis

**Goal:** Validate the judgment that "mind maps are better suited as a note/knowledge base feature," and find the most suitable host product type

**Specific Steps:**
1. Search "mindmap feature request" related posts on Product Hunt, Hacker News, Reddit r/Notion, r/ObsidianMD
2. Tally which type of product has users most frequently requesting built-in mind map functionality (note tools? project management tools? whiteboard tools?)
3. Record at least 5 verbatim quotes from real users, with source annotations (post links)
4. Output: In which type of existing product do users most want to see mind map functionality?

**Estimated Time:** 1.5 days

---

### Action 3: Quickly Validate Rendering Feasibility with Open-Source Libraries

**Goal:** Validate technical feasibility, confirm the real level of delivery complexity (S08), and simultaneously produce an embeddable Demo

**Specific Steps:**
1. Build a minimal demo using the open-source library markmap (renders Markdown as mind maps)
2. Test functionality: paste Markdown → generate interactive mind map → export as SVG
3. Embed the Demo into a local note-taking tool (e.g., as an Obsidian plugin or Logseq plugin) to experience the "as a feature" usage feel
4. Output: a usable Demo + actual hour tracking (how many hours spent)

**Estimated Time:** 2 days

---

## 13. External Evidence Gaps

### External Evidence Connection Status

| Source | Status | Description |
|---|---|---|
| Case Library | not_connected | Similar case library not used |
| Competitor Research | not_connected | Automated competitor research not used |
| Keyword Research | not_connected | Keyword research not used |
| Pricing Lookup | not_connected | Price benchmark queries not used |
| Decision History | not_connected | Historical decision records not used |
| MCP Tools | not_connected | MCP tools not called |

### Current Gaps

- **What competitor information is still missing:** Specific pricing pages for Miro/Xmind/MindMeister, precise list of free version feature limitations, user counts and growth rates of each competitor
- **What search keywords are still missing:** Precise monthly search volume and CPC for "mindmap tool" / "online mindmap" / "mindmap maker"
- **What user behavior evidence is still missing:** Verbatim quotes from real users discussing mind map tool choices on Reddit/communities; Notion/Obsidian users' willingness to pay for built-in mind map functionality
- **What similar cases are still missing:** Have there been historical cases of standalone mind map tools successfully starting from scratch? What failed cases exist? Any reference cases of transitioning from "standalone product" to "embedded feature"?
- **What price benchmarks are still missing:** Xmind Pro annual fee, MindMeister personal monthly fee, Miro free version collaborator limit, estimated paid conversion rates for each competitor
- **What historical review records are still missing:** Has the team or individual historically built similar visualization/editing tools? What pitfalls were encountered?

### Manual Research Keywords

```
🔍 Manual Research Keywords:
- S04 Competitor Alternatives → "best mindmap tool 2025", "Miro vs Xmind vs MindMeister", "free mindmap software comparison"
- S05 Willingness to Pay → "Xmind Pro pricing worth it", "mindmap tool free vs paid", "would you pay for mindmap tool Reddit"
- S07 Acquisition Path → "mindmap tool SEO difficulty", "how to promote mindmap tool"
- S02 Pain Point Strength → "mindmap feature request Notion", "missing mindmap in Obsidian"
- R01 vs R08 Comparison → "qr code generator traffic vs mindmap tool traffic", "entry tool product strategy", "tool as feature vs standalone product"
```

### Recommended External Tools

If MCP is connected in the future, prioritize using:

- `product_route.case_search` — Search for similar cases of "standalone mind map tool vs embedded feature"
- `product_route.competitor_search` — Automatically research features and pricing of Miro/FigJam/Excalidraw/Xmind/MindMeister
- `product_route.keyword_search` — Query search volumes for keywords like "mindmap tool"
- `product_route.pricing_lookup` — Query specific prices and paywall positions for each competitor
- `product_route.history_query` — Query historical decision cases similar to "standalone tool becomes a feature"

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
  "idea": "Build an online mind map tool supporting real-time collaboration, Markdown import/export, and AI-assisted node generation",
  "main_route": "R08",
  "main_route_label": "Feature Only, Not Standalone",
  "secondary_route": null,
  "secondary_route_label": null,
  "confidence": "B",
  "scores": {
    "trigger_clarity": 3,
    "pain_strength": 2,
    "usage_frequency": 2,
    "alternative_maturity": 5,
    "payment_evidence": 2,
    "user_clarity": 3,
    "acquisition_clarity": 2,
    "delivery_complexity": 3,
    "liability_risk": 2,
    "maintenance_cost": 3,
    "reuse_value": 3,
    "stage_fit": 2
  },
  "risk_gates": [],
  "matched_rules": [
    "S04=5 AND S05<=2 → Standalone product has insufficient perceived user value → Manual judgment R08",
    "S05<=2 AND S07<=2 → Does not satisfy R01 weak-payment+strong-acquisition condition",
    "S09<4 → R07 High-Risk Infrastructure not triggered",
    "S06=3>2 AND S01=3>2 → R09 Insufficient Information not triggered"
  ],
  "blocked_by": [],
  "next_action": "Recommend developing the mind map as a feature module within an existing note/knowledge base product (e.g., Notion, Obsidian, Logseq), not as a standalone site. Recommended validation actions: competitor feature matrix comparison + confirm host product type + open-source library demo validation",
  "do_not_build": [
    "Independent commercial website and independent brand promotion",
    "Independent user system (registration, login, payment, team management)",
    "Real-time collaboration engine built from scratch (CRDT/OT)",
    "Independent AI node generation service",
    "Native mobile app",
    "Mind map template marketplace",
    "Externally-exposed API service"
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

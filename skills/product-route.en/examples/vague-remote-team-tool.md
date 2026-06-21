# Product Route Report

## 1. Product Idea Restated

> Restate the product idea in one sentence to confirm shared understanding.

**Idea:** Build a tool to improve remote team efficiency — might involve collaboration, documentation, or meeting summaries. The specific direction has not been determined.

---

## 2. Target Users

**Current description:** "Remote teams."

**Problem:** "Remote teams" is not a user segment. A daily standup facilitator for a distributed engineering team and a hiring manager in a multinational enterprise HR department have zero overlap in use cases, pain points, budget, or decision-making chains. Until the user persona is narrowed down to "a specific type of person doing a specific thing in a specific context," no meaningful evaluation is possible.

**Evidence lacking:**
- What is the target user's job title / role?
- What team size? (2-5 person startup? 50-200 person mid-size company? 1000+ enterprise?)
- What tools do they currently use? What frustrates them?
- Who holds purchasing authority? Which department owns the budget?

---

## 3. Trigger Scenarios

**Current description:** None. The founder provided no specific trigger scenario.

**Problem:** The evaluator cannot even answer the most basic question: "At what moment would a user open this product?" Is it right after a meeting ends, needing an auto-generated summary? Is it when writing a document and needing real-time comments from collaborators? Is it during project management, needing to track task dependencies across time zones? These three scenarios map to entirely different products, different user behaviors, and different competitive landscapes.

**Evidence lacking:**
- After what specific event would the user use the product? ("just finished a meeting" / "after receiving a task" / "while writing the weekly report on Friday")
- Is it actively opened or passively triggered (notification, email, Slack bot)?
- What is the expected usage frequency?

---

## 4. Evidence Table

| ID | Type | Source Type | Content | Confidence | Dimensions Supported |
|---|---|---|---|---|---|
| E001 | Positive | unverified | Founder expressed intuition that remote team efficiency has pain points | D | S01, S02 |
| E002 | Positive | competitor_observation | Mature remote collaboration tools market exists (Slack, Zoom, Notion, Loom, Miro, Fireflies.ai, etc.) | B | S04 |
| E003 | Positive | unverified | Founder mentioned collaboration, documentation, and meeting summaries as three possible directions | D | S01 |
| E004 | Negative | unverified | Founder cannot describe a single specific user scenario | D | S01, S06 |
| E005 | Negative | unverified | "Remote teams" covers everyone from solo freelancers to entire multinational enterprises — not a targetable user group | D | S06 |
| E006 | Positive | competitor_observation | Competitors such as Notion, Slack, Zoom, Fireflies.ai all have mature monetization models and large paying user bases | B | S05 |
| E007 | Negative | unverified | Founder provided no user interviews, surveys, community posts, or support tickets as pain point evidence | D | S02 |
| E008 | Negative | unverified | Founder provided no acquisition channel clues (search keywords, communities, ad channels) | D | S07 |
| E009 | Positive | competitor_observation | Remote collaboration products on G2/Capterra have extensive user reviews, indicating real market demand | B | S04, S02 |

---

## 5. Counterevidence Table

| ID | Counterevidence / Risk | Impact | Confidence |
|---|---|---|---|
| CE001 | Product direction undetermined — collaboration, documentation, and meeting summaries are at least three fundamentally different directions that cannot be evaluated simultaneously | S01, S02, S06 cannot be scored meaningfully; any evaluation is speculation | A |
| CE002 | "Remote teams" is not a user segment — a daily standup facilitator for a distributed engineering team and an HR manager at a multinational enterprise share no common behavioral patterns | S06 can score at most 2 (can name a broad category but cannot segment) | A |
| CE003 | The remote collaboration tool market is extremely crowded — Notion, Slack, Zoom, Teams, Google Workspace, Loom, Fireflies.ai, Otter.ai, Miro, Figma already occupy most user mindshare and budget | Without a clear differentiation entry point, there is almost no room to survive in this market | B |
| CE004 | No evidence of any specific unmet need — "remote teams have many pain points" is a statement that can be neither verified nor falsified | S02 cannot score above 2; without a specific pain point, product value cannot be evaluated | B |
| CE005 | Founder cannot describe how a single specific user would use the product to complete a specific task | S01 cannot score above 2; missing scenarios mean the product has no moment of "being needed" | A |
| CE006 | Switching costs for remote collaboration tools are extremely high — once a team adopts Slack/Notion/Teams, migration involves changing the entire team's workflow | Even if a better product is built, customer acquisition may be 10x harder than expected | B |
| CE007 | The "meeting summaries" direction faces homogeneous competition from AI summary tools — at least 20+ products are doing something similar | If this direction is chosen, differentiation space may be very narrow | B |

---

## 6. Scoring Table

| Dimension ID | Dimension | Score | Basis | Anchor Hit | Confidence |
|---|---|---|---|---|---|
| S01 | Trigger Scenario Clarity | 2 | Founder mentioned "collaboration, documentation, meeting summaries" but cannot describe any specific triggering event | Can describe a general direction, but the triggering event is vague | D |
| S02 | Pain Point Intensity | 1 | No specific pain point description provided; "remote teams have many pain points" is a feeling, not evidence | Merely interesting, nice-to-have — no impact if not used at all | D |
| S03 | Usage Frequency | 2 | Cannot determine usage frequency — depends on the final product form | 1-3 times per month | D |
| S04 | Alternative Maturity | 4 | Slack, Zoom, Notion, Teams, Fireflies.ai and other mature competitors widely exist; users have payment habits | Mature competitors exist, users have payment habits, but differentiation space remains | B |
| S05 | Willingness-to-Pay Evidence | 1 | No payment signal provided — cannot evaluate willingness to pay for an undefined product | No payment signal whatsoever | D |
| S06 | User Group Clarity | 1 | "Remote teams" is not a user persona — cannot distinguish role, size, industry, or scenario | Cannot say who would use it — "all remote teams" is equivalent to "all developers" | D |
| S07 | Acquisition Path Clarity | 1 | No acquisition channel clues provided; no idea where users come from | Completely unknown where users come from | D |
| S08 | Delivery Complexity | 3 | Remote collaboration tools typically require real-time sync, permission management, multi-platform support; estimated 1-3 months with 1-2 people | 1-3 months, requires 1-2 people | C |
| S09 | Liability Risk | 2 | Collaboration tool failures generally do not cause catastrophic consequences (not payments, not healthcare, not security) | Minor impact (e.g., degraded experience, temporary unavailability) | C |
| S10 | Maintenance Cost | 3 | Collaboration SaaS typically requires ongoing maintenance, user feedback handling, compatibility updates | Requires continuous attention, has regular maintenance needs | C |
| S11 | Reuse Value | 2 | Product direction undetermined, reuse value cannot be evaluated; if it ends up as a vertical tool, reuse value is low | A few components can be reused, but the whole is not reusable | D |
| S12 | Current Stage Fit | 1 | Product direction not yet determined; cannot evaluate fit with current stage | Completely mismatched with current stage — resources, time, and skills are all wrong | D |

---

## 7. Confidence Penalty

> Lists which dimensions had their scores capped due to insufficient evidence.

| Dimension | Raw Score | Capped Score | Reason | Evidence Level |
|---|---|---|---|---|
| S01 | 2 | 2 | E02: D-level evidence ceiling is 2; original was already 2, no additional penalty | D |
| S02 | 2 | 1 | E02: D-level evidence ceiling is 2; but cannot even describe a specific pain point, actual score can only be 1 | D |
| S03 | 3 | 2 | E02: D-level evidence ceiling is 2 (no A/B-level evidence supporting usage frequency estimation) | D |
| S04 | 4 | 4 | No penalty — has B-level evidence (competitor observation) | B |
| S05 | 2 | 1 | E02: D-level evidence ceiling is 2; but the product itself is undefined, willingness to pay cannot be evaluated, actual score can only be 1 | D |
| S06 | 2 | 1 | E02: D-level evidence ceiling is 2; but "remote teams" has not even been segmented, actual score can only be 1 | D |
| S07 | 2 | 1 | E02: D-level evidence ceiling is 2; but acquisition path is completely unknown, actual score can only be 1 | D |
| S08 | 3 | 3 | E01: C-level evidence ceiling is 3; original was already 3, no additional penalty | C |
| S09 | 2 | 2 | No penalty — reasonable inference based on industry common knowledge | C |
| S10 | 3 | 3 | No penalty | C |
| S11 | 2 | 2 | No penalty (original already within D-level ceiling) | D |
| S12 | 1 | 1 | No additional penalty | D |

**Overall Confidence Rating: D (Low)** — 7 out of 12 dimensions at evidence level D; all 5 critical dimensions at D-level evidence; evaluation results are highly uncertain.

---

## 8. Risk Gates

### Triggered Risk Gates

| Gate ID | Name | Trigger Reason | Narrowing Suggestion |
|---|---|---|---|
| — | None | S09 = 2 and S08 = 3, does not meet the S09>=4 and S08>=4 trigger condition | Not applicable |

### Untriggered Risk Gates

| Gate ID | Name | Why Not Triggered |
|---|---|---|
| G01 | Payment & Fund Risk | Current product direction does not involve payment processing |
| G02 | Authentication Risk | May involve user systems but scope is undefined; even if involved, mature solutions like Clerk/Auth0 can be used |
| G03 | Email Delivery Risk | Email sending not mentioned in core feature description |
| G04 | Privacy & Compliance Risk | Collaboration tools typically involve user data storage, but at current stage compliance considerations are premature |
| G05 | Video, Storage & Bandwidth Risk | Current product direction does not involve video hosting or large file storage |
| G06 | Core Notification Risk | May involve notifications but not defined as a core feature |
| G07 | Customer Support Reliability Risk | Does not involve customer support systems |
| G08 | Deployment & Infrastructure SLA Risk | Standard SaaS deployment, no special high-availability requirements |

---

## 9. Route Determination

**Primary Route:** R09 — Insufficient Information, Research First

**Secondary Route:** None

**Triggered Route Rules:**

- **Hard Rule 5: S06 <= 2 → R09** — "Remote teams" is not even a user segment; user group clarity = 1
- **Hard Rule 6: S01 <= 2 → R09** — Cannot describe any specific trigger scenario; trigger scenario clarity = 2
- **Hard Rule 9: Majority of critical dimensions at C/D confidence → R09** — S01/S02/S05/S06/S07 all five critical dimensions at D-level confidence
- **E03: 5 out of 5 critical dimensions at evidence level D → R09** — Far exceeds the "3 or more" threshold

**Why not other routes:**

- **R01 Entry Tool:** Completely unsuitable. Entry tools require "clear users, clear acquisition path, low delivery complexity." Current user group is vague (S06=1), acquisition path unknown (S07=1), product direction undetermined. An entry tool needs a specific "entry point" — right now we do not even know where the door is.
- **R02 Shelf Service:** Completely unsuitable. Shelf services require pain intensity >= 3 and willingness-to-pay evidence. Current pain intensity can only score 1 (because we do not even know what the pain is), and willingness to pay can only score 1 (because we do not even know what the product is). Shelf feasibility cannot be evaluated without defining the product.
- **R03 Internal Infrastructure:** Unsuitable. Internal infrastructure requires "solve your own problem first, then externalize." But the founder has not expressed having their own pain point to solve — they are looking for an external market opportunity, not solving their own engineering problem. S11 (Reuse Value) is also only 2.
- **R04 Third-Party Wrapper:** Unsuitable. Third-party wrappers require a clear underlying service (S04>=4) and a wrapping value proposition. Although S04=4 (mature competitors exist), the questions of what to wrap, for whom, and what differentiated value the wrapper provides — all three are completely unanswered.
- **R05 Sales-Led Service:** Completely unsuitable. Sales-led services require clear paying customer leads and a deliverable service scope. Right now we do not even know what the product is, making customer leads impossible.
- **R06 Content or Community Product:** Unsuitable. Content/community products require that the core value is content or community. The founder explicitly wants to build a "tool," not content or community.
- **R07 High-Risk Infrastructure:** Not applicable. The S09>=4 and S08>=4 condition was not triggered.
- **R08 Feature-Only:** Temporarily not applicable. While many remote collaboration tools ultimately prove to be features rather than standalone products, this judgment cannot be made before research. The current problem is "not knowing what to build," not "this direction cannot be a standalone product."

> Core conclusion: Every route from R01 to R08 requires knowing at least two of the following: "what the product is," "who the user is," "what the scenario is." All three are currently missing. The only responsible recommendation is R09: figure out these fundamental questions first.

---

## 10. MVP Boundaries

> At the current stage, MVP should not be defined. Defining an MVP when the product direction, target users, and trigger scenarios are all unknown is like shooting blindfolded. The following is for reference only, after the direction is determined.

**What the first version does (once direction is determined):**

1. Focus on one specific scenario for one specific user segment
2. Solve one clearly defined pain point in that scenario with a minimal feature set
3. Build for only one platform (Web first, no mobile)

**Explicitly out of scope (non-negotiable boundaries once direction is determined):**

1. No multi-role collaboration — validate single-user value first
2. No real-time sync — complete offline first, then sync
3. No enterprise SSO/SAML — that is enterprise sales territory
4. No AI features — unless AI is the only path to core differentiation
5. No SLA commitments — do not promise availability at MVP stage

**Third-party service dependencies (if applicable to the direction):**

| Service | Purpose | Alternative |
|---|---|---|
| Clerk / Auth0 | User authentication | NextAuth, Supabase Auth |
| Vercel / Railway | Deployment hosting | Fly.io, Cloudflare Pages |
| To be added once product direction is determined | — | — |

**Responsibilities explicitly not assumed:**

1. Do not promise permanent data storage and backup
2. Do not promise service availability SLA
3. Do not promise enterprise compliance (SOC 2, GDPR, etc.)

---

## 11. Do-Not-Do List

> Things that absolutely should not be done at the current stage.

1. ❌ **Do not write a single line of code.** Before knowing whose problem you are solving, any code is waste. Code is expensive — research is cheap.
2. ❌ **Do not build a competitor feature comparison matrix.** Without defining your own product's value proposition, competitor analysis will only tempt you to "build every feature."
3. ❌ **Do not register a domain, design a logo, or name the product.** These "feels like progress" activities are mere psychological comfort before the direction is set, and they increase sunk cost, making it harder to abandon a wrong direction.
4. ❌ **Do not draw product prototypes or design mockups.** Prototypes exist to test specific hypotheses. Right now there is not even a hypothesis.
5. ❌ **Do not ask friends "What do you think of this idea?"** Friends are not target users. Their positive feedback is poison — it creates a false sense of validation. Go talk to people you do not know.
6. ❌ **Do not read funding news or "XX remote tool raises $Y billion" headlines.** Other people's funding does not validate your direction — it only validates "what that team built at that time."
7. ❌ **Do not try to research "collaboration," "documentation," and "meeting summaries" all three directions simultaneously.** Pick one and go deep. Researching all three equally means researching none of them deeply.

---

## 12. Minimum-Cost Validation Actions

> 3 specific actions, each completable in 1-3 days.

### Action 1: Remote Worker Pain Point Interviews (5 people x 30 minutes)

**Goal:** Verify whether the core assumption that "remote team efficiency has unmet pain points" holds, and narrow it down to specific scenarios.

**Specific steps:**

1. Find 5 people who qualify: working remotely for at least 6 months, team size 5-50, not solo freelancers (need team collaboration). Reach out via Twitter/X, LinkedIn, or relevant communities via DM, explaining "doing research on remote collaboration, would love to chat for 30 minutes."
2. In the interview, only ask about past behavior, never future intentions:
   - "Recall the last three times you felt remote collaboration was particularly inefficient. What specifically happened?"
   - "What tools were you using at the time? Why didn't they work?"
   - "What did you do after it happened? Did you try to find alternatives? How long did you search?"
   - "If a certain feature/tool had existed then, do you think it could have prevented that situation? How much would you be willing to pay for it? (Follow-up: whose budget would this come from?)"
3. Record each person's specific scenario, tools used, alternatives tried, and amount willing to pay. After the interviews, cluster by scenario type (meeting-related, documentation-related, project management-related, communication-related, other).

**Estimated time:** 3 days (1 day outreach + 2 days interviews and synthesis)

---

### Action 2: Targeted Competitor Negative Review Mining

**Goal:** Understand in which specific scenarios mature competitors leave users dissatisfied — these gaps may be where you should enter.

**Specific steps:**

1. On G2.com and Capterra.com, select representative products from 3 categories:
   - Document collaboration: Notion
   - Meeting / Communication: Zoom or Slack
   - Async video / Meeting summaries: Loom or Fireflies.ai
2. For each product, only look at 2-4 star reviews (skip 1-star — those are usually extreme cases; skip 5-star — 5-star reviews will not tell you where the opportunity is).
3. For each negative review, take notes on:
   - User role (inferred from the review: engineer? PM? founder? HR?)
   - Specific scenario they were complaining about (what were they doing?)
   - Alternatives or workarounds they mentioned (did they say "I ended up using XX" or "I wish there was XX"?)
4. Synthesize cross-product common issues. For example: "Many middle managers in remote teams complain that information is scattered across too many tools and they cannot find decision-making evidence" vs. "Many engineers complain about too many interruptions" — these are two completely different product directions.

**Estimated time:** 1 day (3-4 hours of focused browsing and synthesis)

---

### Action 3: Search Keyword Validation

**Goal:** Verify whether real search demand exists — are users actively looking for solutions.

**Specific steps:**

1. Search the following types of keywords on Google (use incognito mode to avoid personalized results), recording the number of ads on the first search results page and the types of organic results:

   **Meeting summaries direction:**
   - `meeting notes tool for remote teams`
   - `automatic meeting summary software`
   - `how to take meeting notes effectively`
   - `async standup tool for distributed team`
   - `meeting transcription app comparison`

   **Document collaboration direction:**
   - `Notion alternative for remote teams`
   - `collaborative document tool async`
   - `team wiki software distributed team`
   - `documentation tool for remote-first company`
   - `Google Docs vs Notion for team`

   **Communication / Productivity direction:**
   - `reduce meetings remote team`
   - `remote team productivity tool`
   - `async communication tool for distributed teams`
   - `timezone overlap tool remote team`
   - `remote team burnout reduce tool`

2. For each keyword, record:
   - Whether the first page of search results has ads (ads = a market with willingness to pay)
   - What type are the top 3 organic results (product page? comparison article? forum discussion?)
   - If there are forum discussions (Reddit, HN, etc.), what are users' specific complaints?
3. On Reddit (r/remotework, r/productivity, r/SaaS), Hacker News (Algolia search), and relevant communities, search the same keywords and record the number of posts and reply activity from the last 12 months.

**Estimated time:** 1-2 days

---

## 13. External Evidence Gaps

### External Evidence Connection Status

| Source | Status | Notes |
|---|---|---|
| Case Library | not_connected | Similar case library not used |
| Competitor Research | not_connected | Automated competitor research not used |
| Keyword Research | not_connected | Keyword research not used |
| Pricing Lookup | not_connected | Pricing benchmark query not used |
| Decision History | not_connected | Historical decision records not used |
| MCP Tools | not_connected | No MCP tools invoked |

### Current Gaps

- **Competitor information still needed:** Specific negative review content for competitors on G2/Capterra; competitor pricing pages and user scale; competitor feature differentiation matrix
- **Search keywords still needed:** Long-tail search terms, search volume, and competition level for each of the three possible directions (meeting summaries, document collaboration, async communication)
- **User behavior evidence still needed:** Real remote workers' daily workflow records; at what moments and for what reasons they switch tools; what new tools they have tried in the past 6 months
- **Similar cases still needed:** Historical success and failure cases of "remote collaboration tools going from 0 to 1"; similar cases of "narrowing a vague idea to a specific product"
- **Pricing benchmarks still needed:** Typical pricing ranges for remote collaboration tools; price anchors for individual, team, and enterprise tiers; gap between actual user payment amounts and listed prices
- **Historical review records still needed:** How previously evaluated vague product ideas were handled; outcomes of similar "S01 and S06 both low" cases

### Manual Research Keywords

```
🔍 Manual research keywords:
- S01 Trigger Scenarios → "remote team daily standup pain", "async meeting frustration", "distributed team coordination problem", "remote work moment of frustration"
- S02 Pain Point Intensity → "I hate [remote tool name]", "remote collaboration sucks", "why is remote work so hard", "remote team communication failure"
- S05 Willingness to Pay → "best paid tool for remote teams", "remote team software budget", "is [tool] worth the price", "[tool] pricing too expensive alternative"
- S06 User Groups → "remote engineering team workflow", "distributed product team tools", "remote startup founder stack", "remote HR team coordination"
- S07 Acquisition Paths → "remote work tools reddit recommendation", "best tools for remote teams 2025", "remote team software comparison", "must have tools for distributed teams"
```

### Recommended External Tools

If MCP is connected in the future, prioritize using:

- `product_route.case_search` — Search for similar cases of "vague idea → narrowed direction"
- `product_route.competitor_search` — Automated competitor research (user reviews, pricing, feature differentiation for Notion, Slack, Zoom, Fireflies.ai, etc.)
- `product_route.keyword_search` — Search volume query for keywords (search demand validation for the three directions above)
- `product_route.pricing_lookup` — Pricing benchmark query for remote collaboration tools
- `product_route.history_query` — Historical decision query (evaluation records for similar vague ideas)

> **The core Skill does not depend on external services to function. External case libraries, competitor databases, keyword databases, and MCP tools are only used to improve evidence coverage and confidence.**

---

## 14. JSON Result

```json
{
  "schema_version": "0.1.0",
  "skill_version": "0.1.0",
  "runtime_language": "en",
  "evidence_mode": "manual_only",
  "mcp_enabled": false,
  "idea": "I want to build a tool to improve remote team efficiency. Might be collaboration, documentation, or meeting summaries. I haven't decided what specifically to build yet, but I feel like remote teams have a lot of pain points.",
  "main_route": "R09",
  "main_route_label": "Insufficient Information, Research First",
  "secondary_route": "",
  "secondary_route_label": "",
  "confidence": "D",
  "scores": {
    "trigger_clarity": 2,
    "pain_strength": 1,
    "usage_frequency": 2,
    "alternative_maturity": 4,
    "payment_evidence": 1,
    "user_clarity": 1,
    "acquisition_clarity": 1,
    "delivery_complexity": 3,
    "liability_risk": 2,
    "maintenance_cost": 3,
    "reuse_value": 2,
    "stage_fit": 1
  },
  "risk_gates": [],
  "matched_rules": [
    "Hard Rule 5: S06 <= 2 (score=1) → R09",
    "Hard Rule 6: S01 <= 2 (score=2) → R09",
    "Hard Rule 9: Majority of critical dimensions at C/D confidence (5/5 critical dimensions at D level) → R09",
    "E03: 5 out of 5 critical dimensions at evidence level D (S01=D, S02=D, S05=D, S06=D, S07=D) → R09"
  ],
  "blocked_by": [
    "Product direction undefined — cannot evaluate any specific hypothesis",
    "User group too broad — 'remote teams' is not a user segment",
    "Trigger scenario completely missing — do not know at what moment users would use the product",
    "No user behavior evidence whatsoever — all scores based on intuition, not data"
  ],
  "next_action": "Complete 3 minimum-cost validation actions (user interviews, competitor negative review mining, search keyword validation). Use the collected evidence to re-narrow the product direction, target users, and trigger scenarios, then re-evaluate. Do not engage in any product development before this.",
  "do_not_build": [
    "Do not write any code — not even an MVP prototype; writing code when the direction is unknown is waste",
    "Do not build a competitor feature matrix — without your own value proposition, competitor analysis only misleads",
    "Do not register domain / design logo / name the product — false progress increases sunk cost",
    "Do not draw prototypes / design mockups — without a hypothesis there is nothing to test",
    "Do not ask friends for opinions — positive feedback from friends is false validation",
    "Do not pay attention to funding news — others' success does not validate your direction",
    "Do not research all three directions simultaneously — pick one and go deep, or all three will be shallow"
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

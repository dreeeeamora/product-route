# Example Assessment: Stripe Payment Management Dashboard

## Product Idea

Build a payment management SaaS that lets small e-commerce merchants manage refunds, billing, customers, and subscriptions on top of Stripe. Do not process payments ourselves — only build a management layer on top of Stripe.

---

## 1. Product Idea Restated

> Restate the product idea in one sentence to confirm understanding.

**Idea:** Build a Stripe management dashboard for small e-commerce merchants, wrapping Stripe's complex APIs for refunds, billing, customers, and subscriptions, providing a simplified unified management interface. Do not process payments ourselves and do not replace Stripe.

---

## 2. Target Users

- **Small e-commerce merchants**: Using Shopify, WooCommerce, or self-built e-commerce sites, with monthly transaction volumes in the hundreds to thousands range
- **Independent SaaS founders**: Using Stripe for payments, needing to manage subscriptions and customers but not wanting to go into the Stripe Dashboard every time
- **Micro-teams**: 1-5 person e-commerce operations teams without dedicated finance staff, needing one person to quickly handle refunds and reconciliation

Typical persona: Xiao Wang runs a Shopify store selling handmade leather goods, with 300-500 orders per month, using Stripe for payments. Every time he needs to process a refund or check a customer's subscription status, he spends ages searching through Stripe's complex Dashboard. He wants a simpler interface.

---

## 3. Trigger Scenarios

Users would think of using this product in the following specific scenarios:

1. **Customer requests a refund**: A customer emails saying "I want a refund." The merchant needs to quickly find that transaction and execute the refund. Stripe Dashboard's refund flow involves multiple clicks and confirmations; the merchant wants a more intuitive refund interface.

2. **End-of-month reconciliation**: At month-end, need to see this month's revenue, total refunds, and fee breakdown. The merchant currently needs to export CSV from Stripe and manually organize it in Excel, and wants a clear billing summary dashboard.

3. **Customer asks about subscription status**: A customer asks "Am I still subscribed? When is my next charge?" The merchant needs to quickly look up customer info and subscription cycle. Stripe Dashboard's customer and subscription data are scattered across different pages.

4. **Subscription modification**: A customer requests a subscription upgrade/downgrade; the merchant needs to operate Stripe's subscription update API. Currently requires switching between multiple menus in the Stripe Dashboard.

5. **Transaction anomaly investigation**: A transaction shows pending or failed; the merchant needs to view details and decide whether to retry or cancel.

---

## 4. Evidence Table

| ID | Type | Source Type | Content | Confidence | Supported Scoring Dimensions |
|---|---|---|---|---|---|
| E001 | Positive Evidence | competitor_observation | ProfitWell, Baremetrics, ChartMogul, Littledata, and other Stripe upper-layer tools have large numbers of paying users, proving that a "Stripe management enhancement layer" has an independent market | A | S04, S05 |
| E002 | Positive Evidence | web_research | On Stripe's official forums and Reddit r/stripe, large numbers of small merchants report that the Stripe Dashboard is "too complex," "can't find the refund button," and "reconciliation is painful" | B | S02, S06 |
| E003 | Positive Evidence | competitor_observation | Stripe App Marketplace has 100+ third-party management apps; "refund management," "subscription management," and "customer insights" category apps have thousands of installs | B | S01, S07 |
| E004 | Positive Evidence | web_research | Stripe API documentation is comprehensive, with mature SDKs (Node.js, Python, Ruby, etc.); wrapping development cost is manageable | B | S08 |
| E005 | Positive Evidence | competitor_observation | Chargebee, Recurly, and other subscription management tools generate tens of millions in annual revenue, proving that "simplified payment/subscription management" is a validated market need | A | S04, S05 |
| E006 | Negative Evidence | competitor_observation | Stripe's official Dashboard continues to improve; multiple updates to the refund flow and Revenue Recognition feature in 2025-2026 may compress the space for third-party wrappers | B | S02, S04 |
| E007 | Negative Evidence | manual | Product functionality is highly dependent on Stripe API stability and permissions; the product may be affected if Stripe changes its API or restricts permissions | C | S08, S10 |
| E008 | Negative Evidence | web_research | Some Stripe third-party tools (e.g., ProfitWell's free tier) were forced to pivot or shut down due to Stripe's official feature enhancements | B | S02, S04 |
| E009 | Positive Evidence | manual | Reasonable inference: small e-commerce merchants typically do not have dedicated finance staff; Stripe Dashboard's "finance-grade" interface does not match their usage habits | C | S02, S06 |

---

## 5. Counter-Evidence Table

| ID | Counter-Evidence / Risk | Impact | Confidence |
|---|---|---|---|
| CE001 | Stripe's official Dashboard functionality continues to improve and may gradually cover the core value of third-party wrappers | S02 pain point may weaken over time; S04 alternatives become stronger | B |
| CE002 | Dependency on Stripe API availability and rate-limiting policies — if Stripe goes down, the product is completely unavailable | S09 liability risk increases (though not your fault, users will blame you); S10 maintenance requires monitoring Stripe status | A |
| CE003 | Stripe API version upgrades may introduce breaking changes, requiring ongoing tracking | S10 maintenance cost increases; each API upgrade may require adaptation | B |
| CE004 | ProfitWell, Baremetrics, ChartMogul, and other competitors have mature features and established brand recognition | S04 alternatives are mature; S05 users may choose well-known brands over a new tool | A |
| CE005 | Some small merchants believe Stripe Dashboard is already "good enough" and don't need an additional paid tool | S02 pain point may be overestimated; S05 payment willingness may be lower than expected | B |
| CE006 | Obtaining Stripe API sensitive permissions (refund operations) requires high user trust; trust-building cycle for new products is long | S07 acquisition path blocked; users unwilling to grant Stripe sensitive permissions to a new tool | B |

---

## 6. Scoring Table

| Dimension ID | Dimension | Score | Basis | Anchor Hit | Confidence |
|---|---|---|---|---|---|
| S01 | Trigger Scenario Clarity | 4 | Customer refund requests, end-of-month reconciliation, subscription status queries, transaction anomaly investigation — all are predictable externally-driven events | Can cite clear trigger events, such as payment received, customer complaint | B |
| S02 | Pain Point Strength | 4 | Stripe Dashboard is overly complex; small merchants handle refunds and reconciliation inefficiently. Not using it affects customer experience and operational efficiency | Affects operations, delivery, or customer experience if not used | B |
| S03 | Usage Frequency | 3 | Small merchants process 2-5 refunds per week on average, check reconciliation 1-2 times per week, and make several customer subscription queries per week | 1-3 times per week | B |
| S04 | Alternative Maturity | 4 | Stripe Dashboard itself, ProfitWell, Baremetrics, ChartMogul, Chargebee, Recurly are all mature competitors, but each has flaws (too expensive, too complex, not focused on small merchants) | Mature competitors exist; users have payment habits; but differentiation space remains | A |
| S05 | Payment Willingness Evidence | 4 | ProfitWell paid tiers, Baremetrics (from $108/month), ChartMogul, and other competitors prove users are willing to pay for Stripe upper-layer management tools | Competitors have many paying users; market is validated | A |
| S06 | User Group Clarity | 3 | Small e-commerce merchants, independent SaaS founders, micro operations teams — persona is describable, but lacking interview and survey data support | Can describe a specific persona | B |
| S07 | Acquisition Path Clarity | 3 | Stripe App Marketplace distribution + SEO keywords ("Stripe refund management," "Stripe billing dashboard," "simplify Stripe") | Has 1-2 verifiable acquisition paths | B |
| S08 | Delivery Complexity | 3 | 1-3 months, 1-2 people. Core work is calling Stripe API + building a management interface. No payment infrastructure, no PCI compliance layer, no settlement system needed | 1-3 months, requires 1-2 people | B |
| S09 | Liability Risk | 3 | Product does not process payments itself, but the accuracy of data displayed in the management interface has medium impact — displaying incorrect refund status could cause merchant misoperation. Stripe is responsible for fund security; the wrapper layer is responsible for display accuracy | Medium impact (e.g., inaccurate data, short-term service interruption) | B |
| S10 | Maintenance Cost | 3 | Requires ongoing attention to Stripe API version changes, security patches, and Dashboard iteration. No 24/7 on-call or SLA commitment needed | Requires ongoing attention, with periodic maintenance needs | B |
| S11 | Reuse Value | 3 | Core is Stripe-specific wrapping, but some UI components (billing table, refund flow, customer search, status panel) can be reused for other payment management scenarios | Some modules are reusable | B |
| S12 | Current Stage Fit | 3 | Tech stack matches (Web application + API wrapping), but requires learning Stripe API details and payment domain knowledge. Resources are basically in place, but recommend validating demand first | Basically aligns, but requires learning new skills | B |

---

## 7. Confidence Penalty

| Dimension | Original Score | Capped Score | Reason | Evidence Level |
|---|---|---|---|---|
| S02 | 4 | 4 | Has B-level evidence support (Stripe forums, Reddit discussions); no penalty | B |
| S06 | 3 | 3 | Persona is describable but lacks A-level evidence (missing user interviews); original score is already 3, does not trigger cap | B |

> S01, S04, S05 have A/B-level evidence support; all remaining dimensions are B-level. No dimension triggers E01 (cap at 3) or E02 (cap at 2) penalty. However, overall evidence is mostly indirect evidence (competitor observation + public discussions), lacking direct user interviews and real payment validation.

**Overall Confidence Rating:** B (Medium-High) — Key dimensions (S01, S02, S05, S06, S07) all have B-level or above evidence support, but lack A-level direct evidence (user interviews, real payment validation). Competitor observation provides sufficient market signals, but cannot substitute for direct validation with the target user group "small e-commerce merchants."

---

## 8. Risk Gates

### Triggered Risk Gates

> This product does not trigger any risk gates. S09 (Liability Risk) = 3 and S08 (Delivery Complexity) = 3, neither meeting the trigger threshold (requires both >= 4).

(No triggered risk gates)

### Untriggered Risk Gates

| Gate ID | Name | Why Not Triggered |
|---|---|---|
| **G01** | **Payment & Fund Risk** | **Checked, but not triggered.** This is a key teaching point of this assessment: the product involves payment-related terminology (refunds, billing, subscriptions), so G01 must be checked. However, the product does not process payments itself, does not store payment information, does not calculate funds, and does not manage account balances. All payment processing is done by Stripe; the product only provides a management display layer. **Wrapping a payment management layer ≠ building your own payment system.** This is precisely the core logic of the R04 Third-Party Wrapper route: leverage mature underlying services, provide a simplified experience on top, rather than replace the underlying layer. Risk narrowing recommendation: Use Stripe API read-only + operation permissions; do not store credit card information; do not bypass Stripe to process any funds. Clearly state in the user disclaimer that "this product does not process payments; all fund operations are executed by Stripe." |
| G02 | Authentication Risk | The product itself requires user registration and login, but can use mature solutions like Auth0 / Clerk / Supabase Auth; no need to build an auth system from scratch. Permission management is limited to the product's own user roles, not involving Stripe account permission systems. |
| G03 | Email Deliverability Risk | Not a core email sender. The product may send notification emails (refund completion alerts, etc.), but email is not a core feature; can use mature services like Resend / SendGrid. |
| G04 | Privacy & Compliance Risk | The product displays Stripe customer and transaction data, which is a read-only display layer. Does not additionally collect or store sensitive personal data. User data (Stripe account association) is authorized via Stripe OAuth; data security boundaries are controlled by Stripe. |
| G05 | Video, Storage, Bandwidth Risk | Does not involve video, large file storage, or high-bandwidth content delivery. |
| G06 | Core Notification Risk | Notifications are auxiliary features (refund completion alerts, etc.), not a core dependency. Notification delays do not affect the product's core value. |
| G07 | Customer Support Reliability Risk | The product is a management tool, not a customer support system itself. |
| G08 | Deployment & Infrastructure SLA Risk | Standard Web application deployment (Vercel / Railway / Fly.io); no high-availability architecture, auto-scaling, or multi-region deployment needed. |

---

## 9. Route Determination

**Main Route:** R04 — Third-Party Wrapper / Integration Layer

**Secondary Route:** R02 — Shelf Service (can be standardized for self-service purchase, operated as a long-term shelf product)

**Matched Route Rules:**

- **Route Rule 8:** S04 >= 4 (multiple mature competitors) AND S05 >= 3 (clear payment willingness) AND S08 <= 3 (delivery manageable) → May consider R02 Shelf Service. This explains why R02 is the secondary route.
- **R04 fit conditions met:** The underlying Stripe API is powerful but complex (S04 >= 4); mature third-party services exist; core value lies in simplification, integration, and unified management interface; no need to build a payment layer from scratch.
- **Hard rule check:** S09 (3) and S08 (3) both below >= 4, do not trigger R07. S02 (4) and S03 (3) do not trigger Rule 2 (requires S03 <= 2). All hard rules checked; no mandatory route override.

**Why Not Other Routes:**

- **R01 Entry Tool**: S05 (Payment Willingness) = 4; users are willing to pay; not suitable as a free entry tool. Moreover, delivery complexity S08 = 3 exceeds the entry tool lightweight threshold (S08 <= 2). This is not a product that can acquire users via SEO free tools and monetize through ads.
- **R02 Shelf Service**: Meets R02 conditions (S04 >= 4, S05 >= 3, S08 <= 3); can operate as standardized SaaS. However, the product's core value is essentially "wrapping Stripe's complex APIs" rather than providing a new service independent of Stripe. R04 more accurately describes the product's technical nature. R02 is a reasonable secondary route — if the management layer's independent value (better UX, faster workflows, simplification for small merchants) is strong enough, R02 could be upgraded to the main route.
- **R03 Internal Infrastructure**: Targets external paying users, not an internal tool. S11 (Reuse Value) = 3, not a high-reuse infrastructure type.
- **R05 Sales-Led Service**: Small e-commerce merchants have low per-customer value; no need for custom onboarding, contract negotiation, or manual training. The product should be standardized and self-service.
- **R06 Content or Community Product**: Core value is tool functionality (management dashboard), not content or community. No content or community attributes.
- **R07 High-Risk Infrastructure, Hold**: S09 = 3, S08 = 3, do not trigger R07's hard conditions (requires both >= 4). The product does not build a payment gateway, does not store credit card information, and does not process fund settlement. **This is precisely the key teaching point of this assessment: wrapping Stripe is not building a payment system. R07 exists to intercept ideas like "build a complete payment processing platform," not ideas like "build a Stripe management dashboard."**
- **R08 Better as a Feature**: As an independent product, user-perceived value is sufficient — merchants need a dedicated interface for payment management, not just a tab added to an existing product. The Stripe App Marketplace has numerous independent management apps proving independent value.
- **R09 Insufficient Information, Research First**: Key dimensions (S01, S02, S05, S06, S07) have evidence levels distributed at A/B, not meeting R09 trigger conditions (requires 3 or more D-level). No further research needed before making a route decision.

---

## 10. MVP Boundary

**What the first version does only:**

1. **Refund management dashboard**: List recent transactions, support searching by customer email/transaction ID, one-click full or partial refund initiation, display refund status
2. **Billing overview dashboard**: This month's revenue, total refunds, fee summary, simple daily/weekly/monthly trend charts
3. **Customer list and search**: Display Stripe customer list, view customer details (transaction history, current subscriptions, invoice records)
4. **Subscription list and status management**: Display all active/canceled subscriptions, visual management of subscription cycles and plan information

**Explicitly out of scope:**

1. No payment processing — no acquiring, no settlement, no fund handling
2. No PCI-DSS compliance layer — no credit card information storage
3. No multi-payment-channel aggregation (PayPal, Alipay, etc.) — first version supports Stripe only
4. No automated financial reconciliation and accounting system integration
5. No advanced analytics (MRR, Churn, LTV prediction)

> ⚠️ **Anti-pattern warning: Do not overbuild this product into a payment platform.** The product's value lies in "making Stripe easier to use for small merchants," not "building a better Stripe than Stripe." Every time you want to add a new feature, first ask yourself: "Does Stripe itself already do this?" If Stripe already does it, only wrap and simplify — do not rebuild. If you find yourself writing payment processing logic, PCI compliance code, or settlement ledgers, stop immediately — you have crossed the line.

**Third-party service dependencies:**

| Service | Purpose | Alternative |
|---|---|---|
| Stripe API | All payment data source, refund operations, customer management, subscription management | None (product is positioned as Stripe-specific) |
| Auth0 / Clerk | User authentication | Supabase Auth, NextAuth |
| Vercel / Railway | Application deployment and hosting | Fly.io, Render |
| Resend | Notification emails (refund completion, reconciliation reminders) | SendGrid, Postmark |
| Upstash / Redis | Stripe API response caching (reduce API call frequency) | Self-hosted Redis |

**Responsibilities not committed:**

1. No commitment to payment processing SLA — payment availability is Stripe's responsibility; the product clearly indicates Stripe system status on the status page
2. No commitment to fund security — all fund operations are completed on Stripe's side; the product does not touch the fund flow
3. No commitment to data real-timeness — data is fetched from Stripe API; caching delays may exist (clearly indicate update time)
4. No commitment to Stripe API compatibility — Stripe API upgrades may cause temporary product unavailability; clearly stated in terms of service

---

## 11. Do-Not-Build List

1. X **Do not build a payment processing system** — No acquiring, no settlement, no fund handling, no Stripe Connect fund flow management. Stripe already does this and does it well. Your value is simplifying the management experience, not rebuilding payment infrastructure.
2. X **Do not pursue PCI-DSS compliance certification** — Do not store credit card numbers, CVV, or complete card information. All sensitive payment data is managed and protected by Stripe.
3. X **Do not aggregate multiple payment channels** — First version does not support unified management of PayPal, Alipay, WeChat Pay, or other channels. Focus on Stripe; avoid getting lost in each channel's API differences.
4. X **Do not build automated finance/accounting systems** — Do not generate tax reports, do not do double-entry bookkeeping, do not integrate QuickBooks/Xero. These are a different product direction (finance SaaS) with complexity far beyond a payment management layer.
5. X **Do not build Stripe Connect platform management** — Do not handle marketplace fund splitting, do not manage Connect account onboarding workflows. Connect's complexity far exceeds regular Stripe account management and belongs to a different product direction.
6. X **Do not build an advanced data analytics engine** — Do not calculate MRR, ARR, Churn Rate, LTV, or Cohort Analysis. These are ProfitWell / Baremetrics' core domain; they do it well. Your product can do simple summary displays, but not predictive models.
7. X **Do not build a Stripe alternative or competitor** — Do not provide independent payment processing capability. The product is always a layer on top of Stripe, never a Stripe replacement. If Stripe shuts down its API one day, the product has no reason to exist. Honestly face this dependency in the business plan.

---

## 12. Minimum-Cost Validation Actions

### Action 1: Stripe Dashboard Pain Point Interviews

**Goal:** Validate whether small e-commerce merchants truly find the Stripe Dashboard inadequate, and what their most painful features are

**Specific Steps:**
1. Post in Shopify Community, Reddit r/stripe, Indie Hackers: "As a small e-commerce merchant, what is the most painful part of using the Stripe Dashboard for refunds and reconciliation?"
2. Filter replies for 3-5 merchants willing to chat; schedule 15-minute video or text interviews
3. Focus questions: How do you currently handle refunds? (Screen recording is best) How many times a week do you use the Stripe Dashboard? How much would you pay for a simplified management dashboard?
4. Compile interview notes; confirm whether the most painful features align with MVP assumptions

**Estimated Time:** 2 days

---

### Action 2: Stripe API Permission Verification & Technical Prototype

**Goal:** Verify whether Stripe API can support all MVP-listed features, and the real scope of development cost

**Specific Steps:**
1. Register a Stripe test account; create test data (50+ transactions, 20+ customers, 10+ subscriptions)
2. Build a minimal prototype: a simple web page using Stripe Node.js SDK to call the following APIs:
   - List refunds + create refund
   - List customers + retrieve customer
   - List subscriptions + update subscription
   - List payment intents + balance transactions
3. Record each API's permission requirements, call rate limits, response times, and data completeness
4. Estimate how much additional development is needed from prototype to MVP

**Estimated Time:** 2 days

---

### Action 3: Stripe App Marketplace Competitor Scan + Pricing Validation

**Goal:** Confirm market space and pricing anchors

**Specific Steps:**
1. Browse the Stripe App Marketplace; list all "refund management," "billing management," "customer management," and "subscription management" category apps
2. For each competitor, record: install count, rating, review content (especially unmet needs mentioned in negative reviews), pricing
3. Search Google for "Stripe refund management tool," "Stripe billing dashboard," "simplify Stripe dashboard," "best Stripe analytics for small business"; record competitors in search results and estimated search volume
4. Compile a competitor matrix (features vs. pricing vs. target users); confirm whether your differentiated positioning (small merchants + simplified experience + lower price) has room

**Estimated Time:** 1.5 days

---

## 13. External Evidence Gaps

### External Evidence Connection Status

| Source | Status | Description |
|---|---|---|
| Case Library | not_connected | Not used similar case library |
| Competitor Research | not_connected | Not used automatic competitor research |
| Keyword Research | not_connected | Not used keyword research |
| Pricing Lookup | not_connected | Not used pricing benchmark query |
| Decision History | not_connected | Not used historical decision records |
| MCP Tools | not_connected | No MCP tools invoked |

### Current Gaps

- **Missing competitor information:** Actual install counts, monthly active users, and pricing strategies of competitors on the Stripe App Marketplace. Specific pricing and usage data for ProfitWell / Baremetrics / ChartMogul targeting small merchants.
- **Missing search keywords:** Search volume and competition for keywords like "Stripe refund management," "Stripe dashboard alternative for small business," "simplify Stripe billing," "Stripe subscription manager for Shopify."
- **Missing user behavior evidence:** Specific behavioral data on small merchants using the Stripe Dashboard — what proportion of merchants process refunds weekly? How much time do they spend on the Stripe Dashboard on average? How many merchants have installed third-party Stripe management apps?
- **Missing similar cases:** Are there success cases of other Stripe wrapping tools starting from small features? Are there lessons learned from similar product failures?
- **Missing pricing benchmarks:** Baremetrics, ChartMogul, ProfitWell minimum pricing and paid conversion rates. The monthly fee range small e-commerce merchants are willing to pay for a "simplified Stripe Dashboard."
- **Missing historical review records:** Have there been previous project assessments similar to "build a management layer wrapper for XX API"? What experiences can be reused?

### Manual Research Keywords

```
🔍 Manual Research Keywords:
- S02 Pain Point Strength → "Stripe dashboard too complex", "Stripe refund process painful", "Stripe billing management for small business"
- S04 Alternatives → "Stripe management tools", "Stripe dashboard alternative", "Stripe App Marketplace billing apps"
- S05 Payment Willingness → "ProfitWell pricing", "Baremetrics pricing small business", "ChartMogul pricing", "Stripe analytics tool cost"
- S06 User Group → "small ecommerce Stripe user pain points", "Shopify Stripe refund workflow", "WooCommerce Stripe management"
- S07 Acquisition Path → "Stripe refund management tool" search volume, "best Stripe dashboard" Google Trends, Stripe App Marketplace traffic
```

### Recommended External Tools

If MCP is connected in the future, prioritize using:

- `product_route.case_search` — Search for "third-party API wrapper" and "payment management layer" similar cases
- `product_route.competitor_search` — Automatically research Stripe App Marketplace competitors
- `product_route.keyword_search` — Query search volume for keywords like "Stripe refund management"
- `product_route.pricing_lookup` — Query Baremetrics, ChartMogul, ProfitWell pricing benchmarks
- `product_route.history_query` — Query whether there are historical assessments of similar API wrapper layer products

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
  "idea": "Build a payment management SaaS that lets small e-commerce merchants manage refunds, billing, customers, and subscriptions on top of Stripe. Do not process payments ourselves — only build a management layer on top of Stripe.",
  "main_route": "R04",
  "main_route_label": "Third-Party Wrapper / Integration Layer",
  "secondary_route": "R02",
  "secondary_route_label": "Shelf Service",
  "confidence": "B",
  "scores": {
    "trigger_clarity": 4,
    "pain_strength": 4,
    "usage_frequency": 3,
    "alternative_maturity": 4,
    "payment_evidence": 4,
    "user_clarity": 3,
    "acquisition_clarity": 3,
    "delivery_complexity": 3,
    "liability_risk": 3,
    "maintenance_cost": 3,
    "reuse_value": 3,
    "stage_fit": 3
  },
  "risk_gates": [],
  "matched_rules": [
    "Route Rule 8: S04>=4 AND S05>=3 AND S08<=3 → May consider R02 Shelf Service",
    "R04 fit conditions: Underlying Stripe API is complex + Mature third-parties exist + Core value is simplification and integration + No need to build from scratch"
  ],
  "blocked_by": [],
  "next_action": "First do Stripe Dashboard pain point interviews + Stripe API technical prototype validation + Competitor scan, confirm core pain points and differentiation space before starting MVP development. MVP scope: Refund management + Billing overview + Customer search + Subscription list. Strictly prohibit crossing the line into payment processing.",
  "do_not_build": [
    "Payment processing system (no acquiring, no settlement, no fund handling)",
    "PCI-DSS compliance layer (no credit card information storage)",
    "Multi-payment-channel aggregation (PayPal, Alipay, etc.)",
    "Automated finance/accounting system (QuickBooks/Xero integration, tax reports)",
    "Stripe Connect platform management",
    "Advanced data analytics engine (MRR/ARR/Churn/LTV prediction)",
    "Stripe alternative or independent payment processing capability"
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

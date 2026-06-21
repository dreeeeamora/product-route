# Example Assessment: Enterprise SSO Unified Integration Service

## Product Idea

A unified SSO integration service for SME SaaS products. Help them connect to their customers' Okta, Azure AD, and Google Workspace identity systems. Includes SAML/OIDC configuration, permission mapping, and audit logging.

---

## Target Users

- B2B SaaS product teams (10-100 employees) selling to enterprise customers
- Typical persona: a SaaS founder/CTO who just signed their first enterprise customer, and the customer's IT department sends a 20-page security questionnaire where the first question is "Do you support SAML 2.0 SSO?"
- SaaS companies that have already obtained or are preparing for SOC 2 / ISO 27001 certification
- B2B SaaS startups in incubators such as YC / Techstars

---

## Trigger Scenarios

- A SaaS product signs its first enterprise customer, and the customer's IT department requires login via Okta/Azure AD, otherwise the contract won't be signed
- The enterprise customer's procurement/security team sends a security assessment questionnaire, where SSO support is a hard prerequisite
- A SaaS product needs to pass SOC 2 Type II audit, and the auditor requires proof of SSO configuration and audit logs
- An existing enterprise customer requests adding a new identity provider (e.g., expanding from Okta to Azure AD)
- The enterprise customer's internal security audit discovers that the SaaS product does not support SSO, and demands remediation within a deadline or else termination of cooperation

---

## Evidence Table

| ID | Type | Source Type | Content | Confidence | Supported Scoring Dimensions |
|---|---|---|---|---|---|
| E001 | Positive Evidence | competitor_observation | WorkOS is a direct competitor, pricing starts at $99/month (SSO), $249/month (enterprise), having raised multiple rounds of funding, proving the market is validated | B | S04, S05 |
| E002 | Positive Evidence | competitor_observation | Auth0 Enterprise prices SSO as a premium feature separately, Clerk's enterprise tier also provides SAML/OIDC integration, indicating enterprise customers are willing to pay for SSO | B | S05 |
| E003 | Positive Evidence | web_research | Okta Businesses at Work annual report: large enterprises use an average of 89 SaaS applications, SSO is a standard requirement for enterprise SaaS access management | B | S01, S02 |
| E004 | Positive Evidence | web_research | Multiple SaaS products (Notion, Linear, Figma, Vercel) make SSO a core feature of their Enterprise pricing tier, with annual price differences reaching thousands of dollars | B | S05 |
| E005 | Positive Evidence | web_research | SOC 2 Type II audit standards explicitly require access control and audit logging, and SSO is the standard way to fulfill this requirement | B | S01, S02 |
| E006 | Positive Evidence | web_research | Community discussions (Hacker News, /r/SaaS, Indie Hackers) contain numerous developer complaints about SAML integration complexity: "Adding SAML SSO was the worst 3 months of my dev life" | B | S02 |
| E007 | Positive Evidence | manual | The SAML protocol specification itself is complex (XML signatures, certificate management, metadata exchange), requiring handling of dialect differences across IdPs (Okta vs Azure AD vs Google behavior is not entirely consistent) | C | S08, S10 |
| E008 | Positive Evidence | competitor_observation | WorkOS official documentation explicitly lists unique configuration steps for each IdP, up to 20+ steps, validating the judgment that "every customer needs customized configuration" | B | S08 |

---

## Counter-Evidence Table

| ID | Counter-Evidence / Risk | Impact | Confidence |
|---|---|---|---|
| CE001 | WorkOS is a mature and well-funded direct competitor with brand recognition and a developer community, making differentiation difficult for new entrants | S04 Alternative Maturity, S05 Willingness to Pay (users may choose WorkOS over a new service) | B |
| CE002 | Auth0 / Clerk themselves also provide SSO functionality; some SaaS companies may use the built-in SSO of these platforms directly rather than purchasing an additional integration service | S04 Alternative Maturity, customers may not need a separate service layer | B |
| CE003 | SSO integration is inherently a one-time setup + occasional maintenance; after 6-12 months, customers may no longer need to keep paying → high churn risk | S03 Usage Frequency, S10 Maintenance Cost (need continuous customer acquisition to offset churn) | B |
| CE004 | Enterprise sales cycles are long (3-6 months), involving security reviews, legal review, and procurement processes → cash flow pressure, not suitable for teams with limited resources | S07 Acquisition Path, S12 Stage Fit | B |
| CE005 | Different IdPs continuously update (Okta redesign, Azure AD upgrading to Entra ID), each change could break existing integrations → hidden maintenance burden | S10 Maintenance Cost | B |
| CE006 | If configuration errors cause incorrect permission mapping, it could result in unauthorized access (User A seeing User B's data) → serious security incident | S09 Liability Risk | B |

---

## Scoring Table

| Dimension ID | Dimension | Score | Basis | Anchor Point Hit | Confidence |
|---|---|---|---|---|---|
| S01 | Trigger Scenario Clarity | 4 | Enterprise customers requiring SSO, SOC 2 audit requirements, customer IT department security questionnaires — all are predictable externally-forced events | Can name clear trigger events: signing enterprise customers, security audits, customer IT department compliance requirements | B |
| S02 | Pain Point Strength | 4 | No SSO support = losing enterprise customers = direct revenue loss. SAML integration is complex, self-development takes months, delaying customer onboarding | Not using it affects launch, operations, revenue, delivery, or customer experience | B |
| S03 | Usage Frequency | 2 | Initial configuration is a one-time task; subsequent occasional new IdP additions (every few months), permission mapping adjustments (1-3 times per month) | 1-3 times per month | B |
| S04 | Alternative Maturity | 3 | WorkOS exists but is expensive (starts at $99-$249/month); Auth0/Clerk have SSO but are not dedicated services; self-development cost is high and cycle is long | Several competitors exist, but all have significant flaws or are overpriced | B |
| S05 | Willingness to Pay Evidence | 4 | WorkOS has paying enterprise customers; Notion/Linear etc. SSO feature annual price differences of thousands of dollars; SSO is a must-have in enterprise RFPs | Clear payment signals (competitor has many paying users, users directly express willingness to pay) | B |
| S06 | User Group Clarity | 4 | B2B SaaS products targeting enterprise customers (10-100 person teams), founders/CTOs who are signing or have signed enterprise customers, reachable through YC community, SaaS circles | Can describe a specific persona with evidence support | B |
| S07 | Acquisition Path Clarity | 3 | Reach target users through SaaS founder communities (Hacker News, Indie Hackers), search keywords "SSO integration service" "SAML setup for SaaS", enterprise customer reverse referrals | Has 1-2 verifiable acquisition paths | B |
| S08 | Delivery Complexity | 3 | Build configuration management UI + permission mapping + audit log display on top of Auth0/Clerk, without implementing SAML/OIDC protocols ourselves. 1-3 months MVP, 1-2 people | 1-3 months, requires 1-2 people | B |
| S09 | Liability Risk | 4 | Authentication failure or permission mapping errors can cause users unable to log in or unauthorized access, directly impacting customer business. But using mature third-party authentication foundation (Auth0/Clerk), not handling passwords and tokens ourselves | Has serious impact (authentication failure, privacy leakage) | B |
| S10 | Maintenance Cost | 4 | Each enterprise customer requires ongoing support (new IdP integration, permission adjustments, troubleshooting); need to monitor IdP API changes; audit logs require compliant storage | Requires dedicated personnel for maintenance, monitoring, and responding to user issues | B |
| S11 | Reuse Value | 3 | SSO configuration framework, permission mapping model, audit log module can be reused in other scenarios, but lacks inherent platform properties | Some modules can be reused, or can serve as a component for other products | C |
| S12 | Current Stage Fit | 3 | Technically feasible (Auth0/Clerk mature), but requires B2B sales experience and enterprise customer relationships, not suitable for teams with purely technical backgrounds | Basically matches, but needs scope adjustment or learning new skills | C |

---

## Confidence Penalty

### Dimensions Triggering E01 Penalty

No dimensions triggered. All dimensions with scores >= 4 (S01, S02, S05, S06, S09, S10) have at least B-level evidence support.

### Dimensions with C-Level Evidence

| Dimension | Current Score | Evidence Level | Penalty Triggered? | Explanation |
|---|---|---|---|---|
| S11 | 3 | C | No (score <= 3) | Reuse value is based on architectural reasoning, lacking similar product case support |
| S12 | 3 | C | No (score <= 3) | Stage fit is based on self-assessment, lacking external validation |

**Overall Confidence Rating: B (Medium-High)**

Rationale: Key dimensions (S01, S02, S05, S06, S07) all have B-level evidence support, and most non-key dimensions also have B-level evidence. S11 and S12 are C-level but do not affect the routing conclusion. Overall evidence quality meets the B-level standard.

---

## Risk Gates

### Risk Gates Triggered

| Gate ID | Name | Trigger Reason | Narrowing Suggestion |
|---|---|---|---|
| G02 | Authentication Risk | The product involves SSO integration, OAuth/OIDC configuration, permission mapping, and audit logging — directly related to authentication | Use Auth0 / Clerk as the underlying authentication engine, only building the configuration management UI and permission mapping UI ourselves; do not store passwords, do not implement SAML/OIDC protocols, do not manage Session Tokens. Essentially, create a "configuration layer for authentication systems" rather than an "authentication system" itself |
| G04 | Privacy & Compliance Risk | Audit logs record user login behavior (time, IP, actions), potentially involving PII (Personally Identifiable Information), and enterprise customers may require audit logs to meet SOC 2 / HIPAA compliance | In the MVP phase, clearly define the field scope of audit logs, do not collect unnecessary behavioral data; use compliant cloud services for log storage (AWS CloudTrail compatible / encrypted storage); clearly state compliance responsibility attribution in terms of service: compliance bottom-line is borne by the enterprise customer's own IdP (Okta/Azure AD), this service only provides configuration and log display |

### Risk Gates Not Triggered

| Gate ID | Name | Why Not Triggered |
|---|---|---|
| G01 | Payment & Funds Risk | The product does not involve payment processing, fund storage, or account balance management |
| G03 | Email Delivery Risk | The product's core is not email sending; even if there are email notifications, they are not a core function, and mature services like Resend/SendGrid can be used |
| G05 | Video, Storage, Bandwidth Risk | Does not involve video hosting, large file storage, or high-bandwidth content delivery; audit log data volume is low (mainly text) |
| G06 | Core Notification Risk | Does not depend on real-time notifications as a core function |
| G07 | Customer Support Reliability Risk | Does not involve customer service or ticketing systems; customer support can be conducted through standard channels (email/Slack) |
| G08 | Deployment & Infrastructure SLA Risk | Can be deployed on mature platforms like Vercel/Railway; in the MVP phase, no high-availability SLA commitment |

### G02 Special Analysis: Why It Triggers But Does Not Trigger R07

G02 (Authentication Risk) trigger condition is "the product involves user registration, login, permission management, OAuth integration, SSO." This product directly involves SSO integration and permission mapping, so G02 is necessarily triggered.

But R07 (High-Risk Infrastructure, Defer) requires **simultaneously satisfying S09 >= 4 AND S08 >= 4**. This product's S08 = 3 (1-3 months MVP, using Auth0/Clerk as the foundation), which does not meet the dual condition, therefore **R07 is NOT triggered**.

**Core Logic:**

- If "building an authentication system from scratch" (implementing SAML protocol parsing, XML signature verification, Token issuance, password hashing yourself), then S08 >= 4 and S09 >= 4 → triggers R07 → should defer or narrow scope.
- If "building a configuration management UI on top of mature authentication services" (Auth0/Clerk handles authentication, this service handles integration configuration, permission mapping, audit log display), then S08 drops to 3, R07 is not triggered → can proceed, but must explicitly label the dependent third-party services.

**Analogy:** Just like the R04 (Third-party Wrapper) logic — using Stripe for a payment management dashboard (not being a payment gateway), using Vimeo for a video management dashboard (not being a video host). This product uses Auth0/Clerk to build an SSO configuration management dashboard (not being an identity provider).

---

## Routing Decision

**Main Route:** R05 — Sales-led Service

**Secondary Route:** R04 — Third-party Wrapper / Integration Layer

**Triggered Route Rules:**

- **R05 route condition met:** Each enterprise customer uses a different IdP (Okta / Azure AD / Google Workspace), SAML metadata formats vary, permission models differ (RBAC / ABAC / custom roles), compliance requirements differ → **cannot be standardized as self-service purchase, must have sales involvement, requirements communication, custom integration, and integration support.** Meets R05 condition of "requires customized integration + high per-customer price + customers need human service, training, integration support."
- **R04 route condition met (secondary route):** The underlying authentication service is complex and high-risk (S09 = 4), third-party services like Auth0/Clerk are mature (S04 >= 3), the core value of this product lies in simplifying SAML/OIDC configuration complexity, unified management of multiple IdPs, providing visual permission mapping and audit logging → essentially a "configuration layer wrapper for authentication infrastructure." Meets R04 condition of "underlying service is complex, mature third-parties exist, core value is in simplifying integration."

**Hard Rule Check:**

| Rule | Condition | Triggered? | Explanation |
|---|---|---|---|
| Rule 1 (R07) | S09 >= 4 AND S08 >= 4 | No | S09 = 4, S08 = 3 (using Auth0/Clerk foundation reduces complexity) |
| Rule 2 (R02) | S02 >= 4 AND S03 <= 2 AND S09 <= 3 | No | S09 = 4 > 3, does not satisfy S09 condition |
| Rule 3 (R01) | S03 >= 4 AND S02 <= 3 AND S05 <= 2 | No | None of the three conditions are met |
| Rule 4 (R03) | S11 >= 4 AND S07 <= 2 | No | S11 = 3 |
| Rule 5 (R09) | S06 <= 2 | No | S06 = 4 |
| Rule 6 (R09) | S01 <= 2 | No | S01 = 4 |
| Rule 7 (R01) | S05 <= 2 AND S07 >= 4 | No | S05 = 4 |
| Rule 8 (R02) | S04 >= 4 AND S05 >= 3 AND S08 <= 3 | No | S04 = 3 |

No hard routing rules are triggered; the route is determined by the product's essential characteristics (customization requirements, sales involvement) and R05/R04 route conditions.

**Why Not Other Routes:**

- **R01 · Entry Tool:** Strong willingness to pay (S05 = 4), high per-customer price, not a free traffic tool. SSO integration involves deep technical support and sales communication, lacking the characteristics of "low-barrier self-service use." Liability risk S09 = 4 far exceeds R01's safety ceiling.

- **R02 · Shelf Service:** This is the route most prone to misjudgment for this product. On the surface, S02 = 4 (strong pain point) + S03 = 2 (low frequency) looks very much like a typical "low-frequency strong-pain-point shelf service." But **SSO integration cannot be standardized for self-service purchase**, for three reasons: (1) Each enterprise customer uses different IdPs, and Okta and Azure AD's SAML configuration methods are not entirely consistent — you cannot build a standard SaaS that "fills in a form and automatically connects to all IdPs"; (2) Permission mapping requirements vary by customer — one customer uses RBAC, another uses ABAC, and yet another requires department-level fine-grained permissions; (3) Enterprise customer procurement processes inherently require sales communication, security review, and contract negotiation — this is not a product where you "enter a credit card number and start using it." **The core premise of R02 is "standardizable," and SSO integration is inherently a "non-standard product."**

- **R03 · Internal Infrastructure:** User group is clear (S06 = 4), targets external paying customers, has a clear business value proposition, not a "build for ourselves first, then offer to others" internal tool. Acquisition path, though not perfect, is verifiable (S07 = 3).

- **R04 · Third-party Wrapper:** Has R04 characteristics (wrapping Auth0/Clerk), but is not purely a technical wrapper. The core value also requires the human service of "sales consulting + integration support + custom configuration," so R04 is a secondary route rather than the main route. Pure R04 products (such as AI API aggregation routes) can typically be used self-service without sales involvement.

- **R06 · Content or Community Product:** Core value is tools and services, not content or community. Even if content and tutorials can be built around SSO, product revenue does not depend on content; tools and services are the core.

- **R07 · High-Risk Infrastructure, Defer:** S09 = 4 but S08 = 3 (using Auth0/Clerk as foundation), does not satisfy R07's hard trigger condition of S09 >= 4 AND S08 >= 4. G02 is triggered but narrowed via third-party wrapper, not forcing R07.

- **R08 · Feature Only, Not a Standalone Product:** Pain point strength is sufficient (S02 = 4), has an independent paying market (S05 = 4), market size validated by competitors like WorkOS. SSO integration is not an accessory feature of some SaaS product — it is an independent need across all B2B SaaS products, and can absolutely stand alone as a product.

- **R09 · Insufficient Information, Research First:** Key dimensions (S01, S02, S05, S06, S07) all have B-level evidence support, sufficient evidence, no need to defer. Overall confidence is B, meeting the threshold to proceed.

---

## MVP Boundaries

**What the first version will only do:**

1. **SAML 2.0 Configuration UI:** A guided configuration flow based on Auth0/Clerk's SAML connectors. Support Okta and Azure AD — two IdPs. Customer fills in the IdP metadata URL or uploads metadata XML, and the system completes the integration automatically.
2. **Basic Permission Mapping:** Map IdP Groups/Roles to SaaS product roles. Support one-to-one mapping like "IdP `admin` group → SaaS product `Administrator` role." Do not support complex multi-level nested mapping.
3. **Audit Log Read-only Dashboard:** Display who logged in/logged out via which IdP and when. Support filtering by time range and user. Logs are generated by the Auth0/Clerk foundation, this service only does aggregated display.
4. **Single Tenant Configuration Storage:** Each SaaS customer has an independent configuration space, with physical isolation of configuration data and audit logs.

**What will explicitly not be done:**

1. Not implementing SAML protocol ourselves (XML signature verification, Assertion parsing) — fully dependent on Auth0/Clerk's SAML connectors
2. Not implementing OIDC protocol ourselves (Token issuance, refresh token management) — fully dependent on the underlying authentication service
3. Not doing Google Workspace integration (first version only does Okta + Azure AD, covering 80%+ of the enterprise IdP market)
4. Not doing custom IdPs (such as customer self-built Keycloak or Shibboleth) — first version only supports mainstream commercial IdPs
5. Not doing an RBAC policy engine — only simple Group→Role mapping, not implementing complex policy evaluation

**Which third-party services are depended upon:**

| Service | Purpose | Alternatives |
|---|---|---|
| Auth0 or Clerk | SAML/OIDC authentication foundation (protocol implementation, Token management, Session security) | WorkOS (but not equivalent, we need to control the configuration layer ourselves), Keycloak (open source but high maintenance cost) |
| Vercel / Railway | Application hosting | AWS / Cloudflare Pages |
| PostgreSQL (managed) | Configuration data and audit log storage | Supabase |
| Resend / SendGrid | Configuration completion notification emails (non-core) | AWS SES |

**Which responsibilities are not committed to:**

1. No commitment to the SLA of the underlying authentication service — underlying SLA is borne by Auth0/Clerk, this service only commits to the availability of the configuration UI
2. No commitment to compliance guarantee (SOC 2, HIPAA, GDPR) — compliance is jointly ensured by the customer's IdP and the underlying authentication service, this service does not assume the role of compliance auditor
3. No commitment to 7x24 emergency incident response — MVP phase provides support during business hours only
4. No commitment to 100% IdP compatibility — each IdP's behavior differs, first version targets Okta and Azure AD for testing

---

## Do-Not-Build List

1. ❌ **Do not implement SAML/OIDC protocols from scratch** — SAML's XML signature verification, certificate chain validation, Assertion encryption/decryption are extremely error-prone, security-sensitive code. Must use Auth0 or Clerk's ready-made implementations, never self-develop.
2. ❌ **Do not become an Identity Provider (IdP) itself** — Do not do user registration, password hash storage, MFA management, Session management. These are Auth0/Clerk's domain; we only build the configuration layer that "establishes connections between existing IdPs and SaaS applications."
3. ❌ **Do not offer automatic compliance certification** — Do not provide promises or certification badges claiming "using this service automatically satisfies SOC 2 / HIPAA / ISO 27001." Compliance is a legal matter requiring auditor evaluation, not something a technical tool can automatically guarantee.
4. ❌ **Do not offer private deployment** — Do not deploy this service in customers' data centers or private clouds. This is not a product that can be Docker-pulled and run with one click. At this stage, only provide the configuration UI in SaaS form.
5. ❌ **Do not do cross-IdP user synchronization/migration** — Do not do "migrate users from Okta to Azure AD" type cross-IdP data migration functions. This goes beyond the scope of "configuration connection" into Identity Governance (IGA) territory, with extremely high complexity.
6. ❌ **Do not build a custom IdP adapter framework** — Do not open-source the protocol adaptation layer code or provide a plugin interface for customers to develop their own IdP adapters. MVP phase only supports our validated Okta and Azure AD, with gradual expansion later.
7. ❌ **Do not commit to 99.9%+ SLA** — MVP phase does not commit to high-availability SLA. If Auth0/Clerk goes down, our configuration UI may also not function properly. Clearly state this dependency in the terms of service.

---

## Minimum Cost Validation Actions

### Action 1: Deep Competitive Research and Differentiation Positioning Validation

**Goal:** Confirm feature coverage, pricing strategies, and user dissatisfaction points of WorkOS and other competitors, to find differentiation space.

**Specific Steps:**
1. Register a free WorkOS account, go through the complete SSO configuration process (from registration to successfully connecting an Okta test tenant), and record experience pain points and feature gaps at each step.
2. Read all user reviews of WorkOS on G2 / Product Hunt / Hacker News / Reddit, and compile a list of user complaints (such as "pricing too expensive," "doesn't support X IdP," "documentation hard to understand").
3. Compare the SSO pricing and feature matrices of Auth0 Enterprise, Clerk Enterprise, and WorkOS, and create a feature comparison table.
4. Search Hacker News for "WorkOS alternative," "SSO integration for SaaS," "SAML setup service," and record discussion heat and alternative demand.
5. Output conclusion: Does there exist a positioning space for "lighter than WorkOS, cheaper, more focused on SMEs"?

**Estimated Time:** 2 days

---

### Action 2: B2B SaaS Founder Pain Point Interviews

**Goal:** Validate whether target users are truly willing to pay for an SSO integration service, and understand their current solutions and level of pain.

**Specific Steps:**
1. Filter 5-8 B2B SaaS founders targeting enterprise customers from YC Startup Directory, Indie Hackers, Twitter/X (funding < $5M, team < 50 people).
2. Send concise interview invitations via email/Twitter DM/LinkedIn: "I'm researching SSO integration pain points for B2B SaaS — could I take 15 minutes to chat about your experience? Not selling anything."
3. Prepare an interview guide focusing on three questions: (a) When was the last time a customer asked you to support SSO? How did you handle it? (b) If there were a service that could handle SAML/OIDC configuration and permission mapping for you, how much would you be willing to pay? (c) What frustrates you about WorkOS/Auth0's SSO solutions?
4. Record responses from at least 3 interview subjects, paying special attention to their expressed pain level (word intensity, emotional reaction) and spontaneously proposed price figures.
5. If >= 60% of interviewees express "willingness to pay" and give a price >= $100/month, validation passes.

**Estimated Time:** 3 days (including contact and coordination time)

---

### Action 3: Auth0 Foundational Technical Validation + Minimum Viable Prototype

**Goal:** Validate the technical feasibility of "building a configuration UI on top of Auth0's SAML connectors," confirming the S08 = 3 estimate is accurate.

**Specific Steps:**
1. Register a free Auth0 account, enable Enterprise SAML connectors.
2. Manually configure a SAML connection for an Okta test tenant in Auth0 (Okta provides free developer tenants), complete the full flow: Okta-initiated login → Auth0 handles SAML Assertion → returns user information to the application.
3. Use Auth0 Management API (or Clerk API) to attempt programmatic creation of SAML connections, configuration modification, and reading login events. Record which operations have API support and which require manual Dashboard operation.
4. Build a simple Next.js page that calls Auth0 API to implement: (a) input Okta metadata URL → (b) auto-create SAML connection → (c) return configuration result. No UI beautification, only validate the core technical path.
5. Record technical obstacles and actual time spent. If it takes more than 3 days from scratch to a working prototype, reassess the S08 score.

**Estimated Time:** 3 days

---

## External Evidence Gaps

### External Evidence Connection Status

| Source | Status | Description |
|---|---|---|
| Case Library | not_connected | Similar case library not used; unable to query historical assessment cases for similar SSO integration services |
| Competitor Research | not_connected | Automated competitor research tools not used; competitor information from publicly accessible web pages and documentation |
| Keyword Research | not_connected | Keyword search volume query tools not used; unable to obtain precise search volumes for terms like "SSO integration service" |
| Pricing Lookup | not_connected | Price benchmark queries not used; competitor pricing information from manually browsing competitor website pricing pages |
| Decision History | not_connected | Historical decision records not used; unable to reference previous assessment conclusions for similar products |
| MCP Tools | not_connected | MCP tools not called; all evidence from manual collection and public web resources |

### Current Gaps

- **What competitor information is still missing:** WorkOS's exact customer count, ARR scale, customer retention rate; proportion of SMB SaaS among WorkOS's customers; whether there are other smaller competitors (such as SSOReady, BoxyHQ, and other open-source solutions' usage data)
- **What search keywords are still missing:** Monthly search volume for "SSO integration service"; CPC and competition level for "SAML setup for SaaS"; search trend for "WorkOS alternative"; search volume for "Okta integration service"
- **What user behavior evidence is still missing:** The real frequency of SSO requests when B2B SaaS founders sign their first enterprise customer; how many SaaS companies have lost deals due to lack of SSO support; average time from trial to purchase for WorkOS
- **What similar cases are still missing:** Whether there have been historical product assessment cases similar to "building a configuration layer on top of Auth0"; cases where someone tried the same idea but failed
- **What price benchmarks are still missing:** Actual transaction prices for WorkOS tiers (vs. listed website prices); median enterprise customer willingness to pay extra SaaS subscription premium for SSO functionality
- **What historical review records are still missing:** Whether this project or team has previously assessed similar B2B infrastructure product experience

### Manual Research Keywords

```
🔍 Manual Research Keywords:
- S04 Alternatives → "WorkOS pricing 2025", "Auth0 enterprise SSO pricing", "SSO integration alternatives", "SAML setup service comparison", "BoxyHQ vs WorkOS"
- S05 Willingness to Pay → "SSO as a service pricing", "how much does SSO integration cost", "enterprise SSO pricing SaaS", "how much do companies pay for SSO", "WorkOS reviews complaints pricing"
- S06 User Group → "B2B SaaS SSO requirements", "YC startup enterprise sales SSO", "SaaS SOC 2 compliance SSO requirement", "when do SaaS companies need SSO"
- S07 Acquisition Path → "SSO integration service", "SAML configuration service", "Okta integration for SaaS", "SSO setup help", "enterprise SSO made easy"
- S08 Delivery Complexity → "Auth0 SAML connection API", "Clerk enterprise SSO setup", "SAML protocol complexity", "building SSO integration service tech stack"
```

### Recommended External Tools

If MCP is connected in the future, prioritize using:

- `product_route.case_search` — Search for similar cases of types like "B2B infrastructure," "authentication integration," "third-party wrapper"
- `product_route.competitor_search` — Automatically research the features and pricing of WorkOS, Auth0 Enterprise SSO, and Clerk Enterprise
- `product_route.keyword_search` — Query search volumes for keywords like "SSO integration service," "SAML setup for SaaS," "enterprise SSO"
- `product_route.pricing_lookup` — Query market price benchmarks for SSO integration services and the premium B2B SaaS pays for SSO functionality
- `product_route.history_query` — Query whether there are historical assessment records for products similar to "authentication infrastructure configuration layer"

> **The core Skill does not depend on external services to run. External case libraries, competitor databases, keyword databases, and MCP tools are only used to improve evidence coverage and confidence.**

---

## JSON Result

```json
{
  "schema_version": "0.1.0",
  "skill_version": "0.1.0",
  "runtime_language": "en",
  "evidence_mode": "manual_only",
  "mcp_enabled": false,
  "idea": "A unified SSO integration service for SME SaaS products. Help them connect to their customers' Okta, Azure AD, and Google Workspace identity systems. Includes SAML/OIDC configuration, permission mapping, and audit logging.",
  "main_route": "R05",
  "main_route_label": "Sales-led Service",
  "secondary_route": "R04",
  "secondary_route_label": "Third-party Wrapper",
  "confidence": "B",
  "scores": {
    "trigger_clarity": 4,
    "pain_strength": 4,
    "usage_frequency": 2,
    "alternative_maturity": 3,
    "payment_evidence": 4,
    "user_clarity": 4,
    "acquisition_clarity": 3,
    "delivery_complexity": 3,
    "liability_risk": 4,
    "maintenance_cost": 4,
    "reuse_value": 3,
    "stage_fit": 3
  },
  "risk_gates": ["G02", "G04"],
  "matched_rules": [
    "R05 Route Condition: Requires customized integration + high per-customer price + customers need human service, training, integration support",
    "R04 Route Condition: Underlying authentication service is complex (S09=4) + mature third-party services exist + core value is in simplifying configuration and unified management",
    "Hard Rule Check: Rule 1 (S09=4,S08=3,R07 not triggered); Rule 2 (S09=4>3,R02 not triggered); all other rules not triggered"
  ],
  "blocked_by": [],
  "next_action": "Deep competitive research (WorkOS/Auth0/Clerk) + 5-8 B2B SaaS founder pain point interviews + Auth0 foundational technical validation prototype",
  "do_not_build": [
    "Implement SAML/OIDC protocols from scratch",
    "Become an Identity Provider itself (user registration, password storage, MFA)",
    "Automatic compliance certification (SOC 2/HIPAA/ISO 27001)",
    "Private deployment",
    "Cross-IdP user synchronization/migration",
    "Custom IdP adapter plugin system",
    "99.9%+ high-availability SLA commitment"
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

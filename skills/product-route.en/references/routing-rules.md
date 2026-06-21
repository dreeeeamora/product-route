# 9 Route Types

## Table of Contents

1. [Route Overview](#route-overview)
2. [R01 · Entry Tool](#r01--entry-tool)
3. [R02 · Shelf Service](#r02--shelf-service)
4. [R03 · Internal Infrastructure](#r03--internal-infrastructure)
5. [R04 · Third-party Wrapper](#r04--third-party-wrapper--integration-layer)
6. [R05 · Sales-led Service](#r05--sales-led-service)
7. [R06 · Content / Community Product](#r06--content-or-community-product)
8. [R07 · High-risk Infrastructure, Defer](#r07--high-risk-infrastructure-defer)
9. [R08 · Feature Only, Not Standalone](#r08--feature-only-not-standalone)
10. [R09 · Research First](#r09--research-first)
11. [Hard Routing Rules](#hard-routing-rules)
12. [Low-Frequency Strong-Pain Exception Rule](#low-frequency-strong-pain-exception-rule)

---

## Route Overview

| ID | Name (EN) | Name (ZH) | One-liner |
|---|---|---|---|
| R01 | Entry Tool | 入口工具 | Low-barrier tool, acquires via SEO/distribution |
| R02 | Shelf Service | 货架服务 | Standardized SaaS, self-serve purchase |
| R03 | Internal Infrastructure | 内部基础设施 | Reusable internal tool |
| R04 | Third-party Wrapper | 第三方封装 | Wraps complex underlying services |
| R05 | Sales-led Service | 销售型服务 | Requires sales involvement |
| R06 | Content / Community Product | 内容或社区产品 | Content or community as core value |
| R07 | High-risk Infrastructure, Defer | 高风险基础设施，暂缓 | Involves high risk; recommend narrowing or deferring |
| R08 | Feature Only, Not Standalone | 只适合做功能 | Not viable as standalone product |
| R09 | Research First | 信息不足，先调研 | Critical evidence missing |

---

## R01 · Entry Tool

**When suitable:**
- Users clearly defined, low barrier
- High usage frequency (S03 >= 3)
- Weak willingness to pay (S05 <= 2)
- Clear acquisition path (S07 >= 3)
- Low delivery complexity (S08 <= 2)
- Can serve as traffic entry point for a larger product portfolio

**When NOT suitable:**
- Strong willingness to pay (→ R02 Shelf Service)
- High delivery complexity (S08 >= 4)
- High liability risk (S09 >= 4)

**Common examples:**
- QR code generator
- Image compression tool
- Format converter
- Small calculator / checker
- SEO keyword tool
- Free templates

**Recommended approach:**
- MVP in 1-2 weeks
- Acquire users via SEO / content / free distribution
- No complex payment system needed
- Can serve as entry node for product portfolio
- If payment signals emerge later, can upgrade to R02 Shelf Service

---

## R02 · Shelf Service

**When suitable:**
- Strong pain point (S02 >= 3)
- Usage frequency can be low, but trigger scenario must be clear
- If S03 <= 2, then S01 or S02 should be at least >= 4 (low-frequency but strong trigger or strong pain)
- Users have some willingness to pay (S05 >= 3)
- Delivery complexity is manageable (S08 <= 3)
- Liability risk is manageable (S09 <= 3)
- Can be standardized, self-serve, long-term shelf presence

**Additional notes:**
- Shelf services don't need to be high-frequency. Low-frequency strong-pain products are ideal shelf services.
- Typical low-frequency shelf services: privacy policy hosting (triggered by app review), status pages (triggered by outages), changelogs (triggered by releases), data deletion pages (triggered by compliance), lightweight monitoring dashboards (triggered by anomalies).
- Common thread: not needed daily, but critical when needed, and users are willing to pay.

**When NOT suitable:**
- Requires heavy customization and sales involvement (→ R05)
- High liability risk (→ R07 / R04)
- Weak willingness to pay (→ R01)

**Common examples:**
- Privacy policy hosting
- Status page service
- Product changelog
- Data deletion / compliance page
- Form backend service
- Email template management
- Lightweight monitoring dashboard
- Code snippet management

**Recommended approach:**
- MVP in 1-3 months
- Standard pricing, self-serve purchase
- Strong onboarding and self-serve documentation
- Monitor retention and churn rates

---

## R03 · Internal Infrastructure

**When suitable:**
- High reuse value (S11 >= 4)
- Unclear acquisition path (S07 <= 2)
- Serves internal teams or own other products primarily
- Not directly facing external paying users

**When NOT suitable:**
- User group is clearly external with strong demand (→ R01 / R02)
- Extremely high maintenance cost (S10 >= 4) without internal team support

**Common examples:**
- Internal CI/CD tool
- Internal data dashboard
- Internal API gateway
- Component library / code generator

**Recommended approach:**
- Satisfy own needs first
- Validate internally before considering external release
- If external demand emerges, can upgrade to R02 Shelf Service

---

## R04 · Third-party Wrapper / Integration Layer

**When suitable:**
- Underlying service is complex, high-risk (S08 >= 4 or S09 >= 4)
- Mature third-party services exist (S04 >= 4)
- Core value is in simplification, integration, unified interface
- No need to build the underlying layer from scratch

**When NOT suitable:**
- No mature third-party services exist
- Wrapper layer itself becomes a complex system
- Cost structure is unsustainable (third-party fees > revenue)

**Common examples:**
- Vimeo/Mux/Wistia embed management
- Stripe/LemonSqueezy wrapper dashboard
- Resend/SendGrid email management
- Notion/Google Docs API wrapper
- AI API aggregation router

**Recommended approach:**
- Choose mature, stable third-party services
- Core value is simplifying configuration and unified management
- Do not promise SLA of underlying services
- Clearly label third-party dependencies

---

## R05 · Sales-led Service

**When suitable:**
- Requires customized integration
- High per-customer value
- Customers need human service, training, integration support
- S08 (delivery complexity) >= 3 AND clear paying customer leads exist

**When NOT suitable:**
- Can be standardized for self-serve (→ R02)
- Solo developer cannot support sales and delivery
- No clear paying customer leads

**Common examples:**
- Enterprise internal tool customization
- Private deployment
- Custom training services
- Integration consulting services

**Recommended approach:**
- Find 1-2 paying customers first to validate
- Confirm per-customer value and delivery cost
- Do not invest in full product development without payment signals

---

## R06 · Content or Community Product

**When suitable:**
- Core value is content, knowledge, community relationships
- Tool functionality is auxiliary, not core
- S03 (usage frequency) is medium or high

**When NOT suitable:**
- Core value is tool functionality (→ R01 / R02)
- Requires highly complex backend systems

**Common examples:**
- Technical blog / Newsletter
- Paid community
- Tutorial / course platform
- Forum / discussion board
- Content aggregation

**Recommended approach:**
- Build content first, then tools
- Validate audience and content direction
- Do not build the platform before having an audience

---

## R07 · High-risk Infrastructure, Defer

**When suitable (trigger conditions):**
- S09 (liability risk) >= 4 AND S08 (delivery complexity) >= 4
- Involves payments, identity auth, email deliverability, video storage, compliance, security, etc.

**When routed here, can suggest:**
- Read-only dashboard
- Third-party wrapper
- Configuration management interface
- Status monitoring
- Lightweight entry tool

**Must NOT suggest:**
- Building a complete payment gateway from scratch
- Building a complete email sending platform from scratch
- Building a complete video hosting platform from scratch
- Building a complete customer support system from scratch
- Building a complete search engine from scratch
- Building a complete cloud deployment platform from scratch

**Common examples (triggers R07):**
- Complete video hosting platform
- Complete payment processing system
- Complete email sending platform
- Complete customer support ticketing system
- Complete CI/CD platform

**Recommended approach:**
- Narrow scope to management/configuration layer only
- Use existing third-party services as the underlying layer
- If narrowed version is viable, secondary route → R04

---

## R08 · Feature Only, Not Standalone

**When suitable:**
- Perceived value insufficient as standalone product
- But highly valuable as a feature module within an existing product
- S02 (pain strength) is moderate but insufficient to support a standalone product
- S05 (willingness to pay) below 3 — users won't pay for it separately

**When NOT suitable:**
- User pain is strong enough for standalone payment (→ R01 / R02)
- Market is large enough for standalone viability

**Common examples:**
- "Export PDF" feature in a SaaS
- "Data import" feature in a platform
- "Keyboard shortcut config" in a tool
- "Dark mode" in an app

**Recommended approach:**
- Implement as a feature module within an existing product
- Do not create a separate site or separate promotion
- Can be contributed as an open-source module

---

## R09 · Research First

**Trigger conditions (any one triggers):**
- 3+ critical dimensions at evidence level D
- S06 (user clarity) <= 2
- S01 (trigger clarity) <= 2
- Majority of critical dimensions at confidence C or D

**Critical dimensions:**
- S01 Trigger Clarity
- S02 Pain Strength
- S05 Payment Evidence
- S06 User Clarity
- S07 Acquisition Clarity

**Recommended approach:**
- Complete 3 minimum-cost validation actions first
- Re-collect evidence before re-evaluating
- Do not build a complete product without evidence

---

## Hard Routing Rules

These rules have the highest priority and cannot be overridden:

1. **If S09 >= 4 AND S08 >= 4:**
   → Main route: R07 (High-risk Infrastructure, Defer)
   → Secondary route optional: R04 (Third-party Wrapper)

2. **If S02 >= 4 AND S03 <= 2 AND S09 <= 3:**
   → Main route: R02 (Shelf Service)
   — Strong pain + low frequency = ideal for standardized SaaS

3. **If S03 >= 4 AND S02 <= 3 AND S05 <= 2:**
   → Main route: R01 (Entry Tool)
   — High frequency + weak pain + weak payment = ideal for free entry tool

4. **If S11 >= 4 AND S07 <= 2:**
   → Main route: R03 (Internal Infrastructure)
   — High reuse + unclear acquisition = ideal for internal use

5. **If S06 <= 2:**
   → Main route: R09 (Research First)
   — Don't know who the user is = cannot evaluate

6. **If S01 <= 2:**
   → Main route: R09 (Research First)
   — Don't know what scenario triggers usage = cannot evaluate

7. **If S05 <= 2 AND S07 >= 4:**
   → Main route: R01 (Entry Tool)
   — Weak payment + clear acquisition = build free entry, rely on traffic

8. **If S04 >= 4 AND S05 >= 3 AND S08 <= 3:**
   → Consider R02 (Shelf Service)
   — Mature market + payment willingness + deliverable = standardized SaaS

9. **If majority of critical dimensions at confidence C/D:**
   → Main route: R09 (Research First)
   — Evidence too weak = collect evidence first

---

## Low-Frequency Strong-Pain Exception Rule

Do not automatically dismiss a product's value because S03 usage frequency is low.

If ALL of the following are true:

- S03 <= 2 (low frequency)
- S01 >= 4 (clear trigger scenario)
- S02 >= 4 (strong pain)
- S09 <= 3 (manageable liability)

Then prioritize **R02 Shelf Service**.

**Rationale:**

Low frequency does not mean low importance. Some products derive their value precisely from "not needed daily, but critical when needed." Typical scenarios:

- App review requires a privacy policy URL (S03 low, S01 high, S02 high)
- Service outage requires a status page (S03 low, S01 high, S02 high)
- Compliance check requires a data deletion page (S03 low, S01 high, S02 high)
- Product release requires a changelog page (S03 low, S01 high, S02 high)

Common traits of these products:
1. Trigger events are externally driven (review, outage, compliance, release), not daily habits
2. Consequences are severe without a solution when triggered (review rejection, customer loss, compliance violation)
3. Users are willing to pay for "having it when needed" (core logic of shelf services)

**This rule cannot be used for:**
- S09 >= 4 high-risk products (still route to R07)
- S01 <= 2 vague-scenario products (still route to R09)
- Cases where you just "feel low frequency is OK" without evidence

---

## One evaluation = one main route + at most one secondary route

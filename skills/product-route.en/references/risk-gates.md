# Risk Gates

## General Principle

When S09 (Liability Risk) >= 4 AND S08 (Delivery Complexity) >= 4, risk gate checking MUST trigger. This means the product involves high-risk infrastructure and must not be recommended for immediate full development by solo developers or small teams.

When triggered, narrow-scope solutions (read-only dashboard, configuration management, monitoring dashboard, third-party wrapper) may be suggested. Building complete high-risk systems from scratch must not be suggested.

---

## G01 · Payment / Money Risk Gate

**Trigger:** Product involves processing payments, storing payment information, calculating funds, managing account balances.

**Risk:**
- PCI-DSS compliance requirements
- Payment failures = direct financial loss
- Fraud, refunds, dispute handling
- Multi-currency, tax complexity

**Narrowing suggestions:**
- Use Stripe / LemonSqueezy / Paddle and other mature payment services
- Do not store payment information yourself
- Build a payment management dashboard (read-only) rather than a payment processing system
- Build an invoice management tool rather than a payment gateway

**Absolutely do not:**
- Build a payment gateway from scratch
- Store credit card information yourself
- Handle payment clearing yourself

---

## G02 · Auth / Identity Risk Gate

**Trigger:** Product involves user registration, login, permission management, OAuth integration, SSO.

**Risk:**
- Password storage and encryption
- Session / Token security
- OAuth integration complexity
- Multi-tenant permission isolation
- Account recovery flows

**Narrowing suggestions:**
- Use Auth0 / Clerk / Supabase Auth / NextAuth and other mature solutions
- Build a permission configuration dashboard rather than an auth system
- Build SSO configuration management rather than an identity provider

**Absolutely do not:**
- Build a password hashing and storage system from scratch
- Build an OAuth server from scratch
- Build a multi-tenant permission system from scratch (if this is core infrastructure)

---

## G03 · Email Deliverability Risk Gate

**Trigger:** Product involves sending transactional emails, marketing emails, bulk emails.

**Risk:**
- Domain reputation management
- Email deliverability
- Bounce rate, complaint rate
- SPF / DKIM / DMARC configuration
- IP warming

**Narrowing suggestions:**
- Use Resend / SendGrid / AWS SES / Postmark and other mature services
- Build an email template manager rather than an email sending platform
- Build a send status monitoring dashboard

**Absolutely do not:**
- Build an email sending platform from scratch
- Manage SMTP servers yourself (if this is the core feature)
- Ignore domain reputation and deliverability issues

---

## G04 · Privacy / Compliance Risk Gate

**Trigger:** Product involves collecting user data, storing personal information, cross-region data transfer, industry compliance.

**Risk:**
- GDPR / CCPA / personal data protection laws
- Cross-border data transfer
- User data deletion rights
- Cookie consent
- Industry-specific compliance (HIPAA, SOC 2, PCI, etc.)

**Narrowing suggestions:**
- Build a data management dashboard rather than a data processing system
- Use compliant third-party storage solutions
- Explicitly state that the MVP does not serve regulated industries
- Build a privacy policy generator rather than a compliance guarantee tool

**Absolutely do not:**
- Promise compliance indemnification
- Handle sensitive personal data without legal counsel
- Ignore user data deletion and export requirements

---

## G05 · Video / Storage / Bandwidth Risk Gate

**Trigger:** Product involves video hosting, large file storage, high-bandwidth content delivery.

**Risk:**
- Storage costs grow linearly with usage
- Bandwidth costs can spiral out of control
- Video transcoding compute costs
- Copyright and content moderation
- Abuse (CSAM, piracy, prohibited content)

**Narrowing suggestions:**
- Use Vimeo / Mux / Wistia / Cloudflare Stream and other mature services
- Build a video management dashboard (embed management, course catalog) rather than a video hosting platform
- Build storage configuration management rather than a storage system
- Set cost caps and automatic circuit breakers

**Absolutely do not:**
- Build a video hosting platform from scratch
- Build a video transcoding system from scratch
- Ignore content moderation and copyright risks
- Skip cost cap planning

---

## G06 · Core Notification Risk Gate

**Trigger:** Product depends on real-time notifications (Push, WebSocket, Email, SMS) as a core feature.

**Risk:**
- Push notification platform dependencies (APNs, FCM)
- WebSocket connection management and scaling
- SMS delivery rates and costs
- Notification delivery reliability directly impacts core experience

**Narrowing suggestions:**
- Use Pusher / Ably / Firebase / OneSignal and other mature services
- Build a notification configuration manager rather than a notification sending system
- Build a notification status monitoring dashboard

**Absolutely do not:**
- Build a real-time push system from scratch
- Underestimate the impact of notification delivery rates on user experience

---

## G07 · Customer Support Reliability Risk Gate

**Trigger:** Product involves customer support system, ticketing system, live chat, Help Desk.

**Risk:**
- Support system directly impacts customer satisfaction and retention
- SLA commitments and response times
- Multi-channel integration (email, chat, phone)
- Knowledge base and automation

**Narrowing suggestions:**
- Use Crisp / Intercom / Zendesk / Help Scout and other mature services
- Build a lightweight message inbox (unified view of messages from multiple channels)
- Build a FAQ page and documentation site
- Build a support quality monitoring dashboard

**Absolutely do not:**
- Build a complete Intercom / Zendesk replacement from scratch
- Promise unrealistic SLAs

---

## G08 · Deployment / Infrastructure SLA Risk Gate

**Trigger:** Product requires high availability, auto-scaling, multi-region deployment.

**Risk:**
- Service availability commitments
- Data backup and disaster recovery
- Auto-scaling
- Multi-region deployment
- Monitoring and alerting

**Narrowing suggestions:**
- Use Vercel / Railway / Fly.io / Cloudflare and other mature platforms
- Build a deployment configuration dashboard rather than a deployment platform
- Build a status page and monitoring dashboard
- Explicitly state that the MVP does not promise high-availability SLA

**Absolutely do not:**
- Build a cloud deployment platform from scratch
- Promise 99.9% availability in the MVP stage
- Do multi-region deployment without operations experience

---

## Risk Gate Check Output Format

In the risk gates section of the evaluation report, use this format:

```
## Risk Gates

### Triggered Risk Gates

| Gate ID | Name | Trigger Reason | Narrowing Suggestion |
|---|---|---|---|
| G05 | Video / Storage / Bandwidth | Involves video hosting and transcoding | Use Vimeo/Mux embed management |

### Untriggered Risk Gates

(List gates that were checked but not triggered, with brief explanation of why not triggered)
```

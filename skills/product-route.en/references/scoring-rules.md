# 12-Dimension Scoring System

Each dimension uses a 1-5 scale. Scores must be evidence-based, never based on gut feeling.

> Important: S08, S09, S10 — higher scores mean higher risk, not "better."

---

## S01 · Trigger Clarity · trigger_clarity

In what specific scenario will users think to use this product?

| Score | Anchor |
|---|---|
| 1 | Cannot describe when users would use it — "someone might need it" |
| 2 | Can describe general direction, but trigger events are vague |
| 3 | Can name 2-3 specific trigger scenarios with commonalities |
| 4 | Can name concrete trigger events: launch, review, outage, payment, compliance, migration, release |
| 5 | Trigger events are strong, predictable, and consistently reachable via search terms, platform flows, user behavior, or channels |

**Is a high score dangerous?** No. The clearer the scenario, the better.

**Note:**
- Do not treat "high frequency" as a requirement for S01.
- Low-frequency but strong-trigger scenarios (e.g., App Store review, domain renewal, compliance check) can also score high.
- The key is whether the trigger event is predictable and findable via search or external workflows.

**Evidence required:** User behavior data, search keyword data, competitor usage scenarios, or user interview records.

---

## S02 · Pain Strength · pain_strength

What do users lose by not using this product?

| Score | Anchor |
|---|---|
| 1 | Just interesting, nice-to-have, no real impact without it |
| 2 | Saves a little time, but no obvious loss without it |
| 3 | Without it causes clear inconvenience; users will actively seek alternatives |
| 4 | Without it impacts launch, operations, revenue, delivery, or customer experience |
| 5 | Without it blocks critical workflows, or causes direct revenue, compliance, security, or customer loss |

**Is a high score dangerous?** No. The stronger the pain, the better.

**Evidence required:** User complaints, support tickets, competitor review sections, pain expressed in interviews.

---

## S03 · Usage Frequency · usage_frequency

How often will target users use this?

| Score | Anchor |
|---|---|
| 1 | Once or twice a year, or only during specific events |
| 2 | 1-3 times per month |
| 3 | 1-3 times per week |
| 4 | 1-3 times per day |
| 5 | Multiple times per day, or embedded in core workflow |

**Is a high score dangerous?** No. High frequency is generally good, but high frequency + low willingness to pay may point to R01 Entry Tool.

**Evidence required:** User behavior data, competitor usage data, or reasonable inference from scenario frequency.

---

## S04 · Alternative Maturity · alternative_maturity

How do users currently solve this problem?

| Score | Anchor |
|---|---|
| 1 | No known alternatives; users may not realize it's a problem |
| 2 | Users patch it together with fragmented manual methods |
| 3 | Several competitors exist, but all have obvious flaws or high prices |
| 4 | Mature competitors exist, users have payment habits, but differentiation space remains |
| 5 | Multiple mature competitors, feature-complete, transparent pricing, low switching cost |

**Is a high score dangerous?** Yes — high score means entering a red ocean. If S05 (willingness to pay) is also high, there may still be room. If S05 is low, consider narrowing or abandoning.

**Evidence required:** Competitor list, pricing information, user reviews.

---

## S05 · Payment Evidence · payment_evidence

Is there evidence users are willing to pay for this product?

| Score | Anchor |
|---|---|
| 1 | No payment signals; users generally believe this should be free |
| 2 | Weak payment signals (competitors have free alternatives; users expressed dissatisfaction but didn't pay) |
| 3 | Moderate payment signals (competitors have paying users; community discussions about paid solutions) |
| 4 | Clear payment signals (competitors have many paying users; users directly express willingness to pay; some have already paid) |
| 5 | Strong payment signals (market validated by competitors; users actively seeking paid solutions; historical transaction data) |

**Is a high score dangerous?** No. The stronger the willingness to pay, the better.

**Evidence required:** Competitor pricing pages, user payment behavior data, community payment discussions, or direct user interviews.

---

## S06 · User Clarity · user_clarity

Can you clearly describe the target user?

| Score | Anchor |
|---|---|
| 1 | Cannot say who will use it — "all developers," "all entrepreneurs" |
| 2 | Can name a broad category without segmentation (e.g., "indie developers" without further detail) |
| 3 | Can describe a specific persona (e.g., "independent iOS developers who need to publish on App Store") |
| 4 | Can describe a specific persona with supporting evidence (community, forum, data) |
| 5 | Persona is precise enough for targeted outreach (industry, role, scenario, channel) |

**Is a high score dangerous?** No. The clearer the user, the better.

**Evidence required:** User persona data, community/forum activity, or direct user contact.

---

## S07 · Acquisition Clarity · acquisition_clarity

Do you know how to reach target users?

| Score | Anchor |
|---|---|
| 1 | No idea where users come from |
| 2 | Roughly know channel direction, but unvalidated |
| 3 | 1-2 verifiable acquisition paths (e.g., search keywords, community, platform distribution) |
| 4 | 3+ verifiable paths, at least 1 with preliminary validation |
| 5 | Acquisition paths validated, conversion data available, scalable |

**Is a high score dangerous?** No. The clearer the acquisition, the better. But clear acquisition + low willingness to pay → R01 Entry Tool.

**Evidence required:** Search volume data, community traffic data, distribution channel data, or early conversion data.

---

## S08 · Delivery Complexity · delivery_complexity

How much technical investment is needed to build this product?

| Score | Anchor |
|---|---|
| 1 | MVP deliverable by one person in 1-2 weeks |
| 2 | MVP deliverable by one person in 1 month |
| 3 | 1-3 months, needs 1-2 people |
| 4 | 3-6 months, needs 2-4 people, involves multiple subsystems |
| 5 | 6+ months, needs specialized team, involves infrastructure, security, compliance |

**Is a high score dangerous?** ⚠️ **Yes, high score is dangerous.** S08 >= 4 requires special caution. Combined with S09 >= 4, may trigger R07 High-risk Infrastructure route.

**Evidence required:** Tech stack assessment, similar project references, prototype validation.

---

## S09 · Liability Risk · liability_risk

What are the consequences if something goes wrong?

| Score | Anchor |
|---|---|
| 1 | Essentially no risk; issues don't affect users' core business |
| 2 | Minor impact (degraded experience, temporary unavailability) |
| 3 | Moderate impact (inaccurate data, brief service interruption) |
| 4 | Serious impact (payment errors, auth failures, privacy leaks, compliance violations) |
| 5 | Catastrophic impact (financial loss, legal liability, security incidents, business paralysis) |

**Is a high score dangerous?** ⚠️ **Yes, high score is dangerous.** S09 >= 4 triggers risk gate checks. S09 >= 4 AND S08 >= 4 → R07 High-risk Infrastructure, Defer.

**Evidence required:** Industry compliance requirements, competitor security incident cases, legal liability analysis.

---

## S10 · Maintenance Cost · maintenance_cost

How much ongoing investment does the product need after launch?

| Score | Anchor |
|---|---|
| 1 | Essentially no maintenance needed, or extremely simple |
| 2 | Occasional content updates or bug fixes |
| 3 | Needs ongoing attention, regular maintenance required |
| 4 | Needs dedicated person for maintenance, monitoring, user support |
| 5 | Needs team maintenance, 24/7 on-call, SLA commitments |

**Is a high score dangerous?** ⚠️ **Yes, high score is dangerous.** High-maintenance products are unsuitable for solo developers or small teams as side projects.

**Evidence required:** Similar product operations experience, community feedback, tech stack maintenance difficulty assessment.

---

## S11 · Reuse Value · reuse_value

Can this product be reused in other scenarios after being built?

| Score | Anchor |
|---|---|
| 1 | Completely one-off, cannot be reused in any other scenario |
| 2 | Some components reusable, but overall not reusable |
| 3 | Partial modules reusable, or can serve as components for other products |
| 4 | Mostly reusable across multiple scenarios, or can serve as platform foundation |
| 5 | Naturally has platform properties, can serve multiple unrelated scenarios |

**Is a high score dangerous?** No. High reuse value is good, but if S07 (acquisition clarity) is low, may be better suited for R03 Internal Infrastructure.

**Evidence required:** Architecture analysis, similar platform cases.

---

## S12 · Stage Fit · stage_fit

Given your current resources, stage, and goals, is this idea a good fit right now?

| Score | Anchor |
|---|---|
| 1 | Completely mismatched with current stage; resources, time, skills all wrong |
| 2 | One element matches, but overall not a fit |
| 3 | Basic match, but needs scope adjustment or new skill acquisition |
| 4 | Highly matched with current stage; resources, skills, time mostly aligned |
| 5 | Perfect match; now is the optimal timing |

**Is a high score dangerous?** No. But stage fit doesn't mean absence of risk — always combine with other dimensions.

**Evidence required:** Self-assessment, resource inventory.

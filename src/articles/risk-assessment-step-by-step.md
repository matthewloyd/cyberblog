---
title: "How to Run a Cybersecurity Risk Assessment, Step by Step"
description: "A repeatable, six-step method for identifying, analyzing, and treating information security risks, scaled for teams without a dedicated risk function."
category: Risk Management
date: 2026-11-06T07:00:00Z
takeaways:
  - "Scope first. An assessment that tries to cover everything finishes nothing."
  - "Assess risk as scenarios (threat, vulnerability, asset, impact), not as single words like 'phishing'."
  - "Every risk ends with a decision and an owner. Analysis without a decision is just a report."
---

A risk assessment is the engine of a security program. It tells you where to spend money, which controls matter, and what to tell leadership. The method below works for a 20-person startup or a single business unit in a large enterprise. It follows the same logic as formal standards like ISO/IEC 27005 and NIST SP 800-30 without the overhead.

## Step 1: Define scope and context

Decide what you're assessing and why. Good scopes are bounded: "our customer-facing SaaS platform and the systems that support it," not "the company."

Capture:

- **Business objectives** the scope supports (revenue, customer trust, regulatory standing).
- **Obligations** that apply (contracts, regulations, certifications).
- **Risk appetite:** how much risk leadership will tolerate. If no one has stated it, ask. "We will not accept a high risk to customer data without CEO sign-off" is a perfectly good start.

## Step 2: Identify assets

List what's worth protecting within the scope. Work at a level of detail you can actually maintain:

- **Information:** customer data, financial records, source code, credentials.
- **Systems:** production applications, databases, identity provider, endpoints.
- **Processes and people:** payroll, deployment pipeline, key administrators.
- **Third parties:** cloud providers and SaaS tools that hold or process your data.

For each, note the owner and which CIA property matters most.

## Step 3: Identify risk scenarios

This is where most assessments go wrong. "Phishing" and "insider threat" aren't risks. They're labels. A useful risk is a short **scenario**:

> *A threat actor* uses *a phishing email* to steal *an administrator's credentials*, exploiting *the lack of phishing-resistant MFA on the admin console*, resulting in *unauthorized access to all customer data*.

That sentence names a threat, a vulnerability, an asset, and an impact, and it points straight to a fix. Gather scenarios through short interviews with system owners, past incidents, audit findings, and threat intelligence relevant to your industry.

Aim for 15 to 40 scenarios on a first pass. Fewer, and you've probably missed something. More, and you won't finish.

## Step 4: Analyze likelihood and impact

Rate each scenario for **likelihood** (how plausible within, say, the next 12 months, considering existing controls) and **impact** (how bad if it happens). A five-point scale is common:

| Rating | Likelihood | Impact |
|---|---|---|
| 1 – Rare | Not expected in the next several years | Negligible; absorbed in normal operations |
| 2 – Unlikely | Could happen, but no indication it will | Minor disruption or cost |
| 3 – Possible | Plausible this year | Noticeable financial, customer, or legal impact |
| 4 – Likely | Expected this year | Serious harm; executive and possibly regulator involvement |
| 5 – Almost certain | Happening or imminent | Severe; threatens the business or causes major legal exposure |

Define impact in your organization's terms, with dollar ranges, hours of downtime, or number of records, so two people rating the same risk land in roughly the same place.

Multiply or plot likelihood and impact to get an **inherent** or **current** risk level. Qualitative scales are fine for most organizations. If you need to compare risks in financial terms, quantitative methods such as FAIR (Factor Analysis of Information Risk) are worth exploring once the basics are in place.

## Step 5: Evaluate and decide on treatment

Compare each risk against your appetite. For anything above it, choose a treatment:

- **Mitigate:** add or improve controls.
- **Transfer:** insurance, contractual terms, or outsourcing to a better-equipped party.
- **Avoid:** stop the activity.
- **Accept:** document the rationale and get sign-off from someone with the authority to accept that level of risk.

For mitigations, write down the specific control, an owner, a due date, and the expected **residual risk** once it's in place. "Improve security awareness" is not a treatment. "Deploy phishing-resistant MFA to all admin accounts by Q2, owned by the IT lead" is.

## Step 6: Record, report, and repeat

Put the results in a [risk register](/articles/writing-a-risk-register/) so they don't disappear into a slide deck. Summarize for leadership: top risks, the decisions you need from them, and what it will cost.

Then set a schedule. Reassess fully once a year, and review whenever something significant changes: a new product, an acquisition, a major incident, or a new regulation.

## Common pitfalls

- **Rating everything "high."** If everything is a priority, nothing is. Calibrate with real examples.
- **Ignoring existing controls.** Rate likelihood based on today's reality, not a world with no security at all.
- **No owners.** A risk without an owner will still be there next year.
- **One-time exercise.** The value comes from repeating the process and tracking whether risk is actually going down.

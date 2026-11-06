---
title: "Third-Party and Vendor Risk Management: A Practical Program"
description: "How to inventory vendors, tier them by risk, run proportionate due diligence, write protective contracts, and monitor suppliers over time."
category: Third-Party Risk
date: 2026-11-06T01:00:00Z
takeaways:
  - "You can outsource a function, but not accountability for the risk."
  - "Tier vendors by the data and access they have, then scale due diligence to match."
  - "Contracts and offboarding matter as much as the initial questionnaire."
---

Modern organizations run on vendors: cloud infrastructure, SaaS applications, payment processors, payroll providers, contractors, and managed service providers. Each one extends your attack surface. Many of the most damaging breaches of the past decade started at a supplier rather than the victim.

Third-party risk management (TPRM) is the process of understanding and controlling that exposure throughout the vendor relationship.

## The lifecycle

A complete program covers five stages:

1. **Inventory and intake**
2. **Risk tiering**
3. **Due diligence**
4. **Contracting**
5. **Ongoing monitoring and offboarding**

## 1. Inventory and intake

You can't manage vendors you don't know about. Build an inventory from accounts payable, expense reports, single sign-on logs, and conversations with department heads. Expect to find more SaaS tools than anyone thought.

Then close the front door: add a short security intake step to procurement so new vendors are captured before contracts are signed. Keep the intake form brief. Ask what data the vendor will receive, what systems they'll access, and how critical the service is to operations.

## 2. Risk tiering

Not every vendor deserves the same scrutiny. A catering company and a cloud provider hosting customer data are not the same risk. Tier vendors based on:

- **Data sensitivity:** does the vendor store, process, or access confidential or regulated data?
- **System access:** do they connect to your network or have privileged access?
- **Operational criticality:** what happens if they're unavailable for a day? A week?
- **Regulatory relevance:** are they in scope for your compliance obligations?

| Tier | Typical profile | Due diligence |
|---|---|---|
| **Critical** | Holds sensitive data at scale or supports core operations | Full review: audit reports, detailed questionnaire, security call, contract review, annual reassessment |
| **High** | Accesses sensitive data or systems with limits | Audit report or questionnaire, contract review, reassess every 1–2 years |
| **Moderate** | Limited internal data, low criticality | Short questionnaire, standard terms |
| **Low** | No data or system access | Intake record only |

## 3. Due diligence

Proportion is everything. For critical and high-tier vendors, gather:

- **Independent assurance:** a SOC 2 Type II report or ISO/IEC 27001 certificate, with its scope checked to confirm it covers the service you're buying.
- **A security questionnaire:** a standardized one such as the Shared Assessments SIG or CSA CAIQ, or a focused set of questions of your own.
- **Answers to key questions:** encryption, access control, MFA, vulnerability management, incident response and breach notification, sub-processors, data location, and business continuity.

When you read a SOC 2 report, don't stop at the opinion. Check the **exceptions** the auditor found and the **complementary user entity controls**, the things *you* must do for the vendor's controls to work, such as managing your own users' access.

Document findings and a decision: approve, approve with conditions, or decline. Where gaps exist, decide whether they're acceptable, can be fixed by the vendor, or can be compensated for on your side.

## 4. Contracting

Contracts are where risk expectations become enforceable. For higher-risk vendors, include:

- Security requirements and the right to request evidence or audit
- Breach-notification obligations with a specific timeframe
- Data protection terms (often a data processing agreement where privacy laws apply)
- Limits on sub-processors and requirements to flow down obligations
- Data return and deletion at the end of the relationship
- Service-level commitments for availability and support
- Appropriate liability and insurance provisions

Work with legal and procurement to keep standard clauses ready so security doesn't slow every deal.

## 5. Ongoing monitoring and offboarding

Risk changes after the contract is signed. Vendors get acquired, change sub-processors, suffer breaches, or quietly expand the data they collect. Ongoing monitoring can include:

- Reassessment on a schedule based on tier
- Requesting each year's new audit report
- Watching for breach news and security advisories involving key vendors
- Reviewing access the vendor holds to your systems

Offboarding is often forgotten. When a relationship ends, revoke access and credentials, retrieve or confirm deletion of data, and update the inventory.

## Concentration and fourth-party risk

Two less obvious risks deserve attention:

- **Concentration risk:** heavy dependence on a single provider (one cloud region, one identity provider) can create a single point of failure across many processes.
- **Fourth-party risk:** your vendors' vendors. Ask critical suppliers how they manage their own third parties, and pay attention to sub-processor lists.

## Starting small

If you have nothing today, start with three steps: build the inventory, identify your ten most critical vendors, and collect their audit reports. That alone puts you ahead of many organizations and gives you a foundation to grow from.

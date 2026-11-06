---
title: "The NIST Cybersecurity Framework 2.0, Explained"
description: "A practical tour of NIST CSF 2.0: the six Functions, how Profiles and Tiers work, and how to use the framework to build or assess a security program."
category: Frameworks & Compliance
date: 2026-11-06T05:00:00Z
takeaways:
  - "CSF 2.0 organizes security outcomes into six Functions: Govern, Identify, Protect, Detect, Respond, and Recover."
  - "Govern, added in 2.0, puts strategy, roles, policy, and supply-chain risk at the center."
  - "Use Profiles to compare where you are with where you want to be, then plan the gap."
---

The NIST Cybersecurity Framework (CSF) is one of the most widely used ways to describe and organize a security program. It's free, it isn't tied to any industry or technology, and it's written in terms of **outcomes** rather than prescriptive controls. That makes it a good common language between security teams, executives, auditors, and partners.

NIST published version 2.0 in February 2024, the first major update since the framework launched in 2014. The biggest changes: the framework now explicitly applies to organizations of every size and sector, not just critical infrastructure, and it adds a sixth Function, **Govern**.

## The structure in brief

CSF 2.0 has three main parts:

- **The Core:** a hierarchy of Functions, Categories, and Subcategories that describe security outcomes.
- **Organizational Profiles:** a way to describe your current and target state using the Core.
- **Tiers:** a way to characterize how rigorous your risk management practices are.

## The six Functions

The Functions are the top level of the Core. They aren't sequential steps; they all operate at the same time.

### Govern (GV)

Establish and monitor the organization's cybersecurity risk management strategy, expectations, and policy. This covers organizational context, risk management strategy, roles and responsibilities, policy, oversight, and **cybersecurity supply chain risk management**. Govern sits at the center because it informs how every other Function is carried out.

### Identify (ID)

Understand the organization's current cybersecurity risks. This includes asset management (hardware, software, data, and services), risk assessment, and improvement: learning from assessments, exercises, and incidents.

### Protect (PR)

Use safeguards to manage risk. Categories cover identity management, authentication and access control; awareness and training; data security; platform security; and technology infrastructure resilience.

### Detect (DE)

Find and analyze possible attacks and compromises. This includes continuous monitoring and adverse event analysis.

### Respond (RS)

Take action on a detected incident: incident management, analysis, response reporting and communication, and mitigation.

### Recover (RC)

Restore assets and operations affected by an incident, and communicate during recovery.

## Categories and Subcategories

Each Function breaks into Categories, which break into Subcategories. Subcategories are specific outcome statements. For example, under Protect's identity and access category, an outcome says that identities and credentials for authorized users, services, and hardware are managed by the organization.

Notice that it says *what* should be true, not *how* to make it true. You choose the controls. NIST supplies optional **Implementation Examples** and **Informative References** that map Subcategories to more detailed sources such as NIST SP 800-53 and ISO/IEC 27001.

## Profiles: current versus target

A **Current Profile** describes the outcomes you're achieving today. A **Target Profile** describes the outcomes you want to achieve, prioritized according to your risks, objectives, and obligations. The gap between them becomes your roadmap.

Profiles are what make the framework practical. Rather than trying to "implement CSF" all at once, you decide which outcomes matter most for your situation and how far to take each one.

NIST also publishes **Community Profiles**: shared target profiles for a sector or use case that an organization can adopt as a starting point.

## Tiers: how mature is your approach?

Tiers describe the rigor of your cybersecurity risk governance and management:

1. **Partial:** ad hoc and reactive.
2. **Risk Informed:** risk management practices are approved by management but may not be organization-wide.
3. **Repeatable:** practices are formally approved, expressed as policy, and regularly updated.
4. **Adaptive:** practices adapt based on lessons learned and predictive indicators, and cybersecurity risk is part of the organizational culture.

Tiers aren't a maturity score to maximize. Tier 4 isn't the right target for everyone. Pick the Tier that fits your risk and resources.

## Using CSF in five steps

1. **Scope.** Choose the business unit, system, or whole organization.
2. **Gather context.** Mission, risk appetite, regulatory and contractual obligations, and existing risk assessments.
3. **Build a Current Profile.** For each relevant Subcategory, describe how well the outcome is achieved today. Interviews and evidence beat self-reported checkboxes.
4. **Build a Target Profile.** Prioritize outcomes based on risk. Not every Subcategory needs the same attention.
5. **Analyze the gap and plan.** Turn gaps into a prioritized, funded action plan with owners, and revisit it regularly.

## CSF and other frameworks

CSF isn't a certification; there's no CSF audit report the way there is for ISO 27001 or SOC 2. That's a feature. Many organizations use CSF as the **organizing structure** for their program and leadership reporting, then map it to the specific frameworks customers and regulators require. NIST's informative references make that mapping much easier.

## Why it's a good evergreen foundation

Specific technologies and threats change constantly. The questions CSF asks — do we know what we have, are we protecting it, would we notice an attack, could we respond and recover, and is leadership steering all of it — stay relevant no matter what's in the headlines.

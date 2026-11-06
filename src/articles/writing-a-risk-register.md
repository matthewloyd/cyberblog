---
title: "Building a Risk Register That People Actually Use"
description: "What fields a risk register needs, how to write entries that drive decisions, and how to keep the register alive after the first assessment."
category: Risk Management
date: 2026-11-06T06:00:00Z
takeaways:
  - "A register is a decision log, not an inventory of everything that could go wrong."
  - "Each entry needs a clear scenario, an owner, a rating, a treatment, and a review date."
  - "Review it on a fixed cadence and tie it to meetings that already happen."
---

A risk register is the single place where an organization records its known risks, what it's doing about them, and who is responsible. Most organizations have one. Far fewer have one that anyone opens after the annual audit. The difference is usually in how entries are written and how the register is maintained.

## The essential fields

Keep the structure simple enough that owners will update it. These fields cover what auditors, executives, and practitioners need:

| Field | What goes in it |
|---|---|
| **ID** | A stable identifier (R-014) that never gets reused |
| **Title** | A short, specific name: "Admin console takeover via phished credentials" |
| **Scenario** | One or two sentences: threat, vulnerability, asset, impact |
| **Category** | For example: access control, third party, resilience, data protection |
| **Owner** | A named person, not a team, with authority to act |
| **Inherent / current rating** | Likelihood × impact with today's controls |
| **Treatment** | Mitigate, transfer, avoid, or accept |
| **Action plan** | Specific controls, owners, and due dates |
| **Target / residual rating** | Expected rating once the plan is complete |
| **Status** | Open, in treatment, accepted, closed |
| **Linked controls & requirements** | Control IDs and framework references (e.g., ISO 27001 Annex A, SOC 2 criteria) |
| **Last reviewed / next review** | Dates that make staleness obvious |

Optional fields that earn their place in larger programs: risk appetite threshold, trend (rising, stable, falling), related incidents, and estimated financial exposure.

## Writing entries that drive decisions

Compare two entries:

> **Weak:** "Ransomware. High."

> **Strong:** "Ransomware delivered through a compromised remote-access account encrypts file servers and backups that share the same domain credentials, halting order fulfillment for 3+ days. Current: Likely × Severe. Plan: isolate backups with separate credentials and immutable storage (IT Ops, due March); require MFA on all remote access (Security, due February)."

The strong version tells a reader why the risk exists, what it would cost, and exactly what would reduce it. That's the difference between a register that informs decisions and one that only satisfies an audit.

Tips:

- **Name the weakness.** If you can't say which gap makes the scenario possible, the risk isn't well understood yet.
- **One scenario per entry.** Split "cloud misconfiguration" into the specific exposures that matter.
- **Write for a busy executive.** Plain language, no unexplained acronyms.

## Handling risk acceptance

Accepted risks belong in the register, not out of it. Record who accepted the risk, the rationale, any compensating controls, and an **expiry date**. Acceptance should be revisited, typically within a year, because the conditions that made it reasonable change.

Define who can accept what. A common pattern: managers can accept low risks, executives medium and high, and only the CEO or a board committee can accept anything critical.

## Keeping it alive

Registers die from neglect, not bad design. To keep one current:

1. **Attach it to an existing meeting.** Review the top risks monthly in a security or operations meeting that already happens, and quarterly with leadership.
2. **Make owners update their own entries.** Central teams that update everything themselves end up owning every risk.
3. **Feed it from real events.** Incidents, audit findings, penetration test results, and new projects should all trigger a check: is this a new risk, or does it change an existing rating?
4. **Close things.** When a treatment is complete and verified, reduce the rating or close the entry. Showing risks move is how you demonstrate the program works.
5. **Watch the dates.** Highlight anything past its review date. Staleness is the early warning sign of a register nobody trusts.

## Spreadsheet or tool?

A well-structured spreadsheet is fine for a few dozen risks and a small team. Move to a GRC platform when you need workflow (reminders, approvals), links between risks, controls, and evidence, or reporting across many business units. The fields and habits above matter far more than the software.

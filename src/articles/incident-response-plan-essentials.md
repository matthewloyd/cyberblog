---
title: "Incident Response Plan Essentials: What to Write Before You Need It"
description: "The core components of an effective incident response plan, from roles and severity levels to communication and lessons learned, and how to test it."
category: Security Operations
date: 2026-11-06T02:00:00Z
takeaways:
  - "Decide roles, severity levels, and decision rights before an incident, not during one."
  - "Know your notification obligations (regulatory, contractual, insurance) in advance."
  - "A plan that hasn't been exercised is a guess. Run tabletops at least annually."
---

Every organization will have security incidents. What separates a bad day from a disaster is usually preparation: knowing who's in charge, who to call, what you're legally required to do, and how to make decisions under pressure. An incident response (IR) plan captures those answers ahead of time.

Frameworks describe the lifecycle in slightly different words. NIST's classic model runs **preparation; detection and analysis; containment, eradication, and recovery; and post-incident activity**. NIST SP 800-61 Revision 3 (2025) reframes incident response around the CSF 2.0 Functions, emphasizing that response is part of overall risk management. Whichever model you use, the plan needs the same core pieces.

## 1. Purpose, scope, and definitions

State what the plan covers and define an **incident** for your organization. Distinguish an *event* (something observable, like a failed login) from an *incident* (an event that actually or potentially harms confidentiality, integrity, or availability, or violates policy). Clear definitions stop teams from either ignoring real problems or escalating everything.

## 2. Roles and responsibilities

Name roles, not just people, and list primary and backup contacts for each:

- **Incident commander:** owns the response, makes decisions, and keeps everyone coordinated. Doesn't do the technical work.
- **Technical lead:** directs investigation and containment.
- **Communications lead:** handles internal updates, customers, and media.
- **Legal and privacy counsel:** advises on obligations, privilege, and notification.
- **Executive sponsor:** approves major decisions such as taking systems offline or paying for outside help.
- **Scribe:** records a timeline of actions and decisions. This record is invaluable afterward.

Include contact details for external parties you may need fast: your cyber insurer and their breach hotline, outside counsel, a digital forensics and incident response (DFIR) firm, key vendors, and law enforcement contacts.

## 3. Severity levels

Define three or four severity levels with clear criteria, and specify what each level triggers:

| Severity | Example | Triggers |
|---|---|---|
| **Critical** | Confirmed ransomware; confirmed exfiltration of sensitive data | Full IR team, executive notification within 1 hour, legal engaged |
| **High** | Compromised privileged account; active malware on multiple hosts | IR team, security leader notified, legal on standby |
| **Medium** | Single compromised user account, contained | Security team handles; documented |
| **Low** | Blocked phishing campaign; policy violation without data exposure | Normal security operations |

Severity can change as you learn more. The plan should say who can raise or lower it.

## 4. Detection and reporting

Explain how incidents are reported (a dedicated email address, chat channel, or phone line) and make sure every employee knows it. Emphasize that reporting quickly, even if unsure, is always the right call.

## 5. Response playbooks

The plan describes the overall process. **Playbooks** give specific steps for common scenarios. Start with the few most likely or most damaging for your organization:

- Phishing and credential compromise
- Ransomware
- Lost or stolen device
- Data exposure (misconfigured storage, misdirected email)
- Third-party or vendor breach

Each playbook should cover initial triage, containment options, evidence to preserve, and who must be involved.

## 6. Communication and notification

Decisions about communication often matter as much as technical ones. Plan for:

- **Internal updates:** regular, factual, on a predictable schedule.
- **Out-of-band channels:** if email or chat may be compromised, have an alternative ready.
- **Customer and public messaging:** pre-approved templates that legal has reviewed.
- **Notification obligations:** breach-notification laws, sector regulators, contracts, and insurance policies may all impose deadlines, some as short as a few days or even hours. Build a table of what applies to you, the deadlines, and who decides. Review it regularly; requirements change.

## 7. Evidence handling

Explain how to preserve logs, disk images, and other evidence, and why responders should avoid wiping or rebuilding affected systems before evidence is captured. Engage counsel early if litigation or law enforcement involvement is possible.

## 8. Recovery

Define how you'll decide a system is safe to return to service, how to restore from known-good backups, and what heightened monitoring follows. Tie this to your business continuity and disaster recovery plans so priorities for restoration are agreed in advance.

## 9. Post-incident review

After significant incidents, hold a blameless review within a couple of weeks. Cover what happened, what went well, what didn't, and specific improvements with owners and dates. Feed findings into your [risk register](/articles/writing-a-risk-register/) and update the plan and playbooks.

## Testing the plan

Exercise the plan at least once a year with a **tabletop exercise**: walk key participants, including executives, through a realistic scenario and talk through decisions. Tabletops reveal missing contacts, unclear authority, and assumptions that don't hold up, at a fraction of the cost of finding them during a real incident.

Also check the basics quarterly: are contact lists current, can responders access the tools and logs they need, and have backups actually been restored recently?

## Keep it usable

Write the plan for someone reading it at 2 a.m. under stress. Short sections, checklists, and a one-page quick-reference card beat a long narrative. Store copies somewhere accessible even if your main systems are down.

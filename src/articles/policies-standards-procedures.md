---
title: "Policies, Standards, Procedures, and Guidelines: Getting the Hierarchy Right"
description: "The difference between a policy, a standard, a procedure, and a guideline, and how to structure security documentation so it stays short, current, and followed."
category: Governance
date: 2026-11-06T03:00:00Z
takeaways:
  - "Policies state intent, standards make it measurable, procedures explain how, and guidelines advise."
  - "Keep policies short and stable; push changeable details down into standards and procedures."
  - "A document nobody reads is a liability, not a control."
---

Security documentation tends to sprawl. One 80-page "Information Security Policy" ends up mixing executive principles, password length rules, and step-by-step instructions for resetting a VPN token. Nobody reads it, it's always out of date, and every small change needs executive approval.

The fix is a clear hierarchy. Each document type has a different job, audience, and rate of change.

## The four layers

### Policy: the "what" and "why"

A policy is a high-level statement of management intent. It says what the organization requires and why, and it assigns responsibility.

> *All access to company systems is granted on the principle of least privilege and reviewed at least quarterly.*

- **Audience:** everyone.
- **Approved by:** senior leadership.
- **Changes:** rarely; reviewed annually.
- **Mandatory:** yes.

### Standard: making it measurable

A standard sets specific, measurable requirements that put a policy into practice.

> *Privileged accounts must use phishing-resistant MFA. Access reviews for production systems are completed within 10 business days of each quarter's end.*

- **Audience:** those who build and run systems.
- **Approved by:** the security leader or a delegated owner.
- **Changes:** as technology and threats change.
- **Mandatory:** yes.

### Procedure: the "how"

A procedure is a step-by-step set of instructions for carrying out a task in a way that meets the standard.

> *1. Export the user list from the identity provider. 2. Send each system owner their list via the review ticket. 3. ...*

- **Audience:** the people doing the task.
- **Approved by:** the team that owns the process.
- **Changes:** whenever the process or tools change.
- **Mandatory:** yes, for those performing the task.

### Guideline: recommended practice

A guideline offers advice and good practice where flexibility is acceptable.

> *Consider using a password manager to generate unique passphrases for each service.*

- **Audience:** varies.
- **Mandatory:** no.

## Why the separation matters

- **Stability.** Policies rarely change, so executives aren't asked to re-approve documents every time a tool is replaced.
- **Ownership.** Each layer is owned by the people best placed to keep it accurate.
- **Readability.** Employees read a short policy. Engineers find exact requirements in a standard. Operators follow a procedure.
- **Audit clarity.** Auditors can trace a requirement from policy to standard to procedure to evidence.

## A practical starting set

Most small and mid-sized organizations can cover their bases with roughly ten policies:

1. Information security policy (the umbrella)
2. Acceptable use
3. Access control
4. Data classification and handling
5. Asset management
6. Change management
7. Incident response
8. Business continuity and disaster recovery
9. Vendor / third-party risk management
10. Secure development (if you build software)

Supporting standards and procedures can grow under each as needed. Resist the urge to write everything at once. Start with what auditors and customers ask about and what your risk assessment says matters.

## Writing documents people follow

- **Keep policies to one or two pages.** If it's longer, details belong in a standard.
- **Use "must" for requirements and "should" for recommendations,** and use them consistently.
- **Name an owner and a review date** on every document.
- **Define exceptions.** Explain how someone requests an exception, who approves it, and how long it lasts. Without a process, people make their own exceptions silently.
- **Match reality.** Don't document a control you don't perform. An auditor will find the gap, and so will an attacker.
- **Make them findable.** One intranet page, clearly organized, beats documents scattered across shared drives.

## Keeping them current

Review every document on a schedule: policies annually, standards and procedures whenever the underlying systems change. Track review dates in one place, and treat an overdue review like any other open finding. Documentation that reflects how the organization really works is one of the most cost-effective controls you have.

---
title: "The CIA Triad and Defense in Depth: Security's Two Core Ideas"
description: "Confidentiality, integrity, and availability define what security protects. Defense in depth describes how. Here's how to use both in everyday decisions."
category: Foundations
date: 2026-11-06T08:00:00Z
takeaways:
  - "Confidentiality, integrity, and availability are the three properties security protects."
  - "Different systems weigh the three differently, and that shapes which controls you pick."
  - "Defense in depth assumes any single control will eventually fail, so it layers several."
---

Almost every security decision can be traced back to two ideas. The **CIA triad** describes *what* we're protecting. **Defense in depth** describes *how* we protect it. If you understand both, you can reason through problems you've never seen before.

## The CIA triad

### Confidentiality

Information is available only to people and systems that are authorized to see it. Breaches of confidentiality are what most people picture when they hear "data breach": leaked customer records, exposed credentials, stolen intellectual property.

Typical controls: access control and least privilege, encryption, data classification, and multi-factor authentication.

### Integrity

Information and systems are accurate, complete, and changed only in authorized ways. An integrity failure can be subtle, like an attacker quietly changing bank account details on a vendor record, and it is often more damaging than a leak because people keep acting on bad data.

Typical controls: change management, input validation, hashing and digital signatures, audit logs, and separation of duties.

### Availability

Systems and data are there when authorized users need them. Ransomware, denial-of-service attacks, hardware failures, and misconfigurations all threaten availability.

Typical controls: backups (tested ones), redundancy, capacity planning, DDoS protection, and incident response and recovery plans.

## Weighing the three

The three properties are rarely equal. Asking which one matters most for a given system is one of the most useful questions in security.

| System | Top priority | Why |
|---|---|---|
| Patient health records | Confidentiality and integrity | Exposure harms patients; wrong data can harm them more |
| E-commerce checkout | Availability | Every minute down is lost revenue |
| Financial ledger | Integrity | Numbers that can't be trusted are worse than no numbers |
| Public marketing website | Availability and integrity | Content is public, but defacement or downtime hurts trust |

The answer drives control choices. Encrypting a public website's content adds little; making sure it can't be defaced adds a lot.

Many practitioners add related properties such as **authenticity** (you can verify who or what something came from), **non-repudiation** (someone can't credibly deny an action they took), and **privacy**. These are useful extensions, but the original three still cover most conversations.

## Defense in depth

Defense in depth means using **multiple, independent layers of controls** so that when one fails, and eventually one will, another stops or limits the damage.

Picture protecting customer data in a web application:

1. **Perimeter and network:** a web application firewall filters obvious attacks, and network segmentation keeps the database off the internet.
2. **Identity:** strong authentication with MFA, and access limited by role.
3. **Application:** secure coding practices, input validation, and dependency scanning.
4. **Data:** encryption at rest, with keys managed separately from the data.
5. **Detection:** logging and alerting that catch unusual queries or bulk exports.
6. **Response and recovery:** an incident response plan and tested backups.
7. **People and process:** training, code review, and change approval.

An attacker who gets past the firewall still faces authentication. One who steals a password still faces MFA. One who reaches the database finds encrypted data and trips an alert.

### Layer by type, not just by location

Strong layering mixes control *types*:

- **Preventive** controls stop an event (MFA, firewalls).
- **Detective** controls notice an event (logging, alerting, reviews).
- **Corrective** controls limit damage and restore normal operation (backups, incident response).

A program that's all prevention has no idea when prevention fails. Ask of any important asset: *if the main control failed today, how would we know, and how would we recover?*

### Avoid correlated failures

Layers only help if they fail independently. Three controls that all depend on the same admin account, or the same vendor, or the same unpatched server, are really one control. When you map your layers, look for the shared dependency that would take several of them down at once.

## Putting it to work

Next time you review a system, ask three questions:

1. Which of confidentiality, integrity, and availability matters most here?
2. What layers protect that property, and are they independent?
3. If the strongest layer failed silently, what would catch it?

Those questions will get you further than any checklist.

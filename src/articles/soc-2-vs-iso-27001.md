---
title: "SOC 2 vs. ISO 27001: Which One Do You Need?"
description: "How SOC 2 attestations and ISO/IEC 27001 certification differ in scope, process, cost, and market expectations, and how to pursue both without doubling the work."
category: Frameworks & Compliance
date: 2026-11-06T04:00:00Z
takeaways:
  - "SOC 2 is an attestation report from a CPA firm; ISO 27001 is a certification of your management system."
  - "SOC 2 is most expected in North America; ISO 27001 is recognized globally."
  - "Most controls overlap heavily, so build once and map to both."
---

If you sell software or services to businesses, sooner or later a customer will ask for a **SOC 2 report**, an **ISO 27001 certificate**, or both. They're often mentioned together, but they work differently. Understanding those differences helps you pick the right one first and avoid duplicate effort later.

## What each one is

**SOC 2** is an attestation framework from the American Institute of Certified Public Accountants (AICPA). An independent CPA firm examines your controls against the **Trust Services Criteria** and issues a report describing your system, your controls, and the auditor's opinion.

**ISO/IEC 27001** is an international standard for an **information security management system (ISMS)**: the policies, processes, and governance you use to manage information security risk. An accredited certification body audits your ISMS and, if it conforms, issues a certificate. The current version is ISO/IEC 27001:2022.

## Key differences at a glance

| | SOC 2 | ISO/IEC 27001 |
|---|---|---|
| **Output** | Detailed report (often 50+ pages) shared under NDA | Certificate (public) plus a statement of applicability |
| **Issued by** | Licensed CPA firm | Accredited certification body |
| **Focus** | Whether controls are designed and operating effectively | Whether a risk-based management system is in place and working |
| **Control set** | Trust Services Criteria; you define the controls that meet them | Clauses 4–10 are mandatory; Annex A lists 93 reference controls |
| **Scope** | Flexible; you choose the system and which criteria to include | Defined ISMS scope; must justify inclusion or exclusion of each Annex A control |
| **Validity** | Report covers a past period; customers expect a new one annually | Three-year certificate with annual surveillance audits |
| **Strongest demand** | North America, SaaS and tech buyers | Global; often expected in Europe and Asia-Pacific |

## SOC 2 in more detail

The Trust Services Criteria include five categories:

- **Security** (always required; often called the Common Criteria)
- **Availability**
- **Processing Integrity**
- **Confidentiality**
- **Privacy**

You include the optional categories that match what customers rely on you for. Many first-time reports cover Security alone, or Security plus Availability and Confidentiality.

There are two report types:

- **Type I:** controls are suitably designed as of a single date.
- **Type II:** controls are designed and *operated effectively* over a period, typically 3 to 12 months.

Type II is what most customers want. A Type I can be a useful stepping stone when you need something quickly.

## ISO 27001 in more detail

ISO 27001's mandatory clauses require you to understand your context, get leadership commitment, assess and treat risks, set objectives, run internal audits, conduct management reviews, and continually improve.

Annex A in the 2022 version groups 93 controls into four themes: **organizational** (37), **people** (8), **physical** (14), and **technological** (34). You don't have to implement every one. You document which apply in a **Statement of Applicability** and justify the exclusions based on your risk assessment.

Certification usually involves a two-stage audit: Stage 1 reviews documentation and readiness, and Stage 2 assesses whether the ISMS is implemented and effective. Surveillance audits follow in years two and three, then recertification.

## How to choose

Start with your customers:

- **Mostly U.S. or Canadian buyers, especially in tech?** SOC 2 is usually the first ask.
- **European, global, or public-sector buyers?** ISO 27001 often carries more weight.
- **Want a lasting governance structure, not just a report?** ISO 27001's management-system approach builds the habits (risk assessment, internal audit, management review) that keep a program healthy.

If sales has deals blocked right now, look at which requirement appears most in the security questionnaires and contracts in your pipeline. Pursue that one first.

## Doing both without doubling the work

The overlap is substantial. Access control, change management, vendor management, incident response, logging, encryption, and security awareness show up in both. To get there efficiently:

1. **Build one control set** and map each control to both SOC 2 criteria and ISO 27001 Annex A.
2. **Collect evidence once** in a shared repository.
3. **Use ISO 27001's ISMS as the backbone.** Its risk assessment and management review processes also satisfy much of SOC 2's governance and risk criteria.
4. **Align audit timing** where possible so fieldwork and evidence requests overlap.

## A word of caution

Neither a report nor a certificate means an organization is secure. Both show that defined controls exist and were operating when someone checked. Treat them as proof of a working program, not as the goal of one.

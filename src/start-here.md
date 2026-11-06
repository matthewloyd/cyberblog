---
layout: layouts/base.njk
title: Start here
description: A suggested reading path through the core concepts of GRC and cybersecurity.
permalink: /start-here/
---
<div class="page prose-page">

# Start here

New to governance, risk, and compliance, or want a refresher? Read these in order. Each builds on the one before.

<ol class="card-list compact">
{% set path = ["what-is-grc", "cia-triad-and-defense-in-depth", "risk-assessment-step-by-step", "writing-a-risk-register", "nist-csf-2-explained", "policies-standards-procedures", "soc-2-vs-iso-27001", "vendor-risk-management", "incident-response-plan-essentials", "security-metrics-for-the-board"] %}
{% for slug in path %}{% for p in collections.articles %}{% if p.fileSlug == slug %}
<li><a href="{{ p.url }}"><strong>{{ p.data.title }}</strong></a><br><span class="muted small">{{ p.data.description }}</span></li>
{% endif %}{% endfor %}{% endfor %}
</ol>

</div>

# The GRC Field Guide

An evergreen blog on governance, risk, compliance, and cybersecurity, built with [Eleventy](https://www.11ty.dev/). Plain HTML output, no JavaScript framework, fast and cheap to host anywhere.

## Run locally

```bash
npm install
npm start        # http://localhost:8080 with live reload
npm run build    # outputs the static site to _site/
```

## Write a new article

Add a Markdown file to `src/articles/`. The filename becomes the URL (`my-topic.md` → `/articles/my-topic/`).

```markdown
---
title: "Your Article Title"
description: "One or two sentences. Used on cards, in search results, and social previews."
category: Risk Management        # reuse an existing category or create a new one
date: 2026-12-01
updated: 2027-06-01              # optional: shown as "Last reviewed"
takeaways:                       # optional: renders a Key Takeaways box
  - "First point."
  - "Second point."
---

Your article in Markdown...
```

Topics, the article list, RSS feed, and sitemap update automatically. Add it to the reading path in `src/start-here.md` if it belongs there.

**Evergreen habit:** when you revisit an article, set `updated:` to the review date.

## Site settings

Edit `src/_data/site.js`: title, tagline, author, and `mainSite` (adds a link back to your main website in the header and footer). The public URL is detected automatically on Vercel; to force one, set a `SITE_URL` environment variable in Vercel (e.g. `https://blog.yoursite.com`).

## Deploy (Vercel)

1. Sign in at vercel.com with GitHub, then **Add New → Project → Import** `matthewloyd/cyberblog`.
2. Vercel reads `vercel.json` (Eleventy preset, `npm run build`, output `_site`). Click **Deploy**.
3. Every push to `main` redeploys automatically, and pull requests get preview URLs.

A GitHub Pages workflow is kept as a manual backup (Actions → "Deploy to GitHub Pages (manual backup)" → Run workflow).

## Connect it to your main website

**Subdomain (recommended), e.g. `blog.yoursite.com`**
1. Vercel project → **Settings → Domains → Add** `blog.yoursite.com`.
2. At your DNS provider, add the record Vercel shows (usually `CNAME blog → cname.vercel-dns.com`).
3. Vercel issues the HTTPS certificate automatically. Redeploy once so canonical links use the new domain.
4. Add a "Blog" link in your main site's navigation.

**Subfolder, e.g. `yoursite.com/blog`.** Your main site's host must proxy `/blog` to the Vercel deployment, and the blog must be built with `PATH_PREFIX=/blog/`. Workable, but more setup than a subdomain.

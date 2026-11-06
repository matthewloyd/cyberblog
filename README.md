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

Edit `src/_data/site.json`: title, tagline, author, the public URL (`url`, used for canonical links, RSS, and sitemap), and `mainSite`, which adds a link back to your main website in the header and footer.

## Deploy (GitHub Pages)

1. Push this folder to a GitHub repository (branch `main`).
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` builds and publishes the site via `.github/workflows/deploy.yml`.

The site also deploys unchanged to Netlify, Cloudflare Pages, or Vercel: build command `npm run build`, output folder `_site`.

## Connect it to your main website

**Option A: subdomain (recommended), e.g. `blog.yoursite.com`**
1. GitHub repo → Settings → Pages → Custom domain → enter `blog.yoursite.com`.
2. At your DNS provider, add a `CNAME` record: `blog` → `<your-github-username>.github.io`.
3. Tick **Enforce HTTPS** once the certificate is issued.
4. Set `url` in `src/_data/site.json` to `https://blog.yoursite.com`.
5. Add a "Blog" link in your main site's navigation pointing to it.

**Option B: subfolder, e.g. `yoursite.com/blog`.** This needs your main site's host to proxy or serve the files under `/blog`. Build with `PATH_PREFIX=/blog/ npm run build` and upload `_site/` there, or set up a reverse-proxy rule. Workable, but more setup than a subdomain.

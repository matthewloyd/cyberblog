// Site-wide settings. Edit the values below.

// The public address of the blog, used for canonical links, RSS, and the sitemap.
// Order of precedence: SITE_URL env var > Vercel's production domain > fallback.
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const url = (
  process.env.SITE_URL ||
  (vercelDomain ? `https://${vercelDomain}` : "https://cyberblog.vercel.app")
).replace(/\/$/, "");

export default {
  title: "The GRC Field Guide",
  tagline: "Practical, evergreen guidance on governance, risk, compliance, and cybersecurity.",
  description:
    "Plain-English, evergreen articles on governance, risk management, compliance frameworks, and security fundamentals.",
  url,
  author: "Willy Jones",
  // Link back to your main website (shown in the header and footer once changed from example.com)
  mainSite: { label: "Main site", url: "https://example.com" },
};

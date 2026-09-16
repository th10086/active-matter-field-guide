# Active Matter Phase 7 Pre-Launch Audit

Checked: 2026-09-16 (Asia/Shanghai)

## Build and route checks

- Astro static build: PASS
- Generated pages: 37 (including 404 and robots)
- Generated sitemap index: PASS
- Generated robots.txt: PASS
- Local route references: PASS
- Local media references: PASS
- Stale template/game scan: PASS

## SEO checks

- HTML files checked: 37
- Missing title: 0
- Missing meta description: 0
- Missing H1: 0
- Multiple H1s: 0
- Missing canonical: 0
- Missing JSON-LD: 0

## Responsive and interaction checks

- Mobile viewport checked in the local browser: PASS; no horizontal overflow.
- Mobile header exposes a navigation button and the site keeps the primary action visible.
- Official video is embedded with `youtube-nocookie.com` and is present on the homepage and relevant update pages.
- Canonical and sitemap domains still use the reserved placeholder `active-matter-field-guide.example`; replace only after the user supplies the purchased domain.

## Open pre-deployment items

- Replace the placeholder site domain in `astro.config.mjs` and `src/data/site.json`.
- Configure a real correction/contact channel before treating Contact as operational.
- Recheck regional price and any date-sensitive account-link wording immediately before publishing.
- Do not deploy until a domain is supplied and the user explicitly authorizes deployment.

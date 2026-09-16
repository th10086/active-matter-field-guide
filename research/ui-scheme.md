# Active Matter UI Scheme

Status: proposed for approval  
Date: 2026-09-16  
Scope: visual direction and responsive interface rules only. No production code is included in this phase.

## 1. Visual thesis

**Quantum unstable zone**: an English guide site that feels like a field notebook recovered from an unstable extraction zone. The surface is dark and mineral rather than glossy. Cold cyan identifies Active Matter and navigation focus. Amber marks loot, resources and actionable guidance. Coral marks hazards and version-sensitive warnings.

The visual language should feel tense, practical and readable. It should not look like a generic cyberpunk dashboard or a neon game-store landing page.

Default mode: dark. No light mode in the first release.

## 2. Color tokens

| Token | Hex | Use |
|---|---|---|
| `--bg-void` | `#080D12` | Page background and deep hero overlay |
| `--bg-panel` | `#101A21` | Cards, article rail and navigation panel |
| `--bg-raised` | `#17262D` | Hover, selected cards and code-like fact blocks |
| `--line-subtle` | `#29414A` | Borders, dividers and map-card outlines |
| `--text-main` | `#E7F1F2` | Headings and primary copy |
| `--text-muted` | `#9BB1B5` | Metadata, captions and secondary copy |
| `--matter-cyan` | `#55D6D0` | Brand accent, links, focus ring and verified facts |
| `--matter-amber` | `#F0B35B` | Loot, actions, highlights and active guide labels |
| `--hazard-coral` | `#E77362` | Warnings, unstable raid labels and missing-data notices |

Contrast intent: body text uses `--text-main` on `--bg-void` or `--bg-panel`; muted text is reserved for non-essential metadata. Focus rings use cyan with a 2px outline and an additional dark offset.

## 3. Typography

- Display: **Outfit**, self-hosted, 600–700 weight. Use for page titles, menu labels and large fact numbers.
- Body: **Inter**, self-hosted, 400–600 weight. Use for paragraphs, tables, captions and legal text.
- Do not use a Google Fonts CSS import. Add local font files through the page head during implementation.
- Body text: 16px minimum, 1.65 line height. Regular metadata: 13–14px. Page title: clamp 2.2rem–4.8rem. Avoid all-caps paragraphs.
- Use sentence case for navigation and headings. Reserve uppercase for small status labels such as `VERIFIED 0.4.0.93`.

## 4. Surface and texture

- Use a near-black background with two large, low-opacity radial gradients: cyan from the top-right and amber from the lower-left.
- Add a faint diagonal fracture texture with CSS gradients only. Keep it below 5% opacity so screenshots and body text remain dominant.
- Panels use 1px `--line-subtle`, 14px radius and a soft 0 12px 30px rgba(0,0,0,.22) shadow. Do not use glass blur as the default card treatment.
- Use 6px radius for compact tags and status pills. Avoid pill-shaped buttons for every control.
- Images keep their natural subject framing with a dark gradient at the bottom for captions; never crop a mapped object out of a hero.

## 5. Global shell

```text
┌──────────────────────────────────────────────────────────┐
│ AM mark  Getting Started  Maps  Systems  Enemies  ...   │
├──────────────────────────────────────────────────────────┤
│ breadcrumb / verification date                           │
│                                                          │
│ page content rail (max 1180px)                           │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ source note / related guides / footer                    │
└──────────────────────────────────────────────────────────┘
```

- Desktop header: 72px, sticky after the first scroll. The active menu has a cyan 2px lower rule and brighter text.
- Mobile header: 60px. Logo remains visible; menu opens as a full-width dark drawer with six accordion groups.
- Content rail: max-width 1180px, 24px side padding on desktop, 16px on mobile.
- Every article begins with breadcrumb, page title, one-sentence answer, and `Last verified` metadata. This keeps search visitors oriented without a large marketing hero.

## 6. Navigation

Primary menus and submenu labels follow the approved page matrix:

1. **Getting Started** — Beginner Guide, How Raids Work, PvE Mode, Raid Modes, Solo & Co-op
2. **Maps** — Maps Overview, Dalniy Island, Park, Gigastructure, Downtown
3. **Systems** — Workshop, Harmonization & Progression, Crossplay & Account Linking
4. **Enemies** — Enemies & Anomalies, Flowermen, Creature Field Guide, Anomalies
5. **Updates** — Latest Patch, Release Launch, Gigastructure, 250 Shades of Liberty, Fire Walk
6. **Game Info** — Release Date & Platforms, Editions & Price, System Requirements, Linux & Steam Deck, Languages & Controls, FAQ

Footer-only links: About, Sources & Editorial Policy, Contact, Privacy, Terms and Disclaimer.

## 7. Homepage wireframe

```text
┌──────────────────────────────────────────────────────────┐
│ official launch image + dark gradient                    │
│ ACTIVE MATTER                                            │
│ Extract what you can before the zone collapses.           │
│ [Start with the beginner guide] [Browse maps]             │
├──────────────────────────────────────────────────────────┤
│ 3 compact fact cards: Steam launch · PvE + PvP · 4       │
│ platforms                                                │
├──────────────────────────────┬───────────────────────────┤
│ Start here                    │ Current verified update   │
│ 4 guide cards                 │ 0.4.0.93 + short summary  │
├──────────────────────────────┴───────────────────────────┤
│ official trailer card: thumbnail placeholder → click load │
├──────────────────────────────────────────────────────────┤
│ Confirmed locations strip / latest guides / footer        │
└──────────────────────────────────────────────────────────┘
```

The first viewport gives a new visitor an answer and a next action. Stats are factual and date-labelled, not vanity counters.

## 8. Page templates

### Hub and guide index

- Intro block: H1, one-sentence purpose and a small `Verified` marker.
- 2-column desktop card grid, one-column mobile.
- Each card has a specific question-style title, one-line answer, category label and last-verified date.
- Use cyan for verified factual cards and amber for practical guides. Do not create a card for a withheld page.

### Article page

- Narrow reading column (720px) with a 260px desktop “On this page” rail.
- Hero image is 16:9 when it is genuinely mapped. Theme-only images are labelled as representative scenes in the caption.
- Fact blocks use a cyan left rule. Version-sensitive notes use a coral top border and explicit patch/date.
- End with “Related guides” selected from the same navigation group, then a source list.

### Map/location page

- Top: location identity, confirmed description, mode/update context.
- Use a tab-like row only for confirmed named locations; tabs are real links on mobile, not hidden content.
- If no trusted coordinates exist, show an “Official location overview” image and a text location index. Never draw fake extraction or loot markers.

### Enemy and anomaly page

- Entity card: confirmed name, type, official source, known behavior, and evidence boundary.
- Use orange/coral only for danger language, not for every heading.
- Unknown identity in a screenshot is captioned “Unidentified official scene” and never named by inference.

### Reference and legal page

- Text-first, no oversized hero. Use compact tables for platforms, languages, editions and requirements.
- Legal pages use the same dark shell but remove decorative textures behind long text for comfortable reading.

## 9. Components and interaction

- Buttons: rectangular 10px radius, 44px minimum height. Primary cyan fill with dark text; secondary transparent with a cyan border; warning coral only for caution links.
- Tags: `Guide`, `Map`, `Enemy`, `Update`, `Verified`, `Needs recheck`.
- Video: thumbnail webp, circular play button, click-to-load YouTube `youtube-nocookie.com` iframe with `autoplay=1`. Keyboard activation must work on the entire button.
- Mobile menu: `aria-expanded`, focus trap while open, Escape closes, and each accordion exposes its expanded state.
- Tables scroll only within their own container on narrow screens; the page itself must never acquire horizontal overflow.
- No search, filter, account, comments or speculative interactive map in the first release; they are not required by the approved scope.

## 10. Responsive behavior

- 1180px+: two-column article layout and 3-card homepage grid.
- 760–1179px: single article column, two-card grid, compact sticky header.
- Below 760px: one-card grid, stacked fact cards, full-width images, 16px page padding, no sidebar.
- At 200% text zoom, cards stack before text becomes clipped. All touch targets stay at least 44px.
- Captions remain visible below images on mobile rather than overlaying the subject.

## 11. Asset placement rules

- Home: `launch-active-matter-01.webp`, `game-active-matter-header-01.webp`, selected mapped/theme scenes, and the official release trailer thumbnail.
- Park/Flowermen/Gigastructure pages: use only the mapped rows in `asset-manifest.csv` for object-specific claims.
- Downtown and generic urban scenes remain labelled as official representative scenes unless mapping is confirmed.
- Every image reference must resolve to a manifest filename and retain source URL, license note, capture date and mapping status.
- Do not generate replacement game screenshots. If a page has no sufficient mapped media, keep it text-first or leave it out of the first release.

## 12. Acceptance checklist for UI approval

- [ ] Dark “quantum unstable zone” direction approved.
- [ ] Cyan/amber/coral token roles approved.
- [ ] Outfit + Inter self-hosted typography approved.
- [ ] Six-menu navigation and footer-only trust links approved.
- [ ] Homepage first viewport and article template approved.
- [ ] No light mode, fake map markers, unsupported screenshots or speculative widgets in first release.

After approval, Phase 6 will copy the template into the separate Active Matter project, apply these tokens and shell rules, then write the confirmed first-release pages from the page matrix.

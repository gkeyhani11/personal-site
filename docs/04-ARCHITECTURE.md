# 04 — Site Architecture & the Immersive Concept

## Stack decision: hand-crafted static (zero dependencies)
**index.html + css/site.css + js/main.js + assets/.** No framework, no build step.

Why, versus the alternatives seriously considered:
- **Next.js** (what Garret's product sites use): overkill for a one-page brand site —
  no routing, no data, no ISR needs. Adds node_modules, build pipeline, and upgrade
  treadmill to a site whose job is to be perfect and *stay* perfect.
- **Astro**: closest contender (islands, image pipeline), but still tooling for what is
  ultimately one meticulously crafted page.
- **Hand-crafted static**: total control over every byte (the wow here is craft),
  Lighthouse-100s achievable by construction, deploys anywhere (Vercel/Netlify/Pages),
  zero dependencies to rot, and the source itself becomes a portfolio artifact — any
  engineer who views source sees clean, intentional work.

Structure is componentized by discipline (CSS layers + BEM-ish naming, JS modules by
feature) so it stays maintainable without a framework.

> **v2 structure (2026-07-04).** Same single page and stack, new order and mood:
> nav (paper, serif wordmark) → hero (paper: H1 "Hi, I'm Garret.", lede, fact
> line, portrait card) → logo strip (white band) → Work (paper, two employer
> cards) → Apps (white: the tab-based app switcher exhibit + device frame) →
> the one teal band (engineering-honesty statement) → Projects (paper: MoveOn
> photo card, two project cards, patents strip) → About (white: basketball photo
> card, school line, family line) → Contact (paper) → footer. No dark sections,
> no scroll animations, no stat count-ups, no resume link. The v1 spec below is
> retained for history; where it conflicts, this note and 03-DESIGN v2 win.

## Page structure (single page, 8 movements)

### 0. Nav (fixed, glass-paper)
Monogram GK (gold on ink chip) · anchors: Work · Products · Projects · About · Contact ·
résumé button (ghost, gold border). Collapses to a clean overlay on mobile. 2px gold
scroll-progress hairline on top.

### 1. Hero — "the 10-second answer"
Paper band, court-arc SVG background at 3% ink. Left: mono eyebrow (`SOFTWARE ENGINEER ·
FOUNDER`), display headline in Fraunces:
"I build products that **ship**." then subline: "Software engineer at **Capgemini**
(Cloud & Custom Applications). Founder of **BerryBox** — four iOS products, one live on
the App Store." CTAs: `See the work ↓` (gold solid) · `Email me` (ghost). Right: headshot
in an ink card (photo's navy backdrop merges into the card — deliberate), gold hairline
frame offset for depth.
Below: **stat strip** (mono count-ups): `4 products built · 1,000+ users · US patent
issued · 800+ career points`.

### 2. Credibility strip
"Where my code runs" — Capgemini · HP · OperVu · Hamilton College logos, large, ink-mono,
color on hover. One hairline above/below. (Guide directive: corporate > app logos.)

### 3. Experience — "Where I've worked"
Editorial timeline (left rule with gold nodes):
- **Capgemini — Software Engineer (current)** big entry: Capgemini logo + HP client badge;
  3 bullets (nationwide agentic-AI deployment, Azure OpenAI/AI Search/Semantic Kernel via
  MCP, LAUNCH → return offer).
- **OperVu — SWE Intern**: logo, 2 bullets (surgical CV, ML pipelines under NDA).
Each entry: mono date range, role, place. Quiet, scannable, ATS-friendly copy.

### 4. THE SHELF — BerryBox product showcase (signature immersive moment)
The wow. A sticky-scroll product gallery — "an App Store made of my own apps":

- Desktop: a pinned split view. Left: chapter text (icon chip, name, status chip
  [`LIVE` gold / `IN REVIEW` ink / `COMING SOON` outline], one-paragraph story, stack
  chips, metric line, links to live site/App Store). Right: a CSS iPhone frame whose
  screen **cross-fades between real product UI** as the visitor scrolls through the four
  chapters; the chapter's brand accent tints the backdrop glow + chips. Ghost numeral
  (01–04) drifts behind.
- Scroll mechanics: the section is `4 × 100vh` tall; the visual column is
  `position: sticky`. Scroll position → active chapter (rAF-throttled). Keyboard/anchor
  fallback: each chapter is a real DOM section with an id; reduced-motion (and mobile)
  degrades to four stacked full-width cards — same content, zero pinning.
- Chapter content order: BeNow (launched, robot icon, purple slide) → Sentari (helmet,
  cream slide) → Sero (ultramarine icon SVG, framed mark + "tax season 2027") → Whenwise
  (teal, raw UI in the CSS frame).
- Section header: "BerryBox LLC" eyebrow + "Four products. One person." + one-line
  thesis: research-driven niches, organic distribution, engines verified against
  authoritative test vectors.

### 5. MoveOn + independent builds — "Also shipping"
- MoveOn feature card (hackathon-winner origin): team photo (hackathon.jpg) + typographic
  "M" placeholder logo + tagline + campusmoveon.com link.
- Two compact cards: Parking Spot Detection (CNN/CCTV, President & Campus Safety),
  Altcoin Sniper (Solana/Raydium scanner, Helius WS, asyncio).
- **Inventor strip**: "US Patent 11,565,160 — issued at 19" (basketball training pad) +
  pending smart-gutter application. Mono, hairlines, quietly extraordinary.

### 6. About — "Beyond the code" (ink band, full-bleed)
Basketball photo full-bleed left (dark gradient overlay), right column on ink:
- "3-year starter. 800+ points. Dean's List all 8 semesters." — the discipline argument,
  two sentences connecting D3 ball + double major + shipping.
- Hamilton College line with logo (B.S. CS + B.S. Math, 2022–2026, GPA 3.70).
- Family line: "Family is everything" + only-child detail — one warm sentence, small
  framed placeholder tile reserved for a family photo (guide says placeholder for now).

### 7. Contact + footer (ink)
"Let's build something." Email as the hero action (mailto + click-to-copy with feedback),
résumé download, links: BerryBox product sites, App Store, LinkedIn placeholder (add URL
when provided). Footer: © 2026 Garret Keyhani · Built by hand — no frameworks, no
templates. (That line is a flex that costs nothing.)

## SEO / meta
- `<title>Garret Keyhani — Software Engineer & Founder</title>`; meta description selling
  the same 10-second answer; canonical; OG + Twitter card (og.jpg); JSON-LD `Person`
  (name, jobTitle, worksFor Capgemini, alumniOf Hamilton, sameAs: product sites + App
  Store). Sitemapless (single URL) but robots-friendly.

## File layout
```
PersonalSite/
├── index.html
├── css/site.css          # layered: tokens → base → components → sections → motion
├── js/main.js            # modules: nav, reveals, counters, shelf, copy-email
├── assets/
│   ├── img/  fonts/  GarretKeyhani-Resume.pdf
├── favicon.svg  og.jpg  robots.txt
├── docs/                 # this planning library
└── assets/Photos/        # original untouched source photos
```

## Deploy
Own git repo (`git init` here — the enclosing home-dir repo must not own this project).
Push to GitHub → Vercel import (static, zero config) → attach domain when Garret picks
one (garretkeyhani.com suggested; unregistered as of research date — verify at purchase).
Until then the *.vercel.app URL is shareable.

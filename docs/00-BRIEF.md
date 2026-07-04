# 00 — Project Brief

> **v2 pivot (2026-07-04, founder feedback).** The first build read like a sales
> pitch and its look missed. New direction: voice is humble, friendly, nerdy
> (rules + full copy in [06-VOICE.md](06-VOICE.md)); visual language is a port of
> App4Web's "Calm Authority" (new [03-DESIGN.md](03-DESIGN.md), "Calm Craft").
> Two hard rules from Garret: no em-dashes anywhere, and no resume PDF on the
> site (it also stays out of git history). The success criteria below still hold
> except "the wow test" is now delivered through calm craft and one interactive
> exhibit, not motion theater.

## What this is
Garret Keyhani's personal website — his professional brand on the open web. The single
URL a recruiter, hiring manager, investor, or teammate lands on after seeing his name.

## The one-sentence positioning
**Garret ships.** Most new-grad engineers show coursework; Garret shows an LLC with four
iOS products (one launched and revenue-generating, one in App Review, two staged for
launch), enterprise AI work deployed nationwide at HP via Capgemini, a US patent issued
at 19, and a D3 basketball career — all before/around graduation. The site's job is to
make that undeniable within 10 seconds and richly explorable within 3 minutes.

## Audience, in priority order
1. **Recruiters / hiring managers** (10–30 s skim) — need: name, current role, credibility
   logos (Capgemini, HP), proof of shipping, résumé link, contact. Above the fold + one scroll.
2. **Engineers / technical interviewers** (2–5 min) — need: real architecture detail per
   project, stack breadth (Swift/SwiftUI, React Native, Next.js, Python/GCP/Azure), links
   to live products.
3. **Founders / collaborators / press** — need: the BerryBox story, the person behind it
   (basketball, family, Hamilton).

## Success criteria
- **The 10-second test:** a stranger can say "software engineer at Capgemini who also
  founded an app company with real products" without scrolling more than once.
- **The wow test:** at least one moment that makes a visitor say "wow" — delivered through
  craft (scroll-driven product showcase with real app UI) — never through gimmicks that
  cost professionalism.
- **The trust test:** every claim is real and verifiable — live links to the App Store,
  the four product sites, the patent. No inflated numbers, no fake mockups: every screen
  shown is genuine product UI.
- **Performance:** static, zero-dependency, self-hosted fonts; Lighthouse ≥95 across the
  board; loads fast on hotel wifi.
- **Professionalism:** would not look out of place linked from a Capgemini bio page.

## Non-goals (v1)
- No blog/CMS (can be added later; IA leaves room).
- No contact form (mailto + copy-to-clipboard email; no backend, no spam surface).
- No analytics requiring a cookie banner (Vercel/Plausible can be added later, cookieless).
- No phone number on the public web (email is the channel; the résumé PDF carries the rest).

## Source-of-truth hierarchy for facts
1. The **guide PDF** (newest: Dean's List 8/8, 3-year starter, 800+ points, portfolio list)
2. The **user's note**: accepted the Capgemini full-time offer — current role is Software
   Engineer, Cloud & Custom Applications practice (LAUNCH program)
3. The **résumé PDF** (experience bullets, patents, skills)
4. Each project's **repo README / live site** (verified 2026-07-04; all five URLs live)

Where they conflict, higher wins (e.g. guide's 8/8 Dean's List supersedes the résumé's 6/6).

## Related docs
- [01-CONTENT.md](01-CONTENT.md) — every fact and line of copy, sourced
- [02-ASSETS.md](02-ASSETS.md) — asset manifest with source paths + treatments
- [03-DESIGN.md](03-DESIGN.md) — design language: palette, type, motion laws
- [04-ARCHITECTURE.md](04-ARCHITECTURE.md) — IA, section specs, immersive concept, stack decision
- [05-BUILD-QA.md](05-BUILD-QA.md) — build order, QA checklist, deploy runbook

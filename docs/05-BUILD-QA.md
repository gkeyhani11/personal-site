# 05 — Build Order, QA Gates, Deploy Runbook

> **v2 additions (2026-07-04):**
> - Gate: `grep` the built HTML for `—` and `–`; the build fails the review if
>   either appears anywhere (Garret's rule: no em/en-dashes, use "to" in ranges).
> - Gate: no `resume` string, file, or link anywhere in the site or repo.
> - Gate: with JS disabled, all four app panels are readable stacked.
> - Gate: tab exhibit is keyboard-complete (arrow keys, real buttons,
>   `aria-selected`) and the cross-fade is instant under reduced motion.
> - Deploy: git history was rewritten (orphan commit) before the v2 push so the
>   old resume PDF is not retrievable from the repo; the GitHub push is forced.
>
> **v2.1: regenerating the Sero screenshot** (when the app UI changes): create a
> scratch xcodegen project whose only target wraps the local SeroUI package,
> with a ShotRoot view that mirrors RootScreen.main but sets
> `AppState.hasOnboarded = true` (sample data drives the engine numbers). Build
> for an iPhone simulator, `simctl status_bar override --time 9:41`, launch,
> `simctl io <udid> screenshot`, then convert to 750w WebP q88 as
> assets/img/sero-ui.webp. Never modify the App3 repo for this.

## Build order
1. **Repo hygiene** — `git init` (standalone repo; home-dir repo must not own this),
   `.gitignore` (.DS_Store, *.heic originals stay), README.
2. **Assets pipeline** — copy + `sips`-process every file per 02-ASSETS (resize/convert/
   rename); download woff2 fonts; copy résumé PDF; build favicon.svg + og.jpg.
3. **HTML skeleton** — full semantic document, all copy from 01-CONTENT, no styling.
   Content-complete before any CSS.
4. **CSS** — tokens → base/type → components (chips, cards, buttons, frames) → sections
   top-to-bottom → responsive passes (≥1200, 900, 600, 380) → print-sane.
5. **JS** — progressive-enhancement modules: reveals, counters, shelf controller, nav,
   copy-email. Site must be 100% usable with JS disabled (shelf falls back to stacked
   cards via `no-js` class swap).
6. **Meta** — OG/Twitter/JSON-LD/robots/favicons.
7. **Verify & polish** — checklist below, then commit.

## QA gates (all must pass before "done")
### Content truth
- [ ] Every fact traceable to 01-CONTENT; no invented numbers, no "coming soon" promises
      beyond the guide's language
- [ ] All 7 external links resolve (App Store, 5 product sites, mailto)
- [ ] Capgemini shown as CURRENT full-time role; internship framed as origin, not status
### Craft
- [ ] Type scale consistent; no orphan headlines at any breakpoint; measure ≤68ch
- [ ] Every image has real alt text; logos crisp on 2x displays (SVG where possible)
- [ ] Shelf: scroll through all 4 chapters — no jank (transform/opacity only), correct
      chapter at every scroll position, accent colors switch cleanly
- [ ] Reduced-motion: zero translation/scale animation; shelf renders stacked; count-ups
      render final values instantly
- [ ] JS disabled: full content readable top-to-bottom, nav anchors work
### Responsive
- [ ] 380px (SE), 600, 900, 1200, 1600 — no horizontal scroll, no overlap, hero photo
      and phone frames scale correctly
- [ ] Mobile nav overlay: opens, traps focus, closes on link tap + Esc
### Accessibility
- [ ] Keyboard-only full traversal; visible focus everywhere; skip link works
- [ ] Landmarks + heading order validate; contrast spot-checks (gold usage law)
### Performance
- [ ] Total transfer < 1.5 MB on first load (images lazy below fold, fonts subset)
- [ ] No layout shift on font load (size-adjusted fallback metrics); CLS ≈ 0
- [ ] Local Lighthouse: ≥95 perf, 100 a11y, 100 best-practices, 100 SEO

## Verification method
`python3 -m http.server` in repo root → drive in browser (both viewport extremes),
screenshot key states, run Lighthouse in Chrome, then re-run after fixes.

## Deploy runbook (for Garret)
1. `git init && git add -A && git commit` (done by Claude) → create GitHub repo
   `garretkeyhani/personal-site` → `git remote add origin … && git push -u origin main`.
2. vercel.com → Add New Project → import the repo → Framework preset: **Other** (static)
   → Deploy. Zero env vars.
3. Domain: buy `garretkeyhani.com` (verify availability at purchase) → Vercel → Domains
   → add + follow DNS instructions. `www` → apex redirect.
4. After DNS: paste the URL into LinkedIn, GitHub profile, résumé header, email signature.
5. Post-launch (optional): Vercel Analytics (cookieless) — one toggle, no banner needed.

## Maintenance rituals
- **When Sentari clears review:** flip its status chip to LIVE + add App Store link
  (one HTML edit, ~2 min).
- **When Sero/Whenwise launch:** same chip flip + link; consider swapping hero stat
  "4 products built" → "N products live".
- **Family photo:** replace the reserved placeholder tile in §About when ready.
- **LinkedIn/GitHub URLs:** placeholders marked `TODO(garret)` in index.html — add when
  Garret supplies them.
- Résumé PDF: keep `assets/GarretKeyhani-Resume.pdf` in sync with the real one.

# 02 — Asset Manifest

> **v2 changes (2026-07-04):** the exhibit shows raw app UI in one CSS device
> frame (`sentari-ui.webp` source: sentari-web/public/app-home.png). Fonts
> change to Source Serif 4 (600) + Inter; Fraunces and JetBrains Mono files are
> removed. The resume PDF is removed from the site and from git history.
> Favicon and og.jpg regenerate in the teal/paper style.
>
> **v2.1 asset corrections (founder review, same day):**
> - `benow-icon.png` now comes from the CURRENT app codebase:
>   "NewsTrader 1.1.3/NewsTraderApp/assets/images/icon.png" (violet robot face).
>   The newspaper-robot icon in "BeNow Materials" is outdated; never use it.
> - `benow-ui.webp` (v2.5) is the dashboard screen extracted from
>   BeNowWebsite/beacon-trader-suite/public/website4.png, the dashboard (gold-bezel mockup;
>   screen rect ~(54,28)-(1096,2170), center-cropped to device ratio).
>   IMG_7036.PNG (old dashboard) and the website1 signals screen are retired.
> - `sentari-ui.webp` (v2.3) is the **Bot Lab build tab**
>   (sentari-web/public/app-build.png, Sentari Classic template), matching the
>   corrected copy; the app-home screen is retired.
> - **Every phone screen is exactly 750x1625** (center-crop, WebP q88). Keep
>   that invariant when adding or replacing screens; the CSS frame also
>   enforces the ratio via aspect-ratio + object-fit.
> - `sero-ui.webp` is a REAL simulator capture of SeroUI's Home screen, taken by
>   a scratch harness app wrapping the SeroUI package with onboarding
>   pre-completed (recipe in 05-BUILD-QA). The Sero repo was not modified.
> - `family.jpg` added (source: assets/Photos/family.heic, EXIF stripped),
>   used in About, placed BEFORE basketball.

Every visual the site uses: source path on disk → processed file in `assets/img/`.
All processing via `sips` (macOS). Web sizes keep total page weight sensible; originals
never modified. Alt text is mandatory and listed here.

## Personal photos
| Site file | Source | Treatment | Alt |
|---|---|---|---|
| `headshot.jpg` | PersonalSite/assets/Photos/headshot.jpeg (1183×1437) | resize →900w, q85 | Garret Keyhani, professional headshot |
| `basketball.jpg` | PersonalSite/assets/Photos/basketball.jpeg (1071×1459) | resize →1400w, q85 | Garret Keyhani (#12, Hamilton) contesting a rebound at the rim |
| `hackathon.jpg` | PersonalSite/assets/Photos/hackathon.heic (4467×3350) | HEIC→JPEG, resize →1600w, q85 | The MoveOn founding team after winning the hackathon |
| (family) | — placeholder per guide | styled placeholder tile, no stock photo | — |

Notes: headshot has a dark navy studio backdrop — sits beautifully inside a dark-ink
hero card. Basketball photo: Garret is the Hamilton player, mid-air at the rim —
crop-safe from the top; use full-bleed with a dark gradient for text overlay.

## App brand assets
| Site file | Source | Notes |
|---|---|---|
| `benow-icon.png` | "BeNow Materials/icon.png" (1024²) | robot-reading-newspaper mark, navy field; resize →256 |
| `benow-shot.png` | "BeNow Materials/Slide 1 Phone.png" (1284×2778) | purple marketing slide w/ framed phone; resize →800w |
| `sentari-icon.png` | AppVariant/assets/images/icon.png (1024²) | white Spartan helmet on black; resize →256 |
| `sentari-shot.png` | "Sentari Materials/resized/Sentari 1 F@4x_1284x2778.png" | cream slide, framed phone, "Crypto trading on autopilot."; resize →800w |
| `sero-icon.svg` | App3Web/public/brand/sero-app-icon.svg | ultramarine field, coin+wedge; use as-is (vector) |
| `sero-mark.svg` | App3Web/public/brand/sero-mark.svg | two-tone mark for inline use |
| `whenwise-icon.png` | App4/Whenwise/…/AppIcon…/icon-1024.png | teal rising-W; resize →256 |
| `whenwise-shot.png` | Whenwise-AppStore-Screenshots/6.9-inch…/01-reveal.png (1320×2868) | RAW app UI (no frame) — site renders it inside a CSS iPhone frame; resize →750w |
| MoveOn | none (guide: placeholder) | render a typographic "M" tile in site accent |

## Company / institution logos
| Site file | Source | License / usage notes |
|---|---|---|
| `capgemini.svg` | Wikimedia Commons `Capgemini_201x_logo.svg` (downloaded, verified) | nominative use on a personal résumé site (identifying an employer) — standard practice |
| `hp.svg` | Wikimedia Commons `HP_logo_2012.svg` (downloaded, verified) | same — identifies the client engagement |
| `opervu.png` | opervu.com/assets/img/logo.png (downloaded) | blue swirl + orange wordmark, transparent bg; sits on light only |
| `hamilton.svg` | Wikimedia Commons `Hamilton_College_logo.svg` (downloaded) | official wordmark; the on-disk hackathonCC PNG is a stylized dark graphic — do not use |

Guide directive: corporate logos (Capgemini, HP) get **more** emphasis than app logos —
they anchor a credibility strip near the hero and lead the Experience section.

## Screenshots available but NOT used in v1 (kept in reserve)
- Sentari slides 2–5 (resized/…2778.png) — feature slides: could power a per-app gallery later
- Whenwise slides 02–06 (breakeven, privacy, couple, plan, keep-detail)
- BeNow iPad slides 1–4, tier cards (tier1–3.PNG), promo video files (.mp4/.mov)
- sentari-web/public/app-home.png, app-signals.png, app-build.png (raw UI captures)
- App4Web/public/screens/reveal.png (duplicate of whenwise 01)

## Fonts (self-hosted, `assets/fonts/`)
- **Fraunces** (display serif; 600, 700 + 600-italic) — via Google Fonts woff2
- **Inter** (body; 400, 500, 600) — via Google Fonts woff2
- **JetBrains Mono** (stats/labels; 500) — via Google Fonts woff2
All `font-display: swap`, subset latin. No runtime requests to Google.

## Meta assets
- `favicon.svg` — hand-drawn "GK" monogram, ink field, gold letterforms
- `apple-touch-icon.png` + `favicon-180.png` — rendered from the monogram
- `og.jpg` — 1200×630 Open Graph card (headshot + name + role on ink field)
- `GarretKeyhani-Resume.pdf` — copy of Desktop/GarretKeyhaniResume.pdf (verify it's the
  current version before shipping; update Dean's List 6/6→8/8 is Garret's call, not ours)

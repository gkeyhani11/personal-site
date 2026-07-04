# 03 : Design Language v2, "Calm Craft"

*2026-07-04, second direction after founder feedback. The first draft ("Editorial
Ink") read like a pitch: gold accents, count-up stats, scroll theater. Garret's
verdict: the site should feel like a display of who he is, not a sale. His favorite
shipped work is App4Web (whenwiseapp.com), so this language is a direct port of that
site's "Calm Authority, Print Edition" system, adapted for a personal page. The
App4Web design law (App4Web/docs/DESIGN.md) is the parent document; where this file
is silent, that one governs.*

## 1. Philosophy

The visitor should feel like they are reading a beautifully set page about a person,
not being marketed to. Confidence lives in the typography; humility lives in the
claims. Concretely:

1. **Static at rest is premium.** No scroll-entrance animations, no count-ups, no
   parallax, no progress bars. Content is simply there, perfectly set.
2. **One accent, one peak.** Teal is the only color the page ever asserts. Exactly
   one full-teal band exists on the whole page (the engineering-honesty statement).
3. **Real artifacts over decoration.** The color on the page comes from real app
   screens in a device frame and real photographs. Nothing ornamental.
4. **One working exhibit.** A single interactive moment (the app switcher) mirrors
   App4Web's claiming slider: the visitor acts, the page answers. Everything else
   is print.

Banned: em-dashes and en-dashes in copy (use commas, colons, periods, "to"),
exclamation points, count-up numerals, gradients as decoration, grayscale-to-color
hover tricks on logos beyond a gentle one, salesy headlines, the word "passionate",
mono-font stat blocks, dark hero sections, more than one accent per view.

## 2. Color tokens (light only)

Identical to App4Web's tokens. Teal carries over deliberately: it is Garret's
favorite shipped look and ties his properties together.

| Token | Hex | Role |
|---|---|---|
| `paper` | `#FAFAF8` | page background |
| `card` | `#FFFFFF` | cards, elevated surfaces, alternating bands |
| `ink` | `#111827` | headlines, body strong |
| `ink-2` | `#4B5563` | body, supporting copy (4.5:1 on paper) |
| `ink-3` | `#8A8E96` | labels 15px and up only, never body |
| `accent` | `#008F76` | the one accent: primary pill, marks, active tab |
| `accent-ink` | `#0A6B5D` | teal as text or hover (4.5:1) |
| `band` | `#0A6B5D` | the single full-teal section |
| `hairline` | `#E7E5DE` | 1px rules, card borders, band separators |

Rule: within any viewport-height of scroll, teal is the only color the site itself
contributes. App screenshots and photos carry their own colors and that is enough.

## 3. Typography

- **Source Serif 4**, weight 600, display only: H1, H2, the teal-band statement,
  the nav wordmark. Sentence case. Headlines may end with a period.
- **Inter** for everything else: body, links, buttons, captions, chips.
  Numbers in running text use `font-variant-numeric: tabular-nums`.

| Role | Spec |
|---|---|
| H1 | Serif 600, `clamp(2.4rem, 5.5vw, 4rem)`, leading 1.08 |
| H2 | Serif 600, `clamp(1.8rem, 3.2vw, 2.5rem)`, leading 1.15 |
| Lede | Inter 400, 1.25rem, `ink-2`, leading 1.6 |
| Body | Inter 400, 1.125rem (18px), leading 1.65, measure 65ch max |
| Card title | Inter 600, 1.1875rem |
| Caption / label | Inter 500, 0.9375rem (15px floor, nothing smaller) |
| Button | Inter 600, 1.0625rem |

No justified text, no italic paragraphs, links in running text always underlined
(`accent-ink`, underline offset 3px).

## 4. Space, shape, elevation

- Content rail 72rem (`max-w-6xl` equivalent), prose rail 65ch, 4px grid.
- Section rhythm ~96px mobile to ~128px desktop. Whitespace is the loudest premium
  signal: when in doubt, add space and remove an element.
- Bands alternate paper and white, separated by 1px hairlines (print texture).
  There is no dark band except the single teal one.
- Cards: 16px radius, white surface, 1px hairline border, shadow
  `0 1px 2px rgb(17 24 39 / 0.06)` and never heavier.
- Buttons: pill radius. Primary = teal fill, white text. Secondary = white fill,
  hairline border, ink text. Text links: underlined, no button dressing.
- Touch targets 48px. Focus ring: 3px accent, 3px offset.

## 5. Signature components

- **Device frame**: CSS-drawn iPhone, matte near-black bezel `#1D1F22`, 55px outer
  radius, thin inner highlight, real screenshot inside. Same construction as
  App4Web's. All four app screens present in this one frame.
- **The app switcher (the one exhibit)**: four real tabs (BeNow, Sentari, Sero,
  Whenwise) above a two-column stage: copy left, device frame right. Selecting a
  tab swaps the copy and cross-fades the screen (200ms opacity, instant under
  reduced motion). Built as genuine buttons with `aria-selected` and arrow-key
  support; with JS off, all four panels render stacked and complete.
- **Status chip**: quiet pill next to each app name. "Live on the App Store"
  (teal wash), "In App Review", "In progress". Inter 500, 15px, never shouting.
- **The teal band**: white serif statement about engineering honesty (the shared
  test-vector story). The page's one visual peak.
- **Fact line**: small `ink-3` line under the hero ("Houston, TX · Hamilton
  College '26 · computer science and mathematics"). Replaces v1's count-up stat
  strip entirely.
- **Logo strip**: Capgemini, HP, OperVu, Hamilton at generous size on a white
  band, softly desaturated at rest, full color on hover. Still more prominent
  than any app icon (guide directive holds).

## 6. Motion

The app-switcher cross-fade is the only choreographed motion on the page. Link
underlines may thicken on hover, buttons may darken. That is the complete list.
`prefers-reduced-motion` makes the cross-fade instant. No IntersectionObserver
reveals anywhere: the page must read perfectly with JavaScript disabled.

## 7. Accessibility

Same contract as v1 (it passed Lighthouse 100 and stays): semantic landmarks, one
h1, ordered headings, skip link, keyboard-complete, visible focus, all text 4.5:1
or better, alt text per the asset manifest, no color-alone meaning. The tab
exhibit adds: `role="tablist"`, arrow keys, and a no-JS stacked fallback.

## 8. Voice (summary; full deck in 06-VOICE.md)

First person, plain English, sentence case, humble, friendly, nerdy. Numbers stay
in sentences, not stat blocks. Delight lives in specifics ("259 shared test
vectors") rather than adjectives. No selling. Never an em-dash.

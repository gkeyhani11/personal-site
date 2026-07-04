# 07 : Mobile Remodel (2026-07-04)

A dedicated pass for phone visitors. Constraint from Garret: the computer version
does not change. Everything here lives inside the `max-width: 719.5px` media
block (plus two tiny desktop-invisible HTML span wrappers), so desktop rendering
is untouched by construction. The 720 to 1023 tablet band keeps its existing
behavior.

## Research inputs

1. **Full audit** at 390px and a 320px stress pass, section by section
   (screenshots in the session log). No horizontal overflow anywhere; the page
   was functional but "shrunk desktop", not designed for the thumb.
2. **Parent design (App4Web) mobile DNA**, extracted from its source:
   sections keep their generous padding on phones (py-24 everywhere, px-5 rail);
   grids collapse to one column; the device frame centers below the text; the
   mobile nav is just the serif wordmark plus the one primary pill, no
   hamburger.
3. **Guidelines:** Apple HIG 44pt minimum touch targets (Material uses 48dp);
   NN/g's hidden-navigation research (hamburger menus measurably reduce
   discoverability and engagement). On a one-page site, scrolling is the
   navigation, so hiding anchors behind a hamburger buys nothing.

## Audit findings → decisions

| # | Finding at 390px | Decision |
|---|---|---|
| 1 | Nav: hamburger opens a full overlay for what is just five anchors | Phones drop the hamburger entirely (parent pattern): bar = wordmark + `Get in touch` pill. Overlay CSS/JS stays for no-JS and is inert on phones |
| 2 | Hero: full-width portrait dangles below the fact line, pushing content a viewport down; left-aligned image feels unfinished | Profile pattern: the same portrait img becomes a compact 96px rounded avatar ABOVE the H1 (CSS reorder + square crop, `object-position` keeps the face). Everything above the fold: avatar, name, lede, actions |
| 3 | Fact line wraps mid-clause into a run-on | Fact line split into three stacked lines on mobile (location + local time / school / study). HTML gains three spans, invisible to desktop rendering |
| 4 | Logo strip wraps ragged 3+1 | Deliberate 2x2 grid, centered cells |
| 5 | Apps tabs wrap ragged 2+2 with uneven widths | Deliberate 2x2 grid of equal-width tabs, all four apps always visible (no horizontal scroller, nothing hidden) |
| 6 | App phone screen left-aligned, feels off-balance | Phone centered, 280px, below the copy (copy-first keeps the desktop hierarchy) |
| 7 | About photos render extremely tall; school row (logo + text) is cramped side-by-side | Photos capped (`max-height` + `object-fit: cover`); school block stacks vertically |
| 8 | Contact buttons wrap unevenly (1 + 2) | The three actions stack full-width (thumb-friendly), centered |
| 9 | Footer: left-aligned cluster, small tap targets | Everything centered and stacked; links get padded 44pt-class targets |

Also global on phones: link rows (`panel__links`, footer nav) get vertical
padding so every target clears ~44pt; section rhythm is otherwise KEPT generous
(the parent deliberately does not shrink whitespace on mobile, and neither do
we).

## What explicitly does not change

- Desktop and tablet rendering (all new rules are inside the phone media block).
- Copy, images, order of sections, the switcher mechanism, reduced-motion and
  no-JS behavior (no-JS on phones shows the stacked panels and inline nav links,
  same as before).

## Verification gates

- 320 / 375 / 390 / 430 widths: no overflow, no ragged wraps, avatar crop keeps
  the face, every interactive target comfortable for a thumb.
- Desktop regression: 1440px screenshot pixel-compared against pre-change
  screenshot (allowing only the live-clock text to differ).
- Lighthouse (mobile emulation): accessibility stays 100.

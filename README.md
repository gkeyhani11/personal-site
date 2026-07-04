# garretkeyhani.com

Garret Keyhani's personal site — hand-crafted static HTML/CSS/JS, zero dependencies,
zero build step.

- **Planning library:** [`docs/`](docs/00-BRIEF.md) — brief, content dossier, asset
  manifest, design language ("Calm Craft", ported from whenwiseapp.com), architecture, QA gates & deploy runbook.
- **Develop:** `python3 -m http.server` in this folder → http://localhost:8000
- **Deploy:** push to GitHub → import in Vercel (preset: Other) → done. Full runbook in
  [`docs/05-BUILD-QA.md`](docs/05-BUILD-QA.md).

## Updating

| When | Change |
|---|---|
| Sentari clears App Review | flip its chip to `Live on the App Store` + add the App Store link (index.html) |
| Sero / Whenwise launch | same chip flip + App Store links |
| Family photo ready | replace the dashed placeholder tile in §About |
| LinkedIn / GitHub URLs | search `TODO(garret)` in index.html (no resume on the site, per Garret) |

Original photos live untouched in `assets/Photos/`; web-optimized copies in `assets/img/`.

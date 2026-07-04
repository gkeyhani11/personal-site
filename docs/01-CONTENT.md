# 01 — Content Dossier

Every fact the site may state, with its source. **Nothing on the site may contradict
this file.** Copy on the page may be tightened but never inflated.

## Identity
| Fact | Value | Source |
|---|---|---|
| Name | Garret Keyhani | résumé |
| Current role | Software Engineer, Capgemini — Cloud & Custom Applications **practice** (never "team"); full time since 2026, **based in Chicago, IL**, and the role just started (be transparent about that) | user notes 2026-07-04 |
| Location | **Chicago, IL** (the LAUNCH internship was Houston; do not present Houston as current) | user note 2026-07-04 |
| Company (founder) | BerryBox LLC — builds iOS + web apps | guide |
| Email | keyhanigarret@gmail.com | résumé |
| Education | Hamilton College — **B.A.** (Hamilton awards the B.A.; the résumé's "two B.S." is wrong), 2022–2026. Math was a **minor**, not a second major; Garret's preferred public phrasing is "**concentrated in computer science and math**", which is what the site says. Never claim two degrees. | user correction 2026-07-04 (supersedes résumé) |
| GPA / honors | 3.70 GPA; **Dean's List 8 of 8 semesters** | guide (supersedes résumé's 6/6) |
| Basketball | Varsity basketball at Hamilton — **3-year starter, 800+ career points** | guide |
| Patent (issued) | US Patent No. 11,565,160 (Jan 31 2023) — basketball training pad; controller converts dribbling characteristics into user feedback | résumé |
| Patent (pending) | US App. No. 17/373,755 — self-cleaning smart gutter system | résumé |
| Family | Family is everything; only child | guide (photo placeholder for now) |

## Experience

*Site structure (per founder, 2026-07-04): four separate boxes, newest first:
(1) Capgemini full time, Chicago, 2026 to present, just started, say so plainly;
(2) HP as its own box with the HP logo, framed as consultant work through
Capgemini (the agentic-AI support-portal content lives here);
(3) Capgemini LAUNCH internship, Houston, Jun to Aug 2025, reframed around the
program, the intern case study, and the return offer;
(4) OperVu internship.*

### Capgemini — Software Engineer (current) · Chicago, IL
*Cloud & Custom Applications practice. Joined full time in 2026 after the LAUNCH
internship (Jun–Aug 2025, Houston) earned a return offer. Client work to date: HP.*
- Designed an **agentic AI solution for HP's customer support portal** — case-history-driven
  troubleshooting for support agents — **deployed nationwide**.
- Built the chatbot backend: **Azure OpenAI** (embedding + chat), **Azure AI Search**
  (vector store), **Microsoft Semantic Kernel**, shipped as an API via **MCP server**.
- Case study on AI-driven customer-satisfaction strategies, presented to stakeholders.
- Logos: Capgemini (primary), HP (client) — per guide, corporate logos get *more*
  visual emphasis than app logos.

### OperVu Surgical Technologies — Software Engineer Intern · Palo Alto, CA (Oct 2024 – Apr 2025)
- AI-powered **surgical instrument tracking**: multi-camera video analytics + computer
  vision to detect and prevent retained surgical items in the OR.
- ML pipelines end-to-end: data labeling, model training, multi-view integration; worked
  under NDA within a proprietary backend.

## BerryBox LLC — the product portfolio
*Order on site = maturity order (launched → in review → coming soon).*

### 1. BeNow — AI crypto trader (LAUNCHED)
- **Status line:** Launched · thousands of downloads · thousands in revenue (guide);
  ~1,181 registered users as of Apr 2026 (repo README)
- **Tagline (live site):** "News-powered AI crypto trading signals… Be first to act on
  market-moving events in crypto."
- **What it is:** News-driven crypto auto-trading platform. Monitors 10 financial news
  RSS feeds every 12 min → Azure OpenAI embeddings → cosine-match vs ~1,000 pre-embedded
  prompts → o4-mini classifies BUY/SELL/HOLD → push notification → optional auto-execution
  on Kraken. Live + simulated modes, tiered Apple IAP subscriptions.
- **Stack:** Python 3.11 · Google Cloud Run + Compute Engine · Firebase RTDB · Azure
  OpenAI · Expo/React Native (iOS)
- **Links:** App Store `apps.apple.com/us/app/benow-ai-crypto-trader-bot/id6748277635` ·
  `benowtrader.com`
- **Repo:** Desktop/NewsTrader 1.1.3 (app), Desktop/BeNowWebsite (web)

### 2. Sentari — crypto trading on autopilot (IN APP REVIEW)
- **Status line:** Under Apple review
- **Tagline (App Store slide / live site):** "Crypto trading on autopilot. Your AI agent
  reacts to breaking news around the globe." / "Crypto moves on news, not charts."
- **What it is:** A complete rebrand + elevated front-end on BeNow's proven backend —
  same signal pipeline and trade engine, zero added infra cost; new identity, IA,
  onboarding, dashboard. The "flagship reskin-and-rebuild" discipline: backend is sacred,
  frontend is a clean slate.
- **Stack:** Expo/React Native · TypeScript · Firebase · same Python/GCP backend
- **Links:** `sentaritrader.com`
- **Repo:** ~/AppVariant (app), Desktop/sentari-web (site)
- **Brand:** black + white Spartan-helmet mark; cream marketing canvases

### 3. Sero — creator tax & income tracker (COMING SOON)
- **Status line:** Coming soon · targeted at tax season 2027
- **Tagline (live site):** "Know what to set aside." — creator tax calculator; estimates,
  not advice.
- **What it is:** iOS app that tells 1099 content creators how much of each payout is
  theirs to spend vs. set aside for taxes. Deterministic Swift tax engine (19/19 tests vs
  IRS 2025/2026 figures); the marketing site's TypeScript calculator is pinned to the
  Swift engine by **259 dumped test vectors** — web and app cannot disagree by a dollar.
- **Stack:** SwiftUI · Swift Package tax engine · Supabase + Edge Functions · Claude API ·
  Next.js 16 site
- **Links:** `taxwithsero.com`
- **Repo:** Desktop/App3 (app), Desktop/App3Web (web)
- **Brand:** ultramarine `#2C3FD6`, white coin + amber wedge mark

### 4. Whenwise — Social Security claiming planner (COMING SOON)
- **Status line:** Coming soon · build 1.0.0 on TestFlight
- **Tagline (live site):** "See your check at 62, 67 & 70… computed with SSA's published
  formula. Private: nothing leaves your iPhone."
- **What it is:** iOS Social Security claiming & retirement paycheck estimator. SSA's
  published formula to the dollar (51-test engine incl. SSA max-earner oracle), break-even
  ages, spousal combinations. **Zero network calls in v1 — no account, no email, no PII
  off-device, no third-party SDKs.**
- **Stack:** SwiftUI · WhenwiseCore Swift engine · StoreKit 2 · Next.js 16 site
- **Links:** `whenwiseapp.com`
- **Repo:** Desktop/App4 (app), Desktop/App4Web (web)
- **Brand:** "Calm Authority" — teal `#008F76`, paper `#FAFAF8`, serif reveal numbers

### MoveOn — institutional reuse platform (SEPARATE FROM BERRYBOX; elevated per founder 2026-07-04)
- **Status:** Hamilton College **green-lit an official pilot for fall 2026**; the plan
  is to use pilot data to reach other schools. Present MoveOn as an institutional
  tool with momentum, never as "just a hackathon project."
- **Origin:** started with friends after **winning a hackathon** (photo: 4-person team)
- **Tagline (live site):** "Campus giving, reimagined. Give things a second life."
- **What it is:** Multi-school reuse platform — per-campus feeds (school isolation
  enforced at the database with RLS), real-time messaging, live points economy with
  admin-controlled earn rates, perks store, badges, leaderboards, CO2 impact tracking
  calibrated against EPA lifecycle data, Move-Out Mode, full admin dashboard with
  per-school and cross-school analytics, moderation + fraud review + appeals
  (see hackathonCC/FEATURES.md).
- **Stack:** Next.js · Supabase (RLS, triggers, stored procedures) · Tailwind
- **Links:** `campusmoveon.com` · no logo yet (guide: use placeholder)
- **Repo:** Desktop/Hackathon/hackathonCC

## Independent projects (compact cards)
- **Parking Spot Detection** (Oct–Dec 2025, wrapped; not ongoing) — CNN pipeline classifying parking-spot
  occupancy from campus CCTV; PyTorch/Lightning; coordinated with Hamilton's President &
  Head of Campus Safety; foundation for a real-time availability app.
- **Altcoin 'Sniper' Bot** (Jul–Oct 2025) — real-time Solana scanner: watches new Raydium
  CPMM pools, reconstructs pair/vault context per transaction, filters by liquidity, LP
  concentration, sellability. Helius WebSocket/HTTP, Python asyncio, TTL dedupe/backoff.

## Skills block (from résumé)
Proficient: Python, C/C++, JavaScript · Familiar: TypeScript, HTML, Ruby, Haskell,
Assembly · Frameworks: SwiftUI*, React Native, Next.js*, Firebase, Semantic Kernel,
SQL/NoSQL · Cloud: GCP (Cloud Run, Compute Engine), Azure (OpenAI, AI Search), AWS ·
Plus: WebSockets, agentic AI, MCP.
*SwiftUI/Next.js evidenced by the repos even though the résumé predates them.

## Headline stat strip (hero)
- `4` iOS products built (1 launched, 1 in review, 2 staged)
- `1,000+` users on BeNow (defensible: 1,181 registered Apr 2026)
- `US patent` issued at 19 (No. 11,565,160)
- `800+` career points, 3-year D3 starter
- (Alternate: `8/8` semesters Dean's List)

## Voice & tone
First person, confident, concrete, zero fluff. Short declaratives. Numbers over
adjectives. Never "passionate about" / "aspiring" — the work speaks. Section headers can
carry personality ("Things I've shipped", "Where I've worked", "Beyond the code").

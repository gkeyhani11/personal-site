# 06 : Voice and Copy Deck (v2)

The complete text of the site. Facts trace to 01-CONTENT.md; this file controls
tone. If copy on the page differs from this deck, one of them is wrong.

## Voice rules

1. First person, like Garret is showing a friend around, not presenting.
2. Humble, friendly, nerdy. Delight comes from specifics, never adjectives.
3. Sentence case everywhere. Section headers never end with a period (founder,
   2026-07-04). Full-sentence statements (the teal band, body copy) keep normal
   punctuation.
4. **No em-dashes, no en-dashes, ever.** Commas, colons, periods, parentheses,
   and the word "to" in ranges.
5. No exclamation points. No "passionate", "innovative", "leverage" (as a verb),
   "world-class", or any word Garret would not say out loud.
6. Numbers live inside sentences ("a little over 800 points"), never in stat
   blocks with count-ups.
7. It is fine to be quietly proud ("used nationwide") and fine to admit being
   early ("the portfolio is young"). The mix is the voice.
8. Casual, never cute or dramatic. Rejected on those grounds: "my little app
   company", "family is everything to me", "the reason I build anything at
   all", "I'm the new person in the practice", "an excuse to learn something I
   didn't know". Do not mention the intern cohort either; at a 400k-person
   company it reads as filler. Basketball is real but not a headline piece of
   his identity; adaptability is.

## Nav

Wordmark: `Garret Keyhani` (serif). Links: `Work` `Apps` `Projects` `About`.
Pill: `Get in touch`. ("Say hello" appears exactly once on the page, as the
contact heading; founder flagged three uses as redundant.)

## Hero

- H1: `Glad you're here` (no period; picked 2026-07-04 over "Hi, I'm Garret" and name-only options. The OG card headline matches.)
- Lede: `I'm a software engineer at Capgemini in the Cloud & Custom Applications
  practice. Outside of work I'm building a few things. One of them is BerryBox,
  my app portfolio: four iOS apps so far, with more on the way.`
  ("A few things" and "one of them" are deliberate: BerryBox is neither the
  only thing nor the main thing. MoveOn and Vitell get equal attention and may
  have more long-term potential; Vitell joins the site later.
  Never "my little app company" (BerryBox is "my app portfolio", echoing the
  Apps section's "the portfolio is young"), "most nights and weekends", or "an excuse to
  learn something I didn't know". BerryBox is NOT bolded. Always "practice",
  never "team".)
- Fact line (small): `Chicago, IL[, 9:41 am local] · Hamilton College '26 ·
  computer science and mathematics` (the local time is a JS enhancement,
  Chicago timezone; absent without JS)
- Buttons: primary `Email me` (mailto), text link `See the apps ↓`
- Portrait: headshot in a plain white card, hairline border.

## Logo strip (white band)

Label: `Some places my work has shown up`
Logos: Capgemini, HP, OperVu, Hamilton College.

## Work

H2: `Where I've worked` Four boxes, newest first, presented on a **career
timeline rail** (year labels + hairline + teal markers; all entries visible at
once). A carousel was researched and rejected: NN/g's carousel findings and the
Notre Dame click study (1% of visitors click any slide; 84% of those clicks are
the first slide) mean anything past slide one is effectively invisible, and this
section is the backbone. The Capgemini card carries a `Current` chip.
HP's location is **Spring, TX**.

**Capgemini, full time** (label: `Software engineer · Cloud & Custom
Applications practice · 2026 to present · Chicago, IL`)

> I interned in 2025, accepted the full time offer, and joined the Chicago
> office this year. The work is enterprise AI systems, and I'm excited to get
> started.

(Tone rules from Garret: never self-centering like "I'm the new person in the
practice", and also do NOT mention the intern cohort; it is not significant at
a 400k-person company. The message is simply: accepted the full time offer,
excited to get started.)

**HP** (own box, HP logo; label: `Consultant, through Capgemini · Summer 2025 ·
nationwide deployment`)

> The client work I'm proudest of so far: an agentic AI system for HP's customer
> support portal. It digs through case history to help support agents
> troubleshoot faster, and it's now used nationwide.

Quiet bullets:
- `Backend on Azure OpenAI, Azure AI Search, and Semantic Kernel, served as an
  API through an MCP server.`
- `Case history in, grounded answers out: retrieval and embeddings tuned on real
  support data.`

**Capgemini, LAUNCH internship** (label: `LAUNCH intern · Jun to Aug 2025 ·
Houston, TX`)

> Where the Capgemini story started. LAUNCH is the firm's early-career program:
> my summer was the HP engagement above, plus a case study with the other
> interns on AI-driven customer satisfaction for a food delivery client. I
> learned what consulting actually looks like from the inside, worked with real
> engineering teams, and presented to real clients.

(This paragraph's closing sentence is Garret's own wording; keep it.)

**OperVu Surgical Technologies** (label row: `Software engineer intern ·
Oct 2024 to Apr 2025 · Palo Alto, CA`)

> OperVu builds computer vision for the operating room. I worked on the ML
> pipelines that track surgical instruments across multiple cameras so nothing
> gets left behind after surgery: data labeling, model training, and multi-view
> integration, all inside a proprietary backend under NDA.

## Apps (the exhibit)

H2: `The apps`
Intro: `BerryBox LLC is the one-person company behind everything below. The
portfolio is young, four apps and counting. I'd love for you to check them out.`
(The portfolio will grow; language should always leave room for the next app.
Rejected: "each one started as a question I couldn't put down" and "pick one
and I'll show you around".)

Tabs: `BeNow` `Sentari` `Sero` `Whenwise` (status chip inside each panel).

**BeNow** · chip `Live on the App Store`
> The first thing I built that strangers actually paid for. BeNow watches ten
> financial news feeds around the clock, turns headlines into buy, sell, or hold
> signals with Azure OpenAI, and can place the trades itself on Kraken for people
> who want it to. Keeping it healthy in production has taught me more than any
> class I've taken.

Fact line: `Thousands of downloads · Python, Google Cloud Run, Compute Engine,
Firebase, Azure OpenAI, Kraken API, Expo / React Native, TypeScript`
Links: `App Store ↗` `benowtrader.com ↗`
Screen: the dashboard (total balance, top assets), per Garret's reference.

**Sentari** · chip `In App Review`
(Corrected 2026-07-04: not a reskin, never "same backend". The product is the
Bot Lab.)
> Started as an iteration on BeNow and became its own product. The heart of it
> is the Bot Lab: a no-code builder, loosely inspired by Scratch, where you
> assemble your own autotrader from a curated set of blocks. My favorite piece
> is mood-adaptive bots: yours can get greedier when the market is fearful,
> and more careful when everyone else is greedy.

Fact line: `Expo / React Native, TypeScript, Firebase, Python on Google Cloud
Run, Kraken API`
Links: `sentaritrader.com ↗`
Screen: the Bot Lab build tab (Sentari Classic template).

**Sero** · chip `In progress`
> For 1099 creators who feel a small jolt of dread every time they get paid.
> Sero answers one question: how much of this is actually mine? A Swift tax
> engine does the math, and the website's TypeScript calculator is pinned to it
> by 259 shared test vectors, so the two can never drift apart. That detail
> makes me happier than it probably should.

Fact line: `Coming for tax season 2027 · SwiftUI, Swift tax engine, Supabase
Edge Functions, Claude API, RevenueCat, Next.js`
Links: `taxwithsero.com ↗`

**Whenwise** · chip `In progress`
> Helps people decide when to claim Social Security, which quietly decides what
> every month of retirement pays. It runs SSA's published formula to the dollar,
> entirely on the phone. My favorite constraint so far: version one makes zero
> network calls. Nothing leaves your iPhone because nothing can.

Fact line: `On TestFlight · SwiftUI, Swift engine, StoreKit 2, Next.js`
Links: `whenwiseapp.com ↗`

## The teal band (the one peak)

Theme chosen by Garret (2026-07-04): adaptability, because tools and tech
change fast. Not basketball (not a huge piece of his identity), not the
build-fails line (too random).

Serif, white: `The tools will change again next year. The job is to keep
learning.`
Sub: `Every project on this page runs on something I had to pick up along the
way: new frameworks, new models, new rules. I intend to keep working like
that.`

## Fact line policy (2026-07-04, per Garret: list ALL the tools)

Fact lines carry every load-bearing platform, framework, and infrastructure
piece verified in the codebase (e.g. Sentari runs on Python + Google Cloud
Run). Data feeds and small libraries stay out; if it hosts, stores, computes,
or bills, it's listed. Re-verify against the repos when a project evolves.

## Projects

H2: `Other things I've made`

**MoveOn** (featured card with team photo; chip: `Piloting at Hamilton
College, fall 2026`, Garret's wording. MoveOn is an institutional tool with momentum, never "just a box".)
> My friends and I won a hackathon, and then we kept building. MoveOn is a
> reuse platform made for institutions: each campus gets its own feed where
> students list and claim things instead of throwing them out, earning points
> they can spend on real campus perks.
>
> Under the hood it's a full operations tool: an admin dashboard with
> per-school analytics, a live points economy, moderation and fraud review, and
> CO2 impact tracking calibrated against EPA lifecycle data. Hamilton College
> green-lit an official pilot for this fall, and the plan from there is simple:
> take what we learn to more campuses.

Fact line: `Next.js, Supabase, Tailwind, Upstash rate limiting, multi-school
architecture`
Label above the small cards: `Smaller experiments`

**Parking spot detection**
> Can a campus know where the open parking spots are? I trained a CNN on our
> security camera footage to find out, with help from Hamilton's president and
> the campus safety office. The groundwork is there for a real-time
> availability app.

Fact line: `Oct to Dec 2025 · PyTorch Lightning, CNNs, computer vision`

**Altcoin sniper**
> A Solana scanner that notices brand-new Raydium pools the moment they appear,
> rebuilds each pair's context from raw transactions, and quietly discards
> everything that looks untradable. Mostly an excuse to get very comfortable
> with asyncio and WebSockets.

Fact line: `Jul to Oct 2025 · Python, asyncio, Helius WebSockets, Solana
JSON-RPC`

**Patents strip**
Label: `Also, two patents.`
> A basketball training pad that reads your dribble and coaches you back
> (US 11,565,160, issued when I was 19), and a self-cleaning gutter system
> (application pending). Long stories. Happy to tell either one.

## About

H2: `Off the computer` Two photo rows, family FIRST (founder order), then
basketball.

**Row 1, family** (photo: assets/img/family.jpg, caption `Dad, me, and Mom` (left-to-right order in the photo))
H3: `Family first`
> I'm an only child, so it's just the three of us. I'm beyond grateful to have them in my life.

(Tone rule: "family is everything" and "the reason I build anything at all"
were rejected as too dramatic. Plain and warm, never sentimental.)

**Row 2, basketball** (photo right on desktop, caption `Number 12, Hamilton
Continentals`)
H3: `And basketball`
> I played four years at Hamilton, three of them as a starter, and scored a
> little over 800 points while studying computer science and math. Basketball
> taught me habits that have benefited me well beyond the court.

(Never "double majoring": math was a minor. "Practice taught me... trust the
reps" was retired with the rest of the reps framing.)

School line: `B.A., 2022 to 2026, concentrated in computer science and math.
Dean's List all eight semesters.` (Hamilton awards the B.A.; math was a minor;
"concentrated in both" is Garret's preferred phrasing. Never two degrees.)

## Contact

H2: `Say hello` (the only "say hello" on the page)
Sub: `The inbox is always open. Tell me what you're building, or just say hi.`
Buttons: primary `keyhanigarret@gmail.com` (mailto), secondary `Copy address`,
secondary `LinkedIn` (https://www.linkedin.com/in/garret-keyhani/).
The hero headshot links to LinkedIn too, and the footer carries a LinkedIn
link after the product links. No resume link anywhere on the site.

## Footer

Left: `© 2026 Garret Keyhani`
Middle links: BeNow, Sentari, Sero, Whenwise, MoveOn.
Right: `Thanks for scrolling all the way down.` (No tech-stack or
"written by hand" notes; founder cut them.)

## Interactivity register (2026-07-04 audit)

Quiet physical responses only, all instant-off under reduced motion:
cards lift 2px on hover; photo cards zoom 2% over 600ms; app-switcher panels
fade and settle 8px; logo strip logos are real links that regain color on
hover or focus; the patent number links to Google Patents; the fact line shows
live Chicago time when JS is available. Nothing autoplays, nothing moves on
scroll.

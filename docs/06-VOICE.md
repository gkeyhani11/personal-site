# 06 : Voice and Copy Deck (v2)

The complete text of the site. Facts trace to 01-CONTENT.md; this file controls
tone. If copy on the page differs from this deck, one of them is wrong.

## Voice rules

1. First person, like Garret is showing a friend around, not presenting.
2. Humble, friendly, nerdy. Delight comes from specifics, never adjectives.
3. Sentence case everywhere, headlines may end with a period.
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
   all", "I'm the new person in the practice". When the copy is about Garret
   inside a group, write the group in (the ~40-person cohort). Basketball is
   real but not a headline piece of his identity; adaptability is.

## Nav

Wordmark: `Garret Keyhani` (serif). Links: `Work` `Apps` `Projects` `About`.
Pill: `Get in touch`. ("Say hello" appears exactly once on the page, as the
contact heading; founder flagged three uses as redundant.)

## Hero

- H1: `Hi, I'm Garret.`
- Lede: `I'm a software engineer at Capgemini in the Cloud & Custom Applications
  practice. Outside of work I'm building BerryBox, my app company: four iOS apps
  so far, each one an excuse to learn something I didn't know.`
  (Never "my little app company" and never "most nights and weekends". BerryBox
  is NOT bolded. Always "practice", never "team".)
- Fact line (small): `Chicago, IL[, 9:41 am local] · Hamilton College '26 ·
  computer science and mathematics` (the local time is a JS enhancement,
  Chicago timezone; absent without JS)
- Buttons: primary `Email me` (mailto), text link `See the apps ↓`
- Portrait: headshot in a plain white card, hairline border.

## Logo strip (white band)

Label: `Some places my work has shown up`
Logos: Capgemini, HP, OperVu, Hamilton College.

## Work

H2: `Where I've worked.` Four boxes, newest first, presented on a **career
timeline rail** (year labels + hairline + teal markers; all entries visible at
once). A carousel was researched and rejected: NN/g's carousel findings and the
Notre Dame click study (1% of visitors click any slide; 84% of those clicks are
the first slide) mean anything past slide one is effectively invisible, and this
section is the backbone. The Capgemini card carries a `Current` chip.
HP's location is **Spring, TX**.

**Capgemini, full time** (label: `Software engineer · Cloud & Custom
Applications practice · 2026 to present · Chicago, IL`)

> I interned in 2025, took the return offer, and started full time in Chicago
> this year with a cohort of about forty. The work is enterprise AI systems,
> and it's just getting going.

(Tone rule from Garret: never self-centering like "I'm the new person in the
practice"; he is one of a ~40-person cohort and the copy should reflect that.)

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
> learned what consulting actually looks like from the inside, presented to real
> stakeholders, and left with a return offer.

**OperVu Surgical Technologies** (label row: `Software engineer intern ·
Oct 2024 to Apr 2025 · Palo Alto, CA`)

> OperVu builds computer vision for the operating room. I worked on the ML
> pipelines that track surgical instruments across multiple cameras so nothing
> gets left behind after surgery: data labeling, model training, and multi-view
> integration, all inside a proprietary backend under NDA.

## Apps (the exhibit)

H2: `The apps.`
Intro: `BerryBox LLC is the one-person company behind everything below. The
portfolio is young, four apps and counting, and each one started as a question I
couldn't put down. Pick one and I'll show you around.`
(The portfolio will grow; language should always leave room for the next app.)

Tabs: `BeNow` `Sentari` `Sero` `Whenwise` (status chip inside each panel).

**BeNow** · chip `Live on the App Store`
> The first thing I built that strangers actually paid for. BeNow watches ten
> financial news feeds around the clock, turns headlines into buy, sell, or hold
> signals with Azure OpenAI, and can place the trades itself on Kraken for people
> who want it to. Keeping it healthy in production has taught me more than any
> class I've taken.

Fact line: `Thousands of downloads · Python, Cloud Run, Firebase, Azure OpenAI,
React Native`
Links: `App Store ↗` `benowtrader.com ↗`

**Sentari** · chip `In App Review`
(Corrected 2026-07-04: not a reskin, never "same backend". The product is the
Bot Lab.)
> Started as an iteration on BeNow and became its own product. The heart of it
> is the Bot Lab: a no-code builder, loosely inspired by Scratch, where you
> assemble your own autotrader from a curated set of blocks. My favorite piece
> is mood-adaptive bots: yours can get greedier when the market is fearful,
> and more careful when everyone else is greedy.

Fact line: `Expo, TypeScript, Firebase`
Links: `sentaritrader.com ↗`
Screen: the Bot Lab build tab (Sentari Classic template).

**Sero** · chip `In progress`
> For 1099 creators who feel a small jolt of dread every time they get paid.
> Sero answers one question: how much of this is actually mine? A Swift tax
> engine does the math, and the website's TypeScript calculator is pinned to it
> by 259 shared test vectors, so the two can never drift apart. That detail
> makes me happier than it probably should.

Fact line: `Coming for tax season 2027 · SwiftUI, Supabase, Claude, Next.js`
Links: `taxwithsero.com ↗`

**Whenwise** · chip `In progress`
> Helps people decide when to claim Social Security, which quietly decides what
> every month of retirement pays. It runs SSA's published formula to the dollar,
> entirely on the phone. My favorite constraint so far: version one makes zero
> network calls. Nothing leaves your iPhone because nothing can.

Fact line: `On TestFlight · SwiftUI, StoreKit 2, Next.js`
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

## Projects

H2: `Other things I've made.`

**MoveOn** (featured card with team photo; chip: `Piloting at Hamilton, fall
2026`. MoveOn is an institutional tool with momentum, never "just a box".)
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

Fact line: `Next.js, Supabase, multi-school architecture`
Label above the small cards: `Smaller experiments`

**Parking spot detection**
> Can a campus know where the open parking spots are? I trained a CNN on our
> security camera footage to find out, with help from Hamilton's president and
> the campus safety office. The groundwork is there for a real-time
> availability app.

Fact line: `Oct to Dec 2025 · PyTorch Lightning, computer vision`

**Altcoin sniper**
> A Solana scanner that notices brand-new Raydium pools the moment they appear,
> rebuilds each pair's context from raw transactions, and quietly discards
> everything that looks untradable. Mostly an excuse to get very comfortable
> with asyncio and WebSockets.

Fact line: `Jul to Oct 2025 · Python, Helius WebSockets`

**Patents strip**
Label: `Also, two patents.`
> A basketball training pad that reads your dribble and coaches you back
> (US 11,565,160, issued when I was 19), and a self-cleaning gutter system
> (application pending). Long stories. Happy to tell either one.

## About

H2: `Off the computer.` Two photo rows, family FIRST (founder order), then
basketball.

**Row 1, family** (photo: assets/img/family.jpg, caption `Mom, Dad, and me`)
H3: `Family first.`
> I'm an only child, so it's always been the three of us. They're my two
> favorite people.

(Tone rule: "family is everything" and "the reason I build anything at all"
were rejected as too dramatic. Plain and warm, never sentimental.)

**Row 2, basketball** (photo right on desktop, caption `Number 12, Hamilton
Continentals`)
H3: `Then basketball.`
> I played four years at Hamilton, three of them as a starter, and scored a
> little over 800 points while double majoring in computer science and
> mathematics. Practice taught me the thing I lean on most as an engineer: show
> up every day and trust the reps.

School line: `B.A., 2022 to 2026, concentrated in computer science and math.
Dean's List all eight semesters.` (Hamilton awards the B.A.; math was a minor;
"concentrated in both" is Garret's preferred phrasing. Never two degrees.)

## Contact

H2: `Say hello.` (the only "say hello" on the page)
Sub: `The inbox is always open. Tell me what you're building, or just say hi.`
Buttons: primary `keyhanigarret@gmail.com` (mailto), secondary `Copy address`.
No resume link anywhere on the site.

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

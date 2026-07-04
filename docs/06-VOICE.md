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
7. It is fine to be quietly proud ("used nationwide") and fine to admit smallness
   ("my little app company"). The mix is the voice.

## Nav

Wordmark: `Garret Keyhani` (serif). Links: `Work` `Apps` `Projects` `About`.
Pill: `Say hello`.

## Hero

- H1: `Hi, I'm Garret.`
- Lede: `I'm a software engineer at Capgemini on the Cloud & Custom Applications
  team. Most nights and weekends I'm building BerryBox, my little app company:
  four iOS apps so far, each one an excuse to learn something I didn't know.`
- Fact line (small): `Houston, TX · Hamilton College '26 · computer science and
  mathematics`
- Buttons: primary `Say hello` (mailto), text link `See the apps ↓`
- Portrait: headshot in a plain white card, hairline border.

## Logo strip (white band)

Label: `Some places my work has shown up`
Logos: Capgemini, HP, OperVu, Hamilton College.

## Work

H2: `Where I've worked.`

**Capgemini** (label row: `Software engineer · Cloud & Custom Applications ·
2025 to present · Houston, TX`)

> I interned here in the summer of 2025 and liked the team enough to come back
> full time. Our client is HP, and the project I'm proudest of is an agentic AI
> system for their customer support portal: it digs through case history to help
> support agents troubleshoot, and it's now used nationwide.

Quiet bullets:
- `Built the backend on Azure OpenAI, Azure AI Search, and Semantic Kernel,
  served as an API through an MCP server.`
- `Presented a case study on AI and customer satisfaction to the client.`

**OperVu Surgical Technologies** (label row: `Software engineer intern ·
Oct 2024 to Apr 2025 · Palo Alto, CA`)

> OperVu builds computer vision for the operating room. I worked on the ML
> pipelines that track surgical instruments across multiple cameras so nothing
> gets left behind after surgery: data labeling, model training, and multi-view
> integration, all inside a proprietary backend under NDA.

## Apps (the exhibit)

H2: `The apps.`
Intro: `BerryBox LLC is the one-person company behind everything below. Each app
started as a question I couldn't put down. Pick one and I'll show you around.`

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
> A second draft of BeNow's face. Same backend, same signal pipeline, not a
> dollar of new infrastructure: just a calmer, cleaner app on top. The rule I
> set for myself was simple. The backend is sacred, and the front end is a
> clean slate.

Fact line: `Expo, TypeScript, Firebase, the same Python backend`
Links: `sentaritrader.com ↗`

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

Serif, white: `If the app and the website ever disagree by a dollar, the build
fails.`
Sub: `Sero and Whenwise pin their web calculators to the same tested engines
that power the apps. I like software you can hold to its word.`

## Projects

H2: `Other things I've made.`

**MoveOn** (card with team photo)
> My friends and I won a hackathon, and then we kept going. MoveOn is a campus
> reuse platform: students pass things along instead of throwing them out, and
> earn perks for it.

Fact line: `Live at campusmoveon.com · Next.js, Supabase`

**Parking spot detection**
> Can a campus know where the open parking spots are? I trained a CNN on our
> security camera footage to find out, with help from Hamilton's president and
> the campus safety office. If it keeps working, it becomes an app.

Fact line: `Oct 2025 to present · PyTorch Lightning, computer vision`

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

H2: `Off the computer.`

> I played four years of basketball at Hamilton, three of them as a starter,
> and scored a little over 800 points while double majoring in computer science
> and mathematics. Practice taught me the thing I lean on most as an engineer:
> show up every day and trust the reps.

School line: `B.S. computer science and B.S. mathematics, Hamilton College,
2022 to 2026. Dean's List all eight semesters.`

Family line:
> Family is everything to me. I'm an only child, and the people closest to me
> are the reason I build anything at all.

(Dashed placeholder tile stays until the family photo exists.)

## Contact

H2: `Say hello.`
Sub: `The inbox is always open. Tell me what you're building, or just say hi.`
Buttons: primary `keyhanigarret@gmail.com` (mailto), secondary `Copy address`.
No resume link anywhere on the site.

## Footer

Left: `© 2026 Garret Keyhani`
Middle links: BeNow, Sentari, Sero, Whenwise, MoveOn.
Right: `Plain HTML and CSS, written by hand. Thanks for scrolling all the way
down.`

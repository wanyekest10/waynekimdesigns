# Handoff: Wayne Kim portfolio

Start a new session with: "Read notes/handoff.md and notes/backlog.md in wanyekest10/waynekimdesigns, then let's continue."

## Who and what
- Wayne Kim, interaction designer and researcher, Los Angeles. Rebuilding his portfolio from Framer into a free, hand-built site.
- Writing rule: never use em dashes. Plain, specific language in Wayne's voice. Avoid copy that reads as AI-written.
- Visual references: Kabir Shrivastava (kabiraaa.com) for calm and simple, Yase Dusu (yasedusu.com) for case study structure. Make it Wayne's own, don't copy either one.

## Where things live
- Repo: github.com/wanyekest10/waynekimdesigns, branch `main`. Pushing to main auto-deploys.
- Test site: https://waynekimdesigns.waynewkim.workers.dev (Cloudflare Workers, free).
- The domain waynekimdesigns.com still points to Framer (paid through Sep 2027). The switch steps are in "Domain switch" below. Do it when Wayne says the portfolio is ready.
- Original images and videos downloaded from Framer: on Wayne's Mac, in ~/Downloads/portfolio-rebuild/ (raiseme-originals, bss-originals, room-tone-originals, living-fm-originals, glorify-originals).

## Stack
- Astro 5 static site. `npm run build` builds to `dist/`. `wrangler.jsonc` serves `dist/` on Cloudflare.
- Case studies: `src/content/work/*.md`. Assets: `public/work/<slug>-assets/`.
- Template: `src/pages/work/[slug].astro`. Styles: `src/styles/global.css`. Footer and nav: `src/layouts/Base.astro`.
- Homepage: `src/pages/index.astro`. Work page: `src/pages/work/index.astro` (cards plus a "More projects" list from `src/data/archive.ts`). Play page: `src/pages/play/index.astro` (from `src/data/play.ts`).
- `src/rehype-fields.mjs` handles old-style field formatting. Mostly unused now.

## Design system
- Instrument Sans in two weights (400, 500). Geist Mono for small labels only.
- Ink #141414, gray body text #6E6E6B, rules #E6E6E3, panel #F4F4F2, cobalt #002BBA for links and one focal mark per figure.
- Diagrams are built as HTML in the page (see `.compare`, `.bars`, tables) so they stay sharp and readable on phones.
- Media sits at text width by default. Wide only for `figure.wide`, `.pair`, `.trio`, `.grid3`, and the hero.

## Case study frontmatter (the pattern to copy)
```yaml
title, slug, headline, order, label (2 skills, e.g. "Research and strategy"), summary (one line, must fit on a phone card)
hero, heroAlt            # card image and page hero
heroVideo, heroPoster    # optional looping video hero
short:                   # "The 30-second version", three beats
  - { lead: "The problem.", text: "..." }   # research: The problem / What I did / What happened
  - { lead: "The question.", text: "..." }  # design: The question / What I built / What I learned
facts:                   # left column on desktop; values split on " · " into lines
  - { label: "Company" | "School", value: "..." }
  - Role, Timeline|Duration, Team, Faculty|Advisors (optional), Methods|Tools, Outcome (research only)
jumps:                   # phone-only jump links; `to` = heading slug
  - { label: "Skip to the research", to: "..." }
```
- In the body, `##` headings become the numbered sidebar sections and `###` become indented sub-items.
- Two kinds of case study:
  - **Research and strategy** (Glorify, RaiseMe): question, research, findings, decision, results, reflection. Charts, diagrams, quote boxes.
  - **Design and build** (Living.fm, BSS): why, explore, build, test and what broke, reflection. Silent looping clips (`autoplay muted loop playsinline`, no controls or sound), clip grids, one full-width moment.

## Done (as of Oct 17, 2026)
- Homepage: status line, name, Selected work (6 cards), Play (all rows, hover previews, "See all play"), About with one-line years. Nav is sticky (border appears on scroll).
- Work (/work): Glorify Groups, RaiseMe Portal, Living.fm, BSS, room_tone, Linee, Toilet Paper Elevator, Designit: Futures, Facilitation.
- Toilet Paper Elevator (`src/content/work/toilet-paper-elevator.md`): 14-day solo sprint, used to learn Fusion. Don't mention rebuilding or AI help. YouTube video embedded at the end. `featured: false` for now. Fusion files still to come (go in "Building the pod").
- Play (/play), in order: Mirrored Canvas, Lume, Tamer Kebap Eating Club, Larvae Lagoon, A Serious Fan. Monet Clock and Above are hidden in `src/data/play.ts` until Wayne adds them.
- Mirrored Canvas, Lume, Larvae Lagoon use the case study template but set `listIn: play` (listed in Play, back links go to Play).
- Play write-ups (Tamer, Fan) live in `src/content/play/` and use `src/pages/play/[slug].astro`.
- Every old Framer URL redirects (astro.config.mjs).
- CIID pages list "Responsibility" instead of Role. BSS and Larvae Lagoon have none.
- Each CIID project ends with its full Vimeo/YouTube video embedded (`figure.embed`).

## Media system (agreed Oct 16)
- One shape: 3:2 for every photo and clip (`figure.frame`, `.pair`, `.grid3`, `.seq`, cards). Vertical phone clips: 4:5 grid (`.grid3.tall`) or blurred fill baked into the file.
- Two widths: wide for media, text width for anything you read (diagrams, tables, quotes, screenshots of slides use `figure.wide` with zoom links).
- `.pair.keep` stays side by side on phones. `.pair.natural` shows images uncropped.
- `hideHero: true` hides the page hero but keeps it for the card. `card:` sets a different card image.
- Test page: /media-test/ (unlisted, noindex). Delete when no longer useful.

## Diagram kit
- `.flow` (numbered steps, one `.focal` in cobalt, `.flow-note` loop line), `.sys` (Inputs, Brain, Outputs), `.stats` (big numbers, `.three` for three across), `.compare`, `.cols3`, room_tone's `.layers` and `.days`, BSS's `.yesand` panels.

## Getting assets from Framer
- The cloud workspace can't download from framerusercontent.com. Write a script in `notes/` with the URLs, push it, and have Wayne run it in Terminal: `curl -sL https://raw.githubusercontent.com/wanyekest10/waynekimdesigns/main/notes/<script>.sh | bash`. Files land in ~/Downloads/portfolio-rebuild/, then stage them over.

## Decided, not built yet (start here)
Agreed Oct 17, build first in the next session:
1. Homepage Selected Work = these 6, in this order: Glorify Groups, room_tone, RaiseMe Portal, Toilet Paper Elevator, Living.fm, BSS. Alternates research and building. Set `featured` and `order` in frontmatter. Add "See all work →".
2. Linee drops off the homepage but stays in Work. /work lists all 9: the six, then Linee, Designit: Futures, Facilitation.
3. Rename Play to **Experiments**: nav, homepage heading, /play page, back links ("← Experiments"), "See all experiments →". Move the route to /experiments/ and redirect /play/* to it. Suggested line: "Shorter projects, sprints, and things I was curious about." Wayne hasn't confirmed the final line or the route move: confirm both quickly before building.
4. Rule of thumb: Work = full case studies with process and outcome. Experiments = short sprints and side projects.

## Next
1. Status line: hover or short lines on how Wayne can contribute (see backlog). Discuss first.
2. TPE Fusion files when Wayne sends them.
3. About section rewrite around "building to think".
4. Monet Clock and Above in Play.
5. Open questions: BSS Lowenfeld age wording; fan goal mechanism; Lume subtle-cueing paper link; higher-res fan hero.
6. Domain switch.

## Domain switch (when ready)
1. Cloudflare: Add a domain, enter waynekimdesigns.com, choose the Free plan, and copy the two nameservers.
2. Hover: open waynekimdesigns.com, edit Nameservers to Cloudflare's two, and turn DNSSEC off if it's on.
3. Once Cloudflare says the domain is active: delete the old Framer records named waynekimdesigns.com and www, then in Workers & Pages, open waynekimdesigns and go to Settings, Domains & Routes, Add, Custom domain. Add waynekimdesigns.com and www.waynekimdesigns.com.
4. Then remove the domain in Framer and cancel the plan.

## Working agreements
- Discuss before building when Wayne asks to. Show previews for layout changes, not for small text edits.
- Wayne batches feedback to save usage. Keep replies short.
- Commit with author "Wayne Kim <waynekimdesigns@gmail.com>". Commits end with the Co-Authored-By and Claude-Session lines.

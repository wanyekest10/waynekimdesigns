# Handoff: Wayne Kim portfolio

Start a new session with: "Read notes/handoff.md and notes/backlog.md in wanyekest10/waynekimdesigns, then let's continue."

## Who and what
- Wayne Kim, interaction designer and researcher, Los Angeles. Rebuilding his portfolio from Framer into a free, hand-built site.
- Writing rule: never use em dashes. Plain, specific language in Wayne's voice. Avoid copy that reads as AI-written.
- Visual references: Kabir Shrivastava (kabiraaa.com) for calm and simple, Yase Dusu (yasedusu.com) for case study structure. Make it Wayne's own, don't copy either one.

## Where things live
- Repo: github.com/wanyekest10/waynekimdesigns, branch `main`. Pushing to main auto-deploys.
- Test site: https://waynekimdesigns.waynewkim.workers.dev (Cloudflare Workers, free).
- Live at https://waynekimdesigns.com (moved off Framer on Oct 17, 2026). DNS is on Cloudflare (nameservers gracie/morgan.ns.cloudflare.com); the domain is still registered at Hover (renews Sep 4, 2027). Worker custom domains: waynekimdesigns.com and www. The workers.dev address still works too.
- Link preview image: `public/og.jpg` (Linee photo). Favicons: `public/favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` (WK). Set in `src/layouts/Base.astro`.
- Original images and videos downloaded from Framer: on Wayne's Mac, in ~/Downloads/portfolio-rebuild/ (raiseme-originals, bss-originals, room-tone-originals, living-fm-originals, glorify-originals).

## Stack
- Astro 5 static site. `npm run build` builds to `dist/`. `wrangler.jsonc` serves `dist/` on Cloudflare.
- Case studies: `src/content/work/*.md`. Assets: `public/work/<slug>-assets/`.
- Template: `src/pages/work/[slug].astro`. Styles: `src/styles/global.css`. Footer and nav: `src/layouts/Base.astro`.
- Homepage: `src/pages/index.astro`. Work page: `src/pages/work/index.astro` (compact rows via `Rows.astro`: name, skill label, summary, year, hover image; plus an optional archive list from `src/data/archive.ts`). Play page (renamed from Experiments; /experiments redirects): `src/pages/play/index.astro` (from `src/data/experiments.ts`).
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
- Homepage: two-column header, Selected work (6 cards: Living.fm, BSS, Glorify Groups, Toilet Paper Elevator, room_tone, Linee), Experiments (all rows, hover previews, "See all experiments"), About with one-line years. Nav is sticky (border appears on scroll).
- Work (/work): all 9, the homepage six, then Linee, Designit: Futures, Facilitation. Order and `featured` set in frontmatter.
- Rule of thumb: Work = full case studies with process and outcome. Experiments = short sprints and side projects.
- Toilet Paper Elevator (`src/content/work/toilet-paper-elevator.md`): 14-day solo sprint, used to learn Fusion. Don't mention rebuilding or AI help. YouTube video embedded at the end. Featured on the homepage. Fusion files still to come (go in "Building the pod").
- Experiments (/experiments, renamed from Play Oct 17; /play/* redirects), in order: Mirrored Canvas, Lume, Tamer Kebap Eating Club, Larvae Lagoon, A Serious Fan. Monet Clock and Above are hidden in `src/data/experiments.ts` until Wayne adds them.
- Mirrored Canvas, Lume, Larvae Lagoon, A Serious Fan use the case study template but set `listIn: experiments` (listed in Experiments, back links go there).
- Experiments write-ups (Tamer only now) live in `src/content/experiments/` and use `src/pages/experiments/[slug].astro`. Assets in `public/experiments/`.
- Collaborate page at /collaborate/ (`src/pages/collaborate.astro` + `src/components/Collaborate.astro`): three service cards with time ranges, How it starts, and a message form (Web3Forms, key in the component) plus direct email. Nav item Collaborate. /how-i-can-help redirects there.
- Closing prompt above the footer on every page except /collaborate/ (`prompt` prop on Base). Links to /collaborate/#message.
- More projects (`src/components/MoreProjects.astro`) at the end of every case study and experiment: the next two in line. The line runs Work (homepage order) then Experiments, and loops.
- Every old Framer URL redirects (astro.config.mjs).
- CIID pages list "Responsibility" instead of Role. BSS and Larvae Lagoon have none.
- Each CIID project ends with its full Vimeo/YouTube video embedded (`figure.embed`).

- Disco Never Died (`src/content/work/disco-never-died.md`, listed in Experiments): autoplaying Vimeo with a sound toggle (`figure.vimeo-live`, script in Base.astro), early-version clips.
- About timeline: CIID row has a hover photo (`peek` in index.astro). Spare CIID photos in `public/about/` (Don Norman panel, class photo).
- VJ / projection mapping experiment: not built yet. Processed assets parked in `public/work/vj-assets/` (mounting, grid calibration, live set photos and clips, TouchDesigner). Needs Wayne's context before writing.

- TPE 3D viewer (draft): `src/scripts/tpe-viewer.ts` (three.js, loaded only when `.v3d` scrolls near), model `public/work/tpe-assets/tpe.glb` built from Wayne's Fusion STEP export plus stand-ins for screen, Arduino, LiPo, and a reference holder. Part names, labels, explode vectors, and camera views live at the top of the script.

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

## Next
1. Status line: hover or short lines on how Wayne can contribute (see backlog). Discuss first.
2. TPE Fusion files when Wayne sends them.
3. About section rewrite around "building to think".
4. Monet Clock and Above in Experiments.
5. Open questions: BSS Lowenfeld age wording; fan goal mechanism; Lume subtle-cueing paper link; higher-res fan hero.
6. Domain switch.

## Domain switch (done Oct 17, 2026)
Done: Cloudflare zone active, Framer DNS records deleted, Worker custom domain added.
Still for Wayne to do: confirm www.waynekimdesigns.com loads the new site, remove the domain in Framer, and turn off Framer auto-renew. Optional later: transfer the registration from Hover to Cloudflare Registrar (at cost).

## Working agreements
- Discuss before building when Wayne asks to. Show previews for layout changes, not for small text edits.
- Wayne batches feedback to save usage. Keep replies short.
- Commit with author "Wayne Kim <waynekimdesigns@gmail.com>". Commits end with the Co-Authored-By and Claude-Session lines.

## Status, Oct 18, 2026 (portfolio "good enough", moving to applications)
- Hero: "Interaction designer" + "I build prototypes to find out what people actually need, some purposeful, some playful." Same line on the link preview image (public/og.jpg) and LinkedIn.
- Nav: "Wayne Kim", hover says "← Home". Work page split: Independent and CIID, then Industry work (Glorify, RaiseMe, Futures, Facilitation).
- Case study layout: facts and contents share one sidebar (.cs-side); pages with hideHero get the same gap as pages with a hero.
- Disco Never Died: playable WebGL port at /play/disco-live/ (starts flat, "See it in 3D", beat or mic). Mosaic of Memories added to Play.
- Resume: public/resume.pdf rebuilt in Instrument Sans + Geist Mono (one page, ATS-friendly, links to case studies). Build script lives outside the repo; ask Claude to rebuild if it needs edits.
- Open: CTAs (Collaborate vs. "Hiring?" wording), Cloudflare Web Analytics, egg counter KV id. Reed is Jan 2015 – Nov 2017 on both site and resume.
- Next practice project: Surf Go/No-Go as a UI + front-end piece.

## Oct 18, 2026: Glorify changes made in a separate chat (commit fb5e008)
Wayne asked for these, and they are live. Review them, keep the content, fix the styling.
- TestFlight trio: the three `testflight-*.webp` images were replaced with clean phone mockups redrawn in the site palette (Instrument Sans, cobalt #002BBA). Same filenames and markup.
- Market map: new `figure.quad` in "What I already knew", built as HTML, with CSS added at the end of `global.css` ("Quadrant map"). Top left: tools participants named. Top right (focal): Glorify Groups. Bottom right: YouVersion, Glorify before Groups. The caption says placement is Wayne's read of the interviews.
- "My part." list added under the study section. It is rendered by `rehype-fields.mjs` as a two-column field row (bold label + list), which **Wayne says looks weird. Fix this first.** Keep the six points and match how the rest of the page handles lists.
  - Designed the study and its six check-ins
  - Recruited the groups and kept them participating for two weeks
  - Ran the follow-up interviews with leaders and members
  - Synthesized the findings, and turned them into design principles with Matt
  - Presented the findings to leadership at the offsite
  - Didn't design or build the prototype (Wayne confirmed)
- Outcomes now say "by 2025" (short version, facts, stats block).
- The 40+ pastor interviews are credited as Glorify's earlier research, not Wayne's (Wayne confirmed). The TODO comment was removed.
- "What didn't work yet" now ends with what shipped: prayer requests became one of the live app's most important features, and groups can share devotionals (shared context between meetings). Wayne confirmed both.
- `offsite.webp`: coworkers' faces are blurred, and Wayne is still visible presenting.
- Still open: Wayne can't recall how the three principles (Intentional Space, Mirroring, Warm Waters) mapped to shipped features. Don't invent links. He may ask Matt Regan or Paul Pow.
- Facts to keep consistent: 82 participants, two waves, 6 check-ins, 65% still checking in at the end of week two, 37 of 38 and 44 of 48 survey results, 3 of 4 pods, 1.8M+ users and 20% of daily actives by 2025.

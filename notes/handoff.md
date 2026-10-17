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

## Done
- Homepage: availability status line, name, "Interaction designer and researcher." Selected work cards, Play (3 rows plus "See all"), About with a years list.
- Live case studies: Glorify Groups (1), RaiseMe Portal (2), Living.fm (3), Bureau of Sanctioned Sketching (4).
- Footer: click-to-copy email, LinkedIn, Resume (`public/resume.pdf`). Old Framer URLs redirect (astro.config.mjs).

## Next
1. **room_tone** (design and build, solo, 4 weeks, 2026). Assets are in ~/Downloads/portfolio-rebuild/room-tone-originals: hero.jpg, workday and layers diagrams, a showcase video, and four step clips (launch, activation, ask, exit). Plan: redraw the state machine (light, then motion, then music, then exit) and the "flat day vs day with shape" comparison; show the four clips as a sequence; include the dropped checklist version as "what didn't work." Then remove room_tone from `src/data/archive.ts`.
2. Toilet Paper Elevator, once Wayne's video is edited.
3. About section: rewrite around "building to think" (see backlog).
4. Play: confirm the items, write up Tamer Kebap.
5. Domain switch.

## Domain switch (when ready)
1. Cloudflare: Add a domain, enter waynekimdesigns.com, choose the Free plan, and copy the two nameservers.
2. Hover: open waynekimdesigns.com, edit Nameservers to Cloudflare's two, and turn DNSSEC off if it's on.
3. Once Cloudflare says the domain is active: delete the old Framer records named waynekimdesigns.com and www, then in Workers & Pages, open waynekimdesigns and go to Settings, Domains & Routes, Add, Custom domain. Add waynekimdesigns.com and www.waynekimdesigns.com.
4. Then remove the domain in Framer and cancel the plan.

## Working agreements
- Discuss before building when Wayne asks to. Show previews for layout changes, not for small text edits.
- Wayne batches feedback to save usage. Keep replies short.
- Commit with author "Wayne Kim <waynekimdesigns@gmail.com>". Commits end with the Co-Authored-By and Claude-Session lines.

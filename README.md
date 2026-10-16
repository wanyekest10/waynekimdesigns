# waynekimdesigns.com

Built with Astro. Free to host on Cloudflare Pages.

## Run it on your computer
1. Install Node.js (nodejs.org, the LTS version).
2. In this folder: `npm install`, then `npm run dev`
3. Open http://localhost:4321

## Where things live
- `src/content/work/*.md`: case studies. One Markdown file each. Frontmatter at the top sets the title, card line, label, and hero image.
- `public/work/`: images, diagrams, and videos for each case study.
- `src/pages/index.astro`: the homepage (intro, Selected work, Lab, About).
- `src/styles/global.css`: the whole type system and colors in one place.
- `src/rehype-fields.mjs`: turns "**Label**" + text into the two-column TL;DR rows.

## Add a case study
Copy an existing file in `src/content/work/`, change the frontmatter, put its assets in `public/work/<name>-assets/`. It appears on the homepage automatically, sorted by `order`.

## Deploy (Cloudflare Pages)
Build command: `npm run build`. Output folder: `dist`.

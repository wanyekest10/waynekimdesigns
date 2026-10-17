import { defineConfig } from 'astro/config';
import { rehypeFields } from './src/rehype-fields.mjs';

export default defineConfig({
  site: 'https://waynekimdesigns.com',
  // Old Framer URLs (linked from the resume) keep working.
  redirects: { '/experiments': '/play/', '/experiments/tamer-kebap': '/play/tamer-kebap/', '/living-fm': '/work/living-fm/', '/glorify-groups': '/work/glorify-groups/', '/room_tone': '/work/room-tone/', '/tamerkebab': '/play/tamer-kebap/', '/linee': '/work/linee/', '/mirrored_canvas': '/work/mirrored-canvas/', '/lume': '/work/lume/', '/larvae-lagoon': '/work/larvae-lagoon/', '/disciplifan': '/work/a-serious-fan/', '/experiments/a-serious-fan': '/work/a-serious-fan/', '/play/a-serious-fan': '/work/a-serious-fan/', '/workshop_facilitation': '/work/facilitation/', '/how-i-can-help': '/collaborate/' },
  markdown: { rehypePlugins: [rehypeFields], shikiConfig: { theme: 'github-light' } },
});

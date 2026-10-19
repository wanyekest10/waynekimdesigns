import { defineConfig } from 'astro/config';
import { rehypeFields } from './src/rehype-fields.mjs';
import { rehypeExternalLinks } from './src/rehype-external-links.mjs';

export default defineConfig({
  site: 'https://waynekimdesigns.com',
  // Old Framer URLs (linked from the resume) keep working.
  redirects: { '/work/mirrored-canvas': '/play/mirrored-canvas/', '/work/disco-never-died': '/play/disco-never-died/', '/work/larvae-lagoon': '/play/larvae-lagoon/', '/work/a-serious-fan': '/play/a-serious-fan/', '/experiments': '/play/', '/experiments/tamer-kebap': '/play/tamer-kebap/', '/living-fm': '/work/living-fm/', '/glorify-groups': '/work/glorify-groups/', '/room_tone': '/work/room-tone/', '/tamerkebab': '/play/tamer-kebap/', '/linee': '/work/linee/', '/mirrored_canvas': '/play/mirrored-canvas/', '/lume': '/work/lume/', '/larvae-lagoon': '/play/larvae-lagoon/', '/disciplifan': '/play/a-serious-fan/', '/experiments/a-serious-fan': '/play/a-serious-fan/', '/workshop_facilitation': '/work/facilitation/', '/how-i-can-help': '/collaborate/' },
  markdown: { rehypePlugins: [rehypeFields, rehypeExternalLinks], shikiConfig: { theme: 'github-light' } },
});

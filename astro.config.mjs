import { defineConfig } from 'astro/config';
import { rehypeFields } from './src/rehype-fields.mjs';

export default defineConfig({
  site: 'https://waynekimdesigns.com',
  // Old Framer URLs (linked from the resume) keep working.
  redirects: { '/living-fm': '/work/living-fm/', '/glorify-groups': '/work/glorify-groups/', '/room_tone': '/work/room-tone/', '/tamerkebab': '/experiments/tamer-kebap/', '/linee': '/work/linee/', '/mirrored_canvas': '/work/mirrored-canvas/', '/lume': '/work/lume/', '/larvae-lagoon': '/work/larvae-lagoon/', '/disciplifan': '/experiments/a-serious-fan/', '/play': '/experiments/', '/play/tamer-kebap': '/experiments/tamer-kebap/', '/play/a-serious-fan': '/experiments/a-serious-fan/', '/workshop_facilitation': '/work/facilitation/' },
  markdown: { rehypePlugins: [rehypeFields] },
});

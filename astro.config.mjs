import { defineConfig } from 'astro/config';
import { rehypeFields } from './src/rehype-fields.mjs';

export default defineConfig({
  site: 'https://waynekimdesigns.com',
  // Old Framer URLs (linked from the resume) keep working.
  redirects: { '/living-fm': '/work/living-fm/', '/glorify-groups': '/work/glorify-groups/', '/room_tone': '/#lab' },
  markdown: { rehypePlugins: [rehypeFields] },
});

import { defineConfig } from 'astro/config';
import { rehypeFields } from './src/rehype-fields.mjs';

export default defineConfig({
  site: 'https://waynekimdesigns.com',
  markdown: { rehypePlugins: [rehypeFields] },
});

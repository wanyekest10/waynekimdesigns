import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    summary: z.string(),
    label: z.string(),
    context: z.string(),
    order: z.number(),
    hero: z.string(),
    heroAlt: z.string(),
  }).passthrough(),
});

export const collections = { work };

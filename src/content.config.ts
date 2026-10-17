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
    featured: z.boolean().default(true),
  }).passthrough(),
});

// Experiments: short write-ups for small builds and gifts. Listed from src/data/experiments.ts.
const experiments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiments' }),
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    facts: z.array(z.string()).default([]),
    hero: z.string(),
    heroAlt: z.string(),
  }),
});

export const collections = { work, experiments };

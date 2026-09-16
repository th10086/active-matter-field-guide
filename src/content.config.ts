import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sourceSchema = z.object({
  label: z.string(),
  url: z.string().url(),
  type: z.enum(['official', 'community', 'walkthrough', 'video']),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    targetKeyword: z.string(),
    category: z.string(),
    verifiedDate: z.coerce.date(),
    versionNote: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    officialVideoId: z.string().optional(),
    officialVideoTitle: z.string().optional(),
    sources: z.array(sourceSchema).min(2),
    related: z.array(z.object({ title: z.string(), href: z.string() })).default([]),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
  }),
});

export const collections = { guides };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    draft: z.boolean().optional().default(false),
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    excerpt: z.string().optional().default(''),
    thumbnail: z.string().optional().default(''),
    lang: z.enum(['en', 'pt']).optional().default('en'),
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
  schema: z.object({
    title: z.string(),
    icon: z.string().optional().default(''),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().nullable().optional().default(''),
  }),
});

export const collections = { posts, categories, articles };

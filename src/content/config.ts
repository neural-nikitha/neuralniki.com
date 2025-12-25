import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    topic: z.string(),
    reading_time: z.number(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { blog };

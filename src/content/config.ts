import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Exportandes'),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = { blog };

import { defineCollection, z } from 'astro:content'

const adriftNotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
})

export const collections = {
  'adrift-notes': adriftNotes,
}
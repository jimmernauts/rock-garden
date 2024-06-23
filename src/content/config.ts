// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const projectCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
        title: z.string(),
        link: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
      }),
 });

const noteCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    datePublished: z.date().optional()
  })
})

const cvCollection = defineCollection({
    type: 'content',
    schema: z.object({
        jobTitle: z.string(),
        company: z.string(),
        startDate: z.date(),
        endDate: z.date().optional(),
        link: z.string().url(),
    }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'projects': projectCollection,
  'notes': noteCollection,
  'cv': cvCollection
};
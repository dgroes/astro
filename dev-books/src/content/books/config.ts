import { defineCollection, z } from "astro:content";
//z --> zod schema

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        cover: z.string(),
        date: z.string(),
        description: z.string(),
        buy: z.object({
            spanish: z.string().url(),
            usa: z.string().url(),
        }),
    })
});

export const collections = { books };

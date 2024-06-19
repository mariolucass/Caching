import { z } from "zod";

const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  published: z.boolean().default(true),
});

export const postCreateSchema = postSchema.omit({ id: true });

export const postUpdateSchema = postCreateSchema.optional();

export const postReturnSchema = postSchema;

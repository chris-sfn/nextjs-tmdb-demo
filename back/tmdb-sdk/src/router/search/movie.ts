import { z } from "zod";
import { procedure } from "trpc";

export const searchMovieInputSchema = z.object({
  language: z
    .string()
    .regex(/^[a-z]{2}-[A-Z]{2}$/)
    .optional(),
});

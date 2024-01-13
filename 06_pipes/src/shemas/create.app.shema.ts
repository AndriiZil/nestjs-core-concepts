import { z } from 'zod';

export const createAppSchema = z
  .object({
    name: z.string(),
    age: z.number(),
  })
  .required();

export type CreateAppDto = z.infer<typeof createAppSchema>;

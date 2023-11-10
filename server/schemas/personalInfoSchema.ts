import { z } from "zod";

export const PersonalInfoBodySchema = z.object({});

export const PersonalInfoSchema = z.object({
  body: PersonalInfoBodySchema,
});

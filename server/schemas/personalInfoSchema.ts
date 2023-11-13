import { z } from "zod";

export const PersonalInfoBodySchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  phone_no: z.string(),
  linkedin_profile: z.string(),
  personal_website: z.string(),
  address: z.object({
    street_addr: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  headline: z.string(),
});

export const PersonalInfoSchema = z.object({
  body: PersonalInfoBodySchema,
});

import { z } from 'zod';

export const SkillBodySchema = z.object({
  technical_skills: z.array(z.string()),
  soft_skills: z.array(z.string()),
});

export const SkillSchema = z.object({
  body: SkillBodySchema,
});

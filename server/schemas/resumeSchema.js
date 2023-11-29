import { z } from 'zod';
export const ResumeDtoSchema = z.object({
    person: z.string(),
    skills: z.string(),
});
export const ResumeSchema = z.object({
    body: ResumeDtoSchema,
});

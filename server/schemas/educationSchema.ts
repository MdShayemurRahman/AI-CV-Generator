import { z } from 'zod';

export const EducationSchema = z.object({
  id: z.number(),
  institute: z.string(),
  degree: z.string(),
  graduation_date: z.date(), 
  gpa: z.number(), 
  field_of_study: z.string(),
});

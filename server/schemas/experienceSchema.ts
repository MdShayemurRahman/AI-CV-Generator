import { z } from 'zod';

export const EmploymentDateSchema = z.object({
  start_date: z.date(),
  end_date: z.date(),
});

export const ExperienceSchema = z.object({
  id: z.number(),
  job_title: z.string(),
  company_name: z.string(),
  employment_date: EmploymentDateSchema,
  description: z.string(),
});

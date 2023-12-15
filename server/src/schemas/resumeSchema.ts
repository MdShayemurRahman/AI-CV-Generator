import mongoose from 'mongoose';
import { z } from 'zod';

export const ResumeDtoSchema = z.object({
  person: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val)),
  skills: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val)),
});

export const ResumeSchema = z.object({
  body: ResumeDtoSchema,
});

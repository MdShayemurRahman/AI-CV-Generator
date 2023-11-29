import mongoose from 'mongoose';
import { z } from 'zod';
export const SkillBodySchema = z.object({
    person_Id: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val)),
    technical_skills: z
        .array(z.string())
        .refine((data) => data.length > 0, {
        message: 'At least one technical skill is required.',
    }),
    soft_skills: z
        .array(z.string())
        .refine((data) => data.length > 0, {
        message: 'At least one soft skill is required.',
    }),
});
export const SkillSchema = z.object({
    body: SkillBodySchema,
});

import { z } from "zod";

import { ResumeDtoSchema } from '../schemas/resumeSchema';

export type ResumeDto = z.infer<typeof ResumeDtoSchema>;
export type Resume = ResumeDto & { _id: string };
export type CreateResumeInput = ResumeDto;
export type UpdateResumeInput = Partial<ResumeDto>;

// export type Experience = {
//   id: number;
//   job_title: string;
//   company_name: string;
//   employment_date: {
//     start_date: string;
//     end_date: string;
//   };
//   description: string;
// };

import { z } from "zod";

import { EmploymentDateSchema, ExperienceSchema } from "../schemas/experienceSchema";

export type EmploymentDateDto = z.infer<typeof EmploymentDateSchema>;
export type ExperienceDto = z.infer<typeof ExperienceSchema>;
export type Experience = ExperienceDto & { id: number };
export type CreateExperienceInput = Omit<ExperienceDto, 'id'>;
export type UpdateExperience = Partial<ExperienceDto>;
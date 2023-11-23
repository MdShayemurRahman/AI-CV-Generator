  /*export type Education = {
    id: number,
    institute: string;
    degree: string;
    graduation_date: string;
    gpa: string;
    field_of_study: string;
  };*/



import { z } from "zod";
import { EducationBodySchema } from "../schemas/educationSchema";

export type EducationDto = z.infer<typeof EducationBodySchema>;
export type Education = EducationDto & { id: number };
export type CreateEducationInput = EducationDto;
export type UpdateEducation = Partial<EducationDto>;

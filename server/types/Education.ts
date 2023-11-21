// export type Education = {
//     id: number,
//     institute: string;
//     degree: string;
//     graduation_date: date;
//     gpa: number;
//     field_of_study: string;
//   };

import { z } from "zod";

import { EducationSchema } from "../schemas/educationSchema";

export type EducationDto = z.infer<typeof EducationSchema>;
export type Education = EducationDto & { id: number };
export type CreateEducationInput = EducationDto;
export type UpdateEducation = Partial<EducationDto>;
import { z } from "zod";

export const EducationBodySchema = z.object({
institute: z.string().nonempty("institute name is required"),
degree: z.string().nonempty("degree name is required"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address")
    .max(100, "Email can't exceed 100 characters"),
  graduation_date: z.string().max(50, "Graduation Date can't exceed 50 characters"),
  gpa: z.string().max(5, "GPA can't exceed 5 characters"),
  field_of_study: z.string().nonempty("Field of study is required"),
});

export const EducationSchema = z.object({
  body: EducationBodySchema,
});

import { z } from "zod";
export const EducationBodySchema = z.object({
    institute: z.string().nonempty("institute name is required"),
    degree: z.string().nonempty("degree name is required"),
    graduation_date: z.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
    }),
    gpa: z.number().max(5, "GPA can't exceed 5 characters"),
    field_of_study: z.string().nonempty("Field of study is required"),
});
export const EducationSchema = z.object({
    body: EducationBodySchema,
});

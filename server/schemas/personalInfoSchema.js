import { z } from 'zod';
import { phoneRegex } from '../middlewares/phoneNumberValidate';
export const PersonalInfoBodySchema = z.object({
    first_name: z.string().nonempty('First name is required'),
    last_name: z.string().nonempty('Last name is required'),
    email: z
        .string()
        .nonempty('Email is required')
        .email('Invalid email address')
        .max(100, "Email can't exceed 100 characters"),
    phone_no: z
        .string()
        .max(30, "Phone number can't exceed 30 characters")
        .regex(phoneRegex, 'Invalid Number'),
    linkedin_profile: z
        .string()
        .url('Invalid LinkedIn profile URL')
        .max(200, "LinkedIn profile URL can't exceed 200 characters")
        .optional(),
    personal_website: z
        .string()
        .url('Invalid personal website URL')
        .max(200, "Personal website URL can't exceed 200 characters")
        .optional(),
    address: z
        .object({
        street_addr: z
            .string()
            .max(100, "Street address can't exceed 100 characters"),
        city: z.string().max(50, "City can't exceed 50 characters"),
        country: z.string().max(50, "Country can't exceed 50 characters"),
    })
        .optional(),
    headline: z.string().max(500, "Headline can't exceed 500 characters"),
});
export const PersonalInfoSchema = z.object({
    body: PersonalInfoBodySchema,
});

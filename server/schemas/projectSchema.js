import { z } from 'zod';
export const ProjectSchema = z.object({
    id: z.number(),
    title: z.string(),
    desc: z.string(),
    duration: z.string(),
    outcomes: z.string(),
});

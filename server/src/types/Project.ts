

import { z } from 'zod';

import { ProjectSchema } from '../schemas/projectSchema';

export type ProjectDto = z.infer<typeof ProjectSchema>;
export type Project = ProjectDto & { id: number };
export type CreateProjectInput = Omit<ProjectDto, 'id'>;
export type UpdateProject = Partial<ProjectDto>;

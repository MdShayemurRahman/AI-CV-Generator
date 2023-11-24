import { z } from 'zod';
import { SkillBodySchema } from '../schemas/skillSchema';

export type SkillDto = z.infer<typeof SkillBodySchema>;
export type Skill = SkillDto & { id: number };
export type CreateSkillInput = SkillDto;
export type UpdateSkill = Partial<Omit<SkillDto, 'person_Id'>>;

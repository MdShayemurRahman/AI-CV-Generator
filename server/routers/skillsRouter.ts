import { Router } from 'express';
import {
  createSkill,
  deleteSkill,
  getAllSkills,
  getSkillById,
  updateSkill,
} from '../controllers/skillsDataControllers';

const skillsRouter = Router();

skillsRouter.get('/', getAllSkills);
skillsRouter.get('/:id', getSkillById);
skillsRouter.post('/', createSkill);
skillsRouter.patch('/:id', updateSkill);
skillsRouter.delete('/:id', deleteSkill);


export default skillsRouter;

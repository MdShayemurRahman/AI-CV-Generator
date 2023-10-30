import { Router } from 'express';
import {
  getAllSkills,
  getSkillById,
} from '../controllers/skillsDataControllers';

const skillsRouter = Router();

skillsRouter.get('/', getAllSkills);
skillsRouter.get('/:id', getSkillById);


export default skillsRouter;

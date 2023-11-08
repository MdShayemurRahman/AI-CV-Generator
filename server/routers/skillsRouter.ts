import { Router } from "express";
import {
  createSkill,
  deleteSkill,
  getAllSkills,
  getSkillById,
  updateSkill,
} from "../controllers/skillsDataControllers";
import { validate } from "../middlewares/validate";
import { SkillSchema } from "../schemas/skillSchema";


const skillsRouter = Router();

skillsRouter.get('/', getAllSkills);
skillsRouter.get('/:id', getSkillById);
skillsRouter.post('/', validate(SkillSchema), createSkill);
skillsRouter.patch('/:id', validate(SkillSchema), updateSkill);//
skillsRouter.delete('/:id', deleteSkill);


export default skillsRouter;

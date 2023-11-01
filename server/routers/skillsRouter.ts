import { Router } from "express";
import {
  addSkill,
  deleteSkill,
  getAllSkills,
  getSkillById,
  updateSkill,
} from "../controllers/skillsDataControllers";

const skillsRouter = Router();

skillsRouter.get("/", getAllSkills);
skillsRouter.get("/:id", getSkillById);
skillsRouter.post("/", addSkill);
// skillsRouter.patch('/:id', updateSkill);
skillsRouter.delete("/:id", deleteSkill);

export default skillsRouter;

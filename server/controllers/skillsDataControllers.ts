import { Request, Response, NextFunction } from 'express';

import { skillsData } from '../data/skillsData';
import { ApiError } from '../middlewares/errors/ApiError';

const getAllSkills = (_: Request, res: Response, next: NextFunction) => {
  if (skillsData) {
    res.status(200).json(skillsData);
  } else {
    next(ApiError.resourceNotFound('Order not found'));
  }
};

const getSkillById = (req: Request, res: Response, next: NextFunction) => {
  const index = Number(req.params.id);
  const skill = skillsData.filter((skill) => skill.id === index);

  if (skill) {
    res.status(200).json(skill);
    return;
  } else {
    next(ApiError.resourceNotFound('Order not found'));
  }
};

// const createSkill = (newSkill: Skills) => {

// };

// const updateSkill = (id: number, updatedSkill: Skills) => {

// };

// const deleteSkill = (id: number) => {

// };

export { getAllSkills, getSkillById };

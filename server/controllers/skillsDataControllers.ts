import { Request, Response, NextFunction } from 'express';

import { ApiError } from '../middlewares/errors/ApiError';
import { Skill } from '../types/Skill';
import skillServices from '../services/skillServices';

const getAllSkills = async (_: Request, res: Response, next: NextFunction) => {
  const skillList = await skillServices.getAllSkills();
  if (skillList.length < 1) {
    next(ApiError.resourceNotFound('Skill not found'));
    return;
  }
  res.status(200).json(skillList);
};

const getSkillById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const index = req.params.id;
  const skill = await skillServices.getSingleSkill(index);

  if (!skill) {
    next(ApiError.resourceNotFound('Skill not found'));
    return;
  }
  res.status(200).json(skill);
};

const createSkill = async (req: Request, res: Response, next: NextFunction) => {
  const newSkill = req.body;
  const skill = await skillServices.createSkill(newSkill);
  if (!skill) {
    next(ApiError.badRequest('Not a valid data'));
    return;
  }
  res.status(201).json(skill);
};

const updateSkill = async (req: Request, res: Response, next: NextFunction) => {
  const index = req.params.id;
  const updatedSkill = req.body;

  const skill = await skillServices.updateSkill(index, updatedSkill);

  if (!skill) {
    next(ApiError.resourceNotFound('Skill not found'));
    return;
  }
  res.status(200).json(skill);
};

const deleteSkill = async (req: Request, res: Response, next: NextFunction) => {
  const index = req.params.id;
  const foundIndex = await skillServices.removeSkill(index);

  if (foundIndex === null) {
    next(ApiError.resourceNotFound('Skill not found'));
    return;
  }

  res.status(200).json({ msg: `Successfully Deleted skill with id: ${index}` });
};

export { getAllSkills, getSkillById, createSkill, updateSkill, deleteSkill };

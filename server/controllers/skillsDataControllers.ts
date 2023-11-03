import { Router } from "express";
import { skills } from "../data/skills";
import { Skills } from "../types/Skills";
import { Request, Response, NextFunction } from 'express';

import { skillsData } from '../data/skillsData';
import { ApiError } from '../middlewares/errors/ApiError';

const getAllSkills = (_: Request, res: Response, next: NextFunction) => {
  if (!skillsData) {
    next(ApiError.resourceNotFound('Skill not found'));
    return;
  }
  res.json(skillsData);
};

const getSkillById = (req: Request, res: Response, next: NextFunction) => {
  const index = Number(req.params.id);
  const skill = skillsData.find((skill) => skill.id === index);

  if (!skill) {
    next(ApiError.resourceNotFound('Skill not found'));
    return;
  }
  res.json(skill);
};

const createSkill = (req: Request, res: Response, next: NextFunction) => {
  const skill = req.body;

  skill.id = skillsData.length + 1;

  const newSkill = {
    id: skill.id,
    technical_skills: skill.technical_skills,
    soft_skills: skill.soft_skills,
  };

  skillsData.push(skill);
  res.json(newSkill);
};

const updateSkill = (req: Request, res: Response, next: NextFunction) => {
  const index = Number(req.params.id);
  const updatedIndex = skillsData.findIndex((skill) => skill.id === index);
  const updatedSkill = req.body;
  
  if (updatedIndex === -1) {
    next(ApiError.resourceNotFound('Skill not found'));
    return;
  }
  updatedSkill.id = index; 
  skillsData[updatedIndex] = updatedSkill;
  res.json(updatedSkill);
};

const deleteSkill = (req: Request, res: Response, next: NextFunction) => {
  const index = Number(req.params.id);
  const foundIndex = skillsData.findIndex((skill) => skill.id === index);

  if (foundIndex === -1) {
    next(ApiError.resourceNotFound('Skill with the id not found'));
    return;
  }
  skillsData.splice(foundIndex, 1);
  res.json(skillsData);
};

export { getAllSkills, getSkillById, createSkill, updateSkill, deleteSkill };

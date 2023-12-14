import { Request, Response, NextFunction } from 'express';
import { experienceData } from '../data/experienceData';
import { ApiError } from '../middlewares/errors/ApiError';

const getAllExperience = (_: Request, res: Response, next: NextFunction) => {
  if (!experienceData) {
    next(ApiError.resourceNotFound('Experience not found'));
    return;
  }

  res.json(experienceData);
};

const getExperienceById = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  const experience = experienceData.find((exp) => exp.id === id);

  if (!experience) {
    next(ApiError.resourceNotFound('Experience not found'));
    return;
  }

  res.json(experience);
};

const createExperience = (req: Request, res: Response, next: NextFunction) => {
  const experience = req.body;

  experience.id = experienceData.length + 1;

  const newExperience = {
    id: experience.id,
    job_title: experience.job_title,
    company_name: experience.company_name,
    employment_date: {
      start_date: experience.employment_date.start_date,
      end_date: experience.employment_date.end_date,
    },
    description: experience.description,
  };

  experienceData.push(experience);

  res.json(newExperience);
  return;
};

const updateExperience = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  const updatedExperience = req.body;

  const index = experienceData.findIndex((exp) => exp.id === id);

  if (index === -1) {
    next(ApiError.resourceNotFound('Experience not found'));
    return;
  }

  updatedExperience.id = id;
  experienceData[index] = updatedExperience;

  res.json(updatedExperience);
  return;
};

const deleteExperience = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  const index = experienceData.findIndex((exp) => exp.id === id);

  if (index === -1) {
    next(ApiError.resourceNotFound('Experience not found'));
    return;
  }

  experienceData.splice(index, 1);

  res.json(experienceData);
  return;
};

export {
  getExperienceById,
  getAllExperience,
  createExperience,
  updateExperience,
  deleteExperience,
};

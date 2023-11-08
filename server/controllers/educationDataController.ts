import { Request, Response, NextFunction } from 'express';
import { educationData } from '../data/educationData';
import { ApiError } from '../middlewares/errors/ApiError';

const getAllEducation = (_: Request, res: Response, next: NextFunction) => {
  if (!educationData) {
    next(ApiError.resourceNotFound('Education not found'));
    return;
  }
  res.json(educationData);
};

const getEducationById = (req: Request, res: Response, next: NextFunction) => {
  const index = Number(req.params.id);
  const education = educationData.find((education) => education.id === index);

  if (!education) {
    next(ApiError.resourceNotFound('Education not found'));
    return;
  }
  res.json(education);
};

const createEducation = (req: Request, res: Response, next: NextFunction) => {
  const education = req.body;

  education.id = educationData.length + 1;

  const newEducation = {
    id: education.id,
    institute: education.institute,
    degree: education.degree,
    graduation_date: education.graduation_date,
    gpa: education.gpa,
    field_of_study: education.field_of_study
  };

  educationData.push(education);
  res.json(newEducation);
};

const updateEducation = (req: Request, res: Response, next: NextFunction) => {
  const index = Number(req.params.id);
  const updatedIndex = educationData.findIndex((education) => education.id === index);
  const updatedEducation = req.body;
  
  if (updatedIndex === -1) {
    next(ApiError.resourceNotFound('Education not found'));
    return;
  }
  updatedEducation.id = index; 
  educationData[updatedIndex] = updatedEducation;
  res.json(updatedEducation);
};

const deleteEducation = (req: Request, res: Response, next: NextFunction) => {
  const index = Number(req.params.id);
  const foundIndex = educationData.findIndex((education) => education.id === index);

  if (foundIndex === -1) {
    next(ApiError.resourceNotFound('Education with the id not found'));
    return;
  }
  educationData.splice(foundIndex, 1);
  res.json(educationData);
};

export { getAllEducation, getEducationById, createEducation, updateEducation, deleteEducation };

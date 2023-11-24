import { Request, Response, NextFunction } from 'express';

import resumeService from '../services/resumeServices';
import { ApiError } from '../middlewares/errors/ApiError';

const getAllResumes = async (_: Request, res: Response, next: NextFunction) => {
  const resumes = await resumeService.getAllResumes();
  if (resumes.length < 1) {
    next(ApiError.resourceNotFound('Resume not found'));
    return;
  }
  res.status(200).json(resumes);
};

const createResume = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newResumeData = req.body;
    const newResume = await resumeService.createResume(newResumeData);
    res.status(201).json(newResume);
  } catch (error) {
    next(error);
  }
};

const getSingleResume = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resumeId = req.params.id;
    const resume = await resumeService.getSingleResume(resumeId);
    if (!resume) {
      next(ApiError.resourceNotFound('Resume not found'));
      return;
    }
    res.status(200).json(resume);
  } catch (error) {
    next(error);
  }
};

const updateResume = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resumeId = req.params.id;
    const updateResumeData = req.body;
    const updatedResume = await resumeService.updateResume(
      resumeId,
      updateResumeData
    );
    if (!updatedResume) {
      next(ApiError.resourceNotFound('Resume not found'));
      return;
    }
    res.status(200).json(updatedResume);
  } catch (error) {
    next(error);
  }
};

const removeResume = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resumeId = req.params.id;
    const deletedResume = await resumeService.removeResume(resumeId);
    if (!deletedResume) {
      next(ApiError.resourceNotFound('Resume not found'));
      return;
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export {
  getAllResumes,
  createResume,
  getSingleResume,
  updateResume,
  removeResume,
};

import { NextFunction, Request, Response } from 'express';

import { projectData } from '../data/projectData';
import { ApiError } from '../middlewares/errors/ApiError';

const getAllProject = (_: Request, res: Response, next: NextFunction) => {
  if (!projectData) {
    next(ApiError.resourceNotFound('Project not found'));
    return;
  }
  res.json(projectData);
};

export { getAllProject };

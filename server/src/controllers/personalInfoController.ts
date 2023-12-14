import { Request, Response, NextFunction } from 'express';

import { ApiError } from '../middlewares/errors/ApiError';
import personalInfoServices from '../services/personalInfoServices';

// Method 1: Get all personal information
export const getAllPersonalInfo = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  const userList = await personalInfoServices.findAll();
  if (userList.length < 1) {
    next(ApiError.resourceNotFound('Person info not found'));
    return;
  }
  res.status(200).json(userList);
};

// Method 2: Get a single person's information by ID
export const getPersonalInfoById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const index = req.params.id;
  const info = await personalInfoServices.findOne(index);

  if (!info) {
    next(ApiError.resourceNotFound('Person info not found'));
    return;
  }
  res.status(200).json(info);
};

// Method 3: Add personal info
export const addPersonalInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newInfo = req.body;
  const info = await personalInfoServices.createOne(newInfo);
  if (!info) {
    next(ApiError.badRequest('Not a valid data'));
    return;
  }
  res.status(201).json(info);
};

// Method 4: Update personal info
export const updatePersonalInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const index = req.params.id;
  const updatedInfo = req.body;

  const info = await personalInfoServices.updateOne(index, updatedInfo);

  if (!info) {
    next(ApiError.resourceNotFound('Info not found'));
    return;
  }
  res.status(200).json(info);
};

// 5.Delete
export const deletePersonalInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const index = req.params.id;
  const foundIndex = await personalInfoServices.removeOne(index);

  if (foundIndex === null) {
    next(ApiError.resourceNotFound('Info not found'));
    return;
  }

  res.status(200).json({ msg: `Successfully Deleted info with id: ${index}` });
};

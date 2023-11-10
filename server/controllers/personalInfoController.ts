import { Request, Response, NextFunction } from "express";
import { personalInfoData } from "../data/personalInfoData";
import { ApiError } from "../middlewares/errors/ApiError";
import { PersonalInfo } from "../types/PersonalInfo";

// Method 1: Get all personal information
export const getAllPersonalInfo = (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  if (!personalInfoData) {
    next(ApiError.resourceNotFound("AllPersnalInfo not found"));
    return;
  }
  res.json(personalInfoData);
};

// Method 2: Get a single person's information by ID
export const getPersonalInfoById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const personId = Number(req.params.id);
  const person = personalInfoData.find((p) => p.id === personId);

  if (!person) {
    next(ApiError.resourceNotFound("PersonalInfo not found"));
    return;
  }
  res.json(person);
};

// Method 3: Add personal info
export const addPersonalInfo = (
  req: Request,
  res: Response,
  _: NextFunction
) => {
  const newPersonalInfo: PersonalInfo = req.body;

  personalInfoData.push({
    id: personalInfoData.length + 1,
    first_name: newPersonalInfo.first_name,
    last_name: newPersonalInfo.last_name,
    email: newPersonalInfo.email,
    phone_no: newPersonalInfo.phone_no,
    linkedin_profile: newPersonalInfo.linkedin_profile || "",
    personal_website: newPersonalInfo.personal_website || "",
    address: newPersonalInfo.address,
    headline: newPersonalInfo.headline || "",
  });

  res.json(newPersonalInfo);
};

// Method 4: Update personal info
export const updatePersonalInfo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const updatedAttributes = req.body;

  // Find the personal information by ID
  const personalInfoToUpdate = personalInfoData.find(
    (info) => info.id === Number(id)
  );

  if (!personalInfoToUpdate) {
    next(ApiError.resourceNotFound("PersonalInfo not found"));
    return;
  }

  // Update the specified attributes with the new values
  Object.keys(updatedAttributes).forEach((attribute) => {
    personalInfoToUpdate[attribute] = updatedAttributes[attribute];
  });

  res.json(updatedAttributes);
};

// 5.Delete

export const deletePersonalInfo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  // Find the index of the personal information by ID
  const index = personalInfoData.findIndex((info) => info.id === Number(id));

  if (index === -1) {
    next(ApiError.resourceNotFound("PersonalInfo not found"));
    return;
  }

  // Remove the personal information entry from the array
  personalInfoData.splice(index, 1);

  res.json({
    msg: `Personal information with id ${index} deleted successfully`,
  });
};

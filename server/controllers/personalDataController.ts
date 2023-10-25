//CRUD:

import { Request, Response } from "express";
import { personal_info } from "../data/personalInfo";

// Method 1: Get all personal information
export const GetAllPersonalInfo = (req: Request, res: Response) => {
  try {
    // test data
    const allPersonalInfo = personal_info;

    if (!allPersonalInfo) {
      return res
        .status(404)
        .json({ message: "Personal information not found" });
    }

    return res.status(200).json(allPersonalInfo);
  } catch (error) {
    console.error("Error fetching personal information:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Method 2: Get a single person's information by ID
export const GetSinglePersonalInfo = (req: Request, res: Response) => {
  try {
    const personId = Number(req.params.id);

    const person = personal_info.find((p) => p.id === personId);

    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }

    return res.status(200).json(person);
  } catch (error) {
    console.error("Error fetching personal information:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// 3. createAPersonalInfo method: "POST" "/api/resume/personal/"

// 4. Edit

// 5.Delete

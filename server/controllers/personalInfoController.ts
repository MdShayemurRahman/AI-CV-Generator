import { Request, Response } from "express";
import { personalInfo } from "../data/personalInfo";
import { PersonalInfo } from "../types/PersonalInfo";

// Method 1: Get all personal information
export const getAllPersonalInfo = (req: Request, res: Response) => {
  try {
    // test data
    const allPersonalInfo = personalInfo;

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
export const getPersonalInfoById = (req: Request, res: Response) => {
  try {
    const personId = Number(req.params.id);

    const person = personalInfo.find((p) => p.id === personId);

    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }

    return res.status(200).json(person);
  } catch (error) {
    console.error("Error fetching personal information:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Method 3: Add personal info
export const addPersonalInfo = (req: Request, res: Response) => {
  try {
    const newPersonalInfo: PersonalInfo = req.body;

    /*personalInfo.push({
      id: personalInfo.length + 1,
      first_name: "",
      last_name: "",
      email: "",
      phone_no: "",
      linkedin_profile: "",
      personal_website: "",
      address: { street_addr: "", city: "", country: "" },
      headline: "",
    });*/

    personalInfo.push({
      id: personalInfo.length + 1,
      first_name: newPersonalInfo.first_name,
      last_name: newPersonalInfo.last_name,
      email: newPersonalInfo.email,
      phone_no: newPersonalInfo.phone_no,
      linkedin_profile: newPersonalInfo.linkedin_profile || "",
      personal_website: newPersonalInfo.personal_website || "",
      address: newPersonalInfo.address,
      headline: newPersonalInfo.headline || "",
    });

    return res
      .status(201)
      .json({ message: "Personal information added successfully" });
  } catch (error) {
    console.error("Error adding personal information:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Method 4: Update personal info
export const updatePersonalInfo = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedAttributes = req.body;

    // Find the personal information by ID
    const personalInfoToUpdate = personalInfo.find(
      (info) => info.id === Number(id)
    );

    if (!personalInfoToUpdate) {
      return res
        .status(404)
        .json({ message: "Personal information not found" });
    }

    // Update the specified attributes with the new values
    Object.keys(updatedAttributes).forEach((attribute) => {
      personalInfoToUpdate[attribute] = updatedAttributes[attribute];
    });

    return res.json({ message: "Personal information updated successfully" });
  } catch (error) {
    console.error("Error updating personal information:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// 5.Delete

export const deletePersonalInfo = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Find the index of the personal information by ID
    const index = personalInfo.findIndex((info) => info.id === Number(id));

    if (index === -1) {
      return res
        .status(404)
        .json({ message: "Personal information not found" });
    }

    // Remove the personal information entry from the array
    personalInfo.splice(index, 1);

    return res.json({ message: "Personal information deleted successfully" });
  } catch (error) {
    console.error("Error deleting personal information:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

import { Router } from "express";
import {
  getAllPersonalInfo,
  getPersonalInfoById,
  addPersonalInfo,
  updatePersonalInfo,
  deletePersonalInfo,
} from "../controllers/personalInfoController";

const personalInfoRouter = Router();

personalInfoRouter.get("/", getAllPersonalInfo);
personalInfoRouter.get("/:id", getPersonalInfoById);
personalInfoRouter.post("/", addPersonalInfo);
personalInfoRouter.put("/:id", updatePersonalInfo);
personalInfoRouter.delete("/:id", deletePersonalInfo);

export default personalInfoRouter;

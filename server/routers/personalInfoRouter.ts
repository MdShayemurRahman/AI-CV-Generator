import express, { Router } from "express";
import {
  getAllPersonalInfo,
  getPersonalInfoById,
  addPersonalInfo,
  updatePersonalInfo,
  deletePersonalInfo,
} from "../controllers/personalInfoController";

const personalInfoRouter: Router = express.Router();

personalInfoRouter.get("/api/resume/personal", getAllPersonalInfo);
personalInfoRouter.get("/api/resume/personal/:id", getPersonalInfoById);
personalInfoRouter.post("/api/resume/personal/", addPersonalInfo);
personalInfoRouter.put("/api/resume/personal/:id", updatePersonalInfo);
personalInfoRouter.delete("/api/resume/personal/:id", deletePersonalInfo);

export default personalInfoRouter;

import express, { Router } from "express";
import {
  getAllPersonalInfo,
  getPersonalInfoById,
  addPersonalInfo,
} from "../controllers/personalInfoController";

const personalInfoRouter: Router = express.Router();

personalInfoRouter.get("/api/resume/personal", getAllPersonalInfo);
personalInfoRouter.get("/api/resume/personal/:id", getPersonalInfoById);
personalInfoRouter.post("/api/resume/personal/", addPersonalInfo);

export default personalInfoRouter;

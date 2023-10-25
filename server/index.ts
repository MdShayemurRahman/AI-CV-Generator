import express, { Express, Request, Response } from "express";
import { GetAllPersonalInfo } from "./controllers/personalDataController";
import { GetSinglePersonalInfo } from "./controllers/personalDataController";
//import { CreatePersonalInfo } from "./controllers/personalDataController";

// import dotenv from 'dotenv';

// dotenv.config();

const app: Express = express();
const port = 8000;

app.get("/api/resume/personal", GetAllPersonalInfo);
app.get("/api/resume/personal/:id", GetSinglePersonalInfo);
//app.post("/api/resume/personal/", CreatePersonalInfo);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

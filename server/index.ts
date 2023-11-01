import express, { Express, Request, Response } from "express";
import personalInfoRouter from "./routers/personalInfoRouter";

// import dotenv from 'dotenv';

// dotenv.config();

const app: Express = express();
const port = 8000;

app.use(express.json());

app.use("/", personalInfoRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

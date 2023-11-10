
import express, { Express, Request, Response } from 'express';

import skillsRouter from './routers/skillsRouter';
import educationRouter from './routers/educationRouter';
import experienceRouter from './routers/experienceRouter';
import { loggingMiddleware } from './middlewares/logging';
import { apiErrorHandler } from './middlewares/apiErrorHandler';
import { routeNotFound } from './middlewares/routeNotFound';
import { projectRouter } from "./routers/projectRouter";
import personalInfoRouter from './routers/personalInfoRouter';

const app: Express = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/resume/personal", personalInfoRouter);
app.use('/api/resume/skills', loggingMiddleware, skillsRouter);
app.use('/api/resume/education', loggingMiddleware, educationRouter);
app.use('/api/resume/project', loggingMiddleware, projectRouter);
app.use('/api/resume/experience', loggingMiddleware, experienceRouter);


app.use(apiErrorHandler);
//app.use(routeNotFound); //

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

import express, { Express } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';

import skillsRouter from './routers/skillsRouter';
import educationRouter from './routers/educationRouter';
import experienceRouter from './routers/experienceRouter';
import { loggingMiddleware } from './middlewares/logging';
import { apiErrorHandler } from './middlewares/apiErrorHandler';
import { routeNotFound } from './middlewares/routeNotFound';
import { projectRouter } from './routers/projectRouter';
import personalInfoRouter from './routers/personalInfoRouter';
import resumeRouter from './routers/resumeRouter';

const app: Express = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  })
);

// database connection..
const mongoURL = process.env.DB_URL as string;
mongoose.connect(mongoURL).then(() => console.log('DB Connected!'));

app.use('/api/resume', loggingMiddleware, resumeRouter);
app.use('/api/resume/personal', loggingMiddleware, personalInfoRouter);
app.use('/api/resume/skills', loggingMiddleware, skillsRouter);
app.use('/api/resume/education', loggingMiddleware, educationRouter);
app.use('/api/resume/project', loggingMiddleware, projectRouter);
app.use('/api/resume/experience', loggingMiddleware, experienceRouter);

app.use(apiErrorHandler);
app.use(routeNotFound); 


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

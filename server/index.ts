import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

import personalInfoRouter from './routers/personalInfoRouter';
import skillsRouter from './routers/skillsRouter';
import educationRouter from './routers/educationRouter';
import { loggingMiddleware } from './middlewares/logging';
import { apiErrorHandler } from './middlewares/apiErrorHandler';
import { routeNotFound } from './middlewares/routeNotFound';

const app: Express = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoURL = process.env.DB_URL as string;
mongoose.connect(mongoURL).then(() => console.log(`Connected!⚡️⚡️`));

app.use('/', personalInfoRouter);

app.use('/api/resume/skills', loggingMiddleware, skillsRouter);
app.use('/api/resume/education', loggingMiddleware, educationRouter);

app.use(apiErrorHandler);
//app.use(routeNotFound); //

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

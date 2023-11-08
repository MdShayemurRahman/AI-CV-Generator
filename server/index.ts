import personalInfoRouter from "./routers/personalInfoRouter";
import express, { Express, Request, Response } from 'express';
import skillsRouter from './routers/skillsRouter';
import educationRouter from './routers/educationRouter';
import { loggingMiddleware } from './middlewares/logging';
import { apiErrorHandler } from './middlewares/apiErrorHandler';
import { routeNotFound } from './middlewares/routeNotFound';

const app: Express = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/", personalInfoRouter);

app.use('/api/resume/skills', loggingMiddleware, skillsRouter);
app.use('/api/resume/education', loggingMiddleware, educationRouter);


app.use(apiErrorHandler);
//app.use(routeNotFound); //

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

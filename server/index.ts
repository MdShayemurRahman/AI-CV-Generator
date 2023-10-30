import express, { Express, Request, Response } from 'express';
import { GetAllPersonalInfo } from './controllers/personalDataController';
import { GetSinglePersonalInfo } from './controllers/personalDataController';
import skillsRouter from './routers/skillsRouter';
import { loggingMiddleware } from './middlewares/logging';
import { apiErrorHandler } from './middlewares/apiErrorHandler';
import { routeNotFound } from './middlewares/routenotfound';

const app: Express = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/resume/personal', GetAllPersonalInfo);
app.get('/api/resume/personal/:id', GetSinglePersonalInfo);
//app.post("/api/resume/personal/", CreatePersonalInfo);

app.use('/api/resume/skills', loggingMiddleware, skillsRouter);

app.use(apiErrorHandler);
app.use(routeNotFound);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

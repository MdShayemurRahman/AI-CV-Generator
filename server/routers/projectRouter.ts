import { Router } from 'express';

import { getAllProject } from '../controllers/projectDataController';



export const projectRouter = Router();

projectRouter.get('/', getAllProject);

import { Router } from 'express';
import {
  getAllExperience,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience,
} from '../controllers/experienceDataController';

const experienceRouter = Router();

experienceRouter.get('/', getAllExperience);
experienceRouter.get('/:id', getExperienceById);
experienceRouter.post('/', createExperience);
experienceRouter.patch('/:id', updateExperience);
experienceRouter.delete('/:id', deleteExperience);

export default experienceRouter;

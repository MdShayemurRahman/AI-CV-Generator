import { Router } from 'express';
import {
  getAllEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} from '../controllers/educationDataController';

const educationRouter = Router();

educationRouter.get('/', getAllEducation);
educationRouter.get('/:id', getEducationById);
educationRouter.post('/', createEducation);
educationRouter.patch('/:id', updateEducation);
educationRouter.delete('/:id', deleteEducation);

export default educationRouter;

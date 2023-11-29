import { Router } from 'express';
import { getAllResumes, createResume, getSingleResume, updateResume, removeResume, } from '../controllers/resumeController';
const resumeRouter = Router();
resumeRouter.get('/', getAllResumes);
resumeRouter.get('/:id', getSingleResume);
resumeRouter.post('/', createResume);
resumeRouter.patch('/:id', updateResume);
resumeRouter.delete('/:id', removeResume);
export default resumeRouter;

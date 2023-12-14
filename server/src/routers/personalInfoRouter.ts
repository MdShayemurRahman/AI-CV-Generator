import { Router } from 'express';
import {
  getAllPersonalInfo,
  getPersonalInfoById,
  addPersonalInfo,
  updatePersonalInfo,
  deletePersonalInfo,
} from '../controllers/personalInfoController';
import { validate } from '../middlewares/validate';
import { PersonalInfoSchema } from '../schemas/personalInfoSchema';

const personalInfoRouter = Router();

personalInfoRouter.get('/', getAllPersonalInfo);
personalInfoRouter.get('/:id', getPersonalInfoById);
personalInfoRouter.post('/', validate(PersonalInfoSchema), addPersonalInfo);
personalInfoRouter.put(
  '/:id',
  validate(PersonalInfoSchema),
  updatePersonalInfo
);
personalInfoRouter.delete('/:id', deletePersonalInfo);

export default personalInfoRouter;

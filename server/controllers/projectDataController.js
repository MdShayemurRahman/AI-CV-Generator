import { projectData } from '../data/projectData';
import { ApiError } from '../middlewares/errors/ApiError';
const getAllProject = (_, res, next) => {
    if (!projectData) {
        next(ApiError.resourceNotFound('Project not found'));
        return;
    }
    res.json(projectData);
};
export { getAllProject };

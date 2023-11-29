var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import resumeService from '../services/resumeServices';
import { ApiError } from '../middlewares/errors/ApiError';
const getAllResumes = (_, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const resumes = yield resumeService.getAllResumes();
    if (resumes.length < 1) {
        next(ApiError.resourceNotFound('Resume not found'));
        return;
    }
    res.status(200).json(resumes);
});
const createResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newResumeData = req.body;
        const newResume = yield resumeService.createResume(newResumeData);
        res.status(201).json(newResume);
    }
    catch (error) {
        next(error);
    }
});
const getSingleResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resumeId = req.params.id;
        const resume = yield resumeService.getSingleResume(resumeId);
        if (!resume) {
            next(ApiError.resourceNotFound('Resume not found'));
            return;
        }
        res.status(200).json(resume);
    }
    catch (error) {
        next(error);
    }
});
const updateResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resumeId = req.params.id;
        const updateResumeData = req.body;
        const updatedResume = yield resumeService.updateResume(resumeId, updateResumeData);
        if (!updatedResume) {
            next(ApiError.resourceNotFound('Resume not found'));
            return;
        }
        res.status(200).json(updatedResume);
    }
    catch (error) {
        next(error);
    }
});
const removeResume = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resumeId = req.params.id;
        const deletedResume = yield resumeService.removeResume(resumeId);
        if (!deletedResume) {
            next(ApiError.resourceNotFound('Resume not found'));
            return;
        }
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
});
export { getAllResumes, createResume, getSingleResume, updateResume, removeResume, };

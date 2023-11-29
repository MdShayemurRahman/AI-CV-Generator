var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApiError } from '../middlewares/errors/ApiError';
import skillServices from '../services/skillServices';
const getAllSkills = (_, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const skillList = yield skillServices.getAllSkills();
    if (skillList.length < 1) {
        next(ApiError.resourceNotFound('Skill not found'));
        return;
    }
    res.status(200).json(skillList);
});
const getSkillById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const index = req.params.id;
    const skill = yield skillServices.getSingleSkill(index);
    if (!skill) {
        next(ApiError.resourceNotFound('Skill not found'));
        return;
    }
    res.status(200).json(skill);
});
const createSkill = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newSkill = req.body;
    const skill = yield skillServices.createSkill(newSkill);
    if (!skill) {
        next(ApiError.badRequest('Not a valid data'));
        return;
    }
    res.status(201).json(skill);
});
const updateSkill = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const index = req.params.id;
    const updatedSkill = req.body;
    const skill = yield skillServices.updateSkill(index, updatedSkill);
    if (!skill) {
        next(ApiError.resourceNotFound('Skill not found'));
        return;
    }
    res.status(200).json(skill);
});
const deleteSkill = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const index = req.params.id;
    const foundIndex = yield skillServices.removeSkill(index);
    if (foundIndex === null) {
        next(ApiError.resourceNotFound('Skill not found'));
        return;
    }
    res.status(200).json({ msg: `Successfully Deleted skill with id: ${index}` });
});
export { getAllSkills, getSkillById, createSkill, updateSkill, deleteSkill };

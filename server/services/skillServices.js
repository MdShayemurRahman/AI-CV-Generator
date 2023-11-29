var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from 'mongoose';
import SkillModel from '../models/SkillModel';
// 1. get all the data from database
const getAllSkills = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield SkillModel.find().exec();
});
// 2. create a new data in the database
const createSkill = (newData) => __awaiter(void 0, void 0, void 0, function* () {
    const existingSkill = yield SkillModel.findOne({
        person_Id: newData.person_Id,
    });
    if (existingSkill) {
        const uniqueTechnicalSkills = [
            ...new Set([
                ...existingSkill.technical_skills,
                ...newData.technical_skills,
            ]),
        ];
        const uniqueSoftSkills = [
            ...new Set([...existingSkill.soft_skills, ...newData.soft_skills]),
        ];
        existingSkill.technical_skills = uniqueTechnicalSkills;
        existingSkill.soft_skills = uniqueSoftSkills;
        return yield existingSkill.save();
    }
    else {
        const newSkill = new SkillModel({
            person_Id: newData.person_Id,
            technical_skills: newData.technical_skills,
            soft_skills: newData.soft_skills,
        });
        return yield newSkill.save();
    }
});
// 3. get a single data
const getSingleSkill = (skillId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield SkillModel.findById(skillId);
});
// 4. update a single data
const updateSkill = (skillId, updateSkill) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new mongoose.Types.ObjectId(skillId);
    const updatePayload = {
        technical_skills: updateSkill.technical_skills,
        soft_skills: updateSkill.soft_skills,
    };
    return yield SkillModel.findByIdAndUpdate(id, updatePayload, { new: true });
});
// 5. Delete a single Skill
const removeSkill = (skillId) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new mongoose.Types.ObjectId(skillId);
    return yield SkillModel.findByIdAndDelete(id);
});
export default {
    getAllSkills,
    createSkill,
    getSingleSkill,
    updateSkill,
    removeSkill,
};

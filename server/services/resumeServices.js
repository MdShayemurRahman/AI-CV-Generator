var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ResumeModel from '../models/index';
const getAllResumes = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield ResumeModel.find().populate('person skills').exec();
});
const createResume = (newResumeData) => __awaiter(void 0, void 0, void 0, function* () {
    const newResume = new ResumeModel(newResumeData);
    return yield newResume.save();
});
const getSingleResume = (resumeId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ResumeModel.findById(resumeId).populate('person skills').exec();
});
const updateResume = (resumeId, updateResumeData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ResumeModel.findByIdAndUpdate(resumeId, updateResumeData, {
        new: true,
    })
        .populate('person skills')
        .exec();
});
const removeResume = (resumeId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ResumeModel.findByIdAndDelete(resumeId);
});
export default {
    getAllResumes,
    createResume,
    getSingleResume,
    updateResume,
    removeResume,
};

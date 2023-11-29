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
import PersonalInfoModel from '../models/PersonalInfoModel';
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield PersonalInfoModel.find().exec();
});
const findOne = (personalInfoId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield PersonalInfoModel.findById(personalInfoId);
});
const createOne = (newData) => __awaiter(void 0, void 0, void 0, function* () {
    const newInfo = new PersonalInfoModel(newData);
    return yield newInfo.save();
});
const updateOne = (infoId, updateInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new mongoose.Types.ObjectId(infoId);
    return yield PersonalInfoModel.findByIdAndUpdate(id, updateInfo, {
        new: true,
    });
});
const removeOne = (infoId) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new mongoose.Types.ObjectId(infoId);
    return yield PersonalInfoModel.findByIdAndDelete(id);
});
export default {
    findAll,
    findOne,
    createOne,
    updateOne,
    removeOne,
};

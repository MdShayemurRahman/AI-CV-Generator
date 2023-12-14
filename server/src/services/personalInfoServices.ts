import mongoose from 'mongoose';

import PersonalInfoModel from '../models/PersonalInfoModel';
import {
  CreatePersonalInfoInput,
  UpdatePersonalInfo,
} from '../types/PersonalInfo';

const findAll = async () => {
  return await PersonalInfoModel.find().exec();
};

const findOne = async (personalInfoId: string) => {
  return await PersonalInfoModel.findById(personalInfoId);
};

const createOne = async (newData: CreatePersonalInfoInput) => {
  const newInfo = new PersonalInfoModel(newData);
  return await newInfo.save();
};

const updateOne = async (infoId: string, updateInfo: UpdatePersonalInfo) => {
  const id = new mongoose.Types.ObjectId(infoId);
  return await PersonalInfoModel.findByIdAndUpdate(id, updateInfo, {
    new: true,
  });
};

const removeOne = async (infoId: string) => {
  const id = new mongoose.Types.ObjectId(infoId);
  return await PersonalInfoModel.findByIdAndDelete(id);
};

export default {
  findAll,
  findOne,
  createOne,
  updateOne,
  removeOne,
};

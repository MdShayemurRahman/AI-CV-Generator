import mongoose from 'mongoose';
import SkillModel from '../models/SkillModel';

import { CreateSkillInput, UpdateSkill } from '../types/Skill';

// 1. get all the data from database
const getAllSkills = async () => {
  return await SkillModel.find().exec();
};

// 2. create a new data in the database
const createSkill = async (newData: CreateSkillInput) => {
  const newSkill = new SkillModel(newData);
  return await newSkill.save();
};

// 3. get a single data
const getSingleSkill = async (skillId: string) => {
  return await SkillModel.findById(skillId);
};

// 4. update a single data
const updateSkill = async (skillId: string, updateSkill: UpdateSkill) => {
  const id = new mongoose.Types.ObjectId(skillId);
  return await SkillModel.findByIdAndUpdate(id, updateSkill, { new: true });
};

// 5. Delete a single Skill
const removeSkill = async (skillId: string) => {
  const id = new mongoose.Types.ObjectId(skillId);
  return await SkillModel.findByIdAndDelete(id);
};

export default {
  getAllSkills,
  createSkill,
  getSingleSkill,
  updateSkill,
  removeSkill,
};

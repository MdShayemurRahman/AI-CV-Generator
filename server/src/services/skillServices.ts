import mongoose from 'mongoose';
import SkillModel from '../models/SkillModel';

import { CreateSkillInput, UpdateSkill } from '../types/Skill';

// 1. get all the data from database
const getAllSkills = async () => {
  return await SkillModel.find().exec();
};

// 2. create a new data in the database
const createSkill = async (newData: CreateSkillInput) => {
  const existingSkill = await SkillModel.findOne({
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

    return await existingSkill.save();
  } else {
    const newSkill = new SkillModel({
      person_Id: newData.person_Id,
      technical_skills: newData.technical_skills,
      soft_skills: newData.soft_skills,
    });
    return await newSkill.save();
  }
};

// 3. get a single data
const getSingleSkill = async (skillId: string) => {
  return await SkillModel.findById(skillId);
};

// 4. update a single data
const updateSkill = async (skillId: string, updateSkill: UpdateSkill) => {
  const id = new mongoose.Types.ObjectId(skillId);
  const updatePayload = {
    technical_skills: updateSkill.technical_skills,
    soft_skills: updateSkill.soft_skills,
  };

  return await SkillModel.findByIdAndUpdate(id, updatePayload, { new: true });
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

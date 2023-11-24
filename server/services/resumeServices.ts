import ResumeModel from '../models/index';
import { CreateResumeInput, UpdateResumeInput } from '../types/Resume';

const getAllResumes = async () => {
  return await ResumeModel.find().populate('person skills').exec();
};

const createResume = async (newResumeData: CreateResumeInput) => {
  const newResume = new ResumeModel(newResumeData);
  return await newResume.save();
};

const getSingleResume = async (resumeId: string) => {
  return await ResumeModel.findById(resumeId).populate('person skills').exec();
};

const updateResume = async (resumeId: string, updateResumeData: UpdateResumeInput) => {
  return await ResumeModel.findByIdAndUpdate(resumeId, updateResumeData, {
    new: true,
  })
    .populate('person skills')
    .exec();
};

const removeResume = async (resumeId: string) => {
  return await ResumeModel.findByIdAndDelete(resumeId);
};

export default {
  getAllResumes,
  createResume,
  getSingleResume,
  updateResume,
  removeResume,
};

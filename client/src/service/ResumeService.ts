import axios from 'axios';
import { Resume } from '../types/Resume';

const BASE_URL = process.env.REACT_APP_API;

export const getAllResumes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/resume`);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch resumes');
  }
};

export const getSingleResume = async (resumeId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/resume/${resumeId}`);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch the resume');
  }
};

export const createResume = async (resumeData: Resume) => {
  try {
    const response = await axios.post(`${BASE_URL}/resume`, resumeData);
    return response.data;
  } catch (error) {
    throw Error('Failed to create a new resume');
  }
};

export const updateResume = async (resumeId: string, updatedData: Resume) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/resume/${resumeId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    throw Error('Failed to update the resume');
  }
};

export const deleteResume = async (resumeId: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/resume/${resumeId}`);
    return response.data;
  } catch (error) {
    throw Error('Failed to delete the resume');
  }
};

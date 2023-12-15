import axios from 'axios';

import { Skills } from '../types/Skills';

const BASE_URL = process.env.REACT_APP_API;

export const createSkill = async (skillData: Skills) => {
  try {
    const response = await axios.post(`${BASE_URL}/resume/skills`, skillData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create skill');
  }
};

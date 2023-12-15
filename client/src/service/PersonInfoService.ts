import axios from 'axios';

import { Person } from '../types/PersonalInfo';

const BASE_URL = process.env.REACT_APP_API;


export const createPersonInfo = async (personData: Person) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/resume/personal`,
      personData
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to create person information');
  }
};

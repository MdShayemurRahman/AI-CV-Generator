import { Router } from 'express';

import { skills } from '../data/skills';
import { Skills } from '../types/Skills';

const getAllSkills = () => {
  return skills;
};

const getSkillById = (id: number) => {
  const skill = skills.find((s) => s.id === id);
  return skill;
};

const addSkill = (newSkill: Skills) => {
  newSkill.id = skills.length + 1;
  skills.push(newSkill);
  return newSkill;
};

const updateSkill = (id: number, updatedSkill: Skills) => {
  const index = skills.findIndex((s) => s.id === id);
  if (index === -1) {
    return null;
  }

  skills[index] = { ...skills[index], ...updatedSkill };
  return skills[index];
};

const deleteSkill = (id: number) => {
  const index = skills.findIndex((s) => s.id === id);
  if (index === -1) {
    return null;
  }

  const deletedSkill = skills.splice(index, 1)[0];
  return deletedSkill;
};

export { getAllSkills, getSkillById, addSkill, updateSkill, deleteSkill };

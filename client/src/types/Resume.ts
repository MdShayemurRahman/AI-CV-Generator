import { Person } from './PersonalInfo';
import { Skills } from './Skills';

export interface Resume {
  _id: string;
  person: Person;
  skills: Skills;
}

export interface CreateResume {
  person: Person;
  skills: Skills;
}

import { PersonalInfo } from './PersonalInfo';

interface Education {
  institude: string;
  degree: string;
  graduation_date: string;
  gpa: string;
  field_of_study: string;
}

interface Skills {
  technical_skills: string[];
  soft_skills: string[];
  language_proficiency: Record<string, string>;
}

interface EmploymentDate {
  start_date: string;
  end_date: string;
}

interface WorkExperience {
  job_title: string;
  company_name: string;
  employment_date: EmploymentDate;
  description: string;
}

interface Project {
  title: string;
  desc: string;
  duration: string;
  outcomes: string;
}

interface Reference {
  reference_name: string;
  contact_info: string;
  relationship_to_applicant: string;
}

export interface Resume {
  id: number;
  username: string;
  personal_info: PersonalInfo;
  education: Education[];
  Skills: Skills;
  Work_Experience: WorkExperience[];
  Projects: Project[];
  References: Reference[];
}

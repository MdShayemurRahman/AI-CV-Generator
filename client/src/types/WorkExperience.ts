import { EmploymentDate } from "./EmploymentDate";

export interface WorkExperience {
  job_title: string;
  company_name: string;
  employment_date: EmploymentDate;
  description: string;
}

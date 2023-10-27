import { PersonalInfo } from "./PersonalInfo";
import { Reference } from "./Reference";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { WorkExperience } from "./WorkExperience";
import { Project } from "./Project";

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

// export const resumeData: Resume[] = [
//   {
//     id: 1,
//     username: 'user',
//     personal_info: {
//       first_name: 'Alan',
//       last_name: 'Donald',
//       email: 'email@mail.com',
//       phone_no: '+358449955800',
//       linkedin_profile: 'linkedin.com/in/johndoe',
//       personal_website: 'johndoe.com',
//       address: {
//         street_addr: 'Yrttikatu 1',
//         city: 'tampere',
//         country: 'Finland',
//       },
//       headline: 'An enthusiastic Software Developer',
//     },
//     education: [
//       {
//         institude: 'University of XYZ',
//         degree: 'Bachelor in Software Engineering',
//         graduation_date: 'May 2023',
//         gpa: '3.8',
//         field_of_study: 'Computer Science',
//       },
//     ],
//     Skills: {
//       technical_skills: ['Java', 'Python', 'SQL', 'JavaScript', 'HTML/CSS'],
//       soft_skills: ['Effective Communication', 'Teamwork', 'Problem Solving'],
//       language_proficiency: {
//         English: 'Fluent',
//         Spanish: 'Intermediate',
//       },
//     },
//     Work_Experience: [
//       {
//         job_title: 'Software Developer',
//         company_name: 'Tech Solutions Inc.',
//         employment_date: {
//           start_date: 'May-2023',
//           end_date: 'current',
//         },
//         description:
//           'Developed web applications using Java and JavaScript. Collaborated with cross-functional teams.',
//       },
//     ],
//     Projects: [
//       {
//         title: 'E-commerce Website Redesign',
//         desc: "Redesigned the company's e-commerce website to improve user experience and increase sales.",
//         duration: 'March 20XX - July 20XX',
//         outcomes: 'Increased website conversion rate by 15%.',
//       },
//     ],
//     References: [
//       {
//         reference_name: 'Jane Smith',
//         contact_info: 'jane.smith@email.com',
//         relationship_to_applicant: 'Former Technical Lead',
//       },
//     ],
//   },
// ];

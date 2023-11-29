import FormData from './ResumeInterface';
const dummyFormData: FormData [] = [
    {
    personalInformation: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      linkedinProfile: 'linkedin.com/in/johndoe',
      streetAddress: '123 Main St',
      city: 'Anytown',
      country: 'USA',
      headline: 'Software Developer',
    },
    education: {
      institute: 'University of XYZ',
      degree: 'Bachelor of Science in Computer Science',
      gpa: '3.8',
      fieldOfStudy: 'Computer Science',
      graduationDate: new Date('2022-05-15'),
    },
    skills: {
      technicalSkills: 'JavaScript, React, Node.js',
      softSkills: 'Communication, Teamwork, Problem-solving',
      language: 'English',
    },
    workExperience: {
      jobTitle: 'Software Engineer',
      companyName: 'Tech Co.',
      employmentStartDate: new Date('2020-07-01'),
      employmentEndDate: new Date('2022-01-15'),
      description: 'Worked on developing web applications using React and Node.js.',
    },
    projects: {
      title: 'Project XYZ',
      outcomes: 'Increased system efficiency by 20%',
      projectStartDate: new Date('2021-02-01'),
      projectEndDate: new Date('2021-06-30'),
      projectDescription: 'Led a team to implement new features and improve existing functionality.',
    },
  }
];
  
  export default dummyFormData;
  
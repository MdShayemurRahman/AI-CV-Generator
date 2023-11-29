// Create an interface to represent the form data structure
interface FormData {
    personalInformation: {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      linkedinProfile: string;
      streetAddress: string;
      city: string;
      country: string;
      headline: string;
    };
    education: {
      institute: string;
      degree: string;
      gpa: string;
      fieldOfStudy: string;
      graduationDate: Date 
    };
    skills: {
      technicalSkills: string;
      softSkills: string;
      language: string;
    };
    workExperience: {
      jobTitle: string;
      companyName: string;
      employmentStartDate: Date 
      employmentEndDate: Date 
      description: string;
    };
    projects: {
      title: string;
      outcomes: string;
      projectStartDate: Date 
      projectEndDate: Date 
      projectDescription: string;
    };
  }
  
  export default FormData;


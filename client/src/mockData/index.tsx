import { Resume } from "../types/Resume";

export const resumeData: Resume[] = [
  {
    _id: '65602ddf6598a5f7143d3b8c',
    person: {
      _id: '65600701e5018a80286d6dac',
      first_name: 'Jaff',
      last_name: 'Hardy',
      email: 'newmail@mail.com',
      phone_no: '+123456787',
      linkedin_profile: 'http://linkedin.com/in/johndoe',
      address: {
        street_addr: 'Yrttikatu1',
        city: 'Tampere',
        country: 'Finland',
        _id: '656007f2e5018a80286d6db8',
      },
      headline: 'An enthusiastic Software Developer',
    },
    skills: {
      _id: '656011b5f17ca2b4f03d9b7a',
      person_Id: '6560069ee5018a80286d6da5',
      technical_skills: ['JavaScript', 'Python', 'C++'],
      soft_skills: ['Communication', 'TeamWork'],
    },
    __v: 0,
  },
];

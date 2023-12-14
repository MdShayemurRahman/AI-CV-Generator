import React, { useState } from 'react';
import { Grid, Paper } from '@mui/material/';

import DocumentResume from './CreateNewCV/Documentresume';
import dummyFormData from '../mockData/dummydata';
// import ResumeForm from '../components/Forms/ResumeForm';
// import ResumeDoc from '../components/ResultCV/ResumeDoc';
import { PersonalInfo } from '../types/PersonalInfo';
// Import other form section components...

const CreateResume = () => {
  // const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  // });

  // const handlePersonalInfoChange = (
  //   field: keyof PersonalInfo,
  //   value: string
  // ) => {
  //   setPersonalInfo({ ...personalInfo, [field]: value });
  // };

  return (
    <Grid container style={{ padding: '1rem' }}>
      {/* <Grid item xs={5} spacing={6} style={{ paddingRight: '1rem' }}>
        <Paper elevation={4}>
          {/* <ResumeForm
            personalInfo={personalInfo}
            onPersonalInfoChange={handlePersonalInfoChange}
          />
        </Paper>
      </Grid>

      <Grid item xs={7} style={{ background: 'white' }}>
        <Paper elevation={4}>
          <ResumeDoc personalInfo={personalInfo} /> */}
        {/* </Paper>
      </Grid> */} 
    </Grid>
  );
};

export default CreateResume;

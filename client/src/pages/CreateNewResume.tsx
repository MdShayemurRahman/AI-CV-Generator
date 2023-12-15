import React from 'react';
import { Button, Grid, Paper, Box } from '@mui/material/';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Form from './CreanteNewCV/PersonInfoForm';
import DocumentResume from './CreanteNewCV/Documentresume';
import dummyFormData from '../mockData/dummydata';

const CreateNewResume = () => {
  return (
    <Grid container style={{ padding: '1rem' }}>
      {/* Left Side (Form) */}
      <Grid item xs={5} spacing={6} style={{ paddingRight: '1rem' }}>
        {/* <Paper elevation={4}> */}
        <Form />
        {/* </Paper> */}
      </Grid>

      {/* Right Side (DocumentResume) */}
      <Grid item xs={7} style={{ background: 'white' }}>
        <Paper elevation={4}>
          <DocumentResume Resume={dummyFormData}></DocumentResume>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CreateNewResume;

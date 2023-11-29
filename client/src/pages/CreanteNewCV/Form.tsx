import { FC, useState } from 'react';
import { Button, Grid, TextField, Paper, Box, Typography, FormGroup} from '@mui/material/';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';


//import CVData from "./interfaces";


const Form = () => {
  //  const [fetchedData, setFetchedData] = useState<Array<CVData>>([]);

    return (
        <Box component="form" sx={{maxHeight: '85vh', overflowY: 'auto','& .MuiTextField-root': { m: 1, width: '24ch' }}}>
          <Grid>
          <Grid m={3}>
            <Typography>Personal Information</Typography>
          <TextField required label="First name" variant="outlined" />
          <TextField required  id="outlined-basic" label="Last name" variant="outlined" />
          <TextField required  type="email" id="outlined-basic" label="Email" variant="outlined" />
          <TextField required  id="outlined-basic" label="Phone Number" variant="outlined" />
          <TextField required  id="outlined-basic" label="Linkedin Profile" variant="outlined" />
          <TextField required  id="outlined-basic" label="Street Address" variant="outlined" />
          <TextField required  id="outlined-basic" label="City" variant="outlined" />
          <TextField required  id="outlined-basic" label="Country" variant="outlined" />
          <TextField required sx={{ width: '95% !important' }}  id="outlined-basic" label="Headline" variant="outlined" />
          </Grid>
          <Grid m={3}>
          <Typography>Education</Typography>
          <TextField required  id="outlined-basic" label="Institude" variant="outlined" />
          <TextField required  id="outlined-basic" label="Degree" variant="outlined" />
          <TextField required  id="outlined-basic" label="Gpa" variant="outlined" />
          <TextField required  id="outlined-basic" label="Field of study" variant="outlined" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Graduation Date" />
      </DemoContainer>
    </LocalizationProvider>
          </Grid>
          <Grid m={3}>
          <Typography>Skills</Typography>
          <TextField required  id="outlined-basic" label="Technical Skills" variant="outlined" />
          <TextField required  id="outlined-basic" label="Soft Skills" variant="outlined" />
          <TextField required  id="outlined-basic" label="Language" variant="outlined" />
          </Grid>
          <Grid m={3}>
          <Typography>Work Experience</Typography>
          <TextField required  id="outlined-basic" label="Job Title" variant="outlined" />
          <TextField required  id="outlined-basic" label="Company Name" variant="outlined" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Employment start date" />
        <DatePicker label="Employment end date" />
      </DemoContainer>
    </LocalizationProvider>
    <TextField required   sx={{ width: '95% !important' }} id="outlined-basic" label="Description" variant="outlined" />
          </Grid>
          <Grid m={3}>
          <Typography>Projects</Typography>
          <TextField required  id="outlined-basic" label="Title" variant="outlined" />
          <TextField required  id="outlined-basic" label="Outcomes" variant="outlined" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Start date" />
        <DatePicker label="End date" />
      </DemoContainer>
    </LocalizationProvider>
          <TextField required  sx={{ width: '95% !important' }} id="outlined-basic" label="Description" variant="outlined" />
          </Grid>
          </Grid>
          <Grid display="flex" justifyContent="right" padding={3}>
          <Button type='submit' variant="contained">Submit</Button>
          </Grid>
      </Box>
  );
};

export default Form;

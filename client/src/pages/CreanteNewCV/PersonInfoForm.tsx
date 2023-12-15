import { ChangeEvent, FC, FormEvent, useState } from 'react';
import {
  Button,
  Grid,
  TextField,
  Box,
  Typography,
  FormGroup,
} from '@mui/material/';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { createPersonInfo } from '../../service/PersonInfoService';
import { Axios, AxiosError } from 'axios';
import { Person } from '../../types/PersonalInfo';

const PersonInfoForm = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_no, setPhoneNo] = useState('');
  const [linkedin_profile, setLinkedin] = useState('');
  const [address, setAddress] = useState('');
  const [headline, setHeadline] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Your form submission logic goes here
    const newUser = {
      first_name,
      last_name,
      email,
      phone_no,
      linkedin_profile,
      address,
      headline,
    };

    console.log(newUser.first_name);
    // You can perform further actions here like sending data to the server via API

    // Clearing input fields after submission (optional)
    setFirstName('');
    setLastName('');
  };
  return (
    // <Box
    //   component='form'
    //   sx={{
    //     maxHeight: '85vh',
    //     overflowY: 'auto',
    //     '& .MuiTextField-root': { m: 1, width: '32ch' },
    //   }}
    // >
    <form onSubmit={handleSubmit}>
      <Typography>Personal Information</Typography>
      <TextField
        required
        label='First name'
        id='outlined-basic'
        variant='outlined'
        name='first_name'
        value={first_name}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />

      <TextField
        required
        id='outlined-basic'
        label='Last name'
        variant='outlined'
        name='last_name'
        value={last_name}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />

      <TextField
        required
        type='email'
        id='outlined-basic'
        label='Email'
        variant='outlined'
        name='email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        required
        id='outlined-basic'
        label='Phone Number'
        variant='outlined'
        name='phone_no'
        value={phone_no}
        onChange={(e) => {
          setPhoneNo(e.target.value);
        }}
      />
      <TextField
        required
        id='outlined-basic'
        label='Linkedin Profile'
        variant='outlined'
        name='linkedin_profile'
        value={linkedin_profile}
        onChange={(e) => {
          setLinkedin(e.target.value);
        }}
      />
      <TextField
        required
        id='outlined-basic'
        label='Address'
        variant='outlined'
        name='address'
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <TextField
        required
        sx={{ width: '96% !important' }}
        id='outlined-basic'
        label='Headline'
        variant='outlined'
        name='headline'
        value={headline}
        onChange={(e) => {
          setHeadline(e.target.value);
        }}
      />

      <Grid display='flex' justifyContent='right' padding={3}>
        <Button type='submit' variant='contained'>
          Next
        </Button>
      </Grid>
    </form>
    // </Box>
  );
};

export default PersonInfoForm;

{
  /* <TextField
            required
            type='email'
            id='outlined-basic'
            label='Email'
            variant='outlined'
            name='email'
            value={personInfo.email}
            onChange={handleFormChange}
          />
          <TextField
            required
            id='outlined-basic'
            label='Phone Number'
            variant='outlined'
            name='phone_no'
            value={personInfo.phone_no}
            onChange={handleFormChange}
          />
          <TextField
            required
            id='outlined-basic'
            label='Linkedin Profile'
            variant='outlined'
            name='linkedin_profile'
            value={personInfo.linkedin_profile}
            onChange={handleFormChange}
          />
          <TextField
            required
            id='outlined-basic'
            label='Address'
            variant='outlined'
            name='address'
            value={personInfo.address}
            onChange={handleFormChange}
          />
          <TextField
            required
            sx={{ width: '96% !important' }}
            id='outlined-basic'
            label='Headline'
            variant='outlined'
            name='headline'
            value={personInfo.headline}
            onChange={handleFormChange}
          /> */
}

{
  /* Education */
}
{
  /* <Grid m={3}>
          <Typography>Education</Typography>
          <TextField
            required
            id='outlined-basic'
            label='Institude'
            variant='outlined'
          />
          <TextField
            required
            id='outlined-basic'
            label='Degree'
            variant='outlined'
          />
          <TextField
            required
            id='outlined-basic'
            label='Gpa'
            variant='outlined'
          />
          <TextField
            required
            id='outlined-basic'
            label='Field of study'
            variant='outlined'
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label='Graduation Date' />
            </DemoContainer>
          </LocalizationProvider>
        </Grid> */
}

{
  /* Skills */
}
{
  /* <Grid m={3}>
          <Typography>Skills</Typography>
          <TextField
            required
            id='technicalSkills'
            label='Technical Skills (comma-separated)'
            variant='outlined'
            value={
              Array.isArray(formData.technical_skills)
                ? formData.technical_skills.join(', ')
                : formData.technical_skills
            } // Join array or display string based on the data type
            onChange={(e) => handleInputChange(e, 'technical_skills')}
          />

          <TextField
            required
            id='softSkills'
            label='Soft Skills (comma-separated)'
            variant='outlined'
            value={
              Array.isArray(formData.soft_skills)
                ? formData.soft_skills.join(', ')
                : formData.soft_skills
            } // Join array or display string based on the data type
            onChange={(e) => handleInputChange(e, 'soft_skills')}
          />
          
        </Grid> */
}
{
  /* <Grid m={3}>
          <Typography>Work Experience</Typography>
          <TextField
            required
            id='outlined-basic'
            label='Job Title'
            variant='outlined'
          />
          <TextField
            required
            id='outlined-basic'
            label='Company Name'
            variant='outlined'
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label='Employment start date' />
              <DatePicker label='Employment end date' />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            required
            sx={{ width: '95% !important' }}
            id='outlined-basic'
            label='Description'
            variant='outlined'
          />
        </Grid> */
}

{
  /* <Grid m={3}>
          <Typography>Projects</Typography>
          <TextField
            required
            id='outlined-basic'
            label='Title'
            variant='outlined'
          />
          <TextField
            required
            id='outlined-basic'
            label='Outcomes'
            variant='outlined'
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label='Start date' />
              <DatePicker label='End date' />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            required
            sx={{ width: '95% !important' }}
            id='outlined-basic'
            label='Description'
            variant='outlined'
          />
        </Grid> */
}

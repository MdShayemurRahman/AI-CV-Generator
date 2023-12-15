import React from 'react';

import { Resume } from '../types/Resume';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import './template.css';

const ResumeTemplate: React.FC<{ resumeDetails: Resume }> = ({
  resumeDetails,
}) => {
  return (
    <div className='wrapper'>
      <div className='sidebar-wrapper'>
        {/* Sidebar content */}
        <div className='profile-container'>
          <Typography variant='h2' className='name'>
            {`${resumeDetails.person.first_name} ${resumeDetails.person.last_name}`}
          </Typography>
          <Typography variant='subtitle1' className='tagline'>
            {resumeDetails.person.headline}
          </Typography>
          <Typography variant='body1'>
            Email: {resumeDetails.person.email}
          </Typography>
          <Typography variant='body1'>
            Phone: {resumeDetails.person.phone_no}
          </Typography>
          <Typography variant='body1'>
            LinkedIn: {resumeDetails.person.linkedin_profile}
          </Typography>
          <Typography variant='body1'>
            Address: {resumeDetails.person.address}
          </Typography>
          {/* Add other profile details as needed */}
        </div>
      </div>
      <div className='main-wrapper'>
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
          {/* Technical Skills */}
          <Typography variant='h5' className='section-title'>
            Technical Skills
          </Typography>
          <List className='skillset'>
            {resumeDetails.skills.technical_skills.map((skill, index) => (
              <ListItem key={index} className='item'>
                <Typography variant='body1' className='level-title'>
                  {skill}
                </Typography>
              </ListItem>
            ))}
          </List>

          {/* Soft Skills */}
          <Typography variant='h5' className='section-title'>
            Soft Skills
          </Typography>
          <List className='skillset'>
            {resumeDetails.skills.soft_skills.map((skill, index) => (
              <ListItem key={index} className='item'>
                <Typography variant='body1' className='level-title'>
                  {skill}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      </div>
    </div>
  );
};

export default ResumeTemplate;

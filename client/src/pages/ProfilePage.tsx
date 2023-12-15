import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Resume } from '../types/Resume';
import { getSingleResume } from '../service/ResumeService';
import {
  Typography,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@mui/material';
import ResumeTemplate from '../template/ResumeTemplate';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const [resumeDetails, setResumeDetails] = useState<Resume>();

  useEffect(() => {
    const fetchResumeDetails = async () => {
      try {
        const resumeData = await getSingleResume(id as string);
        setResumeDetails(resumeData);
      } catch (error) {
        console.error('Error fetching resume details:', error);
      }
    };
    fetchResumeDetails();
  }, [id]);

  return (
    <Container maxWidth='md' sx={{ marginTop: 4 }}>
      {resumeDetails && (
        <>
          <ResumeTemplate resumeDetails={resumeDetails} />
        </>
      )}
    </Container>
  );
};

export default ProfilePage;

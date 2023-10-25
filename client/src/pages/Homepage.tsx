import { Button, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Box>
        <Button onClick={() => navigate('/import-from-existing')}>
          Import from existing
        </Button>
        <Button onClick={() => navigate('/create-new-cv')}>
          Create a new resume
        </Button>
      </Box>
    </div>
  );
};

export default Homepage;

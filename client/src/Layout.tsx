import { Outlet, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const title = {
  flexGrow: 1,
};

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position='static'>
        <Toolbar sx={{ margin: '2rem 5rem'}}>
          <Typography variant='h4' sx={title}>
            Ai-CV Generator
          </Typography>
          <Box>
            <Button color='inherit' onClick={() => navigate('/')}>
              Home
            </Button>
            <Button color='inherit' onClick={() => navigate('/login')}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Layout;

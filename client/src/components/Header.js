import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#ff1440',
        }}>
        <Toolbar>
          <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
            Task List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

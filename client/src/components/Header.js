import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#2564cf',
        }}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            To Do
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

export default function FloatingButton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color='primary' aria-label='edit'>
        <EditIcon />
      </Fab>
    </Box>
  );
}

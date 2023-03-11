import './App.css';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header.js';

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
        }}>
        <Header />
        <Box
          sx={{
            width: '100vw',
            margin: 0,
            padding: 0,
            height: '100vh',
          }}></Box>
      </Box>
    </>
  );
}

export default App;

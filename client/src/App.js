import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header.js';
import Main from './Pages/Main.js';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='xl' sx={{ width: '100vw', height: '100vh' }}>
        <Box
          sx={{
            width: '100vw',
            height: '10%',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Header />
        </Box>
        <Box
          sx={{
            border: 'solid',
            height: '90%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Main />
        </Box>
      </Container>
    </>
  );
}

export default App;

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
      <Container maxWidth='xl'>
        <Box
          sx={{
            bgcolor: '#FFFFFF',
            height: '15vh',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Header />
        </Box>
        <Box
          sx={{
            height: '85vh',
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

import './App.css';
import Router from './Router';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header.js';
import Main from './components/MainPage';

function App() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
      }}>
      <Main />
    </Box>
  );
}

export default App;

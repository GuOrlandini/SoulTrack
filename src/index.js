import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css";
import { ThemeProvider} from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({

  palette: {
    primary: {
      main: '#8EA7E9',
      //darker: '#053e85',
    },
    secondary:{
      main: '#DCD6FF',
    },
    bgcolor:{
      main: '#FFF2F2',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);


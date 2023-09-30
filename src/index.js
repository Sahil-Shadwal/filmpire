import React from 'react';
// import { ReactDOM } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './components/App.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const theme = createTheme({});

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
);

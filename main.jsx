import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '##2c5dc4',    
      dark:'##0d327e',
      light:"##5981d4"
    },    
    error:{
      main:"##f30f0f",
      warning:"##e04141",
      dark:'##960a0a',
    }
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <ThemeProvider theme={theme}>
  <BrowserRouter>
    <App />
  
  </BrowserRouter>
  
  </ThemeProvider>
  </React.StrictMode>,
  
  
)

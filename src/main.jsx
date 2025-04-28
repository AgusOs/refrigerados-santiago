import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App.jsx';

import { Footer } from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { Tabs } from './components/tabs/Tabs.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar/>
        <Tabs/>
        <App/>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)

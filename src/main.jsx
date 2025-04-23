import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx';

import { Footer } from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { Tabs } from './components/tabs/Tabs.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Tabs/>
      <App/>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)

import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

import { ThemeProvider, createTheme } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const drawerWidth = 240;
const navItems = [
  {
    name: 'Ofertas',
    path: '/'
  },
  {
    name: 'Nuestros clientes',
    path: '/clientes'
  },
  {
    name: 'La empresa',
    path: '/empresa'
  },
  {
    name: 'Sucursales',
    path: '/sucursales'
  }
];

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(1, 127, 175)',
    },
  },
});

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    return () => {    
      navigate(path);
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src="\assets\logo-color.webp" alt="logo" className={styles.logo}/>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding onClick={handleNavigate(item.path)}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <b>{item.name}</b>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', bgcolor: 'primary.main' }}>
        <CssBaseline />
        <AppBar position='static' component="nav" sx={{ height: '10vh', justifyContent: 'center', minHeight: '76px' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '10vh', minHeight: '76px', paddingRight: '0 !important' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <div className={styles.socialscontainer}>
              <a href="https://www.facebook.com/refrigeradosantiago" target="_blank" rel="noopener noreferrer">
                <FacebookRoundedIcon sx={{ color: "#ffffff", backgroundColor: '#61a5c2', borderRadius: '50%', padding: '6px', fontSize: 34 }} />
              </a>
              <a href="https://wa.me/5492954273864" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon sx={{ color: "#ffffff", backgroundColor: '#61a5c2', borderRadius: '50%', padding: '6px', fontSize: 34 }} />
              </a>
              <a href="https://www.instagram.com/refrigerados.santiago/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ color: "#ffffff", backgroundColor: '#61a5c2', borderRadius: '50%', padding: '6px', fontSize: 34 }} />
              </a>
            </div>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, position: 'absolute', left: '50%', transform: 'translateX(-50%)', textWrap: 'nowrap' }}>
              {navItems.map((item, index) => (
                <Button key={index} sx={{ color: '#fff' }} onClick={handleNavigate(item.path)}>
                  <b>{item.name}</b>
                </Button>
              ))}
            </Box>
            <div className={styles.logocontainer}>
              <img src="\assets\images\logo-nav.webp" alt="logo"/>
            </div>
            <div className={styles.logocontainermobile}>
              <img src="\assets\logo-color.webp" alt="logo"/>
            </div>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;

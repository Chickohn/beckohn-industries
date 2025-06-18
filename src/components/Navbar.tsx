import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'Services', 'About', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <Link
          key={item}
          to={item.toLowerCase()}
          smooth={true}
          duration={500}
          onClick={handleDrawerToggle}
        >
          <ListItem
            button
            sx={{ cursor: 'pointer' }}
          >
            <ListItemText primary={item} />
          </ListItem>
        </Link>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" sx={{ 
      backgroundColor: 'var(--color-black)',
      //backgroundColor: 'custom.navbarScrolled', // isScrolled ? 'custom.navbarScrolled' : 'transparent',
      boxShadow: isScrolled ? 1 : 0,
      transition: 'all 0.3s ease-in-out'
    }}>
      <Container maxWidth="lg" sx={{
        backgroundColor: 'var(--color-black)',
      }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: 'var(--color-white)', // isScrolled ? 'primary.main' : 'common.white',
              fontWeight: 700,
              fontSize: '1.5rem'
            }}
          >
            <Box component="span" sx={{ color: 'var(--color-secondary)' }}>B</Box>eckohn 
            <Box component="span" sx={{ color: 'var(--color-secondary)' }}> D</Box>igital



            
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
              >
                <Button
                  sx={{
                    color: 'common.white', // isScrolled ? 'primary.main' : 'common.white',
                    mx: 1,
                    '&:hover': {
                      backgroundColor: 'action.hover'
                    }
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: 'common.white' }} // isScrolled ? 'primary.main' : 'common.white' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 
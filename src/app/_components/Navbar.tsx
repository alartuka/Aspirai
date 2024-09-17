import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box, Stack } from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import { UserButton } from "@clerk/nextjs";


function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'primary.main', mb: 4 }}>
      <Toolbar>
    
        <Typography
            variant="h3"
            sx={{
                flexGrow: 1,
                color: '#fff',
                cursor: 'pointer',
                '&:hover': { color: '#ffef00' },
            }}
        >
            Aspir
            <Box component="span" sx={{ fontWeight: 'bold', color: '#000', '&:hover': { color: '#fcfcfc' } }}>
                ai
            </Box>
        </Typography>
            
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }} justifyContent={'end'}>
            <Button sx={{ color: '#fff', mx: 1 }}>Lists</Button>
            <Button sx={{ color: '#fff', mx: 1 }}>Progress</Button>
            <Button sx={{ color: '#fff', mx: 1 }}>About</Button>
            <UserButton />              
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuItem onClick={handleMenuClose}>Features</MenuItem>
          <MenuItem onClick={handleMenuClose}>Pricing</MenuItem>
          <MenuItem onClick={handleMenuClose}>About</MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <UserButton />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './Header.css'; // Import the CSS file

const Header: React.FC = () => {
  return (
    <AppBar color={'transparent'} >
      <Toolbar className="header">
        <Typography className="header-title">Amrit Note</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
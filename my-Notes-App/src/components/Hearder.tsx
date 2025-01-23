
import{AppBar, Toolbar} from '@mui/material'


import React from 'react'
import { logo } from '../assets/Logo';
import { red } from '@mui/material/colors';

const Header:React.FC = () => {
  return (
    <AppBar >
      <Toolbar>
       <img src={logo}/>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
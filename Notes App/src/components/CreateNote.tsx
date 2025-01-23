import React from 'react';
import { InputBase, Box, Button } from '@mui/material';
import './CreateNote.css'; // Import the CSS file

const CreateNote: React.FC = () => {
  return (
    <Box className="create-note-container">
      <InputBase className="input-title" placeholder='Title' />
      {/* <Box component="span" className="counter">30</Box> */}

      <InputBase className="input-details" placeholder='Details' />
      {/* <Box component="span" className="counter">50</Box> */}

      <input type="color" className="color-input" defaultValue={'#f5f5f5'} />

      <Button variant='outlined' className="create-button">Create</Button>
    
    </Box>
    
  );
}

export default CreateNote;
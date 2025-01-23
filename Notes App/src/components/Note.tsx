import React from 'react';
import { NoteObject } from '../models/note';
import { Box, Button, Card, CardContent, Typography, styled } from '@mui/material';

interface INoteProps {
  note: NoteObject;
  deleteNote: (id: number) => void; // Accept deleteNote as a prop
}

const StyledCard = styled(Card)`
  width: 400px;
  margin: 20px;
`;

const Wrapper = styled(Box)`
  & > button {
    border: 1px solid black;
    background-color: #fff; /* Corrected background color */
    margin-top: 5px;
  }
`;

const Note: React.FC<INoteProps> = ({ note, deleteNote }) => {
  return (
    <StyledCard style={{ backgroundColor : note.color }}>
      <CardContent>
        <Wrapper>
          <Typography variant="h6">{note.title}</Typography>
          <Typography variant="body1">{note.details}</Typography>
          <Typography variant="caption">{note.Date}</Typography>
          <Button 
            variant='outlined' 
            style={{ marginTop: '10px' }} 
            onClick={() => deleteNote(note.id)} // Call deleteNote with the note's ID
          >
            Delete
          </Button>
        </Wrapper>
      </CardContent>
    </StyledCard>
  );
}

export default Note;
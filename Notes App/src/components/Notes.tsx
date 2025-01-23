import { Box, Typography } from '@mui/material';
import React from 'react';
import { NoteObject } from '../models/note';
import Note from './Note';

interface INotesProps {
  notes: NoteObject[];
  deleteNote: (id:number) => void;
}

const Notes: React.FC<INotesProps> = ({ notes, deleteNote }) => { // Destructure notes from props
  return (
    <Box>
      <Typography variant='h5'>Notes</Typography>
      <Box>
        {
          notes.map(note => (
            <Note key={note.id} note={note} deleteNote={deleteNote}/> // Pass the note object to the Note component
          ))
        }
      </Box>
    </Box>
  );
}

export default Notes;
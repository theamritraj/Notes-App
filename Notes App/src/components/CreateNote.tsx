import React, { useState } from 'react';
import { InputBase, Box, Button, styled, Typography } from '@mui/material';
import './CreateNote.css'; 
import { NoteObject } from '../models/note';
import { DETAILS_LIMIT, TITLE_LIMIT } from '../assets/Logo';

const Container = styled(Box)`
  & > * {
    margin: 50px 20px 20px 0;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    opacity: 0.2;
    width: 300px;
    padding-right: 25px;
  }
  & > div > input[type="color"] {
    width: 40px;
    height: 30px;
    position: relative;
    bottom: -10px;
  }
  & > span {
    font-size: 10px;
    position: relative;
    right: 60px;
  }
`;

const Error = styled(Typography)`
  background-color: red;
  color: #fff;
  padding: 10px;
  width: 50%;
`;

const defaultobj: NoteObject = {
  id: 0,
  title: "",
  details: "",
  color: "#f5f5f5", // Default color
  Date: (new Date()).toLocaleString(),
};

interface ICreateNoteProps {
  addNotes: (note: NoteObject) => void;
}

const CreateNote: React.FC<ICreateNoteProps> = ({ addNotes }) => {
  const [error, setError] = useState<string>('');
  const [note, setNote] = useState<NoteObject>(defaultobj);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (error) {
      setError('');
    }
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onCreateNote = () => {
    if (!note.title || !note.details) {
      setError('Title and Details are required!');
      return;
    }
    addNotes({ ...note, id: Date.now() }); // Use Date.now() for a unique ID
    setNote(defaultobj); // Reset the note state after creating a note
  };

  return (
    <Container className="create-note-container">
      <InputBase
        className="input-title"
        placeholder='Title'
        onChange={onValueChange}
        name='title'
        value={note.title} 
        inputProps={{
          maxLength: TITLE_LIMIT,
          minLength: 3,
        }}
      />
      <Box component="span" className="counter">{note.title.length}/{TITLE_LIMIT}</Box>

      <InputBase
        className="input-details"
        placeholder='Details'
        onChange={onValueChange}
        name='details'
        value={note.details}
        inputProps={{
          maxLength: DETAILS_LIMIT,
          minLength: 10,
        }}
      />
      <Box component="span" className="counter">{note.details.length}/{DETAILS_LIMIT}</Box>

      <input
        type="color"
        className="color-input"
        onChange={onValueChange}
        name='color'
        value={note.color}
      />

      <Button 
        variant='outlined' 
        className="create-button"
        onClick={onCreateNote} 
      >
        Create
      </Button>
      {error && <Error>{error}</Error>}
    </Container>
  );
}

export default CreateNote;
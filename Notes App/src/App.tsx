import { useEffect, useState } from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Notes from "./components/Notes";
import { Box } from "@mui/material";
import { NoteObject } from "./models/note";

function App() {
  const [notes, setNotes] = useState<NoteObject[]>([]);

  useEffect(() => {
    const storedNotes = sessionStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const addNotes = (note: NoteObject) => {
    setNotes((prevNotes) => {
      const updatedNotes = [note, ...prevNotes];
      sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <>
      <Header />
      <Box style={{ padding: 20 }} />
      <CreateNote addNotes={addNotes} />
      <Notes notes={notes} deleteNote={deleteNote} />
      <Box />
    </>
  );
}

export default App;
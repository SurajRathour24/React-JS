import React, { useState } from "react";
import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";

const App = () => {

  const [notes, setNotes] = useState([]);

  // ➕ Add note
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  // ❌ Delete note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  
  return (
    <div>
      <section className="w-full min-h-screen bg-gray-100 p-4 md:p-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Left Side */}
        <NotesForm addNote={addNote} />

        {/* Right Side */}
        <NotesList notes={notes} deleteNote={deleteNote} />

  </div>
</section>

    </div>
  );
};

export default App;

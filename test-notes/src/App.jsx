import React from "react";
import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";

const App = () => {
  return (
    <div>
      <section className="w-full min-h-screen bg-gray-100 p-4 md:p-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

    < NotesForm />

    {/* <!-- Right: Notes List --> */}
    <NotesList> </NotesList>

  </div>
</section>

    </div>
  );
};

export default App;

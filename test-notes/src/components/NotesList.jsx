import React from "react";
import { Trash } from "lucide-react";

const NotesList = ({ notes, deleteNote }) => {
  return (
    <div className="notes-list-box">
      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Notes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{note.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{note.desc}</p>
              </div>

              <button
                onClick={() => deleteNote(note.id)}
                className="flex items-center gap-1 mt-4 text-red-600 self-end"
              >
                <Trash size={16} /> Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesList;

// src/admin-pages/Notes.js
import React, { useEffect, useState } from 'react';
import { FaTrash, FaFilePdf } from 'react-icons/fa';
import axios from 'axios';

const Notes = () => {
  const [notes, setNotes] = useState({});

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/resources/notes');
      const grouped = res.data.reduce((acc, note) => {
        if (!acc[note.university]) acc[note.university] = [];
        acc[note.university].push(note);
        return acc;
      }, {});
      setNotes(grouped);
    } catch (err) {
      console.error('❌ Failed to fetch notes:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/resources/${id}`);
      fetchNotes(); // Refresh list after deletion
    } catch (err) {
      console.error('❌ Failed to delete note:', err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">📚 All Notes</h2>

      {Object.keys(notes).length === 0 ? (
        <p className="text-gray-600">No notes found.</p>
      ) : (
        Object.entries(notes).map(([university, uniNotes]) => (
          <div key={university} className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">{university}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {uniNotes.map((note) => (
                <div
                  key={note._id}
                  className="bg-white shadow p-4 rounded-lg border border-gray-200"
                >
                  <h4 className="text-lg font-bold text-blue-600 mb-1">{note.title || note.subject}</h4>
                  <p className="text-sm text-gray-600">Course: {note.course}</p>
                  <p className="text-sm text-gray-600 mb-2">Semester: {note.semester}</p>

                  <a
                    href={`http://localhost:5000/uploads/resources/${note.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm"
                  >
                    <FaFilePdf /> View PDF
                  </a>

                  <button
                    onClick={() => handleDelete(note._id)}
                    className="mt-3 bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 flex items-center gap-1"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Notes;

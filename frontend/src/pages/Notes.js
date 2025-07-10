import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaFilePdf } from 'react-icons/fa';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE
});

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    API.get('/api/resources/notes')
      .then((res) => setNotes(res.data))
      .catch((err) => console.error('Error fetching notes:', err));
  }, []);

  return (
    <div className="min-h-screen px-6 py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-12 text-center text-indigo-700 dark:text-indigo-300">
        📚 Course Notes
      </h1>

      {notes.length === 0 ? (
        <p className="text-center text-gray-500">No notes available.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {notes.map((note) => (
            <div
              key={note._id}
              className="bg-white dark:bg-gray-800 shadow rounded-xl p-5 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaFilePdf className="text-red-500 text-2xl" />
                <h2 className="text-lg font-semibold">
                  {note.title || note.subject || 'Untitled Note'}
                </h2>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                <strong>University:</strong> {note.university || 'Unknown'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                <strong>Course:</strong> {note.course || 'N/A'}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                <strong>Semester:</strong> {note.semester || 'N/A'}
              </p>

              <a
                href={`${process.env.REACT_APP_API_BASE}/uploads/resources/${note.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded mt-3"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notes;

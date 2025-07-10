// src/admin-pages/Syllabus.js
import React, { useEffect, useState } from 'react';
import { FaTrash, FaFilePdf } from 'react-icons/fa';
import axios from 'axios';

// ✅ Use env-based base URL for cleaner deployment config
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE
});

const Syllabus = () => {
  const [syllabus, setSyllabus] = useState({});

  useEffect(() => {
    fetchSyllabus();
  }, []);

  const fetchSyllabus = async () => {
    try {
      const res = await API.get('/api/resources/syllabus');
      const grouped = res.data.reduce((acc, item) => {
        if (!acc[item.university]) acc[item.university] = [];
        acc[item.university].push(item);
        return acc;
      }, {});
      setSyllabus(grouped);
    } catch (err) {
      console.error('❌ Failed to fetch syllabus:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this syllabus?')) return;

    try {
      await API.delete(`/api/resources/${id}`);
      fetchSyllabus(); // Refresh
    } catch (err) {
      console.error('❌ Failed to delete syllabus:', err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">📘 All Syllabus</h2>

      {Object.keys(syllabus).length === 0 ? (
        <p className="text-gray-600">No syllabus found.</p>
      ) : (
        Object.entries(syllabus).map(([university, uniSyllabus]) => (
          <div key={university} className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">{university}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {uniSyllabus.map((item) => (
                <div
                  key={item._id}
                  className="bg-white shadow p-4 rounded-lg border border-gray-200"
                >
                  <h4 className="text-lg font-bold text-blue-600 mb-1">{item.title || item.subject}</h4>
                  <p className="text-sm text-gray-600">Course: {item.course}</p>
                  <p className="text-sm text-gray-600 mb-2">Semester: {item.semester}</p>

                  {/* ✅ Use dynamic backend URL from env */}
                  <a
                    href={`${process.env.REACT_APP_API_BASE}/uploads/resources/${item.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm"
                  >
                    <FaFilePdf /> View PDF
                  </a>

                  <button
                    onClick={() => handleDelete(item._id)}
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

export default Syllabus;

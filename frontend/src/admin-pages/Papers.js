// src/admin-pages/Papers.js
import React, { useEffect, useState } from 'react';
import { FaTrash, FaFilePdf } from 'react-icons/fa';
import axios from 'axios';

// ✅ Use centralized API with environment base URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE
});

const Papers = () => {
  const [papers, setPapers] = useState({});

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      const res = await API.get('/api/resources/papers');
      const grouped = res.data.reduce((acc, paper) => {
        if (!acc[paper.university]) acc[paper.university] = [];
        acc[paper.university].push(paper);
        return acc;
      }, {});
      setPapers(grouped);
    } catch (err) {
      console.error('❌ Failed to fetch papers:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this paper?')) return;

    try {
      await API.delete(`/api/resources/${id}`);
      fetchPapers(); // Refresh
    } catch (err) {
      console.error('❌ Failed to delete paper:', err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">📝 All Question Papers</h2>

      {Object.keys(papers).length === 0 ? (
        <p className="text-gray-600">No papers found.</p>
      ) : (
        Object.entries(papers).map(([university, uniPapers]) => (
          <div key={university} className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">{university}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {uniPapers.map((paper) => (
                <div
                  key={paper._id}
                  className="bg-white shadow p-4 rounded-lg border border-gray-200"
                >
                  <h4 className="text-lg font-bold text-blue-600 mb-1">{paper.title || paper.subject}</h4>
                  <p className="text-sm text-gray-600">Course: {paper.course}</p>
                  <p className="text-sm text-gray-600 mb-2">Semester: {paper.semester}</p>

                  {/* ✅ Dynamic PDF link */}
                  <a
                    href={`${process.env.REACT_APP_API_BASE}/uploads/resources/${paper.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm"
                  >
                    <FaFilePdf /> View PDF
                  </a>

                  <button
                    onClick={() => handleDelete(paper._id)}
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

export default Papers;

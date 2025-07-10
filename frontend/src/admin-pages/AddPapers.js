// 📄 AddPapers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ✅ Centralized API base URL using environment variable
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE
});

const AddPapers = () => {
  const [formData, setFormData] = useState({
    university: '', departmentName: '', courseName: '', subject: '',
    year: '', semester: '', fileUrl: '', uploadedBy: ''
  });

  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    // ✅ Using dynamic base URL
    API.get('/api/universities')
      .then(res => setUniversities(res.data))
      .catch(err => console.error('Error fetching universities:', err));

    // ❌ Old hardcoded API
    // axios.get('http://localhost:5000/api/universities')
    //   .then(res => setUniversities(res.data))
    //   .catch(err => console.error(err));
  }, []);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // ✅ Using environment-based API URL
      await API.post('/api/papers', formData);
      alert('✅ Paper uploaded!');
      setFormData({
        university: '', departmentName: '', courseName: '', subject: '',
        year: '', semester: '', fileUrl: '', uploadedBy: ''
      });
    } catch (err) {
      console.error('❌ Upload failed:', err);
      alert('❌ Upload failed');
    }

    // ❌ Old hardcoded POST
    // await axios.post('http://localhost:5000/api/papers', formData);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Upload Question Paper</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="university"
          onChange={handleChange}
          value={formData.university}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select University --</option>
          {universities.map(u => (
            <option key={u._id} value={u._id}>{u.name}</option>
          ))}
        </select>

        <input
          name="departmentName"
          placeholder="Department"
          value={formData.departmentName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="courseName"
          placeholder="Course Name"
          value={formData.courseName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="semester"
          placeholder="Semester"
          value={formData.semester}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="fileUrl"
          placeholder="PDF URL"
          value={formData.fileUrl}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="uploadedBy"
          placeholder="Uploader Name"
          value={formData.uploadedBy}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Upload Paper
        </button>
      </form>
    </div>
  );
};

export default AddPapers;

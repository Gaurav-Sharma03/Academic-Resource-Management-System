// 📘 AddNotes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ✅ Use environment-based API base URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE
});

const AddNotes = () => {
  const [formData, setFormData] = useState({
    university: '', departmentName: '', courseName: '', subject: '',
    title: '', description: '', fileUrl: '', uploadedBy: ''
  });

  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    // ✅ Updated to use API instance
    API.get('/api/universities')
      .then(res => setUniversities(res.data))
      .catch(err => console.error('Error fetching universities:', err));

    // ❌ Old version:
    // axios.get('http://localhost:5000/api/universities')
    //   .then(res => setUniversities(res.data))
    //   .catch(err => console.error('Error fetching universities:', err));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // ✅ Updated to use API instance
      await API.post('/api/notes', formData);
      alert('✅ Note uploaded!');
      setFormData({
        university: '', departmentName: '', courseName: '',
        subject: '', title: '', description: '', fileUrl: '', uploadedBy: ''
      });
    } catch (err) {
      console.error(err);
      alert('❌ Failed to upload note');
    }

    // ❌ Old version:
    // await axios.post('http://localhost:5000/api/notes', formData);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Upload Notes</h2>
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
          name="title"
          placeholder="Note Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
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
          Upload Notes
        </button>
      </form>
    </div>
  );
};

export default AddNotes;

import React, { useState } from 'react';
import axios from 'axios';

// ✅ Use environment-based API base URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE
});

const AddUniversities = () => {
  const [formData, setFormData] = useState({
    name: '',
    shortName: '',
    description: '',
    website: '',
    logo: '',
    location: '',
    departments: [
      {
        name: '',
        courses: [
          { name: '', level: '', duration: '', semesters: '' }
        ]
      }
    ]
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDepartmentChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...formData.departments];
    updated[index][name] = value;
    setFormData(prev => ({ ...prev, departments: updated }));
  };

  const handleCourseChange = (deptIndex, courseIndex, e) => {
    const { name, value } = e.target;
    const updated = [...formData.departments];
    updated[deptIndex].courses[courseIndex][name] = value;
    setFormData(prev => ({ ...prev, departments: updated }));
  };

  const addDepartment = () => {
    setFormData(prev => ({
      ...prev,
      departments: [...prev.departments, { name: '', courses: [{ name: '', level: '', duration: '', semesters: '' }] }]
    }));
  };

  const addCourse = (deptIndex) => {
    const updated = [...formData.departments];
    updated[deptIndex].courses.push({ name: '', level: '', duration: '', semesters: '' });
    setFormData(prev => ({ ...prev, departments: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Updated POST request using API instance
      const res = await API.post('/api/universities', formData);
      if (res.status === 200 || res.status === 201) {
        setMessage('✅ University added successfully!');
        setFormData({
          name: '',
          shortName: '',
          description: '',
          website: '',
          logo: '',
          location: '',
          departments: [
            {
              name: '',
              courses: [{ name: '', level: '', duration: '', semesters: '' }]
            }
          ]
        });
      } else {
        setMessage(`❌ Failed: ${res.data.error || 'Server error'}`);
      }

      // ❌ Old local fetch:
      // const res = await fetch('http://localhost:5000/api/universities', {...});
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Failed to connect to server');
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add University</h2>
      {message && <div className="mb-4 text-blue-700">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Fields */}
        <input name="name" placeholder="University Name" value={formData.name} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
        <input name="shortName" placeholder="Short Name (e.g., SPU)" value={formData.shortName} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        <input name="location" placeholder="Location (e.g., Mandi)" value={formData.location} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        <input name="website" placeholder="Website URL" value={formData.website} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        <input name="logo" placeholder="Logo URL or Path" value={formData.logo} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full border px-3 py-2 rounded" />

        {/* Departments and Courses */}
        {formData.departments.map((dept, deptIndex) => (
          <div key={deptIndex} className="border p-4 mt-4 rounded">
            <h3 className="font-semibold">Department {deptIndex + 1}</h3>
            <input
              name="name"
              placeholder="Department Name"
              value={dept.name}
              onChange={(e) => handleDepartmentChange(deptIndex, e)}
              className="w-full border px-3 py-2 my-2 rounded"
            />
            <div className="ml-4">
              {dept.courses.map((course, courseIndex) => (
                <div key={courseIndex} className="grid grid-cols-2 gap-3 my-2">
                  <input
                    name="name"
                    placeholder="Course Name"
                    value={course.name}
                    onChange={(e) => handleCourseChange(deptIndex, courseIndex, e)}
                    className="border px-2 py-1 rounded"
                  />
                  <select
                    name="level"
                    value={course.level}
                    onChange={(e) => handleCourseChange(deptIndex, courseIndex, e)}
                    className="border px-2 py-1 rounded"
                  >
                    <option value="">Select Level</option>
                    <option value="UG">UG</option>
                    <option value="PG">PG</option>
                    <option value="PhD">PhD</option>
                  </select>
                  <input
                    name="duration"
                    placeholder="Duration (e.g. 4 Years)"
                    value={course.duration}
                    onChange={(e) => handleCourseChange(deptIndex, courseIndex, e)}
                    className="border px-2 py-1 rounded col-span-2"
                  />
                  <input
                    name="semesters"
                    type="number"
                    placeholder="Total Semesters"
                    value={course.semesters}
                    onChange={(e) => handleCourseChange(deptIndex, courseIndex, e)}
                    className="border px-2 py-1 rounded col-span-2"
                  />
                </div>
              ))}
              <button type="button" onClick={() => addCourse(deptIndex)} className="text-sm text-blue-600 mt-2">
                + Add Course
              </button>
            </div>
          </div>
        ))}

        <button type="button" onClick={addDepartment} className="text-sm text-green-600">
          + Add Department
        </button>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUniversities;

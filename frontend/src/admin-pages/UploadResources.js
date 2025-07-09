// src/admin-pages/UploadResources.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UploadResources = () => {
  const [universities, setUniversities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [semesterOptions, setSemesterOptions] = useState([]);

  const [formData, setFormData] = useState({
    university: '',
    department: '',
    course: '',
    semester: '',
    type: 'notes',
    title: '',
    file: null,
  });

  // Fetch universities on mount
  useEffect(() => {
    axios.get('http://localhost:5000/api/universities')
      .then(res => setUniversities(res.data))
      .catch(err => console.error('Failed to fetch universities:', err));
  }, []);

  // When university changes, update departments
  useEffect(() => {
    const selectedUni = universities.find(u => u._id === formData.university);
    if (selectedUni) {
      setDepartments(selectedUni.departments);
      setFormData(prev => ({
        ...prev,
        department: '',
        course: '',
        semester: ''
      }));
      setCourses([]);
      setSemesterOptions([]);
    }
  }, [formData.university]);

  // When department changes, update courses
  useEffect(() => {
    const selectedDept = departments.find(d => d.name === formData.department);
    if (selectedDept) {
      setCourses(selectedDept.courses || []);
      setFormData(prev => ({
        ...prev,
        course: '',
        semester: ''
      }));
      setSemesterOptions([]);
    }
  }, [formData.department]);

  // When course changes, update semesters
  useEffect(() => {
    const selectedCourse = courses.find(c => c.name === formData.course);
    if (selectedCourse) {
      const total = parseInt(selectedCourse.semesters);
      const semesters = Array.from({ length: total }, (_, i) => i + 1);
      setSemesterOptions(semesters);
    }
  }, [formData.course]);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle file input
  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    if (key !== 'file') data.append(key, value);
  });
  data.append('file', formData.file);

  try {
    const res = await axios.post(`http://localhost:5000/api/resources/upload`, data);
    alert('✅ Uploaded successfully');
    console.log(res.data);
    // Reset form
    setFormData({
      university: '',
      department: '',
      course: '',
      semester: '',
      type: 'notes',
      title: '',
      file: null,
    });
    setDepartments([]);
    setCourses([]);
    setSemesterOptions([]);
  } catch (err) {
    console.error('Upload error:', err.response?.data || err.message);
    alert('❌ Failed to upload resource');
  }
};


  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">📚 Upload Academic Resource</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* University Dropdown */}
        <select name="university" value={formData.university} onChange={handleChange} className="w-full border p-2 rounded" required>
          <option value="">Select University</option>
          {universities.map(u => (
            <option key={u._id} value={u._id}>{u.name}</option>
          ))}
        </select>

        {/* Department Dropdown */}
        <select name="department" value={formData.department} onChange={handleChange} className="w-full border p-2 rounded" required disabled={!departments.length}>
          <option value="">Select Department</option>
          {departments.map((dept, i) => (
            <option key={i} value={dept.name}>{dept.name}</option>
          ))}
        </select>

        {/* Course Dropdown */}
        <select name="course" value={formData.course} onChange={handleChange} className="w-full border p-2 rounded" required disabled={!courses.length}>
          <option value="">Select Course</option>
          {courses.map((course, i) => (
            <option key={i} value={course.name}>{course.name}</option>
          ))}
        </select>

        {/* Semester Dropdown */}
        <select name="semester" value={formData.semester} onChange={handleChange} className="w-full border p-2 rounded" required disabled={!semesterOptions.length}>
          <option value="">Select Semester</option>
          {semesterOptions.map(num => (
            <option key={num} value={num}>Semester {num}</option>
          ))}
        </select>

        {/* Type Dropdown */}
        <select name="type" value={formData.type} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="notes">Notes</option>
          <option value="papers">Question Paper</option>
          <option value="syllabus">Syllabus</option>
        </select>

        {/* Title Input */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Title / Subject"
          required
        />

        {/* File Input */}
        <input type="file" accept="application/pdf" onChange={handleFileChange} className="w-full border p-2 rounded" required />

        {/* Submit */}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadResources;

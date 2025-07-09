import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddDepartmentOrCourse = () => {
  const [universities, setUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [mode, setMode] = useState('department');

  const [department, setDepartment] = useState({ name: '', courses: [] });
  const [course, setCourse] = useState({ name: '', level: 'UG', duration: '', semesters: '' });
  const [departmentName, setDepartmentName] = useState('');
  const [availableDepartments, setAvailableDepartments] = useState([]);

  // Fetch universities
  useEffect(() => {
    axios.get('http://localhost:5000/api/universities')
      .then(res => setUniversities(res.data))
      .catch(err => console.error(err));
  }, []);

  // Fetch departments when a university is selected
  useEffect(() => {
    if (!selectedUniversity) return;
    const uni = universities.find(u => u._id === selectedUniversity);
    if (uni) {
      setAvailableDepartments(uni.departments || []);
    }
  }, [selectedUniversity, universities]);

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!selectedUniversity) {
      alert("⚠️ Please select a university");
      return;
    }

    try {
      if (mode === 'department') {
        const trimmedName = department.name.trim();
        if (!trimmedName) return alert('❌ Department name required');

        await axios.patch(`http://localhost:5000/api/universities/${selectedUniversity}/add-department`, {
          department: { name: trimmedName }
        });

        alert('✅ Department added successfully');
        setDepartment({ name: '', courses: [] });
      } else {
        if (!departmentName.trim() || !course.name.trim()) {
          return alert('❌ Department and Course name required');
        }

        await axios.patch(`http://localhost:5000/api/universities/${selectedUniversity}/add-course`, {
          departmentName,
          course
        });

        alert('✅ Course added successfully');
        setCourse({ name: '', level: 'UG', duration: '', semesters: '' });
      }

      // Refresh universities
      const updated = await axios.get('http://localhost:5000/api/universities');
      setUniversities(updated.data);
    } catch (err) {
      console.error(err);
      alert('❌ Failed to add');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Department or Course</h2>

      {/* University Selection */}
      <select value={selectedUniversity} onChange={(e) => setSelectedUniversity(e.target.value)} className="border p-2 mb-4 w-full">
        <option value="">-- Select University --</option>
        {universities.map((u) => (
          <option key={u._id} value={u._id}>{u.name}</option>
        ))}
      </select>

      {/* Mode Switch */}
      <div className="mb-4">
        <label className="mr-4">
          <input type="radio" value="department" checked={mode === 'department'} onChange={() => setMode('department')} />
          <span className="ml-2">Add Department</span>
        </label>
        <label className="ml-6">
          <input type="radio" value="course" checked={mode === 'course'} onChange={() => setMode('course')} />
          <span className="ml-2">Add Course</span>
        </label>
      </div>

      {/* Form */}
      <form onSubmit={handleAdd} className="space-y-4">
        {mode === 'department' ? (
          <>
            <input
              type="text"
              placeholder="Department Name"
              className="border p-2 w-full"
              value={department.name}
              onChange={(e) => setDepartment({ ...department, name: e.target.value })}
              required
            />
          </>
        ) : (
          <>
            <select
              className="border p-2 w-full"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              required
            >
              <option value="">-- Select Department --</option>
              {availableDepartments.map((dep, i) => (
                <option key={i} value={dep.name}>{dep.name}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Course Name"
              className="border p-2 w-full"
              value={course.name}
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
              required
            />
            <select value={course.level} onChange={(e) => setCourse({ ...course, level: e.target.value })} className="border p-2 w-full">
              <option value="UG">UG</option>
              <option value="PG">PG</option>
              <option value="PhD">PhD</option>
            </select>
            <input
              type="text"
              placeholder="Duration (e.g., 4 Years)"
              className="border p-2 w-full"
              value={course.duration}
              onChange={(e) => setCourse({ ...course, duration: e.target.value })}
            />
            <input
              type="number"
              placeholder="Semesters"
              className="border p-2 w-full"
              value={course.semesters}
              onChange={(e) => setCourse({ ...course, semesters: parseInt(e.target.value || '0') })}
            />
          </>
        )}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddDepartmentOrCourse;

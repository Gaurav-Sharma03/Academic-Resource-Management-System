import React, { useState, useEffect } from 'react';
import { FaUniversity, FaPlus, FaTrash, FaGlobe } from 'react-icons/fa';

const Universities = () => {
  const [universities, setUniversities] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [newUniversity, setNewUniversity] = useState({
    name: '',
    shortName: '',
    description: '',
    location: '',
    website: '',
    logo: '',
    departments: [
      {
        name: '',
        courses: [
          { name: '', level: '', duration: '', semesters: '' }
        ]
      }
    ]
  });

  const fetchUniversities = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/universities');
      const data = await res.json();
      setUniversities(data);
    } catch (err) {
      console.error('❌ Failed to fetch universities:', err);
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  const handleChange = (e) => {
    setNewUniversity({ ...newUniversity, [e.target.name]: e.target.value });
  };

  const handleDeptChange = (index, e) => {
    const updated = [...newUniversity.departments];
    updated[index][e.target.name] = e.target.value;
    setNewUniversity({ ...newUniversity, departments: updated });
  };

  const handleCourseChange = (deptIndex, courseIndex, e) => {
    const updated = [...newUniversity.departments];
    updated[deptIndex].courses[courseIndex][e.target.name] = e.target.value;
    setNewUniversity({ ...newUniversity, departments: updated });
  };

  const addDepartment = () => {
    setNewUniversity({
      ...newUniversity,
      departments: [...newUniversity.departments, {
        name: '',
        courses: [{ name: '', level: '', duration: '', semesters: '' }]
      }]
    });
  };

  const addCourse = (deptIndex) => {
    const updated = [...newUniversity.departments];
    updated[deptIndex].courses.push({ name: '', level: '', duration: '', semesters: '' });
    setNewUniversity({ ...newUniversity, departments: updated });
  };

  const handleAdd = async () => {
    const { name, shortName, description, location, website } = newUniversity;

    if (!name || !shortName || !description || !location || !website) {
      return alert('⚠️ Please fill in all required fields.');
    }

    try {
      const res = await fetch('http://localhost:5000/api/universities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUniversity)
      });

      const data = await res.json();

      if (res.ok) {
        setUniversities([...universities, data]);
        setNewUniversity({
          name: '',
          shortName: '',
          description: '',
          location: '',
          website: '',
          logo: '',
          departments: [
            {
              name: '',
              courses: [
                { name: '', level: '', duration: '', semesters: '' }
              ]
            }
          ]
        });
        setShowForm(false);
      } else {
        alert('❌ Failed to add university');
      }
    } catch (err) {
      console.error(err);
      alert('❌ Server error while adding university');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this university?')) return;

    try {
      const res = await fetch(`http://localhost:5000/api/universities/${id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        setUniversities(universities.filter(u => u._id !== id));
      } else {
        alert('❌ Failed to delete university');
      }
    } catch (err) {
      console.error(err);
      alert('❌ Server error while deleting university');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 flex items-center gap-3">
        <FaUniversity className="text-yellow-500" />
        Manage Universities
      </h2>

      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-6 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        <FaPlus />
        {showForm ? 'Cancel' : 'Add University'}
      </button>

      {showForm && (
        <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow space-y-4">
          <input name="name" placeholder="University Name" value={newUniversity.name} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <input name="shortName" placeholder="Short Name (e.g. SPU)" value={newUniversity.shortName} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <input name="location" placeholder="Location" value={newUniversity.location} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <input name="website" placeholder="Website" value={newUniversity.website} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <input name="logo" placeholder="Logo URL" value={newUniversity.logo} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          <textarea name="description" placeholder="Description" value={newUniversity.description} onChange={handleChange} className="w-full border px-3 py-2 rounded" />

          {newUniversity.departments.map((dept, deptIndex) => (
            <div key={deptIndex} className="p-4 border rounded bg-white mt-4">
              <input
                type="text"
                name="name"
                placeholder={`Department ${deptIndex + 1} Name`}
                value={dept.name}
                onChange={(e) => handleDeptChange(deptIndex, e)}
                className="w-full border px-2 py-1 rounded mb-3"
              />
              {dept.courses.map((course, courseIndex) => (
                <div key={courseIndex} className="grid grid-cols-2 gap-3 mb-2">
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
                    <option value="">Level</option>
                    <option value="UG">UG</option>
                    <option value="PG">PG</option>
                    <option value="PhD">PhD</option>
                  </select>
                  <input
                    name="duration"
                    placeholder="Duration"
                    value={course.duration}
                    onChange={(e) => handleCourseChange(deptIndex, courseIndex, e)}
                    className="border px-2 py-1 rounded col-span-2"
                  />
                  <input
                    name="semesters"
                    type="number"
                    placeholder="Semesters"
                    value={course.semesters}
                    onChange={(e) => handleCourseChange(deptIndex, courseIndex, e)}
                    className="border px-2 py-1 rounded col-span-2"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => addCourse(deptIndex)}
                className="text-sm text-blue-600"
              >
                + Add Course
              </button>
            </div>
          ))}

          <button type="button" onClick={addDepartment} className="text-sm text-green-600 mt-2">
            + Add Department
          </button>

          <button onClick={handleAdd} className="bg-green-600 text-white px-5 py-2 mt-4 rounded hover:bg-green-700">
            Submit University
          </button>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map((uni) => (
          <div key={uni._id} className="bg-white p-5 rounded-xl shadow border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-blue-800 mb-1">{uni.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{uni.description}</p>
            <a href={uni.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm mb-2">
              <FaGlobe /> Visit Website
            </a>
            <div className="flex justify-end">
              <button
                onClick={() => handleDelete(uni._id)}
                className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 text-sm flex items-center gap-1"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Universities;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

// ✅ Axios instance with environment-based backend URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

const Courses = () => {
  const [universities, setUniversities] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    try {
      const res = await API.get('/api/universities');
      setUniversities(res.data);
      const extractedCourses = [];

      res.data.forEach(university => {
        university.departments?.forEach(dept => {
          dept.courses?.forEach(course => {
            extractedCourses.push({
              ...course,
              department: dept.name,
              universityName: university.name,
              universityId: university._id
            });
          });
        });
      });

      setAllCourses(extractedCourses);
    } catch (err) {
      console.error('Failed to fetch universities/courses:', err);
    }
  };

  const handleDelete = async (universityId, departmentName, courseName) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
      await API.patch(`/api/universities/${universityId}/remove-course`, {
        departmentName,
        courseName
      });
      fetchUniversities(); // Refresh list
    } catch (err) {
      console.error('Failed to delete course:', err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">🎓 All Courses from Universities</h2>

      {allCourses.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">No courses found in the database.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-1">{course.name}</h3>
              <p className="text-sm text-gray-600 mb-1">Department: {course.department}</p>
              <p className="text-sm text-gray-600 mb-1">University: {course.universityName}</p>
              <p className="text-sm text-gray-600 mb-1">Level: {course.level}</p>
              <p className="text-sm text-gray-600 mb-1">Duration: {course.duration} years</p>
              <p className="text-sm text-gray-600 mb-3">Semesters: {course.semesters}</p>
              <button
                onClick={() => handleDelete(course.universityId, course.department, course.name)}
                className="inline-flex items-center gap-2 bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600"
              >
                <FaTrash /> Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;

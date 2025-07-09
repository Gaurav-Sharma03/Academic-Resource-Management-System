import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CoursePages = () => {
  const { id } = useParams(); // university ID
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/universities/${id}`);
        setUniversity(res.data);
      } catch (err) {
        console.error('❌ Failed to fetch university details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUniversity();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10 text-gray-500">Loading university details...</div>;
  }

  if (!university) {
    return <div className="text-center mt-10 text-red-500">University not found.</div>;
  }

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        {university.logo && (
          <img src={university.logo} alt="University Logo" className="h-20 mx-auto mb-4 object-contain" />
        )}
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300">{university.name}</h1>
        <p className="text-gray-600 dark:text-gray-400">{university.description}</p>
        <p className="text-sm text-gray-500 mt-2">{university.location}</p>
      </div>

      <div className="max-w-6xl mx-auto">
        {university.departments.length === 0 ? (
          <p className="text-center text-gray-500">No departments found.</p>
        ) : (
          university.departments.map((dept, i) => (
            <div key={i} className="mb-12">
              <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b border-blue-300 pb-2">
                {dept.name}
              </h2>

              {dept.courses.length === 0 ? (
                <p className="text-gray-500 text-sm">No courses available in this department.</p>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dept.courses.map((course, j) => (
                    <div
                      key={j}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow border p-5 border-gray-200 dark:border-gray-700 flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-1">{course.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Level: {course.level}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Duration: {course.duration} years</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Semesters: {course.semesters}</p>
                      </div>

                    <Link
  to={`/course/${id}/${encodeURIComponent(dept.name)}/${encodeURIComponent(course.name)}`}
  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
>
  Explore Resources
</Link>

                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CoursePages;

// src/pages/CourseDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetailsPage = () => {
  const { universityId, department, courseName } = useParams();
  const [semesterCount, setSemesterCount] = useState(0);
  const [resources, setResources] = useState({});
  const [loading, setLoading] = useState({});
  const [university, setUniversity] = useState(null);

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/universities/${universityId}`);
        const uni = res.data;
        setUniversity(uni);
        const dept = uni.departments.find((d) => d.name === department);
        const course = dept?.courses.find((c) => c.name === courseName);
        if (course) setSemesterCount(course.semesters);
      } catch (err) {
        console.error('Error fetching course:', err);
      }
    };

    fetchUniversity();
  }, [universityId, department, courseName]);

  const fetchSingleResource = async (semester, type) => {
    const key = `${semester}-${type}`;
    setLoading((prev) => ({ ...prev, [key]: true }));

    try {
      const res = await axios.get(
        `http://localhost:5000/api/resources/${universityId}/${department}/${courseName}/${semester}`
      );

      const filtered = res.data.filter((item) => item.type === type);

      setResources((prev) => ({
        ...prev,
        [semester]: {
          ...prev[semester],
          [type]: filtered,
        },
      }));
    } catch (err) {
      console.error(`Error fetching ${type} for semester ${semester}:`, err);
    }

    setLoading((prev) => ({ ...prev, [key]: false }));
  };

  const renderLinks = (data, type) => {
    if (!data || data.length === 0) return <p className="text-gray-500">No {type} found</p>;

    return (
      <ul className="list-disc pl-5 space-y-1 text-sm">
        {data.map((item, idx) => (
          <li key={idx}>
            <a
              href={`http://localhost:5000/uploads/resources/${item.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {item.title} {item.year ? `(${item.year})` : ''}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="px-6 py-8 min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">
      {/* University Header */}
      {university && (
        <div className="max-w-6xl mx-auto text-center mb-10">
          {university.logo && (
            <img src={university.logo} alt="Logo" className="h-24 mx-auto mb-4" />
          )}
          <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300">{university.name}</h1>
          <p className="text-gray-600 dark:text-gray-400">{university.description}</p>
          <p className="text-sm text-gray-500 mt-1">{university.location}</p>
        </div>
      )}

      <h2 className="text-2xl font-bold text-center mb-10">{courseName} — {department}</h2>

      {semesterCount > 0 ? (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(semesterCount)].map((_, i) => {
            const sem = i + 1;
            const semData = resources[sem] || {};

            return (
              <div
                key={sem}
                className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border border-gray-300 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">
                  Semester {sem}
                </h3>

                <div className="flex flex-col gap-3">
                  {['syllabus', 'notes', 'papers'].map((type) => (
                    <div key={type}>
                      <button
                        onClick={() => fetchSingleResource(sem, type)}
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        {loading[`${sem}-${type}`]
                          ? `Loading ${type}...`
                          : `Show ${type.charAt(0).toUpperCase() + type.slice(1)}`}
                      </button>

                      {semData[type] && (
                        <div
                          className={`mt-2 p-3 rounded-md border-l-4 text-sm ${
                            type === 'syllabus'
                              ? 'border-blue-500 bg-blue-50'
                              : type === 'notes'
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                          }`}
                        >
                          {renderLinks(semData[type], type)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500">No semester data available.</p>
      )}
    </div>
  );
};

export default CourseDetailsPage;

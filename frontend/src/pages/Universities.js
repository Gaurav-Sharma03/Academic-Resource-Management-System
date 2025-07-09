import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaUniversity, FaGlobe } from 'react-icons/fa';

const Universities = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/universities')
      .then((res) => setUniversities(res.data))
      .catch((err) => console.error('Failed to fetch universities:', err));
  }, []);

  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-blue-800 dark:text-yellow-300 flex justify-center items-center gap-4">
        <FaUniversity className="text-yellow-400 text-5xl" />
        <span className="tracking-wider">Registered Universities</span>
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {universities.map((uni) => (
          <div
            key={uni._id}
            className="bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl border border-blue-100 dark:border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* University Logo */}
            {uni.logo ? (
              <img
                src={uni.logo}
                alt={`${uni.name} Logo`}
                className="w-24 h-24 object-contain mb-4 rounded-full border border-gray-300 dark:border-gray-600"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-500 mb-4">
                No Logo
              </div>
            )}

            {/* University Name */}
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-2">{uni.name}</h2>

            {/* Info */}
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
              <p><strong>Short Name:</strong> {uni.shortName || 'N/A'}</p>
              <p><strong>Location:</strong> {uni.location || 'N/A'}</p>
              <p><strong>Departments:</strong> {uni.departments?.length || 0}</p>
            </div>

            {/* Website Link */}
            {uni.website && (
              <a
                href={uni.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-300 hover:underline text-sm mb-4"
              >
                <FaGlobe /> Visit Website
              </a>
            )}

            {/* Explore Button */}
            <Link to={`/coursepages/${uni._id}/courses`} className="w-full">
              <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all w-full font-semibold shadow-md">
                Explore Courses
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Universities;

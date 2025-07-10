import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FaUniversity,
  FaStickyNote,
  FaBookOpen,
  FaFileAlt,
  FaChalkboardTeacher
} from 'react-icons/fa';

// Reusable axios instance
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE
});

const DashboardCards = () => {
  const [stats, setStats] = useState({
    totalUniversities: 0,
    totalCourses: 0,
    notesCount: 0,
    syllabusCount: 0,
    papersCount: 0
  });

  useEffect(() => {
    API.get('/api/stats')
      .then(res => setStats(res.data))
      .catch(err => console.error('Failed to fetch stats:', err));
  }, []);

  const cards = [
    {
      title: 'Total Universities',
      value: stats.totalUniversities,
      icon: <FaUniversity className="text-4xl text-blue-600" />,
      color: 'bg-blue-100'
    },
    {
      title: 'Total Courses',
      value: stats.totalCourses,
      icon: <FaChalkboardTeacher className="text-4xl text-orange-500" />,
      color: 'bg-orange-100'
    },
    {
      title: 'Notes Uploaded',
      value: stats.notesCount,
      icon: <FaStickyNote className="text-4xl text-green-600" />,
      color: 'bg-green-100'
    },
    {
      title: 'Syllabus Entries',
      value: stats.syllabusCount,
      icon: <FaBookOpen className="text-4xl text-yellow-600" />,
      color: 'bg-yellow-100'
    },
    {
      title: 'Question Papers',
      value: stats.papersCount,
      icon: <FaFileAlt className="text-4xl text-purple-600" />,
      color: 'bg-purple-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`rounded-2xl shadow-lg p-6 flex flex-col items-center text-center ${card.color} dark:bg-gray-800`}
        >
          <div className="mb-4">{card.icon}</div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-1">
            {card.title}
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-yellow-300">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;

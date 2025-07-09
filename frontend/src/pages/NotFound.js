import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import shockImage from '../assets/404-electric-shock.png'; // ✅ Correct import (assuming file is in src/assets)

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-sky-100 dark:from-gray-900 dark:to-gray-800 text-center px-6">
      
      <img
        src={shockImage}
        alt="404 Cartoon Electric Shock"
        className="max-w-md w-full mb-6 drop-shadow-xl animate-pulse"
      />

      <FaExclamationTriangle className="text-5xl text-red-600 dark:text-yellow-400 mb-4" />
      
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
        404 - Page Not Found
      </h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

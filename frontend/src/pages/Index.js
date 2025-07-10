import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import AboutUs from './AboutUs';
import Teams from './Teams';
import Books from './Books';
import Universities from './Universities';
import CoursePages from './CoursePages';
import CourseDetailsPage from './CourseDetailsPage';
import EPlatform from './EPlatform';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdminLogin from '../admin-pages/AdminLogin'; // Ensure this path is correct

const Index = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  useEffect(() => {
  const handleKeyDown = (e) => {
    if (
      e.ctrlKey &&
      e.shiftKey &&
      e.altKey &&
      e.key.toLowerCase() === 'a'
    ) {
      setShowAdminLogin((prev) => !prev);
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, []);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/books" element={<Books />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/coursepages/:id/courses" element={<CoursePages />} />
        <Route path="/eplatform" element={<EPlatform />} />
          <Route
            path="/course/:universityId/:department/:courseName"
            element={<CourseDetailsPage />}
          />
          {/* Catch-all for wrong paths inside Index */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Secret Admin Login Box (Hidden) */}
        {showAdminLogin && (
          <div className="fixed top-28 right-6 z-50 w-96 max-w-[90%] bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-2xl transition-all duration-500">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-yellow-300">
                Admin Login
              </h3>
              <button
                onClick={() => setShowAdminLogin(false)}
                className="text-red-500 hover:text-red-700 text-lg"
              >
                ✕
              </button>
            </div>
            <AdminLogin />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Index;

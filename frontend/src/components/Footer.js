import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import ARMS from '../assets/ARMS.png'; // Logo image

const Footer = () => {
  const [date, setDate] = useState(new Date());
  const [darkMode, setDarkMode] = useState(false);

  const toggleReadingMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <footer className="bg-blue-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 py-12 px-6 mt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">

        {/* 1. Brand Info */}
        <div>
         <Link to="/" className="flex items-center space-x-3">
           <img src={ARMS} alt="ARMS Logo" className="h-20 w-auto object-contain" />
           
           <div className="leading-tight">
             <span
               className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-serif tracking-wide"
               title="Academic Resource Management System"
             >
               ARMS
             </span>
             <p className="text-sm text-gray-500 dark:text-gray-300">
               Academic Resource Management System
             </p>
           </div>
         </Link>
         
          <p className="text-sm">Empowering students and faculty with centralized academic resources.</p>
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} <span className="text-blue-600 dark:text-blue-300">Gaurav & Team</span></p>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-700 transition">Home</Link></li>
            <li><Link to="/aboutus" className="hover:text-blue-700 transition">About Us</Link></li>
            <li><Link to="/teams" className="hover:text-blue-700 transition">Our Team</Link></li>
            <li><Link to="/books" className="hover:text-blue-700 transition">Books</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-700 transition">Dashboard</Link></li>
          </ul>
        </div>

        {/* 3. Calendar */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-3">Calendar</h3>
          <div className="flex justify-center sm:justify-start">
            <Calendar
              onChange={setDate}
              value={date}
              className="rounded-xl p-2 bg-white dark:bg-gray-800 text-sm"
            />
          </div>
        </div>

        {/* 4. Legal + Contact */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-3">Privacy </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-700 transition">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-blue-700 transition">Terms & Conditions</Link></li>
          </ul>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-1">Contact Us</h3>
            <p className="text-sm">📧 <a href="mailto:arms.portal@example.com" className="underline">arms.portal@example.com</a></p>
            <div className="flex justify-center sm:justify-start mt-3 gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-700">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10 text-xs text-gray-500 dark:text-gray-400">
        All rights reserved © {new Date().getFullYear()} ARMS Portal
      </div>
    </footer>
  );
};

export default Footer;

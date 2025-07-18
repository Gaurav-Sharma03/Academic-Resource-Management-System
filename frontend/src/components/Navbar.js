import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import AcademicSourceLogo from '../assets/Academic-Source.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
  }, [location]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <header className="bg-blue-100 dark:bg-gray-900 text-gray-800 dark:text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 sm:gap-4">
            <img
                 src={AcademicSourceLogo}
              alt="Academic Source Logo"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300"
            />
            <div className="leading-tight text-left">
              <span
                className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-serif tracking-wide"
                title="Academic Resource Management System"
              >
                Academic Source
              </span>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
               "All Your University Content, One Place"
              </p>
            </div>
          </Link>


          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-blue-500 transition">Home</Link>
            <Link to="/aboutus" className="hover:text-blue-500 transition">About Us</Link>
            <Link to="/universities" className="hover:text-blue-500 transition">Universities</Link>
            <Link to="/teams" className="hover:text-blue-500 transition">Our Teams</Link>
            <Link to="/books" className="hover:text-blue-500 transition">Books</Link>
            <Link to="/eplatform" className="hover:text-blue-500 transition">E-Resources</Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              title="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              title="Toggle Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3">
          <Link to="/" className="block hover:text-blue-500 transition">Home</Link>
          <Link to="/aboutus" className="block hover:text-blue-500 transition">About Us</Link>
          <Link to="/universities" className="block hover:text-blue-500 transition">Universities</Link>
          <Link to="/teams" className="block hover:text-blue-500 transition">Our Teams</Link>
          <Link to="/books" className="block hover:text-blue-500 transition">Books</Link>
          <Link to="/eplatform" className="block hover:text-blue-500 transition">E-Resources</Link>
          <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              title="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

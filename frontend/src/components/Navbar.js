import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react'; // Icons
import ARMS from '../assets/ARMS.png'; // Logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on route change
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Toggle dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="bg-blue-100 dark:bg-gray-900 text-gray-800 dark:text-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
     {/* Brand Logo */}
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


          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/aboutus" className="hover:text-blue-500">About Us</Link>
            <Link to="/universities" className="hover:text-blue-500">Universities</Link>
            <Link to="/Teams" className="hover:text-blue-500">Our Teams</Link>
             <Link to="/books" className="hover:text-blue-500">Books</Link>
            

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              title="Toggle reading mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3">
          <Link to="/" className="block hover:text-blue-500">Home</Link>
          <Link to="/aboutus" className="block hover:text-blue-500">About Us</Link>
          <Link to="/universities" className="block hover:text-blue-500">Universities</Link>
          <Link to="/Teams" className="block hover:text-blue-500">Our Teams</Link>
          <Link to="/books" className="hover:text-blue-500">Books</Link>
          

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="block w-full text-left p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

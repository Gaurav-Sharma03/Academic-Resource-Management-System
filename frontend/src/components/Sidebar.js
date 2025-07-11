import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaStickyNote,
  FaBookOpen,
  FaFileAlt,
  FaUniversity,
  FaSignOutAlt,
  FaUserPlus
} from 'react-icons/fa';

const Sidebar = () => {
  const baseStyle =
    'flex items-center space-x-3 px-4 py-3 rounded-lg transition-all hover:bg-blue-100 dark:hover:bg-gray-800';
  const activeStyle =
    'bg-blue-200 text-blue-800 font-semibold dark:bg-gray-800 dark:text-white';

  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-md p-5">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-extrabold text-blue-600 dark:text-white">Academic Source</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Admin Dashboard</p>
      </div>

      <nav className="flex flex-col gap-2 text-gray-700 dark:text-gray-300 text-sm">

        <NavLink to="/admin" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/notes" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
          <FaStickyNote />
          <span>Manage Notes</span>
        </NavLink>

        <NavLink to="/admin/syllabus" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
          <FaBookOpen />
          <span>Manage Syllabus</span>
        </NavLink>

        <NavLink to="/admin/papers" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
          <FaFileAlt />
          <span>Manage Papers</span>
        </NavLink>

        <NavLink to="/admin/courses" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
          <FaFileAlt />
          <span>Manage Courses</span>
        </NavLink>

        <NavLink to="/admin/universities" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
          <FaUniversity />
          <span>Universities</span>
        </NavLink>

        <NavLink to="/admin/add-department-or-course" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
          <FaBookOpen />
          <span>Add Dept/Course</span>
        </NavLink>
        <NavLink to="/admin/upload-resources" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
          <FaBookOpen />
          <span>Add Resources</span>
        </NavLink>


        {/*  <NavLink to="/admin/register" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
          <FaUserPlus />
          <span>Admin Register</span>
        </NavLink> */}

        <div className="mt-4 border-t pt-4 border-gray-200 dark:border-gray-700">
          <NavLink to="/admin/logout" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
            <FaSignOutAlt />
            <span>Logout</span>
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

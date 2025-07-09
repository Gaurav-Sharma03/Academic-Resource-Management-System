import React from 'react';

const AdminNavbar = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-700">Admin Dashboard</h1>
      <div className="text-sm text-gray-500">Welcome, Admin</div>
    </header>
  );
};

export default AdminNavbar;
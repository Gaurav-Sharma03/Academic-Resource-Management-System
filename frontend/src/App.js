import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './pages/Index';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './components/AdminLayout';

import AdminLogin from './admin-pages/AdminLogin';
// import AdminRegister from './admin-pages/AdminRegister';
import Logout from './admin-pages/Logout';

import Dashboard from './admin-pages/Dashboard';
import Notes from './admin-pages/Notes';
import Syllabus from './admin-pages/Syllabus';
import Papers from './admin-pages/Papers';
import Courses from './admin-pages/Courses';
import Universities from './admin-pages/Universities';
import AddPaper from './admin-pages/AddPapers';
import AddSyllabus from './admin-pages/AddSyllabus';
import AddNotes from './admin-pages/AddNotes';
import UploadResources from './admin-pages/UploadResources';
import AddUniversity from './admin-pages/AddUniversities';
import AddDepartmentOrCourse from './admin-pages/AddDepartmentOrCourse';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<Index />} />

        {/* Admin Auth Route (Blocked via secret) */}
        <Route
          path="/admin/login"
          element={
            <div className="text-center py-20 text-red-600 text-xl">
              ⚠️ Direct access to this route is restricted.
            </div>
          }
        />
        {/* <Route path="/admin/register" element={<AdminRegister />} /> */}

        <Route path="/admin/logout" element={<Logout />} />

        {/* Protected Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="notes" element={<Notes />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="papers" element={<Papers />} />
          <Route path="courses" element={<Courses />} />
          <Route path="universities" element={<Universities />} />
          <Route path="add-paper" element={<AddPaper />} />
          <Route path="add-syllabus" element={<AddSyllabus />} />
          <Route path="add-notes" element={<AddNotes />} />
          <Route path="upload-resources" element={<UploadResources />} />
          <Route path="add-university" element={<AddUniversity />} />
          <Route path="add-department-or-course" element={<AddDepartmentOrCourse />} />
        </Route>

        {/* Page Not Found (Fallback) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

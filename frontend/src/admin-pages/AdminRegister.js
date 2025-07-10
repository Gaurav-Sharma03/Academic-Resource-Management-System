import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// ✅ Create axios instance using env base URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

const AdminRegister = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !confirmPassword) {
      return alert('❌ All fields are required');
    }

    if (form.password.length < 6) {
      return alert('❌ Password must be at least 6 characters');
    }

    if (form.password !== confirmPassword) {
      return alert('❌ Passwords do not match');
    }

    try {
      setLoading(true);
      const res = await API.post('/api/admin/register', form);
      setLoading(false);

      if (res.status === 201 || res.status === 200) {
        alert('✅ Admin registered successfully!');
        navigate('/admin/login');
      } else {
        alert(res.data.error || '❌ Registration failed');
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert('❌ Server error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Admin Registration</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 mb-4 px-4 py-2 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-300 mb-4 px-4 py-2 rounded"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border border-gray-300 mb-4 px-4 py-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default AdminRegister;

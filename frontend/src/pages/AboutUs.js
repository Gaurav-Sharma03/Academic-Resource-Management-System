import React from 'react';
import {
  FaInfoCircle,
  FaUsers,
  FaBullseye,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaBook,
  FaClipboardList,
  FaFileAlt,
  FaSearch,
  FaUniversity,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaTools,
  FaHandshake,
  FaUnlock,
  FaGlobe
} from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4 md:px-10 py-16 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-blue-900 dark:text-yellow-400 tracking-tight">
          About ARMS Portal
        </h1>

        {/* What is ARMS */}
        <section className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl border-l-8 border-blue-500 dark:border-yellow-500">
          <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-3 text-blue-800 dark:text-yellow-300">
            <FaInfoCircle className="text-4xl" /> What is ARMS?
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            <strong className="text-blue-700 dark:text-yellow-300">ARMS (Academic Resource Management System)</strong> is an all-in-one academic portal built to digitize and simplify the distribution and management of educational materials across universities. It empowers students, faculty, and administrators by providing structured access to essential academic resources in one centralized platform.
            <br /><br />
            ARMS not only supports the academic journey of learners by organizing notes and exam content, but also enables educators to update and share resources instantly. With user-friendly interfaces and intuitive navigation, ARMS helps modernize how institutions manage learning assets and encourages collaborative academic growth.
          </p>

          <ul className="list-none space-y-4 text-gray-700 dark:text-gray-300 text-md mt-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-yellow-300 mt-1"><FaBook /></span>
              <span><strong>Notes:</strong> Semester-wise categorized PDF notes uploaded by faculty and admins, ensuring students access the most accurate and relevant material for each subject.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-300 mt-1"><FaClipboardList /></span>
              <span><strong>Syllabus:</strong> Complete curriculum outlines for each course and semester, regularly updated to match academic reforms or regulatory changes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-300 mt-1"><FaFileAlt /></span>
              <span><strong>Question Papers:</strong> Past year university question papers organized by course and subject to help students analyze patterns and prepare strategically.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 dark:text-indigo-300 mt-1"><FaSearch /></span>
              <span><strong>Search & Filter:</strong> Smart filtering and search features that allow users to quickly find resources by university, department, course, or semester.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-600 dark:text-pink-300 mt-1"><FaUniversity /></span>
              <span><strong>Multi-University Support:</strong> Institutions can manage their data independently under one shared platform, promoting resource sharing across campuses.</span>
            </li>
          </ul>
        </section>

        {/* Who Benefits */}
        <section className="bg-gradient-to-br from-blue-200 to-blue-50 dark:from-gray-700 dark:to-gray-800 p-10 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-3 text-blue-900 dark:text-yellow-300">
            <FaUsers className="text-4xl" /> Who Benefits from ARMS?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-lg text-blue-700 dark:text-yellow-300 flex items-center gap-2">
                <FaUserGraduate /> Students
              </h3>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                Access semester-wise study materials, stay updated with syllabi changes, and easily prepare for exams using categorized question banks.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-lg text-blue-700 dark:text-yellow-300 flex items-center gap-2">
                <FaChalkboardTeacher /> Faculty
              </h3>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                Simplify resource uploads, collaborate across departments, and maintain updated curriculum materials for students.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-lg text-blue-700 dark:text-yellow-300 flex items-center gap-2">
                <FaTools /> Admins
              </h3>
              <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                Easily manage university profiles, course structures, and monitor academic data across institutions from a single dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl border border-blue-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-3 text-blue-800 dark:text-yellow-300">
            <FaBullseye className="text-4xl" /> Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            At <strong className="text-blue-700 dark:text-yellow-300">ARMS Portal</strong>, our mission is to revolutionize academic access by creating a unified and transparent platform that bridges the gap between institutions, educators, and learners. We aim to eliminate resource barriers by digitizing all essential academic materials and delivering them through a modern, efficient, and mobile-friendly interface.
            <br /><br />
            <FaUsers className="inline-block mr-2 text-blue-600 dark:text-yellow-300" /> We believe education should be inclusive,
            <FaHandshake className="inline-block mx-2 text-blue-600 dark:text-yellow-300" /> collaborative,
            and <FaUnlock className="inline-block mx-2 text-blue-600 dark:text-yellow-300" /> accessible to all — regardless of location or institution.
            <br /><br />
            <FaGlobe className="inline-block mr-2 text-blue-600 dark:text-yellow-300" /> Our long-term vision is to empower academic institutions across India and beyond to adopt smart digital practices, promote knowledge-sharing, and build a future-ready learning ecosystem driven by innovation, simplicity, and equal opportunity.
          </p>
        </section>

        {/* Contact Us + Social Media */}
        <section className="bg-gradient-to-r from-white to-sky-100 dark:from-gray-800 dark:to-gray-900 p-10 rounded-3xl shadow-inner border-t-4 border-blue-400 dark:border-yellow-400">
          <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-3 text-blue-800 dark:text-yellow-300">
            <FaPhoneAlt className="text-4xl" /> Contact Us
          </h2>
          <div className="text-center text-gray-700 dark:text-gray-300 text-lg space-y-4 mb-6">
            <p><FaEnvelope className="inline-block mr-2 text-blue-600" /> Email: <a href="mailto:arms.portal@example.com" className="text-blue-600 hover:underline">arms.portal@example.com</a></p>
            <p><FaPhoneAlt className="inline-block mr-2 text-blue-600" /> Phone: <a href="tel:+911234567890" className="text-blue-600 hover:underline">+91 12345 67890</a></p>
            <p><FaMapMarkerAlt className="inline-block mr-2 text-blue-600" /> Address: SPU University Campus, Mandi, Himachal Pradesh</p>
          </div>

          {/* Social Icons */}
          <h3 className="text-xl font-semibold text-blue-700 dark:text-yellow-300 text-center mb-4">🌐 Follow us on Social Media</h3>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-yellow-300 hover:text-blue-900 dark:hover:text-white transition"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-yellow-300 hover:text-blue-900 dark:hover:text-white transition"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-yellow-300 hover:text-pink-800 transition"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-yellow-300 hover:text-blue-900 dark:hover:text-white transition"><FaLinkedin /></a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;

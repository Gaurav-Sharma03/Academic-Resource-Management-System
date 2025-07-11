import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/background.png';
import staticsImage from '../assets/statics-image.png';
import joinImage from '../assets/join-team.png';
import {
  FaFileAlt,
  FaBookOpen,
  FaUniversity,
  FaClipboardList,
  FaBrain,
  FaChalkboardTeacher,
  FaRegFilePdf,
  FaStar,
  FaLightbulb,
  FaQuoteRight,
  FaMobileAlt,
  FaRocket,
  FaGlobe,
  FaFolderOpen,
  FaEnvelope
} from 'react-icons/fa';



const features = [
  {
    title: 'Notes',
    desc: 'Upload, manage, and access semester-wise lecture notes in organized PDF format, ensuring students always have the most up-to-date material for each subject.',
    icon: <FaRegFilePdf size={40} className="text-blue-600 dark:text-blue-300 mx-auto" />
  },
  {
    title: 'Syllabus',
    desc: 'Explore detailed syllabi across all departments. Admins and faculty can easily update curriculum to keep content aligned with academic standards.',
    icon: <FaBookOpen size={40} className="text-green-600 dark:text-green-300 mx-auto" />
  },
  {
    title: 'Question Papers',
    desc: 'Browse and download previous year question papers for effective exam preparation and understanding question patterns.',
    icon: <FaFileAlt size={40} className="text-purple-600 dark:text-purple-300 mx-auto" />
  },
  {
    title: 'Academic Resources',
    desc: 'Centralized hub for all study materials – notes, syllabi, question papers – available for both students and faculty in one unified portal.',
    icon: <FaClipboardList size={40} className="text-indigo-600 dark:text-indigo-300 mx-auto" />
  },
  {
    title: 'Exam Preparations',
    desc: 'Offers mock papers, study plans, and curated past papers to help students practice and evaluate themselves efficiently before exams.',
    icon: <FaBrain size={40} className="text-pink-600 dark:text-pink-300 mx-auto" />
  },
  {
    title: 'University Details',
    desc: 'Showcases detailed profiles of registered universities including location, departments, logo, and official website.',
    icon: <FaUniversity size={40} className="text-yellow-600 dark:text-yellow-300 mx-auto" />
  },
  {
    title: 'Courses Details',
    desc: 'Display structured data about courses across UG, PG, and PhD levels along with semester breakdown and available resources.',
    icon: <FaChalkboardTeacher size={40} className="text-red-600 dark:text-red-300 mx-auto" />
  },
  {
  title: 'Books Section',
  desc: 'Explore a curated collection of academic books with seller details, pricing, and contact options for direct purchase.',
  icon: <FaBookOpen size={40} className="text-green-600 dark:text-green-300 mx-auto" />
}
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">




      {/* Hero Section */}
      <section
        className="relative text-center py-32 px-4 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            <FaLightbulb className="inline-block mr-2 text-yellow-300" />
            Welcome to  Academic Source Portal
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto">
            Academic Resource Management System for Students and Faculty
          </p>
          <Link to="/Universities">
            <button className="mt-8 px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-blue-100 transition">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </section>




      {/* About Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-yellow-300 flex justify-center items-center gap-3">
          <FaBookOpen /> What is  Academic Source?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <strong> Academic Source (Academic Resource Management System)</strong> is a centralized digital platform designed to streamline access to essential academic materials such as notes, syllabi, and previous year question papers across multiple universities. It empowers students by giving them quick, organized access to semester-wise learning resources, and simplifies content management for faculty and administrators.
          <br /><br />
          Whether you're preparing for exams, revising topics, or exploring syllabi for upcoming semesters,  Academic Source ensures everything you need is just a click away. It supports a wide range of courses and departments, making it a one-stop academic companion for institutions aiming to digitize and modernize their resource sharing process.
          <br /><br />
           Academic Source also promotes collaboration and knowledge-sharing among institutions, bridging the gap between educators and learners with a reliable, user-friendly interface.
        </p>
      </section>






      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800 px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-700 dark:text-blue-300 flex justify-center items-center gap-3">
          <FaStar /> Features We Provide
        </h3>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-blue-50 dark:bg-gray-700 p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1 text-center"
            >
              <div className="mb-4">{f.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-blue-800 dark:text-white">{f.title}</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>





      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-10 text-blue-700 dark:text-yellow-300 flex justify-center items-center gap-2">
            <FaQuoteRight /> Trusted By
          </h3>
          <div className="grid gap-8 md:grid-cols-3 text-gray-700 dark:text-gray-300">
            {[
              { quote: 'Thanks to  Academic Source Portal, finding study material has become 10x easier!', name: 'Ritika Mehta', role: 'Student - SPU Mandi' },
              { quote: 'As a teacher, uploading and organizing resources is now a breeze.', name: 'Dr. Neha Sharma', role: 'Faculty - SPU Mandi' },
              { quote: 'Multi-university management from one dashboard is a game changer.', name: 'System Admin', role: 'Academic Coordinator' }
            ].map((t, i) => (

              <div
                key={i}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow transition hover:shadow-md"
              >
                <p className="italic mb-4">“{t.quote}”</p>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Statistics Section with Background Image */}
      <section
        className="py-20 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${staticsImage})` }}
      >
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
          <h2 className="text-3xl font-bold text-white mb-10"> Academic Source in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div><p className="text-4xl font-bold">5+</p><p className="mt-2">Universities</p></div>
            <div><p className="text-4xl font-bold">35+</p><p className="mt-2">Courses</p></div>
            <div><p className="text-4xl font-bold">80+</p><p className="mt-2">Resources</p></div>
            <div><p className="text-4xl font-bold">30+</p><p className="mt-2">Books </p></div>
          </div>
        </div>
      </section>



      {/* Why Choose  Academic Source Section */}
      <section className="py-20 bg-white dark:bg-gray-800 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-yellow-300 mb-6">Why Choose  Academic Source?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-blue-100 dark:bg-gray-700 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2"><FaGlobe className="inline-block mr-2" /> Multi-University Access</h3>
            <p>Access resources from various universities all in one place.</p>
          </div>
          <div className="bg-blue-100 dark:bg-gray-700 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2"><FaFolderOpen className="inline-block mr-2" /> Organized Material</h3>
            <p>All your notes, syllabi, and question papers are neatly categorized.</p>
          </div>
          <div className="bg-blue-100 dark:bg-gray-700 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2"><FaMobileAlt className="inline-block mr-2" /> Mobile Friendly</h3>
            <p>Study and manage your academic material on the go.</p>
          </div>
          <div className="bg-blue-100 dark:bg-gray-700 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2"><FaRocket className="inline-block mr-2" /> Fast & Lightweight</h3>
            <p>Built for speed and performance for smooth user experience.</p>
          </div>
        </div>
      </section>




      {/* Join Our Team Section */}
      <section
        className="relative py-20 bg-cover bg-center text-center text-white"
        style={{ backgroundImage: `url(${joinImage})` }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-300 mb-6 flex justify-center items-center gap-3">
            <FaLightbulb className="text-yellow-400" /> Want to Join Our Team?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            We're always looking for passionate contributors, educators, developers, and students to be part of  Academic Source Portal.
            Collaborate with us and help improve academic access across universities.
          </p>
          <a
            href="mailto:anshusharma5787@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            <FaEnvelope /> anshusharma5787@gmail.com
          </a>
        </div>
      </section>




    </div>
  );
};

export default Home;

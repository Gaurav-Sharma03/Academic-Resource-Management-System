import React, { useState } from 'react';
import {
  FaUserTie,
  FaLaptopCode,
  FaPalette,
  FaEnvelope,
  FaUniversity,
  FaBook,
  FaChalkboardTeacher,
  FaUsers
} from 'react-icons/fa';

import shivam from '../assets/team/shivam.jpeg';
import gaurav from '../assets/team/gaurav.jpeg';
import mokshika from '../assets/team/mokshika.jpeg';
import richa from '../assets/team/richa.jpeg';
import nikhil from '../assets/team/nikhil.jpeg';
import abhishek from '../assets/team/abhishek.jpeg';
import chandni from '../assets/team/chandni.jpeg';
import lakshay from '../assets/team/lakshay.jpeg';
import spu from '../assets/team/spu.jpeg';
import hpu from '../assets/team/hpu.jpeg';

/* ---------- (teams constant unchanged) ---------- */

const teams = { /* …your data exactly as before… */ };

const getIconForRole = (role) => { /* …unchanged… */ };

const TeamCard = ({ member, theme, onClick }) => {
  const themeColors = {
    blue:   { border: 'border-blue-300',   text: 'text-blue-700',   darkText: 'dark:text-blue-300' },
    green:  { border: 'border-green-300',  text: 'text-green-700',  darkText: 'dark:text-green-300' },
    purple: { border: 'border-purple-300', text: 'text-purple-700', darkText: 'dark:text-purple-300' },
  };
  const color = themeColors[theme];

  return (
    <div
      onClick={() => onClick(member)}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 duration-300 p-6 text-center w-full cursor-pointer"
    >
      {/* ✅ square photo box */}
      <img
        src={member.photo}
        alt={member.name}
        className={`w-32 h-32 object-cover rounded-xl mx-auto mb-4 border-4 ${color.border} shadow`}
      />
      <div className="flex items-center justify-center text-3xl mb-2 text-gray-600 dark:text-gray-300">
        {getIconForRole(member.role)}
      </div>
      <h3 className={`text-lg font-semibold ${color.text} ${color.darkText}`}>{member.name}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">{member.role}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{member.university}</p>
      <a
        href={`mailto:${member.email}`}
        className={`text-sm mt-2 block hover:underline ${color.text} ${color.darkText}`}
      >
        {member.email}
      </a>
    </div>
  );
};

const TeamSection = ({ title, members, theme, onCardClick }) => { /* …unchanged… */ };

const Teams = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-violet-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4 md:px-10 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-900 dark:text-yellow-300 mb-16 tracking-tight">
          Our Amazing Teams
        </h1>

        <TeamSection title=" Project Planning Team" members={teams.planning} theme="blue"  onCardClick={setSelectedMember} />
        <TeamSection title=" Content Provider Team" members={teams.content}   theme="green" onCardClick={setSelectedMember} />
        <TeamSection title=" Special Thanks"        members={teams.thanks}    theme="purple"onCardClick={setSelectedMember} />
      </div>

      {/* Modal Popup */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-sm w-full text-center relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            {/* ✅ same square styling in modal */}
            <img
              src={selectedMember.photo}
              alt={selectedMember.name}
              className="w-32 h-32 object-cover rounded-xl mx-auto mb-4 border-4 border-blue-300"
            />
            <div className="text-3xl mb-2 text-gray-600 dark:text-gray-300">
              {getIconForRole(selectedMember.role)}
            </div>
            <h2 className="text-xl font-bold mb-1">{selectedMember.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{selectedMember.role}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{selectedMember.university}</p>
            <a
              href={`mailto:${selectedMember.email}`}
              className="block text-blue-600 dark:text-blue-300 hover:underline"
            >
              {selectedMember.email}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;

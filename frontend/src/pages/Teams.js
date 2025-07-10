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

const teams = {
  planning: [
    {
      name: 'Shivam Sharma',
      role: 'Project Coordinator',
      email: 'anshusharma5787@gmail.com',
      university: 'Sardar Patel University, Mandi',
      photo: shivam,
    },
    {
      name: 'Gaurav',
      role: 'Technical Lead | Project Developer',
      email: 'gauravspumca@gmail.com',
      university: 'Sardar Patel University, Mandi',
      photo: gaurav,
    },
    {
      name: 'Mokshika Sharma',
      role: 'UI/UX Designer',
      email: 'mokshu0703@gmail.com',
      university: 'Sardar Patel University, Mandi',
      photo: mokshika,
    },
    {
      name: 'Richa',
      role: 'UI/UX Designer',
      email: 'richathakur30661@gmail.com',
      university: 'Sardar Patel University, Mandi',
      photo: richa,
    },
    {
      name: 'Nikhil Kumar',
      role: 'Logo Designer | Graphics Designer',
      email: 'nikhilkumar288039@gmail.com',
      university: 'Sardar Patel University, Mandi',
      photo: nikhil,
    },
    {
      name: 'Abhishek',
      role: 'Logo Designer | Graphics Designer',
      email: 'abhishekchoudhary123123123@gmail.com',
      university: 'Sardar Patel University, Mandi',
      photo: abhishek,
    },
  ],
  content: [
    {
      name: 'Chandni',
      role: 'Notes Manager | Question Paper Analyst | Data Collector',
      email: 'chandnimandihp@gmail.com',
      university: 'Sardar Patel University, Mandi',
      photo: chandni,
    },
    {
      name: 'Lakshay',
      role: 'Syllabus Curator | Content Manager | Data Collector',
      email: 'gulerialakshay278@gmial.com',
      university: 'Sardar Patel University, Mandi',
      photo: lakshay,
    },
  ],
  thanks: [
    {
      name: 'Dr. SPU Mentor',
      role: 'Project Mentor',
      email: 'mentor@spu.ac.in',
      university: 'Sardar Patel University, Mandi',
      photo: spu,
    },
    {
      name: 'SPU, Mandi',
      role: 'Academic Data Provider',
      email: 'registrar@spumandi.ac.in',
      university: 'Sardar Patel University, Mandi',
      photo: spu,
    },
    {
      name: 'HPU, Shimla',
      role: 'Academic Data Provider',
      email: 'deanstudies@hpuniv.ac.in',
      university: 'Himachal Pradesh University, Shimla',
      photo: hpu,
    }
  ]
};

const getIconForRole = (role) => {
  const r = role.toLowerCase();
  if (r.includes('coordinator')) return <FaUserTie />;
  if (r.includes('developer') || r.includes('technical')) return <FaLaptopCode />;
  if (r.includes('designer')) return <FaPalette />;
  if (r.includes('curator') || r.includes('manager') || r.includes('analyst') || r.includes('collector')) return <FaBook />;
  if (r.includes('mentor') || r.includes('teacher')) return <FaChalkboardTeacher />;
  if (r.includes('university') || r.includes('provider')) return <FaUniversity />;
  return <FaUsers />;
};

const TeamCard = ({ member, theme, onClick }) => {
  const themeColors = {
    blue: { border: 'border-blue-300', text: 'text-blue-700', darkText: 'dark:text-blue-300' },
    green: { border: 'border-green-300', text: 'text-green-700', darkText: 'dark:text-green-300' },
    purple: { border: 'border-purple-300', text: 'text-purple-700', darkText: 'dark:text-purple-300' },
  };
  const color = themeColors[theme];

  return (
    <div
      onClick={() => onClick(member)}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 duration-300 p-6 text-center w-full cursor-pointer`}
    >
      <img
        src={member.photo}
        alt={member.name}
        className={`w-24 h-24 rounded-full mx-auto mb-4 border-4 ${color.border} shadow`}
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

const TeamSection = ({ title, members, theme, onCardClick }) => {
  const bg = {
    blue: 'from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800',
    green: 'from-green-100 to-green-50 dark:from-green-900 dark:to-green-800',
    purple: 'from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800',
  };

  const textColor = {
    blue: 'text-blue-800 dark:text-blue-300',
    green: 'text-green-800 dark:text-green-300',
    purple: 'text-purple-800 dark:text-purple-300',
  };

  return (
    <section className={`mb-16 rounded-2xl bg-gradient-to-br ${bg[theme]} py-12 px-6 shadow-inner`}>
      <h2 className={`text-3xl font-bold text-center mb-10 capitalize ${textColor[theme]}`}>
        {title}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {members.map((member, idx) => (
          <TeamCard key={idx} member={member} theme={theme} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
};

const Teams = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-violet-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4 md:px-10 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-900 dark:text-yellow-300 mb-16 tracking-tight">
          Our Amazing Teams
        </h1>

        <TeamSection title="🚀 Project Planning Team" members={teams.planning} theme="blue" onCardClick={setSelectedMember} />
        <TeamSection title="📚 Content Provider Team" members={teams.content} theme="green" onCardClick={setSelectedMember} />
        <TeamSection title="🌟 Special Thanks" members={teams.thanks} theme="purple" onCardClick={setSelectedMember} />
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
            <img
              src={selectedMember.photo}
              alt={selectedMember.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-blue-300"
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

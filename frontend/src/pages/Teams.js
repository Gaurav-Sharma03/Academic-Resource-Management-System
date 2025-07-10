import React from 'react';
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
      role: 'Logo Designer | Graphics Designe ',
      email: 'nikhilkumar288039@gmail.com.com',
      university: 'Sardar Patel University, Mandi',
      photo: nikhil,
    },
    {
      name: 'Abhishek',
      role: 'Logo Designer | Graphics Designe',
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


const TeamCard = ({ member, theme }) => {
  const themeColors = {
    blue: { border: 'border-blue-300', text: 'text-blue-700', darkText: 'dark:text-blue-300' },
    green: { border: 'border-green-300', text: 'text-green-700', darkText: 'dark:text-green-300' },
    purple: {
      border: 'border-purple-300',
      text: 'text-purple-700',
      darkText: 'dark:text-purple-300',
    },
  };

  const color = themeColors[theme];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6 text-center w-full">
      <img
        src={member.photo}
        alt={member.name}
        className={`w-24 h-24 rounded-full mx-auto mb-4 border-4 ${color.border} shadow`}
      />
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

const TeamSection = ({ title, members, theme }) => {
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
    <section
      className={`mb-16 rounded-2xl bg-gradient-to-br ${bg[theme]} py-12 px-6 shadow-inner`}
    >
      <h2 className={`text-3xl font-bold text-center mb-10 capitalize ${textColor[theme]}`}>
        {title}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {members.map((member, idx) => (
          <TeamCard key={idx} member={member} theme={theme} />
        ))}
      </div>
    </section>
  );
};

const Teams = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-violet-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4 md:px-10 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-900 dark:text-yellow-300 mb-16 tracking-tight">
          Our Amazing Teams
        </h1>

        <TeamSection title="🚀 Project Planning Team" members={teams.planning} theme="blue" />
        <TeamSection title="📚 Content Provider Team" members={teams.content} theme="green" />
        <TeamSection title="🌟 Special Thanks" members={teams.thanks} theme="purple" />
      </div>
    </div>
  );
};

export default Teams;

import React from 'react';

const teams = {
  planning: [
    {
      name: 'Gautav Sharma',
      role: 'Project Coordinator',
      email: 'gautav@example.com',
      university: 'Sardar Patel University, Mandi',
      photo: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Anjali Thakur',
      role: 'UI/UX Designer',
      email: 'anjali@example.com',
      university: 'Sardar Patel University, Mandi',
      photo: 'https://i.pravatar.cc/150?img=2',
    },
    {
      name: 'Karan Verma',
      role: 'Frontend Developer',
      email: 'karan@example.com',
      university: 'Sardar Patel University, Mandi',
      photo: 'https://i.pravatar.cc/150?img=3',
    },
  ],
  content: [
    {
      name: 'Ritika Mehta',
      role: 'Syllabus Curator',
      email: 'ritika@example.com',
      university: 'Sardar Patel University, Mandi',
      photo: 'https://i.pravatar.cc/150?img=4',
    },
    {
      name: 'Soham Rajput',
      role: 'Notes Manager',
      email: 'soham@example.com',
      university: 'Sardar Patel University, Mandi',
      photo: 'https://i.pravatar.cc/150?img=5',
    },
    {
      name: 'Aditya Rana',
      role: 'Question Paper Analyst',
      email: 'aditya@example.com',
      university: 'Sardar Patel University, Mandi',
      photo: 'https://i.pravatar.cc/150?img=6',
    },
  ],
  thanks: [
    {
      name: 'Dr. Suresh Kumar',
      role: 'Project Mentor',
      email: 'suresh.kumar@spu.ac.in',
      university: 'Sardar Patel University, Mandi',
      photo: 'https://i.pravatar.cc/150?img=7',
    },
    {
      name: 'SPU, Mandi',
      role: 'Academic Data Provider',
      email: 'info@spu.ac.in',
      university: 'Sardar Patel University, Mandi',
      photo: 'https://i.pravatar.cc/150?img=8',
    },
    {
      name: 'OpenAI',
      role: 'AI Assistant (GPT)',
      email: 'support@openai.com',
      university: 'N/A',
      photo: 'https://i.pravatar.cc/150?img=9',
    },
  ],
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

import React, { useEffect, useState } from 'react';

const EPlatform = () => {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [readingMode, setReadingMode] = useState(false);

  useEffect(() => {
    fetch('/data/eresources.json')
      .then((res) => res.json())
      .then((data) => setResources(data))
      .catch((err) => console.error('Error loading eResources:', err));
  }, []);

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        readingMode
          ? 'bg-white dark:bg-gray-900'
          : 'bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800'
      } py-10 px-4`}
    >
      <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-violet-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4 md:px-10 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-900 dark:text-yellow-300 mb-16 tracking-tight">
         
            E-Learning Resources
          </h1>
          
        </div>

    

        {/* Cards */}
        <div
          className={`grid gap-6 ${
            readingMode ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
          }`}
        >
          {filteredResources.map((resource, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                readingMode
                  ? 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700'
                  : 'bg-white dark:bg-gray-800 shadow-md hover:shadow-xl'
              }`}
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-40 object-contain mb-4 rounded"
              />
              <h2
                className={`text-xl font-semibold mb-1 ${
                  readingMode ? 'text-black dark:text-white' : 'text-gray-800 dark:text-white'
                }`}
              >
                {resource.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base flex-grow leading-relaxed">
                {resource.description}
              </p>
              <span className="mt-2 text-xs inline-block bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full w-fit">
                {resource.category}
              </span>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block mt-4 px-4 py-2 text-center rounded transition ${
                  readingMode
                    ? 'bg-gray-800 text-white hover:bg-black'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Visit
              </a>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredResources.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
            No results for "<strong>{searchTerm}</strong>"
          </p>
        )}
      </div>
    </div>
  );
};

export default EPlatform;

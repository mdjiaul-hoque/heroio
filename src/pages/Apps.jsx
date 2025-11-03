import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router';

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/apps.json')
      .then(res => res.json())
      .then(data => {
        setApps(data);
      });
  }, []);

  // Filter apps based on search term (case-insensitive)
  const filteredApps = apps.filter(app =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header: Total apps + Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="text-lg font-semibold">
          Total Apps: {filteredApps.length}
        </div>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Grid Layout */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map(item => (
            <Link key={item.id} to={`/apps/${item.id}`}>
              <div className="border rounded-xl shadow hover:shadow-lg transition p-3 bg-white">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg"
                />

                {/* Title */}
                <h3 className="text-lg font-semibold mt-3">{item.title}</h3>

                {/* Footer: Downloads + Rating */}
                <div className="flex items-center justify-between mt-2 text-gray-600 text-sm">
                  {/* Downloads */}
                  <div className="flex items-center gap-1">
                    <FaDownload size={15} />
                    <span>{item.downloads}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <FaStar size={15} className="text-yellow-500" />
                    <span>{item.ratingAvg}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No App Found</p>
      )}
    </div>
  );
};

export default Apps;

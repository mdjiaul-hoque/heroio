import React, { useState, useEffect } from "react";
import { FaDownload, FaStar, FaHdd } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalledApps(apps);
  }, []);

  // Handle Uninstall
  const handleUninstall = (id, title) => {
    const updatedApps = installedApps.filter(app => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success(`${title} has been uninstalled`);
  };

  // Handle Sorting
  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sortedApps = [...installedApps].sort((a, b) => {
      if (order === "high-low") return b.size - a.size;
      else if (order === "low-high") return a.size - b.size;
      else return 0;
    });
    setInstalledApps(sortedApps);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <Toaster position="top-right" />

      {/* Header: Apps found + Sort dropdown */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
        <div className="text-lg font-semibold">
          {installedApps.length} app{installedApps.length !== 1 ? "s" : ""} found
        </div>

        <div>
          <label className="mr-2 font-medium">Sort by:</label>
          <select
            value={sortOrder}
            onChange={handleSort}
            className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Size</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>
      </div>

      {/* Installed Apps List (Horizontal cards) */}
      {installedApps.length > 0 ? (
        <div className="space-y-4">
          {installedApps.map(app => (
            <div
              key={app.id}
              className="flex items-center justify-between border rounded-xl shadow p-3 bg-white"
            >
              {/* App Image */}
              <img
                src={app.image}
                alt={app.title}
                className="w-20 h-20 object-cover rounded-lg"
              />

              {/* App Details */}
              <div className="flex-1 mx-4">
                <h3 className="text-lg font-semibold">{app.title}</h3>
                <div className="flex items-center gap-4 text-gray-600 text-sm mt-1">
                  <div className="flex items-center gap-1">
                    <FaDownload size={14} />
                    <span>{app.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar size={14} className="text-yellow-500" />
                    <span>{app.ratingAvg}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaHdd size={14} />
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>

              {/* Uninstall Button */}
              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No installed apps found</p>
      )}
    </div>
  );
};

export default Installation;

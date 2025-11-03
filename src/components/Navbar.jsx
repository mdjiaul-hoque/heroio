import React from "react";
import { NavLink, Link } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <div className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          AppStore
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-medium transition ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Contribution Button */}
        <a
          href="https://github.com/mdjiaul-hoque/heroio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition"
        >
          <FaGithub size={20} />
          <span>Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

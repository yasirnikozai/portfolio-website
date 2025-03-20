import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold uppercase tracking-wider"
        >
          My Portfolio
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          {["About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className="relative transition duration-300 hover:text-black after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-4px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (No Icons) */}
        <button
          className="md:hidden text-lg font-semibold tracking-wide uppercase px-3 py-2 bg-gray-800 hover:bg-gray-700 transition duration-300 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-gray-900 py-4 absolute w-full left-0 top-16 shadow-xl"
        >
          {["About", "Projects", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block text-center py-3 text-lg text-white font-medium hover:bg-gray-700 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

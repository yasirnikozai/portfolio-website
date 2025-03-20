import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1597239450996-ea7c2c564412?w=1600&auto=format&fit=crop&q=80')]">
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <p className="text-5xl md:text-7xl font-extrabold">
          I'm <span className="text-blue-400">Nikozai</span>, a Software
          Engineer
        </p>
        <p className="mt-4 text-lg text-gray-200">
          Passionate about building high-quality web applications.
        </p>

        {/* Call-to-Action Button */}
        <motion.div
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/projects">View My Work</Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

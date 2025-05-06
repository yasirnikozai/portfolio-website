import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <img
          src="/passport photo.jpg"
          alt="Mohammad Yasir"
          className="rounded-full w-48 h-48 border-4 border-blue-500 shadow-lg"
        />

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">
            Hi, I'm Mohammad Yasir!
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I'm a passionate **Full Stack Developer** with a **BS in Computer
            Science** from **Abasyn University Peshawar** (Graduated: **2022,
            CGPA: 3.69**).
          </p>
          <p className="text-lg mt-3">
            I love coding in **React, Node.js, JavaScript, HTML, Tailwind CSS,
            SQL, MySQL, PostgreSQL, and MongoDB**. Additionally, I have
            experience in **Canva designing** **Git & Github and **Adobe
            Photoshop**.
          </p>
          <motion.button
            className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.1 }}
          >
            <Link to="/projects"> View My Projects </Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

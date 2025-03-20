import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen mt-5 bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Details */}
      <div className="flex flex-col items-center space-y-4 text-lg">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-blue-400 text-2xl" />
          <a
            href="mailto:yasirnikozai55@gmail.com"
            className="hover:text-blue-300 transition"
          >
            yasirnikozai55@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="text-green-400 text-2xl" />
          <a
            href="tel:+923191700743"
            className="hover:text-green-300 transition"
          >
            +92 319 1700743
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaLinkedin className="text-blue-600 text-2xl" />
          <a
            href="https://www.linkedin.com/in/mohammad-yasir-60b94732b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <motion.div
        className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-semibold text-center mb-4">
          Send Me a Message
        </h3>
        <form action="#" method="POST" className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded-md shadow-md"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}

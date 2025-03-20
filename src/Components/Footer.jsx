import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <div className="container mx-auto">
        <marquee className="mb-2 text-sm">
          &copy; {new Date().getFullYear()} Nikozai. All rights reserved.
        </marquee>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" className="hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://github.com" className="hover:text-gray-300">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

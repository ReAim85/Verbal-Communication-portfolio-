import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Thank you for exploring my Professional Communication for Engineers e-portfolio. I'm always open to feedback and opportunities to apply these skills.
          </p>
          
          <div className="flex justify-center space-x-6 mb-6 sm:mb-8">
            <a
              href="mailto:vishal.jha.ug25@iilm.edu"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="linkedin.com/in/vishal-the-indian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ReAim85"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-6 sm:pt-8">
            <p className="text-gray-400 text-sm">
              Created as part of my Professional Communication for Engineers Course E-Portfolio
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2025 Vishal Jha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
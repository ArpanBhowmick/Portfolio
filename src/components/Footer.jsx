import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-start">
        <div className="flex items-center">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="h-10 w-16 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-xl mr-3 cursor-pointer"
          >
            {"<A/B>"}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-200">
            connect
          </h3>

          <div className="flex space-x-4">
            <a
              className="text-gray-700 hover:text-violet-400 transition-colors"
              href="https://github.com/ArpanBhowmick"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              className="text-gray-700 hover:text-violet-400 transition-colors"
              href="#"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              className="text-gray-700 hover:text-violet-400 transition-colors"
              href="https://www.linkedin.com/in/arpan-bhowmick28/"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          © 2025 Arpan Bhowmick. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            className="text-gray-500 hover:text-white text-sm transition-colors"
            href="#"
          >
            Privacy Policy
          </a>

          <a
            className="text-gray-500 hover:text-white text-sm transition-colors"
            href="#"
          >
            Terms of service
          </a>

          <a
            className="text-gray-500 hover:text-white text-sm transition-colors"
            href="#"
          >
            Cookies Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
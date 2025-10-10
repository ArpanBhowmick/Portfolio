// ResumeSection.jsx
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ResumeSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  const pdfFile = "/resume1.pdf";

  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 text-white"
    >
      {/* Animated heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-indigo-400">Resume</span>
      </motion.h2>

      {/* Short intro */}
      <motion.p
        className="max-w-2xl text-gray-300 text-lg mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Take a look at my professional journey — education, technical skills, and
        hands-on projects that shaped my path as a web developer.
      </motion.p>

      {/* Resume card */}
      <motion.div
        className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-2xl shadow-xl p-6 w-full max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Arpan Bhowmick</h3>
        <p className="text-gray-300 mb-6">
          Frontend Developer | HTML • CSS • JavaScript • React • Redux • Tailwind CSS
        </p>

        {/* Top Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <a
            href={pdfFile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 transition-colors px-5 py-3 rounded-xl font-medium"
          >
            <FiDownload size={20} />
            View Resume
          </a>

          <a
            href={pdfFile}
            download
            className="flex items-center gap-2 border border-indigo-400 hover:bg-indigo-500/20 transition-colors px-5 py-3 rounded-xl font-medium"
          >
            <FiDownload size={20} />
            Download PDF
          </a>

          <Link
            to="/"
            className="flex items-center justify-center px-5 py-3 bg-gray-700 hover:bg-gray-800 rounded-xl font-medium transition-colors"
          >
            Back to Home
          </Link>
        </div>

        {/* Responsive iframe container */}
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto aspect-[8.5/11] mb-6">
          <iframe
            src={`${pdfFile}#toolbar=0`}
            title="Resume"
            className="w-full h-full rounded-xl border-none pb-3 py-2.5 pl-10 pr-10"
          />
        </div>

        {/* Bottom Buttons (optional, can remove if you want only top buttons) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
          <a
            href={pdfFile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 transition-colors px-5 py-3 rounded-xl font-medium"
          >
            <FiDownload size={20} />
            View Resume
          </a>

          <a
            href={pdfFile}
            download
            className="flex items-center gap-2 border border-indigo-400 hover:bg-indigo-500/20 transition-colors px-5 py-3 rounded-xl font-medium"
          >
            <FiDownload size={20} />
            Download PDF
          </a>

          <Link
            to="/"
            className="flex items-center justify-center px-5 py-3 bg-gray-700 hover:bg-gray-800 rounded-xl font-medium transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;

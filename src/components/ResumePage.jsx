import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6"
    >
      <h1 className="text-4xl font-bold mb-6">My Resume</h1>
      <iframe
        src="/public/projects/Resume.pdf"
        className="w-full max-w-3xl h-[600px] mb-6 border border-gray-700 overflow-hidden"
        title="Resume"
      ></iframe>
      <a
        href="/public/projects/Resume.pdf"
        download
        className="px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg font-bold transition-colors"
      >
        Download Resume
      </a>
    </motion.div>
  );
};

export default Resume;

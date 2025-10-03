import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Resume = () => {
  const headerRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    // Optional: Animate header/background blur on scroll
    gsap.to(headerRef.current, {
      backdropFilter: "blur(10px)",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start">
      {/* Header */}
      <header
        ref={headerRef}
        className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md px-6 py-4 flex justify-between items-center"
      >
        <h1 className="text-xl font-bold">My Resume</h1>
      </header>

      {/* Animated Content */}
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
        className="mt-28 w-full flex flex-col items-center p-6"
      >
        <h2 className="text-4xl font-bold mb-6">Resume</h2>

        {/* Embed PDF */}
        <iframe
          src="/resume.pdf"
          className="w-full max-w-4xl h-[600px] mb-6 border border-gray-700 rounded-lg shadow-lg"
          title="Resume"
        ></iframe>

        {/* Download Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-violet-600 rounded-lg hover:bg-violet-700 transition-all duration-300"
        >
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Resume;

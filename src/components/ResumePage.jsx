import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

// Setting up PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumePage() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Resume
      </motion.h1>

      {/* PDF Viewer */}
      <motion.div
        className="w-full max-w-4xl h-[80vh] border-2 border-gray-700 rounded-lg overflow-auto shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Document
          file="/project/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex flex-col items-center"
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={800} // or you can make it responsive using container width
              className="mb-4"
            />
          ))}
        </Document>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href="/project/resume1.pdf"
          download="My_Resume.pdf"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
        >
          Download Resume
        </a>

        <Link
          to="/"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg font-medium transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

export default ResumePage;

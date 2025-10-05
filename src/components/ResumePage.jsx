import { Link } from "react-router-dom";

function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">My Resume</h1>

      {/* Embedded PDF viewer */}
      <div className="w-full max-w-4xl h-[80vh] border-2 border-gray-700 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="/project/resume.pdf"   // 👈 make sure your PDF is inside public/project/resume.pdf
          title="Resume"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        {/* Download button */}
        <a
          href="/project/resume.pdf"
          download="My_Resume.pdf"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
        >
          Download Resume
        </a>

        {/* Back to Home button */}
        <Link
          to="/"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg font-medium transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ResumePage;

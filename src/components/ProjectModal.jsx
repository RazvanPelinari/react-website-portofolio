import React, { useState, useEffect } from "react";

const ProjectModal = ({ show, onClose, projectUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (show) {
      setIsLoading(true);

      const iframeLoadPromise = new Promise((resolve) => {
        const iframe = document.getElementById("project-iframe");
        iframe.onload = () => resolve();
      });

      const minimumTimePromise = new Promise((resolve) => {
        setTimeout(resolve, 1000); // 1000 milliseconds = 1 second
      });

      Promise.all([iframeLoadPromise, minimumTimePromise]).then(() => {
        setIsLoading(false);
      });
    }
  }, [show, projectUrl]);

  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-11/12 h-5/6 md:w-3/4 md:h-5/6 bg-white rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-gray-800 text-3xl font-bold z-10 hover:text-red-500 transition-colors"
        >
          &times;
        </button>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <svg
              className="animate-spin h-16 w-16 text-purple-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}

        {/* Iframe for the project demo */}
        <iframe
          id="project-iframe"
          src={projectUrl}
          title="Project Demo"
          className={`w-full h-full border-none ${
            isLoading ? "hidden" : "block"
          }`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectModal;

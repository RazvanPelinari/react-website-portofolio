import React from "react";

const ProjectModal = ({ show, onClose, projectUrl }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-11/12 h-5/6 md:w-3/4 md:h-5/6 bg-white rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevents clicks inside from closing the modal
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-gray-800 text-3xl font-bold z-10 hover:text-red-500 transition-colors"
        >
          &times;
        </button>
        <iframe
          src={projectUrl}
          title="Project Demo"
          className="w-full h-full border-none"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectModal;

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ show, onClose, projectUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (show) {
      setIsLoading(true);

      const iframeLoadPromise = new Promise((resolve) => {
        if (iframeRef.current) {
          iframeRef.current.onload = () => resolve();
        }
      });

      const minimumTimePromise = new Promise((resolve) => {
        setTimeout(resolve, 1000); // at least 1s loader
      });

      Promise.all([iframeLoadPromise, minimumTimePromise]).then(() => {
        setIsLoading(false);
      });
    }
  }, [show, projectUrl]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-11/12 h-5/6 md:w-3/4 md:h-5/6 bg-white rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-gray-800 text-3xl font-bold z-10 hover:text-red-500 transition-colors"
        >
          &times;
        </button>

        {/* Loader */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10"
            >
              {/* Loader Circle */}
              <motion.div
                initial={{ scale: 0.9, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 rounded-full border-4 border-purple-500 border-t-transparent"
              />

              {/* Loading Text */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.2,
                }}
                className="mt-4 text-lg text-purple-600 font-medium"
              >
                Loading Project...
              </motion.h2>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Iframe */}
        <motion.iframe
          ref={iframeRef}
          src={projectUrl}
          title="Project Demo"
          className="w-full h-full border-none"
          allowFullScreen
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 10 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProjectModal;

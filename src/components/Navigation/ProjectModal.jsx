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
          const handleLoad = () => {
            resolve();
            iframeRef.current.removeEventListener("load", handleLoad);
          };
          iframeRef.current.addEventListener("load", handleLoad);
        }
      });

      const minimumTimePromise = new Promise((resolve) => {
        setTimeout(resolve, 1000); // at least 1s minimum loader duration
      });

      Promise.all([iframeLoadPromise, minimumTimePromise]).then(() => {
        setIsLoading(false);
      });
    }
  }, [show, projectUrl]);

  const modalContainerVariants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0.95 },
  };

  if (!show) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      {/* Modal Container */}
      <AnimatePresence>
        {show && (
          <motion.div
            key="modal"
            variants={modalContainerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3 }}
            // 🎯 MOBILE HEIGHT ADJUSTMENT: Changed h-[95vh] to h-[90vh] on small screens
            className="relative w-[95vw] h-[80vh] sm:h-5/6 md:w-3/4 md:h-5/6 bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header/Nav Section (Top of the Modal) */}
            <div className="flex-shrink-0 p-3 px-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800">Project Demo</h3>

              {/* 🎯 CLOSE BUTTON IN NAV: Clean, integrated close button */}
              <button
                onClick={onClose}
                className="p-1 w-8 h-8 flex items-center justify-center text-gray-800 text-3xl font-bold rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Close Project Demo"
              >
                &times;
              </button>
            </div>

            {/* Loader */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  key="loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-white z-20"
                >
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
              className="w-full flex-grow border-none overflow-y-auto"
              allowFullScreen
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0 : 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectModal;

// src/components/Section.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section({ children, bg = "bg-white" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: false });

  return (
    <section
      ref={ref}
      className={`min-h-screen w-full flex items-center justify-center ${bg}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full h-full flex items-center justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
}

// src/components/Section.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section({ children, bg = "bg-white" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`min-h-screen flex items-center justify-center ${bg}`}
    >
      {children}
    </motion.section>
  );
}

// src/components/Section.jsx
import { motion } from "framer-motion";

export default function Section({ children, bg = "bg-white" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // start faded & shifted down
      whileInView={{ opacity: 1, y: 0 }} // animate when visible
      exit={{ opacity: 0.2, y: 50 }} // animate out when leaving
      viewport={{ once: false, amount: 0.7}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`min-h-screen flex items-center justify-center ${bg}`}
    >
      {children}
    </motion.section>
  );
}

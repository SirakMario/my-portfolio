"use client";
import { motion } from "motion/react";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="text-center tracking-tight my-1">
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 1, x: 100 }}
        transition={{ duration: 1 }}
      >
        Sirak Tesfamariam | &copy; {getCurrentYear()}
      </motion.p>
    </div>
  );
}

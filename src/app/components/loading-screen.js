"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src="/logo.png" // Replace with your image path
        alt="Loading..."
        className="w-35 h-16 sm:w-40 sm:h-24 md:w-72 md:h-32"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

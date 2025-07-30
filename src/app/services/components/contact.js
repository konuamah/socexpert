"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      className="w-full bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white py-16 px-6 md:px-20"
      aria-labelledby="contact-cta-heading"
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h2
          id="contact-cta-heading"
          className="text-3xl md:text-4xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready for 24/7 Peace of Mind?
        </motion.h2>

        <motion.p
          className="text-lg text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Let our expert SOC team safeguard your business with real-time detection and rapid response.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
        

          
        </motion.div>
      </div>
    </section>
  );
}

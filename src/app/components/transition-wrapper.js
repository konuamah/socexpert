"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingScreen from "./loading-screen";

export default function TransitionWrapper({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600); // adjust delay as needed
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        {!loading && (
          <motion.div
            key={pathname}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: "absolute",
              width: "100%",
              top: 0,
              left: 0,
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

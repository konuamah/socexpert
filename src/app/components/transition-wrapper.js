"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TransitionWrapper({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    // When pathname changes, fade out first
    setTransitionStage("fadeOut");

    // After fade out duration, update children and fade back in
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage("fadeIn");
    }, 300); // match with CSS duration below

    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <div className={`page-wrapper ${transitionStage}`}>
      {displayChildren}
    </div>
  );
}

// components/AnimatedValueItems.client.js
"use client";
import { useEffect, useRef, useState } from 'react';

// This component handles the client-side animation logic using IntersectionObserver
const AnimatedValueItems = ({ children, itemCount }) => {
  const [visibleItems, setVisibleItems] = useState(new Array(itemCount).fill(false));
  const itemRefs = useRef([]);

  useEffect(() => {
    // Reset visibility if itemCount changes
    setVisibleItems(new Array(itemCount).fill(false));
    // Ensure refs array matches itemCount
    itemRefs.current = itemRefs.current.slice(0, itemCount);
    itemRefs.current.length = itemCount;

    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Disconnect observer once item is visible to prevent unnecessary calls
            observer.disconnect();
            setVisibleItems(prev => {
              const newState = [...prev];
              // Prevent re-render if already set (minor optimization)
              if (!newState[index]) {
                newState[index] = true;
                return newState;
              }
              return prev;
            });
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(ref);
      return observer;
    });

    // Cleanup function to disconnect observers
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [itemCount]); // Re-run if itemCount changes

  // Call the children function, passing refs and visibility state
  return children({ itemRefs, visibleItems });
};

export default AnimatedValueItems;
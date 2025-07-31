'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from './loading-screen';
import FirstFrameHeader from './navbar';

export default function LayoutWithLoader({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Optional: delay for animation
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000); // Adjust as needed
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen />}
      {isLoaded && (
        <>
          <FirstFrameHeader />
          {children}
        </>
      )}
    </>
  );
}

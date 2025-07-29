"use client";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";

export default function Hero({
  title,
  highlight,
  subtitle,
  videoSrc,
  fadeOutAfterMs = 5000,
  gradientClasses = "from-black via-gray-900 to-black",
}) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Gradient style for root section
  const gradientStyle = useMemo(() => ({
    background: `linear-gradient(to bottom, var(--tw-gradient-stops))`,
  }), [gradientClasses]);

  // Fade out video after set time
  useEffect(() => {
    if (!videoRef.current || !videoLoaded) return;

    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.style.transition = "opacity 1s ease-in-out";
          videoRef.current.style.opacity = "0";
        }
      });

      setTimeout(() => {
        if (videoRef.current) videoRef.current.pause();
      }, 1000);
    }, fadeOutAfterMs);

    return () => clearTimeout(timer);
  }, [fadeOutAfterMs, videoLoaded]);

  // Show full texts immediately, no typing effect
  const displayedTitle = title;
  const displayedHighlight = highlight;
  const displayedSubtitle = subtitle;

  const handleVideoLoad = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  return (
    <section
      className={`relative z-0 h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-b ${gradientClasses}`}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover z-[-2] ${
          videoLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 ease-in-out`}
        autoPlay
        muted
        playsInline
        loop
        preload="metadata"
        onLoadedData={handleVideoLoad}
        onCanPlay={handleVideoLoad}
        poster=""
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Loading fallback */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gray-900 z-[-2] animate-pulse" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 z-[-1]" />

      {/* Foreground Content */}
      <h1
        className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] font-extrabold leading-[1.1] tracking-tight text-white mb-6 drop-shadow-lg min-h-[1.2em] will-change-contents"
        style={{ contain: "layout" }}
      >
        {displayedTitle}{" "}
        {displayedHighlight && (
          <span className="text-blue-500">{displayedHighlight}</span>
        )}
      </h1>

      <p
        className="text-xl sm:text-2xl md:text-[1.75rem] max-w-4xl leading-[1.6] text-gray-300 px-4 sm:px-8 drop-shadow-sm min-h-[1.6em] will-change-contents"
        style={{ contain: "layout" }}
      >
        {displayedSubtitle}
      </p>
    </section>
  );
}

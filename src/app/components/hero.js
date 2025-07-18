"use client";
import { useEffect, useState, useRef } from "react";

export default function Hero({
  title,
  highlight,
  subtitle,
  videoSrc,
  secondVideoSrc,
  fadeOutAfterMs = 5000,
  gradientClasses = "from-black via-gray-900 to-black",
}) {
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondVideo(true);
      if (videoRef1.current) {
        videoRef1.current.pause();
      }
    }, fadeOutAfterMs);

    return () => clearTimeout(timer);
  }, [fadeOutAfterMs]);

  return (
    <section className="relative z-0 h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* First Video */}
      <video
        ref={videoRef1}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out z-[-1] ${
          showSecondVideo ? "opacity-0" : "opacity-100"
        }`}
        autoPlay
        muted
        playsInline
        loop={false}
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Second Video */}
      <video
        ref={videoRef2}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out z-[-2] ${
          showSecondVideo ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      >
        <source src={secondVideoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Background */}
      <div className={`absolute inset-0 z-[-3] bg-gradient-to-b ${gradientClasses}`} />

      {/* Foreground Content */}
      <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] font-extrabold leading-[1.1] tracking-tight text-white mb-6 drop-shadow-lg">
        {title} <span className="text-blue-500">{highlight}</span>
      </h1>
      <p className="text-xl sm:text-2xl md:text-[1.75rem] max-w-4xl leading-[1.6] text-gray-300 px-4 sm:px-8 drop-shadow-sm">
        {subtitle}
      </p>
    </section>
  );
}

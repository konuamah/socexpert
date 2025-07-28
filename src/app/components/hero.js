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
  typingSpeed = 100, // milliseconds per character
  startTypingDelay = 500, // delay before typing starts
}) {
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedHighlight, setDisplayedHighlight] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [currentPhase, setCurrentPhase] = useState("title"); // 'title', 'highlight', 'subtitle', 'complete'
  const [showCursor, setShowCursor] = useState(true);
  
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  // Video transition logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondVideo(true);
      if (videoRef1.current) {
        videoRef1.current.pause();
      }
    }, fadeOutAfterMs);

    return () => clearTimeout(timer);
  }, [fadeOutAfterMs]);

  // Typing effect logic
  useEffect(() => {
    const startTimer = setTimeout(() => {
      let titleIndex = 0;
      let highlightIndex = 0;
      let subtitleIndex = 0;

      const typeTitle = () => {
        if (titleIndex < title.length) {
          setDisplayedTitle(title.slice(0, titleIndex + 1));
          titleIndex++;
          setTimeout(typeTitle, typingSpeed);
        } else {
          setCurrentPhase("highlight");
          typeHighlight();
        }
      };

      const typeHighlight = () => {
        if (highlightIndex < highlight.length) {
          setDisplayedHighlight(highlight.slice(0, highlightIndex + 1));
          highlightIndex++;
          setTimeout(typeHighlight, typingSpeed);
        } else {
          setCurrentPhase("subtitle");
          setTimeout(typeSubtitle, 200); // Small pause before subtitle
        }
      };

      const typeSubtitle = () => {
        if (subtitleIndex < subtitle.length) {
          setDisplayedSubtitle(subtitle.slice(0, subtitleIndex + 1));
          subtitleIndex++;
          setTimeout(typeSubtitle, typingSpeed * 0.7); // Slightly faster for subtitle
        } else {
          setCurrentPhase("complete");
          // Hide cursor after completion
          setTimeout(() => setShowCursor(false), 1000);
        }
      };

      typeTitle();
    }, startTypingDelay);

    return () => clearTimeout(startTimer);
  }, [title, highlight, subtitle, typingSpeed, startTypingDelay]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  // Reset cursor visibility when phase changes
  useEffect(() => {
    if (currentPhase !== "complete") {
      setShowCursor(true);
    }
  }, [currentPhase]);

  const getCursor = () => {
    return showCursor ? "|" : " ";
  };

  return (
    <section className="relative z-0 h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* First Video */}
      <video
        ref={videoRef1}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out z-[-2] ${
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35 z-[-1]" />

      {/* Gradient Background */}
      <div className={`absolute inset-0 z-[-3] bg-gradient-to-b ${gradientClasses}`} />

      {/* Foreground Content */}
      <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] font-extrabold leading-[1.1] tracking-tight text-white mb-6 drop-shadow-lg min-h-[1.2em]">
        {displayedTitle}
        {currentPhase === "title" && <span className="text-white">{getCursor()}</span>}
        {displayedHighlight && (
          <>
            {" "}
            <span className="text-blue-500">
              {displayedHighlight}
              {currentPhase === "highlight" && <span className="text-white">{getCursor()}</span>}
            </span>
          </>
        )}
      </h1>
      
      <p className="text-xl sm:text-2xl md:text-[1.75rem] max-w-4xl leading-[1.6] text-gray-300 px-4 sm:px-8 drop-shadow-sm min-h-[1.6em]">
        {displayedSubtitle}
        {currentPhase === "subtitle" && <span className="text-gray-300">{getCursor()}</span>}
      </p>
    </section>
  );
}
"use client";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";

export default function Hero({
  title,
  highlight,
  subtitle,
  videoSrc,
  fadeOutAfterMs = 5000,
  gradientClasses = "from-black via-gray-900 to-black",
  typingSpeed = 100,
  startTypingDelay = 500,
}) {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedHighlight, setDisplayedHighlight] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [currentPhase, setCurrentPhase] = useState("title");
  const [showCursor, setShowCursor] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoRef = useRef(null);
  const timeoutRefs = useRef([]);

  // Gradient style for root section
  const gradientStyle = useMemo(() => ({
    background: `linear-gradient(to bottom, var(--tw-gradient-stops))`,
  }), [gradientClasses]);

  // Clear all timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, []);

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

    timeoutRefs.current.push(timer);
    return () => clearTimeout(timer);
  }, [fadeOutAfterMs, videoLoaded]);

  // Typing effect logic
  const createTypingEffect = useCallback(() => {
    let titleIndex = 0;
    let highlightIndex = 0;
    let subtitleIndex = 0;

    const typeTitle = () => {
      if (titleIndex < title.length) {
        setDisplayedTitle(title.slice(0, titleIndex + 1));
        titleIndex++;
        const timer = setTimeout(typeTitle, typingSpeed);
        timeoutRefs.current.push(timer);
      } else {
        setCurrentPhase("highlight");
        typeHighlight();
      }
    };

    const typeHighlight = () => {
      if (highlightIndex < highlight.length) {
        setDisplayedHighlight(highlight.slice(0, highlightIndex + 1));
        highlightIndex++;
        const timer = setTimeout(typeHighlight, typingSpeed);
        timeoutRefs.current.push(timer);
      } else {
        setCurrentPhase("subtitle");
        const timer = setTimeout(typeSubtitle, 200);
        timeoutRefs.current.push(timer);
      }
    };

    const typeSubtitle = () => {
      if (subtitleIndex < subtitle.length) {
        setDisplayedSubtitle(subtitle.slice(0, subtitleIndex + 1));
        subtitleIndex++;
        const timer = setTimeout(typeSubtitle, typingSpeed * 0.7);
        timeoutRefs.current.push(timer);
      } else {
        setCurrentPhase("complete");
        const timer = setTimeout(() => setShowCursor(false), 1000);
        timeoutRefs.current.push(timer);
      }
    };

    return typeTitle;
  }, [title, highlight, subtitle, typingSpeed]);

  // Start typing on load
  useEffect(() => {
    const startTimer = setTimeout(() => {
      const typeTitle = createTypingEffect();
      typeTitle();
    }, startTypingDelay);

    timeoutRefs.current.push(startTimer);
    return () => clearTimeout(startTimer);
  }, [createTypingEffect, startTypingDelay]);

  // Cursor blink loop
  const startCursorBlink = useCallback(() => {
    if (!showCursor) return;
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  useEffect(() => {
    const cleanup = startCursorBlink();
    return cleanup;
  }, [startCursorBlink]);

  // Reset cursor on phase change
  useEffect(() => {
    if (currentPhase !== "complete") {
      setShowCursor(true);
    }
  }, [currentPhase]);

  const cursor = useMemo(() => (showCursor ? "|" : " "), [showCursor]);

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
        {displayedTitle}
        {currentPhase === "title" && <span className="text-white">{cursor}</span>}
        {displayedHighlight && (
          <>
            {" "}
            <span className="text-blue-500">
              {displayedHighlight}
              {currentPhase === "highlight" && <span className="text-white">{cursor}</span>}
            </span>
          </>
        )}
      </h1>

      <p
        className="text-xl sm:text-2xl md:text-[1.75rem] max-w-4xl leading-[1.6] text-gray-300 px-4 sm:px-8 drop-shadow-sm min-h-[1.6em] will-change-contents"
        style={{ contain: "layout" }}
      >
        {displayedSubtitle}
        {currentPhase === "subtitle" && <span className="text-gray-300">{cursor}</span>}
      </p>
    </section>
  );
}

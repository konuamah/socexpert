"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const FirstFrameHeader = () => {
  const [isIdle, setIsIdle] = useState(false);
  const idleTimerRef = useRef(null);

  const useHackingText = (text) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHacking, setIsHacking] = useState(false);
    const intervalRef = useRef(null);
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

    const startHacking = () => {
      if (isHacking) return;
      setIsHacking(true);
      let iterations = 0;
      const maxIterations = text.length * 3;

      intervalRef.current = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (iterations < index * 3) {
                return chars[Math.floor(Math.random() * chars.length)];
              }
              return char;
            })
            .join("")
        );

        iterations++;
        if (iterations >= maxIterations) {
          clearInterval(intervalRef.current);
          setDisplayText(text);
          setIsHacking(false);
        }
      }, 50);
    };

    const stopHacking = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setDisplayText(text);
      setIsHacking(false);
    };

    useEffect(() => {
      return () => intervalRef.current && clearInterval(intervalRef.current);
    }, []);

    return { displayText, startHacking, stopHacking };
  };

  const resetIdleTimer = () => {
    setIsIdle(false);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => setIsIdle(true), 200);
  };

  useEffect(() => {
    resetIdleTimer();
    const handleActivity = () => resetIdleTimer();

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("click", handleActivity);

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("click", handleActivity);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  const HackingText = ({ children, href, className }) => {
    const { displayText, startHacking, stopHacking } = useHackingText(children);
    return (
      <Link
        href={href}
        className={`relative inline-block font-mono font-medium transition-opacity hover:opacity-90 ${className}`}
        onMouseEnter={startHacking}
        onMouseLeave={stopHacking}
      >
        {displayText}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-50 flex items-center text-white bg-gradient-to-b from-black/70 via-black/30 to-transparent backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[2560px] w-full mx-auto uppercase text-[18px] tracking-[0.8px] px-4 flex items-center font-inter">
        {/* Logo */}
        <Link
          href="/"
          className="relative flex items-center justify-center h-full px-6 group"
        >
          {/* Desktop Logo */}
          <div className="hidden xl:block">
            <Image
              src="/logo.png" // Put your logo image in /public/logo.png
              alt="Logo"
              width={150}
              height={100}
              className={isIdle ? "animate-pulse" : ""}
            />
          </div>
          {/* Mobile Logo */}
          <div className="xl:hidden">
            <Image
              src="/logo.png"
              alt="Logo"
              width={24}
              height={24}
              className={isIdle ? "animate-pulse" : ""}
            />
          </div>

          <div
            className={`absolute right-0 top-0 w-px h-full ${
              isIdle ? "bg-white/40 shadow-md animate-pulse" : "bg-white/20"
            }`}
          />
        </Link>

        {/* Nav */}
        <div className="flex-1 flex items-center justify-center h-full">
          <div
            className={`flex items-center gap-10 sm:gap-6 text-[18px] tracking-[0.8px] ${
              isIdle ? "animate-glow" : ""
            }`}
          >
            <HackingText href="/" className="">
              Home
            </HackingText>
            <HackingText href="/about" className="">
              About
            </HackingText>
            <HackingText href="/services" className="">
              Services
            </HackingText>
          </div>
        </div>
      </div>

      {/* Glow Animation */}
      <style jsx global>{`
        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
          }
          50% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.4),
              0 0 20px rgba(255, 255, 255, 0.2);
          }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default FirstFrameHeader;

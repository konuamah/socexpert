"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const FirstFrameHeader = () => {
  const [isIdle, setIsIdle] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const HackingText = ({ children, href, className, onClick }) => {
    const { displayText, startHacking, stopHacking } = useHackingText(children);
    return (
      <Link
        href={href}
        className={`relative inline-block font-mono font-medium transition-opacity hover:opacity-90 ${className}`}
        onMouseEnter={startHacking}
        onMouseLeave={stopHacking}
        onClick={onClick}
      >
        {displayText}
      </Link>
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 sm:h-20 z-50 flex items-center text-white bg-gradient-to-b from-black/70 via-black/30 to-transparent backdrop-blur-sm border-b border-white/10">
        <div className="max-w-[2560px] w-full mx-auto uppercase text-sm sm:text-base lg:text-[18px] tracking-[0.4px] sm:tracking-[0.8px] px-3 sm:px-4 flex items-center font-inter">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex items-center justify-center h-full px-2 sm:px-4 lg:px-6 group"
          >
            {/* Desktop Logo */}
            <div className="hidden lg:block">
              <Image
                src="/logo.png"
                alt="Logo"
                width={260}
                height={80}
                className={`xl:w-[150px] xl:h-[80px] ${isIdle ? "animate-pulse" : ""}`}
              />
            </div>
            {/* Tablet Logo */}
            <div className="hidden sm:block lg:hidden">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={60}
                className={isIdle ? "animate-pulse" : ""}
              />
            </div>
            {/* Mobile Logo */}
            <div className="sm:hidden">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={20}
                className={isIdle ? "animate-pulse" : ""}
              />
            </div>

            <div
              className={`absolute right-0 top-0 w-px h-full ${
                isIdle ? "bg-white/40 shadow-md animate-pulse" : "bg-white/20"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center h-full">
            <div
              className={`flex items-center gap-4 lg:gap-6 xl:gap-10 text-sm sm:text-base lg:text-[18px] tracking-[0.4px] sm:tracking-[0.8px] ${
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
              <HackingText href="/blogs" className="">
                Blogs
              </HackingText>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white hover:bg-white/10 rounded-md transition-colors"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 sm:top-20 right-0 w-64 sm:w-80 h-screen border-l text-whi border-white/10 z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 pt-8 space-y-6">
          <div
            className={`flex flex-col space-y-6 text-lg sm:text-xl tracking-[0.8px] uppercase ${
              isIdle ? "animate-glow" : ""
            }`}
          >
            <HackingText href="/" className="py-3 border-b border-white/10" onClick={closeMobileMenu}>
              Home
            </HackingText>
            <HackingText href="/about" className="py-3 border-b border-white/10" onClick={closeMobileMenu}>
              About
            </HackingText>
            <HackingText href="/services" className="py-3 border-b border-white/10" onClick={closeMobileMenu}>
              Services
            </HackingText>
            <HackingText href="/blog" className="py-3 border-b border-white/10" onClick={closeMobileMenu}>
              Blogsss
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
    </>
  );
};

export default FirstFrameHeader;
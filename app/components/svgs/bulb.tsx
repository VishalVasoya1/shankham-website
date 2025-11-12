"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Bulb: React.FC = () => {
  const bulbRef = useRef<SVGSVGElement>(null);
  const glassRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const bulb = bulbRef.current;
    const glass = glassRef.current;

    if (!bulb || !glass) return;

    const enter = () => {
      gsap.to(glass, {
        fill: "#FFE066",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const leave = () => {
      gsap.to(glass, {
        fill: "#fff",
        duration: 0.5,
        ease: "power2.inOut",
      });
    };

    bulb.addEventListener("mouseenter", enter);
    bulb.addEventListener("mouseleave", leave);

    return () => {
      bulb.removeEventListener("mouseenter", enter);
      bulb.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className="inline-block cursor-pointer">
      <svg
        ref={bulbRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-24 h-24 mx-auto"
      >
        {/* Bulb glass */}
        <path
          ref={glassRef}
          d="M44 26c0-6.6-5.4-12-12-12s-12 5.4-12 12c0 4.9 3 9.1 7.3 11.1.6.3 1 .9 1 1.6v3.2c0 .8.7 1.5 1.5 1.5h5.4c.8 0 1.5-.7 1.5-1.5V39c0-.7.4-1.3 1-1.6C41 35.1 44 30.9 44 26z"
          fill="#fff"
          stroke="#222"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Filament */}
        <path
          d="M26.5 28.5c1.3 1 2.8 1.5 4.5 1.5s3.2-.5 4.5-1.5"
          fill="none"
          stroke="#222"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Base */}
        <rect
          x="25"
          y="40"
          width="14"
          height="6"
          rx="1.2"
          fill="#f3f3f3"
          stroke="#bdbdbd"
          strokeWidth="0.8"
        />
        <rect x="27" y="46.2" width="10" height="3" rx="0.8" fill="#d3d3d3" />
      </svg>
    </div>
  );
};

export default Bulb;

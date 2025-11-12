"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { editorial_new } from "@/app/fonts";

const HeroSection: React.FC = () => {
  const words: string[] = [
    "ambitious teams",
    "visionary leaders",
    "bold creators",
  ];
  const [wordIndex, setWordIndex] = useState<number>(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const tl = gsap.timeline({
      repeat: -1,
    });

    words.forEach((_, index) => {
      tl.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
      })
        .set(textRef.current, {
          onComplete: () => setWordIndex(index),
        })
        .fromTo(
          textRef.current,
          {
            opacity: 0,
            y: 20,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
          }
        )
        .to({}, { duration: 2 });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
       radial-gradient(circle at center, #c4b5fd, transparent)
     `,
          }}
        />

      <div className="max-w-[1100px] w-full mx-auto relative z-10 mt-32">
        {/* Main Heading */}
        <div className="text-center mb-4 md:mb-6">
          <h1
            className={`text-4xl lg:text-7xl leading-tight md:leading-[1.15] tracking-tight px-2 ${editorial_new.className} text-center`}
          >
            We help{" "}
            <span className="relative inline-block min-w-[280px] md:min-w-0">
              <span ref={textRef} className="inline-block">
                {words[wordIndex]}
              </span>
            </span>
            <br />
            turn ideas into lasting impact.
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-[620px] mx-auto text-center mb-6 md:mb-8 px-4">
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Shankham Technology delivers intelligent solutions through
            AI-powered platforms, next-gen mobile apps, immersive gaming, and
            resilient cloud deployments.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-7 text-sm font-medium gap-2 group relative overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <span className="relative z-10">Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-7 text-sm font-medium gap-2 group"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

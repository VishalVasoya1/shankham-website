"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  index: string;
  link: string;
}

const services: Service[] = [
  {
    index: "01",
    title: "Mobile App Development",
    description:
      "Crafting seamless hybrid and native apps using Flutter, Android, and iOS. We build experiences that users love, with pixel-perfect interfaces and smooth performance.",
    imageUrl: "/mobile-app-development.png",
    link: "/mobile-app-development",
  },
  {
    index: "02",
    title: "Game Development",
    description:
      "Creating immersive 2D, 3D, AR/VR, and web-based games using Unity. From concept to launch, we deliver engaging gameplay and stunning visuals.",
    imageUrl: "/game-development.png",
    link: "/game-development",
  },
  {
    index: "03",
    title: "AI/ML Solutions",
    description:
      "End-to-end AI product development from LLM fine-tuning to RAG-based systems and autonomous agents. Transform your business with intelligent automation.",
    imageUrl: "/ai-development.png",
    link: "/ai-development",
  },
  {
    index: "04",
    title: "UI/UX Design",
    description:
      "Designing clean, intuitive interfaces that enhance digital experiences. We create designs that are both beautiful and functional, putting users first.",
    imageUrl: "/ui-design.png",
    link: "/ui-design",
  },
  {
    index: "05",
    title: "Backend & Cloud",
    description:
      "Scalable event-driven systems, DevOps pipelines, and cloud deployment on AWS and Azure. Infrastructure that grows with your business.",
    imageUrl: "/backend-cloud-development.png",
    link: "/backend-and-cloud",
  },
  {
    index: "06",
    title: "Research & Innovation",
    description:
      "We invest in solving tomorrow's problems with today's intelligence — from AI labs to product R&D. Pushing boundaries and exploring new frontiers.",
    imageUrl: "/research-innovation.png",
    link: "/research-innovation",
  },
];

const WhatWeDo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const windowHeight = window.innerHeight;

      
      
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;

        if (
          itemCenter > windowHeight * 0.3 &&
          itemCenter < windowHeight * 0.7
        ) {
          setActiveIndex(i);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <div className="max-w-[85rem] mx-auto px-6 py-32">
        {/* Header */}
        <div className="">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-border" />
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Services
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl  tracking-tight mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light">
            Transforming ideas into exceptional digital experiences through
            cutting-edge technology and thoughtful design.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-12 lg:gap-16">
            {/* Sticky Image Column */}
            <div className="col-span-6">
              <div className="sticky top-32">
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-muted">
                  {services.map((service, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 transition-opacity duration-700"
                      style={{
                        opacity: activeIndex === i ? 1 : 0,
                        zIndex: activeIndex === i ? 2 : 1,
                      }}
                    >
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                    </div>
                  ))}

                  {/* Progress Indicator */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-medium text-white/60 tracking-widest">
                        {String(activeIndex + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-white/20">
                        <div
                          className="h-full bg-white transition-all duration-300"
                          style={{
                            width: `${
                              ((activeIndex + 1) / services.length) * 100
                            }%`,
                          }}
                        />
                      </div>
                      <span className="text-xs font-medium text-white/60 tracking-widest">
                        {String(services.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="col-span-6 space-y-64">
              {services.map((service, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    itemsRef.current[i] = el;
                  }}
                  className="min-h-screen flex items-center"
                >
                  <div className="space-y-8">
                    <div className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                      <span className="text-4xl font-light">
                        {service.index}
                      </span>
                      <div className="h-px w-20 bg-border" />
                    </div>

                    <h3 className="text-5xl md:text-6xl  tracking-tight leading-[1.1] max-w-xl">
                      {service.title}
                    </h3>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-light">
                      {service.description}
                    </p>

                    <Link className="group inline-flex items-center gap-3 mt-8 text-sm font-medium tracking-wider uppercase border-b border-foreground pb-1 hover:gap-4 transition-all duration-300"
                      href={service.link}
                    >
                      
                      Explore
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-20">
          {services.map((service, i) => (
            <div key={i} className="space-y-8">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-muted">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />

                <div className="absolute top-6 left-6">
                  <span className="text-6xl font-light text-white/20">
                    {service.index}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl  tracking-tight leading-[1.1]">
                  {service.title}
                </h3>

                <p className="text-base text-muted-foreground leading-relaxed font-light">
                  {service.description}
                </p>

                <button className="group inline-flex items-center gap-3 text-sm font-medium tracking-wider uppercase border-b border-foreground pb-1 hover:gap-4 transition-all duration-300">
                  Explore
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

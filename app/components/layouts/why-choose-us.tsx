"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Differentiator {
  number: string;
  title: string;
  description: string;
  impact: string;
}

const differentiators: Differentiator[] = [
  {
    number: "01",
    title: "Lightning-Fast Delivery",
    description:
      "We ship production-ready code 40% faster than industry average through our agile sprint methodology and dedicated DevOps pipeline.",
    impact: "Get to market faster",
  },
  {
    number: "02",
    title: "Zero Vendor Lock-in",
    description:
      "Every solution we build is yours completely. Full code ownership, comprehensive documentation, and seamless knowledge transfer guaranteed.",
    impact: "Complete control",
  },
  {
    number: "03",
    title: "Battle-Tested Expertise",
    description:
      "Our team has shipped 200+ products across 15 industries, handling everything from startup MVPs to enterprise-scale applications.",
    impact: "Proven track record",
  },
  {
    number: "04",
    title: "AI-First Mindset",
    description:
      "We don't just use AI tools—we build them. Our in-house AI lab ensures you get cutting-edge intelligence in every product we deliver.",
    impact: "Future-proof solutions",
  },
  {
    number: "05",
    title: "Transparent Pricing",
    description:
      "Fixed-price projects, no hidden costs, no surprise invoices. You know exactly what you're paying for before we write a single line of code.",
    impact: "Budget certainty",
  },
  {
    number: "06",
    title: "24/7 Support Commitment",
    description:
      "Launch isn't the finish line. We provide round-the-clock support and maintenance to keep your product running flawlessly, always.",
    impact: "Peace of mind",
  },
];

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation - simplified and smoother
      if (headerRef.current) {
        const lines = headerRef.current.querySelectorAll(".line");
        gsap.from(lines, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // Cards smooth stagger animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const elements = {
          separator: card.querySelector(".diff-separator"),
          number: card.querySelector(".diff-number"),
          title: card.querySelector(".diff-title"),
          description: card.querySelector(".diff-description"),
          impact: card.querySelector(".diff-impact"),
        };

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.1,
        });

        // Separator line animation
        gsap.from(elements.separator, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          scaleX: 0,
          duration: 0.8,
          ease: "power2.inOut",
          delay: index * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full max-w-[85rem] min-h-screen py-12 sm:py-16 lg:py-20 bg-background mx-auto px-4 sm:px-6"
    >
      <div className="grid lg:grid-cols-[1fr_1.7fr] items-start gap-8 lg:gap-12 xl:gap-20 pt-8 sm:pt-12 lg:pt-16">
        {/* Header */}
        <div className="lg:sticky lg:top-24">
          <h2
            ref={headerRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] overflow-hidden text-center lg:text-left"
          >
            <span className="block line">Why partner</span>
            <span className="block line">with us?</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            How we're different from every other agency
          </p>
        </div>

        {/* Differentiators List */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-6 sm:gap-x-8 xl:gap-x-12">
          {differentiators.map((item, index) => {
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="relative"
              >
                {/* Separator between items */}
                <div className="diff-separator absolute top-0 left-0 w-full h-[1px] bg-border origin-left"></div>

                {/* Content */}
                <div className="relative flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8">
                  <div className="shrink-0">
                    <span className="diff-number block text-primary text-2xl sm:text-2xl lg:text-3xl font-black">
                      {item.number}
                    </span>
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <div className="mb-2 sm:mb-3">
                      <h3 className="diff-title text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="diff-description text-sm sm:text-base mb-3 sm:mb-4 text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="diff-impact inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                      <span className="text-xs font-semibold text-primary">
                        {item.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

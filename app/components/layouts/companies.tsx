"use client";

import React, { useEffect, useRef } from "react";
import {
  Apple,
  Github,
  Twitter,
  Dribbble,
  Figma,
  Slack,
  Linkedin,
  Chrome,
  Cpu,
  Code2,
} from "lucide-react";

const icons = [
  { Icon: Apple, name: "Apple" },
  { Icon: Github, name: "GitHub" },
  { Icon: Twitter, name: "Twitter" },
  { Icon: Dribbble, name: "Dribbble" },
  { Icon: Figma, name: "Figma" },
  { Icon: Slack, name: "Slack" },
  { Icon: Linkedin, name: "LinkedIn" },
  { Icon: Chrome, name: "Chrome" },
  { Icon: Cpu, name: "Processing" },
  { Icon: Code2, name: "Development" },
];

const Companies: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const clone = marquee.cloneNode(true) as HTMLDivElement;
    marquee.parentElement?.appendChild(clone);

    let animationFrame: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      const resetPoint = -marquee.offsetWidth;

      if (position <= resetPoint) {
        position = 0;
      }

      if (marquee.parentElement) {
        marquee.parentElement.style.transform = `translateX(${position}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section className="w-full overflow-hidden py-32">
      <div className="max-w-[85rem] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-3">
            Trusted By Industry Leaders
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Powering Innovation
          </h2>
        </div>

        <div
          className="relative border-y bg-card shadow-sm"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 pointer-events-none" />

          <div className="relative overflow-hidden py-12">
            <div className="flex" style={{ width: "fit-content" }}>
              <div ref={marqueeRef} className="flex items-center gap-20 pr-20">
                {icons.map((item, i) => (
                  <div
                    key={i}
                    className="group relative flex-shrink-0 flex flex-col items-center justify-center gap-4 px-8"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-muted rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      <div className="relative bg-card rounded-2xl p-6 border shadow-sm group-hover:shadow-xl group-hover:border-foreground/20 transition-all duration-500 group-hover:scale-110">
                        <item.Icon
                          size={40}
                          strokeWidth={1.5}
                          className="text-foreground/70 group-hover:text-foreground transition-colors duration-500"
                        />
                      </div>

                      <div className="absolute -inset-4 border border-border rounded-3xl opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500" />
                    </div>

                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground tracking-wider uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
         
      </div>
    </section>
  );
};

export default Companies;

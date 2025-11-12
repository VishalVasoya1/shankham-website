'use client'

import React, { useEffect, useRef } from "react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const Testimonials: React.FC = () => {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const centerColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  const testimonials = {
    left: [
      {
        name: "Rohit Sharma",
        role: "Founder, PlayMango Studios",
        text: "They completely nailed our cricket game's AI engine — the bots actually feel human now! Our players loved the improvement instantly.",
        rating: 5,
      },
      {
        name: "Neha Patel",
        role: "Product Manager, KriyaTech",
        text: "Their mobile app team is outstanding. Everything from UI to backend sync was smooth and fast. Our launch went without a single hiccup.",
        rating: 5,
      },
      {
        name: "Arjun Mehta",
        role: "CTO, EduSphere",
        text: "We needed a lightweight AI model for pronunciation detection, and they delivered exactly that. Excellent communication and execution.",
        rating: 5,
      },
      {
        name: "Priya Nair",
        role: "Marketing Head, GroBuddy",
        text: "Their creative direction and attention to micro-interactions really elevated our brand app. The results were visible within weeks.",
        rating: 5,
      },
    ],
    center: [
      {
        name: "Ritesh Agarwal",
        role: "CEO, FoodWings",
        text: "These folks move fast and think ahead. The AI recommendation engine they built for us increased daily orders by over 30%.",
        rating: 5,
      },
      {
        name: "Sana Khan",
        role: "Design Lead, Innovent Labs",
        text: "Loved how they blend design and tech — our mobile app looks premium and performs beautifully. Feels like working with a true partner.",
        rating: 5,
      },
      {
        name: "Aditya Verma",
        role: "Game Producer, Orbit Games",
        text: "The Unity setup and performance optimization were top-notch. Smooth gameplay and zero lag, even on budget phones!",
        rating: 5,
      },
      {
        name: "Kavita Deshmukh",
        role: "Director, MindFlow AI",
        text: "We came to them with a half-baked idea — they turned it into a fully functional MVP in under a month. Highly dependable team.",
        rating: 5,
      },
    ],
    right: [
      {
        name: "Aman Gupta",
        role: "Co-founder, FinGrow",
        text: "Their approach to data visualization and analytics dashboards is clean, insightful, and scalable. Exactly what we needed for investors.",
        rating: 5,
      },
      {
        name: "Sneha Reddy",
        role: "Marketing Strategist, HelloCart",
        text: "From concept to delivery, they handled everything with clarity. We saw immediate growth in app engagement post-launch.",
        rating: 5,
      },
      {
        name: "Karan Malhotra",
        role: "Founder, NextWave Games",
        text: "Top-tier gaming developers. They handled multiplayer sync, backend logic, and visuals flawlessly. Would collaborate again any day.",
        rating: 5,
      },
      {
        name: "Anjali Singh",
        role: "Operations Head, SkillNova",
        text: "Their AI-driven recommendation module really changed how our users discover courses. Amazing work and very approachable team.",
        rating: 5,
      },
    ],
  };

  useEffect(() => {
    const cleanupFunctions: Array<() => void> = [];

    const animateColumn = (
      ref: React.RefObject<HTMLDivElement | null>,
      direction: "up" | "down"
    ) => {
      if (!ref.current) return;

      const column = ref.current;
      const items = Array.from(column.children) as HTMLElement[];

      if (items.length === 0) return;

      // Duplicate items for seamless loop
      items.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        column.appendChild(clone);
      });

      const firstItemHeight = items[0].offsetHeight + 24; // height + gap
      const totalScrollDistance = firstItemHeight * items.length;
      const speed = 30; // pixels per second

      let animationId: number;
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        const progress = (elapsed * speed) / 1000;
        let offset: number;

        if (direction === "down") {
          offset = -(progress % totalScrollDistance);
        } else {
          offset = (progress % totalScrollDistance) - totalScrollDistance;
        }

        column.style.transform = `translateY(${offset}px)`;
        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);

      cleanupFunctions.push(() => {
        if (animationId) cancelAnimationFrame(animationId);
      });
    };

    // Wait for layout to settle before starting animations
    const timer = setTimeout(() => {
      animateColumn(leftColumnRef, "up");
      animateColumn(centerColumnRef, "down");
      animateColumn(rightColumnRef, "up");
    }, 100);

    return () => {
      clearTimeout(timer);
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
    <div className="border rounded-2xl p-8 backdrop-blur-sm hover:border-foreground/20 transition-colors duration-300">
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="text-base leading-relaxed mb-8 text-muted-foreground">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-sm font-medium">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <div className="font-semibold text-sm">{testimonial.name}</div>
          <div className="text-xs text-muted-foreground">
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-[85rem] py-20 overflow-hidden">
      <div className="mb-16 px-6">
        <div className="flex justify-end items-center gap-4 mb-3">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                What our clients say
              </p>
              <span className="h-px w-12 bg-foreground/20"></span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-center">
              Testimonials
            </h2>
          </div>
        </div>
      </div>

      <div className="relative px-6">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[800px] overflow-hidden">
          {/* Left Column - Scrolling Up */}
          <div ref={leftColumnRef} className="flex flex-col gap-6" style={{ willChange: 'transform' }}>
            {testimonials.left.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          {/* Center Column - Scrolling Down */}
          <div ref={centerColumnRef} className="flex flex-col gap-6 md:mt-12" style={{ willChange: 'transform' }}>
            {testimonials.center.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          {/* Right Column - Scrolling Up */}
          <div ref={rightColumnRef} className="flex flex-col gap-6" style={{ willChange: 'transform' }}>
            {testimonials.right.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

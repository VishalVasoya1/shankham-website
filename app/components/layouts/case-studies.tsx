"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  X,
  Calendar,
  Users,
  ExternalLink,
  Github,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  year: string;
  duration: string;
  team: string;
  fullDescription: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  techStack: string[];
  github: string;
  demo: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "AI Opponent Engine for Mobile Game",
    description:
      "Developed a reinforcement-learning based opponent AI for a real-time multiplayer cricket game. The model adapts to player behavior, increasing engagement and challenge over time.",
    metric: "5x",
    metricLabel: "longer play sessions",
    tags: ["Gaming", "AI/ML", "Unity"],
    year: "2024",
    duration: "6 months",
    team: "3 Engineers, 1 ML Researcher",
    fullDescription:
      "Built an advanced AI opponent system using reinforcement learning that dynamically adapts to player skill levels and behaviors. The system analyzes playing patterns in real-time and adjusts difficulty to maintain optimal engagement, resulting in significantly longer play sessions and higher retention rates.",
    challenges: [
      "Balancing AI difficulty to avoid frustration while maintaining challenge",
      "Processing real-time player behavior with minimal latency",
      "Training models that work across different skill levels",
      "Integrating ML models efficiently within Unity's game loop",
    ],
    solutions: [
      "Implemented adaptive difficulty system using Q-learning algorithms",
      "Optimized inference pipeline to run at 60+ FPS on mobile devices",
      "Created tiered model system for different player skill brackets",
      "Used TensorFlow Lite for efficient on-device inference",
    ],
    results: [
      "5x increase in average play session duration",
      "42% improvement in player retention after 7 days",
      "65% of players reported AI felt 'fair and challenging'",
      "Successfully deployed to 500K+ active players",
    ],
    techStack: [
      "Unity",
      "TensorFlow",
      "Python",
      "C#",
      "ML-Agents",
      "TensorFlow Lite",
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Local Business Super App",
    description:
      "Built a Flutter-based mobile app combining food delivery, digital payments, and loyalty programs for small businesses. Integrated Firebase for real-time order tracking and analytics dashboard for merchants.",
    metric: "40K+",
    metricLabel: "active users",
    tags: ["Mobile", "Flutter", "Firebase"],
    year: "2024",
    duration: "10 months",
    team: "4 Developers, 2 Designers, 1 PM",
    fullDescription:
      "Developed a comprehensive super app platform that empowers local businesses with digital tools for food delivery, payment processing, and customer loyalty management. The app features real-time order tracking, merchant analytics dashboards, and seamless payment integration.",
    challenges: [
      "Coordinating multiple services (delivery, payments, loyalty) in one app",
      "Ensuring real-time synchronization across customer and merchant apps",
      "Integrating with various payment gateways and delivery services",
      "Scaling infrastructure to handle peak demand hours",
    ],
    solutions: [
      "Built modular architecture with Flutter for code reusability",
      "Implemented Firebase Realtime Database for live order updates",
      "Created unified payment gateway abstraction layer",
      "Used Cloud Functions for serverless backend processing",
    ],
    results: [
      "40K+ active users across 150+ partnered businesses",
      "98.5% uptime during peak hours",
      "Average order fulfillment time reduced by 30%",
      "Merchants report 45% increase in repeat customers",
    ],
    techStack: [
      "Flutter",
      "Firebase",
      "Node.js",
      "Stripe API",
      "Google Maps API",
      "Cloud Functions",
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Voice Recognition Model for Education",
    description:
      "Created a lightweight speech recognition model to assess pronunciation accuracy for English learners. Deployed using TensorFlow Lite with a Node.js backend for scoring.",
    metric: "92%",
    metricLabel: "accuracy rate",
    tags: ["AI/ML", "TensorFlow", "Node.js"],
    year: "2023",
    duration: "8 months",
    team: "2 ML Engineers, 1 Backend Developer, 1 Linguist",
    fullDescription:
      "Developed an AI-powered pronunciation assessment system specifically designed for English language learners. The model analyzes speech patterns, provides detailed feedback, and tracks improvement over time, making it an invaluable tool for educational institutions.",
    challenges: [
      "Handling diverse accents and pronunciation variations",
      "Creating accurate scoring system for subtle pronunciation differences",
      "Minimizing model size for mobile deployment",
      "Ensuring low-latency feedback for interactive learning",
    ],
    solutions: [
      "Trained custom acoustic models on diverse accent datasets",
      "Developed phoneme-level analysis for granular feedback",
      "Quantized model to 5MB for mobile deployment",
      "Implemented edge computing for real-time processing",
    ],
    results: [
      "92% accuracy rate across 15+ accent types",
      "Used by 25,000+ students in 100+ schools",
      "Students show 60% faster pronunciation improvement",
      "Average response time under 200ms",
    ],
    techStack: [
      "TensorFlow",
      "Python",
      "Node.js",
      "TensorFlow Lite",
      "FastAPI",
      "PostgreSQL",
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Immersive AR Learning Game",
    description:
      "Designed an AR-based puzzle game that teaches physics through interactive simulations. Used Unity AR Foundation with custom-built object physics and gamified levels.",
    metric: "120K+",
    metricLabel: "downloads",
    tags: ["AR/VR", "Unity", "Education"],
    year: "2024",
    duration: "12 months",
    team: "5 Developers, 2 Game Designers, 2 Educators",
    fullDescription:
      "Created an innovative augmented reality game that transforms physics education into an engaging, hands-on experience. Players solve puzzles by manipulating virtual objects in their real environment, learning fundamental physics concepts through experimentation.",
    challenges: [
      "Making complex physics concepts accessible and fun",
      "Ensuring accurate physics simulations in AR environment",
      "Optimizing performance across various mobile devices",
      "Creating intuitive AR interactions for education",
    ],
    solutions: [
      "Collaborated with educators to design pedagogically sound puzzles",
      "Implemented custom physics engine optimized for AR",
      "Used adaptive rendering based on device capabilities",
      "Designed gesture-based controls with extensive user testing",
    ],
    results: [
      "120K+ downloads in first 6 months",
      "4.7★ average rating on app stores",
      "85% of students report better understanding of physics",
      "Adopted by 200+ schools as supplementary material",
    ],
    techStack: ["Unity", "AR Foundation", "C#", "ARCore", "ARKit", "Photon"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const CaseStudies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !cardsContainerRef.current ||
      !pinWrapperRef.current ||
      !headerRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const cardsWrapper = cardsContainerRef.current;
      const totalWidth = cardsWrapper?.scrollWidth ?? 0;
      const viewportWidth = pinWrapperRef?.current?.offsetWidth ?? 0;

      const isMobile = window.innerWidth < 768;
      const extraOffset = isMobile ? 50 : 70;
      const maxScroll = totalWidth - viewportWidth + extraOffset;

      ScrollTrigger.create({
        trigger: pinWrapperRef.current,
        start: "top top",
        end: () => `+=${maxScroll}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          gsap.set(cardsWrapper, {
            x: -self.progress * maxScroll,
          });

          gsap.set(headerRef.current, {
            opacity: 1 - self.progress * 2,
            y: -self.progress * 50,
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative mx-auto max-w-[85rem] py-20"
        id="case-studies"
      >
        <div
          ref={pinWrapperRef}
          className="relative overflow-hidden min-h-screen flex items-center"
        >
          <div className="w-full overflow-hidden px-6">
            {/* Header */}
            <div ref={headerRef} className="mb-12 px-6">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-foreground/20"></div>
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                  Featured projects
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                Case Studies
              </h2>
            </div>

            {/* Horizontal Cards */}
            <div ref={cardsContainerRef} className="flex gap-8 pr-12">
              {caseStudies.map((study, index) => {
                return (
                  <div
                    key={index}
                    className="group flex-shrink-0 w-full max-w-3xl"
                  >
                    <div className="relative h-[34rem] rounded-3xl overflow-hidden border bg-background shadow-sm hover:shadow-lg transition-all duration-700 ease-out">
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <div className="absolute top-6 right-6 w-16 h-16 border-t border-r rounded-tr-2xl"></div>
                      </div>

                      <div className="relative h-full flex flex-col justify-between p-10 md:p-12">
                        {/* Top Section */}
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.25em]">
                              Case {String(index + 1).padStart(2, "0")}
                            </div>
                            <div className="text-[10px] font-medium text-muted-foreground/50 tracking-[0.2em]">
                              {String(index + 1).padStart(2, "0")} /{" "}
                              {String(caseStudies.length).padStart(2, "0")}
                            </div>
                          </div>

                          <div className="space-y-4 pt-2">
                            <h3 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight">
                              {study.title}
                            </h3>
                            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-xl font-light">
                              {study.description}
                            </p>
                          </div>
                        </div>

                        {/* Middle Section - Metric */}
                        <div className="relative py-8">
                          <div className="absolute left-0 right-0 top-0 h-px bg-border"></div>
                          <div className="absolute left-0 right-0 bottom-0 h-px bg-border"></div>

                          <div className="flex items-end gap-4">
                            <div className="text-7xl md:text-8xl font-bold tracking-tighter leading-none">
                              {study.metric}
                            </div>
                            <div className="text-sm text-muted-foreground font-medium mb-3 tracking-wide">
                              {study.metricLabel}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="space-y-6">
                          <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 text-[11px] font-medium border rounded-full tracking-wide hover:bg-foreground/5 transition-colors duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={() => setSelectedCase(study)}
                            className="group/btn inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                          >
                            <span className="relative tracking-wide">
                              Read Full Case Study
                              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 ease-out"></span>
                            </span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover/btn:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-card border shadow-lg rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scrollable Content */}
            <div className="overflow-y-auto overscroll-contain">
              <div className="p-6 md:p-10 space-y-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                      {selectedCase.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedCase.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium border rounded-full tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="p-2 hover:bg-accent rounded-lg transition-colors flex-shrink-0"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedCase.year}</span>
                  </div>
                  <span className="text-muted-foreground/40">•</span>
                  <span>{selectedCase.duration}</span>
                  <span className="text-muted-foreground/40">•</span>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{selectedCase.team}</span>
                  </div>
                </div>

                {/* Key Metric */}
                <div className="p-6 md:p-8 border rounded-xl bg-muted/50">
                  <div className="flex items-end gap-3">
                    <div className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">
                      {selectedCase.metric}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium mb-2 tracking-wide">
                      {selectedCase.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {selectedCase.fullDescription}
                  </p>
                </div>

                {/* Challenges */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Challenges
                  </h3>
                  <div className="space-y-2">
                    {selectedCase.challenges.map((challenge, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 border rounded-lg bg-card hover:bg-accent/50 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {challenge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Solutions
                  </h3>
                  <div className="space-y-2">
                    {selectedCase.solutions.map((solution, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 border rounded-lg bg-card hover:bg-accent/50 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {solution}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Results & Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedCase.results.map((result, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 border rounded-lg bg-card hover:bg-accent/50 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm border rounded-full bg-card"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={selectedCase.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border font-medium text-sm transition-colors hover:bg-accent"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={selectedCase.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-opacity hover:opacity-90"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudies;

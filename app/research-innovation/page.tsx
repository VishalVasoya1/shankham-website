"use client";
import React from "react";
import {
  Lightbulb,
  Zap,
  Shield,
  Code,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  BookOpen,
  FlaskConical,
  Microscope,
  Atom,
  LineChart,
  Rocket,
} from "lucide-react";

export default function ResearchInnovation() {
  const features = [
    "Applied Research & Development",
    "Technology Prototyping",
    "Innovation Strategy & Consulting",
    "Patent & IP Development",
    "Feasibility Studies",
    "Proof of Concept Development",
    "Research Paper Publication",
    "Technology Transfer & Commercialization",
  ];

  const stats = [
    { value: "150+", label: "Research Projects" },
    { value: "45", label: "Patents Filed" },
    { value: "98%", label: "Success Rate" },
    { value: "25+", label: "Publications" },
  ];

  const capabilities = [
    {
      icon: FlaskConical,
      title: "Applied Research",
      description:
        "Cutting-edge research that bridges theory and practice. We transform academic insights into practical, market-ready solutions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Labs",
      description:
        "Dedicated innovation spaces for rapid prototyping and experimentation. Test new ideas quickly with minimal risk.",
    },
    {
      icon: Atom,
      title: "Emerging Technologies",
      description:
        "Expertise in AI, quantum computing, blockchain, and IoT. We help you leverage tomorrow's technologies today.",
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description:
        "Data-driven insights and competitive analysis. Strategic guidance from concept validation to market launch.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Ideation & Validation",
      description:
        "Exploring innovative concepts through research and feasibility analysis. We validate ideas with market research and technical assessment.",
    },
    {
      number: "02",
      title: "Research & Prototyping",
      description:
        "Conducting in-depth research and building functional prototypes. Iterative testing and refinement ensure viability.",
    },
    {
      number: "03",
      title: "Implementation & Scale",
      description:
        "Transforming research into production-ready solutions. Support for commercialization, IP protection, and market entry.",
    },
  ];

  const handleCTAClick = () => {
    console.log("CTA button clicked - start research project flow");
  };



  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b pt-22">
        <div className="max-w-7xl mx-auto px-6 lg:px-8  relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center justify-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                <div>Research</div>
                <div className="text-foreground">& Innovation</div>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Drive breakthrough innovations that transform industries. We
                conduct cutting-edge research and develop pioneering solutions
                that give you a competitive advantage.
              </p>

              <button
                onClick={handleCTAClick}
                className="px-7 py-3 bg-foreground text-background font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/research-innovation.png"
                alt="Research Innovation"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold tracking-tight mb-12">
            What's Included
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium leading-snug ">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="cta-content rounded-xl bg-muted p-12 lg:p-16 text-center border">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Ready to Innovate?
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's explore breakthrough ideas and turn cutting-edge research
              into market-ready innovations. Get a free consultation today.
            </p>

            <button
              onClick={handleCTAClick}
              className="cta-button inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

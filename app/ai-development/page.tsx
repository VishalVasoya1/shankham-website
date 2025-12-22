"use client";
import React from "react";
import {
  Brain,
  Zap,
  Shield,
  Code,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Network,
  Cpu,
  TrendingUp,
  Database,
  Target,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AIDevelopment() {
  const features = [
    "Custom Machine Learning Models",
    "Natural Language Processing (NLP)",
    "Computer Vision Solutions",
    "Predictive Analytics & Forecasting",
    "AI Integration & Deployment",
    "Model Training & Fine-tuning",
    "Ongoing Model Optimization",
    "Data Pipeline Architecture",
  ];

  const router = useRouter()
   
  const handleCTAClick = () => {
    router.push("/contact")
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b pt-22">
        <div className="max-w-7xl mx-auto px-6 lg:px-8  relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center justify-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                <div>AI/ML</div>
                <div className="text-foreground">Solutions</div>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Harness the power of artificial intelligence to transform your
                business. We build intelligent systems that learn, adapt, and
                deliver measurable results.
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
                src="/ai-development.png"
                alt="AI/ML Solution"
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
              Ready to Build Your AI Solution?
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's discuss your AI project and unlock the potential of machine
              learning for your business. Get a free consultation today.
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
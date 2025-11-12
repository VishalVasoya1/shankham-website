"use client";
import React from "react";
import {
  Smartphone,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Layers,
} from "lucide-react";

export default function MobileAppDevelopment() {
  const features = [
    "Native iOS & Android Development",
    "Cross-Platform Solutions (React Native, Flutter)",
    "Intuitive UI/UX Design",
    "Cloud Integration & APIs",
    "Performance Optimization",
    "App Store Deployment",
    "Ongoing Maintenance & Support",
    "Security & Data Protection",
  ];

  const stats = [
    { value: "100", label: "Apps Delivered" },
    { value: "50", label: "Total Downloads" },
    { value: "98", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ];

  const capabilities = [
    {
      icon: Smartphone,
      title: "Native Development",
      description:
        "Build powerful native apps using Swift for iOS and Kotlin for Android. Full platform access and optimal performance.",
    },
    {
      icon: Layers,
      title: "Cross-Platform Apps",
      description:
        "Leverage React Native and Flutter to build once and deploy everywhere. Maximum efficiency without compromising quality.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Industry-standard security practices with encryption, secure authentication, and full GDPR & CCPA compliance.",
    },
    {
      icon: Zap,
      title: "Performance Tuned",
      description:
        "Optimized for speed, smooth animations, fast load times, and minimal battery consumption. Every detail matters.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "Understanding your vision, target audience, and business goals. We define scope, features, and technical requirements together.",
    },
    {
      number: "02",
      title: "Design & Development",
      description:
        "Stunning interfaces meet robust functionality. We work in agile sprints, keeping you involved at every stage.",
    },
    {
      number: "03",
      title: "Launch & Support",
      description:
        "Seamless app store submissions, smooth deployment, and ongoing support to keep your app running perfectly.",
    },
  ];

  const handleCTAClick = () => {
    console.log("CTA button clicked - start project flow");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b pt-22">
        <div className="max-w-7xl mx-auto px-6 lg:px-8  relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center justify-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                <div>Mobile App</div>
                <div className="text-foreground">Development</div>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Transform your ideas into powerful mobile applications. We build
                exceptional iOS and Android apps that users love, from concept
                to launch and beyond.
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
                src="/mobile-app-development.png"
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
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Build Your App?
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Let's discuss your project and turn your mobile app idea into
              reality. Get a free consultation and quote today.
            </p>

            <button
              onClick={handleCTAClick}
              className="px-8 py-4 bg-foreground text-background font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
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

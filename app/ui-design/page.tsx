"use client";
import {
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Eye,
  Layers,
  MousePointer,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UIUXDesign() {
  const router = useRouter()
  const features = [
    "User Research & Analysis",
    "Wireframing & Prototyping",
    "Visual Design & Branding",
    "Responsive Web Design",
    "Mobile App Interfaces",
    "Design Systems & Style Guides",
    "Usability Testing",
    "Accessibility Compliance",
  ];

 

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
                <div>UI/UX Design</div>
                <div className="text-foreground">& Strategy</div>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Craft exceptional user experiences that delight and convert. We
                design beautiful, intuitive interfaces that put your users first
                and drive business results.
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
                src="/ui-design.png"
                alt="UI Design"
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
              Ready to Transform Your Design?
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's create a user experience that delights your customers and
              drives growth. Get a free design consultation today.
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
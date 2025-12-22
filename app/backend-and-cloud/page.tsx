"use client";
import {
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackendCloud() {
  const features = [
    "RESTful & GraphQL APIs",
    "Microservices Architecture",
    "Cloud Infrastructure (AWS, Azure, GCP)",
    "Database Design & Optimization",
    "Serverless Computing",
    "DevOps & CI/CD Pipelines",
    "Load Balancing & Scaling",
    "Security & Compliance",
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
                <div>Backend</div>
                <div className="text-foreground">& Cloud</div>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Build powerful, scalable backend systems that drive your
                business. We architect cloud infrastructure and APIs that handle
                millions of users with rock-solid reliability.
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
                src="/backend-cloud-development.png"
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
              Ready to Scale Your Infrastructure?
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's build a robust backend that powers your growth. Get a free
              architecture consultation and discover how we can help.
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
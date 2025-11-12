'use client';
import { useState } from "react";
import { Heart, Users, Lightbulb, Rocket, Globe, Zap, Coffee, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";

const Culture = () => {
  const [hoveredValue, setHoveredValue] = useState<null | number>(null);
             const router = useRouter();

  const values = [
    {
      id: 1,
      title: "People First",
      icon: Heart,
      quote: "Our team isn't just our greatest asset—they're the heart of everything we do.",
      description: "We prioritize work-life balance, mental health, and personal growth. Every team member has a voice and the freedom to shape their own journey.",
      color: "rgb(239, 68, 68)"
    },
    {
      id: 2,
      title: "Collaborate",
      icon: Users,
      quote: "Great ideas emerge when diverse minds come together.",
      description: "We break down silos and encourage cross-functional collaboration. Every project is a team effort, and every voice matters in our decision-making.",
      color: "rgb(59, 130, 246)"
    },
    {
      id: 3,
      title: "Innovate",
      icon: Lightbulb,
      quote: "We don't just follow trends—we create them.",
      description: "We dedicate 20% of our time to experimental projects. Failure is celebrated as learning, and bold ideas are encouraged, not punished.",
      color: "rgb(234, 179, 8)"
    },
    {
      id: 4,
      title: "Move Fast",
      icon: Rocket,
      quote: "Speed is our competitive advantage.",
      description: "We ship early, iterate quickly, and learn faster. Our agile approach means weeks, not months, from idea to execution.",
      color: "rgb(168, 85, 247)"
    },
    {
      id: 5,
      title: "Think Global",
      icon: Globe,
      quote: "Our impact knows no borders.",
      description: "With team members across 15 countries, we embrace diversity and build products for a global audience. Remote-first is our default.",
      color: "rgb(34, 197, 94)"
    },
    {
      id: 6,
      title: "Stay Hungry",
      icon: Zap,
      quote: "Complacency is the enemy of excellence.",
      description: "We're never satisfied with good enough. Continuous learning, improvement, and pushing boundaries is in our DNA.",
      color: "rgb(236, 72, 153)"
    }
  ];

  const perks = [
    { icon: Coffee, title: "Unlimited Coffee", desc: "Premium beans, all day" },
    { icon: Trophy, title: "Learning Budget", desc: "$2K/year for courses" },
    { icon: Rocket, title: "Remote First", desc: "Work from anywhere" },
    { icon: Heart, title: "Health Coverage", desc: "Full medical benefits" }
  ];

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="max-w-[85rem] mx-auto px-6 py-32">
        {/* Header */}
        <div className="mb-32">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium tracking-wider opacity-60">
              WHO WE ARE
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Culture
          </h1>
          <p className="text-lg md:text-xl opacity-60 max-w-2xl">
            We're not just building products—we're building a place where
            creativity thrives, ideas flourish, and people grow.
          </p>
        </div>

        {/* Values Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-32">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isHovered = hoveredValue === index;

            return (
              <div
                key={value.id}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
                className={`relative overflow-hidden border rounded-3xl p-8 transition-all duration-500 cursor-pointer group ${
                  index === 0 ? "md:col-span-2" : ""
                } ${index === 4 ? "lg:col-span-2" : ""}`}
                style={{
                  minHeight: index === 0 || index === 4 ? "320px" : "280px",
                }}
              >
                {/* Gradient Background on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${value.color}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className="inline-flex p-3 border rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                      style={{
                        borderColor: isHovered ? value.color : "currentColor",
                        color: isHovered ? value.color : "currentColor",
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {value.title}
                  </h3>

                  {/* Quote */}
                  <p className="text-lg mb-4 opacity-80 italic">
                    "{value.quote}"
                  </p>

                  {/* Description */}
                  <p className="opacity-60 leading-relaxed mt-auto">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="mb-32">
          <div className="border rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              By the numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">85+</div>
                <div className="text-sm opacity-60 uppercase tracking-wider">
                  Team Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">15</div>
                <div className="text-sm opacity-60 uppercase tracking-wider">
                  Countries
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">4.9</div>
                <div className="text-sm opacity-60 uppercase tracking-wider">
                  Glassdoor Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">92%</div>
                <div className="text-sm opacity-60 uppercase tracking-wider">
                  Retention Rate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Life at Company */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Life at Shankham
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large Image */}
            <div className="md:col-span-2 rounded-3xl border overflow-hidden aspect-video bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center">
              <span className="text-sm opacity-40">Team Photo</span>
            </div>
            {/* Small Images */}
            <div className="grid grid-rows-2 gap-4">
              <div className="rounded-3xl border overflow-hidden aspect-video bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center">
                <span className="text-xs opacity-40">Office Space</span>
              </div>
              <div className="rounded-3xl border overflow-hidden aspect-video bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center">
                <span className="text-xs opacity-40">Team Event</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join our journey
          </h2>
          <p className="text-lg opacity-60 mb-8 max-w-2xl mx-auto">
            We're always looking for talented, passionate people to join our
            team. Check out our open positions.
          </p>
          <button onClick={() => { 
             router.push('/careers')
          }} className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">
              View Open Positions
              <Rocket className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Culture;
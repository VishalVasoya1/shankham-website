  'use client'
  import  { useState } from "react";
  import {
    Gamepad2,
    Smartphone,
    Server,
    Palette,
    Brain,
    ArrowUpRight,
    Layers,
  } from "lucide-react";

  const Services = () => {
    const [activeService, setActiveService] = useState(0);

    const services = [
      {
        id: 1,
        title: "Game Development",
        icon: Gamepad2,
        description:
          "Immersive gaming experiences with cutting-edge technology",
        capabilities: [
          "Unity & Unreal Engine Development",
          "Cross-platform Mobile & Console Games",
          "Multiplayer Systems & Networking",
          "Game Physics & Optimization",
        ],
        number: "01",
      },
      {
        id: 2,
        title: "App Development",
        icon: Smartphone,
        description: "Native and cross-platform applications that users love",
        capabilities: [
          "iOS & Android Native Development",
          "React Native & Flutter",
          "Progressive Web Apps",
          "App Store Optimization",
        ],
        number: "02",
      },
      {
        id: 3,
        title: "DevOps",
        icon: Server,
        description:
          "Scalable infrastructure and automated deployment pipelines",
        capabilities: [
          "CI/CD Pipeline Architecture",
          "Kubernetes & Docker Orchestration",
          "Cloud Infrastructure (AWS, GCP, Azure)",
          "Monitoring & Performance Optimization",
        ],
        number: "03",
      },
      {
        id: 4,
        title: "UI/UX Design",
        icon: Palette,
        description: "Beautiful interfaces backed by user research and testing",
        capabilities: [
          "User Research & Testing",
          "Interface & Interaction Design",
          "Design Systems & Style Guides",
          "Prototyping & Animation",
        ],
        number: "04",
      },
      {
        id: 5,
        title: "AI/ML",
        icon: Brain,
        description: "Intelligent systems powered by machine learning and AI",
        capabilities: [
          "Computer Vision & NLP",    
          "Predictive Analytics",
          "Deep Learning Models",
          "AI Integration & Deployment",
        ],
        number: "05",
      },
      {
        id: 6,
        title: "Full Stack Development",
        icon: Layers,
        description:
          "Scalable end-to-end web applications from frontend to backend",
        capabilities: [
          "React, Next.js & Modern Frontend Architecture",
          "Node.js, Express & API Development",
          "Database Design (MongoDB, PostgreSQL, SQL)",
          "Authentication, RBAC & System Design",
        ],
        number: "06",
      },
    ];

    const ActiveIcon = services[activeService].icon;

    return (
      <div className="min-h-screen w-full bg-background">
        <div className="max-w-[85rem] mx-auto px-6 py-32">
          {/* Header */}
          <div className="mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium tracking-wider opacity-60">
                WHAT WE DO
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Services
            </h1>
            <p className="text-lg md:text-xl opacity-60 max-w-2xl">
              End-to-end digital solutions from concept to deployment
            </p>
          </div>

          {/* Interactive Services Display */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Service List */}
            <div className="space-y-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService === index;

                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left`}
                  >
                    <div className="flex items-center gap-6 py-6 border-b transition-all duration-500">
                      {/* Number */}
                      <span
                        className={`text-sm font-bold transition-all duration-500 ${
                          isActive ? "text-2xl" : "text-base"
                        }`}
                      >
                        {service.number}
                      </span>

                      {/* Icon */}
                      <div
                        className={`transition-all duration-500 ${
                          isActive ? "scale-110" : "scale-100"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Title */}
                      <div className="flex-1">
                        <h3
                          className={`font-bold transition-all duration-500 ${
                            isActive
                              ? "text-2xl md:text-3xl"
                              : "text-xl md:text-2xl"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      {/* Arrow */}
                      <div
                        className={`transition-all duration-500 ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-4"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Service Details */}
            <div className="lg:sticky lg:top-32">
              <div className="relative">
                {/* Large Icon Background */}
                <div className="absolute -top-10 -right-10 opacity-5 transition-all duration-700">
                  <ActiveIcon className="w-64 h-64" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-8">
                  {/* Description */}
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {services[activeService].title}
                    </h2>
                    <p className="text-xl opacity-60 leading-relaxed">
                      {services[activeService].description}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="space-y-6 pt-8 border-t">
                    <h4 className="text-sm font-bold tracking-wider opacity-60">
                      CAPABILITIES
                    </h4>
                    <div className="space-y-4">
                      {services[activeService].capabilities.map(
                        (capability, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 group"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-current mt-2 opacity-60" />
                            <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                              {capability}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 pt-20 border-t">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-sm opacity-60 uppercase tracking-wider">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-60 uppercase tracking-wider">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">12+</div>
              <div className="text-sm opacity-60 uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
              <div className="text-sm opacity-60 uppercase tracking-wider">
                Core Services
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Services;

"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Gamepad2,
  Smartphone,
  Server,
  Palette,
  Brain,
  Github,
  ExternalLink,
  Calendar,
  Users,
  LucideIcon,
  X,
} from "lucide-react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  year: string;
  fullDescription: string;
  highlights: string[];
  tech: string[];
  team: string;
  duration: string;
  github: string;
  demo: string;
  color: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Neural Vision AI",
      category: "AI/ML",
      description:
        "Computer vision platform for real-time object detection and classification",
      icon: Brain,
      tags: ["TensorFlow", "Python", "Computer Vision"],
      year: "2024",
      fullDescription:
        "Neural Vision AI is a cutting-edge computer vision platform that leverages deep learning for real-time object detection, classification, and tracking. Built with scalability in mind, it processes thousands of video streams simultaneously with sub-100ms latency.",
      highlights: [
        "99.2% accuracy on custom datasets",
        "Real-time processing at 60 FPS",
        "Deployed across 50+ enterprise clients",
        "Handles 10M+ daily predictions",
      ],
      tech: [
        "TensorFlow 2.x",
        "Python",
        "OpenCV",
        "FastAPI",
        "Redis",
        "PostgreSQL",
      ],
      team: "4 Engineers, 2 ML Researchers",
      duration: "8 months",
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-blue-500/10 to-purple-500/10",
    },
    {
      id: 2,
      title: "Nexus Gaming Engine",
      category: "Game Development",
      description:
        "Cross-platform game engine with advanced physics and rendering capabilities",
      icon: Gamepad2,
      tags: ["Unity", "C#", "Multiplayer"],
      year: "2024",
      fullDescription:
        "Nexus is a powerful game engine designed for indie developers and studios. It features a custom physics system, advanced lighting with ray tracing support, and seamless multiplayer networking.",
      highlights: [
        "Cross-platform support (PC, Console, Mobile)",
        "Built-in multiplayer with 100+ concurrent players",
        "Visual scripting + C# API",
        "Asset marketplace integration",
      ],
      tech: [
        "Unity",
        "C#",
        "HLSL",
        "Photon",
        "Mirror Networking",
        "Cinemachine",
      ],
      team: "6 Engineers, 2 Designers",
      duration: "14 months",
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-green-500/10 to-emerald-500/10",
    },
    {
      id: 3,
      title: "CloudScale Infrastructure",
      category: "DevOps",
      description:
        "Automated CI/CD pipeline with Kubernetes orchestration and monitoring",
      icon: Server,
      tags: ["Kubernetes", "Docker", "AWS"],
      year: "2023",
      fullDescription:
        "CloudScale is an enterprise-grade infrastructure automation platform that streamlines deployment, scaling, and monitoring of containerized applications. It reduces deployment time by 85%.",
      highlights: [
        "Zero-downtime deployments",
        "Auto-scaling based on custom metrics",
        "Integrated security scanning",
        "Multi-cloud support (AWS, GCP, Azure)",
      ],
      tech: [
        "Kubernetes",
        "Docker",
        "Terraform",
        "AWS EKS",
        "Prometheus",
        "Grafana",
      ],
      team: "5 DevOps Engineers",
      duration: "6 months",
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-orange-500/10 to-red-500/10",
    },
    {
      id: 4,
      title: "FinFlow Mobile",
      category: "App Development",
      description:
        "Personal finance management app with AI-powered insights and budgeting",
      icon: Smartphone,
      tags: ["React Native", "TypeScript", "Firebase"],
      year: "2024",
      fullDescription:
        "FinFlow revolutionizes personal finance with intelligent budgeting, automated expense tracking, and AI-powered financial insights. The app uses machine learning to predict spending patterns.",
      highlights: [
        "50K+ active users",
        "4.8★ rating on App Store",
        "Bank-level security encryption",
        "AI insights with 92% accuracy",
      ],
      tech: [
        "React Native",
        "TypeScript",
        "Firebase",
        "Plaid API",
        "TensorFlow Lite",
        "Redux",
      ],
      team: "3 Developers, 1 Designer",
      duration: "10 months",
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-cyan-500/10 to-blue-500/10",
    },
    {
      id: 5,
      title: "Design System Pro",
      category: "UI/UX",
      description:
        "Comprehensive design system with 200+ components and accessibility focus",
      icon: Palette,
      tags: ["Figma", "React", "Storybook"],
      year: "2023",
      fullDescription:
        "A meticulously crafted design system that brings consistency and efficiency to product teams. With over 200 components, comprehensive documentation, and WCAG 2.1 AAA compliance.",
      highlights: [
        "200+ production-ready components",
        "WCAG 2.1 AAA compliant",
        "Adopted by 15+ product teams",
        "90% reduction in design-dev handoff time",
      ],
      tech: [
        "Figma",
        "React",
        "TypeScript",
        "Storybook",
        "Tailwind CSS",
        "Radix UI",
      ],
      team: "2 Designers, 3 Developers",
      duration: "12 months",
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-pink-500/10 to-rose-500/10",
    },
    {
      id: 6,
      title: "Quantum Analytics",
      category: "AI/ML",
      description:
        "Predictive analytics platform using machine learning for business intelligence",
      icon: Sparkles,
      tags: ["PyTorch", "FastAPI", "PostgreSQL"],
      year: "2024",
      fullDescription:
        "Quantum Analytics transforms raw business data into actionable insights using advanced machine learning algorithms. It predicts trends, identifies anomalies, and provides real-time recommendations.",
      highlights: [
        "Processes 100M+ data points daily",
        "23% average revenue increase for clients",
        "Real-time anomaly detection",
        "Natural language query interface",
      ],
      tech: [
        "PyTorch",
        "FastAPI",
        "PostgreSQL",
        "Apache Kafka",
        "Redis",
        "React",
      ],
      team: "5 ML Engineers, 2 Data Scientists",
      duration: "9 months",
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-violet-500/10 to-purple-500/10",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="max-w-[85rem] mx-auto px-6 py-32">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium tracking-wider opacity-60">
              SELECTED WORKS
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Projects
          </h1>
          <p className="text-lg md:text-xl opacity-60 max-w-2xl">
            Crafting digital experiences across game development, mobile apps,
            cloud infrastructure, design systems, and artificial intelligence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative cursor-pointer h-full"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg`}
                />

                {/* Card */}
                <div className="relative border border-border rounded-lg p-8 transition-all duration-500 group-hover:border-foreground/20 bg-background/50 backdrop-blur-sm h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-3 border border-border rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground font-light">
                        {project.year}
                      </span>
                      <div className="w-8 h-8 flex items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-foreground">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 mb-6 flex-grow">
                    <div>
                      <h3 className="text-3xl font-light tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                        {project.category}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-light border border-border rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block space-y-8">
            <h2 className={`text-4xl md:text-6xl font-light tracking-tight `}>
              Have a project in mind?
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-foreground rounded-full font-light tracking-wider uppercase text-sm transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Let's work together
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-background border border-border rounded-lg max-w-5xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 md:p-12 space-y-10">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-6">
                  <div className="p-4 border border-border rounded-lg">
                    {(() => {
                      const Icon = selectedProject.icon;
                      return <Icon className="w-8 h-8" />;
                    })()}
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
                      {selectedProject.title}
                    </h2>
                    <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
                      {selectedProject.category}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedProject.year}</span>
                </div>
                <span>•</span>
                <span>{selectedProject.duration}</span>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{selectedProject.team}</span>
                </div>
              </div>

              {/* Overview */}
              <div className="space-y-4">
                <h3 className="text-xl font-light tracking-tight">Overview</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h3 className="text-xl font-light tracking-tight">
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 border border-border rounded-lg"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <span className="text-sm font-light leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h3 className="text-xl font-light tracking-tight">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm font-light border border-border rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border font-light text-sm transition-all hover:bg-muted"
                >
                  <Github className="w-4 h-4" />
                  View Code
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-light text-sm transition-all hover:opacity-90"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

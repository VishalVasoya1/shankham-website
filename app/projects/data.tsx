'use client';

import {
  Brain,
  Gamepad2,
  Server,
  Smartphone,
  Palette,
  Sparkles,
} from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: any;
  tags: string[];
  year: string;
  fullDescription: string;
  highlights: string[];
  tech: string[];
  duration: string;
  color: string;
  images?: string[];
}

export interface CategoryProjects {
  [category: string]: Project[];
}

export const projectsByCategory: CategoryProjects = {
  "AI/ML": [
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
      duration: "8 months",
      color: "from-blue-500/10 to-purple-500/10",
      images: [
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
      ],
    },
    {
      id: 8,
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
      duration: "9 months",
      color: "from-violet-500/10 to-purple-500/10",
    },
  ],
  "Game Development": [
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
      duration: "14 months",
      color: "from-green-500/10 to-emerald-500/10",
    },
  ],
  DevOps: [
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
      duration: "6 months",
      color: "from-orange-500/10 to-red-500/10",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      ],
    },
  ],
  "App Development": [
    {
      id: 4,
      title: "Upifyme",
      category: "App Development",
      description:
        "An intelligent app that uses quizzes, video analysis, and gameplay to guide students in discovering ideal colleges and universities.",
      icon: Smartphone,
      tags: ["Flutter", "Unity", "Firebase", "Branch.io"],
      year: "2025",
      fullDescription:
        "Upifyme is a dynamic cross-platform mobile app built for Android and iOS that personalizes the college discovery journey. By combining quizzes, gameplay, and video-based observations, it generates detailed reports and recommends colleges tailored to each user’s profile. The app integrates deep linking, real-time communication, and analytics to deliver an interactive and data-driven experience.",
      highlights: [
        "Personalized reports via quizzes, gameplay, and video analysis",
        "Seamless deep linking with Branch.io",
        "Real-time socket-based messaging and custom chatbot",
        "Engagement boosted through Firebase Analytics and push notifications",
      ],
      tech: ["Flutter", "Unity", "Firebase", "Branch.io", "Getx", "Socket.io"],
      duration: "12 months",
      color: "from-purple-500/10 to-indigo-500/10",
      images: [
        "https://kartiksonani4216.github.io/portfolio_website/assets/images/project/upifyme.png",
      ],
    },
    {
      id: 5,
      title: "Ace Jackpot",
      category: "App Development",
      description:
        "A casino-inspired mobile game featuring tournaments, leaderboards, and daily rewards for an immersive gaming experience.",
      icon: Smartphone,
      tags: ["Flutter", "Unity", "Stripe", "Getx"],
      year: "2025",
      fullDescription:
        "Ace Jackpot is an engaging casino-based game built for Android and iOS, blending the thrill of gambling with strategy-driven gameplay. Players can compete in tournaments, climb leaderboards, and earn daily rewards while managing their in-game wallet. The game ensures smooth performance through Flutter and Unity integration, offering a premium multi-platform experience.",
      highlights: [
        "Casino-style gameplay with strategic elements",
        "Tournament mode with rewards and leaderboards",
        "Secure wallet integration for in-game currency",
        "Daily rewards system to boost player engagement",
      ],
      tech: ["Flutter", "Unity", "Stripe", "Getx"],
      duration: "8 months",
      color: "from-yellow-500/10 to-orange-500/10",
      images: [
        "https://kartiksonani4216.github.io/portfolio_website/assets/images/project/ace_jackpot.png",
      ],
    },
    {
      id: 6,
      title: "V-Translate",
      category: "App Development",
      description:
        "A smart translation app offering multi-language, offline, and AI-assisted translations with seamless sharing options.",
      icon: Smartphone,
      tags: ["Flutter", "Bloc", "Firebase", "RevenueCat"],
      year: "2025",
      fullDescription:
        "V-Translate is a powerful and user-friendly translation app for Android and iOS that supports speech-to-text, text-to-speech, and AI-generated extended translations. Users can translate content into multiple languages simultaneously, even offline, and easily share results via Twitter or WhatsApp. The app securely stores translation history in Firebase, offering a seamless global communication experience.",
      highlights: [
        "Speech-to-text and text-to-speech using Google APIs",
        "Simultaneous multi-language translation",
        "Offline translation support",
        "AI-assisted extended translations",
        "Translation history stored securely in Firebase",
      ],
      tech: ["Flutter", "Bloc", "Firebase", "RevenueCat", "Google APIs"],
      duration: "9 months",
      color: "from-green-500/10 to-emerald-500/10",
      images: [
        "https://kartiksonani4216.github.io/portfolio_website/assets/images/project/v-translate.png",
      ],
    },
  ],
  "UI/UX": [
    {
      id: 7,
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
      duration: "12 months",
      color: "from-pink-500/10 to-rose-500/10",
      images: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
      ],
    },
  ],
};

// Helper function to get all projects as a flat array (for backward compatibility)
export const getAllProjects = (): Project[] => {
  const allProjects = Object.values(projectsByCategory).flat();
  const uniqueProjects = Array.from(
    new Map(allProjects.map((p) => [p.id, p])).values()
  );
  return uniqueProjects;
};


// Helper function to get all categories
export const getCategories = (): string[] => {
  return Object.keys(projectsByCategory);
};

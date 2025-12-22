"use client";

import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { Logo, TextLogo } from "./logo-icons";

interface Service {
  title: string;
  link: string;
}

export default function Footer() {
  const services: Service[] = [
    {
      title: "Mobile App Development",
      link: "/mobile-app-development",
    },
    {
      title: "Game Development",
      link: "/game-development",
    },
    {
      title: "AI/ML Solutions",
      link: "/ai-development",
    },
    {
      title: "UI/UX Design",
      link: "/ui-design",
    },
    {
      title: "Backend & Cloud",
      link: "/backend-and-cloud",
    },
    {
      title: "Research & Innovation",
      link: "/research-innovation",
    },
  ];
  return (
    <footer className="w-full bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand section */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <TextLogo className="w-auto h-6" />
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Crafting exceptional digital experiences that drive growth and
                inspire innovation.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="group w-10 h-10 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all hover:scale-110"
                >
                  <Twitter className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all hover:scale-110"
                >
                  <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-6 relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary-foreground/50" />
              </h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.link}
                      className="group text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
                    >
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-6 relative inline-block">
                Company
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary-foreground/50" />
              </h3>
              <ul className="space-y-3">
                {["Projects", "Careers", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item.toLowerCase().split(" ").join("-")}
                      className="group text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4 ">
              <h3 className="font-semibold text-lg mb-6 relative inline-block">
                Get in Touch
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary-foreground/50" />
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60 mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:hello@example.com"
                      className="text-primary-foreground hover:underline"
                    >
                      hr@shankham.com{" "}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20 flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60 mb-1">
                      Phone
                    </div>
                    <span className="text-primary-foreground ">
                      +91 9998581613
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60 mb-1">
                      Location
                    </div>
                    <span className="text-primary-foreground">
                      {/* Surat, India */}
                      233, Platinum point sudama chowk opp. CNG Pump. Mota
                      Varachha, Surat, Gujarat.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 py-8">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/60 justify-center text-center">
            <span>
              © {new Date().getFullYear()} Your Brand. All rights reserved.
            </span>
          </div>
          <div className="text-center mt-6 text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
            Made with{" "}
            <Heart className="w-4 h-4 fill-current text-red-400 animate-pulse" />{" "}
            by Team
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const NavSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();
  const homePath = pathName === "/";

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Culture", href: "/culture" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => href === pathName;

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          homePath
            ? isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-sm"
              : "bg-transparent"
            : "bg-white/95 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black">Shankham</span>
            </a>

            {/* Desktop Navigation */}
            <div
              className={`flex items-center gap-8 p-2 px-4 rounded-full transition-colors duration-300 ${
                homePath
                  ? isScrolled
                    ? "bg-gray-100"
                    : "bg-white/80 backdrop-blur-sm"
                  : "bg-gray-100"
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative transition-colors duration-300 text-sm font-medium group"
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="/contact"
              className="flex bg-gray-900 text-white items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm group hover:bg-gray-800"
            >
              <span className="relative z-10">Let's Talk!</span>
              <svg
                className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          homePath
            ? isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-sm"
              : "bg-transparent"
            : "bg-white/95 backdrop-blur-md shadow-sm"
        }`}
      >
        {/* Mobile Header */}
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-black">
            Shankham
          </a>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 flex items-center justify-center transition-all duration-500 z-50"
          >
            <div className="relative w-6 h-6">
              {isOpen ? (
                <X className="absolute inset-0 w-6 h-6" strokeWidth={2.5} />
              ) : (
                <Menu className="absolute inset-0 w-6 h-6" strokeWidth={2.5} />
              )}
            </div>
          </button>
        </div>

        {/* Full Screen Menu */}
        {isOpen && (
          <div className="fixed inset-0 top-16 z-40 bg-white h-screen w-full">
            <div className="h-full w-full pt-8 px-6 pb-20 space-y-8 overflow-y-auto">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block text-3xl font-bold transition-opacity duration-300 ${
                    isActive(link.href) ? "underline" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              {/* CTA Button */}
              <button
                className="w-full mt-8 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-lg"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk!
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavSection;

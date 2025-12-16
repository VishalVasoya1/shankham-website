"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Project,
  projectsByCategory,
  getAllProjects,
  getCategories,
} from "./data";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get all categories with "All" option
  const categories = ["All", ...getCategories()];

  // Get filtered projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? getAllProjects()
      : projectsByCategory[selectedCategory] || [];

  const nextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedProject?.images?.length!
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedProject?.images?.length!) %
          selectedProject?.images?.length!
      );
    }
  };

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

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-foreground text-background"
                  : "bg-transparent border border-border hover:border-foreground/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
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

        {/* Show message if no projects found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 mb-32">
            <p className="text-lg text-muted-foreground">
              No projects found in the {selectedCategory} category.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block space-y-8">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">
              Have a project in mind?
            </h2>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-foreground rounded-full font-light tracking-wider uppercase text-sm transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Let's work together
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
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

              {/* Image Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${
                      currentImageIndex + 1
                    }`}
                    className="w-full h-full object-cover"
                  />

                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Image indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImageIndex
                                ? "bg-foreground w-6"
                                : "bg-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Meta Info */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedProject.year}</span>
                </div>
                <span>•</span>
                <span>{selectedProject.duration}</span>
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
                      className="flex items-center gap-3 p-4 border border-border rounded-lg "
                    >
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

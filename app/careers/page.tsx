"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Clock,
  Briefcase,
  ArrowUpRight,
  Search,
  X,
  Upload,
  Mail,
  User,
  Phone,
  Linkedin,
  Github,
  FileText,
} from "lucide-react";

interface Position {
  id: number;
  title: string;
  department: string;
  type: string;
  experience: string;
  description: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolio: string;
  coverLetter: string;
  resume: File | null;
}

const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(
    null
  );
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    portfolio: "",
    coverLetter: "",
    resume: null,
  });

  const departments: string[] = [
    "All",
    "Engineering",
    "Design",
    "Product",
    "Marketing",
    "Operations",
  ];

  const positions: Position[] = [
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Build scalable web applications using modern frameworks and cloud technologies.",
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Craft beautiful user experiences from concept to execution with cross-functional teams.",
    },
    {
      id: 3,
      title: "Machine Learning Engineer",
      department: "Engineering",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Develop and deploy ML models at scale for our AI-powered products.",
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Drive product strategy and execution for our flagship products.",
    },
  ];

  const filteredPositions = positions.filter((position) => {
    const matchesDepartment =
      selectedDepartment === "All" ||
      position.department === selectedDepartment;
    return matchesDepartment;
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    // Handle form submission here
    alert("Application submitted successfully!");
    setSelectedPosition(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      portfolio: "",
      coverLetter: "",
      resume: null,
    });
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="max-w-[85rem] mx-auto px-6 py-32">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium tracking-wider opacity-60">
              JOIN US
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Careers
          </h1>
          <p className="text-lg md:text-xl opacity-60 max-w-2xl">
            Help us build the future. We're looking for talented people who want
            to make an impact.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 pb-8 border-b">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Department Filter */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 opacity-60" />
                <span className="text-sm font-medium opacity-60">
                  Department
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedDepartment === dept
                        ? "bg-foreground text-background"
                        : "border hover:border-opacity-50"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm opacity-60">
            Showing {filteredPositions.length}{" "}
            {filteredPositions.length === 1 ? "position" : "positions"}
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-4 mb-32">
          {filteredPositions.map((position) => (
            <div
              key={position.id}
              className="group border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-opacity-50"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Left: Job Info */}
                <div className="flex-1 space-y-4">
                  {/* Title & Meta */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:opacity-80 transition-opacity">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm opacity-60">
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="opacity-80 leading-relaxed">
                    {position.description}
                  </p>

                  {/* Experience Badge */}
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full opacity-60">
                      {position.experience}
                    </span>
                  </div>
                </div>

                {/* Right: Apply Button */}
                <div className="md:w-auto">
                  <button
                    onClick={() => setSelectedPosition(position)}
                    className="w-full md:w-auto group/btn flex items-center justify-center gap-2 px-6 py-3 border rounded-full font-medium transition-all duration-300 hover:scale-105"
                  >
                    Apply Now
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* No Results */}
          {filteredPositions.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border mb-6">
                <Search className="w-6 h-6 opacity-40" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No positions found</h3>
              <p className="opacity-60">
                Try adjusting your filters or check back later for new openings.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Application Modal */}
      {selectedPosition && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPosition(null)}
        >
          <div
            className="bg-background border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-10">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Apply for {selectedPosition.title}
                  </h2>
                  <div className="flex items-center gap-3 text-sm opacity-60">
                    <span>{selectedPosition.department}</span>
                    <span>•</span>
                    <span>{selectedPosition.type}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPosition(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Application Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Personal Information
                  </h3>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2 opacity-80">
                      <User className="w-4 h-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 bg-background"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2 opacity-80">
                        <Mail className="w-4 h-4" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 bg-background"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2 opacity-80">
                        <Phone className="w-4 h-4" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 bg-background"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Professional Links</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2 opacity-80">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 bg-background"
                        placeholder="linkedin.com/in/johndoe"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2 opacity-80">
                        <Github className="w-4 h-4" />
                        GitHub Profile
                      </label>
                      <input
                        type="url"
                        name="github"
                        value={formData.github}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 bg-background"
                        placeholder="github.com/johndoe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2 opacity-80">
                      <FileText className="w-4 h-4" />
                      Portfolio / Website
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 bg-background"
                      placeholder="johndoe.com"
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2 opacity-80">
                    <Upload className="w-4 h-4" />
                    Resume / CV *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="flex items-center justify-center gap-2 w-full px-4 py-8 border-2 border-dashed rounded-lg cursor-pointer hover:border-foreground/40 transition-colors"
                    >
                      <Upload className="w-5 h-5 opacity-60" />
                      <span className="text-sm opacity-60">
                        {formData.resume
                          ? formData.resume.name
                          : "Click to upload or drag and drop (PDF, DOC, DOCX)"}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2 opacity-80">
                    <FileText className="w-4 h-4" />
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 bg-background resize-none"
                    placeholder="Tell us why you're a great fit for this role..."
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedPosition(null)}
                    className="flex-1 px-6 py-3 border rounded-full font-medium transition-all duration-300 hover:bg-muted"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-foreground text-background rounded-full font-medium transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2"
                  >
                    Submit Application
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;

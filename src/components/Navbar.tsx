import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    "about",
    "skills",
    "projects",
    "experience",
    "certifications",
    "achievements",
    "contact",
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // Intersection Observer for active highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A1628]/80 backdrop-blur-lg border-b border-blue-900/40 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold text-blue-100 cursor-pointer font-grotesk"
        >
          Mikaal<span className="text-blue-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-inter">
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className={`cursor-pointer transition-colors duration-300 ${
                activeSection === section
                  ? "text-blue-400 font-medium"
                  : "text-blue-200 hover:text-blue-400"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1628]/95 backdrop-blur-lg border-t border-blue-900/40">
          <ul className="flex flex-col items-center gap-6 py-6 text-blue-200 font-inter">
            {sections.map((section) => (
              <li
                key={section}
                onClick={() => scrollToSection(section)}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeSection === section
                    ? "text-blue-400 font-medium"
                    : "hover:text-blue-400"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

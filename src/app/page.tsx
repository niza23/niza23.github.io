'use client'
import { useState, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import SkillsNodes from "@/components/sections/SkillsNodes";
import ExperienceGrid from "@/components/sections/ExperienceGrid";
import Projects from "@/components/sections/Projects";
import CredentialsCommunity from "@/components/sections/CredentialsCommunity";

export default function Home() {
  const [activeSection, setActiveSection] = useState("introduction");

  // Smooth scroll handler for the right-side navigation
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#030712] text-gray-100 relative selection:bg-cyanNeon/30 overflow-x-hidden scroll-smooth">
      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
      
      {/* Right-Side Floating Navigation Menu */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 bg-gray-950/80 p-3 rounded-full border border-gray-800 backdrop-blur-md">
        {[
          { id: "introduction", label: "Intro" },
          { id: "skills", label: "Skills" },
          { id: "experience", label: "Experience" },
          { id: "projects", label: "Projects" },
          { id: "achievements", label: "Awards" }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`w-3 h-3 rounded-full transition-all relative group ${activeSection === item.id ? "bg-cyanNeon scale-125 shadow-[0_0_10px_#0ea5e9]" : "bg-gray-600 hover:bg-gray-400"}`}
          >
            <span className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 border border-gray-700 text-[10px] font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-white">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="relative z-10">
        <div id="introduction"><Hero /></div>
        <div id="skills"><SkillsNodes /></div>
        <div id="experience"><ExperienceGrid /></div>
        <div id="projects"><Projects /></div>
        <div id="achievements"><CredentialsCommunity /></div>
      </div>
    </main>
  );
}
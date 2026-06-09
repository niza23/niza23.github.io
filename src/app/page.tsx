'use client'
import { useState, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import ExperienceGrid from "@/components/sections/ExperienceGrid";
import Projects from "@/components/sections/Projects";

export default function Home() {
  const [active, setActive] = useState("home");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <main className="min-h-screen bg-[#0B1120] text-slate-200 relative selection:bg-sky-500/30">
      
      {/* Background Ambience */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Modern Top Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg text-white">Nidhi Zala</span>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors">Experience</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">Projects</button>
          </nav>
          <a href="mailto:nidhizala2307@gmail.com" className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all">
            Contact Me
          </a>
        </div>
      </header>

      {/* Right-Side Tracking Dots (Like the Mockup) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5 items-center">
        {['home', 'experience', 'projects'].map((item) => (
          <button key={item} onClick={() => scrollTo(item)} className="relative group">
            <div className={`w-2.5 h-2.5 rounded-full transition-all ${active === item ? 'bg-sky-400 scale-150 shadow-[0_0_10px_#38bdf8]' : 'bg-slate-600 hover:bg-slate-400'}`} />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-slate-800 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700 capitalize">
              {item}
            </span>
          </button>
        ))}
      </div>

      <div className="pt-16 relative z-10">
        <div id="home"><Hero /></div>
        <div id="experience"><ExperienceGrid /></div>
        <div id="projects" className="min-h-screen flex items-center justify-center text-slate-500 font-mono text-sm border-t border-white/5">
          {/* We will populate Projects here next */}
          [ PROJECTS COMPONENT RENDER ZONE ]
        </div>
      </div>
    </main>
  );
}
'use client'
import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
import InteractiveTerminal from "@/components/ui/InteractiveTerminal";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian relative">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <Hero />
      <Timeline />
      <Projects />
      <div className="py-16 text-center max-w-5xl mx-auto px-4">
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Interactive Systems Core Diagnostics</h3>
        <p className="text-xs text-gray-400 max-w-md mx-auto mb-6">Execute shell directives directly on my cloud engine deployment profile map.</p>
        <InteractiveTerminal />
      </div>
      <footer className="py-12 border-t border-gray-900 text-center text-xs font-mono text-gray-500">
        &copy; 2026 Nidhi Zala // Platform Node Status: ONLINE. All metrics healthy.
      </footer>
    </main>
  );
}
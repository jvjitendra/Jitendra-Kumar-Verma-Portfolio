import React from 'react';
import { ArrowDown, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onExploreWork }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-black">
      
      {/* Subtle Warm Amber / Titanium Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[#E5C378]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Very faint architectural background grid */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#E5C378 1px, transparent 1px), linear-gradient(90deg, #E5C378 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative Headline */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status & Identity Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#E5C378]">
              <span className="w-2 h-2 rounded-full bg-[#E5C378] animate-pulse" />
              <span>Full-Stack &amp; Systems Architecture</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">Chandigarh University (LEET CSE)</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Architecting deterministic systems &amp; intelligent software.
            </h1>

            {/* Narrative Body */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
              I’m <span className="text-white font-semibold">Jitendra Kumar Verma</span>. A software engineer and product builder focused on developer infrastructure, AST-bounded code workflows, and high-concurrency systems.
            </p>

            {/* Engineering Axioms - Frosted Glass Pods */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div className="glass-card p-4 rounded-xl flex flex-col gap-1">
                <span className="text-[#E5C378] font-bold text-sm">Deterministic</span>
                <span className="text-[11px] text-zinc-400">AST parsing &amp; human-in-the-loop review</span>
              </div>
              <div className="glass-card p-4 rounded-xl flex flex-col gap-1">
                <span className="text-zinc-200 font-bold text-sm">Full-Stack</span>
                <span className="text-[11px] text-zinc-400">FastAPI, React, SQL &amp; Cloud</span>
              </div>
              <div className="glass-card p-4 rounded-xl flex flex-col gap-1 col-span-2 sm:col-span-1">
                <span className="text-emerald-400 font-bold text-sm">Product-Led</span>
                <span className="text-[11px] text-zinc-400">Semester 3 to 8 Capstones deployed</span>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold"
              >
                <span>Explore Featured Systems</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#case-studies"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium"
              >
                <span>Read Architecture Specs</span>
              </a>
            </div>

            {/* Terminal Meta status */}
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-zinc-500">
              <Terminal className="w-3.5 h-3.5 text-[#E5C378]" />
              <span>Final Year 8th Semester Capstone: DevPilot Autonomous Pipeline</span>
            </div>
          </div>

          {/* Right Column: Genuine Uncropped Portrait with Pure Glass Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Outer Subtle Golden Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#E5C378]/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-700" />
              
              {/* Image Container Card */}
              <div className="relative rounded-2xl glass-panel overflow-hidden shadow-2xl">
                
                {/* Natural Image Container - Zero Head/Body Cropping */}
                <div className="relative w-full bg-black flex items-center justify-center p-2.5">
                  <img
                    src={PERSONAL_INFO.photos.hero}
                    alt="Jitendra Kumar Verma - Software Engineer & Product Builder"
                    className="w-full h-auto max-h-[470px] object-contain rounded-xl filter contrast-[1.02] group-hover:scale-[1.01] transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                {/* Overlaid Context Footer */}
                <div className="p-4 border-t border-white/[0.06] bg-white/[0.02] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Jitendra Kumar Verma</p>
                    <p className="text-[11px] font-mono text-[#E5C378]">B.E. CSE (LEET) • Chandigarh University</p>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-[10px] font-mono text-zinc-300">
                    Cohort 2026
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowDown, Mail, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-black">
      
      {/* Subtle Warm Amber / Titanium Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-[#E5C378]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clear High-Contrast Headline & Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Quick Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-[11px] font-mono text-[#E5C378] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Computer Science Student • Software &amp; Full-Stack Builder</span>
            </div>

            {/* Frost White Heading - scaled down one level */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.14]">
              Architecting deterministic systems &amp; intelligent tools.
            </h1>

            {/* High-Contrast Passionate Student & Engineering Overview - full width & justified */}
            <p className="text-sm sm:text-base text-[#E2E8F0] w-full font-normal leading-relaxed text-justify">
              Hi, I’m <span className="text-white font-semibold">Jitendra Kumar Verma</span>, a Computer Science &amp; Engineering student at Chandigarh University (2023–2026). Deeply passionate about software engineering, scalable backend systems, and full-stack development. I build developer tools, AST code engines, and responsive web applications using <span className="text-white font-medium">Python, FastAPI, React, TypeScript, and SQL</span>. Driven by clean architecture, end-to-end product ownership, and continuous technical curiosity.
            </p>

            {/* Core Axioms */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 font-mono text-xs">
              <div className="glass-card p-3 rounded-xl flex flex-col gap-0.5">
                <span className="text-[#E5C378] font-bold text-xs sm:text-[13px]">Deterministic</span>
                <span className="text-[10px] text-zinc-300">AST parsing &amp; safety gates</span>
              </div>
              <div className="glass-card p-3 rounded-xl flex flex-col gap-0.5">
                <span className="text-white font-bold text-xs sm:text-[13px]">Full-Stack</span>
                <span className="text-[10px] text-zinc-300">FastAPI, React &amp; Cloud</span>
              </div>
              <div className="glass-card p-3 rounded-xl flex flex-col gap-0.5 col-span-2 sm:col-span-1">
                <span className="text-emerald-400 font-bold text-xs sm:text-[13px]">Verified</span>
                <span className="text-[10px] text-zinc-300">3 live systems deployed</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-lg"
              >
                <span>Explore Featured Systems</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={onOpenContact}
                className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Quick Profile Row */}
            <div className="pt-1 flex items-center gap-3.5 text-[11px] font-mono text-zinc-400">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-white" />
                <span>GitHub</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-400">Chandigarh University '26</span>
            </div>

          </div>

          {/* Right Column: Full Formal Portrait (100% visible, scaled down one level) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm sm:max-w-[390px] xl:max-w-[430px] w-full">
              
              {/* Outer Golden Ambient Halo */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#E5C378]/25 via-transparent to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-700" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl glass-panel overflow-hidden shadow-2xl p-2.5 bg-black">
                <div className="relative rounded-xl overflow-hidden bg-zinc-950 w-full flex items-center justify-center">
                  <img
                    src={PERSONAL_INFO.photos.hero}
                    alt="Jitendra Kumar Verma - Formal Portrait"
                    className="w-full h-auto object-contain rounded-xl filter contrast-[1.02] group-hover:scale-[1.01] transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                <div className="p-3 pt-2.5 border-t border-white/[0.08] mt-2 bg-white/[0.01] flex items-center justify-between text-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-white text-xs sm:text-sm">Jitendra Kumar Verma</p>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#E5C378]/15 text-[#E5C378] border border-[#E5C378]/35">
                        LEET Student
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-[#E5C378] mt-0.5">B.E. Computer Science &amp; Engineering</p>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-[9px] font-mono text-zinc-300 block">
                      Chandigarh University
                    </span>
                    <span className="text-[8px] font-mono text-zinc-500 mt-0.5 block">
                      2023 — 2026
                    </span>
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

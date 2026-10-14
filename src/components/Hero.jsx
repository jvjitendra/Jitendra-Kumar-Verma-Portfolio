import React from 'react';
import { ArrowDown, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-black">
      
      {/* Subtle Warm Amber Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[340px] bg-[#E5C378]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clear, High-Signal Headline */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Quick Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#E5C378]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Software Engineer &amp; Product Builder</span>
            </div>

            {/* Human & Punchy Headline (No AI essays) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building tools and systems developers love to use.
            </h1>

            {/* Direct 2-line bio */}
            <p className="text-lg text-zinc-300 max-w-xl font-normal leading-relaxed">
              Hi, I’m <span className="text-white font-semibold">Jitendra Kumar Verma</span>. I engineer deterministic developer workspaces, full-stack web applications, and fast backend services using <span className="text-white">Python, FastAPI, and React</span>.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold shadow-lg"
              >
                <span>View Top Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium"
              >
                <Mail className="w-4 h-4 text-[#E5C378]" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="pt-3 flex items-center gap-4 text-xs font-mono text-zinc-400">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#0A66C2] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-500">Chandigarh University '26</span>
            </div>
          </div>

          {/* Right Column: Sitting Campus Formal Portrait (Uncropped) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer Golden Ambient Halo */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#E5C378]/25 via-transparent to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700" />
              
              {/* Image Frame - Natural uncropped aspect */}
              <div className="relative rounded-2xl glass-panel overflow-hidden shadow-2xl p-2.5 bg-black">
                <div className="rounded-xl overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={PERSONAL_INFO.photos.hero}
                    alt="Jitendra Kumar Verma - Software Engineer"
                    className="w-full h-auto max-h-[490px] object-contain rounded-lg filter contrast-[1.02] group-hover:scale-[1.01] transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                <div className="p-3.5 pt-3 flex items-center justify-between text-xs border-t border-white/[0.06] mt-2">
                  <div>
                    <p className="font-bold text-white">Jitendra Kumar Verma</p>
                    <p className="text-[11px] font-mono text-[#E5C378]">B.E. CSE • Chandigarh University</p>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[10px] font-mono text-zinc-400">
                    2023 — 2026
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

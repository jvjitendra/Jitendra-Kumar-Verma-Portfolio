import React from 'react';
import { ExternalLink, ArrowRight, Layers, Sparkles, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { DETAILED_PROJECTS } from '../data/portfolioData';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.08] bg-black">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header with Zero Dead Space */}
        <div className="mb-16 w-full space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-2.5 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono">
                <Layers className="w-3.5 h-3.5" />
                <span>Flagship Engineering Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Software Systems
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                Five production platforms, developer engines, and distributed APIs built across Semesters 4 to 8.
              </p>
            </div>

            {/* Multi-Badge Live Verification Bar filling horizontal space */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>3 Live Deployed Systems</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-zinc-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>Deterministic AST Pipeline</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-zinc-300 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>End-to-End Test Harness</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Deep Featured Projects */}
        <div className="space-y-16">
          {DETAILED_PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              className={`rounded-2xl glass-panel overflow-hidden transition-all duration-300 shadow-2xl flex flex-col lg:flex-row items-stretch ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Visual Side (Screenshot or Architecture Diagram) */}
              <div className="lg:w-7/12 relative bg-black/95 p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                {proj.featuredImage ? (
                  <div className="relative w-full rounded-xl overflow-hidden border border-white/[0.1] shadow-2xl">
                    <img
                      src={proj.featuredImage}
                      alt={`${proj.title} Screenshot`}
                      className="w-full h-auto object-contain max-h-[380px]"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  /* Architecture Blueprint card for projects without raw screenshots */
                  <div className="w-full h-full min-h-[280px] p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between font-mono text-xs">
                    <div className="flex items-center justify-between text-zinc-400 border-b border-white/[0.06] pb-3">
                      <span className="text-[#E5C378] font-bold">{proj.badge}</span>
                      <span>Verified System Spec</span>
                    </div>

                    <div className="space-y-3 py-4">
                      <p className="text-sm font-sans text-zinc-200">
                        {proj.problem}
                      </p>
                      <div className="p-3 rounded-lg bg-black/80 border border-white/[0.08] text-[11px] text-[#E5C378]">
                        Pipeline: {proj.architecture}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-zinc-500 pt-3 border-t border-white/[0.06]">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Production tested architecture</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Information & Narrative Side */}
              <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white/[0.01]">
                <div className="space-y-4">
                  
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#E5C378]/15 text-[#E5C378] border border-[#E5C378]/30">
                      {proj.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.05] text-zinc-300 border border-white/[0.08]">
                      {proj.timeline}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {proj.title}
                  </h3>

                  <p className="text-xs font-mono text-[#E5C378] font-semibold">
                    {proj.tagline}
                  </p>

                  <p className="text-sm text-[#E2E8F0] leading-relaxed text-justify">
                    {proj.overview}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 pt-1">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <span className="text-[#E5C378] mt-0.5">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {proj.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/[0.04] text-zinc-200 border border-white/[0.08]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-1.5 text-xs px-4 py-2"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {proj.repoUrl && (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center gap-1.5 text-xs px-3.5 py-2"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-white" />
                      <span>Code</span>
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

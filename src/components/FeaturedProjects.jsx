import React from 'react';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { FLAGSHIP_PROJECTS } from '../data/portfolioData';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.06] bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Flagship Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Projects
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-lg">
              Three production systems built from concept to live deployment.
            </p>
          </div>

          <span className="text-xs font-mono text-zinc-500">
            Live demos &amp; code repositories verified
          </span>
        </div>

        {/* 3 Projects - Crisp, visual, punchy */}
        <div className="space-y-16">
          {FLAGSHIP_PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              className={`rounded-2xl glass-panel overflow-hidden transition-all duration-300 shadow-2xl flex flex-col lg:flex-row items-stretch ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Screenshot View */}
              <div className="lg:w-7/12 relative bg-black/90 p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <div className="relative w-full rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl">
                  <img
                    src={proj.featuredImage}
                    alt={`${proj.title} Screenshot`}
                    className="w-full h-auto object-contain max-h-[360px]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Narrative / Spec */}
              <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white/[0.01]">
                <div className="space-y-4">
                  
                  {/* Badges */}
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#E5C378]/15 text-[#E5C378] border border-[#E5C378]/30">
                      {proj.badge}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                      {proj.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {proj.title}
                  </h3>

                  <p className="text-xs font-mono text-[#E5C378]">
                    {proj.tagline}
                  </p>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Highlights */}
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
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-xl"
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
                      className="btn-secondary inline-flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-xl"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
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

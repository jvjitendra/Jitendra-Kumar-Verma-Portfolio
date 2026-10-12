import React from 'react';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function FeaturedProjects({ onSelectCaseStudy }) {
  const featured = PROJECTS_DATA.slice(0, 3);

  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.06] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Flagship Deployments (Semesters 6 — 8)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Software Systems
            </h2>
            <p className="text-base text-zinc-400 max-w-xl">
              Engineered end-to-end: architectural conception, bounded context pipelines, and live deployment on public domains.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>All systems verified and accessible online</span>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-14">
          {featured.map((project, idx) => (
            <div
              key={project.id}
              className={`rounded-2xl glass-panel overflow-hidden transition-all duration-300 shadow-2xl group ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } flex flex-col lg:flex-row items-stretch`}
            >
              {/* Screenshot Preview */}
              <div className="lg:w-7/12 relative overflow-hidden bg-black/90 p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <div className="relative w-full rounded-xl overflow-hidden border border-white/[0.06] shadow-2xl group-hover:scale-[1.01] transition-transform duration-500">
                  <img
                    src={project.featuredImage}
                    alt={`${project.title} Interface Screenshot`}
                    className="w-full h-auto object-contain max-h-[390px]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Information & Narrative Side */}
              <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white/[0.01]">
                <div className="space-y-4">
                  
                  {/* Badges & Semester context */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#E5C378]/15 text-[#E5C378] border border-[#E5C378]/30">
                      {project.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                      {project.semester}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#E5C378] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm font-medium text-[#E5C378] font-mono">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 pt-1">
                    {project.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <span className="text-[#E5C378] mt-0.5">▹</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footers */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-xl"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-xl"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#E5C378] hover:text-[#F0D08A] transition-colors group/btn"
                  >
                    <span>Read Architecture Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

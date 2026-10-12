import React, { useState } from 'react';
import { BookOpen, ExternalLink, ChevronRight, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function TechnicalCaseStudies({ selectedProject, onSelectProject }) {
  const caseStudyList = PROJECTS_DATA.slice(0, 5);
  const active = selectedProject || caseStudyList[0];

  return (
    <section id="case-studies" className="py-24 relative bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Architecture &amp; System Deep Dives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Case Studies
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mt-2 font-normal">
            Detailed engineering specifications, deterministic execution pipelines, trade-offs, and verification models behind each system.
          </p>
        </div>

        {/* Master Container: Project Selector + Case Study Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Tab Selector */}
          <div className="lg:col-span-4 space-y-2">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 px-1">
              Select Architecture Spec:
            </p>
            {caseStudyList.map((item) => {
              const isSelected = active.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectProject(item)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white/[0.06] border border-[#E5C378]/50 shadow-2xl'
                      : 'bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${isSelected ? 'text-[#E5C378]' : 'text-white'}`}>
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-300">
                        {item.semester}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 line-clamp-1">
                      {item.tagline}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#E5C378] translate-x-1' : 'text-zinc-600 group-hover:text-zinc-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Case Study Document */}
          <div className="lg:col-span-8 glass-panel rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
            
            {/* Header / Meta */}
            <div className="border-b border-white/[0.06] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-mono bg-[#E5C378]/15 text-[#E5C378] border border-[#E5C378]/30 font-bold">
                    {active.badge}
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                    {active.semester} • {active.timeline}
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-mono bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                    {active.status}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {active.title}
                </h3>
                <p className="text-sm text-[#E5C378] font-mono mt-1">
                  {active.tagline}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-2.5">
                {active.liveUrl && (
                  <a
                    href={active.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-xl"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {active.repoUrl && (
                  <a
                    href={active.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-xl"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>
                )}
              </div>
            </div>

            {/* If screenshot exists, display uncropped */}
            {active.featuredImage && (
              <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-black/80 p-2">
                <img
                  src={active.featuredImage}
                  alt={`${active.title} Verified Interface`}
                  className="w-full h-auto max-h-[380px] object-contain rounded-lg"
                />
                <div className="p-2.5 bg-black flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Verified production UI snapshot</span>
                  <span className="text-[#E5C378]">Genuine asset</span>
                </div>
              </div>
            )}

            {/* Problem & Motivation */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#E5C378]">
                01. The Problem &amp; Core Motivation
              </h4>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {active.problem}
              </p>
            </div>

            {/* Architectural Design */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#E5C378]">
                02. Architectural Design &amp; Pipeline
              </h4>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {active.architecture}
              </p>

              {/* DevPilot Deterministic 9-Stage Flow */}
              {active.id === 'devpilot' && (
                <div className="mt-4 p-4 rounded-xl bg-black/60 border border-white/[0.06] font-mono text-xs text-zinc-300">
                  <div className="text-[11px] text-[#E5C378] mb-2.5 font-bold">
                    DevPilot Deterministic 9-Stage Pipeline (Semester 8 Capstone):
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-zinc-300">
                      1. AST Context Parse
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-zinc-300">
                      2. Symbol Map Filter
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-zinc-300">
                      3. Implementation Plan
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-zinc-300">
                      4. Sandboxed Patch Gen
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.1] text-zinc-200 font-bold">
                      5. Pytest Harness Gate
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border border-[#E5C378]/40 text-[#E5C378] font-bold">
                      6. Human Review Approval
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Engineering Challenges */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#E5C378]">
                03. Engineering Challenges &amp; Trade-offs
              </h4>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {active.challenges}
              </p>
            </div>

            {/* Outcomes & Metrics */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#E5C378]">
                04. Outcomes &amp; System Validation
              </h4>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm text-white">
                  {active.metrics}
                </p>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="pt-2 border-t border-white/[0.06]">
              <span className="text-xs font-mono text-zinc-500 block mb-2">Technologies Used:</span>
              <div className="flex flex-wrap gap-2">
                {active.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

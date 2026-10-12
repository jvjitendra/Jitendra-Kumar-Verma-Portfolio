import React from 'react';
import { Cpu } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export default function TechnicalSkills() {
  const getBadgeStyle = (level) => {
    switch (level) {
      case 'Extensively Used':
        return 'bg-[#E5C378]/15 text-[#E5C378] border-[#E5C378]/30 font-semibold';
      case 'Project-Specific':
        return 'bg-white/[0.05] text-zinc-300 border-white/[0.08]';
      case 'Foundational / Algorithms':
      case 'Foundational':
        return 'bg-white/[0.02] text-zinc-500 border-transparent';
      default:
        return 'bg-white/[0.03] text-zinc-400 border-transparent';
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineering Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack &amp; Architectural Toolkit
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mt-2 font-normal">
            Organized strictly by verified engineering evidence across implemented software systems.
          </p>

          {/* Legend - Clean frosted badges */}
          <div className="flex flex-wrap items-center gap-3 mt-6 text-xs font-mono text-zinc-500">
            <span>Evidence Tiers:</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5C378]/10 text-[#E5C378] border border-[#E5C378]/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]" /> Extensively Used
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" /> Key Projects
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] text-zinc-500 border border-white/[0.04]">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> Foundational
            </span>
          </div>
        </div>

        {/* Skills Grid - Seamless Frosted Glass, NO WHITE BORDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((group) => (
            <div
              key={group.category}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-6 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="border-b border-white/[0.06] pb-3.5">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    {group.description}
                  </p>
                </div>

                {/* Skill Items - Borderless dark glass pods */}
                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] hover:border-white/[0.1] transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${getBadgeStyle(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Ledger Footnote */}
              <div className="text-[11px] font-mono text-zinc-500 pt-3 border-t border-white/[0.04] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]" />
                <span>Verified in code repository</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

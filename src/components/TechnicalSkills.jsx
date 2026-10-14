import React from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-24 relative bg-black border-t border-white/[0.08]">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Skills &amp; Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tools, Systems &amp; Engineering Stack
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 w-full text-justify">
              Production frameworks, low-level tooling, data modeling, and verified engineering stacks.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>5 Core Technical Domains</span>
          </div>
        </div>

        {/* 5-Category High-Contrast Cards with Hover Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="border-b border-white/[0.08] pb-3">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    {group.description}
                  </p>
                </div>

                {/* Skill Pills - High Contrast White text */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/[0.05] text-white border border-white/[0.1] hover:border-[#E5C378]/50 hover:bg-white/[0.08] hover:scale-105 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Ledger Badge */}
              <div className="text-[11px] font-mono text-zinc-400 pt-3 border-t border-white/[0.06] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>Verified in code repository</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

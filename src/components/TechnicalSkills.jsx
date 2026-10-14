import React from 'react';
import { Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-20 relative bg-black border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Tools &amp; Technologies
          </h2>
          <p className="text-sm text-zinc-400 mt-1 max-w-xl">
            Technologies I use daily to architect and ship software.
          </p>
        </div>

        {/* 4-Column Clean Grid for instant recruiter scan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="glass-panel p-6 rounded-2xl space-y-4"
            >
              <h3 className="text-base font-bold text-white border-b border-white/[0.06] pb-2.5">
                {cat.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] text-zinc-200 border border-white/[0.06] hover:border-[#E5C378]/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

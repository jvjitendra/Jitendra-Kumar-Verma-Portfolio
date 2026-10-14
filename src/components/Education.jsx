import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative border-t border-white/[0.06] bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Academic Background
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Formal engineering foundations and consistent academic performance.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-white">
                    {edu.degree}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#E5C378]/15 text-[#E5C378] border border-[#E5C378]/30">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-sm font-medium text-zinc-300">
                  {edu.school} • <span className="text-zinc-500">{edu.location}</span>
                </p>

                <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed">
                  {edu.note}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 whitespace-nowrap self-start md:self-center">
                <Calendar className="w-3.5 h-3.5 text-[#E5C378]" />
                <span>{edu.period}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

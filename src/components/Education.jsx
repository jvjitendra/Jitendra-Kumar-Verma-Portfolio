import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative border-t border-white/[0.08] bg-black">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigor &amp; LEET Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Campus Background
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 mt-1 w-full font-normal leading-relaxed text-justify">
            Formal technical education, competitive academic standing, and campus milestones.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6"
            >
              {/* Header Row: Left side Degree & School, Right side Year badge */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#E5C378]/20 text-[#E5C378] border border-[#E5C378]/40 shadow-sm">
                      {edu.grade}
                    </span>
                    {edu.leadershipRole && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#E5C378]/15 text-[#E5C378] border border-[#E5C378]/35 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#E5C378]" />
                        <span>{edu.leadershipRole}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-300 font-medium">
                    <span className="text-white font-semibold">{edu.school}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.12] text-xs font-mono text-zinc-200 whitespace-nowrap self-start shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-[#E5C378]" />
                  <span className="font-semibold text-white">{edu.period}</span>
                </div>
              </div>

              {/* Highlights Summary - Full Width & Justified Font */}
              <p className="text-base text-[#E2E8F0] leading-relaxed w-full font-normal text-justify">
                {edu.highlights}
              </p>

              {/* Leadership & Achievement Points - Enlarged Legible Font */}
              {edu.points && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                  {edu.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-3 text-sm text-zinc-200 bg-white/[0.03] hover:bg-white/[0.06] p-3.5 rounded-xl border border-white/[0.08] transition-colors shadow-sm"
                    >
                      <span className="text-[#E5C378] font-bold text-base leading-none mt-0.5 shrink-0">▹</span>
                      <span className="leading-relaxed font-normal">{pt}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Full Width Embedded Campus Photographs (100% width, zero dead space!) */}
              {edu.photo && (
                <div className="pt-6 border-t border-white/[0.08] space-y-4 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#E5C378] tracking-wider uppercase">
                      Campus Life &amp; Verified Moments • Chandigarh University
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">Gharuan, Mohali Campus</span>
                  </div>

                  {/* Compact, perfectly proportioned dual campus photo grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl sm:max-w-3xl mx-auto w-full pt-2">
                    {/* Photo 1: Standing Campus Milestone (Compact uncropped photo) */}
                    <div className="group rounded-2xl overflow-hidden border border-white/[0.12] bg-zinc-950/80 hover:border-[#E5C378]/40 transition-all duration-300 shadow-xl flex flex-col w-full max-w-sm mx-auto">
                      <div className="relative w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
                        <img
                          src={edu.photo}
                          alt="Chandigarh University Standing Portrait"
                          className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                        <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left">
                          <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono bg-black/75 backdrop-blur-md text-[#E5C378] border border-white/10 mb-1 font-bold">
                            Academic Milestone
                          </span>
                          <p className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-md">
                            Chandigarh University Campus
                          </p>
                          <p className="text-xs text-zinc-300 mt-0.5">
                            B.E. Computer Science &amp; Engineering (LEET 2023–2026)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Photo 2: Sitting Campus Portrait (Compact uncropped photo) */}
                    {edu.sittingPhoto && (
                      <div className="group rounded-2xl overflow-hidden border border-white/[0.12] bg-zinc-950/80 hover:border-[#E5C378]/40 transition-all duration-300 shadow-xl flex flex-col w-full max-w-sm mx-auto">
                        <div className="relative w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
                          <img
                            src={edu.sittingPhoto}
                            alt="Chandigarh University Sitting Portrait"
                            className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                          <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left">
                            <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono bg-black/75 backdrop-blur-md text-[#E5C378] border border-white/10 font-bold">
                              Student Life
                            </span>
                            <p className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-md">
                              North Campus Grounds
                            </p>
                            <p className="text-xs text-zinc-300 mt-0.5">
                              Campus grounds, Gharuan, Mohali
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

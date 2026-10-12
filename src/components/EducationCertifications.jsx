import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 relative border-t border-white/[0.06] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Rigor &amp; LEET Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Verified Certifications
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mt-2 font-normal">
            The complete academic journey from CBSE Class 10 to AIET Diploma in Odisha, Lateral Entry (LEET) into Chandigarh University, and verified credentials across distributed cloud systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Education Narrative Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/[0.06] pb-3">
              <span>Academic Timeline &amp; Lateral Entry</span>
            </h3>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="glass-panel p-6 rounded-2xl space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-[#E5C378]">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-start sm:items-end gap-1 text-xs font-mono text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#E5C378]" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-600" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  {/* Grades & Academic Performance */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#E5C378]/15 text-[#E5C378] border border-[#E5C378]/30">
                      {edu.grade}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                      {edu.rankNote}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    <strong className="text-zinc-200">Curriculum &amp; Systems: </strong>
                    {edu.focus}
                  </p>

                  {/* College Campus Photo */}
                  {edu.photo && (
                    <div className="pt-3 border-t border-white/[0.06]">
                      <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-black/60 flex flex-col sm:flex-row items-center gap-4 p-3.5">
                        <div className="w-full sm:w-36 h-48 rounded-lg overflow-hidden shrink-0 bg-black flex items-center justify-center">
                          <img
                            src={edu.photo}
                            alt="Jitendra Kumar Verma at Chandigarh University"
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <p className="text-xs font-bold text-white">
                            Campus Milestone (Chandigarh University)
                          </p>
                          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                            {edu.photoCaption}
                          </p>
                          <span className="inline-block text-[10px] font-mono text-[#E5C378]">
                            Verified Academic Archive
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>

          {/* Certifications Roster (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/[0.06] pb-3">
              <Award className="w-5 h-5 text-[#E5C378]" />
              <span>Completed Certifications</span>
            </h3>

            <div className="space-y-3">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.name}
                  className="glass-card p-4 rounded-xl space-y-1.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-sm font-semibold text-white">
                      {cert.name}
                    </h5>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-[#E5C378] shrink-0 border border-white/[0.06]">
                      {cert.category}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-zinc-500">
                    Issuer: <span className="text-zinc-300">{cert.issuer}</span>
                  </p>

                  <p className="text-xs text-zinc-400 pt-1 leading-relaxed font-normal">
                    {cert.highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-zinc-500">
              Note: All certifications listed correspond directly to course completions across IIT NPTEL, Coursera, NITTTR &amp; AWS specialized tracks.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

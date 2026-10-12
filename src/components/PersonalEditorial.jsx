import React from 'react';
import { Compass, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
import { BEYOND_CODE_GALLERY, PERSONAL_INFO } from '../data/portfolioData';

export default function PersonalEditorial() {
  return (
    <section id="beyond-code" className="py-24 relative bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Instagram Hook */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono">
              <Compass className="w-3.5 h-3.5" />
              <span>Beyond The Code</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Clear Horizons &amp; Mountain Roads
            </h2>
            <p className="text-base text-zinc-400 max-w-2xl leading-relaxed">
              Jab continuous coding aur deep architecture ke baad screen se door hona hota hai, tab mind fresh karne ke liye motorcycle rides aur mountain exploration meri go-to escape hain.
            </p>
          </div>

          {/* Prominent Instagram Callout Pill */}
          <div>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all group shadow-xl"
            >
              <InstagramIcon className="w-5 h-5" />
              <div className="text-left">
                <span className="block text-xs font-semibold text-white group-hover:text-[#E5C378] transition-colors">
                  You can find me on Instagram
                </span>
                <span className="block text-[11px] font-mono text-zinc-500">
                  when I’m not writing code ▹
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Gallery Grid - Mirror selfie is FIRST, zero cropping, authentic photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BEYOND_CODE_GALLERY.map((item) => (
            <div
              key={item.id}
              className="glass-panel group rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Photo Frame - Natural contain, ZERO CROPPING */}
              <div className="relative w-full bg-black/80 min-h-[300px] flex items-center justify-center p-3">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto max-h-[400px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-500 filter contrast-[1.02]"
                  loading="lazy"
                />

                {/* Subtle Tag Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/[0.08] text-[11px] font-mono text-zinc-200">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-5 border-t border-white/[0.06] flex-1 flex flex-col justify-between space-y-3 bg-white/[0.01]">
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#E5C378] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                  <span>Authentic moment</span>
                  <span className="text-[#E5C378]">Jitendra Kumar Verma</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Reflection Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E5C378] animate-pulse" />
            <span className="leading-relaxed">
              "Solo rides across twisting mountain roads build patience, instinctive reflexes, and a clear mind — essential traits for architecting complex software systems."
            </span>
          </div>
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-[#E5C378] transition-colors"
          >
            <span>@jv_jitendra</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

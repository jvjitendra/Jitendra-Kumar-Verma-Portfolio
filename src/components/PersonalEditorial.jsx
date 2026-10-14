import React from 'react';
import { Compass, ArrowUpRight, MapPin } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
import { TRAVEL_GALLERY_ALL, PERSONAL_INFO } from '../data/portfolioData';

export default function PersonalEditorial() {
  return (
    <section id="beyond-code" className="py-24 relative bg-black border-t border-white/[0.08]">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header with English Story & Instagram Hook */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono">
              <Compass className="w-3.5 h-3.5" />
              <span>Beyond The Code</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Mountain Roads &amp; Clear Horizons
            </h2>
            <p className="text-sm sm:text-base text-zinc-200 w-full leading-relaxed text-justify">
              When I'm away from the terminal, motorcycle journeys across mountain passes, high ridges, and open highways keep my mind sharp, patient, and reset.
            </p>
          </div>

          {/* Prominent Instagram Callout Pill */}
          <div>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-pink-500/40 transition-all group shadow-xl hover:scale-105"
            >
              <InstagramIcon className="w-5 h-5" />
              <div className="text-left">
                <span className="block text-xs font-bold text-white group-hover:text-pink-400 transition-colors">
                  You can find me on Instagram
                </span>
                <span className="block text-[11px] font-mono text-zinc-400">
                  when I'm not writing code ▹
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Gallery Grid - Mirror selfie is Card #1, All 9 uncropped genuine photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAVEL_GALLERY_ALL.map((item) => (
            <div
              key={item.id}
              className="glass-panel group rounded-2xl overflow-hidden transition-all duration-300 flex flex-col hover:border-[#E5C378]/50"
            >
              {/* Photo Frame - Strict Uniform Height so ALL headings align on the exact same line */}
              <div className="relative w-full h-[320px] sm:h-[350px] bg-black/95 flex items-center justify-center p-3.5 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500 filter contrast-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Caption Footer - Headings perfectly aligned across all cards */}
              <div className="p-5 border-t border-white/[0.08] flex-1 flex flex-col justify-between space-y-3.5 bg-white/[0.02]">
                <div>
                  {/* Clean Location Badge Below The Photo */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.12] text-xs font-mono font-medium text-[#E5C378] mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E5C378] shrink-0" />
                    <span className="truncate">{item.tag}</span>
                  </div>

                  {/* Perfectly Aligned Heading on the exact same line */}
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E5C378] transition-colors tracking-tight line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#F1F5F9] mt-2 leading-relaxed font-normal min-h-[44px] line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                {/* Card Footer with Verified Instagram Feed Link */}
                <div className="pt-3 border-t border-white/[0.08] text-xs font-mono text-zinc-300 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                    <span>Imported via Instagram</span>
                  </div>
                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-pink-400 hover:text-pink-300 font-bold transition-colors group/link"
                    aria-label="Instagram profile @jv_jitendra"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-400 group-hover/link:scale-110 transition-transform" />
                    <span>@jv_jitendra</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-pink-400/80 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Luxury Full-Width Philosophy Banner - Zero Dead Space */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col lg:flex-row items-center justify-between gap-6 text-xs font-mono w-full shadow-2xl">
          <div className="flex items-start sm:items-center gap-3.5 flex-1 w-full">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5C378] animate-pulse shrink-0 mt-1 sm:mt-0" />
            <p className="leading-relaxed text-white text-sm sm:text-base font-medium w-full text-justify">
              "Solo motorcycle rides across twisting mountain roads build patience, instinctive reflexes, and a clear mind — essential traits for architecting complex software systems."
            </p>
          </div>
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-pink-500/10 border border-white/[0.1] hover:border-pink-500/40 text-zinc-200 hover:text-pink-400 font-bold transition-all whitespace-nowrap shrink-0 group text-xs sm:text-sm"
            aria-label="Instagram handle @jv_jitendra"
          >
            <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
            <span>@jv_jitendra</span>
            <ArrowUpRight className="w-4 h-4 text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Milestone, ArrowRight } from 'lucide-react';
import { JOURNEY_NODES } from '../data/portfolioData';

export default function EngineeringJourney() {
  return (
    <section id="journey" className="py-24 relative bg-black border-t border-white/[0.06]">
      
      {/* Subtle Warm Gradient Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E5C378]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Continuous Light-Flow Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Engineering Journey
          </h2>
          <p className="text-base text-zinc-400 mt-3 font-normal">
            From academic schooling in Jharkhand (Classes 6–10) to foundational diploma engineering at AIET Odisha, Lateral Entry (LEET) into Chandigarh University, and building autonomous systems.
          </p>
        </div>

        {/* Node -> Edge -> Node Light-Flow Timeline */}
        <div className="relative">
          
          {/* Continuous Glowing Edge Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#E5C378]/50 to-transparent z-0 shadow-[0_0_12px_rgba(229,195,120,0.3)]" />

          {/* Continuous Vertical Edge Line (Mobile/Tablet) */}
          <div className="lg:hidden absolute top-6 bottom-6 left-6 w-0.5 bg-gradient-to-b from-transparent via-[#E5C378]/50 to-transparent z-0" />

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
            {JOURNEY_NODES.map((node, index) => (
              <div
                key={node.id}
                className="relative pl-14 lg:pl-0 flex flex-col group"
              >
                {/* Node Orb Marker */}
                <div className="absolute left-3 lg:left-1/2 lg:-translate-x-1/2 top-1.5 lg:top-[-26px] z-20">
                  <div className="w-6 h-6 rounded-full bg-black border-2 border-[#E5C378] flex items-center justify-center shadow-[0_0_15px_rgba(229,195,120,0.5)] group-hover:scale-125 transition-transform duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#E5C378] group-hover:bg-white animate-pulse" />
                  </div>
                </div>

                {/* Node Card - Sleek Frosted Glass */}
                <div className="glass-panel p-6 rounded-2xl transition-all duration-300 space-y-3 group-hover:translate-y-[-3px]">
                  
                  {/* Phase & Badge */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#E5C378] font-semibold">
                      {node.phase}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                      {node.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {node.title}
                  </h3>

                  <p className="text-xs font-mono text-zinc-500">
                    {node.period}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1 font-normal">
                    {node.summary}
                  </p>

                  {/* Flow Arrow Motif */}
                  <div className="pt-2 flex items-center gap-1 text-[11px] font-mono text-zinc-500 group-hover:text-[#E5C378] transition-colors">
                    <span>Milestone 0{index + 1}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

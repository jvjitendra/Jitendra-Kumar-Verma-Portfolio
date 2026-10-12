import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t border-white/[0.06] bg-black py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Identity & Direct Connection (6 Cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center font-mono font-bold text-sm text-[#E5C378]">
                JV
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Jitendra Kumar Verma
              </span>
            </div>

            <p className="text-sm text-zinc-400 max-w-md leading-relaxed font-normal">
              Software Engineer &amp; Product Builder focused on deterministic developer tools, AST parsing, structured agent pipelines, and high-concurrency systems.
            </p>

            <div className="pt-2">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
                Direct Contact
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 text-base font-mono font-semibold text-[#E5C378] hover:underline"
              >
                <Mail className="w-4 h-4 text-[#E5C378]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Social Profiles with Authentic Official Brand Colors (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Connected Profiles
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.1] transition-all">
                    <GithubIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0A66C2]/10 border border-[#0A66C2]/30 flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-all">
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  </div>
                  <span className="font-medium text-[#0A66C2]">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/20 transition-all">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-pink-400">Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation (3 Cols) */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
                Navigation
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400">
                <a href="#projects" className="hover:text-white transition-colors py-0.5">Projects</a>
                <a href="#case-studies" className="hover:text-white transition-colors py-0.5">Case Studies</a>
                <a href="#skills" className="hover:text-white transition-colors py-0.5">Skills</a>
                <a href="#journey" className="hover:text-white transition-colors py-0.5">Journey</a>
                <a href="#education" className="hover:text-white transition-colors py-0.5">Education</a>
                <a href="#beyond-code" className="hover:text-white transition-colors py-0.5">Beyond Code</a>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#E5C378] transition-colors self-start mt-4"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Legal Stamp */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <p>
            © {new Date().getFullYear()} Jitendra Kumar Verma. Built with React &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-3">
            <span>Email: jvjitendra.work@gmail.com</span>
            <span>•</span>
            <span>Verified System Evidence</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

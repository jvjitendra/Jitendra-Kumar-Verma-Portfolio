import React, { useState } from 'react';
import { X, Mail, Check, ExternalLink, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-md rounded-2xl glass-panel bg-black/95 p-6 sm:p-8 border border-white/[0.12] shadow-2xl z-10 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Get in Touch
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Let’s discuss engineering opportunities, systems, or collaborations.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Email Copy Pod */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-[#E5C378]">
            Direct Email Address
          </label>
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-mono text-white">
            <span className="truncate selection:bg-[#E5C378]/30 font-medium">
              {PERSONAL_INFO.email}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E5C378] text-black font-semibold text-xs hover:bg-[#F0D08A] transition-all shrink-0 ml-2"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Direct Connect Grid */}
        <div className="space-y-2.5 pt-1">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Social Profiles &amp; Networks
          </p>
          <div className="grid grid-cols-1 gap-2.5">
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-[#0A66C2]/15 border border-white/[0.06] hover:border-[#0A66C2]/40 text-white transition-all group"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-5 h-5" />
                <div>
                  <p className="text-sm font-bold group-hover:text-white">LinkedIn Profile</p>
                  <p className="text-xs text-zinc-400">Professional background &amp; direct messaging</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white" />
            </a>

            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.2] text-white transition-all group"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-5 h-5 text-white" />
                <div>
                  <p className="text-sm font-bold">GitHub Repositories</p>
                  <p className="text-xs text-zinc-400">Explore source code &amp; developer commits</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white" />
            </a>

            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-pink-500/10 border border-white/[0.06] hover:border-pink-500/30 text-white transition-all group"
            >
              <div className="flex items-center gap-3">
                <InstagramIcon className="w-5 h-5" />
                <div>
                  <p className="text-sm font-bold">Instagram</p>
                  <p className="text-xs text-zinc-400">Personal moments &amp; life outside college</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

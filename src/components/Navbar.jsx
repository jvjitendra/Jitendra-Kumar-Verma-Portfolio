import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Beyond Code', href: '#beyond-code' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-xl border-b border-white/[0.06] py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Full Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Jitendra Kumar Verma Home"
          >
            <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center font-mono font-bold text-xs text-[#E5C378] group-hover:border-[#E5C378]/50 group-hover:scale-105 transition-all">
              JV
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-[#E5C378] transition-colors">
                Jitendra Kumar Verma
              </span>
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation - 4 clean links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-full px-3.5 py-1.5 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-zinc-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/[0.06] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="btn-primary inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-lg"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-6 transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white hover:text-[#E5C378] py-2 border-b border-white/[0.04]"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

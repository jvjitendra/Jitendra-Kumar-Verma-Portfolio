import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenContact }) {
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
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo / Full Name (Jitendra Kumar Verma) */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Jitendra Kumar Verma Home"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.12] flex items-center justify-center font-mono font-bold text-sm text-[#E5C378] group-hover:border-[#E5C378]/60 group-hover:scale-105 transition-all shadow-inner">
              JV
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-[#E5C378] transition-colors">
                Jitendra Kumar Verma
              </span>
              <span className="text-xs font-mono text-zinc-400 tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-full px-5 py-2 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/[0.08] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions with Authentic Brand Icons */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/[0.08] border border-transparent hover:border-white/[0.1] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-[18px] h-[18px] text-white" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-300 hover:text-[#0A66C2] hover:bg-white/[0.08] border border-transparent hover:border-white/[0.1] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-[18px] h-[18px] text-[#0A66C2]" />
            </a>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-300 hover:text-pink-400 hover:bg-white/[0.08] border border-transparent hover:border-white/[0.1] transition-all"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-[18px] h-[18px]" />
            </a>
            <button
              type="button"
              onClick={onOpenContact}
              className="btn-primary inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium px-4.5 py-2.5 ml-1"
            >
              Get in Touch
            </button>
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
        <div className="md:hidden bg-black/98 backdrop-blur-2xl border-b border-white/[0.1] px-6 py-6 transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white hover:text-[#E5C378] py-2 border-b border-white/[0.06]"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white"
                >
                  <GithubIcon className="w-5 h-5 text-white" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white"
                >
                  <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="btn-primary text-xs px-4 py-2"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState, useMemo } from 'react';
import { Archive, Search, ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function ProjectArchive({ onSelectProject }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'AI & Developer Tools',
    'AI & Intelligent Systems',
    'Full-Stack & Productivity',
    'Data Analytics',
    'Backend & Systems',
    'Academic Engineering',
    'Algorithms & Logic',
    'Networks & Infrastructure'
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.stack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat =
        selectedCategory === 'All' || p.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="archive" className="py-24 relative bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#E5C378] text-xs font-mono mb-3">
            <Archive className="w-3.5 h-3.5" />
            <span>Complete Engineering Ledger</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Project Archive
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mt-2 font-normal">
            Every project, systems experiment, network simulation, and academic software artifact organized by verified semester chronology.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search projects, technologies (e.g., FastAPI, C++, DAX)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E5C378]/50 transition-colors"
            />
          </div>

          {/* Category Dropdown / Scroll Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#E5C378] text-black font-bold shadow-md'
                    : 'bg-white/[0.02] border border-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Table / Responsive Matrix */}
        <div className="overflow-x-auto rounded-2xl glass-panel">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/[0.06] bg-white/[0.02] text-xs font-mono text-zinc-400">
                <th className="py-4 px-6 font-medium">Semester / Phase</th>
                <th className="py-4 px-6 font-medium">Project Name</th>
                <th className="py-4 px-6 font-medium hidden md:table-cell">Category</th>
                <th className="py-4 px-6 font-medium hidden lg:table-cell">Core Technologies</th>
                <th className="py-4 px-6 font-medium">Status</th>
                <th className="py-4 px-6 font-medium text-right">Links / Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04] text-sm">
              {filteredProjects.map((proj) => (
                <tr
                  key={proj.id}
                  className="hover:bg-white/[0.03] transition-colors group"
                >
                  {/* Semester / Year */}
                  <td className="py-4 px-6 font-mono text-xs text-[#E5C378]">
                    {proj.semester}
                  </td>

                  {/* Title & Tagline */}
                  <td className="py-4 px-6">
                    <button
                      type="button"
                      onClick={() => onSelectProject(proj)}
                      className="text-left group-hover:text-[#E5C378] transition-colors"
                    >
                      <span className="font-semibold text-white block">
                        {proj.title}
                      </span>
                      <span className="text-xs text-zinc-400 block line-clamp-1 max-w-sm">
                        {proj.tagline}
                      </span>
                    </button>
                  </td>

                  {/* Category */}
                  <td className="py-4 px-6 hidden md:table-cell text-xs font-mono text-zinc-400">
                    {proj.category}
                  </td>

                  {/* Stack */}
                  <td className="py-4 px-6 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {proj.stack.slice(0, 3).map((st) => (
                        <span
                          key={st}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-zinc-300"
                        >
                          {st}
                        </span>
                      ))}
                      {proj.stack.length > 3 && (
                        <span className="text-[10px] font-mono text-zinc-500 self-center">
                          +{proj.stack.length - 3}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-6">
                    <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.03] text-zinc-300 border border-white/[0.06]">
                      {proj.status}
                    </span>
                  </td>

                  {/* Links / Inspect */}
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                          title="View Live App"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {proj.repoUrl && (
                        <a
                          href={proj.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                          title="View Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => onSelectProject(proj)}
                        className="text-xs font-mono text-[#E5C378] hover:underline ml-2"
                      >
                        Inspect
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-zinc-500 font-mono text-sm">
            No projects matched the search criteria.
          </div>
        )}

      </div>
    </section>
  );
}

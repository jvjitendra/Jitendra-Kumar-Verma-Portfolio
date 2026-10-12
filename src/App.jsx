import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechnicalCaseStudies from './components/TechnicalCaseStudies';
import TechnicalSkills from './components/TechnicalSkills';
import EngineeringJourney from './components/EngineeringJourney';
import EducationCertifications from './components/EducationCertifications';
import ProjectArchive from './components/ProjectArchive';
import PersonalEditorial from './components/PersonalEditorial';
import Footer from './components/Footer';
import { PROJECTS_DATA } from './data/portfolioData';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(PROJECTS_DATA[0]);

  const handleSelectProject = (project) => {
    setSelectedCaseStudy(project);
    // Smooth scroll to case studies section
    const el = document.getElementById('case-studies');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080D18] text-[#F5F8FF] font-sans selection:bg-[#54D9FF]/20 selection:text-[#54D9FF]">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenCaseStudy={handleSelectProject}
      />

      {/* Main Experience Stream */}
      <main>
        {/* 1. Cinematic Hero with Genuine Front-facing Portrait */}
        <Hero onExploreWork={() => {}} />

        {/* 2. Flagship Featured Systems (DevPilot, Vaani, TaskFlow) */}
        <FeaturedProjects onSelectCaseStudy={handleSelectProject} />

        {/* 3. Deep Architectural Case Studies */}
        <TechnicalCaseStudies
          selectedProject={selectedCaseStudy}
          onSelectProject={setSelectedCaseStudy}
        />

        {/* 4. Evidence-based Technical Skills & Architecture Toolkit */}
        <TechnicalSkills />

        {/* 5. Continuous Node -> Edge -> Node Engineering Journey */}
        <EngineeringJourney />

        {/* 6. Education Progression & Verified Certifications */}
        <EducationCertifications />

        {/* 7. Comprehensive Filterable Project Archive */}
        <ProjectArchive onSelectProject={handleSelectProject} />

        {/* 8. Personal Interests, Adventure & Mountain Photography Gallery */}
        <PersonalEditorial />
      </main>

      {/* 9. Understated Engineering Footer */}
      <Footer />
    </div>
  );
}

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import PersonalEditorial from './components/PersonalEditorial';
import Footer from './components/Footer';
import AssistantBot from './components/AssistantBot';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E5C378]/25 selection:text-[#E5C378]">
      {/* Sleek Fixed Navbar */}
      <Navbar />

      {/* High-Signal Content Flow (5 focused sections) */}
      <main>
        {/* 1. Hero: Human hook, new formal CU sitting photo */}
        <Hero />

        {/* 2. Top 3 Flagship Projects: DevPilot, Vaani, TaskFlow */}
        <FeaturedProjects />

        {/* 3. Tech Stack: 4-column recruiter scan grid */}
        <TechnicalSkills />

        {/* 4. Education & Background */}
        <Education />

        {/* 5. Beyond The Code: Travel, motorcycle rides & Instagram hook */}
        <PersonalEditorial />
      </main>

      {/* 6. Clean Minimal Footer */}
      <Footer />

      {/* 7. Interactive Floating AI Assistant Bot */}
      <AssistantBot />
    </div>
  );
}

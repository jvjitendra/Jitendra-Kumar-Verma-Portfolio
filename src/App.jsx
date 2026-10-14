import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import PersonalEditorial from './components/PersonalEditorial';
import Footer from './components/Footer';
import AssistantBot from './components/AssistantBot';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#E5C378]/25 selection:text-[#E5C378]">
      {/* Sleek Fixed Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Experience Stream */}
      <main>
        {/* 1. Hero: Purani formal close portrait, frost white text, gold accents */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* 2. 5 High-Depth Flagship Projects: DevPilot, Vaani, TaskFlow, Flipkart, User Mgmt API */}
        <FeaturedProjects />

        {/* 3. Tech Stack: High-contrast 4-column cards with spring hover */}
        <TechnicalSkills />

        {/* 4. Education & Campus: Both standing & sitting campus photos embedded */}
        <Education />

        {/* 5. Beyond The Code: All 9 travel & bike photos (Mirror selfie first), strictly professional English */}
        <PersonalEditorial />
      </main>

      {/* 6. Clean Minimal Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* 7. Interactive Floating AI Assistant Bot with Fact Cross-Checking */}
      <AssistantBot />

      {/* 8. Interactive Contact Modal with 1-Click Copy & Direct Social Links */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

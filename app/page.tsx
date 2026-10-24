'use client';

import React, { useState } from 'react';
import { Project } from '@/data/portfolioData';
import Navbar from '@/components/Navbar';
import EditorialHero from '@/components/EditorialHero';
import HeroMosaic from '@/components/HeroMosaic';
import ShowreelSection from '@/components/ShowreelSection';
import ProjectGallery from '@/components/ProjectGallery';
import ProjectModal from '@/components/ProjectModal';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessTimeline from '@/components/ProcessTimeline';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isGlobalMuted, setIsGlobalMuted] = useState(true);

  const toggleGlobalMute = () => {
    setIsGlobalMuted((prev) => !prev);
  };

  const handleOpenReel = () => {
    const showreelEl = document.getElementById('showreel');
    if (showreelEl) {
      showreelEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#f5f3ef] flex flex-col film-grain selection:bg-amber-500 selection:text-black">
      
      {/* Top Floating Glass Navigation */}
      <Navbar
        isMuted={isGlobalMuted}
        onToggleMute={toggleGlobalMute}
      />

      <main className="flex-1 flex flex-col">
        {/* 1. Cinematic Editorial Hero Viewport */}
        <EditorialHero onOpenReel={handleOpenReel} />

        {/* 2. THE SIGNATURE 3x3 MOSAIC SHOWCASE (Reference Image Centerpiece) */}
        <HeroMosaic
          onSelectProject={(project) => setSelectedProject(project)}
          isMuted={isGlobalMuted}
        />

        {/* 3. Dedicated Director's Showreel Experience */}
        <ShowreelSection
          isGlobalMuted={isGlobalMuted}
          onToggleGlobalMute={toggleGlobalMute}
        />

        {/* 4. Selected Projects Editorial Gallery */}
        <ProjectGallery
          onSelectProject={(project) => setSelectedProject(project)}
          isGlobalMuted={isGlobalMuted}
        />

        {/* 5. About the Editor: Behind Every Cut, There's a Reason */}
        <AboutSection />

        {/* 6. Post-Production Services & Deliverables */}
        <ServicesSection />

        {/* 7. Creative Process 4-Step Sequence */}
        <ProcessTimeline />

        {/* 8. Director & Producer Endorsements */}
        <TestimonialsSection />

        {/* 9. Contact & Project Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Screen Interactive Project Detail & Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNavigate={(next) => setSelectedProject(next)}
        />
      )}

    </div>
  );
}

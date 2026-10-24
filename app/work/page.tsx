'use client';

import React, { useState } from 'react';
import { Project } from '@/data/portfolioData';
import Navbar from '@/components/Navbar';
import ShowreelSection from '@/components/ShowreelSection';
import ProjectGallery from '@/components/ProjectGallery';
import ProjectModal from '@/components/ProjectModal';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isGlobalMuted, setIsGlobalMuted] = useState(true);

  const toggleGlobalMute = () => {
    setIsGlobalMuted((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#f5f3ef] flex flex-col film-grain selection:bg-amber-500 selection:text-black">
      
      {/* Navigation */}
      <Navbar
        isMuted={isGlobalMuted}
        onToggleMute={toggleGlobalMute}
      />

      <main className="flex-1 flex flex-col pt-24 sm:pt-28">
        
        {/* Page Header Header */}
        <section className="w-full border-b border-zinc-900 bg-gradient-to-b from-zinc-950 to-black py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                COMPLETE POST-PRODUCTION ARCHIVE
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
              SELECTED WORKS &amp; REELS
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Explore master cuts spanning commercial brand films, social-first visualizers, high-energy music videos, and festival short documentaries.
            </p>
          </div>
        </section>

        {/* 1. Flagship Showreel Section */}
        <ShowreelSection
          isGlobalMuted={isGlobalMuted}
          onToggleGlobalMute={toggleGlobalMute}
        />

        {/* 2. Full Project Gallery with Filters */}
        <ProjectGallery
          onSelectProject={(project) => setSelectedProject(project)}
          isGlobalMuted={isGlobalMuted}
        />

        {/* Bottom CTA Hook */}
        <section className="w-full py-16 bg-zinc-950 border-t border-zinc-900 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Ready to create something unforgettable?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 font-mono">
              Accepting select commercial and narrative projects for 2025/2026.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-black font-bold text-sm uppercase hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
              >
                <span>Book a Cut</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
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

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Project } from '@/data/portfolioData';
import Navbar from '@/components/Navbar';
import EditorialHero from '@/components/EditorialHero';
import HeroMosaic from '@/components/HeroMosaic';
import BrandStatement from '@/components/BrandStatement';
import ProjectModal from '@/components/ProjectModal';
import Footer from '@/components/Footer';
import { ArrowRight, Film, User, Layers, Mail } from 'lucide-react';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isGlobalMuted, setIsGlobalMuted] = useState(true);

  const toggleGlobalMute = () => {
    setIsGlobalMuted((prev) => !prev);
  };

  const handleOpenReel = () => {
    const showcaseEl = document.getElementById('showcase');
    if (showcaseEl) {
      showcaseEl.scrollIntoView({ behavior: 'smooth' });
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

        {/* 2. THE SIGNATURE 3x3 MOSAIC SHOWCASE CENTERPIECE */}
        <HeroMosaic
          onSelectProject={(project) => setSelectedProject(project)}
          isMuted={isGlobalMuted}
        />

        {/* Quick Link into Complete Portfolio Archive */}
        <div className="w-full bg-black py-4 flex items-center justify-center border-b border-zinc-900">
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-950 border border-zinc-800 hover:border-amber-500/60 text-xs sm:text-sm font-mono tracking-wider text-zinc-300 hover:text-white transition-all shadow-xl"
          >
            <Film className="w-4 h-4 text-amber-400" />
            <span>WANT TO SEE THE FULL SHOWREEL &amp; CASE STUDIES?</span>
            <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
              <span>EXPLORE /WORK</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* 3. Standout Social-First Brand Statement Banner */}
        <BrandStatement onCtaClick={() => window.location.href = '/contact'} />

        {/* 4. Quick Route Nav Cards Section (Fast Discovery without scrolling) */}
        <section className="w-full py-16 sm:py-20 bg-[#060606] border-b border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                DISCOVER THE SUITE
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
                DEEP-DIVE BY CATEGORY
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: /work */}
              <Link
                href="/work"
                className="group p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-amber-500/50 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors mb-5">
                    <Film className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black text-white uppercase group-hover:text-amber-400 transition-colors">
                    FULL WORK ARCHIVE
                  </h4>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-sans">
                    Director&apos;s Showreel, commercial campaigns, music videos, and festival documentary cutdowns.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-amber-400 font-bold pt-4 border-t border-zinc-900">
                  <span>BROWSE PROJECTS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card 2: /about */}
              <Link
                href="/about"
                className="group p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-pink-500/50 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:bg-[#e92b7b] group-hover:text-white transition-colors mb-5">
                    <User className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black text-white uppercase group-hover:text-pink-400 transition-colors">
                    ABOUT THE EDITOR
                  </h4>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-sans">
                    Editing philosophy, technical gear stack (DaVinci, Premiere, After Effects), and client testimonials.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-pink-400 font-bold pt-4 border-t border-zinc-900">
                  <span>MEET MAHESH</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card 3: /services */}
              <Link
                href="/services"
                className="group p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-[#ccff00]/50 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] group-hover:bg-[#ccff00] group-hover:text-black transition-colors mb-5">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black text-white uppercase group-hover:text-[#ccff00] transition-colors">
                    SERVICES &amp; WORKFLOW
                  </h4>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-sans">
                    Deliverables, turnaround timelines, multi-aspect export standards, and our 4-step pipeline.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#ccff00] font-bold pt-4 border-t border-zinc-900">
                  <span>VIEW DELIVERABLES</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* 5. Clean Quick-Contact Teaser (Takes users straight to /contact or email/whatsapp) */}
        <section className="w-full py-16 sm:py-20 bg-black text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block mb-3 animate-pulse" />
            <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              BOOKING AVAILABILITY: ACTIVE
            </div>
            <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2">
              LET&apos;S BRING YOUR FOOTAGE TO LIFE
            </h3>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto font-normal">
              Have a commercial brief, music video track, or social content campaign? Reach out for a fast turnaround quote.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:scale-102 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>START A PROJECT INQUIRY</span>
              </Link>
            </div>
          </div>
        </section>

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

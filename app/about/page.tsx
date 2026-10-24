'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Film } from 'lucide-react';

export default function AboutPage() {
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
        
        {/* Page Header */}
        <section className="w-full border-b border-zinc-900 bg-gradient-to-b from-zinc-950 to-black py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                BIOGRAPHY &amp; POST-PRODUCTION PHILOSOPHY
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
              BEHIND EVERY CUT, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                THERE IS A REASON.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Video Editor &amp; Visual Storyteller crafting rhythm, tension, and sound design that make audiences feel every beat.
            </p>
          </div>
        </section>

        {/* 1. Complete About & Gear Section */}
        <AboutSection />

        {/* 2. Director & Producer Endorsements */}
        <TestimonialsSection />

        {/* Bottom CTA Hook */}
        <section className="w-full py-16 bg-zinc-950 border-t border-zinc-900 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Ready to collaborate on your next story?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 font-mono">
              Available for select commercial campaigns and narrative edits.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-black font-bold text-sm uppercase hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold text-sm uppercase hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <span>View Works</span>
                <Film className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

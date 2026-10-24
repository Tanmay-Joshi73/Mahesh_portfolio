'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import ProcessTimeline from '@/components/ProcessTimeline';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
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
                DELIVERABLES, CAPABILITIES &amp; TURNAROUND
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
              POST-PRODUCTION SERVICES &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                CREATIVE WORKFLOW
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              From raw footage ingest to high-impact sound design, DaVinci ACES color grading, and ProRes 422HQ master delivery.
            </p>
          </div>
        </section>

        {/* 1. Core Services & Deliverables */}
        <ServicesSection />

        {/* 2. The 4-Step Editorial Pipeline */}
        <ProcessTimeline />

        {/* Bottom CTA Hook */}
        <section className="w-full py-16 bg-zinc-950 border-t border-zinc-900 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Have a timeline or brief ready?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 font-mono">
              Inquire about project availability, deliverables, and customized quote packages.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-black font-bold text-sm uppercase hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
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

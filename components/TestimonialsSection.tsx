'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/portfolioData';
import { Quote, Star, Film, Award } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>DIRECTOR & PRODUCER ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            COLLABORATION & TRUST
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            What directors, agency leads, and creative producers say about collaborating in the post-production suite.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex flex-col justify-between shadow-xl relative group hover:border-amber-500/40 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-500/30 mb-4 group-hover:text-amber-500 transition-colors" />
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col gap-1">
                <div className="font-extrabold text-white text-base uppercase">
                  {t.author}
                </div>
                <div className="text-xs text-amber-400 font-mono">
                  {t.role} • {t.company}
                </div>
                <div className="text-[11px] font-mono text-zinc-500 mt-1 flex items-center gap-1.5">
                  <Film className="w-3 h-3 text-zinc-600" />
                  <span>Project: {t.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Brands Bar */}
        <div className="mt-16 pt-10 border-t border-zinc-900 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-zinc-500 text-sm font-mono uppercase tracking-widest">
          <span className="hover:text-white transition-colors">VOLVO CARS</span>
          <span className="hover:text-white transition-colors">STYLE UNION</span>
          <span className="hover:text-white transition-colors">UNIVERSAL MUSIC</span>
          <span className="hover:text-white transition-colors">SUNBURN FESTIVAL</span>
          <span className="hover:text-white transition-colors">SSE SPORTS</span>
          <span className="hover:text-white transition-colors">INDEPENDENT CINEMA</span>
        </div>

      </div>
    </section>
  );
}

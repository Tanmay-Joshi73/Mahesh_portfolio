'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, Zap, Flame, Film, CheckCircle2 } from 'lucide-react';

interface BrandStatementProps {
  onCtaClick?: () => void;
}

export default function BrandStatement({ onCtaClick }: BrandStatementProps) {
  // Preset taglines tailored specifically for an ambitious, agile, small-scale brand
  const presets = [
    {
      id: 'rising',
      tagline1: 'Creating',
      badge1: 'social-first',
      tagline2: 'videos for the',
      badge2: 'next-gen',
      connector: 'of',
      badge3: 'rising brands',
      subtitle: 'Fast-moving, high-retention video editing built to help ambitious brands and creators cut through the algorithmic noise.',
    },
    {
      id: 'ambitious',
      tagline1: 'Crafting',
      badge1: 'scroll-stopping',
      tagline2: 'edits for',
      badge2: 'ambitious',
      connector: '&',
      badge3: 'bold creators',
      subtitle: 'Zero agency fluff, 100% focused craft. Direct 1-on-1 collaboration that turns raw clips into viral retention.',
    },
    {
      id: 'digital',
      tagline1: 'Engineering',
      badge1: 'high-impact',
      tagline2: 'visuals for',
      badge2: 'modern',
      connector: '&',
      badge3: 'growing brands',
      subtitle: 'Cinematic color grading, explosive sound design, and TikTok/Reels pacing tailored for maximum conversion.',
    },
  ];

  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const activePreset = presets[activePresetIndex];

  const handleScrollToContact = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 md:py-32 bg-black text-white overflow-hidden border-y border-zinc-900">
      
      {/* Ambient Cyber Neon Backlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#2b26fe]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#e92b7b]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] sm:w-[400px] h-[200px] bg-[#ccff00]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Grid Film Texture Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

        {/* Small Scale / Boutique Studio Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono tracking-wider text-zinc-300 mb-8 backdrop-blur-md shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
          <span className="text-zinc-400">BOUTIQUE POST-PRODUCTION</span>
          <span className="text-zinc-600">•</span>
          <span className="text-[#ccff00] font-bold">AGILE &amp; INDEPENDENT</span>
        </div>

        {/* MAIN SIGNATURE TYPOGRAPHIC STATEMENT (Exact match to reference aesthetic) */}
        <div className="select-none transition-all duration-300">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.3] sm:leading-[1.25] md:leading-[1.2]">
            
            {/* Line 1: Creating [social-first] videos for the */}
            <span className="block mb-2 sm:mb-3">
              <span>{activePreset.tagline1} </span>
              <span className="relative inline-block mx-1 sm:mx-2 px-3 sm:px-5 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-[#2b26fe] text-white shadow-[0_0_35px_rgba(43,38,254,0.45)] hover:scale-105 hover:-rotate-1 transition-all duration-200 cursor-default">
                {activePreset.badge1}
              </span>
              <span> {activePreset.tagline2}</span>
            </span>

            {/* Line 2: [next-gen] of [rising brands] */}
            <span className="block">
              <span className="relative inline-block mx-1 sm:mx-2 px-3 sm:px-5 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-[#e92b7b] text-white shadow-[0_0_35px_rgba(233,43,123,0.45)] hover:scale-105 hover:rotate-1 transition-all duration-200 cursor-default">
                {activePreset.badge2}
              </span>
              <span> {activePreset.connector} </span>
              <span className="relative inline-block mx-1 sm:mx-2 px-3 sm:px-5 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-[#ccff00] text-black font-black shadow-[0_0_35px_rgba(204,255,0,0.45)] hover:scale-105 hover:-rotate-1 transition-all duration-200 cursor-default">
                {activePreset.badge3}
              </span>
            </span>

          </h2>
        </div>

        {/* Tailored Subtitle for Small Scale Brand */}
        <p className="mt-8 text-base sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {activePreset.subtitle}
        </p>

        {/* Value Pillars Badges (Why work with a boutique editor instead of a bloated agency) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-mono text-zinc-300">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800/80 shadow-md">
            <Zap className="w-3.5 h-3.5 text-[#ccff00]" />
            <span>48H Delivery Option</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800/80 shadow-md">
            <Flame className="w-3.5 h-3.5 text-[#e92b7b]" />
            <span>Hook-Driven Retention</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800/80 shadow-md">
            <Film className="w-3.5 h-3.5 text-[#2b26fe]" />
            <span>Cinema Grade in DaVinci</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800/80 shadow-md">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>1-on-1 Direct Access</span>
          </div>
        </div>

        {/* Interactive Tagline Preset Switcher (Lets the user test vibe variations) */}
        <div className="mt-10 pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center gap-4">
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
            VIBE VARIATIONS:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {presets.map((preset, idx) => (
              <button
                key={preset.id}
                onClick={() => setActivePresetIndex(idx)}
                className={`px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activePresetIndex === idx
                    ? 'bg-zinc-100 text-black font-bold shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {preset.badge3}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button
            onClick={handleScrollToContact}
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-bold text-sm sm:text-base tracking-wide uppercase hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-102 transition-all duration-300 cursor-pointer"
          >
            <span>Let&apos;s Build Your Next Cut</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}

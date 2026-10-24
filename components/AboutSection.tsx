'use client';

import React from 'react';
import { EDITOR_PROFILE } from '@/data/portfolioData';
import { Film, Award, CheckCircle, Sliders, Scissors, Music, Layers, Eye } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-20 sm:py-28 bg-black overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Subtitle & Main Headline */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
              CREATIVE PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
            &ldquo;BEHIND EVERY CUT, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              THERE&apos;S A REASON.&rdquo;
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Editing isn&apos;t simply stringing together pretty frames. It is the invisible architecture of emotion. It dictates when the viewer holds their breath, when they lean forward, and how they feel after the screen fades to black.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Portrait/Suite visual + Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Post-Production Suite Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-2 shadow-2xl group">
              
              {/* Cinematic Suite Canvas / Graphic Representation */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black p-6 flex flex-col justify-between group">
                
                {/* Authentic Editor Portrait Background with Film Grade */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/Content/IMG_6257.jpeg"
                    alt="Editor in the Suite"
                    className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-50 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
                </div>

                {/* Top Film Monitor Header */}
                <div className="relative z-10 flex items-center justify-between border-b border-zinc-700/60 pb-4 backdrop-blur-[2px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                    <span className="text-[11px] font-mono text-zinc-400 font-bold uppercase">
                      POST BAY 01 • LOS ANGELES
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-amber-400">
                    COLOR CALIBRATED
                  </span>
                </div>

                {/* Center Visual Motif: Dynamic Timeline Visualizer */}
                <div className="relative z-10 my-auto py-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300">
                    <span>V1: MASTER FOOTAGE (4K RAW)</span>
                    <span className="text-amber-400">24.00 FPS</span>
                  </div>
                  
                  {/* Track 1: Video */}
                  <div className="h-9 w-full bg-zinc-900/90 rounded flex overflow-hidden border border-zinc-700/80 p-0.5 gap-1 shadow-md">
                    <div className="w-[30%] bg-blue-900/80 rounded text-[9px] font-mono text-blue-200 flex items-center px-2">Take_04_Wide</div>
                    <div className="w-[45%] bg-amber-900/80 rounded text-[9px] font-mono text-amber-200 flex items-center px-2">Hero_Punch_CU</div>
                    <div className="w-[25%] bg-emerald-900/80 rounded text-[9px] font-mono text-emerald-200 flex items-center px-2">Reaction_B</div>
                  </div>

                  {/* Track 2: B-Roll & Titles */}
                  <div className="h-7 w-full bg-zinc-950/80 rounded flex overflow-hidden border border-zinc-800 p-0.5 gap-1">
                    <div className="w-[20%] bg-purple-950/90 rounded text-[8px] font-mono text-purple-300 flex items-center px-1.5">Title_Card</div>
                    <div className="w-[50%] bg-transparent" />
                    <div className="w-[30%] bg-purple-950/90 rounded text-[8px] font-mono text-purple-300 flex items-center px-1.5">Lower_Third</div>
                  </div>

                  {/* Track 3: Audio Dialogue */}
                  <div className="h-6 w-full bg-zinc-950/80 rounded flex items-center px-2 border border-zinc-800/80 justify-between">
                    <span className="text-[9px] font-mono text-emerald-400">A1: DX_LAV_CLEANUP</span>
                    <div className="flex items-center gap-0.5 h-3">
                      <span className="w-0.5 h-3 bg-emerald-400" />
                      <span className="w-0.5 h-2 bg-emerald-400" />
                      <span className="w-0.5 h-3 bg-emerald-400" />
                    </div>
                  </div>

                  {/* Track 4: Music & Sub-Bass Stems */}
                  <div className="h-6 w-full bg-zinc-950/80 rounded flex items-center px-2 border border-zinc-800/80 justify-between">
                    <span className="text-[9px] font-mono text-amber-400">A2: MX_STEMS_SUBBASS</span>
                    <div className="flex items-center gap-0.5 h-3">
                      <span className="w-0.5 h-2 bg-amber-400" />
                      <span className="w-0.5 h-4 bg-amber-400" />
                      <span className="w-0.5 h-1 bg-amber-400" />
                    </div>
                  </div>
                </div>

                {/* Bottom Signature Badge */}
                <div className="relative z-10 pt-4 border-t border-zinc-700/60 flex items-center justify-between text-xs font-mono">
                  <div className="text-white font-bold">{EDITOR_PROFILE.name}</div>
                  <div className="text-amber-400">LEAD EDITOR</div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Bio, Philosophy Pillars & Verified Stats */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
              <p>
                My background spans over eight years of commercial post-production, documentary storytelling, and music videos. I believe the greatest edits are born at the intersection of mathematical musicality and raw human instinct.
              </p>
              <p>
                Whether trimming two frames from a high-tension dialogue beat or choreographing speed ramps across a million-dollar automotive shoot, every cut exists to pull the viewer deeper into the story.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
                <Music className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-sm font-bold text-white uppercase">RHYTHM & SOUND</h4>
                <p className="mt-1 text-xs text-zinc-400 leading-normal">
                  Cuts timed to natural cadence, percussive beats, and invisible sound design.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
                <Scissors className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-sm font-bold text-white uppercase">INTENTIONAL PACING</h4>
                <p className="mt-1 text-xs text-zinc-400 leading-normal">
                  Balancing kinetic motion with intentional stillness that lets scenes breathe.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
                <Sliders className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-sm font-bold text-white uppercase">COLOR INTEGRITY</h4>
                <p className="mt-1 text-xs text-zinc-400 leading-normal">
                  ACES color management preserving natural skin tones and cinematic contrast.
                </p>
              </div>
            </div>

            {/* Verified Statistics Grid */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>VERIFIED METRICS</span>
                <span className="text-amber-400">UPDATED Q1 2026</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {EDITOR_PROFILE.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-zinc-400 uppercase mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Post-Production Toolkit Pills */}
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                POST-PRODUCTION SUITE TOOLKIT
              </div>
              <div className="flex flex-wrap gap-2">
                {EDITOR_PROFILE.tools.map((tool, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono"
                  >
                    <span className="text-white font-bold">{tool.name}</span>
                    <span className="text-zinc-500 text-[10px]">({tool.category})</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
